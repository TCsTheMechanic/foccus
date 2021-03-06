import { StyleSheet } from "react-native";

import { theme } from "../../assets/styles/theme";

export const homeStyles = StyleSheet.create({
  home: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.background,
  },
  buttonsView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 150,
  }
})
