<template>
  <div class="monitor">
    <el-button id="AppEmbedOut">AppEmbedOut</el-button>
    <el-button @click="close">close</el-button>
    <el-button @dblclick.native="play">index</el-button>
    <div id="AppEmbed1" style="border: solid 1px #F0F0F0; min-width:30px;min-height:20px;width:400px;height:360px" />
  </div>
</template>

<script>

import { AE } from 'AppEmit_1.2_min'

export default {
  props: {
  },
  data() {
    return {
      reqPar: 
      {
        emit:"open",
        Obj:"libvlc",
        AppType:1,
        pos:1,
        AppId:"1",
        par:
        { 
          mrl:"rtsp://admin:12345@192.168.1.188:554/Streaming/Channels/1",localFile:0
        },
        par0:
        {
          fullscreen:1,
          volume:70,
          autoplay:1,
          controls:0
        }
      }
    };
  },
  mounted() {
		AE.InitApp("ws://localhost:80/appemit?cid=00000-1&sid=1&flag=1");
  },
  watch: {

  },
  methods: {
    play() {
      AE.OpenApp(this.reqPar)
    },  
    close() {
      AE.OpenApp({"emit":"closeAll","Obj":"libvlc"})
    }
  }
};
</script>

<style>
.monitor {
  width: 50vh;
  height: 50vh;
}
</style>