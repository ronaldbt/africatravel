import { getApp } from 'firebase/app'
import { getAnalytics, logEvent } from 'firebase/analytics'

export const useFirebase = () => {
  const { $firebaseApp, $analytics } = useNuxtApp()

  const app = $firebaseApp || getApp()
  const analytics = $analytics

  const logAnalyticsEvent = (eventName, eventParams = {}) => {
    if (process.client && analytics) {
      logEvent(analytics, eventName, eventParams)
    }
  }

  return {
    app,
    analytics,
    logAnalyticsEvent
  }
}


