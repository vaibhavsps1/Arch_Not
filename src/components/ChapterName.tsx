import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {fontFamily} from '../utils/fonts';

const ChapterName = (props: any) => {
  const navigation = useNavigation<any>();
  const {screenName, chapter}: any = props;

  return (
    <View style={{flex: 1}}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(screenName);
        }}
        style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
        <Text
          style={{
            fontFamily: fontFamily.fira_bold,
            borderWidth: 1,
            padding: 5,
          }}>
          {chapter}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ChapterName;

const styles = StyleSheet.create({});
