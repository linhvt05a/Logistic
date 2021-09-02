import {Dimensions} from 'react-native'
const {width,height} = Dimensions.get('screen')

const ROUTES = {
    GET_STARTED :"Getstarted",
    SIGN_IN : "SignIn",
    SIGN_UP :"SignUp",
    DASH_BOARD:"Dashboard",
    SETTING:"Setting"
}

const SIZES = {
    width : width,
    height:height,
    line: 24,
}

const COLORS = {
    primary:"white",
    secondary:"black"
}

const FONTS = {
    
}
export {
    ROUTES,
    SIZES,
    COLORS
}