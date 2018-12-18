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
import { ConnectedRegisterForm } from './_components/Forms/Register/Register';
import { LoginForm } from './_components/Forms/Login/Login';
import { WishListCart } from './_components/Header/WishListCart';
import { Characteristics } from './_components/Header/Characteristics';



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
                    <WishListCart/>
                    < Characteristics/>
                            <div>
                                <Route path="/login" component={LoginForm}/>
                                <Route path="/register" component={ConnectedRegisterForm}/>
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