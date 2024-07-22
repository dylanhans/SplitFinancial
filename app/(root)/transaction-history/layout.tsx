// MyBanksLayout.tsx in the my-banks folder
import { getLoggedInUser } from "@/lib/actions/user.actions";
import { redirect } from "next/navigation";
import { useSidebar } from "@/context/SidebarContext"; // Import the context

export default async function MyBanksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const loggedIn = await getLoggedInUser();
  const { setDisableSidebar } = useSidebar(); // Get the context setter

  if (!loggedIn) redirect('/sign-in');

  setDisableSidebar(true); // Disable sidebar for this layout

  return (
    <>
      {children}
    </>
  );
}
