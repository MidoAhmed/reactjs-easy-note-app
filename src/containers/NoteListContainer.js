import React from 'react'
import { observer, inject } from 'mobx-react'
import NoteList from '../components/NoteList/NoteList'
import Note from '../components/Note/Note'


@inject('notesStore')
@observer
class NoteListContainer extends React.Component {

     constructor(props){
        super(props);
    }

    async componentDidMount() {
        await this.props.notesStore.getNotes()
    }

    getNotes = async () => {
        await this.props.notesStore.getNotes()
    }

    render() {
        const notesStore = this.props.notesStore

        //add loading state
        if (this.props.isLoading) {
            return <span>Loading...</span>
        }

        //add failure state
        if (this.props.isFailure) {
            return <span>Error loading users!</span>
        }

        return <div className="notes-list-container">
                     {notesStore.notes && <NoteList notes={notesStore.notes} /> }
                     {/* notesStore.notes && <Note/> */ }

                </div>;
    }
}

export default NoteListContainer
