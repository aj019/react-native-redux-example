import React, {Component} from 'react';
import {View, Text, Button, StyleSheet, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {connect} from 'react-redux';
import {add, remove} from '../../actions';
class Todos extends Component {
  constructor() {
    super();
    this.state = {
      inputText: '',
    };
  }

  handleTextChange = e => {
    this.setState({
      inputText: e,
    });
  };

  handleAdd = () => {
    if (this.state.inputText !== '') {
      this.props.addItem(this.state.inputText);
      this.setState({
        inputText: '',
      });
    }
  };

  handleDelete = i => {
    this.props.removeItem(i);
  };

  render() {
    console.log('todos', this.props);
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          value={this.state.inputText}
          onChangeText={this.handleTextChange}
        />
        <Button onPress={this.handleAdd} title="Add"></Button>
        <View style={styles.list_container}>
          {this.props.todos.map((todo, i) => (
            <View style={styles.todo} key={i}>
              <Text style={styles.todoText}>{todo}</Text>
              <Icon.Button
                onPress={() => this.handleDelete(i)}
                name="remove"
                size={20}
                color="#fff"
                backgroundColor="transparent"
                style={{padding: 0}}
              />
            </View>
          ))}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    height: '100%',
    color: '#fff',
    padding: 20,
  },

  list_container: {
    marginTop: 20,
  },
  todo: {
    color: '#fff',
    backgroundColor: '#333',
    padding: 10,
    marginVertical: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  todoText: {
    color: '#fff',
    fontSize: 30,
  },
  input: {
    color: '#fff',
    borderWidth: 2,
    borderColor: '#333',
    marginVertical: 20,
  },
});

const mapDispatchToProps = dispatch => {
  return {
    addItem: data => dispatch(add(data)),
    removeItem: data => dispatch(remove(data)),
  };
};

const mapStateToProps = store => {
  console.log(store);
  return store;
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Todos);
