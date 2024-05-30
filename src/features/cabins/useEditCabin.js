import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editCabins } from "../../services/apiCabins";
import toast from "react-hot-toast";

export function useEditCabin(reset) {
  const queryClient = useQueryClient();
  const { mutate: editCabinsApi, isLoading: isEditing } = useMutation({
    mutationFn: editCabins,
    onSuccess: () => {
      toast.success("Cabin successfully edited!");
      queryClient.invalidateQueries({ queryKey: ["cabins"] });
      reset();
    },
    onError: (error) => toast.error(error.message),
  });

  return { editCabinsApi, isEditing };
}
