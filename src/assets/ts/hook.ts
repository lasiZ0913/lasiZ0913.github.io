const hook = {
    showLocale:<T>(objD:Date,tag:boolean):T => {
        let str;
        let yy = objD.getUTCFullYear();
        if (yy < 1900) yy = yy + 1900;
        let MM:number | string = objD.getMonth() + 1;
        if (MM < 10) MM = '0' + MM;
        let dd:number | string = objD.getDate();
        if (dd < 10) dd = '0' + dd;
        let hh:number | string = objD.getHours();
        if (hh < 10) hh = '0' + hh;
        let mm:number | string = objD.getMinutes();
        if (mm < 10) mm = '0' + mm;
        let ss:number | string = objD.getSeconds();
        if (ss < 10) ss = '0' + ss;
        let ww:number | string = objD.getDay();
        if (ww == 0) ww = "星期日";
        if (ww == 1) ww = "星期一";
        if (ww == 2) ww = "星期二";
        if (ww == 3) ww = "星期三";
        if (ww == 4) ww = "星期四";
        if (ww == 5) ww = "星期五";
        if (ww == 6) ww = "星期六";
        if (tag) {
            str = yy + "-" + MM + "-" + dd + " " + hh + ":" + mm + ":" + ss;
        } else {
            str = yy + "-" + MM + "-" + dd;
        }
        return (<T>str);
    }
}

export { hook }