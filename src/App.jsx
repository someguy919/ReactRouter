import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios';
import { Link, useLocation, Routes, Route } from 'react-router-dom';
import Users from './Users';
import SingleUser from './SingleUser'
import Homepage from './Homepage'
import Posts from './Posts'
import SinglePost from './SinglePost'

function App() {
const [users, setUsers] = useState([]);
const [posts, setPosts] = useState([]);

const location = useLocation()
  const {pathname} = location
useEffect(() => {
  const fetchUsers = async () => {
    const response = await axios.get ('https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users')
    setUsers(response.data);
    // console.log("User data:", response.data)
  };fetchUsers() 
}, []);

useEffect(() => {
  const fetchPosts = async () => {
    const response = await axios.get('https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/posts')
    setPosts(response.data);
    // console.log("Post data", response.data)
  };
  fetchPosts()
}, []);

  return (
   <div>
    <nav>
    <Link to='/' className={pathname === "/" ? "selected" : ""}>Home</Link>
    <Link to='/users' className={pathname === "/users" ? "selected" : ""}>Users ({users.length})</Link>
    <Link to='/posts' className={pathname === "/posts" ? "selected" : ""}>Posts ({posts.length})</Link>
    </nav>

    <Routes>
      <Route path='/' element={<Homepage />}/>
      <Route path='/users' element={<Users users={users}/>}/> 
      <Route path='/users/:id' element={<SingleUser users={users}/>}/>
      <Route path='/posts' element={<Posts posts={posts}/>}/>
      <Route path='/posts/:id' element={<SinglePost posts={posts}/>}/>
    </Routes>
   </div>
  )
}

export default App
