import {ShoppingList} from '../../types/ShoppingList.ts';

export const dummyItems: ShoppingList = {
  id: '0',
  name: 'Dummy Items',
  rating: 4.5,
  ratingsAmount: 100,
  items: [
    {
      id: '1',
      name: 'Chips',
      servings: 1,
      uri: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.thdstatic.com%2FproductImages%2Fb7cb9f9d-1bb8-4a6c-bc46-cfb65636accb%2Fsvn%2Fsnack-foods-147387-64_1000.jpg&f=1&nofb=1&ipt=0e90f4268c6259034493cb1640f3075554252875cd64dbce9b159707e1d1fa57&ipo=images',
    },
    {
      id: '2',
      name: 'Milk',
      servings: 1,
      uri: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi5.walmartimages.com%2Fseo%2FGreat-Value-Whole-Vitamin-D-Milk-Gallon-128-fl-oz_6a7b09b4-f51d-4bea-a01c-85767f1b481a.86876244397d83ce6cdedb030abe6e4a.jpeg&f=1&nofb=1&ipt=e7ea2ecb4108b42aac07889b4be2b8eec692e8a07fa93817aa61776d8c9d353d&ipo=images',
    },
    {
      id: '3',
      name: 'Oreos',
      servings: 1,
      uri: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.womenfitness.net%2Fshop%2Fwp-content%2Fuploads%2F2016%2F10%2F81rrI3FvKkL._SL1500_1.jpg&f=1&nofb=1&ipt=228ab7f64efd838307c7c152bb7dd0dd09efba2fc89c552be4cdfefe7adfb654&ipo=images',
    },
    {
      id: '4',
      name: 'Black Beans',
      servings: 1,
      uri: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi5.walmartimages.com%2Fasr%2Feda74fce-1af9-45bc-8f56-05721b6abb52.111c67135274d7670ad44553d567d9d6.jpeg&f=1&nofb=1&ipt=ad3a93898ac4edf88a7c597cd4163d35a98a426105a965b3289db7b3d60bc9b3&ipo=images',
    },
    {
      id: '5',
      name: 'Frozen Pizza',
      servings: 1,
      uri: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi5.walmartimages.com%2Fasr%2F6dbdf319-ac46-4d82-8461-6b2c1e8e1ee3.8e9615e9eb35730acbf5a2c11edc1b7e.jpeg&f=1&nofb=1&ipt=ee43f817fac87e256473e108e4e6dfd0e32434332e56cdaf6a5f5fe27ef4a4b8&ipo=images',
    },
    {
      id: '1',
      name: 'Chips',
      servings: 1,
      uri: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.thdstatic.com%2FproductImages%2Fb7cb9f9d-1bb8-4a6c-bc46-cfb65636accb%2Fsvn%2Fsnack-foods-147387-64_1000.jpg&f=1&nofb=1&ipt=0e90f4268c6259034493cb1640f3075554252875cd64dbce9b159707e1d1fa57&ipo=images',
    },
    {
      id: '2',
      name: 'Milk',
      servings: 1,
      uri: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi5.walmartimages.com%2Fseo%2FGreat-Value-Whole-Vitamin-D-Milk-Gallon-128-fl-oz_6a7b09b4-f51d-4bea-a01c-85767f1b481a.86876244397d83ce6cdedb030abe6e4a.jpeg&f=1&nofb=1&ipt=e7ea2ecb4108b42aac07889b4be2b8eec692e8a07fa93817aa61776d8c9d353d&ipo=images',
    },
    {
      id: '3',
      name: 'Oreos',
      servings: 1,
      uri: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.womenfitness.net%2Fshop%2Fwp-content%2Fuploads%2F2016%2F10%2F81rrI3FvKkL._SL1500_1.jpg&f=1&nofb=1&ipt=228ab7f64efd838307c7c152bb7dd0dd09efba2fc89c552be4cdfefe7adfb654&ipo=images',
    },
    {
      id: '4',
      name: 'Black Beans',
      servings: 1,
      uri: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi5.walmartimages.com%2Fasr%2Feda74fce-1af9-45bc-8f56-05721b6abb52.111c67135274d7670ad44553d567d9d6.jpeg&f=1&nofb=1&ipt=ad3a93898ac4edf88a7c597cd4163d35a98a426105a965b3289db7b3d60bc9b3&ipo=images',
    },
  ],
  calories: 500,
  totalCarb: 275,
  totalFat: 125,
  protein: 100,
  cost: 70,
  avoid: [[], [], ['Vegetarian']],
  attract: [[], []],
};
export const dummyRecipes: ShoppingList = {
  id: '0',
  name: 'Dummy Recipes',
  rating: 4.5,
  ratingsAmount: 100,
  items: [
    {
      id: '1',
      name: 'Chicken Salad',
      servings: 2,
      uri: 'https://images.unsplash.com/photo-1604909052743-94e838986d24?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hpY2tlbiUyMHNhbGFkfGVufDB8fDB8fHww',
    },
    {
      id: '2',
      name: 'Veggie Stir Fry',
      servings: 3,
      uri: 'https://images.pexels.com/photos/105588/pexels-photo-105588.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
      id: '7',
      name: 'Salmon Salad',
      servings: 2,
      uri: 'https://images.pexels.com/photos/4770328/pexels-photo-4770328.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
      id: '13',
      name: 'Turkey Rice',
      servings: 2,
      uri: 'https://images.pexels.com/photos/4929675/pexels-photo-4929675.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
      id: '14',
      name: 'Fish Quinoa',
      servings: 3,
      uri: 'https://images.pexels.com/photos/17649370/pexels-photo-17649370/free-photo-of-rice-and-meat-with-spices.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
      id: '1',
      name: 'Chicken Salad',
      servings: 2,
      uri: 'https://images.unsplash.com/photo-1604909052743-94e838986d24?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hpY2tlbiUyMHNhbGFkfGVufDB8fDB8fHww',
    },
    {
      id: '2',
      name: 'Veggie Stir Fry',
      servings: 3,
      uri: 'https://images.pexels.com/photos/105588/pexels-photo-105588.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
      id: '7',
      name: 'Salmon Salad',
      servings: 2,
      uri: 'https://images.pexels.com/photos/4770328/pexels-photo-4770328.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
      id: '13',
      name: 'Turkey Rice',
      servings: 2,
      uri: 'https://images.pexels.com/photos/4929675/pexels-photo-4929675.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
  ],
  calories: 500,
  totalCarb: 275,
  totalFat: 125,
  protein: 100,
  cost: 70,
  avoid: [[], [], ['Vegetarian']],
  attract: [[], []],
};

const secondShoppingList: ShoppingList = {
  id: '1',
  name: 'Vegetarian Plan',
  rating: 4.7,
  ratingsAmount: 150,
  recipes: [
    {name: 'Veggie Pasta', servings: 2, id: '3'},
    {name: 'Tofu Stir Fry', servings: 3, id: '4'},
  ],
  calories: 450,
  totalCarb: 300,
  totalFat: 150,
  protein: 100,
  cost: 60,
  avoid: [[], [], ['Vegetarian']],
  attract: [[], []],
};
const thirdShoppingList: ShoppingList = {
  id: '2',
  name: 'High Protein',
  rating: 4.8,
  ratingsAmount: 200,
  recipes: [
    {name: 'Chicken Breast', servings: 2, id: '5'},
    {name: 'Steak Stir Fry', servings: 3, id: '6'},
  ],
  calories: 500,
  totalCarb: 200,
  totalFat: 100,
  protein: 200,
  cost: 80,
  avoid: [[], [], ['Vegetarian']],
  attract: [[], []],
};

const fourthShoppingList: ShoppingList = {
  id: '3',
  name: 'Low totalCarb Plan',
  rating: 4.6,
  ratingsAmount: 180,
  recipes: [
    {name: 'Salmon Salad', servings: 2, id: '7'},
    {name: 'Beef Stir Fry', servings: 3, id: '8'},
  ],
  calories: 400,
  totalCarb: 100,
  totalFat: 200,
  protein: 100,
  cost: 70,
  avoid: [[], [], ['Vegetarian']],
  attract: [[], []],
};

const fifthShoppingList: ShoppingList = {
  id: '4',
  name: 'Vegan Plan',
  rating: 4.7,
  ratingsAmount: 210,
  recipes: [
    {name: 'Vegan Pasta', servings: 2, id: '9'},
    {name: 'Tofu Stir Fry', servings: 3, id: '10'},
  ],
  calories: 450,
  totalCarb: 300,
  totalFat: 150,
  protein: 100,
  cost: 65,
  avoid: [[], [], ['Vegetarian']],
  attract: [[], []],
};

const sixthShoppingList: ShoppingList = {
  id: '5',
  name: 'Low totalCarb',
  rating: 4.5,
  ratingsAmount: 300,
  recipes: [
    {name: 'Chicken Salad', servings: 2, id: '11'},
    {name: 'Steak and Veggies', servings: 3, id: '12'},
  ],
  calories: 500,
  totalCarb: 50,
  totalFat: 200,
  protein: 150,
  cost: 75,
  avoid: [[], [], ['Vegetarian']],
  attract: [[], []],
};

const seventhShoppingList: ShoppingList = {
  id: '6',
  name: 'High Protein',
  rating: 4.8,
  ratingsAmount: 250,
  recipes: [
    {name: 'Turkey and Rice', servings: 2, id: '13'},
    {name: 'Fish and Quinoa', servings: 3, id: '14'},
  ],
  calories: 600,
  totalCarb: 200,
  totalFat: 100,
  protein: 200,
  cost: 80,
  avoid: [[], [], ['Vegetarian']],
  attract: [[], []],
};

const eighthShoppingList: ShoppingList = {
  id: '7',
  name: 'Balanced Diet',
  rating: 4.6,
  ratingsAmount: 350,
  recipes: [
    {name: 'Chicken and Pasta', servings: 2, id: '15'},
    {name: 'Beef and Potatoes', servings: 3, id: '16'},
  ],
  calories: 550,
  totalCarb: 150,
  totalFat: 150,
  protein: 150,
  cost: 70,
  avoid: [[], [], ['Vegetarian']],
  attract: [[], []],
};

export const forYouLists = [
  dummyRecipes,
  secondShoppingList,
  sixthShoppingList,
  thirdShoppingList,
  fourthShoppingList,
];
export const popularLists = [
  fifthShoppingList,
  seventhShoppingList,
  eighthShoppingList,
];
export const allLists = [...forYouLists, ...popularLists];
