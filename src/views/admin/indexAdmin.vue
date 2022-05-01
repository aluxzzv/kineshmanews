<template>
<newsmenu />
<div class="container">
    <div class="row">
        <div v-for="item in getArt" :key="item.heading"  class="card">
        <h5 class="card-header">{{item.heading}}</h5>
        <div class="card-body">
            <p class="card-text">{{item.description}}</p>
            {{item.id}}
            <div class="row">
            <div class="col-2 aling-self-start">
                <router-link class="btn btn-primary" :to="{name:'editArticle',params:{id:item.id}}">Редактировать</router-link> 
            </div> 
            <div class="col-2 aling-self-start">
                <button v-on:click="deleteItem(item.id)" class="btn btn-danger" >Удалить{{item.id}}</button> 
                
            </div>  
            </div>   
        </div>
</div>
    </div>
</div>

</template>

<script>
import newsmenu from '@/components/newsmenu.vue'
export default{
    name: 'indexAdmin',
    components:{
        newsmenu
    },
    computed:{
        getArt(){
            return this.$store.getters.getArticle
        }
    },
    methods:{
        deleteItem(id){
            this.$store.commit('deleteArt',id)
            console.log(id)
        }
    }
    
}
</script>

<style>
.card{
    border-color:blue;
    padding-left:0px;
    padding-right:0px;
}
</style>