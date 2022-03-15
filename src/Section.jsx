import { Element, Link } from 'react-scroll';

const Gradient = ({ className }) => (
    <div className={`absolute h-full w-full z-20 bg-[length:400%_400%] animate-gradient ${className || ''}`} />
);

export default function Section({
    name, Component, background, arrowTo, arrowToWhite, borderB, notFullscreen
}) {
    function createVideoHTML() {
        const img = new URL(`/src/assets/images/${background}.jpg`, import.meta.url).href;
        const webm = new URL(`/src/assets/videos/${background}.webm`, import.meta.url).href;
        const mp4 = new URL(`/src/assets/videos/${background}.mp4`, import.meta.url).href;

        return {__html: `<video
            autoplay
            playsinline
            loop
            muted
            class="absolute z-10 min-w-full w-auto min-h-full object-cover"
            poster="${img}"
        >
            <source src="${webm}" type="video/webm" />
            <source src="${mp4}" type="video/mp4" />
            <img
                src="${img}"
                title="Your browser does not support the <video> tag"
            />
        </video>`};
    }

    console.log(createVideoHTML())

    return (
        <Element name={name} className={`w-full relative ${borderB ? 'border-b-2' : ''}`}>
            {background && (
                <div className="absolute top-0 right-0 bottom-0 left-0 overflow-hidden">
                    <div dangerouslySetInnerHTML={createVideoHTML()} />
                    <Gradient className="bg-gradient-to-bl from-flag-top to-flag-bottom opacity-30" />
                    <Gradient className="bg-gradient-to-br from-slate-700 to-gray-700 opacity-60" />
                </div>
            )}
            <main className={`relative max-w-4xl ${notFullscreen ? '' : 'min-h-screen md:min-h-[calc(100vh-4rem-4px)]'} mx-auto z-40 p-4 ${background ? 'text-white': ''}`}>
                <Component />
            </main>
            {arrowTo && (
                <div className="absolute bottom-0 w-full flex justify-center z-40">
                    <div className="rotate-90 scale-y-[2]">
                        <Link
                            to={arrowTo}
                            className={`block p-2 cursor-pointer animate-pulse ${arrowToWhite ? 'text-white' : ''}`}
                            smooth
                            offset={-68}
                            duration={500}
                        >
                            &gt;
                        </Link>
                    </div>
                </div>
            )}
        </Element>
    )
}