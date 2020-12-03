import { getKey, TOKEN_KEY } from "../credentials.js";

export class Token {
    static ALGORITHMS = { HS256: "HS256" };
    constructor(algorithm, username) {
        this.header = window.btoa('{"alg":' + algorithm + ',"typ":"JWT"}');
        this.payload = window.btoa('{"loggedInAs":"' + username + '","iat":' + new Date().getTime() + '}');
        this.unsignedToken = window.btoa(this.header) + '.' + window.btoa(this.payload);
    }
    async createToken() {
        var key = await getKey(TOKEN_KEY);
        var signature = CryptoJS.enc.Base64.stringify(CryptoJS.SHA256(key, this.unsignedToken));
        return window.btoa(this.header) + "." + window.btoa(this.payload) + "." + window.btoa(signature);
    }
    static parseJwt(token) {
        return { payload: window.atob(window.atob(token.split(".")[1])) };
    }
}