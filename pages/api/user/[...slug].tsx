import type { NextApiRequest, NextApiResponse } from "next";
import users from "@/data/users.json";

type ResponseData = {
  message: string;
  user?: UserType | null;
};

/**
 *
 * @param req
 * @param res
 * @returns  message | user
 */
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const { method } = req;
  switch (method) {
    case "GET":
      return getUser(req, res);
    default:
      return res.status(405).json({
        message: `Mehtod ${method} not allowed`,
      });
  }
}

/**
 *
 * @param req
 * @param res
 * @returns user, message
 * @description get user details based on name
 * @example http://localhost:3000/api/user/Sumit
 * @example http://localhost:3000/api/user/Yash
 */
const getUser = (req: NextApiRequest, res: NextApiResponse<ResponseData>) => {
  const { slug } = req.query;
  const user = users.find((user) => user.name == slug);
  if (user) {
    res.status(200).json({
      user,
      message: "Success",
    });
  } else {
    res.status(405).json({
      message: `User ID ${slug} not found`,
    });
  }
};

