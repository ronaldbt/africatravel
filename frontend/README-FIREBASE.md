# Firebase Integration - Anasa Viajes

Firebase ha sido integrado en el proyecto Nuxt 4. Esta guía explica cómo usar Firebase en tu aplicación.

## Configuración

Las credenciales de Firebase están configuradas en el archivo `.env` (no incluido en git por seguridad).

## Uso

### En componentes Vue

```vue
<script setup>
const { app, analytics, logAnalyticsEvent } = useFirebase()

// Registrar un evento de analytics
logAnalyticsEvent('page_view', {
  page_title: 'Home',
  page_location: window.location.href
})
</script>
```

### Ejemplo: Tracking de clics

```vue
<script setup>
const { logAnalyticsEvent } = useFirebase()

const handleButtonClick = () => {
  logAnalyticsEvent('button_click', {
    button_name: 'contact_form',
    button_location: 'hero_section'
  })
}
</script>
```

### Ejemplo: Tracking de formularios

```vue
<script setup>
const { logAnalyticsEvent } = useFirebase()

const handleFormSubmit = async (formData) => {
  logAnalyticsEvent('form_submit', {
    form_name: 'contact_form',
    form_location: 'contact_page'
  })
  
  // Tu lógica de envío aquí
}
</script>
```

## Servicios disponibles

- ✅ **Analytics**: Configurado y listo para usar
- 🔄 **Auth**: Listo para configurar si es necesario
- 🔄 **Firestore**: Listo para configurar si es necesario
- 🔄 **Storage**: Listo para configurar si es necesario

## Variables de entorno

Asegúrate de tener estas variables en tu archivo `.env`:

```
FIREBASE_API_KEY=tu_api_key
FIREBASE_AUTH_DOMAIN=tu_auth_domain
FIREBASE_PROJECT_ID=tu_project_id
FIREBASE_STORAGE_BUCKET=tu_storage_bucket
FIREBASE_MESSAGING_SENDER_ID=tu_messaging_sender_id
FIREBASE_APP_ID=tu_app_id
FIREBASE_MEASUREMENT_ID=tu_measurement_id
```

## Notas

- Firebase solo se inicializa en el cliente (navegador)
- Analytics solo se inicializa si está soportado por el navegador
- El plugin se carga automáticamente al iniciar la aplicación


