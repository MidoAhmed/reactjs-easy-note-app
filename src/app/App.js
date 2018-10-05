import React,{ Component } from 'react';
import './App.css';
import  NoteListContainer from '../containers/NoteListContainer';
import { observer, inject } from 'mobx-react'


@inject('notesStore')
@observer
class App extends Component{

    constructor(props) {
        super(props);

        this.state = {
            notes: [{id:1, title:'lorem',content:'lorem ipsum dolor, dolori.'},{id:2,title:'lorem',content:'lorem ipsum dolor, dolori.'}]
        }
    }


    render(){
        return (
            <div className="container">
                <div className="app">
                    <header className="app-header">
                        <h1>React+Mobx Taking Note</h1>
                    </header>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <NoteListContainer/>
                    </div>
                </div>
                <footer>
                    <small>
                        made by <a href="https://google.com">Mido Ahmed</a>, source code available on <a href="https://github.com/MidoAhmed/reactjs-easy-note-app/">github</a>
                    </small>
                </footer>
            </div>
        );
    }
}

export default App;