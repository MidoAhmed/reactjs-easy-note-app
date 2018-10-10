import React from 'react'
import {observer, inject} from 'mobx-react'
import NoteList from '../components/NoteList/NoteList'
import {BubbleLoader} from 'react-css-loaders';
import history from '../services/history'


@inject('notesStore')
@observer
class NoteListContainer extends React.Component {

    //setting up the initial states and default props.
    constructor(props) {
        super(props);
    }

    // is executed just before the React Component is about to mount on the DOM.
    componentWillMount() {
    }


    // this is the hook method which is executed after the component did mount on the DOM.
    async componentDidMount() {
        //The API calls should be made in componentDidMount method always.
        await this.props.notesStore.getNotes();
    }

    getNotes = async () => {
        await this.props.notesStore.getNotes();
    }


    // mounts the component onto the browser.
    render() {
        const notesStore = this.props.notesStore;

        //add loading state
        if (notesStore.isLoading) {
            return <BubbleLoader/>;
        }

        //add failure state
        if (notesStore.isFailure) {
            return <span>Error loading notes!</span>;
        }

        return <div className="notes-list-container">
                    {notesStore.notes && <NoteList notes={notesStore.notes}/>}
                    <div className="d-flex justify-content-end">
                        <button type="button"  className="btn btn-info btn-circle btn-lg" onClick={() => this.props.history.push('/notes/add')}>
                            +
                        </button>
                    </div>
                </div>;

    }

    // This method is the last method in the lifecycle. This is executed just before the component gets removed from the DOM.
    componentWillUnmount() {
    }
}

export default NoteListContainer


