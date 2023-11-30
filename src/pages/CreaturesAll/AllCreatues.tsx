import Title from '@/components/shared/Title'
import { creaturesList } from '@/constants/cratures'
import { Link  } from 'react-router-dom'

export const AllCreatures = () => {
  return (
    <section className='container mb-10'>
      <Title title='Creatures List'> Creatures List </Title>

      <div className='frame-rounded'>
        <ul className='grid grid-cols-2 md:grid-cols-7 gap-3'>

          {creaturesList.map((creature) => (
            <Link to={`/creatures/${creature.link}`}>
              <li className='flex-start flex-col p-3 rounded-md border border-neutral-800 bg-gradient-to-br from-neutral-900 hover:bg-neutral-800'>
                <div className='h-[100px] w-full mb-2 flex-center border-b border-neutral-800'>
                  <img src={creature.image} alt={creature.name} width={130} height={80} className='h-[80px] w-[130px] object-contain overflow-hidden' />
                </div>
                <p className='small-semibold text-center'> {creature.name}</p>
              </li>
            </Link>
          ))}
          
        </ul>
      </div>

    </section>
  )
}

export default AllCreatures