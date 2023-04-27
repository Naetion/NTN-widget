(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{241:function(t,e,n){"use strict";e.a={data:()=>({embedded:!1}),mounted(){this.embedded=this.getParam("embedded")||!1},methods:{makeToast(t,e,n=null){this.$bvToast.toast(e,{title:t,variant:n,solid:!0})},promisify:(t,...e)=>new Promise((n,a)=>{t(...e,(t,e)=>{t?a(t):n(e)})}),getParam(t){const e={};return window.location.href.replace(location.hash,"").replace(/[?&]+([^=&]+)=?([^&]*)?/gi,(function(t,n,a){e[n]=void 0!==a?a:""})),t?e[t]?e[t]:null:e}}}},242:function(t,e,n){const a=n(245);t.exports={description:"Create a Widget for your ERC20 or BEP20 Token and share it with your users. Add your Token to DApp browsers or MetaMask both on Ethereum, Binance Smart Chain or Polygon Network.",base:"/watch-token/",plugins:[["google-gtag",{ga:a.gaId}],["vuepress-plugin-facebook-pixel",{pixelId:a.fbPixelId}]],head:[["link",{rel:"shortcut icon",href:"/favicon.ico"}],["meta",{name:"viewport",content:"width=device-width, initial-scale=1, user-scalable=no"}],["meta",{property:"og:type",content:"website"}],["meta",{property:"og:url",content:"https://vittominacori.github.io/watch-token"}],["meta",{property:"og:image",content:"https://vittominacori.github.io/watch-token/assets/images/watch-token.png"}],["meta",{property:"twitter:card",content:"summary_large_image"}],["meta",{property:"twitter:image",content:"https://vittominacori.github.io/watch-token/assets/images/watch-token.png"}],["meta",{property:"twitter:title",content:"WatchToken | Create a Widget for your ERC20 or BEP20 Token"}],["script",{src:"/assets/js/web3.min.js"}],["script",{src:"https://cdn.jsdelivr.net/npm/cookie-bar/cookiebar-latest.min.js?forceLang=en&theme=momh&thirdparty=1&always=1&noGeoIp=1&scrolling=1&hideDetailsBtn=1",defer:!0}]],defaultNetwork:a.defaultNetwork,infuraProjectId:a.infuraProjectId,bitlyAccessToken:a.bitlyAccessToken}},244:function(t,e,n){"use strict";n(93);var a=n(242),s=n.n(a),i=n(246);e.a={data:()=>({web3:null,web3Provider:null,metamask:{installed:!1,netId:null},network:{default:s.a.defaultNetwork,current:null,map:{1:"mainnet",3:"ropsten",4:"rinkeby",42:"kovan",5:"goerli",56:"bsc_mainnet",97:"bsc_testnet"},list:{mainnet:{blockchain:"Ethereum",tokenType:"ERC20",web3Provider:"https://mainnet.infura.io/v3/"+s.a.infuraProjectId,explorerLink:"https://etherscan.io",explorerName:"Etherscan",id:1,name:"Main Ethereum Network"},ropsten:{blockchain:"Ethereum",tokenType:"ERC20",web3Provider:"https://ropsten.infura.io/v3/"+s.a.infuraProjectId,explorerLink:"https://ropsten.etherscan.io",explorerName:"Etherscan",id:3,name:"Ropsten Test Network"},rinkeby:{blockchain:"Ethereum",tokenType:"ERC20",web3Provider:"https://rinkeby.infura.io/v3/"+s.a.infuraProjectId,explorerLink:"https://rinkeby.etherscan.io",explorerName:"Etherscan",id:4,name:"Rinkeby Test Network"},kovan:{blockchain:"Ethereum",tokenType:"ERC20",web3Provider:"https://kovan.infura.io/v3/"+s.a.infuraProjectId,explorerLink:"https://kovan.etherscan.io",explorerName:"Etherscan",id:42,name:"Kovan Test Network"},goerli:{blockchain:"Ethereum",tokenType:"ERC20",web3Provider:"https://goerli.infura.io/v3/"+s.a.infuraProjectId,explorerLink:"https://goerli.etherscan.io",explorerName:"Etherscan",id:5,name:"Goerli Test Network"},bsc_mainnet:{blockchain:"Binance Smart Chain",tokenType:"BEP20",web3Provider:"https://bsc-dataseed.binance.org/",explorerLink:"https://bscscan.com",explorerName:"BscScan",id:56,name:"BSC Mainnet"},bsc_testnet:{blockchain:"Binance Smart Chain",tokenType:"BEP20",web3Provider:"https://data-seed-prebsc-1-s1.binance.org:8545/",explorerLink:"https://testnet.bscscan.com",explorerName:"BscScan",id:97,name:"BSC Testnet"},polygon_mainnet:{blockchain:"Polygon",tokenType:"ERC20",web3Provider:"https://polygon-rpc.com/",explorerLink:"https://polygonscan.com",explorerName:"PolygonScan",id:137,name:"Polygon Mainnet"},polygon_mumbai:{blockchain:"Polygon",tokenType:"ERC20",web3Provider:"https://rpc-mumbai.maticvigil.com/",explorerLink:"https://mumbai.polygonscan.com",explorerName:"PolygonScan",id:80001,name:"Matic Mumbai"}},blockchains:["Ethereum","Binance Smart Chain","Polygon"]},contracts:{token:null},instances:{token:null}}),methods:{async initWeb3(t,e){if(!Object.prototype.hasOwnProperty.call(this.network.list,t))throw new Error(`Failed initializing network ${t}. Allowed values are ${Object.keys(this.network.list)}.`);if(e&&void 0!==window.ethereum){console.log("injected ethereum"),this.web3Provider=window.ethereum,this.web3=new Web3(this.web3Provider),this.metamask.installed=this.web3Provider.isMetaMask;const e=await this.promisify(this.web3.eth.getChainId);this.metamask.netId=e,e!==this.network.list[t].id&&(this.network.current=this.network.list[this.network.map[e]],await this.initWeb3(t,!1))}else console.log("provided ethereum"),this.network.current=this.network.list[t],this.web3Provider=new Web3.providers.HttpProvider(this.network.list[t].web3Provider),this.web3=new Web3(this.web3Provider)},initContract(t){console.log(`init ${t} on ${this.network.current.name}`),this.instances.token=new this.web3.eth.Contract(i,t)}}}},245:function(t){t.exports=JSON.parse('{"defaultNetwork":"mainnet","gaId":"G-814BMHTBTK","fbPixelId":"373489733749849","infuraProjectId":"be402bb729b2472ba828e013468dc626","bitlyAccessToken":"5f9b3f6dc31fa147f4609bcf3af4e5319c7fe6d6"}')},246:function(t){t.exports=JSON.parse('[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]')},289:function(t,e,n){"use strict";n.r(e);var a=n(241),s=n(244),i=n(242),o=n.n(i);const r=new(n(261).BitlyClient)(o.a.bitlyAccessToken,{});var l={methods:{async shorten(t){try{return(await r.shorten(t)).link}catch(e){return t}}}},c={name:"Page",mixins:[a.a,s.a,l],data:()=>({loaded:!1,loading:!0,share:{},currentNetwork:null,token:{}}),computed:{sctLink(){const t=this.network.current?"Ethereum"===this.network.current.blockchain?"ethereum_"+this.currentNetwork:this.currentNetwork:"ethereum_mainnet";return`https://www.smartcontracts.tools/token-watcher/page/?hash=${this.token.hash}&network=${t}`}},mounted(){this.currentNetwork=this.getParam("network")||this.network.default,this.initDapp()},methods:{async initDapp(){this.network.current=this.network.list[this.currentNetwork];try{await this.initWeb3(this.currentNetwork,!0),await this.getToken(decodeURIComponent(this.getParam("hash")))}catch(t){alert(t),document.location.href=this.$withBase("/")}},async getToken(t){if(t){const e=JSON.parse(this.web3.utils.hexToAscii(t));this.token.hash=t,this.token.address=e.address,this.initContract(this.token.address),this.token.name=await this.promisify(this.instances.token.methods.name().call),this.token.symbol=await this.promisify(this.instances.token.methods.symbol().call),this.token.decimals=(await this.promisify(this.instances.token.methods.decimals().call)).valueOf(),this.token.logo=e.logo?e.logo:"",this.token.name&&this.token.symbol&&this.token.decimals?(this.token.explorerLink=`${this.network.current.explorerLink}/token/${this.token.address}`,this.loaded=!0,document.title=`${this.token.name} (${this.token.symbol}) | ${this.$page.frontmatter.title}`):(alert("It seems that it is not a valid Token or you are on the wrong network"),this.loaded=!1),this.loading=!1}else document.location.href=this.$withBase("/")},async addToMetaMask(){if(this.metamask.installed)if(this.metamask.netId===this.network.current.id)try{await this.web3Provider.request({method:"wallet_watchAsset",params:{type:"ERC20",options:{address:this.token.address,symbol:this.token.symbol.substr(0,11),decimals:this.token.decimals,image:this.token.logo}}})}catch(t){console.log(t)}else alert(`Your MetaMask in on the wrong network. Please switch on ${this.network.current.name} and try again!`);else alert("Please install MetaMask and try again!")},async shareToken(){this.share.tokenLink=window.location.origin+this.$withBase(`/page/?hash=${this.token.hash}&network=${this.currentNetwork}`),this.share.shortLink=await this.shorten(this.share.tokenLink),this.share.facebook=`https://www.facebook.com/sharer.php?u=${this.share.shortLink}&quote=Discover more about ${this.token.name} (${this.token.symbol}).`,this.share.twitter=`https://twitter.com/intent/tweet?url=${this.share.shortLink}&text=Discover more about ${this.token.name} (${this.token.symbol}).`,this.share.telegram=`https://t.me/share/url?url=${this.share.shortLink}&text=Discover more about ${this.token.name} (${this.token.symbol}).`,this.share.whatsapp=`https://wa.me/?text=Discover more about ${this.token.name} (${this.token.symbol}). ${this.share.shortLink}`,this.$forceUpdate(),this.$refs.shareModal.show()}}},h=n(16),p=Object(h.a)(c,(function(){var t=this,e=t._self._c;return e("b-row",{staticClass:"p-0 pt-4"},[t.loading?e("b-col",{attrs:{lg:"8","offset-lg":"2"}},[e("b-card",{attrs:{"bg-variant":"light"}},[e("ui--loader",{attrs:{loading:t.loading}})],1)],1):t._e(),t._v(" "),t.loading||t.loaded?t._e():e("b-col",{attrs:{lg:"8","offset-lg":"2"}},[e("b-card",{attrs:{"bg-variant":"light"}},[e("blockquote",[t._v("Some error occurred")]),t._v(" "),e("router-link",{attrs:{to:"/create/"}},[t._v("Try adding your token")])],1)],1),t._v(" "),t.loaded?e("b-col",{staticClass:"mt-2 p-0",attrs:{lg:"8","offset-lg":"2"}},[e("b-link",{staticClass:"text-dark text-decoration-none",attrs:{href:t.sctLink}},[e("b-card",{staticClass:"mb-4",attrs:{role:"button","bg-variant":"warning"},scopedSlots:t._u([{key:"footer",fn:function(){return[t._v("\n        Want to try new features? We created "),e("b",[t._v("SmartContracts Tools")]),t._v(" at "),e("b",[t._v("NONCEPT.")])]},proxy:!0}],null,!1,1826343573)},[e("b-row",[e("b-col",{attrs:{sm:"2"}},[e("b-img",{attrs:{src:t.$withBase("/assets/images/token-watcher.svg"),fluid:""}})],1),t._v(" "),e("b-col",{attrs:{sm:"10"}},[e("h3",[t._v("View "+t._s(t.token.name)+" on SmartContracts Tools.")]),t._v(" "),e("h4",[t._v("Try the new Token Watcher.")])])],1)],1)],1),t._v(" "),e("b-jumbotron",{staticClass:"px-3 py-4",attrs:{"bg-variant":"light","header-level":"4"},scopedSlots:t._u([{key:"header",fn:function(){return[e("b-media",{staticClass:"mb-3"},[t.token.logo?e("b-img",{attrs:{slot:"aside",src:t.token.logo,rounded:"circle",width:"64",height:"64",alt:t.token.name},slot:"aside"}):t._e(),t._v("\n          "+t._s(t.token.name)+"\n        ")],1)]},proxy:!0},{key:"lead",fn:function(){},proxy:!0}],null,!1,1803796552)},[t._v(" "),t._v(" "),e("hr",{staticClass:"my-4"}),t._v(" "),e("h6",[t._v("Name: "),e("span",{staticClass:"text-muted"},[t._v(t._s(t.token.name))])]),t._v(" "),e("h6",[t._v("Symbol: "),e("span",{staticClass:"text-muted"},[t._v(t._s(t.token.symbol))])]),t._v(" "),e("h6",[t._v("Decimals: "),e("span",{staticClass:"text-muted"},[t._v(t._s(t.token.decimals))])]),t._v(" "),e("h6",[t._v("Address: "),e("span",{staticClass:"text-muted token-address"},[t._v(t._s(t.token.address))])]),t._v(" "),e("hr",{staticClass:"my-4"}),t._v(" "),e("b-link",{staticClass:"btn btn-success my-2",on:{click:t.addToMetaMask}},[e("b-icon-plus-circle-fill"),t._v("\n        Add to MetaMask\n      ")],1),t._v(" "),e("b-link",{staticClass:"btn btn-primary my-2",attrs:{href:t.token.explorerLink,target:"_blank"}},[e("b-icon-arrow-up-right-circle-fill"),t._v("\n        View on "+t._s(t.network.current.explorerName)+"\n      ")],1),t._v(" "),e("b-link",{staticClass:"btn btn-info my-2 float-right",on:{click:t.shareToken}},[e("b-icon-share")],1)],1),t._v(" "),e("b-modal",{ref:"shareModal",attrs:{"hide-footer":"",title:`Share ${t.token.name} page`}},[e("b-row",[e("b-col",{attrs:{lg:"12"}},[e("b-form-group",{attrs:{label:"Share link","label-for":"tokenLink"}},[e("b-form-input",{attrs:{id:"tokenLink",name:"tokenLink",placeholder:"Your token link",size:"lg",readonly:""},model:{value:t.share.shortLink,callback:function(e){t.$set(t.share,"shortLink","string"==typeof e?e.trim():e)},expression:"share.shortLink"}})],1)],1),t._v(" "),e("b-col",{attrs:{lg:"12"}},[e("p",{staticClass:"share-link"},[e("b-btn",{staticClass:"twitter",attrs:{href:t.share.twitter,target:"_blank"}},[e("font-awesome-icon",{attrs:{icon:["fab","twitter"]}})],1),t._v(" "),e("b-btn",{staticClass:"facebook",attrs:{href:t.share.facebook,target:"_blank"}},[e("font-awesome-icon",{attrs:{icon:["fab","facebook-f"]}})],1),t._v(" "),e("b-btn",{staticClass:"telegram",attrs:{href:t.share.telegram,target:"_blank"}},[e("font-awesome-icon",{attrs:{icon:["fab","telegram-plane"]}})],1),t._v(" "),e("b-btn",{staticClass:"whatsapp",attrs:{href:t.share.whatsapp,target:"_blank"}},[e("font-awesome-icon",{attrs:{icon:["fab","whatsapp"]}})],1)],1)])],1)],1)],1):t._e()],1)}),[],!1,null,null,null);e.default=p.exports}}]);