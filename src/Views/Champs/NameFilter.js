function nameFilter(name) {
    if (name.match(/Kog'Maw/)) {
        return name = "KogMaw"
    } else if (name.match(/LeBlanc/)) {
        return name = "Leblanc"
    } else if (name.match(/Nunu & Willump/)) {
        return name = "Nunu"
    } else if (name.match(/Rek'Sai/)) {
        return name = "RekSai"
    } else if (name.match(/Renata Glasc/)) {
        return name = "Renata"
    } else if (name.match(/Wukong/)) {
        return name = "MonkeyKing"
    } else if (name.match(/'/)) {
      const championName = name.toLowerCase()
      const filteredChampionName = championName[0].toUpperCase() + championName.substr(1)
      
      return name = filteredChampionName.replace(/'/, "")
    }
    
    return name.replace(/\W\s|\s/, "")
  }

  export default nameFilter;