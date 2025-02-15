import React, {useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import Text from '../Text.tsx';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import ShoppingList from '../../types/ShoppingList.ts';
import {useTheme} from '../../utils/theme/context.tsx';

interface ListViewProps {
  list: ShoppingList;
  screen: string;
  navigation?: NavigationProp<ParamListBase>;
}
const ListView: React.FC<ListViewProps> = ({list, screen, navigation}) => {
  const [bookmark, setBookmark] = useState('bookmark-outline');
  const {colors} = useTheme();
  return (
    <ScrollView
      style={[styles.sugListsScrollview, {borderColor: colors.onBackground}]}
      contentContainerStyle={styles.sugListsContentContainer}>
      <View style={styles.listViewView}>
        <Text style={styles.sugListsTitle} text={list.name} />
        {screen === 'Suggested Lists' ? (
          <View style={styles.listViewContainer}>
            <Ionicons
              name={bookmark}
              size={24}
              color={colors.onBackground}
              style={styles.listViewBookmark}
              onPress={() => {
                setBookmark(
                  bookmark === 'bookmark' ? 'bookmark-outline' : 'bookmark',
                );
              }}
            />
            <Text
              style={styles.sugListsSelectText}
              onPress={() => {
                if (navigation) {
                  navigation.navigate('Order');
                  dispatch(setSelectedList(Number(list.id)));
                }
              }}
              text={'Order'}
            />
          </View>
        ) : null}
      </View>
      {list.items.map(item => (
        <Text
          style={[styles.sugListsRecipeList, {color: colors.onBackground}]}
          text={`${item.servings} ${item.name}`}
        />
      ))}
      <View style={styles.listViewContainer}>
        <View>
          <Text
            style={[
              styles.sugListsNutrientsSubheading,
              {color: colors.tertiary},
            ]}
            text={'Nutrients/Day'}
          />
          <Text
            style={[styles.sugListsNutrientsText, {color: colors.secondary}]}
            text={`Calories: ${list.calories}`}
          />
          <Text
            style={[styles.sugListsNutrientsText, {color: colors.secondary}]}
            text={`Carbs: ${list.totalCarb}g`}
          />
          <Text
            style={[styles.sugListsNutrientsText, {color: colors.secondary}]}
            text={`Fat: ${list.totalFat}g`}
          />
          <Text
            style={[styles.sugListsNutrientsText, {color: colors.secondary}]}
            text={`Protein: ${list.protein}g`}
          />
        </View>
        <View>
          <Text
            style={[styles.sugListsPriceSubheading, {color: colors.tertiary}]}
            text={'Price'}
          />
          <Text
            style={[styles.sugListsPriceText, {color: colors.secondary}]}
            text={`$${list.cost} / Week`}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  listViewBookmark: {margin: 8, marginRight: 10, fontSize: 20},
  listViewContainer: {flexDirection: 'row'},
  listViewView: {flexDirection: 'row', justifyContent: 'space-between'},
  sugListsContentContainer: {
    justifyContent: 'center',
    alignContent: 'center',
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
  sugListsScrollview: {
    height: 200,
    borderWidth: 2,
    marginBottom: 5,
    marginTop: 20,
  },
  sugListsTitle: {
    margin: 10,
  },
});

export default ListView;
