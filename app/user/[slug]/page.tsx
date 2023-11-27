"use client";

import { UserProfile } from "@/components/sections/user-profile";
import { getCookie } from "@/helpers/cookies";
import { getUser, getUserPermission } from "@/helpers/userQuery";
import { withAuth, ROLES } from "@/hocs/withAuth";

const ProfilePage = ({
  params,
}: {
  params: {
    slug: string;
  };
}) => {
  const { user, error, isLoading } = getUser(params);
  const userRole = getCookie("userRole");
  const { userPermission } = getUserPermission(userRole);
  console.log("userPermission", userPermission);
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Something went wrong...</div>;
  }

  return (
    <div>
      {user && (
        <UserProfile userPermissions={userPermission} userDetails={user} />
      )}
    </div>
  );
};

export default ProfilePage;

