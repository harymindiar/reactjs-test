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

render(<Table heads={heads} rows={rows}/>, document.getElementById('app'));