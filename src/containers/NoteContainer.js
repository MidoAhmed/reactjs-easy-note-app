import React from 'react'
import {observer, inject} from 'mobx-react'
import {BubbleLoader} from 'react-css-loaders';
import Note from "../components/Note/Note";
import Swal from 'sweetalert2'


@inject('notesStore')
@observer
class NoteContainer extends React.Component {

    //setting up the initial states and default props.
    constructor(props) {
        super(props);

        this.state = {
            id_note: this.props.match.params.id_note
        };
    }

    // is executed just before the React Component is about to mount on the DOM.
    componentWillMount() {
    }


    // this is the hook method which is executed after the component did mount on the DOM.
    async componentDidMount() {
        //The API calls should be made in componentDidMount method always.
        this.props.notesStore.isLoading = true;
        await this.props.notesStore.getNote(this.state.id_note);
    }

    async updateNote(id_note,params){
        this.props.notesStore.isLoading = true;
        await this.props.notesStore.updateNote(id_note,params);


        const toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 2000
        });

        //success update
        if(!this.props.notesStore.isFailure){
            toast({
                type: 'success',
                title: this.props.notesStore.response_message
            })
        }else{
            toast({
                type: 'error',
                title: this.props.notesStore.response_message
            })
        }

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
            return <span>Error loading note!</span>;
        }

        return  <div>
                     {notesStore.note && <Note note={notesStore.note}  submitHandler={this.updateNote.bind(this)}/>}
                </div>;

    }


    // This method is the last method in the lifecycle. This is executed just before the component gets removed from the DOM.
    componentWillUnmount() {
    }
}

export default NoteContainer


