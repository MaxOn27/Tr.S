import React from 'react';
import {Box, NavLink, Title} from '@mantine/core';
import { useLocation, useNavigate } from 'react-router-dom';
import {useMediaQuery} from "@mantine/hooks";


export default function StudentNavigation() {
	const navigate = useNavigate();
	const location = useLocation();

	const NavigationElement = ({ label, link, isBold = false, withIndentation = true }) => {
		const isMobile = useMediaQuery('(max-width: 767px)');


		const isLinkActive = location.pathname.startsWith(`/student/${link}`);
		return (
			<NavLink
				active={isLinkActive}
				onClick={() => navigate(link)}
				label={
					<Title c={'white'} tt={'capitalize'} order={isMobile ? 6 : 4} fw={isBold ? 700 : 400} ml={withIndentation ? 'sm' : 0}>
						{label}
					</Title>
				}
			/>
		);
	};

	return (
		<Box h='100%' w={250} sx={{ boxShadow: '#00000012 0px 0px 15px' }}>
			<Box mb='sm'>
				<NavigationElement label='тренування' link='trainings' />
			</Box>
		</Box>

	);
}
