import React from 'react';
import _ from 'lodash';
const Pagination = (props) => {
    const { itemsCount, pageSize, onPageChange, currentPage } = props;

    const pagesCount = Math.ceil(itemsCount / pageSize);

    const pages = _.range(1, pagesCount + 1)

    return (
        // <nav className="container-fluid paginationStyle fixed-bottom" aria-label="Page navigation example">
        <nav className="container-fluid paginationStyle mt-3" aria-label="Page navigation example">
            <div className="row">
                <div className="col-md-3">
               
                </div>
                <div className="col-md-3">
                
                </div>
                <div className="col-md-3">
                <ul className="pagination">
                        <li className="page-item">
                            <a className="page-link" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                            </a>
                        </li>
                        {pages.map((page) => {
                            return (<li key={page} className={page === currentPage ? "page-item active" : "page-item"}>
                                <a className="page-link" onClick={() => onPageChange(page)}>{page}</a></li>)
                        })}
                        <li className="page-item">
                            <a className="page-link" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="col-3">

                </div>
            </div>
        </nav >
    );
}

export default Pagination;




