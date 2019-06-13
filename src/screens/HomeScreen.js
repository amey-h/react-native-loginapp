import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import colors from '../config/colors';

export default class HomeScreen extends Component {

    static navigationOptions = {
    title: "Home",
    headerStyle: {
      backgroundColor: colors.SDKRED,
    },
    headerTintColor: colors.WHITE
  }

    render() {
        const { state, navigate } = this.props.navigation;
        return (
            <View style = {styles.container}>
            <Text style={styles.textStyle}> Welcome {this.props.navigation.state.params.userNameVal} .This is HomeScreen </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: colors.BACKGCOLOR,
        alignItems: "center",
        justifyContent: "center"
    }, 
    textStyle: {
        color: colors.MAINTEXTCOLOR,
        textAlign: "center",
        height: 20,
        alignItems: "center"
    }
});
