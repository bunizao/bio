import Socials from './Socials'
// import helloWordArr from '../hello'

export default () => {
  // const helloWord = helloWordArr[Math.floor((Math.random() * helloWordArr.length))]
  
  return (
    <header class="mt-12 md:mt-18">
      <h1 class="title text-5xl font-bold">
        <span class="block">Hello, </span><span class="block mt-2">I'm<span class="inline-flex items-baseline gap-2 whitespace-nowrap">&nbsp;<span class="highlight">Lucian</span>
    <span class="text-slate-400/80 text-[0.4em] font-mono italic" lang="en-fonipa" aria-hidden="true">/ˈluːʃən/</span></span>
    </span>
      </h1>
      <div class="mt-6">
        <div>
            <span>🎓 <span class="font-mono">DataScience</span> Student @ <span class="font-monash font-bold">MONASH</span> <span class="font-mono">'28</span>&nbsp;&nbsp;/&nbsp;&nbsp;♎️ <span class="font-monash font-bold">Libra</span> in <span class="font-mono">'06</span></span>&nbsp;&nbsp;/&nbsp;&nbsp;🧚 <span class="font-mono">INFP-T</span>
        </div>
        <div class="mt-2">
          <span>🌐 Exploring the depths of the inter through <span class="font-mono keyword-box">🌍 BGP</span>, <span class="font-mono keyword-box">💻 Coding</span>, and <span class="font-mono keyword-box">🔗 Web3</span>.</span>
        </div>
        <div class="mt-2">
          <span>✨ Also a <span class="font-mono keyword-box">🎬 Cinephile</span>, <span class="font-mono keyword-box">✍️ Blogger</span>, and <span class="font-mono keyword-box">📖 Perpetual learner</span>.</span>
        </div>
      </div>
      <Socials />
    </header>
  )
}