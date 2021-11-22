import * as Notifications from 'expo-notifications'
import * as Permissions from 'expo-permissions';
import AsyncStorage from "@react-native-async-storage/async-storage";

const NOTIFICATION_KEY = 'NOTIFICATION_KEY';

export const clearLocalNotification = async ()=> {
  return AsyncStorage.removeItem(NOTIFICATION_KEY)
    .then(Notifications.cancelAllScheduledNotificationsAsync);
}

  export function setLocalNotification () {
    AsyncStorage.getItem(NOTIFICATION_KEY)
      .then(JSON.parse)
      .then((data) => {
        if (data === null) {

          // Permissions.askAsync(Permissions.NOTIFICATIONS)
          Notifications.requestPermissionsAsync()
            .then(({ status }) => {
              if (status === 'granted') {
                Notifications.cancelAllScheduledNotificationsAsync()
  
                Notifications.scheduleNotificationAsync({
                  content: {
                    title: 'Practice for today!',
                    body: "👋 don't forget to revise your flashcards for today!",
                  },
                  trigger: {
                    hour: 14,
                    minute: 30,
                    repeats: true,
                  },
                })

                AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
              }
            })

            if (Platform.OS === 'android') {
              Notifications.setNotificationChannelAsync('default', {
                name: 'default',
                importance: Notifications.AndroidImportance.MAX,
                vibrationPattern: [0, 250, 250, 250],
                lightColor: '#FF231F7C',
              });
            }

        }
      })
  }