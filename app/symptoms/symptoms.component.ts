import {Component, OnInit} from '@angular/core';


declare var $: any;

@Component({
    selector: 'app-symptoms',
    templateUrl: './symptoms.component.html',
    styleUrls: ['./symptoms.component.css']
})
export class SymptomsComponent implements OnInit {
    panelOpenState = false;

    constructor() {
    }

    ngOnInit() {
    }

}
