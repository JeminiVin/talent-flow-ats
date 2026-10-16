// lib/auth.ts

export interface UserSession {
  email: string;
  role: "admin" | "user";
  name: string;
}

export const isAuthenticated = (): boolean => {
  if (typeof window === "undefined") return false;
  return localStorage.getItem("oasis_user_logged_in") === "true";
};

export const isAdminUser = (): boolean => {
  if (typeof window === "undefined") return false;
  const role = localStorage.getItem("oasis_user_role");
  return isAuthenticated() && role === "admin";
};

export const loginAsAdmin = (email: string) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("oasis_user_logged_in", "true");
    localStorage.setItem("oasis_user_role", "admin");
    localStorage.setItem("oasis_user_email", email);
  }
};

export const logoutUser = () => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("oasis_user_logged_in");
    localStorage.removeItem("oasis_user_role");
    localStorage.removeItem("oasis_user_email");
  }
};