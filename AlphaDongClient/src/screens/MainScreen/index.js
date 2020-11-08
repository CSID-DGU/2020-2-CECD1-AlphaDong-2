import React, {Component} from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet
} from 'react-native';
export default class MainScreen extends Component{

    render(){
        return (
            <View style={styles.container}>
                <Text>Main thing</Text>
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