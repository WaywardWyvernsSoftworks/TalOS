import { ipcMain } from 'electron';
import PouchDB from 'pouchdb';
import { dataPath } from '../';

let constructDB: PouchDB.Database<any>;
let chatsDB: PouchDB.Database<any>;
let commandDB: PouchDB.Database<any>;
let attachmentDB: PouchDB.Database<any>;
let instructDB: PouchDB.Database<any>;

export async function getAllConstructs() {
    return constructDB.allDocs({include_docs: true})
    .then((result) => {
        return result.rows;
    })
    .catch((err) => {
        console.log(err);
        return null;
    });
}

export async function getConstruct(id: string) {
    return constructDB.get(id).then((result) => {
        return result;
    }).catch((err) => {
        console.log(err);
    });
}

export async function addConstruct(construct: any) {
    return constructDB.put(construct).then((result) => {
        return result;
    }).catch((err) => {
        console.log(err);
    });
}

export async function removeConstruct(id: string) {
    return constructDB.get(id).then((doc) => {
        return constructDB.remove(doc);
    }).catch((err) => {
        console.log(err);
    });
}

export async function updateConstruct(construct: any) {
    return constructDB.get(construct._id).then((doc) => {
        // Merge existing fields with updated fields and retain _rev
        let updatedDoc = {...doc, ...construct};
        
        constructDB.put(updatedDoc).then((result) => {
            return result;
        }).catch((err) => {
            console.error('Error while updating document: ', err);
        });
    }).catch((err) => {
        console.error('Error while getting document: ', err);
    });
}

export async function getAllChats() {
    return chatsDB.allDocs({include_docs: true}).then((result) => {
        return result.rows;
    }).catch((err) => {
        console.log(err);
    });
}

export async function getChatsByConstruct(constructId: string) {
    return chatsDB.find({
        selector: {
            constructs: constructId
        }
    }).then((result) => {
        return result.docs;
    }).catch((err) => {
        console.log(err);
    });
}

export async function getChat(id: string) {
    return chatsDB.get(id).then((result) => {
        return result;
    }).catch((err) => {
        console.log(err);
    });
}

export async function addChat(chat: any) {
    return chatsDB.put(chat).then((result) => {
        return result;
    }).catch((err) => {
        console.log(err);
    });
}

export async function removeChat(id: string) {
    return chatsDB.get(id).then((doc) => {
        return chatsDB.remove(doc);
    }).catch((err) => {
        console.log(err);
    });
}

export async function updateChat(chat: any) {
    return chatsDB.get(chat._id).then((doc) => {
        // Merge existing fields with updated fields and retain _rev
        let updatedDoc = {...doc, ...chat};

        chatsDB.put(updatedDoc).then((result) => {
            return result;
        }).catch((err) => {
            console.error('Error while updating document: ', err);
        });
    }).catch((err) => {
        console.error('Error while getting document: ', err);
    });
}

export async function getAllCommands() {
    return commandDB.allDocs({include_docs: true}).then((result) => {
        return result.rows;
    }).catch((err) => {
        console.log(err);
    });
}

export async function getCommand(id: string) {
    return commandDB.get(id).then((result) => {
        return result;
    }).catch((err) => {
        console.log(err);
    });
}

export async function addCommand(command: any) {
    return commandDB.put(command).then((result) => {
        return result;
    }).catch((err) => {
        console.log(err);
    });
}

export async function removeCommand(id: string) {
    return commandDB.get(id).then((doc) => {
        return commandDB.remove(doc);
    }).catch((err) => {
        console.log(err);
    });
}

export async function updateCommand(command: any) {
    return commandDB.get(command._id).then((doc) => {
        // Merge existing fields with updated fields and retain _rev
        let updatedDoc = {...doc, ...command};

        commandDB.put(updatedDoc).then((result) => {
            return result;
        }).catch((err) => {
            console.error('Error while updating document: ', err);
        });
    }).catch((err) => {
        console.error('Error while getting document: ', err);
    });
}

export async function getAllAttachments() {
    return attachmentDB.allDocs({include_docs: true}).then((result) => {
        return result.rows;
    }).catch((err) => {
        console.log(err);
    });
}

export async function getAttachment(id: string) {
    return attachmentDB.get(id).then((result) => {
        return result;
    }).catch((err) => {
        console.log(err);
    });
}

export async function addAttachment(attachment: any) {
    return attachmentDB.put(attachment).then((result) => {
        return result;
    }).catch((err) => {
        console.log(err);
    });
}

export async function removeAttachment(id: string) {
    return attachmentDB.get(id).then((doc) => {
        return attachmentDB.remove(doc);
    }).catch((err) => {
        console.log(err);
    });
}

export async function updateAttachment(attachment: any) {
    return attachmentDB.get(attachment._id).then((doc) => {
        // Merge existing fields with updated fields and retain _rev
        let updatedDoc = {...doc, ...attachment};
        
        attachmentDB.put(updatedDoc).then((result) => {
            return result;
        }).catch((err) => {
            console.error('Error while updating document: ', err);
        });
    }).catch((err) => {
        console.error('Error while getting document: ', err);
    });
}

export async function getAllInstructs() {
    return instructDB.allDocs({include_docs: true}).then((result) => {
        return result.rows;
    }).catch((err) => {
        console.log(err);
    });
}

export async function getInstruct(id: string) {
    return instructDB.get(id).then((result) => {
        return result;
    }).catch((err) => {
        console.log(err);
    });
}

export async function addInstruct(instruct: any) {
    return instructDB.put(instruct).then((result) => {
        return result;
    }).catch((err) => {
        console.log(err);
    });
}

export async function removeInstruct(id: string) {
    return instructDB.get(id).then((doc) => {
        return instructDB.remove(doc);
    }).catch((err) => {
        console.log(err);
    });
}

export async function updateInstruct(instruct: any) {
    return instructDB.get(instruct._id).then((doc) => {
        // Merge existing fields with updated fields and retain _rev
        let updatedDoc = {...doc, ...instruct};

        instructDB.put(updatedDoc).then((result) => {
            return result;
        }).catch((err) => {
            console.error('Error while updating document: ', err);
        });
    }).catch((err) => {
        console.error('Error while getting document: ', err);
    });
}

export function PouchDBRoutes(){
    constructDB = new PouchDB('constructs', {prefix: dataPath});
    chatsDB = new PouchDB('chats', {prefix: dataPath});
    commandDB = new PouchDB('commands', {prefix: dataPath});
    attachmentDB = new PouchDB('attachments', {prefix: dataPath});
    instructDB = new PouchDB('instructs', {prefix: dataPath});

    ipcMain.on('get-constructs', (event, arg) => {
        getAllConstructs().then((result) => {
            event.sender.send('get-constructs-reply', result);
        });
    });

    ipcMain.on('get-construct', (event, arg) => {
        getConstruct(arg).then((result) => {
            event.sender.send('get-construct-reply', result);
        });
    });

    ipcMain.on('add-construct', (event, arg) => {
        addConstruct(arg).then((result) => {
            event.sender.send('add-construct-reply', result);
        });
    });

    ipcMain.on('update-construct', (event, arg) => {
        updateConstruct(arg).then((result) => {
            event.sender.send('update-construct-reply', result);
        });
    });

    ipcMain.on('delete-construct', (event, arg) => {
        removeConstruct(arg).then((result) => {
            event.sender.send('delete-construct-reply', result);
        });
    });

    ipcMain.on('get-chats', (event, arg) => {
        getAllChats().then((result) => {
            event.sender.send('get-chats-reply', result);
        });
    });

    ipcMain.on('get-chats-by-construct', (event, arg) => {
        getChatsByConstruct(arg).then((result) => {
            event.sender.send('get-chats-by-construct-reply', result);
        });
    });

    ipcMain.on('get-chat', (event, arg) => {
        getChat(arg).then((result) => {
            event.sender.send('get-chat-reply', result);
        });
    });

    ipcMain.on('add-chat', (event, arg) => {
        addChat(arg).then((result) => {
            event.sender.send('add-chat-reply', result);
        });
    });

    ipcMain.on('update-chat', (event, arg) => {
        updateChat(arg).then((result) => {
            event.sender.send('update-chat-reply', result);
        });
    });

    ipcMain.on('delete-chat', (event, arg) => {
        removeChat(arg).then((result) => {
            event.sender.send('delete-chat-reply', result);
        });
    });

    ipcMain.on('get-commands', (event, arg) => {
        getAllCommands().then((result) => {
            event.sender.send('get-commands-reply', result);
        });
    });

    ipcMain.on('get-command', (event, arg) => {
        getCommand(arg).then((result) => {
            event.sender.send('get-command-reply', result);
        });
    });

    ipcMain.on('add-command', (event, arg) => {
        addCommand(arg).then((result) => {
            event.sender.send('add-command-reply', result);
        });
    });

    ipcMain.on('update-command', (event, arg) => {
        updateCommand(arg).then((result) => {
            event.sender.send('update-command-reply', result);
        });
    });

    ipcMain.on('delete-command', (event, arg) => {
        removeCommand(arg).then((result) => {
            event.sender.send('delete-command-reply', result);
        });
    });

    ipcMain.on('get-attachments', (event, arg) => {
        getAllAttachments().then((result) => {
            event.sender.send('get-attachments-reply', result);
        });
    });

    ipcMain.on('get-attachment', (event, arg) => {
        getAttachment(arg).then((result) => {
            event.sender.send('get-attachment-reply', result);
        });
    });

    ipcMain.on('add-attachment', (event, arg) => {
        addAttachment(arg).then((result) => {
            event.sender.send('add-attachment-reply', result);
        });
    });

    ipcMain.on('update-attachment', (event, arg) => {
        updateAttachment(arg).then((result) => {
            event.sender.send('update-attachment-reply', result);
        });
    });

    ipcMain.on('delete-attachment', (event, arg) => {
        removeAttachment(arg).then((result) => {
            event.sender.send('delete-attachment-reply', result);
        });
    });

    ipcMain.on('get-instructs', (event, arg) => {
        getAllInstructs().then((result) => {
            event.sender.send('get-instructs-reply', result);
        });
    });

    ipcMain.on('get-instruct', (event, arg) => {
        getInstruct(arg).then((result) => {
            event.sender.send('get-instruct-reply', result);
        });
    });

    ipcMain.on('add-instruct', (event, arg) => {
        addInstruct(arg).then((result) => {
            event.sender.send('add-instruct-reply', result);
        });
    });

    ipcMain.on('update-instruct', (event, arg) => {
        updateInstruct(arg).then((result) => {
            event.sender.send('update-instruct-reply', result);
        });
    });

    ipcMain.on('delete-instruct', (event, arg) => {
        removeInstruct(arg).then((result) => {
            event.sender.send('delete-instruct-reply', result);
        });
    });

    ipcMain.on('clear-data', (event, arg) => {
        constructDB.destroy();
        chatsDB.destroy();
        commandDB.destroy();
        attachmentDB.destroy();
        createDBs();
    });

    function createDBs (){
        constructDB = new PouchDB('constructs', {prefix: dataPath});
        chatsDB = new PouchDB('chats', {prefix: dataPath});
        commandDB = new PouchDB('commands', {prefix: dataPath});
        attachmentDB = new PouchDB('attachments', {prefix: dataPath});
        instructDB = new PouchDB('instructs', {prefix: dataPath});
    }

    return {
        constructDB,
        chatsDB,
        commandDB,
        attachmentDB,
        instructDB
    }
};