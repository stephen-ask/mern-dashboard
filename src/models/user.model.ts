export interface User { 
    "_id": string,
    "username"?: string,
    "phone"?: string
}
export interface LoginUser {
    username?: string,
    password?: string
}

export interface LoginErr {
    username?: string,
    password?: string
}

export interface RegisterErr {
    username?: string,
    password?: string,
    phone?: string
}