import { Token } from "./token.js";
'use strict'
export class User {
    constructor(username, password) {
        return new Promise(async (resolve) => {
            this.username = username;
            this.password = password;
            this.token = await new Token(Token.ALGORITHMS.HS256, this.username).createToken();
            resolve(this);
        });
    }

    getUsername() {
        return this.username;
    }

    getPassword() {
        return this.password;
    }
    getToken() {
        return this.token;
    }

    setUsername(username) {
        this.username = username;
    }

    setPassword(password) {
        this.password = password;
    }

    static async fromJson(stringObject) {
        return await Object.assign(await new User(), JSON.parse(stringObject))
    }
}