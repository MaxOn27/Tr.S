import {AppShell} from '@mantine/core';
import Header from "../Components/Header/Header";
import {Outlet} from "react-router-dom";
import React from "react";
import {useDisclosure} from "@mantine/hooks";

export default function AppLayout() {
	const [opened, { toggle }] = useDisclosure();

	return (
		<AppShell
			padding="md"
			header={{height: 60}}
			navbar={{
				width: 300,
				breakpoint: 'sm',
				collapsed: { mobile: !opened },
			}}
		>
			<Header opened={opened} toggle={toggle}/>
			<Outlet />
		</AppShell>
	);
}