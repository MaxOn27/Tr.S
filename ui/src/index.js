import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {MantineProvider, createTheme} from "@mantine/core";
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/router';
import '@mantine/core/styles.css';

const theme = createTheme({
	fontFamily: 'Open Sans, sans-serif',
	primaryColor: 'red'
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	  <MantineProvider theme={theme} defaultColorScheme={'dark'} withGlobalStyles withNormalizeCSS>
		  <RouterProvider router={router} />
	  </MantineProvider>
);

reportWebVitals();
