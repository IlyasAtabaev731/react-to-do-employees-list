import './app-info.css'

function AppInfo({data}) {
    let countIncrease = 0;
    data.forEach(item => (item.increase === true) ? ++countIncrease : '')
    return (   
        <div className="app-info">
            <h1>Учет сотрудников в компании N</h1>
            <h2>Общее число сотрудников: {data.length}</h2>
            <h2>Премию получат: {countIncrease}</h2>
        </div>
    )
}

export default AppInfo;