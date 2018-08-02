import React from 'react'
import Paper from 'material-ui/Paper'


const styles ={
    margin: '20px',
    padding: '20px'
}

const MyPaper = (props) => (
    <Paper 
        elevation={9}
        style={styles}
    >
        {props.children}
    </Paper>
)

export default MyPaper 