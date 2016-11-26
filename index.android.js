/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ListView,
    TextInput,
    Button,
    Alert
} from 'react-native';

const onButtonPress = () => { Alert.alert('Button has been pressed!'); };

class LoginScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.titleBar}>Login</Text>
                <View style={styles.loginContent}>
                    <Text style={styles.fieldLabel}>Username</Text>
                    <TextInput style={styles.textBox}/>
                    <Text style={styles.fieldLabel}>Password</Text>
                    <TextInput style={styles.textBox}/>
                    <Button onPress={onButtonPress} title="Login" accessibilityLabel="Login"/>
                </View>
            </View>
        );
    }
}

class EditQueryScreen extends Component {
    render() {
        return (
            <Text>
                This is a seperate component!!
            </Text>
        );
    }
}

class TabularResultsScreenOverview extends Component {
    render() {
        return (
            <View>

            </View>
        );
    }
}

class MapResultsScreenOverview extends Component {
    render() {
        return (
            <View>

            </View>
        );
    }
}

class TabularResultsScreenIndividual extends Component {
    render() {
        return (
            <View>
                
            </View>
        );
    }
}

class MapResultsScreenIndividual extends Component {
    render() {
        return (
            <View>
                
            </View>
        );
    }
}

let index = 0;

var AwesomeProject = React.createClass({
    render() {
        return (
            <LoginScreen/>
        );
    }
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#F0F0F2'
    },
    titleBar: {
        textAlign: 'center',
        fontSize: 24,
        paddingBottom: 4,
        paddingTop: 4,
        color: '#161616',
        borderBottomWidth: 0.5,
        borderBottomColor: '#BCBCBC',
        backgroundColor: '#F8F8F8',
        marginBottom: 3,
        alignSelf: 'stretch'
    },
    fieldLabel: {
        fontSize: 18
    },
    loginContent: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'stretch'
    },
    textBox: {
        alignSelf: 'stretch'
    }
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
