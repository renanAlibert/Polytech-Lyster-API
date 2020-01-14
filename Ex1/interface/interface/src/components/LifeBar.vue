<template>
    <div class="lifebar">
        <div class="lifebar_label">{{filling}}%</div>
        <div class="lifebar_thumb" :style="setFilling()"></div>
    </div>
</template>

<style>
.lifebar
{
    border: solid black 3px;
    min-height: 20px;
    height: 0px;
    min-width: 15%;
    background-color: white;
    position: relative;
}
.lifebar_label
{
    text-align: center;
    float: right;
    margin-right: 5px;
    z-index: 2000;
    color: black;
}
.lifebar_thumb
{
    background-color: red;
    width: 100%;
    height: 100%;
    transition: width 0.2s;
}
</style>

<script>
export default {
    props:{
        filling: Number
    },
    methods:{
        setFilling(){
            this.filling = Math.floor(this.filling);
            if(this.filling < 0) this.filling = 0;
            if(this.filling > 100) this.filling = 100;
            return "width: " +  this.filling + "%";
        }
    }
}
</script>