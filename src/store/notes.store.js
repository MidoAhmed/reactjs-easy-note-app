import {observable,action,computed, runInAction} from 'mobx';
import ApiService from '../services/ApiService';

class NotesStore {

    @observable isLoading = false;
    @observable isFailure = false;
    @observable notes = [];


    @computed get notesCount() {
        return this.notes.length;
    }

    @action async getNotes() {
        try {
            const data = await ApiService.get_notes();
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