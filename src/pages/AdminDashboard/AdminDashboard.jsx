import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../context/auth.context"
import Button from 'react-bootstrap/Button';



function AdminDashboard(){
    const {user, isLoggedIn} = useContext(AuthContext)
    const [username, setUsername] = useState("");
    const [showForm, setShowForm] = useState(false);


    useEffect(()=>{
        if (isLoggedIn){
            setUsername(user.username)
        }
    },[user])


    return(
        <div>
    <h1>Welcome back {username.slice(0,username.length-1)} <br/> Administrate your site</h1>
    <div>
        <h2>Add a Painting</h2>
        <Button onClick={setShowForm(!showForm)} variant="primary">Show</Button>
    </div>
        </div>
    )
}

export default AdminDashboard