import { useMutation } from "@tanstack/react-query";
import { signup } from "../../services/apiAuth";
import { toast } from "react-hot-toast";

export function useSignup() {
  const { mutate: signupApi, isLoading } = useMutation({
    mutationFn: signup,
    onSuccess: () => {
      toast.success(
        "Account successfully created! Please verify the new account from users's email address."
      );
    },
  });

  return { signupApi, isLoading };
}
