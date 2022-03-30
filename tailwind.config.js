module.exports = {
	content: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				gray: {
					900: '#202225',
					800: '#2f3136',
					700: '#36393f',
					600: '#3c3f45',
					550: '#5c5f66',
					500: '#35383E',
					450: '#9b9ea3',
					425: '#c5c7c9',
					400: '#d4d7dc',
					350: '#dcdfe3',
					300: '#7e838c',
					250: '#e3e6e8',
					200: '#ebedef',
					100: '#f2f3f5',
					50: '#f7f8fa'
				}
			},
			borderWidth: {
				DEFAULT: '1px',
				0: '0',
				2: '2px',
				3: '3px',
				4: '4px',
				6: '6px',
				8: '8px'
			},
			spacing: {
				'1px': '1px',
				'2px': '2px',
				'5px': '5px',
				'6px': '6px',
				'13px': '13px'
			},
			brightness: {
				121: '1.21'
			},
			flex: {
				2: '1 1',
				3: '0.9 1'
			},
			minHeight: {
				16: '4rem'
			}
		}
	},
	plugins: [require('tailwind-scrollbar')]
};
