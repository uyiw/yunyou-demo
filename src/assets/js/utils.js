export default {
  pxToRem(content) {
    if(!content) return;
    let reg = /([:|(]*)(\s*)([-|+\d+.*\d+]+)(px)/g;
    let str = content.replace(reg, (content, $1, space, $2) => {
      return $1 + space + (parseInt($2) / 75) + 'rem'
    })
    let regSpace = /(>)(\s)+(<)/g;
    str = str.replace(regSpace, (content, $1, space, $2) => {
      return $1 + $2;
    })
    return str
  },
  formatDate: function formatDate(time,fmt){
    if(!time) return "";
    var d;
    if(typeof time=='string'){
      time=time.replace(/\-/g,"/");
      d=new Date(time);
    }else if(typeof time=='number'){
      d=new Date(time);
    }else if(typeof time=='object'){
      if(time.getTime){
        d=time;
      }else{
        d=new Date(time.time);
      }

    }
    fmt=fmt?fmt:"yyyy-MM-dd";
    var o = {
      "M+" : d.getMonth()+1, //月份
      "d+" : d.getDate(), //日
      "h+" : d.getHours()%12 == 0 ? 12 : d.getHours()%12, //小时
      "H+" : d.getHours(), //小时
      "m+" : d.getMinutes(), //分
      "s+" : d.getSeconds(), //秒
      "q+" : Math.floor((d.getMonth()+3)/3), //季度
      "S" : d.getMilliseconds() //毫秒
    };
    var week = {
      "0" : "\u65e5",
      "1" : "\u4e00",
      "2" : "\u4e8c",
      "3" : "\u4e09",
      "4" : "\u56db",
      "5" : "\u4e94",
      "6" : "\u516d"
    };
    if(/(y+)/.test(fmt)){
      fmt=fmt.replace(RegExp.$1, (d.getFullYear()+"").substr(4 - RegExp.$1.length));
    }
    if(/(E+)/.test(fmt)){
      fmt=fmt.replace(RegExp.$1, ((RegExp.$1.length>1) ? (RegExp.$1.length>2 ? "\u661f\u671f" : "\u5468") : "")+week[d.getDay()+""]);
    }
    for(var k in o){
      if(new RegExp("("+ k +")").test(fmt)){
        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
      }
    }
    return fmt;
  },
}
