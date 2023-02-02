import React, {FC} from "react";
import styles from "../DialogsBlock.module.css";

type AddMessageProps = {
    sendMessage: (text: string) => void
}

export const SendMessageBlock: FC<AddMessageProps> = ({sendMessage}) => {

    const ref = React.createRef<HTMLInputElement>()

    const addMessage = () => {

        if (ref.current) {
            sendMessage(ref.current.value)
        }
    }

    return (
        <div className={styles.sendMessagesBlock}>
            <input ref={ref} placeholder={'введи сообщение'}/>
            <button onClick={addMessage}>отправить</button>
        </div>
    )
}
