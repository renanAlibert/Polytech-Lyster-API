<template>
    <div class="bonus_item">
        <div class="bonus_description">
            <label>{{description}}</label>
        </div>
        <div class="bonus_price">
            <label>{{price}}</label>
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
}
.bonus_item > div
{

}
.bonus_description
{
    flex: 3;

    text-align: left;
    border-right: solid black 2px;
}
.bonus_price
{
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
</style>

<script>
export default {
    props: {
        description: String,
        price: Number
    }
}
</script>