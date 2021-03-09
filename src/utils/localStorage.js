
export function isStorageAvailable(type) {
    let storage;
    try {
        storage = window[type];
        var x = "__storage_test__";
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch(e) {
        return e instanceof DOMException 
            && (e.code === 22 ||
                // test name field too, because code might not be present
                e.name === 'QuotaExceededError')
            &&
                // acknowledge QuotaExceededError only if there's something already stored
                (storage && storage.length !== 0);
    }
}

export function setStorage(key, value) {
    const json = JSON.stringify(value)
    localStorage.setItem(key, json)
}

export function getStorage(key) {
    const storedValue = localStorage.getItem(key)
    if (!storedValue) return false
    return JSON.parse(storedValue)
}

export function clearStorage() {
    localStorage.clear()
}