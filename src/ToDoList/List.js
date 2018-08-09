import React from 'react'
import Task from './Task'
import MyPaper from './MyPaper'


const List = (props) => (
    <div>
        {
            props.tasksList.map(
                (task, index) => (
                    <Task
                        toggleTask={props.toggleTask}
                        task={task}
                        key={task.key}
                    />
                )
            )
        }
    </div>
)
export default List 