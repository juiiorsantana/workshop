import { cn } from "@/lib/utils";
import React from "react";
import { motion } from "motion/react";

export default function WhyCheap() {
    return (
        <section className="relative w-full py-20 bg-black overflow-hidden scroll-section" id="why-so-cheap">
            {/* Grid Pattern */}
            <div
                className={cn(
                    "absolute inset-0",
                    "[background-size:40px_40px]",
                    "[background-image:linear-gradient(to_right,#333_1px,transparent_1px),linear-gradient(to_bottom,#333_1px,transparent_1px)]",
                    "opacity-40"
                )}
            />

            {/* Radial gradient for fading edges */}
            <div className="pointer-events-none absolute inset-0 bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

            <div className="relative z-10 container mx-auto px-4 max-w-6xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Left Column: Headline */}
                    <motion.div
                        className="text-left"
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight">
                            Por que um evento <br /> <span className="opacity-90">tão barato?</span>
                        </h2>
                    </motion.div>

                    {/* Right Column: Content */}
                    <motion.div
                        className="text-left space-y-6 text-zinc-300 md:text-lg"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ staggerChildren: 0.15, delayChildren: 0.2 }}
                    >
                        <motion.p
                            variants={{
                                hidden: { opacity: 0, x: 40 },
                                visible: { opacity: 1, x: 0 }
                            }}
                            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                        >
                            Porque cansei de ver pacientes pós-bariátricos reganhando peso em silêncio, sem ter condições de pagar R$ 500-800 por consulta particular. A cirurgia pode ser feita pelo SUS, mas o acompanhamento emocional e comportamental depois? Quase ninguém tem acesso. Este workshop existe para democratizar um método completo, científico e testado com centenas de pacientes.
                        </motion.p>
                        <motion.p
                            variants={{
                                hidden: { opacity: 0, x: 40 },
                                visible: { opacity: 1, x: 0 }
                            }}
                            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                        >
                            <strong className="text-white">Transparência total:</strong> vou dedicar 80% do tempo entregando valor puro — método completo, protocolos práticos e ferramentas aplicáveis. Nos 20% finais, apresentarei o Programa Vida Plena, meu acompanhamento de 6 meses com consultas online e suporte contínuo, disponível exclusivamente para participantes do workshop.
                        </motion.p>
                        <motion.p
                            variants={{
                                hidden: { opacity: 0, x: 40 },
                                visible: { opacity: 1, x: 0 }
                            }}
                            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                        >
                            Quero que você experimente a qualidade do método antes de investir mais. Que veja resultados práticos. E só então decida se quer ir mais fundo. Sem pressão. Sem truques. Só ciência e compromisso real.
                        </motion.p>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
