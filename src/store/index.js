import { createStore } from 'vuex'

export default createStore({
  state: {
    article: [{
      id: Date(),
      heading: 'Статья первая',
      content: 'контент 1',
      autor: 'Бублико',
      category: 'Общество',
      description: 'Пожирание бублико',
      dateArticle: ' '
    },
    {
      id: Date(),
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
      }
  },
  modules: {
  }
})
