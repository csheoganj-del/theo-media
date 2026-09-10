import os
import re

def process_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original = content
    
    # Remove "CONCEPT / DEMONSTRATION" string entirely
    content = re.sub(r'CONCEPT / DEMONSTRATION', '', content)
    
    # Remove separators left hanging
    content = re.sub(r'\{project\.sector\}\s*·\s*', '{project.sector}', content)
    content = re.sub(r'<span[^>]*>\s*</span>', '', content) # Empty spans
    
    # In projects.ts, remove status
    content = re.sub(r"status:\s*'[^']*',\n", "", content)
    content = re.sub(r"status:\s*'[^']*'\s*\|\s*'[^']*';\n", "", content)

    # Clean up "is a working concept website created by TheoMedia to show how we would approach a modern website for"
    content = re.sub(
        r'(<p>.*?)\s+is a working concept website created by TheoMedia to show how we would approach( a modern website)?( a premium ecommerce website)?( a boutique hotel, country inn, guest house or independent hospitality business)?\s*(.*?)</p>',
        r'\1 was created by TheoMedia as\2\3\4 \5.</p>',
        content
    )
    
    # Delete the disclaimer paragraphs
    content = re.sub(r'<p>It is not a real [^<]+ and it is not a commissioned client project\.</p>', '', content)
    content = re.sub(r'<p>It is not a commissioned client project\. There are no invented customers, fake reviews or made-up results\.</p>', '', content)
    content = re.sub(r'<p>There are no (invented|fake|made-up)[^<]* or (imaginary|pretend)[^<]*\.</p>', '', content)
    
    # Fix the case-studies/page.tsx intro
    content = re.sub(
        r'These are working concept projects showing how TheoMedia approaches different industries,',
        r'These are projects showing how TheoMedia approaches different industries,',
        content
    )
    
    if content != original:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Updated: {filepath}")

for root, _, files in os.walk('src'):
    for file in files:
        if file.endswith('.ts') or file.endswith('.tsx'):
            process_file(os.path.join(root, file))

