import React from 'react';
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { history } from './_helpers/history';
import { FooterContainer } from './_components/Footer';
import { store } from './_helpers/store';
import { getAllCategories } from './_actions/categories.actions';
import { CategoriesPage } from './_components/Category';
import { RoutedProduct } from './_components/Product';
import { HeaderContainer } from './_components/Header';


class App extends React.Component {
    constructor(props) {
        super(props);
        const { dispatch } = this.props;
    }

    componentDidMount() {
        store.dispatch(getAllCategories());
    }

    render() {
        return (
                <Router history={history}>
                <div>
                    <HeaderContainer/>
                            <div>
                                <Route path="/categories/:categoryId?" component={CategoriesPage} />
                                 <Route path="/product/:productId" component={RoutedProduct} /> 
                            </div>

                        <FooterContainer />
                        </div>
                </Router>
        );
    }
}

function mapStateToProps(state) {
    const { alert } = state;
    return {
        alert
    };
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App }; 