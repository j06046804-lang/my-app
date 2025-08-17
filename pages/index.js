export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Página Principal</h1>
      <div className="space-y-4">
        <a href="/usuario" className="px-6 py-3 bg-blue-500 text-white rounded-xl shadow hover:bg-blue-600">Usuario</a>
        <a href="/informacion" className="px-6 py-3 bg-green-500 text-white rounded-xl shadow hover:bg-green-600">Información</a>
        <a href="/ia" className="px-6 py-3 bg-purple-500 text-white rounded-xl shadow hover:bg-purple-600">IA</a>
      </div>
    </div>
  )
}
