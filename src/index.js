import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { MantineProvider } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';

ReactDOM.render(
	<MantineProvider>
		<NotificationsProvider position="top-right" zIndex="2077">
			<App />
		</NotificationsProvider>
	</MantineProvider>,
	document.getElementById('root')
);
