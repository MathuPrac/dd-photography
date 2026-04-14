import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Thamilini & Karthik",
    type: "Wedding Shoot",
    rating: 5,
    text: "DD Photography captured our wedding with such grace and emotion. Every photo tells the story of our special day perfectly. We couldn't have asked for more.",
  },
  {
    name: "Sivashankar R.",
    type: "Family Portrait",
    rating: 5,
    text: "The team made our family feel so comfortable. The portraits turned out stunning — natural, warm, and full of life. Truly talented artists.",
  },
  {
    name: "Niranjana M.",
    type: "Model Shoot",
    rating: 5,
    text: "Working with DD Photography was an absolute dream. Dinesh has an incredible eye for angles and lighting. My portfolio has never looked better.",
  },
  {
    name: "Kumaran & Praveena",
    type: "Reception Shoot",
    rating: 5,
    text: "From the decor details to the dance floor moments, they captured everything beautifully. The team was professional yet so friendly.",
  },
  {
    name: "Lakshmi S.",
    type: "Birthday Party",
    rating: 5,
    text: "They turned my daughter's first birthday into a storybook of memories. The candid shots were magical. Highly recommend DD Photography!",
  },
  {
    name: "Aadhithyan V.",
    type: "Outdoor Shoot",
    rating: 4,
    text: "The outdoor session in Jaffna Fort was breathtaking. They knew exactly how to use the golden hour light. Exceptional quality and service.",
  },
];

function Stars({ count }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className="h-3.5 w-3.5"
          fill="currentColor"
          viewBox="0 0 20 20"
          style={{ color: i < count ? "var(--gold)" : "var(--border)" }}
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  return (
    <section id="testimonials" className="section-padding">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <p className="section-subheading mb-4">Kind Words</p>
          <h2 className="section-heading">Testimonials</h2>
          <div className="gold-divider mx-auto mt-6" />
        </motion.div>

        <div className="relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="elegant-card mx-auto max-w-2xl bg-cream p-8 text-center md:p-12"
            >
              <Stars count={testimonials[current].rating} />
              <p
                className="mt-6 font-serif text-lg leading-relaxed italic md:text-xl"
                style={{ color: "var(--foreground)" }}
              >
                "{testimonials[current].text}"
              </p>
              <div className="gold-divider mx-auto my-6" />
              <p className="font-sans text-sm font-semibold" style={{ color: "var(--foreground)" }}>
                {testimonials[current].name}
              </p>
              <p
                className="mt-1 text-xs uppercase tracking-widest"
                style={{ color: "var(--muted-foreground)" }}
              >
                {testimonials[current].type}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-10 flex justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className="h-2 rounded-full transition-all duration-300"
              style={{
                width: i === current ? "2rem" : "0.5rem",
                backgroundColor: i === current ? "var(--gold)" : "var(--border)",
              }}
              aria-label={`Testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
