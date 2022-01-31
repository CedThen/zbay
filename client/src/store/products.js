const UPDATE_DATA = 'UPDATE_DATA'

export function updateData(data) {
  return {
    type: UPDATE_DATA,
    payload: data
  }
}

const defaultData = {
  products: null
}

function dataStore(state, action) {
  return state
}