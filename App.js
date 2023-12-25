import { StatusBar } from "expo-status-bar";
import { StyleSheet, Button, View } from "react-native";
import * as Notifications from "expo-notifications";

export default function App() {
  function scheduleNotificationHandler() {
    Notifications.scheduleNotificationAsync({
      content: {
        title: "My first Local notification",
        body: "This is the body of notification",
        data: {
          userName: "Fatih",
        },
      },
      trigger: {
        seconds: 5,
      },
    });
  }

  return (
    <View style={styles.container}>
      <Button
        title="Schedule Notifications"
        onPress={scheduleNotificationHandler}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
