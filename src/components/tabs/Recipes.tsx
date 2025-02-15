import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';

import {dummyRecipes} from '../../assets/lists/Shopping.ts';
import RecipeEditor from '../recipes/Editor.tsx';
import {useTheme} from '../../utils/theme/context.tsx';

const Recipes = ({setSnapIndex, setSelectedItem}) => {
  const {colors} = useTheme();
  return (
    <View
      style={[styles.quarterContainer, {backgroundColor: colors.background}]}>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.scroller}>
        <View style={styles.recipesView}>
          {dummyRecipes.items.map((item, index) => (
            <RecipeEditor
              key={index}
              name={item.name}
              initialServings={item.servings}
              onPress={() => {
                setSnapIndex(1);
                setSelectedItem(prev => prev + 1);
              }}
              size={180}
              style={styles.recipeEditor}
              uri={item.uri}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  addText: {fontSize: 16},
  quarterContainer: {alignItems: 'flex-start', flex: 1, padding: 10},
  icons: {
    fontSize: 25,
    marginTop: 16,
    marginBottom: 10,
    marginHorizontal: 5,
  },
  recipesView: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  scroller: {width: '100%'},
  recipeEditor: {marginBottom: 10},
});

export default Recipes;
