import type { AppProps } from 'next/app'

import Layout from '@/components/layout/Layout'

import '@/assets/styles/global.scss'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	)
}

export default MyApp
