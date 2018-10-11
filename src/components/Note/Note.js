import React, {Component} from 'react';
import './Note.scss';
import {BubbleLoader} from 'react-css-loaders';




class Note extends Component {


    constructor(props) {
        super(props);

        this.state = {
            title: '',
            content: '',
        }
    }

    // is executed just before the React Component is about to mount on the DOM.
    componentWillMount() {
    }


    // this is the hook method which is executed after the component did mount on the DOM.
    componentDidMount() {

        // case of update
        if(this.props.note){
            this.setState({
                title: this.props.note.title,
                content: this.props.note.content,
            });
        }
    }


    async handleSubmit(event){
        event.preventDefault();
        if (this.props.note){
            await  this.props.submitHandler(this.props.note._id,this.state);
        }
        else{
            await  this.props.submitHandler(this.state);
        }

    }

    handleClear(event){
        this.setState({title: ''});
        this.setState({content: ''});
    }

    render() {
        return (
            <div className="note-details-wrapper">
                <form autoComplete="false" className="note_form" onSubmit={this.handleSubmit.bind(this)}>
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input type="text" value={this.state.title} name="title" onChange={(event) => this.setState({title: event.target.value})} className="form-control" id="title" aria-describedby="emailHelp"  placeholder="Enter title"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="content">Content</label>
                        <textarea className="form-control" value={this.state.content} name="content" onChange={(event) => this.setState({content: event.target.value})} id="content" placeholder="Enter text" rows="3"></textarea>
                    </div>
                    <button type="submit" onClick={this.handleSubmit.bind(this)} className="btn btn-primary btn-submit">Submit</button>
                    <button type="button" onClick={this.handleClear.bind(this)} className="btn btn-primary">Clear</button>
                </form>
            </div>
        );
    }
}

export default Note;
