import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import {Layout} from '../menu/Layout'
export const FiltreProduits = () =>{
    return(
        <Fragment>
            <Layout />
            <section class="breadcrumbs-wrapper pt-50 pb-50 bg-primary-4">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="breadcrumbs-style breadcrumbs-style-1 d-md-flex justify-content-between align-items-center">
                                <div class="breadcrumb-left">
                                    <ol class="breadcrumb">
                                        <li class="breadcrumb-item"><Link to="/"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Domicile</font></font></Link></li>
                                        <li class="breadcrumb-item active" aria-current="page"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Catégorie</font></font></li>
                                    </ol>
                                </div>
                                <div class="breadcrumb-right">
                                    <h5 class="heading-5 font-weight-500"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Catégorie</font></font></h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="category-wrapper pt-50">
                <div class="container">
                <div class="row">
                <div class="col-lg-4">
                <div class="filter-style-1 mt-0">
                    <div class="filter-title">
                        <h4 class="title"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Filtre</font></font></h4>
                    </div>
                    {/* <div class="filter-btn">
                        <a class="main-btn primary-btn" href="javascript:void(0)"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Réinitialiser</font></font></a>
                    </div> */}
                </div>
                <div class="filter-style-2">
                <div class="filter-title">
                    <a class="title" data-toggle="collapse" href="#pricingOne" role="button" aria-expanded="false"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>
                    Gamme de prix
                    </font></font></a>
                </div>
                <div class="collapse show" id="pricingOne">
                <div class="price-range">
                    <div class="price-amount">
                        <div class="amount-input">
                            <label><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Prix ​​minimum</font></font></label>
                            <input type="text" id="minAmount" />
                        </div>
                            <div class="amount-input">
                                <label><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Prix ​​maximum</font></font></label>
                                <input type="text" id="maxAmount" />
                            </div>
                            </div>
                            <div id="slider-range" class="slider-range ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content">
                                <div class="ui-slider-range ui-corner-all ui-widget-header" style={{left: '15%', width: '45%'}}></div><span tabindex="0" class="ui-slider-handle ui-corner-all ui-state-default" style={{left: '15%'}}></span><span tabindex="0" class="ui-slider-handle ui-corner-all ui-state-default" style={{left: '60%'}}></span></div>
                        </div>
                    </div>
                </div>
                <div class="filter-style-3">
                <div class="filter-title">
                    <a class="title" data-toggle="collapse" href="#type" role="button" aria-expanded="false"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>
                    Taper
                    </font></font></a>
                </div>
                <div class="collapse show" id="type">
                <div class="filter-type">
                    <ul>
                        <li>
                            <div class="type-check">
                                <input type="checkbox" id="type-1" />
                                <label for="type-1"><span></span><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}> Autonome</font></font></label>
                            </div>
                        </li>
                        <li>
                            <div class="type-check">
                                <input type="checkbox" id="type-2" />
                                <label for="type-2"><span></span><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}> Mobile</font></font></label>
                            </div>
                        </li>
                        <li>
                            <div class="type-check">
                                <input type="checkbox" id="type-3" />
                                <label for="type-3"><span></span><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}> Attaché</font></font></label>
                            </div>
                        </li>
                    </ul>
                </div>
                </div>
                </div>
                <div class="filter-style-4">
                <div class="filter-title">
                <a class="title" data-toggle="collapse" href="#size" role="button" aria-expanded="false"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>
                Sélectionnez la taille
                </font></font></a>
                </div>
                <div class="collapse show" id="size">
                <div class="filter-size">
                <ul>
                <li><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>XS</font></font></li>
                <li><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>S</font></font></li>
                <li class="active"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>M</font></font></li>
                <li><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>LG</font></font></li>
                <li><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>XL</font></font></li>
                <li><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>XXL</font></font></li>
                </ul>
                </div>
                </div>
                </div>
                <div class="filter-style-7">
                <div class="filter-title">
                <a class="title" data-toggle="collapse" href="#color" role="button" aria-expanded="false"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>
                Sélectionnez la taille
                </font></font></a>
                </div>
                <div class="collapse show" id="color">
                <div class="filter-color">
                <ul>
                <li>
                <div class="color-check">
                <p><span style={{backgroundColor: '#00C2FE'}}></span> <strong><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Bleu</font></font></strong></p>
                <input type="checkbox" id="color-1" />
                <label for="color-1"><span></span></label>
                </div>
                </li>
                <li>
                <div class="color-check">
                <p><span style={{backgroundColor: '#E14C7B'}}></span> <strong><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>rouge</font></font></strong></p>
                <input type="checkbox" id="color-2" />
                <label for="color-2"><span></span></label>
                </div>
                </li>
                <li>
                <div class="color-check">
                <p><span style={{backgroundColor: '#7CB637'}}></span> <strong><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Vert</font></font></strong></p>
                <input type="checkbox" id="color-3" />
                <label for="color-3"><span></span></label>
                </div>
                </li>
                <li>
                <div class="color-check">
                <p><span style={{backgroundColor: '#161359'}}></span> <strong><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Sombre</font></font></strong></p>
                <input type="checkbox" id="color-4" />
                <label for="color-4"><span></span></label>
                </div>
                </li>
                </ul>
                </div>
                </div>
                </div>
                </div>
                <div class="col-lg-8">
                <div class="row">
                <div class="col-lg-12">
                <div class="breadcrumbs-style breadcrumbs-style-1 d-md-flex justify-content-between align-items-center">
                <div class="breadcrumb-left">
                <p><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Affichage des résultats 01-09 sur 17</font></font></p>
                </div>
                <div class="breadcrumb-right">
                <ul class="breadcrumb-list-grid nav nav-tabs border-0" id="myTab" role="tablist">
                <li class="nav-item" role="presentation">
                <a id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">
                <i class="mdi mdi-view-list"></i>
                </a>
                </li>
                <li class="nav-item" role="presentation">
                <a class="active" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">
                <i class="mdi mdi-view-grid"></i>
                </a>
                </li>
                </ul>
                </div>
                </div>
                <div class="tab-content" id="myTabContent">
                <div class="tab-pane fade" id="home" role="tabpanel" aria-labelledby="home-tab">
                <div class="row">
                <div class="col-lg-12">
                <div class="product-style-7 mt-30">
                <div class="product-image">
                <div class="product-active slick-initialized slick-slider"><span class="prev slick-arrow slick-disabled" aria-disabled="true"><i class="mdi mdi-chevron-left"></i></span>
                <div class="slick-list draggable"><div class="slick-track" style={{opacity: 1, width: '480px', transform: 'translate3d(0px, 0px, 0px)'}}>
                    <div class="product-item active slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" style={{width: '240px'}} tabindex="0">
                <img src="assets/images/product-4/product-1.jpg" alt="produit" />
                </div><div class="product-item slick-slide" data-slick-index="1" aria-hidden="true" style={{width: '240px'}} tabindex="-1">
                <img src="assets/images/product-4/product-2.jpg" alt="produit" />
                </div></div></div>

                <span class="next slick-arrow" aria-disabled="false"><i class="mdi mdi-chevron-right"></i></span></div>
                </div>
                <div class="product-content">
                <ul class="product-meta">
                <li>
                <a class="add-wishlist" href="javascript:void(0)">
                <i class="mdi mdi-heart-outline"></i><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>
                Ajouter aux Favoris
                </font></font></a>
                </li>
                <li>
                <span><i class="mdi mdi-star"></i><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}> 4,5 / 5</font></font></span>
                </li>
                </ul>
                <h4 class="title"><a href="product-details-page.html"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Metro 38 Date</font></font></a></h4>
                <p><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Référence 1102</font></font></p>
                <span class="price"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>399 $</font></font></span>
                <a href="javascript:void(0)" class="main-btn primary-btn">
                <img src="assets/images/icon-svg/cart-4.svg" alt="" /><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>
                Ajouter au chariot
                </font></font></a>
                </div>
                </div>
                </div>
                <div class="col-lg-12">
                <div class="product-style-7 mt-30">
                <div class="product-image">
                <div class="product-active slick-initialized slick-slider"><span class="prev slick-arrow slick-disabled" aria-disabled="true"><i class="mdi mdi-chevron-left"></i></span>
                <div class="slick-list draggable"><div class="slick-track" style={{opacity: 1, width: '480px', transform: 'translate3d(0px, 0px, 0px)'}}>
                <div class="product-item active slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" style={{width: '240px'}} tabindex="0">
                <img src="assets/images/product-4/product-3.jpg" alt="produit" />
                </div>
                <div class="product-item slick-slide" data-slick-index="1" aria-hidden="true" style={{width: '240px'}} tabindex="-1">
                <img src="assets/images/product-4/product-4.jpg" alt="produit" />
                </div>
                </div>
                </div>

                <span class="next slick-arrow" aria-disabled="false"><i class="mdi mdi-chevron-right"></i></span></div>
                </div>
                <div class="product-content">
                <ul class="product-meta">
                <li>
                <a class="add-wishlist" href="javascript:void(0)">
                <i class="mdi mdi-heart-outline"></i><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>
                Ajouter aux Favoris
                </font></font></a>
                </li>
                <li>
                <span><i class="mdi mdi-star"></i><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}> 4,5 / 5</font></font></span>
                </li>
                </ul>
                <h4 class="title"><a href="product-details-page.html"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Chaussure d'homme</font></font></a></h4>
                <p><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Référence 1102</font></font></p>
                <span class="price"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>399 $</font></font></span>
                <a href="javascript:void(0)" class="main-btn primary-btn">
                <img src="assets/images/icon-svg/cart-4.svg" alt="" /><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>
                Ajouter au chariot
                </font></font></a>
                </div>
                </div>
                </div>
                <div class="col-lg-12">
                <div class="product-style-7 mt-30">
                <div class="product-image">
                <div class="product-active slick-initialized slick-slider"><span class="prev slick-arrow slick-disabled" aria-disabled="true"><i class="mdi mdi-chevron-left"></i></span>
                <div class="slick-list draggable"><div class="slick-track" style={{opacity: 1, width: '480px', transform: 'translate3d(0px, 0px, 0px)'}}>
                <div class="product-item active slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" style={{width: '240px'}} tabindex="0">
                <img src="assets/images/product-4/product-5.jpg" alt="produit" />
                </div><div class="product-item slick-slide" data-slick-index="1" aria-hidden="true" style={{width: '240px'}} tabindex="-1">
                <img src="assets/images/product-4/product-6.jpg" alt="produit" />
                </div>
                </div>
                </div>

                <span class="next slick-arrow" aria-disabled="false"><i class="mdi mdi-chevron-right"></i></span>
                </div>
                </div>
                <div class="product-content">
                <ul class="product-meta">
                <li>
                <a class="add-wishlist" href="javascript:void(0)">
                <i class="mdi mdi-heart-outline"></i><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>
                Ajouter aux Favoris
                </font></font></a>
                </li>
                <li>
                <span><i class="mdi mdi-star"></i><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}> 4,5 / 5</font></font></span>
                </li>
                </ul>
                <h4 class="title"><a href="product-details-page.html"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>T-shirt 23</font></font></a></h4>
                <p><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Référence 1102</font></font></p>
                <span class="price"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>399 $</font></font></span>
                <a href="javascript:void(0)" class="main-btn primary-btn">
                <img src="assets/images/icon-svg/cart-4.svg" alt="" /><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>
                Ajouter au chariot
                </font></font></a>
                </div>
                </div>
                </div>
                </div>
                </div>
                <div class="tab-pane fade show active" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                <div class="row">
                <div class="col-lg-6 col-sm-6">
                <div class="product-style-1 mt-30">
                <div class="product-image">
                <div class="product-active slick-initialized slick-slider"><span class="prev slick-arrow slick-disabled" aria-disabled="true"><i class="mdi mdi-chevron-left"></i></span>
                <div class="slick-list draggable"><div class="slick-track" style={{opacity: 1, width: '828px', transform: 'translate3d(0px, 0px, 0px)'}}>
                    <div class="product-item active slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" style={{width: '414px'}} tabindex="0">
                <img src="assets/images/product-1/product-1.jpg" alt="produit" />
                </div><div class="product-item slick-slide" data-slick-index="1" aria-hidden="true" style={{width: '414px'}} tabindex="-1">
                <img src="assets/images/product-1/product-2.jpg" alt="produit" />
                </div>
                </div>
                </div>

                <span class="next slick-arrow" aria-disabled="false"><i class="mdi mdi-chevron-right"></i></span></div>
                <a class="add-wishlist" href="javascript:void(0)">
                <i class="mdi mdi-heart-outline"></i>
                </a>
                </div>
                <div class="product-content text-center">
                <h4 class="title"><a href="product-details-page.html"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Metro 38 Date</font></font></a></h4>
                <p><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Référence 1102</font></font></p>
                <a href="javascript:void(0)" class="main-btn secondary-1-btn">
                <img src="assets/images/icon-svg/cart-7.svg" alt="" /><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>
                399 $
                </font></font></a>
                </div>
                </div>
                </div>
                <div class="col-lg-6 col-sm-6">
                <div class="product-style-1 mt-30">
                <div class="product-image">
                <div class="product-active slick-initialized slick-slider"><span class="prev slick-arrow slick-disabled" aria-disabled="true"><i class="mdi mdi-chevron-left"></i></span>
                <div class="slick-list draggable"><div class="slick-track" style={{opacity: 1, width: '828px', transform: 'translate3d(0px, 0px, 0px)'}}>
                <div class="product-item active slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" style={{width: '414px'}} tabindex="0">
                <img src="assets/images/product-1/product-5.jpg" alt="produit" />
                </div><div class="product-item slick-slide" data-slick-index="1" aria-hidden="true" style={{width: '414px'}} tabindex="-1">
                <img src="assets/images/product-1/product-6.jpg" alt="produit" />
                </div>
                </div>
                </div>

                <span class="next slick-arrow" aria-disabled="false"><i class="mdi mdi-chevron-right"></i></span></div>
                <a class="add-wishlist" href="javascript:void(0)">
                <i class="mdi mdi-heart-outline"></i>
                </a>
                </div>
                <div class="product-content text-center">
                <h4 class="title"><a href="product-details-page.html"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Chaussure de dame</font></font></a></h4>
                <p><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Référence 1102</font></font></p>
                <a href="javascript:void(0)" class="main-btn secondary-1-btn">
                <img src="assets/images/icon-svg/cart-7.svg" alt="" /><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>
                399 $
                </font></font></a>
                </div>
                </div>
                </div>
                <div class="col-lg-6 col-sm-6">
                <div class="product-style-1 mt-30">
                <div class="product-image">
                <div class="product-active slick-initialized slick-slider"><span class="prev slick-arrow slick-disabled" aria-disabled="true"><i class="mdi mdi-chevron-left"></i></span>
                <div class="slick-list draggable"><div class="slick-track" style={{opacity: 1, width: '828px', transform: 'translate3d(0px, 0px, 0px)'}}>
                <div class="product-item active slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" style={{width: '414px'}} tabindex="0">
                <img src="assets/images/product-1/product-3.jpg" alt="produit" />
                </div><div class="product-item slick-slide" data-slick-index="1" aria-hidden="true" style={{width: '414px'}} tabindex="-1">
                <img src="assets/images/product-1/product-4.jpg" alt="produit" />
                </div>
                </div>
                </div>

                <span class="next slick-arrow" aria-disabled="false"><i class="mdi mdi-chevron-right"></i></span></div>
                <a class="add-wishlist" href="javascript:void(0)">
                <i class="mdi mdi-heart-outline"></i>
                </a>
                </div>
                <div class="product-content text-center">
                <h4 class="title"><a href="product-details-page.html"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Casio 380 Date</font></font></a></h4>
                <p><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Référence 1102</font></font></p>
                <a href="javascript:void(0)" class="main-btn secondary-1-btn">
                <img src="assets/images/icon-svg/cart-7.svg" alt="" /><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>
                399 $
                </font></font></a>
                </div>
                </div>
                </div>
                <div class="col-lg-6 col-sm-6">
                <div class="product-style-1 mt-30">
                <div class="product-image">
                <div class="product-active slick-initialized slick-slider"><span class="prev slick-arrow slick-disabled" aria-disabled="true"><i class="mdi mdi-chevron-left"></i></span>
                <div class="slick-list draggable">
                    <div class="slick-track" style={{opacity: '1', width: '828px', transform: 'translate3d(0px, 0px, 0px)'}}>
                    <div class="product-item active slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" style={{width: '414px'}} tabindex="0">
                <img src="assets/images/product-1/product-7.jpg" alt="produit" />
                </div><div class="product-item slick-slide" data-slick-index="1" aria-hidden="true" style={{width: '414px'}} tabindex="-1">
                <img src="assets/images/product-1/product-8.jpg" alt="produit" />
                </div></div></div>

                <span class="next slick-arrow" aria-disabled="false"><i class="mdi mdi-chevron-right"></i></span></div>
                <a class="add-wishlist" href="javascript:void(0)">
                <i class="mdi mdi-heart-outline"></i>
                </a>
                </div>
                <div class="product-content text-center">
                <h4 class="title"><a href="product-details-page.html"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Chaussure d'homme</font></font></a></h4>
                <p><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Référence 1102</font></font></p>
                <a href="javascript:void(0)" class="main-btn secondary-1-btn">
                <img src="assets/images/icon-svg/cart-7.svg" alt="" /><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>
                399 $
                </font></font></a>
                </div>
                </div>
                </div>
                </div>
                </div>
                </div>
                </div>
                </div>
                <div class="row">
                <div class="col-lg-12">
                <div class="pagination-wrapper pt-70">
                <ul class="d-flex justify-content-center">
                <li>
                <a href="javascript:void(0)"><i class="lni lni-chevron-left"></i></a>
                </li>
                <li>
                <a href="javascript:void(0)" class="active"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>1</font></font></a>
                </li>
                <li>
                <a href="javascript:void(0)"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>2</font></font></a>
                </li>
                <li>
                <a href="javascript:void(0)"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>3</font></font></a>
                </li>
                <li>
                <a href="javascript:void(0)"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>4</font></font></a>
                </li>
                <li>
                <a href="javascript:void(0)"><i class="lni lni-chevron-right"></i></a>
                </li>
                </ul>
                </div>
                </div>
                </div>
                </div>
                </div>
                </div>
            </section>
            <section class="clients-logo-section pt-70 pb-70">
                <div class="container">
                    <div class="row client-logo-active slick-initialized slick-slider">
                        <div class="slick-list draggable">
                            <div class="slick-track" style={{opacity: 1, width: '1288p', transform:' translate3d(0px, 0px, 0px'}}>
                                <div class="col-lg-3 slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" style={{width: '322px'}} tabindex="0">
                                    <div class="single-logo-wrapper">
                                        <img src="assets/images/client-logo/uideck-logo.svg" alt="" />
                                    </div>
                                </div>
                                <div class="col-lg-3 slick-slide slick-active" data-slick-index="1" aria-hidden="false" style={{width: '322px'}} tabindex="0">
                                    <div class="single-logo-wrapper">
                                        <img src="assets/images/client-logo/graygrids-logo.svg" alt="" />
                                    </div>
                                </div>
                                <div class="col-lg-3 slick-slide slick-active" data-slick-index="2" aria-hidden="false" style={{width: '322px'}} tabindex="0">
                                    <div class="single-logo-wrapper">
                                        <img src="assets/images/client-logo/lineicons-logo.svg" alt="" />
                                    </div>
                                </div>
                                <div class="col-lg-3 slick-slide slick-active" data-slick-index="3" aria-hidden="false" style={{width: '322px'}} tabindex="0">
                                    <div class="single-logo-wrapper">
                                        <img src="assets/images/client-logo/pagebulb-logo.svg" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}