import React from 'react'
import { motion } from 'framer-motion'
import '../CSS/Home.css'

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
    { img: '/github.png', title: 'GitHub', link: 'https://github.com/NithinReddy282308' },
    { img: '/linkedin.png', title: 'LinkedIn', link: 'https://www.linkedin.com/in/vanganithinreddy/' },
    { img: '/gmail.png', title: 'Email', link: 'mailto:nithinrvanga@gmail.com' },
    { img: '/whatsapp.png', title: 'WhatsApp', link: 'https://wa.me/+919177713081' },
  ]

  return (
    <section className="home-section">

      {/* TOP SECTION */}
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
              src="/photo.jpg"
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
              { label: '📍 Location', value: 'Hyderabad, Telangana, India' },
              { label: '💼 Expertise', value: 'Agentic AI & Claude Code' },
              { label: '📧 Contact', value: 'nithinrvanga@gmail.com' },
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
