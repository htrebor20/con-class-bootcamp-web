import { ISidebarItem, ITabsItem } from "../interfaces/genericInterfaces";

export const SIDEBAR_OPTIONS: ISidebarItem[] = [
    { id: 1, name: "Inicio", iconUrl: "assets/icons/home.svg", route: 'home' },
    { id: 2, name: "Biblioteca", iconUrl: "assets/icons/library.svg", route: 'library' }
]

export const TABS_OPTIONS: ITabsItem[] = [
    { name: "Tecnologías", route: '/library/technology' },
    { name: "Capacidades", route: '/library/capability' },
    { name: "Bootcamp", route: '/library/bootcamp' },
]
