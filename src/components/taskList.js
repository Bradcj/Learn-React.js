import React from 'react'
import Styled from 'styled-components'

import Task from './task.js'

const Container = Styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width:500px;
`

const taskList = ({taskList, removeTodo}) => {
    return (
        <Container>
            { 
                taskList.map((task, index) => <Task value={task} key={index} onClickRemove={() => removeTodo(index)} />)
            }
        </Container>
    )
}

export default taskList;
