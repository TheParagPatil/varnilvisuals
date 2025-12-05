import { motion } from "framer-motion";
import { useEffect, useState, useMemo, memo } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

// Particle component
const Particle = memo(({ index }: { index: number }) => {
  const angle = (index / 20) * Math.PI * 2;
  const radius = 80 + Math.random() * 60;
  const duration = 3 + Math.random() * 2;
  const delay = Math.random() * 2;
  
  return (
    <motion.div
      className="absolute w-1 h-1 rounded-full bg-primary/60"
      style={{
        left: "50%",
        top: "50%",
      }}
      initial={{ 
        x: Math.cos(angle) * 40,
        y: Math.sin(angle) * 40,
        opacity: 0,
        scale: 0,
      }}
      animate={{
        x: [
          Math.cos(angle) * 40,
          Math.cos(angle + 0.5) * radius,
          Math.cos(angle + 1) * (radius + 20),
          Math.cos(angle + 1.5) * radius,
          Math.cos(angle + 2) * 40,
        ],
        y: [
          Math.sin(angle) * 40,
          Math.sin(angle + 0.5) * radius,
          Math.sin(angle + 1) * (radius + 20),
          Math.sin(angle + 1.5) * radius,
          Math.sin(angle + 2) * 40,
        ],
        opacity: [0, 0.8, 0.6, 0.8, 0],
        scale: [0, 1, 1.2, 1, 0],
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
Particle.displayName = 'Particle';

// Sparkle component
const Sparkle = memo(({ delay }: { delay: number }) => {
  const x = Math.random() * 300 - 150;
  const y = Math.random() * 300 - 150;
  
  return (
    <motion.div
      className="absolute"
      style={{
        left: "50%",
        top: "50%",
        x,
        y,
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0, 1, 0],
        scale: [0, 1, 0],
      }}
      transition={{
        duration: 1.5,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <div className="w-1 h-1 bg-primary rounded-full" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-[1px] bg-gradient-to-r from-transparent via-primary/80 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1px] h-3 bg-gradient-to-b from-transparent via-primary/80 to-transparent" />
    </motion.div>
  );
});
Sparkle.displayName = 'Sparkle';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen = memo(({ onComplete }: LoadingScreenProps) => {
  const [isExiting, setIsExiting] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    // Start exit animation after 2.5 seconds
    const exitTimer = setTimeout(() => {
      setIsExiting(true);
    }, 2500);

    // Complete loading after exit animation
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 3200);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  const particles = useMemo(() => {
    const count = isMobile ? 10 : 20;
    return Array.from({ length: count }, (_, i) => i);
  }, [isMobile]);

  const sparkles = useMemo(() => {
    const count = isMobile ? 4 : 8;
    return Array.from({ length: count }, (_, i) => i * 0.3);
  }, [isMobile]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background overflow-hidden"
      initial={{ opacity: 1 }}
      animate={{ opacity: isExiting ? 0 : 1 }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
    >
      {/* Background gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(38_92%_50%/0.08)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(38_92%_50%/0.05)_0%,transparent_40%)]" />
      
      {/* Animated background glow */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full"
        style={{
          background: "radial-gradient(circle, hsl(38 92% 50% / 0.1) 0%, transparent 60%)",
          filter: "blur(60px)",
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Outer glow ring */}
      <motion.div
        className="absolute w-48 h-48 rounded-full"
        style={{
          background: "radial-gradient(circle, transparent 40%, hsl(38 92% 50% / 0.2) 60%, transparent 70%)",
          filter: "blur(20px)",
        }}
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Main golden orb */}
      <motion.div
        className="relative w-32 h-32 rounded-full"
        style={{
          background: "radial-gradient(circle at 30% 30%, hsl(40 100% 65%) 0%, hsl(38 92% 50%) 40%, hsl(35 85% 40%) 100%)",
          boxShadow: "0 0 60px hsl(38 92% 50% / 0.6), 0 0 120px hsl(38 92% 50% / 0.4), inset 0 0 30px hsl(40 100% 70% / 0.3)",
          transform: 'translateZ(0)',
          willChange: 'transform, opacity',
        }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: isExiting ? [1, 1.5, 0] : [0, 1, 1],
          opacity: isExiting ? [1, 0.8, 0] : [0, 1, 1],
        }}
        transition={{
          duration: isExiting ? 0.7 : 0.8,
          ease: "easeInOut",
        }}
      >
        {/* Inner glow */}
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            background: "radial-gradient(circle at 40% 40%, hsl(40 100% 80% / 0.5) 0%, transparent 50%)",
          }}
          animate={{
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Pulse rings */}
        {[1, 2, 3].map((ring) => (
          <motion.div
            key={ring}
            className="absolute inset-0 rounded-full border border-primary/30"
            initial={{ scale: 1, opacity: 0.6 }}
            animate={{
              scale: [1, 2, 2.5],
              opacity: [0.6, 0.2, 0],
            }}
            transition={{
              duration: 2,
              delay: ring * 0.5,
              repeat: Infinity,
              ease: "easeOut",
            }}
          />
        ))}

        {/* Logo "V" inside orb */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{
            opacity: isExiting ? 0 : [0, 1, 1, 1],
            scale: isExiting ? 0.5 : [0.5, 1, 1, 1],
          }}
          transition={{
            duration: 0.6,
            delay: isExiting ? 0 : 0.4,
            ease: "easeOut",
          }}
        >
          <span 
            className="text-5xl font-display font-bold"
            style={{
              color: "hsl(0 0% 4%)",
              textShadow: "0 0 20px hsl(40 100% 70% / 0.5)",
            }}
          >
            V
          </span>
        </motion.div>
      </motion.div>

      {/* Particles */}
      <div className="absolute pointer-events-none">
        {particles.map((i) => (
          <Particle key={i} index={i} />
        ))}
      </div>

      {/* Sparkles */}
      <div className="absolute pointer-events-none">
        {sparkles.map((delay, i) => (
          <Sparkle key={i} delay={delay} />
        ))}
      </div>

      {/* Text below orb */}
      <motion.div
        className="absolute mt-56 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: isExiting ? 0 : [0, 1, 1],
          y: isExiting ? 20 : [20, 0, 0],
        }}
        transition={{
          duration: 0.6,
          delay: isExiting ? 0 : 0.8,
          ease: "easeOut",
        }}
      >
        {/* Brand name */}
        <motion.h1
          className="text-2xl font-display font-bold gradient-text mb-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: isExiting ? 0 : 1 }}
          transition={{ delay: isExiting ? 0 : 1, duration: 0.5 }}
        >
          Varnil Visuals
        </motion.h1>

        {/* Tagline with typing effect simulation */}
        <motion.div className="flex items-center justify-center gap-1 text-muted-foreground text-sm">
          {"Crafting Creativity".split("").map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: isExiting ? 0 : 1 }}
              transition={{
                delay: isExiting ? 0 : 1.2 + i * 0.05,
                duration: 0.1,
              }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
          <motion.span
            className="inline-block w-0.5 h-4 bg-primary ml-1"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 0.8, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>

      {/* Bottom progress bar */}
      <motion.div
        className="absolute bottom-20 left-1/2 -translate-x-1/2 w-48 h-0.5 bg-muted rounded-full overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: isExiting ? 0 : 1 }}
        transition={{ delay: 0.5, duration: 0.3 }}
      >
        <motion.div
          className="h-full bg-gradient-to-r from-primary via-[hsl(40_100%_65%)] to-primary rounded-full"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 2.5, ease: "easeInOut" }}
        />
      </motion.div>
    </motion.div>
  );
});
LoadingScreen.displayName = 'LoadingScreen';
