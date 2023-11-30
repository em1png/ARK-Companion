import { useState } from "react";
import { useParams } from "react-router-dom"
import { creatures } from '@/constants/cratures'
import { ICreature, ISettingsFields } from "@/types";
import CreatureSettingsStats from "./components/CreatureSettingsStats";
import CreatureOptions from "./components/CreatureOptions";
import CreatureTaming from "./components/CreatureTaming";

export type ParamsType = {
  name: string;
};

const CreatureItem = () => {
  const { name } = useParams<ParamsType>() as ParamsType;
  const creature: ICreature = creatures[name];

  const [levelCreatureField, setLevelCreatureField] = useState<number>(150);
  const [tamingSpeed, setTamingSpeed] = useState<number>(1);
  const [FoodDrainMultiplier, setFoodDrainMultiplier] = useState<number>(1);

  const settings: ISettingsFields = { levelCreatureField, setLevelCreatureField, tamingSpeed, setTamingSpeed, FoodDrainMultiplier, setFoodDrainMultiplier };

  return (
    <section className='container mb-10'>
      <div className='rounded-2xl w-full p-5 border-neutral-800 border-[1px] overflow-hidden'>
        <CreatureSettingsStats creature={creature} settings={settings} />
        <CreatureTaming creature={creature} settings={settings}/>
        <CreatureOptions creature={creature} />
      </div>
    </section>
  )
}

export default CreatureItem