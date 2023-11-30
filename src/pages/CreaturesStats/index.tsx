import Title from '@/components/shared/Title';
import { creatures, statsAllList } from '@/constants/cratures'

const Stats = () => {

    const creaturesKeysList = Object.keys(creatures)
    const creaturesHpSorted = [...creaturesKeysList].sort((a, b) => creatures[b].stats.h.b - creatures[a].stats.h.b);
    const creaturesStSorted = [...creaturesKeysList].sort((a, b) => creatures[b].stats.s.b - creatures[a].stats.s.b);
    const creaturesOgSorted = [...creaturesKeysList].sort((a, b) => creatures[b].stats.o.b - creatures[a].stats.o.b);
    const creaturesFdSorted = [...creaturesKeysList].sort((a, b) => creatures[b].stats.f.b - creatures[a].stats.f.b);
    const creaturesWgSorted = [...creaturesKeysList].sort((a, b) => creatures[b].stats.w.b - creatures[a].stats.w.b);
    const creaturesMdSorted = [...creaturesKeysList].sort((a, b) => creatures[b].stats.d.a[0].b - creatures[a].stats.d.a[0].b);
    const creaturesMsSorted = [...creaturesKeysList].sort((a, b) => creatures[b].stats.m.b - creatures[a].stats.m.b);
    const creaturesTrSorted = [...creaturesKeysList].sort((a, b) => creatures[b].stats.t.b - creatures[a].stats.t.b);

    const allSortedArrays = [creaturesHpSorted, creaturesStSorted, creaturesOgSorted, creaturesFdSorted, creaturesWgSorted, creaturesMdSorted, creaturesMsSorted, creaturesTrSorted];

    const getAllItems = () => {
        const liList = [];
        for (let i = 0; i < creaturesHpSorted.length; i++) {
            liList.push(
                <ul className="grid grid-cols-9 gap-3 rounded-md p-1 border-dark-4 border-b py-3">
                    <li className='small-semibold text-center flex-center'>  <p className='h3-bold'>{i}</p> </li>
                    {allSortedArrays.map((item, index) => {
                        const currentCreature = creatures[item[i]];

                        return (<li className='small-semibold text-center border border-neutral-800 rounded-md p-1'>
                            <div className='flex-center mb-1 h-12'>
                                <img src={creatures[item[i]].image} width={48} height={48} alt="" className='object-contain' />
                            </div>
                            <p className='small-semibold'>{currentCreature.name}</p>
                            <div className='flex-center'>
                                <div className='flex-center mr-1'>
                                    <img src={`/statsIcons/${statsAllList[index]}.png`} width={8} height={8} alt="" className='opacity-60' />
                                </div>

                                <p className='subtle-semibold text-neutral-400'> {item === creaturesMdSorted ? currentCreature.stats.d.a[0].b : currentCreature.stats[statsAllList[index]].b} </p>
                            </div>
                        </li>
                        )
                    })}
                </ul>
            )
        }
        return liList;
    }

    return (
        <section className='container mb-10'>
            <Title title='Stats Rating'> Stats Rating </Title>
            <div className="frame-rounded">
                <ul className="grid grid-cols-9 gap-3 border-b border-neutral-800">
                    <li className='flex-center'>
                        <p className='small-semibold text-center'>Rank</p>
                    </li>
                    {statsAllList.map(item =>
                        <li key={item} className="p-3 rounded-md border-neutral-800 px-3 flex-start flex-col">
                            <div className="w-full flex-center">
                                <img src={`/statsIcons/${item}.png`} width={30} height={30} className="max-h-[30px] max-w-[30px] object-contain overflow-hidden flex-center" />
                            </div>
                        </li>
                    )}
                </ul>
                {getAllItems()}
            </div>
        </section >
    )
}

export default Stats