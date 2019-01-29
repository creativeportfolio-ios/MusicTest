import React from 'react';
import { View, Text, StyleSheet, Image, Button, Dimensions, Alert, TouchableOpacity } from 'react-native';

const MusicCellBig = ({item}) => (
    <View style={styles.main} backgroundColor='white' >
        {<Image style={{ height: 240, borderRadius: 10, width: Dimensions.get('window').width - 20, resizeMode: 'cover', position: 'absolute',backgroundColor:'blue' }} source={{uri:item.cover}} />}
        <View style={styles.innermain}>
            <View style={{ height: 25, width: Dimensions.get('window').width - 20, justifyContent: 'space-between', flexDirection: 'row' }}>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 15, height: 40, width: 250, color: 'white', margin: 2, }}>
                    {item.title}</Text>
                </View>
            </View>
        </View>
    </View>
);

const styles = StyleSheet.create({
    main: {
        height: 240,
        width: Dimensions.get('window').width - 20,
        shadowColor: 'white',
        borderRadius: 10,
        margin: 5,
        flexDirection: 'column-reverse'
    },
    innermain: {
        height: 50,
        width: Dimensions.get('window').width - 20,
        borderBottomLeftRadius: 10,
        backgroundColor: 'rgba(85, 81, 83, 0.8)',
        borderBottomRightRadius: 10,
        justifyContent: 'center', alignItems: 'center'


    },
    innermain1: {
        height: 50,
        width: (170 * Dimensions.get('window').width) / 375,
        marginTop: 10
    }
});

export default MusicCellBig;