import {Link} from "react-router-dom"

const Users = ({users}) => {
    return(
    <div>
        <h1>Users</h1>
        <ul>
            {users.map((users) => {
                return (
                    <li key={users.id}>
                        <Link to={`/users/${users.id}`}>
                            {users.name}
                        </Link>
                    </li>
                )
            })
            }
            </ul>
    </div>
    )
}

export default Users