import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import {dummyRecipes, dummyItems} from '../assets/lists/Shopping.ts';
import Items from '../components/Items.tsx';
import LogoBanner from '../components/banners/Logo.tsx';
import OrderButton from '../components/buttons/Order.tsx';
import OrderSheet from '../components/sheets/Order.tsx';
import RecipeSheet from '../components/sheets/Recipe.tsx';
import Text from '../components/Text.tsx';
import {useTheme} from '../utils/theme/context.tsx';

interface Home {
  navigation: NavigationProp<ParamListBase>;
}

const macros = ['Calories: 500', 'Carbs: 276g', 'Fat: 125g', 'Price: $70'];

const Home: React.FC<BuilderProps> = ({navigation}) => {
  const {colors} = useTheme();
  const recipeIcons = {
    ['search']: () => navigation.navigate('Discover'),
    ['bookmark']: () => navigation.navigate('Account'),
    // ['camera']: () => navigation.navigate('Camera'),
    ['arrow-back']: null,
  };
  const itemIcons = {
    ['search']: null,
    ['bookmark']: () => navigation.navigate('Account'),
    ['arrow-back']: null,
  };
  const [orderSnapIndex, orderSetSnapIndex] = useState(-1);
  const [itemSnapIndex, itemSetSnapIndex] = useState(-1);
  const [selectedItem, setSelectedItem] = useState(dummyRecipes.items[0]);
  console.log(dummyRecipes.items[0].id);
  return (
    <SafeAreaView style={[styles.aLayer, {backgroundColor: colors.background}]}>
      <GestureHandlerRootView style={styles.aLayer}>
        <LogoBanner />
        <View style={styles.builderContainer}>
          <Items
            icons={recipeIcons}
            items={dummyRecipes}
            name="Recipes"
            setSnapIndex={itemSetSnapIndex}
            setSelectedItem={setSelectedItem}
          />
          <View style={styles.buffer} />
          <Items
            icons={itemIcons}
            items={dummyItems}
            name="Items"
            setSnapIndex={itemSetSnapIndex}
            setSelectedItem={setSelectedItem}
          />
          <View style={styles.macrosContainer}>
            <Text
              level={2}
              text="Macros"
              style={[styles.macrosTitle, {color: colors.primary}]}
            />
            <View style={styles.macrosItems}>
              {macros.map(insight => (
                <Text
                  text={insight}
                  style={[styles.macrosText, {color: colors.primary}]}
                />
              ))}
            </View>
          </View>
        </View>
        <OrderButton
          navigation={navigation}
          leftIcon="compass"
          leftOnPress={() => navigation.navigate('Discover')}
          orderOnPress={() => orderSetSnapIndex(1)}
          rightIcon="person"
          rightOnPress={() => navigation.navigate('Account')}
        />
        <OrderSheet
          snapIndex={orderSnapIndex}
          setSnapIndex={orderSetSnapIndex}
        />
        <RecipeSheet
          item={selectedItem}
          snapIndex={itemSnapIndex}
          setSnapIndex={itemSetSnapIndex}
        />
      </GestureHandlerRootView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  aLayer: {flex: 1},
  buffer: {width: '5%'},
  builderContainer: {
    alignSelf: 'center',
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 20,
  },
  subheader: {textDecorationLine: 'underline'},
  macrosContainer: {height: '50%', justifyContent: 'center', width: '100%'},
  macrosText: {fontSize: 16, marginBottom: 10, paddingHorizontal: 10},
  macrosTitle: {textDecorationLine: 'underline', alignSelf: 'center'},
  macrosItems: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginTop: 20,
  },
});

export default Home;
