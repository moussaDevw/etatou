import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
export const Layout = () =>{
    return(
        <Fragment>
            <div class="navigation">
        <header class="navbar-style-7 position-relative">
            <div class="container">
                <div class="navbar-mobile d-lg-none">
                    <div class="row align-items-center">
                        <div class="col-3">
                            <div class="navbar-toggle icon-text-btn">
                                <Link class="icon-btn primary-icon-text mobile-menu-open-7" href="javascript:void(0)">
                                    <i class="mdi mdi-menu"></i>
                                </Link>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="mobile-logo text-center">
                               <h1 style={{Color:'#0190F9'}}><strong>Tatou</strong></h1> {/* <Link href="index.html"><img src="assets/images/logo.svg" alt="Logo"/></Link> */}
                            </div>
                        </div>
                        <div class="col-3">
                            <div class="navbar-cart">
                                <Link class="icon-btn primary-icon-text icon-text-btn" href="javascript:void(0)">
                                    <img src="assets/images/icon-svg/cart-1.svg" alt="Icon" />
                                    <span class="icon-text text-style-1"></span>
                                </Link>
    
                                <div class="navbar-cart-dropdown">
                                    <div class="checkout-style-2">
                                        <div class="checkout-header d-flex justify-content-between">
                                            <h6 class="title">Tatou</h6>
                                        </div>
                                        <div class="checkout-table table-responsive">
                                            <table class="table">
                                                <tbody>
                                                    <tr>
                                                        <td class="checkout-product">
                                                            <div class="product-cart d-flex">
                                                                <div class="product-thumb">
                                                                    <img src="assets/images/product-cart/product-4.png"
                                                                        alt="Product" />
                                                                </div>
                                                                <div class="product-content media-body">
                                                                    <h5 class="title">
                                                                        <Link href="product-details-page.html">Circular Sienna</Link></h5>
                                                                    <ul>
                                                                        <li><span>Brown</span></li>
                                                                        <li><span>XL</span></li>
                                                                        <li>
                                                                            <Link class="delete" href="javascript:void(0)">
                                                                                <i class="mdi mdi-delete"></i>
                                                                            </Link>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td class="checkout-quantity">
                                                            <div class="product-quantity d-inline-flex">
                                                                <button type="button" id="sub" class="sub">
                                                                    <i class="mdi mdi-minus"></i>
                                                                </button>
                                                                <input type="text" value="1" />
                                                                <button type="button" id="add" class="add">
                                                                    <i class="mdi mdi-plus"></i>
                                                                </button>
                                                            </div>
                                                        </td>
                                                        <td class="checkout-price">
                                                            <p class="price">$36.00</p>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
    
                                        <div class="checkout-footer">
                                            <div class="checkout-sub-total d-flex justify-content-between">
                                                <p class="value">Subtotal Price:</p>
                                                <p class="price">$144</p>
                                            </div>
                                            <div class="checkout-btn">
                                                <Link href="cart-page.html" class="main-btn primary-btn-border">View Cart</Link>
                                                <Link href="checkout-page.html" class="main-btn primary-btn">Checkout</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="navbar-search mt-15 search-style-5">
                        <div class="search-select">
                            <select>
                            </select>
                        </div>
                        <div class="search-input">
                            <input type="text" placeholder="Search" />
                        </div>
                        <div class="search-btn">
                            <button><i class="lni lni-search-alt"></i></button>
                        </div>
                    </div>
                </div>
            </div>
    
            <div class="navbar-container navbar-sidebar-7">
                <div class="navbar-close d-lg-none">
                    <Link class="close-mobile-menu-7" href="javascript:void(0)"><i class="mdi mdi-close"></i></Link>
                </div>
                <div class="navbar-top-wrapper">
                    <div class="container-lg">
                        <div class="navbar-top d-lg-flex justify-content-between">
                            <div class="navbar-top-left">
                                <ul class="navbar-top-link">
                                    <li><Link href="about-page.html">A propos</Link></li>
                                    <li><Link href="contact-page.html">Contact</Link></li>
                                    <li>
                                        <Link href="javascript:void(0)">
                                            <i class="mdi mdi-phone-in-talk"></i>
                                            +9000000000000
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div class="navbar-top-right">
                                <ul class="navbar-top-link">
                                    <li>
                                       <Link to="/creer-boutique">Creer un boutique</Link>
                                    </li>
									<li>
                                       <Link href="#">Deposer une annonce</Link>
                                    </li>
                                    <li>
                                       
                                    </li>
                                    <li>
                                        <Link to="/connexion"><i class="mdi mdi-account"></i>CONNEXION</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="navbar-wrapper">
                    <div class="container-lg">
                        <nav class="main-navbar d-lg-flex justify-content-between align-items-center">
                            <div class="desktop-logo d-none d-lg-block">
							<h1>Tatou</h1>{/*<Link href="index.html"><img src="assets/images/logo.jpeg" alt="Logo" /></Link> */}
                            </div>
                            <div class="navbar-menu">
                                <ul class="main-menu">
                                    <li class="position-static menu-item-has-children">
                                        <Link href="#">Categories</Link>
                                        <ul class="sub-mega-dropdown">
                                            <li>
                                                <div class="mega-dropdown-menu">
                                                    <ul class="container mega-dropdown d-flex flex-wrap">
                                                        <li class="mega-dropdown-list menu-item-has-children">
                                                            <h6 class="heading-6 font-weight-500 mega-title">Immeuble
                                                            </h6>
                                                            <ul>
                                                                <li><Link href="category.html">Dresses</Link></li>
                                                                <li><Link href="category.html">Jackets</Link></li>
                                                                <li><Link href="category.html">Hoodies & Sweatshirts</Link></li>
                                                                <li><Link href="category.html">Sweaters</Link></li>
                                                                <li><Link href="category.html">Tops & Tees</Link></li>
                                                                <li><Link href="category.html">Party Dresses</Link></li>
                                                            </ul>
                                                        </li>
                                                        <li class="mega-dropdown-list menu-item-has-children">
                                                            <h6 class="heading-6 font-weight-500 mega-title">Voiture</h6>
                                                            <ul>
                                                                <li><Link href="category.html">Dresses</Link></li>
                                                                <li><Link href="category.html">Jackets</Link></li>
                                                                <li><Link href="category.html">Hoodies & Sweatshirts</Link></li>
                                                                <li><Link href="category.html">Sweaters</Link></li>
                                                                <li><Link href="category.html">Tops & Tees</Link></li>
                                                                <li><Link href="category.html">Party Dresses</Link></li>
                                                            </ul>
                                                        </li>
                                                        <li class="mega-dropdown-list menu-item-has-children">
                                                            <h6 class="heading-6 font-weight-500 mega-title">Accessories
                                                            </h6>
                                                            <ul>
                                                                <li><Link href="category.html">Hoodies & Sweatshirts</Link></li>
                                                                <li><Link href="category.html">Jackets & Coats</Link></li>
                                                                <li><Link href="category.html">Pants</Link></li>
                                                                <li><Link href="category.html">Jeans</Link></li>
                                                                <li><Link href="category.html">Tops & Tees</Link></li>
                                                                <li><Link href="category.html">Casual Shorts</Link></li>
                                                            </ul>
                                                        </li>
                                                        <li class="mega-dropdown-list">
                                                            <img src="assets/images/menu-slider-1.png" alt="" />
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                    <li><Link to="#">Evenement</Link></li>
                                    <li><Link to="#">Annonce</Link></li>
                                    <li><Link to="#">Boutique</Link></li>
                                </ul>
                            </div>
                            <div class="navbar-search-cart d-none d-lg-flex">
                                <div class="navbar-search search-style-5">
                                    <div class="search-select">
                                        <select>
                                           
                                        </select>
                                    </div>
                                    <div class="search-input">
                                        <input type="text" placeholder="Search" />
                                    </div>
                                    <div class="search-btn">
                                        <button><i class="lni lni-search-alt"></i></button>
                                    </div>
                                </div>
                                <div class="navbar-cart">
                                    <Link class="icon-btn primary-icon-text icon-text-btn" href="javascript:void(0)">
                                        <img src="assets/images/icon-svg/cart-1.svg" alt="Icon" />
                                        <span class="icon-text text-style-1"></span>
                                    </Link>
    
                                    <div class="navbar-cart-dropdown">
                                        <div class="checkout-style-2">
                                            <div class="checkout-header d-flex justify-content-between">
                                                <h6 class="title">Shopping Cart</h6>
                                            </div>
    
                                            <div class="checkout-table">
                                                <table class="table">
                                                    <tbody>
                                                        <tr>
                                                            <td class="checkout-product">
                                                                <div class="product-cart d-flex">
                                                                    <div class="product-thumb">
                                                                        <img src="assets/images/product-cart/product-4.png"
                                                                            alt="Product" />
                                                                    </div>
                                                                    <div class="product-content media-body">
                                                                        <h5 class="title">
                                                                            <Link href="product-details-page.html">Circular Sienna</Link>
                                                                        </h5>
                                                                        <ul>
                                                                            <li><span>Brown</span></li>
                                                                            <li><span>XL</span></li>
                                                                            <li>
                                                                                <Link class="delete" href="javascript:void(0)">
                                                                                    <i class="mdi mdi-delete"></i>
                                                                                </Link>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td class="checkout-quantity">
                                                                <div class="product-quantity d-inline-flex">
                                                                    <button type="button" id="sub" class="sub">
                                                                        <i class="mdi mdi-minus"></i>
                                                                    </button>
                                                                    <input type="text" value="1" />
                                                                    <button type="button" id="add" class="add">
                                                                        <i class="mdi mdi-plus"></i>
                                                                    </button>
                                                                </div>
                                                            </td>
                                                            <td class="checkout-price">
                                                                <p class="price">$36.00</p>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
    
                                            <div class="checkout-footer">
                                                <div class="checkout-sub-total d-flex justify-content-between">
                                                    <p class="value">Subtotal Price:</p>
                                                    <p class="price">$144</p>
                                                </div>
                                                <div class="checkout-btn">
                                                    <Link href="cart-page.html" class="main-btn primary-btn-border">View
                                                        Cart</Link>
                                                    <Link href="checkout-page.html" class="main-btn primary-btn">Checkout</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
            <div class="overlay-7"></div>
        </header>
    </div>
        </Fragment>
    )
}