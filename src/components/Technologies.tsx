import Image from 'next/image'
import Background from './background/background';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

const Technologies = () => {
    const getStarted = useTranslations('getStarted')
    const t = useTranslations('collab')
    const collabText = t('text');

    const collabContent = t.raw('content') as {
        id: string;
        title: string;
        text?: string;
    }[];


    return (
        <div className='pt-20 pb-20 bg-black-100 '>
            <Background />
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row relative z-10">
                <div className="max-w-[35rem] pl-4 2xl:pl-0">
                    <h2 className="h2 mb-4 md:mb-8 text-white text-5xl font-semibold">
                        <span className='font-thin'>Alegex AI</span> <br /> {t('title')}
                    </h2>
                    <ul className="max-w-[22rem] mb-10 md:mb-14 pl-4">
                        {collabContent.map((item) => (
                            <li className="mb-3 py-3" key={item.id}>
                                <div className="flex items-center">
                                    <Image src={"/technologies/check.svg"} width={24} height={24} alt="check" />
                                    <h6 className="body-2 ml-5 text-white">{item.title}</h6>
                                </div>
                                {item.text && (
                                    <p className="body-2 mt-3 text-n-4 text-white/80">{item.text}</p>
                                )}
                            </li>
                        ))}
                    </ul>
                    <Link href={"/login"} className="inline-flex h-12 animate-shimmer items-center justify-center rounded-[10px] border border-slate-600 bg-[linear-gradient(110deg,#172554,45%,#3b82f6,55%,#172554)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                        {getStarted('text')}
                    </Link>
                </div>
                <div className="lg:ml-auto xl:w-[38rem] mt-4 px-4 lg:px-0">
                    <p className="body-2 mb-8 text-xl md:mb-16 lg:mb-32 lg:w-[30rem] lg:mx-auto text-white">
                        {collabText}
                    </p>
                    <div className="relative left-1/2 flex w-[22rem] aspect-square border border-n-6 rounded-full -translate-x-1/2 scale:75 md:scale-100">
                        <div className="flex w-52 aspect-square m-auto border border-n-6 rounded-full">
                            <div className="w-[6rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full">
                                <div className="flex items-center justify-center w-full h-full bg-n-8 rounded-full">
                                    <Image
                                        src={"/Alogo.png"}
                                        width={48}
                                        height={48}
                                        alt="brainwave"
                                    />
                                </div>
                            </div>
                        </div>
                        <ul>
                            {collabApps.map((app, index) => (
                                <li
                                    key={app.id}
                                    className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-${index * 45}`}
                                    style={{
                                        transform: `rotate(${index * 45}deg)`,
                                    }}
                                >
                                    <div
                                        className={`relative -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] bg-n-7 border border-n-1/15 rounded-xl`}
                                        style={{
                                            transform: `rotate(-${index * 45}deg)`,
                                        }}
                                    >
                                        <Image
                                            className="m-auto"
                                            width={app.width}
                                            height={app.height}
                                            alt={app.title}
                                            src={app.icon}
                                        />
                                    </div>
                                </li>
                            ))}
                        </ul>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Technologies



const collabText =
    "A rendszer önállóan tanul és frissíti stratégiáit az új piaci környezethez igazodva.";

const collabContent = [
    {
        id: "0",
        title: "Önfejlesztő modellek",
        text: "A rendszer önállóan tanul és frissíti stratégiáit az új piaci környezethez igazodva.",
    },
    {
        id: "1",
        title: "Testreszabhatóság",
    },
    {
        id: "2",
        title: "Portfólió diverzifikáció",
    },
];

const collabApps = [
    {
        id: "0",
        title: "BNB",
        icon: "/bnb.png",
        width: 26,
        height: 36,
    },
    {
        id: "1",
        title: "ETH",
        icon: "/eth.webp",
        width: 34,
        height: 36,
    },
    {
        id: "2",
        title: "SOL",
        icon: "/solana.png",
        width: 36,
        height: 28,
    },
    {
        id: "3",
        title: "RAY",
        icon: "/raydium.png",
        width: 50,
        height: 40,
    },
    {
        id: "4",
        title: "BTC",
        icon: "/btc.png",
        width: 50,
        height: 50,
    },
    {
        id: "5",
        title: "XRP",
        icon: "/xrp.png",
        width: 34,
        height: 34,
    },
    {
        id: "6",
        title: "Link",
        icon: "/link.png",
        width: 26,
        height: 34,
    },
    {
        id: "7",
        title: "ADA",
        icon: "/ada.webp",
        width: 38,
        height: 32,
    },
];