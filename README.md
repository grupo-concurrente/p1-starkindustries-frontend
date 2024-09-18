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

1. **Clonar el repositorio**:  
git clone https://github.com/stark-industries/security-system-frontend.git  
cd security-system-frontend  

2. **Instalar dependencias**:  
npm install  

3. **Configurar las variables de entorno**:  
- Crea un archivo `.env` en la raíz del proyecto y añade la URL del backend:  
REACT_APP_BACKEND_URL=http://localhost:8080  

4. **Ejecutar la aplicación**:  
npm start  

## 📦 Dependencias

- **React** - Interfaz de usuario  
- **Axios** - Para llamadas HTTP al backend  
- **Socket.io-client** - Para WebSockets  
- **React Router** - Navegación entre vistas  

## 🛡️ Seguridad

El frontend utiliza **JWT** (JSON Web Token) para la autenticación. El token se almacena en **LocalStorage** y se incluye en las cabeceras de cada petición que requiere autenticación.

---

## 🛠️ Tecnologías Utilizadas

- **React**  
- **WebSockets**  
- **Axios**  
- **JWT**  

## 📧 Contacto

Si tienes alguna duda o sugerencia sobre el proyecto, no dudes en contactarnos en soporte@starkindustries.com.

---

¡Gracias por contribuir a mantener la seguridad en Stark Industries!
