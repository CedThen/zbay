import { useNavigate } from "react-router-dom";
import { routeNames } from "../components/constants";
const useCustomNavigate = (path, state) => {
  const navigate = useNavigate();
  // const paths = {
  //   [routeNames.Login]: navigate(routeNames.LOGIN, state)
  // }
  return () => navigate(path, state)
}

export default useCustomNavigate