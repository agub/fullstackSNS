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
	deleteButton: {
		position: 'absolute',
		left: '90%',
		top: '10%',
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
		hover: {
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
	progress: {
		position: 'absolute',
	},
	invisibleSeparator: {
		border: 'none',
		margin: 4,
	},
	visibleSeparator: {
		width: '100%',
		borderBottom: '1px solid rgba(0,0,0,0.1)',
		marginBottom: 20,
	},
	paper: {
		padding: 20,
	},
	spinnerDiv: {
		textAlign: 'center',
	},
	commentImage: {
		maxWidth: '100%',
		margin: 'auto',
		// width: '20px',
		// height: 100,
		borderRadius: '50%',
		objectFit: 'cover',
	},
	commentData: {
		marginLeft: 20,
	},
	profile: {
		imageWrapper: {
			textAlign: 'center',
			position: 'relative',
			button: {
				position: 'absolute',
				top: '80%',
				left: '70%',
			},
		},
		profileImage: {
			width: 200,
			height: 200,
			objectFit: 'cover',
			maxWidth: '100%',
			borderRadius: '50%',
		},
		profileDetails: {
			textAlign: 'center',
			span: {
				verticalAlign: 'middle',
			},
			svg: {
				verticalAlign: 'middle',
			},
			a: {
				color: '#00bcd4',
			},
		},
		hr: {
			border: 'none',
			margin: '0 0 10px 0',
		},
		svgButton: {
			hover: {
				cursor: 'pointer',
			},
		},
	},
};
