import React from 'react';
import { motion } from 'framer-motion';
import { User, Briefcase, Code, Award, ArrowUpRight, Mail } from 'lucide-react';
import { projects } from '../data';

const Section = ({ id, icon: Icon, title, children }) => (
  <section id={id} className="scroll-mt-24 py-16">
    <div className="mx-auto max-w-6xl px-4">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2 rounded-lg bg-white/10 text-cyan-300"><Icon className="h-5 w-5" /></div>
        <h2 className="text-2xl md:text-3xl font-bold text-white">{title}</h2>
      </div>
      <div className="grid gap-6">{children}</div>
    </div>
  </section>
);

export default function Sections() {
  return (
    <div>
      {/* About */}
      <Section id="about" icon={User} title="About">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-[1fr,2fr] gap-6 items-center"
        >
          <img
            src="/profile.jpg"
            alt="Atharva Shinde"
            className="h-40 w-40 rounded-2xl object-cover ring-1 ring-white/10 shadow-xl"
          />
          <div className="text-slate-300">
            <p>
              I am a B.Tech CSE student (2023–2026) at S.B. Jain Institute of Technology, Management & Research, passionate about AI-driven systems, web apps, and sustainable solutions.
            </p>
            <p className="mt-3">
              Active in IEEE and Training & Placement initiatives. I enjoy building real-world projects that blend AI, data, and modern web development.
            </p>
            <div className="mt-4 flex flex-wrap gap-3 text-sm">
              <a href="mailto:sbjitatharvas@gmail.com" className="px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/15 text-cyan-200">sbjitatharvas@gmail.com</a>
              <span className="px-3 py-1.5 rounded-full bg-white/5 text-slate-300">+91 8308257250</span>
              <a href="https://github.com/atharva-shinde" className="px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/15">GitHub</a>
              <a href="https://www.linkedin.com/in/atharva-shinde-7369b628a" className="px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/15">LinkedIn</a>
            </div>
          </div>
        </motion.div>
      </Section>

      {/* Experience & Education */}
      <Section id="experience" icon={Briefcase} title="Experience & Education">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="border-l border-white/10 pl-6">
            <div className="mb-8">
              <div className="-ml-3 mb-2 flex items-center gap-2">
                <div className="h-6 w-6 rounded-full bg-cyan-400" />
                <span className="text-sm uppercase tracking-wide text-cyan-300">Internship</span>
              </div>
              <h3 className="text-white font-semibold">Web Developer & Data Scientist Intern — LGPS Hybrid Energy Pvt. Ltd.</h3>
              <p className="text-slate-300 mt-1">Built dashboards and optimized data workflows for energy analytics.</p>
            </div>
            <div>
              <div className="-ml-3 mb-2 flex items-center gap-2">
                <div className="h-6 w-6 rounded-full bg-fuchsia-400" />
                <span className="text-sm uppercase tracking-wide text-fuchsia-300">Education</span>
              </div>
              <h3 className="text-white font-semibold">B.Tech in Computer Science Engineering (2023–2026)</h3>
              <p className="text-slate-300 mt-1">S.B. Jain Institute of Technology, Management & Research</p>
            </div>
          </div>
        </motion.div>
      </Section>

      {/* Skills */}
      <Section id="skills" icon={Code} title="Skills">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-3 gap-4"
        >
          <SkillCard title="Frontend" items={["React", "Vite", "Tailwind CSS", "Framer Motion"]} />
          <SkillCard title="Backend & Tools" items={["Node.js", "Express", "Git", "Vercel"]} />
          <SkillCard title="AI/ML" items={["Python", "Pandas", "Scikit-learn", "Reinforcement Learning"]} />
        </motion.div>
      </Section>

      {/* Projects */}
      <Section id="projects" icon={Code} title="Projects">
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <motion.a
              key={p.title}
              href={p.demo || p.github}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition-colors p-5 flex flex-col"
            >
              <div className="flex-1">
                <h3 className="text-white font-semibold text-lg">{p.title}</h3>
                <p className="text-slate-300 mt-2 text-sm">{p.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.stack.map((t) => (
                    <span key={t} className="text-xs px-2 py-1 rounded-full bg-white/10 text-cyan-200">{t}</span>
                  ))}
                </div>
              </div>
              <div className="mt-4 flex items-center gap-3 text-cyan-300">
                {(p.demo || p.github) && (
                  <span className="inline-flex items-center gap-1 text-sm">
                    Visit <ArrowUpRight className="h-4 w-4" />
                  </span>
                )}
              </div>
            </motion.a>
          ))}
        </div>
      </Section>

      {/* Achievements & Certifications */}
      <Section id="achievements" icon={Award} title="Achievements & Certifications">
        <motion.ul
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="grid gap-3 list-disc list-inside text-slate-300"
        >
          <li>Infosys Python Certification</li>
          <li>Power BI certification</li>
          <li>IEEE leadership roles</li>
          <li>Training & Placement team head</li>
        </motion.ul>
      </Section>

      {/* Contact */}
      <Section id="contact" icon={Mail} title="Contact">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
        >
          <form
            className="grid md:grid-cols-2 gap-4"
            onSubmit={(e) => {
              e.preventDefault();
              const data = Object.fromEntries(new FormData(e.currentTarget));
              const subject = encodeURIComponent(`Portfolio Inquiry from ${data.name || ''}`);
              const body = encodeURIComponent(`${data.message || ''}\n\nFrom: ${data.name || ''} <${data.email || ''}>`);
              window.location.href = `mailto:sbjitatharvas@gmail.com?subject=${subject}&body=${body}`;
            }}
          >
            <div className="flex flex-col gap-2">
              <label className="text-sm text-slate-300">Name</label>
              <input name="name" required className="rounded-lg bg-black/50 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-cyan-500/50" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm text-slate-300">Email</label>
              <input type="email" name="email" required className="rounded-lg bg-black/50 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-cyan-500/50" />
            </div>
            <div className="md:col-span-2 flex flex-col gap-2">
              <label className="text-sm text-slate-300">Message</label>
              <textarea name="message" rows={5} required className="rounded-lg bg-black/50 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-cyan-500/50" />
            </div>
            <div className="md:col-span-2">
              <button className="px-5 py-2.5 rounded-full bg-cyan-500 text-black font-medium hover:bg-cyan-400 transition-colors">Send</button>
            </div>
          </form>
          <div className="mt-4 text-sm text-slate-400">
            Prefer email? <a href="mailto:sbjitatharvas@gmail.com" className="text-cyan-300 underline">sbjitatharvas@gmail.com</a>
          </div>
        </motion.div>
      </Section>

      <footer className="py-10 text-center text-slate-400">
        <div className="mx-auto max-w-6xl px-4">
          <p>
            © {new Date().getFullYear()} Atharva Shinde. Built with React, Vite, Tailwind, and Framer Motion.
          </p>
        </div>
      </footer>
    </div>
  );
}

function SkillCard({ title, items }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
      <h3 className="text-white font-semibold mb-3">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {items.map((i) => (
          <span key={i} className="text-xs px-2 py-1 rounded-full bg-white/10 text-cyan-200">
            {i}
          </span>
        ))}
      </div>
    </div>
  );
}
