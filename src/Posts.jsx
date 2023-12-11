import {Link} from "react-router-dom"

const Posts = ({posts}) => {
    return(
    <div>
        <h1>Posts</h1>
        <ul>
            {posts.map((posts) => {
                return (
                    <li key={posts.id}>
                        <Link to={`/posts/${posts.id}`}>
                            {posts.title}
                        </Link>
                    </li>
                )
            })
            }
            </ul>
    </div>
    )
}

export default Posts