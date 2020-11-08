import React, {Component} from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet
} from 'react-native';
export default class SettingScreen extends Component{

    render(){
        return (
            <View style={styles.container}>
                <Text>Setting thing</Text>
                <Button
                    title='back'
                    onPress={() => this.props.navigation.goBack()} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
})