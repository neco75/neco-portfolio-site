'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
import Header from '../../components/header'
import Footer from '../../components/footer'

export function Providers({ 
    children 
  }: { 
  children: React.ReactNode 
  }) {
  return (
    <ChakraProvider>
      <CacheProvider>
        {children}
      </CacheProvider>
    </ChakraProvider>
  )
}