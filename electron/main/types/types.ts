import { CommandInteraction } from 'discord.js';

export type ChatInterface = {
    _id: string;
    name: string;
    type: string;
    messages: MessageInterface[];
    lastMessage: MessageInterface;
    lastMessageDate: number;
    firstMessageDate: number;
    constructs: string[];
    humans: string[];
    chatConfigs: any[];
}

export type MessageInterface = {
    _id: string;
    user: string;
    avatar: string | null;
    text: string;
    userID: string;
    timestamp: number;
    origin: string;
    isHuman: boolean;
    isCommand: boolean;
    isPrivate: boolean;
    participants: string[];
    attachments: AttachmentInferface[];
}

export type AttachmentInferface = {
    _id: string;
    type: string;
    filename: string;
    data: string;
    size: number;
}

export type ConstructInterface = {
    _id: string;
    name: string;
    nickname: string;
    avatar: string;
    commands: string[];
    visualDescription: string;
    personality: string;
    background: string;
    relationships: string[];
    interests: string[];
    greetings: string[];
    farewells: string[];
    authorsNote: string;
}

export type Alias = {
    _id: string;
    name: string;
    location: string;
}

export type AuthorsNote = {
    _id: string;
    note: string;
    location: string;
}

export type ChannelConfigInterface = {
    _id: string;
    guildId: string;
    constructs: string[];
    aliases: Alias[];
    authorsNotes: AuthorsNote[];
    authorsNoteDepth: number;
}

interface SlashCommandOption {
    name: string;
    description: string;
    type: number;  // Changed this from 'STRING' | 'INTEGER' ... to number
    required?: boolean;
    choices?: { name: string; value: string | number }[];
}

export interface SlashCommand {
    name: string;
    description: string;
    options?: SlashCommandOption[];
    execute: (interaction: CommandInteraction) => void | Promise<void>;
}

export type UserInterface = {
    _id: string;
    name: string;
    nickname: string;
    avatar: string;
    personality: string;
    background: string;
    relationships: string[];
    interests: string[];
}

export type ConstructChatConfig = {
    _id: string;
    doInstruct: boolean;
    doMemories: boolean;
    doActions: boolean;
    doSprites: boolean;
    doVoice: boolean;
    doLurk: boolean;
    doRandomGreeting: boolean;
    doRandomFarewell: boolean;
    doRandomThought: boolean;
    haveThoughts: boolean;
    thinkBeforeChat: boolean;
    replyToConstruct: number;
    replyToConstructMention: number;
    replyToUser: number;
    replyToUserMention: number;
}

export interface LorebookInterface {
    _id: string;
    name: string;
    avatar: string;
    description: string;
    scan_depth: number;
    token_budget: number;
    recursive_scanning: boolean;
    global: boolean;
    constructs: string[];
    extensions: Record<string, any>;
    entries: LoreEntryInterface[];
}

export type EntryPosition = 'before_char' | 'after_char';

export interface LoreEntryInterface {
    _id: string;
    keys: string[];
    content: string;
    extensions: Record<string, any>;
    enabled: boolean;
    case_sensitive: boolean;
    name: string;
    priority: number;
    comment: string;
    selective: boolean;
    secondary_keys: string[];
    constant: boolean;
    position: EntryPosition;
}
