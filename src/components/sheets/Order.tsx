import React, {useRef} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';

import Text from '../Text.tsx';
import {useTheme} from '../../utils/theme/context.tsx';

const OrderSheet = ({snapIndex, setSnapIndex}) => {
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
        <TouchableOpacity onPress={() => setSnapIndex(-1)}>
          <Text
            level={4}
            text="Order"
            style={[styles.viewList, {color: colors.primary}]}
          />
        </TouchableOpacity>
      </BottomSheetView>
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  aLayer: {alignItems: 'center', padding: 36},
  viewList: {fontWeight: 'bold', padding: 20, paddingTop: 0},
});

export default OrderSheet;
