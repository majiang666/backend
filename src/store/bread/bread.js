const bread = {
    state:{
        breadName:''
    },
    mutations: {
        showBread(state,val){
            return state.breadName = val;
        }
    }
}
export default bread;