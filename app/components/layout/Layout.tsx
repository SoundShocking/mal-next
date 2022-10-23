import React, { FC } from 'react'

interface Props {
	children: React.ReactNode
}

const Layout: FC<Props> = ({ children }) => {
	return (
		<div className="wrapper">
			<header>header</header>
			<main className="main">{children}</main>
			<footer className="mt-10"></footer>
		</div>
	)
}

export default Layout
