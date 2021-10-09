import BaseModel from "./BaseModel";
import moment from "../moment";

export default class Video extends BaseModel {

    get queued_at() {
        return this._data && moment(Math.round(this._data.queued_at * 1000));
    }

    get started_at() {
        return this._data && moment(Math.round(this._data.started_at * 1000));
    }

    get finished_at() {
        if (!this._data) {
            return null;
        }
        const timestamp = Math.round(this._data.finished_at * 1000);
        if (timestamp > 0) {
            return moment(Math.round(this._data.finished_at * 1000));
        }
        return null;
    }

    get path() {
        return this._data && this._data.path;
    }

}

Video.useName("videos");
