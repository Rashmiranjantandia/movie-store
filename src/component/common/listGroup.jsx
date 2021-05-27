import React from 'react';

const ListGroup = (props) => {

    const { items, textProperty, valueProperty, onItemSelected, selectedItem } = props;
    return (
        <div>
        <ul className="list-group filter-group text-center">
        {items.map((item) => {
                return <li key={item[valueProperty]} className={item === selectedItem ? "list-group-item filter active" : "list-group-item filter"}
                    onClick={() => onItemSelected(item)}>{item[textProperty]}</li>  //using braket notation we are reading the properties
                    // <span className={onBadge(itemsCount)}> {genereCount(itemsCount)}</span>
            })}
        </ul>
        </div>
        );
}

// Default Props Type
ListGroup.defaultProps = {
    textProperty: "name",
    valueProperty: "_id"
}
export default ListGroup;