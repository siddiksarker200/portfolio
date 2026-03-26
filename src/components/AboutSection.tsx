import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import profileImg from "@/assets/profile.jpg";

const skills = ["UI Design", "UX Research", "Wireframing", "Prototyping", "Design Systems", "User Testing"];
const tools = ["Figma", "Adobe XD", "Sketch", "Photoshop", "Illustrator", "After Effects"];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 md:py-32" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="glow-effect overflow-hidden rounded-2xl">
              <img src={profileImg} alt="Siddik Sarker" className="w-full rounded-2xl" loading="lazy" width={800} height={1024} />
            </div>
            <div className="absolute -bottom-6 -right-6 rounded-xl border bg-card p-4 shadow-xl">
              <p className="text-3xl font-bold font-display text-foreground">2+</p>
              <p className="text-sm text-muted-foreground">Years Experience</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">About Me</p>
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Passionate about creating{" "}
              <span className="text-gradient">meaningful</span> digital experiences
            </h2>
            <p className="mb-8 leading-relaxed text-muted-foreground">
              I'm Siddik Sarker, a UI/UX Designer with over 2 years of experience crafting user-centered 
              digital products. I specialize in transforming complex problems into simple, elegant solutions 
              that users love. My approach combines research-driven insights with creative design thinking.
            </p>

            <div className="mb-8">
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-widest text-foreground">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span key={skill} className="rounded-full border border-border bg-secondary px-4 py-1.5 text-sm text-secondary-foreground">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-widest text-foreground">Tools</h3>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool) => (
                  <span key={tool} className="rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm text-primary">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
