import {useParams, Link} from 'react-router-dom'

const SingleUser = ({users}) => {
    const params = useParams()
    // console.log(params)
    const id = params.id*1

    const user = users.find((user) => {
        return user.id === id
    })

    if(!user) {
        return null
    }

    return (
        <div>
            <h1>{user.name}</h1>
            <h4>Username: {user.username}</h4>
            <h4>Email: {user.email}</h4>
            <h4>Address: {user.address.street}, {user.address.suite}<br />
            {user.address.city}
            </h4>
            <h4>Phone: {user.phone}</h4>
            <h4>Website: {user.website}</h4>
            <Link to= '/users'>
                Back to all Users
            </Link>
        </div>
    )
}

export default SingleUser