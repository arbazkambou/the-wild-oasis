import { useMutation } from "@tanstack/react-query";
import { login } from "../../services/apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useLogin() {
  const navigate = useNavigate();
  const { mutate: loginApi, isLoading: isLogingIn } = useMutation({
    mutationFn: ({ email, password }) => login({ email, password }),
    onSuccess: () => {
      toast.success("Login Successfully!");
      navigate("/");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { loginApi, isLogingIn };
}
