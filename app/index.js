import React from 'react'
import { render } from 'react-dom';
import Table from './Components/Table/Table';

var heads = [
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

var rows = [
	{
		'id': 1,
		'values': {
			id: 1,
			name: 'John',
			address: 'Jakarta'
		}
	}
];

render(<Table heads={heads} rows={rows}/>, document.getElementById('app'));