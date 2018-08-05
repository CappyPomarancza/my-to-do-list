import React from 'react'
import TextField from 'material-ui/TextField'
import MyPaper from './MyPaper';

const Search = (props)=>(
    <MyPaper>
    <TextField 
        placeholder={'Search'}
        fullWidth={true}
        onChange={props.mojaNazwaPropsa}
        value={props.dupa}

    />
    </MyPaper>
)

export default Search 