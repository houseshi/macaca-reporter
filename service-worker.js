/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "2a798e4c2e08f75bab9521074933f9fc"
  },
  {
    "url": "assets/6d308bd9gy1fivtfos9r5j21kw130af7.jpg",
    "revision": "d90a1c01517ad749de87807813c171c0"
  },
  {
    "url": "assets/6d308bd9gy1fivuatxep5j21kw13dgs6.jpg",
    "revision": "269ef71597271e67793ad81ca823b41b"
  },
  {
    "url": "assets/6d308bd9gy1g03hp2j3bwj21950u0h58.jpg",
    "revision": "1d23411bd912744d97288bf0bb2fb52c"
  },
  {
    "url": "assets/6d308bd9gy1g03hp2kkh3j21950u0wyg.jpg",
    "revision": "879ac46ab535d00b1b6a4966be59474c"
  },
  {
    "url": "assets/6d308bd9gy1g03hp2lea4j21950u0wyx.jpg",
    "revision": "7a856e55f802d5f3cb6eab2cf1724f31"
  },
  {
    "url": "assets/6d308bd9gy1g03hp2nibhj21950u0wyf.jpg",
    "revision": "b3c8878b36ffb12957bf70227c078e29"
  },
  {
    "url": "assets/6d308bd9gy1g03hp46lhpj21950u07pl.jpg",
    "revision": "136617303b8af97421514d904dd2742b"
  },
  {
    "url": "assets/css/0.styles.a665a5c6.css",
    "revision": "ab5c4b4b437efd09938394cda8abb081"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.339dbdf0.js",
    "revision": "b3d81b4ab93d6b126bba9e8e96b4fee9"
  },
  {
    "url": "assets/js/11.f8cc75ad.js",
    "revision": "46748c1d7ac6f97f7228c65cbc79390c"
  },
  {
    "url": "assets/js/12.619dea2f.js",
    "revision": "1dbbec8c455db17ec5ac6bd1920d2366"
  },
  {
    "url": "assets/js/13.ea79a7fb.js",
    "revision": "42409328794a6bce4356b0b5fa9cf42f"
  },
  {
    "url": "assets/js/14.5fcc1e33.js",
    "revision": "5f4f8c85f8aa4a36c8cc4c8d20fdfd29"
  },
  {
    "url": "assets/js/15.39a66aab.js",
    "revision": "a8ebc485293b60c161d9cca2a12d891e"
  },
  {
    "url": "assets/js/2.ed5439ca.js",
    "revision": "f51bbd2a06c587f57039419f198987b6"
  },
  {
    "url": "assets/js/3.680986cc.js",
    "revision": "c8c8fa77427ac51c4def2c253c69615f"
  },
  {
    "url": "assets/js/4.0679a5ed.js",
    "revision": "4fefd0b01f95e97f2ade83b575f1f956"
  },
  {
    "url": "assets/js/5.8c94c80b.js",
    "revision": "4a01525731c98bdd41bac10090995f67"
  },
  {
    "url": "assets/js/6.e62ee8a6.js",
    "revision": "66abd03b7114bd63d73047e90f37ad24"
  },
  {
    "url": "assets/js/7.83e792e7.js",
    "revision": "30a4d868d02279e7a7bcccbe4780a50f"
  },
  {
    "url": "assets/js/8.37d0fc3e.js",
    "revision": "a27462308684309643ecb3be7b001633"
  },
  {
    "url": "assets/js/9.74e3906e.js",
    "revision": "7ce60a05d94d9024f43724053edbdc25"
  },
  {
    "url": "assets/js/app.ce24b558.js",
    "revision": "d0e1ef57f8b0b5bc8730c21a5211215d"
  },
  {
    "url": "guide/index.html",
    "revision": "66217287d642563832e6dbf253f2d379"
  },
  {
    "url": "guide/install.html",
    "revision": "f61366fa8678b90590235efc794f1881"
  },
  {
    "url": "guide/integration.html",
    "revision": "55fb95604e3a952b96ef90a8a7722c51"
  },
  {
    "url": "guide/presentations.html",
    "revision": "2661334efc50e38a585b739a4666bda4"
  },
  {
    "url": "guide/quick-start.html",
    "revision": "ffd71b7857e6d129add0f27115ab27c3"
  },
  {
    "url": "index.html",
    "revision": "8ad6ddb32ce8425715564c1295b24ab9"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "f7e48a6894f93883ca8abcf3e1a27044"
  },
  {
    "url": "zh/guide/install.html",
    "revision": "648a8d4c9011f20156eb6a40039900c7"
  },
  {
    "url": "zh/guide/integration.html",
    "revision": "cd5f8657ba86fe884af8473fbeffc36e"
  },
  {
    "url": "zh/guide/presentations.html",
    "revision": "841a30a634246ab8696fe886099e96b3"
  },
  {
    "url": "zh/guide/quick-start.html",
    "revision": "6235224206c35a96c61bbcd2eb612202"
  },
  {
    "url": "zh/index.html",
    "revision": "87c32f2f1ad535e218105dbf00f07cec"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
