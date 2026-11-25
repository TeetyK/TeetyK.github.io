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
                            <p className="font-thai text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
                                ชอบการเก็บรวบรวมข้อมูลจนไปถึงได้ โมเดลที่สามารถทำนายได้ <span className="text-primary font-medium">Data Scientist - AI</span> และ Web Application เรียบง่าย โดยให้ความสำคัญกับกระบวนการทำงานและความสวยงาม
                            </p>
                            <div className="flex flex-wrap items-center gap-space-md pt-space-xs">
                                <a href="#projects" className="inline-flex items-center gap-space-sm px-space-lg py-3 rounded-lg text-sm bg-primary-container text-on-primary-container font-nerd font-semibold shadow-[0_0_24px_rgba(244,114,182,0.45)] hover:bg-primary transition-all duration-300 hover:-translate-y-0.5">
                                    <span>view projects</span>
                                    <span className="material-symbols-outlined text-[10px]">arrow_downward</span>
                                </a>
                                <a href="#contact" className="inline-flex items-center gap-space-sm px-space-lg py-3 rounded-lg bg-surface-container text-primary font-nerd font-semibold text-sm border border-primary/20 hover:bg-surface-container-high hover:border-primary/50 transition-all duration-300">
                                    <span className="material-symbols-outlined text-[10px]">chat_bubble_outline</span>
                                    <span>contact</span>
                                </a>
                            </div>
                            {/* Tech Stack */}
                            <div className="flex flex-col gap-space-xs pt-space-sm w-full">
                                <span className="font-nerd text-normal uppercase tracking-wider text-outline">CORE TECHNOLOGIES &amp; TOOLING</span>
                                <div className="flex flex-wrap gap-2 pt-1">
                                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-surface-container font-nerd text-normal text-on-surface border border-outline-variant/30 hover:border-primary/40 transition-colors">
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>Go
                                    </span>
                                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-surface-container font-nerd text-normal text-on-surface border border-outline-variant/30 hover:border-primary/40 transition-colors">
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>C/C++
                                    </span>
                                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-surface-container font-nerd text-normal text-on-surface border border-outline-variant/30 hover:border-primary/40 transition-colors">
                                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>Python
                                    </span>
                                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-surface-container font-nerd text-normal text-on-surface border border-outline-variant/30 hover:border-primary/40 transition-colors">
                                        <span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>TypeScript
                                    </span>
                                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-surface-container font-nerd text-normal text-on-surface border border-outline-variant/30 hover:border-primary/40 transition-colors">
                                        <span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>React / Next.js
                                    </span>
                                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-surface-container font-nerd text-normal text-on-surface border border-outline-variant/30 hover:border-primary/40 transition-colors">
                                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>Docker / Kubernetes
                                    </span>
                                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-surface-container font-nerd text-normal text-on-surface border border-outline-variant/30 hover:border-primary/40 transition-colors">
                                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>Google Cloud Platform
                                    </span>
                                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-surface-container font-nerd text-normal text-on-surface border border-outline-variant/30 hover:border-primary/40 transition-colors">
                                        <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>PostgreSQL
                                    </span>
                                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-surface-container font-nerd text-normal text-on-surface border border-outline-variant/30 hover:border-primary/40 transition-colors">
                                        <span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>Data Engineering
                                    </span>
                                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-surface-container font-nerd text-normal text-on-surface border border-outline-variant/30 hover:border-primary/40 transition-colors">
                                        <span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>Data Science
                                    </span>
                                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-surface-container font-nerd text-normal text-on-surface border border-outline-variant/30 hover:border-primary/40 transition-colors">
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>Machine Learning
                                    </span>
                                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-surface-container font-nerd text-normal text-on-surface border border-outline-variant/30 hover:border-primary/40 transition-colors">
                                        <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>Deep Learning
                                    </span>
                                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-surface-container font-nerd text-normal text-on-surface border border-outline-variant/30 hover:border-primary/40 transition-colors">
                                        <span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>LLM
                                    </span>
                                </div>
                            </div>
                        </div>
                        {/* code right section */}
                        <div className="lg:col-span-4 flex flex-col gap-space-md">
                            <div className="rounded-xl bg-surface-container-low border border-outline-variant/30 p-space-sm shadow-[0_16px_36px_rgba(0,0,0,0.3)]">
                                <div className="flex items-center justify-between pb-space-sm border-b border-outline-variant/20 mb-space-sm">
                                    <div className="flex items-center gap-1.5">
                                        <span className="w-2.5 h-2.5 rounded-full bg-primary-container"></span>
                                        <span className="w-2.5 h-2.5 rounded-full bg-secondary"></span>
                                        <span className="w-2.5 h-2.5 rounded-full bg-tertiary"></span>
                                    </div>
                                    <span className="font-nerd text-sm text-outline">main.go</span>
                                </div>
                                <pre className="font-nerd text-[12px] leading-5 text-on-surface-variant overflow-x-auto selection:bg-primary/20"><code>
                                    <span className="text-primary font-semibold">package</span> main <br />
                                    <span className="text-primary font-semibold">type</span> Developer <span className="text-primary font-semibold">struct</span> {'\{'} <br/>
                                        &ensp;&ensp;&ensp;Name    <span className="text-tertiary">string</span><br/>
                                        &ensp;&ensp;&ensp;Motto   <span className="text-tertiary">string</span><br/>
                                        &ensp;&ensp;&ensp;Fav     <span className="text-tertiary">string</span><br/>
                                    {'\}'}<br/>

                                    <span className="text-primary font-semibold">func</span> <span className="text-tertiary">Init</span>() *Developer {'\{'}<br/>
                                    <span className="text-outline">//🌸 Learning Clean code, make impact</span><br/>
                                    <span className="text-primary font-semibold">return</span> &amp;Developer{'\{'}<br/>
                                    &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;Name : <span className="text-secondary-fixed">"Phunyapat panithiporn"</span>,<br/>
                                    &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;Motto : <span className="text-secondary-fixed">"Just Chill,Don't Serious,Keep do it"</span>,<br/>
                                    &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;Fav : <span className="text-tertiary text-[10px]">🖥️programming 🏃🏻‍♂️‍➡️Running 🎮Games 📷Photo</span>,<br/>
                                    &ensp;&ensp;&ensp;{'\}'}<br/>
                                    {'\}'}</code></pre>
                            </div>
                            <div className="grid grid-cols-3 gap-space-xs">
                                <div className="p-space-sm rounded-lg bg-surface-container border border-outline-variant/20 flex flex-col">
                                    <span className="font-nerd text-body-lg font-bold text-primary">11 เดือน</span>
                                    <span className="font-thai text-body-sm text-on-surface-variant">ประสบการณ์ทำงานสาย Data จริง</span>
                                </div>
                                <div className="p-space-sm rounded-lg bg-surface-container border border-outline-variant/20 flex flex-col">
                                    <span className="font-nerd text-body-lg text-secondary font-bold">E2E</span>
                                    <span className="font-thai text-body-sm text-on-surface-variant">พัฒนาครบวงจรตั้งแต่ข้อมูล โมเดล ยันเว็บ</span>
                                </div>
                                <div className="p-space-sm rounded-lg bg-surface-container border border-outline-variant/20 flex flex-col">
                                    <span className="font-nerd text-body-lg text-tertiary font-bold">3 สาย</span>
                                    <span className="font-thai text-body-sm text-on-surface-variant">Data Science • Data Eng • AI / Web</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="relative max-w-7xl mx-auto px-margin py-space-xl border-t border-outline-variant/20" id="experience">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-lg gap-space-sm">
                        <div>
                            <div className="flex items-center gap-space-xs font-nerd text-normal text-primary tracking-widest uppercase mb-1">
                                <span>01 // PROFESSIONAL JOURNEY</span>
                                <span className="w-8 h-px bg-primary/40"></span>
                            </div>
                            <h2 className="font-thai text-normal text-on-surface tracking-tight">ประสบการณ์ทำงาน</h2>
                        </div>
                        <p className="text-body-sm font-thai text-on-surface-variant max-w-md">
                            รวบรวมประสบการณ์ทำงาน
                        </p>
                    </div>
                    <div className="flex flex-col gap-space-md">
                        <div className="group relative rounded-xl bg-surface-container"></div>
                    </div>
                </section>
            </div>

        </div>
    );
}