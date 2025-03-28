
import { auth } from '@/auth';
import { getUserEmail } from '@/lib/users';
import { getUserBalance } from '../prisma/addUser';
import { Separator } from '../ui/separator';
import AiBotTypeCard from '../card/AiBotTypeCard';
import { PiHandDeposit } from "react-icons/pi";

const Penzes = async () => {
  const session = await auth();

  if (!session?.user?.email) {
    throw new Error('User email is missing in the session.');
  }

  const user = await getUserEmail(session.user.email);

  if (!user?.id) {
    throw new Error('User ID is missing.');
  }

  const balance = await getUserBalance(user.id);

  return (
    <div className='w-full h-full  rounded-[30px] '>
      <div className='flex flex-row justify-between pt-[3vh] items-center'>
        <div>
          <p className='text-xl '>Jelenlegi egyenleg:</p>
          <div className='flex flex-row pt-[2.5vh] pl-[2vw]'>
            <p className="text-6xl lg:text-7xl font-semibold">{balance.toFixed(1) || "0"}</p>
            <p className="text-sm lg:text-md pl-2 font-semibold">USD</p>
          </div>
        </div>
        <div>
          <button className='p-6 bg-purple rounded-3xl text-black font-bold flex flex-row items-center gap-2'>Befizetés<PiHandDeposit className='text-2xl font-semibold' /></button>
        </div>
      </div>
      <Separator className='my-[2.5vh] h-[2px]'/>
      <div className='space-y-[2.5vh] '>
        <AiBotTypeCard title='Biztonságos' description='Alacsony kockázat, stabil hozam' color={1}  percentage={0} />
        <AiBotTypeCard title='Normál' description='Stabil hozam' color={2} percentage={100}/>
        <AiBotTypeCard title='Agresszív' description='Magas kockázat' color={3}  percentage={0}/>
      </div>
    </div>
  )
}

export default Penzes

{/*  */ }