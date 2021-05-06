
import {BrowserRouter, BrowserRouter as Router,Route} from 'react-router-dom'
import {Dashboard} from './component/admin/Dashboard'
import {PageUser} from './component/admin/PageUser'
import {ListCommande} from './component/admin/listCommande/ListCommande'
import { AddProduct } from './component/admin/addProduct/AddProduct';
import {ListProduits} from './component/admin/listPrduits/ListProduits'
import {ModifierProduit} from './component/admin/listPrduits/ModifierProduits'
import { FiltrePro } from './component/filtre/FiltrePro';
import {DashboardSuperAdmin} from './component/superAdmin/DashboardSuperAdmin'
import {AddCategory} from './component/superAdmin/addCategory/AddCategory'
import {GererBoutique} from './component/superAdmin/gererBoutique/GererBoutique'
import {ListBoutiqueActif} from './component/superAdmin/gererBoutique/ListBoutiqueActif'
import {AddEvent} from './component/superAdmin/addEvent/AddEvent'
import {GererEvenement} from './component/superAdmin/gererEvenement/GererEvenement'
import { Index } from './component/pageAcceuil/Index';
import { ProduitDetails } from './component/productDetails/ProduitDetail';
import { CreerBoutique } from './component/authentification/CreerBoutique';
import { Login } from './component/authentification/Login';
import { FiltreProduits } from './component/filtre/FiltreProduits';
function App() {
  return (
    <div className="App">
      <BrowserRouter forceRefresh={true}>
        <Route path="/" exact component={Index} />
        <Route path="/filtre" exact component={FiltrePro} />
        <Route path="admin/ajouter-produits" exact component={AddProduct} />
        <Route path="/produit-details" exact component={ProduitDetails} />
        <Route path="/admin/tableau-de-bord" exact component={Dashboard} />

        <Route path="/creer-boutique" exact component={CreerBoutique} />
        <Route path="/connexion" exact component={Login} />

        <Route path="/filtre-categories" exact component={FiltreProduits} />
        <Route path="/admin/vos-commande" exact component={ListCommande} />
        <Route path="/admin/profil-user" exact component={PageUser} />
        <Route path="/admin/list-produits" exact component={ListProduits} />
        <Route path="/admin/modifier" exact component={ModifierProduit} />
        <Route path="/admins/tableau-de-bord" exact component={DashboardSuperAdmin} />
        <Route path="/admins/ajouter-categorie" exact component={AddCategory} />
        <Route path="/admins/Gerer-boutique" exact component={GererBoutique} />
        <Route path="/admins/list-boutique-ative" exact component={ListBoutiqueActif} />
        <Route path="/admins/Ajouter-event" exact component={AddEvent} />
        <Route path="/admins/Gerer-evenement" exact component={GererEvenement} />
      </BrowserRouter>
    </div>
  );
}

export default App;
