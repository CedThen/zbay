import { useNavigate } from "react-router-dom";

const useCustomNavigate = (path) => {
  const navigate = useNavigate();

  return () => navigate(path)
}

export default useCustomNavigate