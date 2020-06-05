import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Form from './Form';

const Contact = ({ id, name, surname, phone, onContactEdit, onContactDelete }) => {
  const [isFormOpened, setIsFormOpened] = useState(false);

  const onFormChange = () => {
    setIsFormOpened(prevState => !prevState)
  };

  const onEditButtonClick = (name, surname, phone) => {
    onContactEdit(id, name, surname, phone)
  };

  return (
    <>
      <View style={styles.contactWrapper}>
        <View style={styles.contact}>
          <View>
            <Text style={styles.name}>{name} {surname}</Text>
            <Text style={styles.phone}>{phone}</Text>
          </View>
          <View style={styles.buttonsGroup}>
            <TouchableOpacity
                style={styles.changeButton}
                onPress={() => onFormChange()}
            >
              <Text style={styles.buttonText}>Изменить</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.deleteButton}
                onPress={() => onContactDelete(id)}
            >
              <Text style={styles.buttonText}>Удалить</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {
        isFormOpened && (
          <Form
            onFormChange={onFormChange}
            onFormSubmit={onEditButtonClick}
            dataToChange={{ name, surname, phone }}
          />
        )
      }
    </>
  )
};

const styles = StyleSheet.create({
  contactWrapper: {
    padding: 15,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  contact: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  name: {
    fontSize: 18,
  },
  phone: {
    color: '#a9a9a9'
  },
  buttonsGroup: {
    flexDirection: 'row'
  },
  changeButton: {
    backgroundColor: '#008CBA',
    padding: 10,
  },
  deleteButton: {
    backgroundColor: '#f44336',
    padding: 10,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center'
  }
});

export default Contact
