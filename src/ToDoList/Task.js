import React from 'react'
import { ListItem } from 'material-ui/List'

const Task =(props) => (
    <ListItem>
        {props.task.text}
    </ListItem>
)
export default Task 
