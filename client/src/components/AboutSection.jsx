import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

function AnimatedCounter({ target, suffix = "" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const start = performance.now();
          const animate = (now) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="text-center">
      <span className="font-serif text-5xl font-light md:text-6xl" style={{ color: "var(--foreground)" }}>
        {count}{suffix}
      </span>
    </div>
  );
}

const stats = [
  { label: "Years of Experience", value: 8, suffix: "+" },
  { label: "Happy Clients", value: 500, suffix: "+" },
  { label: "Shoots Completed", value: 1200, suffix: "+" },
  { label: "Awards", value: 15, suffix: "" },
];

export default function AboutSection() {
  return (
    <section id="about" className="section-padding">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <p className="section-subheading mb-4">Our Story</p>
          <h2 className="section-heading mb-8">About Us</h2>
          <div className="gold-divider mx-auto mb-10" />
          <p
            className="mx-auto max-w-2xl font-sans text-base leading-relaxed md:text-lg"
            style={{ color: "var(--muted-foreground)" }}
          >
            DD Photography is a Jaffna-based studio dedicated to capturing life's most precious
            moments with an artistic, timeless approach. From intimate portraits to grand celebrations,
            we believe every frame should tell a story — one that feels as real and beautiful decades
            from now as it does today.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="text-center"
            >
              <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              <p
                className="mt-3 text-xs font-medium uppercase tracking-widest"
                style={{ color: "var(--muted-foreground)" }}
              >
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
