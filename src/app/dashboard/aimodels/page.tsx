import { auth } from '@/auth';
import CopyButton from '@/components/buttons/CopyButton';
import { DepositButton } from '@/components/buttons/DepositButton';
import { HoverCardDemo } from '@/components/card/InformationHover';
import BalanceTransfer from '@/components/modals/BalanceTransfer';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { getUserByEmail } from '@/lib/users';
import Image from 'next/image';

const Aimodels = async () => {
    const session = await auth();

    if (!session?.user?.email) {
        throw new Error('User email is missing in the session.');
    }

    const user = await getUserByEmail(session.user.email);



    if (!user?.id) {
        throw new Error('User ID is missing.');
    }
    const paymentAuth = user?.id.slice(-4);
    return (
        <div className='mx-[1vw] pt-[2vh]'>
            <div className='flex flex-row justify-between pt-[3vh] items-center'>
                <div>
                    <p className='text-xl '>Jelenlegi egyenleg:</p>
                    <div className='flex flex-row pt-[2.5vh] pl-[2vw]'>
                        <p className="text-6xl lg:text-7xl font-semibold">{user.balance.toFixed(1) || "0"}</p>
                        <p className="text-sm lg:text-md pl-2 font-semibold">USD</p>
                    </div>
                </div>
                <div className='flex flex-row gap-4'>
                    <DepositButton buttonText={"Befizetés"} content={
                        <>
                            <div className="space-y-2">
                                <h4 className="font-medium leading-none">Banki átutalás</h4>
                                <p className="text-sm text-muted-foreground pt-3" >
                                    IBAN Számlaszám:<br />
                                    <CopyButton text={"LT64 3250 0937 8079 9583"} />
                                </p>
                                <p className="text-sm text-muted-foreground pt-3" >
                                    Közlemény:<br />
                                    <CopyButton text={paymentAuth} />
                                </p>
                                <Separator className='h-[2px]' />
                                <p className='text-white/60'>
                                    Phantom wallet utalás
                                </p>
                                <p className='text-white/60'>Fejlesztés alatt</p>
                            </div>
                        </>
                    } />
                    <DepositButton buttonText={"Kiutalás"} content={
                        <>
                            <div className="space-y-2">
                                <h4 className="font-medium leading-none">Kiutaláshoz jelenleg vedd fel a kapcsolatot!</h4>
                            </div>
                        </>
                    } />
                </div>
            </div>
            <Separator className='my-10 h-[2px]' />
            <HoverCardDemo title='Hasznos információ' description='Ameddig egy kereskedés nem zárul le, addig attól függetlenül, hogy az oldalon már átkerült a pénz az egyik számláról a másikra, a régi kereskedési mód lesz érvényben' />
            <div className='flex flex-row items-center gap-6'>
                <ModelCards userBalances={user.userBalances} userId={user.id} title={"Biztonságos"} currentBalance={(user.userBalances?.find(b => b.type === 'SAFE')?.amount || 0)} percentage={Math.round(((user.userBalances?.find(b => b.type === 'SAFE')?.amount || 0) / (user.balance || 1)) * 100)} description={"Kapcsold hozzá Phantom vagy Metamask fiókodat az oldalhoz, hogy amikor forgalomba kerül a saját tokenünk ingyenes részesülj belőle."} color={1} className={"bg-yellow-300/80"} />
                <ModelCards userBalances={user.userBalances} userId={user.id} title={"Normál"} currentBalance={(user.userBalances?.find(b => b.type === 'NORMAL')?.amount || 0)} percentage={Math.round(((user.userBalances?.find(b => b.type === 'NORMAL')?.amount || 0) / (user.balance || 1)) * 100)} description={"Kapcsold hozzá Phantom vagy Metamask fiókodat az oldalhoz, hogy amikor forgalomba kerül a saját tokenünk ingyenes részesülj belőle."} color={2} className={"bg-blue-300"} />
                <ModelCards userBalances={user.userBalances} userId={user.id} title={"Agresszív"} currentBalance={(user.userBalances?.find(b => b.type === 'RISKY')?.amount || 0)} percentage={Math.round(((user.userBalances?.find(b => b.type === 'RISKY')?.amount || 0) / (user.balance || 1)) * 100)} description={"Kapcsold hozzá Phantom vagy Metamask fiókodat az oldalhoz, hogy amikor forgalomba kerül a saját tokenünk ingyenes részesülj belőle."} color={3} className={"bg-purple"} />
            </div>
        </div>
    )
}

export default Aimodels

export interface UserBalances {
        id: string;
        type: string;
        amount: number;
        share: number;
}

const ModelCards = ({ title, currentBalance, percentage, description, color, userId, className, userBalances }: {userBalances:UserBalances[], title: string, currentBalance: number, percentage: number, description: string, color: number, userId: string, className: string }) => {
    return (
        <Card className=' w-full rounded-[30px]  border-purple/50 relative overflow-hidden h-auto '>
            {
                color === 1 ?
                    <div className={`absolute inset-0 bg-gradient-to-b from-background to-yellow-900`} />
                    : color === 2 ?
                        <div className={`absolute inset-0 bg-gradient-to-b from-background to-blue-900`} />
                        :
                        <div className={`absolute inset-0 bg-gradient-to-b from-background to-violet-950`} />
            }
            <div className='z-20 relative flex flex-col p-4'>
                <div className='flex flex-row items-center justify-between w-full '>
                    <h1 className='text-3xl font-semibold '>{title}</h1>
                    <Image
                        src={"/Alogo.png"}
                        alt='logo'
                        width={50}
                        height={50}
                    />
                </div>
                <div className='flex flex-row items-center justify-between w-full pt-10'>
                    <div className='flex flex-row '>
                        <p className="text-4xl lg:text-5xl font-semibold">{currentBalance.toFixed(1)}</p>
                        <p className="text-sm lg:text-md pl-2 font-semibold">USD</p>
                    </div>
                    <p className="text-6xl lg:text-5xl font-semibold">{percentage}%</p>
                </div>
                <p className=' pt-10 font-[300] text-white/80' >{description}</p>
                <BalanceTransfer userId={userId} className={className} userBalances={userBalances}/>
            </div>
        </Card>
    )
}

