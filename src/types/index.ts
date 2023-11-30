export interface ICreatureStats {
  'h': { 'b': number; 'w': number; 't': number };
  's': { 'b': number; 'w': number; 't': number };
  'o': { 'b': number; 'w': number; 't': number };
  'f': { 'b': number; 'w': number; 't': number };
  'w': { 'b': number; 'w': number; 't': number };
  'd': { 'b': number; 'w': number; 't': number; 'a': { 'b': number }[] };
  'm': {
    'b': number;
    'w': number | null;
    't': number | null;
    'a'?: {
      'w': { 'b'?: number; 'sw'?: number; 'st'?: number };
      'f'?: { 'b': number; 'sw': number; 'st': number };
      's'?: { 'b'?: number };
    };
  };
  't': { 'b': number; 'w': number; 't': number | null };
}

export interface ICreature {
  AXPk?: number;
  XPk: number;
  Modifiers?: {
    [key: string]: number | undefined;
    'Headshot'?: number;
    'Tail'?: number;
    'Shell'?: number;
  };
  FitsThrough: string[];
  CanDamage: string[];
  AffectedBy: string[];
  CarryableByFlyers: string[];
  CarryableByLand: string[];
  foodBase: number;
  foodMult: number;
  tiba: number;
  needToTame: number;
  needToTamePerLevel: number;
  link: string;
  name: string;
  image: string;
  tamingFood: string[];
  stats: ICreatureStats;
}

export interface IItemResource {
  name: string;
  image: string;
  gather: number;
  f: number;
  color: string;
}

export interface IItemKibbles {
  name: string;
  image: string;
  cookedFrom: string[];
  preferredBy: string[];
  cookTime: number;
  spoilsIn: number;
  needResources: { [key: string]: number };
}

export interface IItemSaddle {
  level: number,
  points: number,
  crafted: 'hand' |'smithy' | 'fabricator',
  cost: { [key:string] : number }
}

export interface IItemConsumable {
  name: string,
  image: string,
  desc: string[],
  effectDuration: number,
  spoilsIn: number,
  cost: { [key:string] : number },
}

export interface ISettingsFields {
  levelCreatureField: number;
  setLevelCreatureField: React.Dispatch<React.SetStateAction<number>>;
  tamingSpeed: number;
  setTamingSpeed: React.Dispatch<React.SetStateAction<number>>;
  FoodDrainMultiplier: number;
  setFoodDrainMultiplier: React.Dispatch<React.SetStateAction<number>>;
}

export type CreatureSettingsStatsType = {
  creature: ICreature;
  settings: ISettingsFields
};

export type CreatureTamingFoodItemType = {
  title: string,
  foodCountShould: number,
  setFoodField: React.Dispatch<React.SetStateAction<{ [key: string]: number }>>,
  foodField: { [key: string]: number },
  settings: ISettingsFields,
  tiba: number,
  disabledStatus: boolean;
  foodConsumption: number
}

export type foodItem = {
  [key: string]: {
    title?: string;
    food: number;
    affinity: number;
    picture?: string;
    [key: string]: number | string | undefined;
  };
};

export interface IItems {
  resources: { [key: string]: IItemResource };
  kibbles: { [key: string]: IItemKibbles };
  saddles: { [key: string]: IItemSaddle };
  consumables: { [key: string]: IItemConsumable };
}