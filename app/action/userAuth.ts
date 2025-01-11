"use server";

import { signIn, signOut } from "@/auth";

export async function doLogout(): Promise<void> {
  await signOut({ redirectTo: "/" });
}

export async function doCredentialLogin(formData: FormData): Promise<any> {
  try {
    const response = await signIn("credentials", {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
      redirect: false,
    });
    return response;
  } catch (err: unknown) {
    throw new Error((err as Error).message || "Unknown error occurred");
  }
}
