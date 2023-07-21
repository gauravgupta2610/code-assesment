import { ROLES } from "../constant/constant"

export const humanize = (text )=> {
    return text.slice(0,1).toUpperCase() + text.slice(1, text.length);
}

export const urlNavigation = (navigate, role )=> {
    const currentrole= role || localStorage.getItem('loginRole');
    switch (currentrole) {
        case ROLES.ADMIN:
            return navigate('/admin');
        case ROLES.USER:
            return navigate('/user');
        default:
            return navigate('/');
    }
}