'use client'

import { Theme } from '@radix-ui/themes';
import { Provider } from 'jotai';
import { ReactNode } from 'react';
import { GlobalStyle } from './palette';
type ProvidersProps = {
  children: ReactNode;
}

export const Providers = ({ children }: ProvidersProps) => {
  return (
    
    <Provider>
      <GlobalStyle/>
      <Theme accentColor='violet' grayColor='gray'>
      {children}
      </Theme>
    </Provider>
    
  )
}

