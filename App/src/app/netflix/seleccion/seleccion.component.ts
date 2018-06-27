import {Component, OnChanges, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-seleccion',
  templateUrl: './seleccion.component.html',
  styleUrls: ['./seleccion.component.css']
})
export class SeleccionComponent implements OnInit, OnDestroy, OnChanges {

  constructor() {
    console.log('Constructor');
  }

  ngOnInit() {
    console.log('On Init');
  }

  ngOnDestroy() {
    console.log('On Destroy');
  }

  ngOnChanges() {
    console.log('On Changes');
  }


}
