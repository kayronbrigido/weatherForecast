import { Dimensions } from "react-native"

export const winWidth = Dimensions.get("window").width;
export const winHeight = Dimensions.get("window").height;
export const removeAccent = (text: string) => text.normalize("NFD").replace(/[\u0300-\u036f]/g, "")