import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

const audienceItems = [
    { title: "Já operou", desc: "e vive em fase de manutenção" },
    { title: "Reganho de Peso", desc: "começou a notar aumento na balança" },
    { title: "Compulsões", desc: "sofre com gatilhos silenciosos" },
    { title: "Evita Socializar", desc: "por vergonha ou desconforto" },
    { title: "Autoimagem", desc: "não se reconhece mais no espelho" },
    { title: "Prevenção", desc: "quer evitar problemas futuros" }
];

export const TargetAudience: React.FC = () => {
    return (
        <section className="py-32 bg-slate-950 relative overflow-hidden border-t border-slate-900/50">

            {/* Background Texture */}
            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#334155 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

            {/* Marquee Banners - NOW Z-0 to be behind text but visible */}
            <div className="absolute top-20 w-full transform -rotate-3 z-0 pointer-events-none">
                <div className="bg-white/5 backdrop-blur-sm border-y border-white/10 py-4 shadow-2xl">
                    <div className="animate-marquee whitespace-nowrap flex space-x-12 items-center">
                        {[...Array(20)].map((_, i) => (
                            <div key={i} className="flex items-center gap-12">
                                {/* Removed outline-text for now to guarantee visibility, using white/20 text */}
                                <span className="text-white/20 font-display font-black text-6xl tracking-widest uppercase italic">LOGO METODO</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="absolute top-40 w-full transform rotate-3 z-0 pointer-events-none">
                <div className="bg-white/5 backdrop-blur-sm border-y border-white/10 py-4 shadow-2xl">
                    <div className="animate-marquee-reverse whitespace-nowrap flex space-x-12 items-center">
                        {[...Array(20)].map((_, i) => (
                            <div key={i} className="flex items-center gap-12">
                                <span className="text-white/20 font-display font-black text-6xl tracking-widest uppercase italic">LOGO METODO</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>


            <div className="container mx-auto px-4 relative z-10 pt-16">
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-800 text-slate-400 text-xs font-bold uppercase tracking-widest mb-6 shadow-inner">
                        <span className="w-2 h-2 rounded-full bg-alert-orange animate-pulse"></span>
                        Diagnóstico Inicial
                    </div>
                    <h2 className="font-display font-black text-4xl md:text-6xl text-white mb-6 uppercase tracking-tight">
                        Este workshop é <span className="text-transparent bg-clip-text bg-gradient-to-r from-alert-orange to-red-500">para você?</span>
                    </h2>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto font-light">
                        Se você se identifica com um ou mais pontos abaixo, a imersão foi desenhada especificamente para o seu momento.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {audienceItems.map((item, index) => (
                        <div key={index} className="group relative">
                            {/* Hover Glow */}
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-alert-orange/0 to-red-600/0 group-hover:from-alert-orange/50 group-hover:to-red-600/50 rounded-2xl blur transition duration-500 opacity-0 group-hover:opacity-100"></div>

                            <div className="relative h-full bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:bg-slate-800/80 transition-all duration-300">
                                <div className="w-12 h-1 bg-gradient-to-r from-alert-orange to-red-500 mb-6 group-hover:w-full transition-all duration-500 ease-out"></div>

                                <div className="flex items-start justify-between mb-4">
                                    <h3 className="text-xl font-bold text-white uppercase tracking-wide group-hover:text-alert-orange transition-colors">
                                        {item.title}
                                    </h3>
                                    <Check className="text-slate-700 group-hover:text-alert-orange transition-colors" size={20} />
                                </div>

                                <p className="text-slate-400 font-medium leading-relaxed group-hover:text-slate-200 transition-colors">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-20 text-center">
                    <p className="text-slate-500 text-sm uppercase tracking-widest mb-4">Não deixe para depois</p>
                    <ArrowRight className="mx-auto text-alert-orange animate-bounce" />
                </div>
            </div>
        </section>
    );
};
