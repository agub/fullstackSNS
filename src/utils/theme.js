export default {
	palette: {
		primary: {
			light: '#eed183',
			main: '#ffac3e',
			dark: '#008394',
			contrastText: '#fff',
		},
		secondary: {
			light: '#ff6333',
			main: '#ff3d00',
			dark: '#b22a00',
			contrastText: '#fff',
		},
	},

	typography: {
		useNextVariants: true,
	},
	form: {
		textAlign: 'center',
	},
	pageTitle: {
		margin: '10px auto 10px auto',
	},
	image: { margin: '20px auto 20px auto', width: 70 },
	textField: {
		margin: '10px auto 10px auto',
	},
	button: {
		marginTop: 20,
		position: 'relative',
		'&:hover': {
			cursor: 'pointer',
		},
	},
	progress: {
		position: 'absolute',
	},
	customError: {
		color: 'red',
		fontSize: '0.8rem',
		marginTop: 10,
	},
};
