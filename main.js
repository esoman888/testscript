const accpswdata = file.readFile("D:/dy.txt");
logd(accpswdata)
const dytasktype = JSON.parse(accpswdata)
//  1抖音 2极速  3火山
const whichplatform = dytasktype.whichplatform
//   0不做点赞 1做点赞
const like = dytasktype.like
//  0不做关注 1做关注
const follow = dytasktype.follow
// 0不做收藏 1做收藏
const collect = dytasktype.collect
//   卡推荐  0不卡 1卡推荐
const CloseAPP = dytasktype.CloseAPP
//账号
const youqianacc = dytasktype.acc.youqian
//密码
const youqianpsw = dytasktype.psw.youqian
logd(whichplatform)
logd(like)
logd(follow)
logd(collect)
logd(CloseAPP)
logd(youqianacc)
logd(youqianpsw)


const youqianuser =accpswdata1.View3.youqianacc
const youqianpsw = accpswdata1.View3.youqianpsw



const safari = "com.apple.mobilesafari"
const dyuser = 'https://m.douyin.com/share/user/'
const dydzschemes = "snssdk1128://aweme/detail/"
const dygzschemes = "snssdk1128://user/profile/"
const jsdzschemes = "snssdk2329://aweme/detail/"
const jsgzschemes = "snssdk2329://user/profile/"
const dsdzschemes = "snssdk1349://aweme/detail/"
const dsgzschemes = "snssdk1349://user/profile/"
const hsdzschemes = "snssdk1112://aweme/detail/"
const hsgzschemes = "snssdk1112://user/profile/"
const deviceip = "http://101.35.55.63:8020/tools?deviceId="
const devicetoolpull = "http://101.35.55.63:8020/postApiData"
const devicetoolget = "http://101.35.55.63:8020/getPageData"
const dyappurl = "com.ss.iphone.ugc.Aweme"
const jsappurl = "com.ss.iphone.ugc.aweme.lite"
const dsappurl = "my.maya.iphone"
const hsappurl = "com.ss.iphone.ugc.Live"

//手机ID
const phoneid = device.getDeviceId();
//手机序列号
const phoneser =device.getSerialNo();
//手机屏幕宽高
const phonewidth = device.getScreenWidth()

const phoneheight =device.getScreenHeight()

var phonex = null
//判断手机型号
if (phonewidth==750){phonex=1}else if (phonewidth==1125){phonex=2}else {phonex=0}

var sllepresult = random(5000,10000);
var sllepresult2 = random(3000,6000);
var sllepresult3 = random(15000,30000);
const getuiurldevice = {"deviceId": phoneid};
//抖音uid
 var  dyuseruid = "";
    //网页工具抖音参数 sec_uid
  var   dyuid="";
    //网页工具火山参数 sec_uid
  var   hsuid="";
//抖音点赞量
let dyfavoriting = "",
    //抖音关注量
    dyfollwing ="",
    //飞鸟登录密钥
    feiniaocodekey="",
//飞鸟获取订单号
    feiniaotaskId="",
    //飞鸟获取抖音订单号
    feiniaotaskUid="",
//飞鸟获取视频ID
    feiniaotaskVideoid="",
    //顺顺登录密钥
    shunshuncodekey="",
//顺顺获取订单号
    shunshuntaskId="",
    //飞鸟获取抖音订单号
    shunshuntaskUid="",
//顺顺获取视频ID
    shunshuntaskVideoid="",
    //有钱api
    youqiancodekey="",
    //有钱任务ID
    youqianorderId="",
    //有钱任务参数
    youqiantaskVideoId="",

    //完成点赞任务量
    alldzsuccess=0,
    //完成点赞任务量
    allgzsuccess=0,
    //完成收藏任务栏
    allscsuccess=0,
    //失败总数
    allfail=0,
    //手速 0----没有  1----有休要休息 xx分钟
    gzshoushu=0,
    dzfail=0,
    gzfail=0,
    //有钱火山兼容
    videocompatibilityStatus=null

function main() {

    laoleng.EC.init()

    let islocookd = isLocked();
    if(islocookd){homeScreen()};
    youqianlogin()
    // thread.execAsync(function () {
    //     feiniaologin()
    //     })





    if(phonex==1){
        sleep(1000)
        devcid()
        sleep(1000)
        jsdolink()
        sleep(1000)
        getjslink()
        sleep(500)
        dyjc(dyuid)
        if(renwutype==1){
            while (true){
                if(killdy==1){stopApp(jsappurl)
                    sleep(3000);
                }

                if (gzfail==10){exit()}
                if(gzfail<=10){ jsdz()}

            }

        }else if(renwutype==2){
            while (true){
                if(killdy==1){stopApp(jsappurl)
                    sleep(3000);
                }

                if (gzfail==10){exit()}
                if(gzfail<=10){ jsgz()}

            }

        }else{

        }


    }else if(phonex==2){
        sleep(1000)
        devcid()
        sleep(1000)

        if(renwutype==1){
            if(renwudo==1){
                dydolink()
                sleep(1000)
                getdylink()
                sleep(500)
                dyjc(dyuid)

                while (true){
                    if(killdy==1){stopApp(dyappurl)
                        sleep(3000);
                    }
                    if (dzfail==10){exit()}
                    if (dzfail<=10) {dydz()}

                }
            }else if (renwudo==2){
                jsdolink()
                sleep(1000)
                getjslink()
                sleep(500)
                dyjc(dyuid)
                while (true){
                    if(killdy==1){stopApp(jsappurl)
                        sleep(3000);
                    }
                    if (gzfail==10){exit()}
                    if(gzfail<=10){ jsdz()}



                }
            }else if (renwudo==3){
                dsdolink()
                sleep(1000)
                getdslink()
                sleep(500)
                dyjc(dyuid)
                while (true){
                    if (dzfail==10){exit()}
                    if (dzfail<=10) {dsdz()}
                }
            }else {
                hsdolink()
                sleep(1000)
                gethslink()
                sleep(500)
                dyjc(hsuid)
                while (true){
                    if (dzfail==10){exit()}
                    if (dzfail<=10) {hsdz()}
                }
            }

        }else if (renwutype==2){
            if(renwudo==1){
                dydolink()
                sleep(1000)
                getdylink()
                sleep(500)
                dyjc(dyuid)
                while (true){
                    if(killdy==1) {stopApp(dyappurl)}
                    sleep(3000);
                    if (gzfail==10){exit()}
                    if(gzfail<=10){ dygz()}


                }
            }else if (renwudo==2){
                jsdolink()
                sleep(1000)
                getjslink()
                sleep(500)
                dyjc(dyuid)
                while (true){
                    if(killdy==1){stopApp(jsappurl)
                        sleep(3000);
                    }

                    if (gzfail==10){exit()}
                    if(gzfail<=10){ jsgz()}


                }
            }else if (renwudo==3){

                dsdolink()
                sleep(1000)
                getdslink()
                sleep(500)
                dyjc(dyuid)

                while (true){

                    if (gzfail==10){exit()}
                    if(gzfail<=10){ dsgz()}


                }
            }else {
                hsdolink()
                sleep(1000)
                gethslink()
                sleep(500)
                dyjc(hsuid)

                while (true){
                    if (gzfail==10){exit()}
                    if(gzfail<=10){ hsgz()}


                }
            }
        }else {
            if(renwudo==1){
                dydolink()
                sleep(1000)
                getdylink()
                sleep(500)
                dyjc(dyuid)
                while (true){
                    if (dzfail==10&&gzfail==10){exit()}

                    let smrenwu = random(1,2)
                    if (smrenwu==1){
                        if (dzfail<=10) {dydz()}

                    }else{
                        if(gzfail<=10){ dygz()}
                        // logd(gzfail)
                    }
                }
            }else if (renwudo==2){
                jsdolink()
                sleep(1000)
                getjslink()
                sleep(500)
                dyjc(dyuid)
                while (true){
                    if (dzfail==10&&gzfail==10){exit()}
                    let smrenwu = random(1,2)
                    if (smrenwu==1){
                        if (dzfail<=10) {jsdz()}
                    }else{
                        if(gzfail<=10){ jsgz()}
                    }

                }
            }else if (renwudo==3){
                logd("111")
                hsdolink()
                sleep(1000)
                getdylink()
                sleep(500)
                dyjc(dyuid)
while (true){
    hssc()
}
                // dsdolink()
                // sleep(1000)
                // getdslink()
                // sleep(500)
                // dyjc(dyuid)
                // while (true){
                //     if (dzfail==10&&gzfail==10){exit()}
                //     let smrenwu = random(1,2)
                //     if (smrenwu==1){
                //         if (dzfail<=10) {dsdz()}
                //     }else{
                //         if(gzfail<=10){ dsgz()}
                //     }
                //
                //
                // }
            }else {


            }

        }

    }else{
        logd('不知道什么设备')
    }




   //
   //  ------------------------4APP test



























}
// 抖音点赞
function dydz(){

    youqiangetdz()
    homeScreen()
    sleep(2000)
    clickPoint(418,2244)
    let dygz1 = dyfavoriting

    while(true){
    let getuiurldevicea = {"deviceId": phoneid,
        "data":dydzschemes+youqiantaskVideoId}
    var ab = http.postJSON(devicetoolpull, getuiurldevicea, 10 * 1000);
    let abc = JSON.parse(ab)
    if (abc.code==0) {
        break
    }

}



    sleep(1000)
    if (findNode(label("隐私报告"),false)){clickPoint(956,1296)}
    if (findNode(label("请求桌面网站"),false)){clickPoint(956,1296)}
    sleep(1500)

    if (findNode(value('打开'),true)){
        logd('打开')
    }else {
        clickPoint(960,1140)
        clickPoint(915,1287)
        clickPoint(956,1296)
    }

    sleep(7000)

    // clickPoint(1037,1235)
    sleep(800)
      doubleClickPoint(530,696)

    sleep(2000)
    if(killdy==1) {sleep(50)}else {
    clickPoint(60,190)}
    dyjc(dyuid)
    let dygz2 = dyfavoriting
    if (dygz2>dygz1){
        youqiansubmit()
        alldzsuccess=alldzsuccess+1
        allfail=0
        dzfail=0
        logd('有钱:'+'关注量:'+allgzsuccess,'点赞量:'+alldzsuccess,'失败量:'+allfail)
    }else {
        logd('点赞失败')
        allfail=allfail+1
        dzfail=dzfail+1
        logd('有钱:'+'关注量:'+allgzsuccess,'点赞量:'+alldzsuccess,'失败量:'+allfail)

    }
    if(allfail==20){exit()}

}
//抖音关注
function dygz(){


        youqiangetgz()
        homeScreen()
        sleep(2000)
        clickPoint(418,2244)
        let dygz1 = dyfollwing

    while (true){
        let getuiurldevicea = {"deviceId": phoneid,
            "data":dydzschemes+youqiantaskVideoId}
        var ab = http.postJSON(devicetoolpull, getuiurldevicea, 10 * 1000);
        let abc = JSON.parse(ab)
        if (abc.code==0) {
            break
        }
    }



    sleep(1000)
    if (findNode(label("隐私报告"),false)){clickPoint(956,1296)}
    if (findNode(label("请求桌面网站"),false)){clickPoint(956,1296)}
    sleep(1500)

        if (findNode(value('打开'),true)){
            logd('打开')
        }else {
            clickPoint(960,1140)
            clickPoint(915,1287)
            clickPoint(956,1296)
        }

        sleep(10000)
        let firstColor = "#FF6E8B-#101010";
        let multiColor = "29|-2|#FE93A7-#101010,31|-6|#FE2B56-#101010,18|14|#FFB5C4-#101010,15|14|#FFFFFF-#101010";
        let points1 = image.findMultiColorEx(firstColor, multiColor, 0.9, 900, 616, 1120, 2179, 10, 1);
//这玩意是个数组
        if (points1) {
            clickPoint(points1[0].x, points1[0].y)

        }

    sleep(1000)

    // let firstColor1 = "#828388-#101010";
    // let multiColor1 = "11|-4|#383B44-#101010,51|-5|#65656D-#101010,115|-1|#FFFFFF-#101010,113|25|#AAA9AE-#101010";
    // let points = image.findMultiColorEx(firstColor1, multiColor1, 0.9, 10, 773, 956, 1613, 10, 1);
    // if (points) {
    //     logd('手速过快')
    //     sleep(2000)
    //     clickPoint(60,190)
    //     gzshoushu = 1
    // }else {
        sleep(1500)
    if(killdy==1) {sleep(50)}else{
        clickPoint(60,190)}
        dyjc(dyuid)
        let dygz2 = dyfollwing
        if (dygz2>dygz1){
            youqiansubmit()
            allgzsuccess=allgzsuccess+1
            allfail=0
            gzfail=0
            logd('有钱:'+'关注量:'+allgzsuccess,'点赞量:'+alldzsuccess,'失败量:'+allfail)
        }else {
            logd('关注失败')
            gzfail=gzfail+1
            allfail=allfail+1
            logd('有钱:'+'关注量:'+allgzsuccess,'点赞量:'+alldzsuccess,'失败量:'+allfail)
        }
        if(allfail==20){exit()}

    // }



}



//极速点赞
function jsdz(){

if(phonex==1){
    youqiangetdz()
    homeScreen()
    sleep(2000)
    clickPoint(263,1239)

    let dygz1 = dyfavoriting
    while (true){
        let getuiurldevicea = {"deviceId": phoneid,
            "data":jsdzschemes+youqiantaskVideoId}

        var ab = http.postJSON(devicetoolpull, getuiurldevicea, 10 * 1000);
        let abc = JSON.parse(ab)
        if (abc.code==0) {
            break
        }
    }

    sleep(1000)
    if (findNode(label("隐私报告"),false)){clickPoint(956,1296)}
    if (findNode(label("请求桌面网站"),false)){clickPoint(956,1296)}
    sleep(1500)


    if (findNode(value('打开'),true)){
        logd('打开')
    }else {
        clickPoint(642,725)
        clickPoint(620,727)
        clickPoint(660,748)
    }

    sleep(10000)
    let smallTmplate1 = readResAutoImage("20221218083158.png");
//在图片中查找
    let points11 = image.findImageEx(smallTmplate1, 92, 310, 656, 1016,0.7, 0.8, 10, 5);
//这玩意是个数组
    if (points11) {
        clickPoint(612,348)
    }
//图片要回收
    image.recycle(smallTmplate1)
    sleep(3000)

    // clickPoint(1037,1235)
    sleep(800)
    doubleClickPoint(374,362)

    sleep(2000)
    if(killdy==1){  sleep(50) }else{

        sleep(3000)
        logd('做完任务')
        clickPoint(48,88)
        sleep(3000)
        swipeToPoint(546,1540,550,970,200)


    }
    dyjc(dyuid)
    let dygz2 = dyfavoriting
    if (dygz2>dygz1){
        youqiansubmit()
        alldzsuccess=alldzsuccess+1
        allfail=0
        dzfail=0
        logd('有钱:'+'关注量:'+allgzsuccess,'点赞量:'+alldzsuccess,'失败量:'+allfail)
    }else {
        logd('点赞失败')
        allfail=allfail+1
        dzfail=dzfail+1
        logd('有钱:'+'关注量:'+allgzsuccess,'点赞量:'+alldzsuccess,'失败量:'+allfail)

    }
    if(allfail==20){exit()}
}else if(phonex==2){
    youqiangetdz()
    homeScreen()
    sleep(2000)
    clickPoint(418,2244)

    let dygz1 = dyfavoriting
    while (true){
        let getuiurldevicea = {"deviceId": phoneid,
            "data":jsdzschemes+youqiantaskVideoId}

        var ab = http.postJSON(devicetoolpull, getuiurldevicea, 10 * 1000);
        let abc = JSON.parse(ab)
        if (abc.code==0) {
            break
        }
    }

    sleep(1000)
    if (findNode(label("隐私报告"),false)){clickPoint(956,1296)}
    if (findNode(label("请求桌面网站"),false)){clickPoint(956,1296)}
    sleep(1500)


    if (findNode(value('打开'),true)){
        logd('打开')
    }else {
        clickPoint(960,1140)
        clickPoint(915,1287)
        clickPoint(956,1296)
    }

    sleep(15000)
    let smallTmplate = readResAutoImage("20221122193105.png");
//抓取屏幕
    let screenImage = image.captureFullScreenEx({"type": "1", "quality": 100});
    if (screenImage != null) {
        //在图片中查找
        let points = image.findImageByColor(screenImage, smallTmplate, 160, 730, 963, 1690, 0.8, 10);
        //这玩意是个数组
        if (points) {
            clickPoint(points[0].x,points[0].y)
        }
        //图片要回收
        image.recycle(screenImage)
    }
//图片要回收
    image.recycle(smallTmplate)
    sleep(1000)

    // clickPoint(1037,1235)
    sleep(800)
    doubleClickPoint(530,696)

    sleep(2000)
    if(killdy==1){  sleep(50) }else{
        sleep(3000)
        logd('做完任务')
        clickPoint(61,195)
        sleep(3000)
        swipeToPoint(546,1540,550,970,200)

      }
    dyjc(dyuid)
    let dygz2 = dyfavoriting
    if (dygz2>dygz1){
        youqiansubmit()
        alldzsuccess=alldzsuccess+1
        allfail=0
        dzfail=0
        logd('有钱:'+'关注量:'+allgzsuccess,'点赞量:'+alldzsuccess,'失败量:'+allfail)
    }else {
        logd('点赞失败')
        allfail=allfail+1
        dzfail=dzfail+1
        logd('有钱:'+'关注量:'+allgzsuccess,'点赞量:'+alldzsuccess,'失败量:'+allfail)

    }
    if(allfail==20){exit()}
}else {
exit()
}


}


//极速关注
function jsgz(){

if (phonex==1){
    youqiangetgz()
    homeScreen()
    sleep(2000)
    clickPoint(263,1239)
    let dygz1 = dyfollwing

    while (true){
        let getuiurldevicea = {"deviceId": phoneid,
            "data":jsdzschemes+youqiantaskVideoId}

        var ab = http.postJSON(devicetoolpull, getuiurldevicea, 10 * 1000);
        let abc = JSON.parse(ab)
        if (abc.code==0) {
                break
        }
    }

    sleep(1000)
    if (findNode(label("隐私报告"),false)){clickPoint(956,1296)}
    if (findNode(label("请求桌面网站"),false)){clickPoint(956,1296)}
    sleep(1500)

    if (findNode(value('打开'),true)){
        logd('打开')
    }else {
        clickPoint(642,725)
        clickPoint(620,727)
        clickPoint(660,748)
    }
    sleep(5000)

    let smallTmplate1 = readResAutoImage("20221218083158.png");
//在图片中查找
    let points11 = image.findImageEx(smallTmplate1, 92, 310, 656, 1016,0.7, 0.8, 10, 5);
//这玩意是个数组
    if (points11) {
        clickPoint(612,348)
    }
//图片要回收
    image.recycle(smallTmplate1)
    sleep(6000)





    let tmpImage =image.captureFullScreenEx({"type": "1", "quality": 100});
    if (tmpImage != null) {
        let firstColor = "#FE7E97-#101010";
        let multiColor = "11|-8|#FF8FA5-#101010,18|-14|#FD2A53-#101010,11|17|#FE2B54-#101010";
        let points = image.findMultiColor(tmpImage, firstColor, multiColor, 0.9, 606, 368, 742, 1331, 10, 5);
        //这玩意是个数组
        if (points) {
            clickPoint(points[0].x, points[0].y)
        }
        //图片要回收
        image.recycle(tmpImage)
    }



    sleep(1000)

    // let firstColor1 = "#828388-#101010";
    // let multiColor1 = "11|-4|#383B44-#101010,51|-5|#65656D-#101010,115|-1|#FFFFFF-#101010,113|25|#AAA9AE-#101010";
    // let points = image.findMultiColorEx(firstColor1, multiColor1, 0.9, 10, 773, 956, 1613, 10, 1);
    // if (points) {
    //     logd('手速过快')
    //     sleep(2000)
    //     clickPoint(60,190)
    //     gzshoushu = 1
    // }else {
    sleep(1500)
    if(killdy==1){sleep(50)}else{

        sleep(3000)
        logd('做完任务')
        clickPoint(60,190)
        sleep(3000)
        swipeToPoint(546,1540,550,970,200)

    }

    dyjc(dyuid)
    let dygz2 = dyfollwing
    if (dygz2>dygz1){
        youqiansubmit()
        allgzsuccess=allgzsuccess+1
        allfail=0
        gzfail=0
        logd('有钱:'+'关注量:'+allgzsuccess,'点赞量:'+alldzsuccess,'失败量:'+allfail)
    }else {
        logd('关注失败')
        gzfail=gzfail+1
        allfail=allfail+1
        logd('有钱:'+'关注量:'+allgzsuccess,'点赞量:'+alldzsuccess,'失败量:'+allfail)
    }

    if(allfail==20){exit()}
}    else if (phonex==2){
    youqiangetgz()
    homeScreen()
    sleep(2000)
    clickPoint(418,2244)
    let dygz1 = dyfollwing
    while (true){
        let getuiurldevicea = {"deviceId": phoneid,
            "data":jsdzschemes+youqiantaskVideoId}

        var ab = http.postJSON(devicetoolpull, getuiurldevicea, 10 * 1000);
        let abc = JSON.parse(ab)
        if (abc.code==0) {
            break
        }
    }

    sleep(1000)
    if (findNode(label("隐私报告"),false)){clickPoint(956,1296)}
    if (findNode(label("请求桌面网站"),false)){clickPoint(956,1296)}
    sleep(1500)

    if (findNode(value('打开'),true)){
        logd('打开')
    }else {
        clickPoint(960,1140)
        clickPoint(915,1287)
        clickPoint(956,1296)
    }
    sleep(11000)



    let smallTmplate = readResAutoImage("20221122193105.png");
//抓取屏幕
    let screenImage = image.captureFullScreenEx({"type": "1", "quality": 100});
    if (screenImage != null) {
        //在图片中查找
        let points = image.findImageByColor(screenImage, smallTmplate, 160, 730, 963, 1690, 0.8, 10);
        //这玩意是个数组
        if (points) {
            clickPoint(points[0].x,points[0].y)
        }
        //图片要回收
        image.recycle(screenImage)
    }
//图片要回收
    image.recycle(smallTmplate)
    sleep(1000)

    let firstColor = "#FF6E8B-#101010";
    let multiColor = "29|-2|#FE93A7-#101010,31|-6|#FE2B56-#101010,18|14|#FFB5C4-#101010,15|14|#FFFFFF-#101010";
    let points1 = image.findMultiColorEx(firstColor, multiColor, 0.9, 900, 616, 1120, 2179, 10, 1);
//这玩意是个数组
    if (points1) {
        clickPoint(points1[0].x, points1[0].y)

    }

    sleep(1000)

    // let firstColor1 = "#828388-#101010";
    // let multiColor1 = "11|-4|#383B44-#101010,51|-5|#65656D-#101010,115|-1|#FFFFFF-#101010,113|25|#AAA9AE-#101010";
    // let points = image.findMultiColorEx(firstColor1, multiColor1, 0.9, 10, 773, 956, 1613, 10, 1);
    // if (points) {
    //     logd('手速过快')
    //     sleep(2000)
    //     clickPoint(60,190)
    //     gzshoushu = 1
    // }else {
    sleep(1500)
    if(killdy==1){sleep(50)}else{
        sleep(3000)
        logd('做完任务')
        clickPoint(61,195)
        sleep(3000)
        swipeToPoint(546,1540,550,970,200)

    }

    dyjc(dyuid)
    let dygz2 = dyfollwing
    if (dygz2>dygz1){
        youqiansubmit()
        allgzsuccess=allgzsuccess+1
        allfail=0
        gzfail=0
        logd('有钱:'+'关注量:'+allgzsuccess,'点赞量:'+alldzsuccess,'失败量:'+allfail)
    }else {
        logd('关注失败')
        gzfail=gzfail+1
        allfail=allfail+1
        logd('有钱:'+'关注量:'+allgzsuccess,'点赞量:'+alldzsuccess,'失败量:'+allfail)
    }

    if(allfail==20){exit()}
} else {exit()}






}


//火山关注
function hsgz(){



        while (true) {
            youqiangetgz()
            if(videocompatibilityStatus==1){break}
        }


            homeScreen()
            sleep(2000)
            clickPoint(418,2244)

            let dydz1 = dyfollwing
    while (true){
        let getuiurldevicea = {"deviceId": phoneid,
            "data":hsdzschemes+youqiantaskVideoId}
        var ab = http.postJSON(devicetoolpull, getuiurldevicea, 10 * 1000);
        let abc = JSON.parse(ab)
        if (abc.code==0) {
            break
        }
    }

    sleep(1000)
    if (findNode(label("隐私报告"),false)){clickPoint(956,1296)}
    if (findNode(label("请求桌面网站"),false)){clickPoint(956,1296)}
    sleep(1500)

            if (findNode(value('打开'),true)){
                logd('打开')
            }else {
                clickPoint(960,1140)
                clickPoint(956,1296)
            }


            sleep(5000)


            let firstColor8 = "#93EDB7-#101010";
            let multiColor8 = "70|7|#B0F3CA-#101010,96|-3|#24DC6D-#101010,343|17|#22DC6D-#101010,476|17|#24DC6D-#101010";
            let points8 = image.findMultiColorEx(firstColor8, multiColor8, 0.9, 163, 833, 929, 1413, 10, 1);
//这玩意是个数组
            if (points8) {
                clickPoint(566,1556)
            }

            sleep(2000)

            //从工程目录下res文件夹下读取sms.png文件
            let smallTmplate = readResAutoImage("20221122193005.png");
//抓取屏幕
            let screenImage = image.captureFullScreenEx({"type": "1", "quality": 100});
            if (screenImage != null) {
                //在图片中查找
                let points = image.findImageByColor(screenImage, smallTmplate, 6, 1543, 1116, 2183, 0.8, 10);
                //这玩意是个数组
                if (points) {
                    clickPoint(points[0].x,points[0].y)
                }
                //图片要回收
                image.recycle(screenImage)
            }
//图片要回收
            image.recycle(smallTmplate)
            sleep(3000)

            let firstColor1 = "#FF4E34-#101010";
            let multiColor1 = "18|5|#FF826C-#101010,38|0|#FF573A-#101010,60|23|#FFCFCA-#101010,63|19|#FE9383-#101010";
            let points1 = image.findMultiColorEx(firstColor1, multiColor1, 0.9, 12, 1835, 1094, 2020, 10, 1);
//这玩意是个数组
            if (points1) {
                clickPoint(points1[0].x,points1[0].y)
            }



            sleep(3000)

            logd('做完任务')
            clickPoint(61,195)
            sleep(3000)
            swipeToPoint(546,1540,550,970,200)

            dyjc(hsuid)
            let dydz2 = dyfollwing
            logd(dydz1)
            logd(dydz2)
            if (dydz2>dydz1){
                logd('关注成功')
                youqiansubmit()
                allgzsuccess=allgzsuccess+1
                allfail=0
                gzfail=0
                logd('有钱:'+'关注量:'+allgzsuccess,'点赞量:'+alldzsuccess,'失败量:'+allfail)
            }else {
                logd('关注失败')
                gzfail=gzfail+1
                allfail=allfail+1
                logd('有钱:'+'关注量:'+allgzsuccess,'点赞量:'+alldzsuccess,'失败量:'+allfail)
            }


    if(allfail==20){exit()}



    }

//火山点赞
function hsdz(){


    while (true) {
        youqiangetdz()
        if(videocompatibilityStatus==1){break}
    }

            homeScreen()
            sleep(2000)
            clickPoint(418,2244)

            let dydz1 = dyfavoriting
    while (true){
        let getuiurldevicea = {"deviceId": phoneid,
            "data":hsdzschemes+youqiantaskVideoId}
        var ab = http.postJSON(devicetoolpull, getuiurldevicea, 10 * 1000);
        let abc = JSON.parse(ab)
        if (abc.code==0) {
    break
        }
    }
            
    sleep(1000)
    if (findNode(label("隐私报告"),false)){clickPoint(956,1296)}
    if (findNode(label("请求桌面网站"),false)){clickPoint(956,1296)}
    sleep(1500)
            if (findNode(value('打开'),true)){
                logd('打开')
            }else {
                clickPoint(960,1290)
                clickPoint(956,1296)
            }
            sleep(sllepresult2)

            // clickPoint(1018,1323)
            sleep(500)
            doubleClickPoint(600,650)




            sleep(1000)
            let firstColor1 = "#FFFFFF-#101010";
            let multiColor1 = "-185|258|#FF4E34-#101010,-592|253|#FF4E34-#101010,-405|258|#FEE6E2-#101010,-277|270|#FFFFFF-#101010";
            let points1 = image.findMultiColorEx(firstColor1, multiColor1, 0.9, 0, 0, 0, 0, 10, 1);
//这玩意是个数组
            if (points1) {
                logd("points " + JSON.stringify(points1));
                clickPoint(points1[0].x,points1[0].y)
            }


            sleep(3000)
            logd('做完任务')
            clickPoint(61,195)
            sleep(3000)
            swipeToPoint(546,1540,550,970,200)

            dyjc(hsuid)
            let dydz2 = dyfavoriting
            logd(dydz1)
            logd(dydz2)
            if (dydz2>dydz1){
                logd('点赞成功')
                youqiansubmit(hsuid)
                alldzsuccess=alldzsuccess+1
                allfail=0
                dzfail=0
                logd('有钱:'+'关注量:'+allgzsuccess,'点赞量:'+alldzsuccess,'失败量:'+allfail)
            }else {
                logd('点赞失败')
                allfail=allfail+1
                dzfail=dzfail+1
                logd('有钱:'+'关注量:'+allgzsuccess,'点赞量:'+alldzsuccess,'失败量:'+allfail)

            }

    if(allfail==20){exit()}









}
//火山收藏
function hssc(){


    youqiangetsc()
    homeScreen()
    sleep(2000)
    clickPoint(418,2244)

    while (true){
        let getuiurldevicea = {"deviceId": phoneid,
            "data":hsdzschemes+youqiantaskVideoId}
        var ab = http.postJSON(devicetoolpull, getuiurldevicea, 10 * 1000);
        let abc = JSON.parse(ab)
        if (abc.code==0) {
            break
        }
    }
        logd(hsdzschemes+youqiantaskVideoId)

    sleep(1000)
    if (findNode(label("隐私报告"),false)){clickPoint(956,1296)}
    if (findNode(label("请求桌面网站"),false)){clickPoint(956,1296)}
    sleep(1500)

    if (findNode(value('打开'),true)){
        logd('打开')
    }else {
        clickPoint(960,1140)
        clickPoint(915,1287)
        clickPoint(956,1296)
    }

    sleep(10000)


    clickPoint(1040,1620)
    sleep(2000)
    clickPoint(746,2163)
    sleep(1500)
    clickPoint(63,203)

    youqiansubmit()
    allscsuccess=allscsuccess+1
    logd('有钱:'+'关注量:'+allgzsuccess,'点赞量:'+alldzsuccess,"收藏量:"+allscsuccess+'失败量:'+allfail)

}
//养号
function yh(){
    appLaunch(dyappurl)
    sleep(3000)
    clickPoint(90,2250)
    logd('养号10分钟')
    for (let i=1;1<2;i++){
        sleep(sllepresult3)
        swipeToPoint(546,1540,550,970,200)
        let rax = random(1,100)
        if (rax<=60){
            sleep(sllepresult)
            logd('不点赞')
        }else {
            sleep(sllepresult)
            doubleClickPoint(402,375)
            logd('点赞')
        }
        if (rax>=10){
            sleep(sllepresult)
            logd('不评论')
        }else {
            sleep(sllepresult)
            logd('评论')
            clickPoint(1033,1443)
            sleep(2000)
            clickPoint(556,393)
            sleep(2000)

        }
        //直播检测
        let firstColor = "#FA77AD-#101010";
        let multiColor = "9|0|#F6277F-#101010,13|0|#FEFEFC-#101010,17|1|#FA93C0-#101010,26|11|#FAAFD0-#101010";
        let points = image.findMultiColorEx(firstColor, multiColor, 0.9, 0, 1736, 1106, 2189, 10, 1);
//这玩意是个数组
        if (points) {
            logd("points " + JSON.stringify(points));
        }
    }





}
//上传火山link和获取链接ID并且获取
function gethslink(){
    appLaunch(safari)
    sleep(2000)
    findNode(name('清空'),true)
    sleep(500)
    findNode(type("TextView"),true)
    sleep(500)
    doubleClickPoint(196,860);
    sleep(2000)
    findNode(name("粘贴"),true)
    sleep(2000)
    doubleClickPoint(643,1040)
    sleep(500)
    if(    findNode(name("上传输入框内容"),true)){

    }else{
        clickPoint(697,368)
    }
    sleep(1000)
    if (findNode(name("操作成功"),false)){
        logd('链接粘贴成功')
        let getuiurl = http.postJSON(devicetoolget,getuiurldevice,10 * 1000)
        let getuiurlc = JSON.parse(getuiurl)
        logd(getuiurlc.data)
        let reg = /(https?|http|ftp|file):\/\/[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]/g;
        hsresult = getuiurlc.data.match(reg);
        let ret = http.requestEx({
            url: hsresult[0],
            followRedirects: false
        })
        let ret2 = http.requestEx({
            url: ret.header.Location,
            followRedirects: false
        })
        if (ret2) {
            hsuid = getMiddleText(ret2.header.Location, "=", "&")
            logd(hsuid);
        }
    }else {
        logd('链接没有粘贴成功')
        exit()
    }




}
//上传抖音link和获取链接ID并且获取
function getdylink(){
    appLaunch(safari)
    sleep(2000)
    findNode(name('清空'),true)
    sleep(500)
    findNode(type("TextView"),true)
    sleep(500)
    doubleClickPoint(196,860);
    sleep(2000)
    findNode(name("粘贴"),true)
    sleep(2000)
    doubleClickPoint(643,1040)
    sleep(500)
    if(    findNode(name("上传输入框内容"),true)){

    }else{
        clickPoint(697,368)
    }
    sleep(3000)
    if (findNode(name("操作成功"),false)){
        logd('链接粘贴成功')
        let getuiurl = http.postJSON(devicetoolget,getuiurldevice,10 * 1000)
        let getuiurlc = JSON.parse(getuiurl)
        // let index = getuiurlc.data.lastIndexOf("\n");
        // let dyresult = getuiurlc.data.substr(index + 2,getuiurlc.data.length);

        let reg = /(https?|http|ftp|file):\/\/[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]/g;
        let  dyresult = getuiurlc.data.match(reg);

        let ret = http.requestEx({
            url: dyresult[0],
            followRedirects: false
        })
        if (ret) {
            dyuid = getMiddleText(ret.header.Location, "user/", "?")
            logd(dyuid)
        }
    }else {
        logd('链接没有粘贴成功')
        exit()
    }





    }
//上传多闪link和获取链接ID并且获取
function getdslink(){
    appLaunch(safari)
    sleep(2000)
    findNode(name('清空'),true)
    sleep(500)

    findNode(type("TextView"),true)
    sleep(500)
    doubleClickPoint(196,860);
    sleep(2000)
    findNode(name("粘贴"),true)
    sleep(2000)
    doubleClickPoint(643,1040)
    sleep(500)
    if(    findNode(name("上传输入框内容"),true)){

    }else{
        clickPoint(697,368)
    }
    sleep(1000)
    if (findNode(name("操作成功"),false)){
        logd('链接粘贴成功')
        let getuiurl = http.postJSON(devicetoolget,getuiurldevice,10 * 1000)
        let getuiurlc = JSON.parse(getuiurl)
        let index = getuiurlc.data.indexOf("。");
        dyresult = getuiurlc.data.substr(index + 2,getuiurlc.data.length);
        let ret = http.requestEx({
            url: dyresult,
            followRedirects: false
        })
        if (ret) {
            dyuid = getMiddleText(ret.header.Location, "user/", "?")
            logd(dyuid)
        }
    }else {
        logd('链接没有粘贴成功')
        exit()
    }





}
    //上传极速
function getjslink(){
    if (phonex==1){
        appLaunch(safari)
        sleep(2000)
        findNode(name('清空'),true)
        sleep(500)

        findNode(type("TextView"),true)
        sleep(500)
        doubleClickPoint(85,385);
        sleep(1500)
        findNode(name("粘贴"),true)
        sleep(2000)
        doubleClickPoint(582,598)
        sleep(500)
        if(    findNode(name("上传输入框内容"),true)){

        }else{
            clickPoint(452,174)
        }
        sleep(1000)
        if (findNode(name("操作成功"),false)){
            logd('链接粘贴成功')
            let getuiurl = http.postJSON(devicetoolget,getuiurldevice,10 * 1000)
            let getuiurlc = JSON.parse(getuiurl)
            let index = getuiurlc.data.indexOf("。");
            dyresult = getuiurlc.data.substr(index + 2,getuiurlc.data.length);
            if (dyresult) {
                dyuid = getMiddleText(dyresult, "user/", "?")
                logd(dyuid)
            }
        }else {
            logd('链接没有粘贴成功')
            exit()
        }
    }else if (phonex==2){
        appLaunch(safari)
        sleep(2000)
        findNode(name('清空'),true)
        sleep(500)

        findNode(type("TextView"),true)
        sleep(500)
        doubleClickPoint(196,860);
        sleep(2000)
        findNode(name("粘贴"),true)
        sleep(2000)
        doubleClickPoint(643,1040)
        sleep(500)
        if(    findNode(name("上传输入框内容"),true)){

        }else{
            clickPoint(677,402)
        }
        sleep(1000)
        if (findNode(name("操作成功"),false)){
            logd('链接粘贴成功')
            let getuiurl = http.postJSON(devicetoolget,getuiurldevice,10 * 1000)
            let getuiurlc = JSON.parse(getuiurl)
            let index = getuiurlc.data.indexOf("。");
            dyresult = getuiurlc.data.substr(index + 2,getuiurlc.data.length);
            if (dyresult) {
                dyuid = getMiddleText(dyresult, "user/", "?")
                logd(dyuid)
            }
        }else {
            logd('链接没有粘贴成功')
            exit()
        }
    }else {
        exit()
    }


}
//火山UID
function hsdolink(){
    appLaunch(hsappurl)
    sleep(5000)
    clickPoint(1010,2260)
    sleep(1500)
    clickPoint(1056,210)
    sleep(1500)
    clickPoint(643,673)
    sleep(1500)
    clickPoint(1050,203)
    sleep(1500)
    clickPoint(136,2156)
    sleep(1500)
    clickPoint(63,196)
}
//抖音uid
function dydolink (){
    // 抖音链接
    appLaunch(dyappurl)
    sleep(5000)
    clickPoint(993,2253)
    sleep(500)
    if (    findNode(name("菜单"),true)){}else {    clickPoint(1103,900)}
    sleep(1000)
    if (findNode(name("我的二维码"),true)){}else {    clickPoint(708,622)}
    sleep(2000)
    sleep(500)
    findNode(name('分享'),true)
    sleep(500)
    findNode(name('复制链接'),true)
    sleep(500)
    findNode(name('返回'),true)
    sleep(500)
}
//多闪UID
function dsdolink(){
    appLaunch(dsappurl)
    sleep(5000)
    clickPoint(995,2265)
    sleep(5000)
    clickPoint(815,1285)
    sleep(2000)
    clickPoint(960,600)
    sleep(1500)
    findNode(name("分享"),true)
    sleep(1500)
    findNode(name("复制链接"),true)
    sleep(1500)
    findNode(name("返回"),true)
    sleep(1500)
    clickPoint(66,200)
    sleep(1500)

}
//极速UID
function jsdolink(){
    if(phonex==1){
        appLaunch(jsappurl)
        sleep(10000)
        //从工程目录下res文件夹下读取sms.png文件
        let smallTmplate = readResAutoImage("20221218083158.png");
//在图片中查找
        let points = image.findImageEx(smallTmplate, 92, 310, 656, 1016,0.7, 0.8, 10, 5);
//这玩意是个数组
        if (points) {
           clickPoint(612,348)
        }
//图片要回收
        image.recycle(smallTmplate)
sleep(1000)

        clickPoint(414,364)
        sleep(1000)
        clickPoint(664,1280)
        sleep(1000)
        if (findNode(label('菜单'),true)){logd('找到菜单')}else {
            clickPoint(674,82)
            sleep(1000)
            clickPoint(674,82)
        }
    clickPoint(339,338)
        sleep(3000)
        findNode(name('分享'),true)
sleep(1500)
        findNode(name('复制链接'),true)
        sleep(500)
        clickPoint(55,90)

    }else if(phonex==2){
        appLaunch(jsappurl)
        sleep(5000)
        //从工程目录下res文件夹下读取sms.png文件
        clickPoint(923,736)
        sleep(1000)
        clickPoint(1000,2250)
        sleep(1500)
        clickPoint(1030,206)
        sleep(1500)
        findNode(name("我的二维码"),true)
        sleep(1500)
        findNode(name("分享"),true)
        sleep(1500)
        findNode(name("复制链接"),true)
        sleep(1500)
        findNode(name("返回"),true)
        sleep(1500)
    }else {
        logd('没找到极速UID因为不知道什么设备')
    }

}





//有钱登录
function youqianlogin(){
    thread.execAsync(function () {

            let youqianurl = "http://task.06km.com/task-api/s/user/apiKey?account=" + youqianuser + "&pwd=" + youqianpsw;

            let youqianx = http.httpGet(youqianurl, null, 10 * 1000, null);
            if (youqianx) {
                let youqianxx = JSON.parse(youqianx)
                if (youqianxx.code == "200") {
                    youqiancodekey = youqianxx.data
                    logd('有钱登录成功')
                    logd(youqiancodekey)
                    return true
                    thread.stopAll();
                } else {
                    logd('有钱登录失败')
                }
            }


    })
}

//有钱获取点赞任务
function youqiangetdz(){

while (true){
    sleep(2000)
    let youqianurl = "http://task.06km.com/task-api/s/task/get?uid=" + dyuseruid + "&businessId=1&secUid=" + dyuid
    let youqianx = http.httpGet(youqianurl, null, 10 * 1000, {
        "u_key": youqiancodekey,
        "s_key": "k20ek3svkon1773v"
    });
    if (youqianx) {
        let youqianxx = JSON.parse(youqianx)
        if (youqianxx.code == "30000") {
            logd('获取有钱点赞任务失败重新获取')

        } else {
            logd(youqianxx)
            youqianorderId = youqianxx.data.orderId
            youqiantaskVideoId = youqianxx.data.taskVideoId
            videocompatibilityStatus = youqianxx.data.compatibilityStatus
            logd(youqianorderId, youqiantaskVideoId,videocompatibilityStatus)
            return true
        }
    }

}



}

//有钱获取关注任务
function youqiangetgz(){

while (true){

    sleep(2000)
    let youqianurl = "http://task.06km.com/task-api/s/task/get?uid=" + dyuseruid + "&businessId=2&secUid=" + dyuid
    let youqianx = http.httpGet(youqianurl, null, 10 * 1000, {
        "u_key": youqiancodekey,
        "s_key": "k20ek3svkon1773v"
    });
    if (youqianx) {
        let youqianxx = JSON.parse(youqianx)
        if (youqianxx.code == "30000") {
            logd('获取有钱关注任务失败重新获取')

        } else {
            youqianorderId = youqianxx.data.orderId
            youqiantaskVideoId = youqianxx.data.taskVideoId

            videocompatibilityStatus = youqianxx.data.compatibilityStatus
            logd(youqianorderId, youqiantaskVideoId,videocompatibilityStatus)
            return true

        }
    }
    continue



}



}

//有钱获取收藏任务
function youqiangetsc(){

    while (true){
        sleep(2000)
        let youqianurl = "http://task.06km.com/task-api/s/task/get?uid=" + dyuseruid + "&businessId=8&secUid=" + dyuid
        let youqianx = http.httpGet(youqianurl, null, 10 * 1000, {
            "u_key": youqiancodekey,
            "s_key": "k20ek3svkon1773v"
        });
        if (youqianx) {
            let youqianxx = JSON.parse(youqianx)
            if (youqianxx.code == "30000") {
                logd('获取有钱点赞任务失败重新获取')

            } else {
                logd(youqianxx.data.orderId)
                youqianorderId = youqianxx.data.orderId
                youqiantaskVideoId = youqianxx.data.taskVideoId
                videocompatibilityStatus = youqianxx.data.compatibilityStatus
                logd(youqianorderId, youqiantaskVideoId,videocompatibilityStatus)
                return true
            }
        }

    }



}

//有钱提交任务
function youqiansubmit(){

while (true){
    let url = "http://task.06km.com/task-api/s/task/submit";
    let pa = {"orderId": youqianorderId};
    let x = http.postJSON(url, pa, 10 * 1000, {"u_key": youqiancodekey, "s_key": "k20ek3svkon1773v"});
    if (x) {
        let xx = JSON.parse(x)
        if (xx.code == "200") {
            logd('提交有钱任务成功')
            logd(youqianorderId)
            return true
        } else {
            logd("提交失败")
            continue
        }
    }
}



}
//抖音检测
function dyjc(dyuid1){

        sleep(1000);
        let dyurl1 = dyuser + dyuid1
        let dyx = http.httpPost(dyurl1, null,null, 10 * 1000,
            {

                "cookie": "ttwid=1|sG6T1CsKJFKsNPIpNWarBK369j1iAndPwt1OEaCtbSc|1663674829|8620224bddd11bbb03c4bbc0694cf0f62d8158412f3c13ca4707189b513a63f7; n_mh=P6ik9RacjB1cMzy6ZsAan-IaiTDqC0jgckEXsdvIH4Q; sso_uid_tt=7b522cf78f522d18356eac6a4ee445dc; sso_uid_tt_ss=7b522cf78f522d18356eac6a4ee445dc; toutiao_sso_user=e5d8ccd05a1f94f8976453d93d541ea8; toutiao_sso_user_ss=e5d8ccd05a1f94f8976453d93d541ea8; LOGIN_STATUS=1; d_ticket=283b2178732ce6ad4322c23c64a5208462ce8; store-region=cn-hb; store-region-src=uid; passport_csrf_token=575a79f9485d0d5d00941f7c93edb790; passport_csrf_token_default=575a79f9485d0d5d00941f7c93edb790; passport_assist_user=CjxElGz4aWR0_Ns9ZVO_cLtcM8c-Z6f2LaCiiOzFILMVSAk9f-vgxjcEYt9MzGWldxVeOMVZoBXIe-nYUqsaSAo8Y08FOz9wM3vN_ekNa9UyNVz6k9oou9XOo3yFrNnTgpq6jDKvucVG8MOehp87Zu-rEOwnGhHOzW-gB2NnENX6pw0Yia_WVCIBA-PzkHU=; odin_tt=eac52d14e33cc2135a2e64fb1d27d78b91870ffc003c64f0aa5f3fe4c425b6d2a5d74c8d80dcfe4c69be680d7ba6a73c; uid_tt=2e94aa47f7e1332072baad8ae06e4bbc; uid_tt_ss=2e94aa47f7e1332072baad8ae06e4bbc; sid_tt=2d58a67a0bdc64b4575791f74afdd89b; sessionid=2d58a67a0bdc64b4575791f74afdd89b; sessionid_ss=2d58a67a0bdc64b4575791f74afdd89b; sid_ucp_sso_v1=1.0.0-KDU5M2M3Zjc5N2UyYTllYWVmY2ZiNzNjZmM4NjhhMzVkMWJjNzgxYzEKHwjL84Xv8AIQtdjenwYY7zEgDDCmhP7YBTgFQPsHSAMaAmxmIiBlNWQ4Y2NkMDVhMWY5NGY4OTc2NDUzZDkzZDU0MWVhOA; ssid_ucp_sso_v1=1.0.0-KDU5M2M3Zjc5N2UyYTllYWVmY2ZiNzNjZmM4NjhhMzVkMWJjNzgxYzEKHwjL84Xv8AIQtdjenwYY7zEgDDCmhP7YBTgFQPsHSAMaAmxmIiBlNWQ4Y2NkMDVhMWY5NGY4OTc2NDUzZDkzZDU0MWVhOA; sid_guard=2d58a67a0bdc64b4575791f74afdd89b|1677175861|5184000|Mon,+24-Apr-2023+18:11:01+GMT; sid_ucp_v1=1.0.0-KDQzNmZkNGY2OGE1MDkyYjk3MTY4ZDVjOThjNTFlMzllNTkzMzU2OWUKFwjL84Xv8AIQtdjenwYY7zEgDDgFQPsHGgJsZiIgMmQ1OGE2N2EwYmRjNjRiNDU3NTc5MWY3NGFmZGQ4OWI; ssid_ucp_v1=1.0.0-KDQzNmZkNGY2OGE1MDkyYjk3MTY4ZDVjOThjNTFlMzllNTkzMzU2OWUKFwjL84Xv8AIQtdjenwYY7zEgDDgFQPsHGgJsZiIgMmQ1OGE2N2EwYmRjNjRiNDU3NTc5MWY3NGFmZGQ4OWI; my_rd=1; SEARCH_RESULT_LIST_TYPE=`single`; download_guide=`3/20230315`; strategyABtestKey=`1678906190.205`; pwa2=`1|1`; __live_version__=`1.1.0.7556`; live_can_add_dy_2_desktop=1; VIDEO_FILTER_MEMO_SELECT={`expireTime`:1679582452816,`type`:1}; s_v_web_id=verify_lfb7zlja_zMkKRi23_f6Nh_4oTD_BFtd_YfZAOPqrqUQ4; FOLLOW_LIVE_POINT_INFO=`MS4wLjABAAAAkR1b_wEekr77jlFNTsjvQJOnyzkaYVmbwN_tj8e4-bw/1678982400000/0/0/1678980169563`; FOLLOW_NUMBER_YELLOW_POINT_INFO=`MS4wLjABAAAAkR1b_wEekr77jlFNTsjvQJOnyzkaYVmbwN_tj8e4-bw/1678982400000/0/1678979569563/0`; __ac_nonce=0641333bf005b6f941319; __ac_signature=_02B4Z6wo00f01sXBNsAAAIDDpsv2qwOp.1bF8TJAANVweMNRfUvvWpOjLjYNTmAt7MxzCkyWlRfi4sik2gz93EoXCYAnoxV8pYM9TrDSUyGGaNp0Idp6rePJeVYFAQHAbHqawMD0Tvwufad436; msToken=PolJ0fmUjaZbpfJSx7teQ9eC2fPQ8jmdHTmwzD_MOl1oy45plSIt04LEwAzcuK8RvGAaOmTRUf54lla21HX_rgzSzpCMgSvCRU1CgATm2bMwUQsoOci-cw==; tt_scid=leDw-z0KBLDX9AazqB6aOrzlNlR8-LYUSJM8o.ty.V6jq6FPB25Kri5lzb8ONLOae476; msToken=Q4EsZf2skSRA5gb2eD9zAV-VtdCWzKi04qsnj6V0bNff4nV7jqyAqyWLaQ6V3us6l-LaHBbpWgzcjbS4ADYTuy7qm10ZI7O2GY3qhnpN-g8Yf0ziHXzSq_c-9x6usUyR; home_can_add_dy_2_desktop=1"
                ,"user-agent":"Mozilla/5.0 (X11; Linux aarch64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.188 Safari/537.36 CrKey/1.54.250320 Edg/108.0.0.0"
            });
        // logd(dyx)


        //
        // var ab = dyx.split("喜欢</span><span")[1].split(">")[1].split("<")[0];
        // logd(ab);
        //   let  resultStr = dyx.replace(/[\r\n]/g, ""); //去掉回车换行
        // logd("----------------------------------------------------------------");
        // logd(resultStr)
        let abc = dyx.split("<script id=\"RENDER_DATA\" type=\"application/json\">")[1].split("</script>")[0]
        // logd(abc)

        let abcd = decodeURIComponent(abc)
        // logd(abcd);
        let all = JSON.parse(abcd)
        dyfavoriting = all[40].user.user.favoritingCount
        logd("这是点赞数" + dyfavoriting)
        dyfollwing = all[40].user.user.followingCount
        logd("这是关注数" + dyfollwing)
        dyuseruid = all[40].user.user.uid
        logd("这是抖音uid" + dyuseruid)
        dyuid = all[40].user.user.secUid
        logd("这是抖音secuid" + dyuid)
        //
        //
        // }








    sleep(1000);

    //
    // let dyurl1 = dyuser + dyuid1
    // let dyx = http.postJSON(dyurl1, null, 10 * 1000,
    //     {
    //
    //         "cookie": "douyin.com; ttwid=1|sG6T1CsKJFKsNPIpNWarBK369j1iAndPwt1OEaCtbSc|1663674829|8620224bddd11bbb03c4bbc0694cf0f62d8158412f3c13ca4707189b513a63f7; n_mh=P6ik9RacjB1cMzy6ZsAan-IaiTDqC0jgckEXsdvIH4Q; session_secure=1; s_v_web_id=verify_lc72zhfo_TnQpDrWT_6FSd_4BGX_9Flg_0FYJxH37pTxS; sso_uid_tt=7b522cf78f522d18356eac6a4ee445dc; sso_uid_tt_ss=7b522cf78f522d18356eac6a4ee445dc; toutiao_sso_user=e5d8ccd05a1f94f8976453d93d541ea8; toutiao_sso_user_ss=e5d8ccd05a1f94f8976453d93d541ea8; LOGIN_STATUS=1; d_ticket=283b2178732ce6ad4322c23c64a5208462ce8; store-region=cn-hb; store-region-src=uid; MONITOR_WEB_ID=e00169a0-efe5-4476-a41d-6db9b3dca074; passport_csrf_token=575a79f9485d0d5d00941f7c93edb790; passport_csrf_token_default=575a79f9485d0d5d00941f7c93edb790; passport_assist_user=CjxElGz4aWR0_Ns9ZVO_cLtcM8c-Z6f2LaCiiOzFILMVSAk9f-vgxjcEYt9MzGWldxVeOMVZoBXIe-nYUqsaSAo8Y08FOz9wM3vN_ekNa9UyNVz6k9oou9XOo3yFrNnTgpq6jDKvucVG8MOehp87Zu-rEOwnGhHOzW-gB2NnENX6pw0Yia_WVCIBA-PzkHU=; sid_ucp_sso_v1=1.0.0-KDE3ZGZlMzkxNjRkZWYyYmYxMjdhZDAxZmFjMTM4ZDYwYjNhZGI2MzMKHwjL84Xv8AIQ2ezdngYY7zEgDDCmhP7YBTgFQPsHSAMaAmhsIiBlNWQ4Y2NkMDVhMWY5NGY4OTc2NDUzZDkzZDU0MWVhOA; ssid_ucp_sso_v1=1.0.0-KDE3ZGZlMzkxNjRkZWYyYmYxMjdhZDAxZmFjMTM4ZDYwYjNhZGI2MzMKHwjL84Xv8AIQ2ezdngYY7zEgDDCmhP7YBTgFQPsHSAMaAmhsIiBlNWQ4Y2NkMDVhMWY5NGY4OTc2NDUzZDkzZDU0MWVhOA; odin_tt=eac52d14e33cc2135a2e64fb1d27d78b91870ffc003c64f0aa5f3fe4c425b6d2a5d74c8d80dcfe4c69be680d7ba6a73c; uid_tt=2e94aa47f7e1332072baad8ae06e4bbc; uid_tt_ss=2e94aa47f7e1332072baad8ae06e4bbc; sid_tt=2d58a67a0bdc64b4575791f74afdd89b; sessionid=2d58a67a0bdc64b4575791f74afdd89b; sessionid_ss=2d58a67a0bdc64b4575791f74afdd89b; sid_guard=2d58a67a0bdc64b4575791f74afdd89b|1675083414|5165507|Fri,+31-Mar-2023+07:48:41+GMT; sid_ucp_v1=1.0.0-KDQyODJjYjQwZGY1MjI4ZDMyZTRlMDA0NmUyYWQ5OWE4NzIxZTc4NzEKFwjL84Xv8AIQlv3engYY7zEgDDgFQPsHGgJscSIgMmQ1OGE2N2EwYmRjNjRiNDU3NTc5MWY3NGFmZGQ4OWI; ssid_ucp_v1=1.0.0-KDQyODJjYjQwZGY1MjI4ZDMyZTRlMDA0NmUyYWQ5OWE4NzIxZTc4NzEKFwjL84Xv8AIQlv3engYY7zEgDDgFQPsHGgJscSIgMmQ1OGE2N2EwYmRjNjRiNDU3NTc5MWY3NGFmZGQ4OWI; live_can_add_dy_2_desktop=\"0\"; download_guide=\"3/20230202\"; SEARCH_RESULT_LIST_TYPE=\"single\"; __ac_nonce=063e35fb2003841372f82; __ac_signature=_02B4Z6wo00f01.tyXDQAAIDCmHicX96bnt.7UliAAJ1J8KohdVna6TbxJFxlPIYVdgCVtV9pnUCoZO51bxX5tMVz2yo9M2S4IBnt4474Ljl4zkXq.GEj1EciG-NLVLEPqA4XwNGtxidddGSGc6; douyin.com; VIDEO_FILTER_MEMO_SELECT={\"expireTime\":1676450357707,\"type\":1}; csrf_session_id=15ce5535890ec44c60aa52df56f198db; FOLLOW_LIVE_POINT_INFO=\"MS4wLjABAAAAkR1b_wEekr77jlFNTsjvQJOnyzkaYVmbwN_tj8e4-bw/1675872000000/0/0/1675846597034\"; FOLLOW_NUMBER_YELLOW_POINT_INFO=\"MS4wLjABAAAAkR1b_wEekr77jlFNTsjvQJOnyzkaYVmbwN_tj8e4-bw/1675872000000/0/0/1675847197035\"; home_can_add_dy_2_desktop=\"1\"; strategyABtestKey=\"1675846467.628\"; msToken=flwPAi5ecLvyx6GCzhyBTASZwn2GeQXogFkL243qgHwSE5Ctkrn48oCmd5fWx7fHsxt-Zs68v8kCnE-bbG2tsp9lBraHddjgjepuUxalyQ1JtpuAflZFrrM=; tt_scid=o-TiPKQ0MJxsjFIyOg3VB2zlHRbQWWvY0XwoVgTYAE5f02hhyGFmuMmfVRFxUFJQ6df1; passport_fe_beating_status=false; msToken=EHofFpHmxAqfC1ZNatQkI5aPXpq9WokeEX0QMWiZ00zjMQ0k9lL7zhTyZNxkIA31qbX_P7rF9mAFNbz40rkfAp1U2Mz7JI5vP1QV6obKk3QvtxAxuUlmNnaRO6VqXnGV"
    //         ,"user-agent":"Mozilla/5.0 (X11; Linux aarch64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.188 Safari/537.36 CrKey/1.54.250320 Edg/108.0.0.0"
    //     });
    // logd(dyx)
    // //
    // // var ab = dyx.split("喜欢</span><span")[1].split(">")[1].split("<")[0];
    // // logd(ab);
    // //   let  resultStr = dyx.replace(/[\r\n]/g, ""); //去掉回车换行
    // logd("----------------------------------------------------------------");
    // // logd(resultStr)
    // let abc = dyx.split("<script id=\"RENDER_DATA\" type=\"application/json\">")[1].split("</script>")[0]
    // logd(abc)
    //
    // let abcd = decodeURIComponent(abc)
    // logd(abcd);
    // let all = JSON.parse(abcd)
    // dyfavoriting = all[37].user.user.favoritingCount
    // logd("这是点赞数" + dyfavoriting)
    // dyfollwing = all[37].user.user.followingCount
    // logd("这是关注数" + dyfollwing)
    // dyuseruid = all[37].user.user.uid
    // logd("这是抖音uid" + dyuseruid)
    // dyuid = all[37].user.user.secUid
    // logd("这是抖音secuid" + dyuid)
    //










}

//打开浏览器打开工具函数
function devcid(){

    homeScreen()
    sleep(500)
    clickPoint(425,2255)
    sleep(5000)
  if (findNode(name("复制输入框内容"),false)){
      logd("1")
      return true
  }else {
      if (activeAppInfo()==safari){
          logd('yea');
      }else {
          appLaunch(safari)
          sleep(2000)
      }
      if ( findNode(name("TabBarItemTitle"),true)){
          logd('找到搜索框')
          sleep(1000)

      }else if( findNode(name("URL"),false)){
          clickPoint(556,183)
          sleep(1000)
          logd('另外得搜索框')
      }else if (findNode(name("TabBarItemTitle"),false)){
          clickPoint(556,183)
          sleep(1000)
      } else {
          clickPoint(556,183)
          logd('点击输入框')
          sleep(1000)
      }
      if (findNode(label('清除文本'),true)){
          findNode(name("ClearTextButton"),true)
          logd('清楚所有文字')
          sleep(1000)
          inputText(deviceip+phoneid+"&autoFetch=1&autoFetchInterval=1000&autoOpenUrl=1",100)
          laoleng.keys.return()
      }else {
          sleep(1000)
          inputText(deviceip+phoneid+"&autoFetch=1&autoFetchInterval=1000&autoOpenUrl=1",100)
          laoleng.keys.return()
      }
  }



}


//打开浏览器输入
function web(a){
    homeScreen()
    sleep(1000)
    clickPoint(415,2255)
    let data =  setFetchNodeParam({"labelFilter": "2", "maxDepth": "20", "visibleFilter": "2","excludedAttributes":""})
    sleep(3000)

    if ( findNode(name("TabBarItemTitle"),true)){
        logd('找到搜索')
    }else {
        clickPoint(476,2127)
        logd('点击输入狂')
    }

    if (findNode(label('清除文本'),true)){
        findNode(name("ClearTextButton"),true)
        logd('清楚所有文字')
        sleep(1000)
        inputText(a,100)
        laoleng.keys.return()
    }else {
        sleep(1000)
        inputText(a,100)
        laoleng.keys.return()
    }
    sleep(1000)

    if (findNode(value('打开'),true)){
        logd('打开')
    }else if (findNode(value('好'),true)){
        logd('点击好，没网络')
        sleep(500)
        findNode(name('TabOverviewButton'),true)
        sleep(1000)
        findNode(name('AddTabButton'),true)
        sleep(1000)
        findNode(name("TabBarItemTitle"),true)
        inputText(a,100)
        laoleng.keys.return()
        sleep(1000)
        findNode(value('打开'),true)
        sleep(3000)
    }else {
        logd('其他问题')
    }
}



function getMiddleText(str, start, end, retain) {
    if (!str || !start || !end) return ""
    let a = str.indexOf(start)
    if (a !== -1) {
        let e = 0
        a += start.length;
        e = str.indexOf(end, a);
        if (e > a) {
            return retain ? str.substring(a - start.length, e + end.length) : str.substring(a, e)
        }
    }
    return ""
}
main();