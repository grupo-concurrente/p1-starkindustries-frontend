# 🚀 Stark Industries Security System - Frontend

Este repositorio contiene el **frontend** del Sistema de Seguridad Concurrente para la nueva sede de **Stark Industries** en Nueva York. La aplicación frontend está construida con **React**, y se comunica con el backend para visualizar en tiempo real los eventos de seguridad capturados por los sensores distribuidos en el edificio.

## 📋 Descripción

El sistema de seguridad avanzado tiene como objetivo gestionar múltiples sensores de seguridad en tiempo real. Desde el frontend, los usuarios podrán visualizar datos de sensores como movimiento, temperatura y accesos, además de recibir **notificaciones en tiempo real** sobre cualquier incidente o intrusión detectada.

La interfaz está diseñada para ser rápida, intuitiva y eficiente, mostrando gráficos de rendimiento y tablas con eventos procesados. Se utilizan **WebSockets** para la actualización en tiempo real.

## 🏗️ Arquitectura General

El frontend es una **Single Page Application (SPA)** que interactúa con el backend a través de **API REST** y se comunica mediante **WebSockets** para recibir notificaciones de eventos críticos.

- **React**: El framework principal para el desarrollo de la interfaz.
- **WebSockets**: Para recibir alertas de intrusión y eventos en tiempo real.
- **REST API**: Comunicación con el backend para obtener datos de los sensores.
- **Autenticación con JWT**: El frontend maneja el token JWT proporcionado por el backend para las solicitudes autenticadas.

## 📂 Estructura del Proyecto

├── public/                  # Archivos estáticos  
├── src/  
│   ├── assets/              # Recursos estáticos (imágenes, iconos, etc.)  
│   ├── components/          # Componentes reutilizables  
│   ├── hooks/               # Hooks personalizados  
│   ├── services/            # Funciones para interactuar con el backend  
│   ├── views/               # Páginas del sistema (Dashboard, Login, etc.)  
│   └── App.js               # Configuración principal de la app  
├── .env                     # Variables de entorno  
├── package.json             # Dependencias del proyecto  
└── README.md                # Este archivo  

## 🚀 Instalación y Ejecución

La manera recomendable para levantar toda la aplicación esta definida en las instrucciones situadas en el README del repositorio principal (servidor backend) al que ae puede acceder aquí: https://github.com/grupo-concurrente/p1-starkindustries-backend

Sin embargo, el servidor frontend también se puede levantar localmente realizando los siguientes pasos:

- Clonar el repositorio
- Instalar las dependencias con 'npm install'
- Levantar el servidor con 'npm run dev'

También se dispone de un Dockerfile para compilar la imagen aunque esencialmente realiza los mismos pasos definidos arriba pero en el entorno virtual de Docker
