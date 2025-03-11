import { supabase } from "./supabase-config";

const profileImage = async (file, path) => {
  if (!file) return null;

  try {
    const filePath = `${path}/${file.name}`;

    const { data, error } = await supabase.storage
      .from("Profile-Pictures") // Your Supabase bucket name
      .upload(filePath, file, { cacheControl: "3600", upsert: false });

    if (error) throw error;

    const { data: urlData } = supabase.storage
      .from("Profile-Pictures")
      .getPublicUrl(filePath);

    return urlData.publicUrl; // Return the public URL of the uploaded file
  } catch (error) {
    console.error("Upload error:", error.message);
    return null;
  }
};

export default profileImage;
