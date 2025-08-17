"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Database, FileText, BarChart3 } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex flex-col items-center justify-center px-6 py-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
          Encuestas Ambientales
        </h1>
        <p className="text-slate-600 max-w-xl mx-auto">
          Plataforma para la gestión, almacenamiento y análisis de datos de encuestas sobre desechos sólidos domiciliarios.
        </p>
      </motion.div>

      {/* Cards */}
      <div className="grid gap-6 md:grid-cols-3 w-full max-w-5xl">
        <motion.div whileHover={{ scale: 1.05 }} className="h-full">
          <Card className="rounded-2xl shadow-lg border border-slate-200">
            <CardContent className="flex flex-col items-center text-center p-6">
              <Database className="w-12 h-12 text-sky-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Base de Datos</h3>
              <p className="text-slate-600">
                Accede y administra todas las encuestas almacenadas en Supabase.
              </p>
              <Button className="mt-4 w-full">Ver Registros</Button>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div whileHover={{ scale: 1.05 }} className="h-full">
          <Card className="rounded-2xl shadow-lg border border-slate-200">
            <CardContent className="flex flex-col items-center text-center p-6">
              <FileText className="w-12 h-12 text-emerald-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Encuestas</h3>
              <p className="text-slate-600">
                Lanza nuevas encuestas con Tally y conéctalas a la base de datos.
              </p>
              <Button className="mt-4 w-full">Crear Encuesta</Button>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div whileHover={{ scale: 1.05 }} className="h-full">
          <Card className="rounded-2xl shadow-lg border border-slate-200">
            <CardContent className="flex flex-col items-center text-center p-6">
              <BarChart3 className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Visualización</h3>
              <p className="text-slate-600">
                Analiza resultados en Google Looker Studio con dashboards interactivos.
              </p>
              <Button className="mt-4 w-full">Ver Reportes</Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </main>
  );
}
