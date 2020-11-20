import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import TodoPanel from './TodoPanel';

const HomePage = () => {
	const dispatch = useDispatch();

	useEffect(() => {}, []);

	return <TodoPanel />;
};

export default HomePage;
