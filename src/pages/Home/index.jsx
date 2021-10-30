import React, { PureComponent } from 'react';
import {
	RadialBarChart,
	RadialBar,
	Legend,
	ResponsiveContainer,
	BarChart,
	Bar,
	Brush,
	ReferenceLine,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
} from 'recharts';


const style = {
	top: '50%',
	right: 0,
	transform: 'translate(0, -50%)',
	lineHeight: '24px',
};


function BrushBarChart() {
	const demoUrl = 'https://codesandbox.io/s/bar-chart-with-brush-ghsz3';

	const data = [
		{ name: '1', "Mes Pasado": 300, "Mes Actual": 456 },
		{ name: '2', "Mes Pasado": 145, "Mes Actual": 230 },
		{ name: '3', "Mes Pasado": 100, "Mes Actual": 345 },
		{ name: '4', "Mes Pasado": 8, "Mes Actual": 450 },
		{ name: '5', "Mes Pasado": 100, "Mes Actual": 321 },
		{ name: '6', "Mes Pasado": 9, "Mes Actual": 235 },
		{ name: '7', "Mes Pasado": 53, "Mes Actual": 267 },
		{ name: '8', "Mes Pasado": 252, "Mes Actual": 378 },
		{ name: '9', "Mes Pasado": 79, "Mes Actual": 210 },
		{ name: '10', "Mes Pasado": 294, "Mes Actual": 23 },
		{ name: '12', "Mes Pasado": 43, "Mes Actual": 45 },
		{ name: '13', "Mes Pasado": 74, "Mes Actual": 90 },
		{ name: '14', "Mes Pasado": 71, "Mes Actual": 130 },
		{ name: '15', "Mes Pasado": 117, "Mes Actual": 11 },
		{ name: '16', "Mes Pasado": 186, "Mes Actual": 107 },
		{ name: '17', "Mes Pasado": 16, "Mes Actual": 926 },
		{ name: '18', "Mes Pasado": 125, "Mes Actual": 653 },
		{ name: '19', "Mes Pasado": 222, "Mes Actual": 366 },
		{ name: '20', "Mes Pasado": 372, "Mes Actual": 486 },
		{ name: '21', "Mes Pasado": 182, "Mes Actual": 512 },
		{ name: '22', "Mes Pasado": 164, "Mes Actual": 302 },
		{ name: '23', "Mes Pasado": 316, "Mes Actual": 425 },
		{ name: '24', "Mes Pasado": 131, "Mes Actual": 467 },
		{ name: '25', "Mes Pasado": 291, "Mes Actual": 190 },
		{ name: '26', "Mes Pasado": 47, "Mes Actual": 194 },
		{ name: '27', "Mes Pasado": 415, "Mes Actual": 371 },
		{ name: '28', "Mes Pasado": 182, "Mes Actual": 376 },
		{ name: '29', "Mes Pasado": 93, "Mes Actual": 295 },
		{ name: '30', "Mes Pasado": 99, "Mes Actual": 322 },
		{ name: '31', "Mes Pasado": 52, "Mes Actual": 246 },
		{ name: '32', "Mes Pasado": 154, "Mes Actual": 33 },
		{ name: '33', "Mes Pasado": 205, "Mes Actual": 354 },
		{ name: '34', "Mes Pasado": 70, "Mes Actual": 258 },
		{ name: '35', "Mes Pasado": 25, "Mes Actual": 359 },
		{ name: '36', "Mes Pasado": 59, "Mes Actual": 192 },
		{ name: '37', "Mes Pasado": 63, "Mes Actual": 464 },
		{ name: '38', "Mes Pasado": 91, "Mes Actual": 2 },
		{ name: '39', "Mes Pasado": 66, "Mes Actual": 154 },
		{ name: '40', "Mes Pasado": 50, "Mes Actual": 186 },
	];
	return (
		<ResponsiveContainer width="100%" height="100%">
			<BarChart
				width={500}
				height={300}
				data={data}
				margin={{
					top: 5,
					right: 30,
					left: 20,
					bottom: 5,
				}}
			>
				<CartesianGrid strokeDasharray="3 3" />
				<XAxis dataKey="name" />
				<YAxis />
				<Tooltip />
				<Legend verticalAlign="top" wrapperStyle={{ lineHeight: '40px' }} />
				<ReferenceLine y={0} stroke="#000" />
				<Brush dataKey="name" height={30} stroke="#8884d8" />
				<Bar dataKey="Mes Pasado" fill="#8884d8" />
				<Bar dataKey="Mes Actual" fill="#82ca9d" />
			</BarChart>
		</ResponsiveContainer>
	);
}


export default function Home() {
	const demoUrl = 'https://codesandbox.io/s/simple-radial-bar-chart-qf8fz';

	const data = [
		{
			name: '18-24',
			"Mes Pasado": 31.47,
			"Mes Actual": 2400,
			fill: '#8884d8',
		},
		{
			name: '25-29',
			"Mes Pasado": 26.69,
			"Mes Actual": 4567,
			fill: '#83a6ed',
		},
		{
			name: '30-34',
			"Mes Pasado": 15.69,
			"Mes Actual": 1398,
			fill: '#8dd1e1',
		},
		{
			name: '35-39',
			"Mes Pasado": 8.22,
			"Mes Actual": 9800,
			fill: '#82ca9d',
		},
		{
			name: '40-49',
			"Mes Pasado": 8.63,
			"Mes Actual": 3908,
			fill: '#a4de6c',
		},
		{
			name: '50+',
			"Mes Pasado": 2.63,
			"Mes Actual": 4800,
			fill: '#d0ed57',
		},
		{
			name: 'Desconocido',
			"Mes Pasado": 6.67,
			"Mes Actual": 4800,
			fill: '#ffc658',
		},
	];

	return (
		<div className="mt-20">
			<div className="w-2/4 h-96 inline">
				<BrushBarChart />
			</div>
			<div className="w-2/4 h-80 inline">
				<ResponsiveContainer width="100%" height="100%">
					<RadialBarChart cx="50%" cy="50%" innerRadius="10%" outerRadius="80%" barSize={10} data={data}>
						<RadialBar
							minAngle={15}
							label={{ position: 'insideStart', fill: '#fff' }}
							background
							clockWise
							dataKey="Mes Pasado"
						/>
						<Legend iconSize={10} layout="vertical" verticalAlign="middle" wrapperStyle={style} />
					</RadialBarChart>
				</ResponsiveContainer>
			</div>
		</div>
	);
}
