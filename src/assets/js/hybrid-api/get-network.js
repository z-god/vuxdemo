/**
 *@description 相册选择图片返回本地路径
 @param {Object} 传入参数:{
	filePaths : [ 本地路径1,本地路径2,本地路径3...无限],
	callProgress : "uploadProgress" // 上传进度回调方法 function uploadProgress(e) { //e 会回调一个%数 }
}@return  {Array} [
  {
"fileSize" : 309783,
"fileId" : "--Boundary+2FED8637D2C76CE1",
"fileName" : "201610131055031.jpg",
"serverPath" : "http://120.76.207.37:80/g1/M00/00/18/ChoD71f-962AUtDpAAS6F9KCthw610.jpg",
"filePath" : ""
  },
  {
"fileSize" : 309783,
"fileId" : "--Boundary+2FED8637D2C76CE1",
"fileName" : "201610131055031.jpg",
"serverPath" : "http://120.76.207.37:80/g1/M00/00/18/ChoD71f-962ACbEtAAS6F9KCthw690.jpg",
"filePath" : ""
  }
]
 * @example  this.$hybridApi.chooseImageAlbum(s)
 */
export default function(){
    alert("获取定位信息");
    return new Promise(function(resolve, reject){
    cordova.exec(function(obj) {  
        resolve(obj)
    }, function(e) {        
    }, "Telephone","checkNetStatus",[]);

})
}