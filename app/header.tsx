
export default function Header(){

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-surface/80 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
            <div className="h-16 max-w-7xl mx-auto px-margin flex items-center justify-between gap-space-md">
                <div className="flex items-center gap-space-md">
                    <a href="#"
                    className="flex items-center gap-space-sm text-label-code font-nerd text-on-surface hover:text-primary transition-colors"
                    data-path="overview">
                        <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_#f472b6]"></span>
                        <span>teetyk.dev</span>
                        <span className="text-primary text-body-sm">🌸</span>
                    </a>
                    <div className="hidden xl:flex items-center gap-space-sm px-space-sm py-space-xs rounded-full bg-surface-container-low">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary shadow-[0_0_8px_#f472b6]"></span>
                        </span>
                        <span className="font-nerd text-on-surface">Not available for hire / <span className="font-thai font-normal"> ไม่รับงาน </span></span> 
                    </div>
                </div>
                <nav className="hidden md:flex items-center gap-space-lg" data-active-classes="text-primary font-bold">
                <a href="#about" className="text-on-surface-variant hover:text-on-surface text-body-sm font-thai font-semibold transition-colors" data-path="about">เกี่ยวกับฉัน</a>
                <a href="#education" className="text-on-surface-variant hover:text-on-surface text-body-sm font-thai font-semibold transition-colors" data-path="education">การศึกษา</a>
                <a href="#experience" className="text-on-surface-variant hover:text-on-surface text-body-sm font-thai font-semibold transition-colors" data-path="experience">ประสบการณ์</a>
                <a href="#projects" className="text-on-surface-variant hover:text-on-surface text-body-sm font-thai font-semibold transition-colors" data-path="projects">ผลงาน</a>
                <a href="#contact" className="text-on-surface-variant hover:text-on-surface text-body-sm font-thai font-semibold transition-colors" data-path="contact">ติดต่อ</a>
            </nav>
            </div>
            
        </header>
    );
}