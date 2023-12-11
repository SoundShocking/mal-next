import Link from 'next/link'
import React, { FC } from 'react'

interface Props {
	children: React.ReactNode
}

const Layout: FC<Props> = ({ children }) => {
	return (
		<div className="wrapper">
			<header>
				<div className="container mx-auto">
					<Link href={'/'}>
						<a>Home</a>
					</Link>
				</div>
			</header>
			<main className="main mt-8">{children}</main>
			<footer className="mt-10"></footer>
		</div>
	)
}

export default Layout
