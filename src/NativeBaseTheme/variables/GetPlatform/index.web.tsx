const getMobileOperatingSystem = () => {
    const result = {
        OS: 'ios'
    }
    // tslint:disable-next-line:no-string-literal
    const userAgent = navigator.userAgent || navigator.vendor || window['opera']

    // Windows Phone must come first because its UA also contains "Android"
    if (/windows phone/i.test(userAgent)) {
        result.OS = 'android'
    } else if (/android/i.test(userAgent)) {
        result.OS = 'android'
    }

    // iOS detection from: http://stackoverflow.com/a/9039885/177710
    // if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    //     return 'iOS';
    // }

    return result
}

const Platform = getMobileOperatingSystem()
export { Platform }

