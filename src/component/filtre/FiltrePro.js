import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';
import { Footer } from '../pageAcceuil/Footer'
export const FiltrePro = () => {
    return (
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
                                <h5 class="heading-5 font-weight-500">À propos</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="content-card-wrapper">
        <div class="content-card-style-1">
            <div class="container">
                <div class="row justify-content-end">
                    <div class="col-md-6">
                        <div class="content-card-content">
                            <h6 class="sub-title">About eStore</h6>
                            <h2 class="main-title">Welcome to eStore</h2>
                        </div>
                        <div class="content-para pt-20">
                            <p class="mb-15">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti asperiores, expedita eum
                                repellat dolorem quo ratione doloremque quae porro aliquam dolore distinctio, ipsam ipsa repellendus eos ipsum
                                sapiente laudantium corrupti omnis velit minus. Fugiat aliquam dolore omnis sapiente facere quidem repellat ex.
                                Provident quas accusantium vero eligendi nulla sed odit?</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ipsa repudiandae reprehenderit aperiam aliquam nemo
                                dolor ex pariatur, similique incidunt soluta perferendis rerum fugiat ducimus totam blanditiis optio numquam
                                quia.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="content-card-image-2 bg_cover" style={{backgroundImage: 'url(assets/images/content-card-1/content-2.jpg)'}}></div>
        </div>
        </section>
        <section class="features-section pt-100 pb-50">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="features-title text-center mb-50">
                        <h1 class="heading-1 font-weight-700">Awesome Features</h1>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-4 col-md-6">
                    <div class="single-feature-wrapper">
                        <div class="feature-icon">
                            <i class="lni lni-cog"></i>
                        </div>
                        <div class="feature-content">
                            <h5 class="heading-5 font-weight-500 mb-10">description</h5>
                            <p></p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="single-feature-wrapper">
                        <div class="feature-icon">
                            <i class="lni lni-code"></i>
                        </div>
                        <div class="feature-content">
                            <h5 class="heading-5 font-weight-500 mb-10">Clean Design</h5>
                            <p></p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="single-feature-wrapper">
                        <div class="feature-icon">
                            <i class="lni lni-layers"></i>
                        </div>
                        <div class="feature-content">
                            <h5 class="heading-5 font-weight-500 mb-10">Included Business Pages</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta quos iste veniam.</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="single-feature-wrapper">
                        <div class="feature-icon">
                            <i class="lni lni-laptop-phone"></i>
                        </div>
                        <div class="feature-content">
                            <h5 class="heading-5 font-weight-500 mb-10">Fully Responsive</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta quos iste veniam.</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="single-feature-wrapper">
                        <div class="feature-icon">
                            <i class="lni lni-brush"></i>
                        </div>
                        <div class="feature-content">
                            <h5 class="heading-5 font-weight-500 mb-10">Completely Customizable</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta quos iste veniam.</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="single-feature-wrapper">
                        <div class="feature-icon">
                            <i class="lni lni-rocket"></i>
                        </div>
                        <div class="feature-content">
                            <h5 class="heading-5 font-weight-500 mb-10">Fast and Well-optimized</h5>
                            <p></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
        <section class="subscribe-section pt-70 pb-70 bg-primary-4">
        <div class="container">
            <div class="row">
                <div class="col-lg-9 mx-auto">
                    <div class="heading text-center">
                        <h1 class="heading-1 font-weight-700 text-white mb-10">You are using free lite version</h1>
                        <p class="gray-3">Please, purchase full version of the template to get all pages, sections, features and permission to remove footer credits.</p>
                        <br/>
                        <a href="https://rebrand.ly/estore-gg" rel="nofollow" target="_blank" class="main-btn secondary-1-btn">
                                <img src="assets/images/icon-svg/cart-7.svg" alt="" />
                                PURCHASE NOW
                            </a>
                    </div>
                </div>
            </div>
        </div>
        </section>
        <section class="clients-logo-section pt-70 pb-70">
        <div class="container">
            <div class="row client-logo-active">
                <div class="col-lg-3">
                    <div class="single-logo-wrapper">
                        <img src="assets/images/client-logo/uideck-logo.svg" alt="" />
                    </div>
                </div>
                <div class="col-lg-3">
                    <div class="single-logo-wrapper">
                        <img src="assets/images/client-logo/graygrids-logo.svg" alt="" />
                    </div>
                </div>
                <div class="col-lg-3">
                    <div class="single-logo-wrapper">
                        <img src="assets/images/client-logo/lineicons-logo.svg" alt="" />
                    </div>
                </div>
                <div class="col-lg-3">
                    <div class="single-logo-wrapper">
                        <img src="assets/images/client-logo/pagebulb-logo.svg" alt="" />
                    </div>
                </div>
            </div>
        </div>
        </section>
        <section class="subscribe-section pt-70 pb-70 bg-primary-4">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 mx-auto">
                    <div class="heading text-center">
                        <h1 class="heading-1 font-weight-700 text-white mb-10">Subscribe Newsletter</h1>
                        <p class="gray-3">Be the first to know when new products drop and get behind-the-scenes content
                            straight.</p>
                    </div>
                    <div class="subscribe-form">
                        <form action="#">
                            <div class="single-form form-default">
                                <label class="text-white-50">Enter your email address</label>
                                <div class="form-input">
                                    <input type="text" placeholder="user@email.com" />
                                    <i class="mdi mdi-account"></i>
                                    <button class="main-btn primary-btn"><span class="mdi mdi-send"></span></button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </section>
        <Footer />
      </Fragment>
    );
  }