import { deleteChat, getChats, getConstructs, saveNewChat } from "@/api/dbapi";
import { Chat } from "@/classes/Chat";
import { Construct } from "@/classes/Construct";
import ConstructProfile from "@/components/construct-profile";
import { useEffect, useState } from "react";
import ChatDetails from "./chat-details";
import Loading from "@/components/loading";
import { Link } from "react-router-dom";
import { PlusIcon } from "lucide-react";
interface ChatSelectorProps {
    onClick?: (chatID: Chat) => void;
}
const ChatSelector = (props: ChatSelectorProps) => {
    const { onClick } = props;
    const [chats, setChats] = useState<Chat[]>([]);
    const [constructs, setConstructs] = useState<Construct[]>([]);
    const [isLoaded, setIsLoaded] = useState<boolean>(false);
    const [selectedChat, setSelectedChat] = useState<Chat | null>(null);

    useEffect(() => {
        fetchInfo().then(() => {
            setIsLoaded(true);
        }).catch((err) => {
            console.error(err);
        });
    }, []);

    const fetchInfo = async () => {
        const fetchChats = async () => {
            await getChats().then((chats) => {
                setChats(chats);
            }).catch((err) => {
                console.error(err);
            });
        }
        const fetchConstructs = async () => {
            await getConstructs().then((constructs) => {
                setConstructs(constructs);
            }).catch((err) => {
                console.error(err);
            });
        }
        await Promise.all([fetchChats(), fetchConstructs()]);
    }

    const handleConstructClick = (construct: Construct) => {
        const newChat = new Chat();
        newChat.addConstruct(construct._id);
        newChat.setChatName(`New Chat with ${construct.name}`);
        newChat.setChatType("DM");
        saveNewChat(newChat).then(() => {
            setChats(prevChats => [...prevChats, newChat]);
            if(onClick !== undefined) onClick(newChat);
        }).catch((err) => {
            console.error(err);
        });
    }

    const handleChatDoubleClick = (chat: Chat) => {
        if(onClick !== undefined) onClick(chat);
    }

    const handleChatClick = (chat: Chat) => {
        setSelectedChat(chat);
    }

    const handleChatDelete = async (chat: Chat) => {
        await deleteChat(chat._id);
        setChats(prevChats => prevChats.filter((prevChat) => prevChat._id !== chat._id));
    }

    if(!isLoaded) return (<Loading/>);

    return (
        <div className="grid grid-rows-3 w-90vw h-[calc(95vh-70px)] gap-4 m-auto mt-4 grow-0">
            <div className="row-span-1 w-full min-h-fit themed-root grow-0 overflow-x-auto">
                <h3 className="font-semibold">Constructs</h3>
                <div className="flex flex-row w-full max-w-full h-5/6 gap-4 overflow-x-auto grow-0">
                    {Array.isArray(constructs) && constructs.map((construct) => {
                        return (
                            <ConstructProfile key={construct._id} character={construct} onClick={handleConstructClick}/>
                        )
                    })}
                    <Link
                        className="themed-root-no-padding w-36 h-full flex flex-col justify-center items-center cursor-pointer relative shrink-0 grow-0"
                        to={"/constructs/new"}
                    >
                        <div className="absolute inset-0 bg-themed-root hover:bg-theme-hover-pos flex items-center justify-center">
                            <span className="text-theme-text text-2xl font-bold justify-center items-center align-middle flex flex-col">
                                New Construct
                                <br/>
                                <PlusIcon size={48} className="text-theme-text"/>
                            </span>
                        </div>
                    </Link>
                </div>
            </div>
            <div className="row-span-2 w-full h-full grid grid-cols-4 grow-0 gap-4">
                <div className="col-span-2 flex flex-col themed-root">
                    <h3 className="font-semibold">Chats</h3>
                    <div className="flex flex-col w-full gap-4 overflow-y-auto">
                        {Array.isArray(chats) && chats.sort((a, b) => b.lastMessageDate - a.lastMessageDate).map((chat) => {
                            return (
                                <ChatDetails key={chat._id} chat={chat} onDoubleClick={handleChatDoubleClick} onClick={handleChatClick} onDelete={handleChatDelete}/>
                            )
                        })}
                    </div>
                </div>
                <div className="col-span-2 grid grid-rows-2 gap-4">
                    <div className="row-span-1 themed-root flex flex-col">
                        <h3 className="font-semibold">Chatting Settings</h3>
                        <div className="grid grid-cols-2 w-full h-full">
                            <div className="flex flex-col col-span-1 w-full h-full">
                            </div>
                            <div className="flex flex-col col-span-1 w-full h-full">

                            </div>
                        </div>
                    </div>
                    <div className="row-span-1 themed-root flex flex-col">
                        <h3 className="font-semibold">Selected Chat Details</h3>
                        <div className="grid grid-cols-2 w-full h-full">
                            <div className="flex flex-col col-span-1 w-full h-full">

                            </div>
                            <div className="flex flex-col col-span-1 w-full h-full">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChatSelector;