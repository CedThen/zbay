import { updateProducts } from '../store/dataStore';
import { useDispatch } from "react-redux"
import { fetcher } from '../apis';

async function useFetchData() {
  const dispatch = useDispatch();
  const products = await fetcher()
  dispatch(updateProducts(products))
}

export default useFetchData;
