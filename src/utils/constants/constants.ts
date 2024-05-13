import { ISidebarItem, ITabsItem } from "../interfaces/genericInterfaces";

export const SIDEBAR_OPTIONS: ISidebarItem[] = [
    { name: "Inicio", iconUrl: "assets/icons/home.svg", route: 'home' },
    { name: "Biblioteca", iconUrl: "assets/icons/library.svg", route: 'library' }
]

export const TABS_OPTIONS: ITabsItem[] = [
    { name: "Tecnologías", route: '/library/technology' },
    { name: "Capacidades", route: '/library/capability' },
    { name: "Bootcamp", route: '/library/bootcamp' },
]
