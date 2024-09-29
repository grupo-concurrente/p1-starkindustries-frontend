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

En este momento el frontend se puede ejecutar independiente pero no existen datos de mock para visualizar la UI sin necesidad de estar conectado al backend.

Actualmente es necesario tener los servicios de **BBDD y Backend** levantados para que el frontend los consuma y funcione correctamente.

Las instrucciones en detalle para ello están en el README.md del repositorio principal (Backend)

https://github.com/grupo-concurrente/p1-starkindustries-backend
