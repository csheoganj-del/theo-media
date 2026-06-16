import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Cpu, 
  Layers, 
  Database, 
  Shield, 
  Zap, 
  Volume2, 
  VolumeX, 
  ArrowUpRight, 
  MessageSquare,
  Globe,
  Lock,
  Server,
  Code2,
  Terminal,
  Activity,
  CheckCircle2
} from 'lucide-react';

// Types for stardust particles
interface ParticleData {
  x: number;
  y: number;
  z: number;
  baseX: number;
  baseY: number;
  baseZ: number;
  vx: number;
  vy: number;
  vz: number;
  id: number;
}

export default function App() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [currentChapter, setCurrentChapter] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Refs for audio system
  const audioContextRef = useRef<AudioContext | null>(null);
  const synthNodesRef = useRef<{
    oscA: OscillatorNode;
    oscB: OscillatorNode;
    oscC: OscillatorNode;
    filter: BiquadFilterNode;
    gain: GainNode;
  } | null>(null);

  // Refs for tracking target scroll progress and mouse position
  const targetScrollProgressRef = useRef(0);
  const currentScrollProgressRef = useRef(0);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  // Handle local mouse coordinates for spotlight grids
  const handleSpotlightMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  };

  // Scroll gesture hook to intercept wheel and swipe events for 6 chapters of evolution
  useEffect(() => {
    let lastWheelTime = 0;
    let touchStartY = 0;

    const handleWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) < 12) return;

      const now = Date.now();
      if (now - lastWheelTime < 1200) return; // Cooldown to let morph transitions finish

      if (e.deltaY > 0) {
        // Scroll Down -> Next Stage (0 to 5)
        if (currentChapter < 5) {
          lastWheelTime = now;
          setIsAnimating(true);
          setCurrentChapter((prev) => prev + 1);
          setTimeout(() => setIsAnimating(false), 1000);
        }
      } else {
        // Scroll Up -> Previous Stage
        if (currentChapter > 0) {
          lastWheelTime = now;
          setIsAnimating(true);
          setCurrentChapter((prev) => prev - 1);
          setTimeout(() => setIsAnimating(false), 1000);
        }
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      const now = Date.now();
      if (now - lastWheelTime < 1200) return;

      const touchEndY = e.changedTouches[0].clientY;
      const diffY = touchStartY - touchEndY;

      if (Math.abs(diffY) < 45) return;

      if (diffY > 0) {
        // Swipe Up -> Next Stage
        if (currentChapter < 5) {
          lastWheelTime = now;
          setIsAnimating(true);
          setCurrentChapter((prev) => prev + 1);
          setTimeout(() => setIsAnimating(false), 1000);
        }
      } else {
        // Swipe Down -> Previous Stage
        if (currentChapter > 0) {
          lastWheelTime = now;
          setIsAnimating(true);
          setCurrentChapter((prev) => prev - 1);
          setTimeout(() => setIsAnimating(false), 1000);
        }
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: true });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [currentChapter, isAnimating]);

  useEffect(() => {
    targetScrollProgressRef.current = currentChapter;
  }, [currentChapter]);

  // Mouse move effect for particle interactivity
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.targetX = (e.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.targetY = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Web Audio Synth Pad setup
  const toggleAudio = async () => {
    if (isMuted) {
      try {
        if (!audioContextRef.current) {
          const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
          audioContextRef.current = new AudioContextClass();
        }

        const ctx = audioContextRef.current;
        if (ctx.state === 'suspended') {
          await ctx.resume();
        }

        if (!synthNodesRef.current) {
          const oscA = ctx.createOscillator();
          const oscB = ctx.createOscillator();
          const oscC = ctx.createOscillator();

          oscA.type = 'triangle';
          oscA.frequency.setValueAtTime(55.0, ctx.currentTime);

          oscB.type = 'sine';
          oscB.frequency.setValueAtTime(55.35, ctx.currentTime);

          oscC.type = 'triangle';
          oscC.frequency.setValueAtTime(82.4, ctx.currentTime);

          const filter = ctx.createBiquadFilter();
          filter.type = 'lowpass';
          filter.frequency.setValueAtTime(115, ctx.currentTime);
          filter.Q.setValueAtTime(3.5, ctx.currentTime);

          const lfo = ctx.createOscillator();
          const lfoGain = ctx.createGain();
          lfo.type = 'sine';
          lfo.frequency.setValueAtTime(0.045, ctx.currentTime);
          lfoGain.gain.setValueAtTime(45, ctx.currentTime);

          lfo.connect(lfoGain);
          lfoGain.connect(filter.frequency);

          const gain = ctx.createGain();
          gain.gain.setValueAtTime(0, ctx.currentTime);

          oscA.connect(filter);
          oscB.connect(filter);
          oscC.connect(filter);
          filter.connect(gain);
          gain.connect(ctx.destination);

          oscA.start();
          oscB.start();
          oscC.start();
          lfo.start();

          synthNodesRef.current = { oscA, oscB, oscC, filter, gain };
        }

        synthNodesRef.current.gain.gain.linearRampToValueAtTime(0.14, ctx.currentTime + 1.5);
        setIsMuted(false);
      } catch (err) {
        console.error('Failed to initialize AudioContext', err);
      }
    } else {
      if (synthNodesRef.current && audioContextRef.current) {
        const ctx = audioContextRef.current;
        synthNodesRef.current.gain.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.8);
      }
      setIsMuted(true);
    }
  };

  useEffect(() => {
    return () => {
      if (synthNodesRef.current) {
        try {
          synthNodesRef.current.oscA.stop();
          synthNodesRef.current.oscB.stop();
          synthNodesRef.current.oscC.stop();
        } catch (e) {}
      }
      if (audioContextRef.current) {
        audioContextRef.current.close();
      }
    };
  }, []);

  // Three.js Particle Evolution Engine - 6 Morph Targets
  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.z = 8;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);

    const particleCount = 3500;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    // Evolution Stage targets
    const pos0Chaos: THREE.Vector3[] = [];   // Stage 1: Primordial Chaos
    const pos1Core: THREE.Vector3[] = [];    // Stage 2: Coalescing Core
    const pos2DNA: THREE.Vector3[] = [];     // Stage 3: DNA Double Helix
    const pos3Lattice: THREE.Vector3[] = []; // Stage 4: Network Lattice
    const pos4Tunnel: THREE.Vector3[] = [];  // Stage 5: Acceleration Slipstream

    for (let i = 0; i < particleCount; i++) {
      // --- Stage 0: Primordial Chaos (Origin) ---
      const radChaos = 4.0;
      pos0Chaos.push(new THREE.Vector3(
        (Math.random() - 0.5) * radChaos * 2.2,
        (Math.random() - 0.5) * radChaos * 2.2,
        (Math.random() - 0.5) * radChaos * 2.2
      ));

      // --- Stage 1: Gravitational Core (Ethos) ---
      const theta = Math.acos(1 - 2 * (i / particleCount));
      const phi = Math.sqrt(particleCount * Math.PI) * theta;
      const coreRadius = 2.4 + Math.sin(i * 1.5) * 0.08;
      pos1Core.push(new THREE.Vector3(
        coreRadius * Math.sin(theta) * Math.cos(phi),
        coreRadius * Math.sin(theta) * Math.sin(phi),
        coreRadius * Math.cos(theta)
      ));

      // --- Stage 2: DNA Double Helix (Blueprint) ---
      const strand = i % 2 === 0 ? 0 : 1;
      const helixAngle = (i / particleCount) * Math.PI * 18;
      const helixHeight = (i / particleCount) * 7.5 - 3.75;
      const helixRadius = 1.5;
      const strandOffset = strand * Math.PI;
      pos2DNA.push(new THREE.Vector3(
        helixRadius * Math.cos(helixAngle + strandOffset),
        helixHeight,
        helixRadius * Math.sin(helixAngle + strandOffset)
      ));

      // --- Stage 3: Network Lattice (Vanguard Stack) ---
      const gridRows = 50;
      const gridCols = 70;
      const row = i % gridRows;
      const col = Math.floor(i / gridRows);
      const gridX = (col - gridCols / 2) * 0.16;
      const gridZ = (row - gridRows / 2) * 0.16;
      const gridY = Math.sin(gridX * 0.4) * Math.cos(gridZ * 0.4) * 0.8;
      pos3Lattice.push(new THREE.Vector3(gridX, gridY, gridZ));

      // --- Stage 4: High-Speed Slipstream (Momentum) ---
      const channelId = i % 25;
      const channelAngle = (channelId / 25) * Math.PI * 2;
      const channelRadius = 2.0 + Math.sin(i * 0.1) * 0.4;
      const streamX = channelRadius * Math.cos(channelAngle);
      const streamY = channelRadius * Math.sin(channelAngle);
      const streamZ = ((i % 140) / 140) * 16 - 8;
      pos4Tunnel.push(new THREE.Vector3(streamX, streamY, streamZ));

      // Initialize stardust coordinates with chaos stage
      positions[i * 3] = pos0Chaos[i].x;
      positions[i * 3 + 1] = pos0Chaos[i].y;
      positions[i * 3 + 2] = pos0Chaos[i].z;

      // Assign Cobalt Blue, Liquid Gold, Purple colors
      const colorType = i % 3;
      if (colorType === 0) {
        colors[i * 3] = 1.0;
        colors[i * 3 + 1] = 0.87;
        colors[i * 3 + 2] = 0.0;
      } else if (colorType === 1) {
        colors[i * 3] = 0.0;
        colors[i * 3 + 1] = 0.32;
        colors[i * 3 + 2] = 1.0;
      } else {
        colors[i * 3] = 0.76;
        colors[i * 3 + 1] = 0.05;
        colors[i * 3 + 2] = 1.0;
      }
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const pMaterial = new THREE.PointsMaterial({
      size: 0.045,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    const particleSystem = new THREE.Points(geometry, pMaterial);
    scene.add(particleSystem);

    const particlesData: ParticleData[] = [];
    for (let i = 0; i < particleCount; i++) {
      particlesData.push({
        x: pos0Chaos[i].x,
        y: pos0Chaos[i].y,
        z: pos0Chaos[i].z,
        baseX: pos0Chaos[i].x,
        baseY: pos0Chaos[i].y,
        baseZ: pos0Chaos[i].z,
        vx: 0,
        vy: 0,
        vz: 0,
        id: i
      });
    }

    const clock = new THREE.Clock();
    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const time = clock.getElapsedTime();

      // Smooth stardust interpolation toward active chapter progress
      currentScrollProgressRef.current += (targetScrollProgressRef.current - currentScrollProgressRef.current) * 0.055;
      const progress = currentScrollProgressRef.current;

      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.08;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.08;

      const mouse3DX = mouseRef.current.x * 5.0;
      const mouse3DY = mouseRef.current.y * 3.5;

      const posAttribute = geometry.attributes.position;
      const posArray = posAttribute.array as Float32Array;

      for (let i = 0; i < particleCount; i++) {
        const p = particlesData[i];

        let targetX = 0;
        let targetY = 0;
        let targetZ = 0;

        // Interpolate coordinates dynamically representing visual evolution
        if (progress < 1.0) {
          // Stage 0 (Chaos) -> Stage 1 (Core)
          const t = progress;
          targetX = pos0Chaos[i].x * (1 - t) + pos1Core[i].x * t;
          targetY = pos0Chaos[i].y * (1 - t) + pos1Core[i].y * t;
          targetZ = pos0Chaos[i].z * (1 - t) + pos1Core[i].z * t;
        } else if (progress < 2.0) {
          // Stage 1 (Core) -> Stage 2 (DNA Helix)
          const t = progress - 1.0;
          targetX = pos1Core[i].x * (1 - t) + pos2DNA[i].x * t;
          targetY = pos1Core[i].y * (1 - t) + pos2DNA[i].y * t;
          targetZ = pos1Core[i].z * (1 - t) + pos2DNA[i].z * t;
        } else if (progress < 3.0) {
          // Stage 2 (DNA) -> Stage 3 (Lattice)
          const t = progress - 2.0;
          targetX = pos2DNA[i].x * (1 - t) + pos3Lattice[i].x * t;
          targetY = pos2DNA[i].y * (1 - t) + pos3Lattice[i].y * t;
          targetZ = pos2DNA[i].z * (1 - t) + pos3Lattice[i].z * t;
        } else if (progress < 4.0) {
          // Stage 3 (Lattice) -> Stage 4 (Tunnel)
          const t = progress - 3.0;
          targetX = pos3Lattice[i].x * (1 - t) + pos4Tunnel[i].x * t;
          targetY = pos3Lattice[i].y * (1 - t) + pos4Tunnel[i].y * t;
          targetZ = pos3Lattice[i].z * (1 - t) + pos4Tunnel[i].z * t;
        } else {
          // Stage 4 (Tunnel) -> Stage 5 (Dynamic Vortex orbiting cursor)
          const t = progress - 4.0;
          const vortexStrand = i % 2 === 0 ? 0 : 1;
          const vortexAngle = time * 2.5 + i * 0.05;
          const vortexRadius = 0.5 + (i / particleCount) * 1.8;
          const vortexX = mouse3DX + vortexRadius * Math.cos(vortexAngle + vortexStrand * Math.PI);
          const vortexY = mouse3DY + vortexRadius * Math.sin(vortexAngle + vortexStrand * Math.PI);
          const vortexZ = Math.sin(time * 0.8 + i * 0.1) * 0.5;

          targetX = pos4Tunnel[i].x * (1 - t) + vortexX * t;
          targetY = pos4Tunnel[i].y * (1 - t) + vortexY * t;
          targetZ = pos4Tunnel[i].z * (1 - t) + vortexZ * t;
        }

        // Noise wave dynamics (makes graphics look "alive" and breathable)
        let noiseScale = 0.15;
        let noiseSpeed = 0.6;
        if (progress < 1.0) {
          // raw chaos has high floating drift
          noiseScale = 0.35;
          noiseSpeed = 0.35;
        } else if (progress >= 1.0 && progress < 2.0) {
          // core is highly tight
          noiseScale = 0.05;
        } else if (progress >= 3.0 && progress < 4.0) {
          // lattice has micro-vibrating waves
          noiseScale = 0.07;
        } else if (progress >= 4.0 && progress < 5.0) {
          // streams have velocity streaking
          noiseScale = 0.22;
          noiseSpeed = 1.4;
        }

        const waveX = Math.sin(time * noiseSpeed + i * 0.08) * noiseScale * Math.cos(time * 0.4 + i * 0.03);
        const waveY = Math.cos(time * (noiseSpeed * 0.8) + i * 0.06) * noiseScale * Math.sin(time * 0.5 + i * 0.02);
        const waveZ = Math.sin(time * (noiseSpeed * 1.2) + i * 0.1) * noiseScale * 0.5;

        targetX += waveX;
        targetY += waveY;
        targetZ += waveZ;

        // Stage-specific rotational/movement physics
        if (progress < 1.0) {
          // Slow chaotic float
          const rotAngle = time * 0.02 + i * 0.00005;
          const cosR = Math.cos(rotAngle);
          const sinR = Math.sin(rotAngle);
          const originalX = targetX;
          const originalZ = targetZ;
          targetX = originalX * cosR - originalZ * sinR;
          targetZ = originalX * sinR + originalZ * cosR;
        } else if (progress >= 1.0 && progress < 2.0) {
          // Core orbit rotation
          const rotAngle = time * 0.08 + i * 0.0001;
          const cosR = Math.cos(rotAngle);
          const sinR = Math.sin(rotAngle);
          const originalX = targetX;
          const originalZ = targetZ;
          targetX = originalX * cosR - originalZ * sinR;
          targetZ = originalX * sinR + originalZ * cosR;
        } else if (progress >= 2.0 && progress < 3.0) {
          // DNA helix rotation
          const rotAngle = time * 0.15;
          const cosR = Math.cos(rotAngle);
          const sinR = Math.sin(rotAngle);
          const originalX = targetX;
          const originalZ = targetZ;
          targetX = originalX * cosR - originalZ * sinR;
          targetZ = originalX * sinR + originalZ * cosR;
        } else if (progress >= 4.0 && progress < 5.0) {
          // Linear forward velocity along Z
          const speedOffset = (time * 4.0 + i * 0.2) % 16.0 - 8.0;
          targetZ = speedOffset;
        }

        // Mouse displacement repulsion
        const dx = p.x - mouse3DX;
        const dy = p.y - mouse3DY;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 1.8) {
          const force = (1.8 - dist) * 0.06;
          targetX += (dx / dist) * force;
          targetY += (dy / dist) * force;
        }

        p.x += (targetX - p.x) * 0.075;
        p.y += (targetY - p.y) * 0.075;
        p.z += (targetZ - p.z) * 0.075;

        posArray[i * 3] = p.x;
        posArray[i * 3 + 1] = p.y;
        posArray[i * 3 + 2] = p.z;
      }

      posAttribute.needsUpdate = true;

      // Dynamic Camera transition path matching evolution states
      if (progress < 1.0) {
        camera.position.x = Math.sin(progress * 0.5) * 2.0;
        camera.position.y = 0;
        camera.position.z = 8.0 - progress * 1.5;
        camera.lookAt(0, 0, 0);
      } else if (progress < 2.0) {
        const t = progress - 1.0;
        camera.position.x = 2.0 - t * 2.0;
        camera.position.y = t * 2.5;
        camera.position.z = 6.5 - t * 0.5;
        camera.lookAt(0, 0, 0);
      } else if (progress < 3.0) {
        const t = progress - 2.0;
        camera.position.x = 0;
        camera.position.y = 2.5 - t * 2.5;
        camera.position.z = 6.0;
        camera.lookAt(0, 0, 0);
      } else if (progress < 4.0) {
        const t = progress - 3.0;
        camera.position.x = t * 2.0;
        camera.position.y = t * 1.5;
        camera.position.z = 6.0 - t * 0.5;
        camera.lookAt(0, 0, 0);
      } else {
        const t = progress - 4.0;
        camera.position.x = 2.0 - t * 2.0;
        camera.position.y = 1.5 - t * 1.5;
        camera.position.z = 5.5 + t * 2.0;
        camera.lookAt(0, 0, 0);
      }

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      geometry.dispose();
      pMaterial.dispose();
    };
  }, []);

  const chapters = [
    {
      num: '[ EVOLUTION STAGE I // SPARK ]',
      title: 'The Primordial Spark of',
      accentTitle: 'Digital Creation.',
      desc: 'TheoMedia bridges the gap between clean structural design and deep software engineering. We take chaotic, raw digital ideas and consolidate them into elegant codebases.'
    },
    {
      num: '[ EVOLUTION STAGE II // COALESCENCE ]',
      title: 'Consolidating into',
      accentTitle: 'Gravitational Logic.',
      desc: 'Digital platforms must be built with structural weight. Our products load instantly, run at 60FPS using hardware acceleration, bypass cookie dependencies, and enforce absolute runtime security.'
    },
    {
      num: '[ EVOLUTION STAGE III // BLUEPRINT ]',
      title: 'Structuring the genetic',
      accentTitle: 'Digital DNA.',
      desc: 'We replace opaque timelines with fixed-price execution models. Transparent, native React codebases paired with custom Stripe invoicing, built to handle complex transaction networks.'
    },
    {
      num: '[ EVOLUTION STAGE IV // LATTICE ]',
      title: 'Forging integrated',
      accentTitle: 'Technical Networks.',
      desc: 'We leverage enterprise-ready toolkits to build high-availability architectures. Fully typed compilation, regional caching networks, edge computing nodes, and SCA-compliant checkout integrations.'
    },
    {
      num: '[ EVOLUTION STAGE V // MOMENTUM ]',
      title: 'Accelerating through',
      accentTitle: 'Velocity Fields.',
      desc: 'An active track record serving enterprises across the United Kingdom, Ireland, France, Germany, and Switzerland. Full contractual intellectual property ownership guarantees your code remains your asset.'
    },
    {
      num: '[ EVOLUTION STAGE VI // CONVERGENCE ]',
      title: 'Converging into a single',
      accentTitle: 'Collaborative Singularity.',
      desc: 'Let’s construct your next digital platform. Get in touch directly on WhatsApp or drop us an email to coordinate your bespoke software audit. London & Dublin studios active.'
    }
  ];

  return (
    <div className="relative min-h-screen bg-[#020204] overflow-hidden">
      {/* Cinematic Grid Frame and Grain Noise Overlay */}
      <div className="viewport-frame" />
      <div className="grain-overlay" />

      {/* Floating Ambient Nebulas */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 ambient-nebula-1" />
        <div className="absolute inset-0 ambient-nebula-2" />
        <div className="absolute inset-0 ambient-nebula-3" />
      </div>

      {/* Fixed Fullscreen WebGL Canvas background */}
      <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none" />

      {/* Glassmorphic Sticky Header */}
      <header className="fixed top-0 left-0 w-full z-50 px-8 py-6 md:px-16 md:py-8 flex justify-between items-center pointer-events-none">
        <div className="flex items-center gap-3 pointer-events-auto select-none">
          <div className="w-7 h-7 rounded-full border border-blue-500/40 flex items-center justify-center">
            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse" />
          </div>
          <div>
            <h1 className="font-sans text-xs font-bold tracking-[0.25em] text-white">THEOMEDIA</h1>
            <p className="text-[7.5px] font-mono tracking-widest text-white/30 uppercase mt-0.5">Design & Engineering</p>
          </div>
        </div>

        {/* Audio controls & shortcuts */}
        <div className="flex items-center gap-5 pointer-events-auto">
          {/* WhatsApp Quick Link */}
          <a 
            href="https://wa.me/353852258004" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 group px-4.5 py-1.5 rounded-full border border-white/10 hover:border-blue-500/35 hover:bg-white/[0.02] transition-all duration-300 select-none"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
            <span className="font-mono text-[8.5px] font-semibold tracking-wider text-white/60 group-hover:text-white uppercase transition-colors">Direct WhatsApp</span>
          </a>

          {/* Web Audio Toggle button */}
          <button 
            onClick={toggleAudio}
            className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 hover:border-blue-500/40 hover:bg-white/[0.02] cursor-pointer transition-all duration-300"
            title="Toggle Ambient Audio Synth"
          >
            {isMuted ? (
              <VolumeX className="w-4 h-4 text-white/40" />
            ) : (
              <div className="flex items-end justify-center gap-[3px] h-3.5">
                <div className="wave-bar w-[2px] h-3.5 bg-blue-500 rounded-sm" />
                <div className="wave-bar w-[2px] h-2.5 bg-blue-500 rounded-sm" />
                <div className="wave-bar w-[2px] h-3 bg-blue-500 rounded-sm" />
                <div className="wave-bar w-[2px] h-1.5 bg-blue-500 rounded-sm" />
              </div>
            )}
          </button>
        </div>
      </header>

      {/* Floating Story Progress indicator (Sidebar) - Configured for 6 chapters of evolution */}
      <nav className="fixed right-8 md:right-16 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-6 select-none pointer-events-auto">
        {chapters.map((_, idx) => (
          <button 
            key={idx}
            onClick={() => {
              if (isAnimating) return;
              setIsAnimating(true);
              setCurrentChapter(idx);
              setTimeout(() => setIsAnimating(false), 1000);
            }}
            className="group flex items-center justify-end gap-3 cursor-pointer"
          >
            <span className="opacity-0 group-hover:opacity-100 font-mono text-[9px] text-blue-500 tracking-widest transition-opacity duration-300">
              STAGE 0{idx + 1}
            </span>
            <div className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ${
              currentChapter === idx 
                ? 'bg-blue-500 scale-150 shadow-[0_0_12px_rgba(0,82,255,0.7)]' 
                : 'bg-white/20 group-hover:bg-white/60'
            }`} />
          </button>
        ))}
      </nav>

      {/* FIXED STORYTELLING TEXT OVERLAY CONTAINER */}
      <div className="fixed inset-0 z-10 w-full h-full pointer-events-none flex items-center justify-center py-20 px-6 md:px-20">
        <AnimatePresence mode="wait">
          
          {/* Stage 1: Primordial Chaos (Origin) */}
          {currentChapter === 0 && (
            <motion.div 
              key="chapter-1"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-5xl mx-auto w-full text-center md:text-left pointer-events-auto"
            >
              <span className="font-mono text-[9px] tracking-[0.35em] text-blue-400 uppercase font-semibold">
                {chapters[0].num}
              </span>
              <h2 className="mt-5 font-sans text-4xl sm:text-5xl md:text-7xl lg:text-[6rem] xl:text-[7.2rem] font-black leading-[1.0] tracking-tight text-white select-none">
                {chapters[0].title} <br />
                <span className="font-serif font-light italic text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-indigo-400 to-yellow-500 glow-indigo">
                  {chapters[0].accentTitle}
                </span>
              </h2>
              <p className="mt-8 font-sans text-sm md:text-base text-white/50 max-w-2xl leading-relaxed tracking-wide">
                {chapters[0].desc}
              </p>
              <div className="mt-10 flex flex-wrap gap-4 justify-center md:justify-start">
                <button 
                  onClick={() => {
                    if (isAnimating) return;
                    setIsAnimating(true);
                    setCurrentChapter(1);
                    setTimeout(() => setIsAnimating(false), 1000);
                  }}
                  className="group relative px-9 py-4 rounded-full border border-white/10 overflow-hidden cursor-pointer bg-white/[0.01] hover:border-blue-500/40 active:scale-95 transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="relative font-mono text-[10px] uppercase tracking-[0.25em] text-white group-hover:text-blue-400 transition-colors">
                    Trigger Coalescence
                  </span>
                </button>
                <a 
                  href="https://wa.me/353852258004" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group relative px-9 py-4 rounded-full border border-emerald-500/20 bg-emerald-500/5 hover:border-emerald-500/50 hover:bg-emerald-500/10 transition-all duration-300 flex items-center gap-3"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-white group-hover:text-emerald-400 transition-colors">
                    WhatsApp Connection
                  </span>
                </a>
              </div>
            </motion.div>
          )}

          {/* Stage 2: Coalescing Core (Ethos) */}
          {currentChapter === 1 && (
            <motion.div 
              key="chapter-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-5xl mx-auto w-full text-center md:text-left pointer-events-auto"
            >
              <span className="font-mono text-[9px] tracking-[0.35em] text-blue-400 uppercase font-semibold">
                {chapters[1].num}
              </span>
              <h2 className="mt-5 font-sans text-4xl sm:text-5xl md:text-7xl lg:text-[6rem] xl:text-[7.2rem] font-black leading-[1.0] tracking-tight text-white select-none">
                {chapters[1].title} <br />
                <span className="font-serif font-light italic text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-indigo-400 to-yellow-500 glow-blue">
                  {chapters[1].accentTitle}
                </span>
              </h2>
              <p className="mt-8 font-sans text-sm md:text-base text-white/50 max-w-2xl leading-relaxed tracking-wide">
                {chapters[1].desc}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10 max-w-3xl">
                <div className="flex flex-col gap-1 border-l border-blue-500/20 pl-4 py-1">
                  <span className="font-mono text-[9px] text-blue-400 uppercase tracking-widest">[ LATENCY ]</span>
                  <span className="font-sans text-white text-xs font-semibold mt-1">Zero Layout Shifting</span>
                </div>
                <div className="flex flex-col gap-1 border-l border-blue-500/20 pl-4 py-1">
                  <span className="font-mono text-[9px] text-blue-400 uppercase tracking-widest">[ HARDWARE ]</span>
                  <span className="font-sans text-white text-xs font-semibold mt-1">60FPS WebGL Engines</span>
                </div>
                <div className="flex flex-col gap-1 border-l border-blue-500/20 pl-4 py-1">
                  <span className="font-mono text-[9px] text-blue-400 uppercase tracking-widest">[ DATA SAFETY ]</span>
                  <span className="font-sans text-white text-xs font-semibold mt-1">Cookieless Architectures</span>
                </div>
              </div>
            </motion.div>
          )}

          {/* Stage 3: DNA Helix (Services Blueprint) */}
          {currentChapter === 2 && (
            <motion.div 
              key="chapter-3"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-6xl mx-auto w-full pointer-events-auto"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                <div className="lg:col-span-4 flex flex-col gap-4">
                  <span className="font-mono text-[9px] tracking-[0.35em] text-blue-400 uppercase font-semibold">
                    {chapters[2].num}
                  </span>
                  <h3 className="font-sans text-3xl md:text-5xl text-white font-light tracking-tight leading-[1.1] mt-2 select-none">
                    {chapters[2].title} <br />
                    <span className="font-serif font-light italic text-blue-400 glow-blue">{chapters[2].accentTitle}</span>
                  </h3>
                  <p className="font-sans text-xs md:text-sm text-white/40 leading-relaxed tracking-wide mt-2">
                    {chapters[2].desc}
                  </p>
                  <div className="w-12 h-[1px] bg-blue-500/40 mt-3" />
                </div>

                <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4 max-h-[68vh] overflow-y-auto pr-1">
                  <div onMouseMove={handleSpotlightMouseMove} className="spotlight-card group p-6 rounded-2xl glass-panel hover:bg-[#100a1c]/25 hover:border-blue-500/25 transition-all duration-500 flex flex-col justify-between aspect-video sm:aspect-square">
                    <div className="flex justify-between items-start">
                      <div className="w-9 h-9 rounded-xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20 text-blue-500"><Cpu className="w-4 h-4" /></div>
                      <span className="font-mono text-[8px] text-white/25 tracking-wider">STAGE I</span>
                    </div>
                    <div className="mt-4">
                      <h4 className="font-sans text-base font-bold text-white group-hover:text-blue-400 transition-colors">React Web Platforms</h4>
                      <p className="font-sans text-[11px] text-white/40 leading-relaxed mt-2">Premium web architectures built with React, Vite, and WebGL particle flows to lock client engagement.</p>
                    </div>
                  </div>

                  <div onMouseMove={handleSpotlightMouseMove} className="spotlight-card group p-6 rounded-2xl glass-panel hover:bg-[#100a1c]/25 hover:border-blue-500/25 transition-all duration-500 flex flex-col justify-between aspect-video sm:aspect-square">
                    <div className="flex justify-between items-start">
                      <div className="w-9 h-9 rounded-xl bg-yellow-500/10 flex items-center justify-center border border-yellow-500/20 text-yellow-500"><Layers className="w-4 h-4" /></div>
                      <span className="font-mono text-[8px] text-white/25 tracking-wider">STAGE II</span>
                    </div>
                    <div className="mt-4">
                      <h4 className="font-sans text-base font-bold text-white group-hover:text-yellow-400 transition-colors">Operational Engines</h4>
                      <p className="font-sans text-[11px] text-white/40 leading-relaxed mt-2">Bespoke secure dashboards, customer management directories, and checkout systems powered by Stripe.</p>
                    </div>
                  </div>

                  <div onMouseMove={handleSpotlightMouseMove} className="spotlight-card group p-6 rounded-2xl glass-panel hover:bg-[#100a1c]/25 hover:border-blue-500/25 transition-all duration-500 flex flex-col justify-between aspect-video sm:aspect-square">
                    <div className="flex justify-between items-start">
                      <div className="w-9 h-9 rounded-xl bg-purple-500/10 flex items-center justify-center border border-purple-500/20 text-purple-400"><Database className="w-4 h-4" /></div>
                      <span className="font-mono text-[8px] text-white/25 tracking-wider">STAGE III</span>
                    </div>
                    <div className="mt-4">
                      <h4 className="font-sans text-base font-bold text-white group-hover:text-purple-400 transition-colors">Custom Native Apps</h4>
                      <p className="font-sans text-[11px] text-white/40 leading-relaxed mt-2">Native mobile and desktop operational apps supporting offline database syncing and device telemetry.</p>
                    </div>
                  </div>

                  <div onMouseMove={handleSpotlightMouseMove} className="spotlight-card group p-6 rounded-2xl glass-panel hover:bg-[#100a1c]/25 hover:border-blue-500/25 transition-all duration-500 flex flex-col justify-between aspect-video sm:aspect-square">
                    <div className="flex justify-between items-start">
                      <div className="w-9 h-9 rounded-xl bg-pink-500/10 flex items-center justify-center border border-pink-500/20 text-pink-400"><Zap className="w-4 h-4" /></div>
                      <span className="font-mono text-[8px] text-white/25 tracking-wider">STAGE IV</span>
                    </div>
                    <div className="mt-4">
                      <h4 className="font-sans text-base font-bold text-white group-hover:text-pink-400 transition-colors">Boutique Hardware POS</h4>
                      <p className="font-sans text-[11px] text-white/40 leading-relaxed mt-2">Connecting software data architectures with local boutique terminals, printing systems, and barcode loops.</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Stage 4: Network Lattice (Vanguard Stack) */}
          {currentChapter === 3 && (
            <motion.div 
              key="chapter-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-6xl mx-auto w-full pointer-events-auto"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                <div className="lg:col-span-5 flex flex-col gap-4">
                  <span className="font-mono text-[9px] tracking-[0.35em] text-blue-400 uppercase font-semibold">
                    {chapters[3].num}
                  </span>
                  <h3 className="font-sans text-3xl md:text-5xl text-white font-light tracking-tight leading-[1.1] mt-2 select-none">
                    {chapters[3].title} <br />
                    <span className="font-serif font-light italic text-yellow-500 glow-gold">{chapters[3].accentTitle}</span>
                  </h3>
                  <p className="font-sans text-xs md:text-sm text-white/40 leading-relaxed tracking-wide mt-2">
                    {chapters[3].desc}
                  </p>
                  <div className="w-12 h-[1px] bg-yellow-500/40 mt-3" />
                </div>

                <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 max-h-[68vh] overflow-y-auto pr-1 select-none">
                  <div className="p-6 rounded-2xl glass-panel flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                      <Code2 className="w-4 h-4 text-blue-500" />
                      <span className="font-mono text-[10px] text-white uppercase tracking-widest">FRONTEND CORE</span>
                    </div>
                    <p className="font-sans text-[11px] text-white/50 leading-relaxed">
                      We utilize **React 19**, **Vite**, and **TypeScript** for compiling secure static bundles. Built with strict component reusability and typed interfaces to eliminate run-time crashes.
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl glass-panel flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                      <Terminal className="w-4 h-4 text-yellow-500" />
                      <span className="font-mono text-[10px] text-white uppercase tracking-widest">STYLING FRAMEWORK</span>
                    </div>
                    <p className="font-sans text-[11px] text-white/50 leading-relaxed">
                      Powered by **Tailwind CSS v4**. Hardware-optimized CSS transformations, zero stylesheet bloat, and unified CSS variables to configure responsive system theme tokens.
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl glass-panel flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                      <Activity className="w-4 h-4 text-purple-400" />
                      <span className="font-mono text-[10px] text-white uppercase tracking-widest">3D GRAPHICS ENGINE</span>
                    </div>
                    <p className="font-sans text-[11px] text-white/50 leading-relaxed">
                      **Three.js (WebGL)** custom shaders and vertex geometry. Rendered dynamically via requestAnimationFrame with device pixel ratio scaling to ensure 60FPS fluid movements.
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl glass-panel flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span className="font-mono text-[10px] text-white uppercase tracking-widest">SERVER EDGE</span>
                    </div>
                    <p className="font-sans text-[11px] text-white/50 leading-relaxed">
                      Regional server edge security groups on **AWS** and **Vercel** setups. Instant routing, HTTPS compliance headers, and automatic continuous backup schemes.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Stage 5: Acceleration Slipstream (Metrics) */}
          {currentChapter === 4 && (
            <motion.div 
              key="chapter-5"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-6xl mx-auto w-full pointer-events-auto"
            >
              <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-10 select-none">
                <span className="font-mono text-[9px] tracking-[0.35em] text-blue-400 uppercase font-semibold">
                  {chapters[4].num}
                </span>
                <h3 className="font-sans text-3xl md:text-5xl text-white font-light tracking-tight leading-tight mt-4">
                  {chapters[4].title} <br />
                  <span className="font-serif font-light italic text-blue-500 glow-blue">{chapters[4].accentTitle}</span>
                </h3>
                <p className="font-sans text-xs md:text-sm text-white/40 leading-relaxed tracking-wide mt-2">
                  {chapters[4].desc}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-6">
                <div className="group p-7 rounded-2xl glass-panel hover:bg-[#100a1c]/15 hover:border-blue-500/20 transition-all duration-500 flex flex-col justify-between h-56 md:h-64">
                  <span className="font-sans text-5xl md:text-6xl font-extralight text-blue-500 tracking-tighter glow-blue select-none">25+</span>
                  <div>
                    <h4 className="font-sans text-sm font-bold text-white flex items-center gap-2"><Globe className="w-3.5 h-3.5 text-blue-500/70" /> Projects Deployed</h4>
                    <p className="font-sans text-[10px] text-white/40 leading-relaxed uppercase tracking-wider mt-1.5">Active design systems and secure transaction engines in circulation.</p>
                  </div>
                </div>

                <div className="group p-7 rounded-2xl glass-panel hover:bg-[#100a1c]/15 hover:border-blue-500/20 transition-all duration-500 flex flex-col justify-between h-56 md:h-64">
                  <span className="font-sans text-5xl md:text-6xl font-extralight text-yellow-500 tracking-tighter glow-gold select-none">05</span>
                  <div>
                    <h4 className="font-sans text-sm font-bold text-white flex items-center gap-2"><Server className="w-3.5 h-3.5 text-yellow-500/70" /> Nations Supported</h4>
                    <p className="font-sans text-[10px] text-white/40 leading-relaxed uppercase tracking-wider mt-1.5">Reliable custom codebases for clients in UK, IE, FR, DE, & CH.</p>
                  </div>
                </div>

                <div className="group p-7 rounded-2xl glass-panel hover:bg-[#100a1c]/15 hover:border-blue-500/20 transition-all duration-500 flex flex-col justify-between h-56 md:h-64">
                  <span className="font-sans text-5xl md:text-6xl font-extralight text-purple-400 tracking-tighter glow-indigo select-none">100%</span>
                  <div>
                    <h4 className="font-sans text-sm font-bold text-white flex items-center gap-2"><Lock className="w-3.5 h-3.5 text-purple-400/70" /> IP Protection</h4>
                    <p className="font-sans text-[10px] text-white/40 leading-relaxed uppercase tracking-wider mt-1.5">Contractual assignments ensuring intellectual property belongs entirely to you.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Stage 6: Magnetic Vortex (Convergence Contact Form) */}
          {currentChapter === 5 && (
            <motion.div 
              key="chapter-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-5xl mx-auto w-full pointer-events-auto"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-5 flex flex-col gap-4 select-none">
                  <span className="font-mono text-[9px] tracking-[0.35em] text-blue-400 uppercase font-semibold">
                    {chapters[5].num}
                  </span>
                  <h3 className="font-sans text-3xl md:text-4xl lg:text-5xl text-white font-light tracking-tight leading-tight mt-2">
                    {chapters[5].title} <br />
                    <span className="font-serif font-light italic text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-yellow-500 glow-blue">
                      {chapters[5].accentTitle}
                    </span>
                  </h3>
                  <p className="font-sans text-xs md:text-sm text-white/45 leading-relaxed mt-2">
                    {chapters[5].desc}
                  </p>

                  <div className="mt-4">
                    <a 
                      href="https://wa.me/353852258004" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-3 px-6 py-3.5 rounded-full border border-emerald-500/30 hover:border-emerald-500/70 bg-emerald-500/[0.02] hover:bg-emerald-500/10 transition-all duration-300"
                    >
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                      </span>
                      <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-white font-bold">
                        WhatsApp Connection
                      </span>
                    </a>
                  </div>

                  <div className="w-12 h-[1px] bg-white/5 mt-4" />
                  <div className="flex flex-col gap-1.5 font-mono text-[7.5px] tracking-[0.18em] text-white/30 uppercase mt-2">
                    <span>LONDON OFFICE // United Kingdom</span>
                    <span>DUBLIN STUDIO // Republic of Ireland</span>
                  </div>
                </div>

                <div className="md:col-span-7 p-6 rounded-2xl glass-panel-heavy max-h-[72vh] overflow-y-auto">
                  <h4 className="font-sans text-base font-bold text-white flex items-center gap-2 mb-4">
                    <MessageSquare className="w-3.5 h-3.5 text-blue-500/70" /> Request Audit
                  </h4>
                  <form onSubmit={(e) => { e.preventDefault(); alert("Transmitting details..."); }} className="flex flex-col gap-3.5">
                    <div>
                      <label className="block font-mono text-[8px] tracking-widest text-white/40 uppercase mb-1">Entity Name</label>
                      <input type="text" required placeholder="Acme Corp" className="w-full px-3 py-2.5 rounded-lg bg-white/[0.02] border border-white/5 focus:border-blue-500/40 focus:bg-white/[0.04] text-white font-sans text-xs outline-none transition-all" />
                    </div>
                    <div>
                      <label className="block font-mono text-[8px] tracking-widest text-white/40 uppercase mb-1">Secure Email</label>
                      <input type="email" required placeholder="hello@acme.com" className="w-full px-3 py-2.5 rounded-lg bg-white/[0.02] border border-white/5 focus:border-blue-500/40 focus:bg-white/[0.04] text-white font-sans text-xs outline-none transition-all" />
                    </div>
                    <div>
                      <label className="block font-mono text-[8px] tracking-widest text-white/40 uppercase mb-1">Bespoke System Details</label>
                      <textarea rows={3} required placeholder="Specify your integrations or backend database details..." className="w-full px-3 py-2.5 rounded-lg bg-white/[0.02] border border-white/5 focus:border-blue-500/40 focus:bg-white/[0.04] text-white font-sans text-xs outline-none resize-none transition-all" />
                    </div>
                    <button type="submit" className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-650 to-indigo-650 hover:from-blue-500 hover:to-indigo-500 text-white font-mono text-[9px] uppercase tracking-[0.25em] font-bold cursor-pointer transition-all duration-300">Transmit Details</button>
                  </form>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* FIXED IMMERSIVE FOOTER */}
      <footer className="fixed bottom-0 left-0 w-full py-6 px-8 md:px-16 flex flex-col sm:flex-row justify-between items-center bg-transparent text-[7.5px] font-mono tracking-[0.18em] text-white/20 uppercase gap-3 select-none pointer-events-auto z-40">
        <div>
          © 2026 THEOMEDIA. REGISTERED IN IRELAND & THE UNITED KINGDOM.
        </div>
        <div className="flex gap-5">
          <a href="#" className="hover:text-blue-550 transition-colors">Privacy Policy</a>
          <span>•</span>
          <a href="#" className="hover:text-blue-550 transition-colors">Terms of Use</a>
          <span>•</span>
          <a href="mailto:hello@theomedia.co" className="hover:text-blue-400 text-blue-550 font-bold transition-colors">hello@theomedia.co</a>
        </div>
      </footer>
    </div>
  );
}
