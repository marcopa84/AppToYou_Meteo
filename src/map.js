 import React from 'react';
 import './map.css';


 class Map extends React.Component {
   componentDidMount() {
     const script = document.createElement('script');
     script.src = process.env.PUBLIC_URL + '/sdk/tomtom.min.js';
     document.body.appendChild(script);
     script.async = true;
     script.onload = function () {
       window.tomtom.L.map('map', {
         source: 'vector',
         key: 'VtMohzwkKd8udzFSNL2dmXkRe3A3LMU7',
         center: [41.9109, 12.4818],
         basePath: '/sdk',
         zoom: 9
       });
     }
   }

   render() {
     return <div id = 'map'> </div>
   }
 }
export default Map;



// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
