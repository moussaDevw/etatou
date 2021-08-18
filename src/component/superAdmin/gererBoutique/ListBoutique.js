import React,{Fragment,useEffect,useState} from 'react'
import axios from 'axios'
import {LayoutAdmin} from '../LayoutAdmin'
import { Link } from 'react-router-dom'
import { Button } from './Button'
export const ListBoutique = () =>{
    const [boutiques,setBoutique] = useState([])
    useEffect(()=>{
        var isTrue = document.querySelector('.check')
        axios({
            method:'GET',
            url:'https://apptatout.herokuapp.com/api/users/'
        })
        .then(response=>{
            setBoutique(response.data)
        })
        .catch(e=>console.log(e))
        axios({
            method:'PUT',
            url:''
        })
    },[])
    return(
        <Fragment>
            <main class="app-content">
                <LayoutAdmin />
                <div class="app-title">
                    <div>
                    <h1><i class="fa fa-th-list"></i> Boutique active</h1>
                    </div>
                    <ul class="app-breadcrumb breadcrumb">
                    <li class="breadcrumb-item"><i class="fa fa-home fa-lg"></i></li>
                    <li class="breadcrumb-item"></li>
                    <li class="breadcrumb-item active"><a href="#">Liste des boutiques active</a></li>
                    </ul>
                </div>
                <div class="row">
                    <div class="clearfix"></div>
                    <div class="col-md-12">
                    <div class="tile">
                        <h3 class="tile-title"></h3>
                        <div class="table-responsive">
                        <table class="table">
                            <thead>
                            <tr>
                                <th>Nom utilisateur</th>
                                <th>Nom Boutique</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                boutiques.map(boutique=>{
                                    return(
                                <tr>
                                    <td>{boutique.user_name}</td>
                                    <td>{boutique.nom_boutique}</td>
                                    <td>{boutique.is_celler ? 'Active' : 'Desactive'}</td>
                                    <td class="toggle-flip">
                                        {/* <form >
                                            <Link to={"/admins/status-client"+boutique.id}>
                                            <input type="checkbox" className="check" /><span class="flip-indecator" data-toggle-on="ON"
                                                        data-toggle-off="OFF"></span>
                                            </Link>
                                            </form> */}
                                        <Button id={boutique.id}/>
                                    </td>
                                </tr>
                                )
                            })
                            }
                            </tbody>
                        </table>
                        </div>
                    </div>
                    </div>
                </div>
                </main>
        </Fragment>
    )
}