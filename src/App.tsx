import React, { FC } from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { ThemeProvider as StyledProvider } from 'styled-components';
import { store } from './redux/store';
import { mainTheme } from './theme';
import Root from './routes/Root';

const App: FC = () => {
  return (
    <StyledProvider theme={mainTheme}>
      <ReduxProvider store={store}>
        <Root />
      </ReduxProvider>
    </StyledProvider>
  );
};

export default App;
