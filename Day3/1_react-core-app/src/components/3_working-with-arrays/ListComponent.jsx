import React, { Component } from 'react';
import DataTable from '../common/DataTable';

const ListItem = ({ item }) => <li className='list-group-item'>{item.name}</li>

const ListComponent = (props) => {
    var l_items = props.items.map((item, index) => {
        return <ListItem item={item} key={item.id} />
    });

    return (
        <>
            {props.children}
            <hr />
            <ul className="list-group">
                {l_items}
            </ul>
        </>
    );
}

const Tr = ({ item }) => (
    <tr>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>
            <a href="/#" className='text-primary'>Details</a>
        </td>
        <td>
            <a href="/#" className='text-warning'>Edit</a>
        </td>
        <td>
            <a href="/#" className='text-danger'>Delete</a>
        </td>
    </tr>
);

const TableComponent = (props) => {
    var trs = props.items.map((item, index) => {
        return <Tr item={item} key={item.id} />
    });

    return (
        <>
            {props.children}
            <hr />
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th></th>
                        <th>ACTIONS</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {trs}
                </tbody>
            </table>
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
            posts: [
                {
                    userId: 1,
                    id: 1,
                    title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
                },
                {
                    userId: 1,
                    id: 2,
                    title: "qui est esse",
                    body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
                }
            ]
        }
    }

    render() {
        return (
            <div>
                {/* <ListComponent items={this.state.employees}>
                    <h4 className='text-info'>Employees Data</h4>
                </ListComponent>

                <div className="mt-5"></div>

                <TableComponent items={this.state.employees}>
                    <h4 className='text-info'>Employees Table</h4>
                </TableComponent>

                <div className="mt-5"></div>

                <TableComponent items={this.state.posts}>
                    <h4 className='text-info'>Posts Table</h4>
                </TableComponent> */}

                <DataTable items={this.state.employees}>
                    <h4 className='text-info'>Employees Table</h4>
                </DataTable>

                <div className="mt-5"></div>

                <DataTable items={this.state.posts}>
                    <h4 className='text-info'>Employees Table</h4>
                </DataTable>
            </div>
        );
    }
}

export default ListRoot;