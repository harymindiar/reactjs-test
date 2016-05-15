import React from 'react';

export default class TableHead extends React.Component {
	render() {
		let cols = [];
		this.props.heads.forEach(function(item) {
			cols.push(<th key={item.id}>{item.name}</th>);
		});

		return (
			<thead>
				<tr>
					{cols}
				</tr>
			</thead>
		);
	}
}