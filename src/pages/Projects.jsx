import React from 'react'
import { motion } from 'framer-motion'
import { Github, ExternalLink, GraduationCap, Building2, CloudCog, ScanFace } from 'lucide-react'
import '../CSS/Projects.css'

// Client work at Srireina Technologies (private codebases, so no links)
const PROFESSIONAL = [
  {
    title: 'Student Practice Portal',
    img: '/projects/practice-portal.svg',
    icon: GraduationCap,
    period: '2025 - Present',
    desc: 'Serverless exam-practice platform with secure, server-timed attempts and subscription billing.',
    highlights: [
      'Go Lambda functions behind API Gateway with Cognito JWT auth and DynamoDB',
      'Infrastructure as code in Go with AWS CDK; replaced costly Step Functions with an SQS queue',
      'Server-side exam timing, one active session per attempt, AES-GCM encrypted papers',
      'Stripe subscriptions with signature-verified webhooks, plus Razorpay payment operations',
    ],
    tech: ['Go', 'AWS Lambda', 'API Gateway', 'DynamoDB', 'SQS', 'CDK', 'Cognito', 'Stripe'],
  },
  {
    title: 'Franchise Management Platform',
    img: '/projects/franchise-platform.svg',
    icon: Building2,
    period: '2025 - Present',
    desc: 'Multi-tenant platform that runs many franchises from one codebase, with a cross-platform Flutter app.',
    highlights: [
      'Database-per-tenant design using AsyncLocalStorage and model proxies, with RBAC on top',
      'Fixed tenant-isolation and access-control bugs, including a $or query that dropped the tenant filter',
      'Found a certificate-issuance data-integrity bug and measured its impact on live orders',
      'Flutter app for Android, iOS, Web, macOS and Windows; CD with GitHub Actions',
    ],
    tech: ['Node.js', 'Express', 'MongoDB', 'Flutter', 'GitHub Actions'],
  },
  {
    title: 'Multi-Cloud Deployment Tool',
    img: '/projects/deployment-tool.svg',
    icon: CloudCog,
    period: '2022 - 2025',
    desc: 'Internal tool for shipping apps across GCP, AWS and Cloudflare securely and within budget.',
    highlights: [
      'One deployment workflow spanning GCP, AWS and Cloudflare',
      'Cloudflare Tunnels to keep public ports closed',
      'Kept cloud spend within budget across environments',
    ],
    tech: ['GCP', 'AWS', 'Cloudflare Tunnels', 'Compute Engine', 'Cloud Run'],
  },
  {
    title: 'Online-Proctored Exam Portals',
    img: '/projects/proctoring-portal.svg',
    icon: ScanFace,
    period: '2022 - 2025',
    desc: 'Cloud operations and secure deployment for computer-vision-based proctored examinations.',
    highlights: [
      'Integrated AWS Rekognition for computer-vision proctoring',
      'Managed secure deployments and day-to-day cloud operations',
      'Deployed Laravel and WordPress sites on Compute Engine and a Flask app on Cloud Run',
    ],
    tech: ['AWS Rekognition', 'Laravel', 'Flask', 'GCP'],
  },
]

const PERSONAL = [
  {
    title: 'Mindmate',
    desc: 'NLP-based system that analyzes user text to detect signs of anxiety, stress, and depression using sentiment analysis and transformer models.',
    ss: '/mentalhealth.jpg',
    tech: ['Python', 'Transformers', 'NLTK', 'scikit-learn'],
    code: 'https://github.com/NithinReddy282308/MindMate',
  },
  {
    title: 'Attendance Management System',
    desc: 'A MERN-stack powered attendance system with role-based access and real-time insights.',
    ss: '/ATS.png',
    tech: ['React.js', 'Node.js & Express.js', 'MongoDB', 'JWT Authentication'],
    code: 'https://github.com/NithinReddy282308/attendance-management',
  },
  {
    title: 'Portfolio Website',
    desc: 'A modern and responsive portfolio built with React and Framer Motion, showcasing projects, skills, and achievements with smooth animations and interactive UI.',
    ss: '/portfolio.jpg',
    tech: ['React', 'Vite', 'Framer Motion', 'CSS'],
    live: 'https://nithinreddyvanga.netlify.app/',
    code: 'https://github.com/NithinReddy282308/Nithin-Portfolio',
  },
]

const reveal = (i) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.5, delay: (i % 2) * 0.12 },
})

function TechTags({ items }) {
  return (
    <div className="project-tags">
      {items.map((t) => (
        <span key={t}>{t}</span>
      ))}
    </div>
  )
}

export default function Projects() {
  return (
    <section className="projects-page" id="projects">
      <motion.header
        className="projects-header"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Projects</h2>
        <div className="section-underline"></div>
        <p className="section-subtitle">
          Production systems I've built for clients, and the side projects where I explore new ideas.
        </p>
      </motion.header>

      {/* Professional work */}
      <div className="projects-group-title">
        <h3>Professional Work</h3>
        <span>Srireina Technologies · client projects</span>
      </div>

      <div className="pro-grid">
        {PROFESSIONAL.map((p, i) => {
          const Icon = p.icon
          return (
            <motion.article key={p.title} className="pro-card" {...reveal(i)} whileHover={{ y: -6 }}>
              <div className="pro-shot">
                <img src={p.img} alt={`${p.title} architecture`} loading="lazy" />
              </div>
              <div className="pro-card-top">
                <div className="pro-icon">
                  <Icon size={26} strokeWidth={1.8} />
                </div>
                <div>
                  <h4>{p.title}</h4>
                  <span className="pro-period">{p.period}</span>
                </div>
              </div>
              <p className="project-desc">{p.desc}</p>
              <ul className="pro-highlights">
                {p.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
              <TechTags items={p.tech} />
            </motion.article>
          )
        })}
      </div>

      {/* Personal projects */}
      <div className="projects-group-title">
        <h3>Personal Projects</h3>
        <span>Built locally to learn and experiment</span>
      </div>

      <div className="personal-grid">
        {PERSONAL.map((p, i) => (
          <motion.article key={p.title} className="personal-card" {...reveal(i)} whileHover={{ y: -6 }}>
            <div className="personal-shot">
              <img src={p.ss} alt={p.title} loading="lazy" />
            </div>
            <div className="personal-body">
              <h4>{p.title}</h4>
              <p className="project-desc">{p.desc}</p>
              <TechTags items={p.tech} />
              <div className="project-actions">
                <a href={p.code} target="_blank" rel="noreferrer" className="project-btn">
                  <Github size={14} /> Code
                </a>
                {p.live && (
                  <a href={p.live} target="_blank" rel="noreferrer" className="project-btn primary">
                    <ExternalLink size={14} /> Live
                  </a>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
