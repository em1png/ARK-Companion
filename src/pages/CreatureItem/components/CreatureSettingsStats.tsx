import { Input } from "@/components/ui/input"
import { CreatureSettingsStatsType, ICreatureStats } from "@/types";
import { FC } from 'react'

const CreatureSettingsStats: FC<CreatureSettingsStatsType> = ({ creature, settings }) => {
    const stats : (keyof ICreatureStats)[] = ['h', 's', 'o', 'f', 'w', 'd', 'm', 't'];
    
    const { levelCreatureField, setLevelCreatureField, tamingSpeed, setTamingSpeed, FoodDrainMultiplier, setFoodDrainMultiplier } = settings;
    
    return (
        <div className="flex-between flex-col md:flex-row gap-5 mb-4">

            <div className="flex flex-col w-full md:w-6/12 h-[350px] gap-3">
                <div className="flex flex-center p-2 rounded-2xl border-dark-4 border-[1px] overflow-hidden">
                    <h2 className='h2-bold p-3'> {creature?.name} </h2>
                </div>
                <div className="w-full flex-center flex-col h-full flex p-2 rounded-2xl border border-neutral-800 overflow-hidden mb-1">
                    <div className="flex-center w-full h-4/5 border-b border-b-neutral-800 mb-3 py-5 overflow-hidden ">
                        <img src={creature?.image} alt={creature?.name} width={250} height={250} />
                    </div>

                    <div className="flex-center w-full gap-5">
                        <div className="flex-center">
                            <p className="small-semibold mr-2">Level:</p>
                            <Input className=" h-5 w-14 p-0 small-medium text-center bg-inherit text-white" type="text" min={0} value={levelCreatureField ? levelCreatureField : 1} onChange={(e) => parseInt(e.target.value) > 0 && e.target.value.length < 4 ? setLevelCreatureField(parseInt(e.target.value)) : setLevelCreatureField(1)} />
                        </div>

                        <div className="flex-center">
                            <p className="small-semibold mr-2">Taming Speed:</p>
                            <Input className=" h-5 w-14 p-0 small-medium text-center bg-inherit text-white" type="text" min={0} value={tamingSpeed ? tamingSpeed : 1} onChange={(e) => parseInt(e.target.value) > 0 && e.target.value.length < 4 ? setTamingSpeed(parseInt(e.target.value)) : setTamingSpeed(1)} />
                        </div>

                        <div className="flex-center">
                            <p className="small-semibold mr-2">Food Drain Multiplier:</p>
                            <Input className=" h-5 w-14 p-0 small-medium text-center bg-inherit text-white" type="text" min={0} value={FoodDrainMultiplier ? FoodDrainMultiplier : 1} onChange={(e) => parseInt(e.target.value) > 0 && e.target.value.length < 4 ? setFoodDrainMultiplier(parseInt(e.target.value)) : setFoodDrainMultiplier(1)} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full md:w-6/12 h-[350px] flex flex-center flex-col p-2 rounded-2xl  border-dark-4 border-[1px] overflow-hidden mb-1">
                <div className="grid grid-cols-4 w-full text-center items-center pb-2">
                    <p className="body-bold">Stats</p>
                    <p className="body-bold">Base</p>
                    <div className="flex-center flex-col">
                        <p className="body-bold">Wild</p>
                        <p className="subtle-medium text-neutral-400">per level</p>
                    </div>
                    <div className="flex-center flex-col">
                        <p className="body-bold">Tame</p>
                        <p className="subtle-medium text-neutral-400">per level</p>
                    </div>
                </div>

                <div className="grid grid-rows-8 w-full h-full text-center">
                    {stats.map((stat) => (
                        <div key={stat} className="grid grid-cols-4 text-center justify-center items-center border-t-[1px] border-stone-900">
                            <div className="flex-center">
                                <img src={`/statsIcons/${stat}.png`} alt={stat} width={20} height={20} />
                            </div>

                            <div className="w-full flex-center">
                                <p className="small-medium text-left w-[40px]">{creature.stats[stat].b}</p>
                            </div>

                            <div className="w-full flex-center">
                                <p className="small-medium text-left w-[60px]">{creature.stats[stat].w ? `+ ${creature.stats[stat].w}` : `—`}</p>
                            </div>

                            <div className="w-full flex-center">
                                <p className="small-medium text-left w-[60px]">{creature.stats[stat].t ? `+ ${creature.stats[stat].t} %` : `—`}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div >
    )
}

export default CreatureSettingsStats