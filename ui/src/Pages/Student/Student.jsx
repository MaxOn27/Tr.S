import React from 'react';
import {AppShell, Group} from "@mantine/core";
import {Outlet} from "react-router-dom";
import StudentNavigation from "./Navigation/StudentNavigation"

const Student = () => {
	return (
		<Group h='100vh' style={{ overflowY: 'hidden' }} align='start' spacing={0}>
			<AppShell.Navbar w={'250'}>
				<StudentNavigation />
			</AppShell.Navbar>
			<AppShell.Main style={{width: '100%', height: '100%'}}>
				<Outlet/>
			</AppShell.Main>
		</Group>
	);
};

export default Student;