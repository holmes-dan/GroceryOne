import React, {useRef, useState} from 'react';
import {Alert, Button, SafeAreaView, StyleSheet, View} from 'react-native';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import {RNCamera} from 'react-native-camera';

import {useTheme} from '../utils/theme/context.tsx';

const Camera = ({navigation}) => {
  const cameraRef = useRef(null);
  const [isCameraReady, setIsCameraReady] = useState(false);
  const {colors} = useTheme();

  const takePicture = async () => {
    if (cameraRef.current) {
      const options = {quality: 0.5, base64: true};
      const data = await cameraRef.current.takePictureAsync(options);
      Alert.alert('Picture taken!', `Image URI: ${data.uri}`);
    }
  };

  return (
    <SafeAreaView style={[styles.aLayer, {backgroundColor: colors.background}]}>
      <FontAwesome6
        name="angle-left"
        style={[styles.icon, {color: colors.primary}]}
        onPress={() => {
          navigation.navigate('Home');
        }}
      />
      <RNCamera
        ref={cameraRef}
        style={styles.preview}
        type={RNCamera.Constants.Type.back}
        flashMode={RNCamera.Constants.FlashMode.off}
        onCameraReady={() => setIsCameraReady(true)}
        onMountError={error => {
          console.error('Camera error:', error);
        }}
      />
      <View style={styles.buttonContainer}>
        <Button
          title="Take Picture"
          onPress={takePicture}
          disabled={!isCameraReady}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  aLayer: {flex: 1},
  buttonContainer: {
    flex: 0.1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  icon: {paddingLeft: 20, fontSize: 30},
  preview: {flex: 1, justifyContent: 'flex-end', alignItems: 'center'},
});

export default Camera;
