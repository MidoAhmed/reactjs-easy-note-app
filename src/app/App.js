import React,{ Component } from 'react';
import './App.scss';
import  NoteListContainer from '../containers/NoteListContainer';
import {observer, inject, Provider} from 'mobx-react'
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Note from "../components/Note/Note";
import NotFoundError from "../components/Errors/NotFound";


@inject('notesStore')
@observer
class App extends Component{

    constructor(props) {
        super(props);
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
                        <BrowserRouter>
                            <Switch>
                                <Route path={"/"} component={NoteListContainer}  exact/>
                                <Route path={"/notes"} component={NoteListContainer} exact />
                                <Route path={"/notes/:id_note"} component={Note}  />
                                <Route component={NotFoundError}/>
                            </Switch>
                        </BrowserRouter>
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