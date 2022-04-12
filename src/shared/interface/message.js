import { MessageModel } from "model"

export const Message = ({ msg = new MessageModel(), alert = false }) => {

    return (
        <p className={` ${msg.content ? `${!alert ? "text-" : " mt-2 alert alert-"}` + msg.type : "d-none"}`} >
            {msg.content}
        </p>
    )
}