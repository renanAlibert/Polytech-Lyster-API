<template>
    <div class="game">
        <div class="game_main">
            <div class="stats">
                <div class="stat stat_life">
                    <label class="lbl_life_txt">Life : </label>
                    <label class="lbl_life">{{Math.floor(getLife)}}</label>
                </div>
                <div class="stat stat_gold">
                    <label class="lbl_gold_txt">Gold : </label>
                    <label class="lbl_gold">{{Math.floor(getGold)}}</label>
                </div>
                <div class="stat stat_punch">
                    <label class="lbl_punch_txt">Punch : </label>
                    <label class="lbl_punch">{{getPunch}}</label>
                </div>
                <div class="stat stat_dps">
                    <label class="lbl_dps_txt">Damage per second :</label>
                    <label class="lbl_dps">{{getDps}}</label>
                </div>
            </div>
            <div class="arena">
                <LifeBar class="monster_lifebar" :filling=((getLife/getTotalLife)*100) />
                <div class="hitbox" @click="hit()"></div>
            </div>
        </div>
        <div class="bonus_panel">
            <div class="bonus_shop">
                <h3>BOUTIQUE DE BONUS</h3>
                <div class="bonus_list">
                    <BonusItem punchBonus=15 dpsBonus=0 price=150 />
                    <BonusItem punchBonus=5 dpsBonus=2  price=150 />
                </div>
            </div>
            <div class="bonus_loot">
                <h3>BONUS ACQUIS</h3>
                <div class="bonus_list">
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
  computed: mapGetters(['getDps', 'getLife', 'getTotalLife', 'getPunch', 'getGold']),
  components: {
    BonusItem,
    LifeBar
  },
  created(){
    this.dps();
    this.checkDeath();
  },
  data(){
    return{
    }
  },
  methods: { 
    ...mapMutations(['addDps', 'setLife', 'setTotalLife', 'setPunch', 'addGold', 'subGold']),

    async checkDeath(){
        for(let i = 0 ; i < 1; i = 0){
            await new Promise(r => setTimeout(r, 200));
            if(this.getLife == 0) {
                this.setTotalLife(this.getTotalLife*10);
                this.setLife(this.getTotalLife);
            }
        }
    },

    async dps(){
      for(let i = 0 ; i < 1; i = 0){
          await new Promise(r => setTimeout(r, 100));
          var nlife = this.getLife - this.getDps/10;
          this.setLife(nlife);
          this.addGold(this.getDps/10);
      }
    },

    plus10Dps(){
      this.addDps(10);
      this.test = 10;
    },

    hit(){
        this.setLife(this.getLife - this.getPunch);
        this.addGold(this.getPunch);
    },
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
    border-right: solid black 2px;
}
.stats
{
    font-size: 120%;
    display: inline-flex;
    justify-content: space-around;
}
.stat
{
    display: flex;
    flex-direction: column;
}
.arena
{
    position: relative;
    background: url("./../assets/space.jpg") center no-repeat;
    background-size: 200%;
    flex: 4;
    overflow: hidden;
}
.hitbox
{
    position: absolute;
    top: 25%;
    left: 25%;
    right: 25%;
    bottom: 25%;
    height: 50%;
    width: 50%;
    background: url("./../assets/ridley.png") center no-repeat;
    background-size: 100%;
    transition: 0.05s;
}
.hitbox:active
{
    width: 46%;
    left: 27%;
    right: 27%
}
.monster_lifebar
{
    position: absolute;
    top: 10px;
    left: 10px;
    width: 50%;
    z-index: 1000;
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