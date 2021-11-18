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
                {name: "John C.", salary: 1500, id: 1},
                {name: "Jack B.", salary: 1700, id: 2},
                {name: "Alex E.", salary: 2300, id: 3}
            ]
        };
    }
    addItem = (name, salary) => {
        this.setState( ({data}) => {
            return {
                data: [...data, {name: name, salary: salary, id: data.length + 1}]
            }
        })
    }
    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(elem => elem.id !== id)
            }
        });
    }

    render() {
        const {data} = this.state;
        return (
            <div className = "app">
                <AppInfo/>
                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>

                </div>

                <EmployeesList data={data}
                               onDelete={this.deleteItem}/>
                <EmployeesAddForm onSubmit={this.addItem}/>

            </div>
        )
    }
}
export default App;