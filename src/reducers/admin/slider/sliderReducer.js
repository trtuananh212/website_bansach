
import {SLIDER} from 'src/action/actionTypes.js';

const Slider = (state = {}, action) => {
    debugger; // MongLV
    switch (action.type) {
        case SLIDER.GET_LIST:
            return action.sliders;
        case SLIDER.DELETE:
            return action.slider;
        default:
            return state;
    }
};

export default Slider;
