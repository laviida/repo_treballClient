import {
    getCookie,
    setCookie
} from "../../utils/cookies.js";
import {
    Token
} from "../../model/token.js";
import {
    User
} from "../../model/user.js";

export const VALID_USER = "VALID_USER";
export const NOT_VALID_USER = "NOT_VALID_USER";
export const ERROR_REQUEST = "ERROR_REQUEST";
export const USER_LOGIN = "USER_LOGIN";
export const USER_LOGOUT = "USER_LOGOUT";
export const USER_REGISTER = "USER_REGISTER";
export const REGEX_REGISTER_NAME = /^(?=.*[A-Za-z])[A-Za-z\d]{5,}$/;
export const REGEX_REGISTER_EMAIL = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const REGEX_REGISTER_PASSWORD = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;
export const REGEX_REGISTER_NAME_ERROR = "First Name\t*\xa0\xa0Minimum five characters, at least one character.";
export const REGEX_REGISTER_LNAME_ERROR = "Last Name\t*\xa0\xa0Minimum five characters, at least one character.";
export const REGEX_REGISTER_EMAIL_ERROR = "Email\t*\xa0\xa0Incorrect email.";
export const REGEX_REGISTER_PASSWORD_ERROR = "Password\t*\xa0\xa0Minimum 8 and maximum 16 characters, at least one uppercase letter, one lowercase letter, one number and one special character.";

export function login(loginUser) {
    return new Promise((resolve, reject) => {
        let valid = false;
        var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
        xobj.open("GET", "./client_treball_sergi/secret/secret", true);
        xobj.addEventListener("readystatechange", async () => {
            if (xobj.readyState == 4 && xobj.status == "200") {
                var users = JSON.parse(xobj.responseText);
                for (const u of users) {
                    if (u.user == loginUser.user && u.password == loginUser.password) {
                        let user = await new User(loginUser.user, loginUser.password);
                        valid = true;
                        setCookie("user", user.username, 365);
                        registerSession(USER_LOGIN, JSON.parse(Token.parseJwt(user.token).payload));
                        resolve(VALID_USER);
                    }
                }!valid ? registerSession(NOT_VALID_USER, {
                    loggedInAs: loginUser.user,
                    iat: new Date().getTime()
                }) : valid;
                resolve(NOT_VALID_USER);
            }
        });
        xobj.addEventListener("error", () => reject(ERROR_REQUEST));
        xobj.send(null);
    });
}

export async function register(username, password) {
    let user = await new User(username, password);
    setCookie("user", user.username, 365);
    registerSession(USER_REGISTER, JSON.parse(Token.parseJwt(user.token).payload));
}

export function isLogged() {
    return getCookie("user") != "";
}

export function registerSession(type, object) {
    //localStorage
    let sessions = JSON.parse(localStorage.getItem("sessions"));
    if (sessions) {
        if (!sessions[type]) sessions[type] = [];
        sessions[type].push(object);
        localStorage.setItem('sessions', JSON.stringify(sessions));
    } else localStorage.setItem('sessions', JSON.stringify({
        [type]: [object]
    }));
}

export function logout() {
    registerSession(USER_LOGOUT, {
        loggedOutAs: getCookie("user"),
        iat: new Date().getTime()
    });
    setCookie("user", "", -1);
}

export function checkFormField(regex, str) {
    return regex.test(str);
}