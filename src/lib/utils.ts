import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { Lectura, Sensor } from "./types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function timeSince(date:string) {
  var seconds = Math.floor((new Date().getTime() - new Date(date).getTime()) / 1000);

  var interval = seconds / 31536000;

  if (interval > 1) {
    return Math.floor(interval) + " años";
  }
  interval = seconds / 2592000;
  if (interval > 1) {
    return Math.floor(interval) + " meses";
  }
  interval = seconds / 86400;
  if (interval > 1) {
    return Math.floor(interval) + " días";
  }
  interval = seconds / 3600;
  if (interval > 1) {
    return Math.floor(interval) + " horas";
  }
  interval = seconds / 60;
  if (interval > 1) {
    return Math.floor(interval) + " minutos";
  }
  return Math.floor(seconds) + " segundos";
}

export const fetchData = async (): Promise<{ sensores: Sensor[], lecturas: Lectura[] }> => {
  try {
    const sensoresResponse = await fetch('http://localhost:8080/publico/api/v1/sensores')
    const sensores = await sensoresResponse.json()
    const lecturasResponse = await fetch('http://localhost:8080/publico/api/v1/lecturas')
    const lecturas = await lecturasResponse.json()
    return { sensores, lecturas }
  } catch (error) {
    console.error('Error fetching data:', error)
    return { sensores: [], lecturas: [] }
  }
}