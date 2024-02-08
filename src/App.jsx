import React from 'react';
import FilmList from './components/FilmList';
import Design from './Design';
import Navbar from './components/Navbar';
// import './Design.css';

const App = () => {
  return (
    <div>
      <Navbar />
      <FilmList />
    </div>
  );
};

export default App;







// App.js
// import React from "react";
// import "./App.css";
// class App extends React.Component {
// 	// Constructor
// 	constructor(props) {
// 		super(props);

// 		this.state = {
// 			items: [],
// 			DataisLoaded: false,
// 		};
// 	}

// 	// ComponentDidMount is used to
// 	// execute the code
// 	componentDidMount() {
// 		fetch("https://swapi.dev/api/films/")
// 			.then((res) => res.json())
// 			.then((json) => {
// 				this.setState({
// 					items: json,
// 					DataisLoaded: true,
// 				});
// 			});
// 	}
// 	render() {
// 		const { DataisLoaded, items } = this.state;
// 		if (!DataisLoaded)
// 			return (
// 				<div>
// 					<h1> Pleses wait some time.... </h1>
// 				</div>
// 			);

// 		return (
// 			<div className="App">
// 				<h1 className="geeks">GeeksforGeeks</h1>
// 				<h3>Fetch data from an api in react</h3>
// 				<div className="container">
// 					{items.map((item) => (
// 						<div className="item">
// 							<ol key={item.id}>
// 								<div>
// 									<strong>
// 										{"EPISODE 5: "}
// 									</strong>
// 									{item.username},
// 								</div>
// 								<div>
// 									Full_Name: {item.name},
// 								</div>
// 								<div>
// 									User_Email: {item.email}
// 								</div>
// 							</ol>
// 						</div>
// 					))}
// 				</div>
// 			</div>
// 		);
// 	}
// }

// export default App;
