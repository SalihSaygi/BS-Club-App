import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Linking, SafeAreaView, FlatList} from 'react-native';
import { Button, Divider } from 'react-native-elements';
import logo from "./assets/logo.png";
import List from './List.js';
import Desc from './Desc.js';
import OppDesc from './OppDesc.js';
import Sam from './assets/sam_am.jpeg';


export default function Marketing() {

  return (
      <ScrollView contentContainerStyle={{ flexGrow: 1}}>
        <Image source={logo} style = {{height: 150, width:350, alignSelf: 'center'}} />
        <Text style = {styles.header}>MARKETING DEPARTMENT</Text>
        <Text style={styles.DepDesc}>
            Marketing is the creative department of Business Society! Marketing is responsible for the promotion and reputation of the Society. We are currently focusing on growing our social media through audience engagement and virtual promotion.
        </Text>

        {/*<Text style= {styles.header}> *Rotating Images Place Holder*</Text>*/}

        <View style={styles.subBox}>
            <Text style= {styles.subheader}> Upcoming Events </Text>
        </View>
        <List />

        <View style={styles.subBox}>
            <Text style= {styles.subheader}> Forms and Surveys </Text>
        </View>
        <View style={styles.test}>
          <View style={{ flex: 1 }}>
              <Text style={{padding:10, textAlign: 'center'}}>Form 1</Text>
          </View>
          <View style={{ flex: 1}}>
            <Button title = "Link" onPress={()=> alert("Link Unavaliable")}/>
          </View>
        </View>
        <View style={styles.test}>
          <View style={{ flex: 1 }}>
              <Text style={{padding:10, textAlign: 'center'}}>Survey</Text>
          </View>
          <View style={{ flex: 1}}>
            <Button title = "Link" onPress={()=> alert("Link Unavaliable")}/>
          </View>
        </View>

        <View style={styles.subBox}>
            <Text style= {styles.subheader}> Opportunities </Text>
        </View>

        <OppDesc 
          name='Internship'
          desc = 'Coming Soon Fall 2021'
          linkAv = {false}
          link = ''
        />
        

        <View style={styles.subBox}>
            <Text style= {styles.subheader}> Resources </Text>
        </View>
        <OppDesc 
          name='School Resources'
          desc = 'Coming Soon Fall 2021'
          linkAv = {false}
          link = ''
        />
        <OppDesc 
          name='Buisness Society Peer Assistance'
          desc = 'Coming Soon Fall 2021'
          linkAv = {true}
          link = 'sample link'
        />


        <View style={styles.subBox}>
            <Text style= {styles.subheader}> Department Members </Text>
        </View>

        <Text style = {styles.memberNames}>Samantha Ammari</Text>
        <Divider style={{backgroundColor: 'black', height:1.5, marginBottom:10, maxWidth:150, marginLeft: 138}}/>

        {/*uncomment and place imported image in the 'source' attribute below*/}
        <Image source = {Sam} style = {{width:305, height: 320, alignSelf: 'center', marginBottom:5, borderColor: 'black', borderWidth: 2}}/>

        <View style={styles.memberDescipritons}>
            <Desc 
              position='Chief Marketing Officer' 
              major='Management and Business Economics' 
              year = '2nd Year, Sophomore'
              hasMinor = {false}
            />
            <Button title = "LinkedIn" style={{paddingTop: 5}} onPress={()=> Linking.openURL('https://www.linkedin.com/in/samantha-ammari/')}/>
        </View>
        <Text style = {styles.memberNames}>Lesley</Text>
        <Divider style={{backgroundColor: 'black', height:1.5, marginBottom:10, maxWidth:175, marginLeft: 125}}/>
        {/*uncomment and place imported image in the 'source' attribute below*/}
        {/*
        <Image source = {vanessa} style = {{width:305, height: 320, alignSelf: 'center', marginBottom:5, borderColor: 'black', borderWidth: 2}}/>
          */}

        <View style={styles.memberDescipritons}>
            <Desc 
              position='Marketing Department Chair' 
              major='' 
              minor='' 
              year = ''
            />
            <Button title = "LinkedIn" style={{paddingTop: 5}} onPress={()=> alert("LinkedIn Unavaliable")}>LinkedIn</Button>
        </View>
        <Text style={{textAlign:'center', color:'#b0aea9', paddingBottom:5, paddingTop:5}}>Business Society @ UCM</Text>
        <StatusBar style="auto" />
      </ScrollView>
  );
}

const Bold = ({ children }) => <Text style={{ fontWeight: 'bold' }}>{children}</Text>


const styles = StyleSheet.create({
  test:{
    flexDirection: 'row',
    padding: 10,
    textAlign: 'center',
  },
  subheader:{
    color: '#800000',
    fontSize: 25,
    textAlign: 'center',
    padding: 10,
  },
  subBox:{
    textAlign: 'center',
    borderBottomColor: 'black',
    borderBottomWidth: 1.5,
    marginTop: 15,
    marginBottom:10,
  },
  header: {
    color: '#800000',
    fontSize: 25,
    textAlign: 'center',
    padding: 20,
  },
  DepDesc: {
    color: 'white', 
    fontSize:15, 
    paddingBottom:20, 
    paddingTop:10,
    textAlign: 'center',
    backgroundColor: '#ad0707',
    borderColor: 'black',
    borderRadius: 0,
    borderWidth: 3
  },
  memberNames: {
    fontSize:20,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: 30,
    borderBottomWidth:2,
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
