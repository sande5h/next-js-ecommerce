import Nav from "@/components/Nav";
import { useSession, signIn, signOut } from "next-auth/react";
import { FaGoogle } from 'react-icons/fa';

export default function Layout({ children }) {
  const { data: session } = useSession();

  const handleFacebookLogin = () => {
    signIn('facebook');
  };
  if (!session) {
    return (
      <div className="bg-blue-900 w-screen h-screen flex ">
        <div className="text-center w-full flex items-center justify-center">
          <button
            onClick={() => signIn("google")}
            className="bg-white p-2 rounded-lg  mr-2 flex"
          >
            
            Login with Google 
          </button>




          <button onClick={handleFacebookLogin} className ="bg-white p-2 mr-2 rounded-lg">Sign in with Facebook</button>

        </div>
      </div>
    );
  }

  return (
    <div className="bg-blue-900 min-h-screen flex">
      <Nav />
      <div className="bg-white flex-grow mt-3 mr-3 rounded-lg p-4 mb-3">
       {children}
      </div>
    </div>
  );
}
