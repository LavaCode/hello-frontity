import React from 'react'
import { styled, keyframes } from 'frontity'

const Loading = () => <Spinner />

export default Loading

const spin = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
` 

const Spinner = styled.div`
    border: 5px solid #eee;
    border-top: 5px solid steelblue;
    border-radius: 50%;
    width: 50px;
    height: 50px; 
    animation: ${spin} 0.5s linear infinite;
`
