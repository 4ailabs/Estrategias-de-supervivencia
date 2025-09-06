import { GoogleGenAI } from "@google/genai";
import { Strategy } from '../types';

// Hacer el servicio opcional - solo se inicializa si hay API_KEY
let ai: GoogleGenAI | null = null;

if (process.env.API_KEY) {
    ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
}

export const getGeminiAdvice = async (strategy: Strategy): Promise<string> => {
    // Si no hay API_KEY configurada, devolver consejos genéricos mejorados
    if (!ai) {
        const getGenericAdvice = (category: string, title: string) => {
            const baseAdvice = {
                supervivencia: `**Estrategias para ${title} (Supervivencia y Protección):**

* **Crear seguridad emocional**: Establece un ambiente predecible y seguro donde el niño se sienta protegido
* **Validar sus emociones**: Reconoce sus sentimientos sin minimizarlos, diciendo "Entiendo que te sientes..."
* **Técnicas de respiración**: Enséñale respiraciones profundas para calmar el sistema nervioso
* **Rutinas consistentes**: Mantén horarios regulares para comidas, sueño y actividades
* **Contacto físico seguro**: Abrazos, caricias suaves cuando el niño lo permita
* **Espacio personal**: Asegúrate de que tenga un lugar donde pueda sentirse seguro

*Nota: Para estrategias específicas de biomagnetismo, configura la API_KEY de Gemini.*`,

                corteza: `**Estrategias para ${title} (Sustancia Blanca y Corteza):**

* **Ejercicios de memoria**: Juegos de memoria, rompecabezas, actividades que estimulen la cognición
* **Técnicas de atención**: Ejercicios de concentración progresiva, meditación guiada para niños
* **Alimentación neuroprotectora**: Omega-3, antioxidantes, alimentos que nutran el cerebro
* **Sueño reparador**: Rutinas de sueño consistentes, ambiente oscuro y silencioso
* **Actividades multisensoriales**: Música, arte, movimiento que estimulen diferentes áreas cerebrales
* **Reducción de estrés**: Técnicas de relajación, yoga para niños, mindfulness

*Nota: Para técnicas específicas de biomagnetismo, configura la API_KEY de Gemini.*`,

                territorial: `**Estrategias para ${title} (Corteza Territorial):**

* **Respetar su espacio**: No invadir su territorio personal sin permiso
* **Comunicación clara**: Explica cambios y decisiones que afecten su entorno
* **Participación en decisiones**: Inclúyelo en decisiones familiares apropiadas para su edad
* **Actividades de control**: Permítele tomar decisiones pequeñas para recuperar sensación de control
* **Técnicas de relajación**: Ejercicios de respiración, visualización, relajación muscular
* **Apoyo profesional**: Considera terapia familiar para trabajar dinámicas territoriales

*Nota: Para técnicas específicas de biomagnetismo, configura la API_KEY de Gemini.*`,

                otras: `**Estrategias para ${title} (Otras Estrategias):**

* **Observación detallada**: Lleva un diario de comportamientos y patrones
* **Ambiente estructurado**: Proporciona límites claros y predecibles
* **Técnicas de regulación**: Ejercicios de respiración, movimiento, música relajante
* **Comunicación no verbal**: Usa gestos, contacto visual, tono de voz calmado
* **Actividades de liberación**: Arte, música, movimiento para expresar emociones
* **Apoyo especializado**: Consulta con profesionales en biomagnetismo y psicología infantil

*Nota: Para técnicas específicas de biomagnetismo, configura la API_KEY de Gemini.*`
            };
            return baseAdvice[category as keyof typeof baseAdvice] || baseAdvice.otras;
        };

        return getGenericAdvice(strategy.category, strategy.title);
    }

    const systemPrompt = `Eres un especialista en biomagnetismo y psicología infantil con experiencia en el Instituto CentroBioenergética. Tu misión es proporcionar estrategias específicas y adaptables para mejorar las condiciones del niño, considerando tanto el aspecto emocional como bioenergético. 

INSTRUCCIONES ESPECÍFICAS:
- Proporciona 4-6 estrategias prácticas y específicas
- Cada estrategia debe ser adaptable a diferentes circunstancias familiares
- Incluye técnicas de biomagnetismo cuando sea apropiado
- Considera el contexto emocional y energético del niño
- Usa lenguaje claro y compasivo, evitando jerga técnica
- Estructura cada punto con asteriscos (*) para listas
- Enfócate en soluciones que fortalezcan el sistema nervioso del niño
- Incluye estrategias para padres y cuidadores`;

    const userQuery = `ESTRATEGIA DE SUPERVIVENCIA: "${strategy.title}"

CONTEXTO:
- Vivencias/Conflictos originarios: ${strategy.vivencias.join(', ')}
- Manifestación observable: ${strategy.manifestacion.replace(/\*\*/g, '')}
- Categoría: ${strategy.category}

SOLICITUD:
Necesito estrategias específicas y adaptables para mejorar las condiciones de este niño. Por favor, proporciona:

1. Estrategias inmediatas para calmar y estabilizar
2. Técnicas de biomagnetismo aplicables (si corresponde)
3. Modificaciones en el entorno familiar
4. Actividades específicas para fortalecer el sistema nervioso
5. Estrategias de comunicación adaptadas
6. Plan de seguimiento y monitoreo

Cada estrategia debe ser práctica, específica y adaptable a diferentes circunstancias familiares.`;

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
