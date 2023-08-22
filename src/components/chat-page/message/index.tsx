import { getConstruct } from "@/api/dbapi";
import { Attachment } from "@/classes/Attachment";
import { Message } from "@/classes/Message";
import { useEffect, useState } from "react";
import { RiQuestionMark } from "react-icons/ri";

interface Props {
    message: Message;
}
function getFormattedTime(timestamp: number): string {
    const date = new Date(timestamp);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    return `${hours}:${minutes}:${seconds} ${date.toLocaleDateString()}`;
}

const MessageComponent = ({ message }: Props) => {
    const [text, setText] = useState<string>("");
    const [user, setUser] = useState<string>("");
    const [userID, setUserID] = useState<string>("");
    const [isHuman, setIsHuman] = useState<boolean>(false);
    const [time, setTime] = useState<number>(0);
    const [origin, setOrigin] = useState<string>("");
    const [avatar, setAvatar] = useState<string>("");
    const [attachments, setAttachments] = useState<Attachment[]>([]);

    useEffect(() => {
        if(message === undefined || message === null) return;
        const init = async () => {
            setText(message.text);
            setUser(message.user);
            setUserID(message.userID);
            setIsHuman(message.isHuman);
            setTime(message.timestamp);
            setOrigin(message.origin);
            setAttachments(message.attachments);
            if(message.isHuman === false) {
                let construct = await getConstruct(message.userID);
                if(construct === null) return;
                setAvatar(construct.avatar);
            }
        };
        init();
    }, [message]);

    if(message === undefined || message === null) return null;

    return (
        <div className="themed-message">
            <div className="flex flex-col">
                <div className="flex flex-row items-center">
                    <div className="flex flex-row items-center w-full gap-2">
                        <div className="themed-message-avatar flex items-center justify-center">
                            {isHuman ? <RiQuestionMark size={30}/> : (avatar.length > 0 ? <img src={avatar} alt="avatar" className="w-full h-full" /> : <RiQuestionMark size={30}/>)}
                        </div>
                        <div className="themed-message-info">{user} {getFormattedTime(time)}</div>
                    </div>
                    <div className="flex flex-row items-center">
                        <div className="text-theme-italic text-xs top-2 absolute right-2 italic">{origin}</div>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="themed-message-text">{text}</div>
                    <div className="flex flex-row gap-2">
                        {attachments.map((attachment, index) => {
                            return (
                                <div key={index} className="w-16 h-16 rounded-md bg-gray-300"></div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};
export default MessageComponent;