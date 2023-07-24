function isNumeric(value) {
    return /^\d+$/.test(value)
}

function isAlphabetic(value) {
    return /^[a-zA-Zа-яА-ЯЁё]+$/.test(value)
}

function showInfo() {
    const birthYear = prompt("Введіть ваш рік народження:")
    if (birthYear === null || !isNumeric(birthYear)) {
        alert("Будь ласка, введіть коректний рік народження (число).")
        return
    }

    const city = prompt("В якому місті ви живете?")
    if (city === null || !isAlphabetic(city)) {
        alert("Будь ласка, введіть коректне місто (тільки букви).")
        return
    }

    const favoriteSport = prompt("Який ваш улюблений вид спорту?")
    if (favoriteSport === null || !isAlphabetic(favoriteSport)) {
        alert("Будь ласка, введіть коректний вид спорту (тільки букви).")
        return
    }

    const currentYear = new Date().getFullYear()
    const age = currentYear - parseInt(birthYear)

    let message = `Ваш вік: ${age}\n`

    if (city === "Київ" || city === "Вашингтон" || city === "Лондон") {
        message += `Ти живеш у столиці ${getCapitalCountry(city)}.\n`
    } else {
        message += `Ти живеш у місті ${city}.\n`
    }

    if (isFavoriteSportChampion(favoriteSport)) {
        message += `Круто! Хочеш стати ${getChampionName(favoriteSport)}?\n`
    }

    alert(message)
}

function getCapitalCountry(city) {
    switch (city) {
        case "Київ":
            return "України"
        case "Вашингтон":
            return "США"
        case "Лондон":
            return "Великобританії"
        default:
            return ""
    }
}

function isFavoriteSportChampion(sport) {
    const favoriteSportsChampions = ["футбол", "теніс", "баскетбол"]
    return favoriteSportsChampions.includes(sport.toLowerCase())
}

function getChampionName(sport) {
    const champions = {
        футбол: "Ліонель Мессі",
        теніс: "Серена Вільямс",
        баскетбол: "Леброн Джеймс",
    }
    return champions[sport.toLowerCase()]
}

showInfo()
