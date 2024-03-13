import React from 'react';
import {AppShell, Group} from "@mantine/core";
import {Outlet} from "react-router-dom";
import CoachesNavigation from './Navigation/CoachNavigation'

const Coach = () => {
	return (
		<Group h='100vh' style={{ overflowY: 'hidden'}} align='start' spacing={0}>
			<AppShell.Navbar w={'250'}>
				<CoachesNavigation />
			</AppShell.Navbar>
			<AppShell.Main style={{width: '100%', height: '100%'}}>
				<Outlet/>
			</AppShell.Main>
		</Group>
	);
};

export default Coach;