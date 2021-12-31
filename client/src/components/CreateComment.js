import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

import { PostButton, Input, FormField, Label } from "../styles";

function CreateComment({currentUser, postId, allComments, setComments, handleClick}) {
    const navigate = useNavigate();
    const [newCommentForm, setNewCommentForm] = useState({
        text: '',
        user_id: currentUser.id,
        post_id: postId
    })
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState([])

    function handleTextChange(e) {
        setNewCommentForm({
            text: e.target.value
        })
    }

    function handleSubmit(e) {
        e.preventDefault();
        setErrors([])
        setIsLoading(true);
        const form = e.target
        const formData = new FormData();
        formData.append('text', form.text.value);
        formData.append('user_id', currentUser.id);
        formData.append('post_id', postId)
  
        fetch("/comments", {
            method: "POST",
            body: formData
        })
        .then(response => {
            setIsLoading(false);
            if(response.ok) {
                response.json()
                .then(comment => {
                    console.log(comment)
                    setComments([...allComments, comment])
                    handleClick()
                });
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
        <div>
            <form className="form" onSubmit={handleSubmit}>
                <FormField>
                    <Label htmlFor="text">text</Label>
                    <textarea
                    name="text"
                    id="text"
                    autoComplete="off"
                    onChange={handleTextChange}
                    />
                </FormField>
                <FormField>
                    <PostButton variant="fill" color="primary" type="submit">
                    {isLoading ? "loading..." : "post"}
                    </PostButton>
                </FormField>
            </form>
       </div>
    )
}

export default CreateComment
