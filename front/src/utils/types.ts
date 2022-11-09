export interface User {
    id: string;
    username: string;
}

export interface User {
    id: string;
    username: string;
}

export interface Message {
    from: User;
    message: string
}

export interface PrivateConversation {
    with: User;
    messages: Message[]
}

export interface Messages {
    general: Message[];
    privates: PrivateConversation[]
}