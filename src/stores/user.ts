import type { TransactionCardData } from "@/components/TransactionCard";
import { createStore } from "solid-js/store";

const jwt = (localStorage.getItem("token") as string | null) || null;

export const [user, setUser] = createStore({
  loggedIn: Boolean(jwt),
  jwt,
  ready: false,
  accountsOnProvider: {} as Record<string, TransactionCardData[]>
});
