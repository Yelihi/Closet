import 'styled-components';
import { FontTypes, FontWeight, Colors, Animation } from './theme';

declare module 'styled-components' {
  export interface DefaultTheme {
    breakPoint: string;
    font: FontTypes;
    fontWeight: FontWeight;
    colors: Colors;
    animation: Animation;
  }
}
