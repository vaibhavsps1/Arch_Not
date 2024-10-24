import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { fontFamily } from './src/utils/fonts';
import { useNavigation } from '@react-navigation/native';
import { faker } from '@faker-js/faker';
import ChapterName from './src/components/ChapterName';

const App = () => {
  const navigation = useNavigation();
  var colorArray = [
    '#FF6633',
    '#FFB399',
    '#FF33FF',
    '#FFFF99',
    '#00B3E6',
    '#E6B333',
    '#3366E6',
    '#999966',
    '#99FF99',
    '#B34D4D',
    '#80B300',
    '#809900',
    '#E6B3B3',
    '#6680B3',
    '#66991A',
    '#FF99E6',
    '#CCFF1A',
    '#FF1A66',
    '#E6331A',
    '#33FFCC',
    '#66994D',
    '#B366CC',
    '#4D8000',
    '#B33300',
    '#CC80CC',
    '#66664D',
    '#991AFF',
    '#E666FF',
    '#4DB3FF',
    '#1AB399',
    '#E666B3',
    '#33991A',
    '#CC9999',
    '#B3B31A',
    '#00E680',
    '#4D8066',
    '#809980',
    '#E6FF80',
    '#1AFF33',
    '#999933',
    '#FF3380',
    '#CCCC00',
    '#66E64D',
    '#4D80CC',
    '#9900B3',
    '#E64D66',
    '#4DB380',
    '#FF4D4D',
    '#99E6E6',
    '#6666FF',
  ];

  const SECTIONS = [
    {
      title: 'New Architecture',
      data: Array(5)
        .fill(0)
        .map(() => ({
          title: faker.commerce.productName(),
          description: faker.lorem.lines(2),
          price: faker.commerce.price(),
        })),
    },
    {
      title: 'Pizza',
      data: Array(5)
        .fill(0)
        .map(() => ({
          title: faker.commerce.productName(),
          description: faker.lorem.lines(2),
          price: faker.commerce.price(),
        })),
    },
    {
      title: 'Sushi and rolls',
      data: Array(10)
        .fill(0)
        .map(() => ({
          title: faker.commerce.productName(),
          description: faker.lorem.lines(2),
          price: faker.commerce.price(),
        })),
    },
    {
      title: 'Salads',
      data: Array(10)
        .fill(0)
        .map(() => ({
          title: faker.commerce.productName(),
          description: faker.lorem.lines(2),
          price: faker.commerce.price(),
        })),
    },
    {
      title: 'Dessert',
      data: Array(10)
        .fill(0)
        .map(() => ({
          title: faker.commerce.productName(),
          description: faker.lorem.lines(2),
          price: faker.commerce.price(),
        })),
    },
  ];

  const randColor = () => {
    return Math.floor(Math.random() * 30);
  };

  console.log('this is rand color --', randColor());

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: 'space-evenly',
        }}>
        <View
          style={{
            paddingHorizontal: 30,
            borderWidth: 1,
            height: 200,
            backgroundColor: colorArray[randColor()],
          }}>
          <Text style={{ color: 'black', fontFamily: fontFamily.fira_bold }}>
            CHAPTER 1: New Architecture in depth
          </Text>
          <Text style={{ fontFamily: fontFamily.fira_regular }}>
            - Codegen (Native Code Generator){'\n'}- JSI (JavaScript Interface)
            {'\n'}- Hermes Engine (New JS compiler){'\n'}- Turbo Modules (New
            Native Modules){'\n'}- Fabric (New Rendering Engine){'\n'}- Yoga
            (Cross platform layout engine){'\n'}
          </Text>
          <ChapterName screenName={'Home'} chapter={'New Architecture'} />
        </View>
        <View
          style={{
            paddingHorizontal: 30,
            borderWidth: 1,
            flexGrow: 1,
            backgroundColor: colorArray[randColor()],
          }}>
          <Text style={{ color: 'black', fontFamily: fontFamily.fira_bold }}>
            CHAPTER 2: Debugging, Profiling & Advanced Optimization
          </Text>
          <Text style={{ fontFamily: fontFamily.fira_regular }}>
            - iOS & Android Dev Menu{'\n'}- Chrome Dev Tools{'\n'}- Performance
            Monitor - FPS (Frame Per Second){'\n'}- React Native four Threads
            {'\n'}- Flipper for JS Context tracking{'\n'}- Profiling iOS by
            Xcode Instruments{'\n'}- Android Profiler in Android Studio{'\n'}
          </Text>
          <ChapterName screenName={'Home'} chapter={'Debug Opti'} />
        </View>
        <View
          style={{
            paddingHorizontal: 30,
            borderWidth: 1,
            flexGrow: 1,
            backgroundColor: colorArray[randColor()],
          }}>
          <Text style={{ color: 'black', fontFamily: fontFamily.fira_bold }}>
            CHAPTER 3: Component (JS) Testing by RNTL with Jest setup
          </Text>
          <Text style={{ fontFamily: fontFamily.fira_regular }}>
            - Brief intro with all types of RN testing{'\n'}
            - React Native Testing Library (RNTL) details{'\n'}
            - JEST setup & all it's config{'\n'}
    - API => Render(): “queries”, “update", “debug"{'\n'}
    - API => UserEvent(){'\n'}
    - API => FireEvent(){'\n'}
    - API => WaitFor(){'\n'}
    - API => Mocking(): "jest.fn()" & "jest.mock()"{'\n'}
            - Host & Composite components in RN{'\n'}
          </Text>
          <ChapterName screenName={'Home'} chapter={'Testing'} />
        </View>
        <View
          style={{
            paddingHorizontal: 30,
            borderWidth: 1,
            flexGrow: 1,
            backgroundColor: colorArray[randColor()],
          }}>
          <Text style={{ color: 'black', fontFamily: fontFamily.fira_bold }}>
            CHAPTER 4: Hermes & Static Hermes
          </Text>
          <Text style={{ fontFamily: fontFamily.fira_regular }}>
            - Bundle Release{'\n'}
            - Relation between Bundle & Hermes{'\n'}
            - Hermes Bytecode (.hbc){'\n'}
            - How to enable Hermes ?{'\n'}
            - Oversure is Hermes working or not ?{'\n'}
            - Enabling Hermes in Old RN Versions{'\n'}
            - Static Hermes{'\n'}
          </Text>
          <ChapterName screenName={'Home'} chapter={'Hermes Engine'} />
        </View>
        <View
          style={{
            paddingHorizontal: 30,
            borderWidth: 1,
            flexGrow: 1,
            backgroundColor: colorArray[randColor()],
          }}>
          <Text style={{ color: 'black', fontFamily: fontFamily.fira_bold }}>
            CHAPTER 5: How to Enable New Architecture
          </Text>
          <Text style={{ fontFamily: fontFamily.fira_regular }}>
            - Development ENV to Enable New Architecture{'\n'}
            - Enable Hermes Instruction{'\n'}
            - Npx Commands for Android{'\n'}
            - Npx Commands for iOS{'\n'}
            - Confirm New Architecture in action{'\n'}
          </Text>
          <ChapterName screenName={'Home'} chapter={'New Arch'} />
        </View>
        <View
          style={{
            paddingHorizontal: 30,
            borderWidth: 1,
            flexGrow: 1,
            backgroundColor: colorArray[randColor()],
          }}>
          <Text style={{ color: 'black', fontFamily: fontFamily.fira_bold }}>
            CHAPTER 6: Performance Optimization
          </Text>
          <Text style={{ fontFamily: fontFamily.fira_regular }}>
            - Use New Architecture{'\n'}
            - FlatList/ SectionList for List Performance{'\n'}
            - Unnecessary Console{'\n'}
            - Cache mechanism{'\n'}
            - Image resize, Cache Image & Fast loading Image{'\n'}
            - Schedule Animation & Native driver{'\n'}
            - Coding standard{'\n'}
            - Hermes Engine{'\n'}
            - Reselect with Redux{'\n'}
            - Monitor Memory usage{'\n'}
            - Fast Navigation{'\n'}
          </Text>
          <ChapterName screenName={'Home'} chapter={'Performance Opti'} />
        </View>
        <View
          style={{
            paddingHorizontal: 30,
            borderWidth: 1,
            flexGrow: 1,
            backgroundColor: colorArray[randColor()],
          }}>
          <Text style={{ color: 'black', fontFamily: fontFamily.fira_bold }}>
            CHAPTER 7: Virtualization (List of Items) Optimization
          </Text>
          <Text style={{ fontFamily: fontFamily.fira_regular }}>
            - {'<VirtualizedList/>'} optimization{'\n'}
            - {'<FlatList/>'} optimization{'\n'}
            - {'<SectionList/>'} optimization{'\n'}
            - {'<ScrollView/>'} with Virtualization props{'\n'}

          </Text>
          <ChapterName screenName={'Home'} chapter={'List Optim'} />
        </View>
        <View
          style={{
            paddingHorizontal: 30,
            borderWidth: 1,
            flexGrow: 1,
            backgroundColor: colorArray[randColor()],
          }}>
          <Text style={{ color: 'black', fontFamily: fontFamily.fira_bold }}>
            CHAPTER 8: FlashList (Cell Re-Cycling) Optimization
          </Text>
          <Text style={{ fontFamily: fontFamily.fira_regular }}>
            - Details about “RecyclerListView”{'\n'}
            - Why Cell ReCycling ?{'\n'}
            - Difference between "Blank Cell" & "Cell Recycling"{'\n'}
            - FlashList Implementation{'\n'}
            - All important props of FlashList{'\n'}
            - Check Performance of your FlashList{'\n'}
            - Reduce "Blank Space" techniques{'\n'}
            - How to Migrate from "FlatList" to "FlashList" ?{'\n'}
          </Text>
          <ChapterName screenName={'Home'} chapter={'New Arch'} />
        </View>
        <View
          style={{
            paddingHorizontal: 30,
            borderWidth: 1,
            flexGrow: 1,
            backgroundColor: colorArray[randColor()],
          }}>
          <Text style={{ color: 'black', fontFamily: fontFamily.fira_bold }}>
            CHAPTER 9: Nested Virtualization & Component Call (Anti Pattern)
          </Text>
          <Text style={{ fontFamily: fontFamily.fira_regular }}>
            - Nested VirtualizedLists Error{'\n'}
            - Anti Pattern Reason{'\n'}
            - SOLUTION code{'\n'}
            - -------------------{'\n'}
            - Component Call => Functional way{'\n'}
            - Component Call => React way{'\n'}
            - Functional way creates silent ERROR!{'\n'}
            - Error analysis{'\n'}
            - Rules of React Hooks (Violation){'\n'}
            - Error Solution{'\n'}
          </Text>
          <ChapterName screenName={'Home'} chapter={'New Arch'} />
        </View>
        <View
          style={{
            paddingHorizontal: 30,
            borderWidth: 1,
            flexGrow: 1,
            backgroundColor: colorArray[randColor()],
          }}>
          <Text style={{ color: 'black', fontFamily: fontFamily.fira_bold }}>
            CHAPTER 10: IN APP PURCHASE (iOS & Android)
          </Text>
          <Text style={{ fontFamily: fontFamily.fira_regular }}>
            - Basic Flow of Payment Gateway{'\n'}
            - Sandbox Testing{'\n'}
            - How GOOGLE IAP & iOS IAP works ?{'\n'}
            - RevenueCat SDK{'\n'}
            - Implementation instruction (iOS & Android){'\n'}
          </Text>
          <ChapterName screenName={'Home'} chapter={'New Arch'} />
        </View>
        <View
          style={{
            paddingHorizontal: 30,
            borderWidth: 1,
            flexGrow: 1,
            backgroundColor: colorArray[randColor()],
          }}>
          <Text style={{ color: 'black', fontFamily: fontFamily.fira_bold }}>
            CHAPTER 11: Higher Order Component, PROPS & Custom Hooks
          </Text>
          <Text style={{ fontFamily: fontFamily.fira_regular }}>
            - Higher Order Component (HOC) pattern{'\n'}
            - Render Props pattern{'\n'}
            - Custom Hooks{'\n'}
            - Lifting state to Parent Component{'\n'}
            - When custom Hooks are better than HOC?{'\n'}
            - Custom Hooks replaced "Render props pattern"{'\n'}
          </Text>
          <ChapterName screenName={'HOC'} chapter={'HOC&PROP'} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({});
