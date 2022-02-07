import { categorize } from "../services"

const UPDATE_PRODUCTS = 'UPDATE_PRODUCTS'
const UPDATE_USER = 'UPDATE_USER'

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

const defaultData = {
  products: null,
  categorizedProducts: null,
  JWT: null,
  user: {
    cart: [],
    history: null
  }
}

export function dataReducer(state = defaultData, action) {
  switch (action.type) {
    case UPDATE_PRODUCTS:
      return { ...state, products: action.payload, categorizedProducts: categorize(action.payload) }
    default:
      break;
  }

  return state
}