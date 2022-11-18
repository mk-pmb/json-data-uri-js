// -*- coding: utf-8, tab-width: 2 -*-

import test from 'p-tape';
import preview from 'concise-value-preview-pmb';

import jdu from '../index.js';


const daj = 'data:application/json';


function multitest(x, plain, b64) {
  test(preview(x), (t) => {
    t.plan(2 + (plain ? 2 : 0));
    const p = daj + ',' + (plain || '');
    t.equal(jdu.toPlainUrl(x), p);
    const b = daj + ';base64,' + (b64 || '');
    t.equal(jdu.toBase64Url(x), b);
    if (plain) {
      t.same(jdu.parse(p), x);
      t.same(jdu.parse(b), x);
    }
  });
}


multitest('Hello.', '%22Hello.%22', 'IkhlbGxvLiI=');
multitest(123, '123', 'MTIz');
multitest([11, 22, 33], '%5B11,22,33%5D', 'WzExLDIyLDMzXQ==');
multitest({ cloud: '☁', raindrop: '🌢' },
  '%7B%22cloud%22:%22%E2%98%81%22,'
    + '%22raindrop%22:%22%F0%9F%8C%A2%22%7D',
  'eyJjbG91ZCI6Ilx1MjYwMSIsInJhaW5kcm9wIjoiXHVEODNDXHVERjIyIn0=');

multitest();
multitest(Math.ceil);





/* scroll */
