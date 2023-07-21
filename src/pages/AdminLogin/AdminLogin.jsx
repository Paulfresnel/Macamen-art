import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import "./AdminLogin.css"
import Button from 'react-bootstrap/Button';


function AdminLogin(){

    return(
        <div>
        <h3></h3>
        <div className='input-group'>
            <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1"><i class="fa-solid fa-user-pen"></i></InputGroup.Text>
        <Form.Control
          placeholder="Input your username"
          aria-label="Input your username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>

      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Input password"
          aria-label="Input password"
          aria-describedby="basic-addon2"
        />
        <InputGroup.Text id="basic-addon2"><i class="fa-solid fa-key"></i></InputGroup.Text>
      </InputGroup>
      </div>
        <Button variant="warning">Login</Button>{' '}
        </div>
    )
}

export default AdminLogin