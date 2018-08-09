import React from 'react'
import TextField from 'material-ui/TextField'

const Search = (props)=>(
    <div>
    <TextField 
        placeholder={'Szukaj'}
        fullWidth={true}
        onChange={props.searchPhraseChangeHandler}
        value={props.searchPhrase}

    />
    </div>
)

export default Search 