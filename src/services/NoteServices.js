import api from '../config';
import AppServices from "./AppServices";

class NoteServices extends AppServices{


    constructor() {
        super();
    }

    //get notes list
    async get_notes() {
        const res = await this.apiCall(api.notes, 'GET');
        this.handleCommonError(res);
        return res.body;
    }

    //get note info
    async get_note(id_note) {
        const res = await this.apiCall(api.notes + "/" + `${id_note}`, 'GET');
        this.handleCommonError(res);
        return res.body;
    }

    //update note info
    async update_note(id_note,params) {
        const res = await this.apiCall(api.notes + "/" + `${id_note}`, 'PUT', false, params);
        this.handleCommonError(res);
        return res.body;
    }

    //create a new note
    async create_note(params) {
        const res = await this.apiCall(api.notes, 'POST', false, params);
        this.handleCommonError(res);
        return res.body;
    }

    //remove a note
    async delete_note(id_note) {
        const res = await this.apiCall(api.notes + "/" + `${id_note}`, 'DELETE');
        this.handleCommonError(res);
        return res.body;
    }

}

export default new NoteServices()
