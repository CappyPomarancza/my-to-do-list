import React from 'react'
import TextField from 'material-ui/TextField'

const Search = (props)=>(
    <TextField 
        placeholder={'Search'}
        fullWidth={true}
        onChange={props.mojaNazwaPropsa}
        value={props.dupa}

    />
)

export default Search 