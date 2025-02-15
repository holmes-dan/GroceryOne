import React from 'react';
import {StyleSheet, FlatList, View} from 'react-native';

import FriendBanner from '../banners/Friend.tsx';
import {useTheme} from '../../utils/theme/context.tsx';

const items = Array.from({length: 10}, (_, index) => `Item ${index + 1}`);
const FriendsTab = () => {
  const {colors} = useTheme();
  return (
    <View style={[styles.aLayer, {backgroundColor: colors.background}]}>
      <FlatList
        data={items}
        keyExtractor={item => item}
        renderItem={() => <FriendBanner />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  aLayer: {flex: 1, flexDirection: 'column'},
});

export default FriendsTab;
