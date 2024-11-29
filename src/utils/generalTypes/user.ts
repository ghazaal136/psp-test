export interface IUser {
    id: string;
    firstName: string;
    lastName: string;
    role: "admin" | "user",
    avatar: string;
}