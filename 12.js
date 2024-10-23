// const translations = {
//     en: "Hi, welcome to Google translation",
//     hi: "नमस्ते, गूगल अनुवाद में आपका स्वागत है",
//     fr: "Salut, bienvenue dans la traduction de Google",
//     te: "హాయ్, గూగుల్ అనువాదానికి స్వాగతం",
//     nl: "Hallo, welkom bij Google vertaling"
// };

// document.getElementById("languageSelector").addEventListener("change", function() {
//     const selectedLanguage = this.value;
//     const translatedText = translations[selectedLanguage];
//     document.getElementById("translatedText").innerText = translatedText;
// });
function translateText() {
    const languageSelect = document.getElementById('languageSelect');
    const translatedText = document.getElementById('translatedText');
    const text = "Hi, welcome to Google translation.";

    switch (languageSelect.value) {
        case 'hindi':
            translatedText.textContent = "नमस्ते, गूगल अनुवाद में आपका स्वागत है।";
            break;
        case 'english':
            translatedText.textContent = text;
            break;
        case 'french':
            translatedText.textContent = "Bonjour, bienvenue sur Google Traduction.";
            break;
        case 'telugu':
            translatedText.textContent = "హాయ్, గూగుల్ అనువాదానికి స్వాగతం.";
            break;
        case 'dutch':
            translatedText.textContent = "Hallo, welkom bij Google Vertalen.";
            break;
        default:
            translatedText.textContent = text;
    }
}
