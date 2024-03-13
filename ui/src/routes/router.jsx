import { React } from 'react';
import App from '../App';
import {createBrowserRouter, Navigate} from "react-router-dom";

import AdminStudents from "../Pages/Admin/Components/Sections/AdminStudents/AdminStudents";
import AdminCoaches from "../Pages/Admin/Components/Sections/AdminCoaches/AdminCoaches";
import AdminPage from "../Pages/Admin/AdminPage";
import Coach from "../Pages/Coach/Coach";
import Students from "../Pages/Coach/Sections/Students/Students";
import Trainings from "../Pages/Student/Sections/Trainings/Trainings";
import Student from "../Pages/Student/Student";

export const router = createBrowserRouter([
	{
		path: '/',
		element: (
			/*TODO AuthLayout*/
				<App />
		),
		children: [
			{
				path: '/admin',
				element: (
				<AdminPage />
				),
				children: [
					{ element: <Navigate to='coaches' />, index: true },
					{
						path: 'students',
						element: (
								<AdminStudents />
						),
					},
					{
						path: 'coaches',
						element: (
							<AdminCoaches />
						),
					},
				]
			},
			{
				path: '/coach',
				element: (
					<Coach/>
				),
				children: [
					{ element: <Navigate to='students' />, index: true },
					{
						path: 'students',
						element: (
							<Students />
						),
					},
				]
			},
			{
				path: '/student',
				element: (
					<Student/>
				),
				children: [
					{ element: <Navigate to='trainings' />, index: true },
					{
						path: 'trainings',
						element: (
							<Trainings />
						),
					},
				]
			},
		],
	},
]);
