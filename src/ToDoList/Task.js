import React from 'react'
import { ListItem } from 'material-ui/List'
import Checkboxes from './Checkbox'

const Task = (props) => (
    <ListItem
        onClick={props.completedTask}
    >

        {props.task.text}
        <Checkboxes />
    </ListItem>
)
export default Task 
