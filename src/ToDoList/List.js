import React from 'react'
import Task from './Task'
import MyPaper from './MyPaper'


const List = (props) => (
    <MyPaper>
        {
            props.tasksList.map(
                (task, index) => (
                    <Task
                        task={task}
                        key={task.key}
                    />
                )
            )
        }
    </MyPaper>
)
export default List 