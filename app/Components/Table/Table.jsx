import React from 'react';
import TableHead from './TableHead';
import TableRow from './TableRow';

class Table extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<table className="table table-bordered">
				<TableHead heads={this.props.heads}/>
				<TableRow rows={this.props.rows}/>
			</table>
		);
	}
}

Table.propTypes = {
	heads: React.PropTypes.array,
	rows: React.PropTypes.array,
};

Table.defaultProps = {
	heads: [],
	rows: []
};

export default Table;