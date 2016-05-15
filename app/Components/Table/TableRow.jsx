import React from 'react';
import Immutable from 'immutable';

export default class TableRow extends React.Component {
	render() {
		let row = this.props.rows.map(function(item) {
			let valuesIm = Immutable.Map(item.values);
			return valuesIm.valueSeq().map(function(value) {
				return <td>{value}</td>
			})
		});

		return (
			<tbody>
			<tr>
				{row}
			</tr>
			</tbody>
		);
	}
}