import { useSession, signIn, signOut } from "next-auth/react";
import Layout from "@/components/layout";


export default function Home() {
  const { data: session } = useSession();
  return (
    <Layout>
      <div className="text-blue-900 flex  justify-between">
        <h2>Hello , {session?.user?.name}</h2>
        <div className="flex bg-gray-300 rounded-lg overflow-hidden text-black gap-1">
          <img src={session?.user?.image} alt="" className="w-6 h-6" />
          <span className=" px-2">
            <b>{session?.user?.name}</b>
          </span>
        </div>
      </div>
    </Layout>
  );
}
