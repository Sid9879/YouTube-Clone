export const API_KEY = 'AIzaSyBpP41uekNBNJCHky0Az5DFQGURe1cKO_o'

export const value_converter = (value)=>{
    if(value>=1000000){
        return Math.floor(value/1000000)+"M";
    }
    else if(value>=1000){
        return Math.floor(value/1000)+"K";
    }
    else {
        return value;
    }
}