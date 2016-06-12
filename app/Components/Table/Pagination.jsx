import React, { Component } from 'react';
import Paginator from 'generic-paginate';
import Immutable from 'immutable';

export default class Pagination extends Component {
    render() {
        let paginator = Paginator(this.props.pagination);
        let paginate = paginator.paginate(this.props.pagination);
        let range = Immutable.Map(paginate.range);

        let listPage = range.valueSeq().map(function(value, i) {
            let isActive = '';
            if (value == 'active') {
                isActive = 'active';
            }
            return <li key={i} className={isActive}><a href="#">{i+1}</a></li>;
        });

        return (
            <nav className="text-center">
                <ul className="pagination">
                    {listPage}
                </ul>
            </nav>
        );
    }
}