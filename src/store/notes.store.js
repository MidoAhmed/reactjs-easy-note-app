import {observable,action,computed, runInAction} from 'mobx';
import NoteServices from '../services/NoteServices';

class NotesStore {

    @observable isLoading = true;
    @observable isFailure = false;
    @observable notes = [];
    @observable note = null;
    @observable response_message = '';



    @computed get notesCount() {
        return this.notes.length;
    }

    @action async getNotes() {
        try {
            const data = await NoteServices.get_notes();
            runInAction(() => {
                this.isLoading = false;
                this.notes = data;
            })
        } catch (e) {
            runInAction(() => {
                this.isLoading = false;
                this.isFailure = true;
                this.notes = [];
            })
        }
    }

    @action async getNote(id_note) {

        try {
            const data = await NoteServices.get_note(id_note);
            runInAction(() => {
                this.isLoading = false;
                this.note = data;
            })
        } catch (e) {
            runInAction(() => {
                this.isLoading = false;
                this.isFailure = true;
                this.note = null;
            })
        }
    }

    @action async updateNote(id_note,params) {

        try {
            const data = await NoteServices.update_note(id_note,params);
            runInAction(() => {
                this.isLoading = false;
                this.note = data.data;
                this.response_message = data.message;
            })
        } catch (e) {
            runInAction(() => {
                this.isLoading = false;
                this.isFailure = true;
                this.note = null;
                this.response_message = e.message;
            })
        }
    }

    @action async createNote(params) {

        try {
            const data = await NoteServices.create_note(params);
            runInAction(() => {
                this.isLoading = false;
                this.response_message = data.message;
            })
        } catch (e) {
            runInAction(() => {
                this.isLoading = false;
                this.isFailure = true;
                this.response_message = e.message;
            })
        }
    }

    @action async removeNote(id_note) {
        try {
            const data = await NoteServices.delete_note(id_note);
            runInAction(() => {
                this.isLoading = false;
                this.response_message = data.message;
            })
        } catch (e) {
            runInAction(() => {
                this.isLoading = false;
                this.isFailure = true;
                this.response_message = e.message;
            })
        }
    }
}

export default new NotesStore()
export { NotesStore }