<template>
    <div class="game">
        <div class="game_main">
            <div class="stats">
                <div id="stat stat_gold">
                    <label class="lbl_gold_txt">Vie</label>
                    <label class="lbl_gold">{{vie}}</label>
                </div>
                <div id="stat stat_dps">
                    <label class="lbl_dps_txt">Damage per second :</label>
                    <label class="lbl_dps">{{getDps}}</label>
                </div>
            </div>
            <div class="arena">
                <LifeBar />
                <div class="hitbox">
                    <img class="monster" src="../assets/martian.png">
                </div>
            </div>
        </div>
        <div class="bonus_panel">
            <div class="bonus_shop">
                <h3>BOUTIQUE DE BONUS</h3>
                <div class="bonus_list">
                    <BonusItem description="+25% de DPS et Punch damage +30" price="150"/>
                    <BonusItem description="Description" price="150"/>
                    <BonusItem description="Description" price="150"/>
                    <BonusItem description="Description" price="150"/>
                    <BonusItem description="Description" price="150"/>
                    <BonusItem description="Description" price="150"/>
                    <BonusItem description="Description" price="150"/>
                    <BonusItem description="Description" price="150"/>
                    <BonusItem description="Description" price="150"/>
                    <BonusItem description="Description" price="150"/>
                    <BonusItem description="Description" price="150"/>
                    <BonusItem description="Description" price="150"/>
                    <BonusItem description="Description" price="150"/>
                    <BonusItem description="Description" price="150"/>
                    <BonusItem description="Description" price="150"/>
                    <BonusItem description="Description" price="150"/>
                    <BonusItem description="Description" price="150"/>
                    <BonusItem description="Description" price="150"/>
                    <BonusItem description="Description" price="150"/>
                </div>
            </div>
            <div class="bonus_loot">
                <h3>BONUS ACQUIS</h3>
                <div class="bonus_list">
                    <BonusItem description="Description" price="150"/>
                    <BonusItem description="Description" price="150"/>
                    <BonusItem description="Description" price="150"/>
                    <BonusItem description="Description" price="150"/>
                    <BonusItem description="Description" price="150"/>
                    <BonusItem description="Description" price="150"/>
                    <BonusItem description="Description" price="150"/>
                    <BonusItem description="Description" price="150"/>
                    <BonusItem description="Description" price="150"/>
                    <BonusItem description="Description" price="150"/>
                    <BonusItem description="Description" price="150"/>
                    <BonusItem description="Description" price="150"/>
                    <BonusItem description="Description" price="150"/>
                    <BonusItem description="Description" price="150"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import LifeBar from "@/components/LifeBar.vue";
import BonusItem from "@/components/BonusItem.vue";
import { mapGetters , mapMutations } from 'vuex';

export default {
  name: "game",
  computed: mapGetters(['getDps']),
  components: {
    BonusItem,
    LifeBar
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
          await new Promise(r => setTimeout(r, 100));
          this.vie -= this.getDps/10;
      }
    },

    plus10Dps(){
      this.addDps(10);
      this.test = 10;
    }
  }
};

</script>

<style>
.game
{
    border: solid black 2px;

    height: 80vh;
    display: flex;
    flex-direction: row;
}
.game_main
{
    flex: 4;
    display: flex;
    flex-direction: column;
}
.stats
{
    font-size: 120%;
    display: inline-flex;
    justify-content: space-around;
}
.arena
{
    background: url("./../assets/fantasy_forest.jpg") center no-repeat;
    background-size: 150%;
    flex: 4;
}
.bonus_panel
{
    flex: 1.5;
    display: flex;
    flex-direction: column;
}
.bonus_shop, .bonus_loot
{
    max-height: 50%;
    display: flex;
    flex-direction: column;
}
.bonus_loot > h3, .bonus_shop > h3 
{
    margin: 0px;
    padding: 0px;
}
.bonus_list
{
    flex: 1;
    overflow-y: scroll;

    display: flex;
    flex-direction: column;
    margin: 0px 1px 0px 1px;
}
.bonus_list::-webkit-scrollbar
{
    /*display: none;*/
    width: 15px;
    /*background-color: green;*/
    border-radius: 25vh;
}
.bonus_list::-webkit-scrollbar-thumb
{
    /*display: none;*/
    width: 5px;
    background-color: grey;
    border-radius: 25vh;
}
</style>