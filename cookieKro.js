5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
var Cookie = { 
    // 读取
     read : function(name){ 
        var cookieStr = "; "+document.cookie+"; "; 
        var index = cookieStr.indexOf("; "+name+"="); 
        if (index!=-1){ 
            var s = cookieStr.substring(index+name.length+3,cookieStr.length); 
            return unescape(s.substring(0, s.indexOf("; "))); 
        }else{ 
            return null; 
        } 
    }, 
    // 设置
     set : function(name,value,expires){ 
        var expDays = expires*24*60*60*1000; 
        var expDate = new Date(); 
        expDate.setTime(expDate.getTime()+expDays); 
        var expString = expires ? "expires="+expDate.toGMTString() : ""; 
        var pathString = ";path=/"; 
        document.cookie = name + "=" + escape(value) + expString + pathString; 
    }, 
    // 删除
     del : function(name){ 
        var exp = new Date(new Date().getTime()-1); 
        var s=this.read(name); 
        if(s!=null) {
            document.cookie= name + "="+s+"expires="+exp.toGMTString()+";path=/"
        }
    } 
};

// Cookie.set("xuanfengge", "www.xuanfengge.com", 7);
// alert(Cookie.read("xuanfengge"));
// Cookie.del("xuanfengge");