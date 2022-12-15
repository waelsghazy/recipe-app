import React from 'react'
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';


function Search() {
    const [input, setInput] = useState("");
    const navigate = useNavigate();
    const submitHandler = (e) => {
        e.preventDefault();
        navigate('/searched/'+input)
    }
    return (
        <div className="container">
            <Form onSubmit={submitHandler}>
            <div>
                <FaSearch />
                <input 
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
            </div>
        </Form>
        </div>
    )
}

const Form = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 4rem 0 2rem;
    div {
        width: 50%;
        position: relative;
        margin: auto;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        @media(max-width: 575px) {
            width:80%;
        }
    }
    input {
        background: linear-gradient(35deg, #494949, #313131);
        border: none;
        outline: none;
        padding: 1rem 3rem;
        color: #fff;
        border-radius: 1rem;
        font-size: 1.5rem;
        width: 100%;
        margin: auto;
    }
    svg {
        position: absolute;
        top: 50%;
        left: 0;
        color: #fff;
        transform: translate(100%, -50%)
    }
`

export default Search