import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-slate-200/50 text-center py-6 mt-8">
            <div className="container mx-auto px-4">
                <p className="text-sm text-slate-600">
                    Esta es una herramienta interactiva con fines educativos. La información y los consejos generados por IA no sustituyen el consejo profesional.
                </p>
                <p className="text-sm text-slate-500 mt-1">
                    © 2024 Guía de Supervivencia Infantil. Todos los derechos reservados.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
