
export const checkWindowWidth = (windowWidth) => {
    const result = windowWidth < 550;
    return result;
}

export const isValidValue = (e) => {
    let value = e.target.value;
    return value.replace(RegExp(/[^A-Z a-z]/gi), "");

}
