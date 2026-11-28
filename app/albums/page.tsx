import Image from 'next/image'
export const metadata = {
    title: "Albums",
};
export default function AlbumsPage(){
    return (
         <div className="flex flex-col w-full">
            <div className="relative w-full overflow-hidden">
                <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-primary/10 rounded-full blur-[140px] pointer-events-none"></div>
                <div className="absolute top-96 -right-48 w-96 h-96 bg-primary-container/10 rounded-full blur-[120px] pointer-events-none"></div>
                <div className="absolute top-[1400px] -left-48 w-96 h-96 bg-tertiary/10 rounded-full blur-[130px] pointer-events-none"></div>
                <section className="relative max-w-7xl mx-auto px-margin pt-12 pb-space-xl min-h-dvh" id="about">
                    {/* right here */}
                    <div className="border border-primary bg-surface-container rounded-full flex flex-col items-center justify-center font-nerd text-2xl max-h blur-[1px]">
                        <span>
                        Test Website subpath For albums
                        </span>
                        <br/>
                        It's nothing as me before.
                    </div>
                </section>

            </div>

        </div>
    );
}