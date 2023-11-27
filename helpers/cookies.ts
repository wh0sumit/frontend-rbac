// Get the value of a specific cookie by its name
function getCookie(cookieName: string) {
  const cookieValue = document.cookie
    .split("; ")
    .find((row) => row.startsWith(cookieName))
    ?.split("=")[1];
  return cookieValue ? cookieValue : "";
}

function setCookie({
  cookieName,
  cookieValue,
  expirationDays,
}: {
  cookieName: string;
  cookieValue: string;
  expirationDays: number;
}) {
  const d = new Date();
  d.setTime(d.getTime() + expirationDays * 24 * 60 * 60 * 1000);
  const expires = "expires=" + d.toUTCString();
  document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";path=/";
}

function cookieExists(cookieName: string) {
  return document.cookie.split(";").some((cookie) => {
    return cookie.trim().startsWith(cookieName + "=");
  });
}

function deleteCookie(cookieName: string) {
  document.cookie =
    cookieName + "=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;";
}

export { getCookie, setCookie, cookieExists, deleteCookie };

