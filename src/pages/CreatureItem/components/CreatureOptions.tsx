import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AffectedBy, CanDamage, FitsThrough, carryableBy } from "@/constants/cratures"
import { ICreature } from "@/types"

const CreatureOptions = ({ creature } : { creature: ICreature }) : JSX.Element => {
    return (
        <>
            <h2 className='h2-bold mb-1 p-2'>Options</h2>
            <div className="flex-center flex-col w-full">
                <div className="w-full h-full flex flex-col p-5 rounded-2xl border-dark-4 border">
                    <Tabs defaultValue="carryable" className="w-full">
                        
                        {/* Tabs Lists */}
                        <TabsList>
                            <TabsTrigger value="carryable">Carryable</TabsTrigger>
                            <TabsTrigger value="affected">Affected</TabsTrigger>
                            <TabsTrigger value="canDamage">Can Damage</TabsTrigger>
                            <TabsTrigger value="fitsThrough">Fits Through</TabsTrigger>
                        </TabsList>

                        {/* Tab: carryable */}
                        <TabsContent value="carryable">
                            <div className="grid grid-cols-6 gap-5 mt-5">

                                {creature.CarryableByFlyers.concat(creature.CarryableByLand).map(item =>
                                    <div key={item} className="border p-3 rounded-md bg-gradient-to-br from-neutral-900 border-neutral-600 px-3 flex-start flex-col">
                                        <div className="h-[100px] w-full mb-3 flex-center border-b border-neutral-800 ">
                                            <img src={`/creatures/${item}.webp`} width={130} height={80} className="max-h-[80px] max-w-[130px] object-contain overflow-hidden flex-center" />
                                        </div>
                                        <p className="small-semibold text-center">{carryableBy.Flyers[item] || carryableBy.Land[item]}</p>
                                    </div>
                                )}

                                {Object.keys(carryableBy.Flyers).concat(Object.keys(carryableBy.Land)).map((item) => (!creature.CarryableByFlyers.concat(creature.CarryableByLand).includes(item) &&
                                    <div key={item} className='border p-3 rounded-md border-neutral-800 px-3 flex-start flex-col border-dotted grayscale'>
                                        <div className="h-[100px] w-full mb-3 flex-center border-b border-neutral-800 opacity-30">
                                            <img src={`/creatures/${item}.webp`} width={130} height={80} className="max-h-[80px] max-w-[130px] object-contain overflow-hidden flex-center" />
                                        </div>
                                        <p className="small-semibold text-center opacity-30">{carryableBy.Flyers[item] || carryableBy.Land[item]}</p>
                                    </div>
                                ))}

                            </div>

                        </TabsContent>

                        {/* Tab: affected */}
                        <TabsContent value="affected">
                            <div className="grid grid-cols-6 gap-5 mt-5">
                                {creature.AffectedBy.map(item =>
                                    <div key={item} className="border p-3 rounded-md bg-gradient-to-br from-neutral-900 border-neutral-600 px-3 flex-start flex-col">
                                        <div className="h-[100px] w-full mb-3 flex-center border-b border-neutral-800 ">
                                            <img src={`/items/${item}.webp`} width={130} height={80} className="max-h-[80px] max-w-[130px] object-contain overflow-hidden flex-center" />
                                        </div>
                                        <p className="small-semibold text-center">{AffectedBy[item]}</p>
                                    </div>
                                )}

                                {Object.keys(AffectedBy).map((item) => (!creature.AffectedBy.includes(item) &&
                                    <div key={item} className='border p-3 rounded-md border-neutral-800 px-3 flex-start flex-col border-dotted grayscale'>
                                        <div className="h-[100px] w-full mb-3 flex-center border-b border-neutral-800 opacity-30">
                                            <img src={`/items/${item}.webp`} width={130} height={80} className="max-h-[80px] max-w-[130px] object-contain overflow-hidden flex-center" />
                                        </div>
                                        <p className="small-semibold text-center opacity-30">{AffectedBy[item]}</p>
                                    </div>
                                ))}
                            </div>
                        </TabsContent>

                        {/* Tab: can damage */}             
                        <TabsContent value="canDamage">
                            <ul className="grid grid-cols-6 gap-5 mt-5">
                                {creature.CanDamage.map(item =>
                                    <li key={item} className="border p-3 rounded-md bg-gradient-to-br from-neutral-900 border-neutral-600 px-3 flex-start flex-col">
                                        <div className="h-[100px] w-full mb-3 flex-center border-b border-neutral-800">
                                            <img src={`/items/${item}.webp`} width={130} height={80} className="max-h-[80px] max-w-[130px] object-contain overflow-hidden flex-center" />
                                        </div>
                                        <p className="small-semibold text-center">{CanDamage[item]}</p>
                                    </li>
                                )}

                                {Object.keys(CanDamage).map((item) => (!creature.CanDamage.includes(item) &&
                                    <li key={item} className='border p-3 rounded-md border-neutral-800 px-3 flex-start flex-col border-dotted grayscale'>
                                        <div className="h-[100px] w-full mb-3 flex-center border-b border-neutral-800 opacity-30">
                                            <img src={`/items/${item}.webp`} width={130} height={80} className="max-h-[80px] max-w-[130px] object-contain overflow-hidden flex-center" />
                                        </div>
                                        <p className="small-semibold text-center opacity-30">{CanDamage[item]}</p>
                                    </li>
                                ))}
                            </ul>
                        </TabsContent>

                        {/* Tab: fits through */}
                        <TabsContent value="fitsThrough">
                            <div className="grid grid-cols-6 gap-5 mt-5">
                                {creature.FitsThrough.map(item =>
                                    <div key={item} className="border p-3 rounded-md bg-gradient-to-br from-neutral-900 border-neutral-600 px-3 flex-start flex-col">
                                        <div className="h-[100px] w-full mb-3 flex-center border-b border-neutral-800 ">
                                            <img src={`/items/${item}.webp`} width={130} height={80} className="max-h-[80px] max-w-[130px] object-contain overflow-hidden flex-center" />
                                        </div>
                                        <p className="small-semibold text-center">{FitsThrough[item]}</p>
                                    </div>
                                )}

                                {Object.keys(FitsThrough).map((item) => (!creature.FitsThrough.includes(item) &&
                                    <div key={item} className='border p-3 rounded-md border-neutral-900 px-3 flex-start flex-col border-dotted grayscale'>
                                        <div className="h-[100px] w-full mb-3 flex-center border-b border-neutral-800 opacity-30">
                                            <img src={`/items/${item}.webp`} width={130} height={80} className="max-h-[80px] max-w-[130px] object-contain overflow-hidden flex-center" />
                                        </div>
                                        <p className="small-semibold text-center opacity-30">{FitsThrough[item]}</p>
                                    </div>
                                ))}
                            </div>
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
        </>
    )
}

export default CreatureOptions