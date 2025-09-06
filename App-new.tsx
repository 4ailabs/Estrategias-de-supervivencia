import React, { useState } from 'react';
import { Compass, Heart, Square, Trophy, Zap } from 'lucide-react';

// Datos simplificados
const strategies = [
  {
    id: 1,
    title: "Sentirse Perdido",
    category: "supervivencia",
    description: "El niño parece desorientado, en su propio mundo. Le cuesta seguir indicaciones.",
    icon: <Compass className="w-12 h-12 text-blue-600" />
  },
  {
    id: 2,
    title: "El Pequeño Cuidador", 
    category: "supervivencia",
    description: "Asume un rol de cuidador con sus hermanos, mascotas o incluso con sus propios padres.",
    icon: <Heart className="w-12 h-12 text-red-500" />
  },
  {
    id: 3,
    title: "El Muro Emocional",
    category: "supervivencia", 
    description: "Aplanamiento emocional. El niño se aísla, no expresa sus sentimientos.",
    icon: <Square className="w-12 h-12 text-gray-600" />
  },
  {
    id: 4,
    title: "No Soy Suficiente",
    category: "corteza",
    description: "Para ocultar su inseguridad, el niño puede volverse presumido o jactancioso.",
    icon: <Trophy className="w-12 h-12 text-yellow-500" />
  },
  {
    id: 5,
    title: "Déficit de Atención",
    category: "corteza",
    description: "Mala memoria a corto plazo. Es el niño despistado que olvida lo que se le acaba de decir.",
    icon: <Zap className="w-12 h-12 text-purple-500" />
  }
];

const categories = [
  { key: 'all', label: 'Todas' },
  { key: 'supervivencia', label: 'Supervivencia' },
  { key: 'corteza', label: 'Corteza' }
];

function App() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedStrategy, setSelectedStrategy] = useState(null);

  const filteredStrategies = selectedCategory === 'all' 
    ? strategies 
    : strategies.filter(s => s.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            🧠 Estrategias de Supervivencia Infantil
          </h1>
          <p className="text-lg text-gray-600">
            Guía interactiva para entender las respuestas de supervivencia en niños
          </p>
        </div>

        {/* Filtros */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map(category => (
            <button
              key={category.key}
              onClick={() => setSelectedCategory(category.key)}
              className={`px-4 py-2 rounded-full font-medium transition-colors ${
                selectedCategory === category.key
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-blue-50'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Estrategias */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStrategies.map(strategy => (
            <div
              key={strategy.id}
              onClick={() => setSelectedStrategy(strategy)}
              className="bg-white rounded-xl shadow-lg p-6 cursor-pointer hover:shadow-xl transition-shadow"
            >
              <div className="text-center mb-4">
                {strategy.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {strategy.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {strategy.description}
              </p>
              <div className="mt-3">
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                  {strategy.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedStrategy && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-2xl font-bold text-gray-800">
                    {selectedStrategy.title}
                  </h2>
                  <button
                    onClick={() => setSelectedStrategy(null)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    ✕
                  </button>
                </div>
                <div className="text-center mb-6">
                  {selectedStrategy.icon}
                </div>
                <p className="text-gray-700 leading-relaxed">
                  {selectedStrategy.description}
                </p>
                <div className="mt-4">
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                    {selectedStrategy.category}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
