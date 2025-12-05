import { Link } from "react-router-dom";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";
import { useEffect, useState, useRef, useMemo, useCallback, memo } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

// Floating orb component
const FloatingOrb = memo(({ 
  size, 
  initialX, 
  initialY, 
  duration, 
  delay,
  mouseX,
  mouseY,
  parallaxStrength = 0.02
}: { 
  size: number; 
  initialX: string; 
  initialY: string; 
  duration: number; 
  delay: number;
  mouseX: any;
  mouseY: any;
  parallaxStrength?: number;
}) => {
  const x = useTransform(mouseX, (val: number) => val * parallaxStrength);
  const y = useTransform(mouseY, (val: number) => val * parallaxStrength);

  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{
        width: size,
        height: size,
        left: initialX,
        top: initialY,
        background: `radial-gradient(circle, hsl(38 92% 50% / 0.4) 0%, hsl(38 92% 50% / 0.1) 50%, transparent 70%)`,
        filter: `blur(${size / 4}px)`,
        x,
        y,
        transform: 'translateZ(0)',
        willChange: 'transform, opacity',
      }}
      animate={{
        y: [0, -30, 0, 20, 0],
        x: [0, 15, -10, 5, 0],
        scale: [1, 1.1, 0.95, 1.05, 1],
        opacity: [0.6, 0.8, 0.5, 0.7, 0.6],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
});
FloatingOrb.displayName = 'FloatingOrb';

// Light particle component
const LightParticle = memo(({ delay, duration, startX }: { delay: number; duration: number; startX: string }) => (
  <motion.div
    className="absolute w-1 h-1 rounded-full bg-primary/60 pointer-events-none"
    style={{ 
      left: startX, 
      bottom: "10%",
      transform: 'translateZ(0)',
      willChange: 'transform, opacity',
    }}
    initial={{ opacity: 0, y: 0 }}
    animate={{
      opacity: [0, 1, 1, 0],
      y: [0, -400, -600, -800],
      x: [0, Math.random() * 40 - 20, Math.random() * 60 - 30],
    }}
    transition={{
      duration,
      delay,
      repeat: Infinity,
      ease: "linear",
    }}
  />
));
LightParticle.displayName = 'LightParticle';

// Sparkle component
const Sparkle = memo(({ x, y, delay }: { x: string; y: string; delay: number }) => (
  <motion.div
    className="absolute w-1 h-1 pointer-events-none"
    style={{ 
      left: x, 
      top: y,
      transform: 'translateZ(0)',
      willChange: 'transform, opacity',
    }}
    initial={{ opacity: 0, scale: 0 }}
    animate={{
      opacity: [0, 1, 0],
      scale: [0, 1, 0],
    }}
    transition={{
      duration: 2,
      delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  >
    <div className="w-full h-full bg-primary rounded-full" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1px] h-3 bg-gradient-to-b from-transparent via-primary to-transparent" />
  </motion.div>
));
Sparkle.displayName = 'Sparkle';

// Lens flare component
const LensFlare = memo(({ 
  mouseX, 
  mouseY, 
  parallaxStrength 
}: { 
  mouseX: any; 
  mouseY: any; 
  parallaxStrength: number;
}) => {
  const x = useTransform(mouseX, (val: number) => val * parallaxStrength);
  const y = useTransform(mouseY, (val: number) => val * parallaxStrength);

  return (
    <motion.div
      className="absolute top-1/4 right-1/4 w-64 h-2 pointer-events-none"
      style={{
        background: "linear-gradient(90deg, transparent, hsl(38 92% 50% / 0.3), hsl(40 100% 65% / 0.2), transparent)",
        filter: "blur(2px)",
        transform: "rotate(-45deg) translateZ(0)",
        willChange: 'transform, opacity',
        x,
        y,
      }}
      animate={{
        opacity: [0.3, 0.6, 0.3],
        scaleX: [1, 1.2, 1],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
});
LensFlare.displayName = 'LensFlare';

export const HeroSection = () => {
  const containerRef = useRef<HTMLElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const isMobile = useIsMobile();
  
  // Mouse position for parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothMouseX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothMouseY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  // Spotlight position
  const spotlightX = useTransform(smoothMouseX, (val) => val * 0.1);
  const spotlightY = useTransform(smoothMouseY, (val) => val * 0.1);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (containerRef.current && !isMobile) {
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      mouseX.set(e.clientX - centerX);
      mouseY.set(e.clientY - centerY);
    }
  }, [mouseX, mouseY, isMobile]);

  useEffect(() => {
    if (isMobile) return;
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove, isMobile]);

  // Generate particles - reduce on mobile
  const particles = useMemo(() => {
    const count = isMobile ? 5 : 15;
    return Array.from({ length: count }, (_, i) => ({
      delay: i * 0.8,
      duration: 8 + Math.random() * 4,
      startX: `${10 + Math.random() * 80}%`,
    }));
  }, [isMobile]);

  // Generate sparkles - reduce on mobile
  const sparkles = useMemo(() => {
    const count = isMobile ? 6 : 12;
    return Array.from({ length: count }, (_, i) => ({
      x: `${10 + Math.random() * 80}%`,
      y: `${15 + Math.random() * 70}%`,
      delay: i * 0.7,
    }));
  }, [isMobile]);

  // Orbs - reduce on mobile
  const orbs = useMemo(() => {
    if (isMobile) {
      return [
        { size: 150, initialX: "10%", initialY: "20%", duration: 12, delay: 0, parallaxStrength: 0.03 },
        { size: 120, initialX: "80%", initialY: "15%", duration: 15, delay: 2, parallaxStrength: 0.025 },
      ];
    }
    return [
      { size: 200, initialX: "10%", initialY: "20%", duration: 12, delay: 0, parallaxStrength: 0.03 },
      { size: 150, initialX: "80%", initialY: "15%", duration: 15, delay: 2, parallaxStrength: 0.025 },
      { size: 180, initialX: "70%", initialY: "60%", duration: 18, delay: 1, parallaxStrength: 0.035 },
      { size: 120, initialX: "15%", initialY: "70%", duration: 14, delay: 3, parallaxStrength: 0.02 },
      { size: 100, initialX: "50%", initialY: "30%", duration: 16, delay: 4, parallaxStrength: 0.04 },
      { size: 80, initialX: "35%", initialY: "75%", duration: 13, delay: 2.5, parallaxStrength: 0.025 },
    ];
  }, [isMobile]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ 
          backgroundImage: `url(${heroBg})`,
          transform: 'translateZ(0)',
          willChange: 'transform',
        }}
      />
      
      {/* Base gradient overlay */}
      <div className="absolute inset-0 bg-hero-gradient" />
      
      {/* Animated gradient background */}
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 30% 20%, hsl(38 92% 50% / 0.08) 0%, transparent 50%)",
        }}
        animate={{
          background: [
            "radial-gradient(ellipse at 30% 20%, hsl(38 92% 50% / 0.08) 0%, transparent 50%)",
            "radial-gradient(ellipse at 70% 60%, hsl(38 92% 50% / 0.1) 0%, transparent 50%)",
            "radial-gradient(ellipse at 40% 80%, hsl(38 92% 50% / 0.08) 0%, transparent 50%)",
            "radial-gradient(ellipse at 30% 20%, hsl(38 92% 50% / 0.08) 0%, transparent 50%)",
          ],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Mouse-responsive spotlight - only on desktop */}
      {!isMobile && (
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(circle at 50% 50%, hsl(38 92% 50% / 0.06) 0%, transparent 40%)",
            transform: 'translateZ(0)',
            willChange: 'transform',
            x: spotlightX,
            y: spotlightY,
          }}
        />
      )}

      {/* Rotating grid pattern - simplified on mobile */}
      {!isMobile && (
        <motion.div 
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(to right, hsl(0 0% 100% / 0.02) 1px, transparent 1px), linear-gradient(to bottom, hsl(0 0% 100% / 0.02) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            transform: 'translateZ(0)',
            willChange: 'transform',
          }}
          animate={{
            rotate: [0, 1, 0, -1, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      )}

      {/* Floating golden orbs */}
      {orbs.map((orb, i) => (
        <FloatingOrb 
          key={i}
          size={orb.size} 
          initialX={orb.initialX} 
          initialY={orb.initialY} 
          duration={orb.duration} 
          delay={orb.delay} 
          mouseX={smoothMouseX} 
          mouseY={smoothMouseY} 
          parallaxStrength={orb.parallaxStrength} 
        />
      ))}

      {/* Lens flares - only on desktop */}
      {!isMobile && (
        <>
          <LensFlare mouseX={smoothMouseX} mouseY={smoothMouseY} parallaxStrength={0.05} />
          <motion.div
            className="absolute bottom-1/3 left-1/4 w-48 h-1 pointer-events-none"
            style={{
              background: "linear-gradient(90deg, transparent, hsl(40 100% 65% / 0.25), transparent)",
              filter: "blur(1px)",
              transform: "rotate(30deg) translateZ(0)",
              willChange: 'transform, opacity',
            }}
            animate={{
              opacity: [0.2, 0.5, 0.2],
              scaleX: [0.8, 1.1, 0.8],
            }}
            transition={{
              duration: 5,
              delay: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </>
      )}

      {/* Light particles */}
      {particles.map((particle, i) => (
        <LightParticle key={i} {...particle} />
      ))}

      {/* Sparkles */}
      {sparkles.map((sparkle, i) => (
        <Sparkle key={i} {...sparkle} />
      ))}

      {/* Hover ripple effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          background: isHovering 
            ? "radial-gradient(circle at 50% 50%, hsl(38 92% 50% / 0.08) 0%, transparent 60%)"
            : "radial-gradient(circle at 50% 50%, hsl(38 92% 50% / 0) 0%, transparent 60%)",
        }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />

      {/* Hover brightness boost on headline area */}
      <motion.div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, hsl(38 92% 50% / 0.05) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
        animate={{
          opacity: isHovering ? 1 : 0.3,
          scale: isHovering ? 1.1 : 1,
        }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      />

      <div className="container-custom relative z-10 pt-32 pb-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">Full-Service Creative Agency</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-foreground mb-6 leading-tight"
          >
            <span className="gradient-text">Varnil Visuals</span>
            <br />
            <span className="text-foreground/90">Editing & Creative Agency</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            We transform brands, creators, and businesses with premium Video Editing, 
            Photo Editing, Graphic Design, and Branding Solutions.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button asChild variant="hero" size="xl">
              <Link to="/contact">
                Get a Quote
                <ArrowRight size={20} />
              </Link>
            </Button>
            <Button asChild variant="hero-outline" size="xl">
              <Link to="/portfolio">
                <Play size={20} />
                View Portfolio
              </Link>
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { value: "200+", label: "Projects Delivered" },
              { value: "50+", label: "Happy Clients" },
              { value: "2+", label: "Years Experience" },
              { value: "24/7", label: "Support" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl md:text-4xl font-display font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2"
        >
          <div className="w-1 h-2 bg-primary rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};
