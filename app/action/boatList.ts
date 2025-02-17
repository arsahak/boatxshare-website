"use server";
import { auth } from "@/auth";
import { revalidateTag } from "next/cache";

interface BoatListResponse {
  error?: string;
  ok: boolean;
  data?: any; // ✅ Make sure it's consistent everywhere
}

// Get all client data

export async function getAllBoatListData(
  search?: string,
  page: number = 1,
  limit: number = 10000
): Promise<UserDataResponse> {
  const session = await auth();

  try {
    const queryParams = new URLSearchParams({
      page: page.toString(),
      limit: limit.toString(),
    });

    if (search && search.trim() !== "") {
      queryParams.append("search", search.trim());
    }

    const response = await fetch(
      `${
        process.env.NEXT_PUBLIC_API_URL
      }/api/boatlister?${queryParams.toString()}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: session?.user?.accessToken ?? "", // Ensure session is valid
        },
        next: {
          tags: ["clientDataCreate", "clientDataDelete", "clientDataUpdate"],
        },
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

    const data = (await response.json()) as { payload?: any };

    return {
      ok: true,
      data: data.payload || null,
    };
  } catch (error) {
    console.error("Error fetching user data:", error);
    return {
      error:
        error instanceof Error
          ? error.message
          : "An unexpected error occurred. Please try again later.",
      ok: false,
      data: null,
    };
  }
}

export async function getAllBoatListDataSearch(
  search?: string, // Optional parameter
  page: number = 1,
  limit: number = 10
): Promise<UserDataResponse> {
  try {
    // Build query parameters dynamically
    const queryParams = new URLSearchParams({
      page: page.toString(),
      limit: limit.toString(),
    });

    // Add search parameter only if provided
    if (search && search.trim() !== "") {
      queryParams.append("search", search.trim());
    }

    const response = await fetch(
      `${
        process.env.NEXT_PUBLIC_API_URL
      }/api/boatlister?${queryParams.toString()}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        next: {
          tags: ["boatDataFetch"],
        },
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Failed to fetch boat data:", errorData);
      return {
        error: errorData?.message || "Failed to fetch boat data.",
        ok: false,
        data: null,
      };
    }

    const data = await response.json();

    return {
      ok: true,
      data: data?.payload || null,
    };
  } catch (error: any) {
    console.error("Error fetching boat data:", error);
    return {
      error:
        error?.message ||
        "An unexpected error occurred. Please try again later.",
      ok: false,
      data: null,
    };
  }
}

export async function createClientData(
  formData: FormData
): Promise<{ error: string; ok: boolean }> {
  const session = await auth();

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/client-details`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: ` ${session?.user?.accessToken}`,
        },
        body: JSON.stringify(formData),
      }
    );

    revalidateTag("clientDataCreate");

    if (!response.ok) {
      const errorData = await response.json();
      return {
        error: errorData?.message || "Failed to create client data.",
        ok: false,
      };
    }

    const data = await response.json();
    return {
      ok: true,
      ...data,
    };
  } catch (error) {
    console.error("Error create client data.", error);
    return {
      error: "An unexpected error occurred. Please try again later.",
      ok: false,
    };
  }
}

export async function updateClientData(
  id: string,
  formData: FormData
): Promise<{ error: string; ok: boolean }> {
  const session = await auth();

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/client-details${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: ` ${session?.user?.accessToken}`,
        },
        body: JSON.stringify(formData),
      }
    );

    revalidateTag("clientDataUpdate");

    if (!response.ok) {
      const errorData = await response.json();
      return {
        error: errorData?.message || "Failed to create client data.",
        ok: false,
      };
    }

    const data = await response.json();
    return {
      ok: true,
      ...data,
    };
  } catch (error) {
    console.error("Error create client data.", error);
    return {
      error: "An unexpected error occurred. Please try again later.",
      ok: false,
    };
  }
}

export async function clientDeletedById(id: string): Promise<UserDataResponse> {
  const session = await auth();

  if (!session?.user?.accessToken) {
    return {
      error: "User is not authenticated.",
      ok: false,
      data: null,
    };
  }

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/boatlister/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${session.user.accessToken}`,
        },
      }
    );
    revalidateTag("clientDataDelete");

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Failed to delete boat:", errorData);
      return {
        error: errorData?.message || "Failed to delete boat.",
        ok: false,
        data: null,
      };
    }

    const data = await response.json();
    return {
      ok: true,
      data: data?.payload || null,
    };
  } catch (error) {
    console.error("Error deleting boat:", error);
    return {
      error: "An unexpected error occurred. Please try again later.",
      ok: false,
      data: null,
    };
  }
}

// services/taxProposalService.ts

export async function taxProposalSend(
  formData: FormData
): Promise<{ error: string; ok: boolean }> {
  // Retrieve the user session to check if authenticated
  const session = await auth(); // Replace with your auth method

  if (!session?.user?.accessToken) {
    return { error: "User is not authenticated", ok: false };
  }

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/tax-proposal`,
      {
        method: "POST",
        headers: {
          Authorization: `${session.user.accessToken}`,
        },
        body: formData,
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      return {
        error: errorData?.message || "Failed to upload file",
        ok: false,
      };
    }

    const data = await response.json();
    return { ok: true, ...data };
  } catch (error) {
    console.error("Error uploading file:", error);
    return {
      error: "An unexpected error occurred. Please try again later.",
      ok: false,
    };
  }
}

interface UserDataResponse {
  ok: boolean;
  data?: any;
  error?: string;
}

export async function getAllBoatOrderList(
  search?: string,
  page: number = 1,
  limit: number = 10
): Promise<UserDataResponse> {
  try {
    const session = await auth();

    const queryParams = new URLSearchParams({
      page: page.toString(),
      limit: limit.toString(),
    });

    // Append search query only if provided and valid
    if (search?.trim()) {
      queryParams.append("search", encodeURIComponent(search.trim()));
    }

    const apiUrl = `${
      process.env.NEXT_PUBLIC_API_URL
    }/api/orders/?${queryParams.toString()}`;

    const response = await fetch(apiUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${session?.user?.accessToken}`,
      },
      next: {
        tags: ["boatDataFetch"],
      },
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error("Failed to fetch boat data:", errorData);
      return {
        ok: false,
        error: errorData?.message || "Failed to fetch boat data.",
        data: null,
      };
    }

    const data = await response.json();

    return {
      ok: true,
      data: data?.payload || null,
    };
  } catch (error: any) {
    console.error("Error fetching boat data:", error);
    return {
      ok: false,
      error:
        error?.message ||
        "An unexpected error occurred. Please try again later.",
      data: null,
    };
  }
}
