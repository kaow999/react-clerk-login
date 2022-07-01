import {
    ClerkProvider,
    SignedIn,
    SignedOut,
    RedirectToSignIn,
  } from "@clerk/clerk-react";
  import { useNavigate } from "react-router-dom";
  import Main from "./Main"
  
  const frontendApi = "clerk.proper.mallard-93.lcl.dev";
  
  function Clerk() {
    const navigate = useNavigate();
  
    return (
      <ClerkProvider frontendApi={frontendApi} navigate={(to) => navigate(to)}>
        <SignedIn>
          <Main />
        </SignedIn>
        <SignedOut>
          <RedirectToSignIn />
        </SignedOut>
      </ClerkProvider>
    );
  }
  
  export default Clerk;
