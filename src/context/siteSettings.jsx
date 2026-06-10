import React, { createContext, useContext, useEffect, useState } from 'react'
import { translations } from '../utlits/translations'

const SiteSettingsContext = createContext({
    theme: 'light',
    lang: 'en',
    toggleTheme: () => { },
    toggleLang: () => { },
    t: (text) => text,
})

export const SiteSettingsProvider = ({ children }) => {
    const [theme, setTheme] = useState(() => localStorage.getItem('btb-theme') || 'light')
    const [lang, setLang] = useState(() => localStorage.getItem('btb-lang') || 'en')

    useEffect(() => {
        document.body.classList.toggle('dark-theme', theme === 'dark')
        localStorage.setItem('btb-theme', theme)
    }, [theme])

    useEffect(() => {
        document.documentElement.lang = lang
        document.body.classList.toggle('lang-am', lang === 'am')
        localStorage.setItem('btb-lang', lang)
    }, [lang])

    const toggleTheme = () => setTheme(prev => (prev === 'dark' ? 'light' : 'dark'))
    const toggleLang = () => setLang(prev => (prev === 'am' ? 'en' : 'am'))
    const t = (text) => (lang === 'am' && translations[text]) || text

    return (
        <SiteSettingsContext.Provider value={{ theme, lang, toggleTheme, toggleLang, t }}>
            {children}
        </SiteSettingsContext.Provider>
    )
}

export const useSiteSettings = () => useContext(SiteSettingsContext)
