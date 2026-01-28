import React from 'react';
import { FluidButton } from './ui/FluidButton';
import { Check, ShieldCheck } from 'lucide-react';

export const Pricing = () => {
    return (
        <section id="pricing" className="py-24 bg-white relative overflow-hidden">
            {/* Abstract Background */}
            <div className="absolute inset-0 bg-slate-50 opacity-40"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-100/30 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 md:gap-0 bg-white rounded-[3rem] shadow-soft-xl overflow-hidden border border-slate-100">

                    <div className="p-12 md:p-16 flex flex-col justify-center">
                        <h3 className="text-sm font-bold tracking-widest text-primary uppercase mb-6 flex items-center gap-2">
                            <span className="w-8 h-[1px] bg-primary"></span>
                            O QUE ESTÁ INCLUSO
                        </h3>
                        <ul className="space-y-6">
                            {[
                                "Workshop Ao Vivo (12h)",
                                "Gravação Vitalícia",
                                "Material de Apoio (PDF)",
                                "Certificado Oficial",
                                "Grupo de Networking"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-4 text-lg text-slate-700 font-medium">
                                    <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0">
                                        <Check size={14} strokeWidth={3} />
                                    </div>
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <div className="mt-12 flex items-center gap-3 text-sm font-medium text-slate-500 bg-slate-50 p-4 rounded-xl w-fit">
                            <ShieldCheck className="text-slate-400" /> Garantia de 7 dias incondicional
                        </div>
                    </div>

                    <div className="p-12 md:p-16 flex flex-col justify-center bg-slate-900 text-white relative overflow-hidden group">
                        {/* Gradient Blobs */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary rounded-full blur-[80px] opacity-20 group-hover:opacity-30 transition-opacity duration-700"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500 rounded-full blur-[80px] opacity-10"></div>

                        <div className="relative z-10">
                            <div className="inline-block px-4 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-bold uppercase tracking-wider mb-6">
                                Lote Promocional
                            </div>

                            <div className="text-7xl font-bold tracking-tighter mb-2 flex items-start text-white">
                                <span className="text-2xl mt-2 mr-2 opacity-60">R$</span>
                                47
                                <span className="text-2xl mt-2 opacity-60">,90</span>
                            </div>
                            <p className="opacity-50 line-through text-lg mb-10 pl-2">De R$ 197,00</p>

                            <FluidButton variant="primary" fullWidth className="shadow-soft-primary hover:shadow-glow">
                                GARANTIR AGORA
                            </FluidButton>

                            <p className="text-center text-xs text-slate-500 mt-6">
                                Pagamento seguro via cartão ou PIX
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};
