import { Component } from 'react'

import './search-panel.css'

class SearchPanel extends Component{
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
    }
    onChangeTermLocal = (e) => {
        this.setState(() => ({
            term: e.target.value
        }))
        this.props.onChangeTerm(e.target.value);
    }
    render() {
        return (
            <input className="form-control search-input"
                   type="text"
                   placeholder="Найти сотрудника"
                   value={this.state.term}
                   onChange={e => this.onChangeTermLocal(e)}
            />
        )
    }
}
export default SearchPanel;