import React from 'react';
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { history } from './_helpers/history';
import { FooterContainer } from './_components/Footer';
import { store } from './_helpers/store';
import { getAllCategories } from './_actions/categories.actions';
import { CategoriesPage } from './_components/Category';


class App extends React.Component {
    constructor(props) {
        super(props);
        const { dispatch } = this.props;
    }

    componentDidMount() {
        store.dispatch(getAllCategories());
    }

    render() {
        const { alert } = this.props;
        return (
            <div className="jumbotron">
                <Router history={history}>
                    <div className="container">
                        <div className="col-sm-8 col-sm-offset-2">
                            <div>
                                <Route path="/categories/:categoryId?" component={CategoriesPage} />
                                {/* <Route path="/product/:productId" component={ProductContainer} /> */}
                            </div>
                        </div>

                        <FooterContainer />
                    </div>
                </Router>
            </div>
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