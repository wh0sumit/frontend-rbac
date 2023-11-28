import type { NextApiRequest, NextApiResponse } from "next";
import permissionsData from "@/data/permissions.json";

type ResponseData = {
  message: string;
  permissions?: string[] | null;
};

/**
 *
 * @param req
 * @param res
 * @returns  message | permissions
 */
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>,
) {
  const { method } = req;
  switch (method) {
    case "GET":
      return getUserPermission(req, res);
    default:
      return res.status(405).json({
        message: `Mehtod ${method} not allowed`,
      });
  }
}

/**
 * @param req
 * @param res
 * @returns permissions, message
 * @description get user permission based on role
 * @example http://localhost:3000/api/permission/admin
 * @example http://localhost:3000/api/permission/user
 */
const getUserPermission = (
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>,
) => {
  const { slug } = req.query;
  const data = permissionsData.find((userPerm) => userPerm.role == slug);
  if (data) {
    res.status(200).json({
      permissions: data.permission,
      message: "Success",
    });
  } else {
    res.status(405).json({
      message: `For this ${slug} role Permission not found`,
    });
  }
};
