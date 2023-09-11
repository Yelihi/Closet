import { ThemeProvider } from 'styled-components';
import theme from '../../styles/theme';

interface Props {
  children: React.ReactNode | React.ReactNode[];
}

const RenderWithTheme = ({ children }: Props) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default RenderWithTheme;
