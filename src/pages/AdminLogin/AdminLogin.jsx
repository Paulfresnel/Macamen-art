import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import "./AdminLogin.css"
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import axios from 'axios';
import Alert from 'react-bootstrap/Alert';
import { useContext } from 'react';
import { AuthContext } from '../../context/auth.context';
import { useNavigate } from 'react-router-dom';




function AdminLogin(){
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const navigate = useNavigate()

    const {authenticateUser, storeToken} = useContext(AuthContext)

    const handleChange = (setState,e) =>{
        setState(e.target.value)
    }

    /* const trySignUp = async (e) =>{
        try{
            const signUp = await axios.post(`${process.env.REACT_APP_SERVER_URL}/auth/signup`, {username, email, password});
            console.log("signup object response:", signUp)

        } catch(err){
            console.log("error:", err)
        }
    } */

    const tryLogin =  (e) =>{
        e.preventDefault();
        try{
            if (username === "" || email === "" || password === ""){
                setErrorMsg("Please input email, username and password");
            setTimeout(()=>{
                setErrorMsg('')
            },1500)
            }
            else{
            axios.post(`${process.env.REACT_APP_SERVER_URL}/auth/login`, {username, email, password})
            .then(response=>{
                console.log(response);
                storeToken(response.data.authToken);
                authenticateUser();
                navigate("/admin/dashboard");
            })
            }

        } catch(e){
            console.log(e);
            setErrorMsg("There's been an error, please check the console for more information and try again");
            setTimeout(()=>{
                setErrorMsg('')
            },1500)
        }
    }

    console.log(process.env.REACT_APP_SERVER_URL)

    return(
        <div>
        <h3>Admin Login</h3>
        <div className='input-group'>

        <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon2"><i class="fa-solid fa-at"></i></InputGroup.Text>
        <Form.Control
          type="email"
          placeholder="Input email"
          onChange={(e)=>handleChange(setEmail,e)}
          aria-label="Input email"
          aria-describedby="basic-addon2"
        />
      </InputGroup>

            <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1"><i class="fa-solid fa-user-pen"></i></InputGroup.Text>
        <Form.Control
          placeholder="Input your username"
          onChange={(e)=>handleChange(setUsername,e)}
          aria-label="Input your username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>

      

      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon2"><i class="fa-solid fa-key"></i></InputGroup.Text>
        <Form.Control
            type="password"
          placeholder="Input password"
          onChange={(e)=>handleChange(setPassword,e)}
          aria-label="Input password"
          aria-describedby="basic-addon2"
        />
      </InputGroup>
      </div>
{/*         <Button onClick={(e)=>trySignUp(e)} variant="warning">Signup</Button>{' '}
 */}        <Button onClick={(e)=>tryLogin(e)} variant="warning">Login</Button>{' '}
        {errorMsg && <Alert className='responsive-alert' variant="danger">
          {errorMsg}
        </Alert>}
        </div>
    )
}

export default AdminLogin