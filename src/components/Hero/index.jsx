import { motion } from "framer-motion"
import { ArrowDown, FileText } from "lucide-react"
import { profile } from "../../data/profile"
import { projects } from "../../data/projects"
import { hackathons } from "../../data/hackathons"
import { dsaStats } from "../../data/dsa"
import { isRealValue } from "../../utils/hasContent"

// ── Animation Variants ───────────────────────────────────────────────────────
const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
}
const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } }
}

export default function Hero() {
  const scrollToProjects = () => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })

  const nameParts = (profile.name || "Vinay Sharma").split(" ")
  const first = nameParts[0] || "VINAY"
  const rest = nameParts.slice(1).join(" ") || "SHARMA"

  return (
    <section id="home" className="relative min-h-screen flex items-center grid-bg overflow-hidden">
      {/* Background gradient blobs */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl" style={{ background: "radial-gradient(circle, #6366f1, transparent)" }} />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full opacity-8 blur-3xl" style={{ background: "radial-gradient(circle, #22d3ee, transparent)" }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 w-full py-24 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* ─ Left: Text & Bio ─ */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          {/* Availability badge with Spider-Sense wave & radar ping */}
          <motion.div variants={item} className="inline-flex items-center gap-2">
            <span
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium spider-sense"
              style={{ background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.3)", color: "#4ade80" }}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 radar-ring animate-pulse" />
              {profile.availableForInternships ? `Available for Opportunities · ${profile.city || "India"}` : profile.city || "India"}
            </span>
          </motion.div>

          {/* Academic / Degree line */}
          <motion.p variants={item} className="text-accent-cyan font-mono text-xs sm:text-sm tracking-widest uppercase">
            {[profile.degree, profile.branch, profile.semester].filter(isRealValue).join(" · ") || "Computer Science & Engineering"}
          </motion.p>

          {/* Main Headline */}
          <motion.h1 variants={item} className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-text-primary tracking-tight leading-[1.18]">
            {profile.tagline || "I build scalable software, intelligent systems, and interactive digital experiences."}
          </motion.h1>

          {/* Bio */}
          <motion.p variants={item} className="text-text-secondary text-base sm:text-lg leading-relaxed max-w-lg">
            {profile.introduction || "Computer Science undergraduate focused on software development, backend engineering, problem solving, and emerging technologies."}
          </motion.p>

          {/* CTAs */}
          <motion.div variants={item} className="flex flex-wrap gap-4 pt-2">
            <button onClick={scrollToProjects} className="btn-primary" data-cursor="EXPLORE">
              Explore My Work <ArrowDown size={16} />
            </button>
            {isRealValue(profile.resumeUrl) ? (
              <a href={profile.resumeUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary" data-cursor="RESUME">
                <FileText size={16} /> View Resume
              </a>
            ) : (
              <a href="#contact" className="btn-secondary" data-cursor="CONTACT">
                <FileText size={16} /> Get In Touch
              </a>
            )}
          </motion.div>

          {/* Stats row */}
          <motion.div variants={item} className="flex flex-wrap items-center gap-6 pt-2">
            {[
              { value: dsaStats?.solvedCount || "100+", label: "LeetCode" },
              { value: `${projects.length}+`, label: "Projects" },
              { value: `${hackathons.length}+`, label: "Hackathons" },
            ].map((stat, i) => (
              <div key={i} className="flex items-center gap-4">
                {i > 0 && <div className="w-px h-8 bg-border" />}
                <div>
                  <div className="font-display font-bold text-text-primary text-lg gradient-text">{stat.value}</div>
                  <div className="text-text-muted text-xs uppercase tracking-widest">{stat.label}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* ─ Right: Animated Name Showcase (shifted in place of animation) ─ */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
          className="relative flex items-center justify-center w-full"
        >
          <div className="relative w-full max-w-lg p-8 sm:p-12 rounded-3xl bg-bg-card/50 border border-border/80 backdrop-blur-xl shadow-2xl flex flex-col items-center justify-center text-center overflow-hidden group hover:border-accent-indigo/50 transition-all duration-300">
            {/* Ambient inner glow blobs */}
            <div className="absolute -top-24 -left-24 w-52 h-52 rounded-full bg-accent-indigo/20 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -right-24 w-52 h-52 rounded-full bg-accent-cyan/20 blur-3xl pointer-events-none" />

            {/* Subtle grid pattern */}
            <div
              className="absolute inset-0 pointer-events-none opacity-[0.04]"
              style={{
                backgroundImage: "linear-gradient(rgba(99,102,241,.5) 1px,transparent 1px),linear-gradient(90deg,rgba(99,102,241,.5) 1px,transparent 1px)",
                backgroundSize: "30px 30px"
              }}
            />

            {/* Top eyebrow / badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium text-accent-cyan bg-accent-cyan/10 border border-accent-cyan/20 mb-6">
              <span>✦</span> Software Engineer & Builder
            </div>

            {/* The Animated Text: Name with Spider-Verse Chromatic Glitch */}
            <div className="py-2 select-none">
              <div
                className="spider-glitch font-display font-black leading-[0.92] tracking-tighter"
                data-text={`${first} ${rest}`}
                style={{ fontSize: "clamp(3.5rem, 8vw, 6rem)" }}
              >
                <span className="block text-text-primary uppercase tracking-tight">
                  {first}
                </span>
                <span className="block gradient-text uppercase tracking-tight">
                  {rest}
                </span>
              </div>
            </div>

            {/* Titles / Specializations */}
            <div className="mt-8 flex flex-wrap justify-center gap-2">
              {(profile.titles || ["Full-Stack Dev", "Backend Systems", "AI/ML Explorer"]).map((title, idx) => (
                <span
                  key={idx}
                  className="text-xs font-mono px-3 py-1 rounded-lg bg-bg-secondary/90 border border-border text-text-secondary"
                >
                  {title}
                </span>
              ))}
            </div>

            {/* Corner tech indicators */}
            <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-accent-cyan animate-pulse" />
            <div className="absolute bottom-3 left-3 w-2 h-2 rounded-full bg-accent-indigo" />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span className="text-text-muted text-xs font-mono tracking-widest uppercase">Scroll</span>
        <motion.div
          className="w-5 h-8 rounded-full flex items-start justify-center pt-1.5"
          style={{ border: "1px solid rgba(99,102,241,0.4)" }}
        >
          <motion.div
            className="w-1 h-2 rounded-full"
            style={{ background: "#6366f1" }}
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
