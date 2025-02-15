import React, {useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';

import {getRecipe} from '../../assets/lists/Generated.ts';
import {useTheme} from '../../utils/theme/context.tsx';
import RecipeEditor from '../recipes/Editor.tsx';
import SearchBar from '../SearchBar.tsx';

const SearchTab = () => {
  const {colors} = useTheme();
  const [value, setValue] = useState('');
  const [recipes, setRecipes] = useState([]);

  const searchForRecipe = async (query: string) => {
    const recipe = await getRecipe(query, 'main course');
    setRecipes(prevResults => [recipe, ...prevResults]);
  };

  return (
    <View style={[styles.aLayer, {backgroundColor: colors.background}]}>
      <SearchBar
        input={{
          onChangeText: setValue,
          onSubmitEditing: async () => {
            await searchForRecipe(value); // Await the async function
          },
        }}
      />
      <ScrollView style={styles.scrollView}>
        <View style={styles.recipeView}>
          {recipes.length > 0 &&
            recipes[0].map(item => (
              <RecipeEditor
                key={item.id}
                name={item.title}
                initialServings={0}
                onPress={() => {
                  setSnapIndex(1);
                  setSelectedItem(prev => prev + 1);
                }}
                size={180}
                style={styles.editor}
                uri={item.image}
              />
            ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  aLayer: {flex: 1, paddingHorizontal: 5},
  editor: {width: '47%', marginTop: 10},
  recipeView: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginHorizontal: 5,
  },
});

export default SearchTab;
