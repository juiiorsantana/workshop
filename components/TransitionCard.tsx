import React from 'react';
import { CheckCheck, Quote, Brain, Heart, Utensils, Leaf } from 'lucide-react';

export const TransitionCard = () => {
    return (
        <section className="py-24 bg-transparent overflow-hidden relative">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white rounded-full blur-[100px] opacity-60 pointer-events-none"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* LEFT COLUMN: WhatsApp Floating Card */}
                    <div className="relative animate-float">
                        {/* Glassmorphic "Phone" Container */}
                        <div className="bg-white/60 backdrop-blur-xl border border-white/80 p-6 md:p-8 rounded-[2.5rem] shadow-soft-xl relative">

                            {/* Chat Interface */}
                            <div className="space-y-4 flex flex-col font-sans">

                                {/* Incoming Message 1 */}
                                <div className="self-start max-w-[85%] animate-fade-in-up">
                                    <div className="bg-white border border-slate-100 rounded-2xl rounded-tl-none p-4 shadow-sm relative text-slate-800 text-lg leading-snug">
                                        Todo mundo fala "agora é fácil, você operou"… mas não é 😞
                                        <span className="text-[10px] text-slate-400 block text-right mt-2 font-medium">10:42</span>
                                    </div>
                                </div>

                                {/* Incoming Message 2 */}
                                <div className="self-start max-w-[85%] animate-fade-in-up [animation-delay:200ms]">
                                    <div className="bg-white border border-slate-100 rounded-2xl rounded-tl-none p-4 shadow-sm relative text-slate-600 leading-snug">
                                        Nunca sei se estou comendo certo depois da bariátrica…
                                        <span className="text-[10px] text-slate-400 block text-right mt-2 font-medium">10:43</span>
                                    </div>
                                </div>

                                {/* Outgoing Message (Call to Action) */}
                                <div className="self-end max-w-[90%] mt-4 animate-fade-in-up [animation-delay:400ms]">
                                    <div className="bg-[#dcf8c6] border border-green-100 rounded-2xl rounded-tr-none p-4 shadow-sm relative text-slate-900 leading-snug">
                                        <p className="font-medium">
                                            👉 Se você se identificou, este workshop foi criado para você.
                                        </p>
                                        <div className="flex items-center justify-end gap-1 mt-2">
                                            <span className="text-[10px] text-green-700/60 font-medium">10:44</span>
                                            <CheckCheck size={14} className="text-blue-500" />
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* Decorative Blob */}
                        <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-green-100 to-blue-100 blur-3xl rounded-full opacity-60"></div>
                    </div>


                    {/* RIGHT COLUMN: Copy & Differentiated Grid */}
                    <div className="space-y-8 animate-fade-in-up [animation-delay:200ms]">
                        <div className="space-y-4">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
                                Manter é mais difícil do que <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-600">emagrecer</span>.
                            </h2>
                            <p className="text-lg text-slate-600 font-medium">
                                Porque é no Pós que você precisa:
                            </p>
                        </div>

                        {/* Differentiated Grid */}
                        <div className="grid sm:grid-cols-2 gap-4">
                            {/* Card 1 */}
                            <div className="bg-white p-5 rounded-2xl shadow-soft-sm border border-slate-100 hover:shadow-soft-md hover:border-blue-100 transition-all duration-300 md:col-span-2">
                                <div className="flex gap-4 items-start">
                                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-500 shrink-0">
                                        <Utensils size={20} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-800 text-lg">Relação Equilibrada</h3>
                                        <p className="text-slate-600 leading-snug mt-1">Criar uma relação equilibrada com a comida, sem restrições absurdas.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Card 2 */}
                            <div className="bg-white p-5 rounded-2xl shadow-soft-sm border border-slate-100 hover:shadow-soft-md hover:border-red-100 transition-all duration-300">
                                <div className="flex flex-col gap-3">
                                    <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-red-500">
                                        <Brain size={20} />
                                    </div>
                                    <p className="font-bold text-slate-800 leading-snug">Entender seus gatilhos emocionais</p>
                                </div>
                            </div>

                            {/* Card 3 */}
                            <div className="bg-white p-5 rounded-2xl shadow-soft-sm border border-slate-100 hover:shadow-soft-md hover:border-green-100 transition-all duration-300">
                                <div className="flex flex-col gap-3">
                                    <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-green-500">
                                        <Leaf size={20} />
                                    </div>
                                    <p className="font-bold text-slate-800 leading-snug">Construir hábitos sustentáveis</p>
                                </div>
                            </div>

                            {/* Card 4 */}
                            <div className="bg-white p-5 rounded-2xl shadow-soft-sm border border-slate-100 hover:shadow-soft-md hover:border-cyan-100 transition-all duration-300 md:col-span-2">
                                <div className="flex gap-4 items-center">
                                    <div className="w-10 h-10 rounded-full bg-cyan-50 flex items-center justify-center text-primary shrink-0">
                                        <Heart size={20} />
                                    </div>
                                    <p className="font-bold text-slate-800 text-lg">Cuidar do corpo e da mente juntos</p>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
};
