import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCabins } from "../../services/apiCabins";
import toast from "react-hot-toast";
export function useCreateCabins(reset, toggelModal) {
  const queryClient = useQueryClient();
  const { mutate: createCabinsApi, isLoading: isCreating } = useMutation({
    mutationFn: createCabins,
    onSuccess: () => {
      toast.success("Cabin successfully added!");
      queryClient.invalidateQueries({ queryKey: ["cabins"] });
      reset();
      toggelModal?.();
    },
    onError: (error) => toast.error(error.message),
  });

  return { createCabinsApi, isCreating };
}
