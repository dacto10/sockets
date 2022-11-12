export interface IMessage {
    to?: IUser;
    content: string;
}

export interface IUser {
    id: string;
    username: string;
    isActive: boolean;
}