import React from "react";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section className="container mx-auto px-4 py-24">
      {/* Page Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-5xl font-semibold text-cyan-400 mb-4">
          Experience
        </h2>
        <div className="w-24 h-[2px] bg-cyan-400 mx-auto mb-6"></div>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          My professional journey, responsibilities, and real-world impact.
        </p>
      </motion.div>

      {/* Experience Cards */}
      <div className="space-y-12 max-w-4xl mx-auto">
        {/* Current Role */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="bg-[#0b0b0b] border border-white/10 rounded-2xl p-8 shadow-[0_0_30px_rgba(0,255,255,0.08)]"
        >
          <h3 className="text-2xl font-semibold text-cyan-400">
            Senior Consultant
          </h3>
          <p className="text-sm text-gray-400 mb-4">
            Srireina Technologies • Aug 2025 – Present
          </p>

          <ul className="list-disc list-inside space-y-3 text-gray-300 leading-relaxed">
            <li>
              Developing a student practice portal supporting CV-based and
              online-proctored examinations.
            </li>
            <li>
              Collaborating with clients to gather requirements and deliver
              sprint-based solutions.
            </li>
            <li>
              Monitoring a custom deployment platform integrating AWS, Google
              Cloud, and Cloudflare.
            </li>
            <li>
              Implementing Cloudflare Tunnels to restrict open ports and control
              inbound traffic.
            </li>
            <li>
              Monitoring and optimizing cloud costs to ensure budget-controlled
              deployments.
            </li>
            <li>
              Technical Moderator for the O’BOTZ Robotics Program (AP & TS).
            </li>
          </ul>
        </motion.div>

        {/* Previous Role */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.7 }}
          className="bg-[#0b0b0b] border border-white/10 rounded-2xl p-8 shadow-[0_0_30px_rgba(0,255,255,0.08)]"
        >
          <h3 className="text-2xl font-semibold text-cyan-400">
            Technical Associate
          </h3>
          <p className="text-sm text-gray-400 mb-4">
            Srireina Technologies • Nov 2022 – Jul 2025
          </p>

          <ul className="list-disc list-inside space-y-3 text-gray-300 leading-relaxed">
            <li>
              Deployed Laravel applications on Google Compute Engine.
            </li>
            <li>
              Deployed Python Flask applications using Google Cloud Run.
            </li>
            <li>
              Maintained multiple production-grade Laravel web applications.
            </li>
            <li>
              Worked with Google Source Control, AWS Rekognition, and Git.
            </li>
            <li>
              Served as a trainer for the O’BOTZ Robotics Program across AP and
              Telangana.
            </li>
            <li>
              Conducted hands-on robotics workshops to enhance practical
              technical skills.
            </li>
            <li>
              Managed and maintained WordPress-based websites.
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
