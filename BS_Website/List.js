import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

class List extends Component {
  state = {
    events: [
      {
        id: 0,
        name: 'Annual Hounted House',
        date: '10/28/21 -10/29/21',
        desc: '@ The Den',
      },
    ],
  };

  displayDesc = item => {
    alert(item.desc);
  };

  render() {
    return (
      <View>
        {this.state.events.map((item, index) => (
          <TouchableOpacity
            key={item.id}
            style={styles.container}
            onPress={() => this.displayDesc(item)}
          >
            <Text style={styles.text}>
              {item.name} {item.date}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  }
}

export default List;

const styles = StyleSheet.create({
  container: {
    padding: 15,
    marginTop: 5,
    backgroundColor: '#f2dc18',
    alignItems: 'center',
  },
  text: {
    color: '#4f603c',
  },
});
