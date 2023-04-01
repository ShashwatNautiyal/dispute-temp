import type { TransactionCardData } from "@/components/TransactionCard";
import { createStore } from "solid-js/store";

export const [user, setUser] = createStore({
  loggedIn: false,
  accountsOnProvider: {} as Record<string, TransactionCardData[]>
});