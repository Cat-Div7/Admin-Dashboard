import { createContext, useMemo, useCallback } from "react";
import { useStorage } from "@hooks";
import { usersData } from "@constants";
import { STORAGE_KEY_USERS } from "@root/constants";

const UsersContext = createContext({
  users: [],
  isLoading: true,
  addUser: () => {},
  updateUser: () => {},
  deleteUser: () => {},
  getUserById: () => {},
});

function UsersContextProvider({ children }) {
  const {
    value: users,
    setValue: setUsers,
    isLoading,
  } = useStorage(STORAGE_KEY_USERS, usersData);

  const addUser = useCallback(
    (newUser) => {
      setUsers((prev) => [...prev, newUser]);
    },
    [setUsers]
  );

  const updateUser = useCallback(
    (id, updatedFields) => {
      setUsers((prev) =>
        prev.map((u) => (u.id === id ? { ...u, ...updatedFields } : u))
      );
    },
    [setUsers]
  );

  const deleteUser = useCallback(
    (id) => {
      setUsers((prev) => prev.filter((u) => u.id !== id));
    },
    [setUsers]
  );

  const getUserById = useCallback(
    (id) => users.find((u) => u.id === id),
    [users]
  );

  const value = useMemo(
    () => ({
      users,
      isLoading,
      addUser,
      updateUser,
      deleteUser,
      getUserById,
    }),
    [users, isLoading, addUser, updateUser, deleteUser, getUserById]
  );

  return (
    <UsersContext.Provider value={value}>{children}</UsersContext.Provider>
  );
}

export { UsersContext, UsersContextProvider };
