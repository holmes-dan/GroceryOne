import axios from 'axios';
import {spoonacular} from '../secrets.ts';
import {ShoppingListProps} from './ListsData';

export const getRecipe = async (query: string, type: string) => {
  let returnedRecipe: ShoppingListProps = {
    id: '-1',
    name: '-1',
    rating: -1,
    ratingsAmount: -1,
    recipes: [{id: '-1', name: '-1', portions: -1}],
    cost: -1,
  };
  console.log(spoonacular);
  try {
    const recipe = await axios.get(
      'https://api.spoonacular.com/recipes/complexSearch',
      {
        params: {
          apiKey: spoonacular,
          query: query,
          type: type,
          number: 8,
        },
      },
    );
    recipe.data.results.forEach(item => {
      console.log(item.title);
    });
    console.log('we in 1 ' + recipe.data.results.length);
    return recipe.data.results;
  } catch (error) {
    console.error(error);
    return returnedRecipe;
  }
};
