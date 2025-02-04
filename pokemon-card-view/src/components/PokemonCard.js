import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';



const PokemonCard = ({ name, image, types, type, number, addToSquad, removeFromSquad, inSquad }) => {
    const handleButtonClick = () => {
        if (inSquad) {
            removeFromSquad({ name, image, types, type, number });
        } else {
            addToSquad({ name, image, types, type, number });
        }
    };

    return (
        <Col md={4} className="mb-4">
            <Card className={type} style={{ borderWidth: '2px', borderColor: 'black' }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{name} #{number}</Card.Title>
                    <Card.Text>
                        Type: {types.join(', ')}
                    </Card.Text>
                    <button id= "squad-button" className="squad-button btn btn-secondary" onClick={handleButtonClick}>
                        {inSquad ? 'Remove from Squad' : 'Add to Squad'}
                    </button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default PokemonCard;