import BaseModel from "./BaseModel";

export default class Database extends BaseModel {
    static async list(args) {
        args = args || {};
        let data = await this.apiClient.get(args);
        return data.devices.map((obj) => this.newInstance().fillIn(obj));
    }

    get name() {
        return this._data && this._data.name;
    }
}

Database.useName("databases");
