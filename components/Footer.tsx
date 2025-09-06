import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-slate-200/50 text-center py-6 md:py-8 mt-6 md:mt-8">
            <div className="container mx-auto px-4">
                <div className="mb-3 md:mb-4">
                    <h3 className="text-base md:text-lg font-semibold text-slate-700 mb-2">Instituto CentroBioenergética</h3>
                    <p className="text-xs sm:text-sm text-slate-600 mb-2 leading-relaxed">
                        Especialistas en biomagnetismo y terapias bioenergéticas para el bienestar integral
                    </p>
                    <p className="text-xs sm:text-sm text-slate-500">
                        Dr. Miguel Ojeda Rios - Director
                    </p>
                </div>
                
                <div className="border-t border-slate-300 pt-3 md:pt-4">
                    <p className="text-xs sm:text-sm text-slate-600 mb-2 leading-relaxed">
                        Esta es una herramienta interactiva con fines educativos y de apoyo terapéutico. 
                        La información presentada está basada en metodologías reconocidas de psicología infantil 
                        y biomagnetismo, pero no sustituye el consejo profesional especializado.
                    </p>
                    <p className="text-xs text-slate-500">
                        © 2024 Biomagnetismo Kids - Instituto CentroBioenergética. Todos los derechos reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
