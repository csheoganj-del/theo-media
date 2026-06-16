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
  vx: number;
  vy: number;
  vz: number;
  r: number; // distance from center
  baseAngle: number; // initial orbital angle
  armId: number; // arm identity (0-3 for spiral arms, -1 for core)
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

  // Scroll gesture hook to intercept wheel and swipe events for 6 chapters
  useEffect(() => {
    let lastWheelTime = 0;
    let touchStartY = 0;

    const handleWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) < 12) return;

      const now = Date.now();
      if (now - lastWheelTime < 1100) return; // Cooldown to let morph animations finish

      if (e.deltaY > 0) {
        if (currentChapter < 5) {
          lastWheelTime = now;
          setIsAnimating(true);
          setCurrentChapter((prev) => prev + 1);
          setTimeout(() => setIsAnimating(false), 1000);
        }
      } else {
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
      if (now - lastWheelTime < 1100) return;

      const touchEndY = e.changedTouches[0].clientY;
      const diffY = touchStartY - touchEndY;

      if (Math.abs(diffY) < 45) return;

      if (diffY > 0) {
        if (currentChapter < 5) {
          lastWheelTime = now;
          setIsAnimating(true);
          setCurrentChapter((prev) => prev + 1);
          setTimeout(() => setIsAnimating(false), 1000);
        }
      } else {
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

  // Keep target stardust scroll linked to current chapter index
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

  // Three.js Milky Way Spiral Galaxy Simulation Engine
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

    const particleCount = 4000;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const pos0Disk: THREE.Vector3[] = [];
    const pos1Zoom: THREE.Vector3[] = [];
    const pos2Wavy: THREE.Vector3[] = [];
    const pos3Trails: THREE.Vector3[] = [];
    const pos4Helix: THREE.Vector3[] = [];

    const particlesData: ParticleData[] = [];

    // Model the Milky Way geometry mathematically: 25% Core Bulge, 75% Spiral Arms (4 Arms)
    const coreCount = Math.floor(particleCount * 0.25);

    for (let i = 0; i < particleCount; i++) {
      let r = 0;
      let theta = 0;
      let phi = 0;
      let armId = -1;
      let isCore = i < coreCount;

      if (isCore) {
        // --- Core Bulge: Dense sphere at the center ---
        r = Math.pow(Math.random(), 2.0) * 0.75;
        theta = Math.acos(Math.random() * 2.0 - 1);
        phi = Math.random() * Math.PI * 2;
      } else {
        // --- Spiral Arms: 4 logarithmic spiral arms ---
        armId = (i - coreCount) % 4;
        const armAngle = (armId / 4) * Math.PI * 2;
        // Distribute distance outwards from core edge
        r = 0.75 + Math.pow(Math.random(), 1.5) * 3.5;
        // Logarithmic spiral angle twist based on radius
        const twist = r * 1.35;
        phi = armAngle + twist;
      }

      const baseAngle = phi;

      // 1. Target 0: Milky Way Standard Disk Flat Rotation
      let x0 = 0, y0 = 0, z0 = 0;
      if (isCore) {
        x0 = r * Math.sin(theta) * Math.cos(phi);
        y0 = r * Math.sin(theta) * Math.sin(phi) * 0.8; // slightly flattened core
        z0 = r * Math.cos(theta);
      } else {
        // flat disk with slight vertical dispersion
        const dispY = (Math.random() - 0.5) * 0.16;
        const dispX = (Math.random() - 0.5) * 0.25 / (r * 0.3 + 0.7);
        const dispZ = (Math.random() - 0.5) * 0.25 / (r * 0.3 + 0.7);
        x0 = r * Math.cos(phi) + dispX;
        y0 = dispY;
        z0 = r * Math.sin(phi) + dispZ;
      }
      pos0Disk.push(new THREE.Vector3(x0, y0, z0));

      // 2. Target 1: Zoom Core (stars disperse outwards visually like flying through a hyper-jump)
      let x1 = x0 * 2.2;
      let y1 = y0 * 2.2;
      let z1 = z0 * 2.2;
      pos1Zoom.push(new THREE.Vector3(x1, y1, z1));

      // 3. Target 2: Gravitational Wavy Grid (Rippling gravity ripples along the disk)
      let x2 = x0;
      // Waving sine ripples moving radially out
      let y2 = y0 + Math.sin(r * 2.8) * 0.55;
      let z2 = z0;
      pos2Wavy.push(new THREE.Vector3(x2, y2, z2));

      // 4. Target 3: Ultra-thin Star Trails (Zero dispersion, stars pulled exactly into clean spirals)
      let x3 = 0, y3 = 0, z3 = 0;
      if (isCore) {
        x3 = x0; y3 = y0; z3 = z0;
      } else {
        x3 = r * Math.cos(phi);
        y3 = 0;
        z3 = r * Math.sin(phi);
      }
      pos3Trails.push(new THREE.Vector3(x3, y3, z3));

      // 5. Target 4: Double Helix Disk (spiral arms twisted vertically into double helix orbits)
      let x4 = x0;
      let y4 = isCore ? y0 : y0 + Math.sin(phi * 2.0) * 0.65;
      let z4 = z0;
      pos4Helix.push(new THREE.Vector3(x4, y4, z4));

      // Initialize buffer geometry array
      positions[i * 3] = x0;
      positions[i * 3 + 1] = y0;
      positions[i * 3 + 2] = z0;

      // Assign natural galactic colors
      if (isCore) {
        // Bulge: Warm white/light golden star bulb (#FFF5E0)
        colors[i * 3] = 1.0;
        colors[i * 3 + 1] = 0.94;
        colors[i * 3 + 2] = 0.82;
      } else {
        // Spiral Arms: Dynamic hot cobalt blue stars mixed with ultraviolet dust lanes
        const type = i % 3;
        if (type === 0) {
          // Hot Cobalt Blue (#00A6FF)
          colors[i * 3] = 0.0;
          colors[i * 3 + 1] = 0.65;
          colors[i * 3 + 2] = 1.0;
        } else if (type === 1) {
          // Luminous Gold (#FFD700)
          colors[i * 3] = 1.0;
          colors[i * 3 + 1] = 0.84;
          colors[i * 3 + 2] = 0.0;
        } else {
          // Ultraviolet Dust (#B800FF)
          colors[i * 3] = 0.72;
          colors[i * 3 + 1] = 0.0;
          colors[i * 3 + 2] = 1.0;
        }
      }

      particlesData.push({
        x: x0,
        y: y0,
        z: z0,
        vx: 0,
        vy: 0,
        vz: 0,
        r,
        baseAngle,
        armId,
        id: i
      });
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const pMaterial = new THREE.PointsMaterial({
      size: 0.048,
      vertexColors: true,
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    const particleSystem = new THREE.Points(geometry, pMaterial);
    scene.add(particleSystem);

    const clock = new THREE.Clock();
    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const time = clock.getElapsedTime();

      // Smooth progress calculation across 6 chapters
      currentScrollProgressRef.current += (targetScrollProgressRef.current - currentScrollProgressRef.current) * 0.055;
      const progress = currentScrollProgressRef.current;

      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.08;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.08;

      const mouse3DX = mouseRef.current.x * 5.0;
      const mouse3DY = mouseRef.current.y * 3.5;

      const posAttribute = geometry.attributes.position;
      const posArray = posAttribute.array as Float32Array;

      // Core rotation: flat rotation curve where angle rotates around center
      for (let i = 0; i < particleCount; i++) {
        const p = particlesData[i];

        // Flat rotation curve logic: stars orbit at speeds inversely proportional to radius
        // Core rotates faster, arms rotate slightly slower but at a constant rate
        const rotSpeed = p.armId === -1 ? 0.35 : 0.2 / (p.r * 0.2 + 0.8);
        const currentAngle = p.baseAngle + time * rotSpeed;

        // Apply rotation to base target positions
        let targetX = 0;
        let targetY = 0;
        let targetZ = 0;

        // Calculate positions dynamically for 6 chapters morph targets
        if (progress < 1.0) {
          // Chapter 1 -> Chapter 2: Rotate standard Milky Way Disk (0) -> Zoom-in volumetric core (1)
          const t = progress;
          const x0 = p.armId === -1 ? p.r * Math.sin(Math.acos(positions[i * 3 + 2] / p.r)) * Math.cos(currentAngle) : p.r * Math.cos(currentAngle);
          const z0 = p.armId === -1 ? p.r * Math.cos(Math.acos(positions[i * 3 + 2] / p.r)) : p.r * Math.sin(currentAngle);
          
          const x0_base = pos0Disk[i].x;
          const z0_base = pos0Disk[i].z;
          const cR = Math.cos(time * rotSpeed);
          const sR = Math.sin(time * rotSpeed);

          const rotX0 = x0_base * cR - z0_base * sR;
          const rotZ0 = x0_base * sR + z0_base * cR;

          const rotX1 = pos1Zoom[i].x * cR - pos1Zoom[i].z * sR;
          const rotZ1 = pos1Zoom[i].x * sR + pos1Zoom[i].z * cR;

          targetX = rotX0 * (1 - t) + rotX1 * t;
          targetY = pos0Disk[i].y * (1 - t) + pos1Zoom[i].y * t;
          targetZ = rotZ0 * (1 - t) + rotZ1 * t;
        } else if (progress < 2.0) {
          // Chapter 2 -> Chapter 3: Zoom Core (1) -> Gravitational Wavy Disk (2)
          const t = progress - 1.0;
          const cR = Math.cos(time * rotSpeed);
          const sR = Math.sin(time * rotSpeed);

          const rotX1 = pos1Zoom[i].x * cR - pos1Zoom[i].z * sR;
          const rotZ1 = pos1Zoom[i].x * sR + pos1Zoom[i].z * cR;

          const rotX2 = pos2Wavy[i].x * cR - pos2Wavy[i].z * sR;
          const rotZ2 = pos2Wavy[i].x * sR + pos2Wavy[i].z * cR;

          targetX = rotX1 * (1 - t) + rotX2 * t;
          // Apply dynamic rippling waves directly to targetY
          const wavyY = pos2Wavy[i].y + Math.sin(p.r * 2.8 - time * 2.0) * 0.15 * t;
          targetY = pos1Zoom[i].y * (1 - t) + wavyY * t;
          targetZ = rotZ1 * (1 - t) + rotZ2 * t;
        } else if (progress < 3.0) {
          // Chapter 3 -> Chapter 4: Gravitational Wave Disk (2) -> Clean Star Trails (3)
          const t = progress - 2.0;
          const cR = Math.cos(time * rotSpeed);
          const sR = Math.sin(time * rotSpeed);

          const rotX2 = pos2Wavy[i].x * cR - pos2Wavy[i].z * sR;
          const rotZ2 = pos2Wavy[i].x * sR + pos2Wavy[i].z * cR;

          const rotX3 = pos3Trails[i].x * cR - pos3Trails[i].z * sR;
          const rotZ3 = pos3Trails[i].x * sR + pos3Trails[i].z * cR;

          targetX = rotX2 * (1 - t) + rotX3 * t;
          targetY = pos2Wavy[i].y * (1 - t) + pos3Trails[i].y * t;
          targetZ = rotZ2 * (1 - t) + rotZ3 * t;
        } else if (progress < 4.0) {
          // Chapter 4 -> Chapter 5: Clean Trails (3) -> Double Helix Disk (4)
          const t = progress - 3.0;
          const cR = Math.cos(time * rotSpeed);
          const sR = Math.sin(time * rotSpeed);

          const rotX3 = pos3Trails[i].x * cR - pos3Trails[i].z * sR;
          const rotZ3 = pos3Trails[i].x * sR + pos3Trails[i].z * cR;

          const rotX4 = pos4Helix[i].x * cR - pos4Helix[i].z * sR;
          const rotZ4 = pos4Helix[i].x * sR + pos4Helix[i].z * cR;

          targetX = rotX3 * (1 - t) + rotX4 * t;
          targetY = pos3Trails[i].y * (1 - t) + pos4Helix[i].y * t;
          targetZ = rotZ3 * (1 - t) + rotZ4 * t;
        } else {
          // Chapter 5 -> Chapter 6: Double Helix (4) -> Gravity singularity pulling into black hole (5)
          const t = progress - 4.0;
          const cR = Math.cos(time * rotSpeed);
          const sR = Math.sin(time * rotSpeed);

          const rotX4 = pos4Helix[i].x * cR - pos4Helix[i].z * sR;
          const rotZ4 = pos4Helix[i].x * sR + pos4Helix[i].z * cR;

          // Pull coordinates strongly toward mouse location, forming spiral vortex orbit
          const vortexAngle = time * 3.5 + p.r * 1.5;
          // Orbit radius scales down to simulate black hole pull
          const orbitR = Math.max(0.1, p.r * 0.15);
          const vortexX = mouse3DX + orbitR * Math.cos(vortexAngle);
          const vortexY = mouse3DY + (Math.random() - 0.5) * 0.08;
          const vortexZ = orbitR * Math.sin(vortexAngle);

          targetX = rotX4 * (1 - t) + vortexX * t;
          targetY = pos4Helix[i].y * (1 - t) + vortexY * t;
          targetZ = rotZ4 * (1 - t) + vortexZ * t;
        }

        // Apply mouse ripple pushes in chapters 1-5
        if (progress < 4.0) {
          const dx = p.x - mouse3DX;
          const dy = p.y - mouse3DY;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 1.6) {
            const force = (1.6 - dist) * 0.07;
            targetX += (dx / dist) * force;
            targetY += (dy / dist) * force;
          }
        }

        // Smoothly update actual positions with inertia
        p.x += (targetX - p.x) * 0.08;
        p.y += (targetY - p.y) * 0.08;
        p.z += (targetZ - p.z) * 0.08;

        posArray[i * 3] = p.x;
        posArray[i * 3 + 1] = p.y;
        posArray[i * 3 + 2] = p.z;
      }

      posAttribute.needsUpdate = true;

      // Rotate camera around galaxy disk to present beautiful cinematic angles
      if (progress < 1.0) {
        // Standard wide perspective looking down at disk
        camera.position.x = Math.sin(time * 0.03) * 3.0;
        camera.position.y = 4.2; // tilted high looking down
        camera.position.z = 7.5;
        camera.lookAt(0, 0, 0);
      } else if (progress < 2.0) {
        // Zoom camera in tight to buldge
        const t = progress - 1.0;
        camera.position.x = Math.sin(time * 0.03) * (3.0 - t * 2.0);
        camera.position.y = 4.2 - t * 3.2; // pull camera down into disk plane
        camera.position.z = 7.5 - t * 3.5;
        camera.lookAt(0, 0, 0);
      } else if (progress < 3.0) {
        // Perspective looking along the waves of the disk
        const t = progress - 2.0;
        camera.position.x = 1.0;
        camera.position.y = 1.0 + t * 1.5;
        camera.position.z = 4.0 + t * 2.0;
        camera.lookAt(0, 0.2, 0);
      } else if (progress < 4.0) {
        // Looking down at the clean star trails
        const t = progress - 3.0;
        camera.position.x = 1.0 - t * 1.0;
        camera.position.y = 2.5 + t * 3.0;
        camera.position.z = 6.0;
        camera.lookAt(0, 0, 0);
      } else {
        // Cinematic rotating angle looking at helix/vortex
        camera.position.x = Math.cos(time * 0.04) * 2.0;
        camera.position.y = 5.5 - (progress - 4.0) * 1.5;
        camera.position.z = 6.0;
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
      num: '[ 01 // ORIGIN ]',
      title: 'We engineer extraordinary',
      accentTitle: 'digital products.',
      desc: 'Bespoke design combined with advanced software engineering. We create custom digital systems, interactive WebGL vector pipelines, and secure cloud platforms for premium enterprises.'
    },
    {
      num: '[ 02 // ETHOS ]',
      title: 'Design is science,',
      accentTitle: 'code is art.',
      desc: 'A digital interface should elicit wonder. We operate at the intersection of mathematical aesthetics and hardware-accelerated code. Cookieless tracking, minimal network roundtrips, and zero-latency animation flows.'
    },
    {
      num: '[ 03 // BLUEPRINT ]',
      title: 'Aesthetic Systems,',
      accentTitle: 'Pure Performance.',
      desc: 'We replace opaque timelines with fixed-price execution models. Transparent, native React codebases paired with custom Stripe invoicing, built to handle complex transaction networks.'
    },
    {
      num: '[ 04 // VANGUARD ]',
      title: 'Modern and secure',
      accentTitle: 'technical stacks.',
      desc: 'We leverage enterprise-ready toolkits to build high-availability architectures. Fully typed compilation, regional caching networks, edge computing nodes, and SCA-compliant checkout integrations.'
    },
    {
      num: '[ 05 // MOMENTUM ]',
      title: 'Delivered Globally,',
      accentTitle: 'Protected Legally.',
      desc: 'An active track record serving enterprises across the United Kingdom, Ireland, France, Germany, and Switzerland. Full contractual intellectual property ownership guarantees your code remains your asset.'
    },
    {
      num: '[ 06 // CONVERGENCE ]',
      title: 'Enter the Space,',
      accentTitle: 'Build the Blueprint.',
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
          <a 
            href="https://wa.me/353852258004" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 group px-4.5 py-1.5 rounded-full border border-white/10 hover:border-blue-500/35 hover:bg-white/[0.02] transition-all duration-300 select-none"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
            <span className="font-mono text-[8.5px] font-semibold tracking-wider text-white/60 group-hover:text-white uppercase transition-colors">Direct WhatsApp</span>
          </a>

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

      {/* Floating Story Progress indicator (Sidebar) */}
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
              0{idx + 1}
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
          
          {/* Chapter 1: The Origin (Hero) */}
          {currentChapter === 0 && (
            <motion.div 
              key="chapter-1"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-5xl mx-auto w-full text-center md:text-left pointer-events-auto"
            >
              <span className="font-mono text-[10px] tracking-[0.35em] text-blue-400 uppercase font-semibold">
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
                    Explore Ethos
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

          {/* Chapter 2: The Philosophy (Ethos) */}
          {currentChapter === 1 && (
            <motion.div 
              key="chapter-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-5xl mx-auto w-full text-center md:text-left pointer-events-auto"
            >
              <span className="font-mono text-[10px] tracking-[0.35em] text-blue-400 uppercase font-semibold">
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

          {/* Chapter 3: The Blueprint (Services Bento) */}
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
                  <span className="font-mono text-[10px] tracking-[0.35em] text-blue-400 uppercase font-semibold">
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

          {/* Chapter 4: The Engine (Vanguard Tech Stack) */}
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
                  <span className="font-mono text-[10px] tracking-[0.35em] text-blue-400 uppercase font-semibold">
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

          {/* Chapter 5: The Momentum (Stats & Credentials) */}
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
                <span className="font-mono text-[10px] tracking-[0.35em] text-blue-400 uppercase font-semibold">
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

          {/* Chapter 6: The Convergence (Contact & WhatsApp) */}
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
                  <span className="font-mono text-[10px] tracking-[0.35em] text-blue-400 uppercase font-semibold">
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
