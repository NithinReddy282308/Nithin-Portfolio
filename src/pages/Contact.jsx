import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { send } from "@emailjs/browser";

import "../CSS/Contact.css";

export default function Contact() {
  const [form, setForm] = useState({ name: "", contact: "", subject: "", message: "" });
  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);
  const formRef = useRef(null);

  // Vite env vars
  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");

    // simple validation
    if (!form.name || !form.contact || !form.subject || !form.message) {
      setStatus("⚠️ Please fill in all fields.");
      return;
    }

    // enforce contact is an email
    const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    const contactTrim = form.contact.trim();
    if (!emailPattern.test(contactTrim)) {
      setStatus("⚠️ Please enter a valid email address in the contact field.");
      return;
    }

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      console.error("Missing EmailJS env vars:", { SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY });
      setStatus("❌ Email service not configured. Check .env and restart dev server.");
      return;
    }

    setStatus("Sending...");
    setSending(true);

    // keys must match template: {{name}}, {{title}}, {{message}}, {{email}}
    const templateParams = {
      name: form.name.trim(),
      title: form.subject.trim(),
      message: form.message.trim(),
      email: contactTrim,
    };

    try {
      await send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
      setStatus("✅ Message sent successfully!");
      setForm({ name: "", contact: "", subject: "", message: "" });
    } catch (err) {
      console.error("EmailJS send error:", err);
      let msg = "❌ Failed to send. Check console and EmailJS logs.";
      if (err && err.status) msg = `❌ Failed (${err.status}). ${err.text || ""}`;
      setStatus(msg);
    } finally {
      setSending(false);
    }
  };

  const quickLinks = [
    { img: "/github.png", title: "GitHub", link: "https://github.com/NithinReddy282308" },
    { img: "/linkedin.png", title: "LinkedIn", link: "https://www.linkedin.com/in/vanganithinreddy/" },
    { img: "/gmail.png", title: "Email", link: "mailto:nithinrvanga@gmail.com" },
    { img: "/whatsapp.png", title: "WhatsApp", link: "https://wa.me/+919177713081" },
  ];

  return (
    <section className="contact-section">
      <motion.h1
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="contact-title"
      >
        Let’s Connect & Collaborate 🤝
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="contact-subtitle"
      >
        Whether it’s a new project, a collaboration, or just to say hi - I’d
        love to hear from you!
      </motion.p>

      {/* Quick Links */}
      <motion.div className="contact-links">
        {quickLinks.map((item, i) => (
          <motion.a
            key={i}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            whileHover={{ scale: 1.15, rotate: 5 }}
            transition={{ type: "spring", stiffness: 250 }}
          >
            <motion.img
              src={item.img}
              alt={item.title}
              className="social-icon"
              animate={{ y: [0, -6, 0] }}
              transition={{
                duration: 3 + i * 0.3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.a>
        ))}
      </motion.div>

      {/* Contact Form */}
      <motion.form
        ref={formRef}
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.9 }}
        className="contact-form"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        {/* enforced email input */}
        <input
          type="email"
          name="contact"
          placeholder="Your Email"
          value={form.contact}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={form.subject}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message..."
          value={form.message}
          onChange={handleChange}
          rows="5"
          required
        />

        <motion.button
          type="submit"
          className="contact-btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          disabled={sending}
          style={{ opacity: sending ? 0.7 : 1, cursor: sending ? "not-allowed" : "pointer" }}
        >
          {sending ? "Sending..." : "Send Message"}
        </motion.button>

        {status && (
          <motion.p
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="contact-status"
          >
            {status}
          </motion.p>
        )}
      </motion.form>
    </section>
  );
}
