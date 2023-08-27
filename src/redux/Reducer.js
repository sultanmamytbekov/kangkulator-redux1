const initialState = {
  money : ''
}


export const Reducer = (state = initialState , action) => {

   switch(action.type) {
      case 'ADD_MONEY' : 
    
          return {...state , money : state.money + action.payload};
     
      default : {
          return state
      }
   }

}