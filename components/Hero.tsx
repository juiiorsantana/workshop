import { HoverBorderGradient } from './ui/hover-border-gradient';
import { ArrowRight, Calendar, TrendingUp } from 'lucide-react';
import { cn } from '../lib/utils';
import { motion } from 'motion/react';

export const Hero = () => {
    return (
        <section className="relative pt-10 pb-24 bg-transparent overflow-hidden scroll-section">
            {/* Fluid Background Elements */}
            <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-gradient-to-br from-cyan-100 to-blue-50 rounded-full blur-[120px] opacity-60 animate-float"></div>
            <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] bg-blue-50 rounded-full blur-[100px] opacity-50"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-12 gap-12 items-center">

                    <motion.div
                        className="lg:col-span-12 xl:col-span-7 flex flex-col gap-6 text-center lg:text-left"
                        initial="hidden"
                        animate="visible"
                        transition={{ staggerChildren: 0.12 }}
                    >

                        {/* Date / Event Info */}
                        <motion.div
                            className="flex items-center justify-center lg:justify-start gap-2 text-slate-600 font-medium"
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 }
                            }}
                            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                        >
                            <Calendar className="w-5 h-5 text-primary" />
                            <span>15 e 16 de março | Online via Zoom</span>
                        </motion.div>

                        {/* Badge */}
                        <motion.div
                            className="group relative mx-auto lg:mx-0 flex items-center justify-center rounded-full px-4 py-1.5 shadow-[inset_0_-8px_10px_#8fdfff1f] transition-shadow duration-500 ease-out hover:shadow-[inset_0_-5px_10px_#8fdfff3f] bg-white/80 backdrop-blur-sm w-fit"
                            variants={{
                                hidden: { opacity: 0, y: 20, scale: 0.95 },
                                visible: { opacity: 1, y: 0, scale: 1 }
                            }}
                            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                        >
                            <span
                                className={cn(
                                    "animate-gradient absolute inset-0 block h-full w-full rounded-[inherit] bg-gradient-to-r from-primary/50 via-cyan-400/50 to-primary/50 bg-[length:300%_100%] p-[1px]",
                                )}
                                style={{
                                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                    WebkitMaskComposite: "destination-out",
                                    mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                    maskComposite: "subtract",
                                    WebkitClipPath: "padding-box",
                                }}
                            />
                            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse mr-2 relative z-10"></span>
                            <span className="text-sm font-medium text-slate-600 tracking-wide relative z-10">
                                1ª Edição — Método Vida Plena Pós-Bariátrica
                            </span>
                        </motion.div>

                        {/* Headline */}
                        <motion.h1
                            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-slate-900"
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                visible: { opacity: 1, y: 0 }
                            }}
                            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                        >
                            Reconstrua Sua Vida <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-600">Após a Bariátrica</span>
                        </motion.h1>

                        {/* Subheadline */}
                        <motion.h2
                            className="text-lg md:text-xl font-medium text-slate-700"
                            variants={{
                                hidden: { opacity: 0, y: 25 },
                                visible: { opacity: 1, y: 0 }
                            }}
                            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                        >
                            O método médico para manter resultados, evitar o reganho e viver com equilíbrio físico e emocional
                        </motion.h2>

                        {/* Offer Box (Price + Scarcity) */}
                        <motion.div
                            className="flex flex-col gap-4 mt-2 bg-white/60 backdrop-blur-md border border-slate-200 p-6 rounded-2xl shadow-soft-sm max-w-xl mx-auto lg:mx-0"
                            variants={{
                                hidden: { opacity: 0, y: 30, scale: 0.98 },
                                visible: { opacity: 1, y: 0, scale: 1 }
                            }}
                            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                        >

                            <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-4 pt-2">
                                <div className="text-center sm:text-left">
                                    <p className="text-sm text-slate-500 line-through">De R$ 197</p>
                                    <p className="text-2xl font-bold text-slate-900">Por apenas R$ 47</p>
                                </div>
                                <HoverBorderGradient
                                    containerClassName="rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                                    as="button"
                                    className="bg-cyan-600 hover:bg-cyan-500 text-white flex items-center space-x-2 px-8 py-3 transition-colors duration-300"
                                    maskClassName="bg-cyan-600 hover:bg-cyan-500 transition-colors duration-300"
                                >
                                    <span className="font-bold whitespace-nowrap">QUERO GARANTIR MINHA VAGA</span>
                                    <ArrowRight size={20} />
                                </HoverBorderGradient>
                            </div>

                            {/* Scarcity Bar */}
                            <div className="space-y-2 pt-2 border-t border-slate-100/50 mt-2">
                                <div className="flex justify-between text-sm font-medium text-slate-700">
                                    <span className="flex items-center gap-1"><TrendingUp size={16} className="text-cyan-600" /> 37% do lote atual já vendido</span>
                                    <span className="text-cyan-600 font-bold">Últimas vagas</span>
                                </div>
                                <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
                                    <motion.div
                                        className="h-full bg-gradient-to-r from-cyan-600 to-primary rounded-full shadow-[0_0_10px_rgba(8,145,178,0.5)]"
                                        initial={{ width: 0 }}
                                        animate={{ width: "37%" }}
                                        transition={{ duration: 1.2, delay: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                                    />
                                </div>
                            </div>
                        </motion.div>

                    </motion.div>

                    <motion.div
                        className="lg:col-span-12 xl:col-span-5 relative mt-12 lg:mt-0"
                        initial={{ opacity: 0, x: 60, scale: 0.95 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                    >
                        <div className="relative z-10 rounded-[2rem] lg:rounded-[3rem] overflow-hidden shadow-soft-xl border border-white/20">
                            {/* Replaced Brutalist Image Box with Fluid Rounded Image Container */}
                            <div className="bg-gradient-to-b from-slate-800 to-slate-900 h-[450px] lg:h-[600px] w-full flex items-end justify-center text-white relative overflow-hidden group">
                                <img
                                    src="/images/dr-lucas-hero.jpg"
                                    alt="Dr. Lucas Nemes"
                                    className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-60"></div>
                            </div>
                        </div>
                        {/* Decorative floating elements */}
                        <motion.div
                            className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[90%] lg:w-auto lg:translate-x-0 lg:-left-8 lg:-bottom-8 z-20"
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
                        >
                            {/* iOS Notification Style Card */}
                            <div className="bg-white/70 backdrop-blur-xl saturate-150 border border-white/40 p-4 rounded-3xl shadow-xl w-full lg:w-[260px] animate-float">
                                <div className="flex items-center justify-between mb-2 opacity-60">
                                    <div className="flex items-center gap-1.5">
                                        <div className="w-5 h-5 rounded-md bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shadow-sm">
                                            <Calendar size={10} className="text-white" />
                                        </div>
                                        <span className="text-[10px] font-semibold text-slate-800 uppercase tracking-wide">Método Vida Plena</span>
                                    </div>
                                    <span className="text-[10px] text-slate-600">Agora</span>
                                </div>

                                <div className="flex gap-3 items-center">
                                    <div className="flex-1">
                                        <h4 className="font-semibold text-slate-900 text-sm mb-0.5">Resultado Confirmado</h4>
                                        <p className="text-sm text-slate-600 leading-snug">
                                            100% de controle metabólico alcançado.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};
