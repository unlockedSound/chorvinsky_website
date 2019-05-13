import React from "react";

function ListItem(props) {
    // Correct! There is no need to specify the key here:
    return <li>{props.value}</li>;
}

function TextList(props) {
    const listItemText = props.listItemText;
    const listItems = listItemText.map((itemText) =>
        // Correct! Key should be specified inside the array.
        <ListItem key={itemText}
                  value={itemText}/>
    );
    return (
        <ul className="projects__inner__content__text__list">
            {listItems}
        </ul>
    );
}

const listItemText = ["They work: where they are and when they are", "Worth it: before you ever even dance", "Welcoming: we believe a hello is the right beginning", "Good: plain and simple"];

const ListComponent = () => (
    <TextList
        listItemText={listItemText}
    />
);

export default ListComponent;