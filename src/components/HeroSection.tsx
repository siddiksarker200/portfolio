import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src={heroBg} alt="" className="h-full w-full object-cover opacity-30 dark:opacity-20" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      <div className="container relative z-10 mx-auto px-6 pt-32 pb-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5"
          >
            <span className="text-sm font-medium text-primary">UI/UX Designer — 2+ Years Experience</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6 text-5xl font-bold leading-tight tracking-tight text-foreground md:text-7xl lg:text-8xl"
          >
            Designing User{" "}
            <span className="text-gradient">Experiences</span>{" "}
            that Matter
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-10 max-w-xl text-lg text-muted-foreground md:text-xl"
          >
            Hi, I'm <strong className="text-foreground">Siddik Sarker</strong> — I craft intuitive, 
            beautiful digital experiences that solve real problems and delight users.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="group flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:scale-105 hover:shadow-lg"
            >
              View My Work
              <ArrowDown size={16} className="transition-transform group-hover:translate-y-0.5" />
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-semibold text-foreground transition-all hover:border-primary/50 hover:bg-primary/5"
            >
              <Download size={16} />
              Download CV
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <ArrowDown size={20} className="text-muted-foreground" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
