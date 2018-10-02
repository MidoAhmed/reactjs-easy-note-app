import React, { Component } from 'react';
import './NoteList.css';

class NoteList extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className="note-list-wrapper">
                <ul className="list-unstyled">
                        <li>
                            {
                                this.props.notes.map((note,index) => { console.log(note) })
                            }
                        </li>
                </ul>
            </div>
        );
    }
}

export default NoteList;
