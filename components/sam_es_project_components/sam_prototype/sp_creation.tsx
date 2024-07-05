import React from 'react';

export default function SPCreation() {
  return (
    <div >
        <h2 className='text-lg sm:text-2xl font-semibold sm:mt-10 mb-5'>System Prompt</h2>
        <p className='leading-relaxed text-justify sm:text-xl'>
            En el desarrollo de SAM, nos enfocamos en elementos clave para la efectividad. 
            System Prompt detallados, formatos claros de respuesta y funciones de recuperación de datos garantizaron una comunicación precisa y atractiva. 
            Es importante mencionar que lograr las versiones finales involucró una iteración significativa en los System Prompt, ya que no existían guías previas. 
            Este enfoque resultó en un asistente robusto que mejoró la interacción con el usuario.
        </p>
        <h3 className='sm:text-2xl font-semibold sm:mt-6 text-center'>Elementos Clave</h3>
        <h4 className='sm:text-2xl font-semibold my-2 text-violet-950'>System Prompt</h4>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-10 sm:mt-4 text-justify'>
            <div>
                <p className='leading-relaxed sm:text-xl'><span className='font-bold'>Definición de Contexto:</span> Se crearon descripciones detalladas del contexto para las interacciones de SAM tanto en el sitio web como en Slack.</p>
            </div>
            <div>
                <p className='leading-relaxed sm:text-xl italic'>Ejemplo:</p>
                <p className='leading-relaxed sm:text-xl italic'>Eres SAM, un asistente virtual para Santex. Tu función es ayudar a los usuarios en nuestro sitio web con sus consultas sobre soluciones de transformación digital y ayudar a los nuevos empleados en Slack con preguntas sobre incorporación.</p>
            </div>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-10 mt-4 text-justify'>
            <div>
                <p className='leading-relaxed sm:text-xl'><span className='font-bold'>Enfoque:</span> Se desarrollaron directrices específicas para manejar diferentes tipos de consultas, como ventas, soluciones, temas específicos y consultas generales.</p>
            </div>
            <div>
                <p className='leading-relaxed sm:text-xl italic'>Ejemplo para consultas sobre ventas: Destaca cómo las soluciones de Santex pueden mejorar su negocio. Para temas específicos como IA o B Corp, discute la experiencia y cómo impactan el negocio del usuario.</p>
            </div>
        </div>
        <h4 className='sm:text-2xl font-semibold my-2 text-violet-950'>Formato de Respuesta</h4>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-10 mt-4 text-justify'>
            <div>
                <p className='leading-relaxed sm:text-xl'><span className='font-bold'>Tono y Estilo:</span> Para el sitio web, se utilizó un tono técnico y directo, mientras que para Slack, se prefirió un tono amigable y optimista con emojis.</p>
            </div>
            <div>
                <p className='leading-relaxed sm:text-xl italic'>Ejemplo para el sitio web:</p>
                <p className='leading-relaxed sm:text-xl italic'>Nuestras soluciones de IA pueden revolucionar las operaciones de su negocio. ¿Le gustaría saber más sobre la implementación de IA o nuestros casos de éxito?</p>
                <p className='leading-relaxed sm:text-xl italic'>Ejemplo para Slack:</p>
                <p className='leading-relaxed sm:text-xl italic'>¡Bienvenido a Santex! 😊 Estoy aquí para ayudarte con cualquier pregunta. ¿Cómo puedo asistirte hoy?</p>
            </div>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-10 mt-4 text-justify'>
            <div>
                <p className='leading-relaxed sm:text-xl'><span className='font-bold'>Límite de Palabras:</span> Las respuestas se mantuvieron concisas, nunca superando las 100 palabras.</p>
            </div>
            <div>
                <p className='leading-relaxed sm:text-xl italic'>Ejemplo:</p>
                <p className='leading-relaxed sm:text-xl italic'>Al priorizar tecnologías emergentes para su estrategia de transformación digital, se deben considerar varias áreas clave: IA, IoT, Computación en la Nube. ¿Cuál de estas le interesa más?</p>
            </div>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-10 mt-4 text-justify'>
            <div>
                <p className='leading-relaxed sm:text-xl'><span className='font-bold'>Formato:</span> Uso de viñetas y listas para mejorar la legibilidad.</p>
            </div>
            <div>
                <p className='leading-relaxed sm:text-xl italic'>Ejemplo:</p>
                <p className='leading-relaxed sm:text-xl italic'>Áreas clave de enfoque:</p>
                <ul className='list-disc ml-5'>
                    <li>Inteligencia Artificial (IA)</li>
                    <li>Internet de las Cosas (IoT)</li>
                    <li>Computación en la Nube</li>
                </ul>
                <p className='leading-relaxed sm:text-xl italic'>Avísenos qué área le gustaría explorar más.</p>
            </div>
        </div>
        <h4 className='sm:text-2xl font-semibold my-2 text-violet-950'>Integración de Funciones</h4>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-10 mt-4 text-justify'>
            <div>
                <p className='leading-relaxed sm:text-xl'><span className='font-bold'>Funciones de Recuperación de Datos:</span> Se implementó una función (santex_data) para obtener información precisa y actualizada relevante para las consultas de los usuarios.</p>
            </div>
            <div>
                <p className='leading-relaxed sm:text-xl italic'>Ejemplo:</p>
                <p className='leading-relaxed sm:text-xl italic'>Usando santex_data para obtener la última información: Según nuestros datos más recientes, integrar IA en su negocio puede aumentar la eficiencia hasta un 40%. ¿Le gustaría saber más sobre nuestras soluciones de IA?</p>
            </div>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-10 mt-4 text-justify'>
            <div>                
                <p className='leading-relaxed sm:text-xl'><span className='font-bold'>Preguntas Aclaratorias:</span> Se desarrollaron estrategias para hacer preguntas de seguimiento para comprender mejor las necesidades del usuario.</p>
            </div>
            <div>
                <p className='leading-relaxed sm:text-xl italic'>Ejemplo:</p>
                <p className='leading-relaxed sm:text-xl italic'>¿Podría contarme más sobre su negocio y cómo está abordando actualmente la transformación digital? Esto nos ayudará a proporcionar consejos más personalizados.</p>
            </div>
        </div>
        <h4 className='sm:text-2xl font-semibold my-2 text-violet-950'>Directrices de Interacción del Usuario</h4>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-10 mt-4 text-justify'>
            <div>
                <p className='leading-relaxed sm:text-xl'><span className='font-bold'>Usuarios del Sitio Web:</span> Se enfocó en recolectar información de contacto de usuarios interesados y destacar las soluciones de Santex.</p>
            </div>
            <div>
                <p className='leading-relaxed sm:text-xl italic'>Ejemplo:</p>
                <p className='leading-relaxed sm:text-xl italic'>Ofrecemos soluciones completas de transformación digital adaptadas a sus necesidades. ¿Puedo tener su nombre y correo electrónico para enviarle información más detallada?</p>
            </div>
        </div>
        <h4 className='sm:text-2xl font-semibold my-2 text-violet-950'>Filtrado y Manejo de Errores:</h4>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-10 mt-4 text-justify'>
            <div>
                <p className='leading-relaxed sm:text-xl'>Desarrolló filtros para manejar contenido inapropiado y preparó mensajes para manejar problemas de rendimiento.</p>
            </div>
            <div>
                <p className='leading-relaxed sm:text-xl italic'>Ejemplo de Filtrado:</p>
                <p className='leading-relaxed sm:text-xl italic'>Lo siento, pero no puedo participar en conversaciones que promuevan el odio. Estoy aquí para responder todas sus preguntas relacionadas con Santex.</p>
                <p className='leading-relaxed sm:text-xl italic'>Ejemplo de Manejo de Errores:</p>
                <p className='leading-relaxed sm:text-xl italic'>Lo siento... No entedí. Por ahora, estoy experimentando algunos problemas de rendimiento, que están fuera de mi control. Descuida, estaré de vuelta en breve. Por favor, vuelve a contactarme en unos minutos.</p>
            </div>
        </div>

    </div>
  )
}
