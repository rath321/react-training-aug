import React, { Component } from 'react';

const ListItem = ({ item }) => <li className='list-group-item'>{item.name}</li>

const ListComponent = (props) => {
    var l_items = props.items.map((item, index) => {
        return <ListItem item={item} key={item.id} />
    });

    return (
        <>
            <ul className="list-group">
                {l_items}
            </ul>
        </>
    );
}

class ListRoot extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employees: [
                { id: 1, name: "Manish" },
                { id: 2, name: "Abhijeet" },
                { id: 3, name: "Ramakant" },
                { id: 4, name: "Subodh" },
                { id: 5, name: "Abhishek" }
            ],
        }
    }

    render() {
        return (
            <div>
                <ListComponent items={this.state.employees} />
            </div>
        );
    }
}

export default ListRoot;