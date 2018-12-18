import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addFilterId, removeFilterId } from '../../_actions/filters.actions';


export class FilterViewContainer extends Component {
    changeValue = (event, id) => {
      event.target.checked?this.props.addFilterId(id):this.props.removeFilterId(id);
    };

    render() {
        const { filter } = this.props;
        return (
            <div class="checkbox">
                <label><input type="checkbox" value="false" onChange={(e)=>this.changeValue(e,filter.id)}/>  {filter.name}</label>
            </div>
        )
    }
}
export const ConnectedFilterViewContainer = connect(
    (store) => { return {}; },
    (dispatch) => {
        return {
            addFilterId:   (id)=>dispatch(addFilterId(id)),
            removeFilterId: (id) => dispatch(removeFilterId(id))

        }
    }
)(FilterViewContainer);