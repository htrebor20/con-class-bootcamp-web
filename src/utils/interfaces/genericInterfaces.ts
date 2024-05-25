export interface ISidebarItem{
    name:string;
    iconUrl:string;
    route:string;
}

export interface ITabsItem{
    name:string;
    route:string;
}

export interface ISelectItem{
    label:string;
    value:number | string;
}

export interface IBasicElement{
    id:number;
    name: string;
}