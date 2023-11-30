import { FitsThrough as FitsThroughAll, creatures, fitsThroughList } from '@/constants/cratures'

const FitsThrough = () => {
    return (
        <div className='frame-rounded'>
            <ul className="grid grid-cols-7 gap-3 border-b border-neutral-800">
                <li />
                {Object.entries(FitsThroughAll).map(item =>
                    <li className="rounded-md border-neutral-800 pb-3 flex-start flex-col">
                        <div className="h-[100px] w-full flex-center">
                            <img src={`/items/${item[0]}.webp`} width={130} height={80} className="max-h-[80px] max-w-[130px] object-contain overflow-hidden flex-center" />
                        </div>
                        <p className="small-semibold text-center">{item[1]}</p>
                    </li>
                )}
            </ul>

            {Object.values(creatures).map((itemCreature) => {
                return (
                    <ul className="grid grid-cols-7 gap-3 border-b border-neutral-800 rounded-md p-1">
                        <li className="w-full flex justify-start items-center border-r border-neutral-800">
                            <p className="small-semibold text-start">{itemCreature.name}</p>
                        </li>

                        {fitsThroughList.map((item) => (
                            <li className='w-full h-full flex-center border-r border-neutral-800 last:border-none'>
                                {itemCreature.FitsThrough.includes(item)
                                    ? <p className='body-medium text-emerald-500'>+</p>
                                    : <p className='body-medium text-neutral-600'>-</p>}
                            </li>
                        ))}
                    </ul>
                )
            })}
        </div>
    )
}

export default FitsThrough