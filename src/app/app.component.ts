import { Component } from '@angular/core';
import {NgRedux, DevToolsExtension, select} from "ng2-redux";
import {CounterActions} from "../redux/actions/counter-actions";
import rootReducer from "../redux/reducers/index";
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'app work!';

  @select() counter$: Observable<string>;

  constructor(
    private ngRedux: NgRedux<any>,
    private devTools: DevToolsExtension,
    public actions: CounterActions
  ){
    let middlewares = [];
    let enhancers = [];
    enhancers.push(devTools.enhancer());
    let initialState = {};

    ngRedux.configureStore(rootReducer,initialState,middlewares,enhancers);
  }

}
