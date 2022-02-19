import { categorize } from "../services"
import { updateCartDb } from "../apis/index"
const UPDATE_PRODUCTS = 'UPDATE_PRODUCTS'
const UPDATE_USER = 'UPDATE_USER'
const UPDATE_CART = 'UPDATE_CART'

export function updateProducts(data) {
  return {
    type: UPDATE_PRODUCTS,
    payload: data
  }
}

export function updateUser(user) {
  return {
    type: UPDATE_USER,
    payload: user
  }
}

export function logOut() {
  return {
    type: UPDATE_USER,
    payload: { isLoggedIn: false, token: null, user: defaultData.user }
  }
}

export function updateCart(cart) {
  return {
    type: UPDATE_CART,
    payload: cart
  }
}

const defaultData = {
  isLoggedIn: false,
  products: null,
  categorizedProducts: null,
  token: null,
  user: {
    id: null,
    email: '',
    cart: {},
    orders: []
  }
}

export function dataReducer(state = defaultData, action) {
  switch (action.type) {
    case UPDATE_PRODUCTS:
      return { ...state, products: action.payload, categorizedProducts: categorize(action.payload) }
    case UPDATE_USER:
      return { ...state, ...action.payload }
    case UPDATE_CART:
      updateCartDb(state.token, action.payload)
      return { ...state, user: { ...state.user, cart: action.payload } }
    default:
      break;
  }

  return state
}