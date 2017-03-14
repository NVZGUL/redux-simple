import {COUNTER_INCREMENT, COUNTER_DECREMENT} from "../actions/counter-actions";

const random_char = () => {
  let chars: String = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
  return chars[Math.floor(Math.random()*chars.length)]
};


export const counter = (state="", action) => {
  switch(action.type){
    case COUNTER_INCREMENT:
      return state + random_char();
    case COUNTER_DECREMENT:
      return state.slice(0,-1);
    default:
      return state
  }

}
