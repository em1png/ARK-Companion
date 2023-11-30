import { items } from "@/constants/items"
import { IItemKibbles } from "@/types"

const BasicKibble = ({ kibble }: { kibble: IItemKibbles }) => {
    return (
        <div className="w-full h-full flex flex-col">

            <div className="flex-between border border-neutral-900 rounded-2xl py-3 px-5 mb-5">
                <div className="flex-center">
                    <div className="mr-2 flex-center">
                        <img src={kibble.image} height={40} width={40} alt="" className="w-10 h-10" />
                    </div>
                    <p className="h2-bold">{kibble.name}</p>
                </div>
                <div className="flex gap-3">
                    <p className="bg-white text-black text-[14px] font-medium border border-neutral-400 px-3 py-[2px] rounded-md text-start">Cooking time: <span className="font-bold">{kibble.cookTime} sec</span> </p>
                    <p className="bg-white text-black text-[14px] font-medium border border-neutral-400 px-3 py-[2px] rounded-md text-start">Spoil time: <span className="font-bold">{kibble.spoilsIn} hours</span> </p>
                </div>

            </div>

            <p className="h3-bold mb-2">Preferred by</p>
            <div className="frame-rounded">
                <ul className="grid grid-cols-6 gap-5">
                    {kibble.preferredBy.map(creature => (
                        <li className='small-semibold text-center border border-neutral-700 rounded-md p-2'>
                            <div className='h-[100px] w-full mb-3 flex-center border-b border-neutral-800'>
                                <img src={`/creatures/${creature}.webp`} width={130} height={80} alt="" className="max-h-[80px] max-w-[130px] object-contain overflow-hidden flex-center" />
                            </div>
                            <p className="small-semibold text-center">{creature[0].toUpperCase() + creature.slice(1)}</p>
                        </li>
                    ))}
                </ul>
            </div>

            <p className="h3-bold mb-2">Kibble ingditients</p>
            <div className="">
                <ul className="grid grid-cols-9 gap-3 w-full mb-5">
                    {Object.keys(kibble.needResources).map(resource => (
                        <li className="flex-center flex-col w-full border border-neutral-700 rounded-md p-2">
                            <div className="flex-center gap-1 mb-1">
                                <img src={items.resources[resource].image} alt="" width={20} height={20} />
                                <p className="body-bold">x{kibble.needResources[resource]}</p>
                            </div>
                            <div className="h-[1px] bg-neutral-900 w-full" />
                            <p className="subtle-semibold text-neutral-300 text-center pt-1">{items.resources[resource].name}</p>
                        </li>
                    ))}
                </ul>

                <div className="flex-start mb-2">
                    <img src="/logo-small.png" alt="" width={15} height={15} className="h-[15px] w-[15px] mr-2" />
                    <p className="body-bold">Eggs</p>
                </div>

                <ul className="grid grid-cols-9 gap-3">
                    {kibble.cookedFrom.map(creature => (
                        <li className='small-semibold text-center border border-neutral-700 rounded-md p-2'>
                            <div className='flex-center mb-1 h-12'>
                                <img src={`/creatures/${creature}.webp`} width={48} height={48} alt="" className='object-contain h-12 w-12' />
                            </div>
                            <div className="h-[1px] bg-neutral-800 w-full my-1" />
                            <p className='small-semibold'>{creature[0].toUpperCase() + creature.slice(1)}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default BasicKibble