import React from 'react';

export default class TableHead extends React.Component {
	render() {
		let row = this.props.heads.map(function(item) {
			return <th key={item.id}>{item.name}</th>;
		});
		return (
			<thead>
				<tr>
					{row}
				</tr>
			</thead>
		);
	}
}