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

interface UserProfileProps {
  userDetails: UserType;
  userPermissions: UserPermissionType;
}

export const UserProfile = ({
  userDetails,
  userPermissions,
}: UserProfileProps) => {
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
      <CardContent>
        <h1>Age : {userDetails.age}</h1>
        
      </CardContent>
      <CardFooter className="flex justify-between">
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

