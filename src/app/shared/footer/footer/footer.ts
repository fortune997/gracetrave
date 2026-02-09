import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './footer.html',
  styleUrls: ['./footer.css']
})
export class FooterComponent {
  newsletterEmail = '';
  currentYear = new Date().getFullYear();
logo='/images/logo.jpeg'
  contactInfo = {
    phone: '+237 6 96 69 31 83',
    email: 'gracetravelcabinetdeconseil@gmail.com',
    address: 'Olezoa, Ambassade de France, Mvolye, Yaoundé, Cameroun',
    whatsapp: '+237696693183'
  };

  socialLinks = [
    { name: 'Facebook', icon: 'fab fa-facebook-f', url: '#' },
    { name: 'Twitter', icon: 'fab fa-x-twitter', url: '#' },
    { name: 'YouTube', icon: 'fab fa-youtube', url: '#' },
    { name: 'LinkedIn', icon: 'fab fa-linkedin-in', url: '#' },
    { name: 'Instagram', icon: 'fab fa-instagram', url: '#' }
  ];

  quickLinks = [
    { label: 'Accueil', link: '/' },
    { label: 'À propos', link: '/about' },
    { label: 'Contact', link: '/contact' },
    { label: 'Blog', link: '/blog' },
    { label: 'FAQ', link: '/faq' },
    { label: 'Témoignages', link: '/testimonials' }
  ];

  services = [
    { label: 'Conseil Voyage', link: '/services/conseil' },
    { label: 'Billetterie', link: '/services/billetterie' },
    { label: 'Assurance Voyage', link: '/services/assurance' },
    { label: 'Formations', link: '/services/formations' },
    { label: 'Colis Express', link: '/services/colis' }
  ];

  visaLinks = [
    { label: 'Visa France', link: '/visa/france' },
    { label: 'Visa Canada', link: '/visa/canada' },
    { label: 'Visa USA', link: '/visa/usa' },
    { label: 'Visa Schengen', link: '/visa/schengen' },
    { label: 'Processus', link: '/visa/processus' },
    { label: 'Documents', link: '/visa/documents' }
  ];

  subscribeNewsletter(): void {
    if (this.newsletterEmail) {
      console.log('Newsletter subscription:', this.newsletterEmail);
      // Logique d'inscription
      alert('Merci pour votre inscription !');
      this.newsletterEmail = '';
    }
  }

  openWhatsApp(): void {
    const number = this.contactInfo.whatsapp.replace(/\s+/g, '');
    window.open(`https://wa.me/${number}`, '_blank');
  }
}
