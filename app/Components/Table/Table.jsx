import React, { Component, PropTypes } from 'react';
import TableHead from './TableHead';
import TableRow from './TableRow';
import Pagination from './Pagination';

class Table extends Component {
    static propTypes = {
        heads: React.PropTypes.array,
        rows: React.PropTypes.array,
        pagination: React.PropTypes.object
    }

    static defaultProps = {
        heads: [],
        rows: [],
        pagination: {}
    }

    render() {
        return (
            <div>
                <table className="table table-bordered">
                    <TableHead heads={this.props.heads}/>
                    <TableRow rows={this.props.rows}/>
                </table>
                <Pagination options={this.props.pagination}/>
            </div>
        );
    }
}

export default Table;