import React, { useState } from 'react'
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native'
const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState('')

  const goalInputHandler = enteredText => {
    setEnteredGoal(enteredText)
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
        <Button title="ADD" onPress={ props.onAddGoal.bind(this, enteredGoal) } />
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
  input: {
    borderColor: 'blue',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    width: '80%'
  }
})

export default GoalInput
