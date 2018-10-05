import api,{API_URL} from '../config';

class ApiSerice {


    constructor() {
        this.api_url = API_URL;
    }

    async apiCall(url, method = 'GET', token = false, params = null) {
        let payload = {
            method,
            mode: 'cors',
            headers: this.buildHeaders(token),
        }
        if (params) {
            payload.body = JSON.stringify(params);
        }
        const res = await fetch(`${this.api_url}${url}`, payload);
        const status = res.status;
        const body = await res.json();
        return { status, body };
    }

    /**
     * Build  http headers object
     * @param {string|boolean} token
     */
    buildHeaders(token = false) {
        let headers = new Headers();
        headers.append('Content-type', 'application/json');
        if (token) {
            headers.append('Authorization', `Token ${token}`);
        }

        return headers;
    }

    /**
     * Throw common error on not successful status
     * @param {object} response
     * @param {bool} auth - check for unauth error or not
     */
    handleCommonError(response, auth = false) {
        console.log(response);
        if(response.status === 401 && auth) {
            /*
            StorageService.removeToken()
            window.location(api.login)
            */
        }
        if (response.status !== 200 && response.status !== 201) {
            throw new Error(response.status)
        }
        return;
    }


    //get notes list
    async get_notes() {
        const res = await this.apiCall(api.notes, 'GET');
        this.handleCommonError(res);
        return res.body;
    }

}

export default new ApiSerice()
