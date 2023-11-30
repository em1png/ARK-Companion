import { creaturesList } from '@/constants/cratures'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <section className='mb-10'>
      <h1 className='container h1-bold mt-5 '>ARK Companion: Your ultimate taming calculator</h1>
      <p className='container base-regular text-white/70 mb-5'> The ARK taming calculator and companion app used by over 9 million ARK: Survival Evolved players.</p>

      <div className='container '>
        <ul className='grid grid-cols-2 md:grid-cols-7 gap-3'>

          {creaturesList.map((creature) => (
            <Link to={`/creatures/${creature.link}`}>
              <li className='flex-start flex-col p-3 rounded-md border border-neutral-800 hover:bg-neutral-900'>
                <div className='h-[100px] w-full mb-2 flex-center border-b border-neutral-800'>
                  <img src={creature.image} alt={creature.name} width={130} height={80} className='h-[80px] w-[130px] object-contain overflow-hidden' />
                </div>
                <p className='small-semibold text-center'> {creature.name}</p>
              </li>
            </Link>
          ))}

        </ul>
      </div>
    </section >
  )
}

export default Home