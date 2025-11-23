import { useState } from "react";
import { getUserData } from "@utils";

function useUser() {
  const [user, setUser] = useState(getUserData());

  const refreshUser = () => {
    const updated = getUserData();
    setUser(updated);
  };

  return { user, setUser, refreshUser };
}

export { useUser };
