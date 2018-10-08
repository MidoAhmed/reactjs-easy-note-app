import {observable,action,computed, runInAction} from 'mobx';
import NoteServices from '../services/NoteServices';

class NotesStore {

    @observable isLoading = true;
    @observable isFailure = false;
    @observable notes = [];
    @observable note = null;


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
                console.log('data :',data);
            })
        } catch (e) {
            runInAction(() => {
                this.isLoading = false;
                this.isFailure = true;
                this.note = null;
            })
        }
    }
}

export default new NotesStore()
export { NotesStore }