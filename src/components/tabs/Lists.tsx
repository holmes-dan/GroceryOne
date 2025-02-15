import React, {ReactNode} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {NavigationProp, ParamListBase} from '@react-navigation/native';

import ListView from '../list/View.tsx';
import ShoppingList from '../../types/ShoppingList.ts';

interface ListsTabProps {
  header?: ReactNode;
  sugLists: ShoppingList[];
  navigation: NavigationProp<ParamListBase>;
}
const ListsTab: React.FC<ListsTabProps> = ({header, navigation, sugLists}) => {
  return (
    <View style={styles.orderView}>
      <ScrollView style={styles.sugListsView}>
        {header}
        {sugLists.map(ShoppingListProps => (
          <ListView
            list={ShoppingListProps}
            screen="Suggested Lists"
            navigation={navigation}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  sugListsView: {
    padding: 25,
  },
});

export default ListsTab;
