import React from 'react';
import {Outlet} from "react-router-dom";
import {AppShell, Group} from "@mantine/core";
import AdminNavigation from "./Components/Navigation/AdminNavigation";

const AdminPage = () => {

	return (
		<Group h='100vh' style={{ overflowY: 'hidden' }} align='start' spacing={0}>
			<AppShell.Navbar w={'250'}>
				<AdminNavigation />
			</AppShell.Navbar>
			<AppShell.Main style={{width: '100%', height: '100%'}}>
				<Outlet/>
			</AppShell.Main>
		</Group>
	)
};

export default AdminPage;