const initialState = {

    users: {
        isLoggedIn: false,
        userObj: {},
        logoutAlert:false,
        headerToken:'',
        cartDrawer:false,
        

    }
  }
  
const currentUser = (state = initialState, action) => {
    switch(action.type){
        case 'SET_CURRENT_USER':
            return {
            ...state,
                users: {
                    ...state.users,
                    isLoggedIn: action.payload.login_state,
                    userObj: action.payload.user,
                    logoutAlert:false
                    },
                    
                }
        case 'LOG_OUT':
                return {
                ...state,
                    users: {
                        ...state.users,
                        logoutAlert:action.payload.alert
                        },
                        
                    }
        case 'CART_DRAWER':
            return {
            ...state,
                users: {
                    ...state.users,
                    cartDrawer:action.payload.drawer,
                    },

                }
        
        default:
            return state
    }
}

export const user =  currentUser;