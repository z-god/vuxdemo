/**
 *@description 相册选择图片返回本地路径
 *@return {Object} {
  "fileSize" : "309KB",
  "fileName" : "201610131050029.jpg",
  "filePath" : "/Users/zcc/Libr14FBE-976F-4716-A917-6E8C
 }
 * @example  this.$hybridApi.chooseImageAlbum(s)
 */
export default function(oparam){
   this.success=oparam.success;
   this.fail=oparam.fail;
   MediaPicker.getMedias({
    'selectMode': 101, //101=picker image and video , 100=image , 102=video
    'maxSelectCount': 40, //default 40 (Optional)
    'maxSelectSize': 188743680, //188743680=180M (Optional)
}, function(medias) {
    for (let i = 0; i < medias.length; i++) {
        //medias[i].thumbnailQuality=50; (Optional)
        //loadingUI(); //show loading ui
        MediaPicker.extractThumbnail(medias[i], function(data) {
            // let json={imagePath:data.thumbnailBase64};
        success(data.thumbnailBase64)
        });
        
    }     
    // return imgsrcs;
})
}