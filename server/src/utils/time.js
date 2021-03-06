 /**
* 毫秒转换友好的显示格式
* 输出格式：21小时28分钟15秒
* @param  {[type]} time [description]
* @return {[type]}      [description]
*/
export function timeToDate(time) {
   // 获取当前时间戳
   var currentTime = parseInt(new Date().getTime()/1000);
   var diffTime = currentTime-time;
   var second = 0;
   var minute = 0;
   var hour = 0;
   if (null != diffTime && "" != diffTime) {
       if (diffTime > 60 && diffTime < 60 * 60) {
           diffTime = parseInt(diffTime / 60.0) + "分钟" + parseInt((parseFloat(diffTime / 60.0) - parseInt(diffTime / 60.0)) * 60) + "秒";
       }
       else if (diffTime >= 60 * 60 && diffTime < 60 * 60 * 24) {
           diffTime = parseInt(diffTime / 3600.0) + "小时" + parseInt((parseFloat(diffTime / 3600.0) -
               parseInt(diffTime / 3600.0)) * 60) + "分钟" +
               parseInt((parseFloat((parseFloat(diffTime / 3600.0) - parseInt(diffTime / 3600.0)) * 60) -
               parseInt((parseFloat(diffTime / 3600.0) - parseInt(diffTime / 3600.0)) * 60)) * 60) + "秒";
       }
       else {
           //超过1天
           var date = new Date(parseInt(time) * 1000);
           diffTime = date.getFullYear()+"/"+(date.getMonth()+1)+"/"+date.getDate();
           //diffTime = parseInt(diffTime) + "秒";
       }
   }
   return diffTime;
}

/**
 * 毫秒转换友好的显示格式
 * 输出格式：21小时前
 * @param  {[type]} time [description]
 * @return {[type]}      [description]
 */
export function dateStr(date){
  if (!date) return ''
  //获取时间戳
  var timeCom = new Date().getTime();
  var dateCom = new Date(date).getTime();
  var time = parseInt((timeCom-dateCom)/1000);
  //存储转换值 
  var s;
  if (time < 60*2) {
    //两分钟内
    return '刚刚';
  } else if ((time < 60*60) && (time >= 60*2)) {
    //超过两分钟少于1小时
    s = Math.floor(time / 60);
    return  s + "分钟前";
  } else if ((time < 60*60*24) && (time >= 60*60)) { 
    //超过1小时少于24小时
    s = Math.floor(time / 60 / 60);
    return  s + "小时前";
  } else if ((time < 60*60*24*3) && (time >= 60*60*24)) { 
    //超过1天少于3天内
    s = Math.floor(time / 60 / 60 / 24);
    return s + "天前";
  } else { 
    //超过3天
    var dateformatting = new Date(date);
    return dateformatting.getFullYear() + "/" + (dateformatting.getMonth() + 1) + "/" + dateformatting.getDate();
  }
}
