import React from 'react'
import Styled from 'styled-components'

const Container = Styled.div`
    background-color: white;
    box-shadow: 10px 10px 36px -10px rgba(0,0,0,0.75);
    border-radius: 6px;
    margin: 12px;
    padding: 12px;
    transition: all .2s ease-in-out;
    &:hover {
        transform: scale(1.05);
    }
`

const DeleteButton = Styled.button`
    float:right;
    background-color: #c4112c;
    color: white;
    font-size: medium;
    border-style: none;
    border-radius: 6px;
    box-shadow: 10px 10px 36px -10px rgba(0,0,0,0.75);
    outline: none;
    transition: all .2s ease-in-out;
    &:hover{
        background-color: #b4011c;
    }
`

const task = ({value, onClickRemove}) => {
    return (
        <div>
        <Container>
            {value}
            <DeleteButton onClick={onClickRemove} > delete </DeleteButton>
        </Container>
        </div>
    )
}

export default task;
