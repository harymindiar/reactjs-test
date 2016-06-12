import React, { Component } from 'react';
import Paginator from 'generic-paginate';
import Immutable from 'immutable';

export default class Pagination extends Component {
    render() {
        let paginator = Paginator(this.props.pagination);
        let paginate = paginator.paginate(this.props.pagination);
        console.log(paginate);
        let range = Immutable.Map(paginate.range);

        let listPage = range.valueSeq().map(function(value, i) {
            let isActive = '';
            if (value == 'active') {
                isActive = 'active';
            }
            return <li key={i} className={isActive}><a href="#">{i+1}</a></li>;
        });

        let prevLinkClassName = 'previous';
        if (paginate.prev == null) {
            prevLinkClassName = prevLinkClassName +' disabled';
        }
        let nextLinkClassName = 'next';
        if (paginate.next == null) {
            nextLinkClassName = nextLinkClassName +' disabled';
        }

        return (
            <nav className="text-center">
                <ul className="pagination">
                    <li className={prevLinkClassName}><a href="#" aria-label="Previous"><span aria-hidden="true">&laquo;</span></a></li>
                    {listPage}
                    <li className={nextLinkClassName}><a href="#" aria-label="Next"><span aria-hidden="true">&raquo;</span></a></li>
                </ul>
            </nav>
        );
    }
}