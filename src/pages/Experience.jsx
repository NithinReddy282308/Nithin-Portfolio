import React from "react";
import { motion } from "framer-motion";
import "../CSS/Experience.css";

const ROLES = [
  {
    title: "Senior Consultant",
    meta: "Srireina Technologies • Aug 2025 - Present",
    points: [
      "Work directly with clients to gather requirements and deliver working solutions within each sprint.",
      "Technical Moderator for the O’BOTZ Robotics Program across AP & TS.",
    ],
    projects: [
      {
        name: "Student Practice Portal",
        stack: ["Go", "AWS Lambda", "API Gateway", "DynamoDB", "SQS", "CDK"],
        points: [
          "Wrote the backend as Go Lambda functions behind API Gateway, with Cognito JWT auth and DynamoDB.",
          "Defined the infrastructure in Go with AWS CDK, and replaced a costly Step Functions setup with an SQS queue.",
          "Kept exam timing on the server, allowed one active session per attempt, and encrypted papers with AES-GCM.",
          "Handled Stripe subscriptions with signature-verified webhooks, and completed Razorpay merchant verification and payment operations.",
        ],
      },
      {
        name: "Franchise Management Platform",
        stack: ["Node.js", "Express", "MongoDB", "Flutter"],
        points: [
          "Designed a database-per-tenant setup using AsyncLocalStorage and model proxies, with roles on top, so many franchises run from one codebase.",
          "Found a data-integrity bug in certificate issuance and wrote a script to measure its impact on live orders.",
          "Fixed access-control and tenant-isolation bugs, including an unvalidated role parameter and a $or query that dropped the tenant filter.",
          "Built the Flutter app for Android, iOS, Web, macOS and Windows, and managed its store releases.",
          "Automated deployments (CD) with GitHub Actions.",
        ],
      },
    ],
  },
  {
    title: "Technical Associate",
    meta: "Srireina Technologies • Nov 2022 - Jul 2025",
    points: [
      "Managed cloud operations and secure deployment for computer-vision-based, online-proctored examination portals, integrating AWS Rekognition.",
      "Built an internal deployment tool across GCP, AWS and Cloudflare, used Cloudflare Tunnels to keep public ports closed, and kept cloud spend within budget.",
      "Deployed and maintained Laravel and WordPress sites on Compute Engine and a Flask app on Cloud Run.",
      "Used Git with GitHub, GitLab and Google Cloud Source Repositories for version control.",
      "Served as a trainer for the O’BOTZ Robotics Program across AP and Telangana, conducting hands-on robotics workshops.",
    ],
    projects: [],
  },
];

export default function Experience() {
  return (
    <section className="experience-section">
      {/* Page Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="experience-header"
      >
        <h2 className="section-title">
          Experience
        </h2>
        <div className="section-underline"></div>
        <p className="section-subtitle">
          My professional journey, responsibilities, and real-world impact.
        </p>
      </motion.div>

      {/* Experience Cards */}
      <div className="experience-list">
        {ROLES.map((role, i) => (
          <motion.div
            key={role.title}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.15, duration: 0.7 }}
            className="experience-card"
          >
            <h3 className="experience-role">{role.title}</h3>
            <p className="experience-meta">{role.meta}</p>

            <ul className="experience-points">
              {role.points.map((pt) => (
                <li key={pt}>{pt}</li>
              ))}
            </ul>

            {role.projects.map((proj) => (
              <div key={proj.name} className="experience-project">
                <h4>{proj.name}</h4>
                <div className="experience-stack">
                  {proj.stack.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
                <ul className="experience-points">
                  {proj.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
