import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {NavigationProp, ParamListBase} from '@react-navigation/native';

import ShoppingList from '../types/ShoppingList.ts';
import Text from './Text.tsx';
import {useTheme} from '../utils/theme/context.tsx';

interface ListViewProps {
  list: ShoppingList;
  navigation: NavigationProp<ParamListBase>;
}
const ListView: React.FC<ListViewProps> = ({list, navigation}) => {
  const {colors} = useTheme();
  return (
    <ScrollView
      style={[styles.sugListsScrollview, {borderColor: colors.onBackground}]}
      contentContainerStyle={styles.sugListsContentContainer}>
      <View style={styles.listViewView}>
        <Text style={styles.sugListsTitle} children={list.name} />
        <View style={styles.listViewContainer}>
          <Ionicons
            name={'hammer'}
            size={24}
            color={colors.primary}
            style={styles.listViewBookmark}
            onPress={() => navigation.navigate('ListBuilder')}
          />
          <Text
            style={[styles.sugListsSelectText, {color: colors.primary}]}
            onPress={() => {
              if (navigation) {
                navigation.navigate('Order');
              }
            }}
            children={'Order'}
          />
        </View>
      </View>
      {list.recipes.map(recipe => (
        <Text style={[styles.sugListsRecipeList, {color: colors.secondary}]}>
          {recipe.portions} {recipe.name}
        </Text>
      ))}
      <View style={styles.listViewContainer}>
        <View>
          <Text
            style={[
              styles.sugListsNutrientsSubheading,
              {color: colors.tertiary},
            ]}
            children={'Nutrients/Day'}
          />
          <Text
            style={[styles.sugListsNutrientsText, {color: colors.secondary}]}
            children={`Calories: ${list.calories}`}
          />
          <Text
            style={[styles.sugListsNutrientsText, {color: colors.secondary}]}
            children={`Carbs: ${list.totalCarb}g`}
          />
          <Text
            style={[styles.sugListsNutrientsText, {color: colors.secondary}]}
            children={`Fat: ${list.totalFat}g`}
          />
          <Text
            style={[styles.sugListsNutrientsText, {color: colors.secondary}]}
            children={`Protein: ${list.protein}g`}
          />
        </View>
        <View>
          <Text
            style={[
              styles.sugListsPriceSubheading,
              {color: colors.tertiary},
            ]}
            children={'Price'}
          />
          <Text
            style={[styles.sugListsPriceText, {color: colors.secondary}]}
            children={`$${list.cost} / Week`}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  listViewView: {flexDirection: 'row', justifyContent: 'space-between'},
  sugListsScrollview: {
    height: 200,
    borderWidth: 2,
    marginBottom: 5,
    marginTop: 20,
  },
  sugListsSelectText: {
    marginTop: 5,
    marginRight: 8,
    fontSize: 19,
    textDecorationLine: 'underline',
  },
  listViewContainer: {flexDirection: 'row'},
  sugListsTitle: {
    margin: 10,
  },
  listViewBookmark: {margin: 8, marginRight: 10, fontSize: 20},
  sugListsContentContainer: {
    justifyContent: 'center',
    alignContent: 'center',
  },
  sugListsRecipeList: {
    marginLeft: 10,
    marginBottom: 5,
  },
  sugListsNutrientsSubheading: {
    margin: 10,
  },
  sugListsNutrientsText: {
    marginLeft: 10,
  },
  sugListsPriceSubheading: {
    margin: 50,
  },
  sugListsPriceText: {
    marginLeft: 50,
  },
});

export default ListView;
