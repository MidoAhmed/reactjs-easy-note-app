import React, { Component } from 'react';
import './NoteList.scss';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import Swal from "sweetalert2";


class NoteList extends Component {

    constructor(props) {
        super(props);
    }


     handleClick =  (e,id_note) => {
         e.preventDefault();
         e.stopPropagation();
         e.nativeEvent.stopImmediatePropagation();

          Swal({
             title: 'Confirmer la suppression',
             text: 'Voulez vous vraiment supprimer cette note?',
             type: 'warning',
             showCancelButton: true,
             confirmButtonText: 'Oui',
             cancelButtonText: 'Non'
         }).then(async result => {
             if (result.value) {
                 await this.props.deleteHundler(id_note);
             } else if (result.dismiss === Swal.DismissReason.cancel) {
                  Swal('Annulé', 'Suppression annulé', 'error');
             }
         });
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
                                    <Link to={'/notes/' + `${note._id}` } >
                                        <div className="align-items-center d-flex">
                                            <div className="title-content-section">
                                                <h6 className="note-title">{note.title}</h6>
                                                <p className="note-content">{note.content}</p>
                                            </div>
                                            <span onClick={event => this.handleClick(event,note._id)}>delete</span>
                                        </div>
                                    </Link>
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

// Specifies the default values for props:
NoteList.defaultProps = {
    notes: []
};

// You can declare that a prop is a specific JS type. By default, these
NoteList.propTypes = {
    notes: PropTypes.array
};