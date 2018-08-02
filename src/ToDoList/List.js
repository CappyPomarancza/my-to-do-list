import React from 'react'
import Task from './Task'
import MyPaper from './MyPaper'


const List = (props) => (
    <div>
        {
            props.taskList.map(
                (task, index) => (
                    <Task
                        task={task}
                        key={task.key}
                    />
                )
            )
        }
    </div>
)
export default List 