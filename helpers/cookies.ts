/**
 *
 * @param cookieName - Name of the cookie to get
 * @returns The value of the cookie
 */
function getCookie(cookieName: string) {
  const cookieValue = document.cookie
    .split("; ")
    .find((row) => row.startsWith(cookieName))
    ?.split("=")[1];
  return cookieValue ? cookieValue : "";
}

/**
 *
 * @param cookieName - Name of the cookie to set
 * @param cookieValue - Value of the cookie to set
 * @param expirationDays - Number of days the cookie will be available
 */

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

/**
 *
 * @param cookieName - Name of the cookie to check
 * @returns True if the cookie exists, false otherwise
 */

function cookieExists(cookieName: string) {
  return document.cookie.split(";").some((cookie) => {
    return cookie.trim().startsWith(cookieName + "=");
  });
}

/**
 *
 * @param cookieName - Name of the cookie to delete
 */

function deleteCookie(cookieName: string) {
  document.cookie =
    cookieName + "=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;";
}

export { getCookie, setCookie, cookieExists, deleteCookie };

