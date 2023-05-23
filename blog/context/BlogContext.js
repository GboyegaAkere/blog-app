import React from 'react'

const BlogPost =[
    {
        title:"blog post 1"
    },

    {
        title:"blogPost 2"
    },

    {
        title:"blogPost 3"
    }
]

const BlogContext = React.createContext();

export const BlogProvider = ({children}) => {
    return <BlogContext.Provider value={BlogPost}>
        {children}
    </BlogContext.Provider>
}

export default BlogContext