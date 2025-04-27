import Footer from '@/components/Footer';
import MobileNavbar from '@/components/mobile/mobile';
import Navbar from '@/components/ui/Navbar';

export default async function WebsiteLayout({
    children,
}: {
    children: React.ReactNode;

}) {


    return (
        <div className="max-w-screen overflow-hidden">
            <div className="overflow-hidden">
                <div className="hidden md:block bg-black-100">
                    <Navbar />
                </div>
                <div className="md:hidden">
                    <MobileNavbar />
                </div>
            </div>
            {children}
            <Footer />
        </div>
    );
}