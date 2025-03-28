
import { auth } from "@/auth";
import { NavUser } from "./nav-user";

export default async function NavbarUser() {
  // Adatok lekérése a szerveren
  const session = await auth()
  return <NavUser user={session!} />;
}