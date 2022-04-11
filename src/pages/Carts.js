import { View, Text,FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

export default function Carts() {
  function _renderItem(item,index){
    return(
    <View style={{flexDirection:"row",padding:10}}>
    <Image source={{uri:item.imgUrl}} style={styles.image}/>
   <View style={{padding:10}}>
    <Text style={styles.name}>{item.name}</Text>
    <Text style={styles.author}>{item.author}</Text>
    </View>
    <View style={styles.buttonContainer}>
  <TouchableOpacity onPress={()=>console.log("Carttan Silindi")} style={styles.button}>
    <Text style={styles.buttonText}>Remove</Text>
  </TouchableOpacity>
    </View>
    </View>
    )
    }
    function Seperator(){
      <View style={{borderBottomWidth:1,borderBottomColor:"#a9aa9a"}}></View>
    }
  return (
    <View style={styles.container}>
      <FlatList data={data}
      ListEmptyComponent={
      <View style={styles.emptyContainer}>
       <Text styles={styles.emptyText}>Your Cart is Empty!</Text>
       <TouchableOpacity styles={styles.button} onPress={()=>{navigation.navigate("Kitap")}}>
       <Text styles={styles.buttonText}>Go to Books</Text>
       </TouchableOpacity></View>}
       renderItem={({item,index})=>_renderItem(item,index)}
        keyExtractor={(item)=>item.id} ItemSeparatorComponent={Seperator()}
      />
      </View>
  )
}

const styles = StyleSheet.create({
  container:{flex:1, backgroundColor:"#fff"},
  image:{width:100, height:150},
  name:{fontSize:22,fontWeight:"400",marginBottom:10},
  author:{fontSize:18,fontWeight:"200"},
  buttonContainer:{position:"absolute",top:110,left:10},
  button:{backgroundColor:"#24a9ed",borderRadius:10,padding:7},
  buttonText:{fontSize:20,color:"#fff"},
  emptyContainer:{},
  emptyText:{},

})