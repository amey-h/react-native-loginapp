import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import colors from '../config/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        padding: 10,
        margin: 10,
        backgroundColor: colors.SILVER,
        elevation: 2
    },
    container_text: {
        flex: 1,
        flexDirection: 'column',
        marginLeft: 12,
        justifyContent: 'center',
    },
    title: {
        fontSize: 17,
        color: '#000'
    },
    description: {
        fontSize: 14,
        fontStyle: 'italic'
    },

});

const CustomRow = ({title, description}) => (
    <View styles={styles.container}>

        <View styles={styles.container_text}>
            <Text styles={styles.title}> {title} </Text>

            <Text styles={styles.description}> {description} </Text>
        </View> 
    
    </View>
);

export default CustomRow;