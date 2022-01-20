import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: "John C.", salary: 1500, increase: false, rise: false, id: 1},
                {name: "Jack B.", salary: 1700, increase: false, rise: false, id: 2},
                {name: "Alex E.", salary: 900, increase: false, rise: false, id: 3}
            ],
            term: '',
            filterOption: 0
        };
    }

    onChangeState = (stateItem, value) => {
        this.setState(() => ({
            [stateItem]: value
        }) );
    }

    onToggleState = (stateItem) => {
        this.setState((state) => ({
            [stateItem]: !state[stateItem]
        }) );
    }
    onChangeValue = (e) => {
        this.setState(() => ({
            [e.target.name]: e.target.value
        }) );
    }

    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(item => (item.id === id) ? {...item, [prop]: !item[prop]}: item)
        }) );
    }

    addItem = (name, salary) => {
        if (name.length > 3 && salary) {
            this.setState(({data}) => ({
                data: [...data, {name: name, salary: salary, increase: false, rise: false, id: data.length + 1}]
            }));
        }
    }

    deleteItem = (id) => {
        this.setState(({data}) => ({
            data: data.filter(elem => elem.id !== id)
        }) );
    }

    searchEmployees = (data, term) => {
        return (term.length > 0) ? data.filter(item => item.name.toLowerCase().indexOf(term.toLowerCase()) > -1) : data;
    }

    visibleDataCreate = (data, term) => {
        switch (this.state.filterOption) {
            case 1:
                return this.searchEmployees(data.filter(elem => elem.increase), term);
            case 2:
                return this.searchEmployees(data.filter(elem => elem.salary >= 1000), term);
            default:
                return this.searchEmployees(data, term);
        }
    }

    render() {
        const {data, term} = this.state;

        return (
            <div className = "app">
                <AppInfo data={data}/>
                <div className="search-panel">
                    <SearchPanel    term={term}
                        onChangeTerm={(value) => this.onChangeState('term', value)}
                    />
                    
                    <AppFilter  onChangeFilterOption={(value) => this.onChangeState('filterOption', value)} 
                        optionFilter={this.state.filterOption}
                    />
                </div>

                <EmployeesList  data={this.visibleDataCreate(data, term)}
                                onDelete={this.deleteItem}
                                onToggleProp={this.onToggleProp}
                                />
                <EmployeesAddForm onSubmit={this.addItem}/>

            </div>
        )
    }
}
export default App;