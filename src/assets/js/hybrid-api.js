import chooseImageAlbum from './hybrid-api/choose-image-album.js'
import chooseImage from './hybrid-api/choose-image.js'
import uploadFile from './hybrid-api/upload-file.js'
import getUserInfo from './hybrid-api/get-user-info.js'
import getLocation from './hybrid-api/get-location.js'
import makePhoneCall from './hybrid-api/make-phone-call.js'
import sendSMS from './hybrid-api/send-sms.js'
import getNetWork from './hybrid-api/get-network.js'
import scanCode from './hybrid-api/scan-code.js'
import showToast from './hybrid-api/show-toast.js'
import showConfirm from './hybrid-api/show-confirm.js'
import showAlert from './hybrid-api/show-alert.js'
let hybridApi={
    chooseImageAlbum,chooseImage,uploadFile,getUserInfo,getLocation,makePhoneCall,sendSMS,getNetWork,
    scanCode,
    showToast,showAlert,showConfirm,
}
if(process.env.NODE_ENV === 'production'){
       //build   
}else{
 //dev
   for (var apiName in hybridApi) {
    hybridApi[apiName]=function(){console.log("调用原生接口")}
  }
}

export default hybridApi
