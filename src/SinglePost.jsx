import {useParams, Link} from 'react-router-dom'

const SinglePost = ({posts}) => {
    const params = useParams()
    // console.log(params)
    const id = params.id*1

    const post = posts.find((post) => {
        return post.id === id
    })

    if(!post) {
        return null
    }

    return (
        <div>
            <h1>Title: {post.title}</h1>
            <h4>Post: {post.body}</h4>
            <Link to= '/posts'>
                Back to all Posts
            </Link>
        </div>
    )
}

export default SinglePost