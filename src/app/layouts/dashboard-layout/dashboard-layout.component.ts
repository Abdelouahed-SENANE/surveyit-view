import { Component, OnInit } from "@angular/core";
import { RouterModule } from "@angular/router";
import {  PanelHeaderComponent } from "./dashboard-header/panel-header.component";
import { SidebarComponent } from "./dashboard-sidebar/panel-sidebar.component";

@Component(
    {
        selector : "dashboar-layout",
        imports: [RouterModule, PanelHeaderComponent, SidebarComponent],
        templateUrl: "./dashboard-layout.component.html"
    }
)

export class DashboardLayoutComponent implements OnInit {

    constructor() {}



    ngOnInit(): void {
        
    }
}