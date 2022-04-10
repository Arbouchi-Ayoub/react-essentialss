class MenuItemData{
    constructor(label,path){
        this.label=label
        this.path=path
    }
}

export const MENU_DATA = [

    new MenuItemData("My Tasks","/"),
    new MenuItemData("New Task","/todo/add")
]