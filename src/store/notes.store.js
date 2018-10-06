import {observable,action,computed, runInAction} from 'mobx';
import NoteServices from '../services/NoteServices';

class NotesStore {

    @observable isLoading = true;
    @observable isFailure = false;
    @observable notes = [];


    @computed get notesCount() {
        return this.notes.length;
    }

    @action async getNotes() {
        try {
            const data = await NoteServices.get_notes();
            runInAction(() => {
                this.isLoading = false;
                this.notes = data;
                console.log('data :',data);
            })
        } catch (e) {
            runInAction(() => {
                this.isLoading = false;
                this.isFailure = true;
                this.notes = [];
            })
        }
    }
}

export default new NotesStore()
export { NotesStore }