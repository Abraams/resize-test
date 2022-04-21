<template>
  <div id="app">
    <div v-if="$device.isMobile">
      mobile
    </div>
    <div v-if="$device.isDesktop">
      desktop
    </div>
  </div>
</template>

<script>
// import {deviceObserverState} from "@/services/DeviceResizeObserver";

export default {
  name: 'App',
  // data() {
  //   return {
  //     deviceObserverState  // Реализация через state
  //   }
  // }
  mounted() {
    console.log(this.$device) // Реализация через plugin
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
