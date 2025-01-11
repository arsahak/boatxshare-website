"use server";

import { auth } from "@/auth";
import { revalidateTag } from "next/cache";

export async function addProductCategory(
  formData: Record<string, string>
): Promise<any> {
  const session = await auth();

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/create-categories`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Authorization: `${session?.user?.accessToken || ""}`,
        },
        body: JSON.stringify(formData),
      }
    );
    revalidateTag("category-add");

    if (!response.ok) {
      const errorData = await response.json();
      return {
        error: errorData?.message || "Failed to create category.",
        ok: false,
      };
    }

    const data = await response.json();
    return {
      ok: true,
      ...data.payload,
    };
  } catch (error) {
    console.error("Error creating category:", error);
    return {
      error: "An unexpected error occurred. Please try again later.",
      ok: false,
    };
  }
}

export async function getProductCategory(
  search: string = "",
  page: number = 1,
  limit: number = 5
): Promise<any> {
  try {
    const query = new URLSearchParams({
      search,
      page: page.toString(),
      limit: limit.toString(),
    }).toString();

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/categories?${query}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        next: {
          tags: ["category-delete", "category-add", "category-update"],
          revalidate: 3600,
        },
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      return {
        error: errorData?.message || "Failed to fetch categories.",
        ok: false,
      };
    }

    const data = await response.json();
    return {
      ok: true,
      categories: data.payload.categories,
      pagination: data.payload.pagination,
    };
  } catch (error) {
    console.error("Error fetching categories:", error);
    return {
      error: "An unexpected error occurred. Please try again later.",
      ok: false,
    };
  }
}

export async function productCategoryDelete(id: string = ""): Promise<any> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/delete-category/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      return {
        error: errorData?.message || "Failed to delete category.",
        ok: false,
      };
    }

    revalidateTag("category-delete");

    const data = await response.json();
    return {
      ok: true,
      message: data?.message || "Category deleted successfully.",
    };
  } catch (error) {
    console.error("Error deleting category:", error);
    return {
      error: "An unexpected error occurred. Please try again later.",
      ok: false,
    };
  }
}

export async function productCategoryUpdate(
  id: string,
  formData: Record<string, any>
): Promise<any> {
  if (!id) {
    console.error("Category ID is missing.");
    return {
      error: "Category ID is required.",
      ok: false,
    };
  }

  if (!formData || typeof formData !== "object") {
    console.error("Invalid or missing formData:", formData);
    return {
      error: "Form data is required for updating the category.",
      ok: false,
    };
  }

  console.log("Form data to be sent:", JSON.stringify(formData));

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/update-category/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      return {
        error: errorData?.message || "Failed to update category.",
        ok: false,
      };
    }

    revalidateTag("category-update"); // Revalidate cached category data

    const data = await response.json();
    return {
      ok: true,
      message: data?.message || "Category updated successfully.",
    };
  } catch (error) {
    console.error("Error updating category:", error);
    return {
      error: "An unexpected error occurred. Please try again later.",
      ok: false,
    };
  }
}
