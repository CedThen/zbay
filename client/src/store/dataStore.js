import { categorize } from "../services"

const UPDATE_PRODUCTS = 'UPDATE_PRODUCTS'
const UPDATE_SEARCH_TERM = 'UPDATE_SEARCH_TERM'

export function updateProducts(data) {
  return {
    type: UPDATE_PRODUCTS,
    payload: data
  }
}

export function updateSearchTerm(term) {
  return {
    type: UPDATE_SEARCH_TERM,
    payload: term
  }
}

const defaultData = {
  products: null,
  categorizedProducts: null,
  JWT: null,
  cart: [],
  searchTerm: ''
}

export function dataReducer(state = defaultData, action) {
  switch (action.type) {
    case UPDATE_PRODUCTS:
      return { ...state, products: action.payload, categorizedProducts: categorize(action.payload) }
    case UPDATE_SEARCH_TERM:
      return { ...state, searchTerm: action.payload }
    default:
      break;
  }

  return state
}