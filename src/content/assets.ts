import logoMain from '../assets/brand/logo-main.png';
import profileMain from '../../PROFILE/profile-main.jpg';

// Gallery
import design01 from '../../gallery/design-01.png';
import design02 from '../../gallery/design-02.jpg';
import design03 from '../../gallery/design-03.jpg';
import design04 from '../../gallery/design-04.jpg';
import design05 from '../../gallery/design-05.png';
import design06 from '../../gallery/design-06.png';
import design07 from '../../gallery/design-07.png';
import design08 from '../../gallery/design-08.png';
import design09 from '../../gallery/design-09.png';
import design10 from '../../gallery/design-10.png';
import design11 from '../../gallery/design-11.png';
import design12 from '../../gallery/design-12.png';

// NexaLedger screenshots
import nexaDashboard from '../../projects/nexaledger/nexa-dashboard.jpg';
import nexaAnalytics from '../../projects/nexaledger/nexa-analytics.jpg';
import nexaCashflow from '../../projects/nexaledger/nexa-cashflow.jpg';
import nexaCustomers from '../../projects/nexaledger/nexa-customers.jpg';

// Books
import bookTamarrod from '../../PDF LIBRARY/content/books/tamarrod-jinn.pdf';
import bookTarateel from '../../PDF LIBRARY/content/books/tarateel-almaani.pdf';
import bookDahaleez from '../../PDF LIBRARY/content/books/dahaleez-alwaei-allamohdood.pdf';

export const assets = {
  logoMain,
  profileMain,
  gallery: [
    { id: 'design-01', path: design01 },
    { id: 'design-02', path: design02 },
    { id: 'design-03', path: design03 },
    { id: 'design-04', path: design04 },
    { id: 'design-05', path: design05 },
    { id: 'design-06', path: design06 },
    { id: 'design-07', path: design07 },
    { id: 'design-08', path: design08 },
    { id: 'design-09', path: design09 },
    { id: 'design-10', path: design10 },
    { id: 'design-11', path: design11 },
    { id: 'design-12', path: design12 },
  ],
  nexaLedger: {
    screenshots: [
      { role: 'dashboard', path: nexaDashboard, alt: 'NexaLedger Dashboard' },
      { role: 'analytics', path: nexaAnalytics, alt: 'NexaLedger Analytics' },
      { role: 'cashflow', path: nexaCashflow, alt: 'NexaLedger Cashflow' },
      { role: 'customers', path: nexaCustomers, alt: 'NexaLedger Customers' },
    ],
  },
  books: [
    { id: 'tamarrod-jinn', title: 'تمرد الجن', pdfPath: bookTamarrod },
    { id: 'tarateel-almaani', title: 'تراتيل المعاني', pdfPath: bookTarateel },
    { id: 'dahaleez-alwaei', title: 'دهاليز الوعي اللامحدود', pdfPath: bookDahaleez },
  ],
};

