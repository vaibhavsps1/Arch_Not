import React from 'react';
import {Modal, View, Button, Animated, Dimensions} from 'react-native';
import GestureHandler, {
  PinchGestureHandler,
} from 'react-native-gesture-handler';

const {width, height} = Dimensions.get('screen');

const ImageModal = ({modalVisible, setModalVisible, url}: any) => {
  const scale = new Animated.Value(1);

  const onPinchEvent = Animated.event([{nativeEvent: {scale}}], {
    useNativeDriver: true,
  });

  const onPinchStateChange = (event: any) => {
    if (event.nativeEvent.oldState === GestureHandler?.State.ACTIVE) {
      Animated.spring(scale, {
        toValue: 1,
        useNativeDriver: true,
        bounciness: 1,
      }).start();
    }
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(false);
      }}>
      <View style={styles.centeredView}>
        <Button onPress={() => setModalVisible(false)} title={'close'} />
        <View style={styles.modalContent}>
          <PinchGestureHandler
            onGestureEvent={onPinchEvent}
            onHandlerStateChange={onPinchStateChange}>
            <Animated.Image
              source={url}
              resizeMode="contain"
              style={[styles.imageStyle, {transform: [{scale: scale}]}]}
            />
          </PinchGestureHandler>
        </View>
      </View>
    </Modal>
  );
};

const styles = {
  centeredView: {
    borderWidth: 1,
    alignSelf: 'center',
    backgroundColor: 'white',
    height: 650,
    width: 380,
    marginTop: 100,
  },
  modalContent: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    height: 600,
    width: 400,
  },
};

export default ImageModal;
