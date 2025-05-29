'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "2b41a5d03aad4a5003372b480cd9b745",
"version.json": "de5b1561d6d4e574eb9592451c73fc72",
"index.html": "d2b70a4a657af39d888ab6411f8b1337",
"/": "d2b70a4a657af39d888ab6411f8b1337",
"main.dart.js": "342350579197be35828742a579dfd00c",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "d13344fde64baf61f8cee24e4997bf00",
".git/config": "b8c7fdb1ca15a2c172ee1a5331f75596",
".git/objects/59/a3309b02aa3e6f7c250d9f3a5946a9beb7ee34": "0b5004b50bd622f42d9b3527f8499d01",
".git/objects/3e/ce4149816f30e9b113a37c5d3ab91b3dda4769": "78485321c331fc92e095a76a8c2b5717",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/56/8a8ffabe5a00a62eaf0dd9a3be588d3c0b1f4b": "8c5c1b8f5ac4e72e27732665e50e859a",
".git/objects/60/ee8da77477ae648431bfdf800ec3c52a6dd58b": "206f1c418d9118335e0c18e24172e222",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/b2/e9877bdad95790cc9df1279e81b127ac5124b1": "0d4c3d00bcd974dfbaa66646b1bdd0bb",
".git/objects/d9/1288e982861e066e0dd01f3b157d52227ccfbf": "9bab30f2c7a3443f21b655b9a2a5590a",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/da/9e934f05021a3f35255a7a1c68714754bb3cf9": "9e31abcd3256571393eaddc08f37d735",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/bd/6be43d015a2a8a92db341ee519feb383a20cb4": "0df4c80430aff6e9b0cdd970bc215545",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e5/98408809b5369d26f566c5e1798aeb02c17367": "6b96625992c4f12eea7ece51ecde3bc9",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c0/3e145cdba24b484b0fd508a497096be3059795": "42fcbbda3f0a67600ce9b2e2bac2a411",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/c1/d02c4799861be884f187a1e87457adad689c6d": "5796f4040c91c84f31141f6098983ad3",
".git/objects/29/c7271b0b363233e62d0a0909eac230e20af2c4": "fc950e89cdc8da9554b302530de69f85",
".git/objects/42/2a2a365df110698bddda43b15d078a0b9605a2": "4cdeaaa392718d2e1d8cd9fafcb70d1f",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/21/fa068ff491ae99456f9df587556d508cd19c74": "2e3c838f28f7c751cdb89a9333b19c51",
".git/objects/2f/5a99e39eb3f462f5b3a272bf0455ff2de35d6b": "c4b4b2b6e67124ef4367e23afac1cc16",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/54490039d9cba2ddb45858029154c15b72529a": "2e601ab479be49cbaf8eee22acb609f5",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6e/c87dcb7da236e120cdcf848b502f26bf7688c4": "31b12a5f602c7bb10c0155a28c3ec706",
".git/objects/36/e8497c7a735be9d36522e7c56b3ddb2b8c530d": "7f0f74083a7875da999f682ca57ef455",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/54/7354ff37c3a67a8c8f0eb58340ef4b8facc8fa": "4326e5b8f8ee4bc851ee81267e2a9131",
".git/objects/37/e02d1c7da68bc41552f28b2e67d17039e80916": "5fc50528ea8b648c9e661ad494fd10f9",
".git/objects/64/754ceb880c563016224e0a5e67d76c78c1cc69": "f1402666b12e373620f61df7d90d7557",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/a0/8d87008795411f8fa245072da747d1014340c5": "f9d7592d84ef5f535102b2b4b7bc9dd4",
".git/objects/dc/8fe2a9aaeffcdf0008a56cab48598899b333af": "3169ec8aee42c657368b636e8da13339",
".git/objects/dc/f83695f71da8c6278eb914cdd42692c427924e": "9ca7f32e12839dea4610032ada023058",
".git/objects/b6/51234ee58e2438c63e26d36358665324db53fd": "c83adf22db7cff20ee188e7fe7002c5c",
".git/objects/d5/e189f89b0030a916fd66f8c3fb65e583013334": "832df31c19abab5ccb7afa7edc6934da",
".git/objects/d2/46813172bfbc1f9883163b7872be01582dc6d6": "fa7c265b9b6c9eb30852d96f5a7b3962",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/b0/99bd67d6b1bb7fc8052398fe56eac9d269d108": "03cf7fd96b4968cca0193dd71d8a4a7f",
".git/objects/b0/0cc2282ba8af99f9c54c137d494c6da3e7caa9": "1160c27fbe80a7251dea950e6a1dc0c4",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/c02bd84ec92f866184ae6093958ceb10c6ee2e": "9763b00d22e8146b2b7a91b3fabbe9bd",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/f0/0a1d82407f3da4503125a891f020f26b02243e": "25bbe88f82681278332f56762f030201",
".git/objects/c2/9b33a919a5eda63f06fc24a2bc2016c6f2484f": "48397949b6ffcfe265475a097e01dd0f",
".git/objects/f6/a1700a1001425aff56f992671f3bffdb94a6ae": "6f1574a2826989099747a20be7aa6213",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/77/0ab7e4a48e1253961a855fd994a413ba7109dd": "58c8f2555ae74d58740800c152787210",
".git/objects/4a/401e95eb4ad34869ba67d779a89ffc06f68b9d": "0f84dd0b7bb736106ac4b3df5c47ba18",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/1c/d225783cdc933fb0afd5f8066aab01c4934789": "aaedb32b6863e2287f9aa99c45a5fc87",
".git/objects/40/f955429d1230124a2ca941a71a5525f9c4dade": "30792e5d4ae22b265ecbfc5344315788",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/2b/6724559f4f14d6be2e060ae15f3dff54a18b18": "c78e4448f8512ed8e075a39a2c3b2256",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "df8df9bcb820aca29fec8b33a923a87d",
".git/logs/refs/heads/main": "df8df9bcb820aca29fec8b33a923a87d",
".git/logs/refs/remotes/origin/main": "a3566ac10483be95d274265ecc429328",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "909a9f99aae7027cc26a261f186bbc1e",
".git/refs/remotes/origin/main": "909a9f99aae7027cc26a261f186bbc1e",
".git/index": "8c678298f1d285a6945d54e2a5a0f4ef",
".git/COMMIT_EDITMSG": "596f2b536d800047157f1df6e9497d78",
"assets/AssetManifest.json": "e363f09568cf4987aeb9b6abe1dda09c",
"assets/NOTICES": "d8a46b0acdf027cd779f6aecce61969d",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "7879ccd15fa4728574384c6274857ec1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "c4bd4fef9a639a6f406886eb9352857d",
"assets/fonts/MaterialIcons-Regular.otf": "b4c49f84b7ec0b800120b13cffa2ee95",
"assets/assets/images/me.jpg": "7ef1705b4fb69eca6f97307d1f622e64",
"assets/assets/images/web-design.png": "a4c6754d82d67075dd90d2ec3d1dc623",
"assets/assets/images/cross-platform.png": "d66757513d3fb73d95811386786c185b",
"assets/assets/images/shape-4.png": "02e878bfd5c0835fd4de9a7d91e5c465",
"assets/assets/images/mobile-development.png": "0764a6445b112ed0d6291ace9d082344",
"assets/assets/images/as_central_desk.png": "90a942d89eb93945c3b64a8c024d0ffb",
"assets/assets/images/shape-3.png": "9d276bded5fa360e7dbceebbd8d6f075",
"assets/assets/images/instagram.png": "8290266a5fb402a34b96f890bbdb2d60",
"assets/assets/images/shape-2.png": "a49e63ca83f9c2b6491c8b788eb56006",
"assets/assets/images/github.png": "d276d54d1d11f2fb2ea5edee28fc7950",
"assets/assets/images/shape.png": "482143e4be20f714c7827f681bfd517a",
"assets/assets/images/leetcode.png": "b12e1d4ca253068eba7947f7a7644d36",
"assets/assets/images/linkedin.png": "3f25fde0440cd316a514d72011d95d5f",
"assets/assets/images/youtube.png": "642bfb077a5c99b6564f979578900c53",
"assets/assets/images/AS_logo.png": "faef653acb9721abdfc59f67de900174",
"assets/assets/images/backend.png": "67aab1d5cb573798d12a8da5d3a14287",
"assets/assets/images/facebook.png": "d286d53c23f9c8190854f63a9bfaccde",
"assets/assets/images/bg.jpg": "1276b8962695a5370fa75e5c79a8fecd",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
