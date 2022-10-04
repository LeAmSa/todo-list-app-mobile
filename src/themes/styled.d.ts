import "styled-components";

declare module "styled-components/native" {
  export interface DefaultTheme {
    colors: {
      background: string;
      taskBackground: string;
      border: string;
      onBackground: string;
      inputBackground: string;
      inputPlaceholder: string;
      completedBgTask: string;
    };
  }
}
