import Link from "next/link";
import { User, Info, Bot } from "lucide-react";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-green-200 to-blue-300">
      <h1 className="text-4xl font-bold mb-12">Página Principal</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
        
        <Link href="/usuario">
          <div className="flex flex-col items-center justify-center p-8 bg-white rounded-2xl shadow-lg hover:scale-105 transition cursor-pointer">
            <User size={48} />
            <span className="mt-4 text-xl font-semibold">Usuario</span>
          </div>
        </Link>

        <Link href="/informacion">
          <div className="flex flex-col items-center justify-center p-8 bg-white rounded-2xl shadow-lg hover:scale-105 transition cursor-pointer">
            <Info size={48} />
            <span className="mt-4 text-xl font-semibold">Información</span>
          </div>
        </Link>

        <Link href="/ia">
          <div className="flex flex-col items-center justify-center p-8 bg-white rounded-2xl shadow-lg hover:scale-105 transition cursor-pointer">
            <Bot size={48} />
            <span className="mt-4 text-xl font-semibold">IA</span>
          </div>
        </Link>

      </div>
    </main>
  );
}
