import React from "react";
import { motion } from "framer-motion";
import { FaUniversity, FaSchool, FaGraduationCap } from "react-icons/fa";

const AboutMe = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "radial-gradient(circle at top, #0d0d0d, #000)",
        color: "white",
        padding: "3rem 1rem",
      }}
    >
      {/* --- About Me + Education Section --- */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        style={{
          width: "100%",
          maxWidth: "1100px",
          textAlign: "left",
          marginTop: "1rem",
          lineHeight: 1.8,
          background: "rgba(255,255,255,0.04)",
          padding: "3rem 3.5rem",
          borderRadius: "18px",
          boxShadow: "0 0 25px rgba(0,255,200,0.08)",
          backdropFilter: "blur(10px)",
        }}
      >
        {/* --- Header --- */}
        <h2
          style={{
            fontSize: "1.9rem",
            marginBottom: "1.2rem",
            background: "linear-gradient(90deg, var(--accent), var(--accent-2))",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          About Me
        </h2>

        {/* --- Description --- */}
        <p
          style={{
            fontSize: "1.1rem",
            color: "rgba(255,255,255,0.85)",
            marginBottom: "1rem",
          }}
        >
          Hi, I’m <strong>Vanga Nithin Reddy</strong> - an aspiring{" "}
          <strong>Software Engineer</strong> and{" "}
          <strong>Machine Learning enthusiast</strong> passionate about building
          intelligent systems that solve real-world problems. I’m fascinated by
          how <strong>data</strong> and <strong>algorithms</strong> can
          transform industries like healthcare, automation, education, and
          creative technology.
        </p>

        <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.8)" }}>
          Beyond coding, I enjoy exploring <strong>design</strong>,
          experimenting with <strong>motion</strong> and{" "}
          <strong>interaction</strong> and blending{" "}
          <strong>artistic creativity</strong> with{" "}
          <strong>technical precision</strong>. My goal is to build solutions
          that not only perform efficiently - but also inspire.
        </p>

        {/* ⭐ UPDATED PARAGRAPH INSERTED HERE */}
        <p
          style={{
            fontSize: "1.1rem",
            color: "rgba(255,255,255,0.8)",
            marginTop: "1rem",
          }}
        >
          I’m currently pursuing my{" "}
          <strong>B.Tech in Artificial Intelligence and Data Science</strong> at
          VVIT, Guntur, while working as a{" "}
          <strong>Freelance Software Developer</strong> at Srireina
          Technologies. I specialize in{" "}
          <strong>cloud operations</strong>,{" "}
          <strong>secure system deployment</strong> and{" "}
          <strong>full-stack web application development</strong> for CV-based
          and online-proctored exam platforms.
          <br />
          <br />
          Known for strong <strong>problem-solving abilities</strong>,{" "}
          <strong>technical versatility</strong>  and{" "}
          <strong>time-prioritized execution</strong>, I consistently deliver
          reliable, production-ready solutions. With a growing portfolio of{" "}
          <strong>ML-integrated projects</strong>, I aim to blend innovation
          with practical engineering while maintaining academic excellence.
        </p>

        {/* --- Education Section --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          style={{ marginTop: "3rem" }}
        >
          <h3
            style={{
              fontSize: "1.6rem",
              marginBottom: "1.5rem",
              background:
                "linear-gradient(90deg, var(--accent), var(--accent-2))",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            Education
          </h3>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.2rem",
            }}
          >
            {/* --- Education Card 1 --- */}
            <motion.div
              whileHover={{
                scale: 1.02,
                boxShadow: "0 0 25px rgba(0,255,200,0.15)",
              }}
              transition={{ duration: 0.3 }}
              style={{
                background: "rgba(255,255,255,0.05)",
                borderRadius: "14px",
                padding: "1.5rem 2rem",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "0 0 15px rgba(0,255,200,0.05)",
                display: "flex",
                alignItems: "center",
                gap: "1.2rem",
              }}
            >
              <FaUniversity size={40} color="var(--accent)" />
              <div>
                <h4
                  style={{
                    color: "var(--accent)",
                    marginBottom: "0.4rem",
                    fontSize: "1.25rem",
                  }}
                >
                  B.Tech in Artificial Intelligence and Data Science
                </h4>
                <p
                  style={{
                    color: "rgba(255,255,255,0.85)",
                    marginBottom: "0.2rem",
                  }}
                >
                  <strong>VVIT (Vasireddy Venkatadri Institute of Technology)</strong>{" "}
                  - Guntur, Andhra Pradesh
                </p>
                <p style={{ color: "rgba(255,255,255,0.7)" }}>
                  4th Year (Pursuing) 
                </p>
                <p style={{ color: "rgba(255,255,255,0.7)" }}>2022 – 2026</p>
              </div>
            </motion.div>

            {/* --- Education Card 2 --- */}
            <motion.div
              whileHover={{
                scale: 1.02,
                boxShadow: "0 0 25px rgba(0,255,200,0.15)",
              }}
              transition={{ duration: 0.3 }}
              style={{
                background: "rgba(255,255,255,0.05)",
                borderRadius: "14px",
                padding: "1.5rem 2rem",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "0 0 15px rgba(0,255,200,0.05)",
                display: "flex",
                alignItems: "center",
                gap: "1.2rem",
              }}
            >
              <FaGraduationCap size={38} color="var(--accent)" />
              <div>
                <h4
                  style={{
                    color: "var(--accent)",
                    marginBottom: "0.4rem",
                    fontSize: "1.25rem",
                  }}
                >
                  Higher Secondary Education (12th Grade)
                </h4>
                <p
                  style={{
                    color: "rgba(255,255,255,0.85)",
                    marginBottom: "0.2rem",
                  }}
                >
                  <strong>Mathrusri Junior College</strong> - Guntur
                </p>
                <p style={{ color: "rgba(255,255,255,0.7)" }}>
                  Percentage: 96.10%
                </p>
                <p style={{ color: "rgba(255,255,255,0.7)" }}>Completed in 2022</p>
              </div>
            </motion.div>

            {/* --- Education Card 3 --- */}
            <motion.div
              whileHover={{
                scale: 1.02,
                boxShadow: "0 0 25px rgba(0,255,200,0.15)",
              }}
              transition={{ duration: 0.3 }}
              style={{
                background: "rgba(255,255,255,0.05)",
                borderRadius: "14px",
                padding: "1.5rem 2rem",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "0 0 15px rgba(0,255,200,0.05)",
                display: "flex",
                alignItems: "center",
                gap: "1.2rem",
              }}
            >
              <FaSchool size={36} color="var(--accent)" />
              <div>
                <h4
                  style={{
                    color: "var(--accent)",
                    marginBottom: "0.4rem",
                    fontSize: "1.25rem",
                  }}
                >
                  Secondary Education (10th Grade)
                </h4>
                <p
                  style={{
                    color: "rgba(255,255,255,0.85)",
                    marginBottom: "0.2rem",
                  }}
                >
                  <strong>Sri Chaitanya School</strong> - Guntur
                </p>
                <p style={{ color: "rgba(255,255,255,0.7)" }}>
                  Percentage: 98.5%
                </p>
                <p style={{ color: "rgba(255,255,255,0.7)" }}>Completed in 2020</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutMe;
