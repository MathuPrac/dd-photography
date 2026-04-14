import { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

const shootTypes = [
  "Wedding",
  "Birthday",
  "Model Shoot",
  "Reception",
  "Outdoor / Nature",
  "Family Portrait",
  "Other",
];

const emptyForm = {
  name: "",
  phone: "",
  email: "",
  shootType: "",
  date: "",
  message: "",
};

export default function ContactSection() {
  const [form, setForm] = useState(emptyForm);
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    try {
      await axios.post("/api/contact", form);
      setStatus("success");
      setForm(emptyForm);
      setTimeout(() => setStatus("idle"), 4000);
    } catch (err) {
      console.error("Contact form error:", err);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  const inputClass =
    "w-full border-b bg-transparent py-3 text-sm outline-none transition-colors focus:border-gold placeholder:text-muted-foreground";

  return (
    <section id="contact" className="section-padding bg-cream">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <p className="section-subheading mb-4">Get In Touch</p>
          <h2 className="section-heading">Contact Us</h2>
          <div className="gold-divider mx-auto mt-6" />
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left — contact info + map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-8 space-y-6">
              <div>
                <p className="text-xs font-medium uppercase tracking-widest" style={{ color: "var(--muted-foreground)" }}>
                  Address
                </p>
                <p className="mt-1 font-serif text-lg" style={{ color: "var(--foreground)" }}>
                  Jaffna, Sri Lanka
                </p>
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-widest" style={{ color: "var(--muted-foreground)" }}>
                  Phone
                </p>
                <p className="mt-1 font-serif text-lg" style={{ color: "var(--foreground)" }}>
                  +94 21 222 3344
                </p>
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-widest" style={{ color: "var(--muted-foreground)" }}>
                  Email
                </p>
                <p className="mt-1 font-serif text-lg" style={{ color: "var(--foreground)" }}>
                  hello@ddphotography.lk
                </p>
              </div>
              <div className="flex gap-4">
                <a href="#" style={{ color: "var(--muted-foreground)" }} className="transition-colors hover:opacity-80" aria-label="Instagram">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>
                <a href="#" style={{ color: "var(--muted-foreground)" }} className="transition-colors hover:opacity-80" aria-label="Facebook">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="aspect-video overflow-hidden rounded-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63036.75952747687!2d80.0!3d9.6615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afe53fd7be66aa3%3A0x57e3b40f6cf5e6a7!2sJaffna%2C%20Sri%20Lanka!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="DD Photography location — Jaffna, Sri Lanka"
              />
            </div>
          </motion.div>

          {/* Right — booking form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="elegant-card space-y-5 p-8">
              <h3 className="font-serif text-2xl" style={{ color: "var(--foreground)" }}>
                Book a Session
              </h3>
              <div className="gold-divider mb-2" />

              <input
                type="text"
                placeholder="Your Name"
                required
                maxLength={100}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className={inputClass}
                style={{ color: "var(--foreground)", borderColor: "var(--border)" }}
              />
              <input
                type="tel"
                placeholder="Phone Number"
                required
                maxLength={20}
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className={inputClass}
                style={{ color: "var(--foreground)", borderColor: "var(--border)" }}
              />
              <input
                type="email"
                placeholder="Email Address"
                required
                maxLength={255}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className={inputClass}
                style={{ color: "var(--foreground)", borderColor: "var(--border)" }}
              />
              <select
                required
                value={form.shootType}
                onChange={(e) => setForm({ ...form, shootType: e.target.value })}
                className={inputClass}
                style={{ color: form.shootType ? "var(--foreground)" : "var(--muted-foreground)", borderColor: "var(--border)" }}
              >
                <option value="" disabled>Shoot Type</option>
                {shootTypes.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
              <input
                type="date"
                required
                value={form.date}
                onChange={(e) => setForm({ ...form, date: e.target.value })}
                className={inputClass}
                style={{ color: "var(--foreground)", borderColor: "var(--border)" }}
              />
              <textarea
                placeholder="Tell us about your vision..."
                rows={3}
                maxLength={1000}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className={`${inputClass} resize-none`}
                style={{ color: "var(--foreground)", borderColor: "var(--border)" }}
              />

              {status === "error" && (
                <p className="text-sm text-red-500">Something went wrong. Please try again.</p>
              )}

              <button
                type="submit"
                className="btn-primary w-full"
                disabled={status === "loading"}
              >
                {status === "loading"
                  ? "Sending..."
                  : status === "success"
                  ? "Message Sent ✓"
                  : "Send Inquiry"}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
