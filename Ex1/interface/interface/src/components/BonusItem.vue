<template>
    <div class="bonus_item">
        <div class="bonus_description">
            <label>Punch +{{punchBonus}} and DPS +{{dpsBonus}}</label>
        </div>
        <div class="bonus_price"  @click="buyBonus()">
            <label>{{this.price}}</label>
        </div>
    </div>
</template>

<style>
.bonus_item
{
    color: black;
    box-sizing: border-box;
    margin: 5px;
    border-radius: 1vh;
    border: solid black 2px;

    display: flex;
    flex-direction: row;

    font-size: 110%;
    transition: border 0.3s;
}
.bonus_item:hover
{
}
.bonus_description
{
    flex: 3;

    text-align: left;
}
.bonus_price
{
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: transparent;
    color: rgb(202, 145, 0);
    margin: 2px;
    border-radius: 1vh;
    border: solid gold 2px;

    transition: 1s;
}
.bonus_price:hover
{
    transition: 1s;
    background-color: gold;
    color: black;
}
.bonus_price:active
{
    transition: 0s;
    background-color: yellow;
}
</style>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
    computed: mapGetters(['getGold']),
    props: {
        price: Number,
        punchBonus: Number,
        dpsBonus: Number,
    },
    methods: { 
    ...mapMutations(['addDps', 'addPunch', 'subGold']),

    buyBonus(){
        if(this.getGold > this.price)
        {
            this.addPunch(parseInt(this.punchBonus));
            this.addDps(parseInt(this.dpsBonus));
            this.subGold(parseInt(this.price));
            this.price = this.price * 2;
        }
    },
  }
}
</script>