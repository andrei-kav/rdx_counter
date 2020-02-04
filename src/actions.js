import { DOWNLOAD_ALL_VALUES, INC, DEC, RST, DOWNLOAD_VALUE, TOGGLE_IS_UPDATING, TOGGLE_IS_WAITING } from "./reducer";

export const downloadAllValues = (values) => ({ type: DOWNLOAD_ALL_VALUES, values });
export const inc = () => ({ type: INC });
export const dec = () => ({ type: DEC });
export const rst = () => ({ type: RST });
export const downloadValue = (id) => ({ type: DOWNLOAD_VALUE, id });
export const toggleIsUpdating = (isUpdating) => ({ type: TOGGLE_IS_UPDATING, isUpdating });
export const toggleIsWaiting = (isWaiting) => ({ type: TOGGLE_IS_WAITING, isWaiting });
