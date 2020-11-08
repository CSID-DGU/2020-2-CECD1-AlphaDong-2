import React, {Component} from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet
} from 'react-native';
export default class CameraScreen extends Component{

    render(){
        return (
            <View style={styles.container}>
                <Text>Camera thing</Text>
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