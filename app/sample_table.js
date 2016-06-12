import React from 'react'
import { render } from 'react-dom';
import Table from './Components/Table/Table';

let heads = [
    {
        'id': 1,
        'name': 'No.'
    },
    {
        'id': 2,
        'name': 'Name',
    },
    {
        'id': 3,
        'name': 'Address'
    },
];

let rows = [
    {
        'id': 10,
        'values': {
            id: 10,
            name: 'John',
            address: 'Jakarta'
        }
    },
    {
        'id': 11,
        'values': {
            id: 11,
            name: 'John',
            address: 'Jakarta'
        }
    }
];

let optionsPagination = {
    activeClass: 'active',
    inactiveClass: '',
    count: 100,
    page: 1,
    size: 10
};

render(<Table heads={heads} rows={rows} pagination={optionsPagination}/>, document.getElementById('app'));