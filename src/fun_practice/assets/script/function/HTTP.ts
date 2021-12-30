import * as cc from "cc"

export default class HTTP {
    public static get(path: string, params: any, callBack: any) {
        var request: XMLHttpRequest = new XMLHttpRequest()
        request.open("GET", path)
        
    }
}