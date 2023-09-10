export const generateMetadata = ({params: {id}}) => {
    return{
        title: id
    }
}

const Post = ({params: {id}}) => {
    return(
        <h1>{id}</h1>
    )
}

export default Post;