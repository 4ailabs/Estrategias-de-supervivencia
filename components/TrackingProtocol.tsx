import React from 'react';

const TrackingProtocol: React.FC = () => {
    return (
        <section className="my-16 md:my-24 bg-gradient-to-br from-green-50 to-emerald-50 p-6 md:p-10 rounded-2xl shadow-lg border border-slate-200/80">
            <div className="text-center">
                <h2 className="text-3xl font-bold text-gradient mb-4">Protocolo de Rastreo para Estrategias de Supervivencia</h2>
                <p className="text-slate-600 max-w-3xl mx-auto mb-8">
                    Identificación y rastreo biomagnético de constelaciones cerebrales en niños escolares. Este método es consistente con los demás protocolos de la aplicación.
                </p>
            </div>


            <div className="max-w-4xl mx-auto bg-white/70 backdrop-blur-sm p-8 rounded-xl border border-slate-200">
                 <div className="mb-8 bg-amber-50/70 p-4 rounded-lg border border-amber-200">
                    <h3 className="text-xl font-semibold text-green-900 mb-2">Metodología</h3>
                    <p className="text-slate-700">Test muscular para identificar sensaciones, instante del conflicto y par biomagnético correcto.</p>
                </div>

                <ol className="space-y-6">
                    <li className="flex items-start">
                        <div className="flex-shrink-0 bg-green-700 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg mr-4 shadow">1</div>
                        <div>
                            <h4 className="font-bold text-lg text-green-900">Buscar la Sensación</h4>
                            <p className="text-slate-700">Test muscular para identificar la sensación predominante de las 18 disponibles.</p>
                        </div>
                    </li>
                    <li className="flex items-start">
                        <div className="flex-shrink-0 bg-green-700 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg mr-4 shadow">2</div>
                        <div>
                            <h4 className="font-bold text-lg text-green-900">Buscar el Instante</h4>
                            <p className="text-slate-700">Regresión de edad preguntando en qué momento ocurrió el conflicto.</p>
                        </div>
                    </li>
                    <li className="flex items-start">
                        <div className="flex-shrink-0 bg-green-700 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg mr-4 shadow">3</div>
                        <div>
                            <h4 className="font-bold text-lg text-green-900">Buscar el Par</h4>
                            <p className="text-slate-700">Test muscular para encontrar el par que corrige el desequilibrio.</p>
                        </div>
                    </li>
                    <li className="flex items-start">
                        <div className="flex-shrink-0 bg-green-700 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg mr-4 shadow">4</div>
                        <div>
                            <h4 className="font-bold text-lg text-green-900">Explorar Dinámicas Familiares</h4>
                            <p className="text-slate-700">Explorar las dinámicas encontradas con los padres para crear un entorno diferente en los niños junto con los padres.</p>
                        </div>
                    </li>
                </ol>
            </div>
        </section>
    );
};

export default TrackingProtocol;