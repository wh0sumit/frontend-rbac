"use client";
import ViewContainer from "@/components/layouts/view-container";
import { Button } from "@/components/ui/button";
import { setCookie } from "@/helpers/cookies";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();

  const handleLogin = (name: string) => {
    const user = {
      name,
      role: name === "guest" ? "guest" : "user",
    };

    // Simulated logic to set authentication cookies based on the user's role
    setAuthCookies(user);

    // Redirect based on user's role
    if (name === "guest") {
      router.push(`/user/guest`);
    } else {
      router.push(`/user/${name}`);
    }
  };

  const setAuthCookies = (user: { name: string; role: string }) => {
    setCookie({
      cookieName: "isAuthenticated",
      cookieValue: "true",
      expirationDays: 1,
    });
    setCookie({
      cookieName: "userName",
      cookieValue: user.name,
      expirationDays: 1,
    });
    setCookie({
      cookieName: "userRole",
      cookieValue: user.role,
      expirationDays: 1,
    });
  };

  return (
    <ViewContainer>
      <h1 className="text-3xl font-semibold text-orange-500">RBAC Frontend</h1>
      <p className="mt-2 text-gray-600">
        Simple app to showcase RBAC (still in development).
      </p>
      <div className="my-5">
        <p>Instead of this, there will be a Google or email signup.</p>
        <div className="grid grid-cols-2 gap-4 my-2">
          <Button size={"lg"} onClick={() => handleLogin("sumit")}>
            Login as Sumit
          </Button>

          <Button
            size={"lg"}
            variant={"outline"}
            onClick={() => handleLogin("guest")}
          >
            Login as Guest
          </Button>
        </div>
      </div>
    </ViewContainer>
  );
};

export default Login;

