import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import { IfAuthenticated, IfNotAuthenticated } from "./utils/Authenticated";

export default function Nav() {
  const { logout, loginWithRedirect } = useAuth0()

  const handleSignOut = () => {
    return logout()
  }

  const handleSignIn = () => {
    return loginWithRedirect()
  }

  return (
    <nav>
      <Link to="/">Home</Link>
      <IfAuthenticated>
          <button onClick={handleSignOut}>Sign out</button>
        </IfAuthenticated>
        <IfNotAuthenticated>
          <button onClick={handleSignIn}>Sign in</button>
        </IfNotAuthenticated>
    </nav>
  )
}