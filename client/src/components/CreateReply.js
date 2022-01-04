import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import { PostButton, Input, FormField, Label } from "../styles";

function CreateReply({currentUser, commentId, handleClick, allReplies, setReplies}) {
    const navigate = useNavigate();
    const [newReplyForm, setNewReplyForm] = useState({
        text: '',
        user_id: currentUser.id,
        comment_id: commentId
    })
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState([])

    function handleTextChange(e) {
        setNewReplyForm({
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
        formData.append('comment_id', commentId)
  
        fetch("/subcomments", {
            method: "POST",
            body: formData
        })
        .then(response => {
            setIsLoading(false);
            if(response.ok) {
                response.json()
                .then(reply => {
                    console.log(reply)
                    setReplies([...allReplies, reply])
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
                    <Label htmlFor="text">reply</Label>
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

export default CreateReply
