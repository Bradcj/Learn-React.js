import React, {useState} from 'react'
import Styled from 'styled-components'

import Button from './components/Button'
import Input from './components/Input'
import TaskList from './components/taskList'


const Container = Styled.div`

  width: 100vw;
  height: 100vh;
  background-color: #f6f7f8;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

`

function App() {

  const [taskList, setTaskList] = useState([])
  const [text, setText] = useState("")

  const onTextChange = ({target: {value}}) => {

    setText(value)

  }

  const addText = () => {

    // add task
    setTaskList([
      ...taskList,
      text
    ])

    // clear text
    setText("")

  }
  
  const removeTodo = (index) => {

    let task = [...taskList]

    task.splice(index, 1)
    setTaskList(task)
  
  }

  return (
    <Container>

      <div>
        <Input type="text" value={text} onChange={ onTextChange } />
        <Button onClick= {addText} >Go!</Button>
      </div>

        <TaskList taskList={taskList} removeTodo={removeTodo}/>

    </Container>
  );
}

export default App;
