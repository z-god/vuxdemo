/**
 * 使用此方法前cordova需先安装相应插件
 * cordova plugin add cordova-plugin-x-toast
 * @param {String} title 
 * @param {Number} during  //待完善
 * @param {String} position //待完善
 * @example this.$hybridApi.showToast("提示信息")
 */

export default function(obj){
    let _title=obj.title;
    let _success=obj.success;
    let _fail=obj.fail;
    window.plugins.toast.show(_title, 'short','center',
    function(a){
        _success('toast success: ' + a)},
         function(b){_fail('toast error: ' + b)})

    
 
}