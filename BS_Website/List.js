import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';


class List extends Component {
    state = {
        events: [
           {
              id: 0,
              name: 'Sample - Mixer',
              date: '09/13/21',
              desc: 'Place holder event description',
           },
           {
              id: 1,
              name: 'Guest Speaker',
              date: '09/29/21',
              desc: '',
           },
           {
              id: 2,
              name: '1st General Meeting',
              date: '10/15/21',
              desc: '',
           },
           {
              id: 3,
              name: 'Game Night',
              date: '11/03/21',
              desc: '',
           }
        ]
    }

    displayDesc = (item) => {
        alert(item.desc)
    }

     render() {
        return (
           <View>
              {
                 this.state.events.map((item, index) => (
                    <TouchableOpacity
                       key = {item.id}
                       style = {styles.container}
                       onPress = {() => this.displayDesc(item)}>
                       <Text style = {styles.text}>
                          {item.name}     {item.date}
                       </Text>
                    </TouchableOpacity>
                 ))
              }
           </View>
        )
    }
}

export default List
  
  const styles = StyleSheet.create ({
     container: {
        padding: 15,
        marginTop: 5,
        backgroundColor: '#f2dc18',
        alignItems: 'center',
     },
     text: {
        color: '#4f603c'
     },
});