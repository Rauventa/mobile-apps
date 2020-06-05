import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

const Form = ({ onFormChange, onFormSubmit, dataToChange }) => {
  const [name, setName] = useState(dataToChange ? dataToChange.name : '');
  const [surname, setSurname] = useState(dataToChange ? dataToChange.surname : '');
  const [phone, setPhone] = useState(dataToChange ? dataToChange.phone : '');

  const onAddHandler = () => {
    if (name && surname && phone) {
      onFormSubmit(name, surname, phone);
      setName('');
      setSurname('');
      setPhone('');
      onFormChange()
    } else {
      alert('Введите все данные')
    }
  };

  const onBackHandler = () => {
    setName('');
    setSurname('');
    setPhone('');
    onFormChange()
  };

  return (
    <>
      <TextInput
        style={styles.input}
        placeholder="Имя"
        onChangeText={name => setName(name)}
        value={name}
      />
      <TextInput
        style={styles.input}
        placeholder="Фамилия"
        onChangeText={surname => setSurname(surname)}
        value={surname}
      />
      <TextInput
        style={styles.input}
        placeholder="Телефон"
        onChangeText={phone => setPhone(phone)}
        value={phone}
      />
      <View style={styles.buttons}>
        <TouchableOpacity
            style={styles.buttonAdd}
            onPress={onAddHandler}
        >
          <Text style={styles.buttonText}>Добавить</Text>
        </TouchableOpacity>
        <TouchableOpacity
            style={styles.buttonBack}
            onPress={onBackHandler}
        >
          <Text style={styles.buttonText}>Назад</Text>
        </TouchableOpacity>
      </View>
    </>
  )
};

const styles = StyleSheet.create({
  input: {
    borderBottomColor: '#505050',
    borderBottomWidth: 1,
    padding: 15,
    color: 'grey',
    fontSize: 16
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    flex: 1,
  },
  buttonAdd: {
    backgroundColor: '#4CAF50',
    padding: 15,
    flex: 1
  },
  buttonBack: {
    backgroundColor: '#f44336',
    padding: 15,
    flex: 1
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center'
  }
});

export default Form
