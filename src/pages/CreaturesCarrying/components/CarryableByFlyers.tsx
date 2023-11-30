import { carryableBy, carryingFlyersList, creatures } from '@/constants/cratures'

const CarryableByFlyers = () => {
    return (
        <div className='frame-rounded'>
            <ul className="grid grid-cols-11 gap-2 border-b border-neutral-800">
                <li />
                {Object.entries(carryableBy.Flyers).map(item =>
                    <li className="flex-start flex-col rounded-md pb-3">
                        <div className="h-[100px] w-full flex-center">
                            <img src={`/creatures/${item[0]}.webp`} width={130} height={80} className="max-h-[80px] max-w-[80px] object-contain overflow-hidden flex-center" />
                        </div>
                        <p className="small-semibold text-center">{item[1]}</p>
                    </li>
                )}
            </ul>

            {Object.values(creatures).map((itemCreature) => (
                <ul className="grid grid-cols-11 border-b border-neutral-800 p-1">
                    <li className="w-full flex justify-start items-center border-r border-neutral-800">
                        <p className="small-semibold text-start">{itemCreature.name}</p>
                    </li>
                    {carryingFlyersList.map((flyerCreature) => (
                        <li className='w-full h-full flex-center border-r border-neutral-800 last:border-none'>
                            {itemCreature.CarryableByFlyers.includes(flyerCreature)
                                ? <p className='body-medium text-emerald-500'>+</p>
                                : <p className='body-medium text-neutral-600'>-</p>}
                        </li>
                    ))}
                </ul>
            )
            )}
        </div>
    )
}

export default CarryableByFlyers