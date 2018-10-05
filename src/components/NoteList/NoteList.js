import React, { Component } from 'react';
import './NoteList.scss';


class NoteList extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const notes = this.props.notes;

        if (notes.length === 0) { //no notes
            return <p>List result is currently empty</p>;
        }

        return (
            <div className="note-list-wrapper">
                <ul className="list-unstyled">
                    {
                        this.props.notes.map((note,index) => {
                            return (
                                <li key={note._id} className="note-item-wrapper">
                                    <div>
                                        <h6 className="note-title">{note.title}</h6>
                                        <p className="note-content">{note.content}</p>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default NoteList;
