/**
 * Developed By: Bharat Jograna
 * Created on: 22 July 2022
 * Function Componen: Card Widget to show any data of project
*/
import { Card } from 'react-bootstrap';

const UniversalDataShowTable = ({ Data = [] }) => {

	return(
		<Card className="product-card">
		  <Card.Img variant="top" src={Data.image} />
		  <Card.Body>
			<Card.Title>Name : {" " + Data.name}</Card.Title>
			<Card.Text>
			price : {" " + Data.price}
			</Card.Text>
		  </Card.Body>
		</Card>
  );
}

export default UniversalDataShowTable;
