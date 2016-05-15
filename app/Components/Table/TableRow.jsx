import React, { Component } from 'react';
import Immutable from 'immutable';

export default class TableRow extends Component {
	render() {
		let row = this.props.rows.map(function(item) {
			let valuesIm = Immutable.Map(item.values);
			let td = valuesIm.valueSeq().map(function(value, i) {
				return <td key={i}>{value}</td>;
			})

			return <tr key={item.id}>{td}</tr>;
		});

		return (
			<tbody>
				{row}
			</tbody>
		);
	}
}