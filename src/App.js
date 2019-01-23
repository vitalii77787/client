import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { history } from './_helpers/history';
import { FooterContainer } from './_components/Footer';
import { store } from './_helpers/store';
import { getAllCategories } from './_actions/categories.actions';
import { CategoriesPage } from './_components/Category';
import { RoutedProduct } from './_components/Product';
import { HeaderContainer } from './_components/Header';
import { ConnectedRegisterForm } from './_components/Forms/Register/Register';
import { ConnectedLoginForm } from './_components/Forms/Login/Login';
import { WishListCart } from './_components/Header/WishListCart';
import { Index } from './_components/IndexPage/Index';
import { CartContainer} from './_components/CartComponent/CartComponent';
import { ConnectedWishContainer } from './_components/WishComponent/WishComponent';
import { OrderFormContainer } from './_components/Forms/Order/Order';



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
                    <HeaderContainer />
                    <WishListCart />
                    <Switch>
                        <Route exact path="/" component={Index} />
                        {!this.props.isLogin &&
                            <Route path="/login" component={ConnectedLoginForm} />
                        }
                        {!this.props.isLogin &&
                            <Route path="/register" component={ConnectedRegisterForm} />
                        }
                        <Route path="/categories/:categoryId?" component={CategoriesPage} />
                        <Route path="/product/:productId" component={RoutedProduct} />
                        <Route path="/cart" component={CartContainer} />
                        <Route path="/wish" component={ConnectedWishContainer} />
                        {!this.props.isValidOrder && <Route path="/order" component={OrderFormContainer}/>}
                    </Switch>

                    <FooterContainer />
                </div>
            </Router>
        );
    }
}

function mapStateToProps(state) {
    const { alert } = state;
    return {
        isLogin: state.authentication.logginIn,
        isValidOrder: state.order.orderLine.isValid
    };
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App }; 