import { STORAGE_KEY_ACCOUNTS, STORAGE_KEY_USER_ID } from "@constants";

function getUserData() {
  const accounts = JSON.parse(localStorage.getItem(STORAGE_KEY_ACCOUNTS)) || [];
  const userId = JSON.parse(localStorage.getItem(STORAGE_KEY_USER_ID));

  const currentUser = accounts.find((acc) => acc.id == userId);
  if (!currentUser) return null;

  const fullName = currentUser.fullName?.trim() || "";
  const nameParts = fullName.split(/\s+/);

  return {
    id: currentUser.id,
    email: currentUser.email,
    firstName: currentUser.firstName || nameParts[0] || "",
    fullName,
    firstTwoNames: nameParts.slice(0, 2).join(" "),
    avatarLetter: currentUser.firstName?.charAt(0) ?? fullName.charAt(0),
    raw: currentUser,
    bio: currentUser.bio || "",
  };
}

export { getUserData };
