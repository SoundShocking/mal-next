import clsx from 'clsx'
import { FC, useRef, useState } from 'react'
import { FaChevronDown, FaTimes } from 'react-icons/fa'
import { useOnClickOutside } from 'usehooks-ts'

import { IAnimeCharactersLanguage } from '@/utils/anime/getAnimeCharactersLanguages'

import styles from './AnimeCharacterLanguages.module.scss'

interface Props {
	languages: IAnimeCharactersLanguage[]
	allLanguagesChecked: boolean
	onAllLanguagesCheckedChange: () => void
	onCharactersLanguageChange: (language: IAnimeCharactersLanguage) => void
}

const AnimeCharacterLanguages: FC<Props> = ({
	languages,
	allLanguagesChecked,
	onAllLanguagesCheckedChange,
	onCharactersLanguageChange,
}) => {
	const [open, setOpen] = useState(false)

	const languagesRef = useRef<HTMLDivElement>(null)

	const handleClickOutside = () => {
		setOpen(false)
	}

	const onCloseClick = () => {
		setOpen(false)
	}

	useOnClickOutside(languagesRef, handleClickOutside)

	return (
		<div ref={languagesRef} className={styles.languages}>
			<div
				onClick={() => setOpen(!open)}
				className={clsx({ [styles.open]: open }, styles.header)}
			>
				Language
				<FaChevronDown />
			</div>

			{open && (
				<div className={styles.dropdown}>
					<button className={styles.close} onClick={onCloseClick}>
						<FaTimes />
					</button>

					<ul className={styles.list}>
						<li className={styles.item}>
							<label className={styles.label}>
								<input
									type="checkbox"
									checked={allLanguagesChecked}
									onChange={() => onAllLanguagesCheckedChange()}
								/>
								All
							</label>
						</li>

						{languages.map((language, idx) => (
							<li key={idx} className={styles.item}>
								<label className={styles.label}>
									<input
										type="checkbox"
										checked={language.checked}
										onChange={() => onCharactersLanguageChange(language)}
									/>
									{language.name}
								</label>
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	)
}

export default AnimeCharacterLanguages
