import BaseModel from "./BaseModel";
import Image from "./Image";
import Video from "./Video";
import moment from "../moment";

export default class Photoset extends BaseModel {

    static async create(data) {
        let instance = this.newInstance();
        return await instance.apiClient.post(data);
    }

    static async list(args) {
        args = args || {};
        let data = await this.apiClient.get(args);
        return data.photosets.map((obj) => this.newInstance().fillIn(obj));
    }

    get name() {
        return this._data && this._data.name;
    }

    get images_count() {
        return this._data && this._data.images_count;
    }

    get created_at() {
        return this._data && moment(Math.round(this._data.created_at * 1000));
    }

    /**
     * Get images from photoset as Image objects
     * @returns {Promise<unknown>}
     */
    images() {
        return new Promise((resolve, reject) => {
            this.apiClient().images.get().then(
                data => {
                    if (!data.images) {
                        reject();
                    } else {
                        resolve(data.images.map(image => {
                            return Image.newInstance().fillIn(image);
                        }))
                    }
                }
            ).catch(reject);
        });
    }

    /**
     * Gets photoset's video as Video object
     * @returns {Promise<unknown>}
     */
    video() {
        return new Promise((resolve, reject) => {
            this.apiClient.video.get()
                .then(video => resolve(
                    Video.newInstance().fillIn(video)
                    )
                ).catch(reject);
        })
    }

    async requestVideo() {
        return await this.apiClient().video.post();
    }
}

Photoset.useName("photosets");
