import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import colors from '../config/colors';

interface Props {
    label: String;
    onPress: () => void;
}

export default class MyButton extends Component<Props> {

    render() {

        const { label, onPress } = this.props;

        return (
            <TouchableOpacity
                style={styles.container}
                onPress={onPress}>
                <Text
                    style={styles.textStyle}>Click to Login</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
        borderRadius: 4,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: "rgba(255, 255, 255, 0.7)",
        backgroundColor: colors.BUTTONBLUE,
    },
    textStyle: {
        color: colors.WHITE,
        textAlign: "center",
        height: 20
    }
});