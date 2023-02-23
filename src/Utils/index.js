import jwt_decode from "jwt-decode";

const TOKEN_KEY = 'JWT';

export const login = (jwt) => {
    localStorage.setItem(TOKEN_KEY, jwt);
}

export const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
}

export const isAdmin = () => {
    const tokenDoStorage = localStorage.getItem(TOKEN_KEY)
    if (tokenDoStorage) {
        const usuarioLogado = jwt_decode(tokenDoStorage)
        return usuarioLogado.tipo === 'admin'
    }
}

