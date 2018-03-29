// 云片可用的国家代码

var frontAreaNos = [{
    "ename": "China",
    "earea": "AS - Eastern Asia",
    "num": "86",
    "carea": "亚洲-东亚",
    "cname": "中国",
    "shortcut": "CN"
}, {
    "ename": "United States",
    "earea": "NA - Northern America",
    "num": "1",
    "carea": "\u5317\u7f8e\u6d32",
    "cname": "\u7f8e\u56fd",
    "shortcut": "US"
}, {
    "ename": "Canada",
    "earea": "NA - Northern America",
    "num": "1",
    "carea": "\u5317\u7f8e\u6d32",
    "cname": "\u52a0\u62ff\u5927",
    "shortcut": "CA"
}, {
    "ename": "Hong Kong",
    "earea": "AS - Eastern Asia",
    "num": "852",
    "carea": "\u4e9a\u6d32-\u4e1c\u4e9a",
    "cname": "\u9999\u6e2f",
    "shortcut": "HK"
}, {
    "ename": "Taiwan",
    "earea": "AS - Eastern Asia",
    "num": "886",
    "carea": "\u4e9a\u6d32-\u4e1c\u4e9a",
    "cname": "\u53f0\u6e7e",
    "shortcut": "TW"
}, {
    "ename": "Japan",
    "earea": "AS - Eastern Asia",
    "num": "81",
    "carea": "\u4e9a\u6d32-\u4e1c\u4e9a",
    "cname": "\u65e5\u672c",
    "shortcut": "JP"
}, {
    "ename": "South Korea",
    "earea": "AS - Eastern Asia",
    "num": "82",
    "carea": "\u4e9a\u6d32-\u4e1c\u4e9a",
    "cname": "\u97e9\u56fd",
    "shortcut": "KR"
}, {
    "ename": "Australia",
    "earea": "AU - Australia and NZ",
    "num": "61",
    "carea": "\u6fb3\u6d32",
    "cname": "\u6fb3\u5927\u5229\u4e9a",
    "shortcut": "AU"
}, {
    "ename": "New Zealand",
    "earea": "AU - Australia and NZ",
    "num": "64",
    "carea": "\u6fb3\u6d32",
    "cname": "\u65b0\u897f\u5170",
    "shortcut": "NZ"
}, {
    "ename": "United Kingdom",
    "earea": "E - Northern Europe",
    "num": "44",
    "carea": "\u6b27\u6d32-\u5317\u6b27",
    "cname": "\u82f1\u56fd",
    "shortcut": "GB"
}, {
    "ename": "Germany",
    "earea": "E - Western Europe",
    "num": "49",
    "carea": "\u6b27\u6d32-\u897f\u6b27",
    "cname": "\u5fb7\u56fd",
    "shortcut": "DE"
}, {
    "ename": "France",
    "earea": "E - Western Europe",
    "num": "33",
    "carea": "\u6b27\u6d32-\u897f\u6b27",
    "cname": "\u6cd5\u56fd",
    "shortcut": "FR"
}, {
    "ename": "Russia",
    "earea": "E - Eastern Europe",
    "num": "7",
    "carea": "\u6b27\u6d32-\u4e1c\u6b27",
    "cname": "\u4fc4\u7f57\u65af",
    "shortcut": "RU"
}, {
    "ename": "Philippines",
    "earea": "AS - South-eastern Asia",
    "num": "63",
    "carea": "\u4e9a\u6d32-\u4e1c\u5357\u4e9a",
    "cname": "\u83f2\u5f8b\u5bbe",
    "shortcut": "PH"
}, {
    "ename": "Vietnam",
    "earea": "AS - South-eastern Asia",
    "num": "84",
    "carea": "\u4e9a\u6d32-\u4e1c\u5357\u4e9a",
    "cname": "\u8d8a\u5357",
    "shortcut": "VN"
}];




var areaNos = [{
    "ename": "Tunisia",
    "earea": "AF - Northern Africa",
    "num": "216",
    "carea": "\u975e\u6d32-\u5317\u975e",
    "cname": "\u7a81\u5c3c\u65af",
    "shortcut": "TN"
}, {
    "ename": "Uzbekistan",
    "earea": "AS - South-central Asia",
    "num": "998",
    "carea": "\u4e9a\u6d32-\u5357\u4e9a",
    "cname": "\u4e4c\u5179\u522b\u514b\u65af\u5766",
    "shortcut": "UZ"
}, {
    "ename": "Comoros",
    "earea": "AF - Eastern Africa",
    "num": "269",
    "carea": "\u975e\u6d32-\u4e1c\u975e",
    "cname": "\u79d1\u6469\u7f57",
    "shortcut": "KM"
}, {
    "ename": "Portugal",
    "earea": "E - Southern Europe",
    "num": "351",
    "carea": "\u6b27\u6d32-\u5357\u6b27",
    "cname": "\u8461\u8404\u7259",
    "shortcut": "PT"
}, {
    "ename": "Niger",
    "earea": "AF - Western Africa",
    "num": "227",
    "carea": "\u975e\u6d32-\u897f\u975e",
    "cname": "\u5c3c\u65e5\u5c14",
    "shortcut": "NE"
}, {
    "ename": "Belarus",
    "earea": "E - Eastern Europe",
    "num": "375",
    "carea": "\u6b27\u6d32-\u4e1c\u6b27",
    "cname": "\u767d\u4fc4\u7f57\u65af",
    "shortcut": "BY"
}, {
    "ename": "Dominican Republic",
    "earea": "SA - Caribbean",
    "num": "1809",
    "carea": "\u5357\u7f8e\u6d32",
    "cname": "\u591a\u660e\u5c3c\u52a0\u5171\u548c\u56fd",
    "shortcut": "DO"
}, {
    "ename": "Chile",
    "earea": "SA - South America",
    "num": "56",
    "carea": "\u5357\u7f8e\u6d32",
    "cname": "\u667a\u5229",
    "shortcut": "CL"
}, {
    "ename": "Anguilla",
    "earea": "SA - Caribbean",
    "num": "1264",
    "carea": "\u5357\u7f8e\u6d32",
    "cname": "\u5b89\u572d\u62c9",
    "shortcut": "AI"
}, {
    "ename": "Cayman Islands",
    "earea": "SA - Caribbean",
    "num": "1345",
    "carea": "\u5357\u7f8e\u6d32",
    "cname": "\u5f00\u66fc\u7fa4\u5c9b",
    "shortcut": "KY"
}, {
    "ename": "Guatemala",
    "earea": "SA - Central America",
    "num": "502",
    "carea": "\u5357\u7f8e\u6d32",
    "cname": "\u74dc\u5730\u9a6c\u62c9",
    "shortcut": "GT"
}, {
    "ename": "Brazil",
    "earea": "SA - South America",
    "num": "55",
    "carea": "\u5357\u7f8e\u6d32",
    "cname": "\u5df4\u897f",
    "shortcut": "BR"
}, {
    "ename": "Mozambique",
    "earea": "AF - Eastern Africa",
    "num": "258",
    "carea": "\u975e\u6d32-\u4e1c\u975e",
    "cname": "\u83ab\u6851\u6bd4\u514b",
    "shortcut": "MZ"
}, {
    "ename": "Suriname",
    "earea": "SA - South America",
    "num": "597",
    "carea": "\u5357\u7f8e\u6d32",
    "cname": "\u82cf\u91cc\u5357",
    "shortcut": "SR"
}, {
    "ename": "Mali",
    "earea": "AF - Western Africa",
    "num": "223",
    "carea": "\u975e\u6d32-\u897f\u975e",
    "cname": "\u9a6c\u91cc",
    "shortcut": "ML"
}, {
    "ename": "Yemen",
    "earea": "AS - Western Asia",
    "num": "967",
    "carea": "\u4e9a\u6d32-\u897f\u4e9a",
    "cname": "\u4e5f\u95e8",
    "shortcut": "YE"
}, {
    "ename": "South Africa",
    "earea": "AF - Southern Africa",
    "num": "27",
    "carea": "\u975e\u6d32-\u5357\u975e",
    "cname": "\u5357\u975e",
    "shortcut": "ZA"
}, {
    "ename": "Indonesia",
    "earea": "AS - South-eastern Asia",
    "num": "62",
    "carea": "\u4e9a\u6d32-\u4e1c\u5357\u4e9a",
    "cname": "\u5370\u5ea6\u5c3c\u897f\u4e9a",
    "shortcut": "ID"
}, {
    "ename": "Bahrain",
    "earea": "AS - Western Asia",
    "num": "973",
    "carea": "\u4e9a\u6d32-\u897f\u4e9a",
    "cname": "\u5df4\u6797",
    "shortcut": "BH"
}, {
    "ename": "Saint Vincent and The Grenadines",
    "earea": "SA - Caribbean",
    "num": "1784",
    "carea": "\u5357\u7f8e\u6d32",
    "cname": "\u5723\u6587\u68ee\u7279\u548c\u683c\u6797\u7eb3\u4e01\u65af",
    "shortcut": "VC"
}, {
    "ename": "Guyana",
    "earea": "SA - South America",
    "num": "592",
    "carea": "\u5357\u7f8e\u6d32",
    "cname": "\u572d\u4e9a\u90a3",
    "shortcut": "GY"
}, {
    "ename": "Kyrgyzstan",
    "earea": "AS - South-central Asia",
    "num": "996",
    "carea": "\u4e9a\u6d32-\u5357\u4e9a",
    "cname": "\u5409\u5c14\u5409\u65af\u65af\u5766",
    "shortcut": "KG"
}, {
    "ename": "Djibouti",
    "earea": "AF - Eastern Africa",
    "num": "253",
    "carea": "\u975e\u6d32-\u4e1c\u975e",
    "cname": "\u5409\u5e03\u63d0",
    "shortcut": "DJ"
}, {
    "ename": "Poland",
    "earea": "E - Eastern Europe",
    "num": "48",
    "carea": "\u6b27\u6d32-\u4e1c\u6b27",
    "cname": "\u6ce2\u5170",
    "shortcut": "PL"
}, {
    "ename": "Turks and Caicos Islands",
    "earea": "SA - Caribbean",
    "num": "1649",
    "carea": "\u5357\u7f8e\u6d32",
    "cname": "\u7279\u514b\u65af\u548c\u51ef\u79d1\u65af\u7fa4\u5c9b",
    "shortcut": "TC"
}, {
    "ename": "Antigua and Barbuda",
    "earea": "SA - Caribbean",
    "num": "1268",
    "carea": "\u5357\u7f8e\u6d32",
    "cname": "\u5b89\u63d0\u74dc \u548c\u5df4\u5e03\u8fbe",
    "shortcut": "AG"
}, {
    "ename": "Palau",
    "earea": "AU - Micronesia",
    "num": "680",
    "carea": "\u6fb3\u6d32",
    "cname": "\u5e15\u52b3",
    "shortcut": "PW"
}, {
    "ename": "Colombia",
    "earea": "SA - South America",
    "num": "57",
    "carea": "\u5357\u7f8e\u6d32",
    "cname": "\u54e5\u4f26\u6bd4\u4e9a",
    "shortcut": "CO"
}, {
    "ename": "Democratic Republic of the Congo",
    "earea": "AF - Middle Africa",
    "num": "243",
    "carea": "\u975e\u6d32-\u4e2d\u975e",
    "cname": "\u521a\u679c\u6c11\u4e3b\u5171\u548c\u56fd",
    "shortcut": "CD"
}, {
    "ename": "Saudi Arabia",
    "earea": "AS - Western Asia",
    "num": "966",
    "carea": "\u4e9a\u6d32-\u897f\u4e9a",
    "cname": "\u6c99\u7279\u963f\u62c9\u4f2f",
    "shortcut": "SA"
}, {
    "ename": "Romania",
    "earea": "E - Eastern Europe",
    "num": "40",
    "carea": "\u6b27\u6d32-\u4e1c\u6b27",
    "cname": "\u7f57\u9a6c\u5c3c\u4e9a",
    "shortcut": "RO"
}, {
    "ename": "Bosnia and Herzegovina",
    "earea": "E - Southern Europe",
    "num": "387",
    "carea": "\u6b27\u6d32-\u5357\u6b27",
    "cname": "\u6ce2\u65af \u5c3c\u4e9a\u548c\u9ed1\u585e\u54e5\u7ef4\u90a3",
    "shortcut": "BA"
}, {
    "ename": "Republic Of The Congo",
    "earea": "AF - Middle Africa",
    "num": "242",
    "carea": "\u975e\u6d32-\u4e2d\u975e",
    "cname": "\u521a\u679c\u5171\u548c\u56fd",
    "shortcut": "CG"
}, {
    "ename": "Macedonia",
    "earea": "E - Southern Europe",
    "num": "389",
    "carea": "\u6b27\u6d32-\u5357\u6b27",
    "cname": "\u9a6c\u5176\u987f",
    "shortcut": "MK"
}, {
    "ename": "East Timor",
    "earea": "AS - South-eastern Asia",
    "num": "670",
    "carea": "\u4e9a\u6d32-\u4e1c\u5357\u4e9a",
    "cname": "\u4e1c\u5e1d\u6c76",
    "shortcut": "TL"
}, {
    "ename": "Argentina",
    "earea": "SA - South America",
    "num": "54",
    "carea": "\u5357\u7f8e\u6d32",
    "cname": "\u963f\u6839\u5ef7",
    "shortcut": "AR"
}, {
    "ename": "Togo",
    "earea": "AF - Western Africa",
    "num": "228",
    "carea": "\u975e\u6d32-\u897f\u975e",
    "cname": "\u591a\u54e5",
    "shortcut": "TG"
}, {
    "ename": "Qatar",
    "earea": "AS - Western Asia",
    "num": "974",
    "carea": "\u4e9a\u6d32-\u897f\u4e9a",
    "cname": "\u5361\u5854\u5c14",
    "shortcut": "QA"
}, {
    "ename": "Mayotte",
    "earea": "-",
    "num": "269",
    "carea": "\u975e\u6d32",
    "cname": "\u9a6c\u7ea6\u7279",
    "shortcut": "YT"
}, {
    "ename": "Paraguay",
    "earea": "SA - South America",
    "num": "595",
    "carea": "\u5357\u7f8e\u6d32",
    "cname": "\u5df4\u62c9\u572d",
    "shortcut": "PY"
}, {
    "ename": "Guam",
    "earea": "-",
    "num": "1671",
    "carea": "\u6fb3\u6d32",
    "cname": "\u5173\u5c9b",
    "shortcut": "GU"
}, {
    "ename": "Angola",
    "earea": "AF - Middle Africa",
    "num": "244",
    "carea": "\u975e\u6d32-\u4e2d\u975e",
    "cname": "\u5b89\u54e5\u62c9",
    "shortcut": "AO"
}, {
    "ename": "Iran",
    "earea": "AS - South-central Asia",
    "num": "98",
    "carea": "\u4e9a\u6d32-\u5357\u4e9a",
    "cname": "\u4f0a\u6717",
    "shortcut": "IR"
}, {
    "ename": "Armenia",
    "earea": "AS - Western Asia",
    "num": "374",
    "carea": "\u4e9a\u6d32-\u897f\u4e9a",
    "cname": "\u4e9a\u7f8e\u5c3c\u4e9a",
    "shortcut": "AM"
}, {
    "ename": "Guadeloupe",
    "earea": "SA - Caribbean",
    "num": "590",
    "carea": "\u5357\u7f8e\u6d32",
    "cname": "\u74dc\u5fb7\u7f57\u666e\u5c9b",
    "shortcut": "GP"
}, {
    "ename": "Kuwait",
    "earea": "AS - Western Asia",
    "num": "965",
    "carea": "\u4e9a\u6d32-\u897f\u4e9a",
    "cname": "\u79d1\u5a01\u7279",
    "shortcut": "KW"
}, {
    "ename": "Costa Rica",
    "earea": "SA - Central America",
    "num": "506",
    "carea": "\u5357\u7f8e\u6d32",
    "cname": "\u54e5\u65af\u8fbe\u9ece\u52a0",
    "shortcut": "CR"
}, {
    "ename": "Tonga",
    "earea": "AU - Polynesia",
    "num": "676",
    "carea": "\u6fb3\u6d32",
    "cname": "\u6c64\u52a0",
    "shortcut": "TO"
}, {
    "ename": "Sri Lanka",
    "earea": "AS - South-central Asia",
    "num": "94",
    "carea": "\u4e9a\u6d32-\u5357\u4e9a",
    "cname": "\u65af\u91cc\u5170\u5361",
    "shortcut": "LK"
}, {
    "ename": "Syria",
    "earea": "AS - Western Asia",
    "num": "963",
    "carea": "\u4e9a\u6d32-\u897f\u4e9a",
    "cname": "\u53d9\u5229\u4e9a",
    "shortcut": "SY"
}, {
    "ename": "Andorra",
    "earea": "E - Southern Europe",
    "num": "376",
    "carea": "\u6b27\u6d32-\u5357\u6b27",
    "cname": "\u5b89\u9053\u5c14",
    "shortcut": "AD"
}, {
    "ename": "Switzerland",
    "earea": "E - Western Europe",
    "num": "41",
    "carea": "\u6b27\u6d32-\u897f\u6b27",
    "cname": "\u745e\u58eb",
    "shortcut": "CH"
}, {
    "ename": "Montserrat",
    "earea": "SA - Caribbean",
    "num": "1664",
    "carea": "\u5357\u7f8e\u6d32",
    "cname": "\u8499\u7279\u585e\u62c9\u7279\u5c9b",
    "shortcut": "MS"
}, {
    "ename": "Kenya",
    "earea": "AF - Eastern Africa",
    "num": "254",
    "carea": "\u975e\u6d32-\u4e1c\u975e",
    "cname": "\u80af\u5c3c\u4e9a",
    "shortcut": "KE"
}, {
    "ename": "Swaziland",
    "earea": "AF - Southern Africa",
    "num": "268",
    "carea": "\u975e\u6d32-\u5357\u975e",
    "cname": "\u65af\u5a01\u58eb\u5170",
    "shortcut": "SZ"
}, {
    "ename": "Bhutan",
    "earea": "AS - South-central Asia",
    "num": "975",
    "carea": "\u4e9a\u6d32-\u5357\u4e9a",
    "cname": "\u4e0d\u4e39",
    "shortcut": "BT"
}, {
    "ename": "Estonia",
    "earea": "E - Northern Europe",
    "num": "372",
    "carea": "\u6b27\u6d32-\u5317\u6b27",
    "cname": "\u7231\u6c99\u5c3c\u4e9a",
    "shortcut": "EE"
}, {
    "ename": "Cape Verde",
    "earea": "AF - Western Africa",
    "num": "238",
    "carea": "\u975e\u6d32-\u897f\u975e",
    "cname": "\u5f00\u666e",
    "shortcut": "CV"
}, {
    "ename": "Curacao",
    "earea": "SA - Caribbean",
    "num": "599",
    "carea": "\u5357\u7f8e\u6d32",
    "cname": "\u5e93\u62c9\u7d22",
    "shortcut": "CW"
}, {
    "ename": "Norway",
    "earea": "E - Northern Europe",
    "num": "47",
    "carea": "\u6b27\u6d32-\u5317\u6b27",
    "cname": "\u632a\u5a01",
    "shortcut": "NO"
}, {
    "ename": "Guinea",
    "earea": "AF - Western Africa",
    "num": "224",
    "carea": "\u975e\u6d32-\u897f\u975e",
    "cname": "\u51e0\u5185\u4e9a",
    "shortcut": "GN"
}, {
    "ename": "Madagascar",
    "earea": "AF - Eastern Africa",
    "num": "261",
    "carea": "\u975e\u6d32-\u4e1c\u975e",
    "cname": "\u9a6c\u8fbe\u52a0\u65af\u52a0",
    "shortcut": "MG"
}, {
    "ename": "Libya",
    "earea": "AF - Northern Africa",
    "num": "218",
    "carea": "\u975e\u6d32-\u5317\u975e",
    "cname": "\u5229\u6bd4\u4e9a",
    "shortcut": "LY"
}, {
    "ename": "Faroe Islands",
    "earea": "E - Northern Europe",
    "num": "298",
    "carea": "\u6b27\u6d32-\u5317\u6b27",
    "cname": "\u6cd5\u7f57\u7fa4\u5c9b",
    "shortcut": "FO"
}, {
    "ename": "Nigeria",
    "earea": "AF - Western Africa",
    "num": "234",
    "carea": "\u975e\u6d32-\u897f\u975e",
    "cname": "\u5c3c\u65e5\u5229\u4e9a",
    "shortcut": "NG"
}, {
    "ename": "Turkey",
    "earea": "AS - Western Asia",
    "num": "90",
    "carea": "\u4e9a\u6d32-\u897f\u4e9a",
    "cname": "\u571f\u8033\u5176",
    "shortcut": "TR"
}, {
    "ename": "Nepal",
    "earea": "AS - South-central Asia",
    "num": "977",
    "carea": "\u4e9a\u6d32-\u5357\u4e9a",
    "cname": "\u5c3c\u6cca\u5c14",
    "shortcut": "NP"
}, {
    "ename": "Cuba",
    "earea": "SA - Caribbean",
    "num": "53",
    "carea": "\u5357\u7f8e\u6d32",
    "cname": "\u53e4\u5df4",
    "shortcut": "CU"
}, {
    "ename": "Pakistan",
    "earea": "AS - South-central Asia",
    "num": "92",
    "carea": "\u4e9a\u6d32-\u5357\u4e9a",
    "cname": "\u5df4\u57fa\u65af\u5766",
    "shortcut": "PK"
}, {
    "ename": "Rwanda",
    "earea": "AF - Eastern Africa",
    "num": "250",
    "carea": "\u975e\u6d32-\u4e1c\u975e",
    "cname": "\u5362\u65fa\u8fbe",
    "shortcut": "RW"
}, {
    "ename": "Georgia",
    "earea": "AS - Western Asia",
    "num": "995",
    "carea": "\u4e9a\u6d32-\u897f\u4e9a",
    "cname": "\u683c\u9c81\u5409\u4e9a",
    "shortcut": "GE"
}, {
    "ename": "Burkina Faso",
    "earea": "AF - Western Africa",
    "num": "226",
    "carea": "\u975e\u6d32-\u897f\u975e",
    "cname": "\u5e03\u57fa\u7eb3\u6cd5\u7d22",
    "shortcut": "BF"
}, {
    "ename": "Ireland",
    "earea": "E - Northern Europe",
    "num": "353",
    "carea": "\u6b27\u6d32-\u5317\u6b27",
    "cname": "\u7231\u5c14\u5170",
    "shortcut": "IE"
}, {
    "ename": "India",
    "earea": "AS - South-central Asia",
    "num": "91",
    "carea": "\u4e9a\u6d32-\u5357\u4e9a",
    "cname": "\u5370\u5ea6",
    "shortcut": "IN"
}, {
    "ename": "Laos",
    "earea": "AS - South-eastern Asia",
    "num": "856",
    "carea": "\u4e9a\u6d32-\u4e1c\u5357\u4e9a",
    "cname": "\u8001\u631d",
    "shortcut": "LA"
}, {
    "ename": "Venezuela",
    "earea": "SA - South America",
    "num": "58",
    "carea": "\u5357\u7f8e\u6d32",
    "cname": "\u59d4\u5185\u745e\u62c9",
    "shortcut": "VE"
}, {
    "ename": "Monaco",
    "earea": "E - Western Europe",
    "num": "377",
    "carea": "\u6b27\u6d32-\u897f\u6b27",
    "cname": "\u6469\u7eb3\u54e5",
    "shortcut": "MC"
}, {
    "ename": "Luxembourg",
    "earea": "E - Western Europe",
    "num": "352",
    "carea": "\u6b27\u6d32-\u897f\u6b27",
    "cname": "\u5362\u68ee\u5821",
    "shortcut": "LU"
}, {
    "ename": "Jamaica",
    "earea": "SA - Caribbean",
    "num": "1876",
    "carea": "\u5357\u7f8e\u6d32",
    "cname": "\u7259\u4e70\u52a0",
    "shortcut": "JM"
}, {
    "ename": "Cyprus",
    "earea": "AS - Western Asia",
    "num": "357",
    "carea": "\u4e9a\u6d32-\u897f\u4e9a",
    "cname": "\u585e\u6d66\u8def\u65af",
    "shortcut": "CY"
}, {
    "ename": "Algeria",
    "earea": "AF - Northern Africa",
    "num": "213",
    "carea": "\u975e\u6d32-\u5317\u975e",
    "cname": "\u963f\u5c14\u53ca\u5229\u4e9a",
    "shortcut": "DZ"
}, {
    "ename": "Afghanistan",
    "earea": "AS - South-central Asia",
    "num": "93",
    "carea": "\u4e9a\u6d32-\u5357\u4e9a",
    "cname": "\u963f\u5bcc\u6c57",
    "shortcut": "AF"
}, {
    "ename": "Iraq",
    "earea": "AS - Western Asia",
    "num": "964",
    "carea": "\u4e9a\u6d32-\u897f\u4e9a",
    "cname": "\u4f0a\u62c9\u514b",
    "shortcut": "IQ"
}, {
    "ename": "Tajikistan",
    "earea": "AS - South-central Asia",
    "num": "992",
    "carea": "\u4e9a\u6d32-\u5357\u4e9a",
    "cname": "\u5854\u5409\u514b\u65af\u5766",
    "shortcut": "TJ"
}, {
    "ename": "Saint Lucia",
    "earea": "SA - Caribbean",
    "num": "1758",
    "carea": "\u5357\u7f8e\u6d32",
    "cname": "\u5723\u9732\u897f\u4e9a",
    "shortcut": "LC"
}, {
    "ename": "Panama",
    "earea": "SA - Central America",
    "num": "507",
    "carea": "\u5357\u7f8e\u6d32",
    "cname": "\u5df4\u62ff\u9a6c",
    "shortcut": "PA"
}, {
    "ename": "Liechtenstein",
    "earea": "E - Western Europe",
    "num": "423",
    "carea": "\u6b27\u6d32-\u897f\u6b27",
    "cname": "\u5217\u652f\u6566\u58eb\u767b",
    "shortcut": "LI"
}, {
    "ename": "Sierra Leone",
    "earea": "AF - Western Africa",
    "num": "232",
    "carea": "\u975e\u6d32-\u897f\u975e",
    "cname": "\u585e\u62c9\u5229\u6602",
    "shortcut": "SL"
}, {
    "ename": "Belgium",
    "earea": "E - Western Europe",
    "num": "32",
    "carea": "\u6b27\u6d32-\u897f\u6b27",
    "cname": "\u6bd4\u5229\u65f6",
    "shortcut": "BE"
}, {
    "ename": "Palestinian Territory",
    "earea": "AS - Western Asia",
    "num": "970",
    "carea": "\u4e9a\u6d32-\u897f\u4e9a",
    "cname": "\u5df4\u52d2\u65af \u5766\u9886\u571f",
    "shortcut": "PS"
}, {
    "ename": "Honduras",
    "earea": "SA - Central America",
    "num": "504",
    "carea": "\u5357\u7f8e\u6d32",
    "cname": "\u6d2a\u90fd\u62c9\u65af",
    "shortcut": "HN"
}, {
    "ename": "Lesotho",
    "earea": "AF - Southern Africa",
    "num": "266",
    "carea": "\u975e\u6d32-\u5357\u975e",
    "cname": "\u83b1\u7d22\u6258",
    "shortcut": "LS"
}, {
    "ename": "Senegal",
    "earea": "AF - Western Africa",
    "num": "221",
    "carea": "\u975e\u6d32-\u897f\u975e",
    "cname": "\u585e\u5185\u52a0\u5c14",
    "shortcut": "SN"
}, {
    "ename": "New Caledonia",
    "earea": "AU - Melanesia",
    "num": "687",
    "carea": "\u6fb3\u6d32",
    "cname": "\u65b0\u5580\u91cc\u591a\u5c3c\u4e9a",
    "shortcut": "NC"
}, {
    "ename": "Mauritania",
    "earea": "AF - Western Africa",
    "num": "222",
    "carea": "\u975e\u6d32-\u897f\u975e",
    "cname": "\u6bdb\u91cc\u5854\u5c3c\u4e9a",
    "shortcut": "MR"
}, {
    "ename": "Ethiopia",
    "earea": "AF - Eastern Africa",
    "num": "251",
    "carea": "\u975e\u6d32-\u4e1c\u975e",
    "cname": "\u57c3\u585e\u4fc4\u6bd4\u4e9a",
    "shortcut": "ET"
}, {
    "ename": "Cambodia",
    "earea": "AS - South-eastern Asia",
    "num": "855",
    "carea": "\u4e9a\u6d32-\u4e1c\u5357\u4e9a",
    "cname": "\u67ec\u57d4\u5be8",
    "shortcut": "KH"
}, {
    "ename": "United Arab Emirates",
    "earea": "AS - Western Asia",
    "num": "971",
    "carea": "\u4e9a\u6d32-\u897f\u4e9a",
    "cname": "\u963f\u62c9\u4f2f \u8054\u5408\u914b\u957f\u56fd",
    "shortcut": "AE"
}, {
    "ename": "Guinea-Bissau",
    "earea": "AF - Western Africa",
    "num": "245",
    "carea": "\u975e\u6d32-\u897f\u975e",
    "cname": "\u51e0\u5185\u4e9a\u6bd4\u7ecd\u5171\u548c\u56fd",
    "shortcut": "GW"
}, {
    "ename": "Montenegro",
    "earea": "E - Southern Europe",
    "num": "382",
    "carea": "\u6b27\u6d32-\u5357\u6b27",
    "cname": "\u9ed1\u5c71",
    "shortcut": "ME"
}, {
    "ename": "Maldives",
    "earea": "AS - South-central Asia",
    "num": "960",
    "carea": "\u4e9a\u6d32-\u5357\u4e9a",
    "cname": "\u9a6c\u5c14\u4ee3\u592b",
    "shortcut": "MV"
}, {
    "ename": "Liberia",
    "earea": "AF - Western Africa",
    "num": "231",
    "carea": "\u975e\u6d32-\u897f\u975e",
    "cname": "\u5229\u6bd4\u91cc\u4e9a",
    "shortcut": "LR"
}, {
    "ename": "Gambia",
    "earea": "AF - Western Africa",
    "num": "220",
    "carea": "\u975e\u6d32-\u897f\u975e",
    "cname": "\u5188\u6bd4\u4e9a",
    "shortcut": "GM"
}, {
    "ename": "Spain",
    "earea": "E - Southern Europe",
    "num": "34",
    "carea": "\u6b27\u6d32-\u5357\u6b27",
    "cname": "\u897f\u73ed\u7259",
    "shortcut": "ES"
}, {
    "ename": "Saint Pierre and Miquelon",
    "earea": "NA - Northern America",
    "num": "508",
    "carea": "\u5317\u7f8e\u6d32",
    "cname": "\u5723\u5f7c\u57c3\u5c14\u548c\u5bc6\u514b\u9686\u5c9b",
    "shortcut": "PM"
}, {
    "ename": "Malaysia",
    "earea": "AS - South-eastern Asia",
    "num": "60",
    "carea": "\u4e9a\u6d32-\u4e1c\u5357\u4e9a",
    "cname": "\u9a6c\u6765\u897f\u4e9a",
    "shortcut": "MY"
}, {
    "ename": "Thailand",
    "earea": "AS - South-eastern Asia",
    "num": "66",
    "carea": "\u4e9a\u6d32-\u4e1c\u5357\u4e9a",
    "cname": "\u6cf0\u56fd",
    "shortcut": "TH"
}, {
    "ename": "Equatorial Guinea",
    "earea": "AF - Middle Africa",
    "num": "240",
    "carea": "\u975e\u6d32-\u4e2d\u975e",
    "cname": "\u8d64\u9053\u51e0\u5185\u4e9a",
    "shortcut": "GQ"
}, {
    "ename": "French Polynesia",
    "earea": "AU - Polynesia",
    "num": "689",
    "carea": "\u6fb3\u6d32",
    "cname": "\u6cd5\u5c5e\u6ce2\u5229\u5c3c \u897f\u4e9a",
    "shortcut": "PF"
}, {
    "ename": "Bahamas",
    "earea": "SA - Caribbean",
    "num": "1242",
    "carea": "\u5357\u7f8e\u6d32",
    "cname": "\u5df4\u54c8\u9a6c",
    "shortcut": "BS"
}, {
    "ename": "Kiribati",
    "earea": "-",
    "num": "686",
    "carea": "\u6fb3\u6d32\u6216\u5357\u7f8e\u6d32",
    "cname": "\u57fa\u91cc\u5df4\u65af",
    "shortcut": "KI"
}, {
    "ename": "Singapore",
    "earea": "AS - South-eastern Asia",
    "num": "65",
    "carea": "\u4e9a\u6d32-\u4e1c\u5357\u4e9a",
    "cname": "\u65b0\u52a0\u5761",
    "shortcut": "SG"
}, {
    "ename": "Mauritius",
    "earea": "AF - Eastern Africa",
    "num": "230",
    "carea": "\u975e\u6d32-\u4e1c\u975e",
    "cname": "\u6bdb\u91cc\u6c42\u65af",
    "shortcut": "MU"
}, {
    "ename": "Sweden",
    "earea": "E - Northern Europe",
    "num": "46",
    "carea": "\u6b27\u6d32-\u5317\u6b27",
    "cname": "\u745e\u5178",
    "shortcut": "SE"
}, {
    "ename": "French Guiana",
    "earea": "SA - South America",
    "num": "594",
    "carea": "\u5357\u7f8e\u6d32",
    "cname": "\u6cd5\u5c5e\u572d\u4e9a\u90a3",
    "shortcut": "GF"
}, {
    "ename": "Uganda",
    "earea": "AF - Eastern Africa",
    "num": "256",
    "carea": "\u975e\u6d32-\u4e1c\u975e",
    "cname": "\u4e4c\u5e72\u8fbe",
    "shortcut": "UG"
}, {
    "ename": "Burundi",
    "earea": "AF - Eastern Africa",
    "num": "257",
    "carea": "\u975e\u6d32-\u4e1c\u975e",
    "cname": "\u5e03\u9686\u8fea",
    "shortcut": "BI"
}, {
    "ename": "Ghana",
    "earea": "AF - Western Africa",
    "num": "233",
    "carea": "\u975e\u6d32-\u897f\u975e",
    "cname": "\u52a0\u7eb3",
    "shortcut": "GH"
}, {
    "ename": "Botswana",
    "earea": "AF - Southern Africa",
    "num": "267",
    "carea": "\u975e\u6d32-\u5357\u975e",
    "cname": "\u535a\u8328\u74e6\u7eb3",
    "shortcut": "BW"
}, {
    "ename": "Slovakia",
    "earea": "E - Eastern Europe",
    "num": "421",
    "carea": "\u6b27\u6d32-\u4e1c\u6b27",
    "cname": "\u65af\u6d1b\u4f10\u514b",
    "shortcut": "SK"
}, {
    "ename": "Greece",
    "earea": "E - Southern Europe",
    "num": "30",
    "carea": "\u6b27\u6d32-\u5357\u6b27",
    "cname": "\u5e0c\u814a",
    "shortcut": "GR"
}, {
    "ename": "Fiji",
    "earea": "AU - Melanesia",
    "num": "679",
    "carea": "\u6fb3\u6d32",
    "cname": "\u6590\u6d4e",
    "shortcut": "FJ"
}, {
    "ename": "Israel",
    "earea": "AS - Western Asia",
    "num": "972",
    "carea": "\u4e9a\u6d32-\u897f\u4e9a",
    "cname": "\u4ee5\u8272\u5217",
    "shortcut": "IL"
}, {
    "ename": "Martinique",
    "earea": "SA - Caribbean",
    "num": "596",
    "carea": "\u5357\u7f8e\u6d32",
    "cname": "\u9a6c\u63d0\u5c3c\u514b",
    "shortcut": "MQ"
}, {
    "ename": "Uruguay",
    "earea": "SA - South America",
    "num": "598",
    "carea": "\u5357\u7f8e\u6d32",
    "cname": "\u4e4c\u62c9\u572d",
    "shortcut": "UY"
}, {
    "ename": "Moldova",
    "earea": "E - Eastern Europe",
    "num": "373",
    "carea": "\u6b27\u6d32-\u4e1c\u6b27",
    "cname": "\u6469\u5c14\u591a\u74e6",
    "shortcut": "MD"
}, {
    "ename": "Central African Republic",
    "earea": "AF - Middle Africa",
    "num": "236",
    "carea": "\u975e\u6d32-\u4e2d\u975e",
    "cname": "\u4e2d \u975e\u5171\u548c\u56fd",
    "shortcut": "CF"
}, {
    "ename": "Benin",
    "earea": "AF - Western Africa",
    "num": "229",
    "carea": "\u975e\u6d32-\u897f\u975e",
    "cname": "\u8d1d\u5b81",
    "shortcut": "BJ"
}, {
    "ename": "Bulgaria",
    "earea": "E - Eastern Europe",
    "num": "359",
    "carea": "\u6b27\u6d32-\u4e1c\u6b27",
    "cname": "\u4fdd\u52a0\u5229\u4e9a",
    "shortcut": "BG"
}, {
    "ename": "Egypt",
    "earea": "AF - Northern Africa",
    "num": "20",
    "carea": "\u975e\u6d32-\u5317\u975e",
    "cname": "\u57c3\u53ca",
    "shortcut": "EG"
}, {
    "ename": "Azerbaijan",
    "earea": "AS - Western Asia",
    "num": "994",
    "carea": "\u4e9a\u6d32-\u897f\u4e9a",
    "cname": "\u963f\u585e\u62dc\u7586",
    "shortcut": "AZ"
}, {
    "ename": "Saint Kitts and Nevis",
    "earea": "SA - Caribbean",
    "num": "1869",
    "carea": "\u5357\u7f8e\u6d32",
    "cname": "\u5723\u57fa \u8328\u548c\u5c3c\u7ef4\u65af",
    "shortcut": "KN"
}, {
    "ename": "Myanmar",
    "earea": "AS - South-eastern Asia",
    "num": "95",
    "carea": "\u4e9a\u6d32-\u4e1c\u5357\u4e9a",
    "cname": "\u7f05\u7538",
    "shortcut": "MM"
}, {
    "ename": "Samoa",
    "earea": "AU - Polynesia",
    "num": "685",
    "carea": "\u6fb3\u6d32",
    "cname": "\u8428\u6469\u4e9a",
    "shortcut": "WS"
}, {
    "ename": "Somalia",
    "earea": "AF - Eastern Africa",
    "num": "252",
    "carea": "\u975e\u6d32-\u4e1c\u975e",
    "cname": "\u7d22\u9a6c\u91cc",
    "shortcut": "SO"
}, {
    "ename": "Gibraltar",
    "earea": "E - Southern Europe",
    "num": "350",
    "carea": "\u6b27\u6d32-\u5357\u6b27",
    "cname": "\u76f4\u5e03\u7f57\u9640",
    "shortcut": "GI"
}, {
    "ename": "Mexico",
    "earea": "SA - Central America",
    "num": "52",
    "carea": "\u5357\u7f8e\u6d32",
    "cname": "\u58a8\u897f\u54e5",
    "shortcut": "MX"
}, {
    "ename": "El Salvador",
    "earea": "SA - Central America",
    "num": "503",
    "carea": "\u5357\u7f8e\u6d32",
    "cname": "\u8428\u5c14\u74e6\u591a",
    "shortcut": "SV"
}, {
    "ename": "Zimbabwe",
    "earea": "AF - Eastern Africa",
    "num": "263",
    "carea": "\u975e\u6d32-\u4e1c\u975e",
    "cname": "\u6d25\u5df4\u5e03\u97e6",
    "shortcut": "ZW"
}, {
    "ename": "Malawi",
    "earea": "AF - Eastern Africa",
    "num": "265",
    "carea": "\u975e\u6d32-\u4e1c\u975e",
    "cname": "\u9a6c\u62c9\u7ef4",
    "shortcut": "MW"
}, {
    "ename": "Czech Republic",
    "earea": "E - Eastern Europe",
    "num": "420",
    "carea": "\u6b27\u6d32-\u4e1c\u6b27",
    "cname": "\u6377\u514b",
    "shortcut": "CZ"
}, {
    "ename": "Bolivia",
    "earea": "SA - South America",
    "num": "591",
    "carea": "\u5357\u7f8e\u6d32",
    "cname": "\u73bb\u5229\u7ef4\u4e9a",
    "shortcut": "BO"
}, {
    "ename": "Slovenia",
    "earea": "E - Southern Europe",
    "num": "386",
    "carea": "\u6b27\u6d32-\u5357\u6b27",
    "cname": "\u65af\u6d1b\u6587\u5c3c\u4e9a",
    "shortcut": "SI"
}, {
    "ename": "Macau",
    "earea": "AS - Eastern Asia",
    "num": "853",
    "carea": "\u4e9a\u6d32-\u4e1c\u4e9a",
    "cname": "\u6fb3\u95e8",
    "shortcut": "MO"
}, {
    "ename": "Seychelles",
    "earea": "AF - Eastern Africa",
    "num": "248",
    "carea": "\u975e\u6d32-\u4e1c\u975e",
    "cname": "\u585e\u820c\u5c14",
    "shortcut": "SC"
}, {
    "ename": "Austria",
    "earea": "E - Western Europe",
    "num": "43",
    "carea": "\u6b27\u6d32-\u897f\u6b27",
    "cname": "\u5965\u5730\u5229",
    "shortcut": "AT"
}, {
    "ename": "Sint Maarten (Dutch Part)",
    "earea": "SA - Caribbean",
    "num": "1721",
    "carea": "\u5357\u7f8e\u6d32",
    "cname": "\u5723\u9a6c\u4e01\u5c9b\uff08\u8377\u5170\u90e8\u5206\uff09",
    "shortcut": "SX"
}, {
    "ename": "American Samoa",
    "earea": "AU - Polynesia",
    "num": "1684",
    "carea": "\u6fb3\u6d32",
    "cname": "\u7f8e\u5c5e\u8428\u6469\u4e9a",
    "shortcut": "AS"
}, {
    "ename": "Mongolia",
    "earea": "AS - Eastern Asia",
    "num": "976",
    "carea": "\u4e9a\u6d32-\u4e1c\u4e9a",
    "cname": "\u8499\u53e4",
    "shortcut": "MN"
}, {
    "ename": "Lithuania",
    "earea": "E - Northern Europe",
    "num": "370",
    "carea": "\u6b27\u6d32-\u5317\u6b27",
    "cname": "\u7acb\u9676\u5b9b",
    "shortcut": "LT"
}, {
    "ename": "Cook Islands",
    "earea": "AU - Polynesia",
    "num": "682",
    "carea": "\u6fb3\u6d32",
    "cname": "\u5e93\u514b\u7fa4\u5c9b",
    "shortcut": "CK"
}, {
    "ename": "Greenland",
    "earea": "NA - Northern America",
    "num": "299",
    "carea": "\u5317\u7f8e\u6d32",
    "cname": "\u683c\u9675\u5170\u5c9b",
    "shortcut": "GL"
}, {
    "ename": "South Sudan",
    "earea": "AF - Northern Africa",
    "num": "211",
    "carea": "\u975e\u6d32-\u5317\u975e",
    "cname": "\u5357\u82cf\u4e39",
    "shortcut": "SS"
}, {
    "ename": "Papua New Guinea",
    "earea": "AU - Melanesia",
    "num": "675",
    "carea": "\u6fb3\u6d32",
    "cname": "\u5df4\u5e03\u4e9a\u65b0\u51e0 \u5185\u4e9a",
    "shortcut": "PG"
}, {
    "ename": "Denmark",
    "earea": "E - Northern Europe",
    "num": "45",
    "carea": "\u6b27\u6d32-\u5317\u6b27",
    "cname": "\u4e39\u9ea6",
    "shortcut": "DK"
}, {
    "ename": "Ecuador",
    "earea": "SA - South America",
    "num": "593",
    "carea": "\u5357\u7f8e\u6d32",
    "cname": "\u5384\u74dc\u591a\u5c14",
    "shortcut": "EC"
}, {
    "ename": "Morocco",
    "earea": "AF - Northern Africa",
    "num": "212",
    "carea": "\u975e\u6d32-\u5317\u975e",
    "cname": "\u6469\u6d1b\u54e5",
    "shortcut": "MA"
}, {
    "ename": "Vanuatu",
    "earea": "AU - Melanesia",
    "num": "678",
    "carea": "\u6fb3\u6d32",
    "cname": "\u74e6\u52aa\u963f\u56fe",
    "shortcut": "VU"
}, {
    "ename": "Solomon Islands",
    "earea": "AU - Melanesia",
    "num": "677",
    "carea": "\u6fb3\u6d32",
    "cname": "\u6240\u7f57\u95e8\u7fa4\u5c9b",
    "shortcut": "SB"
}, {
    "ename": "Brunei",
    "earea": "AS - South-eastern Asia",
    "num": "673",
    "carea": "\u4e9a\u6d32-\u4e1c\u5357\u4e9a",
    "cname": "\u6587\u83b1",
    "shortcut": "BN"
}, {
    "ename": "Sudan",
    "earea": "AF - Northern Africa",
    "num": "249",
    "carea": "\u975e\u6d32-\u5317\u975e",
    "cname": "\u82cf\u4e39",
    "shortcut": "SD"
}, {
    "ename": "Albania",
    "earea": "E - Southern Europe",
    "num": "355",
    "carea": "\u6b27\u6d32-\u5357\u6b27",
    "cname": "\u963f\u5c14\u5df4\u5c3c\u4e9a",
    "shortcut": "AL"
}, {
    "ename": "Barbados",
    "earea": "SA - Caribbean",
    "num": "1246",
    "carea": "\u5357\u7f8e\u6d32",
    "cname": "\u5df4\u5df4\u591a\u65af",
    "shortcut": "BB"
}, {
    "ename": "Ascension Island",
    "earea": "-",
    "num": "247",
    "carea": "\u5357\u7f8e\u6d32",
    "cname": "\u963f\u68ee\u677e\u5c9b",
    "shortcut": "AC"
}, {
    "ename": "Sao Tome and Principe",
    "earea": "AF - Middle Africa",
    "num": "239",
    "carea": "\u975e\u6d32-\u4e2d\u975e",
    "cname": "\u5723\u591a\u7f8e \u548c\u666e\u6797\u897f\u6bd4",
    "shortcut": "ST"
}, {
    "ename": "Finland",
    "earea": "E - Northern Europe",
    "num": "358",
    "carea": "\u6b27\u6d32-\u5317\u6b27",
    "cname": "\u82ac\u5170",
    "shortcut": "FI"
}, {
    "ename": "Grenada",
    "earea": "SA - Caribbean",
    "num": "1473",
    "carea": "\u5357\u7f8e\u6d32",
    "cname": "\u683c\u6797\u7eb3\u8fbe",
    "shortcut": "GD"
}, {
    "ename": "Jordan",
    "earea": "AS - Western Asia",
    "num": "962",
    "carea": "\u4e9a\u6d32-\u897f\u4e9a",
    "cname": "\u7ea6\u65e6",
    "shortcut": "JO"
}, {
    "ename": "Malta",
    "earea": "E - Southern Europe",
    "num": "356",
    "carea": "\u6b27\u6d32-\u5357\u6b27",
    "cname": "\u9a6c\u8033\u4ed6",
    "shortcut": "MT"
}, {
    "ename": "Namibia",
    "earea": "AF - Southern Africa",
    "num": "264",
    "carea": "\u975e\u6d32-\u5357\u975e",
    "cname": "\u7eb3\u7c73\u6bd4\u4e9a",
    "shortcut": "NA"
}, {
    "ename": "Serbia",
    "earea": "E - Southern Europe",
    "num": "381",
    "carea": "\u6b27\u6d32-\u5357\u6b27",
    "cname": "\u585e\u5c14\u7ef4\u4e9a",
    "shortcut": "RS"
}, {
    "ename": "Chad",
    "earea": "AF - Middle Africa",
    "num": "235",
    "carea": "\u975e\u6d32-\u4e2d\u975e",
    "cname": "\u4e4d\u5f97",
    "shortcut": "TD"
}, {
    "ename": "Ivory Coast",
    "earea": "AF - Western Africa",
    "num": "225",
    "carea": "\u975e\u6d32-\u897f\u975e",
    "cname": "\u8c61\u7259\u6d77\u5cb8",
    "shortcut": "CI"
}, {
    "ename": "R\u00e9union Island",
    "earea": "AF - Eastern Africa",
    "num": "262",
    "carea": "\u975e\u6d32-\u4e1c\u975e",
    "cname": "\u7559\u5c3c\u6c6a",
    "shortcut": "RE"
}, {
    "ename": "Gabon",
    "earea": "AF - Middle Africa",
    "num": "241",
    "carea": "\u975e\u6d32-\u4e2d\u975e",
    "cname": "\u52a0\u84ec",
    "shortcut": "GA"
}, {
    "ename": "Dominica",
    "earea": "SA - Caribbean",
    "num": "1767",
    "carea": "\u5357\u7f8e\u6d32",
    "cname": "\u591a\u7c73\u5c3c\u52a0",
    "shortcut": "DM"
}, {
    "ename": "Trinidad and Tobago",
    "earea": "SA - Caribbean",
    "num": "1868",
    "carea": "\u5357\u7f8e\u6d32",
    "cname": "\u7279\u7acb\u5c3c \u8fbe\u548c\u591a\u5df4\u54e5",
    "shortcut": "TT"
}, {
    "ename": "Ukraine",
    "earea": "E - Eastern Europe",
    "num": "380",
    "carea": "\u6b27\u6d32-\u4e1c\u6b27",
    "cname": "\u4e4c\u514b\u5170",
    "shortcut": "UA"
}, {
    "ename": "Tanzania",
    "earea": "AF - Eastern Africa",
    "num": "255",
    "carea": "\u975e\u6d32-\u4e1c\u975e",
    "cname": "\u5766\u6851\u5c3c\u4e9a",
    "shortcut": "TZ"
}, {
    "ename": "Turkmenistan",
    "earea": "AS - South-central Asia",
    "num": "993",
    "carea": "\u4e9a\u6d32-\u5357\u4e9a",
    "cname": "\u571f\u5e93\u66fc\u65af\u5766",
    "shortcut": "TM"
}, {
    "ename": "Lebanon",
    "earea": "AS - Western Asia",
    "num": "961",
    "carea": "\u4e9a\u6d32-\u897f\u4e9a",
    "cname": "\u9ece\u5df4\u5ae9",
    "shortcut": "LB"
}, {
    "ename": "Oman",
    "earea": "AS - Western Asia",
    "num": "968",
    "carea": "\u4e9a\u6d32-\u897f\u4e9a",
    "cname": "\u963f\u66fc",
    "shortcut": "OM"
}, {
    "ename": "Italy",
    "earea": "E - Southern Europe",
    "num": "39",
    "carea": "\u6b27\u6d32-\u5357\u6b27",
    "cname": "\u610f\u5927\u5229",
    "shortcut": "IT"
}, {
    "ename": "Croatia",
    "earea": "E - Southern Europe",
    "num": "385",
    "carea": "\u6b27\u6d32-\u5357\u6b27",
    "cname": "\u514b\u7f57\u5730\u4e9a",
    "shortcut": "HR"
}, {
    "ename": "Puerto Rico",
    "earea": "-",
    "num": "1787",
    "carea": "\u5317\u7f8e\u6d32",
    "cname": "\u6ce2\u591a\u9ece\u5404",
    "shortcut": "PR"
}, {
    "ename": "Haiti",
    "earea": "SA - Caribbean",
    "num": "509",
    "carea": "\u5357\u7f8e\u6d32",
    "cname": "\u6d77\u5730",
    "shortcut": "HT"
}, {
    "ename": "Zambia",
    "earea": "AF - Eastern Africa",
    "num": "260",
    "carea": "\u975e\u6d32-\u4e1c\u975e",
    "cname": "\u8d5e\u6bd4\u4e9a",
    "shortcut": "ZM"
}, {
    "ename": "Peru",
    "earea": "SA - South America",
    "num": "51",
    "carea": "\u5357\u7f8e\u6d32",
    "cname": "\u79d8\u9c81",
    "shortcut": "PE"
}, {
    "ename": "Hungary",
    "earea": "E - Eastern Europe",
    "num": "36",
    "carea": "\u6b27\u6d32-\u4e1c\u6b27",
    "cname": "\u5308\u7259\u5229",
    "shortcut": "HU"
}, {
    "ename": "Iceland",
    "earea": "E - Northern Europe",
    "num": "354",
    "carea": "\u6b27\u6d32-\u5317\u6b27",
    "cname": "\u51b0\u5c9b",
    "shortcut": "IS"
}, {
    "ename": "Cameroon",
    "earea": "AF - Middle Africa",
    "num": "237",
    "carea": "\u975e\u6d32-\u4e2d\u975e",
    "cname": "\u5580\u9ea6\u9686",
    "shortcut": "CM"
}, {
    "ename": "Kazakhstan",
    "earea": "AS - South-central Asia",
    "num": "7",
    "carea": "\u4e9a\u6d32-\u5357\u4e9a",
    "cname": "\u54c8\u8428\u514b\u65af\u5766",
    "shortcut": "KZ"
}, {
    "ename": "Nicaragua",
    "earea": "SA - Central America",
    "num": "505",
    "carea": "\u5357\u7f8e\u6d32",
    "cname": "\u5c3c\u52a0\u62c9\u74dc",
    "shortcut": "NI"
}, {
    "ename": "Netherlands",
    "earea": "E - Western Europe",
    "num": "31",
    "carea": "\u6b27\u6d32-\u897f\u6b27",
    "cname": "\u8377\u5170",
    "shortcut": "NL"
}, {
    "ename": "Bangladesh",
    "earea": "AS - South-central Asia",
    "num": "880",
    "carea": "\u4e9a\u6d32-\u5357\u4e9a",
    "cname": "\u5b5f\u52a0\u62c9\u56fd",
    "shortcut": "BD"
}, {
    "ename": "Belize",
    "earea": "SA - Central America",
    "num": "501",
    "carea": "\u5357\u7f8e\u6d32",
    "cname": "\u4f2f\u5229\u5179",
    "shortcut": "BZ"
}, {
    "ename": "Bermuda",
    "earea": "NA - Northern America",
    "num": "1441",
    "carea": "\u5317\u7f8e\u6d32",
    "cname": "\u767e\u6155\u5927\u7fa4\u5c9b",
    "shortcut": "BM"
}, {
    "ename": "Aruba",
    "earea": "SA - Caribbean",
    "num": "297",
    "carea": "\u5357\u7f8e\u6d32",
    "cname": "\u963f\u9c81\u5df4",
    "shortcut": "AW"
}, {
    "ename": "Latvia",
    "earea": "E - Northern Europe",
    "num": "371",
    "carea": "\u6b27\u6d32-\u5317\u6b27",
    "cname": "\u62c9\u8131\u7ef4\u4e9a",
    "shortcut": "LV"
}, {
    "ename": "San Marino",
    "earea": "E - Southern Europe",
    "num": "378",
    "carea": "\u6b27\u6d32-\u5357\u6b27",
    "cname": "\u5723\u9a6c\u529b\u8bfa",
    "shortcut": "SM"
}];