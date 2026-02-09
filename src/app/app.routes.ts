import { Routes } from '@angular/router';
import { Contact } from './pages/contact/contact';
import { Colis } from './pages/colis/colis';
import { Formations } from './pages/formations/formations';
import { Assurance } from './pages/assurance/assurance';
import { Billetterie } from './pages/billetterie/billetterie';
import { VisaPage } from './pages/visa/visa';
import { HomePage } from './pages/home/home/home';
import { Destinations } from './pages/home/destinations/destinations';


export const routes: Routes = [
  { path: '',
     component: HomePage
     },

  { path: 'visa',
     component: VisaPage
   },

  { path: 'billetterie',
     component: Billetterie
    },

  { path: 'assurance',
    component: Assurance
  },

  { path: 'formations',
     component: Formations
     },

  { path: 'colis',
     component: Colis
     },

  { path: 'contact',
     component: Contact
    },

    { path: 'destinations',
     component: Destinations
    }
];
