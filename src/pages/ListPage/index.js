import React, {useEffect, useState} from 'react';
import { View, Text, Button, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import database from "../../config/firebaseconfig";
import { getFirestore, collection, getDocs, doc, deleteDoc } from 'firebase/firestore/lite';
import {FontAwesome} from "@expo/vector-icons"

import styles from "./style"

export default function ListPage(){
  const navigation = useNavigation();
  const [list, setList]= useState([])
  

  async function deleteItem(id){
    const colRef = doc(database, 'List', id)
    await deleteDoc(colRef);
  }

  useFocusEffect(()=>{
    async function getList(){
      const list = []
      const listCol = collection(database, 'List');
      const listSnapshot = await getDocs(listCol);
      listSnapshot.forEach(element => {
        list.push({...element.data(), id: element.id})
      });
      setList(list)
    }
    getList();

  })

  return (
      <View style={styles.container}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={list}
          renderItem={( { item } )=>{
             return(
            <View style={styles.List}>
              <Text
                style={styles.DescriptionList}
                onPress={()=>
                  navigation.navigate("ItemDetails",{
                    id: item.id,
                    name: item.name,
                    description: item.description,
                    quantity: item.quantity
                  })
                }
              >
              {item.name}  
              </Text>  
              <TouchableOpacity
                style={styles.deleteItem}
                onPress={() => {
                  deleteItem(item.id)
                }}
              >
                <FontAwesome
                  name="trash"
                  size={23}
                  color="#FF8888"
                />
              </TouchableOpacity>
   
            </View>
            )
          }}
        />
        <TouchableOpacity
          style={styles.buttonNewItem}
          onPress={() => navigation.navigate("AddItem")}
        >
          <Text style={styles.iconButton}>+</Text>
        </TouchableOpacity>
      </View>
  )

};

// export default ListPage;
