import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCabins } from "../../services/apiCabins";
import toast from "react-hot-toast";

export function useDeleteCabin() {
  const queryClinet = useQueryClient();
  const { mutate: deleteCabinApi, isLoading: isDeleting } = useMutation({
    mutationFn: deleteCabins,
    onSuccess: () => {
      toast.success("Cabin successfully deleted!");
      queryClinet.invalidateQueries({
        queryKey: ["cabins"],
      });
    },
    onError: (error) => toast.error(error.message),
  });

  return { deleteCabinApi, isDeleting };
}
