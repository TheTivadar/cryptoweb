
import { auth } from '@/auth';
import { getUserByEmail } from '@/lib/users';
import { PiHandDeposit } from "react-icons/pi";
import AiBotTypeCard from '../card/AiBotTypeCard';
import { Separator } from '../ui/separator';
import { DepositButton } from '../buttons/DepositButton';
import CopyButton from '../buttons/CopyButton';

const Penzes = async () => {
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
    <div className='w-full h-full  rounded-[30px] '>
      <div className='flex flex-row justify-between pt-[3vh] items-start sm:items-center'>
        <div>
          <p className='text-xl '>Jelenlegi egyenleg:</p>
          <div className='flex flex-row pt-[2.5vh] pl-[2vw]'>
            <p className="text-4xl sm:text-6xl lg:text-7xl font-semibold">{user.balance.toFixed(1) || "0"}</p>
            <p className="text-sm lg:text-md pl-2 font-semibold">USD</p>
          </div>
        </div>
        <div>
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
        </div>
      </div>
      <Separator className='my-[2.5vh] h-[2px]' />
      <div className='space-y-[2.5vh] '>
        <AiBotTypeCard title='Biztonságos' description='Alacsony kockázat, stabil hozam' color={1} percentage={Math.round(((user.userBalances?.find(b => b.type === 'SAFE')?.amount || 0) / (user.balance || 1)) * 100)} />
        <AiBotTypeCard title='Normál' description='Stabil hozam' color={2} percentage={Math.round(((user.userBalances?.find(b => b.type === 'NORMAL')?.amount || 0) / (user.balance || 1)) * 100)} />
        <AiBotTypeCard title='Agresszív' description='Magas kockázat' color={3} percentage={Math.round(((user.userBalances?.find(b => b.type === 'RISKY')?.amount || 0) / (user.balance || 1)) * 100)} />
      </div>
    </div>
  )
}

export default Penzes

{/*  */ }