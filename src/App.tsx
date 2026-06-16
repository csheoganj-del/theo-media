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
  DollarSign
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
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeChapter, setActiveChapter] = useState(0);

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

  // Scroll tracking effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      const maxScroll = docHeight - windowHeight;
      if (maxScroll <= 0) return;

      const progress = (scrollY / maxScroll) * 3.0; // Range: 0.0 to 3.0
      targetScrollProgressRef.current = progress;
      setScrollProgress(progress);

      // Determine active chapter (0 to 3) based on scroll position
      const chapter = Math.min(Math.floor(progress + 0.5), 3);
      setActiveChapter(chapter);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial trigger
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Mouse move effect for particle interactivity
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Map coordinates to normalized space (-1 to +1)
      mouseRef.current.targetX = (e.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.targetY = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Web Audio Synth Pad setup
  const toggleAudio = async () => {
    if (isMuted) {
      // Initialize Audio System
      try {
        if (!audioContextRef.current) {
          const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
          audioContextRef.current = new AudioContextClass();
        }

        const ctx = audioContextRef.current;
        if (ctx.state === 'suspended') {
          await ctx.resume();
        }

        // Setup synthesizer nodes if not created yet
        if (!synthNodesRef.current) {
          // Dark triangle wave oscillators
          const oscA = ctx.createOscillator();
          const oscB = ctx.createOscillator();
          const oscC = ctx.createOscillator();

          oscA.type = 'triangle';
          oscA.frequency.setValueAtTime(55.0, ctx.currentTime); // A1 base frequency

          oscB.type = 'sine';
          oscB.frequency.setValueAtTime(55.35, ctx.currentTime); // slightly detuned sine

          oscC.type = 'triangle';
          oscC.frequency.setValueAtTime(82.4, ctx.currentTime); // E2 perfect fifth

          // Analog-style resonant lowpass filter
          const filter = ctx.createBiquadFilter();
          filter.type = 'lowpass';
          filter.frequency.setValueAtTime(110, ctx.currentTime);
          filter.Q.setValueAtTime(3.5, ctx.currentTime);

          // Sweeping filter LFO for organic breathing effect
          const lfo = ctx.createOscillator();
          const lfoGain = ctx.createGain();
          lfo.type = 'sine';
          lfo.frequency.setValueAtTime(0.05, ctx.currentTime); // very slow sweep (20s cycle)
          lfoGain.gain.setValueAtTime(45, ctx.currentTime);

          lfo.connect(lfoGain);
          lfoGain.connect(filter.frequency);

          // Volume fader to prevent clicking
          const gain = ctx.createGain();
          gain.gain.setValueAtTime(0, ctx.currentTime);

          // Connect oscillators
          oscA.connect(filter);
          oscB.connect(filter);
          oscC.connect(filter);
          filter.connect(gain);
          gain.connect(ctx.destination);

          // Start oscillators
          oscA.start();
          oscB.start();
          oscC.start();
          lfo.start();

          synthNodesRef.current = { oscA, oscB, oscC, filter, gain };
        }

        // Fade audio up to 0.15 volume over 1.5 seconds
        synthNodesRef.current.gain.gain.linearRampToValueAtTime(0.15, ctx.currentTime + 1.5);
        setIsMuted(false);
      } catch (err) {
        console.error('Failed to initialize AudioContext', err);
      }
    } else {
      // Fade audio down to 0 volume over 0.8 seconds
      if (synthNodesRef.current && audioContextRef.current) {
        const ctx = audioContextRef.current;
        synthNodesRef.current.gain.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.8);
      }
      setIsMuted(true);
    }
  };

  // Clean up audio nodes on unmount
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

  // Three.js Particle Storyteller Engine
  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const scene = new THREE.Scene();

    // Camera setup with perspective depth
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

    // Generate 3,500 stardust particles
    const particleCount = 3500;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    // Arrays to store morph target coordinates for 4 chapters
    const posSphere: THREE.Vector3[] = [];
    const posGrid: THREE.Vector3[] = [];
    const posStreams: THREE.Vector3[] = [];
    const posHelix: THREE.Vector3[] = [];

    // Pre-calculate target coordinates for the particles
    for (let i = 0; i < particleCount; i++) {
      // --- Target 0: Orbiting Nebula Sphere (Origin) ---
      const theta = Math.acos(1 - 2 * (i / particleCount));
      const phi = Math.sqrt(particleCount * Math.PI) * theta;
      const sphereRadius = 3.2 + Math.sin(i * 1.5) * 0.15; // slightly organic irregularities
      posSphere.push(new THREE.Vector3(
        sphereRadius * Math.sin(theta) * Math.cos(phi),
        sphereRadius * Math.sin(theta) * Math.sin(phi),
        sphereRadius * Math.cos(theta)
      ));

      // --- Target 1: Architectural Wavy Grid (Blueprint) ---
      const gridRows = 50;
      const gridCols = 70;
      const row = i % gridRows;
      const col = Math.floor(i / gridRows);
      const gridX = (col - gridCols / 2) * 0.16;
      const gridZ = (row - gridRows / 2) * 0.16;
      // Wavy surface
      const gridY = Math.sin(gridX * 0.4) * Math.cos(gridZ * 0.4) * 0.8;
      posGrid.push(new THREE.Vector3(gridX, gridY, gridZ));

      // --- Target 2: High-Speed Slipstream (Momentum) ---
      // Distribute particles along 25 linear channels running along Z axis
      const channelId = i % 25;
      const channelAngle = (channelId / 25) * Math.PI * 2;
      const channelRadius = 2.0 + Math.sin(i * 0.1) * 0.4;
      const streamX = channelRadius * Math.cos(channelAngle);
      const streamY = channelRadius * Math.sin(channelAngle);
      // Evenly distribute along Z axis
      const streamZ = ((i % 140) / 140) * 16 - 8;
      posStreams.push(new THREE.Vector3(streamX, streamY, streamZ));

      // --- Target 3: Double Helix Vortex (Convergence) ---
      const helixStrand = i % 2 === 0 ? 0 : 1;
      const helixAngle = (i / particleCount) * Math.PI * 18;
      const helixHeight = (i / particleCount) * 7.5 - 3.75;
      const helixRadius = 1.6;
      const strandOffset = helixStrand * Math.PI;
      posHelix.push(new THREE.Vector3(
        helixRadius * Math.cos(helixAngle + strandOffset),
        helixHeight,
        helixRadius * Math.sin(helixAngle + strandOffset)
      ));

      // Initialize actual positions with Sphere coordinates
      positions[i * 3] = posSphere[i].x;
      positions[i * 3 + 1] = posSphere[i].y;
      positions[i * 3 + 2] = posSphere[i].z;

      // Assign custom cyberpunk gradient colors: Gold, Indigo, Purple
      const colorType = i % 3;
      if (colorType === 0) {
        // Gold (#FFD700)
        colors[i * 3] = 1.0;
        colors[i * 3 + 1] = 0.84;
        colors[i * 3 + 2] = 0.0;
      } else if (colorType === 1) {
        // Indigo (#6366F1)
        colors[i * 3] = 0.388;
        colors[i * 3 + 1] = 0.4;
        colors[i * 3 + 2] = 0.945;
      } else {
        // Ultraviolet (#D600FF)
        colors[i * 3] = 0.839;
        colors[i * 3 + 1] = 0.0;
        colors[i * 3 + 2] = 1.0;
      }
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Particle texture (tiny rounded stardust point)
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

    // Add particle velocities array for organic drift simulation
    const particlesData: ParticleData[] = [];
    for (let i = 0; i < particleCount; i++) {
      particlesData.push({
        x: posSphere[i].x,
        y: posSphere[i].y,
        z: posSphere[i].z,
        baseX: posSphere[i].x,
        baseY: posSphere[i].y,
        baseZ: posSphere[i].z,
        vx: 0,
        vy: 0,
        vz: 0,
        id: i
      });
    }

    const clock = new THREE.Clock();

    // Render loop
    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const time = clock.getElapsedTime();

      // Smooth scroll progress value
      currentScrollProgressRef.current += (targetScrollProgressRef.current - currentScrollProgressRef.current) * 0.07;
      const progress = currentScrollProgressRef.current;

      // Smooth mouse coordinates with inertia
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.08;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.08;

      // Project mouse into approximate 3D space coordinates
      const mouse3DX = mouseRef.current.x * 5.0;
      const mouse3DY = mouseRef.current.y * 3.5;

      const posAttribute = geometry.attributes.position;
      const posArray = posAttribute.array as Float32Array;

      // Calculate state morphing and noise fields
      for (let i = 0; i < particleCount; i++) {
        const p = particlesData[i];

        // 1. Calculate active morph target coordinates based on scroll state
        let targetX = 0;
        let targetY = 0;
        let targetZ = 0;

        if (progress < 1.0) {
          // Interpolate Sphere (0) -> Grid (1)
          const t = progress;
          targetX = posSphere[i].x * (1 - t) + posGrid[i].x * t;
          targetY = posSphere[i].y * (1 - t) + posGrid[i].y * t;
          targetZ = posSphere[i].z * (1 - t) + posGrid[i].z * t;
        } else if (progress < 2.0) {
          // Interpolate Grid (1) -> Streams (2)
          const t = progress - 1.0;
          targetX = posGrid[i].x * (1 - t) + posStreams[i].x * t;
          targetY = posGrid[i].y * (1 - t) + posStreams[i].y * t;
          targetZ = posGrid[i].z * (1 - t) + posStreams[i].z * t;
        } else {
          // Interpolate Streams (2) -> Double Helix (3)
          const t = progress - 2.0;
          targetX = posStreams[i].x * (1 - t) + posHelix[i].x * t;
          targetY = posStreams[i].y * (1 - t) + posHelix[i].y * t;
          targetZ = posStreams[i].z * (1 - t) + posHelix[i].z * t;
        }

        // 2. Add organic noise waves (breathability) that shift depending on flow state
        let noiseScale = 0.15;
        let noiseSpeed = 0.6;
        if (progress >= 1.0 && progress < 2.0) {
          // grid state has minor waves
          noiseScale = 0.08;
        } else if (progress >= 2.0) {
          // high speed streams have long streaking noise
          noiseScale = 0.22;
          noiseSpeed = 1.4;
        }

        const waveX = Math.sin(time * noiseSpeed + i * 0.08) * noiseScale * Math.cos(time * 0.4 + i * 0.03);
        const waveY = Math.cos(time * (noiseSpeed * 0.8) + i * 0.06) * noiseScale * Math.sin(time * 0.5 + i * 0.02);
        const waveZ = Math.sin(time * (noiseSpeed * 1.2) + i * 0.1) * noiseScale * 0.5;

        // Apply noise velocity drift
        targetX += waveX;
        targetY += waveY;
        targetZ += waveZ;

        // 3. Special dynamic movements depending on the active state
        if (progress < 1.0) {
          // Slow organic rotation around Y axis for the Sphere nebula
          const rotAngle = time * 0.06 + i * 0.0001;
          const cosR = Math.cos(rotAngle);
          const sinR = Math.sin(rotAngle);
          const originalX = targetX;
          const originalZ = targetZ;
          targetX = originalX * cosR - originalZ * sinR;
          targetZ = originalX * sinR + originalZ * cosR;
        } else if (progress >= 2.0 && progress < 3.0) {
          // Particles speed downwards along Z axis in the hyper-slipstream
          // We add a continuous Z offset that wraps around
          const speedOffset = (time * 4.0 + i * 0.2) % 16.0 - 8.0;
          targetZ = speedOffset;
        }

        // 4. Cursor magnetism (particles react to mouse position)
        const dx = p.x - mouse3DX;
        const dy = p.y - mouse3DY;
        const dist = Math.sqrt(dx * dx + dy * dy);

        // Repel particles slightly near mouse, causing ripples
        if (dist < 1.8) {
          const force = (1.8 - dist) * 0.06;
          // Apply horizontal drift pushes
          targetX += (dx / dist) * force;
          targetY += (dy / dist) * force;
        }

        // 5. Interpolate coordinate movements with inertia
        p.x += (targetX - p.x) * 0.075;
        p.y += (targetY - p.y) * 0.075;
        p.z += (targetZ - p.z) * 0.075;

        posArray[i * 3] = p.x;
        posArray[i * 3 + 1] = p.y;
        posArray[i * 3 + 2] = p.z;
      }

      posAttribute.needsUpdate = true;

      // Camera transitions (Rotate and zoom based on scroll progress to add cinema depth)
      if (progress < 1.0) {
        // Normal orbit angle
        camera.position.x = Math.sin(progress * 0.5) * 2.0;
        camera.position.y = 0;
        camera.position.z = 8.0 - progress * 1.5;
        camera.lookAt(0, 0, 0);
      } else if (progress < 2.0) {
        // Perspective shift over grid
        const t = progress - 1.0;
        camera.position.x = 2.0 - t * 2.0;
        camera.position.y = t * 2.5; // lift camera up to look down on grid
        camera.position.z = 6.5 - t * 0.5;
        camera.lookAt(0, 0, 0);
      } else {
        // Tilt and zoom for helix vortex
        const t = progress - 2.0;
        camera.position.x = Math.sin(time * 0.05 + t) * 1.5;
        camera.position.y = 2.5 - t * 2.5;
        camera.position.z = 6.0 + t * 1.5;
        camera.lookAt(0, 0, 0);
      }

      renderer.render(scene, camera);
    };

    animate();

    // Handle viewport resize
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

  // Text contents for each storytelling chapter
  const chapters = [
    {
      num: '[ 01 // ORIGIN ]',
      title: 'Engineering the',
      accentTitle: 'Digital Future.',
      desc: 'Bespoke design combined with advanced software engineering. We create custom digital systems, interactive WebGL vector pipelines, and secure cloud platforms for premium enterprises.'
    },
    {
      num: '[ 02 // BLUEPRINT ]',
      title: 'Aesthetic Systems,',
      accentTitle: 'Pure Performance.',
      desc: 'We replace opaque timelines with fixed-price execution models. Transparent, native React codebases paired with custom Stripe invoicing, built to handle complex transaction networks.'
    },
    {
      num: '[ 03 // MOMENTUM ]',
      title: 'Delivered Globally,',
      accentTitle: 'Protected Legally.',
      desc: 'An active track record serving enterprises across the United Kingdom, Ireland, France, Germany, and Switzerland. Full contractual intellectual property ownership guarantees your code remains your asset.'
    },
    {
      num: '[ 04 // CONVERGENCE ]',
      title: 'Enter the Space,',
      accentTitle: 'Build the Blueprint.',
      desc: 'Let’s construct your next digital platform. Get in touch directly on WhatsApp or drop us an email to coordinate your bespoke software audit. London & Dublin studios active.'
    }
  ];

  return (
    <div className="relative min-h-screen bg-[#030303] overflow-hidden">
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
          <div className="w-7 h-7 rounded-full border border-yellow-500/40 flex items-center justify-center">
            <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full animate-pulse" />
          </div>
          <div>
            <h1 className="font-sans text-xs font-bold tracking-[0.25em] text-white">THEOMEDIA</h1>
            <p className="text-[7.5px] font-mono tracking-widest text-white/30 uppercase mt-0.5">Design & Engineering</p>
          </div>
        </div>

        {/* Mute Synth pad & Action triggers */}
        <div className="flex items-center gap-5 pointer-events-auto">
          {/* WhatsApp Quick Link */}
          <a 
            href="https://wa.me/353852258004" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 group px-4.5 py-1.5 rounded-full border border-white/10 hover:border-yellow-500/35 hover:bg-white/[0.02] transition-all duration-300 select-none"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
            <span className="font-mono text-[8.5px] font-semibold tracking-wider text-white/60 group-hover:text-white uppercase transition-colors">Direct WhatsApp</span>
          </a>

          {/* Web Audio Toggle button */}
          <button 
            onClick={toggleAudio}
            className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 hover:border-yellow-500/40 hover:bg-white/[0.02] cursor-pointer transition-all duration-300"
            title="Toggle Ambient Audio Synth"
          >
            {isMuted ? (
              <VolumeX className="w-4 h-4 text-white/40" />
            ) : (
              <div className="flex items-end justify-center gap-[3px] h-3.5">
                <div className="wave-bar w-[2px] h-3.5 bg-yellow-500 rounded-sm" />
                <div className="wave-bar w-[2px] h-2.5 bg-yellow-500 rounded-sm" />
                <div className="wave-bar w-[2px] h-3 bg-yellow-500 rounded-sm" />
                <div className="wave-bar w-[2px] h-1.5 bg-yellow-500 rounded-sm" />
              </div>
            )}
          </button>
        </div>
      </header>

      {/* Floating Story Progress indicator (Sidebar) */}
      <nav className="fixed right-8 md:right-16 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-6 select-none pointer-events-auto">
        {chapters.map((_, idx) => (
          <button 
            key={idx}
            onClick={() => {
              // Smooth scroll to chapter offsets
              const targetY = (idx / 3) * (document.documentElement.scrollHeight - window.innerHeight);
              window.scrollTo({ top: targetY, behavior: 'smooth' });
            }}
            className="group flex items-center justify-end gap-3 cursor-pointer"
          >
            <span className="opacity-0 group-hover:opacity-100 font-mono text-[9px] text-yellow-500/80 tracking-widest transition-opacity duration-300">
              0{idx + 1}
            </span>
            <div className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ${
              activeChapter === idx 
                ? 'bg-yellow-500 scale-150 shadow-[0_0_10px_rgba(234,179,8,0.6)]' 
                : 'bg-white/20 group-hover:bg-white/60'
            }`} />
          </button>
        ))}
      </nav>

      {/* NARRATIVE CHAPTER OVERLAY TEXTS */}
      <main className="relative z-10 w-full flex flex-col">
        
        {/* Chapter 1: The Origin (Hero) */}
        <section className="w-full min-h-screen relative flex flex-col justify-between py-24 md:py-32 px-6 md:px-20 z-10">
          <div /> {/* Spacer */}
          
          <div className="max-w-4xl mx-auto w-full text-center md:text-left select-none">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, ease: 'easeOut' }}
            >
              <span className="font-mono text-[10px] tracking-[0.35em] text-yellow-500/80 uppercase font-semibold">
                {chapters[0].num}
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.15, ease: 'easeOut' }}
              className="mt-6 font-sans text-4xl sm:text-5xl md:text-7xl lg:text-[5.5rem] font-light leading-[1.0] tracking-tight text-white"
            >
              {chapters[0].title} <br />
              <span className="font-extrabold italic text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-indigo-400 to-purple-500 glow-indigo">
                {chapters[0].accentTitle}
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.3, ease: 'easeOut' }}
              className="mt-8 font-sans text-sm md:text-base text-white/50 max-w-xl leading-relaxed tracking-wide"
            >
              {chapters[0].desc}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.0, delay: 0.45 }}
              className="mt-10 flex flex-wrap gap-4 justify-center md:justify-start"
            >
              <button 
                onClick={() => {
                  const targetY = (1 / 3) * (document.documentElement.scrollHeight - window.innerHeight);
                  window.scrollTo({ top: targetY, behavior: 'smooth' });
                }}
                className="group relative px-8 py-3.5 rounded-full border border-white/10 overflow-hidden cursor-pointer bg-white/[0.01] hover:border-yellow-500/40 active:scale-95 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/5 via-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="relative font-mono text-[10px] uppercase tracking-[0.25em] text-white group-hover:text-yellow-400 transition-colors">
                  Explore Systems
                </span>
              </button>

              <a 
                href="https://wa.me/353852258004" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative px-8 py-3.5 rounded-full border border-emerald-500/20 bg-emerald-500/5 hover:border-emerald-500/50 hover:bg-emerald-500/10 transition-all duration-300 flex items-center gap-3"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-white group-hover:text-emerald-400 transition-colors">
                  WhatsApp Audit
                </span>
              </a>
            </motion.div>
          </div>

          {/* Scroll bottom prompt */}
          <div className="w-full flex justify-center mt-12 md:mt-0 select-none">
            <div 
              onClick={() => {
                const targetY = (1 / 3) * (document.documentElement.scrollHeight - window.innerHeight);
                window.scrollTo({ top: targetY, behavior: 'smooth' });
              }}
              className="flex flex-col items-center gap-2 text-[9px] font-mono tracking-[0.2em] text-white/30 hover:text-white transition-all cursor-pointer"
            >
              <span>SCROLL DOWN</span>
              <div className="w-[1px] h-6 bg-yellow-500/40 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[50%] bg-yellow-400 animate-bounce" />
              </div>
            </div>
          </div>
        </section>

        {/* Chapter 2: The Blueprint (Services Grid) */}
        <section className="w-full min-h-screen relative flex items-center justify-center py-24 md:py-32 px-6 md:px-20 z-10">
          <div className="max-w-6xl mx-auto w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              
              {/* Left description */}
              <div className="lg:col-span-4 flex flex-col gap-6 lg:sticky lg:top-36 select-none">
                <span className="font-mono text-[10px] tracking-[0.35em] text-yellow-500/80 uppercase font-semibold">
                  {chapters[1].num}
                </span>
                <h3 className="font-sans text-3xl md:text-4xl text-white font-light tracking-tight leading-[1.1] mt-2">
                  {chapters[1].title} <br />
                  <span className="font-bold italic text-yellow-500">{chapters[1].accentTitle}</span>
                </h3>
                <p className="font-sans text-xs md:text-sm text-white/40 leading-relaxed tracking-wide mt-4">
                  {chapters[1].desc}
                </p>
                <div className="w-12 h-[1px] bg-yellow-500/40 mt-4" />
              </div>

              {/* Bento spotlight cards */}
              <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
                
                {/* Bento Card 1 */}
                <div 
                  onMouseMove={handleSpotlightMouseMove}
                  className="spotlight-card group p-8 rounded-2xl glass-panel hover:bg-[#100a1c]/20 hover:border-yellow-500/20 transition-all duration-500 flex flex-col justify-between aspect-square"
                >
                  <div className="flex justify-between items-start">
                    <div className="w-10 h-10 rounded-xl bg-yellow-500/10 flex items-center justify-center border border-yellow-500/20 text-yellow-500 group-hover:scale-110 transition-transform">
                      <Cpu className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-[8.5px] text-white/20 tracking-wider">STAGE I</span>
                  </div>
                  <div className="mt-8">
                    <h4 className="font-sans text-lg md:text-xl font-bold text-white group-hover:text-yellow-400 transition-colors">
                      React Web Platforms
                    </h4>
                    <p className="font-sans text-xs text-white/40 leading-relaxed mt-3 tracking-wide">
                      Premium web architectures built with React, Vite, and high-performance WebGL particle modules designed to engage high-end clients.
                    </p>
                  </div>
                </div>

                {/* Bento Card 2 */}
                <div 
                  onMouseMove={handleSpotlightMouseMove}
                  className="spotlight-card group p-8 rounded-2xl glass-panel hover:bg-[#100a1c]/20 hover:border-yellow-500/20 transition-all duration-500 flex flex-col justify-between aspect-square"
                >
                  <div className="flex justify-between items-start">
                    <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20 text-indigo-400 group-hover:scale-110 transition-transform">
                      <Layers className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-[8.5px] text-white/20 tracking-wider">STAGE II</span>
                  </div>
                  <div className="mt-8">
                    <h4 className="font-sans text-lg md:text-xl font-bold text-white group-hover:text-indigo-400 transition-colors">
                      Operational Engines
                    </h4>
                    <p className="font-sans text-xs text-white/40 leading-relaxed mt-3 tracking-wide">
                      Bespoke client portals, database registries, and custom checkout flows integrated directly with Stripe SCA-compliant APIs.
                    </p>
                  </div>
                </div>

                {/* Bento Card 3 */}
                <div 
                  onMouseMove={handleSpotlightMouseMove}
                  className="spotlight-card group p-8 rounded-2xl glass-panel hover:bg-[#100a1c]/20 hover:border-yellow-500/20 transition-all duration-500 flex flex-col justify-between aspect-square"
                >
                  <div className="flex justify-between items-start">
                    <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center border border-purple-500/20 text-purple-400 group-hover:scale-110 transition-transform">
                      <Database className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-[8.5px] text-white/20 tracking-wider">STAGE III</span>
                  </div>
                  <div className="mt-8">
                    <h4 className="font-sans text-lg md:text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
                      Custom Native Apps
                    </h4>
                    <p className="font-sans text-xs text-white/40 leading-relaxed mt-3 tracking-wide">
                      Lightning-fast mobile and desktop software compilation supporting offline operational caching and device synchronization.
                    </p>
                  </div>
                </div>

                {/* Bento Card 4 */}
                <div 
                  onMouseMove={handleSpotlightMouseMove}
                  className="spotlight-card group p-8 rounded-2xl glass-panel hover:bg-[#100a1c]/20 hover:border-yellow-500/20 transition-all duration-500 flex flex-col justify-between aspect-square"
                >
                  <div className="flex justify-between items-start">
                    <div className="w-10 h-10 rounded-xl bg-pink-500/10 flex items-center justify-center border border-pink-500/20 text-pink-400 group-hover:scale-110 transition-transform">
                      <Zap className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-[8.5px] text-white/20 tracking-wider">STAGE IV</span>
                  </div>
                  <div className="mt-8">
                    <h4 className="font-sans text-lg md:text-xl font-bold text-white group-hover:text-pink-400 transition-colors">
                      POS & Telemetry integrations
                    </h4>
                    <p className="font-sans text-xs text-white/40 leading-relaxed mt-3 tracking-wide">
                      Bridging custom web databases with physical boutique terminal hardware, printer arrays, and local logging networks.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Chapter 3: The Momentum (Performance & Credentials) */}
        <section className="w-full min-h-screen relative flex items-center justify-center py-24 md:py-32 px-6 md:px-20 z-10">
          <div className="max-w-6xl mx-auto w-full">
            <div className="flex flex-col items-center text-center max-w-2xl mx-auto select-none mb-16">
              <span className="font-mono text-[10px] tracking-[0.35em] text-yellow-500/80 uppercase font-semibold">
                {chapters[2].num}
              </span>
              <h3 className="font-sans text-3xl md:text-5xl text-white font-light tracking-tight leading-tight mt-6">
                {chapters[2].title} <br />
                <span className="font-bold italic text-indigo-400 glow-indigo">{chapters[2].accentTitle}</span>
              </h3>
              <p className="font-sans text-xs md:text-sm text-white/40 leading-relaxed tracking-wide mt-4">
                {chapters[2].desc}
              </p>
            </div>

            {/* Stats Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              
              {/* Stat 1 */}
              <div className="group p-8 rounded-2xl glass-panel hover:bg-[#100a1c]/15 hover:border-yellow-500/20 transition-all duration-500 flex flex-col justify-between h-72">
                <span className="font-sans text-6xl md:text-7xl font-extralight text-yellow-500 tracking-tighter select-none glow-gold">
                  25+
                </span>
                <div>
                  <h4 className="font-sans text-base font-bold text-white flex items-center gap-2">
                    <Globe className="w-4 h-4 text-yellow-500/70" /> Projects Deployed
                  </h4>
                  <p className="font-sans text-[11px] text-white/40 leading-relaxed uppercase tracking-wider mt-2">
                    Active digital structures, custom checkouts, and inventory databases in active service.
                  </p>
                </div>
              </div>

              {/* Stat 2 */}
              <div className="group p-8 rounded-2xl glass-panel hover:bg-[#100a1c]/15 hover:border-yellow-500/20 transition-all duration-500 flex flex-col justify-between h-72">
                <span className="font-sans text-6xl md:text-7xl font-extralight text-indigo-400 tracking-tighter select-none glow-indigo">
                  05
                </span>
                <div>
                  <h4 className="font-sans text-base font-bold text-white flex items-center gap-2">
                    <Server className="w-4 h-4 text-indigo-400/70" /> Nations Supported
                  </h4>
                  <p className="font-sans text-[11px] text-white/40 leading-relaxed uppercase tracking-wider mt-2">
                    Providing high-availability network systems for businesses in UK, IE, FR, DE, & CH.
                  </p>
                </div>
              </div>

              {/* Stat 3 */}
              <div className="group p-8 rounded-2xl glass-panel hover:bg-[#100a1c]/15 hover:border-yellow-500/20 transition-all duration-500 flex flex-col justify-between h-72">
                <span className="font-sans text-6xl md:text-7xl font-extralight text-purple-400 tracking-tighter select-none glow-indigo">
                  100%
                </span>
                <div>
                  <h4 className="font-sans text-base font-bold text-white flex items-center gap-2">
                    <Lock className="w-4 h-4 text-purple-400/70" /> IP Protection
                  </h4>
                  <p className="font-sans text-[11px] text-white/40 leading-relaxed uppercase tracking-wider mt-2">
                    Contractual guarantees assigning absolute intellectual property rights to the client.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Chapter 4: The Convergence (Contact / Form) */}
        <section className="w-full min-h-screen relative flex items-center justify-center py-24 md:py-32 px-6 md:px-20 z-10">
          <div className="max-w-4xl mx-auto w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              
              {/* Left Column (WhatsApp & Studio References) */}
              <div className="flex flex-col gap-6 select-none">
                <span className="font-mono text-[10px] tracking-[0.35em] text-yellow-500/80 uppercase font-semibold">
                  {chapters[3].num}
                </span>
                <h3 className="font-sans text-3xl md:text-5xl text-white font-light tracking-tight leading-tight mt-2">
                  {chapters[3].title} <br />
                  <span className="font-bold italic text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-indigo-400 glow-indigo">
                    {chapters[3].accentTitle}
                  </span>
                </h3>
                <p className="font-sans text-xs md:text-sm text-white/45 leading-relaxed mt-4">
                  {chapters[3].desc}
                </p>

                {/* Pulsing WhatsApp CTA */}
                <div className="mt-6">
                  <a 
                    href="https://wa.me/353852258004" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-3.5 px-7 py-4 rounded-full border border-emerald-500/30 hover:border-emerald-500/70 bg-emerald-500/[0.02] hover:bg-emerald-500/10 hover:shadow-[0_0_20px_rgba(16,185,129,0.15)] hover:scale-[1.02] transition-all duration-300 pointer-events-auto"
                  >
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                    </span>
                    <span className="font-mono text-[9.5px] uppercase tracking-[0.25em] text-white font-bold">
                      WhatsApp Connection
                    </span>
                  </a>
                </div>

                <div className="w-16 h-[1px] bg-white/5 mt-6" />

                <div className="flex flex-col gap-2 font-mono text-[8px] tracking-[0.2em] text-white/30 uppercase mt-4">
                  <span>LONDON OFFICE // United Kingdom</span>
                  <span>DUBLIN STUDIO // Republic of Ireland</span>
                </div>
              </div>

              {/* Right Column (Secure Custom Contact Form) */}
              <div className="p-8 rounded-2xl glass-panel-heavy pointer-events-auto">
                <h4 className="font-sans text-lg font-bold text-white flex items-center gap-2 mb-6">
                  <MessageSquare className="w-4 h-4 text-yellow-500/70" /> Request Audit
                </h4>
                
                <form 
                  onSubmit={(e) => {
                    e.preventDefault();
                    alert("Thank you. Our Dublin/London studio will contact you shortly.");
                  }} 
                  className="flex flex-col gap-4.5"
                >
                  <div>
                    <label className="block font-mono text-[9px] tracking-widest text-white/40 uppercase mb-2">
                      Entity Name
                    </label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. Acme Corp"
                      className="w-full px-4 py-3 rounded-lg bg-white/[0.02] border border-white/5 focus:border-yellow-500/40 focus:bg-white/[0.04] text-white font-sans text-xs outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-[9px] tracking-widest text-white/40 uppercase mb-2">
                      Secure Email Address
                    </label>
                    <input 
                      type="email" 
                      required
                      placeholder="e.g. hello@acme.com"
                      className="w-full px-4 py-3 rounded-lg bg-white/[0.02] border border-white/5 focus:border-yellow-500/40 focus:bg-white/[0.04] text-white font-sans text-xs outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-[9px] tracking-widest text-white/40 uppercase mb-2">
                      Bespoke System Details
                    </label>
                    <textarea 
                      rows={4}
                      required
                      placeholder="Specify your requirements or api integrations..."
                      className="w-full px-4 py-3 rounded-lg bg-white/[0.02] border border-white/5 focus:border-yellow-500/40 focus:bg-white/[0.04] text-white font-sans text-xs outline-none resize-none transition-all"
                    />
                  </div>

                  <button 
                    type="submit"
                    className="w-full py-3.5 rounded-lg bg-gradient-to-r from-yellow-500 to-indigo-600 hover:from-yellow-400 hover:to-indigo-500 text-white font-mono text-[9.5px] uppercase tracking-[0.25em] font-bold cursor-pointer hover:shadow-[0_0_20px_rgba(234,179,8,0.2)] active:scale-[0.98] transition-all duration-300"
                  >
                    Transmit Details
                  </button>
                </form>
              </div>

            </div>
          </div>
        </section>

      </main>

      {/* Classic Minimalist Footer */}
      <footer className="relative z-10 w-full border-t border-white/5 py-12 px-8 md:px-20 flex flex-col sm:flex-row justify-between items-center bg-[#030303]/90 text-[8.5px] font-mono tracking-[0.18em] text-white/20 uppercase gap-6 select-none pointer-events-auto">
        <div>
          © 2026 THEOMEDIA. REGISTERED IN IRELAND & THE UNITED KINGDOM.
        </div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-yellow-500/80 transition-colors">Privacy Policy</a>
          <span>•</span>
          <a href="#" className="hover:text-yellow-500/80 transition-colors">Terms of Use</a>
          <span>•</span>
          <a href="mailto:hello@theomedia.co" className="hover:text-yellow-400 text-yellow-500/80 font-bold transition-colors">hello@theomedia.co</a>
        </div>
      </footer>
    </div>
  );
}
