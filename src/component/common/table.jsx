import React, { Component } from 'react';
import TableBody from './tableBody';
import TableHeader from './tableHeader';

const Table = (props) => {
    const { sortColumn, onSort, columns, data: movies } = props
    return ( 
        <table className="table moviesTable">
            <TableHeader
                columns={columns}
                sortColumn={sortColumn}
                onSort={onSort}
            />
            <TableBody
                columns={columns}
                data={movies}
            />

        </table>
     );
}
 
export default Table;