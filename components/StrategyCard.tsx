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
            className="card bg-white/70 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-slate-200/80 cursor-pointer flex flex-col text-center transition-all duration-300 ease-in-out hover:transform hover:-translate-y-2 hover:shadow-xl hover:border-slate-300"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onClick(strategy)}
        >
            <div className="mb-4 flex justify-center" aria-hidden="true">{strategy.icon}</div>
            <h3 className="text-lg font-semibold text-green-900 mb-3">{strategy.title}</h3>
            
            <div className="mb-3">
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(strategy.category)}`}>
                    {getCategoryLabel(strategy.category)}
                </span>
            </div>
            
            <p className="text-sm text-slate-600 mb-4 line-clamp-3">
                {strategy.manifestacion.replace(/\*\*/g, '').substring(0, 120)}...
            </p>
            
            <div className="mt-auto">
                <p className="text-xs text-slate-500 mb-2">
                    {strategy.vivencias.length} vivencias identificadas
                </p>
                <div className="text-xs text-green-600 font-medium">
                    Haz clic para ver detalles →
                </div>
            </div>
        </div>
    );
};

export default StrategyCard;