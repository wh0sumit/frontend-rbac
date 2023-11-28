import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import Link from "next/link";
import { deleteCookie } from "@/helpers/cookies";
import { useRouter } from "next/navigation";
import { Separator } from "@/components/ui/separator";
import { Badge } from "../ui/badge";

interface UserProfileProps {
  userDetails: UserType;
  userPermissions: UserPermissionType;
}

/**
 * @description User Profile Component
 * @param userDetails
 * @param userPermissions
 * @returns UserProfile
 * @example <UserProfile userPermissions={userPermission} userDetails={user} />
 */
const UserProfile = ({ userDetails, userPermissions }: UserProfileProps) => {
  const router = useRouter();
  const handleLogout = () => {
    deleteCookie("isAuthenticated");
    deleteCookie("userName");
    deleteCookie("userRole");
    router.push("/");
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Hello, I am {userDetails.name} 👋🏼</CardTitle>
        <CardDescription>
          from {userDetails.state}, {userDetails.country}
        </CardDescription>
      </CardHeader>
      <Separator orientation="horizontal" />
      <CardContent className="py-4">
        <p>
          I am {userDetails.age} years old and I am a{" "}
          <Badge variant={"secondary"} title="Role">
            {userDetails.role}
          </Badge>{" "}
          at RBAC.
        </p>
      </CardContent>
      <Separator orientation="horizontal" />
      <CardFooter className="flex justify-between py-4">
        {userPermissions && userPermissions.permissions.includes("write") && (
          <Link href={`/user/${userDetails.name}/edit-profile`}>
            <Button> Edit Details</Button>
          </Link>
        )}
        {
          <Button variant={"outline"} onClick={() => handleLogout()}>
            {" "}
            Logout, Bye 🙌🏼
          </Button>
        }
      </CardFooter>
    </Card>
  );
};

export { UserProfile };
