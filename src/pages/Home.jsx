import React from 'react'
import { motion } from 'framer-motion'
import "../CSS/Home.css"
import '../index.css' 

// 🖼️ Import Assets
import photo from '../../public/photo.jpg'
import githubLogo from '../../public/github.png'
import linkedinLogo from '../../public/linkedin.png'
import gmailLogo from '../../public/gmail.png'
import whatsappLogo from '../../public/whatsapp.png'
import instagramLogo from '../../public/insta.png'
import facebookLogo from '../../public/facebook.png'

export default function Home() {
  const professions = [
    'AI Enthusiast',
    'Software Engineer',
    "Trouble Shooting Expert",
    'Developer',
    'Cloud Engineer',
    'Website Management'
  ]

  const quickLinks = [
    { img: githubLogo, title: 'GitHub', link: 'https://github.com/NithinReddy282308' },
    { img: linkedinLogo, title: 'LinkedIn', link: 'https://www.linkedin.com/in/vanganithinreddy/' },
    { img: gmailLogo, title: 'Email', link: 'mailto:nithinvanga7788@gmail.com' },
    { img: whatsappLogo, title: 'WhatsApp', link: 'https://wa.me/+919177713081' },
  ]

  return (
    <section className="home-section">

      {/* Typing + layout Styles */}
      <style>
        {`
          /* --- NAME TYPING (no cursor) --- */
          @keyframes typingName { from { width: 0; } to { width: 100%; } }

          .home-name.typing {
            display: inline-block;
            overflow: hidden;
            white-space: nowrap;
            width: 0;
            animation: typingName 2.2s steps(22, end) forwards;

            background: linear-gradient(90deg, var(--accent), var(--accent-2));
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;

            font-size: 2.4rem;
            line-height: 1.22;
            vertical-align: baseline;
          }

          /* --- TAGLINE TYPING + BLINKING CURSOR (accent color) --- */
          @keyframes typingTag { from { width: 0; } to { width: 100%; } }
          @keyframes blink { 50% { border-color: transparent; } }

          /* We use fit-content / max-content so the animated width only grows to the text width */
          .typing-effect.typing {
            display: inline-block;
            overflow: hidden;
            white-space: nowrap;

            width: 0;                /* start collapsed */
            width: fit-content;      /* final will fit text */
            max-width: max-content;  /* ensure no stretching */

            /* cursor color matches accent and is a little thicker for visibility */
            border-right: 3px solid var(--accent);
            box-sizing: border-box;

            /* typingTag: duration and steps tuned to match tagline length.
               blink starts after typing (delay = typing duration) so the cursor blinks at the end */
            animation:
              typingTag 3.2s steps(72, end) forwards,
              blink .8s step-end infinite 3.25s;

            color: rgba(255,255,255,0.95);
            margin-top: 8px;
            font-size: 1.05rem;
            line-height: 1.22;
            vertical-align: baseline;

            /* a subtle glow to match screenshot (optional) */
            box-shadow: 0 0 8px rgba(0, 180, 255, 0.06);
          }

          /* Greeting + name inline, baseline aligned */
          .home-title {
            display: flex;
            align-items: baseline;
            gap: 14px;
            white-space: nowrap;
            padding-bottom: 4px;
            line-height: 1.22;
          }

          .hi-text {
            font-size: 2.4rem;
            font-weight: 700;
            color: white;
            white-space: nowrap;
            line-height: 1.22;
            vertical-align: baseline;
          }

          /* Mobile-friendly */
          @media (max-width: 640px) {
            .home-title { gap: 8px; }
            .hi-text, .home-name.typing { font-size: 1.6rem; line-height: 1.18; }
            .typing-effect.typing { font-size: 0.95rem; line-height: 1.18; }
          }
        `}
      </style>

      {/* --- TOP SECTION --- */}
      <div className="home-top">

        {/* Photo Section */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="photo-container"
        >
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            className="photo-ring"
          />
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="photo-frame"
          >
            <motion.img
              src={photo}
              alt="Vanga Nithin Reddy"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              className="profile-photo"
            />
          </motion.div>
        </motion.div>

        {/* Info Section */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="home-info"
        >
          <h1 className="home-title">
            <span className="hi-text">Hi, I’m</span>

            <motion.span
              animate={{ backgroundPositionX: ['0%', '200%'] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
              className="home-name typing"
            >
              Vanga Nithin Reddy
            </motion.span>
          </h1>

          {/* Tagline with blinking cursor (accent color) */}
          <p className="typing-effect typing">
            Software Engineer | Frontend Developer | Tech Explorer | Cloud Engineer
          </p>

          {/* Profession Tags */}
          <motion.div className="profession-tags" style={{ marginTop: '1rem' }}>
            {professions.map((role, i) => (
              <motion.div
                key={i}
                whileHover={{
                  scale: 1.05,
                  background: 'linear-gradient(90deg,var(--accent),var(--accent-2))'
                }}
                transition={{ type: 'spring', stiffness: 200 }}
                className="profession-tag"
              >
                {role}
              </motion.div>
            ))}
          </motion.div>

          {/* Info Cards */}
          <motion.div className="info-cards" style={{ marginTop: '1.4rem' }}>
            {[ 
              { label: '📍 Location', value: 'Guntur, Andhra Pradesh, India' },
              { label: '💼 Expertise', value: 'Cloud Operations' },
              { label: '📧 Contact', value: 'nithinvanga7788@gmail.com' },
            ].map((info, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -4, scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 250 }}
                className="info-card"
              >
                <strong>{info.label}</strong>
                <p>{info.value}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* QUICK LINKS */}
      <motion.div className="quick-links" style={{ marginTop: '2.2rem' }}>
        <h2 className="quick-links-title">Connect with me</h2>
        <div className="quick-links-list">
          {quickLinks.map((item, i) => (
            <motion.a
              key={i}
              href={item.link}
              title={item.title}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, rotate: 5 }}
              transition={{ type: 'spring', stiffness: 250 }}
            >
              <motion.img
                src={item.img}
                alt={item.title}
                whileHover={{
                  filter:
                    'drop-shadow(0 0 15px var(--accent)) brightness(1.2)'
                }}
                className="quick-link-img"
              />
            </motion.a>
          ))}
        </div>
      </motion.div>

    </section>
  )
}
