import React, { Component } from 'react';
class TableHeader extends Component {

    raiseSort = (path) => {
        const sortColumn = { ...this.props.sortColumn };
        if (sortColumn.path === path) {
            if (sortColumn.key === path){
                return false
            }
            sortColumn.order = sortColumn.order === 'asc' ? 'desc' : 'asc';
        }else {
            sortColumn.path = path;
            sortColumn.order = 'desc'
        }
        this.props.onSort(sortColumn)
    }

    renderSortIcon = (column) => {
        // console.log(column);
        if(column.key){
            return null
        }else{
            const { sortColumn } = this.props;
        if (column.path !== sortColumn.path) return null
        if (sortColumn.order === 'asc') return <i className="fa fa-sort-asc"></i>
        return <i className="fa fa-sort-desc"></i>
        }       
    }
    render() {
        return (

            <thead>
                <tr className="row ml-0 mr-0">
                    {this.props.columns.map((column) => {
                        return (<th className="col" key={column.path || column.key} onClick={() => this.raiseSort(column.path)}>
                        {column.label} &nbsp; {this.renderSortIcon(column)}</th>)
                    })}

                </tr>
            </thead>
        );
    }
}

export default TableHeader;