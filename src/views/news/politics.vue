<template>
<newsmenu />
Политика
{{getArt}}
</template>
<script>
import newsmenu from '@/components/newsmenu.vue'
export default{
    name: 'politics',
    components:{
        newsmenu
    },
    computed:{
        getArt(){
            //return this.$store.getters.getArticleShow('1')
        }
    }
}
</script>