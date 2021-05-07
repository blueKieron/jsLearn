export function isNumber(s){ 
    return !isNaN(s); 
} 
export function isString(s){ 
     return typeof s == "string"; 
} 
export function isBoolean(s){ 
     return typeof s == "boolean"; 
} 
export function isFunction(s){ 
     return typeof s == "function"; 
} 
export function isNull(s){ 
     return s == null; 
} 
export function isUndefined(s){ 
     return typeof s == "undefined"; 
} 
export function isEmpty(s){ 
    return /^\s*$/.test(s); 
} 
export function isArray(s){ 
     return s instanceof Array; 
}
//判断是否为空对象
export function isEmptyObj(obj){
    for(var key in obj){
        return false;
    }
    return true;
}

//实现字符串长度截取并在结尾添加…
export function cutstr(str, len) {
  var temp;
  var icount = 0;
  var patrn = /[^\x00-\xff]/; //表示汉字或者全角，即ASCII 编码不在0-255的字符
  var strre = "";
  for (var i = 0; i < str.length; i++) {
    if (icount < len) {
      // 每次截取一个字符
      temp = str.substr(i, 1);
      if (patrn.exec(temp) == null) {
        // 如果是英文、半角
        icount = icount + 1;
      } else {
        // 如果是中文、全角
        icount = icount + 2;
      }
      // 字符串连接
      strre += temp;
    } else {
      break;
    }
  }
  return strre + "...";
}
// demo: alert(cutstr("轩枫阁", 5))  轩枫...

//”金钱“格式转换
export function cashFormat(number, decimals, dec_point, thousands_sep) {
    /*
    * 参数说明：
    * number：要格式化的数字
    * decimals：保留几位小数
    * dec_point：小数点符号
    * thousands_sep：千分位符号
    * */
    number = (number + '').replace(/[^0-9+-Ee.]/g, '');
    var n = !isFinite(+number) ? 0 : +number,
        prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
        sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
        dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
        s = '',
        toFixedFix = function (n, prec) {
            var k = Math.pow(10, prec);
            return '' + Math.ceil(n * k) / k;
        };
 
    s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
    var re = /(-?\d+)(\d{3})/;
    while (re.test(s[0])) {
        s[0] = s[0].replace(re, "$1" + sep + "$2");
    }
 
    if ((s[1] || '').length < prec) {
        s[1] = s[1] || '';
        s[1] += new Array(prec - s[1].length + 1).join('0');
    }
    return s.join(dec);
}
// demo: cashFormat(1234567.089, 2, ".", ",");//1,234,567.09

//返回两个日期之间的时间间隔
export function dateDiff(date1,date2) {
    var year,month,date,day1,day2;
    var reg = /^(\d{4})([-\/\.])(\d{2})\2(\d{2})$/;
 
    reg.test(date1);
    year  = RegExp.$1.parseInt();
    month = RegExp.$3.parseInt() - 1;
    date  = RegExp.$4.parseInt();
    day1 = new Date(year,month,date);
 
    reg.test(date2);
    year  = RegExp.$1.parseInt();
    month = RegExp.$3.parseInt() - 1;
    date  = RegExp.$4.parseInt();
    day2 = new Date(year,month,date);
 
    return (day1.getTime() - day2.getTime()) / 86400000;
}

