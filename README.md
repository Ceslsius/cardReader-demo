<!--
 * @Descripttion: 
 * @Author: Zhang Yunzhong
 * @Date: 2023-12-07 20:09:29
 * @LastEditors: Zhang Yunzhong
 * @LastEditTime: 2023-12-08 11:15:44
-->
适用于明泰智能技术有限公司的复合支付终端，支持二维码，身份证，接触类IC卡，非接触类IC卡，银行卡的读写
因为其只提供了OCX控件，目前有两个方案
1.使用IE浏览器或者其他带IE内核的浏览器（比如Edge IE模式/360浏览器兼容模式）
打开DEMO文件夹，管理员权限安装  安装控件64位.bat
然后打开MT8test.html，这时候如果正常就能看到弹出了一个，是否允许 ActiveX 控件运行的弹窗，允许之后就能连接读卡器了
2.使用谷歌浏览器，通过中间件连接硬件
目前有找到两个中间件
--1.AppEmit（https://www.appemit.com/）
--2.猿大师（http://www.yuanmaster.com/xiazai/）
这里我用的AppEmit，其免费版有弹窗，其他功能正常使用，使用测试账号能正常运行，发布的话需要注册账号然后修改配置，详见文档
配置步骤：
--1.使用管理员权限安装AppEmit.exe
--2.如果要发布，修改cip和clientKey，详见文档
--3.运行页面，先和中间件建立连接，再使用IE内核打开调用ocx的页面，对读卡器进行操作，读卡器获取数据，触发appEmit中的事件监听，appEmit再通过window上的事件通知App.vue（这里可以改成eventBus）