import React from 'react'
import { ListItem } from 'material-ui/List'
import Checkbox from '@material-ui/core/Checkbox';



const Task = (props) => (
    <ListItem>

        {props.task.text}
        
        <Checkbox
          checked={props.task.isCompleted}
          onChange={() => props.toggleTask(props.task.key)}
          value="checkedA"
        />
    </ListItem>
)
export default Task 
