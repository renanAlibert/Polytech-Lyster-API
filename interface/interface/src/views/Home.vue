<template>
  <div class="home">
    <Game/>
    <img alt="Vue logo" src="../assets/martian.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <p>{{gold}} euros</p>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Game from "@/components/Game.vue";

export default {
  name: "home",
  components: {
    HelloWorld,
    Game
  },
  data() {
    return {
      gold:100
    }
  }
};



</script>
