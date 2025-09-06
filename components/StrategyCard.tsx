import React from 'react';
import { Strategy } from '../types';

interface StrategyCardProps {
    strategy: Strategy;
    onClick: (strategy: Strategy) => void;
}

const StrategyCard: React.FC<StrategyCardProps> = ({ strategy, onClick }) => {
    return (
        <div
            onClick={() => onClick(strategy)}
            className="card bg-white/70 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-slate-200/80 cursor-pointer flex flex-col items-center text-center transition-all duration-300 ease-in-out hover:transform hover:-translate-y-2 hover:shadow-xl hover:border-slate-300"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onClick(strategy)}
        >
            <div className="text-5xl mb-4" aria-hidden="true">{strategy.icon}</div>
            <h3 className="text-lg font-semibold text-green-900">{strategy.title}</h3>
        </div>
    );
};

export default StrategyCard;