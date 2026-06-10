import React from 'react'
import { useSiteSettings } from '../../../context/siteSettings'

const SettingsToggle = () => {
    const { theme, lang, toggleTheme, toggleLang } = useSiteSettings()
    return (
        <>
            <li>
                <button type="button" className="btn btn-primary theme-toggle" onClick={toggleTheme}
                    aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
                    title={theme === 'dark' ? 'Light mode' : 'Dark mode'}
                >
                    <i className={theme === 'dark' ? 'ri-sun-line' : 'ri-moon-line'}></i>
                </button>
            </li>
            <li>
                <button type="button" className="btn btn-primary lang-toggle" onClick={toggleLang}
                    aria-label={lang === 'am' ? 'Switch to English' : 'ወደ አማርኛ ቀይር'}
                    title={lang === 'am' ? 'English' : 'አማርኛ'}
                >
                    {lang === 'am' ? 'EN' : 'አማ'}
                </button>
            </li>
        </>
    )
}

export default SettingsToggle
