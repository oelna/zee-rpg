const strings = {
	'challenges': {
		'success': [
			'You are overjoyed.',
			'You feel good about yourself.',
			'You feel relieved.',
			'You can breathe now.',
			'Things are looking up.',
			'The light! The promise of safety!',
			'The light, it\'s pretty.'
		],
		'failure': [
			'You are crushed.',
			'You\'re beginning to doubt yourself.',
			'You feel empty.',
			'As life ebbs, terrible vistas of emptyness reveal themselves.'
		],
		'actions': [
			'Fight.',
			'Flee.',
			'Hide.',
			'Play dead.',
			'Offer one of your crew.',
			'Try to reason.',
			'Use diplomacy.',
			'Make your stand.'
		],
	}
};

const stories = {
	'level1': [
		{
			'description': 'Some Task lies before you',
			'challenges': [
				{
					'text': 'Run',
					'requirement': {
						'name': 'mirrors',
						'bounds': [5,55]
					},
					'success': {
						'text': 'This went well!',
						'gains':[
							{
								'type': 'stats',
								'name': 'veils',
								'value': 3
							},
							{
								'type': 'qualities',
								'name': 'luck',
								'value': 2
							}
						]
					},
					'failure': {
						'text': 'Could have been worse.',
						'gains': [
							{
								'type': 'qualities',
								'name': 'life',
								'value': -5
							}
						]
					}
				},
				{
					'text': 'Fight',
					'requirement': {
						'name': 'iron',
						'bounds': [0,28]
					},
					'success': {
						'text': 'This went well!',
						'gains':[
							{
								'type': 'stats',
								'name': 'mirrors',
								'value': 2
							},
							{
								'type': 'stats',
								'name': 'veils',
								'value': 1
							},
							{
								'type': 'qualities',
								'name': 'life',
								'value': -5
							}
						]
					},
					'failure': {
						'text': 'Well, this was a shit show.',
						'gains': [
							{
								'type': 'qualities',
								'name': 'life',
								'value': -10
							}
						]
					}
				}
			]
		}
	]
};

export { strings, stories };
