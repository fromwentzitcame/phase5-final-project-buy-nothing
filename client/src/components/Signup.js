import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

import { Button, Input, FormField, Label, UsernameField } from "../styles";
import swal from 'sweetalert';

function Signup({onLogin}) {
    const navigate = useNavigate();
    const [signupForm, setSignupForm] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        neighborhood_id: '',
        profile_picture: null
    })
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState([])

    function handleChange(e) {
        setSignupForm({
            [e.target.name]: e.target.value
        })
    }

    function onImageChange(e) {
        setSignupForm({
            profile_picture: e.target.files[0]
        })
    }

    function handleSubmit(e) {
        e.preventDefault();
        setErrors([])
        setIsLoading(true);
        const form = e.target
        const formData = new FormData();
        formData.append('first_name', form.first_name.value);
        formData.append('last_name', form.last_name.value);
        formData.append('email', form.email.value);
        formData.append('password', form.password.value);
        formData.append('neighborhood_id', form.neighborhood_id.value);
        // formData.append('profile_picture', form.profile_picture.files[0], form.profile_picture.value);
        for (let i = 0; i < form.profile_picture.files.length; i++) {
            formData.append(
              'profile_picture',
              form.profile_picture.files[i]
            )
          }

        fetch("/signup", {
            method: "POST",
            body: formData,
        })
        .then(response => {
            setIsLoading(false);
            if(response.ok) {
                response.json()
                .then(user => onLogin(user));
                navigate('/')
            } else {
                response.json()
                .then(error => {
                    setErrors(error.errors)
                    console.log(error)
                    swal(`first name: ${error.first_name ? error.first_name : 'valid'}
                        \n last name: ${error.last_name ? error.last_name : 'valid'}
                        \n email: ${error.email ? error.email : 'valid'}
                        \n password: ${error.password ? error.password : 'valid'}
                        \n profile_picture: ${error.profile_picture ? error.profile_picture : 'valid'}`)
                })
            }
        });
    }

    return (
<div>
            <form className="form" onSubmit={handleSubmit}>
            <UsernameField>
                <Label htmlFor="first_name">first name</Label>
                <Input
                type="text"
                name="first_name"
                id="first_name"
                autoComplete="off"
                onChange={handleChange}
                />
            </UsernameField>
            <FormField>
                <Label htmlFor="last_name">last name</Label>
                <Input
                type="text"
                name="last_name"
                id="last_name"
                onChange={handleChange}
                />
            </FormField>
            <FormField>
                <Label htmlFor="email">email</Label>
                <Input
                type="text"
                namme="email"
                id="email"
                onChange={handleChange}
                />
            </FormField>
            <FormField>
                <Label htmlFor="password">password</Label>
                <Input
                type="password"
                name="password"
                id="password"
                autoComplete="current-password"
                onChange={handleChange}
                />
            </FormField>
            <FormField>
                <Label htmlFor="neighborhood_id">closest neighborhood</Label>
                <select
                name="neighborhood_id"
                id="neighborhood_id"
                onChange={handleChange}
                >
                    <option value="1">Belknap Lookout</option>
                    <option value="2">East Hills</option>
                    <option value="3">Eastown</option>
                    <option value="4">Fulton Heights</option>
                    <option value="5">Heartside</option>
                    <option value="6">Heritage Hill</option>
                    <option value="7">Highland Park</option>
                    <option value="8">John Ball</option>
                    <option value="9">Midtown</option>
                    <option value="10">Roosevelt Park</option>
                </select>
            </FormField>
            <FormField>
                <Label htmlFor="profile_picture">profile picture</Label>
                <Input
                type="file"
                name="profile_picture"
                accept="image/*"
                multiple={false}
                id="profile_picture"
                onChange={onImageChange}
                />
            </FormField>
            <FormField>
                <Button variant="fill" color="primary" type="submit">
                {isLoading ? "loading..." : "signup"}
                </Button>
            </FormField>
            <FormField>
            <span>already have an account?</span>
            </FormField>
            <FormField>
            <Button onClick={() => {navigate('/login')}}>login</Button>
            </FormField>
        </form>
       </div>
    )
}

export default Signup
