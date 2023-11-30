import { FC } from 'react'
import { Input } from "@/components/ui/input"
import { food } from "@/constants/food";
import { CreatureTamingFoodItemType } from '@/types';

const CreatureTamingFoodItem: FC<CreatureTamingFoodItemType> = ({ title, foodCountShould, setFoodField, foodField, settings, tiba, disabledStatus, foodConsumption }): JSX.Element => {

    // Calculating effectiveness, gained levels and time to tame;
    let effectiveness = 100;
    for (let i = 0; i < foodCountShould; i++) 
    {
        effectiveness -= Math.pow(effectiveness, 2) * tiba / food[title].affinity / (4 * settings.FoodDrainMultiplier) / 100;
    }

    const gainedLevels = Math.floor(settings.levelCreatureField * .5 * effectiveness / 100);

    const totalSecs = Math.ceil((foodCountShould * food[title].food) / foodConsumption);
    const timeToTame = () => {
        if (totalSecs < 3600) return `${Math.floor((totalSecs / 60) % 60)}:${Math.floor(totalSecs % 60) < 10 ? `0${Math.floor(totalSecs % 60)}` : `${Math.floor(totalSecs % 60)}`}`
        else return `${totalSecs > 3600 ? Math.floor(totalSecs / 3600) : 0}:${Math.floor((totalSecs / 60) % 60) < 10 ? `0${Math.floor((totalSecs / 60) % 60)}` : `${Math.floor((totalSecs / 60) % 60)}`}:${Math.floor(totalSecs % 60) < 10 ? `0${Math.floor(totalSecs % 60)}` : `${Math.floor(totalSecs % 60)}`}`
    }

    const createEmptyFoodField = () => {
        const newFields = { ...foodField };
        for (const item in newFields) newFields[item] = 0;
        return newFields;
    };

    // Event handlers
    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        const newFields = { ...foodField };
        newFields[title] = e.target.value && +e.target.value > 0 ? parseInt(e.target.value) : 0;
        setFoodField(newFields);
    };

    const onClickFoodMax = () => {
        const newFields = createEmptyFoodField();
        newFields[title] = foodCountShould;
        setFoodField(newFields);
    };

    const onClickPlus = (btn: string) => {
        const newFields = { ...foodField };
        if (btn === 'plus') newFields[title] = newFields[title] + 1;
        else {
            if (newFields[title] - 1 >= 0) newFields[title] = newFields[title] - 1;
            else newFields[title] = 0;
        }
        setFoodField(newFields);
    };

    return (
        <div className="grid grid-cols-4 gap-5 w-full text-center border-b border-neutral-800 py-3">
            <div className="flex flex-row justify-start items-center ">
                <img src={food[title].picture} alt="" width={25} height={25} className="mr-2" />
                <p className={`small-medium ${(foodField[title] > 0) ? `text-white` : `text-neutral-400`}`}>{food[title].title}</p>
            </div>

            <div className="flex-center">
                <div className="flex-center gap-3">
                    <div className="hidden sm:flex-center h-7 text-white border border-neutral-600 rounded-md">
                        <button disabled={foodField[title] === 0 ? true : false} className="disabled:text-neutral-500 small-semibold w-6 h-full rounded-md cursor-pointer" onClick={() => onClickPlus('minus')}>-</button>
                        <button disabled={disabledStatus} className="disabled:text-neutral-500 small-semibold w-6 h-full rounded-md cursor-pointer" onClick={() => onClickPlus('plus')}>+</button>
                    </div>
                    <Input className="h-7 w-14 p-0 small-medium text-center bg-inherit text-white" type="text" max={99} min={0} value={foodField[title] ? foodField[title] : 0} onChange={onChangeHandler} />
                    <div className="hidden sm:flex-center h-7 w-14 bg-white text-black rounded-md cursor-pointer hover:bg-neutral-300" onClick={onClickFoodMax}>
                        <p className="text-[14px] font-semibold leading-[140%] ">
                            {foodCountShould}
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex-center">
                <div className="w-full flex-center">
                    <p className="small-medium w-12 text-start">{`${timeToTame()}`}</p>
                </div>
            </div>

            <div className="flex-center">
                <div className="flex-center flex-col w-full">
                    <div className="flex-between w-full">
                        <p className="small-medium text-left">{effectiveness.toFixed(1)}%</p>
                        <p className="text-neutral-400 subtle-semibold">{`+${gainedLevels} lvl = ${settings.levelCreatureField + gainedLevels}`}</p>
                    </div>
                    <div className="h-1 w-full bg-neutral-400 rounded-lg">
                        <div className='h-full bg-white rounded-md' style={{ width: `${effectiveness < 100 ? `${effectiveness}` : '100'}% ` }} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreatureTamingFoodItem