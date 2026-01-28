import React from 'react';
import { AlertTriangle, XCircle } from 'lucide-react';

export const Agitation = () => {
    const pains = [
        "Medo constante do reganho de peso",
        "Culpa ao comer qualquer coisa fora da dieta",
        "Ansiedade social em restaurantes",
        "Sensação de que a cirurgia falhou"
    ];

    return (
        <section className="py-24 bg-gradient-to-b from-clinical-white to-soft-orange overflow-hidden relative">
            {/* Soft Background Elements */}
            <div className="absolute top-0 transform -translate-x-1/2 left-1/2 w-full max-w-7xl h-full pointer-events-none">
                <div className="absolute top-20 left-0 w-64 h-64 bg-orange-200 rounded-full blur-[80px] opacity-20"></div>
                <div className="absolute bottom-20 right-0 w-64 h-64 bg-red-200 rounded-full blur-[80px] opacity-20"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-white/60 backdrop-blur-xl border border-white p-8 md:p-12 rounded-[3rem] shadow-soft-xl relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-alert-orange to-red-500"></div>

                        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-slate-900 leading-tight">
                            Você venceu a <span className="text-transparent bg-clip-text bg-gradient-to-r from-alert-orange to-red-600 font-black">obesidade</span>, <br />
                            mas a guerra continua?
                        </h2>

                        <div className="grid md:grid-cols-2 gap-6">
                            {pains.map((pain, i) => (
                                <div key={i} className="flex items-center gap-4 p-6 rounded-2xl bg-white border border-slate-100 hover:border-alert-orange/30 shadow-soft-sm hover:shadow-soft transition-all duration-300 group">
                                    <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center shrink-0 group-hover:bg-red-100 transition-colors">
                                        <AlertTriangle className="w-5 h-5 text-red-500" />
                                    </div>
                                    <p className="font-medium text-lg text-slate-700">{pain}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-12 p-8 bg-slate-900 text-white text-center rounded-3xl relative overflow-hidden shadow-soft-xl">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-alert-orange rounded-full blur-[60px] opacity-20"></div>
                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-alert-orange to-red-600 px-6 py-1.5 text-xs font-bold uppercase tracking-widest rounded-b-xl shadow-lg">
                                Diagnóstico
                            </div>
                            <p className="text-xl font-medium leading-relaxed opacity-90 relative z-10">
                                "Se você marcou 2 ou mais pontos, seu <span className="text-alert-orange font-bold">software mental</span> ainda está desatualizado."
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
