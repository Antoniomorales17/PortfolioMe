import React, { useEffect, useRef } from 'react';
import './TuExperiencia.css';

const experienciaLaboral = [
  {
    puesto: 'E-commerce Manager',
    empresa: 'Amvos Digital',
    periodo: '2021',
    descripcion:
      'Realización de un análisis en profundidad de los mercados B2C y B2B, identificando oportunidades de crecimiento y áreas de mejora.',
  },
  {
    puesto: 'Técnico Superior en Investigación de mercados',
    empresa: 'Ayuntamiento de Almería',
    periodo: '2018',
    descripcion:
      'Participación en un proyecto integral de estudio del mercado de turoperadores en la ciudad, análisis de la competencia y tendencias del mercado turístico local.',
  },
];

const estudios = [
  {
    titulo: 'Java / Spring Boot',
    institucion: 'Hack A Boss',
    periodo: '2024',
    descripcion: 'Título de Programador backend especializado en Java y SpringBoot.',
  },
  {
    titulo: 'Full Stack Developer',
    institucion: '4Geeks Academy',
    periodo: '2023',
    descripcion: 'Título de Programador Full Stack en desarrollo de software.',
  },
  {
    titulo: 'Máster en E-commerce',
    institucion: 'Universidad de La Rioja (UNIR)',
    periodo: '2019',
    descripcion: 'Máster en Comercio electrónico y análisis de entornos digitales.',
  },
  {
    titulo: 'Grado en Marketing e Investigación de mercados',
    institucion: 'Universidad de Almería (UAL)',
    periodo: '2015',
    descripcion: 'Grado en Marketing, desarrollo y estudio de los elementos del mercado.',
  },
];

const TuExperiencia = () => {
  const experienciaRefs = useRef([]);
  const estudiosRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          } else {
            entry.target.classList.remove('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    experienciaRefs.current.forEach((ref) => observer.observe(ref));
    estudiosRefs.current.forEach((ref) => observer.observe(ref));

    return () => {
      experienciaRefs.current.forEach((ref) => observer.unobserve(ref));
      estudiosRefs.current.forEach((ref) => observer.unobserve(ref));
    };
  }, []);

  return (
    <section id="tu-experiencia">
      <div className="linea-superior"></div> {/* Línea superior */}

      <h2 className="section-title">Experiencia</h2>

      <div className="experiencia-laboral">
        <h3 className="section-subtitle">Experiencia Laboral</h3>
        {experienciaLaboral.map((item, index) => (
          <div
            className="experiencia-item"
            key={index}
            ref={(el) => (experienciaRefs.current[index] = el)}
          >
            <h4>{item.puesto}</h4>
            <p>{item.empresa}</p>
            <p>{item.periodo}</p>
            <p>{item.descripcion}</p>
          </div>
        ))}
      </div>

      <div className="historial-estudios">
        <h3 className="section-subtitle">Historial de Estudios</h3>
        {estudios.map((item, index) => (
          <div
            className="estudio-item"
            key={index}
            ref={(el) => (estudiosRefs.current[index] = el)}
          >
            <h4>{item.titulo}</h4>
            <p>{item.institucion}</p>
            <p>{item.periodo}</p>
            <p>{item.descripcion}</p>
          </div>
        ))}
      </div>

      <div className="linea-inferior"></div> {/* Línea inferior */}
      
    </section>
  );
};

export default TuExperiencia;
