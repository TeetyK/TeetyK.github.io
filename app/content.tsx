import Image from "next/image";
import IconPerson from './assets/user.jpg'
import dummyicon from './assets/user.jpg'
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
                        {/* 1 */}
                        <div className="group relative rounded-xl bg-surface-container p-space-lg border border-outline-variant/30 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_8px_32px_-4px_rgba(244,114,182,0.15)]">
                            <div className="flex flex-col md:flex-row md:items-start justify-between gap-space-sm mb-space-sm">
                                <div className="flex items-center gap-space-sm">
                                    <div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-primary border border-primary/20 group-hover:bg-primary-container group-hover:text-on-primary-container transition-colors">
                                        <span className="material-symbols-outlined text-[20px]">cloud_sync</span>
                                    </div>
                                    <div>
                                        <h3 className="font-nerd text-normal text-on-surface group-hover:text-primary transition-colors">Credit Risk Analyst (Data Scientist)</h3>
                                        <span className="font-nerd text-outline">I-SUPPORT Co.Ltd</span>
                                    </div>
                                </div>
                                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-highest font-nerd text-[12px] text-primary self-start">
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span>
                                        2025/05 - 2026/04 (11 month)
                                    </div>
                            </div>
                                <p className="font-thai text-body-sm text-on-surface-variant mb-space-md leading-relaxed">
                                    กระบวนการทำงานตั้งแต่ Data Preparation / Cleaning / EDA , Data Transformation / Feature Engineering , Modeling และ Evaluation ทั้งด้านโปรเจค Forward Looking PD และ Creidit Scord Card ทั้ง A/B score และได้มีโอกาสพัฒนาระบบ WatchList เพื่อเรียกกลุ่มลูกหนี้ จนได้ผลลัพธ์เป็นรายงาน Report รายเดือน
                                </p>
                                <div className="flex flex-wrap items-center gap-2">
                                    <span className="font-nerd text-sm px-2.5 py-0.5 rounded bg-surface-container-lowest text-on-surface-variant">Python (pandas/numpy)</span>
                                    <span className="font-nerd text-sm px-2.5 py-0.5 rounded bg-surface-container-lowest text-on-surface-variant">Machine Learning</span>
                                    <span className="font-nerd text-sm px-2.5 py-0.5 rounded bg-surface-container-lowest text-on-surface-variant">Deep Learning</span>
                                    <span className="font-nerd text-sm px-2.5 py-0.5 rounded bg-surface-container-lowest text-on-surface-variant">Natural Langauge Processing</span>
                                    <span className="font-nerd text-sm px-2.5 py-0.5 rounded bg-surface-container-lowest text-on-surface-variant">Matplotlib / Seaborn</span>
                                    <span className="font-nerd text-sm px-2.5 py-0.5 rounded bg-surface-container-lowest text-on-surface-variant">Oracle</span>
                                </div>
                        </div>
                        {/* tutor */}
                        <div className="group relative rounded-xl bg-surface-container p-space-lg border border-outline-variant/30 hover:border-[#44e38e]/50 transition-all duration-300 hover:shadow-[0_8px_32px_-4px_rgba(244,114,182,0.15)]">
                            <div className="flex flex-col md:flex-row md:items-start justify-between gap-space-sm mb-space-sm">
                                <div className="flex items-center gap-space-sm">
                                    <div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-[#44e38e] border border-[#44e38e]/10 group-hover:bg-[#44e38e]/100 group-hover:text-[#6d6d6d] transition-colors">
                                        <span className="material-symbols-outlined text-[20px]">lan</span>
                                    </div>
                                    <div>
                                        <h3 className="font-nerd text-normal text-on-surface group-hover:text-[#44e38e] transition-colors">Tutor Python</h3>
                                        <span className="font-nerd text-outline">Part-time on Sunday </span>
                                    </div>
                                </div>
                                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-highest font-nerd text-[12px] text-[#44e38e] self-start">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#44e38e]"></span>
                                        2025/09 - 2026/03 (7 month)
                                    </div>
                            </div>
                                <p className="font-thai text-body-sm text-on-surface-variant mb-space-md leading-relaxed">
                                    ได้มีโอกาสสอนตัวต่อตัว ผ่าน Google Meets ตั้งแต่พื้นฐานถึง Object Oriented Programming และสอนแนวทางโจทย์โดยใช้หลักของ Data Structure และ Algorithm ในการแก้ปัญหา
                                </p>
                                <div className="flex flex-wrap items-center gap-2">
                                    <span className="font-nerd text-sm px-2.5 py-0.5 rounded bg-surface-container-lowest text-on-surface-variant">Python</span>
                                    <span className="font-nerd text-sm px-2.5 py-0.5 rounded bg-surface-container-lowest text-on-surface-variant">OOP</span>
                                    <span className="font-nerd text-sm px-2.5 py-0.5 rounded bg-surface-container-lowest text-on-surface-variant">GUI</span>
                                    <span className="font-nerd text-sm px-2.5 py-0.5 rounded bg-surface-container-lowest text-on-surface-variant">Data Structure & Algorithms</span>
                                    <span className="font-nerd text-sm px-2.5 py-0.5 rounded bg-surface-container-lowest text-on-surface-variant">Problem Solve</span>
                                </div>
                        </div>

                        {/* 2 */}
                        <div className="group relative rounded-xl bg-surface-container p-space-lg border border-outline-variant/30 hover:border-tertiary/50 transition-all duration-300 hover:shadow-[0_8px_32px_-4px_rgba(244,114,182,0.15)]">
                            <div className="flex flex-col md:flex-row md:items-start justify-between gap-space-sm mb-space-sm">
                                <div className="flex items-center gap-space-sm">
                                    <div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-tertiary border border-tertiary/20 group-hover:bg-tertiary-container group-hover:text-on-tertiary-container transition-colors">
                                        <span className="material-symbols-outlined text-[20px]">layers</span>
                                    </div>
                                    <div>
                                        <h3 className="font-nerd text-normal text-on-surface group-hover:text-tertiary transition-colors">Credit Risk Analyst (Data Scientist) - Internship</h3>
                                        <span className="font-nerd text-outline">Islamic bank of thailand</span>
                                    </div>
                                </div>
                                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-highest font-nerd text-[12px] text-tertiary self-start">
                                        <span className="w-1.5 h-1.5 rounded-full bg-tertiary-container"></span>
                                        2024/05 - 2024/10 (6 month)
                                    </div>
                            </div>
                                <p className="font-thai text-body-sm text-on-surface-variant mb-space-md leading-relaxed">
                                    ช่วงเวลาฝึกงานโปรเจคเกี่ยวกับ Data Science กระบวนการทำงานตั้งแต่ Data Preparation / Cleaning / EDA , Data Transformation / Feature Engineering , Modeling และ Evaluation ได้มีโอภาสเป็นส่วนหนึ่งของโปรเจค Forward Looking PD โดยทดลองโมเดล Machine Learning ในการทำนายค่า PD และสหกิจโปรเจคทำนายราคาทองคำในประเทศไทยโดยใช้หลัก Feature Engineer และ Machine Learning มาประยุกต์ใช้
                                </p>
                                <div className="flex flex-wrap items-center gap-2">
                                    <span className="font-nerd text-sm px-2.5 py-0.5 rounded bg-surface-container-lowest text-on-surface-variant">Python (pandas/numpy)</span>
                                    <span className="font-nerd text-sm px-2.5 py-0.5 rounded bg-surface-container-lowest text-on-surface-variant">Machine Learning</span>
                                    <span className="font-nerd text-sm px-2.5 py-0.5 rounded bg-surface-container-lowest text-on-surface-variant">Deep Learning</span>
                                    <span className="font-nerd text-sm px-2.5 py-0.5 rounded bg-surface-container-lowest text-on-surface-variant">Natural Langauge Processing</span>
                                    <span className="font-nerd text-sm px-2.5 py-0.5 rounded bg-surface-container-lowest text-on-surface-variant">Matplotlib / Seaborn</span>
                                    <span className="font-nerd text-sm px-2.5 py-0.5 rounded bg-surface-container-lowest text-on-surface-variant">Oracle</span>
                                </div>
                        </div>
                    </div>
                </section>
                <section className="relative max-w-7xl mx-auto px-margin py-space-xl border-t border-outline-variant/20" id="education">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-lg gap-space-sm">
                        <div>
                            <div className="flex items-center gap-space-xs font-nerd text-normal text-primary tracking-widest uppercase mb-1">
                                <span>02 // Education &amp; Path</span>
                                <span className="w-8 h-px bg-primary/40"></span>
                            </div>
                            <h2 className="font-thai text-xl text-on-surface tracking-tight">การศึกษาของฉัน</h2>
                        </div>
                        <p className="font-thai text-body-sm text-on-surface-variant max-w-md">
                            การศึกษาตั้งแต่ห้องเรียน ทำงาน ฝึกทหารจนทำงาน เป็นนักวิทยากรข้อมูลในปัจจุบัน
                        </p>
                    </div>
                    {/* line 1 */}
                    <div className="relative pl-6 space-y-space-xl before:absolute before:left-2 before:top-2 before:bottom-2 before:w-px before:bg-surface-container-high">
                        <div className="relative group">
                            <span className="absolute -left-[19px] top-1.5 w-2 h-2 rounded-full bg-primary -ring-4 ring-surface"></span>
                            <div className="bg-surface-container-low p-space-lg rounded-lg shadow-sm hover:bg-surface-container transition-colors">
                                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-space-xs mb-space-xs">
                                    <h3 className="font-nerd text-body-md text-on-surface font-medium">Military Services</h3>
                                    <span className="font-nerd text-body-md text-on-surface-variant">2026/04 - 2026/10</span>
                                </div>
                                <div className="flex items-center justify-between gap-space-xs mb-space-xs">
                                    <p className="font-thai text-body-md text-on-surface-variant leading-relaxed mb-space-sm">
                                        เข้าร่วมทหารกองประจำการ กองทัพบกไทย กองพันทหารสื่อสารที่ 102 กรมทหารสื่อสารที่ 1 (ส.1 พัน 102) ค่ายกำแพงเพชรอัครโยธิน ตำบล สวนหลวง อำเภอ กระทุ่มแบน จังหวัด สมุทรสาคร ระยะเวลา 6 เดือน
                                    </p>
                                        <Image src={dummyicon} width={150} height={150} alt="photo military traning"
                                                className="right-0 top-3 object-cover"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* line 2 */}
                    <div className="relative pl-6 space-y-space-xl before:absolute before:left-2 before:top-2 before:bottom-2 before:w-px before:bg-surface-container-high">
                        <div className="relative group">
                            <span className="absolute -left-[19px] top-1.5 w-2 h-2 rounded-full bg-primary -ring-4 ring-surface"></span>
                            <div className="bg-surface-container-low p-space-lg rounded-lg shadow-sm hover:bg-surface-container transition-colors">
                                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-space-xs mb-space-xs">
                                    <h3 className="font-nerd text-body-md text-on-surface font-medium">Data Scientist - Outsource</h3>
                                    <span className="font-nerd text-body-md text-on-surface-variant">2025/06 - 2026/04</span>
                                </div>
                                <div className="flex items-center justify-between gap-space-xs mb-space-xs">
                                    <p className="font-thai text-body-md text-on-surface-variant leading-relaxed mb-space-sm">
                                        สมัครเป็นพนักงาน outsource บริษัท I-SUPPORT Co.Ltd ระหว่างรอรับราชการทหาร และได้ร่วมงานกับทาง ธนาคารอิสลามแห่งประเทศไทยในการทำโมเดล
                                    </p>
                                        <Image src={dummyicon} width={150} height={150} alt="photo military traning"
                                                className="right-0 top-3 object-cover"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* line 3 */}
                    <div className="relative pl-6 space-y-space-xl before:absolute before:left-2 before:top-2 before:bottom-2 before:w-px before:bg-surface-container-high">
                        <div className="relative group">
                            <span className="absolute -left-[19px] top-1.5 w-2 h-2 rounded-full bg-primary -ring-4 ring-surface"></span>
                            <div className="bg-surface-container-low p-space-lg rounded-lg shadow-sm hover:bg-surface-container transition-colors">
                                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-space-xs mb-space-xs">
                                    <h3 className="font-nerd text-body-md text-on-surface font-medium">Collage Student / Computer Science</h3>
                                    <span className="font-nerd text-body-md text-on-surface-variant">2021/06 - 2025/04</span>
                                </div>
                                <div className="flex items-center justify-between gap-space-xs mb-space-xs">
                                    <p className="font-thai text-body-md text-on-surface-variant leading-relaxed mb-space-sm">
                                        ได้ศึกษาที่ มหาวิทยาลัยเกษตรศาสตร์ คณะวิทยาศาสตร์ ศรีราชา สาขา วิทยาการคอมพิวเตอร์ ภาคพิเศษ S06 เกรด : 3.75 เกียรตินิยมอันดับ 1
                                        เนื่องจากมีความแรงจูงใจและสนใจเกี่ยวกับคอมพิวเตอร์ เขียนโปรแกรม การคิด และแก้ปัญหา เทคโนโลยีใหม่ๆรวมถึง AI
                                    </p>
                                        <Image src={dummyicon} width={150} height={150} alt="photo military traning"
                                                className="right-0 top-3 object-cover"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* line 4 */}
                    <div className="relative pl-6 space-y-space-xl before:absolute before:left-2 before:top-2 before:bottom-2 before:w-px before:bg-surface-container-high">
                        <div className="relative group">
                            <span className="absolute -left-[19px] top-1.5 w-2 h-2 rounded-full bg-primary -ring-4 ring-surface"></span>
                            <div className="bg-surface-container-low p-space-lg rounded-lg shadow-sm hover:bg-surface-container transition-colors">
                                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-space-xs mb-space-xs">
                                    <h3 className="font-nerd text-body-md text-on-surface font-medium">Student in High School / English & Computer Program</h3>
                                    <span className="font-nerd text-body-md text-on-surface-variant">2018/05 - 2021/04</span>
                                </div>
                                <div className="flex items-center justify-between gap-space-xs mb-space-xs">
                                    <p className="font-thai text-body-md text-on-surface-variant leading-relaxed mb-space-sm">
                                        ได้ศึกษาที่ โรงเรียนสมุทรสาครบูรณะ ห้อง อังกฤษ-คอมพิวเตอร์ เกรด : 3.14 ได้ทักษะการจับกล้องถ่ายรูป/วีดีโอ ปั้น 3d ตัดต่อ และออกแบบต่างๆ และมีประสบการณ์ทำหนังสั้น ในระดับมัธยมปลาย
                                    </p>
                                        <Image src={dummyicon} width={150} height={150} alt="photo military traning"
                                                className="right-0 top-3 object-cover"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
                <section className="relative max-w-7xl mx-auto px-margin py-space-xl border-t border-outline-variant/20" id="projects">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-lg gap-space-sm">
                        <div>
                            <div className="flex items-center gap-space-xs font-nerd text-normal text-primary tracking-widest uppercase mb-1">
                                <span>03 // PROJECT &amp; SOFTWARE CRAFT</span>
                                <span className="w-8 h-px bg-primary/40"></span>
                            </div>
                            <h2 className="font-thai text-lg text-on-surface tracking-tight">ผลงานของฉัน</h2>
                        </div>
                        <p className="font-thai text-body-sm text-on-surface-variant max-w-md">
                            โปรเจคทำเล่นๆเวลาว่าง
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
                        Comming Soon....
                    </div>
                </section>
            </div>

        </div>
    );
}