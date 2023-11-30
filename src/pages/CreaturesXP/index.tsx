import Title from "@/components/shared/Title";
import { creatures } from "@/constants/cratures";

const XP = () => {
  const calcXP = (xpk: number): string => {
    const xpGained = xpk * (149 / 10 + 1) * 4;
    return Math.round(xpGained).toLocaleString();
  }

  const creaturesList = Object.keys(creatures);
  const creaturesXPSorted = [...creaturesList].sort((a, b) => creatures[b].XPk - creatures[a].XPk);

  return (
    <section className='container mb-10'>
      <Title title='XP'> XP </Title>

      <div className="frame-rounded">

        <ul className="grid grid-cols-[300px_1fr_1fr] gap-3 border-b border-neutral-800 pb-5">
          <li />

          <li className='flex-center'>
            <p className='small-semibold text-center'>XP</p>
          </li>

          <li className='flex-center'>
            <p className='small-semibold text-center'>Alpha</p>
          </li>
        </ul>

        {creaturesXPSorted.map((creatureItem => (
          <ul className="grid grid-cols-[300px_1fr_1fr] gap-3 border-dark-4 border-b">

            <li className='small-semibold flex-center border-dark-4 border-r'>
              <div className="flex-center mr-2">
                <img src={creatures[creatureItem].image} alt="" className="h-[45px] w-[45px] object-contain" />
              </div>
              <p className='small-semibold'>{creatures[creatureItem].name}</p>
            </li>

            <li className='small-semibold text-center flex-center border-dark-4 border-r'>
              <p className='small-semibold text-emerald-200'>{calcXP(creatures[creatureItem].XPk)}</p>
            </li>

            <li className='small-semibold text-center flex-center'>
              <p className='body-bold text-rose-200'>{creatures[creatureItem].AXPk ? calcXP(creatures[creatureItem].AXPk!) : '-'}</p>
            </li>

          </ul>
        )))}

      </div>
    </section >
  )
}

export default XP