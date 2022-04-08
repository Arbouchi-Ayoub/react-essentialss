export class ActionModel {

    static create(type,payload={}){
        return new ActionModel(type,payload)
    }
    
    constructor(type, payload = {}) {
        this.type = type
        this.payload = payload
    }
}