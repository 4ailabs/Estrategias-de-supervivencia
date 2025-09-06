import { GoogleGenAI } from "@google/genai";
import { Strategy } from '../types';

// Hacer el servicio opcional - solo se inicializa si hay API_KEY
let ai: GoogleGenAI | null = null;

if (process.env.API_KEY) {
    ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
}

export const getGeminiAdvice = async (strategy: Strategy): Promise<string> => {
    // Si no hay API_KEY configurada, devolver consejos genéricos
    if (!ai) {
        return `**Consejos para ${strategy.title}:**
        
* **Escucha activa**: Presta atención a las señales no verbales del niño
* **Paciencia**: Cada niño procesa las emociones a su propio ritmo
* **Consistencia**: Mantén rutinas y límites claros
* **Apoyo emocional**: Valida sus sentimientos sin juzgar
* **Búsqueda de ayuda profesional**: Considera consultar con un especialista si es necesario

*Nota: Para consejos personalizados, configura la API_KEY de Gemini.*`;
    }

    const systemPrompt = "Actúa como un psicólogo infantil empático y experimentado. Tu objetivo es proporcionar consejos prácticos, claros y compasivos para padres y cuidadores. Utiliza un lenguaje sencillo y evita la jerga técnica. Estructura tu respuesta en 3 a 5 puntos clave usando asteriscos para listas con viñetas.";
    const userQuery = `Estoy trabajando con un niño que muestra una estrategia de supervivencia llamada '${strategy.title}'. Las vivencias o conflictos que pueden originar esta estrategia son: ${strategy.vivencias.join(', ')}. La manifestación observable es: ${strategy.manifestacion.replace(/\*\*/g, '')}. Basado en esto, por favor genera una lista de consejos prácticos y empáticos para un padre o cuidador sobre cómo apoyar a este niño.`;

    try {
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: userQuery,
            config: {
                systemInstruction: systemPrompt,
            },
        });

        const text = response.text;
        if (text) {
            return text;
        } else {
            throw new Error("No se recibió contenido válido de la API.");
        }
    } catch (error) {
        console.error("Error calling Gemini API:", error);
        throw new Error("Lo sentimos, no se pudieron generar los consejos en este momento. Por favor, inténtalo de nuevo más tarde.");
    }
};
