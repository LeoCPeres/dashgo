import { useQuery } from "react-query";
import { api } from "../api";

type User = {
  id: string;
  name: string;
  email: string;
  createdAt: string;
};

export async function getUsers(): Promise<User[]> {
  const { data } = await api.get("users");

  const fetchedUsers = data.users.map((user) => {
    return {
      isSelected: false,
      id: user.id,
      name: user.name,
      email: user.email,
      createdAt: new Date(user.createdAt).toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      }),
    };
  });

  return fetchedUsers;
}

export function useUsers() {
  return useQuery("users", getUsers, {
    staleTime: 1000 * 5, //5 seconds
  });
}
