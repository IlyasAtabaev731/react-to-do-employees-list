import {Component} from 'react'

import './app-filter.css'

class AppFilter extends Component{
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="btn-group">
                <button className={"btn" + ((this.props.optionFilter === 0) ? " btn-light" : " btn-outline-light")} type="button" onClick={() => this.props.onChangeFilterOption(0)}>
                    Все сотрудники
                </button>
                <button className={"btn" + ((this.props.optionFilter === 1) ? " btn-light" : " btn-outline-light")} type="button" onClick={() => this.props.onChangeFilterOption(1)}>
                    На повышение
                </button>
                <button className={"btn" + ((this.props.optionFilter === 2) ? " btn-light" : " btn-outline-light")} type="button" onClick={() => this.props.onChangeFilterOption(2)}>
                    З/П больше 1000$
                </button>
            </div>
        )
    }
}

export default AppFilter;