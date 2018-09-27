/*
Objects
*/

let netflix = {
    id: 9,
    name: "Super Store",
    season1: {
      seasonInfo: {
        episodeInfo: [
          { episode: 1, episodeName: "Pilot" },
          { episode: 2, episodeName: "Magazine Profile" },
          { episode: 3, episodeName: "Shots and Salsa" },
          { episode: 4, episodeName: "Mannequin" },
          { episode: 5, episodeName: "Shoplifter" },
          { episode: 6, episodeName: "Secret Shopper" },
          { episode: 7, episodeName: "Color Wars" },
          { episode: 8, episodeName: "Wedding Day Sale" },
          { episode: 9, episodeName: "All-Nighter" },
          { episode: 10, episodeName: "Demotion" },
          { episode: 11, episodeName: "Labor" }
        ]
      }
    },
    season2: {},
    season3: {}
  };

 // console.log(netflix.name);
console.log(netflix.season1.seasonInfo.episodeInfo[1]);



//square brackets notation
let garden ={
    vegetable: 'Zucchini',
    flower: 'sunflower',
    fruit: 'grape',
    water: true,
    sun: true,
    size:10,
};
console.log(garden.vegetable);

let value = 'vegetable';


console.log(garden.value, garden[value]);
console.log(garden.value, garden['vegetable']);


let baking = {}

baking['zucchini']= 'better make some bread';
baking.cauliflower = 'get some hot sause and cheese';

console.log(Object.keys(baking));

let baking = {};
let garden ={
    vegetable: 'Zucchini',
    flower: 'sunflower',
    fruit: 'grape',
    water: true,
    sun: true,
    size:10, }


baking['zucchini'] = 'better make some bread';

console.log(baking[garden['vegetable']]);

