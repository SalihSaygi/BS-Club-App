import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Linking,
  // SafeAreaView, //never used
  // FlatList, //never used
} from 'react-native';
import { Button, Divider } from 'react-native-elements';
import logo from './assets/logo.png';
import List from './List.js';
import Desc from './Desc.js';
// import OppDesc from './OppDesc.js'; //did not need it
import Sam from './assets/sam_am.jpeg';
import Kinza from './assets/Kinza_Tauseef.jfif';
import Angie from './assets/Angei_Nechikat.jpg';
import Valerie from './assets/Valerie_Okafor.jfif';
import Melanie from './assets/Melanie_Baeza.jpeg';

export default function Marketing() {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <Image
        source={logo}
        style={{ height: 150, width: 350, alignSelf: 'center' }}
      />
      <Text style={styles.header}>OPERATIONS DEPARTMENT</Text>
      <Text style={styles.DepDesc}>
        This department shall be led by the Chief Operations Officer. The
        objective of this department is to plan, coordinate, and execute
        successful events. This department is responsible for coordinating
        Departments and resources outside of the Society for the execution of
        events of the Society.
      </Text>

      {/*<Text style= {styles.header}> *Rotating Images Place Holder*</Text>*/}

      <View style={styles.subBox}>
        <Text style={styles.subheader}> Upcoming Events </Text>
      </View>
      <List />

      <View style={styles.subBox}>
        <Text style={styles.subheader}> Forms and Surveys </Text>
      </View>
      <View style={styles.test}>
        <View style={{ flex: 1 }}>
          <Text style={{ padding: 10, textAlign: 'center' }}>
            Haunted House 2021 Survey
          </Text>
        </View>
        <View style={{ flex: 1 }}>
          <Button
            title="Link"
            onPress={() => {
              Linking.openURL('https://forms.gle/3hVu1WuSsRYSwgp39');
            }}
          />
        </View>
      </View>
      <View style={styles.test}>
        <View style={{ flex: 1 }}>
          <Text style={{ padding: 10, textAlign: 'center' }}>
            Photo Booth Form
          </Text>
        </View>
        <View style={{ flex: 1 }}>
          <Button title="Link" onPress={() => alert('Link Unavaliable')} />
        </View>
      </View>

      <View style={styles.subBox}>
        <Text style={styles.subheader}> Opportunities </Text>
      </View>

      <Text>COMING SOON!</Text>

      <View style={styles.subBox}>
        <Text style={styles.subheader}> Resources </Text>
      </View>

      <Text>COMING SOON!</Text>

      <View style={styles.subBox}>
        <Text style={styles.subheader}> Department Members </Text>
      </View>

      <Text style={styles.memberNames}>Jianna San Gabriel</Text>
      <Divider
        style={{
          backgroundColor: 'black',
          height: 1.5,
          marginBottom: 10,
          maxWidth: 150,
          marginLeft: 138,
        }}
      />

      {/*uncomment and place imported image in the 'source' attribute below*/}
      <Image
        source={Sam}
        style={{
          width: 305,
          height: 320,
          alignSelf: 'center',
          marginBottom: 5,
          borderColor: 'black',
          borderWidth: 2,
        }}
      />

      <View style={styles.memberDescipritons}>
        <Desc
          position="Chief Operations Officer"
          major="Management and Business Economics"
          year="3rd Year, Junior"
          hasMinor={false}
        />
        <Button
          title="LinkedIn"
          style={{ paddingTop: 5 }}
          onPress={() =>
            Linking.openURL(
              'https://www.linkedin.com/in/jianna-san-gabriel-8a61281b0/'
            )
          }
        />
      </View>
      <Text style={styles.memberNames}>Angie Nechikat</Text>
      <Divider
        style={{
          backgroundColor: 'black',
          height: 1.5,
          marginBottom: 10,
          maxWidth: 175,
          marginLeft: 125,
        }}
      />
      {/*uncomment and place imported image in the 'source' attribute below*/}

      <Image
        source={Angie}
        style={{
          width: 305,
          height: 320,
          alignSelf: 'center',
          marginBottom: 5,
          borderColor: 'black',
          borderWidth: 2,
        }}
      />

      <View style={styles.memberDescipritons}>
        <Desc
          position="Vice President of Operations"
          major="Management and Business Economics"
          year="2nd Year, Sophomore"
          hasMinor={false}
        />
        <Button
          title="LinkedIn"
          style={{ paddingTop: 5 }}
          onPress={() => alert('https://www.linkedin.com/in/angel-nechikat/')}
        >
          LinkedIn
        </Button>
      </View>
      <Text style={styles.memberNames}>Valerie Okafor</Text>
      <Divider
        style={{
          backgroundColor: 'black',
          height: 1.5,
          marginBottom: 10,
          maxWidth: 175,
          marginLeft: 125,
        }}
      />
      {/*uncomment and place imported image in the 'source' attribute below*/}

      <Image
        source={Valerie}
        style={{
          width: 305,
          height: 320,
          alignSelf: 'center',
          marginBottom: 5,
          borderColor: 'black',
          borderWidth: 2,
        }}
      />

      <View style={styles.memberDescipritons}>
        <Desc
          position="Inventory Analyst"
          major="Management and Business Economics"
          year="3rd Year, Junior"
          hasMinor={false}
        />
        <Button
          title="LinkedIn"
          style={{ paddingTop: 5 }}
          onPress={() => alert('https://www.linkedin.com/in/valerieokafor/')}
        >
          LinkedIn
        </Button>
      </View>
      <Text style={styles.memberNames}>Kinza Tauseef</Text>
      <Divider
        style={{
          backgroundColor: 'black',
          height: 1.5,
          marginBottom: 10,
          maxWidth: 175,
          marginLeft: 125,
        }}
      />
      {/*uncomment and place imported image in the 'source' attribute below*/}

      <Image
        source={Kinza}
        style={{
          width: 305,
          height: 320,
          alignSelf: 'center',
          marginBottom: 5,
          borderColor: 'black',
          borderWidth: 2,
        }}
      />

      <View style={styles.memberDescipritons}>
        <Desc
          position="Society Event Planner"
          major="Management and Business Economics"
          year="3rd Year, Junior"
          hasMinor={false}
        />
        <Button
          title="LinkedIn"
          style={{ paddingTop: 5 }}
          onPress={() => alert('https://www.linkedin.com/in/kinza-tauseef/')}
        >
          LinkedIn
        </Button>
      </View>
      <Text style={styles.memberNames}>Melanie Baeza</Text>
      <Divider
        style={{
          backgroundColor: 'black',
          height: 1.5,
          marginBottom: 10,
          maxWidth: 175,
          marginLeft: 125,
        }}
      />
      {/*uncomment and place imported image in the 'source' attribute below*/}

      <Image
        source={Melanie}
        style={{
          width: 305,
          height: 320,
          alignSelf: 'center',
          marginBottom: 5,
          borderColor: 'black',
          borderWidth: 2,
        }}
      />

      <View style={styles.memberDescipritons}>
        <Desc
          position="Itinerary Analyst"
          major="Management and Business Economics"
          year="4th Year, Senior"
          hasMinor={false}
        />
        <Button
          title="LinkedIn"
          style={{ paddingTop: 5 }}
          onPress={() => alert('https://www.linkedin.com/in/angel-nechikat/')}
        >
          LinkedIn
        </Button>
      </View>
      <Text
        style={{
          textAlign: 'center',
          color: '#b0aea9',
          paddingBottom: 5,
          paddingTop: 5,
        }}
      >
        Business Society @ UCM
      </Text>
      <StatusBar style="auto" />
    </ScrollView>
  );
}

const Bold = ({ children }) => (
  <Text style={{ fontWeight: 'bold' }}>{children}</Text>
);

const styles = StyleSheet.create({
  test: {
    flexDirection: 'row',
    padding: 10,
    textAlign: 'center',
  },
  subheader: {
    color: '#800000',
    fontSize: 25,
    textAlign: 'center',
    padding: 10,
  },
  subBox: {
    textAlign: 'center',
    borderBottomColor: 'black',
    borderBottomWidth: 1.5,
    marginTop: 15,
    marginBottom: 10,
  },
  header: {
    color: '#800000',
    fontSize: 25,
    textAlign: 'center',
    padding: 20,
  },
  DepDesc: {
    color: 'white',
    fontSize: 15,
    paddingBottom: 20,
    paddingTop: 10,
    textAlign: 'center',
    backgroundColor: '#ad0707',
    borderColor: 'black',
    borderRadius: 0,
    borderWidth: 3,
  },
  memberNames: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: 30,
    borderBottomWidth: 2,
    borderBottomColor: 'black',
  },
  memberDescipritons: {
    padding: 10,
    backgroundColor: '#ebeced',
    textAlign: 'center',
    borderBottomColor: 'black',
    borderTopColor: 'black',
    borderBottomWidth: 3,
    borderTopWidth: 3,
  },
  descText: {
    padding: 5,
  },
  descLink: {
    padding: 5,
    textDecorationLine: 'underline',
    textDecorationColor: 'lightblue',
    textDecorationStyle: 'double',
    alignSelf: 'center',
  },
});
