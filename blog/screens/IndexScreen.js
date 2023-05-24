import React from 'react'
import { View, Text, StyleSheet, FlatList, Button } from 'react-native'
import BlogContext from '../context/BlogContext'

const IndexScreen = () => {
  const {data,addBlogs} = React.useContext(BlogContext)
  return (
    <View>
        <Text>indexscreen</Text>
        <Button title='Add post' onPress={addBlogs}/>
        <FlatList
        data={data}
        keyExtractor={(post)=> post.title}
        renderItem={({item})=>{
          return <Text>{item.title}</Text>
        }}  
        />
        
    </View>
  )
}

export default IndexScreen