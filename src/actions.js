import { INC, DEC, RST, DOWNLOAD_VALUE, UPLOAD_VALUE, TOGGLE_IS_WAITING } from "./reducer";

export const inc = () => ({ type: INC });
export const dec = () => ({ type: DEC });
export const rst = () => ({ type: RST });
export const downloadValue = (value) => ({ type: DOWNLOAD_VALUE, value });
export const uploadValue = () => ({ type: UPLOAD_VALUE });
export const toggleIsWaiting = (isWaiting) => ({ type: TOGGLE_IS_WAITING, isWaiting });
