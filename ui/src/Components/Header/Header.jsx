import React from 'react';
import {ActionIcon, AppShell, Avatar, Burger, Flex, Group, Menu, Title} from "@mantine/core";
import {IconLogout} from "@tabler/icons-react";
import {useMediaQuery} from "@mantine/hooks";

const Header = ({opened, toggle}) => {
	const isMobile = useMediaQuery('(max-width: 767px)');


	return (
		<AppShell.Header style={{
			borderBottom: `1px solid red`,
			boxShadow: '#00000021 83px 0px 13px',
		}}
		>
			<Flex justify={'space-between'} align={'center'} style={{height: '100%'}}>
				<Group mx={30}>
					<Title order={!isMobile ? 2 : 4}>Training Stats</Title>
				</Group>
				<Group mx={30}>
					<Burger
						opened={opened}
						onClick={toggle}
						hiddenFrom="sm"
						size="sm"
					/>
					<ActionIcon variant={'transparent'}>
						<Menu shadow='md' width={200}>
							<Menu.Target>
								<Avatar variant={'transparent'} radius='xl'/>
							</Menu.Target>
							<Menu.Dropdown>
								<Menu.Label>Профіль</Menu.Label>
								<Menu.Item icon={<IconLogout size={14}/>} onClick={() => console.log ('Logged out')}>
									Вийти
								</Menu.Item>
							</Menu.Dropdown>
						</Menu>
					</ActionIcon>
				</Group>
			</Flex>
		</AppShell.Header>
	);
};

export default Header;