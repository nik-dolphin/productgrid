/**
 * Developed By: Bharat Jograna
 * Created on: 22 July 2022
 * Class Componen: index Component
 */

//Start...
import React, { Component } from "react";
import { connect } from "react-redux";
import { getDataList } from "../actions";
import CardWdgt from "./widgets/CardWidget";
import PaginationWdgt from "./widgets/ListPaginationWidget";

class Appwidget extends Component {
  constructor(props) {
    super(props);
    this.state = {
      List: [],
      PageIndex: 1,
      ItemsPerPage: 6,
    };
  }

  componentWillMount() {
		
    // this.props.getDataList({
    //   APIURL: "https://60ff90a3bca46600171cf36d.mockapi.io/api/products",
    // });
    // console.log('_dd');
  }

  componentDidMount() {
    this.setState({ List: this.props.List });
  }

  handleClickPagination = (id) => {
    this.setState({ PageIndex: Number(id) });
  };

  render() {
    // Logic for displaying current Pagination Data
    const indexOfLastTodo = this.state.PageIndex * this.state.ItemsPerPage;
    const indexOfFirstTodo = indexOfLastTodo - this.state.ItemsPerPage;
    const ItemsToShow = this.state.List.slice(
      indexOfFirstTodo,
      indexOfLastTodo
    );

    return (
      <div className="row m-0">
        {ItemsToShow.map((data) => (
          <div className="col-4 p-3">
            <CardWdgt className="col-4" Data={data} />
          </div>
        ))}
        <PaginationWdgt
          DataItems={this.state.List.length}
          ItemsPerPage={this.state.ItemsPerPage}
          pageIndex={this.state.PageIndex}
          handleClick={this.handleClickPagination}
        />
      </div>
    );
  }
}

//Map state to props
const mapStateToProps = ({ CommonRdcr }) => {
  const response = {
    List: CommonRdcr.List,
  };
  return response;
};

export default connect(mapStateToProps, {
  getDataList,
})(Appwidget);

//End.
