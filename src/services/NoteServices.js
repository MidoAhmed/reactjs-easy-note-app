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

}

export default new NoteServices()
