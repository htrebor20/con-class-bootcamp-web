import { ISelectItem, ISidebarItem, ITabsItem } from "../interfaces/genericInterfaces";

export const SIDEBAR_OPTIONS: ISidebarItem[] = [
    { name: "Inicio", iconUrl: "assets/icons/home.svg", route: 'home' },
    { name: "Biblioteca", iconUrl: "assets/icons/library.svg", route: 'library' }
]

export const TABS_OPTIONS: ITabsItem[] = [
    { name: "Tecnologías", route: '/library/technology' },
    { name: "Capacidades", route: '/library/capability' },
    { name: "Bootcamp", route: '/library/bootcamp' },
]

export const LIST_SIZE: ISelectItem[] = [
    { label: "10 por página", value: 10 },
    { label: "25 por página", value: 25 },
    { label: "50 por página", value: 50 }
]

export const ORDER: ISelectItem[] = [
    { label: "Ordenar", value: "" },
    { label: "Ascendente", value: "ASC" },
    { label: "Descendente", value:  "DESC" },
]