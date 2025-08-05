import { Index } from 'solid-js'
import ProjectItem from './ProjectItem'

export default () => {
  const projectLists = [
    {
      name: 'TutuBetterRules',
      desc: 'Cross-platform proxy rules, modules & configs',
      link: 'https://github.com/bunizao/TutuBetterRules',
      icon: 'i-fluent-emoji-flat:shield',
    }, {
      name: 'Attegi',
      desc: 'Yet another theme for Ghost with Vite & TailwindCSS',
      link: 'https://github.com/bunizao/Attegi',
      icon: 'i-fluent-emoji-flat:artist-palette',
    }, {
      name: 'Mirrored',
      desc: 'Toy project for CI/CD, composing & deploying with Python',
      link: 'https://github.com/bunizao/Mirrored',
      icon: 'i-fluent-emoji-flat:gear',
    }, {
      name: 'IconChanger (as a contributor)',
      desc: 'Change app icon on macOS with an elegant native UI app',
      link: 'https://github.com/underthestars-zhy/IconChanger',
      icon: 'i-fluent-emoji-flat:mobile-phone',
    }, {
      name: 'iRingo (as a contributor)',
      desc: 'Unlock more iOS/iPadOS/macOS features, break boundaries with MitM method',
      link: 'https://nsringo.github.io/',
      icon: 'i-fluent-emoji-flat:unlocked',
    }, {
      name: 'InjectLib (as a contributor)',
      desc: 'Unlock more macOS (App) features, break boundaries through injection method',
      link: 'https://qiuchenlyopensource.github.io/Documentaions/getting-started.html',
      icon: 'i-fluent-emoji-flat:syringe',
    }
  ]
  const openLink = () => {
    window.open('https://github.com/bunizao', '_blank')
  }
  return (
    <>
      <h2 class="flex items-center mt-14 mb-4 font-semibold text-3xl">
        <span flex-1 class="title">Projects</span>
        <div
          onClick={openLink}
          class="op-50 ml-2 hover:op-100 transition-opacity cursor-pointer" 
        >
          <div class="m-2 i-ri-arrow-right-up-line" ></div>
        </div>
      </h2>
      <div class="grid gap-4 grid-cols-1 sm:grid-cols-2">
        <Index each={projectLists}>
          {item => (
            <ProjectItem data={item()} />
          )}
        </Index>
      </div>
    </>
  )
}
