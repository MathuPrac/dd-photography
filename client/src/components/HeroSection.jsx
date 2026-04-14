import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

export default function HeroSection() {
  return (
    <section id="hero" className="relative flex h-screen items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Cinematic wedding photography by DD Photography"
          className="h-full w-full object-cover"
          width={1920}
          height={1080}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(250,247,243,0.4) 0%, rgba(250,247,243,0.2) 50%, rgba(250,247,243,0.6) 100%)",
          }}
        />
      </div>

      <div className="relative z-10 text-center px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="section-subheading mb-6"
          style={{ color: "color-mix(in srgb, var(--foreground) 80%, transparent)" }}
        >
          Jaffna, Sri Lanka
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-serif text-5xl font-light leading-none tracking-tight md:text-7xl lg:text-8xl"
          style={{ color: "var(--foreground)" }}
        >
          DD Photography
        </motion.h1>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="gold-divider mx-auto my-8"
        />
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="font-serif text-lg italic md:text-xl"
          style={{ color: "color-mix(in srgb, var(--foreground) 70%, transparent)" }}
        >
          Capturing Timeless Moments in Jaffna
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div
          className="h-10 w-px"
          style={{
            backgroundColor: "color-mix(in srgb, var(--foreground) 30%, transparent)",
            animation: "scroll-indicator 2s ease-in-out infinite",
          }}
        />
      </motion.div>
    </section>
  );
}
