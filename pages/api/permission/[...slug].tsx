import type { NextApiRequest, NextApiResponse } from "next";
import permissionsData from "../../../data/permissions.json";

type ResponseData = {
  message: string;
  permissions?: string[] | null;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
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

const getUserPermission = (
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
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

