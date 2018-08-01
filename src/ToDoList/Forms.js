import React from 'react'
import MyPaper from './MyPaper'
import RaisedButton from 'material-ui/RaisedButton'
import { TextField } from 'material-ui';

const Forms = (props) => (
    <MyPaper>
        <TextField
            fullWidth={true}
            onChange={props.onNewTaskTextChanged}
            type={"text"}
           //placeholder={'Wpisz swoje zadanie'}
            value={props.newTaskText}
        />

        <RaisedButton
            label={'Dodaj'}
            primary={true}
            fullWidth={true}
            onClick={props.onAddNewTaskClickHandler}
        />
    </MyPaper>
)

export default Forms 