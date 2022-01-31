import { useNavigate } from "react-router-dom";

const useCustomNavigate = (path, state) => {
  const navigate = useNavigate();
  return () => navigate(path, state)
}

export default useCustomNavigate