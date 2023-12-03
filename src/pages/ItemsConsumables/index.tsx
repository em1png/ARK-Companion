import Title from "@/components/shared/Title"
import { items } from "@/constants/items"

const ItemsConsumables = () => {
    return (
        <section className='container'>
            <Title title='Consumable List'> Consumable List </Title>

            <div className='frame-rounded'>
                <ul className="grid grid-cols-[1fr_2fr_1fr_4fr] text-center mb-5">
                    <li className="body-bold"> Consumable </li>
                    <li className="body-bold"> Description </li>
                    <li className="body-bold"> Effects </li>
                    <li className="body-bold"> Resources </li>
                </ul>
                {Object.keys(items.consumables).map(consumableName => (
                    <ul className="grid grid-cols-[1fr_2fr_1fr_4fr] border border-neutral-800 rounded-xl p-2 mb-3">
                        <li className="flex-center border-r border-neutral-800">
                            <img src={items.consumables[consumableName].image} alt="" width={65} height={65} className="w-[65px] h-[65px] object-contain" />
                        </li>
                        <li className="w-full flex justify-center items-start p-3 flex-col border-r border-neutral-800">
                            <p className="small-semibold">{items.consumables[consumableName].name}</p>
                            {items.consumables[consumableName].desc.map((effect) => (
                                <p className="small-medium text-neutral-400">{effect}</p>
                            ))}

                        </li>

                        <li className="flex justify-center items-start p-3 border-r border-neutral-800 flex-col small-medium">
                            <p>
                                <span className="text-neutral-400 small-semibold">
                                    Duration: 
                                </span>
                                {items.consumables[consumableName].effectDuration < 60
                                    ? ` ${items.consumables[consumableName].effectDuration}s`
                                    : ` ${items.consumables[consumableName].effectDuration / 60}m`}
                            </p>
                            <p><span className="text-neutral-400 small-semibold">Spoils in:</span> {items.consumables[consumableName].spoilsIn}h</p>
                        </li>

                        <li className="h-full w-full grid grid-cols-5 items-center gap-3 pl-3 pr-1">
                            {Object.keys(items.consumables[consumableName].cost).map(resourceItem => (
                                <div className="flex-center flex-col p-2 border border-neutral-600 rounded-md">
                                    <div className="flex-center">
                                        <img src={items.resources[resourceItem] ? items.resources[resourceItem].image : './'} alt="" height={20} width={20} className="h-[20px] w-[20px] mr-1" />
                                        <p className="body-semibold">x{items.consumables[consumableName].cost[resourceItem]}</p>
                                    </div>
                                    <p className="subtle-semibold text-neutral-400">{items.resources[resourceItem].name}</p>
                                </div>
                            ))}

                        </li>
                    </ul>
                ))}

            </div>
        </section >
    )
}

export default ItemsConsumables