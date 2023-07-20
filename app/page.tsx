import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-24 gap-8 w-1/2">
 
      👋

      <p>I&apos;m Aaron, a software designer based in LA. Currently, I&apos;m designing machine learning tools at Baseten. Before that I led enterprise
        design at GitHub, spent some time at Gumroad and before that other places. 
      </p>

      <div className='flex flex-col'>
        <Link href="https://github.com/relph" target='_blank'>GitHub</Link>
        <Link href="https://twitter.com/aaronrelph" target='_blank'>Twitter</Link>
        <Link href="https://www.linkedin.com/in/aaronrelph/" target='_blank'>LinkedIn</Link>
        <Link href="mailto:aaronrelph@gmail.com">Email</Link>
      </div>
      
    </main>
  )
}
