import React from 'react'
import Forms from './Forms'
import List from './List'


class ToDo extends React.Component {
    state = {
        tasks: [
            { isCompeleted: false, text: 'umyj zęby(test)', key: '585' },
        ],
        newTaskText: ''

    }

    onNewTaskTextChanged = (event, value) => {
        this.setState({
            newTaskText: value
        })
    }

    onAddNewTaskClickHandler = () => {
        this.setState({
            tasks: this.state.tasks.concat({
                isCompleted: false,
                text: this.state.newTaskText,
                key: Math.random()
            }),
            newTaskText: ''
        })
    }

    componentDidMount() {
        const lastState = JSON.parse(localStorage.getItem('Cappy-app-my-todo-list'))
        if (lastState === null) return
        this.setState(lastState)
    }

    componentWillMount() {
        localStorage.setItem('Cappy-app-my-todo-list', JSON.stringify(this.state))
    }


    render() {
        return (
            <div>
                <Forms
                    newTaskText={this.state.newTaskText}
                    onNewTaskTextChanged={this.onNewTaskTextChanged}
                    onAddNewTaskClickHandler={this.onAddNewTaskClickHandler}
                />
                <List
                    tasksList={this.state.tasks}
                />
            </div>
        )
    }

}

export default ToDo