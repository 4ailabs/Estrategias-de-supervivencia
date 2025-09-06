import React from 'react';

function App() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: '#f0f8ff', 
      padding: '20px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{ 
        maxWidth: '800px', 
        margin: '0 auto',
        textAlign: 'center'
      }}>
        <h1 style={{ 
          color: '#2563eb', 
          fontSize: '2.5rem', 
          marginBottom: '20px' 
        }}>
          🧠 Estrategias de Supervivencia Infantil
        </h1>
        
        <p style={{ 
          color: '#64748b', 
          fontSize: '1.2rem', 
          marginBottom: '40px' 
        }}>
          Guía interactiva para entender las respuestas de supervivencia en niños
        </p>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '20px' 
        }}>
          <div style={{ 
            backgroundColor: 'white', 
            padding: '20px', 
            borderRadius: '10px', 
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            border: '2px solid #e2e8f0'
          }}>
            <div style={{ fontSize: '3rem', marginBottom: '15px' }}>🧭</div>
            <h3 style={{ color: '#1e293b', marginBottom: '10px' }}>Sentirse Perdido</h3>
            <p style={{ color: '#64748b', fontSize: '0.9rem' }}>
              El niño parece desorientado, en su propio mundo. Le cuesta seguir indicaciones.
            </p>
            <div style={{ 
              marginTop: '15px', 
              padding: '5px 15px', 
              backgroundColor: '#dbeafe', 
              color: '#1e40af',
              borderRadius: '20px',
              display: 'inline-block',
              fontSize: '0.8rem'
            }}>
              supervivencia
            </div>
          </div>

          <div style={{ 
            backgroundColor: 'white', 
            padding: '20px', 
            borderRadius: '10px', 
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            border: '2px solid #e2e8f0'
          }}>
            <div style={{ fontSize: '3rem', marginBottom: '15px' }}>❤️</div>
            <h3 style={{ color: '#1e293b', marginBottom: '10px' }}>El Pequeño Cuidador</h3>
            <p style={{ color: '#64748b', fontSize: '0.9rem' }}>
              Asume un rol de cuidador con sus hermanos, mascotas o incluso con sus propios padres.
            </p>
            <div style={{ 
              marginTop: '15px', 
              padding: '5px 15px', 
              backgroundColor: '#dbeafe', 
              color: '#1e40af',
              borderRadius: '20px',
              display: 'inline-block',
              fontSize: '0.8rem'
            }}>
              supervivencia
            </div>
          </div>

          <div style={{ 
            backgroundColor: 'white', 
            padding: '20px', 
            borderRadius: '10px', 
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            border: '2px solid #e2e8f0'
          }}>
            <div style={{ fontSize: '3rem', marginBottom: '15px' }}>🧱</div>
            <h3 style={{ color: '#1e293b', marginBottom: '10px' }}>El Muro Emocional</h3>
            <p style={{ color: '#64748b', fontSize: '0.9rem' }}>
              Aplanamiento emocional. El niño se aísla, no expresa sus sentimientos.
            </p>
            <div style={{ 
              marginTop: '15px', 
              padding: '5px 15px', 
              backgroundColor: '#dbeafe', 
              color: '#1e40af',
              borderRadius: '20px',
              display: 'inline-block',
              fontSize: '0.8rem'
            }}>
              supervivencia
            </div>
          </div>

          <div style={{ 
            backgroundColor: 'white', 
            padding: '20px', 
            borderRadius: '10px', 
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            border: '2px solid #e2e8f0'
          }}>
            <div style={{ fontSize: '3rem', marginBottom: '15px' }}>🏆</div>
            <h3 style={{ color: '#1e293b', marginBottom: '10px' }}>No Soy Suficiente</h3>
            <p style={{ color: '#64748b', fontSize: '0.9rem' }}>
              Para ocultar su inseguridad, el niño puede volverse presumido o jactancioso.
            </p>
            <div style={{ 
              marginTop: '15px', 
              padding: '5px 15px', 
              backgroundColor: '#fef3c7', 
              color: '#d97706',
              borderRadius: '20px',
              display: 'inline-block',
              fontSize: '0.8rem'
            }}>
              corteza
            </div>
          </div>

          <div style={{ 
            backgroundColor: 'white', 
            padding: '20px', 
            borderRadius: '10px', 
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            border: '2px solid #e2e8f0'
          }}>
            <div style={{ fontSize: '3rem', marginBottom: '15px' }}>⚡</div>
            <h3 style={{ color: '#1e293b', marginBottom: '10px' }}>Déficit de Atención</h3>
            <p style={{ color: '#64748b', fontSize: '0.9rem' }}>
              Mala memoria a corto plazo. Es el niño despistado que olvida lo que se le acaba de decir.
            </p>
            <div style={{ 
              marginTop: '15px', 
              padding: '5px 15px', 
              backgroundColor: '#fef3c7', 
              color: '#d97706',
              borderRadius: '20px',
              display: 'inline-block',
              fontSize: '0.8rem'
            }}>
              corteza
            </div>
          </div>
        </div>

        <div style={{ 
          marginTop: '40px', 
          padding: '20px', 
          backgroundColor: '#f1f5f9', 
          borderRadius: '10px',
          border: '2px solid #cbd5e1'
        }}>
          <h2 style={{ color: '#1e293b', marginBottom: '15px' }}>¡Funciona! 🎉</h2>
          <p style={{ color: '#64748b' }}>
            Esta es una versión ultra-básica sin dependencias externas. 
            Si puedes ver esto, entonces el problema estaba en los iconos de Lucide o en la complejidad del código.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
