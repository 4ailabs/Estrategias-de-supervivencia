import React from 'react';

const AbuseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
    </svg>
);

const NeglectIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 5.523-4.477 10-10 10S1 17.523 1 12 5.477 2 11 2s10 4.477 10 10z" />
    </svg>
);

const DysfunctionIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);


const AdverseChildhoodExperiences: React.FC = () => {
    const abuseItems = ["Abuso físico", "Abuso emocional", "Abuso sexual"];
    const neglectItems = ["Negligencia física", "Negligencia emocional"];
    const householdItems = [
        "Violencia doméstica",
        "Abuso de sustancias en el hogar",
        "Enfermedad mental en el hogar",
        "Separación o divorcio",
        "Miembro de la familia encarcelado"
    ];

    return (
        <section className="my-16 md:my-24">
            <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-gradient mb-4">Experiencias Adversas en la Infancia (EAI)</h2>
                <p className="text-slate-600 max-w-4xl mx-auto">
                    Las EAI son eventos potencialmente traumáticos que ocurren en la niñez (de 0 a 17 años). Pueden incluir violencia, abuso y crecer en una familia con problemas de salud mental o de abuso de sustancias. Estas experiencias están vinculadas a resultados de salud crónicos, problemas de salud mental y abuso de sustancias en la edad adulta.
                </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-slate-200/80">
                    <div className="flex items-center gap-4 mb-4">
                        <AbuseIcon />
                        <h3 className="text-xl font-bold text-green-900">Abuso</h3>
                    </div>
                    <ul className="space-y-2 list-disc list-inside text-slate-700">
                        {abuseItems.map((item, index) => <li key={index}>{item}</li>)}
                    </ul>
                </div>
                <div className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-slate-200/80">
                    <div className="flex items-center gap-4 mb-4">
                        <NeglectIcon />
                        <h3 className="text-xl font-bold text-green-900">Negligencia</h3>
                    </div>
                     <ul className="space-y-2 list-disc list-inside text-slate-700">
                        {neglectItems.map((item, index) => <li key={index}>{item}</li>)}
                    </ul>
                </div>
                <div className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-slate-200/80">
                    <div className="flex items-center gap-4 mb-4">
                        <DysfunctionIcon />
                        <h3 className="text-xl font-bold text-green-900">Disfunción Familiar</h3>
                    </div>
                     <ul className="space-y-2 list-disc list-inside text-slate-700">
                        {householdItems.map((item, index) => <li key={index}>{item}</li>)}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default AdverseChildhoodExperiences;