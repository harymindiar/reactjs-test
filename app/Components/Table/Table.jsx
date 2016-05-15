import React from 'react';
import TableHead from './TableHead'

export default class Table extends React.Component {
	render() {
		return (
			<table className="table table-bordered">
				<TableHead heads={this.props.heads}/>
			</table>
		);
	}
}