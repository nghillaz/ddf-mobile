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
  TouchableHighlight,
  ListView
} from 'react-native';
import Button from 'react-native-button';

class DisplayItemsBox extends Component {
    constructor() {
        super();
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = { dataSource: ds.cloneWithRows(['row 1', 'row 2']), };
    }

    render() {
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={(rowData) => <Text>{rowData}</Text>}
            />
        );
    }
}

class ToDoItem extends Component {
    render() {
        return (
            <View style={styles.littlebox}>
                <Text>
                    This is a seperate component!
                </Text>
            </View>
        );
    }
}

class AddItemBar extends Component {
  render() {
    return (
      <View style={styles.additembar}>
        <Button>
            +
        </Button>
      </View>
    );
  }
  
  _handlePress() {
    
  }
}

let index = 0;

var AwesomeProject = React.createClass({
  getInitialState(){
        return { rows: [] }
    },

  _addRow(){
    this.state.rows.push(index++)
    this.setState({ rows: this.state.rows })
  },

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={ this._addRow } style={styles.button}>
            <Text>Add new row</Text>
        </TouchableHighlight>
      </View>
    );
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  littlebox: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF0000',
  },
  additembar: {
    alignItems: 'flex-end',
    backgroundColor: '#FF0000',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
