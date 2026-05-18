// Submit all site URLs to Bing via IndexNow
// Usage: node scripts/indexnow.mjs
const KEY = '179b5094a0bc40dd9ad5518fa9a32d09'
const HOST = 'iheldtheline.com'
const urls = ['/', '/about', '/faq', '/news', '/videos'].map(p => `https://${HOST}${p}`)
const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `https://${HOST}/${KEY}.txt`, urlList: urls }),
})
res.ok ? console.log(`✅ ${urls.length} URLs submitted (HTTP ${res.status})`) : console.error(`❌ HTTP ${res.status}: ${await res.text()}`)
