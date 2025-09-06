import { GoogleGenAI } from "@google/genai";
import { Strategy } from '../types';

// Hacer el servicio opcional - solo se inicializa si hay API_KEY
let ai: GoogleGenAI | null = null;

if (process.env.API_KEY) {
    ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
}

export const getGeminiAdvice = async (strategy: Strategy, childInfo?: { name: string; age: string; symptoms: string }): Promise<string> => {
    // Si no hay API_KEY configurada, devolver consejos genéricos mejorados
    if (!ai) {
        const getGenericAdvice = (category: string, title: string) => {
            const baseAdvice = {
                supervivencia: `**Guía de Apoyo para ${title} (Supervivencia y Protección):**

* **Crear un ambiente seguro**: Establece un hogar predecible y tranquilo donde tu hijo se sienta protegido
* **Validar sus emociones**: Reconoce sus sentimientos diciendo "Entiendo que te sientes..." sin juzgar
* **Técnicas de respiración**: Enséñale a respirar profundamente para calmarse cuando se sienta abrumado
* **Rutinas consistentes**: Mantén horarios regulares para comidas, sueño y actividades
* **Contacto físico seguro**: Ofrece abrazos y caricias cuando tu hijo lo permita
* **Espacio personal**: Asegúrate de que tenga un lugar donde pueda sentirse seguro

**Técnicas de Apoyo Energético:**
* **Equilibrio con imanes**: Aplicar imanes en puntos específicos para armonizar su energía
* **Terapia de polaridad**: Trabajar con campos magnéticos para restaurar el equilibrio
* **Puntos de acupresión**: Estimular puntos específicos para liberar tensiones emocionales

*Nota: Para una guía personalizada, configura la API_KEY de Gemini.*`,

                corteza: `**Guía de Apoyo para ${title} (Desarrollo Cognitivo):**

* **Juegos que fortalecen la memoria**: Rompecabezas, juegos de memoria, actividades que estimulen su mente
* **Ejercicios de concentración**: Meditación guiada para niños, ejercicios de atención plena
* **Alimentación para el cerebro**: Omega-3, antioxidantes, alimentos que nutran su desarrollo
* **Sueño reparador**: Rutinas de sueño consistentes, ambiente oscuro y silencioso
* **Actividades multisensoriales**: Música, arte, movimiento que estimulen su creatividad
* **Técnicas de relajación**: Yoga para niños, mindfulness, respiración consciente

**Técnicas de Apoyo Energético:**
* **Equilibrio energético**: Aplicar imanes en puntos craneales para mejorar la función cerebral
* **Terapia de polaridad**: Trabajar con campos magnéticos para estimular el desarrollo
* **Puntos de acupresión**: Estimular meridianos relacionados con la función cognitiva

*Nota: Para una guía personalizada, configura la API_KEY de Gemini.*`,

                territorial: `**Guía de Apoyo para ${title} (Espacio y Territorio):**

* **Respetar su espacio personal**: No invadir su territorio sin permiso, pide antes de entrar
* **Comunicación clara**: Explica cambios y decisiones que afecten su entorno
* **Incluirlo en decisiones**: Permítele participar en decisiones familiares apropiadas para su edad
* **Darle control**: Permítele tomar decisiones pequeñas para recuperar sensación de control
* **Técnicas de relajación**: Ejercicios de respiración, visualización, relajación muscular
* **Apoyo profesional**: Considera terapia familiar para trabajar dinámicas territoriales

**Técnicas de Apoyo Energético:**
* **Equilibrio territorial**: Aplicar imanes en puntos relacionados con el sistema límbico
* **Terapia de polaridad**: Trabajar con campos magnéticos para armonizar la energía territorial
* **Puntos de acupresión**: Estimular meridianos relacionados con la sensación de seguridad

*Nota: Para una guía personalizada, configura la API_KEY de Gemini.*`,

                otras: `**Guía de Apoyo para ${title} (Estrategias Adicionales):**

* **Observación detallada**: Lleva un diario de comportamientos y patrones para entender mejor a tu hijo
* **Ambiente estructurado**: Proporciona límites claros y predecibles que den seguridad
* **Técnicas de regulación**: Ejercicios de respiración, movimiento, música relajante
* **Comunicación no verbal**: Usa gestos, contacto visual, tono de voz calmado
* **Actividades de liberación**: Arte, música, movimiento para expresar emociones
* **Apoyo especializado**: Consulta con profesionales en biomagnetismo y psicología infantil

**Técnicas de Apoyo Energético:**
* **Evaluación energética**: Identificar desequilibrios en el campo energético del niño
* **Terapia de polaridad**: Trabajar con campos magnéticos para armonizar la energía general
* **Puntos de acupresión**: Estimular meridianos específicos según la manifestación

*Nota: Para una guía personalizada, configura la API_KEY de Gemini.*`
            };
            return baseAdvice[category as keyof typeof baseAdvice] || baseAdvice.otras;
        };

        return getGenericAdvice(strategy.category, strategy.title);
    }

    const systemPrompt = `Eres una especialista en desarrollo infantil y biomagnetismo. Tu misión es brindar orientación práctica y profesional para padres que buscan apoyar a sus hijos. 

INSTRUCCIONES ESPECÍFICAS:
- Proporciona 4-6 estrategias prácticas y específicas
- Cada estrategia debe ser adaptable a diferentes circunstancias familiares
- Incluye técnicas de biomagnetismo cuando sea apropiado
- Considera el contexto emocional y energético del niño
- Usa lenguaje claro, directo y profesional
- Evita términos técnicos complejos y lenguaje excesivamente emocional
- Estructura cada punto con asteriscos (*) para listas
- Enfócate en soluciones que fortalezcan el bienestar del niño
- Incluye estrategias para padres y cuidadores
- Mantén un tono profesional pero accesible
- Evita frases melodramáticas o excesivamente sentimentales`;

    const childContext = childInfo && (childInfo.name || childInfo.age || childInfo.symptoms) 
        ? `\nINFORMACIÓN DEL NIÑO:
- Nombre: ${childInfo.name || 'No especificado'}
- Edad: ${childInfo.age || 'No especificada'}
- Síntomas/Sensaciones: ${childInfo.symptoms || 'No especificados'}\n`
        : '';

    const userQuery = `ESTRATEGIA DE SUPERVIVENCIA: "${strategy.title}"

CONTEXTO:
- Vivencias/Conflictos originarios: ${strategy.vivencias.join(', ')}
- Manifestación observable: ${strategy.manifestacion.replace(/\*\*/g, '')}
- Categoría: ${strategy.category}${childContext}

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
        throw new Error("Lo sentimos, no se pudo generar la guía de apoyo en este momento. Por favor, inténtalo de nuevo más tarde.");
    }
};
