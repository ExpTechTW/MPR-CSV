'use strict'

const Plugin = {
    "name": "CSV",
    "version": "1.0.0",
    "depends": {
        "pluginLoader": "2.X.X"
    },
    "Events": [],
    "Commands": [],
    "author": ["whes1015"],
    "link": "https://github.com/ExpTechTW/MPR-CSV",
    "resources": ["AGPL-3.0"],
    "description": "處理 CSV 檔案"
}

async function CSVconvert(csv, symbol) {
    let data = csv.split("\n")
    let Json = []
    let cache = {}
    for (let index = 0; index < data.length; index++) {
        if (index == 0) {
            let Data = data[index].split(symbol)
            for (let index = 0; index < Data.length; index++) {
                cache[index] = Data[index]
                Json.push({
                    "name": Data[index].replace("\r", ""),
                    "value": []
                })
            }
        } else {
            let Data = data[index].split(symbol)
            for (let index = 0; index < Data.length; index++) {
                Json[index]["value"].push(Data[index].replace("\r", ""))
            }
        }
    }
    return Json
}

module.exports = {
    Plugin,
    CSVconvert
}