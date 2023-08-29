export function getRouter () {
    return localStorage.getItem("router") ? JSON.parse(localStorage.getItem("router")) : ""
}

export function getToken () {
    return localStorage.getItem("token")
}