
export const orientation = () => {
    const screenWidth = window.screen.width;
    const screenHeight = window.screen.height;
    if (screenHeight > screenWidth) return "portrait";
    else return "landscape";
}


