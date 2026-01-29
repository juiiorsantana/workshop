import React from 'react';
import { motion } from 'motion/react';
import { Calendar, CheckCircle2, Video, Clock, MapPin, ArrowUpRight } from 'lucide-react';

export default function WorkshopProgram() {
    return (
        <section className="bg-medical-slate py-24 relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-24">

                    {/* LEFT COLUMN - STICKY INFO */}
                    <div className="lg:col-span-5 relative">
                        <div className="lg:sticky lg:top-32 space-y-8">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-gray-300 mb-6 backdrop-blur-md">
                                    <Clock size={14} className="text-primary" />
                                    <span className="text-xs font-medium tracking-wide uppercase">Cronograma Oficial</span>
                                </div>

                                <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 leading-tight">
                                    15 e 16 de Março
                                </h2>

                                <div className="flex items-center gap-4 text-lg text-gray-300 bg-white/5 border border-white/10 p-4 rounded-2xl w-fit backdrop-blur-sm">
                                    <span className="font-medium">Online no</span>
                                    <div className="flex items-center gap-2 bg-[#2D8CFF]/20 px-3 py-1 rounded-lg border border-[#2D8CFF]/30">
                                        <Video size={18} className="text-[#2D8CFF]" />
                                        <span className="font-bold text-white tracking-wide">Zoom</span>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN - SCHEDULE CONTENT */}
                    <div className="lg:col-span-7 space-y-16">

                        {/* Day 1 */}
                        <div className="space-y-8">
                            <div className="mb-6">
                                <h3 className="text-2xl font-bold text-white mb-2">SÁBADO (15/03)</h3>
                                <p className="text-gray-400">Fundamentos e Quebra de Padrões</p>
                            </div>

                            <div className="space-y-4">
                                <ScheduleItem title="Verdades do pós-bariátrico" />
                                <ScheduleItem title="Nutrição sustentável" />
                                <ScheduleItem title="Quebra de sabotagem" />
                                <ScheduleItem title="Exercício inteligente" />
                            </div>
                        </div>

                        {/* Day 2 */}
                        <div className="space-y-8">
                            <div className="mb-6">
                                <h3 className="text-2xl font-bold text-white mb-2">DOMINGO (16/03)</h3>
                                <p className="text-gray-400">Reconstrução e Manutenção</p>
                            </div>

                            <div className="space-y-4">
                                <ScheduleItem title="Gestão emocional" />
                                <ScheduleItem title="Vida social e relações" />
                                <ScheduleItem title="Reconstrução da identidade" />
                                <ScheduleItem title="Plano de manutenção de 90 dias" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}

const ScheduleItem = ({ title }: { title: string }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="group flex items-center justify-between p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition-all duration-300 hover:bg-white/[0.07]"
        >
            <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20 group-hover:scale-110 transition-transform duration-300">
                    <ArrowUpRight size={20} />
                </div>
                <span className="text-lg font-medium text-gray-200 group-hover:text-white transition-colors">{title}</span>
            </div>
        </motion.div>
    );
};
