
import React from 'react';

const Spinner: React.FC = () => (
    <div className="flex items-center justify-center text-stone-600">
        <div className="loader w-6 h-6 border-4 border-stone-200 rounded-full"></div>
        <p className="ml-3">Generando consejos con IA...</p>
    </div>
);

export default Spinner;
