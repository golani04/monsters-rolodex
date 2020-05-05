import React from 'react';

import { CardList } from './components/card-list/card-list.component';
import './App.css';

class App extends React.Component {
	constructor() {
		super();

		this.state = {
			monsters: [],
			searchField: '',
		};
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((res) => res.json())
			.then((users) => this.setState({ monsters: users }));
	}
	}
}

export default App;
