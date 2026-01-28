import React from 'react';
import { FluidButton } from './ui/FluidButton';
import { ArrowRight, Calendar, TrendingUp } from 'lucide-react';

export const Hero = () => {
    return (
        <section className="relative pt-32 pb-24 bg-clinical-white overflow-hidden">
            {/* Fluid Background Elements */}
            <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-gradient-to-br from-orange-100 to-red-50 rounded-full blur-[120px] opacity-60 animate-float"></div>
            <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] bg-blue-50 rounded-full blur-[100px] opacity-50"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-12 gap-12 items-center">

                    <div className="lg:col-span-12 xl:col-span-7 flex flex-col gap-6 text-center lg:text-left">

                        {/* Date / Event Info */}
                        <div className="flex items-center justify-center lg:justify-start gap-2 text-slate-600 font-medium animate-fade-in-up">
                            <Calendar className="w-5 h-5 text-alert-orange" />
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
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-alert-orange to-red-600">Após a Bariátrica</span>
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
                                    <span className="flex items-center gap-1"><TrendingUp size={16} className="text-red-500" /> 37% do lote atual já vendido</span>
                                    <span className="text-red-500 font-bold">Últimas vagas</span>
                                </div>
                                <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
                                    <div className="h-full bg-gradient-to-r from-red-500 to-alert-orange w-[37%] rounded-full"></div>
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

                    <div className="lg:col-span-12 xl:col-span-5 relative hidden lg:block animate-fade-in-up [animation-delay:800ms]">
                        <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-soft-xl border border-white/20">
                            {/* Replaced Brutalist Image Box with Fluid Rounded Image Container */}
                            <div className="bg-gradient-to-b from-slate-800 to-slate-900 h-[600px] w-full flex items-center justify-center text-white p-8 relative overflow-hidden group">
                                <div className="absolute inset-0 bg-alert-orange opacity-0 group-hover:opacity-10 transition-opacity duration-700"></div>
                                <div className="text-center">
                                    <span className="opacity-50 font-display text-2xl tracking-widest">[IMAGEM]</span>
                                    <p className="mt-4 text-sm text-slate-400 max-w-xs">
                                        Dr. Lucas Nemes <br />
                                        Foto profissional em fundo escuro ou recorte
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* Decorative floating elements */}
                        <div className="absolute -bottom-12 -left-12 bg-white p-6 rounded-3xl shadow-soft-orange flex flex-col gap-2 max-w-[200px] animate-float [animation-delay:1s]">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Resultado</span>
                            </div>
                            <p className="font-display font-bold text-4xl text-slate-900">100%</p>
                            <p className="text-sm text-slate-500 font-medium">Controle Metabólico</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};
