"use server";

import { auth } from "@/auth";
import { revalidateTag } from "next/cache";

interface UserDataResponse {
  error?: string;
  ok: boolean;
  data?: any;
}

export async function getUserData(): Promise<UserDataResponse> {
  const session = await auth();

  // Check for authentication and access token
  if (!session?.user?.accessToken) {
    return {
      error: "User is not authenticated.",
      ok: false,
    };
  }

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/user`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${session?.user?.accessToken || ""}`,
        },
        next: { tags: ["userDataUpdate", "createSubscription"] },
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Failed to fetch user data:", errorData);
      return {
        error: errorData?.message || "Failed to fetch user data.",
        ok: false,
        data: null,
      };
    }

    const data = await response.json();
    return {
      ok: true,
      data: data?.payload?.user || null,
    };
  } catch (error) {
    console.error("Error fetching user data:", error);
    return {
      error: "An unexpected error occurred. Please try again later.",
      ok: false,
      data: null,
    };
  }
}

export async function updateUserData(
  formData: FormData
): Promise<{ error: string; ok: boolean }> {
  const file = formData.get("image");

  const session = await auth();

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/update-user`,
      {
        method: "PUT",
        headers: {
          Authorization: ` ${session?.user?.accessToken}`,
        },
        body: formData,
      }
    );

    revalidateTag("userDataUpdate");

    if (!response.ok) {
      const errorData = await response.json();
      return {
        error: errorData?.message || "Failed to update user data.",
        ok: false,
      };
    }

    const data = await response.json();
    return {
      ok: true,
      ...data,
    };
  } catch (error) {
    console.error("Error updating user data:", error);
    return {
      error: "An unexpected error occurred. Please try again later.",
      ok: false,
    };
  }
}

export async function createSubscription(
  paymentInfos: {
    email: string;
    name: string;
    country: string;
    address: string;
    paymentId: string;
  },
  subscriptionInfo: Record<string, any>
): Promise<{ error?: string; ok: boolean }> {
  try {
    const session = await auth();

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/subscription`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: ` ${session?.user?.accessToken}`,
        },
        body: JSON.stringify({
          paymentInfo: paymentInfos,
          subscriptionInfo,
        }),
      }
    );

    revalidateTag("createSubscription");

    // Check if the response is not okay
    if (!response.ok) {
      const errorData = await response.json();
      return {
        error: errorData?.message || "Failed to create subscription.",
        ok: false,
      };
    }

    // On success, parse and return the response
    const data = await response.json();
    return {
      ok: true,
      ...data, // Include any extra data from the API response
    };
  } catch (error) {
    console.error("Error creating subscription:", error);
    return {
      error: "An unexpected error occurred. Please try again later.",
      ok: false,
    };
  }
}

export async function userImageUpload(
  formData: FormData
): Promise<{ message: string; status: number }> {
  const file = formData.get("image");

  const session = await auth();

  if (!file || typeof file === "string") {
    return { message: "Invalid file", status: 400 };
  }

  const response = await fetch("http://localhost:8000/api/update-user", {
    method: "PUT",
    body: formData,
  });

  if (!response.ok) {
    return { message: "Failed to upload image", status: response.status };
  }

  return { message: "Image uploaded successfully", status: 200 };
}

//  update user password

export async function updateUserPassword(
  formData: FormData
): Promise<{ error?: string; ok: boolean }> {
  const session = await auth();

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/user/reset-password-otpcheck`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${session?.user?.accessToken || ""}`,
        },
        body: JSON.stringify(formData),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      return {
        error: errorData?.message || "Failed to update user password.",
        ok: false,
      };
    }

    const data = await response.json();
    return {
      ok: true,
      ...data,
    };
  } catch (error) {
    console.error("Error updating user password:", error);
    return {
      error: "An unexpected error occurred. Please try again later.",
      ok: false,
    };
  }
}

export async function updateUserPasswordOtpVerify(
  formData: FormData
): Promise<{ error: string; ok: boolean }> {
  const session = await auth();

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/user/reset-password-verify`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: ` ${session?.user?.accessToken}`,
        },
        body: JSON.stringify(formData),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      return {
        error: errorData?.message || "Failed to update user data.",
        ok: false,
      };
    }

    const data = await response.json();
    return {
      ok: true,
      ...data,
    };
  } catch (error) {
    console.error("Error updating user password:", error);
    return {
      error: "An unexpected error occurred. Please try again later.",
      ok: false,
    };
  }
}

//  update user email

export async function updateUserEmail(
  formData: FormData
): Promise<{ error?: string; ok: boolean }> {
  const session = await auth();

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/user/email-change-otpcheck`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${session?.user?.accessToken || ""}`,
        },
        body: JSON.stringify(formData),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      return {
        error: errorData?.message || "Failed to update user email.",
        ok: false,
      };
    }

    const data = await response.json();
    return {
      ok: true,
      ...data,
    };
  } catch (error) {
    console.error("Error updating user email", error);
    return {
      error: "An unexpected error occurred. Please try again later.",
      ok: false,
    };
  }
}

export async function updateUserEmailOtpVerify(
  formData: FormData
): Promise<{ error: string; ok: boolean }> {
  const session = await auth();

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/user/email-change-verify`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: ` ${session?.user?.accessToken}`,
        },
        body: JSON.stringify(formData),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      return {
        error: errorData?.message || "Failed to update user data.",
        ok: false,
      };
    }

    const data = await response.json();
    return {
      ok: true,
      ...data,
    };
  } catch (error) {
    console.error("Error updating user email:", error);
    return {
      error: "An unexpected error occurred. Please try again later.",
      ok: false,
    };
  }
}

export async function createBoatListerRequest(
  formData: FormData
): Promise<{ error: string; ok: boolean }> {
  const session = await auth();

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/boat-listing`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: ` ${session?.user?.accessToken}`,
        },
        body: JSON.stringify(formData),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      return {
        error: errorData?.message || "Failed to create boat listing.",
        ok: false,
      };
    }

    return {
      ok: true,
      error: "",
    };
  } catch (error) {
    console.error("Error creating boat listing:", error);
    return {
      ok: false,
      error:
        error instanceof Error ? error.message : "An unexpected error occurred",
    };
  }
}

// export async function createBoatListerRequest(
//   formData: FormData
// ): Promise<{ error?: string; ok: boolean }> {
//   const session = await auth();

//   try {
//     const response = await fetch(
//       `${process.env.NEXT_PUBLIC_API_URL}/api/boat-listing`,
//       {
//         method: "PUST", // Use POST for creating new records
//         headers: {
//           Authorization: `${session?.user?.accessToken}`, // Correct token format
//         },
//         body: formData, // FormData should be sent as is
//       }
//     );

//     if (!response.ok) {
//       const errorData = await response.json();
//       return {
//         error: errorData?.message || "Failed to create boat listing.",
//         ok: false,
//       };
//     }

//     return {
//       ok: true,
//     };
//   } catch (error) {
//     console.error("Error creating boat listing:", error);
//     return {
//       error: "An unexpected error occurred. Please try again later.",
//       ok: false,
//     };
//   }
// }
