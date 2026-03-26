import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";

const testimonials = [
  { name: "Sarah Chen", role: "CEO, TechStartup", text: "Siddik transformed our product's user experience completely. His attention to detail and understanding of user needs is exceptional." },
  { name: "James Miller", role: "Product Manager, FinApp", text: "Working with Siddik was a game-changer. He delivered a design that increased our conversion rate by 40%." },
  { name: "Priya Sharma", role: "Founder, EduPlatform", text: "Siddik's design thinking approach helped us create an intuitive learning platform our students love." },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="testimonials" className="bg-surface py-24 md:py-32" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">Testimonials</p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            What Clients <span className="text-gradient">Say</span>
          </h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="rounded-2xl border border-border bg-card p-8"
            >
              <Quote size={32} className="mb-4 text-primary/30" />
              <p className="mb-6 leading-relaxed text-muted-foreground">{t.text}</p>
              <div>
                <p className="font-semibold text-foreground">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
