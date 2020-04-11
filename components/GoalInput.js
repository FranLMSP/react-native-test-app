import React, { useState } from 'react'
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native'
const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState('')

  const goalInputHandler = enteredText => {
    setEnteredGoal(enteredText)
  }

  const addGoalHandler = () => {
    props.onAddGoal(enteredGoal)
    setEnteredGoal('')
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={ styles.inputContainer } >
        <TextInput
          placeholder="Type something"
          style={ styles.input }
          onChangeText={ goalInputHandler }
          value={ enteredGoal }
        />
        <View style={ styles.buttonContainer }>
          <View style={ styles.button }>
            <Button title="CANCEL" color="red" onPress={ props.onCancel } />
          </View>
          <View style={ styles.button }>
            <Button title="ADD" onPress={ addGoalHandler } />
          </View>
        </View>
      </View>
    </Modal>

  )
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%'
  },
  button: {
    width: '40%'
  },
  input: {
    borderColor: 'blue',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    width: '80%'
  }
})

export default GoalInput
