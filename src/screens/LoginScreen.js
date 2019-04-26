import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import  MyButton  from '../components/MyButton';
import colors from '../config/colors';
import  FormTextInput  from '../components/FormTextInput';
import imageLogo from '../assets/loginicon.png';

interface State {
    email: String;
    password: String;
}

export class LoginScreen extends Component<{}, State> {

    static navigationOptions = {
    title: "Login"
  }

    state: State = {
        email: "",
        password: ""
    };

    hanldeLogin = (email, password) => {
        
        console.log("Login button clicked");
        console.log("Username: "+this.state.email);
        console.log("Password: "+this.state.password);

        if(this.state.email == "admin" && this.state.password == "admin") {
            //alert("Logged in successfully.");
            console.log("Logged in successfully.");
            this.props.navigation.navigate('HomeScreen')
        
        } else {
            alert("Incorrect username and password");
        }
    };

    handleEmailChange = (email) => {
        this.setState({email: email});
    };

    handlePasswordChange = (password) => {
        this.setState({password: password});
    };

    render() {
        
        return (
            <View style={styles.container}>

                <Image source={imageLogo} style={styles.logo}/>

                <View style={styles.form}>
                    <FormTextInput
                        value={this.state.email}
                        onChangeText={this.handleEmailChange}
                        placeholder={"Username"} />


                    <FormTextInput
                        value={this.state.password}
                        onChangeText={this.handlePasswordChange}
                        placeholder={"Password"}
                    />

                    <MyButton
                        label={"Click to Login"}
                        onPress={this.hanldeLogin} />
                </View>
            </View>
        );
    }

}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: colors.LIGHTGRAY3,
        alignItems: "center",
        justifyContent: "space-between"
    },
    logo: {
        flex: 1,
        width: 100,
        height: 100,
        resizeMode: "contain",
        alignSelf: "center",
    },
    form: {
        flex: 2,
        justifyContent: "flex-start",
        width: "90%",
    },
});
