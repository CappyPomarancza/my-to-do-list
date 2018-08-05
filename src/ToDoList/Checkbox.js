import React from 'React'
import Checkbox from '@material-ui/core/Checkbox'


class ChecboxLabels extends React.Component {
    state = {
        checkedA: ture,
    };
    handleChange = name => event => {
        this.setState({ [name]: event.target.checked })
    }
    render() {

        return (
            <div>
                <Checkbox
                    checked={this.state.checkedA}
                    onChange={this.handleChange('checkedA')}
                    value="checkedA"
                />
            </div>
        )
    }
}