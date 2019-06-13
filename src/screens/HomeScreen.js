import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import colors from '../config/colors';

export default class HomeScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading : true
        }

    }

    componentDidMount() {
        console.log('Calling api...')
        return fetch('https://facebook.github.io/react-native/movies.json')
        .then((response)=>response.json())
        .then((responseJson) => {
                this.setState({
                    isLoading: false,
                    dataSource: responseJson.movies,
                    
                }, function() {
                    console.log('success::', responseJson.movies);
                });
        })
        .catch((error) => {
            console.error(error)
        });
    }

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
            <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => <Text>{item.title}, {item.releaseYear}</Text>}
          keyExtractor={({id}, index) => id}
        />
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
