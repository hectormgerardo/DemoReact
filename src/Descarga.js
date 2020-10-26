import React from 'react';
import './App.css';
import {original} from '../public/images/original.jpg';
import {segmentada} from '../public/images/segmentada.jpg';
import {detectada} from '../public/images/detectada.jpg';
import {termica} from '../public/images/termica.jpg';


export const Descarga = () => (
    <div>
        <h2>Descarga de Reportes </h2>
        <p>3.1) Ejemplo de Anomalías Encontradas</p>
        <p>Aquí se muestra un ejemplo de 3 imágenes de la estructura 2730 en la cual se detectó una anomalía, las 3 imágenes son: Color real RGB, Imagen con detección por modelo de inteligencia artificial e imagen Térmica FLIR</p>
        <p>3.2) Estructura 2730</p>
        <p>Imagen original: Imagen RGB Color real tomada por la cámara del drone.</p>
        <img class="img" src={original}></img>
        <p>Imagen segmentada: Imagen analizada con inteligencia artificial para segmentar los componentes que pertenecen a la estructura y e ignorar los que no (por eso es que se ilustra el fondo en blanco y negro)</p>
        <img class="img" src={segmentada}></img>
        <p>Imagen detectada: Resultado de la detección por clasificación supervisada de anomalías en la estructura.</p>
        <img class="img" src={detectada}></img>
        <p>Imagen Térmica: Imagen Térmica FLIR analizada para puntos fríos y calientes.</p>
        <img class="img" src={termica}></img>
    </div>
)