import React from 'react';
import { Strategy, Filter } from './types';
import { Compass } from 'lucide-react';

// Función para crear iconos con estilos consistentes
const createIcon = (IconComponent: React.ComponentType<any>, color: string) => 
    React.createElement(IconComponent, { className: `w-12 h-12 ${color}` });

export const STRATEGIES_DATA: Strategy[] = [
    { id: 1, category: "supervivencia", title: "Sentirse Perdido", vivencias: ["Test"], manifestacion: "Test", icon: createIcon(Compass, "text-blue-600") }
];

export const FILTERS: Filter[] = [
    { key: 'all', label: 'Todas' },
    { key: 'supervivencia', label: 'Supervivencia y Protección' }
];
