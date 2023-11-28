"use client";
import ViewContainer from "@/components/layouts/view-container";
import { withAuth, ROLES } from "@/hocs/withAuth";

const EditPage = () => {
  return (
    <ViewContainer>
      <h1 className="text-3xl font-semibold text-orange-500">
        Edit Profile Details
      </h1>
      <p className="mt-4 text-gray-600">
        This page is only accessible to users with the write permission.
      </p>
    </ViewContainer>
  );
};

export default withAuth(EditPage, ROLES.USER);

