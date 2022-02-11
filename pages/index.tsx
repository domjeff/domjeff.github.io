import Head from 'next/head'
import { useEffect } from 'react'
import Hero from '../components/organism/Hero'
import GithubCards from '../components/organism/GithubCards'
import ContainerBlock from '../components/page-wrapper/ContainerBlock'

export default function Home() {
  return (
    <ContainerBlock>
      <>
        <Hero />
        <GithubCards username="domjeff" />
      </>
    </ContainerBlock>
  )
}
