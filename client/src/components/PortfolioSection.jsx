import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import wedding1 from "@/assets/portfolio/wedding-1.jpg";
import wedding2 from "@/assets/portfolio/wedding-2.jpg";
import wedding3 from "@/assets/portfolio/wedding-3.jpg";
import birthday1 from "@/assets/portfolio/birthday-1.jpg";
import model1 from "@/assets/portfolio/model-1.jpg";
import reception1 from "@/assets/portfolio/reception-1.jpg";
import outdoor1 from "@/assets/portfolio/outdoor-1.jpg";
import family1 from "@/assets/portfolio/family-1.jpg";

const categories = ["All", "Weddings", "Birthdays", "Model Shoots", "Receptions", "Outdoor", "Family"];

const images = [
  { src: wedding1, alt: "Traditional Tamil wedding ceremony", category: "Weddings", aspect: "landscape" },
  { src: wedding2, alt: "Elegant wedding portrait", category: "Weddings", aspect: "portrait" },
  { src: wedding3, alt: "Wedding ceremony details", category: "Weddings", aspect: "landscape" },
  { src: birthday1, alt: "Birthday celebration", category: "Birthdays", aspect: "landscape" },
  { src: model1, alt: "Fashion model shoot", category: "Model Shoots", aspect: "portrait" },
  { src: reception1, alt: "Reception party", category: "Receptions", aspect: "landscape" },
  { src: outdoor1, alt: "Outdoor sunset shoot", category: "Outdoor", aspect: "portrait" },
  { src: family1, alt: "Family portrait", category: "Family", aspect: "landscape" },
];

export default function PortfolioSection() {
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState(null);

  const filtered = active === "All" ? images : images.filter((img) => img.category === active);

  return (
    <section id="portfolio" className="section-padding bg-cream">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <p className="section-subheading mb-4">Our Work</p>
          <h2 className="section-heading">Portfolio</h2>
          <div className="gold-divider mx-auto mt-6" />
        </motion.div>

        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className="rounded-full px-5 py-2 text-xs font-medium tracking-widest uppercase transition-all duration-300"
              style={{
                backgroundColor: active === cat ? "var(--primary)" : "var(--background)",
                color: active === cat ? "var(--primary-foreground)" : "var(--muted-foreground)",
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div layout className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((img, i) => (
              <motion.div
                key={img.src}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="image-hover mb-4 cursor-pointer break-inside-avoid overflow-hidden rounded-lg"
                onClick={() => setLightbox(images.indexOf(img))}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full object-cover"
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ backgroundColor: "rgba(40, 30, 20, 0.90)" }}
            onClick={() => setLightbox(null)}
          >
            <motion.img
              key={lightbox}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              src={images[lightbox].src}
              alt={images[lightbox].alt}
              className="max-h-[90vh] max-w-[90vw] rounded-lg object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-6 right-6 font-serif text-3xl"
              style={{ color: "rgba(250,247,243,0.8)" }}
            >
              ×
            </button>
            {lightbox > 0 && (
              <button
                onClick={(e) => { e.stopPropagation(); setLightbox(lightbox - 1); }}
                className="absolute left-6 font-serif text-4xl"
                style={{ color: "rgba(250,247,243,0.6)" }}
              >
                ‹
              </button>
            )}
            {lightbox < images.length - 1 && (
              <button
                onClick={(e) => { e.stopPropagation(); setLightbox(lightbox + 1); }}
                className="absolute right-6 font-serif text-4xl"
                style={{ color: "rgba(250,247,243,0.6)" }}
              >
                ›
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
