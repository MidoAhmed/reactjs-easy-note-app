import React from 'react'
import {observer, inject} from 'mobx-react'
import {BubbleLoader} from 'react-css-loaders';
import Note from "../components/Note/Note";
import Swal from 'sweetalert2'


@inject('notesStore')
@observer
class AddNoteContainer extends React.Component {

    //setting up the initial states and default props.
    constructor(props) {
        super(props);
        this.props.notesStore.isLoading = false;
    }

    // is executed just before the React Component is about to mount on the DOM.
    componentWillMount() {
    }


    // this is the hook method which is executed after the component did mount on the DOM.
    async componentDidMount() {
        //The API calls should be made in componentDidMount method always.
    }

    async createNote(params){
        this.props.notesStore.isLoading = true;
        await this.props.notesStore.createNote(params);

        const toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 2000
        });

        //success add
        if(!this.props.notesStore.isFailure){
            toast({
                type: 'success',
                title: this.props.notesStore.response_message
            })
        }
        else{
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
                    <Note  submitHandler={this.createNote.bind(this)}/>
                </div>;

    }


    // This method is the last method in the lifecycle. This is executed just before the component gets removed from the DOM.
    componentWillUnmount() {
    }
}

export default AddNoteContainer


