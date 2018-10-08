import React, { Component } from 'react';
import './Note.scss';
import { observer, inject } from 'mobx-react'


@inject('notesStore')
@observer
class Note extends Component {


    constructor(props) {
        super(props);
        this.state = {
            id_note : this.props.match.params.id_note
        };
    }

    // is executed just before the React Component is about to mount on the DOM.
    componentWillMount(){
    }


    // this is the hook method which is executed after the component did mount on the DOM.
    async componentDidMount() {
        //The API calls should be made in componentDidMount method always.
        await this.props.notesStore.getNote(this.state.id_note);
    }

  render() {

    return (
      <div className="note-details-wrapper">

          <form>
              <div className="form-group">
                  <label htmlFor="title">Title</label>
                  <input type="text" className="form-control" id="title" aria-describedby="emailHelp"
                         placeholder="Enter title" />
              </div>
              <div className="form-group">
                  <label htmlFor="content">Content</label>
                  <textarea className="form-control" id="content" placeholder="Enter text" rows="3"></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
          </form>

      </div>
    );
  }
}

export default Note;
