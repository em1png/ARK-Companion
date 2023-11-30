import { ICreature, ISettingsFields } from '@/types'
import CreatureTamingFoodItem from './CreatureTamingFoodItem'
import { Progress } from "@/components/ui/progress"
import { food } from '@/constants/food';
import { useState } from 'react'

const CreatureTaming = ({ creature, settings }: { creature: ICreature, settings: ISettingsFields }) => {

    const foodCounter: { [key: string]: number } = {};
    creature?.tamingFood.map((foodTitle) => foodCounter[foodTitle] = 0); // Заполнение массива типами еды.
    const [foodField, setFoodField] = useState<{ [key: string]: number }>(foodCounter); // Массив со значениями полей каждого типа еды.

    // Food section
    const foodMulti: number[] = [];  // Массив со значением affinity для каждого типа еды.
    Object.keys(foodField).map((item) => food[item] && foodMulti.push(food[item].affinity));

    const foodPointsShould = Math.ceil((creature?.needToTame + (creature?.needToTamePerLevel * settings.levelCreatureField)) / (4 * settings.tamingSpeed)); // Сколько нужно набрать, чтобы затеймить.
    const foodPointsCurrent = Object.values(foodField).reduce((acc, value, index) => !isNaN(value) ? value * foodMulti[index] + acc : acc, 0); // Текущий показатель еды и кол-во еды.
    const foodPointsPercent: number = (foodPointsCurrent / foodPointsShould) * 100; // Процент текущей еды от требуемой.
    const foodConsumption: number = creature.foodBase * creature.foodMult * settings.FoodDrainMultiplier; // Для расчета времени для тамления.

    // Calc tame time
    let totalSecs = 0;
    for (const key in foodField) {
        if (foodField[key] === 0) continue;
        totalSecs += Math.ceil((foodField[key] * food[key].food) / foodConsumption);
    }

    const createEmptyFoodField = () => {
        const newFields = { ...foodField };
        for (const item in newFields) newFields[item] = 0;
        setFoodField(newFields);
    }

    const howMuchFoodNow = () => {
        if(foodPointsPercent > 110) return 'Не требуется так много еды для приручения.';
        else if(foodPointsPercent >= 100) return 'Достаточно еды для приручения.';
        else return 'Недостаточно еды для приручения.'
    }
    return (
        <div className="flex flex-col w-full gap-3 mb-5">
            <h2 className='h2-bold p-1'> Taming</h2>
            <div className="w-full h-full flex flex-col p-5 rounded-2xl  border-dark-4 border-[1px] overflow-hidden">
                <div className="grid grid-cols-4 w-full text-center body-bold mb-3">
                    <p className="text-left">Food</p>
                    <p>Selected Food</p>
                    <p>Time</p>
                    <p>Effectiveness</p>
                </div>

                <div>
                    {creature.tamingFood.map((food, index) => (
                        <CreatureTamingFoodItem key={food}
                            title={food}
                            settings={settings}
                            foodConsumption={foodConsumption}
                            tiba={creature.tiba}
                            foodField={foodField}
                            setFoodField={setFoodField}
                            foodCountShould={Math.ceil(foodPointsShould / foodMulti[index])}
                            disabledStatus={foodPointsPercent < 100 ? false : true}
                        />
                    ))}
                </div>

                <div className="border-t-2 border-stone-900 pt-5">
                    <p className="body-bold"><span className="text-neutral-300 body-medium">Total time:</span> {totalSecs > 3600 ? Math.floor(totalSecs / 3600) : 0} <span className="subtle-semibold">hours</span> {Math.floor((totalSecs / 60) % 60)} <span className="subtle-semibold">minutes</span> {Math.floor(totalSecs % 60)} <span className="subtle-semibold">seconds</span></p>
                    <div className="flex-between">
                        <p className="mb-3 small-medium">{`${howMuchFoodNow()}`} </p>
                        <div className=" text-black rounded-md mb-3 flex-center flex-col gap-3">
                            <button className="small-semibold bg-white py-1 px-2 w-20 rounded-md" onClick={createEmptyFoodField}>Clear</button>
                            <div className="text-white small-semibold border-1 border-white rounded-md py-1 px-2 min-w-20 text-center">{foodPointsCurrent} / {Math.round((creature?.needToTame + (creature?.needToTamePerLevel * settings.levelCreatureField)) / (4 * settings.tamingSpeed))}</div>
                        </div>
                    </div>

                    <div className="h-2 w-full bg-neutral-400 rounded-xl mb-3">
                        <Progress className="h-2 w-full" value={foodPointsPercent} />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default CreatureTaming