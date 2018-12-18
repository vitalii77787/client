import React from 'react'
import { ConnectedFilterViewContainer } from './FilterViewContainer';

export const FiltersList = ({ filters }) => {
    const filterElements = filters.map(filter =>
        <li key={filter.id} >
            <ConnectedFilterViewContainer filter={filter} />
        </li>
    )
    return (
        <ul className="brands_list">
      {filterElements}
      </ul>
    )
}