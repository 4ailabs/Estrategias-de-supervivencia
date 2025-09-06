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
            className="fixed inset-0 bg-black/75 flex items-center justify-center p-4 z-50 transition-opacity duration-300 ease-in-out animate-fade-in"
            onClick={onClose}
            aria-modal="true"
            role="dialog"
        >
            <div
                className="w-full max-w-2xl bg-slate-50 rounded-2xl shadow-2xl p-6 md:p-8 relative transform transition-transform duration-300 ease-in-out max-h-[90vh] overflow-y-auto animate-slide-up"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-slate-500 hover:text-red-600 transition-colors rounded-full hover:bg-slate-200 p-1"
                    aria-label="Cerrar"
                >
                    <X className="w-8 h-8" />
                </button>

                <h2 className="text-3xl font-bold text-gradient mb-6 pr-8">{strategy.title}</h2>
                
                <div className="space-y-6">
                    <div>
                        <h3 className="text-xl font-semibold text-green-800 border-b-2 border-green-200/50 pb-2 mb-3">Vivencias / Conflictos Originarios</h3>
                        <ul className="list-disc list-inside space-y-2 text-slate-700">
                            {strategy.vivencias.map((v, i) => <li key={i}>{v}</li>)}
                        </ul>
                    </div>
                    
                    <div>
                        <h3 className="text-xl font-semibold text-green-800 border-b-2 border-green-200/50 pb-2 mb-3">Manifestación Observable</h3>
                        <div className="text-slate-700 space-y-2" dangerouslySetInnerHTML={{ __html: strategy.manifestacion.replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold">$1</strong>') }} />
                    </div>

                    <div className="border-t-2 border-green-200/50 pt-6">
                         <h3 className="text-xl font-semibold text-green-800 mb-4">Apoyo con IA para Cuidadores</h3>
                         <div>
                             <button
                                 onClick={handleGenerateAdvice}
                                 disabled={isLoading}
                                 className="group w-full bg-gradient-to-r from-green-700 to-green-600 text-white font-bold py-3 px-4 rounded-lg shadow-md hover:shadow-lg hover:from-green-600 hover:to-green-500 transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-2 disabled:from-green-800 disabled:to-green-700 disabled:opacity-70 disabled:cursor-not-allowed"
                             >
                                 <Sparkles className="h-5 w-5 transition-transform duration-500 group-hover:rotate-12" />
                                 Generar Consejos Prácticos
                             </button>
                         </div>
                         <div className="mt-4 min-h-[5rem]">
                            {isLoading && <Spinner />}
                            {error && <div className="text-red-600 bg-red-100 p-4 rounded-lg border border-red-200">{error}</div>}
                            {advice && (
                                <div className="text-slate-700 bg-green-50/50 p-4 rounded-lg border border-green-200/60">
                                    <ul className="list-disc list-inside space-y-2" dangerouslySetInnerHTML={{ __html: formatAdvice(advice) }} />
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