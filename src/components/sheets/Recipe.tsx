import React, {useRef} from 'react';
import {Image, StyleSheet} from 'react-native';
import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';

import Text from '../Text.tsx';
import {useTheme} from '../../utils/theme/context.tsx';

const RecipeSheet = ({item, snapIndex, setSnapIndex}) => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const {colors} = useTheme();

  return (
    <BottomSheet
      backgroundStyle={{backgroundColor: colors.surface}}
      enablePanDownToClose={true}
      handleIndicatorStyle={{backgroundColor: colors.onBackground}}
      ref={bottomSheetRef}
      index={snapIndex}
      onClose={() => setSnapIndex(-1)}
      snapPoints={['88%']}>
      <BottomSheetView style={styles.bLayer}>
        <Text
          level={4}
          text={item.name}
          style={[styles.viewList, {color: colors.primary}]}
        />
        <Image style={styles.image} source={{uri: item.uri}} />
      </BottomSheetView>
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  aLayer: {
    alignItems: 'center',
    padding: 36,
  },
  image: {
    alignSelf: 'center',
    width: 300,
    height:300,
  },
  nextItem: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: -35,
  },
  viewList: {
    fontWeight: 'bold',
  },
});

export default RecipeSheet;
