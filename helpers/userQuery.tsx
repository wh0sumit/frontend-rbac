"use client";
import { useQuery } from "@tanstack/react-query";

/**
 *
 * @param params
 * @returns user, error, isLoading
 */
export const getUser = (
  params: { slug: string } | { slug: string; id: string },
) => {
  const {
    data: user,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["user", params],
    queryFn: async () => {
      if (params.slug) {
        const response = await fetch(`/api/user/${params.slug}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        return data.user;
      }
      return null;
    },
  });

  return { user, error, isLoading };
};

/**
 *
 * @param userRole
 * @returns userPermission, isLoading, error
 */
export const getUserPermission = (userRole: string) => {
  const {
    data: userPermission,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["permissions", userRole],
    queryFn: async () => {
      const response = await fetch(`/api/permission/${userRole}`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      return data;
    },
  });

  return { userPermission, isLoading, error };
};
