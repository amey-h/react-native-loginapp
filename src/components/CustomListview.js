import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import CustomRow from './CustomRow';

const CustomListview = ({itemList}) => (

 <View style={styles.container}>

        <FlatList
                data={itemList}
                renderItem={({ item }) => <CustomRow
                    title={item.title}
                    description={item.releaseYear}
                />}
                keyExtractor={({id}, index) => id}
            />

    </View>
);

const styles = StyleSheet.create({

    container : {
        flex: 1,
    }
});

export default CustomListview;