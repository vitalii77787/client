import React, { Component } from "react";
import { connect } from 'react-redux';
import { Pagination } from 'antd';


 
class PaginationComponent extends Component {

   onShowSizeChange(current, pageSize) {
    console.log(current, pageSize);
  }
  render() {
    const { pageInfo } = this.props;
    if(pageInfo.totalItems!==0)
    {
    return (
      <div>
        <Pagination showSizeChanger onShowSizeChange={this.onShowSizeChange} defaultCurrent={pageInfo.currentPage} total={pageInfo.totalItems} defaultPageSize={pageInfo.itemsPerPage} />
      </div>
    );
    }
    else{
      return(<div>Loading...</div>)
    }
  }
}

export const ConnectedPaginationComponent = connect(
    (state) => {
        return {
           pageInfo: state.filters.pageInfo
        };
    },
    (dispatch) => {
    }
)(PaginationComponent);