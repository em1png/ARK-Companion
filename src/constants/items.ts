import { IItems } from "@/types";

export const itemsResourcesList = [
  "wood",
  "thatch",
  "fiber",
  "stone",
  "flint",
  "metal",
];

export const items: IItems = {
  resources: {
    thatch: {
      name: "Thatch",
      image: "/items/resources/thatch.webp",
      gather: 1,
      f: 1,
      color: "#d0c485",
    },
    fiber: {
      name: "Fiber",
      image: "/items/resources/fiber.webp",
      gather: 1,
      f: 1,
      color: "#866950",
    },
    wood: {
      name: "Wood",
      image: "/items/resources/wood.webp",
      gather: 1,
      f: 1,
      color: "#866950",
    },
    stone: {
      name: "Stone",
      image: "/items/resources/stone.webp",
      gather: 1,
      f: 1,
      color: "#bbbbbb",
    },
    flint: {
      name: "Flint",
      image: "/items/resources/flint.webp",
      gather: 1,
      f: 1,
      color: "#b9752d",
    },
    metal: {
      name: "Metal",
      image: "/items/resources/metal.webp",
      gather: 1,
      f: 1,
      color: "#75756f",
    },
    cookedMeat: {
      name: "Cooked Meat",
      image: "/items/resources/cookedMeat.webp",
      gather: 1,
      f: 1,
      color: "#75756f",
    },
    amarberry: {
      name: "Amarberry",
      image: "/items/resources/amarberry.webp",
      gather: 1,
      f: 1,
      color: "#75756f",
    },
    mejoberry: {
      name: "Mejoberry",
      image: "/items/resources/mejoberry.webp",
      gather: 1,
      f: 1,
      color: "#75756f",
    },
    tintoberry: {
      name: "Tintoberry",
      image: "/items/resources/tintoberry.webp",
      gather: 1,
      f: 1,
      color: "#75756f",
    },
    longrass: {
      name: "Longrass",
      image: "/items/resources/longrass.webp",
      gather: 1,
      f: 1,
      color: "#75756f",
    },
    citronal: {
      name: "Citronal",
      image: "/items/resources/citronal.webp",
      gather: 1,
      f: 1,
      color: "#75756f",
    },
    rockarrot: {
      name: "Rockarrot",
      image: "/items/resources/rockarrot.webp",
      gather: 1,
      f: 1,
      color: "#75756f",
    },
    savoroot: {
      name: "Savoroot",
      image: "/items/resources/savoroot.webp",
      gather: 1,
      f: 1,
      color: "#75756f",
    },
    cookedFishMeat: {
      name: "Cooked Fish Meat",
      image: "/items/resources/cookedFishMeat.webp",
      gather: 1,
      f: 1,
      color: "#75756f",
    },
    cookedMeatJerky: {
      name: "Cooked Meat Jerky",
      image: "/items/resources/cookedMeatJerky.webp",
      gather: 1,
      f: 1,
      color: "#75756f",
    },
    primeMeatJerky: {
      name: "Prime Meat Jerky",
      image: "/items/resources/cookedMeatJerky.webp",
      gather: 1,
      f: 1,
      color: "#75756f",
    },
    sap: {
      name: "Sap",
      image: "/items/resources/sap.webp",
      gather: 1,
      f: 1,
      color: "#75756f",
    },
    rareMushroom: {
      name: "Rare Mushroom",
      image: "/items/resources/rareMushroom.webp",
      gather: 1,
      f: 1,
      color: "#75756f",
    },
    rareFlower: {
      name: "Rare Flower",
      image: "/items/resources/rareFlower.webp",
      gather: 1,
      f: 1,
      color: "#75756f",
    },
    focalChili: {
      name: "Focal Chili",
      image: "/items/resources/focalChili.webp",
      gather: 1,
      f: 1,
      color: "#75756f",
    },
    giantBeeHoney: {
      name: "Giant Bee Honey",
      image: "/items/resources/giantBeeHoney.webp",
      gather: 1,
      f: 1,
      color: "#75756f",
    },
    lazarusChowder: {
      name: "Lazarus Chowder",
      image: "/items/resources/lazarusChowder.webp",
      gather: 1,
      f: 1,
      color: "#75756f",
    },
  },
  kibbles: {
    basicKibble: {
      name: "Basic Kibble",
      image: "/items/kibbles/basicKibble.webp",
      cookedFrom: [
        "dilophosaur",
        "dodo",
        "featherlight",
        "kairuku",
        "lystrosaurus",
        "parasaur",
        "vulture",
      ],
      preferredBy: [
        "dilophosaur",
        "dodo",
        "kairuku",
        "mesopithecus",
        "parasaur",
        "phiomia",
        "maewing",
      ],
      cookTime: 30,
      spoilsIn: 72,
      needResources: {
        cookedMeat: 1,
        amarberry: 10,
        mejoberry: 5,
        tintoberry: 10,
        fiber: 5,
      },
    },
    simpleKibble: {
      name: "Simple Kibble",
      image: "/items/kibbles/simpleKibble.webp",
      cookedFrom: [
        "archaeopteryx",
        "compy",
        "dimorphodon",
        "gallimimus",
        "glowtail",
        "microraptor",
        "morellatops",
        "oviraptor",
        "pachy",
        "pegomastax",
        "pteranodon",
        "raptor",
        "sinomacrops",
        "triceratops",
      ],
      preferredBy: [
        "archaeopteryx",
        "diplocaulus",
        "gallimimus",
        "giantbee",
        "ichthyosaurus",
        "iguanodon",
        "megaloceros",
        "morellatops",
        "pachy",
        "triceratops",
        "raptor",
      ],
      cookTime: 30,
      spoilsIn: 72,
      needResources: {
        cookedFishMeat: 1,
        rockarrot: 2,
        mejoberry: 5,
        fiber: 5, 
      },
    },
    regularKibble: {
      name: "Regular Kibble",
      image: "/items/kibbles/regularKibble.webp",
      cookedFrom: [
        "ankylosaurus",
        "baryonyx",
        "carbonemys",
        "carnotaurus",
        "dimetrodon",
        "diplodocus",
        "ichthyornis",
        "iguanodon",
        "kaprosuchus",
        "kentrosaurus",
        "pachyrhinosaurus",
        "pelagornis",
        "sarco",
        "stegosaurus",
        "terrorbird",
        "thornydragon",
        "troodon",
        "velonasaur"
      ],
      preferredBy: [
        "angler",
        "ankylosaurus",
        "baryonyx",
        "beelzebufo",
        "carbonemys",
        "carnotaurus",
        "dimetrodon",
        "diplodocus",
        "doedicurus",
        "gigantopithecus",
        "ichthyornis",
        "kaprosuchus",
        "kentrosaurus",
        "lymantria",
        "pelagornis",
        "pteranodon",
        "pulmonoscorpius",
        "purlovia",
        "sabertooth",
        "sarco",
        "stegosaurus"
      ],
      cookTime: 30,
      spoilsIn: 72,
      needResources: {
        cookedMeatJerky: 1,
        longrass: 2,
        savoroot: 2,
        fiber: 5,
      },
    },
    superiorKibble: {
      name: "Superior Kibble",
      image: "/items/kibbles/superiorKibble.webp",
      cookedFrom: [
        "allosaurus",
        "argentavis",
        "mantis",
        "megalania",
        "megalosaurus",
        "moschops",
        "snowowl",
        "spinosaurus",
        "tapejara",
        "titanoboa",
        "tropeognathus"
      ],
      preferredBy: [
        "allosaurus",
        "argentavis",
        "castoroides",
        "daeodon",
        "direwolf",
        "direbear",
        "dunkleosteus",
        "gasbags",
        "mammoth",
        "megatherium",
        "megalosaurus",
        "paraceratherium",
        "plesiosaur",
        "megalodon",
        "snowowl",
        "tapejara",
        "woollyrhino"
      ],
      cookTime: 30,
      spoilsIn: 72,
      needResources: {
        primeMeatJerky: 1,
        citronal: 2,
        sap: 1,
        rareMushroom: 2,
        fiber: 5,
      },
    },
    exceptionalKibble: {
      name: "Exceptional Kibble",
      image: "/items/kibbles/exceptionalKibble.webp",
      cookedFrom: [
        "basilisk",
        "brontosaurus",
        "giganotosaurus",
        "quetzal",
        "rex",
        "therizinosaurus"
      ],
      preferredBy: [
        "basilosaurus",
        "brontosaurus",
        "giganotosaurus",
        "karkinos",
        "managarmr",
        "mosasaurus",
        "quetzal",
        "rex",
        "spinosaurus",
        "therizinosaurus"
      ],
      cookTime: 30,
      spoilsIn: 72,
      needResources: {
        focalChili: 1,
        rareFlower: 1,
        mejoberry: 10,
        fiber: 5,
      },
    },
    extraordinaryKibble: {
      name: "Extraordinary Kibble",
      image: "/items/kibbles/extraordinaryKibble.webp",
      cookedFrom: [
        "deinonychus",
        "hesperornis",
        "magmasaur",
        "rockdrake",
        "wyvern",
        "yutyrannus"
      ],
      preferredBy: [
        "griffin",
        "megalania",
        "rockelemental",
        "thylacoleo",
        "yutyrannus"
      ],
      cookTime: 30,
      spoilsIn: 72,
      needResources: {
        giantBeeHoney: 1,
        lazarusChowder: 1,
        mejoberry: 10,
        fiber: 5,
      },
    },
  },
  saddles: {
    ankylosaurus: {
      level: 36,
      points: 35,
      crafted: "smithy",
      cost: {
        hide: 350,
        fiber: 140,
        metalIngot: 10,
      },
    },
    argentavis: {
      level: 36,
      points: 35,
      crafted: "smithy",
      cost: {
        hide: 350,
        fiber: 140,
        metalIngot: 10,
      },
    },
    managarmr: {
      level: 36,
      points: 35,
      crafted: "smithy",
      cost: {
        hide: 350,
        fiber: 140,
        metalIngot: 10,
      },
    },
  },
  consumables: {
    brothOfEnlightenment: {
      name: "Broth of Enlightenment",
      image: "/items/consumables/brothOfEnlightenment.webp",
      desc: ["+50% Experience"],
      effectDuration: 1200,
      spoilsIn: 5,
      cost: {
        longrass: 10,
        citronal: 5,
        mejoberry: 10,
        cookedMeat: 21,
        tintoberry: 1,
      },
    },
    calienSoup: {
      name: "Calien Soup",
      image: "/items/consumables/calienSoup.webp",
      desc: ["+50 hyperthermic insulation", "-25% Water consumption"],
      effectDuration: 1200,
      spoilsIn: 5,
      cost: {
        citronal: 12,
        mejoberry: 13,
        cookedMeat: 2,
        tintoberry: 25,
      },
    },
    mindwipeTonic: {
      name: "Mindwipe Tonic",
      image: "/items/consumables/mindwipeTonic.webp",
      desc: ["Resets player stats and engrams"],
      effectDuration: 1,
      spoilsIn: 5,
      cost: {
        rareFlower: 20,
        rareMushroom: 20,
        mejoberry: 200,
      },
    },
    shadowSteakSaute: {
      name: "Shadow Steak Saute",
      image: "/items/consumables/shadowSteakSaute.webp",
      desc: ["+50% Hypothermic Insulation", "+50% Hyperthermic Insulation", "-80% Weapon recoil"],
      effectDuration: 180,
      spoilsIn: 5,
      cost: {
        rockarrot: 1,
        savoroot: 1,
        rareMushroom: 2,
        mejoberry: 20,
      },
    },
    battleTartare: {
      name: "Battle Tartare",
      image: "/items/consumables/shadowSteakSaute.webp",
      desc: ["+65% Melee Damage", "+15% Damage resistance", "+50% Movement Speed", "+50% Food and Water consumption", "Increased Stamina regen", "-90 Health (0.45 per second)"],
      effectDuration: 180,
      spoilsIn: 5,
      cost: {
        longrass: 1,
        citronal: 1,
        rareFlower: 2,
        mejoberry: 20,
      },
    },
    enduroStew: {
      name: "Enduro Stew",
      image: "/items/consumables/enduroStew.webp",
      desc: ["+35% Melee Damage", "+1.2 Health/second, Increased stamina"],
      effectDuration: 900,
      spoilsIn: 5,
      cost: {
        cookedMeat: 9,
        savoroot: 5,
        rockarrot: 5,
        mejoberry: 10,
      },
    },
    focalChili: {
      name: "Focal Chili",
      image: "/items/consumables/focalChili.webp",
      desc: ["+25% Movement Speed", "+100% Crafting Speed"],
      effectDuration: 900,
      spoilsIn: 5,
      cost: {
        cookedMeat: 9,
        citronal: 5,
        tintoberry: 20,
        amarberry: 20,
        mejoberry: 10,
      },
    },
    lazarusChowder: {
      name: "Lazarus Chowder",
      image: "/items/consumables/lazarusChowder.webp",
      desc: ["-85% Oxygen consumption underwater", "+1.2% Stamina per second (allows constant swimming)"],
      effectDuration: 900,
      spoilsIn: 5,
      cost: {
        cookedMeat: 9,
        savoroot: 5,
        longrass: 5,
        mejoberry: 10,
      },
    },
    sweetVegetableCake: {
      name: "Sweet Vegetable Cake",
      image: "/items/consumables/sweetVegetableCake.webp",
      desc: ["+500 Health to Tamed Herbivores"],
      effectDuration: 1,
      spoilsIn: 1,
      cost: {
        giantBeeHoney: 2,
        sap: 4,
        rockarrot: 2,
        savoroot: 2,
        longrass: 2,
        mejoberry: 10,
        fiber: 25
      },
    },
  },
};
