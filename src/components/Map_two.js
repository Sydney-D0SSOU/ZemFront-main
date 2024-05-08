import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBars, faUser } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
    return (
        <nav className="flex items-center justify-between p-4 text-white bg-gray-700">
            <div>
                <FontAwesomeIcon icon={faBars} className="mr-4 text-2xl text-white cursor-pointer" />
            </div>
            <div className="flex items-center">
                <div>
                    <FontAwesomeIcon icon={faSearch} className="mr-2 text-white" />
                </div>
                <div className="grid grid-cols-3 gap-2">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="p-2 text-gray-800 bg-white rounded"
                    />
                    <button className="p-2 text-white bg-blue-500 rounded">Search</button>
                </div>
                <div>
                    <FontAwesomeIcon icon={faUser} className="ml-2 text-2xl text-white cursor-pointer" />
                </div>
            </div>
        </nav>
    );
}

function TwoDivs() {
  const redTextStyle = {
      fontSize: '30px',
      textAlign: 'center',
  };

  const redTextStyle1 = {
      fontSize: '17px',
      textAlign: 'center',
  };

  const redTextStyle2 = {
      fontSize: '17px',
      textAlign: 'center',
  };

  return (
      <div className="grid grid-cols-3 gap-4">
          <div className="bg-blue-500 h-[1000px] w-[787px]">
              <div className="bg-red-500 h-[600px] relative border-b-4 border-black">
                  <div style={redTextStyle}>
                      <br /> <br />
                      Vos itinéraires<br /> <br />
                  </div>
                  <div style={redTextStyle1}>
                      Retrouvez ci-joint vos différentes<br />
                  </div>
                  <div style={redTextStyle2}>
                      courses de la semaine
                  </div>
              </div>
              <div className="bg-green-500 h-[150px] grid grid-cols-1 gap-4">
                  <div className="text-center">
                      <input
                          type="text"
                          placeholder="Entrez la position GPS 1 (latitude, longitude)"
                          className="p-2 text-gray-800 bg-white rounded"
                      />
                  </div>
                  <div className="text-center">
                      <input
                          type="text"
                          placeholder="Entrez la position GPS 2 (latitude, longitude)"
                          className="p-2 text-gray-800 bg-white rounded"
                      />
                  </div>
              </div>
              <div className="bg-yellow-500 h-[200px]">
              </div>
              <div className="bg-yellow-500 h-[1000px]">
              </div>
          </div>
      </div>
  );
}

function App() {
  return (
      <div className="">
          <TwoDivs />
      </div>
  );
}

function MAP_TWO() {
  return (
      <div className="h-screen">
          <NavBar />
          <div>
              <App />
          </div>
      </div>
  );
}

export default MAP_TWO;