import { button, h1, div, hr } from '@cycle/dom';
import quiz from './quiz';
// import debug from './debug';

function view(state$) {
  return state$.map(state =>
    div('.janki', [
      div('.header', [
        h1('.header__logo.logo', 'janki'),
      ]),
      // debugView(state),
      quiz(state)
  ]));
}

export default view;
