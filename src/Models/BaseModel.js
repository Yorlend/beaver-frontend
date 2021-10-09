import Model from "replimod";

class BaseModel extends Model {
    constructor(uuid) {
        super(uuid);
        this._uuid = uuid;
    }

    static onRequest(xhr) {
        xhr.setRequestHeader("Authorization", "Bearer MTExMTEK");
        return xhr;
    }

    get uuid() {
        if (this._data.uuid !== undefined) {
            return this._data.uuid;
        }
        return this._uuid;
    }
}

// API Base host
let baseHost = "127.0.0.1:8080";
if (window.location && ["127.0.0.1", "localhost"].indexOf(window.location.hostname) === -1) {
    baseHost = "api.panoramici.zotmos.ru";
}

BaseModel.useBaseURL(`http://${baseHost}/api/v1`);

export default BaseModel;
