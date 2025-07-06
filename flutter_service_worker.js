'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "10a2887c6c7d286debc6f1abdc3a0506",
"version.json": "de5b1561d6d4e574eb9592451c73fc72",
"index.html": "ee162408fc9722323b566d89e6c7b06e",
"/": "ee162408fc9722323b566d89e6c7b06e",
"main.dart.js": "0c09acb5815b6cc93eddd8400895603f",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "d13344fde64baf61f8cee24e4997bf00",
".git/ORIG_HEAD": "977b279ff6fb907d1c468bed9a73a45f",
".git/config": "3f51fdf86a504d58c61101cc06a1d450",
".git/objects/59/a3309b02aa3e6f7c250d9f3a5946a9beb7ee34": "0b5004b50bd622f42d9b3527f8499d01",
".git/objects/0c/841b31bb49b2355416c434420c22b80d24dc35": "dac64173e69a9feea55463a6509fe20f",
".git/objects/66/fecb14476b99e551d2fc4e989200fa65bea704": "ac3ee2aba2a48d3eb7e59f33804d3c14",
".git/objects/3e/ce4149816f30e9b113a37c5d3ab91b3dda4769": "78485321c331fc92e095a76a8c2b5717",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/9e/dc3a738562230f375448e4dbaaf53172610fbd": "878daa5fdc42bc30d473b34cbb3d880b",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/56/8a8ffabe5a00a62eaf0dd9a3be588d3c0b1f4b": "8c5c1b8f5ac4e72e27732665e50e859a",
".git/objects/56/a58da686e43ca5813a154e83ace4cbd84d33a6": "076b731cf135e792ecceed0ead20c1c1",
".git/objects/56/e927eec038d9eae62cce95da0a0c6917dafc86": "e3763185e3326a2008f50e158bab531e",
".git/objects/60/ee8da77477ae648431bfdf800ec3c52a6dd58b": "206f1c418d9118335e0c18e24172e222",
".git/objects/5a/152430d4624db5d906d1a18e0529dccc61c84e": "0c1f92b13e32235f8575cedea4770b58",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/a4/614ea26b1e0bee49cec014159360ef5edd1651": "760c2f2dd7fca678a3569734db1324c9",
".git/objects/a3/fc6de623f7aba0c708cec6385296cf1b5a6508": "0fee675f6898f961f5feed9691efddc6",
".git/objects/b5/fa43dc2e43b34136258c47708304263a340cf9": "aca3f450ad4425058da95e4f4718e9b4",
".git/objects/b2/e9877bdad95790cc9df1279e81b127ac5124b1": "0d4c3d00bcd974dfbaa66646b1bdd0bb",
".git/objects/d9/1288e982861e066e0dd01f3b157d52227ccfbf": "9bab30f2c7a3443f21b655b9a2a5590a",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/d9/91fc0a5c677f8b14ac6dc50cddab3f350bb262": "1d4363cd74a34273740f2d8815ce0577",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d0/e1fc1a90e8701ece12a246de5f1b236f964f65": "8569444ea55f1678651f72115a794aec",
".git/objects/be/a96c5c4e4a261cacd8c69ca627164a63895888": "a32b0bfa131d8ad6f159b943990675db",
".git/objects/be/6ee810223a839a3fa7346489fd1165725fe323": "f69400e1ec7e838f906a4b688c52a0b5",
".git/objects/b3/a92294b5adc80988cee7425eabda596f0636f1": "1bdd40a3ded55feaaa301e78c06adb37",
".git/objects/da/9e934f05021a3f35255a7a1c68714754bb3cf9": "9e31abcd3256571393eaddc08f37d735",
".git/objects/b4/410d121d54f8440e94e4c0572691885c49e264": "0833788dd9c026833d2ae37e888f9980",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/bd/6be43d015a2a8a92db341ee519feb383a20cb4": "0df4c80430aff6e9b0cdd970bc215545",
".git/objects/d6/b59d52c8b3500453becc0117fbaf84a4dd5701": "29d21570a98c836478e60a3e79754de6",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/b289265185bb3975adc0ede198e2a97231ae78": "d35890cbc81e19a5e0b9c151bfaf8500",
".git/objects/e5/98408809b5369d26f566c5e1798aeb02c17367": "6b96625992c4f12eea7ece51ecde3bc9",
".git/objects/f4/2152614421de1ec7b7cb700548058ea4bff006": "998205dde26384c857ce6916a3068680",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c0/3e145cdba24b484b0fd508a497096be3059795": "42fcbbda3f0a67600ce9b2e2bac2a411",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/fe/e2a21a717b9e0c53dd1827580b86e6f907a6d4": "3f5c1649ecd65bc907f307cdc4636ecd",
".git/objects/c1/eff02c8822915d359bd206bfcdfe628c58f048": "b49a091a9059be3b1342aa1c03e99d41",
".git/objects/c1/d02c4799861be884f187a1e87457adad689c6d": "5796f4040c91c84f31141f6098983ad3",
".git/objects/ec/19d94a108e0134a393ce13a6c87558ff97db11": "8fef62d1d89d571cb2519b3f0a0890c3",
".git/objects/4e/bb272d7e866d2cadbe4e210754a6d461e34f3a": "57e82ac752d49ce641130b68256ead19",
".git/objects/29/d005dd1bdc3c46a908e17916eff993340a53f4": "038a1efb4ae6b0ce6565e3eda884b949",
".git/objects/29/c7271b0b363233e62d0a0909eac230e20af2c4": "fc950e89cdc8da9554b302530de69f85",
".git/objects/42/2a2a365df110698bddda43b15d078a0b9605a2": "4cdeaaa392718d2e1d8cd9fafcb70d1f",
".git/objects/73/f48cccdc48829c4ca9899aa001050b568e450f": "117323e0e88ef4ae72d776cf4d3e8780",
".git/objects/73/ec8f188f791dedb8abebdf9e3e53ba9a54346d": "e5ccd0f4596a060be5b09ea50216c9e8",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/10/5e6baec74a0ad59e719b195b28f83d9f338154": "a43ca8cf566e160e8100a54065ab25cc",
".git/objects/19/dc0c8c4630f1705c33d49db15ca707bae15a20": "34e10c715918e7b753c1a64abc9d9064",
".git/objects/4c/17fdb2b7107f3c12162b595616588412618abd": "fa1784bf890d0ab1ca493920b3398d84",
".git/objects/21/fa068ff491ae99456f9df587556d508cd19c74": "2e3c838f28f7c751cdb89a9333b19c51",
".git/objects/4d/b10d84f8da7b4c94c28fc4c25be54d3f0a4546": "d34b6ab51209d6371a54a4516425576e",
".git/objects/2a/0ae1a191f8a45da225fa3afed1717ddf7d2967": "a1b0d2e65be9215ae5719b7fc1c2c0b3",
".git/objects/2f/5a99e39eb3f462f5b3a272bf0455ff2de35d6b": "c4b4b2b6e67124ef4367e23afac1cc16",
".git/objects/2f/e65b0cc601f5cbaff10ef7841d10eb82d48716": "674abb7b867cb312b8e6c3507ce7d202",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/54490039d9cba2ddb45858029154c15b72529a": "2e601ab479be49cbaf8eee22acb609f5",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6e/c87dcb7da236e120cdcf848b502f26bf7688c4": "31b12a5f602c7bb10c0155a28c3ec706",
".git/objects/36/e8497c7a735be9d36522e7c56b3ddb2b8c530d": "7f0f74083a7875da999f682ca57ef455",
".git/objects/5d/c3e8c208a8aa5ba0694ed45105c20545b3034f": "ee7b1ab267258cdded7e755f5545c981",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/65/aa5d95f95a0e4847949e1a9caaec7346215008": "d119f498e2cba43efe6f1ae86572b672",
".git/objects/62/318f5aee22bb4b60b7d6a99de4b87b84b0d87b": "0e6b5d5748c12e894105409453166ad5",
".git/objects/54/7354ff37c3a67a8c8f0eb58340ef4b8facc8fa": "4326e5b8f8ee4bc851ee81267e2a9131",
".git/objects/98/9368a6a498653111d121cb59c11c79e3c50f10": "1d17f502861854d98376e8f9a22266ae",
".git/objects/37/e02d1c7da68bc41552f28b2e67d17039e80916": "5fc50528ea8b648c9e661ad494fd10f9",
".git/objects/6d/7c73f23815f90876ddf0d738124edcc9b39bd5": "bbea1feb036c55e278a458d86c08a49d",
".git/objects/99/280bc18697168a8ab0d6ed3f58d6a54cbcbf51": "232cdaf0e9c25cc400017213456c56f0",
".git/objects/97/1352cc50e0b8d744acb2512456f2ebd7ddc28a": "9879b90c8e8b48a74592cb74826f8147",
".git/objects/97/f5eaf9b599fc213de8645b27d2ce19185f10bb": "9f3f47f952ef537bbbfbc9a5f2039adf",
".git/objects/63/6563df3391a0a88bbca8bcaa911a6ab573ef42": "812223011251e28a981e5837144effc1",
".git/objects/0f/ece983b775e9990a44012bec35f1bea62a2c9a": "93a18afcbc79342c82ad79034dc05a9b",
".git/objects/0a/07cd4e10b90fc5325308ddde676dc175aef3d1": "4a87e1769b5e7e2a396c5f0189a5003d",
".git/objects/64/754ceb880c563016224e0a5e67d76c78c1cc69": "f1402666b12e373620f61df7d90d7557",
".git/objects/90/dd341746abc50cd3248a398b2d5a6d4444b52d": "301421cbfb9f66b0bcf795e77a635d17",
".git/objects/90/2e542fe95493fef8fc12409c04538c63002673": "5cbc109343b823148b59388d717dc4be",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/8a8fc1bb5a411178910f8177d782fef2a28ee7": "740dae64b06badba292a57471bb0ae7c",
".git/objects/a0/8d87008795411f8fa245072da747d1014340c5": "f9d7592d84ef5f535102b2b4b7bc9dd4",
".git/objects/a0/17e8a9c1217463e5c32a558bf29a380e75622f": "1548adb7af426e937ea34b2e2f2869d7",
".git/objects/a7/54dbbc35eb3b8bd35f757e04e6414936205bfb": "76ce2fd124fb29baf7f606818ee001c7",
".git/objects/a7/6584f9c48de6d4766a4cffee57b8622915d777": "c100191d87887118f8a6bcb0125c6fa8",
".git/objects/dc/8fe2a9aaeffcdf0008a56cab48598899b333af": "3169ec8aee42c657368b636e8da13339",
".git/objects/dc/f83695f71da8c6278eb914cdd42692c427924e": "9ca7f32e12839dea4610032ada023058",
".git/objects/dc/3bd61568cdc1bbee1ea2cef2b3fe224475e95e": "acef3e4bd523b4ffc6a27a34025ef19e",
".git/objects/b6/51234ee58e2438c63e26d36358665324db53fd": "c83adf22db7cff20ee188e7fe7002c5c",
".git/objects/d5/e189f89b0030a916fd66f8c3fb65e583013334": "832df31c19abab5ccb7afa7edc6934da",
".git/objects/d2/46813172bfbc1f9883163b7872be01582dc6d6": "fa7c265b9b6c9eb30852d96f5a7b3962",
".git/objects/aa/69b91fd2445bbafed34926387b239791ed71ea": "47f271d816a8d4da6cbf24bf0d2c915b",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/3efdaf0cde1e9f6e9e632d8d556f0d0c813146": "fb43c40b2272890b33c801c9286454ac",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/b0/99bd67d6b1bb7fc8052398fe56eac9d269d108": "03cf7fd96b4968cca0193dd71d8a4a7f",
".git/objects/b0/0cc2282ba8af99f9c54c137d494c6da3e7caa9": "1160c27fbe80a7251dea950e6a1dc0c4",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/c02bd84ec92f866184ae6093958ceb10c6ee2e": "9763b00d22e8146b2b7a91b3fabbe9bd",
".git/objects/b9/fbc5bfd9418aa7cfde71d0b8d2567deee0f7d9": "c43a7f4f02cef7b5314e27001f5e5f06",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/ef/85878ac68d630f257dd0cc5c8a479d7d54f1d9": "e07b8eb7f7117a47a30cfd50a484b79f",
".git/objects/ea/3b8862125c46b3cdbd6ef94ef7443684c4af43": "c1526198b97ea3bc6d46f58692771a1a",
".git/objects/cd/1155b2a9dc4804ca6f8c7bd411b5875990e16a": "07d8bc05935a5d6abd7a5ee37e821044",
".git/objects/f0/0a1d82407f3da4503125a891f020f26b02243e": "25bbe88f82681278332f56762f030201",
".git/objects/e8/edf2c03df05ff8b757f8c573f27f2878815e20": "8d1ce97f8b55958c361ccde6defd7499",
".git/objects/fa/a53b2ba1032b8871b5f46ba3770764a1318e1e": "a6ac7a06e0f1375a08ace5eabb8f6031",
".git/objects/ff/9b1da90c8a2ae0b6c6748496acf4a49d7b670e": "c30f35f0160b612c6e0ede4333c9a19b",
".git/objects/c2/9b33a919a5eda63f06fc24a2bc2016c6f2484f": "48397949b6ffcfe265475a097e01dd0f",
".git/objects/f6/a1700a1001425aff56f992671f3bffdb94a6ae": "6f1574a2826989099747a20be7aa6213",
".git/objects/e9/e1e02e1e6f8e1ceee5dc8d0f72ca6511714417": "da4caf406b09ed1e3efa5eab15376556",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/7e90748340a7fc92a32c22ccc2335ddb5d5ca0": "c42650dfd2c74bcfec84e15e6f723f21",
".git/objects/2c/46f936fa1256630903b25a0a3e185ea8139cea": "65bfa31cf64c9a03a111a75cbcb8242f",
".git/objects/83/d3aac39494b75d125f51cbcc2805f7f37ad387": "45844660e26baf03824d1f1ce2169713",
".git/objects/1b/0e5ea9d110994fb7f6065bfede380a8441e704": "e720d9905a0f6f30e68fb583b53d1be9",
".git/objects/77/0ab7e4a48e1253961a855fd994a413ba7109dd": "58c8f2555ae74d58740800c152787210",
".git/objects/4a/401e95eb4ad34869ba67d779a89ffc06f68b9d": "0f84dd0b7bb736106ac4b3df5c47ba18",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/76/96e2a65237cf77ed38497c1004768069932efd": "1e65ce3ff3c90b2774725f5748127c6f",
".git/objects/1c/d225783cdc933fb0afd5f8066aab01c4934789": "aaedb32b6863e2287f9aa99c45a5fc87",
".git/objects/40/f955429d1230124a2ca941a71a5525f9c4dade": "30792e5d4ae22b265ecbfc5344315788",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/2e/ea525d885d5148108f6f3a9a8613863f783d36": "0c2627dd9d4a0f84b0d2868628ca39a7",
".git/objects/2b/6724559f4f14d6be2e060ae15f3dff54a18b18": "c78e4448f8512ed8e075a39a2c3b2256",
".git/objects/47/653ef4b7baaffbce46911a564ce24d57e73a3d": "78b24938f228c739914e072a0e2ed6f2",
".git/objects/13/adbe82d35c3041553177f7f6ece746730d7c82": "8a1c84d620a9c1100c7c66ac441d1590",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "471cc4331d02b2758a83a2ffe7dfab6e",
".git/logs/refs/heads/test": "9cc15a20b6cc5346f82889483efc31c4",
".git/logs/refs/heads/main": "fecae34ec35da93d9b3c29c9bce918d5",
".git/logs/refs/remotes/origin/main": "fe607c820221b792f62539703e09cf04",
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
".git/refs/heads/test": "d9d308041c82e97067430b0be01effad",
".git/refs/heads/main": "319c439663e3b88e45493687993e2186",
".git/refs/remotes/origin/main": "319c439663e3b88e45493687993e2186",
".git/index": "863d0fdc3f12190d7620bc5db069f77d",
".git/COMMIT_EDITMSG": "f4f0d2154f338fd8edb38fc3839f22dd",
".git/FETCH_HEAD": "65eabc7ff7a1ebfdc6a3c7eaaea229fd",
"assets/AssetManifest.json": "e363f09568cf4987aeb9b6abe1dda09c",
"assets/NOTICES": "4bb00321ded6864ee65275e1d14ab87f",
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
