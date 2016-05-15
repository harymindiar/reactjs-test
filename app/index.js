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

render(<Table heads={heads}/>, document.getElementById('app'));