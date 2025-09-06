import React from 'react';
import { Strategy, Filter } from './types';
import { 
    Compass, Heart, Square, Trophy, Zap
} from 'lucide-react';

// Función para crear iconos con estilos consistentes
const createIcon = (IconComponent: React.ComponentType<any>, color: string) => 
    React.createElement(IconComponent, { className: `w-12 h-12 ${color}` });

export const STRATEGIES_DATA: Strategy[] = [
    { id: 1, category: "supervivencia", title: "Sentirse Perdido", vivencias: ["Sentirse abandonado en la guardería o el colegio.", "Una mudanza repentina que lo aleja de sus amigos y su entorno conocido.", "El nacimiento de un hermano, sintiendo que ha perdido su lugar.", "Perderse en un lugar público (supermercado, centro comercial).", 'Sentir que no encaja en la familia o que "nadie me entiende".'], manifestacion: 'El niño parece **desorientado**, "en su propio mundo". Le cuesta seguir indicaciones, se distrae fácilmente y parece no escuchar.', icon: createIcon(Compass, "text-blue-600") },
    { id: 2, category: "supervivencia", title: "El Pequeño Cuidador", vivencias: ["Ver a uno de sus padres enfermo o triste y sentir que debe cuidarlo.", "Preocupación por las peleas constantes entre sus padres.", "Tener un hermano menor y sentir una responsabilidad desmedida por su bienestar.", "La muerte de una mascota, sintiendo que no la protegió lo suficiente."], manifestacion: 'Asume un rol de cuidador con sus hermanos, mascotas o incluso con sus propios padres. **Se preocupa excesivamente por el bienestar de los demás**.', icon: createIcon(Heart, "text-red-500") },
    { id: 3, category: "supervivencia", title: "El Muro Emocional", vivencias: ["Sufrir bullying o acoso escolar de forma continuada.", "Vivir en un ambiente familiar con gritos, críticas constantes o desprecio.", "Ser ridiculizado por un profesor o familiar delante de otros.", "Sentir su espacio personal invadido físicamente."], manifestacion: '**Aplanamiento emocional**. El niño se aísla, no expresa sus sentimientos, parece que "nada le importa" y se muestra frío o distante.', icon: createIcon(Square, "text-gray-600") },
    { id: 4, category: "corteza", title: "No Soy Suficiente", vivencias: ['Comparaciones constantes con hermanos o compañeros ("Tu hermano saca mejores notas").', "Sentir que no cumple las expectativas de sus padres en el deporte o en la escuela.", "Ser siempre el último en ser elegido para los juegos en equipo.", 'Una discapacidad física o dificultad de aprendizaje que lo hace sentirse "menos" que los demás.'], manifestacion: 'Para ocultar su inseguridad, el niño puede volverse **presumido, jactancioso o necesitar ser siempre el centro de atención**.', icon: createIcon(Trophy, "text-yellow-500") },
    { id: 5, category: "corteza", title: "Déficit de Atención", vivencias: ["Divorcio de los padres y extrañar al progenitor que ya no vive en casa.", "Padres ausentes por exceso de trabajo.", 'Sentirse "asfixiado" por padres sobreprotectores que no le dan espacio.', "Tener que compartir habitación con un hermano que no respeta sus cosas."], manifestacion: '**Mala memoria a corto plazo**. Es el niño "despistado" que olvida lo que se le acaba de decir, se distrae con todo y puede ser diagnosticado con **TDA o TDAH**.', icon: createIcon(Zap, "text-purple-500") }
];

export const FILTERS: Filter[] = [
    { key: 'all', label: 'Todas' },
    { key: 'supervivencia', label: 'Supervivencia y Protección' },
    { key: 'corteza', label: 'Sustancia Blanca y Corteza' }
];
