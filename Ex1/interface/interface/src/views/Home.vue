<template>
  <div class="home">
    <Game/>
    <img alt="Vue logo" src="../assets/martian.png" />
    <p>{{gold}} euros</p>
  </div>
</template>

<script>
// @ is an alias to /src
import Game from "@/components/Game.vue";

export default {
  name: "home",
  components: {
    Game
  },
  data() {
    return {
      gold:100
    }
  }
};
</script>
