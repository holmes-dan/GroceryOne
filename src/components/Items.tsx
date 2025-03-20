import React, {useState} from 'react';
import {ScrollView, StyleSheet, TouchableOpacity, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import RecipeEditor from './recipes/Editor.tsx';
import Text from './Text.tsx';
import {useTheme} from '../utils/theme/context.tsx';

const Items = ({icons, items, name, setSnapIndex, setSelectedItem}) => {
  const {colors} = useTheme();
  const [addItem, setAddItem] = useState(true);

  return (
    <View style={styles.itemsContainer}>
      <Text
        level={2}
        text={name}
        style={[styles.subheader, {color: colors.primary}]}
      />
      {addItem ? (
        <TouchableOpacity
          onPress={() => setAddItem(false)}
          style={[styles.addItemButton, {backgroundColor: colors.primary}]}>
          <Text
            level={1}
            text={`+ Add ${name}`}
            style={[styles.addText, {color: colors.background}]}
          />
        </TouchableOpacity>
      ) : (
        <View style={styles.addRecipeRow}>
          {Object.entries(icons).map(([icon, onPress]) => (
            <Ionicons
              key={icon}
              name={icon}
              onPress={onPress ? onPress : () => setAddItem(true)}
              style={[styles.icons, {color: colors.primary}]}
            />
          ))}
        </View>
      )}
      <ScrollView showsVerticalScrollIndicator={false} style={styles.scroller}>
        <View style={styles.recipesView}>
          {items.items.map(item => (
            <RecipeEditor
              key={item.id}
              name={item.name}
              initialServings={item.servings}
              onPress={() => {
                setSelectedItem(item);
                setSnapIndex(1);
              }}
              uri={item.uri}
              style={styles.recipeEditor}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  addText: {
    fontSize: 16,
  },
  itemsContainer: {
    alignItems: 'flex-start',
    height: '50%',
    width: '47%',
  },
  icons: {
    fontSize: 30,
    marginTop: 16,
    marginBottom: 6,
    marginHorizontal: 5,
  },
  addItemButton: {
    alignItems: 'center',
    fontSize: 16,
    marginBottom: 6,
    marginTop: -5,
    paddingTop: 8,
    paddingHorizontal: 10,
    width: '100%',
  },
  addRecipeRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: -16,
    width: '100%',
  },
  recipesView: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  scroller: {
    width: '100%',
  },
  recipeEditor: {
    marginBottom: 10,
  },
  subheader: {textDecorationLine: 'underline'},
});

export default Items;
