
const AiBotTypeCard = ({ title, description, color, percentage }: { title: string, description: string, color: number, percentage:number }) => {
    return (
        <div className='rounded-[20px] w-full h-24 border border-purple/40 bg-stone-950 relative overflow-hidden '>
            {
                color === 1 ?
                    <div className={`absolute inset-0 w-full h-full bg-gradient-to-b from-stone-950  to-yellow-800/50`} />
                    : color === 2 ?
                        <div className={`absolute inset-0 w-full h-full bg-gradient-to-b from-stone-950  to-blue-800/50`} />
                        :
                        <div className={`absolute inset-0 w-full h-full bg-gradient-to-b from-stone-950  to-violet-800/50`} />
            }
            <div className="relative z-10 h-full p-4 flex flex-row justify-between w-full items-center">

                <h1 className='text-5xl font-semibold'>{percentage}<span className='font-normal'>%</span></h1>
                <div className=" h-full flex flex-col ">
                    <h1 className="text-white font-semibold text-xl text-end">{title}</h1>
                    <p className="text-gray-300 text-sm">{description}</p>
                </div>
            </div>
        </div>
    )
}

export default AiBotTypeCard