"use server";

export async function userImageUpload(
  formData: FormData
): Promise<{ message: string; status: number }> {
  const file = formData.get("image");

  if (!file || typeof file === "string") {
    return { message: "Invalid file", status: 400 };
  }

  const response = await fetch("http://localhost:8000/api/test-image", {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    return { message: "Failed to upload image", status: response.status };
  }

  return { message: "Image uploaded successfully", status: 200 };
}

export async function userMultipleImageUpload(
  formData: FormData
): Promise<{ message: string; ok: boolean }> {
  const response = await fetch("http://localhost:8000/api/upload-gallery", {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    return { message: "Failed to upload images", ok: false };
  }

  return { message: "Images uploaded successfully", ok: true };
}
