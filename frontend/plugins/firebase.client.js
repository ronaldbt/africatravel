import { initializeApp, getApps } from 'firebase/app'
import { getAnalytics, isSupported } from 'firebase/analytics'

export default defineNuxtPlugin(async (nuxtApp) => {
  const config = useRuntimeConfig()
  
  // Verificar que estamos en el cliente
  if (process.server) return

  // Si Firebase ya está inicializado, no hacer nada
  if (getApps().length > 0) return

  const firebaseConfig = {
    apiKey: config.public.firebase.apiKey,
    authDomain: config.public.firebase.authDomain,
    projectId: config.public.firebase.projectId,
    storageBucket: config.public.firebase.storageBucket,
    messagingSenderId: config.public.firebase.messagingSenderId,
    appId: config.public.firebase.appId,
    measurementId: config.public.firebase.measurementId
  }

  // Inicializar Firebase
  const app = initializeApp(firebaseConfig)

  // Inicializar Analytics solo si está soportado
  if (await isSupported()) {
    const analytics = getAnalytics(app)
    nuxtApp.provide('analytics', analytics)
  }

  // Proporcionar la app de Firebase
  nuxtApp.provide('firebaseApp', app)
})




