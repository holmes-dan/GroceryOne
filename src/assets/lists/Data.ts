import ShoppingList from '../../types/ShoppingList.ts';

export const firstShoppingList: ShoppingList = {
  id: '0',
  name: 'Healthy Diet',
  rating: 4.5,
  ratingsAmount: 100,
  recipes: [
    {name: 'Chicken Salad', portions: 2, id: '1'},
    {name: 'Veggie Stir Fry', portions: 3, id: '2'},
  ],
  caloriesPerDay: 500,
  carbsPerDay: 275,
  fatPerDay: 125,
  proteinPerDay: 100,
  weeklyCost: 70,
};

const secondShoppingList: ShoppingList = {
  id: '1',
  name: 'Vegetarian Plan',
  rating: 4.7,
  ratingsAmount: 150,
  recipes: [
    {name: 'Veggie Pasta', portions: 2, id: '3'},
    {name: 'Tofu Stir Fry', portions: 3, id: '4'},
  ],
  caloriesPerDay: 450,
  carbsPerDay: 300,
  fatPerDay: 150,
  proteinPerDay: 100,
  weeklyCost: 60,
};
const thirdShoppingList: ShoppingList = {
  id: '2',
  name: 'High Protein',
  rating: 4.8,
  ratingsAmount: 200,
  recipes: [
    {name: 'Chicken Breast', portions: 2, id: '5'},
    {name: 'Steak Stir Fry', portions: 3, id: '6'},
  ],
  caloriesPerDay: 500,
  carbsPerDay: 200,
  fatPerDay: 100,
  proteinPerDay: 200,
  weeklyCost: 80,
};

const fourthShoppingList: ShoppingList = {
  id: '3',
  name: 'Low Carb Plan',
  rating: 4.6,
  ratingsAmount: 180,
  recipes: [
    {name: 'Salmon Salad', portions: 2, id: '7'},
    {name: 'Beef Stir Fry', portions: 3, id: '8'},
  ],
  caloriesPerDay: 400,
  carbsPerDay: 100,
  fatPerDay: 200,
  proteinPerDay: 100,
  weeklyCost: 70,
};

const fifthShoppingList: ShoppingList = {
  id: '4',
  name: 'Vegan Plan',
  rating: 4.7,
  ratingsAmount: 210,
  recipes: [
    {name: 'Vegan Pasta', portions: 2, id: '9'},
    {name: 'Tofu Stir Fry', portions: 3, id: '10'},
  ],
  caloriesPerDay: 450,
  carbsPerDay: 300,
  fatPerDay: 150,
  proteinPerDay: 100,
  weeklyCost: 65,
};

const sixthShoppingList: ShoppingList = {
  id: '5',
  name: 'Low Carb',
  rating: 4.5,
  ratingsAmount: 300,
  recipes: [
    {name: 'Chicken Salad', portions: 2, id: '11'},
    {name: 'Steak and Veggies', portions: 3, id: '12'},
  ],
  caloriesPerDay: 500,
  carbsPerDay: 50,
  fatPerDay: 200,
  proteinPerDay: 150,
  weeklyCost: 75,
};

const seventhShoppingList: ShoppingList = {
  id: '6',
  name: 'High Protein',
  rating: 4.8,
  ratingsAmount: 250,
  recipes: [
    {name: 'Turkey and Rice', portions: 2, id: '13'},
    {name: 'Fish and Quinoa', portions: 3, id: '14'},
  ],
  caloriesPerDay: 600,
  carbsPerDay: 200,
  fatPerDay: 100,
  proteinPerDay: 200,
  weeklyCost: 80,
};

const eighthShoppingList: ShoppingList = {
  id: '7',
  name: 'Balanced Diet',
  rating: 4.6,
  ratingsAmount: 350,
  recipes: [
    {name: 'Chicken and Pasta', portions: 2, id: '15'},
    {name: 'Beef and Potatoes', portions: 3, id: '16'},
  ],
  caloriesPerDay: 550,
  carbsPerDay: 150,
  fatPerDay: 150,
  proteinPerDay: 150,
  weeklyCost: 70,
};

export const forYouLists = [
  firstShoppingList,
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
