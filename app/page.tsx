"use client";

import { ArrowRight, Sparkles, Globe, Palette, Bot, ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Globe,
    title: "Diseño Web",
    description:
      "Sitios modernos, rápidos y pensados para convertir visitantes en clientes.",
  },
  {
    icon: Palette,
    title: "Branding",
    description:
      "Creamos una identidad visual coherente que haga que tu marca sea memorable.",
  },
  {
    icon: Bot,
    title: "Inteligencia Artificial",
    description:
      "Integramos IA y automatizaciones para hacer crecer y optimizar tu negocio.",
  },
  {
    icon: ShoppingBag,
    title: "E-commerce",
    description:
      "Tiendas online elegantes, funcionales y preparadas para vender.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#faf8f5] text-[#1c1b1a]">
      {/* NAVBAR */}
      <nav className="fixed left-0 right-0 top-0 z-50 border-b border-[#1c1b1a]/5 bg-[#faf8f5]/80 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
          <a href="#" className="group">
            <div className="text-xl font-semibold tracking-[-0.04em]">
              JZ<span className="text-[#9b87a8]">.</span>Studio
            </div>
            <div className="text-[9px] tracking-[0.3em] text-[#8b8782]">
              DIGITAL STUDIO
            </div>
          </a>

          <div className="hidden items-center gap-8 text-sm md:flex">
            <a href="#servicios" className="transition hover:text-[#9b87a8]">
              Servicios
            </a>
            <a href="#proyectos" className="transition hover:text-[#9b87a8]">
              Proyectos
            </a>
            <a href="#nosotros" className="transition hover:text-[#9b87a8]">
              Nosotros
            </a>
          </div>

          <a
            href="#contacto"
            className="rounded-full bg-[#1c1b1a] px-5 py-2.5 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-[#302e2c]"
          >
            Hablemos
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative flex min-h-screen items-center px-6 pb-20 pt-32 lg:px-10">
        {/* Decorative glow */}
        <div className="pointer-events-none absolute left-1/2 top-1/3 h-96 w-96 -translate-x-1/2 rounded-full bg-[#d9c9e5]/30 blur-3xl" />

        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#1c1b1a]/10 bg-white/60 px-4 py-2 text-xs tracking-wide text-[#6f6b67]">
              <Sparkles className="h-3.5 w-3.5 text-[#9b87a8]" />
              Estudio digital · Chile
            </div>

            <h1 className="max-w-3xl text-5xl font-semibold leading-[0.98] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
              Ideas que
              <br />
              <span className="text-[#9b87a8]">conectan.</span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-[#6f6b67]">
              Diseñamos experiencias digitales que hacen que tu marca se vea
              increíble, conecte con las personas y crezca.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contacto"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#1c1b1a] px-7 py-4 text-sm font-medium text-white transition hover:-translate-y-1"
              >
                Cotiza tu proyecto
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </a>

              <a
                href="#servicios"
                className="inline-flex items-center justify-center rounded-full border border-[#1c1b1a]/10 bg-white/50 px-7 py-4 text-sm font-medium transition hover:bg-white"
              >
                Ver servicios
              </a>
            </div>

            <div className="mt-10 flex items-center gap-6 text-xs text-[#8b8782]">
              <span>✦ Diseño estratégico</span>
              <span>✦ Tecnología</span>
              <span>✦ IA</span>
            </div>
          </motion.div>

          {/* HERO VISUAL */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative hidden lg:block"
          >
            <div className="relative mx-auto aspect-square max-w-[540px]">
              <div className="absolute inset-8 rotate-6 rounded-[3rem] bg-[#e8ddec]" />
              <div className="absolute inset-8 -rotate-3 rounded-[3rem] bg-[#eee8e2]" />

              <div className="absolute inset-0 overflow-hidden rounded-[3rem] border border-white/80 bg-white/70 p-8 shadow-[0_30px_80px_rgba(60,50,40,0.12)] backdrop-blur-xl">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs tracking-[0.25em] text-[#9b87a8]">
                      JZ STUDIO
                    </div>
                    <div className="mt-2 text-2xl font-semibold tracking-tight">
                      Digital experiences.
                    </div>
                  </div>

                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f1edf3]">
                    <Sparkles className="h-4 w-4 text-[#9b87a8]" />
                  </div>
                </div>

                <div className="mt-12 rounded-[2rem] bg-[#1c1b1a] p-7 text-white">
                  <div className="text-xs text-white/50">01 / DIGITAL</div>
                  <div className="mt-12 text-4xl font-medium tracking-tight">
                    Make your
                    <br />
                    brand{" "}
                    <span className="text-[#cdbbd7]">matter.</span>
                  </div>
                  <div className="mt-8 h-1 w-16 rounded-full bg-[#cdbbd7]" />
                </div>

                <div className="mt-5 grid grid-cols-3 gap-3">
                  <div className="h-20 rounded-2xl bg-[#f3eee9]" />
                  <div className="h-20 rounded-2xl bg-[#e7dceb]" />
                  <div className="h-20 rounded-2xl bg-[#eee8e2]" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="servicios" className="bg-white px-6 py-28 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#9b87a8]">
              Lo que hacemos
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
              Todo lo que tu marca
              <br />
              necesita para crecer.
            </h2>

            <p className="mt-5 text-[#6f6b67]">
              Combinamos diseño, estrategia y tecnología para crear soluciones
              digitales que realmente aporten valor.
            </p>
          </div>

          <div className="mt-16 grid gap-px overflow-hidden rounded-[2rem] border border-[#1c1b1a]/10 bg-[#1c1b1a]/10 md:grid-cols-2">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="group bg-white p-8 transition hover:bg-[#faf8f5] lg:p-10"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f0e9f2] text-[#9b87a8] transition group-hover:scale-105">
                      <Icon className="h-5 w-5" />
                    </div>

                    <span className="text-xs text-[#aaa5a0]">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="mt-12 text-2xl font-semibold tracking-tight">
                    {service.title}
                  </h3>

                  <p className="mt-3 max-w-md leading-7 text-[#6f6b67]">
                    {service.description}
                  </p>

                  <div className="mt-8 flex items-center gap-2 text-sm font-medium opacity-0 transition group-hover:opacity-100">
                    Conocer más
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contacto" className="px-6 py-28 lg:px-10">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-[#1c1b1a] px-8 py-20 text-center text-white lg:px-16">
          <Sparkles className="mx-auto h-6 w-6 text-[#cdbbd7]" />

          <h2 className="mx-auto mt-6 max-w-3xl text-4xl font-semibold tracking-[-0.04em] sm:text-5xl lg:text-6xl">
            Tu próxima gran idea
            <br />
            empieza aquí.
          </h2>

          <p className="mx-auto mt-6 max-w-xl leading-7 text-white/60">
            Cuéntanos qué tienes en mente y creemos algo increíble juntos.
          </p>

          <a
            href="mailto:hola@jzstudio.cl"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-medium text-[#1c1b1a] transition hover:-translate-y-1"
          >
            Hablemos
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#1c1b1a]/10 px-6 py-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm text-[#8b8782] sm:flex-row">
          <p>© 2026 JZ Studio. Ideas que conectan.</p>
          <p>Chile · Estudio digital</p>
        </div>
      </footer>
    </main>
  );
}