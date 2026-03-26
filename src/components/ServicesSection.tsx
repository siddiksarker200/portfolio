import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Palette, Monitor, Smartphone } from "lucide-react";

const services = [
  { icon: Palette, title: "UI/UX Design", description: "Creating beautiful, intuitive interfaces backed by thorough user research and testing." },
  { icon: Monitor, title: "Web Design", description: "Designing responsive, conversion-optimized websites that elevate your brand presence." },
  { icon: Smartphone, title: "App Design", description: "Crafting mobile experiences that users love with seamless interactions and flows." },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 md:py-32" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">What I Do</p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            My <span className="text-gradient">Services</span>
          </h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group rounded-2xl border border-border bg-card p-8 transition-all hover:border-primary/30 hover:shadow-lg"
            >
              <div className="mb-6 inline-flex rounded-xl bg-primary/10 p-3">
                <service.icon size={28} className="text-primary" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-foreground">{service.title}</h3>
              <p className="leading-relaxed text-muted-foreground">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
