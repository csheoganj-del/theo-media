const http = require('http');
const fs = require('fs');
const path = require('path');

const DEFAULT_PORT = parseInt(process.env.PORT, 10) || 3000;
const ROOT_DIR = __dirname;

const MIME_TYPES = {
    '.html': 'text/html; charset=utf-8',
    '.css': 'text/css; charset=utf-8',
    '.js': 'application/javascript; charset=utf-8',
    '.json': 'application/json; charset=utf-8',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.webp': 'image/webp',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon',
    '.mp4': 'video/mp4',
    '.webm': 'video/webm',
    '.xml': 'application/xml; charset=utf-8',
    '.txt': 'text/plain; charset=utf-8',
    '.woff': 'font/woff',
    '.woff2': 'font/woff2',
    '.ttf': 'font/ttf'
};

const REDIRECTS = [
    { from: /^\/blog(\/.*)?$/, to: '/website-design' },
    { from: /^\/website-redesign\/?$/, to: '/website-design' },
    { from: /^\/landing-page-design\/?$/, to: '/website-design' },
    { from: /^\/products(\/.*)?$/, to: '/ecommerce-development' }
];

function resolveFilePath(reqPath) {
    let pathname = decodeURIComponent(reqPath);

    if (pathname === '/' || pathname === '') {
        return path.join(ROOT_DIR, 'index.html');
    }

    const relativePath = pathname.replace(/^\/+/, '');
    const absolutePath = path.join(ROOT_DIR, relativePath);

    if (!absolutePath.startsWith(ROOT_DIR)) {
        return null;
    }

    if (fs.existsSync(absolutePath) && fs.statSync(absolutePath).isFile()) {
        return absolutePath;
    }

    // Handle nested asset paths (e.g., /website-design/images/demos/... -> /images/demos/...)
    const staticMatch = pathname.match(/\/(images|videos|styles\.css|script\.js)(?:\/(.*))?$/);
    if (staticMatch) {
        const assetPath = staticMatch[2] 
            ? path.join(ROOT_DIR, staticMatch[1], staticMatch[2])
            : path.join(ROOT_DIR, staticMatch[1]);
        if (fs.existsSync(assetPath) && fs.statSync(assetPath).isFile()) {
            return assetPath;
        }
    }

    const htmlCandidate = absolutePath + '.html';
    if (fs.existsSync(htmlCandidate) && fs.statSync(htmlCandidate).isFile()) {
        return htmlCandidate;
    }

    if (fs.existsSync(absolutePath) && fs.statSync(absolutePath).isDirectory()) {
        const indexCandidate = path.join(absolutePath, 'index.html');
        if (fs.existsSync(indexCandidate)) {
            return indexCandidate;
        }
    }

    return null;
}

const server = http.createServer((req, res) => {
    const parsedUrl = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
    const pathname = parsedUrl.pathname || '/';

    for (const rule of REDIRECTS) {
        if (rule.from.test(pathname)) {
            res.writeHead(301, { 'Location': rule.to });
            res.end();
            console.log(`[301] ${req.method} ${pathname} -> ${rule.to}`);
            return;
        }
    }

    const filePath = resolveFilePath(pathname);

    if (!filePath) {
        res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(`<!DOCTYPE html><html><head><title>404 Not Found</title><style>body{font-family:system-ui,-apple-system,sans-serif;display:flex;align-items:center;justify-content:center;height:100vh;margin:0;background:#0d0d0d;color:#fff;text-align:center}a{color:#e6a817;text-decoration:none}</style></head><body><div><h1>404</h1><p>Page not found</p><p><a href="/">Return Home &rarr;</a></p></div></body></html>`);
        console.log(`[404] ${req.method} ${pathname}`);
        return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    res.writeHead(200, {
        'Content-Type': contentType,
        'X-Content-Type-Options': 'nosniff',
        'X-Frame-Options': 'DENY'
    });

    const stream = fs.createReadStream(filePath);
    stream.pipe(res);
    stream.on('error', (err) => {
        console.error(`Error streaming file ${filePath}:`, err);
        if (!res.headersSent) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Internal Server Error');
        }
    });

    console.log(`[200] ${req.method} ${pathname} (${path.relative(ROOT_DIR, filePath)})`);
});

function start(port) {
    server.listen(port, () => {
        console.log(`\n=================================================`);
        console.log(`  TheoMedia Local Server is live!`);
        console.log(`  Local URL:   http://localhost:${port}`);
        console.log(`  Network URL: http://127.0.0.1:${port}`);
        console.log(`  Clean URLs:  Enabled (/website-design, etc.)`);
        console.log(`=================================================\n`);
    });

    server.on('error', (err) => {
        if (err.code === 'EADDRINUSE') {
            console.log(`Port ${port} in use, trying port ${port + 1}...`);
            start(port + 1);
        } else {
            console.error('Server error:', err);
        }
    });
}

start(DEFAULT_PORT);
