import { useTranslations } from "next-intl";
import Background from "../background/background";
import HoverEffect from "../ui/card-hover-effect";



export function CardHoverEffectDemo() {
    const t = useTranslations("technologyInfoCards");
    const projects = [
        {
            title: t('0.title'),
            description: t('0.description'),
            link: "https://stripe.com",
        },
        {
            title: t('1.title'),
            description: t('1.description'),
            link: "https://netflix.com",
        },
        {
            title: t('2.title'),
            description: t('2.description'),
            link: "https://google.com",
        },
        {
            title: t('3.title'),
            description: t('3.description'),
            link: "https://meta.com",
        },
        {
            title: t('4.title'),
            description: t('4.description'),
            link: "https://amazon.com",
        },
        {
            title: t('5.title'),
            description: t('5.description'),
            link: "https://microsoft.com",
        },
    ];
    return (
        <div className="bg-black-100 relative">
            <Background />
            <div className="relative z-10">
                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                    <HoverEffect items={projects} />
                </div>
                <div className="absolute inset-0 -left-[50vh] -translate-y-0 h-[600px] w-[1000px] bg-blue-950 blur-3xl opacity-40 rounded-full z-0"></div>
            </div>
        </div>
    );
}

