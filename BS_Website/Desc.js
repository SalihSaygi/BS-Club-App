import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';


class Desc extends Component {
    constructor(props){
        super(props);

        this.state = {
            position: this.props.position,
            major: this.props.major,
            minor: this.props.minor,
            year: this.props.year,
        }
    }

    render(){
        return(
        <View>
            <Text style={styles.descText}><Bold>Position: </Bold>{this.props.position}</Text>
            <Text style={styles.descText}><Bold>Major: </Bold>{this.props.major}</Text>
            <Text style={styles.descText}><Bold>Minor: </Bold>{this.props.minor}</Text>
            <Text style={styles.descText}><Bold>Year: </Bold>{this.props.year}</Text>
        </View>
        )

    }
}
const Bold = ({ children }) => <Text style={{ fontWeight: 'bold' }}>{children}</Text>

const styles = StyleSheet.create({
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
});


export default Desc
