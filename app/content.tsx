import Image from "next/image";
import IconPerson from './assets/user.jpg'
export default function Content(){
    return (
        <div className="flex flex-col w-full">
            <div className="relative w-full overflow-hidden">
                <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-primary/10 rounded-full blur-[140px] pointer-events-none"></div>
                <div className="absolute top-96 -right-48 w-96 h-96 bg-primary-container/10 rounded-full blur-[120px] pointer-events-none"></div>
                <div className="absolute top-[1400px] -left-48 w-96 h-96 bg-tertiary/10 rounded-full blur-[130px] pointer-events-none"></div>
                <section className="relative max-w-7xl mx-auto px-margin pt-12 pb-space-xl" id="about">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center">
                        <div className="lg:col-span-8 flex flex-col items-start gap-space-md">
                            <div className="inline-flex items-center gap-space-xs px-space-md py-1.5 rounded-full bg-surface-container-high border border-outline-variant/30 shadow-[0_0_20px_rgba(244,114,182,0.12)]">
                                <span className="text-primary text-body-sm">🌸</span>
                                <span className="font-nerd text-on-surface">Full Stack & Data Scientist AI</span>
                                <span className="w-1.5 h-1.5 rounded-full bg-primary-container animate-pulse"></span>
                                <span className="font-nerd text-normal text-primary">BANGKOK - ONSITE / REMOTE</span>
                            </div>
                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-space-md">
                                <div className="relative group felx-shrink-0">
                                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-full p-1 border-2 border-primary/40 bg-surface-container shadow-[0_0_24px_rgba(244,114,182,0.35)] transition-all duration-300 group-hover:border-primary group-hover:shadow-[0_0_32px_rgba(244,114,182,0.5)]">
                                        <Image 
                                            src={IconPerson}
                                            alt="TeetyK - Data Scientist &amp; Full Stack Dev"
                                            className="w-full h-full rounded-full object-cover"
                                        />
                                    </div>
                                    <span className="absolute bottom-0 right-1 w-3.5 h-3.5 rounded-full bg-primary border-2 border-surface shadow-[0_0_8px_#f472b6]"></span>
                                </div>
                                <h1 className="font-inter text-5xl font-bold text-on-surface tracking-tight">
                                   <span className="font-thai">Hi ,</span>They're call me <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-container to-secondary drop-shadow-[0_0_24px_rgba(244,114,182,0.35)]">"TeetyK"</span>
                                </h1>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </div>
    );
}