import React from "react";


const BlogContext = React.createContext()
export const BlogProvider = ({children}) => {
    const [blogPosts, setBlogPosts] = React.useState([])

    const addBlogs = () =>{
        setBlogPosts ([...blogPosts, {title:`Blog post ${blogPosts.length + 1}`}])
    }

    return <BlogContext.Provider value={{data:blogPosts , addBlogs}}>
        {children}
    </BlogContext.Provider>
}

export default BlogContext;