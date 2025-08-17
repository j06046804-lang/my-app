import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Página Principal</h1>

      <div className="flex space-x-6">
        <Link href="/usuario">
          <button className="px-6 py-3 bg-blue-500 text-white rounded-2xl shadow-lg hover:bg-blue-600 transition">
            Usuario
          </button>
        </Link>

        <Link href="/informacion">
          <button className="px-6 py-3 bg-green-500 text-white rounded-2xl shadow-lg hover:bg-green-600 transition">
            Información
          </button>
        </Link>

        <Link href="/ia">
          <button className="px-6 py-3 bg-purple-500 text-white rounded-2xl shadow-lg hover:bg-purple-600 transition">
            IA
          </button>
        </Link>
      </div>
    </div>
  );
}
