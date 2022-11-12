export interface IUser {
    id: string;
    username: string;
    isActive: boolean;
}

export interface IMessage {
    from?: IUser;
    message: string
}

export interface IPrivateConversation {
    with: IUser;
    messages: IMessage[]
}

export interface Messages {
    general: IMessage[];
    privates: IPrivateConversation[]
}