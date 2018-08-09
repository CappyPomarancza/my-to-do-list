import React from 'react'
import Forms from './Forms'
import List from './List'
import Search from './Search';
import MyPaper from './MyPaper';


class ToDo extends React.Component {
    state = {
        tasks: [
            { isCompleted: true, text: 'umyj zęby(test)', key: '585' },
            { isCompleted: false, text: 'umyj zęby(test2)', key: '505' }
        ],
        newTaskText: '',
        searchPhrase: ''
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
        localStorage.setItem('Cappy-ToDo-List', JSON.stringify({
            tasks: this.state.tasks
        }))
    }

    searchPhraseChangeHandler = (event,newValue) => {
        this.setState({
            searchPhrase: newValue
        })
    }


    render() {
        const searchNamesInNewArray = array => {
            let searchNames = [];
       
            if (this.state.searchPhrase === "") {
              searchNames = [];
            } else {
              searchNames = array
                .map(element => element)
                .filter(
                  element =>
                    element.text.toUpperCase().indexOf(this.state.searchPhrase) >=
                      0 ||
                    element.text.toLowerCase().indexOf(this.state.searchPhrase) >= 0
                );
            }
       
            return searchNames;
          };




        return (
            <MyPaper>
                <MyPaper>
                <Search
                   searchPhraseChangeHandler={this.searchPhraseChangeHandler}
                   searchPhrase={this.searchPhrase}
                />
                <List
                    tasksList={searchNamesInNewArray(this.state.tasks)}
                />
                </MyPaper>
                <Forms
                    newTaskText={this.state.newTaskText}
                    onNewTaskTextChanged={this.onNewTaskTextChanged}
                    onAddNewTaskClickHandler={this.onAddNewTaskClickHandler}
                />
                
                <List
                    tasksList={this.state.tasks}
                    toggleTask = {this.toggleTask}
                />
            </MyPaper>
        )
    }

}

export default ToDo