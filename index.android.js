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
    TouchableOpacity,
    Navigator
} from 'react-native';
import NavigationBar from 'react-native-navbar';

const onButtonPress = () => { Alert.alert('Button has been pressed!'); };

class LoginScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <NavigationBar
                    style={styles.titleBar}
                    title={{title: 'Sign In'}}/>
                <View style={styles.loginContent}>
                    <Text style={styles.fieldLabel}>Username</Text>
                    <TextInput style={styles.textBox}/>
                    <Text style={styles.fieldLabel}>Password</Text>
                    <TextInput style={styles.textBox}/>
                    <Button onPress={() => {
                            this.props.navigator.push({component: EditQueryScreen})
                        }} title='Login' accessibilityLabel='Login'/>
                </View>
            </View>
        );
    }
}

class EditQueryScreen extends Component {
    rmb(route, navigator, index, navState) {
        return (
            <TouchableOpacity
                onPress={() => navigator.push({title:'lol', component: null})}>
                <Text>
                    Next
                </Text>
            </TouchableOpacity>
        );
    }

    render() {
        const leftButtonConfig = {
            title: 'Back',
            handler: () => this.props.navigator.pop()
            //handler: () => this.props.navigator.push({
            //    component: EditQueryScreen
            //})
        }

        return (
            <View style={styles.container}>
                <NavigationBar
                    style={styles.titleBar}
                    title={{title: 'Edit Query'}}
                    leftButton={leftButtonConfig}/>
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
            </View>
        );
    }
}

var AwesomeProject = React.createClass({
    renderScene(route, navigator) {
        return <route.component route={route} navigator={navigator} />;
    },

    render() {
        return (
            <Navigator
                initialRoute={{component: LoginScreen}}
                renderScene={this.renderScene} />
        );
    }
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0F0F2'
    },
    titleBar: {
        flex: 1,
        paddingBottom: 4,
        paddingTop: 4,
        borderBottomWidth: 0.5,
        borderBottomColor: '#BCBCBC',
        backgroundColor: '#F8F8F8',
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
