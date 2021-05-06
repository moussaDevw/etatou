import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

export const ProduitDetails = () => {
    return(
        <Fragment>
            <section class="breadcrumbs-wrapper pt-50 pb-50 bg-primary-4">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="breadcrumbs-style breadcrumbs-style-1 d-md-flex justify-content-between align-items-center">
                            <div class="breadcrumb-left">
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item"><Link to="/">Acceuil</Link></li>
                                    <li class="breadcrumb-item active" aria-current="page"></li>
                                </ol>
                            </div>
                            <div class="breadcrumb-right">
                                <h5 class="heading-5 font-weight-500">Détails du produit</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </section>
            <section class="product-details-wrapper pt-50 pb-100">
            <div class="container">
                <div class="product-details-style-1">
                    <div class="row flex-lg-row-reverse align-items-center">
                        <div class="col-lg-6">
                            <div class="product-details-image mt-50">
                                <div class="product-image">
                                    <div class="product-image-active-1">
                                        <div class="single-image">
                                            <img src="assets/images/product-details-1/product-1.jpg" alt="" />
                                        </div>
                                        <div class="single-image">
                                            <img src="assets/images/product-details-1/product-2.jpg" alt="" />
                                        </div>
                                        <div class="single-image">
                                            <img src="assets/images/product-details-1/product-3.jpg" alt="" />
                                        </div>
                                        <div class="single-image">
                                            <img src="assets/images/product-details-1/product-4.jpg" alt="" />
                                        </div>
                                        <div class="single-image">
                                            <img src="assets/images/product-details-1/product-5.jpg" alt="" />
                                        </div>
                                        <div class="single-image">
                                            <img src="assets/images/product-details-1/product-3.jpg" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div class="product-thumb-image">
                                    <div class="product-thumb-image-active-1">
                                        <div class="single-thumb">
                                            <img src="assets/images/product-details-1/thunb-1.jpg" alt="" />
                                        </div>
                                        <div class="single-thumb">
                                            <img src="assets/images/product-details-1/thunb-2.jpg" alt="" />
                                        </div>
                                        <div class="single-thumb">
                                            <img src="assets/images/product-details-1/thunb-3.jpg" alt="" />
                                        </div>
                                        <div class="single-thumb">
                                            <img src="assets/images/product-details-1/thunb-4.jpg" alt="" />
                                        </div>
                                        <div class="single-thumb">
                                            <img src="assets/images/product-details-1/thunb-5.jpg" alt="" />
                                        </div>
                                        <div class="single-thumb">
                                            <img src="assets/images/product-details-1/thunb-3.jpg" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="product-details-content mt-45">
                                <p class="sub-title">All-In-One VR</p>
                                <h2 class="title">Oculus VR</h2>
        
                                <div class="product-items flex-wrap">
                                    <h6 class="item-title">Select Your Oculus: </h6>
                                    <div class="items-wrapper">
                                        <div class="single-item active">
                                            <div class="items-image">
                                                <img src="assets/images/product-details-1/product-items-1.jpg" alt="product" />
                                            </div>
                                            <p class="text">Oculus Go</p>
                                        </div>
                                        <div class="single-item">
                                            <div class="items-image">
                                                <img src="assets/images/product-details-1/product-items-2.jpg" alt="product" />
                                            </div>
                                            <p class="text">Oculus Quest</p>
                                        </div>
                                        <div class="single-item">
                                            <div class="items-image">
                                                <img src="assets/images/product-details-1/product-items-3.jpg" alt="product" />
                                            </div>
                                            <p class="text">Oculus Rift S</p>
                                        </div>
                                    </div>
                                </div>
        
                                <div class="product-select-wrapper flex-wrap">
                                    <div class="select-item">
                                        <h6 class="select-title">Select Color: <span>Grey</span></h6>
                                        <ul class="color-select">
                                            <li class="active" data-color="#EFEFEF"></li>
                                            <li data-color="#FAE5EC"></li>
                                            <li data-color="#4C4C4C"></li>
                                        </ul>
                                    </div>
                                    <div class="select-item">
                                        <h6 class="select-title">Memory (GB): </h6>
                                        <div class="size-select">
                                            <select>
                                                <option value="">32gb</option>
                                                <option value="">64gb</option>
                                                <option value="">128 gb</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="select-item">
                                        <h6 class="select-title">Select Quantity: </h6>
        
                                        <div class="select-quantity">
                                            <button type="button" id="sub" class="sub"><i class="mdi mdi-minus"></i></button>
                                            <input type="text" value="1" />
                                            <button type="button" id="add" class="add"><i class="mdi mdi-plus"></i></button>
                                        </div>
                                    </div>
                                    <div class="select-item">
                                        <h6 class="select-title">Select Shipping Country: </h6>
                                        <div class="country-select">
                                            <select>
                                                <option value="0">-- Select Country --</option>
                                                <option value="1">Bangladesh</option>
                                                <option value="2">india</option>
                                                <option value="3">Pakistan</option>
                                                <option value="4">Australia</option>
                                                <option value="5">Canada</option>
                                                <option value="6">Spain</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
        
                                <div class="product-price">
                                    <h6 class="price-title">Price: </h6>
                                    <p class="sale-price">$ 149 USD</p>
                                    <p class="regular-price">$ 179 USD</p>
                                </div>
        
                                <div class="product-btn">
                                    <a href="javascript:void(0)" class="main-btn primary-btn">
                                        <img src="assets/images/icon-svg/cart-4.svg" alt="" />
                                        Add to cart
                                    </a>
                                    <a href="javascript:void(0)" class="main-btn secondary-1-btn">
                                        <img src="assets/images/icon-svg/cart-8.svg" alt="" />
                                        Buy Now
                                    </a>
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