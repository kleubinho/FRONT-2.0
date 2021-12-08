import * as React from 'react';
import { Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { styles } from '../css/Style';

export default function Home() {

    return(
        <View style={styles.container}>
            <MaterialCommunityIcons name="menu" size={24} color="black" />
            <Text>Edilson</Text>
        </View>
    )
}