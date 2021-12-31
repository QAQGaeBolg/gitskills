import * as cc from "cc"

export default class HTTP {
    /*
    public static get(path: string, params: any, callBack: any, data: any = {username: "zyf", password: "DJzyf1528" }) {
        var request: XMLHttpRequest = new XMLHttpRequest()
        request.open("GET", path, true)
        request.setRequestHeader('content-type', 'application/json')
        request.send(JSON.stringify(data))
        request.onreadystatechange = function() {
            if (request.readyState == 4) {
                //根据服务器的响应内容格式处理响应结果
                if(request.getResponseHeader('content-type')==='application/json'){
                    var result = JSON.parse(request.responseText);	
                    //根据返回结果判断验证码是否正确
                    if(result.code===-1){
                        alert('验证码错误');
                    }
                } else {
                    console.log(request.responseText);
                }
            }
        }
    }
    */
}