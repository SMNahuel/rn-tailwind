import * as Font from "expo-font";

import { logger } from "@/utils/logger.utils";

/**
 * Initializes the app on startup.
 *
 * @return {Promise<void>} A promise that resolves when the initialization is complete.
 */
const onAppStartup = async (): Promise<void> => {
  await Font.loadAsync({
    "roobert-light": require("@/assets/fonts/Roobert-Light.otf"),
    "roobert-regular": require("@/assets/fonts/Roobert-Regular.otf"),
    "roobert-medium": require("@/assets/fonts/Roobert-Medium.otf"),
    "roobert-semibold": require("@/assets/fonts/Roobert-SemiBold.otf"),
    "roobert-bold": require("@/assets/fonts/Roobert-Bold2.otf"),
    "roobert-heavy": require("@/assets/fonts/Roobert-Heavy.otf"),
  });
  logger.info("Fonts loaded");
};

export { onAppStartup };
