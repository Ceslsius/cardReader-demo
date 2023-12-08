<script setup>
import axios from "axios";
import { ref } from 'vue'
const info = ref(null)
const getData = (val) => {
  info.value = val
}
window.getData = getData
const openDevice = () => {
  AE.InitApp('ws://localhost:80/appemit?cid=00000-1&sid=1&flag=1');
}
const openPage = () => {
  const ReqPar7 = {
    "emit": "open", "Obj": "web", "AppType": 1, "pos": 1, "AppId": 1, "par": {
      "URL": '/index.htm', "htmlStr": null, "HttpServer_startUrl": null                                         //"HttpServer_startUrl":"/demo/htmlDemo/ocx.html"   //使用本地html
      , "embed_object": {                               //多个object可以设置embed_object为数组 
        "objName": "objIDCard"
        , "reg": true    //null 不执行注册   1强制操作 true 未注册则注册  false 卸载注册 (重启AppEmit后，就不能加载dll了)  
        , "asAdmin": 0   //1需要管理员权限注册 0不需要 ,win7管理员身份会有提示确认窗口
        //  ,"pid":"292A53CD-DA8F-46A5-808D-B286F2759C37" //使用私有插件,则需要增加下列信息 如果dll/ocx文件改变了，需要更新appemit登陆窗口中我的应用里面的sha1值
        , "dllFile": "/MT8ActiveX.ocx"      //为了安全，限制为AppEmit文件夹，不能注册或者注销其它文件夹下面的ocx
        , "CLASSES_ROOT": "HKEY_CLASSES_ROOT\\真实的ReportProj1.ReportX\\CLSID"   //可选，reg= true检查是否已经注册,一定要是\\分隔
        , "clsId": "10EC554B-357B-4188-9E5E-AC5039454D8B"                           // 可选，reg= true检查是否已经注册
        //   ,"AuthKey":"A1-ZneY-2qGoXRfc7h6GZZxBB2gceORBwyhoxsA6GK5agLtIAwLhh6BnK61W8fORVNv"  								  
      }
    }
  };
  AE.OpenApp(ReqPar7);
}
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
    <div class="btn-group">
      <div @click="openDevice">建立中间件连接</div>
      <div @click="openPage">开启读卡页面</div>
    </div>
    <div>返回的数据：</div>
    <div class="">{{ info }}</div>
    <div id="AppEmbed1"  style="	border: solid 2px #F0F0F0; min-width:30px;min-height:20px;width:600px;height:400px" ></div>
  </header>

  <!-- <RouterView /> -->
</template>

<style scoped>
.btn-group {
  width: 100%;
  height: 40px;
  display: flex;
}

.btn-group div {
  height: 40px;
  line-height: 40px;
  padding: 0 20px;
  margin-left: 30px;
  background: #ccc;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
