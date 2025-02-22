import Background from "../background/background";
import HoverEffect from "../ui/card-hover-effect";



export function CardHoverEffectDemo() {
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
export const projects = [
    {
        title: "Valós Idejű Adatfeldolgozás",
        description:
            "Az algoritmusunk folyamatosan figyeli és elemzi a globális pénzpiacokat, feldolgozva a tőzsdei árfolyamokat, híreket és alternatív adatforrásokat másodpercenkénti pontossággal.",
        link: "https://stripe.com",
    },
    {
        title: "Gépi Tanulás és Mesterséges Intelligencia",
        description:
            "Önfejlesztő AI-modellek segítségével az algoritmus alkalmazkodik a piaci változásokhoz, felismeri a mintázatokat és egyre pontosabb kereskedési döntéseket hoz.",
        link: "https://netflix.com",
    },
    {
        title: "Piaci Hangulatelemzés",
        description:
            "A hírek, közösségi média és gazdasági jelentések automatikus feldolgozása segít az algoritmusnak előre jelezni a befektetők reakcióit és a piaci mozgásokat.",
        link: "https://google.com",
    },
    {
        title: "Fejlett Kockázatkezelés",
        description:
            "Az AI automatikusan beállítja a stop-loss és take-profit szinteket, figyelembe véve a volatilitást és a kockázati szinteket, így minimalizálva a veszteségeket.",
        link: "https://meta.com",
    },
    {
        title: "Automatizált és Gyors Kereskedés",
        description:
            "Az algoritmus villámgyors végrehajtást biztosít a legjobb árfolyamokon, minimális csúszással, az integráció pedig a vezető tőzsdékkel és likviditásszolgáltatókkal történik.",
        link: "https://amazon.com",
    },
    {
        title: "Stratégia Optimalizálás és Backtesting",
        description:
            "A rendszer folyamatosan elemzi a múltbeli adatokat, teszteli és finomhangolja a kereskedési stratégiákat, hogy mindig a lehető legjobb eredményeket érje el.",
        link: "https://microsoft.com",
    },
];
