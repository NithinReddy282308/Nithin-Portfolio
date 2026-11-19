import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import "./Skills.css";

const DEV = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";

// `invert` lightens dark/monochrome logos so they stay visible on the dark stage
const SKILLS = [
  { name: "Python", logo: `${DEV}/python/python-original.svg` },
  { name: "Go", logo: `${DEV}/go/go-original-wordmark.svg` },
  { name: "Dart", logo: `${DEV}/dart/dart-original.svg` },
  { name: "JavaScript", logo: `${DEV}/javascript/javascript-original.svg` },
  { name: "PHP", logo: `${DEV}/php/php-original.svg` },
  { name: "HTML", logo: `${DEV}/html5/html5-original.svg` },
  { name: "CSS", logo: `${DEV}/css3/css3-original.svg` },
  { name: "React", logo: `${DEV}/react/react-original.svg` },
  { name: "Flutter", logo: `${DEV}/flutter/flutter-original.svg` },
  { name: "Node.js", logo: `${DEV}/nodejs/nodejs-original.svg` },
  { name: "Express", logo: `${DEV}/express/express-original.svg`, invert: true },
  { name: "FastAPI", logo: `${DEV}/fastapi/fastapi-original.svg` },
  { name: "Laravel", logo: `${DEV}/laravel/laravel-original.svg` },
  { name: "AWS", logo: `${DEV}/amazonwebservices/amazonwebservices-original.svg`, invert: true },
  { name: "DynamoDB", logo: `${DEV}/dynamodb/dynamodb-original.svg` },
  { name: "Google Cloud", logo: `${DEV}/googlecloud/googlecloud-original.svg` },
  { name: "Cloudflare", logo: `${DEV}/cloudflare/cloudflare-original.svg` },
  { name: "MongoDB", logo: `${DEV}/mongodb/mongodb-original.svg` },
  { name: "MySQL", logo: `${DEV}/mysql/mysql-original.svg` },
  { name: "Docker", logo: `${DEV}/docker/docker-original.svg` },
  { name: "Git", logo: `${DEV}/git/git-original.svg` },
  { name: "GitHub", logo: `${DEV}/github/github-original.svg`, invert: true },
  { name: "GitLab", logo: `${DEV}/gitlab/gitlab-original.svg` },
  { name: "GH Actions", logo: `${DEV}/githubactions/githubactions-original.svg` },
  { name: "Stripe", logo: "https://cdn.simpleicons.org/stripe/635BFF" },
];

const ROWS = [
  [
    { title: "Programming Languages", items: ["Python", "Go", "Dart", "JavaScript", "PHP"] },
    {
      title: "Backend",
      items: ["REST APIs", "Node.js & Express", "FastAPI", "Laravel", "JWT Auth (Cognito)", "RBAC & Multi-Tenancy"],
    },
    {
      title: "Cloud",
      items: [
        "AWS (Lambda, API Gateway, DynamoDB, SQS, CDK)",
        "AWS Rekognition",
        "GCP (Compute Engine, Cloud Run)",
        "Cloudflare Tunnels",
      ],
    },
  ],
  [
    { title: "Web & Mobile", items: ["HTML", "CSS", "React", "Flutter (Android, iOS, Web, Desktop)"] },
    { title: "Databases", items: ["MongoDB", "DynamoDB", "MySQL"] },
    {
      title: "DevOps & Tools",
      items: ["Git (GitHub, GitLab)", "GitHub Actions (CD)", "Docker (Lambda builds)", "Stripe & Razorpay"],
    },
  ],
  [
    {
      title: "Core Concepts",
      items: [
        "Data Structures(Basics)",
        "Machine Learning",
        "Cloud Computing",
        "Operating Systems",
        "Serverless Architecture",
        "Application Security",
      ],
    },
    {
      title: "Soft Skills",
      items: ["Versatile", "Problem Solving", "Creativity", "Adaptability", "Communication", "Client Collaboration"],
    },
  ],
];

export default function Skills() {
  const stageRef = useRef();

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    const circles = Array.from(stage.querySelectorAll(".skill-circle"));

    // Small screens: CSS lays the orbs out in a wrapping grid; just add a gentle float
    if (window.matchMedia("(max-width: 640px)").matches) {
      const anims = circles.map((circle) =>
        circle.animate(
          [{ transform: "translateY(0)" }, { transform: "translateY(-6px)" }],
          {
            duration: 2500 + Math.random() * 1500,
            direction: "alternate",
            iterations: Infinity,
            easing: "ease-in-out",
          }
        )
      );
      return () => anims.forEach((a) => a.cancel());
    }

    const rect = stage.getBoundingClientRect();
    const placed = [];
    const DRIFT = 40;

    const isOverlapping = (x, y, size) =>
      placed.some((p) => Math.hypot(p.x - x, p.y - y) < p.size / 2 + size / 2 + 12);

    const anims = circles.map((circle) => {
      const size = circle.offsetWidth;
      let x, y, tries = 0;
      // keep a DRIFT margin so floating orbs never slide out of the stage
      do {
        x = DRIFT + Math.random() * (rect.width - size - DRIFT * 2);
        y = DRIFT + Math.random() * (rect.height - size - DRIFT * 2);
        tries++;
      } while (isOverlapping(x, y, size) && tries < 400);

      placed.push({ x, y, size });
      circle.style.left = `${x}px`;
      circle.style.top = `${y}px`;

      const dx = (Math.random() - 0.5) * DRIFT * 2;
      const dy = (Math.random() - 0.5) * DRIFT * 2;
      return circle.animate(
        [{ transform: "translate(0, 0)" }, { transform: `translate(${dx}px, ${dy}px)` }],
        {
          duration: 5000 + Math.random() * 2000,
          direction: "alternate",
          iterations: Infinity,
          easing: "ease-in-out",
        }
      );
    });
    return () => anims.forEach((a) => a.cancel());
  }, []);

  return (
    <section className="skills-container" id="skills">
      <motion.div
        className="skills-header"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2>My Skills</h2>
        <div className="underline"></div>
        <p>✨ Technical expertise blended with creativity - explore my core competencies below.</p>
      </motion.div>

      {/* Floating skill orbs */}
      <motion.div
        className="skills-stage"
        ref={stageRef}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        {SKILLS.map((s, i) => (
          <motion.div
            key={s.name}
            className="skill-circle"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.08, duration: 0.6, ease: "easeOut" }}
            whileHover={{
              scale: 1.3,
              boxShadow: "0 0 35px 10px rgba(0,255,255,0.6)",
              background: "rgba(0,255,255,0.12)",
            }}
          >
            <motion.img
              src={s.logo}
              alt={s.name}
              className={s.invert ? "invert" : undefined}
              whileHover={{ rotate: [0, 6, -6, 0], transition: { duration: 0.5 } }}
            />
            <span>{s.name}</span>
          </motion.div>
        ))}
      </motion.div>

      {/* Skill categories */}
      <div className="skills-table">
        {ROWS.map((row, rowIndex) => (
          <div key={rowIndex} className="skills-row">
            {row.map((col, colIndex) => (
              <motion.div
                key={col.title}
                className="skill-box"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6, delay: (rowIndex + colIndex) * 0.1 }}
              >
                <h3>{col.title}</h3>
                <ul>
                  {col.items.map((item) => (
                    <motion.li key={item} whileHover={{ x: 6, color: "#00ffc8" }}>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
