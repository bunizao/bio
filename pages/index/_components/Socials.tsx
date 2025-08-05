import { Index, Show } from 'solid-js'

interface SocialProps {
  data: {
    icon: string
    link: string
    class: string
    text?: string
  }
}

const SocialItem = (props: SocialProps) => {
  const { data } = props
  return (
    <a
      class={`inline-flex px-3 py-2 mt-2 mr-2 rounded-md bg-gray-50 transition-colors decoration-none ${data.class} hover:text-white dark:bg-gray-50/10`}
      href={data.link}
      target="_blank"
    >
      <div text-xl>
        <div class={data.icon} />
      </div>
      <Show
        when={data.text}
      >
        <div text-sm ml-1>{ data.text }</div>
      </Show>
    </a>
  )
}

export default () => {
  const socialLists = [
    {
      text: 'Github',
      link: 'https://github.com/bunizao',
      icon: 'i-ri-github-fill',
      class: 'hover:bg-gray-700 dark:hover:bg-white dark:hover:text-gray-900'
    }, {
      text: 'Blog',
      link: 'https://buxx.me',
      icon: 'i-ri-book-2-line',
      class: 'hover:bg-gray-700 dark:hover:bg-white dark:hover:text-gray-900'
    }, {
      text: 'Email',
      link: 'mailto:bonjour@buxx.me',
      icon: 'i-ri-mail-line',
      class: 'hover:bg-[#000000] dark:hover:bg-white dark:hover:text-gray-900'
    }, {
      text: 'Instagram',
      link: 'https://www.instagram.com/bunizao_/',
      icon: 'i-fa-brands-instagram',
      class: 'hover:bg-gradient-to-r from-[#fd5949] to-[#d6249f]'
    }, {
      text: 'Telegram',
      link: 'https://t.me/hututu0',
      icon: 'i-fa-brands-telegram',
      class: 'hover:bg-gradient-to-r from-[#0077b5] to-[#0077b5]'
    }
  ]

  return (
    <div mt-4>
      <Index each={socialLists}>
        {item => (
          <SocialItem data={item()} />
        )}
      </Index>
    </div>
  )
}
