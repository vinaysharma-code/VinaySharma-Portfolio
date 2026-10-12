import { useState } from "react"
import { motion } from "framer-motion"
import { hackathons } from "../../data/hackathons"
import SectionHeader from "../ui/SectionHeader"
import Lightbox from "../ui/Lightbox"
import { Trophy, Award, MapPin, Calendar, CheckCircle2, Eye, ExternalLink, Sparkles } from "lucide-react"

export default function Hackathons() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [activePhotoIndex, setActivePhotoIndex] = useState(0)

  // Collect all photos in order for the Lightbox: 2 BGI Viksit Bharat + 1 Codictive 3.0
  const allPhotos = [
    {
      src: "/images/hackathons/bgi-viksit-bharat-1.jpg",
      title: "BGI Viksit Bharat Hackathon (National Level)",
      description: "Winner · 1st Place (₹25,000 Cash Prize Cheque Presentation)"
    },
    {
      src: "/images/hackathons/bgi-viksit-bharat-2.jpg",
      title: "BGI Viksit Bharat Hackathon (National Level)",
      description: "Valedictory Ceremony on Stage with Faculty & Event Dignitaries"
    },
    {
      src: "/images/hackathons/codictive-hackathon.jpg",
      title: "Codictive 3.0 Hackathon (State Level)",
      description: "Winner Trophy & ₹21,000 Cash Prize Award Presentation with Sheryians Coding School"
    }
  ]

  const openLightbox = (index) => {
    setActivePhotoIndex(index)
    setLightboxOpen(true)
  }

  const bgi = hackathons.find((h) => h.id === "bgi-viksit-bharat") || hackathons[0]
  const codictive = hackathons.find((h) => h.id === "codictive-3") || hackathons[1]

  return (
    <section id="hackathons" className="section-padding relative overflow-hidden">
      {/* Background glow blobs */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-accent-indigo/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-accent-cyan/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeader
          eyebrow="Proven Track Record"
          title={"Hackathon Victories &\nCompetitive Recognitions"}
          subtitle="Real-world engineering under pressure — turning vision into winning products in national and state competitions."
        />

        <div className="space-y-12 mt-12">
          {/* ════════════════════════════════════════════════════════════════════
              1. BGI VIKSIT BHARAT HACKATHON (NATIONAL LEVEL)
             ════════════════════════════════════════════════════════════════════ */}
          {bgi && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="card-base p-6 sm:p-10 relative overflow-hidden border-accent-indigo/30 glow-indigo"
            >
              {/* Header Info */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-border/80">
                <div>
                  <div className="flex flex-wrap items-center gap-2.5 mb-2.5">
                    <span className="badge flex items-center gap-1.5 bg-accent-indigo/15 border-accent-indigo/40 text-accent-cyan">
                      <Trophy size={13} className="text-amber-400" /> National Level
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center gap-1">
                      <Sparkles size={12} /> Winner · 1st Place (₹25,000)
                    </span>
                  </div>

                  <h3 className="font-display font-black text-2xl sm:text-3xl text-text-primary">
                    {bgi.name}
                  </h3>
                  <p className="text-xs sm:text-sm font-mono text-accent-cyan mt-1">
                    {bgi.organizer}
                  </p>
                </div>

                <div className="flex items-center gap-4 text-xs font-mono text-text-muted shrink-0">
                  <div className="flex items-center gap-1.5">
                    <Calendar size={14} className="text-accent-indigo" /> {bgi.date}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin size={14} className="text-accent-indigo" /> {bgi.location}
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-text-secondary text-sm sm:text-base leading-relaxed my-6 max-w-4xl">
                {bgi.description}
              </p>

              {/* 2 National Hackathon Photographs Side-by-Side */}
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                {/* Photo 1: Cheque Presentation */}
                <div
                  onClick={() => openLightbox(0)}
                  className="group relative rounded-2xl overflow-hidden border border-border/80 bg-bg-card cursor-pointer hover:border-accent-indigo/60 transition-all duration-300 shadow-lg hover:shadow-accent-indigo/20"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-black/40">
                    <img
                      src="/images/hackathons/bgi-viksit-bharat-1.jpg"
                      alt="BGI Viksit Bharat National Hackathon Winner Cheque Presentation"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/90 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                    <div className="absolute top-3 right-3 w-8 h-8 rounded-full glass flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                      <Eye size={16} />
                    </div>
                  </div>
                  <div className="p-4 bg-bg-secondary/60 border-t border-border/60">
                    <div className="text-xs font-semibold text-text-primary">
                      Award Ceremony · ₹25,000 Winner Cheque
                    </div>
                    <div className="text-[11px] font-mono text-text-muted mt-0.5">
                      National Level · Vision 2047 Viksit Bharat
                    </div>
                  </div>
                </div>

                {/* Photo 2: Stage Valedictory */}
                <div
                  onClick={() => openLightbox(1)}
                  className="group relative rounded-2xl overflow-hidden border border-border/80 bg-bg-card cursor-pointer hover:border-accent-indigo/60 transition-all duration-300 shadow-lg hover:shadow-accent-indigo/20"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-black/40">
                    <img
                      src="/images/hackathons/bgi-viksit-bharat-2.jpg"
                      alt="BGI Viksit Bharat National Hackathon Valedictory Stage Ceremony"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/90 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                    <div className="absolute top-3 right-3 w-8 h-8 rounded-full glass flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                      <Eye size={16} />
                    </div>
                  </div>
                  <div className="p-4 bg-bg-secondary/60 border-t border-border/60">
                    <div className="text-xs font-semibold text-text-primary">
                      Valedictory Stage Ceremony & Confetti Celebration
                    </div>
                    <div className="text-[11px] font-mono text-text-muted mt-0.5">
                      Bansal Group of Institutes Auditorium · Team & Dignitaries
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* ════════════════════════════════════════════════════════════════════
              2. CODICTIVE 3.0 HACKATHON (STATE LEVEL)
             ════════════════════════════════════════════════════════════════════ */}
          {codictive && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="card-base p-6 sm:p-10 relative overflow-hidden border-accent-cyan/30 glow-cyan"
            >
              {/* Header Info */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-border/80">
                <div>
                  <div className="flex flex-wrap items-center gap-2.5 mb-2.5">
                    <span className="badge flex items-center gap-1.5 bg-accent-cyan/15 border-accent-cyan/40 text-accent-cyan">
                      <Trophy size={13} className="text-amber-400" /> State Level
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center gap-1">
                      <Award size={12} /> Winner · Trophy & ₹21,000 Prize
                    </span>
                  </div>

                  <h3 className="font-display font-black text-2xl sm:text-3xl text-text-primary">
                    {codictive.name}
                  </h3>
                  <p className="text-xs sm:text-sm font-mono text-accent-indigo mt-1">
                    {codictive.organizer}
                  </p>
                </div>

                <div className="flex items-center gap-4 text-xs font-mono text-text-muted shrink-0">
                  <div className="flex items-center gap-1.5">
                    <Calendar size={14} className="text-accent-cyan" /> {codictive.date}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin size={14} className="text-accent-cyan" /> {codictive.location}
                  </div>
                </div>
              </div>

              {/* 2-Column Content: Left Details & Right Featured Photo */}
              <div className="grid lg:grid-cols-12 gap-8 items-center mt-6">
                {/* Left: Description & Highlights */}
                <div className="lg:col-span-5 space-y-5">
                  <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
                    {codictive.description}
                  </p>

                  <div className="p-4 rounded-xl bg-bg-secondary/70 border border-border/80 space-y-2.5">
                    <div className="text-xs font-mono uppercase tracking-wider text-accent-cyan font-semibold">
                      Key Highlights
                    </div>
                    <ul className="space-y-2">
                      {codictive.highlights?.map((h, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-text-secondary">
                          <CheckCircle2 size={14} className="text-accent-cyan shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={() => openLightbox(2)}
                    className="btn-secondary text-xs flex items-center gap-2 py-2 px-4"
                  >
                    <Eye size={14} /> Inspect Trophy Ceremony
                  </button>
                </div>

                {/* Right: Featured Photo (State Level) */}
                <div className="lg:col-span-7">
                  <div
                    onClick={() => openLightbox(2)}
                    className="group relative rounded-2xl overflow-hidden border border-border/80 bg-bg-card cursor-pointer hover:border-accent-cyan/60 transition-all duration-300 shadow-lg hover:shadow-accent-cyan/20"
                  >
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-black/40">
                      <img
                        src="/images/hackathons/codictive-hackathon.jpg"
                        alt="Codictive 3.0 Hackathon Winner Trophy & Award Ceremony"
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/90 via-transparent to-transparent opacity-75 group-hover:opacity-50 transition-opacity" />
                      <div className="absolute top-3 right-3 w-8 h-8 rounded-full glass flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                        <Eye size={16} />
                      </div>
                    </div>
                    <div className="p-4 bg-bg-secondary/60 border-t border-border/60 flex items-center justify-between">
                      <div>
                        <div className="text-xs font-semibold text-text-primary">
                          Trophy & ₹21,000 Cheque Presentation Ceremony
                        </div>
                        <div className="text-[11px] font-mono text-text-muted mt-0.5">
                          Codictive 3.0 · BIST with Sheryians Coding School
                        </div>
                      </div>
                      <span className="text-[11px] font-mono text-accent-cyan px-2.5 py-1 rounded bg-accent-cyan/10 border border-accent-cyan/20">
                        State Level 🏆
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Lightbox for Zoomable Image Inspection */}
      <Lightbox
        images={allPhotos}
        currentIndex={activePhotoIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onPrev={() => setActivePhotoIndex((prev) => (prev > 0 ? prev - 1 : allPhotos.length - 1))}
        onNext={() => setActivePhotoIndex((prev) => (prev < allPhotos.length - 1 ? prev + 1 : 0))}
      />
    </section>
  )
}