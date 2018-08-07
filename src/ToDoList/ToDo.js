import React from 'react'
import Forms from './Forms'
import List from './List'
import Search from './Search';


class ToDo extends React.Component {
    state = {
        tasks: [
            { isCompleted: true, text: 'umyj zęby(test)', key: '585' },
            { isCompleted: false, text: 'umyj zęby(test2)', key: '505' }
        ],
        newTaskText: ''
    }

    onNewTaskTextChanged = (event, value) => {
        this.setState({
            newTaskText: value
        })
    }

    toggleTask = (key) => {
        this.setState({
            tasks: this.state.tasks.map(task => {
                if(task.key === key){
                    return {
                        ...task,
                        isCompleted: !task.isCompleted
                    }
                }else{
                    return task
                }
            })
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
        const lastState = JSON.parse(localStorage.getItem('Cappy-ToDo-List'))
    
        if (lastState === null) return
    
        this.setState(lastState)
    }
    
    componentDidUpdate() {
        localStorage.setItem('Cappy-ToDo-List', JSON.stringify(this.state))
    }

    searchPhraseChangeHandler = (event) => {
        this.setState({
            searchPhrase: event.target.value
        })
    }


    render() {
       // this.componentWillMount()
        return (
            <div>
                <Search
                    //dupa={this.state.searchPharse}
                    mojaNazwaPropsa={this.searchPhraseChangeHandler}
                />
                <Forms
                    newTaskText={this.state.newTaskText}
                    onNewTaskTextChanged={this.onNewTaskTextChanged}
                    onAddNewTaskClickHandler={this.onAddNewTaskClickHandler}
                />
                <List
                    tasksList={this.state.tasks}
                    toggleTask = {this.toggleTask}
                />
            </div>
        )
    }

}

export default ToDo