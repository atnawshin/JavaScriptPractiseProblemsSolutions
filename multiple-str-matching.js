function isValidPhotoName(photoName, imageExtension) {
    if (typeof photoName !== 'string' || !Array.isArray(imageExtension)) {
        return "Please provide valid input."
    } else {
        for (let items of imageExtension) {
            if (photoName.toLowerCase().endsWith(items.toLowerCase())) {
                return true;
            }
        }
        return false;
    }
}

const photo = 'image.jpg';
const extessions = ['.jpg', '.JPEG', '.png', '.gif', 'ico'];
console.log(isValidPhotoName(photo, extessions));