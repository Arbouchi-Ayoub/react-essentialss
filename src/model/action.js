export class ActionModel {

    constructor(type, payload = {}) {
        this.type = type
        this.payload = payload
    }
}