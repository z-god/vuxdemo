/**
 * 用于系统管理员登录
 * @param   {String} userCode=SysAdmin;//账号
 * @param   {String} pwd='';//密码
 * @return  obj={"Success": true,
                 "Message": null,
                 "Result": {
                    "UserId": 0.0,//用户id
                    "UserCode": null,//用户账号
                    "UserName": null,//用户名称
                    "InvOrg": 0//组织id
                },
                 "Context": {
                    "Ticket": "str"票据信息
                }
                }
 *  @example axiosApi.login().then(obj=>{})
 */
import Vue from 'vue';
import Storage from '../storage.js'
export default function (userCode, pwd) {
        return Vue.axios.post(Storage.url(), {
          "ApiType": "AuthenticationController",
          "Parameters": [{
              "Value": userCode
            },
            {
              "Value": pwd
            }
          ],
          "Method": "Login",
          "Context": {}
        }, {
          timeout: 2000
        }).then(res => {
          let obj = res.data
          return obj
        })
  }