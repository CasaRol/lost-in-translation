const translationHistory = []

// The most recent search phrase will be at the front of the array
export function saveTranslation(translation) {
    if (!translationHistory.includes(translation)) {
        translationHistory.unshift(translation)
    }
    if (translationHistory.length === 11) {
        translationHistory.pop()
    }
    return translationHistory
}