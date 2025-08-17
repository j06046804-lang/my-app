// pages/index.js
import { Book, Info, FileText, Globe, Facebook } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-br from-green-100 via-blue-100 to-purple-100 px-4">
      {/* Logo */}
      <img
        src="/logo.png" // coloca tu logo en public/logo.png
        alt="Logo"
        className="w-28 h-28 mt-10 mb-4 rounded-full shadow-lg border-4 border-white"
      />

      {/* Nombre principal */}
      <h1 className="text-xl font-semibold">@industrialug</h1>
      <p className="text-gray-600 text-center mb-6">
        Facultad de Ingeniería Industrial de la Universidad de Guayaquil
      </p>

      {/* Título intermedio */}
      <h2 className="text-lg font-bold mb-6">FACULTAD INGENIERÍA INDUSTRIAL</h2>

      {/* Botones tipo Linktree */}
      <div className="w-full max-w-md flex flex-col space-y-4">
        <a
          href="#"
          className="flex items-center px-4 py-3 bg-white rounded-xl shadow hover:bg-gray-100 transition"
        >
          <Book className="w-6 h-6 mr-3 text-gray-700" />
          <span>Revista EASI: Ingeniería y Ciencias Aplicadas en la Industria</span>
        </a>

        <a
          href="#"
          className="flex items-center px-4 py-3 bg-white rounded-xl shadow hover:bg-gray-100 transition"
        >
          <Info className="w-6 h-6 mr-3 text-gray-700" />
          <span>Información de las Maestrías</span>
        </a>

        <a
          href="#"
          className="flex items-center px-4 py-3 bg-white rounded-xl shadow hover:bg-gray-100 transition"
        >
          <FileText className="w-6 h-6 mr-3 text-gray-700" />
          <span>Formulario de Inscripciones para Maestrías</span>
        </a>

        <a
          href="#"
          className="flex items-center px-4 py-3 bg-white rounded-xl shadow hover:bg-gray-100 transition"
        >
          <Globe className="w-6 h-6 mr-3 text-gray-700" />
          <span>Sitio Web de la Facultad</span>
        </a>

        <a
          href="#"
          className="flex items-center px-4 py-3 bg-white rounded-xl shadow hover:bg-gray-100 transition"
        >
          <Facebook className="w-6 h-6 mr-3 text-gray-700" />
          <span>Facebook</span>
        </a>
      </div>

      {/* Footer */}
      <p className="text-xs text-gray-500 mt-8 mb-4">
        © {new Date().getFullYear()} Facultad de Ingeniería Industrial
      </p>
    </div>
  );
}
