/**
 * Developed By: Bharat Jograna
 * Created on: 17 July 2022
 * Function Componen: Table Widget to show any data of project
*/
import Table from 'react-bootstrap/Table';

const UniversalDataShowTable = ({ Data = [] }) => {

	const GetObjectKey = Object.keys(Data[0]); // to get first oject of data
	let TheadItems = [<th key={GetObjectKey.length}>#</th>]; // to set table head 
	let TableColumn = []; // save table column name for loop
	
	// loop to get column names and also set table head
	for (let number = 0; number < GetObjectKey.length; number++) {
		TheadItems.push(<th key={number} >{GetObjectKey[number]}</th>);
		TableColumn.push(GetObjectKey[number]);
	}

	return(
		<div className="p-3">
			<Table bordered hover >
			  <thead>
				<tr>{TheadItems}</tr>
			  </thead>
			  <tbody>
			  {Data.map((DataItem, keys)=>(
				<tr key={keys} >
					<td key={keys}>{keys+1}</td>
					{TableColumn.map((ColumnName,keys)=>
						<td key={keys+1}>{DataItem[ColumnName]}</td>
					)}
				</tr>
				))}
			  </tbody>
			</Table>
		</div>
  );
}

export default UniversalDataShowTable;
