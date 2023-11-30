import Title from "@/components/shared/Title"
import { itemsResourcesList, items } from "@/constants/items"

const ItemsResources = () => {
  return (
    <section className='container mb-10'>
      <Title title='Resources List'> Resources List </Title>

      <div className='rounded-xl w-full p-5 border-neutral-800 border-[1px] overflow-hidden mb-10'>
        <ul className="grid grid-cols-8 gap-3">
          {itemsResourcesList.map((resourceItem) => (
            <li className="border p-3 rounded-md bg-gradient-to-br from-neutral-900 border-neutral-800 px-3 flex-start flex-col hover:bg-neutral-800 cursor-pointer">
              <div className="w-50 h-50 flex-center mb-1">
                <img src={`/items/resources/${resourceItem}.webp`} alt={resourceItem} width={50} height={50} />
              </div>
              <div className="h-[1px] bg-neutral-900 w-full my-1" />
              <p className="small-semibold">{items.resources[resourceItem].name}</p>
            </li>
          ))}
        </ul>
      </div>

    </section>
  )
}

export default ItemsResources