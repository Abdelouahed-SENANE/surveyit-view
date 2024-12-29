import { Component, Input, OnInit } from "@angular/core";
import { RouterModule } from "@angular/router";
import {  PanelHeaderComponent } from "./panel-header/panel-header.component";
import { SidebarComponent } from "./panel-sidebar/panel-sidebar.component";

@Component(
    {
        selector : "admin-layout",
        imports: [RouterModule, PanelHeaderComponent, SidebarComponent],
        templateUrl: "./admin-layout.component.html"
    }
)

export class AdminLayoutComponent implements OnInit {

    constructor() {}



    ngOnInit(): void {
        
    }
}