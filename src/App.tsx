import React from 'react';
import './App.css';
import {LinearProgress} from "@mui/material";

function App() {
	return (
		<div className="App">
			<div className="text">Website down for maintenance</div>
			<div><LinearProgress className="progress-bar" /></div>
		</div>
	);
}

export default App;
