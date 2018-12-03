import React from 'react';

export class Product extends React.Component {
    componentDidMount() {
        const productId = this.props.match.params.productId;
        // ToDo : implement
        store.dispatch(getProductById(productId))
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.productId !== prevProps.match.params.productId) {
            const productId = this.props.match.params.productId;
            // ToDo : implement
            store.dispatch(getProductById(productId))
        }
    }

    render() {
        return (
            <div>
                <RoutedCategoryListContainer />
            </div>
        );
    }
}