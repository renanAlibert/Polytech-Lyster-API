<template>
    <div class="game">
        <div class="arena">
            <h2>ZONE DE COMBAT</h2>
            <div class="stats">
                
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
.arena
{
    /*background: url("./../assets/dank_landscape.jpg") center no-repeat;
    background-size: 150%;*/
    flex: 4;
}
.bonus_panel
{
    flex: 1.5;
    display: flex;
    flex-direction: column;

    border-left: solid black 2px;
}
.bonus_shop, .bonus_loot
{
    height: 50%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
}
h3 
{
    background-color: gold;
}
.bonus_list
{
    flex: 1;
    overflow-y: scroll;

    display: flex;
    flex-direction: column;
}
.bonus_list::-webkit-scrollbar
{
    display: none;
}
</style>