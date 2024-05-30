import { useMutation, useQueryClient } from "@tanstack/react-query";
import { duplicateCabins } from "../../services/apiCabins";
import toast from "react-hot-toast";
export function useDuplicateCabins() {
  const queryClient = useQueryClient();
  const { mutate: duplicateCabinsApi, isLoading: isCreating } = useMutation({
    mutationFn: duplicateCabins,
    onSuccess: () => {
      toast.success("Cabin successfully copied!");
      queryClient.invalidateQueries({ queryKey: ["cabins"] });
    },
    onError: (error) => toast.error(error.message),
  });

  return { duplicateCabinsApi, isCreating };
}
