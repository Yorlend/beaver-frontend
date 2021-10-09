import BaseModel from "./BaseModel";
import moment from "../moment";

export default class Image extends BaseModel {

    get uploaded_at() {
        return this._data && moment(Math.round(this._data.uploaded_at * 1000));
    }

    get path() {
        return this._data && this._data.path;
    }

    get preview_path() {
        return this._data && this._data.preview_path;
    }

    get angle() {
        return this._data && this._data.angle;
    }
}

Image.useName("images");
