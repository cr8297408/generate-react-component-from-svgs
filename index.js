const cryptos = [{"id":8,"title":"Bitcoin","kind":"crypto","symbol":"BTC","native":true,"disabled":false,"disabled_message":null,"merchant":{"price":true,"pay":true,"receive":true},"platforms":[{"id":5,"id_name":"bitcoin","title":"Bitcoin","enabled":true}]},{"id":49,"title":"Litecoin","kind":"crypto","symbol":"LTC","native":true,"disabled":false,"disabled_message":null,"merchant":{"price":true,"pay":true,"receive":true},"platforms":[{"id":6,"id_name":"litecoin","title":"Litecoin","enabled":true}]},{"id":50,"title":"Ethereum","kind":"crypto","symbol":"ETH","native":true,"disabled":false,"disabled_message":null,"merchant":{"price":true,"pay":true,"receive":true},"platforms":[{"id":1,"id_name":"ethereum","title":"Ethereum","enabled":true},{"id":2,"id_name":"binance_chain","title":"Binance Chain","enabled":false},{"id":40,"id_name":"arbitrum","title":"Arbitrum","enabled":true}]},{"id":52,"title":"Bitcoin Cash","kind":"crypto","symbol":"BCH","native":true,"disabled":false,"disabled_message":null,"merchant":{"price":true,"pay":true,"receive":true},"platforms":[{"id":8,"id_name":"bitcoin_cash","title":"Bitcoin Cash","enabled":true}]},{"id":53,"title":"XRP","kind":"crypto","symbol":"XRP","native":true,"disabled":false,"disabled_message":null,"merchant":{"price":true,"pay":true,"receive":false},"platforms":[{"id":9,"id_name":"ripple","title":"XRP","enabled":true}]},{"id":60,"title":"TRON","kind":"crypto","symbol":"TRX","native":true,"disabled":false,"disabled_message":null,"merchant":{"price":true,"pay":true,"receive":false},"platforms":[{"id":4,"id_name":"tron","title":"Tron","enabled":true}]},{"id":61,"title":"Dai","kind":"crypto","symbol":"DAI","native":true,"disabled":false,"disabled_message":null,"merchant":{"price":true,"pay":true,"receive":true},"platforms":[{"id":1,"id_name":"ethereum","title":"Ethereum","enabled":true},{"id":3,"id_name":"binance_smart_chain","title":"Binance Smart Chain","enabled":true},{"id":39,"id_name":"polygon","title":"Polygon","enabled":true}]},{"id":64,"title":"Dogecoin","kind":"crypto","symbol":"DOGE","native":true,"disabled":false,"disabled_message":null,"merchant":{"price":true,"pay":true,"receive":true},"platforms":[{"id":7,"id_name":"dogecoin","title":"Dogecoin","enabled":true}]},{"id":91,"title":"Binance Coin","kind":"crypto","symbol":"BNB","native":true,"disabled":false,"disabled_message":null,"merchant":{"price":true,"pay":true,"receive":false},"platforms":[{"id":1,"id_name":"ethereum","title":"Ethereum","enabled":true},{"id":2,"id_name":"binance_chain","title":"Binance Chain","enabled":false},{"id":3,"id_name":"binance_smart_chain","title":"Binance Smart Chain","enabled":true},{"id":41,"id_name":"disabled_tokens","title":"Disable Tokens","enabled":false}]},{"id":97,"title":"USDT","kind":"crypto","symbol":"USDT","native":true,"disabled":false,"disabled_message":null,"merchant":{"price":true,"pay":true,"receive":true},"platforms":[{"id":1,"id_name":"ethereum","title":"Ethereum","enabled":true},{"id":2,"id_name":"binance_chain","title":"Binance Chain","enabled":false},{"id":3,"id_name":"binance_smart_chain","title":"Binance Smart Chain","enabled":true},{"id":4,"id_name":"tron","title":"Tron","enabled":true},{"id":20,"id_name":"solana","title":"Solana","enabled":true},{"id":39,"id_name":"polygon","title":"Polygon","enabled":true},{"id":40,"id_name":"arbitrum","title":"Arbitrum","enabled":true}]},{"id":102,"title":"Travala.com (AVA)","kind":"crypto","symbol":"AVA","native":true,"disabled":false,"disabled_message":null,"merchant":{"price":false,"pay":false,"receive":false},"platforms":[{"id":2,"id_name":"binance_chain","title":"Binance Chain","enabled":false}]},{"id":112,"title":"Polygon","kind":"crypto","symbol":"POL","native":true,"disabled":false,"disabled_message":null,"merchant":{"price":false,"pay":true,"receive":false},"platforms":[{"id":39,"id_name":"polygon","title":"Polygon","enabled":true}]},{"id":113,"title":"USDC","kind":"crypto","symbol":"USDC","native":true,"disabled":false,"disabled_message":null,"merchant":{"price":true,"pay":true,"receive":true},"platforms":[{"id":1,"id_name":"ethereum","title":"Ethereum","enabled":true},{"id":3,"id_name":"binance_smart_chain","title":"Binance Smart Chain","enabled":true},{"id":4,"id_name":"tron","title":"Tron","enabled":true},{"id":20,"id_name":"solana","title":"Solana","enabled":true},{"id":39,"id_name":"polygon","title":"Polygon","enabled":true},{"id":40,"id_name":"arbitrum","title":"Arbitrum","enabled":true}]},{"id":116,"title":"Binance USD","kind":"crypto","symbol":"BUSD","native":true,"disabled":false,"disabled_message":null,"merchant":{"price":false,"pay":false,"receive":false},"platforms":[{"id":1,"id_name":"ethereum","title":"Ethereum","enabled":true},{"id":2,"id_name":"binance_chain","title":"Binance Chain","enabled":false},{"id":3,"id_name":"binance_smart_chain","title":"Binance Smart Chain","enabled":true},{"id":39,"id_name":"polygon","title":"Polygon","enabled":true}]},{"id":117,"title":"Solana","kind":"crypto","symbol":"SOL","native":true,"disabled":false,"disabled_message":null,"merchant":{"price":false,"pay":true,"receive":true},"platforms":[{"id":20,"id_name":"solana","title":"Solana","enabled":true}]},{"id":165,"title":"SHIBA INU","kind":"crypto","symbol":"SHIB","native":true,"disabled":false,"disabled_message":null,"merchant":{"price":false,"pay":true,"receive":false},"platforms":[{"id":1,"id_name":"ethereum","title":"Ethereum","enabled":true},{"id":3,"id_name":"binance_smart_chain","title":"Binance Smart Chain","enabled":true},{"id":39,"id_name":"polygon","title":"Polygon","enabled":true}]},{"id":167,"title":"Avalanche","kind":"crypto","symbol":"AVAX","native":true,"disabled":true,"disabled_message":"Temporary disabled","merchant":{"price":false,"pay":false,"receive":false},"platforms":[{"id":25,"id_name":"avalanche","title":"Avalanche","enabled":false}]},{"id":170,"title":"Cosmos","kind":"crypto","symbol":"ATOM","native":true,"disabled":false,"disabled_message":null,"merchant":{"price":false,"pay":false,"receive":false},"platforms":[]},{"id":172,"title":"Elrond","kind":"crypto","symbol":"EGLD","native":true,"disabled":false,"disabled_message":null,"merchant":{"price":false,"pay":false,"receive":false},"platforms":[]},{"id":174,"title":"Flow","kind":"crypto","symbol":"FLOW","native":true,"disabled":false,"disabled_message":null,"merchant":{"price":false,"pay":false,"receive":false},"platforms":[]},{"id":175,"title":"BitTorrent","kind":"crypto","symbol":"BTTC","native":true,"disabled":false,"disabled_message":null,"merchant":{"price":false,"pay":false,"receive":false},"platforms":[{"id":4,"id_name":"tron","title":"Tron","enabled":true}]},{"id":177,"title":"Arbitrum","kind":"crypto","symbol":"ARB","native":true,"disabled":false,"disabled_message":null,"merchant":{"price":false,"pay":false,"receive":false},"platforms":[]}]

const symbols = cryptos.filter(cr => cr.platforms.some(p => p.id_name === 'tron')).map(crypto => crypto.symbol);

console.log(symbols.sort());
console.log(symbols.length);