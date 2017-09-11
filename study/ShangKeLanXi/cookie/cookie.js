// function setCookie(name, value, end_day) {
//     var d = new Date();
//     d.setDate(d.getDate() + end_day);
//     var exp = end_day ? ';expires=' + d.toString() :
//         '';
//     document.cookie = name + '=' + escape(value) + exp + ';path=/';
// }

// function getCookie() {
//     var coo = document.cookie;
//     if (coo) {
//         var arr = coo.split('; ');
//         var obj = {};
//         for (var i = 0, len = arr.length; i < len; i++) {
//             obj[arr[i].split('=')[0]] = unescape(arr[i].split('=')[1]);
//         }
//         return obj;
//     }
// }


// 1.cookies('userName','dongshi','1','/')设置一条cookie
function cookies(name, value, end_day, path) {
    if (value === undefined) {
        var coo = document.cookie;
        if (coo) {
            var arr = coo.split('; ');
            var obj = {};
            for (var i = 0, len = arr.length; i < len; i++) {
                obj[arr[i].split('=')[0]] = unescape(arr[i].split('=')[1]);
            }
            if (name !== undefined) {
                return obj[name];
            } else {
                return obj;
            }
        }
    } else {
        var d = new Date();
        d.setDate(d.getDate() + end_day);
        var exp = end_day ? ';expires=' + d.toString() :
            '';
        var p = path ? ';path=/' + path : '';
        document.cookie = name + '=' + escape(value) + exp + p;
    }
}