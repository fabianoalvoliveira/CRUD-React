import React, { useState } from "react"
import {View, Text, TextInput, TouchableOpacity}  from "react-native"
import { getFirestore, collection, getDocs, doc, setDoc } from 'firebase/firestore/lite';
import database from "../../config/firebaseconfig";

import styles from "./style"

export default function ItemDetailsPage({navigation, route}){

  const [descriptionEdit, setDescriptionEdit] = useState(route.params.description)
  const [nameEdit, setNameEdit] = useState(route.params.name)
  const [quantityEdit, setQuantityEdit] = useState(route.params.quantity)
  const idItem = route.params.id

  async function editItem(description, name, quantity, id){
    const colRef = doc(database, "List", id) 
    await setDoc(colRef, {
      description: description,
      name: name,
      quantity: quantity
    });
    navigation.navigate("List");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Name</Text>
      <TextInput
      style={styles.input}
      placeholder="Ex: shampoo"
      onChangeText={setNameEdit}
      value={nameEdit}
      />
      <Text style={styles.label}>Description</Text>
      <TextInput
      style={styles.input}
      placeholder="Ex: da marca dove"
      onChangeText={setDescriptionEdit}
      value={descriptionEdit}
      />
      <Text style={styles.label}>Quantity</Text>
      <TextInput
      style={styles.input}
      placeholder="Ex: 3"
      onChangeText={setQuantityEdit}
      value={quantityEdit}
      />
      <TouchableOpacity 
        style={styles.buttonNewItem}
        onPress={()=>{
          editItem(descriptionEdit, nameEdit, quantityEdit,idItem)
        }}
      >
        <Text style={styles.iconButton}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

// export default ItemDetailsPage;
