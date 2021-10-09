import BaseModel from "./BaseModel";
import moment from "../moment";

export default class Device extends BaseModel {

    static async list(args) {
        args = args || {};
        let data = await this.apiClient.get(args);
        return data.devices.map((obj) => this.newInstance().fillIn(obj));
    }

    get name() {
        return this._data && this._data.name;
    }

    get created_at() {
        return this._data && moment(Math.round(this._data.created_at * 1000));
    }

    get online_at() {
        return this._data && moment(Math.round(this._data.online_at * 1000));
    }
}

Device.useName("devices");
