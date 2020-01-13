<template>
    <div class="game">
        <div class="game_main">
            <div class="stats">
                <div id="stat stat_gold">
                    <label class="lbl_gold_txt">Gold :</label>
                    <label class="lbl_gold">125 000 000 000 !!!</label>
                </div>
                <div id="stat stat_dps">
                    <label class="lbl_dps_txt">Damage per second :</label>
                    <label class="lbl_dps">125 /s</label>
                </div>
            </div>
            <div class="arena">
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
import BonusItem from "@/components/BonusItem.vue";

export default {
  name: "game",
  components: {
    BonusItem
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
.stat
{
}
.arena
{
    background: url("./../assets/fantasy_forest.jpg") center no-repeat;
    background-size: 150%;
    flex: 4;
}
.hitbox
{}
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