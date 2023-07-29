import {
    ClerkProvider,
    SignedIn,
    SignedOut,
    SignInButton,
    UserButton
  } from "@clerk/nextjs";


const SetupPage = () => {
    return (
        <div className="p-4">
            This is a protected route!
            <UserButton afterSignOutUrl="/"/>
        </div>
    )
  }

export default SetupPage;
  