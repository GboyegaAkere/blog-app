import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import BlogContext from '../context/BlogContext'

const IndexScreen = () => {
  const BlogPosts = React.useContext(BlogContext)
  return (
    <View>
        <Text>indexscreen</Text>
        <FlatList
         data={BlogPosts}
         keyExtractor={blogPost => blogPost.title}
         renderItem={({item})=>{
          return <Text>{item.title}</Text>
         }}
        />
    </View>
  )
}

export default IndexScreen