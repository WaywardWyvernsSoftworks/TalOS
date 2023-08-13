import { Agent } from "@/classes/Agent";
import { Attachment } from "@/classes/Attachment";
import { Chat } from "@/classes/Chat";
import { IpcRendererEvent, ipcRenderer } from "electron";

export async function getAgents(): Promise<Agent[]> {
    return new Promise((resolve, reject) => {
        ipcRenderer.send("get-agents");

        ipcRenderer.once("get-agents-reply", (event: IpcRendererEvent, data: any[]) => {
            if (data) {
                console.log(data[0]);
                const agents = data.map((doc: any) => {
                    return new Agent(
                        doc._id,
                        doc.name,
                        doc.nickname,
                        doc.avatar,
                        doc.commands,
                        doc.visualDescription,
                        doc.personality,
                        doc.background,
                        doc.relationships,
                        doc.interests,
                        doc.greetings,
                        doc.farewells,
                    );
                });
                resolve(agents);
            } else {
                reject(new Error("No data received from 'agents' event."));
            }
        });
    });
}

export async function getAgent(id: string): Promise<Agent> {
    return new Promise((resolve, reject) => {
        ipcRenderer.send("get-agent", id);
        ipcRenderer.once("get-agent-reply", (event: IpcRendererEvent, data: any) => {
            if (data) {
                console.log(data);
                const agent = new Agent(
                    data._id,
                    data.name,
                    data.nickname,
                    data.avatar,
                    data.commands,
                    data.visualDescription,
                    data.personality,
                    data.background,
                    data.relationships,
                    data.interests,
                    data.greetings,
                    data.farewells,
                );
                resolve(agent);
            } else {
                reject(new Error("No data received from 'agent' event."));
            }
        });
    });
}

export async function saveNewAgent(agent: Agent) {
    ipcRenderer.send('add-agent', agent);
}

export async function updateAgent(agent: Agent) {
    ipcRenderer.send('update-agent', agent);
}

export async function deleteAgent(id: string) {
    ipcRenderer.send('delete-agent', id);
}

export async function getCommands(): Promise<string[]> {
    return new Promise((resolve, reject) => {
        ipcRenderer.send("get-commands");

        ipcRenderer.once("get-commands-reply", (event: IpcRendererEvent, data: any[]) => {
            if (data) {
                resolve(data);
            } else {
                reject(new Error("No data received from 'commands' event."));
            }
        });
    });
}

export async function getCommand(id: string): Promise<string> {
    return new Promise((resolve, reject) => {
        ipcRenderer.send("get-command", id);

        ipcRenderer.once("get-command-reply", (event: IpcRendererEvent, data: any) => {
            if (data) {
                resolve(data);
            } else {
                reject(new Error("No data received from 'command' event."));
            }
        });
    });
}

export async function saveNewCommand(command: string) {
    ipcRenderer.send('add-command', command);
}

export async function updateCommand(command: string) {
    ipcRenderer.send('update-command', command);
}

export async function deleteCommand(id: string) {
    ipcRenderer.send('delete-command', id);
}

export async function getAttachments(): Promise<Attachment[]> {
    return new Promise((resolve, reject) => {
        ipcRenderer.send("get-attachments");

        ipcRenderer.once("get-attachments-reply", (event: IpcRendererEvent, data: any[]) => {
            if (data) {
                const attachments = data.map((doc: any) => {
                    return new Attachment(
                        doc.doc._id,
                        doc.doc.name,
                        doc.doc.type,
                        doc.doc.data,
                    );
                });
                resolve(attachments);
            } else {
                reject(new Error("No data received from 'attachments' event."));
            }
        });
    });
}

export async function getAttachment(id: string): Promise<Attachment> {
    return new Promise((resolve, reject) => {
        ipcRenderer.send("get-attachment", id);

        ipcRenderer.once("get-attachment-reply", (event: IpcRendererEvent, data: any) => {
            if (data) {
                const attachment = new Attachment(
                    data._id,
                    data.name,
                    data.type,
                    data.data,
                );
                resolve(attachment);
            } else {
                reject(new Error("No data received from 'attachment' event."));
            }
        });
    });
}

export async function saveNewAttachment(attachment: Attachment) {
    ipcRenderer.send('add-attachment', attachment);
}

export async function updateAttachment(attachment: Attachment) {
    ipcRenderer.send('update-attachment', attachment);
}

export async function deleteAttachment(id: string) {
    ipcRenderer.send('delete-attachment', id);
}

export async function getChats(): Promise<Chat[]> {
    return new Promise((resolve, reject) => {
        ipcRenderer.send("get-chats");

        ipcRenderer.once("get-chats-reply", (event: IpcRendererEvent, data: any[]) => {
            if (data) {
                const chats = data.map((doc: any) => {
                    return new Chat(
                        doc.doc._id,
                        doc.doc.name,
                        doc.doc.type,
                        doc.doc.messages,
                        doc.doc.lastMessage,
                        doc.doc.lastMessageDate,
                        doc.doc.firstMessageDate,
                        doc.doc.agents,
                    );
                });
                resolve(chats);
            } else {
                reject(new Error("No data received from 'chats' event."));
            }
        });
    });
}

export async function getChatsByAgent(agentId: string): Promise<Chat> {
    return new Promise((resolve, reject) => {
        ipcRenderer.send("get-chats-by-agent", agentId);

        ipcRenderer.once("get-chats-by-agent-reply", (event: IpcRendererEvent, data: any) => {
            if (data) {
                const chat = new Chat(
                    data._id,
                    data.name,
                    data.type,
                    data.messages,
                    data.lastMessage,
                    data.lastMessageDate,
                    data.firstMessageDate,
                    data.agents,
                );
                resolve(chat);
            } else {
                reject(new Error("No data received from 'chats-by-agent' event."));
            }
        });
    });
}

export async function getChat(id: string): Promise<Chat> {
    return new Promise((resolve, reject) => {
        ipcRenderer.send("get-chat", id);

        ipcRenderer.once("get-chat-reply", (event: IpcRendererEvent, data: any) => {
            if (data) {
                const chat = new Chat(
                    data._id,
                    data.name,
                    data.type,
                    data.messages,
                    data.lastMessage,
                    data.lastMessageDate,
                    data.firstMessageDate,
                    data.agents,
                );
                resolve(chat);
            } else {
                reject(new Error("No data received from 'chat' event."));
            }
        });
    });
}

export async function saveNewChat(chat: Chat) {
    ipcRenderer.send('add-chat', chat);
}

export async function updateChat(chat: Chat) {
    ipcRenderer.send('update-chat', chat);
}

export async function deleteChat(id: string) {
    ipcRenderer.send('delete-chat', id);
}

export async function getStorageValue(key: string): Promise<string> {
    return new Promise((resolve, reject) => {
        ipcRenderer.send("get-data", key);

        ipcRenderer.once("get-data-reply", (event: IpcRendererEvent, data: any) => {
            if (data) {
                resolve(data);
            } else {
                reject(new Error("No data received from 'data' event."));
            }
        });
    });
}

export async function setStorageValue(key: string, value: string) {
    ipcRenderer.send('set-data', key, value);
}

export async function clearDBs(){
    ipcRenderer.send('clear-data');
}