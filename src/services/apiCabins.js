import supabase from "./supabase";

export async function getCabins() {
  let { data, error } = await supabase.from("cabins").select("*");
  if (error) {
    throw new Error("Data could not be loaded");
  }
  return data;
}

export async function deleteCabins(id) {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);
  if (error) {
    throw new Error(error.message);
  }
  return data;
}
// https://givqrbiqfmdaeqiflnyr.supabase.co/storage/v1/object/public/cabins/cabin-001.jpg
export async function createCabins(newCabin) {
  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    "/",
    ""
  );
  const imagePath = `https://givqrbiqfmdaeqiflnyr.supabase.co/storage/v1/object/public/cabins/${imageName}`;
  const { data, error } = await supabase
    .from("cabins")
    .insert([{ ...newCabin, image: imagePath }])
    .select();
  if (error) {
    throw new Error(error.message);
  }

  //2-Upload image
  const { error: uploadingError } = await supabase.storage
    .from("cabins")
    .upload(imageName, newCabin.image);
  if (uploadingError) {
    await supabase.from("cabins").delete().eq("id", data[0].id);
    throw new Error(
      `There is an error while uploaidng image and ${uploadingError.message}`
    );
  }
  return data;
}

export async function editCabins(cabinToEdit) {
  const { id, ...cabinValues } = cabinToEdit;
  const isImageToUpload = Boolean(cabinValues.image[0].name);
  if (isImageToUpload) {
    const imageName = `${Math.random()}-${
      cabinValues.image[0].name
    }`.replaceAll("/", "");
    const imagePath = `https://givqrbiqfmdaeqiflnyr.supabase.co/storage/v1/object/public/cabins/${imageName}`;

    //Uploading image
    const { error: uploadingError } = await supabase.storage
      .from("cabins")
      .upload(imageName, cabinValues.image[0]);
    if (uploadingError) {
      throw new Error(
        `There is an error while updating image: ${uploadingError.message}`
      );
    }
    //Record Updating
    const { data, error } = await supabase
      .from("cabins")
      .update({ ...cabinValues, image: imagePath })
      .eq("id", id)
      .select();
    if (error) {
      throw new Error("There was an error while updating: " + error.message);
    }
    return data;
  } else {
    const { data, error } = await supabase
      .from("cabins")
      .update({ ...cabinValues })
      .eq("id", id)
      .select();
    if (error) {
      throw new Error("There was an error while updating: " + error.message);
    }
    return data;
  }
}

export async function duplicateCabins(cabin) {
  const { data, error } = await supabase
    .from("cabins")
    .insert([{ ...cabin }])
    .select();
  if (error) {
    throw new Error("Cabin could not be duplicated!");
  }

  return data;
}
