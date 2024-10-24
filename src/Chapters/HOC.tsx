import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import SectionList from 'react-native-tabs-section-list';
import {HOCdata} from '../utils/HOCtext';
import ImageModal from '../components/ImageModal';

const HOC = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [url, setUrl] = useState(null);

  const SECTIONS = [
    {
      title: 'HOC intro',
      data: [
        {title: HOCdata[0].title, description: HOCdata[0]?.description1},
        {title: null, description: HOCdata[0]?.description2},
      ],
    },
    {
      title: 'Overview',
      data: [
        {title: HOCdata[1].title, description: HOCdata[1]?.description},
        {
          title: 'HOC',
          description: HOCdata[2]?.description,
          image: HOCdata[2]?.image,
        },
        {
          title: HOCdata[3]?.title,
          description: HOCdata[3]?.description,
          image: HOCdata[3]?.image,
        },
        {
          title: HOCdata[4]?.title,
          description: HOCdata[4]?.description,
          image: HOCdata[4]?.image,
        },
      ],
    },
    {
      title: 'Higher Order Component',
      data: [
        {title: HOCdata[5].title, description: HOCdata[5]?.description},
        {
          title: null,
          description: HOCdata[5]?.description1,
          image: HOCdata[5]?.image,
        },
        {
          title: null,
          description: HOCdata[6]?.description,
          image: HOCdata[6]?.image,
        },
        {
          title: null,
          description: HOCdata[7]?.description,
          image: null,
        },
      ],
    },
    {
      title: 'Composing (Apply Composing on HOC)',
      data: [
        {
          title: HOCdata[8].title,
          description: HOCdata[8]?.description,
          image: HOCdata[8]?.image,
        },
      ],
    },
    {
      title: 'Hooks (Replacing HOC)',
      data: [
        {
          title: HOCdata[9].title,
          description: HOCdata[9]?.description,
          image: HOCdata[9]?.image,
        },
      ],
    },
    {
      title: 'HOC or Hooks?',
      data: [
        {
          title: HOCdata[8].title,
          description: HOCdata[8]?.description,
          image: HOCdata[8]?.image,
        },
      ],
    },
  ];

  const toggleBtn = (image: any) => {
    setModalVisible(!modalVisible);
    setUrl(image);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Text> HOC, Render props & Custom Hooks</Text>
        <SectionList
          sections={SECTIONS}
          keyExtractor={item => item.title}
          stickySectionHeadersEnabled={false}
          scrollToLocationOffset={50}
          tabBarStyle={styles.tabBar}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          renderTab={({title, isActive}) => (
            <View
              style={[
                styles.tabContainer,
                {borderBottomWidth: isActive ? 1 : 0},
              ]}>
              <Text
                style={[
                  styles.tabText,
                  {color: isActive ? '#090909' : '#9e9e9e'},
                ]}>
                {title}
              </Text>
            </View>
          )}
          renderSectionHeader={({section}) => (
            <View>
              <View style={styles.sectionHeaderContainer} />
              <Text style={styles.sectionHeaderText}>{section.title}</Text>
            </View>
          )}
          renderItem={({item}) => (
            <View style={styles.itemContainer}>
              <View style={styles.itemRow}>
                <Text style={styles.itemTitle}>{item.title}</Text>
              </View>
              <Text style={styles.itemDescription}>{item.description}</Text>
              <TouchableOpacity
                style={{flex: 1, alignItems: 'center'}}
                onPress={() => toggleBtn(item?.image)}>
                {item?.image && (
                  <Image
                    source={item?.image}
                    style={{height: 300}}
                    resizeMode="contain"
                  />
                )}
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
      <ImageModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        url={url}
      />
    </SafeAreaView>
  );
};

export default HOC;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f6f6',
  },
  tabBar: {
    backgroundColor: '#fff',
    borderBottomColor: '#f4f4f4',
    borderBottomWidth: 1,
  },
  tabContainer: {
    borderBottomColor: '#090909',
  },
  tabText: {
    padding: 15,
    color: '#9e9e9e',
    fontSize: 18,
    fontWeight: '500',
  },
  separator: {
    height: 0.5,
    width: '96%',
    alignSelf: 'flex-end',
    backgroundColor: '#eaeaea',
  },
  sectionHeaderContainer: {
    height: 10,
    backgroundColor: '#f6f6f6',
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
    borderBottomColor: '#f4f4f4',
    borderBottomWidth: 1,
  },
  sectionHeaderText: {
    color: '#010101',
    backgroundColor: '#fff',
    fontSize: 23,
    fontWeight: 'bold',
    paddingTop: 25,
    paddingBottom: 5,
    paddingHorizontal: 15,
  },
  itemContainer: {
    paddingVertical: 20,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
  },
  itemTitle: {
    flex: 1,
    fontSize: 20,
    color: '#131313',
  },
  itemPrice: {
    fontSize: 18,
    color: '#131313',
  },
  itemDescription: {
    marginTop: 10,
    color: 'black',
    fontSize: 16,
  },
  itemRow: {
    // flexDirection: 'row',
  },
  centeredView: {
    borderWidth: 1,
    alignSelf: 'center',
    backgroundColor: 'white',
    height: 650,
    width: 380,
    marginTop: 100,
  },
});
