(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{241:function(e,t,n){"use strict";t.a={data:()=>({embedded:!1}),mounted(){this.embedded=this.getParam("embedded")||!1},methods:{makeToast(e,t,n=null){this.$bvToast.toast(t,{title:e,variant:n,solid:!0})},promisify:(e,...t)=>new Promise((n,i)=>{e(...t,(e,t)=>{e?i(e):n(t)})}),getParam(e){const t={};return window.location.href.replace(location.hash,"").replace(/[?&]+([^=&]+)=?([^&]*)?/gi,(function(e,n,i){t[n]=void 0!==i?i:""})),e?t[e]?t[e]:null:t}}}},242:function(e,t,n){const i=n(245);e.exports={description:"Create a Widget for your ERC20 or BEP20 Token and share it with your users. Add your Token to DApp browsers or MetaMask both on Ethereum, Binance Smart Chain or Polygon Network.",base:"/watch-token/",plugins:[["google-gtag",{ga:i.gaId}],["vuepress-plugin-facebook-pixel",{pixelId:i.fbPixelId}]],head:[["link",{rel:"shortcut icon",href:"/favicon.ico"}],["meta",{name:"viewport",content:"width=device-width, initial-scale=1, user-scalable=no"}],["meta",{property:"og:type",content:"website"}],["meta",{property:"og:url",content:"https://vittominacori.github.io/watch-token"}],["meta",{property:"og:image",content:"https://vittominacori.github.io/watch-token/assets/images/watch-token.png"}],["meta",{property:"twitter:card",content:"summary_large_image"}],["meta",{property:"twitter:image",content:"https://vittominacori.github.io/watch-token/assets/images/watch-token.png"}],["meta",{property:"twitter:title",content:"WatchToken | Create a Widget for your ERC20 or BEP20 Token"}],["script",{src:"/assets/js/web3.min.js"}],["script",{src:"https://cdn.jsdelivr.net/npm/cookie-bar/cookiebar-latest.min.js?forceLang=en&theme=momh&thirdparty=1&always=1&noGeoIp=1&scrolling=1&hideDetailsBtn=1",defer:!0}]],defaultNetwork:i.defaultNetwork,infuraProjectId:i.infuraProjectId,bitlyAccessToken:i.bitlyAccessToken}},244:function(e,t,n){"use strict";n(93);var i=n(242),a=n.n(i),o=n(246);t.a={data:()=>({web3:null,web3Provider:null,metamask:{installed:!1,netId:null},network:{default:a.a.defaultNetwork,current:null,map:{1:"mainnet",3:"ropsten",4:"rinkeby",42:"kovan",5:"goerli",56:"bsc_mainnet",97:"bsc_testnet"},list:{mainnet:{blockchain:"Ethereum",tokenType:"ERC20",web3Provider:"https://mainnet.infura.io/v3/"+a.a.infuraProjectId,explorerLink:"https://etherscan.io",explorerName:"Etherscan",id:1,name:"Main Ethereum Network"},ropsten:{blockchain:"Ethereum",tokenType:"ERC20",web3Provider:"https://ropsten.infura.io/v3/"+a.a.infuraProjectId,explorerLink:"https://ropsten.etherscan.io",explorerName:"Etherscan",id:3,name:"Ropsten Test Network"},rinkeby:{blockchain:"Ethereum",tokenType:"ERC20",web3Provider:"https://rinkeby.infura.io/v3/"+a.a.infuraProjectId,explorerLink:"https://rinkeby.etherscan.io",explorerName:"Etherscan",id:4,name:"Rinkeby Test Network"},kovan:{blockchain:"Ethereum",tokenType:"ERC20",web3Provider:"https://kovan.infura.io/v3/"+a.a.infuraProjectId,explorerLink:"https://kovan.etherscan.io",explorerName:"Etherscan",id:42,name:"Kovan Test Network"},goerli:{blockchain:"Ethereum",tokenType:"ERC20",web3Provider:"https://goerli.infura.io/v3/"+a.a.infuraProjectId,explorerLink:"https://goerli.etherscan.io",explorerName:"Etherscan",id:5,name:"Goerli Test Network"},bsc_mainnet:{blockchain:"Binance Smart Chain",tokenType:"BEP20",web3Provider:"https://bsc-dataseed.binance.org/",explorerLink:"https://bscscan.com",explorerName:"BscScan",id:56,name:"BSC Mainnet"},bsc_testnet:{blockchain:"Binance Smart Chain",tokenType:"BEP20",web3Provider:"https://data-seed-prebsc-1-s1.binance.org:8545/",explorerLink:"https://testnet.bscscan.com",explorerName:"BscScan",id:97,name:"BSC Testnet"},polygon_mainnet:{blockchain:"Polygon",tokenType:"ERC20",web3Provider:"https://polygon-rpc.com/",explorerLink:"https://polygonscan.com",explorerName:"PolygonScan",id:137,name:"Polygon Mainnet"},polygon_mumbai:{blockchain:"Polygon",tokenType:"ERC20",web3Provider:"https://rpc-mumbai.maticvigil.com/",explorerLink:"https://mumbai.polygonscan.com",explorerName:"PolygonScan",id:80001,name:"Matic Mumbai"}},blockchains:["Ethereum","Binance Smart Chain","Polygon"]},contracts:{token:null},instances:{token:null}}),methods:{async initWeb3(e,t){if(!Object.prototype.hasOwnProperty.call(this.network.list,e))throw new Error(`Failed initializing network ${e}. Allowed values are ${Object.keys(this.network.list)}.`);if(t&&void 0!==window.ethereum){console.log("injected ethereum"),this.web3Provider=window.ethereum,this.web3=new Web3(this.web3Provider),this.metamask.installed=this.web3Provider.isMetaMask;const t=await this.promisify(this.web3.eth.getChainId);this.metamask.netId=t,t!==this.network.list[e].id&&(this.network.current=this.network.list[this.network.map[t]],await this.initWeb3(e,!1))}else console.log("provided ethereum"),this.network.current=this.network.list[e],this.web3Provider=new Web3.providers.HttpProvider(this.network.list[e].web3Provider),this.web3=new Web3(this.web3Provider)},initContract(e){console.log(`init ${e} on ${this.network.current.name}`),this.instances.token=new this.web3.eth.Contract(o,e)}}}},245:function(e){e.exports=JSON.parse('{"defaultNetwork":"mainnet","gaId":"G-814BMHTBTK","fbPixelId":"373489733749849","infuraProjectId":"be402bb729b2472ba828e013468dc626","bitlyAccessToken":"5f9b3f6dc31fa147f4609bcf3af4e5319c7fe6d6"}')},246:function(e){e.exports=JSON.parse('[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]')},292:function(e,t,n){"use strict";n.r(t);var i=n(241),a=n(244),o={name:"Detail",mixins:[i.a,a.a],data:()=>({loaded:!1,loading:!0,tokenLink:"",tokenEmbed:"No longer available",currentNetwork:null,token:{}}),mounted(){this.currentNetwork=this.getParam("network")||this.network.default,this.initDapp()},methods:{async initDapp(){this.network.current=this.network.list[this.currentNetwork];try{await this.initWeb3(this.currentNetwork,!0),await this.getToken(this.getParam("address"))}catch(e){alert(e),document.location.href=this.$withBase("/")}},async getToken(e){if(e){if(this.token.address=e,this.initContract(this.token.address),this.token.name=await this.promisify(this.instances.token.methods.name().call),this.token.symbol=await this.promisify(this.instances.token.methods.symbol().call),this.token.decimals=(await this.promisify(this.instances.token.methods.decimals().call)).valueOf(),this.token.logo=this.getParam("logo")?decodeURIComponent(this.getParam("logo")):"",this.token.name&&this.token.symbol&&this.token.decimals){this.loaded=!0;const e=this.web3.utils.toHex(JSON.stringify({address:this.token.address,logo:this.token.logo}));this.tokenLink=window.location.origin+this.$withBase(`/page/?hash=${e}&network=${this.currentNetwork}`),this.embedded||(document.location.href=this.tokenLink)}else alert("It seems that it is not a valid Token or you are on the wrong network"),this.loaded=!1;this.loading=!1}else document.location.href=this.$withBase("/")}}},r=n(16),s=Object(r.a)(o,(function(){var e=this,t=e._self._c;return t("b-row",{staticClass:"p-0 pt-4"},[e.loading?t("b-col",{attrs:{lg:"6","offset-lg":"3"}},[t("b-card",{attrs:{"bg-variant":"light"}},[t("ui--loader",{attrs:{loading:e.loading}})],1)],1):e._e(),e._v(" "),e.loading||e.loaded?e._e():t("b-col",{attrs:{lg:"6","offset-lg":"3"}},[t("b-card",{attrs:{"bg-variant":"light"}},[t("blockquote",[e._v("Some error occurred")]),e._v(" "),t("router-link",{attrs:{to:"/create/"}},[e._v("Try adding your token")])],1)],1),e._v(" "),e.loaded?t("b-col",{staticClass:"mt-2 p-0",attrs:{lg:"6","offset-lg":"3"}},[t("b-card",{attrs:{"footer-class":"p-0","no-body":""}},[t("b-alert",{staticClass:"m-0",attrs:{show:"",variant:"warning"}},[e._v("\n        Embed is no longer available."),t("br"),e._v("\n        Click\n        "),t("b-link",{attrs:{href:e.tokenLink,target:"_blank"}},[e._v("here")]),e._v("\n        to have more information about "+e._s(e.token.name)+".\n      ")],1)],1)],1):e._e()],1)}),[],!1,null,null,null);t.default=s.exports}}]);