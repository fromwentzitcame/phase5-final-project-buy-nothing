import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

import { Button, Input, FormField, Label, UsernameField } from "../styles";

function Signup({onLogin}) {
    const navigate = useNavigate();
    const [signupForm, setSignupForm] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        zip_code: '',
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
        formData.append('zip_code', form.zip_code.value);
        formData.append('profile_picture', form.profile_picture.files[0], form.profile_picture.value);
  
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
                .then(error => setErrors(error.errors))
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
                // value={firstName}
                onChange={handleChange}
                />
            </UsernameField>
            <FormField>
                <Label htmlFor="last_name">last name</Label>
                <Input
                type="text"
                name="last_name"
                id="last_name"
                // value={lastName}
                onChange={handleChange}
                />
            </FormField>
            <FormField>
                <Label htmlFor="email">email</Label>
                <Input
                type="text"
                namme="email"
                id="email"
                // value={email}
                onChange={handleChange}
                />
            </FormField>
            <FormField>
                <Label htmlFor="zip_code">zip code</Label>
                <Input
                type="number"
                name="zip_code"
                id="zip_code"
                // value={zipCode}
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
                // value={password}
                onChange={handleChange}
                />
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
