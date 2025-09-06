import React from 'react';
import { Strategy } from '../types';

interface StrategyCardProps {
    strategy: Strategy;
    onClick: (strategy: Strategy) => void;
}

const StrategyCard: React.FC<StrategyCardProps> = ({ strategy, onClick }) => {
    const getCategoryColor = (category: string) => {
        switch (category) {
            case 'supervivencia': return 'bg-blue-100 text-blue-800';
            case 'corteza': return 'bg-yellow-100 text-yellow-800';
            case 'territorial': return 'bg-green-100 text-green-800';
            case 'otras': return 'bg-purple-100 text-purple-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    const getCategoryLabel = (category: string) => {
        switch (category) {
            case 'supervivencia': return 'Supervivencia y Protección';
            case 'corteza': return 'Sustancia Blanca y Corteza';
            case 'territorial': return 'Corteza Territorial';
            case 'otras': return 'Otras Estrategias';
            default: return category;
        }
    };

    return (
        <div
            onClick={() => onClick(strategy)}
            className="card bg-white/70 backdrop-blur-sm p-4 md:p-6 rounded-xl md:rounded-2xl shadow-lg border border-slate-200/80 cursor-pointer flex flex-col text-center transition-all duration-300 ease-in-out hover:transform hover:-translate-y-1 md:hover:-translate-y-2 hover:shadow-xl hover:border-slate-300 min-h-[280px] md:min-h-[320px]"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onClick(strategy)}
        >
            <div className="mb-3 md:mb-4 flex justify-center" aria-hidden="true">
                <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center">
                    {strategy.icon}
                </div>
            </div>
            <h3 className="text-base md:text-lg font-semibold text-green-900 mb-2 md:mb-3 leading-tight">{strategy.title}</h3>
            
            <div className="mb-2 md:mb-3">
                <span className={`inline-block px-2 md:px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(strategy.category)}`}>
                    {getCategoryLabel(strategy.category)}
                </span>
            </div>
            
            <p className="text-xs md:text-sm text-slate-600 mb-3 md:mb-4 line-clamp-2 md:line-clamp-3 flex-grow">
                {strategy.manifestacion.replace(/\*\*/g, '').substring(0, 80)}...
            </p>
            
            <div className="mt-auto">
                <p className="text-xs text-slate-500 mb-1 md:mb-2">
                    {strategy.vivencias.length} vivencias identificadas
                </p>
                <div className="text-xs text-green-600 font-medium">
                    Toca para ver detalles →
                </div>
            </div>
        </div>
    );
};

export default StrategyCard;