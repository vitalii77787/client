import React, { Component } from "react";
import { connect } from 'react-redux';
import { Pagination } from 'antd';
import { onPageChange, onSizeChange } from '../../_actions/filters.actions';


 
class PaginationComponent extends Component {

   onShowSizeChange=(current, pageSize)=> {
     this.props.sizeChange(current, pageSize);
  }

   onChange=(pageNumber)=> {
    console.log('Page: ', pageNumber);
    this.props.pageChange(pageNumber);
  }

  render() {
    const { pageInfo } = this.props;
    if(pageInfo.totalItems!==0)
    {
    return (
      <div>
        <Pagination showSizeChanger onShowSizeChange={this.onShowSizeChange} defaultCurrent={pageInfo.currentPage} total={pageInfo.totalItems} defaultPageSize={pageInfo.itemsPerPage} onChange={this.onChange} />
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
      return{
        sizeChange:(current, pageSize)=>dispatch(onSizeChange(current, pageSize)),
        pageChange:(pageNumber)=>dispatch(onPageChange(pageNumber))
      }
    }
)(PaginationComponent);