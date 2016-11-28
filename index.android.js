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
    render() {
        const leftButtonConfig = {
            title: 'Back',
            handler: () => this.props.navigator.pop()
        }

        const rightButtonConfig = {
            title: 'Run',
            handler: () => this.props.navigator.push({
               component: QueryResultsScreen
            })
        }

        return (
            <View style={styles.container}>
                <NavigationBar
                    style={styles.titleBar}
                    title={{title: 'Edit Query'}}
                    leftButton={leftButtonConfig}
                    rightButton={rightButtonConfig}/>
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

class QueryResultsScreen extends Component {
    render() {
        const leftButtonConfig = {
            title: 'Back',
            handler: () => this.props.navigator.pop()
        }

        const listData = [
            {label:'Burrito Shack'},
            {label:'Los Favoritos'},
            {label:'More Burritos'},
            {label:'Artesian Organic Burritos'},
        ]

        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
        const dataSource = ds.cloneWithRows(listData)

        return (
            <View style={styles.container}>
                <NavigationBar
                    style={styles.titleBar}
                    title={{title: 'Edit Query'}}
                    leftButton={leftButtonConfig}/>
                <ListView
                    style={styles.listContent}
                    dataSource={dataSource}
                    renderRow={(rowData) => <Text>{rowData.label}</Text>}/>
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
