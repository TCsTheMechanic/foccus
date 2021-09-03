import { StyleSheet } from "react-native";

import { theme } from "../../assets/styles/theme";

export const homeStyles = StyleSheet.create({
  home: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.background,
  },

  time: {
    color: theme.colors.text,
    fontSize: 80,
    marginBottom: 20,
  }
})
