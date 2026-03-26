import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

const projects = [
  { title: "FitLife App", category: "Mobile App Design", description: "A comprehensive fitness tracking app with personalized workout plans and nutrition guidance.", image: project1 },
  { title: "LuxeStore", category: "E-Commerce Website", description: "A premium fashion e-commerce platform with an immersive shopping experience.", image: project2 },
  { title: "DataViz Dashboard", category: "SaaS Dashboard", description: "An analytics dashboard for real-time data visualization and business intelligence.", image: project3 },
  { title: "FoodDrop", category: "Food Delivery App", description: "A seamless food delivery application with real-time tracking and smart recommendations.", image: project4 },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group cursor-pointer"
    >
      <div className="relative mb-4 overflow-hidden rounded-2xl">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          width={800}
          height={600}
          className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 flex items-end bg-gradient-to-t from-background/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className="p-6">
            <span className="inline-flex items-center gap-1 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground">
              View Case Study <ArrowUpRight size={14} />
            </span>
          </div>
        </div>
      </div>
      <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-primary">{project.category}</p>
      <h3 className="mb-1 text-xl font-bold text-foreground">{project.title}</h3>
      <p className="text-sm text-muted-foreground">{project.description}</p>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="bg-surface py-24 md:py-32" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">Portfolio</p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            Selected <span className="text-gradient">Projects</span>
          </h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
