import { USER_LIST } from "./constant/constant"


export const AuthenticateLogin =(payload)=>{
    const check = USER_LIST.filter((val) => val.userName === payload.userName && val.password === payload.password)
    if (check.length === 1) {
        return check[0]
    } else {
        return false
    }
}