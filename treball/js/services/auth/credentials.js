export const KEY_SPORTSIO = "sportsio";
export const TOKEN_KEY = "token_key";
export async function getKey(key) {
    let res = await fetch('../secret/keys');
    let data = await res.json();
    return data[key];
}
