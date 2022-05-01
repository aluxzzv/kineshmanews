import { createStore } from 'vuex'

export default createStore({
  state: {
    article: [{
      id: 123,
      heading: 'Статья первая',
      content: 'контент 1',
      autor: 'Бублико',
      category: 'Общество',
      description: 'Пожирание бублико',
      dateArticle: ' '
    },
    {
      id: 456,
      heading: 'Статья вторая',
      content: 'контент 2',
      autor: 'Колбаскин',
      category: 'Общество',
      description: 'Пожирание колбасы',
      dateArticle: ' '
    }

    ]
  },
  mutations: {
    addArt(state, playload){
      state.article.push(playload)
    }
  },
  actions: {
    

  },
  getters:{
      getArticle: state => {
        return state.article
      },
      getArticleItem: state =>(id)=>{
        console.log(id)
        /*for(let o = 1; i < state.article.length;i++){
          if(state.article[i].id == id){
            return state.article[i]
          }*/
          return state.article.find(art=>art.id == id)
        },

        getArticleShow: state=> (category)=>{
          return state.article.find(art=>art.category==category)
        }
    
  }

  }
  
)
