
import { auth } from '@/auth';
import { getUserEmail } from '@/lib/users';
import { getUserBalance } from '../prisma/addUser';

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
    <div className='w-full'>
      <div className="flex flex-row justify-between 2xl:w-[80%] w-full pt-20 gap-4 lg:gap-10  2xl:gap-32">
        <div className="flex flex-col w-full">
          <div className="flex lg:flex-row w-full justify-between">
            <div className="flex flex-row">
              <p className="text-2xl lg:text-5xl font-semibold">{balance}</p>
              <p className="text-sm lg:text-md pl-2 font-semibold">USD</p>
            </div>
            <button className="hidden lg:block lg:px-6 lg:py-2  bg-blue-500 dark:bg-blue-600 rounded-lg mb-4 text-white">Pénzfeltöltés</button>
          </div>
          <p className="text-xs lg:text-md text-gray-800 dark:text-gray-300">Egyenleg</p>
        </div>
        {/*     <div className="flex flex-col w-full">
            <div className="flex lg:flex-row w-full justify-between">
              <div className="flex flex-row">
                <p className="text-2xl lg:text-5xl font-semibold">0</p>
                <p className="text-sm lg:text-md pl-2 font-semibold">USD</p>
              </div>
              <button className="hidden lg:block lg:px-6 lg:py-2 bg-blue-500 dark:bg-blue-600 rounded-lg mb-4 text-white">Pénzfeltöltés</button>
            </div>
            <p className="text-xs lg:text-md text-gray-800 dark:text-gray-300">Egyenleg</p>
          </div>
          <div className="flex flex-col w-full">
            <div className="flex lg:flex-row ">
                <p className="text-2xl lg:text-5xl font-semibold">~{normalUser?.balance}</p>
                <p className="text-sm lg:text-md pl-2 font-semibold">USD</p>
            </div>
            <p className="text-xs pt-2 lg:text-md text-gray-800 dark:text-gray-300">Egyenleg</p>
          </div> */}
      </div>
    </div>
  )
}

export default Penzes