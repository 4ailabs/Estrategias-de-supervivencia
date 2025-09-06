import React, { useState, useEffect, useCallback } from 'react';
import { Strategy } from '../types';
import { getGeminiAdvice } from '../services/geminiService';
import { X, Sparkles } from 'lucide-react';
import Spinner from './Spinner';

interface StrategyModalProps {
    strategy: Strategy | null;
    onClose: () => void;
}

const StrategyModal: React.FC<StrategyModalProps> = ({ strategy, onClose }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [advice, setAdvice] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (strategy) {
            setIsLoading(false);
            setAdvice(null);
            setError(null);
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [strategy]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [onClose]);

    const handleGenerateAdvice = useCallback(async () => {
        if (!strategy) return;
        setIsLoading(true);
        setAdvice(null);
        setError(null);
        try {
            const result = await getGeminiAdvice(strategy);
            setAdvice(result);
        } catch (err: any) {
            setError(err.message || 'An unknown error occurred.');
        } finally {
            setIsLoading(false);
        }
    }, [strategy]);

    const formatAdvice = (text: string) => {
        return text
            .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-slate-800">$1</strong>')
            .split('\n')
            .filter(line => line.trim())
            .map(line => line.trim().replace(/^\* |^- /, ''))
            .map(line => `<li>${line}</li>`)
            .join('');
    };

    if (!strategy) return null;

    return (
        <div
            className="fixed inset-0 bg-black/75 flex items-center justify-center p-2 sm:p-4 z-50 transition-opacity duration-300 ease-in-out animate-fade-in"
            onClick={onClose}
            aria-modal="true"
            role="dialog"
        >
            <div
                className="w-full max-w-2xl bg-slate-50 rounded-xl md:rounded-2xl shadow-2xl p-4 md:p-6 lg:p-8 relative transform transition-transform duration-300 ease-in-out max-h-[95vh] sm:max-h-[90vh] overflow-y-auto animate-slide-up"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 sm:top-4 sm:right-4 text-slate-500 hover:text-red-600 transition-colors rounded-full hover:bg-slate-200 p-1"
                    aria-label="Cerrar"
                >
                    <X className="w-6 h-6 sm:w-8 sm:h-8" />
                </button>

                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gradient mb-4 sm:mb-6 pr-8 leading-tight">{strategy.title}</h2>
                
                <div className="space-y-4 sm:space-y-6">
                    <div>
                        <h3 className="text-lg sm:text-xl font-semibold text-green-800 border-b-2 border-green-200/50 pb-2 mb-3">Vivencias / Conflictos Originarios</h3>
                        <ul className="list-disc list-inside space-y-1 sm:space-y-2 text-sm sm:text-base text-slate-700">
                            {strategy.vivencias.map((v, i) => <li key={i}>{v}</li>)}
                        </ul>
                    </div>
                    
                    <div>
                        <h3 className="text-lg sm:text-xl font-semibold text-green-800 border-b-2 border-green-200/50 pb-2 mb-3">Manifestación Observable</h3>
                        <div className="text-sm sm:text-base text-slate-700 space-y-2" dangerouslySetInnerHTML={{ __html: strategy.manifestacion.replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold">$1</strong>') }} />
                    </div>

                    <div className="border-t-2 border-green-200/50 pt-4 sm:pt-6">
                         <h3 className="text-lg sm:text-xl font-semibold text-green-800 mb-3 sm:mb-4">Apoyo con IA para Cuidadores</h3>
                         <div>
                             <button
                                 onClick={handleGenerateAdvice}
                                 disabled={isLoading}
                                 className="group w-full bg-gradient-to-r from-green-700 to-green-600 text-white font-bold py-2.5 sm:py-3 px-4 rounded-lg shadow-md hover:shadow-lg hover:from-green-600 hover:to-green-500 transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-2 disabled:from-green-800 disabled:to-green-700 disabled:opacity-70 disabled:cursor-not-allowed text-sm sm:text-base"
                             >
                                 <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-500 group-hover:rotate-12" />
                                 Generar Consejos Prácticos
                             </button>
                         </div>
                         <div className="mt-3 sm:mt-4 min-h-[4rem] sm:min-h-[5rem]">
                            {isLoading && <Spinner />}
                            {error && <div className="text-red-600 bg-red-100 p-3 sm:p-4 rounded-lg border border-red-200 text-sm sm:text-base">{error}</div>}
                            {advice && (
                                <div className="text-slate-700 bg-green-50/50 p-3 sm:p-4 rounded-lg border border-green-200/60">
                                    <ul className="list-disc list-inside space-y-1 sm:space-y-2 text-sm sm:text-base" dangerouslySetInnerHTML={{ __html: formatAdvice(advice) }} />
                                </div>
                            )}
                         </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StrategyModal;