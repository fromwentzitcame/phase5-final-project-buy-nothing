import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'

import { Button, Input, FormField, Label, UsernameField } from "../styles";
import swal from 'sweetalert'


function Login({onLogin}) {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState([])

    function handleSubmit(e) {
        e.preventDefault();
        setIsLoading(true);
        fetch("/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }).then((resp) => {
          setIsLoading(false);
          if (resp.ok) {
            resp.json()
            .then((user) => onLogin(user));
            navigate('/')
          } else {
              resp.json()
             .then((error) => {
               setErrors(error.errors)
               swal(`Invalid username or password`)
             })
             
          }
        });
      }

    return (
        <div>
            <form className="form" onSubmit={handleSubmit}>
            <UsernameField>
                <Label htmlFor="email">email</Label>
                <Input
                type="text"
                id="email"
                autoComplete="off"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
            </UsernameField>
            <FormField>
                <Label htmlFor="password">password</Label>
                <Input
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
            </FormField>
            <FormField>
                <Button variant="fill" color="primary" type="submit">
                {isLoading ? "loading..." : "login"}
                </Button>
            </FormField>
            <FormField>
            <span>don't have an account?</span>
            </FormField>
            <FormField>
            <Button onClick={() => {navigate('/signup')}}>signup</Button>
            </FormField>
        </form>
       </div>
    )
}

export default Login
