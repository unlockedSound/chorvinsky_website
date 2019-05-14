import React from "react";


function ListComponent(props) {
    const listItems = props.listText.map((itemText, index) =>
        <li key={itemText}>
            {itemText}
        </li>
    );
    return (
        <ul className={props.listClass}>
            {listItems}
        </ul>
    );
}

export default ListComponent;