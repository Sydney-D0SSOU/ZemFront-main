import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';

const customCardStyle = {
  backgroundColor: 'black',
  color: 'white',
  fontWeight: 'bold',
};

const customButtonStyleOne = {
  backgroundColor: 'rgb(254,136,62)',
  color: 'white',
  border: '1px solid white',
};

const customButtonStyleTwo = {
  backgroundColor: 'rgb(3,33,71)',
  color: 'white',
  border: '1px solid white',
};

function Card1() {
  
  return (
    <div className="mt-20 d-flex justify-content-center">
      <CardGroup>
        <Card style={customCardStyle} className="mb-2 ">
          <Card.Header>Effectuez des courses ou des livraisons</Card.Header>
          <Card.Body>
            <Card.Title>
              <Link to="/DriverSignup" style={{ textDecoration: 'none' }}>
                <Button
                  className="ml-2 text-white"
                  style={customButtonStyleOne}
                >
                  Devenir chauffeur Zem 2.0
                </Button>
              </Link>
            </Card.Title>
          </Card.Body>
        </Card>
        <Card style={customCardStyle} className="mb-2">
          <Card.Header>Commandez une course</Card.Header>
          <Card.Body>
            <Card.Title>
              <Link to="/UserSignup" style={{ textDecoration: 'none' }}>
                <Button
                  variant="info"
                  className="mt-4 ml-2 text-white"
                  style={customButtonStyleTwo}
                >
                  Déplacez-vous avec Zem 2.0
                </Button>
              </Link>
            </Card.Title>
          </Card.Body>
        </Card>
      </CardGroup>
    </div>
  );
}

export default Card1;
