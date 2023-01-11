import { Link } from "react-router-dom";
import ButtonMd from "../../buttons/button-md/ButtonMd";
import { useAuth0 } from "@auth0/auth0-react";
export default function NavBar() {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    <div className="flex h-12 w-full items-center justify-end gap-4 py-8 px-4">
      {!isAuthenticated && (
        <ButtonMd
          text={"Log in"}
          md
          onClick={() => loginWithRedirect({ appState: { return: "/home" } })}
        />
      )}
    </div>
  );
}
