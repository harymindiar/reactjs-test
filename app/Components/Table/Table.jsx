import React, { Component, PropTypes } from 'react';
import TableHead from './TableHead';
import TableRow from './TableRow';

class Table extends Component {
    static propTypes = {
        heads: React.PropTypes.array,
        rows: React.PropTypes.array,
    }

    static defaultProps = {
        heads: [],
        rows: []
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

export default Table;