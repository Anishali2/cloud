const initialState = {

    users: {
        isLoggedIn: false,
        userObj: {},
        logoutAlert:false,
        headerToken:'',
        cartDrawer:false,
        cartData:[],
        searchBox:false,
        searchProducts:[]

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
        case 'SEARCH_BOX':
            return {
            ...state,
                users: {
                    ...state.users,
                    searchBox:action.payload.searchAlert,
                    searchProducts:action.payload.products
                    },
                    
                }
        case 'CART_DRAWER':
            return {
            ...state,
                users: {
                    ...state.users,
                    cartDrawer: action.payload.drawer ,
                    cartData:action.payload.cartData,
                    },

                }
        default:
            return state
    }
}

export const user =  currentUser;