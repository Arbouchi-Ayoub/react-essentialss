export const TypeMessage = {
    ERROR: "danger",
    SUCCESS: "success"
}

export class MessageModel {
    constructor(content = "", type = TypeMessage.ERROR) {
        this.content = content
        this.type = type
    }
}