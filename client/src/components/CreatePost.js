import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

import { Button, Input, FormField, Label, UsernameField } from "../styles";
import styled from 'styled-components';

function CreatePost({currentUser}) {
    const navigate = useNavigate();
    const [newPostForm, setNewPostForm] = useState({
        text: '',
        category: '',
        user_id: currentUser.id,
        pictures: []
    })
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState([])

    function handleTextChange(e) {
        setNewPostForm({
            text: e.target.value
        })
    }

    function handleChange(e) {
        setNewPostForm({
            category: e.target.value
        })
    }

    function onImageChange(e) {
        setNewPostForm({
            pictures: e.target.files
        })
    }

    function handleSubmit(e) {
        e.preventDefault();
        setErrors([])
        setIsLoading(true);
        const form = e.target
        const formData = new FormData();
        formData.append('text', form.text.value);
        formData.append('category_id', form.category_id.value);
        formData.append('user_id', currentUser.id);
        for (let i = 0; i < form.pictures.files.length; i++) {
            formData.append(
              'pictures[]',
              form.pictures.files[i]
            )
          }
  
        fetch("/createpost", {
            method: "POST",
            body: formData,
        })
        .then(response => {
            setIsLoading(false);
            if(response.ok) {
                response.json()
                .then(post => console.log(post));
                navigate('/')
            } else {
                response.json()
                .then(error => {
                    setErrors(error.errors)
                    console.log(error)
                })
            }
        });
    }

    return (
<NewPostDiv>
    <h2>create post</h2>
            <form className="form" onSubmit={handleSubmit}>
            <FormField>
                <Label htmlFor="text">text</Label>
                <textarea
                type="textarea"
                name="text"
                id="text"
                autoComplete="off"
                onChange={handleTextChange}
                />
            </FormField>
            <FormField>
                <Label htmlFor="category_id">category</Label>
                <select
                name="category_id"
                id="category_id"
                onChange={handleChange}
                >
                    <option value="1">gift</option>
                    <option value="2">ask</option>
                    <option value="3">gratitude</option>
                </select>
            </FormField>
            <FormField>
                <Label htmlFor="pictures">pictures</Label>
                <Input
                type="file"
                name="pictures"
                accept="image/*"
                multiple={true}
                id="pictures"
                onChange={onImageChange}
                />
            </FormField>
            <FormField>
                <Button variant="fill" color="primary" type="submit">
                {isLoading ? "loading..." : "post"}
                </Button>
            </FormField>
        </form>
       </NewPostDiv>
    )
}

export default CreatePost

const NewPostDiv = styled.div`
    padding-top: 70px;
    padding-left: 160px;
    padding-right: 30px;

`