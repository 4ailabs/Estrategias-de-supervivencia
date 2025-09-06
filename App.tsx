import React, { useState, useMemo } from 'react';
import { STRATEGIES_DATA, FILTERS } from './constants';
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
                    <h1 className="text-4xl md:text-6xl font-bold text-gradient mb-4">Guía Interactiva de Estrategias de Supervivencia</h1>
                    <p className="text-lg text-slate-600 max-w-3xl mx-auto">Una herramienta para comprender las respuestas de comportamiento en la infancia. Explora las diferentes estrategias, los conflictos que las originan y sus manifestaciones.</p>
                </header>

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