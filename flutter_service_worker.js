'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "5a284e1d8033e8e186d16941b3a22799",
"index.html": "2551dd1b8a4f0352092209a6f2c8e93e",
"/": "2551dd1b8a4f0352092209a6f2c8e93e",
"16x16.png": "9c077de9d9eccdeb5f87b09bf8fddb85",
"main.dart.js": "3e20c4850f89e6ed21699e2dd59e3c11",
"icons/192x192.png": "2066c443a5ca4e2aedded2a5ef5ee927",
"icons/512x512.png": "9ed95c379692be296b6baa188af8ac9c",
"manifest.json": "00c01e3fd88ed5639760e4668ac5f1ae",
"assets/AssetManifest.json": "763f4f3f4497089a296e97570b65f290",
"assets/NOTICES": "a8df7d624462ca4dc331cb819574dd0a",
"assets/FontManifest.json": "afe086a5133294ab9f583979078b4564",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_AMS-Regular.ttf": "657a5353a553777e270827bd1630e467",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Script-Regular.ttf": "55d2dcd4778875a53ff09320a85a5296",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size3-Regular.ttf": "e87212c26bb86c21eb028aba2ac53ec3",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Typewriter-Regular.ttf": "87f56927f1ba726ce0591955c8b3b42d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Bold.ttf": "a9c8e437146ef63fcd6fae7cf65ca859",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Bold.ttf": "ad0a28f28f736cf4c121bcb0e719b88a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Bold.ttf": "9eef86c1f9efa78ab93d41a0551948f7",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Regular.ttf": "dede6f2c7dad4402fa205644391b3a94",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Regular.ttf": "5a5766c715ee765aa1398997643f1589",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Italic.ttf": "d89b80e7bdd57d238eeaa80ed9a1013a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-Italic.ttf": "a7732ecb5840a15be39e1eda377bc21d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Italic.ttf": "ac3b1882325add4f148f05db8cafd401",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Bold.ttf": "46b41c4de7a936d099575185a94855c4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size2-Regular.ttf": "959972785387fe35f7d47dbfb0385bc4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Regular.ttf": "b5f967ed9e4933f1c3165a12fe3436df",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size1-Regular.ttf": "1e6a3368d660edc3a2fbbe72edfeaa85",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Regular.ttf": "7ec92adfa4fe03eb8e9bfb60813df1fa",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size4-Regular.ttf": "85554307b465da7eb785fd3ce52ad282",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-BoldItalic.ttf": "e3c361ea8d1c215805439ce0941a1c8d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-BoldItalic.ttf": "946a26954ab7fbd7ea78df07795a6cbc",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/wiredash/lib/assets/fonts/LexendDeca-Regular.ttf": "7204ea537cf86c2c0a4f4707443f2daa",
"assets/packages/wiredash/lib/assets/fonts/Wiredash-Icons.ttf": "7f6a32eef0f9bd00b92d0c51aecb395f",
"assets/packages/wiredash/assets/images/logo_grey.png": "3f955769ce0382d7c7813ee52323ab81",
"assets/packages/wiredash/assets/images/pen.png": "00910bf5961680fd1cabce6847d31747",
"assets/packages/wiredash/assets/images/logo_footer.png": "4c662743c62b67d7e0a200ac7503c4ba",
"assets/packages/wiredash/assets/images/logo_white.png": "d51118529c8b6f919c485cd81e9a840e",
"assets/packages/flutter_credit_card/icons/discover.png": "ea70c496dfa0169f6a3e59412472d6c1",
"assets/packages/flutter_credit_card/icons/visa.png": "9db6b8c16d9afbb27b29ec0596be128b",
"assets/packages/flutter_credit_card/icons/amex.png": "dad771da6513cec63005d2ef1271189f",
"assets/packages/flutter_credit_card/icons/mastercard.png": "7e386dc6c169e7164bd6f88bffb733c7",
"assets/packages/flutter_credit_card/font/halter.ttf": "4e081134892cd40793ffe67fdc3bed4e",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/images/info.png": "48a873f3cbd981f6d5b016199faaad39",
"assets/assets/images/message_menu.png": "582f363ed62f9281ed5cda32c7b54377",
"assets/assets/images/plus.png": "30de79c095b1bbe8739e1fa7e69fb314",
"assets/assets/images/ketshop_logo_black_text.png": "816eba60908e76640ef5545147416e41",
"assets/assets/images/arrow_right.png": "e7fff150d95456c801a74b7ccbca93d8",
"assets/assets/images/piggybank.png": "0ee52e6f6e7a78ee3e3b47d2c64cf3be",
"assets/assets/images/send_money.png": "f84c726eacbf5944c3c99f6bbf9f69b6",
"assets/assets/images/stars_left.png": "060975923b62002469271c5d703f00c8",
"assets/assets/images/toy1.png": "a2726366a01dd7320cfd1607885f7660",
"assets/assets/images/shipping.png": "f3bc2b9576109e3e2778f3a4c5e5499e",
"assets/assets/images/address.png": "5768966fb69c1e52df3cf77a5bdc3eaf",
"assets/assets/images/ketshop_illustration_inventory.png": "369ad1b49021333f3c9a64637d5f97a5",
"assets/assets/images/social_media/instagram.png": "a3a905c40eeefb3b1e6bf673536e020b",
"assets/assets/images/social_media/google.png": "74f5b86b153b9b524b2fad2555d402c1",
"assets/assets/images/social_media/facebook.png": "4f0670d998cc0c9ddbf43a5d151e9531",
"assets/assets/images/vector.png": "35532719bc56583912b4a8490223b7e7",
"assets/assets/images/dollar.png": "2e1c0455d8c93797815463ae018d3909",
"assets/assets/images/home.png": "93f0be298952b3c945d0d2dbb50319fd",
"assets/assets/images/shop.png": "2b5d9fc6fa3a103e61cbb024b5c0fc12",
"assets/assets/images/stars_right.png": "d804f783e1c19fbb01100c7975c73c0b",
"assets/assets/images/choose_product.png": "c304eb4ec7e63274f0a5715d234b8694",
"assets/assets/images/@.png": "ed41b4f4a38455b1178e12288da0b206",
"assets/assets/images/birthday.png": "dd275db8520cf146d41ddd84012e2394",
"assets/assets/images/ketshop_logo_white_text.png": "5ebe46c2f5edc5d2d63782c8b541a4ab",
"assets/assets/images/remove_item.png": "efc5e5aabe98c088f922001b53cebb78",
"assets/assets/images/cloud.png": "2ab78e284dff222be6d4392b2fe9abba",
"assets/assets/images/chiildtransaction.png": "74df0e72ccf7ba6b5b2cc4b511f85b8f",
"assets/assets/images/no_shop_item.png": "93c9509718e0e93171289846761872dd",
"assets/assets/images/bx_message_box.png": "d6b05cc6d1a9ca04adc5cda9a25ae4a9",
"assets/assets/images/productCategories/8.png": "31cfbf2463f4aa534fbfe3a86fffb205",
"assets/assets/images/productCategories/4.png": "4d801379f2284fe01f788960560836c2",
"assets/assets/images/productCategories/5.png": "31cfbf2463f4aa534fbfe3a86fffb205",
"assets/assets/images/productCategories/7.png": "31cfbf2463f4aa534fbfe3a86fffb205",
"assets/assets/images/productCategories/6.png": "31cfbf2463f4aa534fbfe3a86fffb205",
"assets/assets/images/productCategories/2.png": "691c82080a635b852cb4d0ae68cdac96",
"assets/assets/images/productCategories/3.png": "c52a04b2eaae2de3b4e7acdedb3b8280",
"assets/assets/images/productCategories/1.png": "3d2e665cadffb60021ec7eeca6610df7",
"assets/assets/images/productCategories/0.png": "ef4fdde64e95ccaf3825d1a994373a0c",
"assets/assets/images/poop.png": "e82bf3b8ce0b0361c8adcb14cb5204cd",
"assets/assets/images/bg_create_password.png": "62ae94a76ff8b9b6ee3554af96ecddcc",
"assets/assets/images/avatars/2.png": "42e168e09cd87cb4bd62b07d58e6b82d",
"assets/assets/images/avatars/3.png": "36d55af9b9e179f3b443ee780a4d0dbe",
"assets/assets/images/avatars/1.png": "813cbd257f99c80b2164244e9a7991d2",
"assets/assets/images/avatars/0.png": "35532719bc56583912b4a8490223b7e7",
"assets/assets/images/icon_add_black.png": "bc8bd06066a7b3dad1e85db19089fa65",
"assets/assets/images/categories/4.png": "4d801379f2284fe01f788960560836c2",
"assets/assets/images/categories/5.png": "31cfbf2463f4aa534fbfe3a86fffb205",
"assets/assets/images/categories/2.png": "691c82080a635b852cb4d0ae68cdac96",
"assets/assets/images/categories/3.png": "c52a04b2eaae2de3b4e7acdedb3b8280",
"assets/assets/images/categories/1.png": "3d2e665cadffb60021ec7eeca6610df7",
"assets/assets/images/categories/0.png": "ef4fdde64e95ccaf3825d1a994373a0c",
"assets/assets/images/childProduct.png": "f5a20134a742a6271ab961f7f2556abb",
"assets/assets/images/add_item.png": "b069acbe707b3b2ef7439b459e260142",
"assets/assets/images/gender.png": "95941ae1d87570693c3c1fb5fcfc5408",
"assets/assets/icons/transaction.png": "2d23b6748b8db27155bab07545c00947",
"assets/assets/icons/secure_payment.png": "bb1f5f5148b8c418d44733ea83c073d1",
"assets/assets/icons/cart.png": "945d53d6a6711ba8b62de9303ba5b74c",
"assets/assets/icons/certificate.pdf": "0120bd6800ee61a8d387ecf1f7d40cd9",
"assets/assets/icons/my_kids.png": "66f29668e4e30dc5b316c0adade8463a",
"assets/assets/icons/clarity_warning-standard-solid.png": "7fa469361c4f74cf95d2e1c9e118c6a3",
"assets/assets/icons/expansion_close.png": "451617eadd7f2519ba91ad034482e7b4",
"assets/assets/icons/applied_for.png": "4f18b0663d50a8fa46b8ba742547e954",
"assets/assets/icons/blank_broken_heart.png": "d75b53bdea81fb631ad1b0f05e741cff",
"assets/assets/icons/expansion_open.png": "c8259d063b97f64e24c633bf8aa02b77",
"assets/assets/icons/pencil.svg": "748324b92e23bfaebab2f11253fc7d3d",
"assets/assets/icons/pencil.png": "32f356fa0cec02e8cb73c2698e69546b",
"assets/assets/icons/danger.png": "fa56c3d941fe6a1856a546dca8c930f7",
"assets/assets/icons/right.png": "c3ce96083b2acd04ae07bebbd8e2a445",
"assets/assets/icons/KETSHOP_ICON.png": "e6db789b800c0f40bb332130e3186918",
"assets/assets/icons/piggybankbroke.png": "ff7780b98442aa05f514b1f127ad052b",
"assets/assets/icons/check_circle.png": "9f69672ebeb2594f7e1f727359057d52",
"assets/assets/icons/close.png": "6a315a77c9204cbd761bc4d580f43e9f",
"assets/assets/icons/piggybankbrokewithnobalance.png": "f3559c030b656d4a98c73ea088215910",
"assets/assets/icons/blankheart.png": "d53e7a5f1c3784b6af56440f8f0446bd",
"assets/assets/fonts/Quicksand/Quicksand-Bold.ttf": "0738679df4cf4e566f60343830da7bfa",
"assets/assets/fonts/Quicksand/Quicksand-Medium.ttf": "865b25e449878b6b4d1f9e098ff2f510",
"assets/assets/fonts/Quicksand/Quicksand-Regular.ttf": "216d43ee8707910af457af569eda1dec",
"assets/assets/fonts/Quicksand/Quicksand-SemiBold.ttf": "c82b184bf7450e14adccb7b0d6117474",
"assets/assets/fonts/Quicksand/Quicksand-Light.ttf": "188ca708e4cbbbe3837c3d904b8eeb61",
"assets/assets/fonts/Spartan/Spartan-Medium.ttf": "7bc456708901ba828fe5ee9803962ce5",
"assets/assets/fonts/Spartan/Spartan-ExtraBold.ttf": "94468be5b10313c7c3b7f7d0af5a8435",
"assets/assets/fonts/Spartan/Spartan-Thin.ttf": "f73c0eed7364f951dabf8b9059eabed4",
"assets/assets/fonts/Spartan/Spartan-Black.ttf": "2af453916df814fcf426f993531834ca",
"assets/assets/fonts/Spartan/Spartan-Bold.ttf": "a3b8dba87c8a969c604cab9f4267e628",
"assets/assets/fonts/Spartan/Spartan-Light.ttf": "9db064d86ea78b3a32b5c9d326739e15",
"assets/assets/fonts/Spartan/Spartan-Regular.ttf": "940184baadcd8debdbd01951870c0ec9",
"assets/assets/fonts/Spartan/Spartan-ExtraLight.ttf": "9d9d3e87960af91e1a7bc2fdf649825c",
"assets/assets/fonts/Spartan/Spartan-SemiBold.ttf": "685afe2283f2d6006cfe243a161972d1",
"sw.js": "1b0c57b45ce149a8fac162d6539341c0"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
