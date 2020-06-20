import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);


//创建vuex的store
const store = new Vuex.Store({
 
  state: {
    // 存储token
    Authorization: localStorage.getItem('Authorization') ? localStorage.getItem('Authorization') : '',
    menuCollapse:'100%',
    //关联的门户用户信息
    relatedUsr:localStorage.getItem('relatedUsr') ? localStorage.getItem('relatedUsr') : '',

  },
 //更改store的状态
  mutations: {
    // 修改token，并将token存入localStorage
    changeLogin (state, user) {
      state.Authorization = user.Authorization;
      localStorage.setItem('Authorization', user.Authorization);
    },
    isCollapse(state){
        state.menuCollapse='64px'
    },
    notCollapse(state){
        state.menuCollapse='100%'
    },
    changerelatedUsr(state, user) {
      state.relatedUsr = user.relatedUsr;
      localStorage.setItem('relatedUsr', user.relatedUsr);
    },

  },

  //异步的时候用到action
  actions:{


  },

  //通过getters进行数据获取
  getters:{
      getMenuCollapse(state){
          return state.menuCollapse;
      }
  }



});
 
export default store;