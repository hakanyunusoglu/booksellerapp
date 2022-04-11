import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Icons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

export default function CartIcon() {
    const navigation = useNavigation();
  return (
    <View>
    <TouchableOpacity onPress={()=> navigation.navigate("Carts")} style={{marginRight:15}}>
      <Text><Icons name="ios-cart-outline" size={24} color="black" /></Text>
      </TouchableOpacity>
    </View>
  )
}