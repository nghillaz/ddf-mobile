/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AsyncStorage,
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ListView,
    TextInput,
    Button,
    Alert,
    ScrollView,
    Navigator,
    TouchableOpacity
} from 'react-native';

const onButtonPress = () => { Alert.alert('Button has been pressed!'); };

class LoginScreen extends Component {
    render() {
        return (
            <View style={styles.loginContent}>
                <Text style={styles.fieldLabel}>Username</Text>
                <TextInput style={styles.textBox}/>
                <Text style={styles.fieldLabel}>Password</Text>
                <TextInput style={styles.textBox}/>
                <Button onPress={() => {
                        this.props.navigator.push({title:'Edit Query Screen'})
                    }} title='Login' accessibilityLabel='Login'/>
            </View>
        );
    }
}

class EditQueryScreen extends Component {
    render() {
        return (
            <ScrollView style={styles.listContent}>
                <Text style={styles.fieldLabel}>Text</Text>
                <TextInput style={styles.textBox}/>
                <Text style={styles.fieldLabel}>Time</Text>
                <TextInput style={styles.textBox}/>
                <Text style={styles.fieldLabel}>Location</Text>
                <TextInput style={styles.textBox}/>
                <Text style={styles.fieldLabel}>Sorting</Text>
                <TextInput style={styles.textBox}/>
            </ScrollView>
        );
    }
}

var NavigationBarRouteMapper = {
    LeftButton: function(route, navigator, index, navState) {
        if (index === 0) {
            return null;
        }

        var previousRoute = navState.routeStack[index - 1];
        return (
            <TouchableOpacity
                onPress={() => navigator.pop()}>
                <Text>
                    Back
                </Text>
            </TouchableOpacity>
        );
    },

    RightButton: function(route, navigator, index, navState) {
        return (
            <TouchableOpacity
                onPress={() => navigator.push({title:'lol'})}>
                <Text>
                    Next
                </Text>
            </TouchableOpacity>
        );
    },

    Title: function(route, navigator, index, navState) {
        return (
            <Text>
                {route.title}
            </Text>
        );
    }
}

var AwesomeProject = React.createClass({
    render() {
        return (
            <Navigator
                initialRoute = {{title: 'Sign In'}}
                navigationBar = {<Navigator.NavigationBar routeMapper={NavigationBarRouteMapper}/>}
                renderScene = {(route, navigator) => {
                    if (route.title === 'Sign In') {
                        return (<LoginScreen navigator={navigator}/>)
                    }
                    else if (route.title === 'Edit Query Screen') {
                        return (<EditQueryScreen navigator={navigator}/>)
                    }
                    else {
                        return (null)
                    }
                }}
            />
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
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        paddingBottom: 4,
        paddingTop: 4,
        borderBottomWidth: 0.5,
        borderBottomColor: '#BCBCBC',
        backgroundColor: '#F8F8F8',
        marginBottom: 3,
        alignSelf: 'stretch'
    },
    titleBarText: {
        color: '#161616',
        textAlign: 'center',
        fontSize: 24,
        flexGrow: 1
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
    listContent: {
        flex: 1,
        alignSelf: 'stretch'
    },
    textBox: {
        alignSelf: 'stretch'
    }
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
