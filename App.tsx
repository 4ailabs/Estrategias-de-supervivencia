import React, { useState, useMemo } from 'react';
import { STRATEGIES_DATA, FILTERS } from './constants-complete.tsx';
import { Strategy, StrategyCategory } from './types';
import StrategyCard from './components/StrategyCard';
import StrategyModal from './components/StrategyModal';
import TrackingProtocol from './components/TrackingProtocol';
import AdverseChildhoodExperiences from './components/AdverseChildhoodExperiences';
import Footer from './components/Footer';

const App: React.FC = () => {
    const [activeFilter, setActiveFilter] = useState<StrategyCategory | 'all'>('all');
    const [selectedStrategy, setSelectedStrategy] = useState<Strategy | null>(null);

    const filteredStrategies = useMemo(() => {
        if (activeFilter === 'all') {
            return STRATEGIES_DATA;
        }
        return STRATEGIES_DATA.filter(s => s.category === activeFilter);
    }, [activeFilter]);

    const handleCardClick = (strategy: Strategy) => {
        setSelectedStrategy(strategy);
    };

    const handleCloseModal = () => {
        setSelectedStrategy(null);
    };

    return (
        <div className="flex flex-col min-h-screen">
            <div className="flex-grow container mx-auto px-4 py-8 md:py-16">
                <header className="text-center mb-10 md:mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold text-gradient mb-4">Biomagnetismo Kids</h1>
                    <h2 className="text-2xl md:text-3xl font-semibold text-slate-700 mb-6">Guía Interactiva de Estrategias de Supervivencia Infantil</h2>
                    <p className="text-lg text-slate-600 max-w-4xl mx-auto mb-4">
                        Una herramienta especializada para comprender las respuestas de comportamiento en la infancia. 
                        Basada en la metodología del Instituto CentroBioenergética, esta guía te permite explorar 
                        las diferentes estrategias de supervivencia que desarrollan los niños, los conflictos 
                        que las originan y sus manifestaciones observables.
                    </p>
                    <p className="text-base text-slate-500 max-w-3xl mx-auto">
                        Cada estrategia representa una respuesta adaptativa del sistema nervioso infantil ante 
                        situaciones de estrés, trauma o conflicto. Al comprender estas dinámicas, podemos 
                        ofrecer un mejor apoyo emocional y terapéutico a los niños.
                    </p>
                </header>

                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 mb-8 border border-blue-200">
                    <h3 className="text-xl font-semibold text-slate-800 mb-3 text-center">¿Cómo usar esta guía?</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-slate-600">
                        <div className="text-center">
                            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                                <span className="text-blue-600 font-bold">1</span>
                            </div>
                            <p><strong>Explora las categorías:</strong> Usa los filtros para navegar por los diferentes tipos de estrategias de supervivencia.</p>
                        </div>
                        <div className="text-center">
                            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                                <span className="text-blue-600 font-bold">2</span>
                            </div>
                            <p><strong>Haz clic en una estrategia:</strong> Descubre las vivencias que la originan y sus manifestaciones observables.</p>
                        </div>
                        <div className="text-center">
                            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                                <span className="text-blue-600 font-bold">3</span>
                            </div>
                            <p><strong>Obtén consejos:</strong> Cada estrategia incluye recomendaciones prácticas para el apoyo terapéutico.</p>
                        </div>
                    </div>
                </div>

                <nav className="flex flex-wrap justify-center gap-3 md:gap-4 mb-10 md:mb-16 sticky top-4 z-10 bg-slate-100/50 backdrop-blur-md py-3 rounded-xl">
                    {FILTERS.map(filter => (
                        <button
                            key={filter.key}
                            onClick={() => setActiveFilter(filter.key)}
                            className={`filter-btn font-semibold py-2 px-5 rounded-full transition-all duration-300 ${
                                activeFilter === filter.key
                                    ? 'bg-green-700 text-white shadow-md'
                                    : 'bg-white/60 text-green-800 hover:bg-white hover:shadow-sm'
                            }`}
                        >
                            {filter.label}
                        </button>
                    ))}
                </nav>

                <div className="mb-6 text-center">
                    <p className="text-slate-600">
                        Mostrando <span className="font-semibold text-green-700">{filteredStrategies.length}</span> de <span className="font-semibold text-green-700">{STRATEGIES_DATA.length}</span> estrategias
                        {activeFilter !== 'all' && (
                            <span className="ml-2 text-sm text-slate-500">
                                en la categoría "{FILTERS.find(f => f.key === activeFilter)?.label}"
                            </span>
                        )}
                    </p>
                </div>

                <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {filteredStrategies.map(strategy => (
                        <StrategyCard key={strategy.id} strategy={strategy} onClick={handleCardClick} />
                    ))}
                </main>

                <TrackingProtocol />
                <AdverseChildhoodExperiences />
            </div>
            
            <Footer />

            {selectedStrategy && <StrategyModal strategy={selectedStrategy} onClose={handleCloseModal} />}
        </div>
    );
};

export default App;