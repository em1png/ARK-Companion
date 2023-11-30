import Title from "@/components/shared/Title";
import { creatures } from "@/constants/cratures";

const HeadshotsModifiers = () => {
    const modifiersList : string[] = ["Headshot", "Shell", "Tail"];

    return (
        <section className='container mb-10'>
            <Title title='Headshots & Modifiers'> Headshots & Modifiers </Title>

            <div className="frame-rounded">
                <ul className="grid grid-cols-[300px_1fr_1fr_1fr] gap-3 border-b border-neutral-800 pb-5">
                    <li />
                    {modifiersList.map(item =>
                        <li className="rounded-md border-neutral-800 flex-center flex-col">
                            <p className="small-semibold text-center">{item}</p>
                        </li>
                    )}
                </ul>

                {Object.values(creatures).map((itemCreature) => {
                    return (
                        <ul className="grid grid-cols-[300px_1fr_1fr_1fr] gap-3 border-b border-neutral-800 rounded-md">
                            <li className='small-semibold flex-center border-dark-4 border-r'>
                                <div className="flex-center mr-2">
                                    <img src={itemCreature.image} alt="" className="h-[45px] w-[45px] object-contain" />
                                </div>
                                <p className='small-semibold'>{itemCreature.name}</p>
                            </li>

                            {modifiersList.map((item) => (
                                <li className='w-full h-full flex-center border-r border-neutral-800 last:border-none'>
                                    {itemCreature.Modifiers && Object.hasOwn(itemCreature.Modifiers, item)
                                        ? <p className={`small-semibold ${+itemCreature.Modifiers[item]! > 1 ? 'text-rose-200' : 'text-emerald-200'}`}>x{itemCreature.Modifiers[item]}</p>
                                        : <p className='small-semibold'>-</p>}
                                </li>
                            ))}
                        </ul>
                    )
                })}
            </div>
        </section >
    )
}

export default HeadshotsModifiers