import Nav from "@/components/Nav";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  if (!session) {
    return ( <div className="bg-blue-900 w-screen h-screen flex ">
    <div className="text-center w-full flex items-center justify-center">
      <button onClick={()=>signIn('google')} className="bg-white p-2 rounded-lg">Login with Google</button>
    </div>
  </div>)
  }


  return(
    <div className="bg-blue-900 min-h-screen">
      <Nav/>
      Logged in {session.user.email}
    </div>
  )
}
