import { categorize } from "../services"

const UPDATE_PRODUCTS = 'UPDATE_PRODUCTS'

export function updateProducts(data) {
  return {
    type: UPDATE_PRODUCTS,
    payload: data
  }
}

const defaultData = {
  products: null,
  categorizedProducts: null,
  JWT: null,
  cart: [],
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