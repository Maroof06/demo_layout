
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/demo_layout/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/demo_layout"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 9975, hash: 'c274984cca3fb6dd1bec7e47460ac0ee1f979dd494d007f78121713b84dcf9b9', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1694, hash: 'b3561beb301c692bdee53b3a3ee6b0495799c836a9aa030ff651b5f39c490e45', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 125891, hash: '851b0c8986a83bd356aac9fa8a7da093b9db34154828cc423340ddc1b0bcd413', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-2YMQKZOZ.css': {size: 16113, hash: 'EgTljvmdWVw', text: () => import('./assets-chunks/styles-2YMQKZOZ_css.mjs').then(m => m.default)}
  },
};
