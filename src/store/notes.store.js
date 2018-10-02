import {observable,action,computed} from 'mobx';

export default class NotesStore {

    @observable notes = [];


    @computed get notesCount() {
        return this.notes.length;
    }

    @action
    setNotes(notes) {
        this.notes = notes;
    }
}