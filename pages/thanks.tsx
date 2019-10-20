
/* IMPORT */

import React from 'react';
import Layout from '@layouts/layout';

/* THANKS */

const Thanks = () => (
  <Layout className="thanks" seo={{ title: 'Thanks' }}>
    <h1>Thanks ❤️</h1>
    <p>A big thank you to all the wonderful people listed in this page who decided to support me.</p>
    <p>You can support me, and have your name listed in this page, via <a href="https://github.com/sponsors/fabiospampinato" title="Sponsor me on GitHub">GitHub</a>. Alternatively I also accept direct one-time donations via <a href="https://www.paypal.me/fabiospampinato" title="Sponsor me on PayPal">PayPal</a>.</p>
    <h2>Super Supporters <span className="price">$25/month</span></h2>
    <ul>
      <li className="empty">No super supporters yet.</li>
    </ul>
    <h2>Top Supporters <span className="price">$10/month</span></h2>
    <ul>
      <li className="empty">No top supporters yet.</li>
    </ul>
    <h2>Supporters <span className="price">$5/month</span></h2>
    <ul>
      <li className="empty">No supporters yet.</li>
    </ul>
  </Layout>
);

/* EXPORT */

export default Thanks;