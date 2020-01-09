<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    Vie : {{vie}}
    <button @click="plus10Dps()">Ajouter 10 de dps</button>
    DPS : {{getDps}}
  </div>
</template>

<script>
import { mapGetters , mapMutations } from 'vuex';

export default {
  name: "HelloWorld",
  computed: mapGetters(['getDps']),
  props: {
    msg: String
  },
  created(){
    this.dps();
  },
  data(){
    return{
      vie: 1000
    }
  },
  methods: { 
    ...mapMutations(['addDps']),

    async dps(){
      for(let i = 0 ; i < 1; i = 0){
          await new Promise(r => setTimeout(r, 1000));
          this.vie -= this.getDps;
      }
    },

    plus10Dps(){
      this.addDps(10);
      this.test = 10;
    }
  }
};


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
