import { deleteCookie, getCookie } from "@/helpers/cookies";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const ROLES = {
  ADMIN: "admin",
  GUEST: "guest",
  USER: "user",
};

const rbac = {
  [ROLES.GUEST]: ["/[slug]"],
  [ROLES.USER]: ["/[slug]/edit-profile", "/[slug]"],
};

const withAuth = <T extends object>(
  WrappedComponent: React.ComponentType<T>,
  particularUserRole: string
) => {
  const AuthComponent = (props: T) => {
    const router = useRouter();
    const slugName = (props as any).params?.slug;
    const urlID = (props as any).params?.id;

    const getAuthCookie = () => {
      const isAuthenticated = getCookie("isAuthenticated");
      const userName = getCookie("userName");
      return { isAuthenticated, userName };
    };

    const allowedRoles = rbac[particularUserRole as keyof typeof ROLES];
    const newAllowedRoles = allowedRoles.map((role) => {
      return role.replace("[slug]", slugName);
    });

    const newUrl = `/${slugName}${urlID ? `/${urlID}` : ""}`;
    useEffect(() => {
      const userRole = getCookie("userRole");

      if (userRole) {
        console.log("userRole", userRole);
        console.log("allowedRoles", newAllowedRoles, allowedRoles);
        console.log("newUrl", newUrl);
        if (!newAllowedRoles.includes(newUrl)) {
          router.push(`/user/${slugName}`);
        }
      } else {
        router.push(`/`);
      }

      const checkAccess = () => {
        const { isAuthenticated, userName } = getAuthCookie();
        if (!isAuthenticated || userName !== slugName) {
          router.push("/");
          deleteCookie("isAuthenticated");
          deleteCookie("userRole");
          deleteCookie("userName");
        } else if (!newAllowedRoles.includes(newUrl)) {
          router.push(`/user/${slugName}`);
        }
        if (userRole !== particularUserRole) {
          router.push(`/`);
        }
      };

      checkAccess();
    }, [allowedRoles, newAllowedRoles]);

    return <WrappedComponent {...props} />;
  };

  return AuthComponent;
};

export { withAuth, ROLES, rbac };

