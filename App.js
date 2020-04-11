import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList
} from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('')

  const [courseGoals, setCourseGoals] = useState([])

  const goalInputHandler = enteredText => {
    setEnteredGoal(enteredText)
  }

  const addGoalHandler = () => {
    setCourseGoals(currentGoals => [...courseGoals, { key: Math.random().toString(), value: enteredGoal }])
  }

  return (
    <View style={ styles.screen }>

      <View style={ styles.inputContainer }
      >
        <TextInput
          placeholder="Type something"
          style={ styles.input }
          onChangeText={ goalInputHandler }
          value={ enteredGoal }
        />
        <Button title="ADD" onPress={ addGoalHandler } />
      </View>

      <FlatList
        data={ courseGoals }
        renderItem={ itemData => (
            <View style={ styles.listItem }>
              <Text>{ itemData.item.value }</Text>
            </View>
        )}
      >
        { courseGoals.map((goal) =>
            <View key={ goal } style={ styles.listItem }>
              <Text>{ goal }</Text>
            </View>
          )
        }
      </FlatList>

    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  input: {
    borderColor: 'blue',
    borderWidth: 1,
    marginTop: 10,
    marginBottom: 10,
    padding: 10,
    width: '80%'
  },
  listItem: {
    marginVertical: 10,
    padding: 10,
    backgroundColor:'#ccc',
    borderColor: 'black',
    borderWidth: 1
  }
});
