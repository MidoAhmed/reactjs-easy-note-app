import React, { Component } from 'react';
import './Note.css';

class Note extends Component {


    constructor(props) {
        super(props);
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
