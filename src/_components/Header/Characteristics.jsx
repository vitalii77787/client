import React from 'react';
import '../../Style/Header/icons_styles.css';

export class Characteristics extends React.Component {
    render() {
        return (
            <div class="characteristics">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-3 col-md-6 char_col">
                            <div class="char_item d-flex flex-column align-items-center justify-content-center">
                                <div class="char_icon" style={{marginBottom:'20px'}}><i className='icon-pbr_main'></i></div>
                                <div class="char_content">
                                    <div class="char_title">Norisk shoping</div>
                                    <div class="char_subtitle"></div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 char_col">
                            <div class="char_item d-flex flex-column align-items-center justify-content-center">
                                <div class="char_icon" style={{marginBottom:'20px'}}><i className='icon-grad_medal'></i></div>
                                <div class="char_content">
                                    <div class="char_title">Trusted salers</div>
                                    <div class="char_subtitle"></div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 char_col">

                            <div class="char_item d-flex flex-column align-items-center justify-content-center">
                                <div class="char_icon" style={{marginBottom:'20px'}}><i className='icon-grad_protection'></i></div>
                                <div class="char_content">
                                    <div class="char_title">Client Protecting</div>
                                    <div class="char_subtitle"></div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 char_col">
                            <div class="char_item d-flex flex-column align-items-center justify-content-center">
                                <div class="char_icon" style={{marginBottom:'20px'}}><i className='icon-grad_label_star'></i></div>
                                <div class="char_content">
                                    <div class="char_title">Best prices</div>
                                    <div class="char_subtitle"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr/>
                </div>
            </div>
        )
    }
}