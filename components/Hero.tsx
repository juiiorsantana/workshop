import React from 'react';
import { FluidButton } from './ui/FluidButton';
import { ArrowRight, Calendar, TrendingUp } from 'lucide-react';

export const Hero = () => {
    return (
        <section className="relative pt-32 pb-24 bg-clinical-white overflow-hidden">
            {/* Fluid Background Elements */}
            <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-gradient-to-br from-cyan-100 to-blue-50 rounded-full blur-[120px] opacity-60 animate-float"></div>
            <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] bg-blue-50 rounded-full blur-[100px] opacity-50"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-12 gap-12 items-center">

                    <div className="lg:col-span-12 xl:col-span-7 flex flex-col gap-6 text-center lg:text-left">

                        {/* Date / Event Info */}
                        <div className="flex items-center justify-center lg:justify-start gap-2 text-slate-600 font-medium animate-fade-in-up">
                            <Calendar className="w-5 h-5 text-primary" />
                            <span>15 e 16 de março | Online via Zoom | Ao vivo</span>
                        </div>

                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-slate-100 rounded-full px-4 py-1.5 w-fit mx-auto lg:mx-0 shadow-soft-sm animate-fade-in-up [animation-delay:100ms]">
                            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                            <span className="text-sm font-medium text-slate-600 tracking-wide">1ª Edição — Método Vida Plena Pós-Bariátrica</span>
                        </div>

                        {/* Headline */}
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-slate-900 animate-fade-in-up [animation-delay:200ms]">
                            Reconstrua Sua Vida <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-600">Após a Bariátrica</span>
                        </h1>

                        {/* Subheadline */}
                        <h2 className="text-xl md:text-2xl font-medium text-slate-700 animate-fade-in-up [animation-delay:300ms]">
                            O método médico para manter resultados, evitar o reganho e viver com equilíbrio físico e emocional
                        </h2>

                        {/* Description */}
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed animate-fade-in-up [animation-delay:400ms]">
                            Em apenas um final de semana, aprenda o protocolo médico e comportamental completo para viver bem no pós-bariátrico — sem culpa, sem medo de engordar e sem depender apenas de força de vontade.
                        </p>

                        {/* Offer Box (Price + Scarcity) */}
                        <div className="flex flex-col gap-4 mt-2 bg-white/60 backdrop-blur-md border border-slate-200 p-6 rounded-2xl shadow-soft-sm max-w-xl mx-auto lg:mx-0 animate-fade-in-up [animation-delay:500ms]">

                            {/* Scarcity Bar */}
                            <div className="space-y-2">
                                <div className="flex justify-between text-sm font-medium text-slate-700">
                                    <span className="flex items-center gap-1"><TrendingUp size={16} className="text-cyan-600" /> 37% do lote atual já vendido</span>
                                    <span className="text-cyan-600 font-bold">Últimas vagas</span>
                                </div>
                                <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
                                    <div className="h-full bg-gradient-to-r from-cyan-600 to-primary w-[37%] rounded-full"></div>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                                <div>
                                    <p className="text-sm text-slate-500 line-through">De R$ 197</p>
                                    <p className="text-2xl font-bold text-slate-900">Por apenas R$ 47</p>
                                    <p className="text-xs text-green-600 font-medium bg-green-50 px-2 py-0.5 rounded-full w-fit mt-1">Lote promocional de lançamento</p>
                                </div>
                                <FluidButton onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })} className="w-full sm:w-auto">
                                    QUERO GARANTIR MINHA VAGA<ArrowRight size={20} />
                                </FluidButton>
                            </div>
                        </div>

                    </div>

                    <div className="lg:col-span-12 xl:col-span-5 relative mt-12 lg:mt-0 animate-fade-in-up [animation-delay:800ms]">
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
                        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[90%] lg:w-auto lg:translate-x-0 lg:-left-8 lg:-bottom-8 z-20 animate-float [animation-delay:1s]">
                            {/* iOS Notification Style Card */}
                            <div className="bg-white/70 backdrop-blur-xl saturate-150 border border-white/40 p-4 rounded-3xl shadow-xl w-full lg:w-[260px]">
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
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};
