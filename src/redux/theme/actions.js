import { themeTypes } from "./actionTypes";
import { themeOptions } from "./options";

const rs = s => s.replace(/\"/g, '');

export const themeActions = {
    change_theme: theme => ({ type: themeTypes.CHANGE_THEME,  theme: rs(theme) }),
}