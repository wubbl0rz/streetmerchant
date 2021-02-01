import { Store } from './store';

export const Mindfactory: Store = {
  currency: '€',
  labels: {
    inStock: {
      container: '.pshipping',
      text: ['lagernd', 'verfügbar'],
    },
    maxPrice: {
      container: 'div[class="pprice"]',
      euroFormat: true,
    },
    outOfStock: {
      container: '.pshipping',
      text: ['ohne liefertermin'],
    },
  },
  links: [
    {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url:
        'https://www.mindfactory.de/product_info.php/8GB-MSI-GeForce-RTX2070Super-GAMING-X-DDR6--Retail-_1329683.html',
    },
    {
      brand: 'gainward',
      model: 'phantom gaming',
      series: '3090',
      url: 'https://www.mindfactory.de/product_info.php/24GB-Gainward-GeForce-RTX-3090-Phantom-DDR6--Retail-_1383760.html',
    },
    {
      brand: 'zotac',
      model: 'trinity oc',
      series: '3090',
      url: 'https://www.mindfactory.de/product_info.php/24GB-ZOTAC-GeForce-RTX-3090-TRINITY-OC_1392916.html',
    },
    {
      brand: 'msi',
      model: 'gaming trio',
      series: '3090',
      url: 'https://www.mindfactory.de/product_info.php/24GB-MSI-GeForce-RTX-3090-GAMING-X-TRIO-DDR6--Retail-_1377232.html',
    },
    {
      brand: 'msi',
      model: 'suprim',
      series: '3090',
      url: 'https://www.mindfactory.de/product_info.php/24GB-MSI-GeForce-RTX-3090-SUPRIM-X--Retail-_1384562.html',
    },
    {
      brand: 'amd',
      model: '5600x',
      series: 'ryzen5600',
      url:
        'https://www.mindfactory.de/product_info.php/AMD-Ryzen-5-5600X-6x-3-70GHz-So-AM4-BOX_1380726.html',
    },
    {
      brand: 'amd',
      model: '5800x',
      series: 'ryzen5800',
      url:
        'https://www.mindfactory.de/product_info.php/AMD-Ryzen-7-5800X-8x-3-80GHz-So-AM4-WOF_1380727.html',
    },
    {
      brand: 'amd',
      model: '5900x',
      series: 'ryzen5900',
      url:
        'https://www.mindfactory.de/product_info.php/AMD-Ryzen-9-5900X-12x-3-70GHz-So-AM4-WOF_1380728.html',
    },
    {
      brand: 'amd',
      model: '5950x',
      series: 'ryzen5950',
      url:
        'https://www.mindfactory.de/product_info.php/AMD-Ryzen-9-5950X-16x-3-40GHz-So-AM4-WOF_1380729.html',
    },
    // #region 6800
    {
      brand: 'powercolor',
      model: 'amd reference',
      series: 'rx6800',
      url:
        'https://www.mindfactory.de/product_info.php/16GB-Powercolor-Radeon-RX-6800-Fighter-DDR6-Drei-Luefter-256bit--Retail_1388356.html',
    },
    {
      brand: 'powercolor',
      model: 'red dragon',
      series: 'rx6800',
      url:
        'https://www.mindfactory.de/product_info.php/16GB-PowerColor-Radeon-RX-6800-Red-Dragon-DDR6-retail_1387556.html',
    },
    {
      brand: 'xfx',
      model: 'merc',
      series: 'rx6800',
      url:
        'https://www.mindfactory.de/product_info.php/16GB-XFX-Radeon-RX-6800-Speedster-MERC319-DDR6-Black-Gaming_1386624.html',
    },
    {
      brand: 'asrock',
      model: 'phantom gs',
      series: 'rx6800',
      url:
        'https://www.mindfactory.de/product_info.php/16GB-ASRock-Radeon-RX-6800-PHANTOM-GAMING-DDR6--Retail-_1388244.html',
    },
    {
      brand: 'powercolor',
      model: 'red dragon',
      series: 'rx6800xt',
      url:
        'https://www.mindfactory.de/product_info.php/16GB-Powercolor-Radeon-RX-6800XT-Red-Dragon-DDR6--Retail-_1391874.html',
    },
    {
      brand: 'msi',
      model: 'gaming trio',
      series: 'rx6800',
      url:
        'https://www.mindfactory.de/product_info.php/16GB-MSI-Radeon-RX-6800-GAMING-X-Trio-16G-DDR6-V396-002R_1392663.html',
    },
    {
      brand: 'asrock',
      model: 'phantom gs',
      series: 'rx6800xt',
      url:
        'https://www.mindfactory.de/product_info.php/16GB-ASRock-Radeon-RX-6800-XT-PHANTOM-GAMING-DDR6_1386619.html',
    },
    {
      brand: 'powercolor',
      model: 'amd reference',
      series: 'rx6800',
      url:
        'https://www.mindfactory.de/product_info.php/16GB-Powercolor-Radeon-RX-6800-Fighter-DDR6-Drei-Luefter-256bit--Retail_1388356.html',
    },
    {
      brand: 'xfx',
      model: 'merc',
      series: 'rx6800',
      url:
        'https://www.mindfactory.de/product_info.php/16GB-XFX-Radeon-RX-6800-Speedster-MERC319-DDR6-Black-Gaming_1386624.html',
    },
    {
      brand: 'powercolor',
      model: 'red dragon',
      series: 'rx6800',
      url:
        'https://www.mindfactory.de/product_info.php/16GB-PowerColor-Radeon-RX-6800-Red-Dragon-DDR6-retail_1387556.html',
    },
    {
      brand: 'sapphire',
      model: 'nitro oc',
      series: 'rx6800xt',
      url:
        'https://www.mindfactory.de/product_info.php/16GB-Sapphire-Radeon-RX-6800-XT-NITRO--OC-HDMI-3xDP_1388340.html',
    },
    // #endregion
    // #region 6800xt
    {
      brand: 'xfx',
      model: 'merc',
      series: 'rx6800xt',
      url:
        'https://www.mindfactory.de/product_info.php/16GB-XFX-Radeon-RX-6800-XT-Speedster-MERC319-DDR6-Black-Gaming-retail_1386623.html',
    },
    {
      brand: 'asrock',
      model: 'taichi',
      series: 'rx6800xt',
      url:
        'https://www.mindfactory.de/product_info.php/16GB-ASRock-Radeon-RX-6800-XT-Taichi-DDR6_1386618.html',
    },
    {
      brand: 'asrock',
      model: 'phantom gaming',
      series: 'rx6800xt',
      url:
        'https://www.mindfactory.de/product_info.php/16GB-ASRock-Radeon-RX-6800-XT-PHANTOM-GAMING-DDR6_1386619.html',
    },
    {
      brand: 'sapphire',
      model: 'nitro oc',
      series: 'rx6800xt',
      url:
        'https://www.mindfactory.de/product_info.php/16GB-Sapphire-Radeon-RX-6800-XT-NITRO--OC-HDMI-3xDP_1388340.html',
    },
    {
      brand: 'xfx',
      model: 'merc',
      series: 'rx6800xt',
      url:
        'https://www.mindfactory.de/product_info.php/16GB-XFX-Radeon-RX-6800-XT-Speedster-MERC319-DDR6-Black-Gaming-retail_1386623.html',
    },
    // #endregion
    // #region 6900xt
    {
      brand: 'xfx',
      model: 'merc',
      series: 'rx6900xt',
      url:
        'https://www.mindfactory.de/product_info.php/16GB-XFX-Radeon-RX-6900-XT-MERC319-ULTRA-DDR6-Drei-Luefter-256bit--Reta_1388407.html',
    },
    {
      brand: 'powercolor',
      model: 'red devil',
      series: 'rx6900xt',
      url:
        'https://www.mindfactory.de/product_info.php/16GB-Powercolor-Radeon-RX-6900XT-Red-Devil-DDR6-Triple-Cooler--Retail-_1388403.html',
    },
    {
      brand: 'asrock',
      model: 'amd reference',
      series: 'rx6900xt',
      url:
        'https://www.mindfactory.de/product_info.php/16GB-ASRock-Radeon-6900-XT--Retail-_1388342.html',
    },
    {
      brand: 'msi',
      model: 'amd reference',
      series: 'rx6900xt',
      url:
        'https://www.mindfactory.de/product_info.php/16GB-MSI-Radeon-6900-XT--Retail-_1388361.html',
    },
    {
      brand: 'powercolor',
      model: 'amd reference',
      series: 'rx6900xt',
      url:
        'https://www.mindfactory.de/product_info.php/16GB-PowerColor-Radeon-RX-6900XT-DDR6-Drei-Luefter-256bit--Retail-_1388355.html',
    },
    {
      brand: 'xfx',
      model: 'amd reference',
      series: 'rx6900xt',
      url:
        'https://www.mindfactory.de/product_info.php/16GB-XFX-Radeon-RX-6900-XT-DDR6-Drei-Luefter-256bit_1388333.html',
    },
    // #endregion
  ],
  name: 'mindfactory',
};
