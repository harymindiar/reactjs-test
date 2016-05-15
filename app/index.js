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

let pagination = {
    count: 100, // total rows
    activeClass: 'active',
    inactiveClass: '',
    defaults: {
        size: 10,        // Result per page
        listLength: 2,  // Length pagination Result.
        // eg:  listLength = 2; ==>  <<  5, 6, 7, 8, 9  >>
        //      listLength = 1; ==>  <<  6, 7, 8  >>
    }
};

render(<Table heads={heads} rows={rows} pagination={pagination}/>, document.getElementById('app'));