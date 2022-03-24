
interface Battlefield {
    id: string;
    mapid: string;
    bftitle: string;
    sector: string;
    posx: number;
    posy: number;
    gamemap: string;
    rotation?: number;
}

const battlefield: Battlefield[] = [
    {
        "id": "1",
        "mapid": "1",
        "bftitle": "Thionville",
        "sector": "1",
        "posx": 5330.3291015625,
        "posy": 5623.9580078125,
        "gamemap": "70439"
    },
    {
        "id": "2",
        "mapid": "1",
        "bftitle": "Saarburg",
        "sector": "1",
        "posx": 5439.87109375,
        "posy": 5519.0478515625,
        "gamemap": "70439"
    },
    {
        "id": "3",
        "mapid": "1",
        "bftitle": "Luxembourg",
        "sector": "1",
        "posx": 5311.87109375,
        "posy": 5506.6318359375,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "4",
        "mapid": "1",
        "bftitle": "St. Vith",
        "sector": "2",
        "posx": 5343.19677734375,
        "posy": 5202.35693359375,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "5",
        "mapid": "1",
        "bftitle": "Neumagen Flugplatz",
        "sector": "2",
        "posx": 5530.623046875,
        "posy": 5394.326171875,
        "gamemap": "204",
        "rotation": 3
    },
    {
        "id": "51",
        "mapid": "1",
        "bftitle": "AT Park - 1",
        "sector": "1",
        "posx": 20000,
        "posy": 20000,
        "gamemap": "70439"
    },
    {
        "id": "52",
        "mapid": "1",
        "bftitle": "AT Park - 2",
        "sector": "1",
        "posx": 20001,
        "posy": 20001,
        "gamemap": "70439"
    },
    {
        "id": "53",
        "mapid": "1",
        "bftitle": "AT Park - 3",
        "sector": "1",
        "posx": 20002,
        "posy": 20002,
        "gamemap": "70439"
    },
    {
        "id": "216",
        "mapid": "1",
        "bftitle": "Wiesbaden",
        "sector": "0",
        "posx": 5946.8271484375,
        "posy": 5294.71484375,
        "gamemap": "70439"
    },
    {
        "id": "42514",
        "mapid": "1",
        "bftitle": "Bad Salzungen",
        "sector": "0",
        "posx": 6522.26513671875,
        "posy": 4931.60498046875,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "71917",
        "mapid": "1",
        "bftitle": "Brandenburg",
        "sector": "0",
        "posx": 7188.5048828125,
        "posy": 4155.794921875,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "75221",
        "mapid": "1",
        "bftitle": "Berlin",
        "sector": "3831504",
        "posx": 7436.05712890625,
        "posy": 4109.97216796875,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "90431",
        "mapid": "1",
        "bftitle": "Heerenveen",
        "sector": "0",
        "posx": 5269.21923828125,
        "posy": 3881.672119140625,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "102577",
        "mapid": "1",
        "bftitle": "Arlon",
        "sector": "858725",
        "posx": 5222.68115234375,
        "posy": 5472.9169921875,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "153808",
        "mapid": "1",
        "bftitle": "Hamburg",
        "sector": "2092966",
        "posx": 6449.73779296875,
        "posy": 3623.373046875,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "169004",
        "mapid": "1",
        "bftitle": "Royan",
        "sector": "0",
        "posx": 3213.659912109375,
        "posy": 7237.0791015625,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "189535",
        "mapid": "1",
        "bftitle": "Alsfeld",
        "sector": "0",
        "posx": 6227.9931640625,
        "posy": 4978.06884765625,
        "gamemap": "70439"
    },
    {
        "id": "191476",
        "mapid": "1",
        "bftitle": "Münster",
        "sector": "0",
        "posx": 5763.48388671875,
        "posy": 4355.623046875,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "229927",
        "mapid": "1",
        "bftitle": "Falaise",
        "sector": "0",
        "posx": 3432.985107421875,
        "posy": 5813.91015625,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "234204",
        "mapid": "1",
        "bftitle": "Mons",
        "sector": "0",
        "posx": 4640.501953125,
        "posy": 5095.70703125,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "307418",
        "mapid": "1",
        "bftitle": "Seevetal",
        "sector": "0",
        "posx": 6454.626953125,
        "posy": 3699.5,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "380382",
        "mapid": "1",
        "bftitle": "Dortmund",
        "sector": "0",
        "posx": 5712.61376953125,
        "posy": 4606.61279296875,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "416382",
        "mapid": "1",
        "bftitle": "Polygyros",
        "sector": "0",
        "posx": 10386.3603515625,
        "posy": 9358.9111328125,
        "gamemap": "70439"
    },
    {
        "id": "462796",
        "mapid": "1",
        "bftitle": "Kadino",
        "sector": "0",
        "posx": 12461.3896484375,
        "posy": 3452.345947265625,
        "gamemap": "70439"
    },
    {
        "id": "488824",
        "mapid": "1",
        "bftitle": "Wesel",
        "sector": "0",
        "posx": 5457.30517578125,
        "posy": 4535.9580078125,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "492895",
        "mapid": "1",
        "bftitle": "Paris",
        "sector": "6943558",
        "posx": 4233.11279296875,
        "posy": 5830.80615234375,
        "gamemap": "70439"
    },
    {
        "id": "505868",
        "mapid": "1",
        "bftitle": "Dreux",
        "sector": "0",
        "posx": 3920.048095703125,
        "posy": 5865.56787109375,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "510153",
        "mapid": "1",
        "bftitle": "Polonez",
        "sector": "0",
        "posx": 12077.9296875,
        "posy": 9071.7490234375,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "517921",
        "mapid": "1",
        "bftitle": "Peenemünde",
        "sector": "0",
        "posx": 7630.39697265625,
        "posy": 3400.884033203125,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "523666",
        "mapid": "1",
        "bftitle": "Novooleksiyivka",
        "sector": "0",
        "posx": 13669.08984375,
        "posy": 6984.02197265625,
        "gamemap": "203",
        "rotation": 3
    },
    {
        "id": "595088",
        "mapid": "1",
        "bftitle": "Copenhagen",
        "sector": "357303",
        "posx": 7190.39599609375,
        "posy": 2539.029052734375,
        "gamemap": "201"
    },
    {
        "id": "704995",
        "mapid": "1",
        "bftitle": "Lübeck",
        "sector": "0",
        "posx": 6666.26513671875,
        "posy": 3444.114990234375,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "713365",
        "mapid": "1",
        "bftitle": "Verdun",
        "sector": "0",
        "posx": 5064.3662109375,
        "posy": 5702.1640625,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "760049",
        "mapid": "1",
        "bftitle": "Köln",
        "sector": "0",
        "posx": 5540.59619140625,
        "posy": 4884.44189453125,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "769536",
        "mapid": "1",
        "bftitle": "La Roche-en-Ardenne",
        "sector": "5169421",
        "posx": 5176.5,
        "posy": 5258.66015625,
        "gamemap": "70439"
    },
    {
        "id": "786020",
        "mapid": "1",
        "bftitle": "Stade",
        "sector": "0",
        "posx": 6286.7451171875,
        "posy": 3590.1640625,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "793723",
        "mapid": "1",
        "bftitle": "Vickers Tank Factory",
        "sector": "0",
        "posx": 3385.112060546875,
        "posy": 4698.97998046875,
        "gamemap": "203",
        "rotation": 1
    },
    {
        "id": "814233",
        "mapid": "1",
        "bftitle": "Duisburg",
        "sector": "0",
        "posx": 5503.89697265625,
        "posy": 4626.8369140625,
        "gamemap": "70439"
    },
    {
        "id": "843134",
        "mapid": "1",
        "bftitle": "Emmerich am Rhein",
        "sector": "0",
        "posx": 5391.2568359375,
        "posy": 4457.10888671875,
        "gamemap": "70439"
    },
    {
        "id": "875330",
        "mapid": "1",
        "bftitle": "Stettin",
        "sector": "0",
        "posx": 7787.4169921875,
        "posy": 3670.4189453125,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "875864",
        "mapid": "1",
        "bftitle": "Bremervörde",
        "sector": "0",
        "posx": 6198.1689453125,
        "posy": 3644.947998046875,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "880657",
        "mapid": "1",
        "bftitle": "Swinemünde",
        "sector": "0",
        "posx": 7709.1328125,
        "posy": 3466.14794921875,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "922095",
        "mapid": "1",
        "bftitle": "Hagen",
        "sector": "0",
        "posx": 5713.1767578125,
        "posy": 4661.01416015625,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "925926",
        "mapid": "1",
        "bftitle": "Houffalize",
        "sector": "2",
        "posx": 5264.39990234375,
        "posy": 5275.35400390625,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "990637",
        "mapid": "1",
        "bftitle": "Henschel Fabrik",
        "sector": "0",
        "posx": 6344.72900390625,
        "posy": 4589.078125,
        "gamemap": "203"
    },
    {
        "id": "1094819",
        "mapid": "1",
        "bftitle": "La Louvière",
        "sector": "0",
        "posx": 4728.98876953125,
        "posy": 5097.4111328125,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "1130749",
        "mapid": "1",
        "bftitle": "Herlev",
        "sector": "0",
        "posx": 7109.46484375,
        "posy": 2476.49609375,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "1133124",
        "mapid": "1",
        "bftitle": "Mühlhausen",
        "sector": "0",
        "posx": 6582.80908203125,
        "posy": 4744.3408203125,
        "gamemap": "201"
    },
    {
        "id": "1157735",
        "mapid": "1",
        "bftitle": "Bayeux",
        "sector": "0",
        "posx": 3248.906982421875,
        "posy": 5683.990234375,
        "gamemap": "201"
    },
    {
        "id": "1213671",
        "mapid": "1",
        "bftitle": "Eindhoven Vliegveld",
        "sector": "0",
        "posx": 5140.10302734375,
        "posy": 4580.1259765625,
        "gamemap": "205",
        "rotation": 3
    },
    {
        "id": "1257769",
        "mapid": "1",
        "bftitle": "Zwolle",
        "sector": "0",
        "posx": 5324.44091796875,
        "posy": 4165.26806640625,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "1332963",
        "mapid": "1",
        "bftitle": "Verviers",
        "sector": "2106890",
        "posx": 5260.56884765625,
        "posy": 5051.84814453125,
        "gamemap": "70439"
    },
    {
        "id": "1336674",
        "mapid": "1",
        "bftitle": "Saint-Pol-sur-Ternoise",
        "sector": "0",
        "posx": 4156.44091796875,
        "posy": 5149.3330078125,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "1359946",
        "mapid": "1",
        "bftitle": "Emden",
        "sector": "0",
        "posx": 5631.87890625,
        "posy": 3720.62109375,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "1397321",
        "mapid": "1",
        "bftitle": "Bad Nauheim",
        "sector": "0",
        "posx": 6071.93701171875,
        "posy": 5148.619140625,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "1401767",
        "mapid": "1",
        "bftitle": "Düren",
        "sector": "0",
        "posx": 5406.4111328125,
        "posy": 4939.89892578125,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "1413262",
        "mapid": "1",
        "bftitle": "Hamburg North",
        "sector": "2092966",
        "posx": 6449.94482421875,
        "posy": 3564.14306640625,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "1413376",
        "mapid": "1",
        "bftitle": "Bernburg",
        "sector": "0",
        "posx": 6949.9130859375,
        "posy": 4468.62890625,
        "gamemap": "70439"
    },
    {
        "id": "1471474",
        "mapid": "1",
        "bftitle": "Kleve",
        "sector": "0",
        "posx": 5342.4609375,
        "posy": 4502.39013671875,
        "gamemap": "70439"
    },
    {
        "id": "1528999",
        "mapid": "1",
        "bftitle": "Aalst",
        "sector": "0",
        "posx": 4689.1767578125,
        "posy": 4886.4208984375,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "1550716",
        "mapid": "1",
        "bftitle": "Wavre",
        "sector": "0",
        "posx": 4883.14697265625,
        "posy": 4984.31494140625,
        "gamemap": "70439"
    },
    {
        "id": "1579227",
        "mapid": "1",
        "bftitle": "Dover Airfield",
        "sector": "0",
        "posx": 3920.865966796875,
        "posy": 4749.576171875,
        "gamemap": "205"
    },
    {
        "id": "1604967",
        "mapid": "1",
        "bftitle": "Fécamp",
        "sector": "0",
        "posx": 3634.492919921875,
        "posy": 5456.19287109375,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "1645821",
        "mapid": "1",
        "bftitle": "Saint-Omer",
        "sector": "0",
        "posx": 4172.8251953125,
        "posy": 4960.40478515625,
        "gamemap": "201"
    },
    {
        "id": "1661018",
        "mapid": "1",
        "bftitle": "Husum",
        "sector": "0",
        "posx": 6165.4560546875,
        "posy": 3152.68994140625,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "1754758",
        "mapid": "1",
        "bftitle": "Liége",
        "sector": "2106890",
        "posx": 5156.34423828125,
        "posy": 5055.1630859375,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "1789698",
        "mapid": "1",
        "bftitle": "Cassel",
        "sector": "0",
        "posx": 4277.27294921875,
        "posy": 4964.5009765625,
        "gamemap": "70439"
    },
    {
        "id": "1813527",
        "mapid": "1",
        "bftitle": "Amsterdam",
        "sector": "9168689",
        "posx": 4969.10498046875,
        "posy": 4186.4580078125,
        "gamemap": "70439"
    },
    {
        "id": "1814193",
        "mapid": "1",
        "bftitle": "Schleswig",
        "sector": "0",
        "posx": 6311.9609375,
        "posy": 3143.572021484375,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "1826072",
        "mapid": "1",
        "bftitle": "Lebedyn",
        "sector": "0",
        "posx": 13623.5400390625,
        "posy": 5043.35302734375,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "1889223",
        "mapid": "1",
        "bftitle": "Zhuravnoye",
        "sector": "0",
        "posx": 13705.2900390625,
        "posy": 5201.3017578125,
        "gamemap": "203"
    },
    {
        "id": "1889289",
        "mapid": "1",
        "bftitle": "Soest",
        "sector": "0",
        "posx": 5956.12109375,
        "posy": 4561.044921875,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "1900450",
        "mapid": "1",
        "bftitle": "Saint-Hubert",
        "sector": "5169421",
        "posx": 5089.51611328125,
        "posy": 5346.166015625,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "1928979",
        "mapid": "1",
        "bftitle": "Verkhovina",
        "sector": "0",
        "posx": 11844.0400390625,
        "posy": 3192.2958984375,
        "gamemap": "205"
    },
    {
        "id": "1933323",
        "mapid": "1",
        "bftitle": "Warburg",
        "sector": "0",
        "posx": 6267.92919921875,
        "posy": 4542.35693359375,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "1975852",
        "mapid": "1",
        "bftitle": "Eckernförde",
        "sector": "0",
        "posx": 6401.048828125,
        "posy": 3171.218994140625,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "1981551",
        "mapid": "1",
        "bftitle": "Zerbst",
        "sector": "0",
        "posx": 7062.041015625,
        "posy": 4381.5888671875,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "2064137",
        "mapid": "1",
        "bftitle": "Hürtgenwald",
        "sector": "0",
        "posx": 5366.1689453125,
        "posy": 5019.6689453125,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "2121538",
        "mapid": "1",
        "bftitle": "Beauvais",
        "sector": "0",
        "posx": 4137.4970703125,
        "posy": 5591.18896484375,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "2123777",
        "mapid": "1",
        "bftitle": "Metz",
        "sector": "0",
        "posx": 5335.8330078125,
        "posy": 5722.26220703125,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "2133124",
        "mapid": "1",
        "bftitle": "Krikkovo",
        "sector": "0",
        "posx": 11839.8798828125,
        "posy": 436.1018981933594,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "2140148",
        "mapid": "1",
        "bftitle": "Weißenfels",
        "sector": "0",
        "posx": 5694.7451171875,
        "posy": 5057.1728515625,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "2150634",
        "mapid": "1",
        "bftitle": "Erfurt",
        "sector": "0",
        "posx": 6746.13720703125,
        "posy": 4861.3330078125,
        "gamemap": "201"
    },
    {
        "id": "2156500",
        "mapid": "1",
        "bftitle": "Havelberg",
        "sector": "0",
        "posx": 7061.01708984375,
        "posy": 3967.1240234375,
        "gamemap": "70439"
    },
    {
        "id": "2164164",
        "mapid": "1",
        "bftitle": "Verbomont",
        "sector": "0",
        "posx": 5209.24609375,
        "posy": 5154.4951171875,
        "gamemap": "70439"
    },
    {
        "id": "2171254",
        "mapid": "1",
        "bftitle": "Calais",
        "sector": "0",
        "posx": 4082.882080078125,
        "posy": 4880.64599609375,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "2207972",
        "mapid": "1",
        "bftitle": "Charleroi",
        "sector": "0",
        "posx": 4806.4248046875,
        "posy": 5127.31689453125,
        "gamemap": "70439"
    },
    {
        "id": "2223665",
        "mapid": "1",
        "bftitle": "Wuppertal",
        "sector": "0",
        "posx": 5627.2890625,
        "posy": 4716.9501953125,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "2294707",
        "mapid": "1",
        "bftitle": "Gerstfeldhöhe",
        "sector": "0",
        "posx": 5726.36083984375,
        "posy": 5667.47802734375,
        "gamemap": "201"
    },
    {
        "id": "2329491",
        "mapid": "1",
        "bftitle": "Ashford",
        "sector": "0",
        "posx": 3759.037109375,
        "posy": 4799.2998046875,
        "gamemap": "201"
    },
    {
        "id": "2380840",
        "mapid": "1",
        "bftitle": "Hamm",
        "sector": "0",
        "posx": 5776.9482421875,
        "posy": 4530.17578125,
        "gamemap": "203",
        "rotation": 1
    },
    {
        "id": "2383114",
        "mapid": "1",
        "bftitle": "Bremen",
        "sector": "0",
        "posx": 6062.73681640625,
        "posy": 3847.153076171875,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "2414132",
        "mapid": "1",
        "bftitle": "Dzyarzhynsk",
        "sector": "0",
        "posx": 11469.9501953125,
        "posy": 3552.618896484375,
        "gamemap": "201"
    },
    {
        "id": "2431594",
        "mapid": "1",
        "bftitle": "Frankfurt a.M. Flugplatz",
        "sector": "0",
        "posx": 6044.33984375,
        "posy": 5296.40185546875,
        "gamemap": "205",
        "rotation": 1
    },
    {
        "id": "2445016",
        "mapid": "1",
        "bftitle": "Mainz Factory",
        "sector": "0",
        "posx": 6003.2978515625,
        "posy": 5333.40185546875,
        "gamemap": "203"
    },
    {
        "id": "2451178",
        "mapid": "1",
        "bftitle": "Rudnya",
        "sector": "0",
        "posx": 12629.3896484375,
        "posy": 2912.992919921875,
        "gamemap": "70439"
    },
    {
        "id": "2451358",
        "mapid": "1",
        "bftitle": "Maidstone",
        "sector": "0",
        "posx": 3641.260009765625,
        "posy": 4713.2509765625,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "2489318",
        "mapid": "1",
        "bftitle": "Korsør",
        "sector": "0",
        "posx": 6813.72119140625,
        "posy": 2710.930908203125,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "2490100",
        "mapid": "1",
        "bftitle": "Coëx",
        "sector": "0",
        "posx": 2999.2490234375,
        "posy": 6781.1611328125,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "2509072",
        "mapid": "1",
        "bftitle": "Wilhelmshaven",
        "sector": "0",
        "posx": 5869.5341796875,
        "posy": 3622.693115234375,
        "gamemap": "70439"
    },
    {
        "id": "2516485",
        "mapid": "1",
        "bftitle": "Nordhausen",
        "sector": "0",
        "posx": 6674.96923828125,
        "posy": 4615.57421875,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "2615602",
        "mapid": "1",
        "bftitle": "Oerlinghausen Flugplatz",
        "sector": "0",
        "posx": 6130.240234375,
        "posy": 4367.14794921875,
        "gamemap": "204",
        "rotation": 1
    },
    {
        "id": "2637423",
        "mapid": "1",
        "bftitle": "Herford",
        "sector": "0",
        "posx": 6128.56005859375,
        "posy": 4306.173828125,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "2704209",
        "mapid": "1",
        "bftitle": "Mainz",
        "sector": "0",
        "posx": 5950.90283203125,
        "posy": 5364.4130859375,
        "gamemap": "70439"
    },
    {
        "id": "2705426",
        "mapid": "1",
        "bftitle": "Trets",
        "sector": "0",
        "posx": 5196.5498046875,
        "posy": 8121.2421875,
        "gamemap": "70439"
    },
    {
        "id": "2708652",
        "mapid": "1",
        "bftitle": "Osnabrück",
        "sector": "0",
        "posx": 5874.8408203125,
        "posy": 4183.9560546875,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "2726536",
        "mapid": "1",
        "bftitle": "Jüterbog",
        "sector": "0",
        "posx": 7351.32080078125,
        "posy": 4367.76611328125,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "2749910",
        "mapid": "1",
        "bftitle": "Bennerscheid Panzer Fabrik",
        "sector": "0",
        "posx": 5659.1611328125,
        "posy": 4991.89404296875,
        "gamemap": "203",
        "rotation": 2
    },
    {
        "id": "2760607",
        "mapid": "1",
        "bftitle": "Saint-Quentin",
        "sector": "0",
        "posx": 4503.37109375,
        "posy": 5415.93115234375,
        "gamemap": "70439"
    },
    {
        "id": "2776775",
        "mapid": "1",
        "bftitle": "Hameln",
        "sector": "0",
        "posx": 6273.30517578125,
        "posy": 4275.86083984375,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "2791209",
        "mapid": "1",
        "bftitle": "Rotterdam",
        "sector": "0",
        "posx": 4825.01806640625,
        "posy": 4378.01416015625,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "2839692",
        "mapid": "1",
        "bftitle": "Bingen am Rhein",
        "sector": "0",
        "posx": 5818.57080078125,
        "posy": 5337.97900390625,
        "gamemap": "70439"
    },
    {
        "id": "2894582",
        "mapid": "1",
        "bftitle": "Essen",
        "sector": "0",
        "posx": 5571.81298828125,
        "posy": 4627.0927734375,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "2899094",
        "mapid": "1",
        "bftitle": "Pontoise",
        "sector": "0",
        "posx": 4127.76904296875,
        "posy": 5760.14892578125,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "2918269",
        "mapid": "1",
        "bftitle": "Mansfeld Flugplatz",
        "sector": "0",
        "posx": 6872.60107421875,
        "posy": 4577.1728515625,
        "gamemap": "204",
        "rotation": 3
    },
    {
        "id": "2927977",
        "mapid": "1",
        "bftitle": "Hauterives",
        "sector": "0",
        "posx": 4988.2080078125,
        "posy": 7393.7080078125,
        "gamemap": "203"
    },
    {
        "id": "3101772",
        "mapid": "1",
        "bftitle": "Bitburg",
        "sector": "0",
        "posx": 5432.85693359375,
        "posy": 5347.22216796875,
        "gamemap": "70439"
    },
    {
        "id": "3148785",
        "mapid": "1",
        "bftitle": "Eindhoven",
        "sector": "0",
        "posx": 5111.06494140625,
        "posy": 4629.14208984375,
        "gamemap": "70439"
    },
    {
        "id": "3154201",
        "mapid": "1",
        "bftitle": "Thérouanne",
        "sector": "0",
        "posx": 4191.2568359375,
        "posy": 5039.2529296875,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "3301808",
        "mapid": "1",
        "bftitle": "Lauenburg",
        "sector": "0",
        "posx": 6588.44091796875,
        "posy": 3688.594970703125,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "3325058",
        "mapid": "1",
        "bftitle": "Mönchengladbach",
        "sector": "0",
        "posx": 5405.89892578125,
        "posy": 4743.291015625,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "3328508",
        "mapid": "1",
        "bftitle": "Villers-Bocage",
        "sector": "0",
        "posx": 3295.76904296875,
        "posy": 5754.51806640625,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "3334381",
        "mapid": "1",
        "bftitle": "Tilburg",
        "sector": "0",
        "posx": 5003.033203125,
        "posy": 4582.548828125,
        "gamemap": "70439"
    },
    {
        "id": "3347892",
        "mapid": "1",
        "bftitle": "Wahnheide Flugplatz",
        "sector": "0",
        "posx": 5605.8349609375,
        "posy": 4903.03515625,
        "gamemap": "205",
        "rotation": 1
    },
    {
        "id": "3364378",
        "mapid": "1",
        "bftitle": "Eisenach",
        "sector": "0",
        "posx": 6543.89697265625,
        "posy": 4862.61279296875,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "3404708",
        "mapid": "1",
        "bftitle": "Saint-Denis",
        "sector": "6943558",
        "posx": 4219.173828125,
        "posy": 5758.2841796875,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "3446016",
        "mapid": "1",
        "bftitle": "Elsleben",
        "sector": "0",
        "posx": 6902.06005859375,
        "posy": 4627.97900390625,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "3518121",
        "mapid": "1",
        "bftitle": "Neustrelitz",
        "sector": "0",
        "posx": 7358.39111328125,
        "posy": 3757.25,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "3558576",
        "mapid": "1",
        "bftitle": "Fieseler Fabrik",
        "sector": "0",
        "posx": 6251.9970703125,
        "posy": 4621.4208984375,
        "gamemap": "203"
    },
    {
        "id": "3591477",
        "mapid": "1",
        "bftitle": "Euskirchen",
        "sector": "0",
        "posx": 5489.373046875,
        "posy": 5059.72509765625,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "3601103",
        "mapid": "1",
        "bftitle": "Nyborg",
        "sector": "0",
        "posx": 6666.26513671875,
        "posy": 2711.443115234375,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "3680111",
        "mapid": "1",
        "bftitle": "Dunkirk",
        "sector": "6610772",
        "posx": 4191.01513671875,
        "posy": 4870.1689453125,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "3685553",
        "mapid": "1",
        "bftitle": "Charleville-Mézières",
        "sector": "5169421",
        "posx": 4953.85400390625,
        "posy": 5435.4248046875,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "3833130",
        "mapid": "1",
        "bftitle": "Ambérieu-en-Bugey",
        "sector": "0",
        "posx": 5081.27001953125,
        "posy": 7097.19384765625,
        "gamemap": "201"
    },
    {
        "id": "3916371",
        "mapid": "1",
        "bftitle": "Nykøbing Falster",
        "sector": "0",
        "posx": 6991.384765625,
        "posy": 3008.658935546875,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "3922637",
        "mapid": "1",
        "bftitle": "Uelzen",
        "sector": "0",
        "posx": 6627.73681640625,
        "posy": 3913.748046875,
        "gamemap": "70439"
    },
    {
        "id": "3956290",
        "mapid": "1",
        "bftitle": "Karben",
        "sector": "0",
        "posx": 6140.18408203125,
        "posy": 5206.97314453125,
        "gamemap": "203"
    },
    {
        "id": "4014479",
        "mapid": "1",
        "bftitle": "Apeldoorn",
        "sector": "0",
        "posx": 5322.90478515625,
        "posy": 4256.9169921875,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "4032327",
        "mapid": "1",
        "bftitle": "Hastings Airfield",
        "sector": "0",
        "posx": 3630.616943359375,
        "posy": 4916.3740234375,
        "gamemap": "204"
    },
    {
        "id": "4042804",
        "mapid": "1",
        "bftitle": "Passendorf",
        "sector": "0",
        "posx": 7015.44921875,
        "posy": 4619.6689453125,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "4049151",
        "mapid": "1",
        "bftitle": "Gent",
        "sector": "0",
        "posx": 4617.18896484375,
        "posy": 4825.23681640625,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "4103792",
        "mapid": "1",
        "bftitle": "Kolomna",
        "sector": "0",
        "posx": 14882.0703125,
        "posy": 2844.7919921875,
        "gamemap": "203"
    },
    {
        "id": "4110649",
        "mapid": "1",
        "bftitle": "Assen",
        "sector": "0",
        "posx": 5461.23583984375,
        "posy": 3876.555908203125,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "4127342",
        "mapid": "1",
        "bftitle": "Magdeburg",
        "sector": "0",
        "posx": 6921.2412109375,
        "posy": 4323.47802734375,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "4140862",
        "mapid": "1",
        "bftitle": "Gelsenkirchen",
        "sector": "0",
        "posx": 5575.22900390625,
        "posy": 4568.76220703125,
        "gamemap": "203"
    },
    {
        "id": "4145955",
        "mapid": "1",
        "bftitle": "Kortrijk",
        "sector": "0",
        "posx": 4469.27294921875,
        "posy": 4927.63818359375,
        "gamemap": "70439"
    },
    {
        "id": "4175046",
        "mapid": "1",
        "bftitle": "Potsdam",
        "sector": "0",
        "posx": 7340.8251953125,
        "posy": 4163.21923828125,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "4186219",
        "mapid": "1",
        "bftitle": "Saarbrücken",
        "sector": "0",
        "posx": 5576.34521484375,
        "posy": 5676.18212890625,
        "gamemap": "201"
    },
    {
        "id": "4199061",
        "mapid": "1",
        "bftitle": "Boulogne-Billancourt",
        "sector": "6943558",
        "posx": 4144.6611328125,
        "posy": 5834.7529296875,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "4210955",
        "mapid": "1",
        "bftitle": "Kiel",
        "sector": "0",
        "posx": 6479.89697265625,
        "posy": 3243.923095703125,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "4328669",
        "mapid": "1",
        "bftitle": "Næstved",
        "sector": "0",
        "posx": 6962.712890625,
        "posy": 2796.178955078125,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "4387496",
        "mapid": "1",
        "bftitle": "Baden-Baden",
        "sector": "0",
        "posx": 5925.14501953125,
        "posy": 5885.5888671875,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "4402978",
        "mapid": "1",
        "bftitle": "Bremerhaven",
        "sector": "0",
        "posx": 6025.89501953125,
        "posy": 3651.675048828125,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "4458961",
        "mapid": "1",
        "bftitle": "Gland Flugplatz",
        "sector": "0",
        "posx": 5352.97314453125,
        "posy": 6900.19580078125,
        "gamemap": "204",
        "rotation": 2
    },
    {
        "id": "4461368",
        "mapid": "1",
        "bftitle": "Ligneuville",
        "sector": "0",
        "posx": 5304.7919921875,
        "posy": 5160.69287109375,
        "gamemap": "204",
        "rotation": 2
    },
    {
        "id": "4467434",
        "mapid": "1",
        "bftitle": "Longkamp",
        "sector": "127310",
        "posx": 5625.11279296875,
        "posy": 5387.4140625,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "4490268",
        "mapid": "1",
        "bftitle": "Leipzig",
        "sector": "0",
        "posx": 7140.88916015625,
        "posy": 4672.40478515625,
        "gamemap": "70439"
    },
    {
        "id": "4523151",
        "mapid": "1",
        "bftitle": "Arnhem",
        "sector": "8012467",
        "posx": 5263.10400390625,
        "posy": 4355.921875,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "4551690",
        "mapid": "1",
        "bftitle": "Saint-Lys",
        "sector": "0",
        "posx": 3859.618896484375,
        "posy": 8114.55712890625,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "4582951",
        "mapid": "1",
        "bftitle": "Turnhout",
        "sector": "0",
        "posx": 5002.52099609375,
        "posy": 4698.26220703125,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "4606236",
        "mapid": "1",
        "bftitle": "Maastricht",
        "sector": "2106890",
        "posx": 5190.93701171875,
        "posy": 4927.17578125,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "4663340",
        "mapid": "1",
        "bftitle": "Lier",
        "sector": "29335",
        "posx": 4856.26708984375,
        "posy": 4795.84814453125,
        "gamemap": "70439"
    },
    {
        "id": "4666014",
        "mapid": "1",
        "bftitle": "Wetzlar",
        "sector": "0",
        "posx": 6012.2890625,
        "posy": 5073.2412109375,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "4695602",
        "mapid": "1",
        "bftitle": "Cloppenburg",
        "sector": "0",
        "posx": 5897.880859375,
        "posy": 3947.410888671875,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "4709657",
        "mapid": "1",
        "bftitle": "Leuven",
        "sector": "0",
        "posx": 4895.0009765625,
        "posy": 4920.98095703125,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "4798566",
        "mapid": "1",
        "bftitle": "Valence",
        "sector": "0",
        "posx": 4951.35595703125,
        "posy": 7528.72314453125,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "4808231",
        "mapid": "1",
        "bftitle": "Bonn",
        "sector": "0",
        "posx": 5585.25,
        "posy": 4974.69580078125,
        "gamemap": "70439"
    },
    {
        "id": "4881856",
        "mapid": "1",
        "bftitle": "Dierdorf Flugplatz",
        "sector": "0",
        "posx": 5764.3720703125,
        "posy": 5094.89208984375,
        "gamemap": "204"
    },
    {
        "id": "4936059",
        "mapid": "1",
        "bftitle": "Breda",
        "sector": "0",
        "posx": 4911.384765625,
        "posy": 4573.84619140625,
        "gamemap": "201"
    },
    {
        "id": "5004292",
        "mapid": "1",
        "bftitle": "Poświętne",
        "sector": "0",
        "posx": 10207.080078125,
        "posy": 3928.180908203125,
        "gamemap": "201"
    },
    {
        "id": "5019917",
        "mapid": "1",
        "bftitle": "Mannheim",
        "sector": "0",
        "posx": 5996.23486328125,
        "posy": 5579.64306640625,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "5031660",
        "mapid": "1",
        "bftitle": "Køge",
        "sector": "357303",
        "posx": 7079.9169921875,
        "posy": 2661.9609375,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "5069447",
        "mapid": "1",
        "bftitle": "Lisieux",
        "sector": "0",
        "posx": 3588.12109375,
        "posy": 5722.77294921875,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "5201533",
        "mapid": "1",
        "bftitle": "Slagelse",
        "sector": "0",
        "posx": 6887.80517578125,
        "posy": 2681.406005859375,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "5290328",
        "mapid": "1",
        "bftitle": "La Crèche",
        "sector": "0",
        "posx": 3427.0869140625,
        "posy": 6923.3740234375,
        "gamemap": "70439"
    },
    {
        "id": "5297308",
        "mapid": "1",
        "bftitle": "Recht",
        "sector": "0",
        "posx": 5282.7861328125,
        "posy": 5211.27587890625,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "5344813",
        "mapid": "1",
        "bftitle": "La Fère",
        "sector": "0",
        "posx": 4503.8330078125,
        "posy": 5506.708984375,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "5414805",
        "mapid": "1",
        "bftitle": "Marburg",
        "sector": "0",
        "posx": 6084.88916015625,
        "posy": 4960.40478515625,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "5451802",
        "mapid": "1",
        "bftitle": "Rouen",
        "sector": "0",
        "posx": 3841.049072265625,
        "posy": 5580.9501953125,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "5509060",
        "mapid": "1",
        "bftitle": "Bad Hersfeld",
        "sector": "9300046",
        "posx": 6347.72314453125,
        "posy": 4911.63818359375,
        "gamemap": "70439"
    },
    {
        "id": "5533794",
        "mapid": "1",
        "bftitle": "Molodaya",
        "sector": "0",
        "posx": 11857.6796875,
        "posy": 4406.5439453125,
        "gamemap": "203"
    },
    {
        "id": "5567418",
        "mapid": "1",
        "bftitle": "Düsseldorf",
        "sector": "0",
        "posx": 5517.02978515625,
        "posy": 4727.9580078125,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "5582953",
        "mapid": "1",
        "bftitle": "Nivelles",
        "sector": "0",
        "posx": 4779.48095703125,
        "posy": 5027.5849609375,
        "gamemap": "70439"
    },
    {
        "id": "5582998",
        "mapid": "1",
        "bftitle": "Gare Maritime de Dieppe",
        "sector": "8995238",
        "posx": 3846.673095703125,
        "posy": 5384.30712890625,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "5602822",
        "mapid": "1",
        "bftitle": "Stuttgart",
        "sector": "0",
        "posx": 6204.248046875,
        "posy": 5864.90283203125,
        "gamemap": "70439"
    },
    {
        "id": "5616774",
        "mapid": "1",
        "bftitle": "Rozdil’na",
        "sector": "0",
        "posx": 12332.099609375,
        "posy": 6718.548828125,
        "gamemap": "70439"
    },
    {
        "id": "5662035",
        "mapid": "1",
        "bftitle": "Morestel",
        "sector": "0",
        "posx": 5118.6708984375,
        "posy": 7217.0009765625,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "5837597",
        "mapid": "1",
        "bftitle": "Laon",
        "sector": "0",
        "posx": 4575.4111328125,
        "posy": 5532.7177734375,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "5892008",
        "mapid": "1",
        "bftitle": "Budy",
        "sector": "0",
        "posx": 10471.2001953125,
        "posy": 4021.55810546875,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "6002681",
        "mapid": "1",
        "bftitle": "Strassburg",
        "sector": "0",
        "posx": 5784.2080078125,
        "posy": 5955.73779296875,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "6011025",
        "mapid": "1",
        "bftitle": "Hadsten",
        "sector": "0",
        "posx": 6460.76806640625,
        "posy": 2190.5,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "6034345",
        "mapid": "1",
        "bftitle": "Ungheni",
        "sector": "0",
        "posx": 11662.7802734375,
        "posy": 6562.294921875,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "6039908",
        "mapid": "1",
        "bftitle": "Dover",
        "sector": "648514",
        "posx": 3914.110107421875,
        "posy": 4799.81298828125,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "6120514",
        "mapid": "1",
        "bftitle": "Siegen",
        "sector": "0",
        "posx": 5865.11279296875,
        "posy": 4916.62890625,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "6158751",
        "mapid": "1",
        "bftitle": "Cambrai",
        "sector": "0",
        "posx": 4471.4990234375,
        "posy": 5265.01904296875,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "6234806",
        "mapid": "1",
        "bftitle": "Roskilde",
        "sector": "0",
        "posx": 7042.505859375,
        "posy": 2544.531005859375,
        "gamemap": "70439"
    },
    {
        "id": "6238250",
        "mapid": "1",
        "bftitle": "Brussels",
        "sector": "1650205",
        "posx": 4796.619140625,
        "posy": 4930.708984375,
        "gamemap": "70439"
    },
    {
        "id": "6258746",
        "mapid": "1",
        "bftitle": "Celle",
        "sector": "0",
        "posx": 6433.02685546875,
        "posy": 4048.35791015625,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "6264931",
        "mapid": "1",
        "bftitle": "Hemse",
        "sector": "0",
        "posx": 8879.744140625,
        "posy": 1716.0699462890625,
        "gamemap": "205",
        "rotation": 1
    },
    {
        "id": "6284448",
        "mapid": "1",
        "bftitle": "Wittenberge",
        "sector": "0",
        "posx": 6940.69677734375,
        "posy": 3880.594970703125,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "6320595",
        "mapid": "1",
        "bftitle": "Kudžionys",
        "sector": "0",
        "posx": 10970.259765625,
        "posy": 3175.3349609375,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "6339971",
        "mapid": "1",
        "bftitle": "Hannover",
        "sector": "0",
        "posx": 6307.73681640625,
        "posy": 4164.244140625,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "6404847",
        "mapid": "1",
        "bftitle": "Dömitz",
        "sector": "0",
        "posx": 6791.705078125,
        "posy": 3833.490966796875,
        "gamemap": "70439"
    },
    {
        "id": "6435090",
        "mapid": "1",
        "bftitle": "Lille",
        "sector": "0",
        "posx": 4414.48876953125,
        "posy": 5042.326171875,
        "gamemap": "70439"
    },
    {
        "id": "6578034",
        "mapid": "1",
        "bftitle": "Krefeld",
        "sector": "0",
        "posx": 5448.0888671875,
        "posy": 4674.708984375,
        "gamemap": "203"
    },
    {
        "id": "6610170",
        "mapid": "1",
        "bftitle": "Stralsund",
        "sector": "0",
        "posx": 7350.041015625,
        "posy": 3248.27490234375,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "6612896",
        "mapid": "1",
        "bftitle": "Zossen",
        "sector": "0",
        "posx": 7450.13720703125,
        "posy": 4236.18212890625,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "6660987",
        "mapid": "1",
        "bftitle": "Utrecht",
        "sector": "0",
        "posx": 5011.9931640625,
        "posy": 4330.1328125,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "6661185",
        "mapid": "1",
        "bftitle": "Kassel",
        "sector": "0",
        "posx": 6321.55322265625,
        "posy": 4642.45703125,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "6724566",
        "mapid": "1",
        "bftitle": "London City",
        "sector": "0",
        "posx": 3496.72900390625,
        "posy": 4602.26220703125,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "6727761",
        "mapid": "1",
        "bftitle": "Reims",
        "sector": "0",
        "posx": 4695.8330078125,
        "posy": 5665.94091796875,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "6732841",
        "mapid": "1",
        "bftitle": "Fürstenfeld",
        "sector": "0",
        "posx": 8229.51171875,
        "posy": 6629.18701171875,
        "gamemap": "201"
    },
    {
        "id": "6743177",
        "mapid": "1",
        "bftitle": "Höxter",
        "sector": "0",
        "posx": 6323.02197265625,
        "posy": 4427.4599609375,
        "gamemap": "70439"
    },
    {
        "id": "6775906",
        "mapid": "1",
        "bftitle": "Caen",
        "sector": "5056615",
        "posx": 3415.115966796875,
        "posy": 5685.19189453125,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "6778799",
        "mapid": "1",
        "bftitle": "Arnhem Vliegveld",
        "sector": "0",
        "posx": 5225.2412109375,
        "posy": 4312.212890625,
        "gamemap": "205",
        "rotation": 3
    },
    {
        "id": "6783015",
        "mapid": "1",
        "bftitle": "Dulnain Bridge",
        "sector": "0",
        "posx": 2440.327880859375,
        "posy": 1664.22705078125,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "6804174",
        "mapid": "1",
        "bftitle": "Kaiserslautern",
        "sector": "0",
        "posx": 5781.78515625,
        "posy": 5590.67822265625,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "6806459",
        "mapid": "1",
        "bftitle": "Brugge",
        "sector": "0",
        "posx": 4464.01416015625,
        "posy": 4802.5029296875,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "6889865",
        "mapid": "1",
        "bftitle": "Mers Les Bains",
        "sector": "8995238",
        "posx": 3928.320068359375,
        "posy": 5346.36376953125,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "6892123",
        "mapid": "1",
        "bftitle": "Roermond",
        "sector": "0",
        "posx": 5272.29296875,
        "posy": 4752.02099609375,
        "gamemap": "70439"
    },
    {
        "id": "7042646",
        "mapid": "1",
        "bftitle": "Moers",
        "sector": "0",
        "posx": 5441.1767578125,
        "posy": 4626.06884765625,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "7050820",
        "mapid": "1",
        "bftitle": "Flensburg",
        "sector": "0",
        "posx": 6286.873046875,
        "posy": 2981.780029296875,
        "gamemap": "203"
    },
    {
        "id": "7096246",
        "mapid": "1",
        "bftitle": "Trier",
        "sector": "2",
        "posx": 5467.466796875,
        "posy": 5441.27490234375,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "7167799",
        "mapid": "1",
        "bftitle": "Lohmar Panzer Fabrik",
        "sector": "0",
        "posx": 5643.3720703125,
        "posy": 4934.59912109375,
        "gamemap": "203"
    },
    {
        "id": "7198851",
        "mapid": "1",
        "bftitle": "'s-Hertogenbosch",
        "sector": "0",
        "posx": 5060.88916015625,
        "posy": 4500.1181640625,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "7274622",
        "mapid": "1",
        "bftitle": "Lipniki",
        "sector": "0",
        "posx": 11714.0703125,
        "posy": 3704,
        "gamemap": "70439"
    },
    {
        "id": "7302229",
        "mapid": "1",
        "bftitle": "Haderslev",
        "sector": "0",
        "posx": 6294.041015625,
        "posy": 2768.787109375,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "7307784",
        "mapid": "1",
        "bftitle": "Peenemünde Flugplatz",
        "sector": "0",
        "posx": 7564.66796875,
        "posy": 3354.7919921875,
        "gamemap": "204",
        "rotation": 3
    },
    {
        "id": "7368078",
        "mapid": "1",
        "bftitle": "Obukhiv",
        "sector": "0",
        "posx": 12490.1796875,
        "posy": 5264.61083984375,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "7397647",
        "mapid": "1",
        "bftitle": "Mechelen",
        "sector": "1650205",
        "posx": 4829.46484375,
        "posy": 4846.7421875,
        "gamemap": "70439"
    },
    {
        "id": "7435617",
        "mapid": "1",
        "bftitle": "Vinča",
        "sector": "0",
        "posx": 9558.1103515625,
        "posy": 7600.31494140625,
        "gamemap": "203"
    },
    {
        "id": "7440333",
        "mapid": "1",
        "bftitle": "Genthin",
        "sector": "0",
        "posx": 7062.22119140625,
        "posy": 4166.50390625,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "7445184",
        "mapid": "1",
        "bftitle": "Hannover Flugplatz",
        "sector": "0",
        "posx": 6311.02783203125,
        "posy": 4115.68212890625,
        "gamemap": "204",
        "rotation": 3
    },
    {
        "id": "7695731",
        "mapid": "1",
        "bftitle": "Odense",
        "sector": "0",
        "posx": 6557.490234375,
        "posy": 2709.65087890625,
        "gamemap": "201"
    },
    {
        "id": "7697610",
        "mapid": "1",
        "bftitle": "Paderborn",
        "sector": "0",
        "posx": 6175.2568359375,
        "posy": 4452.7568359375,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "7720632",
        "mapid": "1",
        "bftitle": "Evreux",
        "sector": "0",
        "posx": 3850.264892578125,
        "posy": 5766.29296875,
        "gamemap": "70439"
    },
    {
        "id": "7725501",
        "mapid": "1",
        "bftitle": "Dieren",
        "sector": "0",
        "posx": 5293.0849609375,
        "posy": 4314.9111328125,
        "gamemap": "203",
        "rotation": 1
    },
    {
        "id": "7726138",
        "mapid": "1",
        "bftitle": "Namur",
        "sector": "0",
        "posx": 4927.2158203125,
        "posy": 5084.92578125,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "7795869",
        "mapid": "1",
        "bftitle": "Mayen",
        "sector": "0",
        "posx": 5626.69921875,
        "posy": 5179.77099609375,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "7839238",
        "mapid": "1",
        "bftitle": "Croydon",
        "sector": "0",
        "posx": 3487.424072265625,
        "posy": 4653.26318359375,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "7883488",
        "mapid": "1",
        "bftitle": "Oldenburg",
        "sector": "0",
        "posx": 5930.13720703125,
        "posy": 3800.97900390625,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "7886217",
        "mapid": "1",
        "bftitle": "Soissons",
        "sector": "0",
        "posx": 4490.52099609375,
        "posy": 5588.1181640625,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "7947128",
        "mapid": "1",
        "bftitle": "Stade Flugplatz",
        "sector": "0",
        "posx": 6328.11083984375,
        "posy": 3630.510009765625,
        "gamemap": "205",
        "rotation": 1
    },
    {
        "id": "7996513",
        "mapid": "1",
        "bftitle": "Bielefeld",
        "sector": "0",
        "posx": 6068.84716796875,
        "posy": 4289.8330078125,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "8113531",
        "mapid": "1",
        "bftitle": "Antwerp",
        "sector": "29335",
        "posx": 4800.076171875,
        "posy": 4740.8779296875,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "8120305",
        "mapid": "1",
        "bftitle": "Longwy",
        "sector": "1",
        "posx": 5222.041015625,
        "posy": 5556.5517578125,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "8159287",
        "mapid": "1",
        "bftitle": "Evry",
        "sector": "6943558",
        "posx": 4216.43115234375,
        "posy": 5943.10693359375,
        "gamemap": "70439"
    },
    {
        "id": "8267028",
        "mapid": "1",
        "bftitle": "Alzey",
        "sector": "0",
        "posx": 5888.71484375,
        "posy": 5461.8828125,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "8268419",
        "mapid": "1",
        "bftitle": "Herentals",
        "sector": "29335",
        "posx": 4937.6748046875,
        "posy": 4776.98095703125,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "8305787",
        "mapid": "1",
        "bftitle": "Bromley",
        "sector": "0",
        "posx": 3547.077880859375,
        "posy": 4649.5439453125,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "8314030",
        "mapid": "1",
        "bftitle": "Enschede",
        "sector": "0",
        "posx": 5631.64111328125,
        "posy": 4221.84619140625,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "8353596",
        "mapid": "1",
        "bftitle": "Wittenberg",
        "sector": "0",
        "posx": 7218.712890625,
        "posy": 4440.98095703125,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "8358942",
        "mapid": "1",
        "bftitle": "Den Haag",
        "sector": "0",
        "posx": 4786.10400390625,
        "posy": 4315.02880859375,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "8386251",
        "mapid": "1",
        "bftitle": "Amiens",
        "sector": "0",
        "posx": 4179.48095703125,
        "posy": 5410.4541015625,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "8537625",
        "mapid": "1",
        "bftitle": "Neumünster",
        "sector": "0",
        "posx": 6434.8408203125,
        "posy": 3362.7080078125,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "8582630",
        "mapid": "1",
        "bftitle": "Châlons-en-Champagne",
        "sector": "0",
        "posx": 4794.69287109375,
        "posy": 5788.666015625,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "8616921",
        "mapid": "1",
        "bftitle": "Amersfoort",
        "sector": "0",
        "posx": 5117.5927734375,
        "posy": 4291.22216796875,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "8630657",
        "mapid": "1",
        "bftitle": "Dartford",
        "sector": "0",
        "posx": 3612.7470703125,
        "posy": 4642.9072265625,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "8637618",
        "mapid": "1",
        "bftitle": "Le Havre",
        "sector": "0",
        "posx": 3570.712890625,
        "posy": 5569.1728515625,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "8666384",
        "mapid": "1",
        "bftitle": "Groningen",
        "sector": "0",
        "posx": 5465.15380859375,
        "posy": 3775.31591796875,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "8717130",
        "mapid": "1",
        "bftitle": "Dordrecht",
        "sector": "0",
        "posx": 4888.34521484375,
        "posy": 4471.44482421875,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "8744771",
        "mapid": "1",
        "bftitle": "Prüm",
        "sector": "2",
        "posx": 5396.298828125,
        "posy": 5230.3310546875,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "8797911",
        "mapid": "1",
        "bftitle": "Remagen",
        "sector": "0",
        "posx": 5637.9130859375,
        "posy": 5072.02099609375,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "8819668",
        "mapid": "1",
        "bftitle": "Aabenraa",
        "sector": "0",
        "posx": 6282.77685546875,
        "posy": 2902.4189453125,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "8887323",
        "mapid": "1",
        "bftitle": "Fulda",
        "sector": "0",
        "posx": 6353.68896484375,
        "posy": 5085.3330078125,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "8902735",
        "mapid": "1",
        "bftitle": "Rostock",
        "sector": "0",
        "posx": 7035.6572265625,
        "posy": 3359.321044921875,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "8938711",
        "mapid": "1",
        "bftitle": "Cuxhaven",
        "sector": "0",
        "posx": 6055.71484375,
        "posy": 3487.8291015625,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "8996535",
        "mapid": "1",
        "bftitle": "Rendsburg",
        "sector": "0",
        "posx": 6335.0009765625,
        "posy": 3234.196044921875,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "9022304",
        "mapid": "1",
        "bftitle": "Kastellaun",
        "sector": "0",
        "posx": 5691.0068359375,
        "posy": 5273.0830078125,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "9045518",
        "mapid": "1",
        "bftitle": "Rathenow Flugplatz",
        "sector": "0",
        "posx": 7128.0888671875,
        "posy": 4069.52294921875,
        "gamemap": "204",
        "rotation": 3
    },
    {
        "id": "9046528",
        "mapid": "1",
        "bftitle": "Boulogne-sur-Mer",
        "sector": "0",
        "posx": 4009.25390625,
        "posy": 4989.2431640625,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "9110149",
        "mapid": "1",
        "bftitle": "Frankfurt am Main",
        "sector": "0",
        "posx": 6087.38916015625,
        "posy": 5248.501953125,
        "gamemap": "70439"
    },
    {
        "id": "9128038",
        "mapid": "1",
        "bftitle": "Aachen",
        "sector": "2106890",
        "posx": 5301.01708984375,
        "posy": 4959.94384765625,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "9155773",
        "mapid": "1",
        "bftitle": "Nijmegen",
        "sector": "8012467",
        "posx": 5247.10302734375,
        "posy": 4428.283203125,
        "gamemap": "70439"
    },
    {
        "id": "9163046",
        "mapid": "1",
        "bftitle": "Daun",
        "sector": "0",
        "posx": 5502.794921875,
        "posy": 5219.19482421875,
        "gamemap": "203"
    },
    {
        "id": "9184312",
        "mapid": "1",
        "bftitle": "Arras",
        "sector": "0",
        "posx": 4322.8408203125,
        "posy": 5195.4140625,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "9292467",
        "mapid": "1",
        "bftitle": "Hastings",
        "sector": "0",
        "posx": 3681.56103515625,
        "posy": 4941.4609375,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "9343124",
        "mapid": "1",
        "bftitle": "Portreath Airfield",
        "sector": "0",
        "posx": 1999.498046875,
        "posy": 5206.1982421875,
        "gamemap": "204",
        "rotation": 2
    },
    {
        "id": "9368685",
        "mapid": "1",
        "bftitle": "Wil",
        "sector": "0",
        "posx": 6166.52783203125,
        "posy": 6450.1982421875,
        "gamemap": "204"
    },
    {
        "id": "9413308",
        "mapid": "1",
        "bftitle": "Erkelenz",
        "sector": "0",
        "posx": 5354.955078125,
        "posy": 4812.9228515625,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "9443196",
        "mapid": "1",
        "bftitle": "Mielec",
        "sector": "0",
        "posx": 9794.984375,
        "posy": 5181.51220703125,
        "gamemap": "70439"
    },
    {
        "id": "9551851",
        "mapid": "1",
        "bftitle": "Wewelsburg",
        "sector": "0",
        "posx": 6137.369140625,
        "posy": 4531.86083984375,
        "gamemap": "70439"
    },
    {
        "id": "9556292",
        "mapid": "1",
        "bftitle": "Durbuy",
        "sector": "5169421",
        "posx": 5122.3291015625,
        "posy": 5163.6689453125,
        "gamemap": "70439"
    },
    {
        "id": "9604183",
        "mapid": "1",
        "bftitle": "Vessigebro",
        "sector": "0",
        "posx": 7239.7119140625,
        "posy": 1823.050048828125,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "9606840",
        "mapid": "1",
        "bftitle": "Rodt",
        "sector": "2",
        "posx": 5325.73388671875,
        "posy": 5361.22900390625,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "9609166",
        "mapid": "1",
        "bftitle": "Malmedy",
        "sector": "8297572",
        "posx": 5283.919921875,
        "posy": 5106.30810546875,
        "gamemap": "70439"
    },
    {
        "id": "9612457",
        "mapid": "1",
        "bftitle": "Bergen op Zoom",
        "sector": "0",
        "posx": 4748.56884765625,
        "posy": 4611.22216796875,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "9613787",
        "mapid": "1",
        "bftitle": "Farsala",
        "sector": "0",
        "posx": 10076.6298828125,
        "posy": 9775.013671875,
        "gamemap": "70439"
    },
    {
        "id": "9644921",
        "mapid": "1",
        "bftitle": "Royal Tunbridge Wells",
        "sector": "0",
        "posx": 3644.376953125,
        "posy": 4821.97802734375,
        "gamemap": "70439"
    },
    {
        "id": "9651756",
        "mapid": "1",
        "bftitle": "Tournai",
        "sector": "0",
        "posx": 4517.5048828125,
        "posy": 5039.9931640625,
        "gamemap": "70439"
    },
    {
        "id": "9656747",
        "mapid": "1",
        "bftitle": "Sønderborg",
        "sector": "0",
        "posx": 6358.2099609375,
        "posy": 2944.64697265625,
        "gamemap": "70439"
    },
    {
        "id": "9665006",
        "mapid": "1",
        "bftitle": "Houthalen",
        "sector": "0",
        "posx": 5040.9208984375,
        "posy": 4825.23681640625,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "9736399",
        "mapid": "1",
        "bftitle": "Tongeren Vliegveld",
        "sector": "0",
        "posx": 5133.130859375,
        "posy": 4970.73291015625,
        "gamemap": "205",
        "rotation": 1
    },
    {
        "id": "9738774",
        "mapid": "1",
        "bftitle": "Bergisch Gladbach",
        "sector": "0",
        "posx": 5590.47509765625,
        "posy": 4856.955078125,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "9749376",
        "mapid": "1",
        "bftitle": "Avranches",
        "sector": "0",
        "posx": 3121.68896484375,
        "posy": 5940.88623046875,
        "gamemap": "70439"
    },
    {
        "id": "9779256",
        "mapid": "1",
        "bftitle": "Weimar",
        "sector": "0",
        "posx": 6820.376953125,
        "posy": 4860.82080078125,
        "gamemap": "70439"
    },
    {
        "id": "9800551",
        "mapid": "1",
        "bftitle": "Saint Valery en Caux",
        "sector": "8995238",
        "posx": 3768.822998046875,
        "posy": 5408.3291015625,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "9844672",
        "mapid": "1",
        "bftitle": "Quedlinburg",
        "sector": "0",
        "posx": 6780.44091796875,
        "posy": 4472.212890625,
        "gamemap": "70439"
    },
    {
        "id": "9863740",
        "mapid": "1",
        "bftitle": "Bastogne",
        "sector": "5169421",
        "posx": 5230.85009765625,
        "posy": 5342.9970703125,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "9880270",
        "mapid": "1",
        "bftitle": "Koblenz",
        "sector": "0",
        "posx": 5741.84912109375,
        "posy": 5159.57421875,
        "gamemap": "70439"
    },
    {
        "id": "9883214",
        "mapid": "1",
        "bftitle": "Limburg an der Lahn",
        "sector": "0",
        "posx": 5874.96923828125,
        "posy": 5151.89404296875,
        "gamemap": "70439"
    },
    {
        "id": "9893114",
        "mapid": "1",
        "bftitle": "Abbeville",
        "sector": "0",
        "posx": 4056.701904296875,
        "posy": 5306.4189453125,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "9905489",
        "mapid": "1",
        "bftitle": "Helsingør",
        "sector": "357303",
        "posx": 7179.26416015625,
        "posy": 2351.10595703125,
        "gamemap": "70439"
    },
    {
        "id": "9911644",
        "mapid": "1",
        "bftitle": "Viljevo",
        "sector": "0",
        "posx": 8809.8251953125,
        "posy": 7185.12890625,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "9926698",
        "mapid": "1",
        "bftitle": "Karlsruhe",
        "sector": "0",
        "posx": 5975.8330078125,
        "posy": 5772.43798828125,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "9971187",
        "mapid": "1",
        "bftitle": "Greenwich",
        "sector": "0",
        "posx": 3569.7880859375,
        "posy": 4580.9912109375,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "10326776",
        "mapid": "1",
        "bftitle": "Certaldo",
        "sector": "0",
        "posx": 6750.94287109375,
        "posy": 8099.73291015625,
        "gamemap": "70439"
    },
    {
        "id": "10337990",
        "mapid": "1",
        "bftitle": "Laval",
        "sector": "0",
        "posx": 3298.58203125,
        "posy": 6185.2939453125,
        "gamemap": "70439"
    },
    {
        "id": "10557513",
        "mapid": "1",
        "bftitle": "Sées",
        "sector": "0",
        "posx": 3546.9208984375,
        "posy": 5930.77587890625,
        "gamemap": "201"
    },
    {
        "id": "11269552",
        "mapid": "1",
        "bftitle": "Montfort-le-Gesnois",
        "sector": "0",
        "posx": 3643.37890625,
        "posy": 6206.81494140625,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "11453014",
        "mapid": "1",
        "bftitle": "Saint-François",
        "sector": "0",
        "posx": 4659.81591796875,
        "posy": 6902.52685546875,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "11517979",
        "mapid": "1",
        "bftitle": "Aulnay",
        "sector": "0",
        "posx": 3413.0810546875,
        "posy": 7070.8662109375,
        "gamemap": "70439"
    },
    {
        "id": "12197185",
        "mapid": "1",
        "bftitle": "Thouarcé",
        "sector": "0",
        "posx": 3367.916015625,
        "posy": 6534.8310546875,
        "gamemap": "205",
        "rotation": 2
    },
    {
        "id": "12345437",
        "mapid": "1",
        "bftitle": "Miskolc",
        "sector": "0",
        "posx": 9607.216796875,
        "posy": 6169.7001953125,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "12589473",
        "mapid": "1",
        "bftitle": "Makarovka",
        "sector": "0",
        "posx": 12482.8603515625,
        "posy": 3173.72802734375,
        "gamemap": "203",
        "rotation": 1
    },
    {
        "id": "12673893",
        "mapid": "1",
        "bftitle": "Saint-Santin",
        "sector": "0",
        "posx": 4164.7939453125,
        "posy": 7646.5830078125,
        "gamemap": "201"
    },
    {
        "id": "13123611",
        "mapid": "1",
        "bftitle": "Borshchiv",
        "sector": "0",
        "posx": 11149.1103515625,
        "posy": 5856.65185546875,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "13593943",
        "mapid": "1",
        "bftitle": "Loknya",
        "sector": "0",
        "posx": 12351.8701171875,
        "posy": 1921.5460205078125,
        "gamemap": "201"
    },
    {
        "id": "14022315",
        "mapid": "1",
        "bftitle": "Skjern",
        "sector": "0",
        "posx": 6006.619140625,
        "posy": 2390.8740234375,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "14462907",
        "mapid": "1",
        "bftitle": "Bogoroditsk",
        "sector": "0",
        "posx": 14690.2900390625,
        "posy": 3508.47802734375,
        "gamemap": "201"
    },
    {
        "id": "14532377",
        "mapid": "1",
        "bftitle": "Dubovtsy",
        "sector": "0",
        "posx": 11362.669921875,
        "posy": 3373.260009765625,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "14669571",
        "mapid": "1",
        "bftitle": "Bury Saint Edmunds",
        "sector": "0",
        "posx": 3740.778076171875,
        "posy": 4228.30712890625,
        "gamemap": "70439"
    },
    {
        "id": "15212556",
        "mapid": "1",
        "bftitle": "Zybiny",
        "sector": "0",
        "posx": 13671.900390625,
        "posy": 7401.869140625,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "15809005",
        "mapid": "1",
        "bftitle": "Varėna",
        "sector": "0",
        "posx": 10716.2197265625,
        "posy": 3285.010986328125,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "16464741",
        "mapid": "1",
        "bftitle": "Ardgay",
        "sector": "0",
        "posx": 2236.134033203125,
        "posy": 1346.2469482421875,
        "gamemap": "203",
        "rotation": 3
    },
    {
        "id": "17143757",
        "mapid": "1",
        "bftitle": "Storå",
        "sector": "0",
        "posx": 7951.0400390625,
        "posy": 299.9809875488281,
        "gamemap": "201"
    },
    {
        "id": "17642872",
        "mapid": "1",
        "bftitle": "Rivoli",
        "sector": "0",
        "posx": 5717.78515625,
        "posy": 7471.35986328125,
        "gamemap": "204",
        "rotation": 3
    },
    {
        "id": "17859918",
        "mapid": "1",
        "bftitle": "Ignalina",
        "sector": "0",
        "posx": 11185.23046875,
        "posy": 2704.79296875,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "18577514",
        "mapid": "1",
        "bftitle": "Lovosice",
        "sector": "0",
        "posx": 7633.7861328125,
        "posy": 5075.94091796875,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "18613896",
        "mapid": "1",
        "bftitle": "Shchuchyn",
        "sector": "0",
        "posx": 10768.9296875,
        "posy": 3593.35205078125,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "18822568",
        "mapid": "1",
        "bftitle": "Desnogorsk",
        "sector": "0",
        "posx": 13270.7900390625,
        "posy": 3318.25390625,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "18918828",
        "mapid": "1",
        "bftitle": "Vyaz'ma",
        "sector": "0",
        "posx": 13567.900390625,
        "posy": 2777.153076171875,
        "gamemap": "201"
    },
    {
        "id": "19156020",
        "mapid": "1",
        "bftitle": "Berat",
        "sector": "0",
        "posx": 9363.59375,
        "posy": 9231.1865234375,
        "gamemap": "70439"
    },
    {
        "id": "19369321",
        "mapid": "1",
        "bftitle": "Bologna",
        "sector": "0",
        "posx": 6847.0830078125,
        "posy": 7706.990234375,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "19504336",
        "mapid": "1",
        "bftitle": "Vitré",
        "sector": "0",
        "posx": 3121.407958984375,
        "posy": 6189.7412109375,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "19666883",
        "mapid": "1",
        "bftitle": "Auxerre",
        "sector": "0",
        "posx": 4500.30419921875,
        "posy": 6192.5908203125,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "20318585",
        "mapid": "1",
        "bftitle": "Gardanne",
        "sector": "0",
        "posx": 5120.09521484375,
        "posy": 8121.7900390625,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "20430264",
        "mapid": "1",
        "bftitle": "Pleumartin",
        "sector": "0",
        "posx": 3740.443115234375,
        "posy": 6764.02978515625,
        "gamemap": "70439"
    },
    {
        "id": "20562413",
        "mapid": "1",
        "bftitle": "Karlskrona",
        "sector": "0",
        "posx": 8083.9072265625,
        "posy": 2279.02392578125,
        "gamemap": "70439"
    },
    {
        "id": "20763494",
        "mapid": "1",
        "bftitle": "Lyon",
        "sector": "0",
        "posx": 4935.73583984375,
        "posy": 7186.3701171875,
        "gamemap": "70439"
    },
    {
        "id": "20900582",
        "mapid": "1",
        "bftitle": "Kurovskoye",
        "sector": "0",
        "posx": 14923.580078125,
        "posy": 2584.070068359375,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "21743334",
        "mapid": "1",
        "bftitle": "Zhytkavichy",
        "sector": "0",
        "posx": 11680.4501953125,
        "posy": 4271.18310546875,
        "gamemap": "70439"
    },
    {
        "id": "22008734",
        "mapid": "1",
        "bftitle": "Hagetmau",
        "sector": "0",
        "posx": 3341.575927734375,
        "posy": 8054.3798828125,
        "gamemap": "70439"
    },
    {
        "id": "22165327",
        "mapid": "1",
        "bftitle": "Halkirk",
        "sector": "0",
        "posx": 2491.552978515625,
        "posy": 992.6962890625,
        "gamemap": "204",
        "rotation": 1
    },
    {
        "id": "22198506",
        "mapid": "1",
        "bftitle": "Trosa",
        "sector": "0",
        "posx": 8616.58203125,
        "posy": 772.9409790039062,
        "gamemap": "70439"
    },
    {
        "id": "22579319",
        "mapid": "1",
        "bftitle": "Kalanchak",
        "sector": "0",
        "posx": 13273.48046875,
        "posy": 6970.5732421875,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "22839211",
        "mapid": "1",
        "bftitle": "Bad Lobenstein",
        "sector": "0",
        "posx": 6926.837890625,
        "posy": 5105.08203125,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "22951818",
        "mapid": "1",
        "bftitle": "Martigny-Ville",
        "sector": "0",
        "posx": 5588.1630859375,
        "posy": 7036.005859375,
        "gamemap": "201"
    },
    {
        "id": "23231828",
        "mapid": "1",
        "bftitle": "Tal’s’ke",
        "sector": "0",
        "posx": 12260.169921875,
        "posy": 4957.087890625,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "23447197",
        "mapid": "1",
        "bftitle": "Klintsy",
        "sector": "0",
        "posx": 12965.2998046875,
        "posy": 4007.743896484375,
        "gamemap": "201"
    },
    {
        "id": "23749936",
        "mapid": "1",
        "bftitle": "Châteaulin",
        "sector": "0",
        "posx": 2328.236083984375,
        "posy": 6098.94287109375,
        "gamemap": "70439"
    },
    {
        "id": "23952133",
        "mapid": "1",
        "bftitle": "Venray",
        "sector": "0",
        "posx": 5266.46923828125,
        "posy": 4601.9521484375,
        "gamemap": "70439"
    },
    {
        "id": "24358519",
        "mapid": "1",
        "bftitle": "Chef-Boutonne",
        "sector": "0",
        "posx": 3494.261962890625,
        "posy": 7033.52197265625,
        "gamemap": "201"
    },
    {
        "id": "24361593",
        "mapid": "1",
        "bftitle": "Deva",
        "sector": "0",
        "posx": 10227.669921875,
        "posy": 7129.2421875,
        "gamemap": "203",
        "rotation": 3
    },
    {
        "id": "24784184",
        "mapid": "1",
        "bftitle": "Véroia",
        "sector": "0",
        "posx": 10023.1904296875,
        "posy": 9301.7568359375,
        "gamemap": "70439"
    },
    {
        "id": "25264690",
        "mapid": "1",
        "bftitle": "Kamin’-Kashyrs’kyy",
        "sector": "0",
        "posx": 10831.1201171875,
        "posy": 4554.87109375,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "25791076",
        "mapid": "1",
        "bftitle": "Casteljaloux",
        "sector": "0",
        "posx": 3540.25,
        "posy": 7784.11083984375,
        "gamemap": "70439"
    },
    {
        "id": "26111347",
        "mapid": "1",
        "bftitle": "Surwold Flugplatz",
        "sector": "0",
        "posx": 5706.587890625,
        "posy": 3892.93310546875,
        "gamemap": "205"
    },
    {
        "id": "26433272",
        "mapid": "1",
        "bftitle": "Montendre",
        "sector": "0",
        "posx": 3395.93505859375,
        "posy": 7381.7568359375,
        "gamemap": "70439"
    },
    {
        "id": "27333476",
        "mapid": "1",
        "bftitle": "Özdere",
        "sector": "0",
        "posx": 11467.0400390625,
        "posy": 10258.3798828125,
        "gamemap": "70439"
    },
    {
        "id": "27334310",
        "mapid": "1",
        "bftitle": "Bečej",
        "sector": "0",
        "posx": 9387.3642578125,
        "posy": 7242.2041015625,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "28163596",
        "mapid": "1",
        "bftitle": "Den Helder",
        "sector": "0",
        "posx": 4917.078125,
        "posy": 3922.431884765625,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "28566156",
        "mapid": "1",
        "bftitle": "Kárystos",
        "sector": "0",
        "posx": 10672.08984375,
        "posy": 10259.419921875,
        "gamemap": "70439"
    },
    {
        "id": "28941472",
        "mapid": "1",
        "bftitle": "Antibes",
        "sector": "0",
        "posx": 5604.3779296875,
        "posy": 8093.73388671875,
        "gamemap": "70439"
    },
    {
        "id": "28981059",
        "mapid": "1",
        "bftitle": "Dornoch",
        "sector": "0",
        "posx": 2345.14306640625,
        "posy": 1382.18701171875,
        "gamemap": "70439"
    },
    {
        "id": "29141898",
        "mapid": "1",
        "bftitle": "Budapest III. kerület",
        "sector": "0",
        "posx": 9093.7109375,
        "posy": 6397.82080078125,
        "gamemap": "203",
        "rotation": 2
    },
    {
        "id": "29913088",
        "mapid": "1",
        "bftitle": "Pula",
        "sector": "0",
        "posx": 7574.2880859375,
        "posy": 7555.81298828125,
        "gamemap": "205"
    },
    {
        "id": "30142893",
        "mapid": "1",
        "bftitle": "Lainach",
        "sector": "0",
        "posx": 7305.244140625,
        "posy": 6713.9248046875,
        "gamemap": "201"
    },
    {
        "id": "30333738",
        "mapid": "1",
        "bftitle": "Bebington",
        "sector": "0",
        "posx": 2630.919921875,
        "posy": 3727.85888671875,
        "gamemap": "203",
        "rotation": 1
    },
    {
        "id": "30716153",
        "mapid": "1",
        "bftitle": "Klagenfurt",
        "sector": "0",
        "posx": 7700.26904296875,
        "posy": 6806.5458984375,
        "gamemap": "201"
    },
    {
        "id": "30851723",
        "mapid": "1",
        "bftitle": "Bjärsjö",
        "sector": "0",
        "posx": 7877.7568359375,
        "posy": 1196.3990478515625,
        "gamemap": "201"
    },
    {
        "id": "31496011",
        "mapid": "1",
        "bftitle": "Tubize",
        "sector": "0",
        "posx": 4758.8291015625,
        "posy": 4970.59521484375,
        "gamemap": "201"
    },
    {
        "id": "31772275",
        "mapid": "1",
        "bftitle": "Písek",
        "sector": "0",
        "posx": 7662.06396484375,
        "posy": 5628.94580078125,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "32127040",
        "mapid": "1",
        "bftitle": "Neustadt-Glewe",
        "sector": "0",
        "posx": 6925.80322265625,
        "posy": 3713.758056640625,
        "gamemap": "203",
        "rotation": 3
    },
    {
        "id": "32156775",
        "mapid": "1",
        "bftitle": "La Pacaudière",
        "sector": "0",
        "posx": 4650.0078125,
        "posy": 7005.0380859375,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "32408301",
        "mapid": "1",
        "bftitle": "Sarajevo",
        "sector": "0",
        "posx": 8895.82421875,
        "posy": 7976.84716796875,
        "gamemap": "70439"
    },
    {
        "id": "32472352",
        "mapid": "1",
        "bftitle": "Bodenfelde",
        "sector": "0",
        "posx": 6316.07080078125,
        "posy": 4547.10791015625,
        "gamemap": "70439"
    },
    {
        "id": "32572863",
        "mapid": "1",
        "bftitle": "Gelibolu",
        "sector": "0",
        "posx": 11333.009765625,
        "posy": 9346.02734375,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "33030575",
        "mapid": "1",
        "bftitle": "Marnitz",
        "sector": "0",
        "posx": 7011.89501953125,
        "posy": 3734.467041015625,
        "gamemap": "70439"
    },
    {
        "id": "33488415",
        "mapid": "1",
        "bftitle": "Saint-Symphorien",
        "sector": "0",
        "posx": 3371.2548828125,
        "posy": 7737.94482421875,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "33743760",
        "mapid": "1",
        "bftitle": "Moklakovo",
        "sector": "0",
        "posx": 13632.6103515625,
        "posy": 588.438720703125,
        "gamemap": "201"
    },
    {
        "id": "34227194",
        "mapid": "1",
        "bftitle": "Sofiyivka",
        "sector": "0",
        "posx": 13444.650390625,
        "posy": 6192.11181640625,
        "gamemap": "70439"
    },
    {
        "id": "34249564",
        "mapid": "1",
        "bftitle": "Podolsk",
        "sector": "0",
        "posx": 14523.3896484375,
        "posy": 2666.239013671875,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "34291945",
        "mapid": "1",
        "bftitle": "Ruu",
        "sector": "0",
        "posx": 10899.0703125,
        "posy": 455.0369873046875,
        "gamemap": "205",
        "rotation": 1
    },
    {
        "id": "34350025",
        "mapid": "1",
        "bftitle": "Miland",
        "sector": "0",
        "posx": 6080.955078125,
        "posy": 177.58299255371094,
        "gamemap": "201"
    },
    {
        "id": "34422452",
        "mapid": "1",
        "bftitle": "Saalfelden am Steinernen Meer",
        "sector": "0",
        "posx": 7281.14208984375,
        "posy": 6465.35009765625,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "34521576",
        "mapid": "1",
        "bftitle": "Jablonec nad Nisou",
        "sector": "0",
        "posx": 7962.10400390625,
        "posy": 4978.57177734375,
        "gamemap": "204",
        "rotation": 3
    },
    {
        "id": "34531623",
        "mapid": "1",
        "bftitle": "Grenade",
        "sector": "0",
        "posx": 3891.2080078125,
        "posy": 8010.37890625,
        "gamemap": "204"
    },
    {
        "id": "34545379",
        "mapid": "1",
        "bftitle": "Varna",
        "sector": "0",
        "posx": 11698.2001953125,
        "posy": 8234.1845703125,
        "gamemap": "203",
        "rotation": 2
    },
    {
        "id": "34934072",
        "mapid": "1",
        "bftitle": "Shipston on Stour",
        "sector": "0",
        "posx": 3037.876953125,
        "posy": 4346.330078125,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "34974414",
        "mapid": "1",
        "bftitle": "Strehaia",
        "sector": "0",
        "posx": 10315.6103515625,
        "posy": 7660.4111328125,
        "gamemap": "203"
    },
    {
        "id": "35037335",
        "mapid": "1",
        "bftitle": "Sanok",
        "sector": "0",
        "posx": 10024.1201171875,
        "posy": 5516.85693359375,
        "gamemap": "70439"
    },
    {
        "id": "35236033",
        "mapid": "1",
        "bftitle": "Brive-la-Gaillarde",
        "sector": "0",
        "posx": 3964.489990234375,
        "posy": 7438.2021484375,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "35417666",
        "mapid": "1",
        "bftitle": "Dobrush",
        "sector": "0",
        "posx": 12696.900390625,
        "posy": 4178.421875,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "35425750",
        "mapid": "1",
        "bftitle": "Marcon",
        "sector": "0",
        "posx": 7120.18310546875,
        "posy": 7264.087890625,
        "gamemap": "70439"
    },
    {
        "id": "35489189",
        "mapid": "1",
        "bftitle": "Bergheim Flugplatz",
        "sector": "0",
        "posx": 6696.85888671875,
        "posy": 5725.93017578125,
        "gamemap": "204"
    },
    {
        "id": "35920372",
        "mapid": "1",
        "bftitle": "Terracina",
        "sector": "0",
        "posx": 7384.71923828125,
        "posy": 9004.361328125,
        "gamemap": "70439"
    },
    {
        "id": "36015794",
        "mapid": "1",
        "bftitle": "Durrës",
        "sector": "0",
        "posx": 9240.431640625,
        "posy": 9003.1669921875,
        "gamemap": "70439"
    },
    {
        "id": "36244638",
        "mapid": "1",
        "bftitle": "Belitskiy",
        "sector": "0",
        "posx": 13862.4697265625,
        "posy": 6396.9482421875,
        "gamemap": "203"
    },
    {
        "id": "36337670",
        "mapid": "1",
        "bftitle": "Susurluk",
        "sector": "0",
        "posx": 11768.8798828125,
        "posy": 9537.8828125,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "36444211",
        "mapid": "1",
        "bftitle": "Canino",
        "sector": "0",
        "posx": 6960.14892578125,
        "posy": 8536.4453125,
        "gamemap": "203",
        "rotation": 3
    },
    {
        "id": "36798604",
        "mapid": "1",
        "bftitle": "Mazsalaca",
        "sector": "0",
        "posx": 10859.2900390625,
        "posy": 1356.14794921875,
        "gamemap": "70439"
    },
    {
        "id": "36819434",
        "mapid": "1",
        "bftitle": "Quattromiglia",
        "sector": "0",
        "posx": 8274.853515625,
        "posy": 9755.92578125,
        "gamemap": "205"
    },
    {
        "id": "36898803",
        "mapid": "1",
        "bftitle": "Gryfice",
        "sector": "0",
        "posx": 7970.6611328125,
        "posy": 3436.008056640625,
        "gamemap": "70439"
    },
    {
        "id": "36909570",
        "mapid": "1",
        "bftitle": "Yanıklar",
        "sector": "0",
        "posx": 11360.76953125,
        "posy": 9548.3798828125,
        "gamemap": "204",
        "rotation": 2
    },
    {
        "id": "37071992",
        "mapid": "1",
        "bftitle": "Vena",
        "sector": "0",
        "posx": 8175.77099609375,
        "posy": 1233.6590576171875,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "37143474",
        "mapid": "1",
        "bftitle": "Bourges",
        "sector": "0",
        "posx": 4218.44189453125,
        "posy": 6612.60498046875,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "37362874",
        "mapid": "1",
        "bftitle": "Llanidloes",
        "sector": "0",
        "posx": 2482.83203125,
        "posy": 4129.0888671875,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "37401387",
        "mapid": "1",
        "bftitle": "Bosanska Dubica",
        "sector": "0",
        "posx": 8442.35546875,
        "posy": 7427.037109375,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "37411624",
        "mapid": "1",
        "bftitle": "Kalisz Pomorski",
        "sector": "0",
        "posx": 8177.623046875,
        "posy": 3743.216064453125,
        "gamemap": "203",
        "rotation": 3
    },
    {
        "id": "37829363",
        "mapid": "1",
        "bftitle": "Gavrilovka",
        "sector": "0",
        "posx": 13967.9501953125,
        "posy": 5462.86376953125,
        "gamemap": "201"
    },
    {
        "id": "37958979",
        "mapid": "1",
        "bftitle": "Méjean",
        "sector": "0",
        "posx": 5044.35400390625,
        "posy": 8187.783203125,
        "gamemap": "70439"
    },
    {
        "id": "38754218",
        "mapid": "1",
        "bftitle": "Rusinowo",
        "sector": "0",
        "posx": 8355.3486328125,
        "posy": 3135.76904296875,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "38818500",
        "mapid": "1",
        "bftitle": "Panevezys",
        "sector": "0",
        "posx": 10652.7099609375,
        "posy": 2504.7890625,
        "gamemap": "70439"
    },
    {
        "id": "38836130",
        "mapid": "1",
        "bftitle": "Krasnaya Gora",
        "sector": "0",
        "posx": 12778.5703125,
        "posy": 3890.678955078125,
        "gamemap": "203"
    },
    {
        "id": "39148719",
        "mapid": "1",
        "bftitle": "Stary Brus",
        "sector": "0",
        "posx": 10342.08984375,
        "posy": 4622.48583984375,
        "gamemap": "70439"
    },
    {
        "id": "39599342",
        "mapid": "1",
        "bftitle": "Factory 'Baptiste'",
        "sector": "0",
        "posx": 15954.2197265625,
        "posy": 15836.9599609375,
        "gamemap": "203",
        "rotation": 2
    },
    {
        "id": "39836033",
        "mapid": "1",
        "bftitle": "Rydaholm",
        "sector": "0",
        "posx": 7706.76611328125,
        "posy": 1838.635009765625,
        "gamemap": "201"
    },
    {
        "id": "40166052",
        "mapid": "1",
        "bftitle": "Hunedoara",
        "sector": "0",
        "posx": 10227.669921875,
        "posy": 7185.716796875,
        "gamemap": "204"
    },
    {
        "id": "40536473",
        "mapid": "1",
        "bftitle": "Görzke",
        "sector": "0",
        "posx": 7140.0498046875,
        "posy": 4295.3251953125,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "40863354",
        "mapid": "1",
        "bftitle": "Vester Karleby",
        "sector": "0",
        "posx": 6785.05908203125,
        "posy": 2954.636962890625,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "41230861",
        "mapid": "1",
        "bftitle": "Gislaved",
        "sector": "0",
        "posx": 7484.2158203125,
        "posy": 1663.9320068359375,
        "gamemap": "70439"
    },
    {
        "id": "41397281",
        "mapid": "1",
        "bftitle": "Aberaeron",
        "sector": "0",
        "posx": 2282.534912109375,
        "posy": 4278.68017578125,
        "gamemap": "203",
        "rotation": 2
    },
    {
        "id": "41466627",
        "mapid": "1",
        "bftitle": "Ballon",
        "sector": "0",
        "posx": 3559.2109375,
        "posy": 6107.77490234375,
        "gamemap": "203"
    },
    {
        "id": "41508197",
        "mapid": "1",
        "bftitle": "Vitry-le-François",
        "sector": "0",
        "posx": 4858.5322265625,
        "posy": 5888,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "41548892",
        "mapid": "1",
        "bftitle": "Üğümce",
        "sector": "0",
        "posx": 12324.0703125,
        "posy": 9132.236328125,
        "gamemap": "201"
    },
    {
        "id": "41717071",
        "mapid": "1",
        "bftitle": "Cirò Marina",
        "sector": "0",
        "posx": 8534.78515625,
        "posy": 9746.7578125,
        "gamemap": "70439"
    },
    {
        "id": "41841021",
        "mapid": "1",
        "bftitle": "Tauragė",
        "sector": "0",
        "posx": 10048.7802734375,
        "posy": 2755.498046875,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "42020352",
        "mapid": "1",
        "bftitle": "Lysyanka",
        "sector": "0",
        "posx": 12552.0302734375,
        "posy": 5654.51611328125,
        "gamemap": "70439"
    },
    {
        "id": "42065011",
        "mapid": "1",
        "bftitle": "Gorlice",
        "sector": "0",
        "posx": 9717.732421875,
        "posy": 5471.35009765625,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "42303390",
        "mapid": "1",
        "bftitle": "Malyy Krupil’",
        "sector": "0",
        "posx": 12757.66015625,
        "posy": 5084.77783203125,
        "gamemap": "201"
    },
    {
        "id": "42318430",
        "mapid": "1",
        "bftitle": "Grosseto",
        "sector": "0",
        "posx": 6771.55517578125,
        "posy": 8414.978515625,
        "gamemap": "70439"
    },
    {
        "id": "42995442",
        "mapid": "1",
        "bftitle": "Bykhaw",
        "sector": "0",
        "posx": 12380.8203125,
        "posy": 3633.31201171875,
        "gamemap": "70439"
    },
    {
        "id": "43589631",
        "mapid": "1",
        "bftitle": "Bărăganul",
        "sector": "0",
        "posx": 11580.9501953125,
        "posy": 7584.2578125,
        "gamemap": "70439"
    },
    {
        "id": "44087369",
        "mapid": "1",
        "bftitle": "Ugra",
        "sector": "0",
        "posx": 13577.1796875,
        "posy": 2999.79296875,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "44313822",
        "mapid": "1",
        "bftitle": "Hagfors",
        "sector": "0",
        "posx": 7522.72314453125,
        "posy": 119.36270141601562,
        "gamemap": "201"
    },
    {
        "id": "44743330",
        "mapid": "1",
        "bftitle": "Bochum",
        "sector": "0",
        "posx": 5644.1328125,
        "posy": 4601.6728515625,
        "gamemap": "203",
        "rotation": 2
    },
    {
        "id": "44818052",
        "mapid": "1",
        "bftitle": "Ichnya",
        "sector": "0",
        "posx": 13010.7099609375,
        "posy": 4913.9990234375,
        "gamemap": "201"
    },
    {
        "id": "45378992",
        "mapid": "1",
        "bftitle": "Pionino",
        "sector": "0",
        "posx": 11464.6796875,
        "posy": 3491.070068359375,
        "gamemap": "201"
    },
    {
        "id": "45390536",
        "mapid": "1",
        "bftitle": "Moissac",
        "sector": "0",
        "posx": 3834.197998046875,
        "posy": 7850.10205078125,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "45585343",
        "mapid": "1",
        "bftitle": "Bautzen",
        "sector": "0",
        "posx": 7746.32080078125,
        "posy": 4764.8662109375,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "45918100",
        "mapid": "1",
        "bftitle": "Hopes",
        "sector": "0",
        "posx": 2723.577880859375,
        "posy": 2443.529052734375,
        "gamemap": "70439"
    },
    {
        "id": "45980213",
        "mapid": "1",
        "bftitle": "Yefremov",
        "sector": "0",
        "posx": 14683,
        "posy": 3817.681884765625,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "46457579",
        "mapid": "1",
        "bftitle": "New Deer",
        "sector": "0",
        "posx": 2885.068115234375,
        "posy": 1554.532958984375,
        "gamemap": "70439"
    },
    {
        "id": "47428027",
        "mapid": "1",
        "bftitle": "Cuminestown",
        "sector": "0",
        "posx": 2818.635009765625,
        "posy": 1542.1519775390625,
        "gamemap": "205",
        "rotation": 1
    },
    {
        "id": "47638682",
        "mapid": "1",
        "bftitle": "Velizh",
        "sector": "0",
        "posx": 12659.6796875,
        "posy": 2571.631103515625,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "48457850",
        "mapid": "1",
        "bftitle": "Sale",
        "sector": "0",
        "posx": 2833.669921875,
        "posy": 3680.83203125,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "48560099",
        "mapid": "1",
        "bftitle": "Heves",
        "sector": "0",
        "posx": 9460.65234375,
        "posy": 6389.65283203125,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "48944171",
        "mapid": "1",
        "bftitle": "Fårdrup",
        "sector": "0",
        "posx": 6863.07080078125,
        "posy": 2736.466064453125,
        "gamemap": "70439"
    },
    {
        "id": "49909641",
        "mapid": "1",
        "bftitle": "Mellerud",
        "sector": "0",
        "posx": 7165.39306640625,
        "posy": 886.4276733398438,
        "gamemap": "70439"
    },
    {
        "id": "50270635",
        "mapid": "1",
        "bftitle": "Froidchapelle",
        "sector": "0",
        "posx": 4783.51806640625,
        "posy": 5244.27197265625,
        "gamemap": "203"
    },
    {
        "id": "50273819",
        "mapid": "1",
        "bftitle": "Chudniv",
        "sector": "0",
        "posx": 11757.0595703125,
        "posy": 5289.84521484375,
        "gamemap": "70439"
    },
    {
        "id": "50378261",
        "mapid": "1",
        "bftitle": "Bischofsburg",
        "sector": "0",
        "posx": 9658.1005859375,
        "posy": 3461.968017578125,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "50704796",
        "mapid": "1",
        "bftitle": "Tours Aérodrome",
        "sector": "0",
        "posx": 3702.993896484375,
        "posy": 6437.13623046875,
        "gamemap": "205",
        "rotation": 1
    },
    {
        "id": "50899301",
        "mapid": "1",
        "bftitle": "Manchester",
        "sector": "0",
        "posx": 2859.718017578125,
        "posy": 3621.702880859375,
        "gamemap": "70439"
    },
    {
        "id": "50907210",
        "mapid": "1",
        "bftitle": "Starokozache",
        "sector": "0",
        "posx": 12304.5703125,
        "posy": 6935.966796875,
        "gamemap": "70439"
    },
    {
        "id": "51122488",
        "mapid": "1",
        "bftitle": "Nelson",
        "sector": "0",
        "posx": 2870.14306640625,
        "posy": 3477.65087890625,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "51409252",
        "mapid": "1",
        "bftitle": "Boddum",
        "sector": "0",
        "posx": 6015.94189453125,
        "posy": 2004.656982421875,
        "gamemap": "203"
    },
    {
        "id": "51540414",
        "mapid": "1",
        "bftitle": "Priyma",
        "sector": "0",
        "posx": 10545.7802734375,
        "posy": 5531.4169921875,
        "gamemap": "203",
        "rotation": 1
    },
    {
        "id": "51712864",
        "mapid": "1",
        "bftitle": "Svene",
        "sector": "0",
        "posx": 6322.8369140625,
        "posy": 255.35789489746094,
        "gamemap": "201"
    },
    {
        "id": "51857814",
        "mapid": "1",
        "bftitle": "Chervyen'",
        "sector": "0",
        "posx": 11849.0498046875,
        "posy": 3541.301025390625,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "52092450",
        "mapid": "1",
        "bftitle": "Valday",
        "sector": "0",
        "posx": 13262.2900390625,
        "posy": 1294.2130126953125,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "52310510",
        "mapid": "1",
        "bftitle": "Sandeid",
        "sector": "0",
        "posx": 5233.43017578125,
        "posy": 400.5635986328125,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "52426870",
        "mapid": "1",
        "bftitle": "Khotyn",
        "sector": "0",
        "posx": 11280.3603515625,
        "posy": 5989.10400390625,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "52431628",
        "mapid": "1",
        "bftitle": "Vecumnieki",
        "sector": "0",
        "posx": 10703.1904296875,
        "posy": 2041.8299560546875,
        "gamemap": "201"
    },
    {
        "id": "52856923",
        "mapid": "1",
        "bftitle": "Middelburg",
        "sector": "0",
        "posx": 4569.0927734375,
        "posy": 4614.7958984375,
        "gamemap": "70439"
    },
    {
        "id": "53112004",
        "mapid": "1",
        "bftitle": "Limoges",
        "sector": "0",
        "posx": 3883.72412109375,
        "posy": 7151.1982421875,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "53293675",
        "mapid": "1",
        "bftitle": "Colwyn Bay",
        "sector": "0",
        "posx": 2418.919921875,
        "posy": 3771.033935546875,
        "gamemap": "201"
    },
    {
        "id": "53301898",
        "mapid": "1",
        "bftitle": "Rousse",
        "sector": "0",
        "posx": 11127.8203125,
        "posy": 7973.6748046875,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "53334727",
        "mapid": "1",
        "bftitle": "Milan",
        "sector": "0",
        "posx": 6208.73291015625,
        "posy": 7306.2900390625,
        "gamemap": "70439"
    },
    {
        "id": "53427041",
        "mapid": "1",
        "bftitle": "Orekhovo-Zuyevo",
        "sector": "0",
        "posx": 14935.83984375,
        "posy": 2466.27490234375,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "53488311",
        "mapid": "1",
        "bftitle": "Plaisir Aérodrome",
        "sector": "0",
        "posx": 4070.428955078125,
        "posy": 5839.8388671875,
        "gamemap": "205"
    },
    {
        "id": "53521411",
        "mapid": "1",
        "bftitle": "Oranienburg",
        "sector": "0",
        "posx": 7348.27392578125,
        "posy": 4049.493896484375,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "53794290",
        "mapid": "1",
        "bftitle": "Orzhiv",
        "sector": "0",
        "posx": 11171.5498046875,
        "posy": 4943.24609375,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "54130226",
        "mapid": "1",
        "bftitle": "Lalbenque",
        "sector": "0",
        "posx": 3967.910888671875,
        "posy": 7775.1689453125,
        "gamemap": "70439"
    },
    {
        "id": "54304029",
        "mapid": "1",
        "bftitle": "Sainte-Gemmes-le-Robert",
        "sector": "0",
        "posx": 3404.864990234375,
        "posy": 6127.76806640625,
        "gamemap": "203"
    },
    {
        "id": "54389190",
        "mapid": "1",
        "bftitle": "La Motte-Servolex",
        "sector": "0",
        "posx": 5235.26220703125,
        "posy": 7247.3271484375,
        "gamemap": "201"
    },
    {
        "id": "54508289",
        "mapid": "1",
        "bftitle": "Aalborg",
        "sector": "0",
        "posx": 6422.48095703125,
        "posy": 1803.5699462890625,
        "gamemap": "70439"
    },
    {
        "id": "54568049",
        "mapid": "1",
        "bftitle": "Oppido Lucano",
        "sector": "0",
        "posx": 8201.6181640625,
        "posy": 9209.40625,
        "gamemap": "201"
    },
    {
        "id": "54675670",
        "mapid": "1",
        "bftitle": "Ormskirk",
        "sector": "0",
        "posx": 2662.68798828125,
        "posy": 3602.889892578125,
        "gamemap": "203",
        "rotation": 2
    },
    {
        "id": "54809762",
        "mapid": "1",
        "bftitle": "Piombino",
        "sector": "0",
        "posx": 6600.958984375,
        "posy": 8348.63671875,
        "gamemap": "204"
    },
    {
        "id": "54870115",
        "mapid": "1",
        "bftitle": "Herning",
        "sector": "0",
        "posx": 6145.498046875,
        "posy": 2290.81591796875,
        "gamemap": "70439"
    },
    {
        "id": "55675942",
        "mapid": "1",
        "bftitle": "Ronneby",
        "sector": "0",
        "posx": 7992.86376953125,
        "posy": 2253.337890625,
        "gamemap": "70439"
    },
    {
        "id": "55821428",
        "mapid": "1",
        "bftitle": "Azov",
        "sector": "0",
        "posx": 15069.1298828125,
        "posy": 6604.134765625,
        "gamemap": "205",
        "rotation": 2
    },
    {
        "id": "56031562",
        "mapid": "1",
        "bftitle": "Golub-Dobrzyń",
        "sector": "0",
        "posx": 9100.244140625,
        "posy": 3835.97705078125,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "56107040",
        "mapid": "1",
        "bftitle": "Bolu",
        "sector": "0",
        "posx": 12779.6796875,
        "posy": 9219.501953125,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "56115630",
        "mapid": "1",
        "bftitle": "Schönhausen",
        "sector": "0",
        "posx": 7044.06787109375,
        "posy": 4095.091064453125,
        "gamemap": "203"
    },
    {
        "id": "56366975",
        "mapid": "1",
        "bftitle": "Mariannelund",
        "sector": "0",
        "posx": 8078.06201171875,
        "posy": 1492.5489501953125,
        "gamemap": "70439"
    },
    {
        "id": "56428146",
        "mapid": "1",
        "bftitle": "Pushkin",
        "sector": "0",
        "posx": 12419.33984375,
        "posy": 288.4978942871094,
        "gamemap": "203",
        "rotation": 1
    },
    {
        "id": "56453677",
        "mapid": "1",
        "bftitle": "Aarhus Lufthavn",
        "sector": "0",
        "posx": 6542.9111328125,
        "posy": 2239.258056640625,
        "gamemap": "204"
    },
    {
        "id": "57042736",
        "mapid": "1",
        "bftitle": "Neustadt am Rübenberge",
        "sector": "0",
        "posx": 6262.35498046875,
        "posy": 4086.718994140625,
        "gamemap": "70439"
    },
    {
        "id": "58089107",
        "mapid": "1",
        "bftitle": "Sant'Agata del Bianco",
        "sector": "0",
        "posx": 8229.0048828125,
        "posy": 10229.5302734375,
        "gamemap": "205"
    },
    {
        "id": "58145962",
        "mapid": "1",
        "bftitle": "Kappeln",
        "sector": "0",
        "posx": 6419.43896484375,
        "posy": 3051.06103515625,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "58514578",
        "mapid": "1",
        "bftitle": "Rotnes",
        "sector": "0",
        "posx": 6698.798828125,
        "posy": 99.68543243408203,
        "gamemap": "201"
    },
    {
        "id": "58541473",
        "mapid": "1",
        "bftitle": "Brugge Vliegveld",
        "sector": "0",
        "posx": 4481.3671875,
        "posy": 4746.546875,
        "gamemap": "205"
    },
    {
        "id": "58672210",
        "mapid": "1",
        "bftitle": "Belogradchik",
        "sector": "0",
        "posx": 10164.240234375,
        "posy": 8067.31494140625,
        "gamemap": "203",
        "rotation": 2
    },
    {
        "id": "59400735",
        "mapid": "1",
        "bftitle": "Kloster Lehnin",
        "sector": "0",
        "posx": 7250.421875,
        "posy": 4221.2119140625,
        "gamemap": "203"
    },
    {
        "id": "59813973",
        "mapid": "1",
        "bftitle": "Cherykaw",
        "sector": "0",
        "posx": 12714.3095703125,
        "posy": 3609.513916015625,
        "gamemap": "70439"
    },
    {
        "id": "59953932",
        "mapid": "1",
        "bftitle": "Riva del Garda",
        "sector": "0",
        "posx": 6692.8818359375,
        "posy": 7128.2099609375,
        "gamemap": "201"
    },
    {
        "id": "60089194",
        "mapid": "1",
        "bftitle": "Khomutovka",
        "sector": "0",
        "posx": 13646.1103515625,
        "posy": 4413.3798828125,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "60694480",
        "mapid": "1",
        "bftitle": "Heiligenhafen",
        "sector": "0",
        "posx": 6737.171875,
        "posy": 3243.126953125,
        "gamemap": "70439"
    },
    {
        "id": "60725081",
        "mapid": "1",
        "bftitle": "Česká Lípa",
        "sector": "0",
        "posx": 7776.4248046875,
        "posy": 4996.65478515625,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "60825243",
        "mapid": "1",
        "bftitle": "Marcillac-Vallon",
        "sector": "0",
        "posx": 4237.4541015625,
        "posy": 7719.23779296875,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "60866228",
        "mapid": "1",
        "bftitle": "Laroquebrou",
        "sector": "0",
        "posx": 4158.1298828125,
        "posy": 7514.56103515625,
        "gamemap": "204"
    },
    {
        "id": "60984886",
        "mapid": "1",
        "bftitle": "Plavsk",
        "sector": "0",
        "posx": 14446.3603515625,
        "posy": 3539.532958984375,
        "gamemap": "201"
    },
    {
        "id": "61339700",
        "mapid": "1",
        "bftitle": "Laholm",
        "sector": "0",
        "posx": 7338.51123046875,
        "posy": 2092.35791015625,
        "gamemap": "70439"
    },
    {
        "id": "61528899",
        "mapid": "1",
        "bftitle": "Swiętajno",
        "sector": "0",
        "posx": 10057.16015625,
        "posy": 3393.35205078125,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "62157680",
        "mapid": "1",
        "bftitle": "Réquista",
        "sector": "0",
        "posx": 4258.26611328125,
        "posy": 7901.162109375,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "62360478",
        "mapid": "1",
        "bftitle": "Rameshki",
        "sector": "0",
        "posx": 14080.9501953125,
        "posy": 1642.3370361328125,
        "gamemap": "201"
    },
    {
        "id": "62559208",
        "mapid": "1",
        "bftitle": "Bollène",
        "sector": "0",
        "posx": 4933.5830078125,
        "posy": 7821.39306640625,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "62568883",
        "mapid": "1",
        "bftitle": "Cento",
        "sector": "0",
        "posx": 6823.6171875,
        "posy": 7612.9521484375,
        "gamemap": "203"
    },
    {
        "id": "62874407",
        "mapid": "1",
        "bftitle": "Zhar",
        "sector": "0",
        "posx": 12836.51953125,
        "posy": 494.151611328125,
        "gamemap": "203"
    },
    {
        "id": "63142461",
        "mapid": "1",
        "bftitle": "Havlíčkův Brod",
        "sector": "0",
        "posx": 8082.1708984375,
        "posy": 5493.1259765625,
        "gamemap": "201"
    },
    {
        "id": "63262457",
        "mapid": "1",
        "bftitle": "Friedrichsruhe",
        "sector": "0",
        "posx": 6959.65380859375,
        "posy": 3630.007080078125,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "63509989",
        "mapid": "1",
        "bftitle": "Letňany",
        "sector": "0",
        "posx": 7784.740234375,
        "posy": 5235.0361328125,
        "gamemap": "70439"
    },
    {
        "id": "63714004",
        "mapid": "1",
        "bftitle": "Foúrnoi",
        "sector": "0",
        "posx": 11277.2802734375,
        "posy": 10421.8701171875,
        "gamemap": "70439"
    },
    {
        "id": "63816674",
        "mapid": "1",
        "bftitle": "Lodève",
        "sector": "0",
        "posx": 4487.23583984375,
        "posy": 8030.81005859375,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "64236811",
        "mapid": "1",
        "bftitle": "Kalinkavichy",
        "sector": "0",
        "posx": 12111.23046875,
        "posy": 4311.85888671875,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "64316088",
        "mapid": "1",
        "bftitle": "Ágios Dimítrios",
        "sector": "0",
        "posx": 9831.6552734375,
        "posy": 9590.70703125,
        "gamemap": "203",
        "rotation": 1
    },
    {
        "id": "64367481",
        "mapid": "1",
        "bftitle": "Ol’gino",
        "sector": "0",
        "posx": 12286.2197265625,
        "posy": 229.39849853515625,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "64675823",
        "mapid": "1",
        "bftitle": "Sézanne",
        "sector": "0",
        "posx": 4606.458984375,
        "posy": 5893.75390625,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "65053583",
        "mapid": "1",
        "bftitle": "Warin",
        "sector": "0",
        "posx": 6946.10693359375,
        "posy": 3494.18798828125,
        "gamemap": "70439"
    },
    {
        "id": "65302215",
        "mapid": "1",
        "bftitle": "Lavaur",
        "sector": "0",
        "posx": 4048.10302734375,
        "posy": 8038.240234375,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "65457161",
        "mapid": "1",
        "bftitle": "Nauwalde",
        "sector": "0",
        "posx": 7445.80615234375,
        "posy": 4652.48876953125,
        "gamemap": "70439"
    },
    {
        "id": "65704612",
        "mapid": "1",
        "bftitle": "Silenen",
        "sector": "0",
        "posx": 6057.40380859375,
        "posy": 6741.951171875,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "65957434",
        "mapid": "1",
        "bftitle": "Werneuchen",
        "sector": "0",
        "posx": 7541.92578125,
        "posy": 4061.62890625,
        "gamemap": "203",
        "rotation": 1
    },
    {
        "id": "66193694",
        "mapid": "1",
        "bftitle": "Kolpaki",
        "sector": "0",
        "posx": 11175.2998046875,
        "posy": 3940.261962890625,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "66521740",
        "mapid": "1",
        "bftitle": "Luga",
        "sector": "0",
        "posx": 12263.5302734375,
        "posy": 865.147705078125,
        "gamemap": "201"
    },
    {
        "id": "66731044",
        "mapid": "1",
        "bftitle": "Villefontaine",
        "sector": "0",
        "posx": 5023.341796875,
        "posy": 7243.81396484375,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "67304907",
        "mapid": "1",
        "bftitle": "Burhaniye",
        "sector": "0",
        "posx": 11421.5,
        "posy": 9696.4384765625,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "67342376",
        "mapid": "1",
        "bftitle": "Cerignola",
        "sector": "0",
        "posx": 8174.47900390625,
        "posy": 9012.423828125,
        "gamemap": "203",
        "rotation": 1
    },
    {
        "id": "67588831",
        "mapid": "1",
        "bftitle": "Wendisch Priborn",
        "sector": "0",
        "posx": 7112.24609375,
        "posy": 3723.26611328125,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "67610032",
        "mapid": "1",
        "bftitle": "Åtvidaberg",
        "sector": "0",
        "posx": 8204.4111328125,
        "posy": 1167.5589599609375,
        "gamemap": "201"
    },
    {
        "id": "68067106",
        "mapid": "1",
        "bftitle": "Smolensk",
        "sector": "0",
        "posx": 12906.900390625,
        "posy": 2997.718994140625,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "68293058",
        "mapid": "1",
        "bftitle": "Riec-sur-Belon",
        "sector": "0",
        "posx": 2437.781982421875,
        "posy": 6297.98876953125,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "68323333",
        "mapid": "1",
        "bftitle": "Vossiyatskoye",
        "sector": "0",
        "posx": 12928.2197265625,
        "posy": 6363.1630859375,
        "gamemap": "70439"
    },
    {
        "id": "68461714",
        "mapid": "1",
        "bftitle": "Bobrovytsya",
        "sector": "0",
        "posx": 12717.740234375,
        "posy": 4968.02099609375,
        "gamemap": "201"
    },
    {
        "id": "68980245",
        "mapid": "1",
        "bftitle": "Medyn'",
        "sector": "0",
        "posx": 14026.2099609375,
        "posy": 2901.583984375,
        "gamemap": "205",
        "rotation": 1
    },
    {
        "id": "69029347",
        "mapid": "1",
        "bftitle": "Borkum",
        "sector": "0",
        "posx": 5511.81591796875,
        "posy": 3614.5830078125,
        "gamemap": "70439"
    },
    {
        "id": "69458519",
        "mapid": "1",
        "bftitle": "Hradec Králové",
        "sector": "0",
        "posx": 8156.06396484375,
        "posy": 5217.45703125,
        "gamemap": "201"
    },
    {
        "id": "69946061",
        "mapid": "1",
        "bftitle": "Zalishchyky",
        "sector": "0",
        "posx": 11059.5498046875,
        "posy": 5928.25390625,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "70101946",
        "mapid": "1",
        "bftitle": "Nîmes",
        "sector": "0",
        "posx": 4790.134765625,
        "posy": 7983.11181640625,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "70108147",
        "mapid": "1",
        "bftitle": "Skagen",
        "sector": "0",
        "posx": 6608.3388671875,
        "posy": 1442.93505859375,
        "gamemap": "70439"
    },
    {
        "id": "70166775",
        "mapid": "1",
        "bftitle": "Karacaköy",
        "sector": "0",
        "posx": 11834.1796875,
        "posy": 8958.111328125,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "70720685",
        "mapid": "1",
        "bftitle": "Krevo",
        "sector": "0",
        "posx": 11221.849609375,
        "posy": 3236.926025390625,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "71227857",
        "mapid": "1",
        "bftitle": "Torbalı",
        "sector": "0",
        "posx": 11535.6796875,
        "posy": 10207.4501953125,
        "gamemap": "70439"
    },
    {
        "id": "71383595",
        "mapid": "1",
        "bftitle": "Kremmen",
        "sector": "0",
        "posx": 7333.07080078125,
        "posy": 4006.779052734375,
        "gamemap": "203"
    },
    {
        "id": "71838560",
        "mapid": "1",
        "bftitle": "Füssen",
        "sector": "0",
        "posx": 6650.80078125,
        "posy": 6417.2041015625,
        "gamemap": "203"
    },
    {
        "id": "72443615",
        "mapid": "1",
        "bftitle": "Menemen",
        "sector": "0",
        "posx": 11449.83984375,
        "posy": 10035.8701171875,
        "gamemap": "70439"
    },
    {
        "id": "72581190",
        "mapid": "1",
        "bftitle": "Biga",
        "sector": "0",
        "posx": 11500.5,
        "posy": 9416.580078125,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "73612835",
        "mapid": "1",
        "bftitle": "Haltwhistle",
        "sector": "0",
        "posx": 2794.862060546875,
        "posy": 2900.635009765625,
        "gamemap": "201"
    },
    {
        "id": "73622778",
        "mapid": "1",
        "bftitle": "Simontornya",
        "sector": "0",
        "posx": 8954,
        "posy": 6756.80908203125,
        "gamemap": "70439"
    },
    {
        "id": "73735531",
        "mapid": "1",
        "bftitle": "Marienwerder",
        "sector": "0",
        "posx": 7501.36181640625,
        "posy": 3967.759033203125,
        "gamemap": "203"
    },
    {
        "id": "74104380",
        "mapid": "1",
        "bftitle": "Bari",
        "sector": "0",
        "posx": 8436.921875,
        "posy": 9097.859375,
        "gamemap": "70439"
    },
    {
        "id": "74546776",
        "mapid": "1",
        "bftitle": "Radilovo",
        "sector": "0",
        "posx": 12105.2900390625,
        "posy": 1275.5780029296875,
        "gamemap": "70439"
    },
    {
        "id": "74845381",
        "mapid": "1",
        "bftitle": "Tarnów",
        "sector": "0",
        "posx": 9666.91015625,
        "posy": 5307.4150390625,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "74918872",
        "mapid": "1",
        "bftitle": "Hrodna",
        "sector": "0",
        "posx": 10499.0498046875,
        "posy": 3550.027099609375,
        "gamemap": "70439"
    },
    {
        "id": "74947872",
        "mapid": "1",
        "bftitle": "Milly-la-Forêt",
        "sector": "0",
        "posx": 4239.09716796875,
        "posy": 6034.9228515625,
        "gamemap": "70439"
    },
    {
        "id": "75398541",
        "mapid": "1",
        "bftitle": "Banbury",
        "sector": "0",
        "posx": 3202.361083984375,
        "posy": 4300.8359375,
        "gamemap": "201"
    },
    {
        "id": "75433543",
        "mapid": "1",
        "bftitle": "Montcornet",
        "sector": "0",
        "posx": 4692.42578125,
        "posy": 5453.27001953125,
        "gamemap": "70439"
    },
    {
        "id": "75439973",
        "mapid": "1",
        "bftitle": "Meaux",
        "sector": "0",
        "posx": 4356.625,
        "posy": 5819.10693359375,
        "gamemap": "70439"
    },
    {
        "id": "75562038",
        "mapid": "1",
        "bftitle": "Elefsina",
        "sector": "0",
        "posx": 10414.3603515625,
        "posy": 10242.330078125,
        "gamemap": "203",
        "rotation": 1
    },
    {
        "id": "75821250",
        "mapid": "1",
        "bftitle": "Rhenen",
        "sector": "0",
        "posx": 5147.18310546875,
        "posy": 4394.9599609375,
        "gamemap": "70439"
    },
    {
        "id": "75825002",
        "mapid": "1",
        "bftitle": "Tábor",
        "sector": "0",
        "posx": 7811.64794921875,
        "posy": 5581.0732421875,
        "gamemap": "201"
    },
    {
        "id": "76004384",
        "mapid": "1",
        "bftitle": "Blackpool",
        "sector": "0",
        "posx": 2641.528076171875,
        "posy": 3485.423095703125,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "76244339",
        "mapid": "1",
        "bftitle": "Douglas",
        "sector": "0",
        "posx": 2200.83203125,
        "posy": 3318.64111328125,
        "gamemap": "70439"
    },
    {
        "id": "77174321",
        "mapid": "1",
        "bftitle": "Koropy",
        "sector": "0",
        "posx": 14213.5,
        "posy": 5338.64599609375,
        "gamemap": "70439"
    },
    {
        "id": "77541488",
        "mapid": "1",
        "bftitle": "Kodyma",
        "sector": "0",
        "posx": 12052.2900390625,
        "posy": 6170.251953125,
        "gamemap": "70439"
    },
    {
        "id": "77577280",
        "mapid": "1",
        "bftitle": "Makedonska Kamenica",
        "sector": "0",
        "posx": 10136.099609375,
        "posy": 8713.9482421875,
        "gamemap": "201"
    },
    {
        "id": "77589337",
        "mapid": "1",
        "bftitle": "Ehingen",
        "sector": "0",
        "posx": 6366.43310546875,
        "posy": 6088.8427734375,
        "gamemap": "201"
    },
    {
        "id": "77621666",
        "mapid": "1",
        "bftitle": "Pyatnitsa",
        "sector": "0",
        "posx": 14272.8896484375,
        "posy": 5188.51318359375,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "78096980",
        "mapid": "1",
        "bftitle": "Diekhof",
        "sector": "0",
        "posx": 7149.0849609375,
        "posy": 3455.593017578125,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "78168138",
        "mapid": "1",
        "bftitle": "Nikiti",
        "sector": "0",
        "posx": 10452.3896484375,
        "posy": 9419.2470703125,
        "gamemap": "204"
    },
    {
        "id": "78770039",
        "mapid": "1",
        "bftitle": "Donoratico",
        "sector": "0",
        "posx": 6612.64599609375,
        "posy": 8253.3779296875,
        "gamemap": "70439"
    },
    {
        "id": "78887826",
        "mapid": "1",
        "bftitle": "Vislanda",
        "sector": "0",
        "posx": 7750.73486328125,
        "posy": 1946.7010498046875,
        "gamemap": "201"
    },
    {
        "id": "79342626",
        "mapid": "1",
        "bftitle": "Poltava",
        "sector": "0",
        "posx": 13639.91015625,
        "posy": 5499.55908203125,
        "gamemap": "70439"
    },
    {
        "id": "79532428",
        "mapid": "1",
        "bftitle": "Kherson",
        "sector": "0",
        "posx": 13052.51953125,
        "posy": 6788.56396484375,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "79895044",
        "mapid": "1",
        "bftitle": "Valmiera",
        "sector": "0",
        "posx": 10968.5595703125,
        "posy": 1534.1710205078125,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "79924690",
        "mapid": "1",
        "bftitle": "Messolonghi",
        "sector": "0",
        "posx": 9812.1494140625,
        "posy": 10125.2802734375,
        "gamemap": "70439"
    },
    {
        "id": "80270408",
        "mapid": "1",
        "bftitle": "Waldshut-Tiengen",
        "sector": "0",
        "posx": 5923.7138671875,
        "posy": 6379.47998046875,
        "gamemap": "205"
    },
    {
        "id": "80307871",
        "mapid": "1",
        "bftitle": "Shrewsbury",
        "sector": "0",
        "posx": 2710.764892578125,
        "posy": 4012.0859375,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "80498958",
        "mapid": "1",
        "bftitle": "Staryy Merchyk",
        "sector": "0",
        "posx": 13997.0302734375,
        "posy": 5322.26318359375,
        "gamemap": "201"
    },
    {
        "id": "80774230",
        "mapid": "1",
        "bftitle": "Floreşti",
        "sector": "0",
        "posx": 11808.5498046875,
        "posy": 6261.73486328125,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "80989018",
        "mapid": "1",
        "bftitle": "Dole",
        "sector": "0",
        "posx": 5127.23291015625,
        "posy": 6607.51416015625,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "81220773",
        "mapid": "1",
        "bftitle": "Sazonovo",
        "sector": "0",
        "posx": 13841.009765625,
        "posy": 662.3568725585938,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "81241539",
        "mapid": "1",
        "bftitle": "Skelmersdale",
        "sector": "0",
        "posx": 2702.0380859375,
        "posy": 3618.787109375,
        "gamemap": "203",
        "rotation": 1
    },
    {
        "id": "81504311",
        "mapid": "1",
        "bftitle": "Vasylivka",
        "sector": "0",
        "posx": 13854.900390625,
        "posy": 6460.9267578125,
        "gamemap": "70439"
    },
    {
        "id": "81675476",
        "mapid": "1",
        "bftitle": "Nučice",
        "sector": "0",
        "posx": 7670.64501953125,
        "posy": 5298.94189453125,
        "gamemap": "204",
        "rotation": 3
    },
    {
        "id": "81723360",
        "mapid": "1",
        "bftitle": "Velké Meziříčí",
        "sector": "0",
        "posx": 8208.6728515625,
        "posy": 5607.9169921875,
        "gamemap": "201"
    },
    {
        "id": "81740247",
        "mapid": "1",
        "bftitle": "Djupvik",
        "sector": "0",
        "posx": 8861.41015625,
        "posy": 1641.821044921875,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "82191593",
        "mapid": "1",
        "bftitle": "Kißlegg",
        "sector": "0",
        "posx": 6412.259765625,
        "posy": 6306.7861328125,
        "gamemap": "203"
    },
    {
        "id": "82217426",
        "mapid": "1",
        "bftitle": "Mērsrags",
        "sector": "0",
        "posx": 10293.490234375,
        "posy": 1647.012939453125,
        "gamemap": "70439"
    },
    {
        "id": "82495231",
        "mapid": "1",
        "bftitle": "Montréal-la-Cluse",
        "sector": "0",
        "posx": 5151.6611328125,
        "posy": 7001.6748046875,
        "gamemap": "201"
    },
    {
        "id": "82560087",
        "mapid": "1",
        "bftitle": "Ozherel'ye",
        "sector": "0",
        "posx": 14731.76953125,
        "posy": 2992.510986328125,
        "gamemap": "70439"
    },
    {
        "id": "82790276",
        "mapid": "1",
        "bftitle": "Forfar",
        "sector": "0",
        "posx": 2667.80810546875,
        "posy": 2022.114013671875,
        "gamemap": "201"
    },
    {
        "id": "82962859",
        "mapid": "1",
        "bftitle": "Kletnya",
        "sector": "0",
        "posx": 13251.919921875,
        "posy": 3698.419921875,
        "gamemap": "201"
    },
    {
        "id": "83287226",
        "mapid": "1",
        "bftitle": "Anjum",
        "sector": "0",
        "posx": 5313.94677734375,
        "posy": 3716.965087890625,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "83600989",
        "mapid": "1",
        "bftitle": "Dolni Chiflik",
        "sector": "0",
        "posx": 11639.580078125,
        "posy": 8328.521484375,
        "gamemap": "70439"
    },
    {
        "id": "84460213",
        "mapid": "1",
        "bftitle": "Varese",
        "sector": "0",
        "posx": 6101.07421875,
        "posy": 7156.36376953125,
        "gamemap": "203"
    },
    {
        "id": "84568806",
        "mapid": "1",
        "bftitle": "Boulazac",
        "sector": "0",
        "posx": 3742.2099609375,
        "posy": 7450.85498046875,
        "gamemap": "203",
        "rotation": 1
    },
    {
        "id": "84661055",
        "mapid": "1",
        "bftitle": "Voluntari",
        "sector": "0",
        "posx": 11201.9296875,
        "posy": 7686.6328125,
        "gamemap": "203"
    },
    {
        "id": "84746727",
        "mapid": "1",
        "bftitle": "Sencha",
        "sector": "0",
        "posx": 13290.2001953125,
        "posy": 5196.4169921875,
        "gamemap": "203"
    },
    {
        "id": "84851971",
        "mapid": "1",
        "bftitle": "Boczów",
        "sector": "0",
        "posx": 7896.365234375,
        "posy": 4220.1982421875,
        "gamemap": "70439"
    },
    {
        "id": "85126180",
        "mapid": "1",
        "bftitle": "Lincoln",
        "sector": "0",
        "posx": 3397.662109375,
        "posy": 3774.554931640625,
        "gamemap": "70439"
    },
    {
        "id": "85161635",
        "mapid": "1",
        "bftitle": "Bournemouth",
        "sector": "0",
        "posx": 2941.422119140625,
        "posy": 5015.0439453125,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "85515488",
        "mapid": "1",
        "bftitle": "Koszalin",
        "sector": "0",
        "posx": 8255.56640625,
        "posy": 3296.258056640625,
        "gamemap": "70439"
    },
    {
        "id": "85744915",
        "mapid": "1",
        "bftitle": "Bozüyük",
        "sector": "0",
        "posx": 12319.6298828125,
        "posy": 9540.126953125,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "86158137",
        "mapid": "1",
        "bftitle": "Grafenwöhr",
        "sector": "0",
        "posx": 6975.169921875,
        "posy": 5382.408203125,
        "gamemap": "203",
        "rotation": 1
    },
    {
        "id": "86275506",
        "mapid": "1",
        "bftitle": "Ustyuzhna",
        "sector": "0",
        "posx": 14194.3203125,
        "posy": 806.9395751953125,
        "gamemap": "205"
    },
    {
        "id": "86341276",
        "mapid": "1",
        "bftitle": "Sevastopol",
        "sector": "0",
        "posx": 13350.75,
        "posy": 7711.85693359375,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "86693680",
        "mapid": "1",
        "bftitle": "Beaumont-du-Périgord",
        "sector": "0",
        "posx": 3740.489013671875,
        "posy": 7598.14013671875,
        "gamemap": "203",
        "rotation": 2
    },
    {
        "id": "87039754",
        "mapid": "1",
        "bftitle": "Fleckenstein",
        "sector": "0",
        "posx": 5797.01611328125,
        "posy": 5748.25390625,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "87292401",
        "mapid": "1",
        "bftitle": "Vilenka",
        "sector": "0",
        "posx": 12097.990234375,
        "posy": 5207.5380859375,
        "gamemap": "70439"
    },
    {
        "id": "87409577",
        "mapid": "1",
        "bftitle": "Nasilava",
        "sector": "0",
        "posx": 11365.6298828125,
        "posy": 3240.6669921875,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "88307610",
        "mapid": "1",
        "bftitle": "Pınarhisar",
        "sector": "0",
        "posx": 11581.9296875,
        "posy": 8871.06640625,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "88326356",
        "mapid": "1",
        "bftitle": "Olishëvka",
        "sector": "0",
        "posx": 12699.669921875,
        "posy": 4744.93408203125,
        "gamemap": "201"
    },
    {
        "id": "88576122",
        "mapid": "1",
        "bftitle": "Worthing Airfield",
        "sector": "0",
        "posx": 3393.47509765625,
        "posy": 4951.58984375,
        "gamemap": "205",
        "rotation": 3
    },
    {
        "id": "88817722",
        "mapid": "1",
        "bftitle": "Aurich Flugplatz",
        "sector": "0",
        "posx": 5773.12109375,
        "posy": 3645.14501953125,
        "gamemap": "205"
    },
    {
        "id": "88886167",
        "mapid": "1",
        "bftitle": "Gueugnon",
        "sector": "0",
        "posx": 4705.9658203125,
        "posy": 6821.80419921875,
        "gamemap": "201"
    },
    {
        "id": "89693531",
        "mapid": "1",
        "bftitle": "Stepove",
        "sector": "0",
        "posx": 12754.009765625,
        "posy": 6568.4970703125,
        "gamemap": "205"
    },
    {
        "id": "89851150",
        "mapid": "1",
        "bftitle": "Mirande",
        "sector": "0",
        "posx": 3637.1630859375,
        "posy": 8112.36083984375,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "89913710",
        "mapid": "1",
        "bftitle": "Oxford",
        "sector": "0",
        "posx": 3239.070068359375,
        "posy": 4463.55419921875,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "89939794",
        "mapid": "1",
        "bftitle": "Parempuyre",
        "sector": "0",
        "posx": 3334.884033203125,
        "posy": 7508.0810546875,
        "gamemap": "203",
        "rotation": 1
    },
    {
        "id": "90593296",
        "mapid": "1",
        "bftitle": "Saint-Céré",
        "sector": "0",
        "posx": 4075.867919921875,
        "posy": 7564.88720703125,
        "gamemap": "201"
    },
    {
        "id": "90613024",
        "mapid": "1",
        "bftitle": "Horodyshche",
        "sector": "0",
        "posx": 12732.5,
        "posy": 5639.76904296875,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "90848360",
        "mapid": "1",
        "bftitle": "Ulm",
        "sector": "0",
        "posx": 6444.02099609375,
        "posy": 6039.0029296875,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "91473143",
        "mapid": "1",
        "bftitle": "Serpukhov",
        "sector": "0",
        "posx": 14481.2998046875,
        "posy": 2929.01904296875,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "92983943",
        "mapid": "1",
        "bftitle": "İpsala",
        "sector": "0",
        "posx": 11248.5595703125,
        "posy": 9147.2041015625,
        "gamemap": "70439"
    },
    {
        "id": "93569694",
        "mapid": "1",
        "bftitle": "Saint-Hubert Aérodrome",
        "sector": "0",
        "posx": 5158.3681640625,
        "posy": 5330.27001953125,
        "gamemap": "204"
    },
    {
        "id": "93663195",
        "mapid": "1",
        "bftitle": "Meyrueis",
        "sector": "0",
        "posx": 4520.701171875,
        "posy": 7841.912109375,
        "gamemap": "203",
        "rotation": 3
    },
    {
        "id": "94149693",
        "mapid": "1",
        "bftitle": "Valuyki",
        "sector": "0",
        "posx": 14685.1904296875,
        "posy": 5220.09912109375,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "94524178",
        "mapid": "1",
        "bftitle": "Marans",
        "sector": "0",
        "posx": 3223.509033203125,
        "posy": 6948.412109375,
        "gamemap": "203",
        "rotation": 3
    },
    {
        "id": "95025775",
        "mapid": "1",
        "bftitle": "Kraljevo",
        "sector": "0",
        "posx": 9579.6953125,
        "posy": 8027.06494140625,
        "gamemap": "70439"
    },
    {
        "id": "95055885",
        "mapid": "1",
        "bftitle": "Russko-Vysotskoye",
        "sector": "0",
        "posx": 12292.48046875,
        "posy": 309.9494934082031,
        "gamemap": "203",
        "rotation": 3
    },
    {
        "id": "95291931",
        "mapid": "1",
        "bftitle": "Dedovsk",
        "sector": "0",
        "posx": 14396.6103515625,
        "posy": 2433.739990234375,
        "gamemap": "203",
        "rotation": 3
    },
    {
        "id": "95704327",
        "mapid": "1",
        "bftitle": "Castets-en-Dorthe",
        "sector": "0",
        "posx": 3470.39501953125,
        "posy": 7683.296875,
        "gamemap": "70439"
    },
    {
        "id": "95840107",
        "mapid": "1",
        "bftitle": "Mogilëvtsy",
        "sector": "0",
        "posx": 10748,
        "posy": 3952.5419921875,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "96478881",
        "mapid": "1",
        "bftitle": "Semenivka",
        "sector": "0",
        "posx": 13241.1796875,
        "posy": 5501.115234375,
        "gamemap": "203"
    },
    {
        "id": "96969928",
        "mapid": "1",
        "bftitle": "Ringe",
        "sector": "0",
        "posx": 6562.9189453125,
        "posy": 2777.39794921875,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "97168907",
        "mapid": "1",
        "bftitle": "Hannivka",
        "sector": "0",
        "posx": 12116.25,
        "posy": 6903.48388671875,
        "gamemap": "70439"
    },
    {
        "id": "97188721",
        "mapid": "1",
        "bftitle": "Tiszafüred",
        "sector": "0",
        "posx": 9620.4443359375,
        "posy": 6381.34912109375,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "97763136",
        "mapid": "1",
        "bftitle": "Wrocław",
        "sector": "0",
        "posx": 8507.984375,
        "posy": 4802.6708984375,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "98048536",
        "mapid": "1",
        "bftitle": "Stefanovikeio",
        "sector": "0",
        "posx": 10181.349609375,
        "posy": 9710.5390625,
        "gamemap": "70439"
    },
    {
        "id": "98538808",
        "mapid": "1",
        "bftitle": "Borgo Venusio",
        "sector": "0",
        "posx": 8374.3603515625,
        "posy": 9224.8134765625,
        "gamemap": "203",
        "rotation": 1
    },
    {
        "id": "98762829",
        "mapid": "1",
        "bftitle": "Den Oever",
        "sector": "0",
        "posx": 4981.85595703125,
        "posy": 3942.7080078125,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "98896333",
        "mapid": "1",
        "bftitle": "Pleaux",
        "sector": "0",
        "posx": 4169.68017578125,
        "posy": 7445.1767578125,
        "gamemap": "203"
    },
    {
        "id": "98976389",
        "mapid": "1",
        "bftitle": "Muižnieki",
        "sector": "0",
        "posx": 9894.9052734375,
        "posy": 1566.6290283203125,
        "gamemap": "70439"
    },
    {
        "id": "98990966",
        "mapid": "1",
        "bftitle": "Zolotonosha",
        "sector": "0",
        "posx": 12907.009765625,
        "posy": 5465.56103515625,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "99222423",
        "mapid": "1",
        "bftitle": "Riedlingen",
        "sector": "0",
        "posx": 6292.58984375,
        "posy": 6145.5751953125,
        "gamemap": "201"
    },
    {
        "id": "99648506",
        "mapid": "1",
        "bftitle": "Sholokhove",
        "sector": "0",
        "posx": 13490.5400390625,
        "posy": 6348.23095703125,
        "gamemap": "203",
        "rotation": 3
    },
    {
        "id": "99652665",
        "mapid": "1",
        "bftitle": "Demyansk",
        "sector": "0",
        "posx": 13031.740234375,
        "posy": 1478.0250244140625,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "100009357",
        "mapid": "1",
        "bftitle": "Plyussa",
        "sector": "0",
        "posx": 12122.8603515625,
        "posy": 1038.699951171875,
        "gamemap": "201"
    },
    {
        "id": "100083354",
        "mapid": "1",
        "bftitle": "Tonbridge",
        "sector": "0",
        "posx": 3595.72900390625,
        "posy": 4759.18017578125,
        "gamemap": "205"
    },
    {
        "id": "100176538",
        "mapid": "1",
        "bftitle": "Villeneuve",
        "sector": "0",
        "posx": 4110.046875,
        "posy": 7734.30908203125,
        "gamemap": "201"
    },
    {
        "id": "100185966",
        "mapid": "1",
        "bftitle": "Warrington",
        "sector": "0",
        "posx": 2758.68310546875,
        "posy": 3697,
        "gamemap": "70439"
    },
    {
        "id": "100499409",
        "mapid": "1",
        "bftitle": "Inđija",
        "sector": "0",
        "posx": 9401.5322265625,
        "posy": 7480.7919921875,
        "gamemap": "203"
    },
    {
        "id": "100909466",
        "mapid": "1",
        "bftitle": "Keszthely",
        "sector": "0",
        "posx": 8569.4931640625,
        "posy": 6750.9931640625,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "100935000",
        "mapid": "1",
        "bftitle": "Hlusha",
        "sector": "0",
        "posx": 11973.75,
        "posy": 3847.81298828125,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "101335477",
        "mapid": "1",
        "bftitle": "Aranđelovac",
        "sector": "0",
        "posx": 9541.7509765625,
        "posy": 7788.51806640625,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "101865871",
        "mapid": "1",
        "bftitle": "Saint-Pourçain-sur-Sioule",
        "sector": "0",
        "posx": 4478.79296875,
        "posy": 6947.91796875,
        "gamemap": "201"
    },
    {
        "id": "101943852",
        "mapid": "1",
        "bftitle": "Saint-Priest-des-Champs",
        "sector": "0",
        "posx": 4325.39404296875,
        "posy": 7082.90283203125,
        "gamemap": "201"
    },
    {
        "id": "101944268",
        "mapid": "1",
        "bftitle": "Verkhniye Galkovichi",
        "sector": "0",
        "posx": 11823.990234375,
        "posy": 1335.572998046875,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "102021535",
        "mapid": "1",
        "bftitle": "Pazardzhik",
        "sector": "0",
        "posx": 10647.8203125,
        "posy": 8642.6357421875,
        "gamemap": "201"
    },
    {
        "id": "102725375",
        "mapid": "1",
        "bftitle": "Cassis",
        "sector": "0",
        "posx": 5152.97021484375,
        "posy": 8250.5087890625,
        "gamemap": "70439"
    },
    {
        "id": "103149799",
        "mapid": "1",
        "bftitle": "Montignac",
        "sector": "0",
        "posx": 3855.631103515625,
        "posy": 7474.05078125,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "103389883",
        "mapid": "1",
        "bftitle": "Pestovo",
        "sector": "0",
        "posx": 14009.75,
        "posy": 946.5548706054688,
        "gamemap": "70439"
    },
    {
        "id": "103668640",
        "mapid": "1",
        "bftitle": "Amsterdam Vliegveld",
        "sector": "0",
        "posx": 4910.0400390625,
        "posy": 4181.14599609375,
        "gamemap": "205",
        "rotation": 2
    },
    {
        "id": "103772092",
        "mapid": "1",
        "bftitle": "Chervone",
        "sector": "0",
        "posx": 13501.1298828125,
        "posy": 4485.365234375,
        "gamemap": "203"
    },
    {
        "id": "104297829",
        "mapid": "1",
        "bftitle": "Venice",
        "sector": "0",
        "posx": 7130.0791015625,
        "posy": 7317.7080078125,
        "gamemap": "70439"
    },
    {
        "id": "104618794",
        "mapid": "1",
        "bftitle": "Érd",
        "sector": "0",
        "posx": 9037.79296875,
        "posy": 6476.90185546875,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "104633539",
        "mapid": "1",
        "bftitle": "Arkoúdi",
        "sector": "0",
        "posx": 9703.037109375,
        "posy": 10321.75,
        "gamemap": "70439"
    },
    {
        "id": "104969993",
        "mapid": "1",
        "bftitle": "Lézignan-Corbières",
        "sector": "0",
        "posx": 4324.47705078125,
        "posy": 8241.888671875,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "105074519",
        "mapid": "1",
        "bftitle": "Stara Fužina",
        "sector": "0",
        "posx": 7573.27783203125,
        "posy": 6941.423828125,
        "gamemap": "203",
        "rotation": 3
    },
    {
        "id": "105291773",
        "mapid": "1",
        "bftitle": "Loudéac",
        "sector": "0",
        "posx": 2704.830078125,
        "posy": 6160.91796875,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "105763661",
        "mapid": "1",
        "bftitle": "Frette",
        "sector": "0",
        "posx": 5321.21484375,
        "posy": 293.9731140136719,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "105910393",
        "mapid": "1",
        "bftitle": "Villefranche-de-Rouergue",
        "sector": "0",
        "posx": 4125.083984375,
        "posy": 7776.251953125,
        "gamemap": "203",
        "rotation": 3
    },
    {
        "id": "106371047",
        "mapid": "1",
        "bftitle": "Eitorf",
        "sector": "0",
        "posx": 5698.833984375,
        "posy": 4958.81005859375,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "106568362",
        "mapid": "1",
        "bftitle": "Katochi",
        "sector": "0",
        "posx": 9734.9248046875,
        "posy": 10114.9296875,
        "gamemap": "70439"
    },
    {
        "id": "106639789",
        "mapid": "1",
        "bftitle": "Mâcon",
        "sector": "0",
        "posx": 4931.81396484375,
        "posy": 6951.876953125,
        "gamemap": "201"
    },
    {
        "id": "107084230",
        "mapid": "1",
        "bftitle": "Crest",
        "sector": "0",
        "posx": 4988.64892578125,
        "posy": 7614.04296875,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "107112646",
        "mapid": "1",
        "bftitle": "Dundaga",
        "sector": "0",
        "posx": 10066.4501953125,
        "posy": 1547.592041015625,
        "gamemap": "203"
    },
    {
        "id": "107282499",
        "mapid": "1",
        "bftitle": "Klausen",
        "sector": "0",
        "posx": 6905.27294921875,
        "posy": 6806.14111328125,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "107440544",
        "mapid": "1",
        "bftitle": "Nikšić",
        "sector": "0",
        "posx": 9068.19140625,
        "posy": 8413.212890625,
        "gamemap": "201"
    },
    {
        "id": "107830151",
        "mapid": "1",
        "bftitle": "Shostka",
        "sector": "0",
        "posx": 13325.990234375,
        "posy": 4441.0009765625,
        "gamemap": "201"
    },
    {
        "id": "107888739",
        "mapid": "1",
        "bftitle": "Tonshalovo",
        "sector": "0",
        "posx": 14638.51953125,
        "posy": 603.1107177734375,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "108256073",
        "mapid": "1",
        "bftitle": "Balaklava",
        "sector": "0",
        "posx": 13394.3896484375,
        "posy": 7735.9091796875,
        "gamemap": "205",
        "rotation": 3
    },
    {
        "id": "108401515",
        "mapid": "1",
        "bftitle": "Rumilly",
        "sector": "0",
        "posx": 5255.18994140625,
        "posy": 7135.43310546875,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "108441160",
        "mapid": "1",
        "bftitle": "Zachepylivka",
        "sector": "0",
        "posx": 13844.7099609375,
        "posy": 5680.93310546875,
        "gamemap": "70439"
    },
    {
        "id": "108529289",
        "mapid": "1",
        "bftitle": "Horaymivka",
        "sector": "0",
        "posx": 11106.5703125,
        "posy": 4827.14990234375,
        "gamemap": "203"
    },
    {
        "id": "108543630",
        "mapid": "1",
        "bftitle": "Ogulin",
        "sector": "0",
        "posx": 7978.9677734375,
        "posy": 7389.5498046875,
        "gamemap": "70439"
    },
    {
        "id": "108756779",
        "mapid": "1",
        "bftitle": "Almyros",
        "sector": "0",
        "posx": 10186.4697265625,
        "posy": 9817.892578125,
        "gamemap": "70439"
    },
    {
        "id": "108950613",
        "mapid": "1",
        "bftitle": "Crimmitschau",
        "sector": "0",
        "posx": 7147.02099609375,
        "posy": 4935.56689453125,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "109075332",
        "mapid": "1",
        "bftitle": "Hochdonn",
        "sector": "0",
        "posx": 6234.1572265625,
        "posy": 3380.73388671875,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "109455241",
        "mapid": "1",
        "bftitle": "Ozërnyy",
        "sector": "0",
        "posx": 13016.1201171875,
        "posy": 2584.9208984375,
        "gamemap": "201"
    },
    {
        "id": "109568008",
        "mapid": "1",
        "bftitle": "Draguignan",
        "sector": "0",
        "posx": 5410.5908203125,
        "posy": 8105.576171875,
        "gamemap": "70439"
    },
    {
        "id": "109688008",
        "mapid": "1",
        "bftitle": "Gränna",
        "sector": "0",
        "posx": 7755.62109375,
        "posy": 1270.8499755859375,
        "gamemap": "70439"
    },
    {
        "id": "109905657",
        "mapid": "1",
        "bftitle": "Zalineynyy",
        "sector": "0",
        "posx": 12608.9296875,
        "posy": 4156.7822265625,
        "gamemap": "203"
    },
    {
        "id": "109939869",
        "mapid": "1",
        "bftitle": "Westhill",
        "sector": "0",
        "posx": 2834.136962890625,
        "posy": 1748.2860107421875,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "110169568",
        "mapid": "1",
        "bftitle": "Norrtälje",
        "sector": "0",
        "posx": 8997.9873046875,
        "posy": 275.77569580078125,
        "gamemap": "70439"
    },
    {
        "id": "110214442",
        "mapid": "1",
        "bftitle": "Ovruch",
        "sector": "0",
        "posx": 11958.16015625,
        "posy": 4696.8310546875,
        "gamemap": "70439"
    },
    {
        "id": "110241715",
        "mapid": "1",
        "bftitle": "Taulov",
        "sector": "0",
        "posx": 6318.58203125,
        "posy": 2596.179931640625,
        "gamemap": "70439"
    },
    {
        "id": "110305618",
        "mapid": "1",
        "bftitle": "Joniškis",
        "sector": "0",
        "posx": 10437.33984375,
        "posy": 2237.2529296875,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "110541249",
        "mapid": "1",
        "bftitle": "Sørumsand",
        "sector": "0",
        "posx": 6809.73583984375,
        "posy": 142.2104034423828,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "110825549",
        "mapid": "1",
        "bftitle": "Morlaix",
        "sector": "0",
        "posx": 2427.924072265625,
        "posy": 5949.9091796875,
        "gamemap": "70439"
    },
    {
        "id": "111217770",
        "mapid": "1",
        "bftitle": "Rue",
        "sector": "0",
        "posx": 4020.259033203125,
        "posy": 5184.76806640625,
        "gamemap": "70439"
    },
    {
        "id": "111506364",
        "mapid": "1",
        "bftitle": "Røldal",
        "sector": "0",
        "posx": 5512.69091796875,
        "posy": 231.51409912109375,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "111590262",
        "mapid": "1",
        "bftitle": "Ruma",
        "sector": "0",
        "posx": 9325.4873046875,
        "posy": 7497.54296875,
        "gamemap": "70439"
    },
    {
        "id": "111653688",
        "mapid": "1",
        "bftitle": "Hvidovre",
        "sector": "0",
        "posx": 7153.81787109375,
        "posy": 2507.156982421875,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "112037003",
        "mapid": "1",
        "bftitle": "Belyy",
        "sector": "0",
        "posx": 13171.240234375,
        "posy": 2448.681884765625,
        "gamemap": "70439"
    },
    {
        "id": "112741325",
        "mapid": "1",
        "bftitle": "Benoit Village",
        "sector": "0",
        "posx": 15848.099609375,
        "posy": 15867.0302734375,
        "gamemap": "70439"
    },
    {
        "id": "112790375",
        "mapid": "1",
        "bftitle": "Sandvik",
        "sector": "0",
        "posx": 8455.03515625,
        "posy": 1795.0179443359375,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "112937238",
        "mapid": "1",
        "bftitle": "Sissonne",
        "sector": "0",
        "posx": 4656.37890625,
        "posy": 5509.875,
        "gamemap": "203"
    },
    {
        "id": "113634262",
        "mapid": "1",
        "bftitle": "Tovarkovo",
        "sector": "0",
        "posx": 14049.66015625,
        "posy": 3051.718994140625,
        "gamemap": "70439"
    },
    {
        "id": "113644716",
        "mapid": "1",
        "bftitle": "Lísta",
        "sector": "0",
        "posx": 9513.333984375,
        "posy": 9603.017578125,
        "gamemap": "204"
    },
    {
        "id": "113880332",
        "mapid": "1",
        "bftitle": "Trieste",
        "sector": "0",
        "posx": 7557.35791015625,
        "posy": 7230.833984375,
        "gamemap": "70439"
    },
    {
        "id": "114027936",
        "mapid": "1",
        "bftitle": "Nidzica",
        "sector": "0",
        "posx": 9502.908203125,
        "posy": 3712.847900390625,
        "gamemap": "70439"
    },
    {
        "id": "114133324",
        "mapid": "1",
        "bftitle": "Castell",
        "sector": "0",
        "posx": 6566.64306640625,
        "posy": 5434.55615234375,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "114233667",
        "mapid": "1",
        "bftitle": "Shumyachi",
        "sector": "0",
        "posx": 13019.48046875,
        "posy": 3465.14208984375,
        "gamemap": "203",
        "rotation": 3
    },
    {
        "id": "114464520",
        "mapid": "1",
        "bftitle": "Türi",
        "sector": "0",
        "posx": 10970.01953125,
        "posy": 824.4973754882812,
        "gamemap": "70439"
    },
    {
        "id": "114636896",
        "mapid": "1",
        "bftitle": "Velletri",
        "sector": "0",
        "posx": 7261.51123046875,
        "posy": 8853.8134765625,
        "gamemap": "70439"
    },
    {
        "id": "114875259",
        "mapid": "1",
        "bftitle": "Arbroath",
        "sector": "0",
        "posx": 2742.361083984375,
        "posy": 2052.341064453125,
        "gamemap": "70439"
    },
    {
        "id": "115182994",
        "mapid": "1",
        "bftitle": "Guipry",
        "sector": "0",
        "posx": 2975.028076171875,
        "posy": 6290.33203125,
        "gamemap": "201"
    },
    {
        "id": "115523634",
        "mapid": "1",
        "bftitle": "Lucerne",
        "sector": "0",
        "posx": 5941.51416015625,
        "posy": 6629.56201171875,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "115875624",
        "mapid": "1",
        "bftitle": "Ariano Irpino",
        "sector": "0",
        "posx": 7943.10205078125,
        "posy": 9053.6240234375,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "116399309",
        "mapid": "1",
        "bftitle": "Thessaloniki",
        "sector": "0",
        "posx": 10236.7197265625,
        "posy": 9255.404296875,
        "gamemap": "70439"
    },
    {
        "id": "116431586",
        "mapid": "1",
        "bftitle": "Novozybkov",
        "sector": "0",
        "posx": 12873.8896484375,
        "posy": 4115.0791015625,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "116947736",
        "mapid": "1",
        "bftitle": "Ivenets",
        "sector": "0",
        "posx": 11354.2197265625,
        "posy": 3451.089111328125,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "117052082",
        "mapid": "1",
        "bftitle": "Nogent-le-Rotrou",
        "sector": "0",
        "posx": 3759.300048828125,
        "posy": 6073.72314453125,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "117471183",
        "mapid": "1",
        "bftitle": "Dubrovka",
        "sector": "0",
        "posx": 12556.4599609375,
        "posy": 911.2796020507812,
        "gamemap": "70439"
    },
    {
        "id": "117621374",
        "mapid": "1",
        "bftitle": "Tvedestrand",
        "sector": "0",
        "posx": 6133.09619140625,
        "posy": 930.5651245117188,
        "gamemap": "201"
    },
    {
        "id": "118144824",
        "mapid": "1",
        "bftitle": "Iesi",
        "sector": "0",
        "posx": 7397.1259765625,
        "posy": 8110.4267578125,
        "gamemap": "70439"
    },
    {
        "id": "118174776",
        "mapid": "1",
        "bftitle": "Rudnik nad Sanem",
        "sector": "0",
        "posx": 10036.7197265625,
        "posy": 5110.046875,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "118349938",
        "mapid": "1",
        "bftitle": "Meiri",
        "sector": "0",
        "posx": 9819.376953125,
        "posy": 2176.760986328125,
        "gamemap": "203"
    },
    {
        "id": "118453124",
        "mapid": "1",
        "bftitle": "Izmir",
        "sector": "0",
        "posx": 11468.8701171875,
        "posy": 10106.6796875,
        "gamemap": "70439"
    },
    {
        "id": "118456885",
        "mapid": "1",
        "bftitle": "Saint-Mandrier-sur-Mer",
        "sector": "0",
        "posx": 5252.98486328125,
        "posy": 8290.291015625,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "118717650",
        "mapid": "1",
        "bftitle": "Seredyna-Buda",
        "sector": "0",
        "posx": 13492.0703125,
        "posy": 4284.56201171875,
        "gamemap": "70439"
    },
    {
        "id": "118755137",
        "mapid": "1",
        "bftitle": "Norden",
        "sector": "0",
        "posx": 5663.19677734375,
        "posy": 3614.080078125,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "118972240",
        "mapid": "1",
        "bftitle": "Mountain Village Baume",
        "sector": "0",
        "posx": 15807.91015625,
        "posy": 15798.650390625,
        "gamemap": "201"
    },
    {
        "id": "119052520",
        "mapid": "1",
        "bftitle": "Krasnogorsk",
        "sector": "0",
        "posx": 14457.5703125,
        "posy": 2459.112060546875,
        "gamemap": "205"
    },
    {
        "id": "119053345",
        "mapid": "1",
        "bftitle": "Aleksin",
        "sector": "0",
        "posx": 14380.5400390625,
        "posy": 3138.9150390625,
        "gamemap": "201"
    },
    {
        "id": "119275895",
        "mapid": "1",
        "bftitle": "Sumy",
        "sector": "0",
        "posx": 13715.990234375,
        "posy": 4886.376953125,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "119979802",
        "mapid": "1",
        "bftitle": "Asipovichy",
        "sector": "0",
        "posx": 11909.8203125,
        "posy": 3742.218994140625,
        "gamemap": "201"
    },
    {
        "id": "120621325",
        "mapid": "1",
        "bftitle": "Bezhanitsy",
        "sector": "0",
        "posx": 12276.830078125,
        "posy": 1842.23095703125,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "120778065",
        "mapid": "1",
        "bftitle": "Kalynivka",
        "sector": "0",
        "posx": 11876.83984375,
        "posy": 5563.15380859375,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "121115115",
        "mapid": "1",
        "bftitle": "Dusetos",
        "sector": "0",
        "posx": 11092.400390625,
        "posy": 2496.049072265625,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "121246091",
        "mapid": "1",
        "bftitle": "Richelieu",
        "sector": "0",
        "posx": 3610.01708984375,
        "posy": 6644.828125,
        "gamemap": "70439"
    },
    {
        "id": "121619971",
        "mapid": "1",
        "bftitle": "Gorzów Wielkopolski",
        "sector": "0",
        "posx": 7979.01611328125,
        "posy": 4019.154052734375,
        "gamemap": "70439"
    },
    {
        "id": "122177995",
        "mapid": "1",
        "bftitle": "Pont-à-Mousson",
        "sector": "0",
        "posx": 5291.06201171875,
        "posy": 5809.7490234375,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "122234957",
        "mapid": "1",
        "bftitle": "Pyrzyce",
        "sector": "0",
        "posx": 7880.4638671875,
        "posy": 3818.594970703125,
        "gamemap": "70439"
    },
    {
        "id": "122286830",
        "mapid": "1",
        "bftitle": "Ferizaj",
        "sector": "0",
        "posx": 9716.244140625,
        "posy": 8574.578125,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "122379398",
        "mapid": "1",
        "bftitle": "Kastrup Lufthavn",
        "sector": "0",
        "posx": 7204.22900390625,
        "posy": 2607.3720703125,
        "gamemap": "205",
        "rotation": 3
    },
    {
        "id": "122386343",
        "mapid": "1",
        "bftitle": "Gjirokastër",
        "sector": "0",
        "posx": 9418.3115234375,
        "posy": 9475.373046875,
        "gamemap": "203"
    },
    {
        "id": "122784750",
        "mapid": "1",
        "bftitle": "Hörby",
        "sector": "0",
        "posx": 7519.43896484375,
        "posy": 2442.27490234375,
        "gamemap": "70439"
    },
    {
        "id": "122859949",
        "mapid": "1",
        "bftitle": "Świebodzin",
        "sector": "0",
        "posx": 8068.35498046875,
        "posy": 4256.380859375,
        "gamemap": "203"
    },
    {
        "id": "123151360",
        "mapid": "1",
        "bftitle": "Cordenons",
        "sector": "0",
        "posx": 7237.8720703125,
        "posy": 7086.68212890625,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "123287957",
        "mapid": "1",
        "bftitle": "L'vovskiy",
        "sector": "0",
        "posx": 14514.2001953125,
        "posy": 2721.027099609375,
        "gamemap": "203"
    },
    {
        "id": "123565844",
        "mapid": "1",
        "bftitle": "Annonay",
        "sector": "0",
        "posx": 4884.15576171875,
        "posy": 7400.626953125,
        "gamemap": "201"
    },
    {
        "id": "123698484",
        "mapid": "1",
        "bftitle": "Byaroza",
        "sector": "0",
        "posx": 10836.9697265625,
        "posy": 4119.05908203125,
        "gamemap": "70439"
    },
    {
        "id": "123796373",
        "mapid": "1",
        "bftitle": "Ritterhude",
        "sector": "0",
        "posx": 6075.65185546875,
        "posy": 3800.530029296875,
        "gamemap": "70439"
    },
    {
        "id": "124138231",
        "mapid": "1",
        "bftitle": "Bormio",
        "sector": "0",
        "posx": 6554.7919921875,
        "posy": 6880.3369140625,
        "gamemap": "201"
    },
    {
        "id": "124514517",
        "mapid": "1",
        "bftitle": "Pulkovo",
        "sector": "0",
        "posx": 12389.0595703125,
        "posy": 259.539306640625,
        "gamemap": "70439"
    },
    {
        "id": "124777293",
        "mapid": "1",
        "bftitle": "Nybro",
        "sector": "0",
        "posx": 8177.865234375,
        "posy": 1967.5570068359375,
        "gamemap": "70439"
    },
    {
        "id": "125689464",
        "mapid": "1",
        "bftitle": "Leningradskaya",
        "sector": "0",
        "posx": 15060.6904296875,
        "posy": 6942.73095703125,
        "gamemap": "70439"
    },
    {
        "id": "125940783",
        "mapid": "1",
        "bftitle": "Winkleigh Airfield",
        "sector": "0",
        "posx": 2391.85693359375,
        "posy": 4917.1650390625,
        "gamemap": "205",
        "rotation": 3
    },
    {
        "id": "126293755",
        "mapid": "1",
        "bftitle": "Wusterhausen Fabrik",
        "sector": "0",
        "posx": 7495.1708984375,
        "posy": 4229.82080078125,
        "gamemap": "203"
    },
    {
        "id": "126536678",
        "mapid": "1",
        "bftitle": "Melitopol",
        "sector": "0",
        "posx": 13881.6201171875,
        "posy": 6716.14599609375,
        "gamemap": "70439"
    },
    {
        "id": "126718271",
        "mapid": "1",
        "bftitle": "Étampes",
        "sector": "0",
        "posx": 4145.251953125,
        "posy": 6021.8740234375,
        "gamemap": "70439"
    },
    {
        "id": "126769850",
        "mapid": "1",
        "bftitle": "Yeovil Airfield",
        "sector": "0",
        "posx": 2819.864013671875,
        "posy": 4886.89404296875,
        "gamemap": "204"
    },
    {
        "id": "127005292",
        "mapid": "1",
        "bftitle": "Vannes",
        "sector": "0",
        "posx": 2724.489990234375,
        "posy": 6394.85205078125,
        "gamemap": "70439"
    },
    {
        "id": "127034018",
        "mapid": "1",
        "bftitle": "Montpellier",
        "sector": "0",
        "posx": 4651.55322265625,
        "posy": 8073.962890625,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "127513180",
        "mapid": "1",
        "bftitle": "Razgrad",
        "sector": "0",
        "posx": 11287.8203125,
        "posy": 8105.576171875,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "127551832",
        "mapid": "1",
        "bftitle": "Warka",
        "sector": "0",
        "posx": 9726.689453125,
        "posy": 4478.56689453125,
        "gamemap": "203"
    },
    {
        "id": "127914993",
        "mapid": "1",
        "bftitle": "Brody",
        "sector": "0",
        "posx": 10887.2900390625,
        "posy": 5273.34619140625,
        "gamemap": "70439"
    },
    {
        "id": "128035763",
        "mapid": "1",
        "bftitle": "Steyr",
        "sector": "0",
        "posx": 7742.31396484375,
        "posy": 6194.99609375,
        "gamemap": "203",
        "rotation": 3
    },
    {
        "id": "128046361",
        "mapid": "1",
        "bftitle": "Fontenay-le-Comte",
        "sector": "0",
        "posx": 3275.636962890625,
        "posy": 6880.55419921875,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "128065258",
        "mapid": "1",
        "bftitle": "Ostashkov",
        "sector": "0",
        "posx": 13219.7900390625,
        "posy": 1749.948974609375,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "128249159",
        "mapid": "1",
        "bftitle": "Strakonice",
        "sector": "0",
        "posx": 7590.208984375,
        "posy": 5650.39306640625,
        "gamemap": "201"
    },
    {
        "id": "128463093",
        "mapid": "1",
        "bftitle": "Halesworth Airfield",
        "sector": "0",
        "posx": 3955.56689453125,
        "posy": 4208.64501953125,
        "gamemap": "204",
        "rotation": 2
    },
    {
        "id": "128565187",
        "mapid": "1",
        "bftitle": "Knockando",
        "sector": "0",
        "posx": 2553.839111328125,
        "posy": 1584.0179443359375,
        "gamemap": "205"
    },
    {
        "id": "128803322",
        "mapid": "1",
        "bftitle": "Stirling",
        "sector": "0",
        "posx": 2361.031005859375,
        "posy": 2301.55908203125,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "129431592",
        "mapid": "1",
        "bftitle": "Timashëvsk",
        "sector": "0",
        "posx": 14931,
        "posy": 7241.93994140625,
        "gamemap": "201"
    },
    {
        "id": "129598683",
        "mapid": "1",
        "bftitle": "Carmagnola",
        "sector": "0",
        "posx": 5778.0732421875,
        "posy": 7563.60302734375,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "129690409",
        "mapid": "1",
        "bftitle": "Shpola",
        "sector": "0",
        "posx": 12717.7099609375,
        "posy": 5765.23486328125,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "129846611",
        "mapid": "1",
        "bftitle": "Rossosh'",
        "sector": "0",
        "posx": 14803.8798828125,
        "posy": 4792.84423828125,
        "gamemap": "70439"
    },
    {
        "id": "130160160",
        "mapid": "1",
        "bftitle": "Livingston Airfield",
        "sector": "0",
        "posx": 2469.0029296875,
        "posy": 2421.236083984375,
        "gamemap": "205",
        "rotation": 3
    },
    {
        "id": "130204862",
        "mapid": "1",
        "bftitle": "Korithi",
        "sector": "0",
        "posx": 9582.9169921875,
        "posy": 10295.3798828125,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "131780611",
        "mapid": "1",
        "bftitle": "Băneasa",
        "sector": "0",
        "posx": 11634.6904296875,
        "posy": 7887.43603515625,
        "gamemap": "70439"
    },
    {
        "id": "132168736",
        "mapid": "1",
        "bftitle": "Finspång",
        "sector": "0",
        "posx": 8136.89892578125,
        "posy": 883.026123046875,
        "gamemap": "201"
    },
    {
        "id": "132507921",
        "mapid": "1",
        "bftitle": "Pescara",
        "sector": "0",
        "posx": 7663.25390625,
        "posy": 8553.6884765625,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "132559335",
        "mapid": "1",
        "bftitle": "Liknes",
        "sector": "0",
        "posx": 5554.72412109375,
        "posy": 1101.5250244140625,
        "gamemap": "203",
        "rotation": 3
    },
    {
        "id": "132657968",
        "mapid": "1",
        "bftitle": "Tønder",
        "sector": "0",
        "posx": 6144.39794921875,
        "posy": 2939.18408203125,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "132741353",
        "mapid": "1",
        "bftitle": "Halych",
        "sector": "0",
        "posx": 10762.8603515625,
        "posy": 5713.4580078125,
        "gamemap": "201"
    },
    {
        "id": "132960678",
        "mapid": "1",
        "bftitle": "Doroslovo",
        "sector": "0",
        "posx": 9139.77734375,
        "posy": 7246.14306640625,
        "gamemap": "70439"
    },
    {
        "id": "133206271",
        "mapid": "1",
        "bftitle": "Lisse",
        "sector": "0",
        "posx": 4850.7958984375,
        "posy": 4250.35791015625,
        "gamemap": "70439"
    },
    {
        "id": "133268975",
        "mapid": "1",
        "bftitle": "Pančevo",
        "sector": "0",
        "posx": 9565.283203125,
        "posy": 7554.77099609375,
        "gamemap": "205"
    },
    {
        "id": "133329966",
        "mapid": "1",
        "bftitle": "Belluno",
        "sector": "0",
        "posx": 7095.076171875,
        "posy": 7017.26806640625,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "133577882",
        "mapid": "1",
        "bftitle": "Nagyatád",
        "sector": "0",
        "posx": 8603.119140625,
        "posy": 6981.93505859375,
        "gamemap": "70439"
    },
    {
        "id": "133609897",
        "mapid": "1",
        "bftitle": "Sjöbo",
        "sector": "0",
        "posx": 7532.7109375,
        "posy": 2558.18896484375,
        "gamemap": "203"
    },
    {
        "id": "134517797",
        "mapid": "1",
        "bftitle": "Söderby",
        "sector": "0",
        "posx": 11069.9599609375,
        "posy": 26.35487937927246,
        "gamemap": "204"
    },
    {
        "id": "134970787",
        "mapid": "1",
        "bftitle": "Schwerstedt",
        "sector": "0",
        "posx": 6717.48583984375,
        "posy": 4751.48095703125,
        "gamemap": "203",
        "rotation": 3
    },
    {
        "id": "135024024",
        "mapid": "1",
        "bftitle": "Kotovs’k",
        "sector": "0",
        "posx": 12171.7197265625,
        "posy": 6322.5498046875,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "135199357",
        "mapid": "1",
        "bftitle": "Parádsasvár",
        "sector": "0",
        "posx": 9370.884765625,
        "posy": 6252.38623046875,
        "gamemap": "70439"
    },
    {
        "id": "135420424",
        "mapid": "1",
        "bftitle": "Meliorativnoye",
        "sector": "0",
        "posx": 13896.349609375,
        "posy": 5934.1611328125,
        "gamemap": "70439"
    },
    {
        "id": "135513571",
        "mapid": "1",
        "bftitle": "Slatinskaya",
        "sector": "0",
        "posx": 14150.23046875,
        "posy": 360.04901123046875,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "135930403",
        "mapid": "1",
        "bftitle": "Lynemouth",
        "sector": "0",
        "posx": 3052.027099609375,
        "posy": 2783.908935546875,
        "gamemap": "203"
    },
    {
        "id": "136223603",
        "mapid": "1",
        "bftitle": "Seredina",
        "sector": "0",
        "posx": 11591.2197265625,
        "posy": 3692.218017578125,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "136263362",
        "mapid": "1",
        "bftitle": "Blumberg",
        "sector": "0",
        "posx": 6016.376953125,
        "posy": 6284.0830078125,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "136365460",
        "mapid": "1",
        "bftitle": "Garvăn",
        "sector": "0",
        "posx": 11770.080078125,
        "posy": 7355.55810546875,
        "gamemap": "203",
        "rotation": 1
    },
    {
        "id": "136390130",
        "mapid": "1",
        "bftitle": "Tyruliai",
        "sector": "0",
        "posx": 10358.080078125,
        "posy": 2483.697021484375,
        "gamemap": "70439"
    },
    {
        "id": "136925727",
        "mapid": "1",
        "bftitle": "Annecy",
        "sector": "0",
        "posx": 5307.99609375,
        "posy": 7122.1728515625,
        "gamemap": "201"
    },
    {
        "id": "137031023",
        "mapid": "1",
        "bftitle": "Hinterberg",
        "sector": "0",
        "posx": 7990.1240234375,
        "posy": 6418.82080078125,
        "gamemap": "201"
    },
    {
        "id": "137502150",
        "mapid": "1",
        "bftitle": "Ryl'sk",
        "sector": "0",
        "posx": 13681.3701171875,
        "posy": 4582.72802734375,
        "gamemap": "70439"
    },
    {
        "id": "137578043",
        "mapid": "1",
        "bftitle": "Sachseln",
        "sector": "0",
        "posx": 5928.48291015625,
        "posy": 6708.26220703125,
        "gamemap": "203",
        "rotation": 1
    },
    {
        "id": "138920229",
        "mapid": "1",
        "bftitle": "Thouars",
        "sector": "0",
        "posx": 3451.98193359375,
        "posy": 6661.2177734375,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "139168836",
        "mapid": "1",
        "bftitle": "Poreč",
        "sector": "0",
        "posx": 7499.7841796875,
        "posy": 7406.0791015625,
        "gamemap": "70439"
    },
    {
        "id": "139231665",
        "mapid": "1",
        "bftitle": "Pilisvörösvár",
        "sector": "0",
        "posx": 9041.1669921875,
        "posy": 6376.4658203125,
        "gamemap": "201"
    },
    {
        "id": "139424336",
        "mapid": "1",
        "bftitle": "Kornyn",
        "sector": "0",
        "posx": 12172.8203125,
        "posy": 5269.94677734375,
        "gamemap": "201"
    },
    {
        "id": "139684136",
        "mapid": "1",
        "bftitle": "Boromlya",
        "sector": "0",
        "posx": 13765.8603515625,
        "posy": 5027.91015625,
        "gamemap": "70439"
    },
    {
        "id": "139906501",
        "mapid": "1",
        "bftitle": "Leoben",
        "sector": "0",
        "posx": 7938.7587890625,
        "posy": 6487.2919921875,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "140039414",
        "mapid": "1",
        "bftitle": "Bugeat",
        "sector": "0",
        "posx": 4080.431884765625,
        "posy": 7250.119140625,
        "gamemap": "201"
    },
    {
        "id": "140065266",
        "mapid": "1",
        "bftitle": "Dundee",
        "sector": "0",
        "posx": 2628.764892578125,
        "posy": 2088.427001953125,
        "gamemap": "70439"
    },
    {
        "id": "140369354",
        "mapid": "1",
        "bftitle": "Fjerritslev",
        "sector": "0",
        "posx": 6231.28076171875,
        "posy": 1785.4649658203125,
        "gamemap": "70439"
    },
    {
        "id": "140581583",
        "mapid": "1",
        "bftitle": "Flechtingen",
        "sector": "0",
        "posx": 6810.30810546875,
        "posy": 4216.169921875,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "141148087",
        "mapid": "1",
        "bftitle": "Padinska Skela",
        "sector": "0",
        "posx": 9502.3212890625,
        "posy": 7524.72998046875,
        "gamemap": "203"
    },
    {
        "id": "141400238",
        "mapid": "1",
        "bftitle": "Goworowo",
        "sector": "0",
        "posx": 9502.619140625,
        "posy": 4167.1162109375,
        "gamemap": "203",
        "rotation": 2
    },
    {
        "id": "141780180",
        "mapid": "1",
        "bftitle": "Morozovo",
        "sector": "0",
        "posx": 12918.0400390625,
        "posy": 2493.3740234375,
        "gamemap": "203",
        "rotation": 1
    },
    {
        "id": "141851759",
        "mapid": "1",
        "bftitle": "Káto Mazaráki",
        "sector": "0",
        "posx": 9861.115234375,
        "posy": 10240.5,
        "gamemap": "205"
    },
    {
        "id": "141860618",
        "mapid": "1",
        "bftitle": "Sombor",
        "sector": "0",
        "posx": 9117.3662109375,
        "posy": 7175.4912109375,
        "gamemap": "203"
    },
    {
        "id": "141947029",
        "mapid": "1",
        "bftitle": "Modane",
        "sector": "0",
        "posx": 5469.216796875,
        "posy": 7417.26416015625,
        "gamemap": "201"
    },
    {
        "id": "142235827",
        "mapid": "1",
        "bftitle": "Hawkinge",
        "sector": "0",
        "posx": 3842.9169921875,
        "posy": 4821.97705078125,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "142521704",
        "mapid": "1",
        "bftitle": "Olfen Flugplatz",
        "sector": "0",
        "posx": 5678.0029296875,
        "posy": 4515.01123046875,
        "gamemap": "204"
    },
    {
        "id": "143266846",
        "mapid": "1",
        "bftitle": "Cavaillon",
        "sector": "0",
        "posx": 4991.18017578125,
        "posy": 7983.9658203125,
        "gamemap": "203"
    },
    {
        "id": "143574911",
        "mapid": "1",
        "bftitle": "Airfield 'Vajra'",
        "sector": "0",
        "posx": 16102.740234375,
        "posy": 15882.3701171875,
        "gamemap": "204"
    },
    {
        "id": "143695225",
        "mapid": "1",
        "bftitle": "Dubrovnik",
        "sector": "0",
        "posx": 8818.3583984375,
        "posy": 8463.4453125,
        "gamemap": "70439"
    },
    {
        "id": "143851825",
        "mapid": "1",
        "bftitle": "Vimmerby",
        "sector": "0",
        "posx": 8162.625,
        "posy": 1465.406982421875,
        "gamemap": "70439"
    },
    {
        "id": "144221374",
        "mapid": "1",
        "bftitle": "Arvieu",
        "sector": "0",
        "posx": 4295.0078125,
        "posy": 7835.86279296875,
        "gamemap": "201"
    },
    {
        "id": "144681779",
        "mapid": "1",
        "bftitle": "Espalion",
        "sector": "0",
        "posx": 4324.8388671875,
        "posy": 7699.48681640625,
        "gamemap": "201"
    },
    {
        "id": "144687816",
        "mapid": "1",
        "bftitle": "Krechety",
        "sector": "0",
        "posx": 11301.7001953125,
        "posy": 3515.5009765625,
        "gamemap": "203",
        "rotation": 3
    },
    {
        "id": "144734621",
        "mapid": "1",
        "bftitle": "Halmstad",
        "sector": "0",
        "posx": 7283.7109375,
        "posy": 2005.2850341796875,
        "gamemap": "70439"
    },
    {
        "id": "144736658",
        "mapid": "1",
        "bftitle": "Bucharest",
        "sector": "0",
        "posx": 11167.51953125,
        "posy": 7736.77099609375,
        "gamemap": "70439"
    },
    {
        "id": "144832359",
        "mapid": "1",
        "bftitle": "Valdemarsvik",
        "sector": "0",
        "posx": 8381.6220703125,
        "posy": 1166.6689453125,
        "gamemap": "70439"
    },
    {
        "id": "144912287",
        "mapid": "1",
        "bftitle": "Reghin-Sat",
        "sector": "0",
        "posx": 10760.1904296875,
        "posy": 6744.43603515625,
        "gamemap": "203"
    },
    {
        "id": "145014233",
        "mapid": "1",
        "bftitle": "Le Caylar",
        "sector": "0",
        "posx": 4487.81494140625,
        "posy": 7971.1708984375,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "145045937",
        "mapid": "1",
        "bftitle": "Stockport",
        "sector": "0",
        "posx": 2882.568115234375,
        "posy": 3688.4609375,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "145449850",
        "mapid": "1",
        "bftitle": "Cobadin",
        "sector": "0",
        "posx": 11786.1396484375,
        "posy": 7880.5869140625,
        "gamemap": "70439"
    },
    {
        "id": "145568189",
        "mapid": "1",
        "bftitle": "Gorgova",
        "sector": "0",
        "posx": 12066.9404296875,
        "posy": 7424.421875,
        "gamemap": "203",
        "rotation": 3
    },
    {
        "id": "146823453",
        "mapid": "1",
        "bftitle": "Bourthes",
        "sector": "0",
        "posx": 4081.89306640625,
        "posy": 5033.86376953125,
        "gamemap": "70439"
    },
    {
        "id": "146927546",
        "mapid": "1",
        "bftitle": "Skwierzyna",
        "sector": "0",
        "posx": 8060.43017578125,
        "posy": 4086.162109375,
        "gamemap": "70439"
    },
    {
        "id": "147141307",
        "mapid": "1",
        "bftitle": "Gamleby",
        "sector": "0",
        "posx": 8322.3359375,
        "posy": 1335.7659912109375,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "147392547",
        "mapid": "1",
        "bftitle": "Kirishi",
        "sector": "0",
        "posx": 12901.150390625,
        "posy": 457.1440124511719,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "147523515",
        "mapid": "1",
        "bftitle": "Uzerche",
        "sector": "0",
        "posx": 3973.465087890625,
        "posy": 7324.41015625,
        "gamemap": "201"
    },
    {
        "id": "147615691",
        "mapid": "1",
        "bftitle": "Corabia",
        "sector": "0",
        "posx": 10696.6796875,
        "posy": 8003.56494140625,
        "gamemap": "201"
    },
    {
        "id": "147761078",
        "mapid": "1",
        "bftitle": "Skinnskatteberg",
        "sector": "0",
        "posx": 8115.2021484375,
        "posy": 233.35719299316406,
        "gamemap": "201"
    },
    {
        "id": "148074920",
        "mapid": "1",
        "bftitle": "Vallentuna",
        "sector": "0",
        "posx": 8814.083984375,
        "posy": 406.4139099121094,
        "gamemap": "70439"
    },
    {
        "id": "148903105",
        "mapid": "1",
        "bftitle": "Agia Kyriaki",
        "sector": "0",
        "posx": 11317.3701171875,
        "posy": 10376.919921875,
        "gamemap": "70439"
    },
    {
        "id": "149407042",
        "mapid": "1",
        "bftitle": "Ryazan",
        "sector": "0",
        "posx": 15149.76953125,
        "posy": 3076.861083984375,
        "gamemap": "201"
    },
    {
        "id": "149455370",
        "mapid": "1",
        "bftitle": "Digne-les-Bains",
        "sector": "0",
        "posx": 5341.8017578125,
        "posy": 7876.81298828125,
        "gamemap": "201"
    },
    {
        "id": "149629135",
        "mapid": "1",
        "bftitle": "Carrara",
        "sector": "0",
        "posx": 6465.0009765625,
        "posy": 7892.619140625,
        "gamemap": "203",
        "rotation": 3
    },
    {
        "id": "150618231",
        "mapid": "1",
        "bftitle": "Lukiv",
        "sector": "0",
        "posx": 10960.669921875,
        "posy": 4825.1767578125,
        "gamemap": "70439"
    },
    {
        "id": "150861332",
        "mapid": "1",
        "bftitle": "Malaya Ol’shanka",
        "sector": "0",
        "posx": 11502.400390625,
        "posy": 3937.031982421875,
        "gamemap": "70439"
    },
    {
        "id": "151083505",
        "mapid": "1",
        "bftitle": "Kivik",
        "sector": "0",
        "posx": 7692.10888671875,
        "posy": 2530.988037109375,
        "gamemap": "70439"
    },
    {
        "id": "151259042",
        "mapid": "1",
        "bftitle": "Chomętowo",
        "sector": "0",
        "posx": 9327.66015625,
        "posy": 4103.037109375,
        "gamemap": "203",
        "rotation": 3
    },
    {
        "id": "151278910",
        "mapid": "1",
        "bftitle": "Ponyri Vtoryye",
        "sector": "0",
        "posx": 14133.5,
        "posy": 4240.73876953125,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "151385366",
        "mapid": "1",
        "bftitle": "Pereslavl'-Zalesskiy",
        "sector": "0",
        "posx": 14904.91015625,
        "posy": 1970.39404296875,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "151504134",
        "mapid": "1",
        "bftitle": "Borzna",
        "sector": "0",
        "posx": 13020.2802734375,
        "posy": 4729.85009765625,
        "gamemap": "201"
    },
    {
        "id": "151622280",
        "mapid": "1",
        "bftitle": "Karlshof",
        "sector": "0",
        "posx": 7695.2412109375,
        "posy": 4013.569091796875,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "151884267",
        "mapid": "1",
        "bftitle": "Ośno Lubuskie",
        "sector": "0",
        "posx": 7875.4580078125,
        "posy": 4156.77783203125,
        "gamemap": "203"
    },
    {
        "id": "152057386",
        "mapid": "1",
        "bftitle": "Pembroke",
        "sector": "0",
        "posx": 2078.10791015625,
        "posy": 4526.27001953125,
        "gamemap": "203",
        "rotation": 2
    },
    {
        "id": "152252778",
        "mapid": "1",
        "bftitle": "Orikum",
        "sector": "0",
        "posx": 9222.6484375,
        "posy": 9378.9619140625,
        "gamemap": "70439"
    },
    {
        "id": "152327186",
        "mapid": "1",
        "bftitle": "Linköping",
        "sector": "0",
        "posx": 8094.15576171875,
        "posy": 1049.928955078125,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "152580655",
        "mapid": "1",
        "bftitle": "Fays-Famenne",
        "sector": "0",
        "posx": 5004.7099609375,
        "posy": 5295.01708984375,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "152590108",
        "mapid": "1",
        "bftitle": "Ajka",
        "sector": "0",
        "posx": 8662.0498046875,
        "posy": 6606.662109375,
        "gamemap": "204",
        "rotation": 2
    },
    {
        "id": "152655023",
        "mapid": "1",
        "bftitle": "Dabas",
        "sector": "0",
        "posx": 9175.6064453125,
        "posy": 6570.21484375,
        "gamemap": "203",
        "rotation": 1
    },
    {
        "id": "152986717",
        "mapid": "1",
        "bftitle": "Stary Oskol",
        "sector": "0",
        "posx": 14607.5,
        "posy": 4710.02099609375,
        "gamemap": "201"
    },
    {
        "id": "153358661",
        "mapid": "1",
        "bftitle": "Otwock",
        "sector": "0",
        "posx": 9747.3203125,
        "posy": 4324.615234375,
        "gamemap": "70439"
    },
    {
        "id": "153847567",
        "mapid": "1",
        "bftitle": "Ansbach",
        "sector": "0",
        "posx": 6617.30419921875,
        "posy": 5632.92822265625,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "153899458",
        "mapid": "1",
        "bftitle": "Bibbiena",
        "sector": "0",
        "posx": 6978.26513671875,
        "posy": 8038.1240234375,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "154307813",
        "mapid": "1",
        "bftitle": "Vălenii de Munte",
        "sector": "0",
        "posx": 11146.1396484375,
        "posy": 7424.2451171875,
        "gamemap": "201"
    },
    {
        "id": "154541578",
        "mapid": "1",
        "bftitle": "Tamási",
        "sector": "0",
        "posx": 8874.39453125,
        "posy": 6809.01220703125,
        "gamemap": "70439"
    },
    {
        "id": "155136107",
        "mapid": "1",
        "bftitle": "Örsundsbro",
        "sector": "0",
        "posx": 8586.1513671875,
        "posy": 290.2218933105469,
        "gamemap": "201"
    },
    {
        "id": "155408864",
        "mapid": "1",
        "bftitle": "Sharhorod",
        "sector": "0",
        "posx": 11747.5400390625,
        "posy": 5885.755859375,
        "gamemap": "203",
        "rotation": 3
    },
    {
        "id": "155469587",
        "mapid": "1",
        "bftitle": "Airvault Aérodrome",
        "sector": "0",
        "posx": 3540.3369140625,
        "posy": 6716.48095703125,
        "gamemap": "205",
        "rotation": 3
    },
    {
        "id": "155949028",
        "mapid": "1",
        "bftitle": "Billund",
        "sector": "0",
        "posx": 6184.798828125,
        "posy": 2504.708984375,
        "gamemap": "205",
        "rotation": 2
    },
    {
        "id": "156174402",
        "mapid": "1",
        "bftitle": "Mals",
        "sector": "0",
        "posx": 6606.52294921875,
        "posy": 6785.53515625,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "156557370",
        "mapid": "1",
        "bftitle": "Lypnyazhka",
        "sector": "0",
        "posx": 12624.330078125,
        "posy": 6015.81689453125,
        "gamemap": "70439"
    },
    {
        "id": "156627388",
        "mapid": "1",
        "bftitle": "Unecha",
        "sector": "0",
        "posx": 13092.7001953125,
        "posy": 3965.884033203125,
        "gamemap": "70439"
    },
    {
        "id": "156765562",
        "mapid": "1",
        "bftitle": "Staryya Darohi",
        "sector": "0",
        "posx": 11800.8896484375,
        "posy": 3870.7060546875,
        "gamemap": "201"
    },
    {
        "id": "157175063",
        "mapid": "1",
        "bftitle": "Givors",
        "sector": "0",
        "posx": 4913.9990234375,
        "posy": 7255.77880859375,
        "gamemap": "203",
        "rotation": 1
    },
    {
        "id": "157211476",
        "mapid": "1",
        "bftitle": "Yevpatroiya",
        "sector": "0",
        "posx": 13364.1396484375,
        "posy": 7444.7958984375,
        "gamemap": "70439"
    },
    {
        "id": "157250431",
        "mapid": "1",
        "bftitle": "Sola Lufthavn",
        "sector": "0",
        "posx": 5241.490234375,
        "posy": 737.1439208984375,
        "gamemap": "204",
        "rotation": 1
    },
    {
        "id": "157341491",
        "mapid": "1",
        "bftitle": "Drahichyn",
        "sector": "0",
        "posx": 10890.0498046875,
        "posy": 4285.34423828125,
        "gamemap": "204"
    },
    {
        "id": "157475744",
        "mapid": "1",
        "bftitle": "Naxos",
        "sector": "0",
        "posx": 10968.75,
        "posy": 10614.7802734375,
        "gamemap": "205"
    },
    {
        "id": "157650320",
        "mapid": "1",
        "bftitle": "Åby",
        "sector": "0",
        "posx": 8258.82421875,
        "posy": 905.2415771484375,
        "gamemap": "201"
    },
    {
        "id": "157692842",
        "mapid": "1",
        "bftitle": "Stende",
        "sector": "0",
        "posx": 10120.1904296875,
        "posy": 1748.135009765625,
        "gamemap": "70439"
    },
    {
        "id": "158007619",
        "mapid": "1",
        "bftitle": "Mariehamn",
        "sector": "0",
        "posx": 9350.4384765625,
        "posy": 73.387939453125,
        "gamemap": "70439"
    },
    {
        "id": "158161069",
        "mapid": "1",
        "bftitle": "Dmitrov",
        "sector": "0",
        "posx": 14513.330078125,
        "posy": 2181.6259765625,
        "gamemap": "203"
    },
    {
        "id": "158305291",
        "mapid": "1",
        "bftitle": "Baryshivka",
        "sector": "0",
        "posx": 12696.3203125,
        "posy": 5147.34716796875,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "158923283",
        "mapid": "1",
        "bftitle": "Bishop's Stortford",
        "sector": "0",
        "posx": 3561.320068359375,
        "posy": 4414.10595703125,
        "gamemap": "70439"
    },
    {
        "id": "159025657",
        "mapid": "1",
        "bftitle": "Mountain Village Crissay",
        "sector": "0",
        "posx": 15725.150390625,
        "posy": 15859.7998046875,
        "gamemap": "201"
    },
    {
        "id": "159078131",
        "mapid": "1",
        "bftitle": "Charlemagne Village",
        "sector": "0",
        "posx": 15887.0400390625,
        "posy": 15803.759765625,
        "gamemap": "70439"
    },
    {
        "id": "159198243",
        "mapid": "1",
        "bftitle": "Martynovo",
        "sector": "0",
        "posx": 14652.4501953125,
        "posy": 1458.8370361328125,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "159654781",
        "mapid": "1",
        "bftitle": "Ishult",
        "sector": "0",
        "posx": 8288.1376953125,
        "posy": 1575.0570068359375,
        "gamemap": "203",
        "rotation": 3
    },
    {
        "id": "159824012",
        "mapid": "1",
        "bftitle": "Tugany",
        "sector": "0",
        "posx": 11882.2998046875,
        "posy": 574.9860229492188,
        "gamemap": "70439"
    },
    {
        "id": "159845285",
        "mapid": "1",
        "bftitle": "Rus’koivanivka",
        "sector": "0",
        "posx": 12239.91015625,
        "posy": 6919.8251953125,
        "gamemap": "203",
        "rotation": 1
    },
    {
        "id": "160279532",
        "mapid": "1",
        "bftitle": "Virovitica",
        "sector": "0",
        "posx": 8610.7421875,
        "posy": 7151.02392578125,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "160787054",
        "mapid": "1",
        "bftitle": "Rødbyhavn",
        "sector": "0",
        "posx": 6841.8408203125,
        "posy": 3053.330078125,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "160840538",
        "mapid": "1",
        "bftitle": "Prague",
        "sector": "0",
        "posx": 7737.8759765625,
        "posy": 5276.89111328125,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "161235493",
        "mapid": "1",
        "bftitle": "Częstochowa",
        "sector": "0",
        "posx": 9120.84375,
        "posy": 4944.90185546875,
        "gamemap": "70439"
    },
    {
        "id": "161268396",
        "mapid": "1",
        "bftitle": "Munster",
        "sector": "0",
        "posx": 6448.94091796875,
        "posy": 3831.114990234375,
        "gamemap": "203"
    },
    {
        "id": "161446699",
        "mapid": "1",
        "bftitle": "Mortara",
        "sector": "0",
        "posx": 6074.923828125,
        "posy": 7396.55810546875,
        "gamemap": "203",
        "rotation": 3
    },
    {
        "id": "161728118",
        "mapid": "1",
        "bftitle": "Labin",
        "sector": "0",
        "posx": 7653.9208984375,
        "posy": 7461.212890625,
        "gamemap": "203",
        "rotation": 1
    },
    {
        "id": "162310126",
        "mapid": "1",
        "bftitle": "Moranego",
        "sector": "0",
        "posx": 6183.39794921875,
        "posy": 7718.05517578125,
        "gamemap": "204",
        "rotation": 1
    },
    {
        "id": "162589890",
        "mapid": "1",
        "bftitle": "Sainte-Geneviève-sur-Argence",
        "sector": "0",
        "posx": 4323.9248046875,
        "posy": 7583.3349609375,
        "gamemap": "203",
        "rotation": 1
    },
    {
        "id": "163772292",
        "mapid": "1",
        "bftitle": "Lohbarbek",
        "sector": "0",
        "posx": 6339.4609375,
        "posy": 3421.47705078125,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "164138454",
        "mapid": "1",
        "bftitle": "Horlivka",
        "sector": "0",
        "posx": 14669.51953125,
        "posy": 6065.2451171875,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "164362328",
        "mapid": "1",
        "bftitle": "Ullerup",
        "sector": "0",
        "posx": 5990.35107421875,
        "posy": 1954.9169921875,
        "gamemap": "70439"
    },
    {
        "id": "164362624",
        "mapid": "1",
        "bftitle": "Groß Garz",
        "sector": "0",
        "posx": 6918.544921875,
        "posy": 3923.117919921875,
        "gamemap": "203",
        "rotation": 2
    },
    {
        "id": "164496205",
        "mapid": "1",
        "bftitle": "Hard",
        "sector": "0",
        "posx": 6356.0791015625,
        "posy": 6449.43994140625,
        "gamemap": "201"
    },
    {
        "id": "164738188",
        "mapid": "1",
        "bftitle": "Brest Aérodrome",
        "sector": "0",
        "posx": 2247.01904296875,
        "posy": 6032.3388671875,
        "gamemap": "205"
    },
    {
        "id": "165040758",
        "mapid": "1",
        "bftitle": "Limoux",
        "sector": "0",
        "posx": 4166.27783203125,
        "posy": 8299.63671875,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "165089826",
        "mapid": "1",
        "bftitle": "Gières",
        "sector": "0",
        "posx": 5232.0908203125,
        "posy": 7428.173828125,
        "gamemap": "203",
        "rotation": 3
    },
    {
        "id": "165908697",
        "mapid": "1",
        "bftitle": "Bakhchisaray",
        "sector": "0",
        "posx": 13439.7197265625,
        "posy": 7602.8701171875,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "166051546",
        "mapid": "1",
        "bftitle": "Burshtyn",
        "sector": "0",
        "posx": 10734.1298828125,
        "posy": 5651.6328125,
        "gamemap": "70439"
    },
    {
        "id": "166272614",
        "mapid": "1",
        "bftitle": "Berezivka",
        "sector": "0",
        "posx": 12574.990234375,
        "posy": 6562.2421875,
        "gamemap": "70439"
    },
    {
        "id": "166367346",
        "mapid": "1",
        "bftitle": "Warmsen",
        "sector": "0",
        "posx": 6109.06396484375,
        "posy": 4155.1572265625,
        "gamemap": "203"
    },
    {
        "id": "166574730",
        "mapid": "1",
        "bftitle": "Wigan",
        "sector": "0",
        "posx": 2748.006103515625,
        "posy": 3627.18701171875,
        "gamemap": "70439"
    },
    {
        "id": "167295333",
        "mapid": "1",
        "bftitle": "Carmarthen",
        "sector": "0",
        "posx": 2252.037109375,
        "posy": 4446.34716796875,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "167348523",
        "mapid": "1",
        "bftitle": "Findhorn",
        "sector": "0",
        "posx": 2441.824951171875,
        "posy": 1496.5560302734375,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "167435123",
        "mapid": "1",
        "bftitle": "Bolgrad",
        "sector": "0",
        "posx": 13788.6796875,
        "posy": 6947.13916015625,
        "gamemap": "204",
        "rotation": 2
    },
    {
        "id": "167557042",
        "mapid": "1",
        "bftitle": "Skarżysko-Kamienna",
        "sector": "0",
        "posx": 9633.095703125,
        "posy": 4796.5048828125,
        "gamemap": "70439"
    },
    {
        "id": "167684396",
        "mapid": "1",
        "bftitle": "Flateby",
        "sector": "0",
        "posx": 6784.421875,
        "posy": 233.8096923828125,
        "gamemap": "201"
    },
    {
        "id": "167712854",
        "mapid": "1",
        "bftitle": "Celje",
        "sector": "0",
        "posx": 7988.2978515625,
        "posy": 6981.3779296875,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "168102805",
        "mapid": "1",
        "bftitle": "Thebes",
        "sector": "0",
        "posx": 10350.4599609375,
        "posy": 10142.400390625,
        "gamemap": "70439"
    },
    {
        "id": "168144472",
        "mapid": "1",
        "bftitle": "Kossa Flugplatz",
        "sector": "0",
        "posx": 7232.47509765625,
        "posy": 4558.22119140625,
        "gamemap": "204"
    },
    {
        "id": "168216722",
        "mapid": "1",
        "bftitle": "Kolašin",
        "sector": "0",
        "posx": 9235.87890625,
        "posy": 8393.423828125,
        "gamemap": "201"
    },
    {
        "id": "168267842",
        "mapid": "1",
        "bftitle": "Kingisepp",
        "sector": "0",
        "posx": 11902.4404296875,
        "posy": 499.95831298828125,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "168718573",
        "mapid": "1",
        "bftitle": "Sheksna",
        "sector": "0",
        "posx": 14803.6103515625,
        "posy": 594.3800048828125,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "168826200",
        "mapid": "1",
        "bftitle": "Horsens",
        "sector": "0",
        "posx": 6417.93408203125,
        "posy": 2431.958984375,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "168935065",
        "mapid": "1",
        "bftitle": "Besten",
        "sector": "0",
        "posx": 5535.41015625,
        "posy": 4543.72607421875,
        "gamemap": "203",
        "rotation": 2
    },
    {
        "id": "169137697",
        "mapid": "1",
        "bftitle": "Tende",
        "sector": "0",
        "posx": 5740.8701171875,
        "posy": 7879.60888671875,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "169413926",
        "mapid": "1",
        "bftitle": "Beaugency",
        "sector": "0",
        "posx": 3991.9609375,
        "posy": 6310.62890625,
        "gamemap": "70439"
    },
    {
        "id": "169691073",
        "mapid": "1",
        "bftitle": "Briceni",
        "sector": "0",
        "posx": 11635.75,
        "posy": 6055.712890625,
        "gamemap": "203"
    },
    {
        "id": "169935738",
        "mapid": "1",
        "bftitle": "Krivichi",
        "sector": "0",
        "posx": 11514.099609375,
        "posy": 3032.805908203125,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "170118328",
        "mapid": "1",
        "bftitle": "Orosháza",
        "sector": "0",
        "posx": 9573.0185546875,
        "posy": 6837.65478515625,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "171080552",
        "mapid": "1",
        "bftitle": "Triebes",
        "sector": "0",
        "posx": 7038.55517578125,
        "posy": 4996.94580078125,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "171201126",
        "mapid": "1",
        "bftitle": "Yasinya",
        "sector": "0",
        "posx": 10655.759765625,
        "posy": 6090.27197265625,
        "gamemap": "201"
    },
    {
        "id": "171261791",
        "mapid": "1",
        "bftitle": "Schwäbisch Hall",
        "sector": "0",
        "posx": 6369.8291015625,
        "posy": 5718.203125,
        "gamemap": "201"
    },
    {
        "id": "171288089",
        "mapid": "1",
        "bftitle": "Écueillé",
        "sector": "0",
        "posx": 3909.77490234375,
        "posy": 6614.18212890625,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "171699222",
        "mapid": "1",
        "bftitle": "Fynshav",
        "sector": "0",
        "posx": 6414.0458984375,
        "posy": 2911.5458984375,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "171952858",
        "mapid": "1",
        "bftitle": "Velsen",
        "sector": "0",
        "posx": 4869.64990234375,
        "posy": 4135.4921875,
        "gamemap": "70439"
    },
    {
        "id": "172975354",
        "mapid": "1",
        "bftitle": "Feuchtwangen",
        "sector": "0",
        "posx": 6439.89599609375,
        "posy": 5610.9150390625,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "173592833",
        "mapid": "1",
        "bftitle": "Tëmkino",
        "sector": "0",
        "posx": 13778.599609375,
        "posy": 2829.458984375,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "173611860",
        "mapid": "1",
        "bftitle": "Bertholène",
        "sector": "0",
        "posx": 4330,
        "posy": 7752.11083984375,
        "gamemap": "203",
        "rotation": 2
    },
    {
        "id": "173667796",
        "mapid": "1",
        "bftitle": "Ineu",
        "sector": "0",
        "posx": 9917.095703125,
        "posy": 6894.671875,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "174847351",
        "mapid": "1",
        "bftitle": "Wieluń",
        "sector": "0",
        "posx": 8958.3203125,
        "posy": 4745.72900390625,
        "gamemap": "70439"
    },
    {
        "id": "175040707",
        "mapid": "1",
        "bftitle": "Timişoara",
        "sector": "0",
        "posx": 9736.8896484375,
        "posy": 7184.14306640625,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "176056349",
        "mapid": "1",
        "bftitle": "Bicske",
        "sector": "0",
        "posx": 8980.1279296875,
        "posy": 6440.2978515625,
        "gamemap": "201"
    },
    {
        "id": "176489474",
        "mapid": "1",
        "bftitle": "Madona",
        "sector": "0",
        "posx": 11199.98046875,
        "posy": 1908.967041015625,
        "gamemap": "204",
        "rotation": 2
    },
    {
        "id": "176705828",
        "mapid": "1",
        "bftitle": "Villefranche-sur-Saône",
        "sector": "0",
        "posx": 4897.6162109375,
        "posy": 7086.7958984375,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "176952990",
        "mapid": "1",
        "bftitle": "Combs-la-Ville",
        "sector": "0",
        "posx": 4283.26806640625,
        "posy": 5920.16015625,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "176996752",
        "mapid": "1",
        "bftitle": "Bretstein",
        "sector": "0",
        "posx": 7740.9638671875,
        "posy": 6506.10205078125,
        "gamemap": "201"
    },
    {
        "id": "177821039",
        "mapid": "1",
        "bftitle": "Piltene",
        "sector": "0",
        "posx": 9868.412109375,
        "posy": 1707.6839599609375,
        "gamemap": "203"
    },
    {
        "id": "177999068",
        "mapid": "1",
        "bftitle": "Eyemouth",
        "sector": "0",
        "posx": 2882.672119140625,
        "posy": 2423.2958984375,
        "gamemap": "70439"
    },
    {
        "id": "178015814",
        "mapid": "1",
        "bftitle": "Athens",
        "sector": "0",
        "posx": 10466.9296875,
        "posy": 10272.1201171875,
        "gamemap": "70439"
    },
    {
        "id": "178795318",
        "mapid": "1",
        "bftitle": "San-Nicolao",
        "sector": "0",
        "posx": 6302.51123046875,
        "posy": 8575.0458984375,
        "gamemap": "203"
    },
    {
        "id": "179077877",
        "mapid": "1",
        "bftitle": "Pļaviņas",
        "sector": "0",
        "posx": 11055.91015625,
        "posy": 2035.7060546875,
        "gamemap": "70439"
    },
    {
        "id": "179431994",
        "mapid": "1",
        "bftitle": "Pāvilosta",
        "sector": "0",
        "posx": 9725.228515625,
        "posy": 1890.2669677734375,
        "gamemap": "70439"
    },
    {
        "id": "179465709",
        "mapid": "1",
        "bftitle": "Nassogne",
        "sector": "0",
        "posx": 5100.30517578125,
        "posy": 5266.06298828125,
        "gamemap": "70439"
    },
    {
        "id": "179666984",
        "mapid": "1",
        "bftitle": "Cardigan",
        "sector": "0",
        "posx": 2162.81103515625,
        "posy": 4340.0078125,
        "gamemap": "201"
    },
    {
        "id": "180065357",
        "mapid": "1",
        "bftitle": "Mondragone",
        "sector": "0",
        "posx": 7585.85107421875,
        "posy": 9070.4453125,
        "gamemap": "70439"
    },
    {
        "id": "180066914",
        "mapid": "1",
        "bftitle": "Entraygues-sur-Truyère",
        "sector": "0",
        "posx": 4267.6201171875,
        "posy": 7648.2158203125,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "180159190",
        "mapid": "1",
        "bftitle": "Pabianice",
        "sector": "0",
        "posx": 9188.453125,
        "posy": 4535.67919921875,
        "gamemap": "70439"
    },
    {
        "id": "180347537",
        "mapid": "1",
        "bftitle": "Selizharovo",
        "sector": "0",
        "posx": 13319.7998046875,
        "posy": 1909.7259521484375,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "180666108",
        "mapid": "1",
        "bftitle": "Zamość",
        "sector": "0",
        "posx": 10330.83984375,
        "posy": 4979.11376953125,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "180863785",
        "mapid": "1",
        "bftitle": "Aumale",
        "sector": "0",
        "posx": 4029.720947265625,
        "posy": 5419.205078125,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "181108039",
        "mapid": "1",
        "bftitle": "Novosokol'niki",
        "sector": "0",
        "posx": 12355.1396484375,
        "posy": 2180.8291015625,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "181113245",
        "mapid": "1",
        "bftitle": "Bastia",
        "sector": "0",
        "posx": 6285.091796875,
        "posy": 8441.478515625,
        "gamemap": "70439"
    },
    {
        "id": "181421128",
        "mapid": "1",
        "bftitle": "Novo Brdo",
        "sector": "0",
        "posx": 9797.9599609375,
        "posy": 8476.353515625,
        "gamemap": "201"
    },
    {
        "id": "181817064",
        "mapid": "1",
        "bftitle": "Châtellerault",
        "sector": "0",
        "posx": 3671.361083984375,
        "posy": 6737.2490234375,
        "gamemap": "70439"
    },
    {
        "id": "181822521",
        "mapid": "1",
        "bftitle": "Allassac",
        "sector": "0",
        "posx": 3947.485107421875,
        "posy": 7392.8828125,
        "gamemap": "203",
        "rotation": 1
    },
    {
        "id": "181943509",
        "mapid": "1",
        "bftitle": "Alt Meteln Flugplatz",
        "sector": "0",
        "posx": 6863.10107421875,
        "posy": 3540.952880859375,
        "gamemap": "205",
        "rotation": 1
    },
    {
        "id": "182697036",
        "mapid": "1",
        "bftitle": "Bozkurt",
        "sector": "0",
        "posx": 13487.150390625,
        "posy": 8755.9404296875,
        "gamemap": "204",
        "rotation": 1
    },
    {
        "id": "182751730",
        "mapid": "1",
        "bftitle": "Provins",
        "sector": "0",
        "posx": 4482.35009765625,
        "posy": 5969.90576171875,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "182774789",
        "mapid": "1",
        "bftitle": "Pełczyce",
        "sector": "0",
        "posx": 8001.205078125,
        "posy": 3869.068115234375,
        "gamemap": "70439"
    },
    {
        "id": "183271101",
        "mapid": "1",
        "bftitle": "Sunderland",
        "sector": "0",
        "posx": 3096.4140625,
        "posy": 2938.693115234375,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "184331825",
        "mapid": "1",
        "bftitle": "Paralia",
        "sector": "0",
        "posx": 9875.7041015625,
        "posy": 10192.9697265625,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "184367716",
        "mapid": "1",
        "bftitle": "Kornyushkovo",
        "sector": "0",
        "posx": 13690.3896484375,
        "posy": 2971.9130859375,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "184856060",
        "mapid": "1",
        "bftitle": "Livny",
        "sector": "0",
        "posx": 14538.6796875,
        "posy": 4170.462890625,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "185085524",
        "mapid": "1",
        "bftitle": "Penryn",
        "sector": "0",
        "posx": 2058.955078125,
        "posy": 5249.505859375,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "185175445",
        "mapid": "1",
        "bftitle": "Haspra",
        "sector": "0",
        "posx": 13508.0595703125,
        "posy": 7776.7978515625,
        "gamemap": "70439"
    },
    {
        "id": "185304428",
        "mapid": "1",
        "bftitle": "Snaith Airfield",
        "sector": "0",
        "posx": 3213.514892578125,
        "posy": 3548.673095703125,
        "gamemap": "204"
    },
    {
        "id": "185363692",
        "mapid": "1",
        "bftitle": "Torre del Lago Puccini",
        "sector": "0",
        "posx": 6531.06103515625,
        "posy": 7984.93701171875,
        "gamemap": "203",
        "rotation": 2
    },
    {
        "id": "185632611",
        "mapid": "1",
        "bftitle": "Stoke-on-Trent",
        "sector": "0",
        "posx": 2848.532958984375,
        "posy": 3845.512939453125,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "185769530",
        "mapid": "1",
        "bftitle": "Reni",
        "sector": "0",
        "posx": 11808.5703125,
        "posy": 7309.23388671875,
        "gamemap": "70439"
    },
    {
        "id": "185941103",
        "mapid": "1",
        "bftitle": "Tula",
        "sector": "0",
        "posx": 14542,
        "posy": 3295.39697265625,
        "gamemap": "70439"
    },
    {
        "id": "186070041",
        "mapid": "1",
        "bftitle": "Tytuvėnėliai",
        "sector": "0",
        "posx": 10310.73046875,
        "posy": 2565.866943359375,
        "gamemap": "203"
    },
    {
        "id": "186090463",
        "mapid": "1",
        "bftitle": "Salamina",
        "sector": "0",
        "posx": 10372,
        "posy": 10276.1396484375,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "186605262",
        "mapid": "1",
        "bftitle": "Bletchley",
        "sector": "0",
        "posx": 3366.06689453125,
        "posy": 4319.041015625,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "186690348",
        "mapid": "1",
        "bftitle": "Saint-Dié-des-Vosges",
        "sector": "0",
        "posx": 5552.27001953125,
        "posy": 6088.51513671875,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "187418399",
        "mapid": "1",
        "bftitle": "Tetiyiv",
        "sector": "0",
        "posx": 12210.6103515625,
        "posy": 5598.18017578125,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "187464895",
        "mapid": "1",
        "bftitle": "Zhurivka",
        "sector": "0",
        "posx": 12832.099609375,
        "posy": 5081.64306640625,
        "gamemap": "70439"
    },
    {
        "id": "187585712",
        "mapid": "1",
        "bftitle": "Naryshkino",
        "sector": "0",
        "posx": 13987.5703125,
        "posy": 3906.235107421875,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "188357272",
        "mapid": "1",
        "bftitle": "Augustów",
        "sector": "0",
        "posx": 10251.0595703125,
        "posy": 3472.7099609375,
        "gamemap": "70439"
    },
    {
        "id": "188391800",
        "mapid": "1",
        "bftitle": "Eksjö",
        "sector": "0",
        "posx": 7903.76220703125,
        "posy": 1465.0999755859375,
        "gamemap": "70439"
    },
    {
        "id": "188623004",
        "mapid": "1",
        "bftitle": "Marmara Ereğlisi",
        "sector": "0",
        "posx": 11709.51953125,
        "posy": 9128.09765625,
        "gamemap": "70439"
    },
    {
        "id": "189330694",
        "mapid": "1",
        "bftitle": "Skoutari",
        "sector": "0",
        "posx": 10409.330078125,
        "posy": 9109.05859375,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "190288150",
        "mapid": "1",
        "bftitle": "Gnoien",
        "sector": "0",
        "posx": 7240.98095703125,
        "posy": 3409.824951171875,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "190508545",
        "mapid": "1",
        "bftitle": "Virtsu",
        "sector": "0",
        "posx": 10410.5498046875,
        "posy": 960.0421752929688,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "190656224",
        "mapid": "1",
        "bftitle": "Zamosh’ye",
        "sector": "0",
        "posx": 13974.830078125,
        "posy": 397.3064880371094,
        "gamemap": "205",
        "rotation": 1
    },
    {
        "id": "191206187",
        "mapid": "1",
        "bftitle": "Salacgrīva",
        "sector": "0",
        "posx": 10655.0703125,
        "posy": 1416.9239501953125,
        "gamemap": "70439"
    },
    {
        "id": "191468045",
        "mapid": "1",
        "bftitle": "Sykia",
        "sector": "0",
        "posx": 11372.5703125,
        "posy": 10398.9404296875,
        "gamemap": "70439"
    },
    {
        "id": "191746122",
        "mapid": "1",
        "bftitle": "Sabres",
        "sector": "0",
        "posx": 3297.7490234375,
        "posy": 7853.60400390625,
        "gamemap": "70439"
    },
    {
        "id": "191783496",
        "mapid": "1",
        "bftitle": "Weymouth",
        "sector": "0",
        "posx": 2792.508056640625,
        "posy": 5053.47119140625,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "192327896",
        "mapid": "1",
        "bftitle": "Opole",
        "sector": "0",
        "posx": 8769.4521484375,
        "posy": 5002.89697265625,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "192783869",
        "mapid": "1",
        "bftitle": "Nurma",
        "sector": "0",
        "posx": 12606.900390625,
        "posy": 397.3064880371094,
        "gamemap": "201"
    },
    {
        "id": "194457406",
        "mapid": "1",
        "bftitle": "Illichivs’k",
        "sector": "0",
        "posx": 12500.8203125,
        "posy": 6949.76318359375,
        "gamemap": "70439"
    },
    {
        "id": "195383701",
        "mapid": "1",
        "bftitle": "East Chevington",
        "sector": "0",
        "posx": 3040.9619140625,
        "posy": 2737.343994140625,
        "gamemap": "203",
        "rotation": 2
    },
    {
        "id": "195385131",
        "mapid": "1",
        "bftitle": "Kumburgaz",
        "sector": "0",
        "posx": 11863.4296875,
        "posy": 9108.1318359375,
        "gamemap": "203"
    },
    {
        "id": "195741545",
        "mapid": "1",
        "bftitle": "Kongsberg",
        "sector": "0",
        "posx": 6348.60302734375,
        "posy": 377.8800048828125,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "195903157",
        "mapid": "1",
        "bftitle": "Ocna Mureş",
        "sector": "0",
        "posx": 10506.1396484375,
        "posy": 6916.2431640625,
        "gamemap": "201"
    },
    {
        "id": "196046858",
        "mapid": "1",
        "bftitle": "Międzyrzecz",
        "sector": "0",
        "posx": 8081.38818359375,
        "posy": 4161.13623046875,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "196906809",
        "mapid": "1",
        "bftitle": "Makkum",
        "sector": "0",
        "posx": 5178.8017578125,
        "posy": 3856.15087890625,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "196916864",
        "mapid": "1",
        "bftitle": "Erkner",
        "sector": "0",
        "posx": 7546.8271484375,
        "posy": 4173.0478515625,
        "gamemap": "203"
    },
    {
        "id": "197194594",
        "mapid": "1",
        "bftitle": "Tårnby",
        "sector": "0",
        "posx": 7221.43017578125,
        "posy": 2570.60205078125,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "197234369",
        "mapid": "1",
        "bftitle": "Fornosovo",
        "sector": "0",
        "posx": 12471.41015625,
        "posy": 386.3005065917969,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "197488039",
        "mapid": "1",
        "bftitle": "Wick",
        "sector": "0",
        "posx": 2596.97705078125,
        "posy": 1038.052001953125,
        "gamemap": "70439"
    },
    {
        "id": "197618807",
        "mapid": "1",
        "bftitle": "Ciruļi",
        "sector": "0",
        "posx": 10916.51953125,
        "posy": 1991.5579833984375,
        "gamemap": "201"
    },
    {
        "id": "198029620",
        "mapid": "1",
        "bftitle": "Döge",
        "sector": "0",
        "posx": 9982.4384765625,
        "posy": 6097.77294921875,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "198096436",
        "mapid": "1",
        "bftitle": "Saint-André-de-Corcy",
        "sector": "0",
        "posx": 4966.4990234375,
        "posy": 7111.18310546875,
        "gamemap": "201"
    },
    {
        "id": "198113168",
        "mapid": "1",
        "bftitle": "Bor",
        "sector": "0",
        "posx": 12391.0400390625,
        "posy": 372.0483093261719,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "198165873",
        "mapid": "1",
        "bftitle": "Vorontsivka",
        "sector": "0",
        "posx": 13421.7900390625,
        "posy": 7145.6181640625,
        "gamemap": "201"
    },
    {
        "id": "198795509",
        "mapid": "1",
        "bftitle": "Rybinsk",
        "sector": "0",
        "posx": 14900.900390625,
        "posy": 1255.2760009765625,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "198812847",
        "mapid": "1",
        "bftitle": "Lahishyn",
        "sector": "0",
        "posx": 11132.4697265625,
        "posy": 4212.22216796875,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "198995517",
        "mapid": "1",
        "bftitle": "Perleberg",
        "sector": "0",
        "posx": 6990.76806640625,
        "posy": 3853.205078125,
        "gamemap": "70439"
    },
    {
        "id": "199029819",
        "mapid": "1",
        "bftitle": "Talsi",
        "sector": "0",
        "posx": 10134.26953125,
        "posy": 1696.0279541015625,
        "gamemap": "70439"
    },
    {
        "id": "199416951",
        "mapid": "1",
        "bftitle": "Leiden",
        "sector": "0",
        "posx": 4832.06884765625,
        "posy": 4299.3349609375,
        "gamemap": "205",
        "rotation": 2
    },
    {
        "id": "199704835",
        "mapid": "1",
        "bftitle": "Iksha",
        "sector": "0",
        "posx": 14506.8896484375,
        "posy": 2273.470947265625,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "199848398",
        "mapid": "1",
        "bftitle": "Les Deux Alpes",
        "sector": "0",
        "posx": 5310.5791015625,
        "posy": 7496.06298828125,
        "gamemap": "201"
    },
    {
        "id": "199911345",
        "mapid": "1",
        "bftitle": "Pridorozhnaya",
        "sector": "0",
        "posx": 15034.98046875,
        "posy": 1046.656982421875,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "200248964",
        "mapid": "1",
        "bftitle": "Staraya Toropa",
        "sector": "0",
        "posx": 12798.4599609375,
        "posy": 2216.074951171875,
        "gamemap": "205"
    },
    {
        "id": "200367866",
        "mapid": "1",
        "bftitle": "Bristol",
        "sector": "0",
        "posx": 2736.77099609375,
        "posy": 4631.91015625,
        "gamemap": "70439"
    },
    {
        "id": "201417660",
        "mapid": "1",
        "bftitle": "Airfield 'Scimitar'",
        "sector": "0",
        "posx": 16152.759765625,
        "posy": 15811.150390625,
        "gamemap": "204"
    },
    {
        "id": "201535144",
        "mapid": "1",
        "bftitle": "Pravieniškės",
        "sector": "0",
        "posx": 10618.509765625,
        "posy": 2928.56591796875,
        "gamemap": "203",
        "rotation": 3
    },
    {
        "id": "202213315",
        "mapid": "1",
        "bftitle": "Ágios Kírykos",
        "sector": "0",
        "posx": 11222.6796875,
        "posy": 10408.3798828125,
        "gamemap": "70439"
    },
    {
        "id": "202558670",
        "mapid": "1",
        "bftitle": "Skaudvilė",
        "sector": "0",
        "posx": 10144.6201171875,
        "posy": 2670.14892578125,
        "gamemap": "201"
    },
    {
        "id": "202594393",
        "mapid": "1",
        "bftitle": "Bakov",
        "sector": "0",
        "posx": 12932.83984375,
        "posy": 1882.3809814453125,
        "gamemap": "70439"
    },
    {
        "id": "202813194",
        "mapid": "1",
        "bftitle": "Trollhättan",
        "sector": "0",
        "posx": 7117.17822265625,
        "posy": 1121.489013671875,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "202946878",
        "mapid": "1",
        "bftitle": "Jenbach",
        "sector": "0",
        "posx": 6965.869140625,
        "posy": 6480.65283203125,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "203587544",
        "mapid": "1",
        "bftitle": "Berne",
        "sector": "0",
        "posx": 5698.0849609375,
        "posy": 6673.2958984375,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "203790834",
        "mapid": "1",
        "bftitle": "Silivri",
        "sector": "0",
        "posx": 11794.8701171875,
        "posy": 9087.4453125,
        "gamemap": "70439"
    },
    {
        "id": "203947509",
        "mapid": "1",
        "bftitle": "Spijkenisse",
        "sector": "0",
        "posx": 4745.27685546875,
        "posy": 4436.93017578125,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "204202676",
        "mapid": "1",
        "bftitle": "Yuzhne",
        "sector": "0",
        "posx": 12631.7099609375,
        "posy": 6813.837890625,
        "gamemap": "204",
        "rotation": 1
    },
    {
        "id": "204413620",
        "mapid": "1",
        "bftitle": "David-Gorodok",
        "sector": "0",
        "posx": 11492.83984375,
        "posy": 4348.23291015625,
        "gamemap": "70439"
    },
    {
        "id": "204588508",
        "mapid": "1",
        "bftitle": "Sokołów Podlaski",
        "sector": "0",
        "posx": 10038.0400390625,
        "posy": 4179.4560546875,
        "gamemap": "203"
    },
    {
        "id": "204765688",
        "mapid": "1",
        "bftitle": "Calenzana",
        "sector": "0",
        "posx": 6110.955078125,
        "posy": 8519.443359375,
        "gamemap": "205"
    },
    {
        "id": "204847678",
        "mapid": "1",
        "bftitle": "Ozoli",
        "sector": "0",
        "posx": 10853.009765625,
        "posy": 1901.7430419921875,
        "gamemap": "70439"
    },
    {
        "id": "205598418",
        "mapid": "1",
        "bftitle": "Edineţ",
        "sector": "0",
        "posx": 11518.900390625,
        "posy": 6139.59716796875,
        "gamemap": "201"
    },
    {
        "id": "205611430",
        "mapid": "1",
        "bftitle": "Kubinka",
        "sector": "0",
        "posx": 14274,
        "posy": 2585.25,
        "gamemap": "70439"
    },
    {
        "id": "205888654",
        "mapid": "1",
        "bftitle": "Lintig",
        "sector": "0",
        "posx": 6120.23388671875,
        "posy": 3582.510986328125,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "206045985",
        "mapid": "1",
        "bftitle": "Askersund",
        "sector": "0",
        "posx": 7883.31689453125,
        "posy": 783.8289184570312,
        "gamemap": "70439"
    },
    {
        "id": "206155214",
        "mapid": "1",
        "bftitle": "Bydgoszcz",
        "sector": "0",
        "posx": 8793.576171875,
        "posy": 3829.76904296875,
        "gamemap": "70439"
    },
    {
        "id": "206267713",
        "mapid": "1",
        "bftitle": "Alès",
        "sector": "0",
        "posx": 4711.9677734375,
        "posy": 7860.03076171875,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "206290770",
        "mapid": "1",
        "bftitle": "Zaraysk",
        "sector": "0",
        "posx": 14911.400390625,
        "posy": 3008.617919921875,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "206413940",
        "mapid": "1",
        "bftitle": "Romilly-sur-Seine ",
        "sector": "0",
        "posx": 4638.923828125,
        "posy": 5989.42919921875,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "206444960",
        "mapid": "1",
        "bftitle": "Tarbes",
        "sector": "0",
        "posx": 3539.452880859375,
        "posy": 8227.4326171875,
        "gamemap": "203",
        "rotation": 1
    },
    {
        "id": "206497163",
        "mapid": "1",
        "bftitle": "Crinitz",
        "sector": "0",
        "posx": 7550.43017578125,
        "posy": 4502.8759765625,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "206540922",
        "mapid": "1",
        "bftitle": "Selongey",
        "sector": "0",
        "posx": 5034.84912109375,
        "posy": 6394.705078125,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "206635008",
        "mapid": "1",
        "bftitle": "Embrun",
        "sector": "0",
        "posx": 5418.97216796875,
        "posy": 7682.294921875,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "206970089",
        "mapid": "1",
        "bftitle": "Fumel",
        "sector": "0",
        "posx": 3797.9130859375,
        "posy": 7709.31494140625,
        "gamemap": "203"
    },
    {
        "id": "207032339",
        "mapid": "1",
        "bftitle": "Vyetka",
        "sector": "0",
        "posx": 12654.599609375,
        "posy": 4105.61181640625,
        "gamemap": "70439"
    },
    {
        "id": "207037052",
        "mapid": "1",
        "bftitle": "Wremen",
        "sector": "0",
        "posx": 6019.837890625,
        "posy": 3569.8720703125,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "207306655",
        "mapid": "1",
        "bftitle": "Farsbo",
        "sector": "0",
        "posx": 8019.43701171875,
        "posy": 1205.720947265625,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "207642303",
        "mapid": "1",
        "bftitle": "Salerno",
        "sector": "0",
        "posx": 7851.35888671875,
        "posy": 9243.013671875,
        "gamemap": "70439"
    },
    {
        "id": "208382026",
        "mapid": "1",
        "bftitle": "Peschanka",
        "sector": "0",
        "posx": 13075.6201171875,
        "posy": 4295.2060546875,
        "gamemap": "70439"
    },
    {
        "id": "208418530",
        "mapid": "1",
        "bftitle": "Devrek",
        "sector": "0",
        "posx": 12882.2001953125,
        "posy": 9030.5078125,
        "gamemap": "201"
    },
    {
        "id": "208499460",
        "mapid": "1",
        "bftitle": "Mikhanovichi",
        "sector": "0",
        "posx": 11643.8095703125,
        "posy": 3516.5,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "209134623",
        "mapid": "1",
        "bftitle": "Vic-le-Comte",
        "sector": "0",
        "posx": 4466.6318359375,
        "posy": 7230.8701171875,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "209481473",
        "mapid": "1",
        "bftitle": "Agropoli",
        "sector": "0",
        "posx": 7911.921875,
        "posy": 9368.677734375,
        "gamemap": "70439"
    },
    {
        "id": "209526077",
        "mapid": "1",
        "bftitle": "Vernoux-en-Vivarais",
        "sector": "0",
        "posx": 4877.02587890625,
        "posy": 7544.43994140625,
        "gamemap": "201"
    },
    {
        "id": "209531028",
        "mapid": "1",
        "bftitle": "Bosau Flugplatz",
        "sector": "0",
        "posx": 6573.3349609375,
        "posy": 3335.43603515625,
        "gamemap": "205",
        "rotation": 2
    },
    {
        "id": "209628984",
        "mapid": "1",
        "bftitle": "Mytilene",
        "sector": "0",
        "posx": 11298.98046875,
        "posy": 9845.3837890625,
        "gamemap": "70439"
    },
    {
        "id": "209758350",
        "mapid": "1",
        "bftitle": "Montredon-Labessonnié",
        "sector": "0",
        "posx": 4196.4140625,
        "posy": 8030.5791015625,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "209791369",
        "mapid": "1",
        "bftitle": "Saint-Éloy-les-Mines",
        "sector": "0",
        "posx": 4346.4072265625,
        "posy": 7012.50390625,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "210208097",
        "mapid": "1",
        "bftitle": "Mudaralı",
        "sector": "0",
        "posx": 12178.76953125,
        "posy": 9112.6845703125,
        "gamemap": "70439"
    },
    {
        "id": "210334572",
        "mapid": "1",
        "bftitle": "Neukirchen",
        "sector": "0",
        "posx": 7286.873046875,
        "posy": 4952.7958984375,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "211112695",
        "mapid": "1",
        "bftitle": "Vlacháta",
        "sector": "0",
        "posx": 9561.0654296875,
        "posy": 10218.400390625,
        "gamemap": "70439"
    },
    {
        "id": "211213335",
        "mapid": "1",
        "bftitle": "Ragaciems",
        "sector": "0",
        "posx": 10401.919921875,
        "posy": 1816.3489990234375,
        "gamemap": "205"
    },
    {
        "id": "211320890",
        "mapid": "1",
        "bftitle": "Khmil’nyk",
        "sector": "0",
        "posx": 11710.1796875,
        "posy": 5515.0068359375,
        "gamemap": "201"
    },
    {
        "id": "211730735",
        "mapid": "1",
        "bftitle": "Bad Sobernheim",
        "sector": "0",
        "posx": 5753.66015625,
        "posy": 5398.15283203125,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "212092540",
        "mapid": "1",
        "bftitle": "Stansted Airfield",
        "sector": "0",
        "posx": 3642.470947265625,
        "posy": 4386.5927734375,
        "gamemap": "204",
        "rotation": 1
    },
    {
        "id": "212344429",
        "mapid": "1",
        "bftitle": "Saxon",
        "sector": "0",
        "posx": 5619.90576171875,
        "posy": 7015.86279296875,
        "gamemap": "203",
        "rotation": 2
    },
    {
        "id": "212429857",
        "mapid": "1",
        "bftitle": "Varaždin",
        "sector": "0",
        "posx": 8304.0966796875,
        "posy": 6949.97802734375,
        "gamemap": "70439"
    },
    {
        "id": "212625688",
        "mapid": "1",
        "bftitle": "Kopparberg",
        "sector": "0",
        "posx": 7910.30419921875,
        "posy": 206.49920654296875,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "212651127",
        "mapid": "1",
        "bftitle": "Hestra",
        "sector": "0",
        "posx": 7932.28076171875,
        "posy": 1304.1319580078125,
        "gamemap": "70439"
    },
    {
        "id": "212801914",
        "mapid": "1",
        "bftitle": "Givet",
        "sector": "0",
        "posx": 4930.73193359375,
        "posy": 5261.6728515625,
        "gamemap": "201"
    },
    {
        "id": "213142723",
        "mapid": "1",
        "bftitle": "Fishguard",
        "sector": "0",
        "posx": 2052.3720703125,
        "posy": 4383.126953125,
        "gamemap": "70439"
    },
    {
        "id": "213590310",
        "mapid": "1",
        "bftitle": "Lviv",
        "sector": "0",
        "posx": 10556.9296875,
        "posy": 5387.9130859375,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "213645355",
        "mapid": "1",
        "bftitle": "Rhian",
        "sector": "0",
        "posx": 2213.2080078125,
        "posy": 1216.22802734375,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "213738913",
        "mapid": "1",
        "bftitle": "Flekkefjord",
        "sector": "0",
        "posx": 5467.46484375,
        "posy": 1113.9649658203125,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "214019047",
        "mapid": "1",
        "bftitle": "Gospić",
        "sector": "0",
        "posx": 8021.796875,
        "posy": 7689.65283203125,
        "gamemap": "70439"
    },
    {
        "id": "214188959",
        "mapid": "1",
        "bftitle": "Boyarka",
        "sector": "0",
        "posx": 12396.0302734375,
        "posy": 5166.7158203125,
        "gamemap": "201"
    },
    {
        "id": "214416815",
        "mapid": "1",
        "bftitle": "Chaltyr",
        "sector": "0",
        "posx": 15088.4296875,
        "posy": 6527.24609375,
        "gamemap": "203",
        "rotation": 1
    },
    {
        "id": "214846989",
        "mapid": "1",
        "bftitle": "Ochsenhausen",
        "sector": "0",
        "posx": 6431.7431640625,
        "posy": 6182.8271484375,
        "gamemap": "201"
    },
    {
        "id": "215005634",
        "mapid": "1",
        "bftitle": "Urge",
        "sector": "0",
        "posx": 10741.2998046875,
        "posy": 1035.5379638671875,
        "gamemap": "70439"
    },
    {
        "id": "215203139",
        "mapid": "1",
        "bftitle": "Groß Kreutz",
        "sector": "0",
        "posx": 7270.06103515625,
        "posy": 4183.798828125,
        "gamemap": "203",
        "rotation": 3
    },
    {
        "id": "215326762",
        "mapid": "1",
        "bftitle": "Sari-Solenzara",
        "sector": "0",
        "posx": 6263.02001953125,
        "posy": 8787.59375,
        "gamemap": "70439"
    },
    {
        "id": "215750780",
        "mapid": "1",
        "bftitle": "Valga",
        "sector": "0",
        "posx": 11150.240234375,
        "posy": 1403.530029296875,
        "gamemap": "70439"
    },
    {
        "id": "216033761",
        "mapid": "1",
        "bftitle": "Sulina",
        "sector": "0",
        "posx": 12207.330078125,
        "posy": 7435.73388671875,
        "gamemap": "70439"
    },
    {
        "id": "216516788",
        "mapid": "1",
        "bftitle": "Poshekhon'ye",
        "sector": "0",
        "posx": 14986.7099609375,
        "posy": 1000.0380249023438,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "217354615",
        "mapid": "1",
        "bftitle": "Sestri Levante",
        "sector": "0",
        "posx": 6280.35986328125,
        "posy": 7808.19287109375,
        "gamemap": "70439"
    },
    {
        "id": "217646902",
        "mapid": "1",
        "bftitle": "Sochaczew",
        "sector": "0",
        "posx": 9447.4755859375,
        "posy": 4265.0908203125,
        "gamemap": "203",
        "rotation": 2
    },
    {
        "id": "217913439",
        "mapid": "1",
        "bftitle": "Gornji Milanovac",
        "sector": "0",
        "posx": 9512.8837890625,
        "posy": 7904.126953125,
        "gamemap": "204"
    },
    {
        "id": "218181677",
        "mapid": "1",
        "bftitle": "Sofrino",
        "sector": "0",
        "posx": 14634.3701171875,
        "posy": 2285.154052734375,
        "gamemap": "203"
    },
    {
        "id": "218401537",
        "mapid": "1",
        "bftitle": "Vorozhba",
        "sector": "0",
        "posx": 13545.650390625,
        "posy": 4768.1669921875,
        "gamemap": "70439"
    },
    {
        "id": "218508304",
        "mapid": "1",
        "bftitle": "Makstenieki",
        "sector": "0",
        "posx": 10665.650390625,
        "posy": 1820.3260498046875,
        "gamemap": "203"
    },
    {
        "id": "218949846",
        "mapid": "1",
        "bftitle": "St. Helier",
        "sector": "0",
        "posx": 2881.9580078125,
        "posy": 5674.951171875,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "218996831",
        "mapid": "1",
        "bftitle": "Gulbene",
        "sector": "0",
        "posx": 11357.0703125,
        "posy": 1733.072021484375,
        "gamemap": "201"
    },
    {
        "id": "219106981",
        "mapid": "1",
        "bftitle": "Kostyukovka",
        "sector": "0",
        "posx": 12577.76953125,
        "posy": 4115.51611328125,
        "gamemap": "70439"
    },
    {
        "id": "220274616",
        "mapid": "1",
        "bftitle": "Ozëry",
        "sector": "0",
        "posx": 14815.3203125,
        "posy": 2957.6630859375,
        "gamemap": "201"
    },
    {
        "id": "221883297",
        "mapid": "1",
        "bftitle": "Dunaföldvár",
        "sector": "0",
        "posx": 9062.8916015625,
        "posy": 6733.80078125,
        "gamemap": "70439"
    },
    {
        "id": "221941950",
        "mapid": "1",
        "bftitle": "Dzhankoy",
        "sector": "0",
        "posx": 13596.51953125,
        "posy": 7201.923828125,
        "gamemap": "201"
    },
    {
        "id": "222224081",
        "mapid": "1",
        "bftitle": "Burgas",
        "sector": "0",
        "posx": 11566.6298828125,
        "posy": 8520.376953125,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "222713325",
        "mapid": "1",
        "bftitle": "Novomichurinsk",
        "sector": "0",
        "posx": 15166.2802734375,
        "posy": 3374.818115234375,
        "gamemap": "70439"
    },
    {
        "id": "223739036",
        "mapid": "1",
        "bftitle": "Greveniti",
        "sector": "0",
        "posx": 9671.5185546875,
        "posy": 9579.552734375,
        "gamemap": "203",
        "rotation": 2
    },
    {
        "id": "223797386",
        "mapid": "1",
        "bftitle": "Bergen",
        "sector": "0",
        "posx": 4898.09619140625,
        "posy": 4058.8330078125,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "223933647",
        "mapid": "1",
        "bftitle": "Benevento",
        "sector": "0",
        "posx": 7847.76416015625,
        "posy": 9067.2021484375,
        "gamemap": "70439"
    },
    {
        "id": "224023871",
        "mapid": "1",
        "bftitle": "Åkersberga",
        "sector": "0",
        "posx": 8879.18359375,
        "posy": 438.3678894042969,
        "gamemap": "70439"
    },
    {
        "id": "224296453",
        "mapid": "1",
        "bftitle": "Blyth",
        "sector": "0",
        "posx": 3065.705078125,
        "posy": 2832.075927734375,
        "gamemap": "70439"
    },
    {
        "id": "224484664",
        "mapid": "1",
        "bftitle": "Shats’k",
        "sector": "0",
        "posx": 10531.9599609375,
        "posy": 4612.8232421875,
        "gamemap": "203"
    },
    {
        "id": "224505958",
        "mapid": "1",
        "bftitle": "Zaprudnya",
        "sector": "0",
        "posx": 14487.8095703125,
        "posy": 2063.1240234375,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "224572815",
        "mapid": "1",
        "bftitle": "Synel'nykove",
        "sector": "0",
        "posx": 13926.349609375,
        "posy": 6072.0458984375,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "224796634",
        "mapid": "1",
        "bftitle": "Tínos",
        "sector": "0",
        "posx": 10891.150390625,
        "posy": 10437.1298828125,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "225069488",
        "mapid": "1",
        "bftitle": "Goicea",
        "sector": "0",
        "posx": 10437.75,
        "posy": 7948.98486328125,
        "gamemap": "201"
    },
    {
        "id": "225510199",
        "mapid": "1",
        "bftitle": "Bamberg",
        "sector": "0",
        "posx": 6719.3828125,
        "posy": 5249.1298828125,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "226339009",
        "mapid": "1",
        "bftitle": "Bad Wildungen",
        "sector": "0",
        "posx": 6187.18896484375,
        "posy": 4772.4619140625,
        "gamemap": "201"
    },
    {
        "id": "226344372",
        "mapid": "1",
        "bftitle": "Strainje",
        "sector": "0",
        "posx": 9497.1025390625,
        "posy": 8096.8359375,
        "gamemap": "201"
    },
    {
        "id": "227088257",
        "mapid": "1",
        "bftitle": "Kulotino",
        "sector": "0",
        "posx": 13281.1904296875,
        "posy": 1008.4650268554688,
        "gamemap": "201"
    },
    {
        "id": "227519694",
        "mapid": "1",
        "bftitle": "Bagnols-sur-Cèze",
        "sector": "0",
        "posx": 4868.623046875,
        "posy": 7849.10302734375,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "227705290",
        "mapid": "1",
        "bftitle": "Pinnow",
        "sector": "0",
        "posx": 7776.22900390625,
        "posy": 4385.27294921875,
        "gamemap": "70439"
    },
    {
        "id": "227780089",
        "mapid": "1",
        "bftitle": "Vorbeck",
        "sector": "0",
        "posx": 7053.2978515625,
        "posy": 3440.37890625,
        "gamemap": "70439"
    },
    {
        "id": "228145544",
        "mapid": "1",
        "bftitle": "Kurakhovo",
        "sector": "0",
        "posx": 14443.48046875,
        "posy": 6220.37890625,
        "gamemap": "204",
        "rotation": 1
    },
    {
        "id": "228617307",
        "mapid": "1",
        "bftitle": "Grassano",
        "sector": "0",
        "posx": 8286.5498046875,
        "posy": 9258.921875,
        "gamemap": "203",
        "rotation": 3
    },
    {
        "id": "229183314",
        "mapid": "1",
        "bftitle": "Hopsten Flugplatz",
        "sector": "0",
        "posx": 5781.60400390625,
        "posy": 4180.7041015625,
        "gamemap": "204",
        "rotation": 3
    },
    {
        "id": "229296699",
        "mapid": "1",
        "bftitle": "Luhansk",
        "sector": "0",
        "posx": 15039.98046875,
        "posy": 5962.30322265625,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "230123904",
        "mapid": "1",
        "bftitle": "Kelso",
        "sector": "0",
        "posx": 2801.60498046875,
        "posy": 2575.552001953125,
        "gamemap": "70439"
    },
    {
        "id": "230325014",
        "mapid": "1",
        "bftitle": "Foligno",
        "sector": "0",
        "posx": 7239.7060546875,
        "posy": 8340.6611328125,
        "gamemap": "70439"
    },
    {
        "id": "230467755",
        "mapid": "1",
        "bftitle": "Luffness",
        "sector": "0",
        "posx": 2707.428955078125,
        "posy": 2366.867919921875,
        "gamemap": "70439"
    },
    {
        "id": "230554500",
        "mapid": "1",
        "bftitle": "Baltchik",
        "sector": "0",
        "posx": 11771.48046875,
        "posy": 8153.0361328125,
        "gamemap": "70439"
    },
    {
        "id": "230617559",
        "mapid": "1",
        "bftitle": "Krapina",
        "sector": "0",
        "posx": 8169.5830078125,
        "posy": 7011.26611328125,
        "gamemap": "70439"
    },
    {
        "id": "231136091",
        "mapid": "1",
        "bftitle": "Zin'kiv",
        "sector": "0",
        "posx": 13588.0302734375,
        "posy": 5217.9970703125,
        "gamemap": "70439"
    },
    {
        "id": "231632007",
        "mapid": "1",
        "bftitle": "Blaye",
        "sector": "0",
        "posx": 3337.93994140625,
        "posy": 7445.1767578125,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "231847521",
        "mapid": "1",
        "bftitle": "Aigio",
        "sector": "0",
        "posx": 9987.876953125,
        "posy": 10171.1298828125,
        "gamemap": "70439"
    },
    {
        "id": "232052949",
        "mapid": "1",
        "bftitle": "Eymoutiers",
        "sector": "0",
        "posx": 4025.6220703125,
        "posy": 7190.8369140625,
        "gamemap": "201"
    },
    {
        "id": "232280155",
        "mapid": "1",
        "bftitle": "Okhocheye",
        "sector": "0",
        "posx": 14076.150390625,
        "posy": 5516.03515625,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "232405787",
        "mapid": "1",
        "bftitle": "Ängelholm",
        "sector": "0",
        "posx": 7297.1650390625,
        "posy": 2231.1669921875,
        "gamemap": "205",
        "rotation": 3
    },
    {
        "id": "233080975",
        "mapid": "1",
        "bftitle": "Åmot",
        "sector": "0",
        "posx": 5967.5361328125,
        "posy": 348.7041931152344,
        "gamemap": "201"
    },
    {
        "id": "233226611",
        "mapid": "1",
        "bftitle": "Portogruaro",
        "sector": "0",
        "posx": 7278.9521484375,
        "posy": 7172.72119140625,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "233311831",
        "mapid": "1",
        "bftitle": "Suzzara",
        "sector": "0",
        "posx": 6665.98583984375,
        "posy": 7503.97119140625,
        "gamemap": "70439"
    },
    {
        "id": "233641994",
        "mapid": "1",
        "bftitle": "Osterburg",
        "sector": "0",
        "posx": 6960.158203125,
        "posy": 3994.55810546875,
        "gamemap": "70439"
    },
    {
        "id": "233772183",
        "mapid": "1",
        "bftitle": "Urechcha",
        "sector": "0",
        "posx": 11691.259765625,
        "posy": 3915.97509765625,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "233920434",
        "mapid": "1",
        "bftitle": "Geneva",
        "sector": "0",
        "posx": 5315.43505859375,
        "posy": 6990.60107421875,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "233988604",
        "mapid": "1",
        "bftitle": "Edirne",
        "sector": "0",
        "posx": 11299.33984375,
        "posy": 8850.1181640625,
        "gamemap": "201"
    },
    {
        "id": "234041926",
        "mapid": "1",
        "bftitle": "Kitzbühel",
        "sector": "0",
        "posx": 7147.52001953125,
        "posy": 6456.81103515625,
        "gamemap": "201"
    },
    {
        "id": "234540667",
        "mapid": "1",
        "bftitle": "Mazyr",
        "sector": "0",
        "posx": 12082.7099609375,
        "posy": 4362.43115234375,
        "gamemap": "70439"
    },
    {
        "id": "234595123",
        "mapid": "1",
        "bftitle": "Lauenhagen",
        "sector": "0",
        "posx": 6216.69482421875,
        "posy": 4206.9072265625,
        "gamemap": "205",
        "rotation": 3
    },
    {
        "id": "234728881",
        "mapid": "1",
        "bftitle": "Pechory",
        "sector": "0",
        "posx": 11608.8701171875,
        "posy": 1382.14501953125,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "235448713",
        "mapid": "1",
        "bftitle": "Stavanger",
        "sector": "0",
        "posx": 5170.9619140625,
        "posy": 696.9052734375,
        "gamemap": "201"
    },
    {
        "id": "235472208",
        "mapid": "1",
        "bftitle": "Budva",
        "sector": "0",
        "posx": 9037.5703125,
        "posy": 8608.1865234375,
        "gamemap": "203",
        "rotation": 1
    },
    {
        "id": "235493193",
        "mapid": "1",
        "bftitle": "Haamstede",
        "sector": "0",
        "posx": 4655.8251953125,
        "posy": 4544.2099609375,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "235592925",
        "mapid": "1",
        "bftitle": "Hereke",
        "sector": "0",
        "posx": 12195.9501953125,
        "posy": 9199.90625,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "235801952",
        "mapid": "1",
        "bftitle": "Sokółka",
        "sector": "0",
        "posx": 10404.2197265625,
        "posy": 3689.764892578125,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "236184781",
        "mapid": "1",
        "bftitle": "Xylokastro",
        "sector": "0",
        "posx": 10138.099609375,
        "posy": 10248.0302734375,
        "gamemap": "70439"
    },
    {
        "id": "237593849",
        "mapid": "1",
        "bftitle": "Tenhult",
        "sector": "0",
        "posx": 7711.65087890625,
        "posy": 1437.35400390625,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "237642793",
        "mapid": "1",
        "bftitle": "Niš",
        "sector": "0",
        "posx": 9935.521484375,
        "posy": 8190.375,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "237645188",
        "mapid": "1",
        "bftitle": "Bobstadt Flugplatz",
        "sector": "0",
        "posx": 6337.283203125,
        "posy": 5582.98583984375,
        "gamemap": "204",
        "rotation": 2
    },
    {
        "id": "237750597",
        "mapid": "1",
        "bftitle": "Dellec",
        "sector": "0",
        "posx": 2178.241943359375,
        "posy": 6050.7080078125,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "237804703",
        "mapid": "1",
        "bftitle": "Völkermarkt",
        "sector": "0",
        "posx": 7804.80078125,
        "posy": 6796.5888671875,
        "gamemap": "204"
    },
    {
        "id": "238450725",
        "mapid": "1",
        "bftitle": "Novafeltria",
        "sector": "0",
        "posx": 7117.26708984375,
        "posy": 7957.9189453125,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "238727540",
        "mapid": "1",
        "bftitle": "Bad Segeberg",
        "sector": "0",
        "posx": 6534.8818359375,
        "posy": 3422.655029296875,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "238773816",
        "mapid": "1",
        "bftitle": "Amfissa",
        "sector": "0",
        "posx": 10082.169921875,
        "posy": 10065.0302734375,
        "gamemap": "203"
    },
    {
        "id": "238809891",
        "mapid": "1",
        "bftitle": "Pavlohrad",
        "sector": "0",
        "posx": 14029.83984375,
        "posy": 5976.923828125,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "239298066",
        "mapid": "1",
        "bftitle": "Bodmin",
        "sector": "0",
        "posx": 2130.197998046875,
        "posy": 5096.13818359375,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "239837698",
        "mapid": "1",
        "bftitle": "Ostroshitskiy Gorodok",
        "sector": "0",
        "posx": 11630.33984375,
        "posy": 3336.22705078125,
        "gamemap": "203",
        "rotation": 3
    },
    {
        "id": "239951101",
        "mapid": "1",
        "bftitle": "Říčany",
        "sector": "0",
        "posx": 7814.90478515625,
        "posy": 5327.97607421875,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "240183411",
        "mapid": "1",
        "bftitle": "Lastovshchina",
        "sector": "0",
        "posx": 11461.919921875,
        "posy": 3710.0859375,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "240364209",
        "mapid": "1",
        "bftitle": "Taytsy",
        "sector": "0",
        "posx": 12342.509765625,
        "posy": 330.5284118652344,
        "gamemap": "70439"
    },
    {
        "id": "241442920",
        "mapid": "1",
        "bftitle": "Rochefort",
        "sector": "0",
        "posx": 3226.781982421875,
        "posy": 7108.02783203125,
        "gamemap": "70439"
    },
    {
        "id": "241712625",
        "mapid": "1",
        "bftitle": "Sundvollen",
        "sector": "0",
        "posx": 6536.38623046875,
        "posy": 96.36366271972656,
        "gamemap": "201"
    },
    {
        "id": "241955957",
        "mapid": "1",
        "bftitle": "Terrasson-Lavilledieu",
        "sector": "0",
        "posx": 3896.492919921875,
        "posy": 7446.52783203125,
        "gamemap": "203"
    },
    {
        "id": "242968759",
        "mapid": "1",
        "bftitle": "Koprivnica",
        "sector": "0",
        "posx": 8447.6484375,
        "posy": 7010.43798828125,
        "gamemap": "70439"
    },
    {
        "id": "244080932",
        "mapid": "1",
        "bftitle": "Kandava",
        "sector": "0",
        "posx": 10190.9296875,
        "posy": 1807.43798828125,
        "gamemap": "70439"
    },
    {
        "id": "244326892",
        "mapid": "1",
        "bftitle": "Lamalou-les-Bains",
        "sector": "0",
        "posx": 4418.01318359375,
        "posy": 8079.2880859375,
        "gamemap": "201"
    },
    {
        "id": "244332341",
        "mapid": "1",
        "bftitle": "Newhaven",
        "sector": "0",
        "posx": 3531.279052734375,
        "posy": 4944.68017578125,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "244333667",
        "mapid": "1",
        "bftitle": "Kiev",
        "sector": "0",
        "posx": 12462.4296875,
        "posy": 5103.953125,
        "gamemap": "70439"
    },
    {
        "id": "244461261",
        "mapid": "1",
        "bftitle": "Battenberg",
        "sector": "0",
        "posx": 6025.8369140625,
        "posy": 4881.72900390625,
        "gamemap": "203",
        "rotation": 3
    },
    {
        "id": "244553448",
        "mapid": "1",
        "bftitle": "Roztoky",
        "sector": "0",
        "posx": 7736.505859375,
        "posy": 5225.51708984375,
        "gamemap": "203"
    },
    {
        "id": "244717920",
        "mapid": "1",
        "bftitle": "Mělník",
        "sector": "0",
        "posx": 7757.8017578125,
        "posy": 5152.19677734375,
        "gamemap": "204"
    },
    {
        "id": "244754242",
        "mapid": "1",
        "bftitle": "Kudinovo",
        "sector": "0",
        "posx": 14141.91015625,
        "posy": 2886.035888671875,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "245127803",
        "mapid": "1",
        "bftitle": "Frankfurt a.d. Oder",
        "sector": "0",
        "posx": 7764.30908203125,
        "posy": 4203.408203125,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "245358155",
        "mapid": "1",
        "bftitle": "Aubusson",
        "sector": "0",
        "posx": 4150.13818359375,
        "posy": 7100.953125,
        "gamemap": "201"
    },
    {
        "id": "245523479",
        "mapid": "1",
        "bftitle": "Surazh",
        "sector": "0",
        "posx": 13009.990234375,
        "posy": 3881.863037109375,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "245754915",
        "mapid": "1",
        "bftitle": "Loano",
        "sector": "0",
        "posx": 5935.51416015625,
        "posy": 7862.31982421875,
        "gamemap": "70439"
    },
    {
        "id": "247011724",
        "mapid": "1",
        "bftitle": "Prymors'kyi",
        "sector": "0",
        "posx": 13938.1298828125,
        "posy": 7496.55810546875,
        "gamemap": "70439"
    },
    {
        "id": "247439970",
        "mapid": "1",
        "bftitle": "Camon",
        "sector": "0",
        "posx": 4202.373046875,
        "posy": 5365.2978515625,
        "gamemap": "203"
    },
    {
        "id": "247441085",
        "mapid": "1",
        "bftitle": "Agrinio",
        "sector": "0",
        "posx": 9790.2587890625,
        "posy": 10030.6396484375,
        "gamemap": "201"
    },
    {
        "id": "247452083",
        "mapid": "1",
        "bftitle": "Ros'",
        "sector": "0",
        "posx": 10671.1201171875,
        "posy": 3749.77490234375,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "248087342",
        "mapid": "1",
        "bftitle": "Moulins",
        "sector": "0",
        "posx": 4492.12109375,
        "posy": 6837.65478515625,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "248352284",
        "mapid": "1",
        "bftitle": "Haugesund",
        "sector": "0",
        "posx": 5078.02978515625,
        "posy": 463.0692138671875,
        "gamemap": "201"
    },
    {
        "id": "248916850",
        "mapid": "1",
        "bftitle": "Zvornik",
        "sector": "0",
        "posx": 9114.5068359375,
        "posy": 7755.86181640625,
        "gamemap": "201"
    },
    {
        "id": "248925902",
        "mapid": "1",
        "bftitle": "Tišnov",
        "sector": "0",
        "posx": 8329.482421875,
        "posy": 5610.86181640625,
        "gamemap": "201"
    },
    {
        "id": "249499501",
        "mapid": "1",
        "bftitle": "Rothbury",
        "sector": "0",
        "posx": 2955.60498046875,
        "posy": 2725.2470703125,
        "gamemap": "201"
    },
    {
        "id": "249582357",
        "mapid": "1",
        "bftitle": "Savigny-le-Temple",
        "sector": "0",
        "posx": 4257.30419921875,
        "posy": 5983.6611328125,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "249804833",
        "mapid": "1",
        "bftitle": "Komsomolsk",
        "sector": "0",
        "posx": 13374.6103515625,
        "posy": 5763.748046875,
        "gamemap": "70439"
    },
    {
        "id": "250299505",
        "mapid": "1",
        "bftitle": "Lanivtsi",
        "sector": "0",
        "posx": 11162.990234375,
        "posy": 5376.4599609375,
        "gamemap": "70439"
    },
    {
        "id": "250563339",
        "mapid": "1",
        "bftitle": "Vyshniy Volochëk",
        "sector": "0",
        "posx": 13646.8798828125,
        "posy": 1506.5560302734375,
        "gamemap": "201"
    },
    {
        "id": "251148693",
        "mapid": "1",
        "bftitle": "Périgueux",
        "sector": "0",
        "posx": 3722.510986328125,
        "posy": 7412.73388671875,
        "gamemap": "70439"
    },
    {
        "id": "251385247",
        "mapid": "1",
        "bftitle": "Grange-over-Sands",
        "sector": "0",
        "posx": 2663.68408203125,
        "posy": 3295.202880859375,
        "gamemap": "205"
    },
    {
        "id": "251396562",
        "mapid": "1",
        "bftitle": "Usquert",
        "sector": "0",
        "posx": 5454.51416015625,
        "posy": 3707.886962890625,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "251557242",
        "mapid": "1",
        "bftitle": "Nagykanizsa",
        "sector": "0",
        "posx": 8495.587890625,
        "posy": 6886.208984375,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "251612925",
        "mapid": "1",
        "bftitle": "Landskrona",
        "sector": "0",
        "posx": 7275.9150390625,
        "posy": 2432.590087890625,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "252160771",
        "mapid": "1",
        "bftitle": "Hostomel'",
        "sector": "0",
        "posx": 12386.58984375,
        "posy": 5051.14892578125,
        "gamemap": "201"
    },
    {
        "id": "252782850",
        "mapid": "1",
        "bftitle": "Sosnytsya",
        "sector": "0",
        "posx": 13041.66015625,
        "posy": 4602.48681640625,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "252883228",
        "mapid": "1",
        "bftitle": "Oloví",
        "sector": "0",
        "posx": 7196.35986328125,
        "posy": 5198.1201171875,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "253068939",
        "mapid": "1",
        "bftitle": "Kiviõli",
        "sector": "0",
        "posx": 11421.0302734375,
        "posy": 511.69390869140625,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "253548751",
        "mapid": "1",
        "bftitle": "Plzen",
        "sector": "0",
        "posx": 7351.796875,
        "posy": 5291.42578125,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "253677463",
        "mapid": "1",
        "bftitle": "Söhlde",
        "sector": "0",
        "posx": 6521.69580078125,
        "posy": 4276.19384765625,
        "gamemap": "203",
        "rotation": 1
    },
    {
        "id": "253751533",
        "mapid": "1",
        "bftitle": "Tirana",
        "sector": "0",
        "posx": 9324.5107421875,
        "posy": 8987.9560546875,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "254205039",
        "mapid": "1",
        "bftitle": "Sarrebourg",
        "sector": "0",
        "posx": 5581.5830078125,
        "posy": 5888,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "254316356",
        "mapid": "1",
        "bftitle": "Villeneuve-sur-Lot",
        "sector": "0",
        "posx": 3721.43408203125,
        "posy": 7746.56884765625,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "254478737",
        "mapid": "1",
        "bftitle": "Perakyla",
        "sector": "0",
        "posx": 11767.8203125,
        "posy": 301.1382141113281,
        "gamemap": "70439"
    },
    {
        "id": "254479965",
        "mapid": "1",
        "bftitle": "Bila Tserkva",
        "sector": "0",
        "posx": 12341.740234375,
        "posy": 5401.125,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "254569282",
        "mapid": "1",
        "bftitle": "Crotone",
        "sector": "0",
        "posx": 8535.6279296875,
        "posy": 9856.501953125,
        "gamemap": "70439"
    },
    {
        "id": "254591159",
        "mapid": "1",
        "bftitle": "Airfield 'Excalibur'",
        "sector": "0",
        "posx": 16233.419921875,
        "posy": 16066.76953125,
        "gamemap": "204"
    },
    {
        "id": "254653255",
        "mapid": "1",
        "bftitle": "Goslar Flugplatz",
        "sector": "0",
        "posx": 6579.31591796875,
        "posy": 4398.14697265625,
        "gamemap": "204",
        "rotation": 1
    },
    {
        "id": "255034204",
        "mapid": "1",
        "bftitle": "Shakhty",
        "sector": "0",
        "posx": 15303.0302734375,
        "posy": 6341.8369140625,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "255320761",
        "mapid": "1",
        "bftitle": "Veenendaal",
        "sector": "0",
        "posx": 5144.501953125,
        "posy": 4459.56982421875,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "255321306",
        "mapid": "1",
        "bftitle": "Vayres",
        "sector": "0",
        "posx": 3413.569091796875,
        "posy": 7547.22412109375,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "255858990",
        "mapid": "1",
        "bftitle": "Aléria",
        "sector": "0",
        "posx": 6304.365234375,
        "posy": 8681.4970703125,
        "gamemap": "70439"
    },
    {
        "id": "256006398",
        "mapid": "1",
        "bftitle": "Givhult",
        "sector": "0",
        "posx": 7325.6982421875,
        "posy": 1775.3280029296875,
        "gamemap": "205"
    },
    {
        "id": "256083587",
        "mapid": "1",
        "bftitle": "Budweis",
        "sector": "0",
        "posx": 7757.8701171875,
        "posy": 5779.81298828125,
        "gamemap": "201"
    },
    {
        "id": "256658796",
        "mapid": "1",
        "bftitle": "Kirovskoye",
        "sector": "0",
        "posx": 13833.1201171875,
        "posy": 7404.8291015625,
        "gamemap": "70439"
    },
    {
        "id": "257020694",
        "mapid": "1",
        "bftitle": "Teplyk",
        "sector": "0",
        "posx": 12234.150390625,
        "posy": 5918.26904296875,
        "gamemap": "70439"
    },
    {
        "id": "257149663",
        "mapid": "1",
        "bftitle": "Cornsay",
        "sector": "0",
        "posx": 2988.0869140625,
        "posy": 3005.56689453125,
        "gamemap": "203",
        "rotation": 1
    },
    {
        "id": "257168893",
        "mapid": "1",
        "bftitle": "Obergünzburg",
        "sector": "0",
        "posx": 6568.90087890625,
        "posy": 6281.94189453125,
        "gamemap": "204"
    },
    {
        "id": "257809830",
        "mapid": "1",
        "bftitle": "Wexford",
        "sector": "0",
        "posx": 1622.14697265625,
        "posy": 4214.55712890625,
        "gamemap": "70439"
    },
    {
        "id": "258171206",
        "mapid": "1",
        "bftitle": "Cheb",
        "sector": "0",
        "posx": 7142.1767578125,
        "posy": 5277.15380859375,
        "gamemap": "201"
    },
    {
        "id": "258201978",
        "mapid": "1",
        "bftitle": "Ves'yegonsk",
        "sector": "0",
        "posx": 14437.1201171875,
        "posy": 906.7656860351562,
        "gamemap": "70439"
    },
    {
        "id": "258505152",
        "mapid": "1",
        "bftitle": "Vårsta",
        "sector": "0",
        "posx": 8731.9013671875,
        "posy": 620.1408081054688,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "258511085",
        "mapid": "1",
        "bftitle": "Novi Pazar",
        "sector": "0",
        "posx": 9527.74609375,
        "posy": 8266.5693359375,
        "gamemap": "201"
    },
    {
        "id": "258563418",
        "mapid": "1",
        "bftitle": "Hlukhiv",
        "sector": "0",
        "posx": 13456.83984375,
        "posy": 4529.1298828125,
        "gamemap": "205",
        "rotation": 1
    },
    {
        "id": "259241438",
        "mapid": "1",
        "bftitle": "Alexandria",
        "sector": "0",
        "posx": 10940.9501953125,
        "posy": 7921.64892578125,
        "gamemap": "201"
    },
    {
        "id": "259320936",
        "mapid": "1",
        "bftitle": "Prešov",
        "sector": "0",
        "posx": 9739.30078125,
        "posy": 5769.0498046875,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "260237878",
        "mapid": "1",
        "bftitle": "Ulcinj",
        "sector": "0",
        "posx": 9150.236328125,
        "posy": 8750.255859375,
        "gamemap": "70439"
    },
    {
        "id": "260275093",
        "mapid": "1",
        "bftitle": "Pamiers",
        "sector": "0",
        "posx": 3984.031005859375,
        "posy": 8274.6591796875,
        "gamemap": "201"
    },
    {
        "id": "260633514",
        "mapid": "1",
        "bftitle": "Mareuil",
        "sector": "0",
        "posx": 3646.93408203125,
        "posy": 7312.294921875,
        "gamemap": "201"
    },
    {
        "id": "260653206",
        "mapid": "1",
        "bftitle": "Halle",
        "sector": "0",
        "posx": 5925.77587890625,
        "posy": 4344.873046875,
        "gamemap": "201"
    },
    {
        "id": "260789174",
        "mapid": "1",
        "bftitle": "Varvara",
        "sector": "0",
        "posx": 10450.099609375,
        "posy": 9284.212890625,
        "gamemap": "70439"
    },
    {
        "id": "261599521",
        "mapid": "1",
        "bftitle": "Marche-en-Famenne",
        "sector": "0",
        "posx": 5042.22998046875,
        "posy": 5221.4140625,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "261632517",
        "mapid": "1",
        "bftitle": "Przasnysz",
        "sector": "0",
        "posx": 9635.63671875,
        "posy": 3881.077880859375,
        "gamemap": "201"
    },
    {
        "id": "261890017",
        "mapid": "1",
        "bftitle": "Burntisland",
        "sector": "0",
        "posx": 2567.702880859375,
        "posy": 2331.48193359375,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "262106469",
        "mapid": "1",
        "bftitle": "Cetinje",
        "sector": "0",
        "posx": 9059.3095703125,
        "posy": 8566.556640625,
        "gamemap": "70439"
    },
    {
        "id": "262138059",
        "mapid": "1",
        "bftitle": "Pamukova",
        "sector": "0",
        "posx": 12357.9296875,
        "posy": 9308.07421875,
        "gamemap": "70439"
    },
    {
        "id": "262920299",
        "mapid": "1",
        "bftitle": "Biasca",
        "sector": "0",
        "posx": 6144.287109375,
        "posy": 6926.34423828125,
        "gamemap": "201"
    },
    {
        "id": "263124028",
        "mapid": "1",
        "bftitle": "Pskov",
        "sector": "0",
        "posx": 11825.1103515625,
        "posy": 1383.7060546875,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "263370464",
        "mapid": "1",
        "bftitle": "Nadvirna",
        "sector": "0",
        "posx": 10717.009765625,
        "posy": 5932.05810546875,
        "gamemap": "201"
    },
    {
        "id": "263546463",
        "mapid": "1",
        "bftitle": "Warlubie",
        "sector": "0",
        "posx": 8977.3154296875,
        "posy": 3600.260009765625,
        "gamemap": "70439"
    },
    {
        "id": "263612830",
        "mapid": "1",
        "bftitle": "Khmel’nyts’kyy",
        "sector": "0",
        "posx": 11428.48046875,
        "posy": 5577.80810546875,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "263665707",
        "mapid": "1",
        "bftitle": "Utena",
        "sector": "0",
        "posx": 11019.1201171875,
        "posy": 2626.762939453125,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "263687107",
        "mapid": "1",
        "bftitle": "Vars",
        "sector": "0",
        "posx": 5476.55615234375,
        "posy": 7668.2841796875,
        "gamemap": "201"
    },
    {
        "id": "263936215",
        "mapid": "1",
        "bftitle": "Neubrandenburg",
        "sector": "0",
        "posx": 7465.3330078125,
        "posy": 3588.864013671875,
        "gamemap": "201"
    },
    {
        "id": "264145735",
        "mapid": "1",
        "bftitle": "Vitry-aux-Loges",
        "sector": "0",
        "posx": 4179.451171875,
        "posy": 6243.2529296875,
        "gamemap": "70439"
    },
    {
        "id": "264162929",
        "mapid": "1",
        "bftitle": "Tudor Vladimirescu",
        "sector": "0",
        "posx": 11664,
        "posy": 7410.27978515625,
        "gamemap": "203"
    },
    {
        "id": "264413461",
        "mapid": "1",
        "bftitle": "Karakoç Ilıcası",
        "sector": "0",
        "posx": 11403,
        "posy": 10231.509765625,
        "gamemap": "203",
        "rotation": 1
    },
    {
        "id": "264541979",
        "mapid": "1",
        "bftitle": "Saldus",
        "sector": "0",
        "posx": 10106.919921875,
        "posy": 2011.10302734375,
        "gamemap": "70439"
    },
    {
        "id": "264577884",
        "mapid": "1",
        "bftitle": "Ingatestone",
        "sector": "0",
        "posx": 3625.094970703125,
        "posy": 4532.9130859375,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "264612416",
        "mapid": "1",
        "bftitle": "Balıkesir",
        "sector": "0",
        "posx": 11689.240234375,
        "posy": 9639.4658203125,
        "gamemap": "201"
    },
    {
        "id": "264798396",
        "mapid": "1",
        "bftitle": "Eaunes",
        "sector": "0",
        "posx": 3911.912109375,
        "posy": 8151.35888671875,
        "gamemap": "203",
        "rotation": 1
    },
    {
        "id": "264973087",
        "mapid": "1",
        "bftitle": "Donaueschingen",
        "sector": "0",
        "posx": 6005.76220703125,
        "posy": 6233.64208984375,
        "gamemap": "203",
        "rotation": 3
    },
    {
        "id": "265030373",
        "mapid": "1",
        "bftitle": "Elsö",
        "sector": "0",
        "posx": 9812.40625,
        "posy": 54.52880096435547,
        "gamemap": "70439"
    },
    {
        "id": "265433263",
        "mapid": "1",
        "bftitle": "Humenné",
        "sector": "0",
        "posx": 9939.306640625,
        "posy": 5796.6259765625,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "265495515",
        "mapid": "1",
        "bftitle": "Sultangazi",
        "sector": "0",
        "posx": 11978.2802734375,
        "posy": 9067.490234375,
        "gamemap": "203",
        "rotation": 2
    },
    {
        "id": "266154693",
        "mapid": "1",
        "bftitle": "Sömmerda",
        "sector": "0",
        "posx": 6791.44287109375,
        "posy": 4747.8701171875,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "266446648",
        "mapid": "1",
        "bftitle": "Saint-Bonnet-de-Joux",
        "sector": "0",
        "posx": 4816.01416015625,
        "posy": 6873.7822265625,
        "gamemap": "201"
    },
    {
        "id": "266478475",
        "mapid": "1",
        "bftitle": "Kalininskiy",
        "sector": "0",
        "posx": 12423.1796875,
        "posy": 135.32550048828125,
        "gamemap": "205",
        "rotation": 2
    },
    {
        "id": "266643737",
        "mapid": "1",
        "bftitle": "Kasti",
        "sector": "0",
        "posx": 10707.4296875,
        "posy": 788.2052001953125,
        "gamemap": "70439"
    },
    {
        "id": "266928570",
        "mapid": "1",
        "bftitle": "Guise",
        "sector": "0",
        "posx": 4578.5,
        "posy": 5359.3828125,
        "gamemap": "70439"
    },
    {
        "id": "267064354",
        "mapid": "1",
        "bftitle": "Pederstrup",
        "sector": "0",
        "posx": 6643.4482421875,
        "posy": 2186.75390625,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "267214609",
        "mapid": "1",
        "bftitle": "Lödöse",
        "sector": "0",
        "posx": 7071.65283203125,
        "posy": 1261.5579833984375,
        "gamemap": "70439"
    },
    {
        "id": "267480124",
        "mapid": "1",
        "bftitle": "Lärbro",
        "sector": "0",
        "posx": 9018.5859375,
        "posy": 1378.3289794921875,
        "gamemap": "70439"
    },
    {
        "id": "268179128",
        "mapid": "1",
        "bftitle": "Piraeus",
        "sector": "0",
        "posx": 10434.5595703125,
        "posy": 10293.2802734375,
        "gamemap": "70439"
    },
    {
        "id": "268230633",
        "mapid": "1",
        "bftitle": "Monastyrshchina",
        "sector": "0",
        "posx": 12847.6396484375,
        "posy": 3217.783935546875,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "268415295",
        "mapid": "1",
        "bftitle": "Jelenia Góra",
        "sector": "0",
        "posx": 8125.64306640625,
        "posy": 4896.615234375,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "268884696",
        "mapid": "1",
        "bftitle": "Kletino",
        "sector": "0",
        "posx": 13318,
        "posy": 1773.498046875,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "269145703",
        "mapid": "1",
        "bftitle": "Witnica",
        "sector": "0",
        "posx": 7881.955078125,
        "posy": 4050.14404296875,
        "gamemap": "203"
    },
    {
        "id": "269388125",
        "mapid": "1",
        "bftitle": "Valky",
        "sector": "0",
        "posx": 13953.990234375,
        "posy": 5388.9599609375,
        "gamemap": "203"
    },
    {
        "id": "269400152",
        "mapid": "1",
        "bftitle": "Kobryn",
        "sector": "0",
        "posx": 10654.580078125,
        "posy": 4272.6279296875,
        "gamemap": "201"
    },
    {
        "id": "270119259",
        "mapid": "1",
        "bftitle": "Zittau",
        "sector": "0",
        "posx": 7855.57080078125,
        "posy": 4897.55419921875,
        "gamemap": "70439"
    },
    {
        "id": "270146855",
        "mapid": "1",
        "bftitle": "Mullsjö",
        "sector": "0",
        "posx": 7583.15478515625,
        "posy": 1326.261962890625,
        "gamemap": "203",
        "rotation": 2
    },
    {
        "id": "270154576",
        "mapid": "1",
        "bftitle": "Ostrów Wielkopolski",
        "sector": "0",
        "posx": 8734.728515625,
        "posy": 4540.17578125,
        "gamemap": "70439"
    },
    {
        "id": "270174414",
        "mapid": "1",
        "bftitle": "Karelichy",
        "sector": "0",
        "posx": 11177.580078125,
        "posy": 3611.552001953125,
        "gamemap": "203"
    },
    {
        "id": "270426647",
        "mapid": "1",
        "bftitle": "Herceg Novi",
        "sector": "0",
        "posx": 8948.8984375,
        "posy": 8541.591796875,
        "gamemap": "204"
    },
    {
        "id": "270595175",
        "mapid": "1",
        "bftitle": "Starokostyantyniv",
        "sector": "0",
        "posx": 11489.1298828125,
        "posy": 5424.78515625,
        "gamemap": "203",
        "rotation": 2
    },
    {
        "id": "270810465",
        "mapid": "1",
        "bftitle": "İnebolu",
        "sector": "0",
        "posx": 13408.7197265625,
        "posy": 8750.71875,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "270890803",
        "mapid": "1",
        "bftitle": "Lyasny",
        "sector": "0",
        "posx": 11643.3203125,
        "posy": 3378.27294921875,
        "gamemap": "203",
        "rotation": 1
    },
    {
        "id": "271233367",
        "mapid": "1",
        "bftitle": "Sülstorf",
        "sector": "0",
        "posx": 6818.7880859375,
        "posy": 3648.611083984375,
        "gamemap": "203"
    },
    {
        "id": "271753879",
        "mapid": "1",
        "bftitle": "Taranto",
        "sector": "0",
        "posx": 8578.939453125,
        "posy": 9346.103515625,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "271803714",
        "mapid": "1",
        "bftitle": "Aurich",
        "sector": "0",
        "posx": 5702.6630859375,
        "posy": 3679.764892578125,
        "gamemap": "201"
    },
    {
        "id": "271971074",
        "mapid": "1",
        "bftitle": "Agios Stefanos",
        "sector": "0",
        "posx": 10950.6796875,
        "posy": 10480.4296875,
        "gamemap": "70439"
    },
    {
        "id": "272222790",
        "mapid": "1",
        "bftitle": "Pustoshka",
        "sector": "0",
        "posx": 12202.0703125,
        "posy": 3821.403076171875,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "272690061",
        "mapid": "1",
        "bftitle": "Romodan",
        "sector": "0",
        "posx": 13283.5595703125,
        "posy": 5318.09814453125,
        "gamemap": "70439"
    },
    {
        "id": "272956323",
        "mapid": "1",
        "bftitle": "Illintsi",
        "sector": "0",
        "posx": 12079.580078125,
        "posy": 5721.125,
        "gamemap": "204"
    },
    {
        "id": "274142182",
        "mapid": "1",
        "bftitle": "Flesberg",
        "sector": "0",
        "posx": 6279.94921875,
        "posy": 214.13999938964844,
        "gamemap": "203",
        "rotation": 1
    },
    {
        "id": "274258395",
        "mapid": "1",
        "bftitle": "Sheen",
        "sector": "0",
        "posx": 2977.623046875,
        "posy": 3816.72705078125,
        "gamemap": "201"
    },
    {
        "id": "274662830",
        "mapid": "1",
        "bftitle": "Moffat",
        "sector": "0",
        "posx": 2505.075927734375,
        "posy": 2713.9970703125,
        "gamemap": "203",
        "rotation": 1
    },
    {
        "id": "274955073",
        "mapid": "1",
        "bftitle": "Les Bessons",
        "sector": "0",
        "posx": 5383.33203125,
        "posy": 8035.30322265625,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "275541928",
        "mapid": "1",
        "bftitle": "Sainte-Terre",
        "sector": "0",
        "posx": 3480.826904296875,
        "posy": 7570.38623046875,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "276248628",
        "mapid": "1",
        "bftitle": "Le Monêtier-les-Bains",
        "sector": "0",
        "posx": 5422.328125,
        "posy": 7511.07080078125,
        "gamemap": "203"
    },
    {
        "id": "277424405",
        "mapid": "1",
        "bftitle": "La Roche-Chalais",
        "sector": "0",
        "posx": 3519.910888671875,
        "posy": 7438.2021484375,
        "gamemap": "70439"
    },
    {
        "id": "277449862",
        "mapid": "1",
        "bftitle": "Ukromne",
        "sector": "0",
        "posx": 13513.8798828125,
        "posy": 7518.77392578125,
        "gamemap": "203",
        "rotation": 1
    },
    {
        "id": "277463640",
        "mapid": "1",
        "bftitle": "Bredstedt",
        "sector": "0",
        "posx": 6126.77880859375,
        "posy": 3084.077880859375,
        "gamemap": "70439"
    },
    {
        "id": "277867479",
        "mapid": "1",
        "bftitle": "Losevka",
        "sector": "0",
        "posx": 12128.1103515625,
        "posy": 3471.464111328125,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "278126478",
        "mapid": "1",
        "bftitle": "Kırklareli",
        "sector": "0",
        "posx": 11496.01953125,
        "posy": 8827.2265625,
        "gamemap": "70439"
    },
    {
        "id": "278656666",
        "mapid": "1",
        "bftitle": "Jaunpils",
        "sector": "0",
        "posx": 10260.9697265625,
        "posy": 1974.074951171875,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "278700447",
        "mapid": "1",
        "bftitle": "Vecpiebalga",
        "sector": "0",
        "posx": 11082.509765625,
        "posy": 1796.5679931640625,
        "gamemap": "70439"
    },
    {
        "id": "278837428",
        "mapid": "1",
        "bftitle": "Hoogstede",
        "sector": "0",
        "posx": 5552.27001953125,
        "posy": 4093.842041015625,
        "gamemap": "70439"
    },
    {
        "id": "280179599",
        "mapid": "1",
        "bftitle": "Haule",
        "sector": "0",
        "posx": 5363.31298828125,
        "posy": 3872.83203125,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "280247642",
        "mapid": "1",
        "bftitle": "Darlington",
        "sector": "0",
        "posx": 3060.56298828125,
        "posy": 3129.1220703125,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "280311365",
        "mapid": "1",
        "bftitle": "Lokachi",
        "sector": "0",
        "posx": 10740.48046875,
        "posy": 4972.65478515625,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "280509114",
        "mapid": "1",
        "bftitle": "Ath",
        "sector": "0",
        "posx": 4634.35302734375,
        "posy": 5015.56494140625,
        "gamemap": "70439"
    },
    {
        "id": "280567749",
        "mapid": "1",
        "bftitle": "Pruzhany",
        "sector": "0",
        "posx": 10683.66015625,
        "posy": 4107.1181640625,
        "gamemap": "201"
    },
    {
        "id": "280661056",
        "mapid": "1",
        "bftitle": "Spandau Flugplatz",
        "sector": "0",
        "posx": 7384.09423828125,
        "posy": 4109.498046875,
        "gamemap": "205",
        "rotation": 1
    },
    {
        "id": "281151140",
        "mapid": "1",
        "bftitle": "Neuruppin",
        "sector": "0",
        "posx": 7254.75,
        "posy": 3944.50390625,
        "gamemap": "70439"
    },
    {
        "id": "281199734",
        "mapid": "1",
        "bftitle": "Vasanello",
        "sector": "0",
        "posx": 7134.48193359375,
        "posy": 8556.78515625,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "281482166",
        "mapid": "1",
        "bftitle": "Kulmbach",
        "sector": "0",
        "posx": 6871.44189453125,
        "posy": 5267.4677734375,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "281713446",
        "mapid": "1",
        "bftitle": "Preston",
        "sector": "0",
        "posx": 2718.134033203125,
        "posy": 3497.0419921875,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "281766221",
        "mapid": "1",
        "bftitle": "Pisa",
        "sector": "0",
        "posx": 6564.619140625,
        "posy": 8034.130859375,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "281983977",
        "mapid": "1",
        "bftitle": "Druzhny",
        "sector": "0",
        "posx": 11692.6396484375,
        "posy": 3582.2060546875,
        "gamemap": "205",
        "rotation": 1
    },
    {
        "id": "282350025",
        "mapid": "1",
        "bftitle": "Chaudes-Aigues",
        "sector": "0",
        "posx": 4395.47900390625,
        "posy": 7562.01708984375,
        "gamemap": "201"
    },
    {
        "id": "282485528",
        "mapid": "1",
        "bftitle": "Vaggeryd",
        "sector": "0",
        "posx": 7662.33203125,
        "posy": 1557.81103515625,
        "gamemap": "203",
        "rotation": 3
    },
    {
        "id": "282884125",
        "mapid": "1",
        "bftitle": "Inkoo",
        "sector": "0",
        "posx": 10551.4599609375,
        "posy": 106.30750274658203,
        "gamemap": "70439"
    },
    {
        "id": "283111043",
        "mapid": "1",
        "bftitle": "Singen",
        "sector": "0",
        "posx": 6106.3720703125,
        "posy": 6319.7841796875,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "283410955",
        "mapid": "1",
        "bftitle": "Libatse",
        "sector": "0",
        "posx": 10691.7099609375,
        "posy": 909.6566162109375,
        "gamemap": "70439"
    },
    {
        "id": "283418895",
        "mapid": "1",
        "bftitle": "Talashkino",
        "sector": "0",
        "posx": 12948.8603515625,
        "posy": 3062.674072265625,
        "gamemap": "70439"
    },
    {
        "id": "283649304",
        "mapid": "1",
        "bftitle": "Sergovitsy",
        "sector": "0",
        "posx": 11962.01953125,
        "posy": 426.4101867675781,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "283673707",
        "mapid": "1",
        "bftitle": "Sibiu",
        "sector": "0",
        "posx": 10594.080078125,
        "posy": 7164.55517578125,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "283740289",
        "mapid": "1",
        "bftitle": "Brechin",
        "sector": "0",
        "posx": 2736.096923828125,
        "posy": 1975.4610595703125,
        "gamemap": "203",
        "rotation": 3
    },
    {
        "id": "284014360",
        "mapid": "1",
        "bftitle": "Novhorod-Sivers'kyy",
        "sector": "0",
        "posx": 13264.919921875,
        "posy": 4372.6220703125,
        "gamemap": "70439"
    },
    {
        "id": "284418484",
        "mapid": "1",
        "bftitle": "Popovskoye",
        "sector": "0",
        "posx": 14729.0400390625,
        "posy": 665.017578125,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "284697067",
        "mapid": "1",
        "bftitle": "Feltre",
        "sector": "0",
        "posx": 7003.34912109375,
        "posy": 7070.85107421875,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "285403779",
        "mapid": "1",
        "bftitle": "Tërny",
        "sector": "0",
        "posx": 13472.8095703125,
        "posy": 4854.712890625,
        "gamemap": "203"
    },
    {
        "id": "286005117",
        "mapid": "1",
        "bftitle": "Subotica",
        "sector": "0",
        "posx": 9279.8896484375,
        "posy": 7037.18017578125,
        "gamemap": "70439"
    },
    {
        "id": "286161097",
        "mapid": "1",
        "bftitle": "Jena",
        "sector": "0",
        "posx": 6940.0390625,
        "posy": 4846.384765625,
        "gamemap": "203",
        "rotation": 2
    },
    {
        "id": "286636881",
        "mapid": "1",
        "bftitle": "Seda",
        "sector": "0",
        "posx": 11063.08984375,
        "posy": 1474.16796875,
        "gamemap": "70439"
    },
    {
        "id": "287040044",
        "mapid": "1",
        "bftitle": "Garwolin",
        "sector": "0",
        "posx": 9850.9013671875,
        "posy": 4424.4970703125,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "287062139",
        "mapid": "1",
        "bftitle": "Selsey",
        "sector": "0",
        "posx": 3283.513916015625,
        "posy": 4973.580078125,
        "gamemap": "70439"
    },
    {
        "id": "287094747",
        "mapid": "1",
        "bftitle": "Dax",
        "sector": "0",
        "posx": 3206.16796875,
        "posy": 8033.39990234375,
        "gamemap": "205"
    },
    {
        "id": "287367705",
        "mapid": "1",
        "bftitle": "Stansted Mountfitchet",
        "sector": "0",
        "posx": 3609.264892578125,
        "posy": 4340.5458984375,
        "gamemap": "70439"
    },
    {
        "id": "287404748",
        "mapid": "1",
        "bftitle": "Lyadovo",
        "sector": "0",
        "posx": 12246.16015625,
        "posy": 2106.458984375,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "287415621",
        "mapid": "1",
        "bftitle": "Partenstein",
        "sector": "0",
        "posx": 6274.9169921875,
        "posy": 5331.51806640625,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "287618074",
        "mapid": "1",
        "bftitle": "Billingstad",
        "sector": "0",
        "posx": 6593.38916015625,
        "posy": 212.75650024414062,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "287672052",
        "mapid": "1",
        "bftitle": "Elektrėnai",
        "sector": "0",
        "posx": 10735.759765625,
        "posy": 3005.465087890625,
        "gamemap": "70439"
    },
    {
        "id": "287743698",
        "mapid": "1",
        "bftitle": "Mellerup",
        "sector": "0",
        "posx": 6499.16796875,
        "posy": 2044.10498046875,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "287780401",
        "mapid": "1",
        "bftitle": "Soresina",
        "sector": "0",
        "posx": 6404.8701171875,
        "posy": 7380.2880859375,
        "gamemap": "201"
    },
    {
        "id": "287819958",
        "mapid": "1",
        "bftitle": "Oppurg Flugplatz",
        "sector": "0",
        "posx": 6930.82177734375,
        "posy": 4984.94189453125,
        "gamemap": "205",
        "rotation": 1
    },
    {
        "id": "287832174",
        "mapid": "1",
        "bftitle": "Bülach",
        "sector": "0",
        "posx": 6018.48876953125,
        "posy": 6423.7900390625,
        "gamemap": "201"
    },
    {
        "id": "287901255",
        "mapid": "1",
        "bftitle": "Vicenza",
        "sector": "0",
        "posx": 6899.93017578125,
        "posy": 7271.56201171875,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "288740846",
        "mapid": "1",
        "bftitle": "Pruszcz Pomorski",
        "sector": "0",
        "posx": 8849.65625,
        "posy": 3727.8359375,
        "gamemap": "203"
    },
    {
        "id": "289185589",
        "mapid": "1",
        "bftitle": "Leeuwarden Vliegveld",
        "sector": "0",
        "posx": 5266.01904296875,
        "posy": 3819.22412109375,
        "gamemap": "205",
        "rotation": 2
    },
    {
        "id": "289215088",
        "mapid": "1",
        "bftitle": "Gescher",
        "sector": "0",
        "posx": 5568.3369140625,
        "posy": 4397.43603515625,
        "gamemap": "203",
        "rotation": 1
    },
    {
        "id": "289386564",
        "mapid": "1",
        "bftitle": "Anfield",
        "sector": "0",
        "posx": 2675.596923828125,
        "posy": 3658.116943359375,
        "gamemap": "205"
    },
    {
        "id": "289798970",
        "mapid": "1",
        "bftitle": "Kungsbacka",
        "sector": "0",
        "posx": 7077.81689453125,
        "posy": 1562.208984375,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "289894695",
        "mapid": "1",
        "bftitle": "Naro-Fominsk",
        "sector": "0",
        "posx": 14282.5400390625,
        "posy": 2685.303955078125,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "289942240",
        "mapid": "1",
        "bftitle": "Confolens",
        "sector": "0",
        "posx": 3710.445068359375,
        "posy": 7072.630859375,
        "gamemap": "201"
    },
    {
        "id": "289951949",
        "mapid": "1",
        "bftitle": "Focke-Wulf Fabrik",
        "sector": "0",
        "posx": 6128.30810546875,
        "posy": 3804.72607421875,
        "gamemap": "203"
    },
    {
        "id": "290031149",
        "mapid": "1",
        "bftitle": "Bal’shavik",
        "sector": "0",
        "posx": 11595.669921875,
        "posy": 3392.303955078125,
        "gamemap": "201"
    },
    {
        "id": "290102952",
        "mapid": "1",
        "bftitle": "Hanstholm",
        "sector": "0",
        "posx": 6040.81787109375,
        "posy": 1766.2679443359375,
        "gamemap": "70439"
    },
    {
        "id": "290421340",
        "mapid": "1",
        "bftitle": "Secondigny",
        "sector": "0",
        "posx": 3392.85400390625,
        "posy": 6818.93603515625,
        "gamemap": "70439"
    },
    {
        "id": "290429610",
        "mapid": "1",
        "bftitle": "Bol'shoye Selo",
        "sector": "0",
        "posx": 14927.51953125,
        "posy": 1436.760009765625,
        "gamemap": "70439"
    },
    {
        "id": "291445002",
        "mapid": "1",
        "bftitle": "Talachyn",
        "sector": "0",
        "posx": 12219.6298828125,
        "posy": 3187.8330078125,
        "gamemap": "201"
    },
    {
        "id": "291767102",
        "mapid": "1",
        "bftitle": "Kapyl",
        "sector": "0",
        "posx": 11456.259765625,
        "posy": 3815.93896484375,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "292009191",
        "mapid": "1",
        "bftitle": "Zelenograd",
        "sector": "0",
        "posx": 14413.9599609375,
        "posy": 2373.73193359375,
        "gamemap": "201"
    },
    {
        "id": "292287342",
        "mapid": "1",
        "bftitle": "Yahotyn",
        "sector": "0",
        "posx": 12825.509765625,
        "posy": 5184.90283203125,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "292358106",
        "mapid": "1",
        "bftitle": "Lüchow",
        "sector": "0",
        "posx": 6784.57421875,
        "posy": 3906.069091796875,
        "gamemap": "203",
        "rotation": 3
    },
    {
        "id": "293662090",
        "mapid": "1",
        "bftitle": "Tingvatn",
        "sector": "0",
        "posx": 5631.3271484375,
        "posy": 1069.7349853515625,
        "gamemap": "201"
    },
    {
        "id": "293881929",
        "mapid": "1",
        "bftitle": "Kranj",
        "sector": "0",
        "posx": 7733.4267578125,
        "posy": 6969.34912109375,
        "gamemap": "203",
        "rotation": 2
    },
    {
        "id": "294105473",
        "mapid": "1",
        "bftitle": "Darovoye",
        "sector": "0",
        "posx": 14870.919921875,
        "posy": 3045.117919921875,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "294164417",
        "mapid": "1",
        "bftitle": "Skive",
        "sector": "0",
        "posx": 6164.97998046875,
        "posy": 2064.652099609375,
        "gamemap": "70439"
    },
    {
        "id": "294439861",
        "mapid": "1",
        "bftitle": "Bærums Verk",
        "sector": "0",
        "posx": 6580.365234375,
        "posy": 164.3256072998047,
        "gamemap": "201"
    },
    {
        "id": "294470796",
        "mapid": "1",
        "bftitle": "Ashmyany",
        "sector": "0",
        "posx": 11117.6103515625,
        "posy": 3181.593994140625,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "294751112",
        "mapid": "1",
        "bftitle": "Lienz",
        "sector": "0",
        "posx": 7257.9951171875,
        "posy": 6724.783203125,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "295665567",
        "mapid": "1",
        "bftitle": "Terebutitsy",
        "sector": "0",
        "posx": 12510.76953125,
        "posy": 1107.177978515625,
        "gamemap": "70439"
    },
    {
        "id": "295762547",
        "mapid": "1",
        "bftitle": "Busto Arsizio",
        "sector": "0",
        "posx": 6108.962890625,
        "posy": 7244.3330078125,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "295873641",
        "mapid": "1",
        "bftitle": "Kosaya Gora",
        "sector": "0",
        "posx": 14520.419921875,
        "posy": 3334.282958984375,
        "gamemap": "201"
    },
    {
        "id": "295977963",
        "mapid": "1",
        "bftitle": "Pyetrykaw",
        "sector": "0",
        "posx": 11866.8798828125,
        "posy": 4313.494140625,
        "gamemap": "70439"
    },
    {
        "id": "296406356",
        "mapid": "1",
        "bftitle": "Bardejov",
        "sector": "0",
        "posx": 9750.66796875,
        "posy": 5636.6611328125,
        "gamemap": "203"
    },
    {
        "id": "296467088",
        "mapid": "1",
        "bftitle": "Thirsk",
        "sector": "0",
        "posx": 3121.029052734375,
        "posy": 3276.77294921875,
        "gamemap": "203",
        "rotation": 1
    },
    {
        "id": "296803769",
        "mapid": "1",
        "bftitle": "Stralendorf",
        "sector": "0",
        "posx": 6828.4228515625,
        "posy": 3606.492919921875,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "296898014",
        "mapid": "1",
        "bftitle": "Tokmak",
        "sector": "0",
        "posx": 13983.349609375,
        "posy": 6540.10205078125,
        "gamemap": "205"
    },
    {
        "id": "297289250",
        "mapid": "1",
        "bftitle": "Grenå",
        "sector": "0",
        "posx": 6690.8720703125,
        "posy": 2142.77001953125,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "297504044",
        "mapid": "1",
        "bftitle": "Béziers",
        "sector": "0",
        "posx": 4457.14697265625,
        "posy": 8183.67919921875,
        "gamemap": "70439"
    },
    {
        "id": "298246738",
        "mapid": "1",
        "bftitle": "Kimito",
        "sector": "0",
        "posx": 10177.5498046875,
        "posy": 38.43402099609375,
        "gamemap": "201"
    },
    {
        "id": "298468696",
        "mapid": "1",
        "bftitle": "Carpiquet Aérodrome",
        "sector": "0",
        "posx": 3345.987060546875,
        "posy": 5691.30810546875,
        "gamemap": "205",
        "rotation": 1
    },
    {
        "id": "298487243",
        "mapid": "1",
        "bftitle": "Osovo",
        "sector": "0",
        "posx": 11384.48046875,
        "posy": 3524.636962890625,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "298732472",
        "mapid": "1",
        "bftitle": "Krasnyy",
        "sector": "0",
        "posx": 15270.8095703125,
        "posy": 2970.658935546875,
        "gamemap": "201"
    },
    {
        "id": "298737324",
        "mapid": "1",
        "bftitle": "Grenoble",
        "sector": "0",
        "posx": 5185.5,
        "posy": 7433.43408203125,
        "gamemap": "201"
    },
    {
        "id": "298879159",
        "mapid": "1",
        "bftitle": "Partille",
        "sector": "0",
        "posx": 7052.69189453125,
        "posy": 1404.8330078125,
        "gamemap": "203",
        "rotation": 2
    },
    {
        "id": "299172617",
        "mapid": "1",
        "bftitle": "Krośniewice",
        "sector": "0",
        "posx": 9134.4111328125,
        "posy": 4252.3271484375,
        "gamemap": "204",
        "rotation": 3
    },
    {
        "id": "299259395",
        "mapid": "1",
        "bftitle": "Vitebsk",
        "sector": "0",
        "posx": 12368.9501953125,
        "posy": 2787.492919921875,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "299569755",
        "mapid": "1",
        "bftitle": "Mevagissey",
        "sector": "0",
        "posx": 2118.9150390625,
        "posy": 5183.9638671875,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "299610619",
        "mapid": "1",
        "bftitle": "Champdieu",
        "sector": "0",
        "posx": 4700.97509765625,
        "posy": 7230.18896484375,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "299614419",
        "mapid": "1",
        "bftitle": "Kuleshovka",
        "sector": "0",
        "posx": 15110.58984375,
        "posy": 6617.0419921875,
        "gamemap": "203",
        "rotation": 3
    },
    {
        "id": "299893041",
        "mapid": "1",
        "bftitle": "Douaumont Village",
        "sector": "0",
        "posx": 15899.33984375,
        "posy": 15936.58984375,
        "gamemap": "70439"
    },
    {
        "id": "300372957",
        "mapid": "1",
        "bftitle": "Ed",
        "sector": "0",
        "posx": 7010.68408203125,
        "posy": 765.1929931640625,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "300552853",
        "mapid": "1",
        "bftitle": "Legionowo",
        "sector": "0",
        "posx": 9646.0595703125,
        "posy": 4144.8388671875,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "300844990",
        "mapid": "1",
        "bftitle": "Bayreuth",
        "sector": "0",
        "posx": 6908.9140625,
        "posy": 5337.1669921875,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "301283947",
        "mapid": "1",
        "bftitle": "Dubrowna",
        "sector": "0",
        "posx": 12511.4404296875,
        "posy": 3105.041015625,
        "gamemap": "203",
        "rotation": 3
    },
    {
        "id": "302065705",
        "mapid": "1",
        "bftitle": "Kragerø",
        "sector": "0",
        "posx": 6251.87890625,
        "posy": 790.6646728515625,
        "gamemap": "201"
    },
    {
        "id": "302552682",
        "mapid": "1",
        "bftitle": "Vinica",
        "sector": "0",
        "posx": 10113.1103515625,
        "posy": 8768.7314453125,
        "gamemap": "203"
    },
    {
        "id": "302704719",
        "mapid": "1",
        "bftitle": "Emmen",
        "sector": "0",
        "posx": 5538.61279296875,
        "posy": 3973.096923828125,
        "gamemap": "70439"
    },
    {
        "id": "302809114",
        "mapid": "1",
        "bftitle": "Bergkvara",
        "sector": "0",
        "posx": 8226.4072265625,
        "posy": 2157.22607421875,
        "gamemap": "70439"
    },
    {
        "id": "303064110",
        "mapid": "1",
        "bftitle": "Wittstock",
        "sector": "0",
        "posx": 7175.1328125,
        "posy": 3834.8798828125,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "303183161",
        "mapid": "1",
        "bftitle": "Sainte-Luce-sur-Loire",
        "sector": "0",
        "posx": 3079.93603515625,
        "posy": 6540.7158203125,
        "gamemap": "203",
        "rotation": 3
    },
    {
        "id": "303319636",
        "mapid": "1",
        "bftitle": "Struer",
        "sector": "0",
        "posx": 6031.169921875,
        "posy": 2103.510009765625,
        "gamemap": "70439"
    },
    {
        "id": "304032457",
        "mapid": "1",
        "bftitle": "Chernivtsi",
        "sector": "0",
        "posx": 11118.8798828125,
        "posy": 6084.89697265625,
        "gamemap": "203",
        "rotation": 1
    },
    {
        "id": "304060707",
        "mapid": "1",
        "bftitle": "Topolog",
        "sector": "0",
        "posx": 11830.1103515625,
        "posy": 7549.56298828125,
        "gamemap": "70439"
    },
    {
        "id": "304166123",
        "mapid": "1",
        "bftitle": "Vennesla",
        "sector": "0",
        "posx": 5852.47216796875,
        "posy": 1129.5140380859375,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "304189710",
        "mapid": "1",
        "bftitle": "Koźle",
        "sector": "0",
        "posx": 8857.6064453125,
        "posy": 5152.5,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "304253041",
        "mapid": "1",
        "bftitle": "Velenje",
        "sector": "0",
        "posx": 7944.28076171875,
        "posy": 6926.5830078125,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "304316213",
        "mapid": "1",
        "bftitle": "Tsybli",
        "sector": "0",
        "posx": 12776.169921875,
        "posy": 5320.23681640625,
        "gamemap": "203",
        "rotation": 2
    },
    {
        "id": "304338936",
        "mapid": "1",
        "bftitle": "Petroúpolis",
        "sector": "0",
        "posx": 10455.4501953125,
        "posy": 10236.2099609375,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "304339141",
        "mapid": "1",
        "bftitle": "Parentis-en-Born",
        "sector": "0",
        "posx": 3201.10009765625,
        "posy": 7769.6201171875,
        "gamemap": "70439"
    },
    {
        "id": "305252932",
        "mapid": "1",
        "bftitle": "Gusev",
        "sector": "0",
        "posx": 10022.400390625,
        "posy": 3094.537109375,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "305947173",
        "mapid": "1",
        "bftitle": "Matha",
        "sector": "0",
        "posx": 3421.666015625,
        "posy": 7135.64697265625,
        "gamemap": "70439"
    },
    {
        "id": "306017748",
        "mapid": "1",
        "bftitle": "Breukelen",
        "sector": "0",
        "posx": 4981.076171875,
        "posy": 4291.71484375,
        "gamemap": "70439"
    },
    {
        "id": "306143314",
        "mapid": "1",
        "bftitle": "Titel",
        "sector": "0",
        "posx": 9463.9091796875,
        "posy": 7414.703125,
        "gamemap": "70439"
    },
    {
        "id": "306244777",
        "mapid": "1",
        "bftitle": "Kozarovychi",
        "sector": "0",
        "posx": 12412.26953125,
        "posy": 4963.77783203125,
        "gamemap": "201"
    },
    {
        "id": "306309001",
        "mapid": "1",
        "bftitle": "Kehra",
        "sector": "0",
        "posx": 10937.3701171875,
        "posy": 521.50439453125,
        "gamemap": "201"
    },
    {
        "id": "306537988",
        "mapid": "1",
        "bftitle": "Empoli",
        "sector": "0",
        "posx": 6723.158203125,
        "posy": 8029.6689453125,
        "gamemap": "70439"
    },
    {
        "id": "306794944",
        "mapid": "1",
        "bftitle": "Wanfried",
        "sector": "0",
        "posx": 6496.97412109375,
        "posy": 4764.05810546875,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "307196558",
        "mapid": "1",
        "bftitle": "Moscow",
        "sector": "0",
        "posx": 14541.2197265625,
        "posy": 2494.884033203125,
        "gamemap": "70439"
    },
    {
        "id": "307516979",
        "mapid": "1",
        "bftitle": "Arilje",
        "sector": "0",
        "posx": 9405.609375,
        "posy": 8015.94189453125,
        "gamemap": "201"
    },
    {
        "id": "307950872",
        "mapid": "1",
        "bftitle": "Dahme Flugplatz",
        "sector": "0",
        "posx": 7452.10009765625,
        "posy": 4440.9189453125,
        "gamemap": "204",
        "rotation": 1
    },
    {
        "id": "308034910",
        "mapid": "1",
        "bftitle": "Legnica",
        "sector": "0",
        "posx": 8252.541015625,
        "posy": 4750.869140625,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "308049278",
        "mapid": "1",
        "bftitle": "Karamanlar",
        "sector": "0",
        "posx": 12980.330078125,
        "posy": 8909.203125,
        "gamemap": "201"
    },
    {
        "id": "308491631",
        "mapid": "1",
        "bftitle": "Kamyanyets",
        "sector": "0",
        "posx": 10494.419921875,
        "posy": 4182.6640625,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "308768885",
        "mapid": "1",
        "bftitle": "Bryansk",
        "sector": "0",
        "posx": 13590.349609375,
        "posy": 3766.4150390625,
        "gamemap": "201"
    },
    {
        "id": "308811778",
        "mapid": "1",
        "bftitle": "Acton",
        "sector": "0",
        "posx": 3434.06298828125,
        "posy": 4609.5380859375,
        "gamemap": "203"
    },
    {
        "id": "308851249",
        "mapid": "1",
        "bftitle": "Le Monastier-sur-Gazeille",
        "sector": "0",
        "posx": 4687.541015625,
        "posy": 7528.72314453125,
        "gamemap": "203",
        "rotation": 1
    },
    {
        "id": "308979341",
        "mapid": "1",
        "bftitle": "Versailles",
        "sector": "0",
        "posx": 4117.5419921875,
        "posy": 5890.5751953125,
        "gamemap": "70439"
    },
    {
        "id": "309040366",
        "mapid": "1",
        "bftitle": "Toulouse",
        "sector": "0",
        "posx": 3938.20703125,
        "posy": 8076.6767578125,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "309155661",
        "mapid": "1",
        "bftitle": "York",
        "sector": "0",
        "posx": 3197.652099609375,
        "posy": 3415.384033203125,
        "gamemap": "70439"
    },
    {
        "id": "309433462",
        "mapid": "1",
        "bftitle": "Romanishchi",
        "sector": "0",
        "posx": 12062.4501953125,
        "posy": 4017.39404296875,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "309921643",
        "mapid": "1",
        "bftitle": "Forlì",
        "sector": "0",
        "posx": 7047.94482421875,
        "posy": 7824.13720703125,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "310163142",
        "mapid": "1",
        "bftitle": "Lyngdal",
        "sector": "0",
        "posx": 5587.451171875,
        "posy": 1203.3349609375,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "310393200",
        "mapid": "1",
        "bftitle": "Tudu",
        "sector": "0",
        "posx": 11387.8896484375,
        "posy": 613.2603759765625,
        "gamemap": "70439"
    },
    {
        "id": "311082640",
        "mapid": "1",
        "bftitle": "Marseille",
        "sector": "0",
        "posx": 5100.43017578125,
        "posy": 8212.05078125,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "311348695",
        "mapid": "1",
        "bftitle": "Cassano Allo Ionio",
        "sector": "0",
        "posx": 8301.0478515625,
        "posy": 9588.7109375,
        "gamemap": "201"
    },
    {
        "id": "311448128",
        "mapid": "1",
        "bftitle": "Guxhagen",
        "sector": "0",
        "posx": 6298.16796875,
        "posy": 4754.783203125,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "311525222",
        "mapid": "1",
        "bftitle": "Kamyshnya",
        "sector": "0",
        "posx": 13388.3896484375,
        "posy": 5229.2822265625,
        "gamemap": "201"
    },
    {
        "id": "311600515",
        "mapid": "1",
        "bftitle": "Ayvalık",
        "sector": "0",
        "posx": 11340.2099609375,
        "posy": 9765.732421875,
        "gamemap": "70439"
    },
    {
        "id": "311767250",
        "mapid": "1",
        "bftitle": "Rapla",
        "sector": "0",
        "posx": 10782.5,
        "posy": 710.9619140625,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "311771394",
        "mapid": "1",
        "bftitle": "Labouheyre",
        "sector": "0",
        "posx": 3245.166015625,
        "posy": 7827.251953125,
        "gamemap": "70439"
    },
    {
        "id": "312115484",
        "mapid": "1",
        "bftitle": "Höllviken",
        "sector": "0",
        "posx": 7326.953125,
        "posy": 2659.35009765625,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "312399422",
        "mapid": "1",
        "bftitle": "Gaul Village",
        "sector": "0",
        "posx": 15985.099609375,
        "posy": 16190.8896484375,
        "gamemap": "70439"
    },
    {
        "id": "312412306",
        "mapid": "1",
        "bftitle": "Colchester",
        "sector": "0",
        "posx": 3788.529052734375,
        "posy": 4417.53515625,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "312475916",
        "mapid": "1",
        "bftitle": "Slavutych",
        "sector": "0",
        "posx": 12524.1396484375,
        "posy": 4604.49609375,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "312548843",
        "mapid": "1",
        "bftitle": "Alibunar",
        "sector": "0",
        "posx": 9665.603515625,
        "posy": 7468.02490234375,
        "gamemap": "203"
    },
    {
        "id": "312567370",
        "mapid": "1",
        "bftitle": "Flamant Village",
        "sector": "0",
        "posx": 16038.3701171875,
        "posy": 16110.08984375,
        "gamemap": "70439"
    },
    {
        "id": "312671882",
        "mapid": "1",
        "bftitle": "Limbaži",
        "sector": "0",
        "posx": 10760.990234375,
        "posy": 1549.677978515625,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "313022862",
        "mapid": "1",
        "bftitle": "Braunsberg",
        "sector": "0",
        "posx": 9324.716796875,
        "posy": 3202.533935546875,
        "gamemap": "70439"
    },
    {
        "id": "313050489",
        "mapid": "1",
        "bftitle": "Monster",
        "sector": "0",
        "posx": 4738.837890625,
        "posy": 4363,
        "gamemap": "70439"
    },
    {
        "id": "313115952",
        "mapid": "1",
        "bftitle": "Guéret",
        "sector": "0",
        "posx": 4062.198974609375,
        "posy": 7008.77978515625,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "313160930",
        "mapid": "1",
        "bftitle": "Fiesch",
        "sector": "0",
        "posx": 5899.72412109375,
        "posy": 6909.19091796875,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "313419936",
        "mapid": "1",
        "bftitle": "Krasnopavlivka",
        "sector": "0",
        "posx": 14161.2001953125,
        "posy": 5706.85205078125,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "313716105",
        "mapid": "1",
        "bftitle": "Amstetten",
        "sector": "0",
        "posx": 7874.4521484375,
        "posy": 6159.57421875,
        "gamemap": "201"
    },
    {
        "id": "313768547",
        "mapid": "1",
        "bftitle": "Ceva",
        "sector": "0",
        "posx": 5868.1708984375,
        "posy": 7756.27294921875,
        "gamemap": "201"
    },
    {
        "id": "314093027",
        "mapid": "1",
        "bftitle": "Lavertezzo",
        "sector": "0",
        "posx": 6105.56689453125,
        "posy": 6969.41796875,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "314266678",
        "mapid": "1",
        "bftitle": "Olomouc",
        "sector": "0",
        "posx": 8572.009765625,
        "posy": 5498.740234375,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "314987216",
        "mapid": "1",
        "bftitle": "Pardubice",
        "sector": "0",
        "posx": 8139.59716796875,
        "posy": 5295.0341796875,
        "gamemap": "201"
    },
    {
        "id": "315210094",
        "mapid": "1",
        "bftitle": "Anguillara",
        "sector": "0",
        "posx": 7115.72412109375,
        "posy": 8690.7265625,
        "gamemap": "201"
    },
    {
        "id": "315456413",
        "mapid": "1",
        "bftitle": "Dobrica",
        "sector": "0",
        "posx": 9626.7431640625,
        "posy": 7411.65380859375,
        "gamemap": "70439"
    },
    {
        "id": "315490903",
        "mapid": "1",
        "bftitle": "Livaderó",
        "sector": "0",
        "posx": 9947.0869140625,
        "posy": 9491.2939453125,
        "gamemap": "203",
        "rotation": 2
    },
    {
        "id": "315987589",
        "mapid": "1",
        "bftitle": "Strängnäs",
        "sector": "0",
        "posx": 8507.35546875,
        "posy": 497.58538818359375,
        "gamemap": "204",
        "rotation": 1
    },
    {
        "id": "315996300",
        "mapid": "1",
        "bftitle": "Newton Stewart",
        "sector": "0",
        "posx": 2200.885009765625,
        "posy": 2907.408935546875,
        "gamemap": "70439"
    },
    {
        "id": "316088759",
        "mapid": "1",
        "bftitle": "Vallorcine",
        "sector": "0",
        "posx": 5548.009765625,
        "posy": 7064.9677734375,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "316161218",
        "mapid": "1",
        "bftitle": "Nexø",
        "sector": "0",
        "posx": 7940.158203125,
        "posy": 2870.007080078125,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "316195326",
        "mapid": "1",
        "bftitle": "Marcali",
        "sector": "0",
        "posx": 8618.9716796875,
        "posy": 6829.7890625,
        "gamemap": "70439"
    },
    {
        "id": "316961754",
        "mapid": "1",
        "bftitle": "Jelgava",
        "sector": "0",
        "posx": 10465.919921875,
        "posy": 2018.425048828125,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "317132500",
        "mapid": "1",
        "bftitle": "Mustafakemalpaşa",
        "sector": "0",
        "posx": 11842.419921875,
        "posy": 9489.9052734375,
        "gamemap": "70439"
    },
    {
        "id": "317473151",
        "mapid": "1",
        "bftitle": "Lyuboml’",
        "sector": "0",
        "posx": 10561.0400390625,
        "posy": 4743.35302734375,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "317825316",
        "mapid": "1",
        "bftitle": "Nykøbing Sjælland",
        "sector": "0",
        "posx": 6915.216796875,
        "posy": 2413.842041015625,
        "gamemap": "70439"
    },
    {
        "id": "318078567",
        "mapid": "1",
        "bftitle": "Kiskunhalas",
        "sector": "0",
        "posx": 9226.578125,
        "posy": 6894.5400390625,
        "gamemap": "70439"
    },
    {
        "id": "318478240",
        "mapid": "1",
        "bftitle": "Bunschoten",
        "sector": "0",
        "posx": 5070.2529296875,
        "posy": 4239.51318359375,
        "gamemap": "70439"
    },
    {
        "id": "318551359",
        "mapid": "1",
        "bftitle": "Bibirevo",
        "sector": "0",
        "posx": 14536.66015625,
        "posy": 2425.992919921875,
        "gamemap": "201"
    },
    {
        "id": "318715114",
        "mapid": "1",
        "bftitle": "Preiļi",
        "sector": "0",
        "posx": 11348.76953125,
        "posy": 2208.458984375,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "318869125",
        "mapid": "1",
        "bftitle": "St Johann im Pongau",
        "sector": "0",
        "posx": 7384.32421875,
        "posy": 6498.8408203125,
        "gamemap": "201"
    },
    {
        "id": "318969767",
        "mapid": "1",
        "bftitle": "Nitra",
        "sector": "0",
        "posx": 8816.119140625,
        "posy": 6077.73291015625,
        "gamemap": "70439"
    },
    {
        "id": "319397729",
        "mapid": "1",
        "bftitle": "Mirano",
        "sector": "0",
        "posx": 7064.15283203125,
        "posy": 7293.52587890625,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "319690657",
        "mapid": "1",
        "bftitle": "Cazin",
        "sector": "0",
        "posx": 8188.39306640625,
        "posy": 7514.703125,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "319850644",
        "mapid": "1",
        "bftitle": "Sauda",
        "sector": "0",
        "posx": 5376.69384765625,
        "posy": 338.62451171875,
        "gamemap": "201"
    },
    {
        "id": "320111729",
        "mapid": "1",
        "bftitle": "Manfredonia",
        "sector": "0",
        "posx": 8181.27099609375,
        "posy": 8868.505859375,
        "gamemap": "205",
        "rotation": 2
    },
    {
        "id": "320245083",
        "mapid": "1",
        "bftitle": "Tuchkovo",
        "sector": "0",
        "posx": 14204.8603515625,
        "posy": 2573.9970703125,
        "gamemap": "205",
        "rotation": 3
    },
    {
        "id": "320536804",
        "mapid": "1",
        "bftitle": "Klarup",
        "sector": "0",
        "posx": 6462.77783203125,
        "posy": 1823.133056640625,
        "gamemap": "70439"
    },
    {
        "id": "320646335",
        "mapid": "1",
        "bftitle": "Wschowa",
        "sector": "0",
        "posx": 8297.8974609375,
        "posy": 4467.7099609375,
        "gamemap": "203"
    },
    {
        "id": "320752917",
        "mapid": "1",
        "bftitle": "Suhl",
        "sector": "0",
        "posx": 6656.02587890625,
        "posy": 5030.44091796875,
        "gamemap": "70439"
    },
    {
        "id": "320911133",
        "mapid": "1",
        "bftitle": "Kamyanets-Podilsky",
        "sector": "0",
        "posx": 11308.0302734375,
        "posy": 5909.84423828125,
        "gamemap": "203",
        "rotation": 1
    },
    {
        "id": "321095190",
        "mapid": "1",
        "bftitle": "Ascoli Piceno",
        "sector": "0",
        "posx": 7503.50390625,
        "posy": 8381.5244140625,
        "gamemap": "70439"
    },
    {
        "id": "321235011",
        "mapid": "1",
        "bftitle": "Pryamobalka",
        "sector": "0",
        "posx": 12103.5703125,
        "posy": 7125.55419921875,
        "gamemap": "203"
    },
    {
        "id": "321331793",
        "mapid": "1",
        "bftitle": "Miłki",
        "sector": "0",
        "posx": 9929.67578125,
        "posy": 3422.718994140625,
        "gamemap": "70439"
    },
    {
        "id": "321388329",
        "mapid": "1",
        "bftitle": "Sisak",
        "sector": "0",
        "posx": 8315.984375,
        "posy": 7305.51513671875,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "321725712",
        "mapid": "1",
        "bftitle": "Nizhyn",
        "sector": "0",
        "posx": 12861.990234375,
        "posy": 4827.09619140625,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "321843316",
        "mapid": "1",
        "bftitle": "Makariv",
        "sector": "0",
        "posx": 12239.1396484375,
        "posy": 5121.27783203125,
        "gamemap": "203"
    },
    {
        "id": "321880336",
        "mapid": "1",
        "bftitle": "Verl",
        "sector": "0",
        "posx": 6004.73583984375,
        "posy": 4417.1572265625,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "321955380",
        "mapid": "1",
        "bftitle": "Balkaya",
        "sector": "0",
        "posx": 11710.41015625,
        "posy": 8875.111328125,
        "gamemap": "204"
    },
    {
        "id": "322080196",
        "mapid": "1",
        "bftitle": "Minsk",
        "sector": "0",
        "posx": 11595.6103515625,
        "posy": 3444.27587890625,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "322154910",
        "mapid": "1",
        "bftitle": "Aars",
        "sector": "0",
        "posx": 6303.97119140625,
        "posy": 1935.5679931640625,
        "gamemap": "70439"
    },
    {
        "id": "322258735",
        "mapid": "1",
        "bftitle": "Feldbach",
        "sector": "0",
        "posx": 8172.35205078125,
        "posy": 6671.15087890625,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "322259636",
        "mapid": "1",
        "bftitle": "Menderes",
        "sector": "0",
        "posx": 11468.8603515625,
        "posy": 10170.740234375,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "322286996",
        "mapid": "1",
        "bftitle": "Jedburgh",
        "sector": "0",
        "posx": 2766.9599609375,
        "posy": 2637.197998046875,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "322301974",
        "mapid": "1",
        "bftitle": "Maribo Flyveplads",
        "sector": "0",
        "posx": 6902.0078125,
        "posy": 3005.034912109375,
        "gamemap": "205"
    },
    {
        "id": "322390764",
        "mapid": "1",
        "bftitle": "Pakruojis",
        "sector": "0",
        "posx": 10511.0302734375,
        "posy": 2382.0849609375,
        "gamemap": "203"
    },
    {
        "id": "322709978",
        "mapid": "1",
        "bftitle": "Berwick",
        "sector": "0",
        "posx": 2920.860107421875,
        "posy": 2488.837890625,
        "gamemap": "70439"
    },
    {
        "id": "322880224",
        "mapid": "1",
        "bftitle": "Levanto",
        "sector": "0",
        "posx": 6333.9580078125,
        "posy": 7843.201171875,
        "gamemap": "203"
    },
    {
        "id": "323054973",
        "mapid": "1",
        "bftitle": "Bergen auf Rügen",
        "sector": "0",
        "posx": 7504.72509765625,
        "posy": 3146.0439453125,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "323183866",
        "mapid": "1",
        "bftitle": "Karlstadt",
        "sector": "0",
        "posx": 6319.38916015625,
        "posy": 5236.5068359375,
        "gamemap": "203"
    },
    {
        "id": "323281788",
        "mapid": "1",
        "bftitle": "Egersund",
        "sector": "0",
        "posx": 5273.7099609375,
        "posy": 1027.1099853515625,
        "gamemap": "201"
    },
    {
        "id": "323337115",
        "mapid": "1",
        "bftitle": "Shyryayeve",
        "sector": "0",
        "posx": 12366.4501953125,
        "posy": 6485.5400390625,
        "gamemap": "70439"
    },
    {
        "id": "323355904",
        "mapid": "1",
        "bftitle": "Inwil",
        "sector": "0",
        "posx": 5963.47705078125,
        "posy": 6583.92919921875,
        "gamemap": "203",
        "rotation": 2
    },
    {
        "id": "324053422",
        "mapid": "1",
        "bftitle": "Casoli",
        "sector": "0",
        "posx": 7703.81884765625,
        "posy": 8676.9619140625,
        "gamemap": "201"
    },
    {
        "id": "324570536",
        "mapid": "1",
        "bftitle": "Châtelaillon-Plage",
        "sector": "0",
        "posx": 3195.73291015625,
        "posy": 7049.14013671875,
        "gamemap": "203"
    },
    {
        "id": "324572168",
        "mapid": "1",
        "bftitle": "Albi",
        "sector": "0",
        "posx": 4144.666015625,
        "posy": 7943.60400390625,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "324676933",
        "mapid": "1",
        "bftitle": "Trinitapoli",
        "sector": "0",
        "posx": 8231.2431640625,
        "posy": 8976.5390625,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "324764054",
        "mapid": "1",
        "bftitle": "Usvyaty",
        "sector": "0",
        "posx": 12529.7099609375,
        "posy": 2498.3798828125,
        "gamemap": "201"
    },
    {
        "id": "325038197",
        "mapid": "1",
        "bftitle": "Stary Krim",
        "sector": "0",
        "posx": 13798.400390625,
        "posy": 7517.02587890625,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "325058027",
        "mapid": "1",
        "bftitle": "Onas",
        "sector": "0",
        "posx": 10992.5302734375,
        "posy": 21.509489059448242,
        "gamemap": "70439"
    },
    {
        "id": "325522247",
        "mapid": "1",
        "bftitle": "Dunbar",
        "sector": "0",
        "posx": 2778.048095703125,
        "posy": 2364.1650390625,
        "gamemap": "70439"
    },
    {
        "id": "325784457",
        "mapid": "1",
        "bftitle": "Saint-Brieuc",
        "sector": "0",
        "posx": 2713.7109375,
        "posy": 5997.716796875,
        "gamemap": "70439"
    },
    {
        "id": "326002435",
        "mapid": "1",
        "bftitle": "Risti",
        "sector": "0",
        "posx": 10503.0498046875,
        "posy": 965.3878173828125,
        "gamemap": "203",
        "rotation": 1
    },
    {
        "id": "326113643",
        "mapid": "1",
        "bftitle": "Radomyshl’",
        "sector": "0",
        "posx": 12082.919921875,
        "posy": 5084.716796875,
        "gamemap": "201"
    },
    {
        "id": "326149606",
        "mapid": "1",
        "bftitle": "Dobiegniew",
        "sector": "0",
        "posx": 8132.86376953125,
        "posy": 3905.403076171875,
        "gamemap": "203"
    },
    {
        "id": "326331231",
        "mapid": "1",
        "bftitle": "Saint-Julien-en-Genevois",
        "sector": "0",
        "posx": 5293.5400390625,
        "posy": 7025.48876953125,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "326392945",
        "mapid": "1",
        "bftitle": "Tolskepp",
        "sector": "0",
        "posx": 8117.14599609375,
        "posy": 943.05126953125,
        "gamemap": "204",
        "rotation": 1
    },
    {
        "id": "326795335",
        "mapid": "1",
        "bftitle": "Filiátes",
        "sector": "0",
        "posx": 9469.0390625,
        "posy": 9657.8837890625,
        "gamemap": "201"
    },
    {
        "id": "327187734",
        "mapid": "1",
        "bftitle": "Naručionys",
        "sector": "0",
        "posx": 10774.849609375,
        "posy": 3013.990966796875,
        "gamemap": "203",
        "rotation": 1
    },
    {
        "id": "327387463",
        "mapid": "1",
        "bftitle": "Oost-Vlieland",
        "sector": "0",
        "posx": 4985.7412109375,
        "posy": 3770.367919921875,
        "gamemap": "70439"
    },
    {
        "id": "327841923",
        "mapid": "1",
        "bftitle": "Gannat",
        "sector": "0",
        "posx": 4452.703125,
        "posy": 7037.115234375,
        "gamemap": "201"
    },
    {
        "id": "327861534",
        "mapid": "1",
        "bftitle": "Kecskemét",
        "sector": "0",
        "posx": 9287.103515625,
        "posy": 6691.4130859375,
        "gamemap": "70439"
    },
    {
        "id": "327906692",
        "mapid": "1",
        "bftitle": "Castelnuovo di Garfagnana",
        "sector": "0",
        "posx": 6565.0810546875,
        "posy": 7868.55615234375,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "328014082",
        "mapid": "1",
        "bftitle": "Rome",
        "sector": "0",
        "posx": 7182.4541015625,
        "posy": 8765.1005859375,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "328100045",
        "mapid": "1",
        "bftitle": "Blombacka",
        "sector": "0",
        "posx": 7545.544921875,
        "posy": 299.9809875488281,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "328894697",
        "mapid": "1",
        "bftitle": "Enez",
        "sector": "0",
        "posx": 11160.5498046875,
        "posy": 9223.830078125,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "329718257",
        "mapid": "1",
        "bftitle": "Wattwil",
        "sector": "0",
        "posx": 6178.85302734375,
        "posy": 6519.63623046875,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "329901445",
        "mapid": "1",
        "bftitle": "Waldkraiburg",
        "sector": "0",
        "posx": 7149.5068359375,
        "posy": 6121.66796875,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "330033857",
        "mapid": "1",
        "bftitle": "Astakós",
        "sector": "0",
        "posx": 9694.5732421875,
        "posy": 10063.0498046875,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "330090468",
        "mapid": "1",
        "bftitle": "Vinni",
        "sector": "0",
        "posx": 11263.0703125,
        "posy": 544.8046875,
        "gamemap": "70439"
    },
    {
        "id": "330178365",
        "mapid": "1",
        "bftitle": "Makarska",
        "sector": "0",
        "posx": 8503.423828125,
        "posy": 8201.64453125,
        "gamemap": "204"
    },
    {
        "id": "330206637",
        "mapid": "1",
        "bftitle": "Wirdum",
        "sector": "0",
        "posx": 5607.06787109375,
        "posy": 3663.577880859375,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "330516627",
        "mapid": "1",
        "bftitle": "Orsha",
        "sector": "0",
        "posx": 12431.1796875,
        "posy": 3137.35400390625,
        "gamemap": "201"
    },
    {
        "id": "330592050",
        "mapid": "1",
        "bftitle": "Uzda",
        "sector": "0",
        "posx": 11492.1396484375,
        "posy": 3662.239990234375,
        "gamemap": "70439"
    },
    {
        "id": "330979324",
        "mapid": "1",
        "bftitle": "Roquebrune-sur-Argens",
        "sector": "0",
        "posx": 5459.44580078125,
        "posy": 8146.26220703125,
        "gamemap": "204"
    },
    {
        "id": "331264692",
        "mapid": "1",
        "bftitle": "Costeşti",
        "sector": "0",
        "posx": 10809.0400390625,
        "posy": 7639.666015625,
        "gamemap": "203",
        "rotation": 1
    },
    {
        "id": "331703412",
        "mapid": "1",
        "bftitle": "Clacton-on-Sea",
        "sector": "0",
        "posx": 3872.881103515625,
        "posy": 4444.921875,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "332000161",
        "mapid": "1",
        "bftitle": "Gnosjö",
        "sector": "0",
        "posx": 7541.69287109375,
        "posy": 1634.343994140625,
        "gamemap": "70439"
    },
    {
        "id": "332102461",
        "mapid": "1",
        "bftitle": "Goldau",
        "sector": "0",
        "posx": 6020.15087890625,
        "posy": 6630.22216796875,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "332113836",
        "mapid": "1",
        "bftitle": "Landivisiau",
        "sector": "0",
        "posx": 2326.240966796875,
        "posy": 6033.44189453125,
        "gamemap": "201"
    },
    {
        "id": "332185477",
        "mapid": "1",
        "bftitle": "Vukatanë",
        "sector": "0",
        "posx": 9245.0400390625,
        "posy": 8711.0615234375,
        "gamemap": "70439"
    },
    {
        "id": "332770285",
        "mapid": "1",
        "bftitle": "Umuryeri",
        "sector": "0",
        "posx": 12040.1796875,
        "posy": 9057.638671875,
        "gamemap": "70439"
    },
    {
        "id": "332777444",
        "mapid": "1",
        "bftitle": "La Cavalerie",
        "sector": "0",
        "posx": 4440.8427734375,
        "posy": 7910.8671875,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "332884356",
        "mapid": "1",
        "bftitle": "Zaval",
        "sector": "0",
        "posx": 12631.509765625,
        "posy": 1077.406982421875,
        "gamemap": "205",
        "rotation": 2
    },
    {
        "id": "333032876",
        "mapid": "1",
        "bftitle": "Cassaniouze",
        "sector": "0",
        "posx": 4213.58984375,
        "posy": 7629.5419921875,
        "gamemap": "203",
        "rotation": 2
    },
    {
        "id": "333254389",
        "mapid": "1",
        "bftitle": "Cortina d'Ampezzo",
        "sector": "0",
        "posx": 7073.3251953125,
        "posy": 6850.43212890625,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "333342758",
        "mapid": "1",
        "bftitle": "Fossano",
        "sector": "0",
        "posx": 5777.751953125,
        "posy": 7687.72314453125,
        "gamemap": "201"
    },
    {
        "id": "333429216",
        "mapid": "1",
        "bftitle": "Lecce",
        "sector": "0",
        "posx": 8841.890625,
        "posy": 9367.5244140625,
        "gamemap": "70439"
    },
    {
        "id": "333457242",
        "mapid": "1",
        "bftitle": "Kremenchuk",
        "sector": "0",
        "posx": 13311.509765625,
        "posy": 5737.701171875,
        "gamemap": "70439"
    },
    {
        "id": "334014230",
        "mapid": "1",
        "bftitle": "Artsyz",
        "sector": "0",
        "posx": 12138.349609375,
        "posy": 7083.14111328125,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "334166023",
        "mapid": "1",
        "bftitle": "Kohila",
        "sector": "0",
        "posx": 10772.16015625,
        "posy": 618.541015625,
        "gamemap": "203"
    },
    {
        "id": "334412292",
        "mapid": "1",
        "bftitle": "Gyula",
        "sector": "0",
        "posx": 9753.78125,
        "posy": 6801.84619140625,
        "gamemap": "203"
    },
    {
        "id": "334678907",
        "mapid": "1",
        "bftitle": "Tëploye",
        "sector": "0",
        "posx": 14533.8095703125,
        "posy": 3583.988037109375,
        "gamemap": "201"
    },
    {
        "id": "334944683",
        "mapid": "1",
        "bftitle": "Hoogeveen",
        "sector": "0",
        "posx": 5453.0419921875,
        "posy": 4024.3349609375,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "335194881",
        "mapid": "1",
        "bftitle": "Laz",
        "sector": "0",
        "posx": 2390.943115234375,
        "posy": 6152.94677734375,
        "gamemap": "201"
    },
    {
        "id": "335722404",
        "mapid": "1",
        "bftitle": "Ferrandina",
        "sector": "0",
        "posx": 8337.748046875,
        "posy": 9310.8935546875,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "335731240",
        "mapid": "1",
        "bftitle": "Skvyra",
        "sector": "0",
        "posx": 12210.8896484375,
        "posy": 5436.60205078125,
        "gamemap": "201"
    },
    {
        "id": "336137663",
        "mapid": "1",
        "bftitle": "Fossby",
        "sector": "0",
        "posx": 6944.419921875,
        "posy": 587.34130859375,
        "gamemap": "201"
    },
    {
        "id": "336384503",
        "mapid": "1",
        "bftitle": "Eastgate",
        "sector": "0",
        "posx": 2906.318115234375,
        "posy": 3016.530029296875,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "336579731",
        "mapid": "1",
        "bftitle": "Beaune",
        "sector": "0",
        "posx": 4931.81396484375,
        "posy": 6636.4072265625,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "336587545",
        "mapid": "1",
        "bftitle": "Airfield 'Arondight'",
        "sector": "0",
        "posx": 16114.7802734375,
        "posy": 16041.91015625,
        "gamemap": "204"
    },
    {
        "id": "336691275",
        "mapid": "1",
        "bftitle": "Lengerich",
        "sector": "0",
        "posx": 5811.2451171875,
        "posy": 4269.93115234375,
        "gamemap": "70439"
    },
    {
        "id": "336724544",
        "mapid": "1",
        "bftitle": "Doboj",
        "sector": "0",
        "posx": 8816.837890625,
        "posy": 7612.619140625,
        "gamemap": "70439"
    },
    {
        "id": "336755639",
        "mapid": "1",
        "bftitle": "Holsworthy",
        "sector": "0",
        "posx": 2238.7939453125,
        "posy": 4937.66015625,
        "gamemap": "201"
    },
    {
        "id": "337656512",
        "mapid": "1",
        "bftitle": "Škofja Loka",
        "sector": "0",
        "posx": 7708.60107421875,
        "posy": 7009.27392578125,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "338381836",
        "mapid": "1",
        "bftitle": "Lyubytino",
        "sector": "0",
        "posx": 13303.240234375,
        "posy": 822.4390258789062,
        "gamemap": "70439"
    },
    {
        "id": "338475457",
        "mapid": "1",
        "bftitle": "Orhaneli",
        "sector": "0",
        "posx": 12012.990234375,
        "posy": 9541.837890625,
        "gamemap": "201"
    },
    {
        "id": "338611433",
        "mapid": "1",
        "bftitle": "Cottbus",
        "sector": "0",
        "posx": 7680.626953125,
        "posy": 4476.51416015625,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "338706074",
        "mapid": "1",
        "bftitle": "Győr",
        "sector": "0",
        "posx": 8684.3837890625,
        "posy": 6353.14111328125,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "339051286",
        "mapid": "1",
        "bftitle": "Lębork",
        "sector": "0",
        "posx": 8718.0947265625,
        "posy": 3121.527099609375,
        "gamemap": "204",
        "rotation": 3
    },
    {
        "id": "339132117",
        "mapid": "1",
        "bftitle": "Dobele",
        "sector": "0",
        "posx": 10338.650390625,
        "posy": 2031.844970703125,
        "gamemap": "70439"
    },
    {
        "id": "339383379",
        "mapid": "1",
        "bftitle": "Apricena",
        "sector": "0",
        "posx": 8042.0859375,
        "posy": 8806.9609375,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "339565359",
        "mapid": "1",
        "bftitle": "Ørje",
        "sector": "0",
        "posx": 6932.953125,
        "posy": 437.9059143066406,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "339611441",
        "mapid": "1",
        "bftitle": "Köping",
        "sector": "0",
        "posx": 8202.9013671875,
        "posy": 418.243408203125,
        "gamemap": "201"
    },
    {
        "id": "339620272",
        "mapid": "1",
        "bftitle": "Kisa",
        "sector": "0",
        "posx": 8097.51513671875,
        "posy": 1286.925048828125,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "339648873",
        "mapid": "1",
        "bftitle": "Amasra",
        "sector": "0",
        "posx": 13010.9599609375,
        "posy": 8843.298828125,
        "gamemap": "70439"
    },
    {
        "id": "339725850",
        "mapid": "1",
        "bftitle": "Wöbbelin",
        "sector": "0",
        "posx": 6883.341796875,
        "posy": 3687.634033203125,
        "gamemap": "70439"
    },
    {
        "id": "339801491",
        "mapid": "1",
        "bftitle": "Pchelina",
        "sector": "0",
        "posx": 11409.9599609375,
        "posy": 8071.6201171875,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "340007845",
        "mapid": "1",
        "bftitle": "Torarp",
        "sector": "0",
        "posx": 7501.576171875,
        "posy": 1928.72998046875,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "340135515",
        "mapid": "1",
        "bftitle": "Andermatt",
        "sector": "0",
        "posx": 6034.13916015625,
        "posy": 6808.01708984375,
        "gamemap": "201"
    },
    {
        "id": "340229014",
        "mapid": "1",
        "bftitle": "Beloomut",
        "sector": "0",
        "posx": 15046.5400390625,
        "posy": 2914.1240234375,
        "gamemap": "70439"
    },
    {
        "id": "340634486",
        "mapid": "1",
        "bftitle": "Couloutre Aérodrome",
        "sector": "0",
        "posx": 4486.01708984375,
        "posy": 6497.865234375,
        "gamemap": "204",
        "rotation": 2
    },
    {
        "id": "341271202",
        "mapid": "1",
        "bftitle": "Øvstabøstølen",
        "sector": "0",
        "posx": 5439.90380859375,
        "posy": 791.3773803710938,
        "gamemap": "203",
        "rotation": 1
    },
    {
        "id": "341512350",
        "mapid": "1",
        "bftitle": "Rethel",
        "sector": "0",
        "posx": 4823.1669921875,
        "posy": 5558.630859375,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "341624778",
        "mapid": "1",
        "bftitle": "Pułtusk",
        "sector": "0",
        "posx": 9694.98828125,
        "posy": 4035.865966796875,
        "gamemap": "70439"
    },
    {
        "id": "341837457",
        "mapid": "1",
        "bftitle": "Skotterud",
        "sector": "0",
        "posx": 7070.1640625,
        "posy": 143.55589294433594,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "341960081",
        "mapid": "1",
        "bftitle": "Arnstorf",
        "sector": "0",
        "posx": 7271.97900390625,
        "posy": 5966.158203125,
        "gamemap": "201"
    },
    {
        "id": "342361741",
        "mapid": "1",
        "bftitle": "Tustrup",
        "sector": "0",
        "posx": 6580.85107421875,
        "posy": 2100.3359375,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "342615947",
        "mapid": "1",
        "bftitle": "Sebezh",
        "sector": "0",
        "posx": 11859.0400390625,
        "posy": 2207.916015625,
        "gamemap": "70439"
    },
    {
        "id": "342851773",
        "mapid": "1",
        "bftitle": "Peterhead",
        "sector": "0",
        "posx": 2945.39306640625,
        "posy": 1562.7969970703125,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "342909006",
        "mapid": "1",
        "bftitle": "Słubice",
        "sector": "0",
        "posx": 9359.6630859375,
        "posy": 4197.52099609375,
        "gamemap": "204"
    },
    {
        "id": "342960230",
        "mapid": "1",
        "bftitle": "Dranske",
        "sector": "0",
        "posx": 7430.3369140625,
        "posy": 3091.90087890625,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "343056212",
        "mapid": "1",
        "bftitle": "Vendelevo",
        "sector": "0",
        "posx": 11480.650390625,
        "posy": 3368.33203125,
        "gamemap": "201"
    },
    {
        "id": "343328223",
        "mapid": "1",
        "bftitle": "Łosice",
        "sector": "0",
        "posx": 10174.330078125,
        "posy": 4273.837890625,
        "gamemap": "70439"
    },
    {
        "id": "343361467",
        "mapid": "1",
        "bftitle": "Lahoysk",
        "sector": "0",
        "posx": 11679.009765625,
        "posy": 3290.193115234375,
        "gamemap": "201"
    },
    {
        "id": "343720854",
        "mapid": "1",
        "bftitle": "Sigmaringen",
        "sector": "0",
        "posx": 6218.93701171875,
        "posy": 6166.2470703125,
        "gamemap": "203",
        "rotation": 1
    },
    {
        "id": "343932840",
        "mapid": "1",
        "bftitle": "Åkarp",
        "sector": "0",
        "posx": 7403.64306640625,
        "posy": 2694.2109375,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "344822091",
        "mapid": "1",
        "bftitle": "Chudovo",
        "sector": "0",
        "posx": 12802.3203125,
        "posy": 648.1181030273438,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "345127601",
        "mapid": "1",
        "bftitle": "Culemborg",
        "sector": "0",
        "posx": 5047.43798828125,
        "posy": 4396.95703125,
        "gamemap": "203",
        "rotation": 1
    },
    {
        "id": "345487557",
        "mapid": "1",
        "bftitle": "Vågsli",
        "sector": "0",
        "posx": 5674.56298828125,
        "posy": 270.1564025878906,
        "gamemap": "203",
        "rotation": 2
    },
    {
        "id": "345577169",
        "mapid": "1",
        "bftitle": "Piteşti",
        "sector": "0",
        "posx": 10804.16015625,
        "posy": 7563.4482421875,
        "gamemap": "201"
    },
    {
        "id": "346237451",
        "mapid": "1",
        "bftitle": "Hârşova",
        "sector": "0",
        "posx": 11707.4404296875,
        "posy": 7631.7470703125,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "347470360",
        "mapid": "1",
        "bftitle": "Marina di Ginosa",
        "sector": "0",
        "posx": 8463.0478515625,
        "posy": 9339.02734375,
        "gamemap": "70439"
    },
    {
        "id": "347598305",
        "mapid": "1",
        "bftitle": "Třemošná",
        "sector": "0",
        "posx": 7441.48193359375,
        "posy": 5398.173828125,
        "gamemap": "70439"
    },
    {
        "id": "347666591",
        "mapid": "1",
        "bftitle": "Orchomenos",
        "sector": "0",
        "posx": 10251.009765625,
        "posy": 10079.1396484375,
        "gamemap": "70439"
    },
    {
        "id": "348014389",
        "mapid": "1",
        "bftitle": "Kållered",
        "sector": "0",
        "posx": 7047.5361328125,
        "posy": 1496.2659912109375,
        "gamemap": "203"
    },
    {
        "id": "348235450",
        "mapid": "1",
        "bftitle": "Rosenheim",
        "sector": "0",
        "posx": 7068.46923828125,
        "posy": 6277.14111328125,
        "gamemap": "201"
    },
    {
        "id": "348315152",
        "mapid": "1",
        "bftitle": "Mustvee",
        "sector": "0",
        "posx": 11411.830078125,
        "posy": 801.6837768554688,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "348554287",
        "mapid": "1",
        "bftitle": "Małkinia Górna",
        "sector": "0",
        "posx": 9972.169921875,
        "posy": 4040.883056640625,
        "gamemap": "70439"
    },
    {
        "id": "348614550",
        "mapid": "1",
        "bftitle": "Lavansari",
        "sector": "0",
        "posx": 11687.509765625,
        "posy": 151.74400329589844,
        "gamemap": "70439"
    },
    {
        "id": "348745574",
        "mapid": "1",
        "bftitle": "Leyland",
        "sector": "0",
        "posx": 2728.1220703125,
        "posy": 3559.9990234375,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "349052594",
        "mapid": "1",
        "bftitle": "Suva Reka",
        "sector": "0",
        "posx": 9619.4306640625,
        "posy": 8579.3505859375,
        "gamemap": "201"
    },
    {
        "id": "349064344",
        "mapid": "1",
        "bftitle": "Novara",
        "sector": "0",
        "posx": 6042.7568359375,
        "posy": 7312.994140625,
        "gamemap": "203",
        "rotation": 1
    },
    {
        "id": "349115547",
        "mapid": "1",
        "bftitle": "Dunaivtsi",
        "sector": "0",
        "posx": 11387.400390625,
        "posy": 5818.17919921875,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "349400442",
        "mapid": "1",
        "bftitle": "Bristol Aircraft Factory",
        "sector": "0",
        "posx": 2791.81494140625,
        "posy": 4580.19287109375,
        "gamemap": "205",
        "rotation": 2
    },
    {
        "id": "349439990",
        "mapid": "1",
        "bftitle": "Biesenthal",
        "sector": "0",
        "posx": 7514.52099609375,
        "posy": 4004.827880859375,
        "gamemap": "203"
    },
    {
        "id": "349655910",
        "mapid": "1",
        "bftitle": "Røyseland",
        "sector": "0",
        "posx": 5733.033203125,
        "posy": 1224.3509521484375,
        "gamemap": "204",
        "rotation": 1
    },
    {
        "id": "349694719",
        "mapid": "1",
        "bftitle": "Hallstavik",
        "sector": "0",
        "posx": 8967.21875,
        "posy": 103.86640167236328,
        "gamemap": "70439"
    },
    {
        "id": "349834560",
        "mapid": "1",
        "bftitle": "Ystad",
        "sector": "0",
        "posx": 7566.18603515625,
        "posy": 2663.39111328125,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "350108897",
        "mapid": "1",
        "bftitle": "Sidorkovo",
        "sector": "0",
        "posx": 14905.0302734375,
        "posy": 1165.552978515625,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "350452444",
        "mapid": "1",
        "bftitle": "Montmorillon",
        "sector": "0",
        "posx": 3769.071044921875,
        "posy": 6894.8359375,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "350475459",
        "mapid": "1",
        "bftitle": "Rosersberg",
        "sector": "0",
        "posx": 8757.1435546875,
        "posy": 377.8800048828125,
        "gamemap": "203"
    },
    {
        "id": "351120878",
        "mapid": "1",
        "bftitle": "Karkinágrion",
        "sector": "0",
        "posx": 11141.259765625,
        "posy": 10444.8896484375,
        "gamemap": "70439"
    },
    {
        "id": "351790773",
        "mapid": "1",
        "bftitle": "Gnjilane",
        "sector": "0",
        "posx": 9808.45703125,
        "posy": 8538.634765625,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "351884519",
        "mapid": "1",
        "bftitle": "Skuodas",
        "sector": "0",
        "posx": 9827.0634765625,
        "posy": 2223.22900390625,
        "gamemap": "70439"
    },
    {
        "id": "352012286",
        "mapid": "1",
        "bftitle": "Martyr Worthy",
        "sector": "0",
        "posx": 3144.347900390625,
        "posy": 4805.83203125,
        "gamemap": "70439"
    },
    {
        "id": "352109090",
        "mapid": "1",
        "bftitle": "Nea Peramos",
        "sector": "0",
        "posx": 10638.4296875,
        "posy": 9179.45703125,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "353145978",
        "mapid": "1",
        "bftitle": "Ostrava",
        "sector": "0",
        "posx": 8874.0166015625,
        "posy": 5389.56689453125,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "353306642",
        "mapid": "1",
        "bftitle": "Feteşti",
        "sector": "0",
        "posx": 11673.76953125,
        "posy": 7756.98388671875,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "353458003",
        "mapid": "1",
        "bftitle": "Visse",
        "sector": "0",
        "posx": 5664.63623046875,
        "posy": 6951.876953125,
        "gamemap": "203"
    },
    {
        "id": "353538044",
        "mapid": "1",
        "bftitle": "La Martre",
        "sector": "0",
        "posx": 5448.72216796875,
        "posy": 8009.6162109375,
        "gamemap": "203",
        "rotation": 1
    },
    {
        "id": "353710617",
        "mapid": "1",
        "bftitle": "Nyasvizh",
        "sector": "0",
        "posx": 11335.080078125,
        "posy": 3782.784912109375,
        "gamemap": "201"
    },
    {
        "id": "354031150",
        "mapid": "1",
        "bftitle": "Riom-ès-Montagnes",
        "sector": "0",
        "posx": 4296.7021484375,
        "posy": 7382.326171875,
        "gamemap": "201"
    },
    {
        "id": "354385636",
        "mapid": "1",
        "bftitle": "Şoldăneşti",
        "sector": "0",
        "posx": 11956.3095703125,
        "posy": 6294.85595703125,
        "gamemap": "203",
        "rotation": 1
    },
    {
        "id": "354789557",
        "mapid": "1",
        "bftitle": "Tīreļi",
        "sector": "0",
        "posx": 10429.6396484375,
        "posy": 1916.18798828125,
        "gamemap": "70439"
    },
    {
        "id": "354914887",
        "mapid": "1",
        "bftitle": "Shchors",
        "sector": "0",
        "posx": 12879.0302734375,
        "posy": 4462.1728515625,
        "gamemap": "70439"
    },
    {
        "id": "354990331",
        "mapid": "1",
        "bftitle": "Les Herbiers",
        "sector": "0",
        "posx": 3217.010986328125,
        "posy": 6708.48095703125,
        "gamemap": "70439"
    },
    {
        "id": "355044783",
        "mapid": "1",
        "bftitle": "Surgères",
        "sector": "0",
        "posx": 3294.7451171875,
        "posy": 7033.68994140625,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "355086114",
        "mapid": "1",
        "bftitle": "Altdorf Flugplatz",
        "sector": "0",
        "posx": 5923.40283203125,
        "posy": 5638.7119140625,
        "gamemap": "204",
        "rotation": 2
    },
    {
        "id": "355412832",
        "mapid": "1",
        "bftitle": "Gotsk",
        "sector": "0",
        "posx": 11470.099609375,
        "posy": 4123.86181640625,
        "gamemap": "70439"
    },
    {
        "id": "355823574",
        "mapid": "1",
        "bftitle": "Beuvry",
        "sector": "0",
        "posx": 4302.19677734375,
        "posy": 5075.15087890625,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "356159954",
        "mapid": "1",
        "bftitle": "Lauterbrunnen",
        "sector": "0",
        "posx": 5832.98583984375,
        "posy": 6825.19482421875,
        "gamemap": "204",
        "rotation": 3
    },
    {
        "id": "356619073",
        "mapid": "1",
        "bftitle": "Crewe",
        "sector": "0",
        "posx": 2799.320068359375,
        "posy": 3842.3720703125,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "356671789",
        "mapid": "1",
        "bftitle": "Sarnów",
        "sector": "0",
        "posx": 10052.3798828125,
        "posy": 4443.7529296875,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "357562643",
        "mapid": "1",
        "bftitle": "Myadzyel",
        "sector": "0",
        "posx": 11411.0595703125,
        "posy": 2947.9541015625,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "357733845",
        "mapid": "1",
        "bftitle": "Crişan",
        "sector": "0",
        "posx": 12152.5498046875,
        "posy": 7514.81787109375,
        "gamemap": "203",
        "rotation": 1
    },
    {
        "id": "358055956",
        "mapid": "1",
        "bftitle": "Leuk",
        "sector": "0",
        "posx": 5752.80517578125,
        "posy": 6944.45703125,
        "gamemap": "201"
    },
    {
        "id": "358242989",
        "mapid": "1",
        "bftitle": "Keinse",
        "sector": "0",
        "posx": 4900.64990234375,
        "posy": 3997.680908203125,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "358463047",
        "mapid": "1",
        "bftitle": "Baloži",
        "sector": "0",
        "posx": 10591.349609375,
        "posy": 1907.7860107421875,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "358686805",
        "mapid": "1",
        "bftitle": "Pécs",
        "sector": "0",
        "posx": 8859.73828125,
        "posy": 7044.27392578125,
        "gamemap": "203"
    },
    {
        "id": "359466855",
        "mapid": "1",
        "bftitle": "Veliky Novgorod",
        "sector": "0",
        "posx": 12681.4599609375,
        "posy": 987.5872802734375,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "359573025",
        "mapid": "1",
        "bftitle": "Chaplynka",
        "sector": "0",
        "posx": 13346.6396484375,
        "posy": 6924.05712890625,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "359799168",
        "mapid": "1",
        "bftitle": "Villingen-Schwenningen",
        "sector": "0",
        "posx": 6004.73681640625,
        "posy": 6186.375,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "360392700",
        "mapid": "1",
        "bftitle": "Vikeså",
        "sector": "0",
        "posx": 5300.56884765625,
        "posy": 921.7412109375,
        "gamemap": "201"
    },
    {
        "id": "360403838",
        "mapid": "1",
        "bftitle": "Vapnyarka",
        "sector": "0",
        "posx": 11940.58984375,
        "posy": 5976.68798828125,
        "gamemap": "70439"
    },
    {
        "id": "360571440",
        "mapid": "1",
        "bftitle": "Carbonne",
        "sector": "0",
        "posx": 3874.166015625,
        "posy": 8200.984375,
        "gamemap": "201"
    },
    {
        "id": "360669326",
        "mapid": "1",
        "bftitle": "Sosnovyy Bor",
        "sector": "0",
        "posx": 12191.2802734375,
        "posy": 4124.880859375,
        "gamemap": "201"
    },
    {
        "id": "361271293",
        "mapid": "1",
        "bftitle": "Trbovlje",
        "sector": "0",
        "posx": 7927.5888671875,
        "posy": 7013.751953125,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "361431398",
        "mapid": "1",
        "bftitle": "Latina",
        "sector": "0",
        "posx": 7297.64599609375,
        "posy": 8933.396484375,
        "gamemap": "203"
    },
    {
        "id": "361436777",
        "mapid": "1",
        "bftitle": "Montauban",
        "sector": "0",
        "posx": 3910.7490234375,
        "posy": 7907.97021484375,
        "gamemap": "70439"
    },
    {
        "id": "362047350",
        "mapid": "1",
        "bftitle": "Lyme Regis",
        "sector": "0",
        "posx": 2654.760986328125,
        "posy": 4977.52978515625,
        "gamemap": "70439"
    },
    {
        "id": "362094711",
        "mapid": "1",
        "bftitle": "Pini Sud 2",
        "sector": "0",
        "posx": 7633.56396484375,
        "posy": 9156.3984375,
        "gamemap": "203",
        "rotation": 3
    },
    {
        "id": "362450211",
        "mapid": "1",
        "bftitle": "Velika Gorica",
        "sector": "0",
        "posx": 8225.8759765625,
        "posy": 7204.06201171875,
        "gamemap": "204",
        "rotation": 3
    },
    {
        "id": "362451860",
        "mapid": "1",
        "bftitle": "Šentilj",
        "sector": "0",
        "posx": 8101.9189453125,
        "posy": 6788.22314453125,
        "gamemap": "201"
    },
    {
        "id": "362857579",
        "mapid": "1",
        "bftitle": "Iisaku Parish",
        "sector": "0",
        "posx": 11519.7998046875,
        "posy": 656.9027709960938,
        "gamemap": "201"
    },
    {
        "id": "362937255",
        "mapid": "1",
        "bftitle": "Kościan",
        "sector": "0",
        "posx": 8395.224609375,
        "posy": 4333.01220703125,
        "gamemap": "70439"
    },
    {
        "id": "363066999",
        "mapid": "1",
        "bftitle": "Rybatskoye",
        "sector": "0",
        "posx": 12455.080078125,
        "posy": 228.0615997314453,
        "gamemap": "203",
        "rotation": 1
    },
    {
        "id": "363355948",
        "mapid": "1",
        "bftitle": "Kablukovo",
        "sector": "0",
        "posx": 13345.580078125,
        "posy": 2785.402099609375,
        "gamemap": "70439"
    },
    {
        "id": "363442015",
        "mapid": "1",
        "bftitle": "Nemkovichi",
        "sector": "0",
        "posx": 10670.5,
        "posy": 4046.044921875,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "363656800",
        "mapid": "1",
        "bftitle": "Kikinda",
        "sector": "0",
        "posx": 9513.9853515625,
        "posy": 7151.9658203125,
        "gamemap": "70439"
    },
    {
        "id": "363769418",
        "mapid": "1",
        "bftitle": "Piotrków Trybunalski",
        "sector": "0",
        "posx": 9290.6005859375,
        "posy": 4658.591796875,
        "gamemap": "70439"
    },
    {
        "id": "363854098",
        "mapid": "1",
        "bftitle": "Kočevje",
        "sector": "0",
        "posx": 7871.89501953125,
        "posy": 7230.7998046875,
        "gamemap": "201"
    },
    {
        "id": "364128973",
        "mapid": "1",
        "bftitle": "Pietrasanta",
        "sector": "0",
        "posx": 6510.2939453125,
        "posy": 7937.2939453125,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "364445301",
        "mapid": "1",
        "bftitle": "Novi Grad",
        "sector": "0",
        "posx": 8315.8349609375,
        "posy": 7481.51708984375,
        "gamemap": "201"
    },
    {
        "id": "364698914",
        "mapid": "1",
        "bftitle": "Sande",
        "sector": "0",
        "posx": 6509.078125,
        "posy": 391.248291015625,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "364709052",
        "mapid": "1",
        "bftitle": "Montauban-de-Bretagne",
        "sector": "0",
        "posx": 2902.298095703125,
        "posy": 6184.44091796875,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "365547084",
        "mapid": "1",
        "bftitle": "Arad",
        "sector": "0",
        "posx": 9763.5517578125,
        "posy": 7001.6748046875,
        "gamemap": "70439"
    },
    {
        "id": "366339870",
        "mapid": "1",
        "bftitle": "Jaunzemji",
        "sector": "0",
        "posx": 11107.0595703125,
        "posy": 1964.656005859375,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "366352746",
        "mapid": "1",
        "bftitle": "Larissa",
        "sector": "0",
        "posx": 10086.26953125,
        "posy": 9644.171875,
        "gamemap": "201"
    },
    {
        "id": "366871152",
        "mapid": "1",
        "bftitle": "Ski",
        "sector": "0",
        "posx": 6700.93798828125,
        "posy": 283.0763854980469,
        "gamemap": "203",
        "rotation": 2
    },
    {
        "id": "366900094",
        "mapid": "1",
        "bftitle": "Milići",
        "sector": "0",
        "posx": 9111.4248046875,
        "posy": 7844.880859375,
        "gamemap": "203"
    },
    {
        "id": "367108898",
        "mapid": "1",
        "bftitle": "Porto Tolle",
        "sector": "0",
        "posx": 7127.6982421875,
        "posy": 7521.90283203125,
        "gamemap": "70439"
    },
    {
        "id": "367395624",
        "mapid": "1",
        "bftitle": "Mareno di Piave",
        "sector": "0",
        "posx": 7131.36181640625,
        "posy": 7145.18701171875,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "367459882",
        "mapid": "1",
        "bftitle": "Baia Mare",
        "sector": "0",
        "posx": 10423.5,
        "posy": 6364.55615234375,
        "gamemap": "201"
    },
    {
        "id": "367852858",
        "mapid": "1",
        "bftitle": "Aigle",
        "sector": "0",
        "posx": 5556.5400390625,
        "posy": 6944.14111328125,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "368402616",
        "mapid": "1",
        "bftitle": "Galati",
        "sector": "0",
        "posx": 11737.2900390625,
        "posy": 7312.294921875,
        "gamemap": "70439"
    },
    {
        "id": "368433037",
        "mapid": "1",
        "bftitle": "Tonnerre",
        "sector": "0",
        "posx": 4679.8271484375,
        "posy": 6277.1767578125,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "368909401",
        "mapid": "1",
        "bftitle": "Manduria",
        "sector": "0",
        "posx": 8685.0126953125,
        "posy": 9350.4033203125,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "369395880",
        "mapid": "1",
        "bftitle": "Peleshi",
        "sector": "0",
        "posx": 12059.73046875,
        "posy": 619.3408813476562,
        "gamemap": "205"
    },
    {
        "id": "369623223",
        "mapid": "1",
        "bftitle": "Sperlonga",
        "sector": "0",
        "posx": 7452.6279296875,
        "posy": 9014.8828125,
        "gamemap": "203",
        "rotation": 3
    },
    {
        "id": "369727356",
        "mapid": "1",
        "bftitle": "Babruysk",
        "sector": "0",
        "posx": 12080.66015625,
        "posy": 3822.43603515625,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "369871147",
        "mapid": "1",
        "bftitle": "Saint-Dizier",
        "sector": "0",
        "posx": 4964.8427734375,
        "posy": 5930.19189453125,
        "gamemap": "70439"
    },
    {
        "id": "370812910",
        "mapid": "1",
        "bftitle": "Rakitnoye",
        "sector": "0",
        "posx": 14024.1298828125,
        "posy": 4925.06884765625,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "370860202",
        "mapid": "1",
        "bftitle": "Michendorf",
        "sector": "0",
        "posx": 7334.47900390625,
        "posy": 4224.53076171875,
        "gamemap": "70439"
    },
    {
        "id": "371476129",
        "mapid": "1",
        "bftitle": "Pruszków",
        "sector": "0",
        "posx": 9614.078125,
        "posy": 4295.7470703125,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "371854519",
        "mapid": "1",
        "bftitle": "Tõrva",
        "sector": "0",
        "posx": 11117.3203125,
        "posy": 1278.5889892578125,
        "gamemap": "70439"
    },
    {
        "id": "373582544",
        "mapid": "1",
        "bftitle": "Pindstrup",
        "sector": "0",
        "posx": 6542.5400390625,
        "posy": 2162.827880859375,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "374047079",
        "mapid": "1",
        "bftitle": "Carlisle",
        "sector": "0",
        "posx": 2653.7548828125,
        "posy": 2939.64208984375,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "374175953",
        "mapid": "1",
        "bftitle": "Rhilochan",
        "sector": "0",
        "posx": 2308.31298828125,
        "posy": 1261.5579833984375,
        "gamemap": "203"
    },
    {
        "id": "374210450",
        "mapid": "1",
        "bftitle": "Yegor'yevsk",
        "sector": "0",
        "posx": 14956.51953125,
        "posy": 2687.739013671875,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "374484441",
        "mapid": "1",
        "bftitle": "Ellezelles",
        "sector": "0",
        "posx": 4622.89404296875,
        "posy": 4969.2021484375,
        "gamemap": "203"
    },
    {
        "id": "374580920",
        "mapid": "1",
        "bftitle": "Friedland",
        "sector": "0",
        "posx": 7696.2099609375,
        "posy": 4325.01708984375,
        "gamemap": "70439"
    },
    {
        "id": "374585744",
        "mapid": "1",
        "bftitle": "Moulins Aérodrome",
        "sector": "0",
        "posx": 4478.80517578125,
        "posy": 6905.55419921875,
        "gamemap": "204",
        "rotation": 3
    },
    {
        "id": "374912893",
        "mapid": "1",
        "bftitle": "Peno",
        "sector": "0",
        "posx": 13112.830078125,
        "posy": 1869.54296875,
        "gamemap": "201"
    },
    {
        "id": "374978979",
        "mapid": "1",
        "bftitle": "Ust'-Luga",
        "sector": "0",
        "posx": 11810.3095703125,
        "posy": 358.398193359375,
        "gamemap": "70439"
    },
    {
        "id": "375571651",
        "mapid": "1",
        "bftitle": "Gniezno",
        "sector": "0",
        "posx": 8668.986328125,
        "posy": 4117.40283203125,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "375863841",
        "mapid": "1",
        "bftitle": "Veles",
        "sector": "0",
        "posx": 9898.0654296875,
        "posy": 8834.9501953125,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "376506034",
        "mapid": "1",
        "bftitle": "Tsyurupinsk",
        "sector": "0",
        "posx": 13105.8701171875,
        "posy": 6815.421875,
        "gamemap": "70439"
    },
    {
        "id": "376667681",
        "mapid": "1",
        "bftitle": "Camburg Flugplatz",
        "sector": "0",
        "posx": 6972.244140625,
        "posy": 4756.73291015625,
        "gamemap": "205",
        "rotation": 2
    },
    {
        "id": "376881666",
        "mapid": "1",
        "bftitle": "Yekaterinovka",
        "sector": "0",
        "posx": 13662.16015625,
        "posy": 7051.3662109375,
        "gamemap": "203"
    },
    {
        "id": "376910380",
        "mapid": "1",
        "bftitle": "Perth",
        "sector": "0",
        "posx": 2509.18701171875,
        "posy": 2154.779052734375,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "377434808",
        "mapid": "1",
        "bftitle": "Vittskövle",
        "sector": "0",
        "posx": 7379.43798828125,
        "posy": 2417.218994140625,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "377469624",
        "mapid": "1",
        "bftitle": "Oskarshamn",
        "sector": "0",
        "posx": 8286.0634765625,
        "posy": 1701.14404296875,
        "gamemap": "70439"
    },
    {
        "id": "377888800",
        "mapid": "1",
        "bftitle": "Jieznas",
        "sector": "0",
        "posx": 10598.9697265625,
        "posy": 3090.572998046875,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "378178417",
        "mapid": "1",
        "bftitle": "La Rochelle",
        "sector": "0",
        "posx": 3205.012939453125,
        "posy": 6997.43310546875,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "378586762",
        "mapid": "1",
        "bftitle": "Rechlin Flugplatz",
        "sector": "0",
        "posx": 7249.919921875,
        "posy": 3767.60888671875,
        "gamemap": "204",
        "rotation": 1
    },
    {
        "id": "378654415",
        "mapid": "1",
        "bftitle": "Novomoskovsk",
        "sector": "0",
        "posx": 13846.490234375,
        "posy": 5930.634765625,
        "gamemap": "203",
        "rotation": 1
    },
    {
        "id": "379503700",
        "mapid": "1",
        "bftitle": "Laives",
        "sector": "0",
        "posx": 6838.63818359375,
        "posy": 6897.63720703125,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "379571036",
        "mapid": "1",
        "bftitle": "Vandoies - Vintl",
        "sector": "0",
        "posx": 6943.5751953125,
        "posy": 6722.02392578125,
        "gamemap": "203",
        "rotation": 1
    },
    {
        "id": "379964655",
        "mapid": "1",
        "bftitle": "Odorheiu Secuiesc",
        "sector": "0",
        "posx": 10931.1796875,
        "posy": 6951.876953125,
        "gamemap": "204"
    },
    {
        "id": "380000438",
        "mapid": "1",
        "bftitle": "Allinge",
        "sector": "0",
        "posx": 7852.00390625,
        "posy": 2792.195068359375,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "380393607",
        "mapid": "1",
        "bftitle": "Klötze",
        "sector": "0",
        "posx": 6787.5830078125,
        "posy": 4072.4970703125,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "380722689",
        "mapid": "1",
        "bftitle": "Mountain Village Aubeterre",
        "sector": "0",
        "posx": 15890.6904296875,
        "posy": 15694.8203125,
        "gamemap": "201"
    },
    {
        "id": "380856858",
        "mapid": "1",
        "bftitle": "Nyíregyháza",
        "sector": "0",
        "posx": 9880.8154296875,
        "posy": 6233.53515625,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "381035506",
        "mapid": "1",
        "bftitle": "Novosil'",
        "sector": "0",
        "posx": 14372.650390625,
        "posy": 3903.2470703125,
        "gamemap": "70439"
    },
    {
        "id": "381206272",
        "mapid": "1",
        "bftitle": "Szabadszállás",
        "sector": "0",
        "posx": 9149.91015625,
        "posy": 6704.55908203125,
        "gamemap": "70439"
    },
    {
        "id": "381223542",
        "mapid": "1",
        "bftitle": "Hyltebruk",
        "sector": "0",
        "posx": 7395.9248046875,
        "posy": 1830.18798828125,
        "gamemap": "70439"
    },
    {
        "id": "381310668",
        "mapid": "1",
        "bftitle": "Nyköping",
        "sector": "0",
        "posx": 8500.5224609375,
        "posy": 856.1680908203125,
        "gamemap": "201"
    },
    {
        "id": "381414612",
        "mapid": "1",
        "bftitle": "Szczytno",
        "sector": "0",
        "posx": 9667.0556640625,
        "posy": 3612.65087890625,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "381702257",
        "mapid": "1",
        "bftitle": "Besançon",
        "sector": "0",
        "posx": 5279.119140625,
        "posy": 6542.90283203125,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "381935479",
        "mapid": "1",
        "bftitle": "Myd'yevo",
        "sector": "0",
        "posx": 14869.330078125,
        "posy": 763.084716796875,
        "gamemap": "70439"
    },
    {
        "id": "381978515",
        "mapid": "1",
        "bftitle": "Svenljunga",
        "sector": "0",
        "posx": 7358.169921875,
        "posy": 1559.217041015625,
        "gamemap": "70439"
    },
    {
        "id": "382383608",
        "mapid": "1",
        "bftitle": "Blackrock",
        "sector": "0",
        "posx": 1649.2220458984375,
        "posy": 3412.157958984375,
        "gamemap": "70439"
    },
    {
        "id": "382498607",
        "mapid": "1",
        "bftitle": "Příbram",
        "sector": "0",
        "posx": 7621.8828125,
        "posy": 5455.72705078125,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "383174524",
        "mapid": "1",
        "bftitle": "Brissac",
        "sector": "0",
        "posx": 4600.60595703125,
        "posy": 7964.77392578125,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "383189708",
        "mapid": "1",
        "bftitle": "Lacaune",
        "sector": "0",
        "posx": 4304.40087890625,
        "posy": 8034.919921875,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "383371853",
        "mapid": "1",
        "bftitle": "Pärnu",
        "sector": "0",
        "posx": 10699.5595703125,
        "posy": 1002.3189697265625,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "383737606",
        "mapid": "1",
        "bftitle": "Stolin",
        "sector": "0",
        "posx": 11384.349609375,
        "posy": 4427.52099609375,
        "gamemap": "201"
    },
    {
        "id": "383786124",
        "mapid": "1",
        "bftitle": "Carcassonne",
        "sector": "0",
        "posx": 4203.8779296875,
        "posy": 8234.1845703125,
        "gamemap": "70439"
    },
    {
        "id": "383985098",
        "mapid": "1",
        "bftitle": "Troyes",
        "sector": "0",
        "posx": 4712.77880859375,
        "posy": 6080.97509765625,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "384019717",
        "mapid": "1",
        "bftitle": "Jõgeva",
        "sector": "0",
        "posx": 11251.830078125,
        "posy": 859.7745971679688,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "384768255",
        "mapid": "1",
        "bftitle": "Winterthur",
        "sector": "0",
        "posx": 6079.90087890625,
        "posy": 6433.39111328125,
        "gamemap": "201"
    },
    {
        "id": "384880800",
        "mapid": "1",
        "bftitle": "Płock",
        "sector": "0",
        "posx": 9291.53125,
        "posy": 4111.576171875,
        "gamemap": "70439"
    },
    {
        "id": "384992862",
        "mapid": "1",
        "bftitle": "Argentat",
        "sector": "0",
        "posx": 4083.656982421875,
        "posy": 7460.65087890625,
        "gamemap": "201"
    },
    {
        "id": "385195984",
        "mapid": "1",
        "bftitle": "Polohy",
        "sector": "0",
        "posx": 14142,
        "posy": 6440.18701171875,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "385315059",
        "mapid": "1",
        "bftitle": "Törökszentmiklós",
        "sector": "0",
        "posx": 9499.736328125,
        "posy": 6571.34619140625,
        "gamemap": "203"
    },
    {
        "id": "385537871",
        "mapid": "1",
        "bftitle": "Nikol'skoye",
        "sector": "0",
        "posx": 12538.91015625,
        "posy": 309.41009521484375,
        "gamemap": "70439"
    },
    {
        "id": "385659650",
        "mapid": "1",
        "bftitle": "Roșiorii de Vede",
        "sector": "0",
        "posx": 10838.3603515625,
        "posy": 7866.884765625,
        "gamemap": "201"
    },
    {
        "id": "385676357",
        "mapid": "1",
        "bftitle": "Rapiki",
        "sector": "0",
        "posx": 9849.625,
        "posy": 1650.126953125,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "385884189",
        "mapid": "1",
        "bftitle": "Morhange",
        "sector": "0",
        "posx": 5461.9228515625,
        "posy": 5802.951171875,
        "gamemap": "70439"
    },
    {
        "id": "386215847",
        "mapid": "1",
        "bftitle": "Buckie",
        "sector": "0",
        "posx": 2641.923095703125,
        "posy": 1479.7569580078125,
        "gamemap": "70439"
    },
    {
        "id": "386336139",
        "mapid": "1",
        "bftitle": "Nedryhayliv",
        "sector": "0",
        "posx": 13445.1298828125,
        "posy": 4927.369140625,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "386409649",
        "mapid": "1",
        "bftitle": "Vyalikaya Byerastavitsa",
        "sector": "0",
        "posx": 10554.98046875,
        "posy": 3794.072021484375,
        "gamemap": "70439"
    },
    {
        "id": "386665944",
        "mapid": "1",
        "bftitle": "Hammarland",
        "sector": "0",
        "posx": 9307.3369140625,
        "posy": 27.70816993713379,
        "gamemap": "70439"
    },
    {
        "id": "387023084",
        "mapid": "1",
        "bftitle": "Anttonala",
        "sector": "0",
        "posx": 12047,
        "posy": 70.15113067626953,
        "gamemap": "70439"
    },
    {
        "id": "387144729",
        "mapid": "1",
        "bftitle": "Berdychiv",
        "sector": "0",
        "posx": 11899.1904296875,
        "posy": 5359.962890625,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "387427697",
        "mapid": "1",
        "bftitle": "Oru",
        "sector": "0",
        "posx": 10837.5400390625,
        "posy": 607.177978515625,
        "gamemap": "203",
        "rotation": 1
    },
    {
        "id": "388329335",
        "mapid": "1",
        "bftitle": "Holzdorf",
        "sector": "0",
        "posx": 7363.08984375,
        "posy": 4481.22900390625,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "388468214",
        "mapid": "1",
        "bftitle": "Ilioúpoli",
        "sector": "0",
        "posx": 10499.91015625,
        "posy": 10299.759765625,
        "gamemap": "205"
    },
    {
        "id": "388501480",
        "mapid": "1",
        "bftitle": "Vyshhorod",
        "sector": "0",
        "posx": 12452.4599609375,
        "posy": 5043.5498046875,
        "gamemap": "203",
        "rotation": 1
    },
    {
        "id": "388606912",
        "mapid": "1",
        "bftitle": "Grasse",
        "sector": "0",
        "posx": 5542.4990234375,
        "posy": 8051.22314453125,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "389694597",
        "mapid": "1",
        "bftitle": "Saint-Pol-de-Léon",
        "sector": "0",
        "posx": 2342.215087890625,
        "posy": 5946.2861328125,
        "gamemap": "203"
    },
    {
        "id": "389697363",
        "mapid": "1",
        "bftitle": "Eidsfoss",
        "sector": "0",
        "posx": 6456.0830078125,
        "posy": 368.15948486328125,
        "gamemap": "203",
        "rotation": 3
    },
    {
        "id": "390018466",
        "mapid": "1",
        "bftitle": "Saint-Médard-en-Jalles",
        "sector": "0",
        "posx": 3279.39404296875,
        "posy": 7547.744140625,
        "gamemap": "205"
    },
    {
        "id": "390096138",
        "mapid": "1",
        "bftitle": "Bangert",
        "sector": "0",
        "posx": 5013.255859375,
        "posy": 4027.9150390625,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "390389276",
        "mapid": "1",
        "bftitle": "Hrada",
        "sector": "0",
        "posx": 11615.2001953125,
        "posy": 4294.68408203125,
        "gamemap": "203",
        "rotation": 3
    },
    {
        "id": "390554621",
        "mapid": "1",
        "bftitle": "Oboyan'",
        "sector": "0",
        "posx": 14149.5,
        "posy": 4750.98583984375,
        "gamemap": "70439"
    },
    {
        "id": "392116993",
        "mapid": "1",
        "bftitle": "Kelmė",
        "sector": "0",
        "posx": 10237.6904296875,
        "posy": 2556.862060546875,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "392623453",
        "mapid": "1",
        "bftitle": "Hvardiis'ke",
        "sector": "0",
        "posx": 13480.4599609375,
        "posy": 7426.98193359375,
        "gamemap": "70439"
    },
    {
        "id": "393025202",
        "mapid": "1",
        "bftitle": "Lobbes",
        "sector": "0",
        "posx": 4740.77978515625,
        "posy": 5176.55078125,
        "gamemap": "203",
        "rotation": 3
    },
    {
        "id": "393538851",
        "mapid": "1",
        "bftitle": "Rosignano Solvay-Castiglioncello",
        "sector": "0",
        "posx": 6574.162109375,
        "posy": 8164.091796875,
        "gamemap": "203",
        "rotation": 1
    },
    {
        "id": "393576950",
        "mapid": "1",
        "bftitle": "Oudeland",
        "sector": "0",
        "posx": 4567.6240234375,
        "posy": 4690.33984375,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "393706282",
        "mapid": "1",
        "bftitle": "Sylling",
        "sector": "0",
        "posx": 6531.6259765625,
        "posy": 196.466796875,
        "gamemap": "201"
    },
    {
        "id": "393831203",
        "mapid": "1",
        "bftitle": "Hayvoron",
        "sector": "0",
        "posx": 12270.169921875,
        "posy": 6063.5498046875,
        "gamemap": "70439"
    },
    {
        "id": "394290502",
        "mapid": "1",
        "bftitle": "Klässbol",
        "sector": "0",
        "posx": 7247.53076171875,
        "posy": 407.01251220703125,
        "gamemap": "70439"
    },
    {
        "id": "394312897",
        "mapid": "1",
        "bftitle": "Cognac",
        "sector": "0",
        "posx": 3417.31591796875,
        "posy": 7206.85986328125,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "394500633",
        "mapid": "1",
        "bftitle": "Kuldīga",
        "sector": "0",
        "posx": 9951.3134765625,
        "posy": 1843.697021484375,
        "gamemap": "204"
    },
    {
        "id": "394664010",
        "mapid": "1",
        "bftitle": "Tuzburgazı",
        "sector": "0",
        "posx": 11491.7900390625,
        "posy": 10405.009765625,
        "gamemap": "70439"
    },
    {
        "id": "394688761",
        "mapid": "1",
        "bftitle": "Krasnyy Kholm",
        "sector": "0",
        "posx": 14396.0595703125,
        "posy": 1246.2939453125,
        "gamemap": "204",
        "rotation": 3
    },
    {
        "id": "394706569",
        "mapid": "1",
        "bftitle": "Augsburg Munitions Factory",
        "sector": "0",
        "posx": 6709.69189453125,
        "posy": 6049.35205078125,
        "gamemap": "203"
    },
    {
        "id": "394761559",
        "mapid": "1",
        "bftitle": "Tukums",
        "sector": "0",
        "posx": 10302.5,
        "posy": 1847.511962890625,
        "gamemap": "70439"
    },
    {
        "id": "395095679",
        "mapid": "1",
        "bftitle": "Rochechouart",
        "sector": "0",
        "posx": 3754.4140625,
        "posy": 7157.49609375,
        "gamemap": "201"
    },
    {
        "id": "395438655",
        "mapid": "1",
        "bftitle": "Kozelets",
        "sector": "0",
        "posx": 12637.599609375,
        "posy": 4890.2412109375,
        "gamemap": "203"
    },
    {
        "id": "395766136",
        "mapid": "1",
        "bftitle": "Kholopenichi",
        "sector": "0",
        "posx": 12003.650390625,
        "posy": 3133.5400390625,
        "gamemap": "201"
    },
    {
        "id": "396018961",
        "mapid": "1",
        "bftitle": "Dragsfjärd",
        "sector": "0",
        "posx": 10105.5400390625,
        "posy": 94.00879669189453,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "396392337",
        "mapid": "1",
        "bftitle": "Belgorod",
        "sector": "0",
        "posx": 14237.7197265625,
        "posy": 5031.46484375,
        "gamemap": "201"
    },
    {
        "id": "396578197",
        "mapid": "1",
        "bftitle": "Kursk",
        "sector": "0",
        "posx": 14122.580078125,
        "posy": 4500.97216796875,
        "gamemap": "201"
    },
    {
        "id": "397132117",
        "mapid": "1",
        "bftitle": "Pniewy",
        "sector": "0",
        "posx": 8280.3232421875,
        "posy": 4129.716796875,
        "gamemap": "204"
    },
    {
        "id": "397500663",
        "mapid": "1",
        "bftitle": "Begunitsy",
        "sector": "0",
        "posx": 12108.849609375,
        "posy": 376.6059875488281,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "397611339",
        "mapid": "1",
        "bftitle": "Chiavenna",
        "sector": "0",
        "posx": 6269.89697265625,
        "posy": 6943.06103515625,
        "gamemap": "201"
    },
    {
        "id": "398134580",
        "mapid": "1",
        "bftitle": "Säffle",
        "sector": "0",
        "posx": 7304.85107421875,
        "posy": 639.1314697265625,
        "gamemap": "70439"
    },
    {
        "id": "398964941",
        "mapid": "1",
        "bftitle": "Weiden",
        "sector": "0",
        "posx": 7078.3349609375,
        "posy": 5461.68310546875,
        "gamemap": "203",
        "rotation": 1
    },
    {
        "id": "399128314",
        "mapid": "1",
        "bftitle": "Bessé-sur-Braye",
        "sector": "0",
        "posx": 3735.389892578125,
        "posy": 6325.0908203125,
        "gamemap": "203",
        "rotation": 3
    },
    {
        "id": "400125405",
        "mapid": "1",
        "bftitle": "Shumen",
        "sector": "0",
        "posx": 11406.8896484375,
        "posy": 8212.3095703125,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "400142615",
        "mapid": "1",
        "bftitle": "Anderstorp",
        "sector": "0",
        "posx": 7701.8798828125,
        "posy": 781.8590698242188,
        "gamemap": "70439"
    },
    {
        "id": "400570519",
        "mapid": "1",
        "bftitle": "Lipsk",
        "sector": "0",
        "posx": 10374.900390625,
        "posy": 3527.721923828125,
        "gamemap": "201"
    },
    {
        "id": "400723893",
        "mapid": "1",
        "bftitle": "Vác",
        "sector": "0",
        "posx": 9125.953125,
        "posy": 6284.8330078125,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "400856684",
        "mapid": "1",
        "bftitle": "Asproválta",
        "sector": "0",
        "posx": 10465.6298828125,
        "posy": 9221.58203125,
        "gamemap": "70439"
    },
    {
        "id": "400936400",
        "mapid": "1",
        "bftitle": "Habo",
        "sector": "0",
        "posx": 7640.64794921875,
        "posy": 1329.1820068359375,
        "gamemap": "70439"
    },
    {
        "id": "401823805",
        "mapid": "1",
        "bftitle": "Shil’tsevo",
        "sector": "0",
        "posx": 12231.7802734375,
        "posy": 960.1995239257812,
        "gamemap": "201"
    },
    {
        "id": "401958176",
        "mapid": "1",
        "bftitle": "Ērgļi",
        "sector": "0",
        "posx": 11029.8701171875,
        "posy": 1885.072998046875,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "402171711",
        "mapid": "1",
        "bftitle": "Alūksne",
        "sector": "0",
        "posx": 11444.16015625,
        "posy": 1602.4840087890625,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "402437500",
        "mapid": "1",
        "bftitle": "Kozyatyn",
        "sector": "0",
        "posx": 11967.0498046875,
        "posy": 5444.57421875,
        "gamemap": "201"
    },
    {
        "id": "402499330",
        "mapid": "1",
        "bftitle": "Bordeaux",
        "sector": "0",
        "posx": 3344.864990234375,
        "posy": 7567.42822265625,
        "gamemap": "70439"
    },
    {
        "id": "402960331",
        "mapid": "1",
        "bftitle": "Korosten",
        "sector": "0",
        "posx": 11909.7998046875,
        "posy": 4868.68212890625,
        "gamemap": "70439"
    },
    {
        "id": "402980512",
        "mapid": "1",
        "bftitle": "Langenthal",
        "sector": "0",
        "posx": 5800.27783203125,
        "posy": 6557.47509765625,
        "gamemap": "201"
    },
    {
        "id": "403182288",
        "mapid": "1",
        "bftitle": "Windischenlaibach Flugplatz",
        "sector": "0",
        "posx": 6969.89404296875,
        "posy": 5329.330078125,
        "gamemap": "205",
        "rotation": 3
    },
    {
        "id": "403713750",
        "mapid": "1",
        "bftitle": "Zharkovskiy",
        "sector": "0",
        "posx": 12974.2001953125,
        "posy": 2444.054931640625,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "403927042",
        "mapid": "1",
        "bftitle": "Philippeville",
        "sector": "0",
        "posx": 4835.97705078125,
        "posy": 5245.51318359375,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "404409812",
        "mapid": "1",
        "bftitle": "Maiac",
        "sector": "0",
        "posx": 12128.8603515625,
        "posy": 6547.80712890625,
        "gamemap": "70439"
    },
    {
        "id": "404449984",
        "mapid": "1",
        "bftitle": "Švenčionėliai",
        "sector": "0",
        "posx": 11136.3701171875,
        "posy": 2799.762939453125,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "404508516",
        "mapid": "1",
        "bftitle": "Ptuj",
        "sector": "0",
        "posx": 8167.03076171875,
        "posy": 6900.52490234375,
        "gamemap": "201"
    },
    {
        "id": "404587582",
        "mapid": "1",
        "bftitle": "Corte",
        "sector": "0",
        "posx": 6197.15283203125,
        "posy": 8602.7548828125,
        "gamemap": "201"
    },
    {
        "id": "404996405",
        "mapid": "1",
        "bftitle": "Slatina",
        "sector": "0",
        "posx": 10657.58984375,
        "posy": 7736.3232421875,
        "gamemap": "201"
    },
    {
        "id": "405073187",
        "mapid": "1",
        "bftitle": "Zakhozha",
        "sector": "0",
        "posx": 13262.8896484375,
        "posy": 487.5491027832031,
        "gamemap": "205",
        "rotation": 2
    },
    {
        "id": "405124172",
        "mapid": "1",
        "bftitle": "Lozovyk",
        "sector": "0",
        "posx": 12265.75,
        "posy": 5076.06494140625,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "405181993",
        "mapid": "1",
        "bftitle": "Mosal'sk",
        "sector": "0",
        "posx": 13769.16015625,
        "posy": 3147.54296875,
        "gamemap": "201"
    },
    {
        "id": "405356191",
        "mapid": "1",
        "bftitle": "Salisbury",
        "sector": "0",
        "posx": 2967.839111328125,
        "posy": 4841.60595703125,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "405411883",
        "mapid": "1",
        "bftitle": "Ryzhkovka",
        "sector": "0",
        "posx": 12460.6103515625,
        "posy": 3569.85791015625,
        "gamemap": "201"
    },
    {
        "id": "405727987",
        "mapid": "1",
        "bftitle": "Kirkkonummi",
        "sector": "0",
        "posx": 10678.66015625,
        "posy": 60.173789978027344,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "406219217",
        "mapid": "1",
        "bftitle": "Verneuil-sur-Vienne",
        "sector": "0",
        "posx": 3837.85693359375,
        "posy": 7141.15185546875,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "406457116",
        "mapid": "1",
        "bftitle": "Zapol’ye",
        "sector": "0",
        "posx": 11895.080078125,
        "posy": 4374.9111328125,
        "gamemap": "70439"
    },
    {
        "id": "406466485",
        "mapid": "1",
        "bftitle": "Novoyavorivs'k",
        "sector": "0",
        "posx": 10425.1201171875,
        "posy": 5345.77587890625,
        "gamemap": "201"
    },
    {
        "id": "407062189",
        "mapid": "1",
        "bftitle": "Hohen Neuendorf",
        "sector": "0",
        "posx": 7407.1162109375,
        "posy": 4048.6201171875,
        "gamemap": "205",
        "rotation": 1
    },
    {
        "id": "407082655",
        "mapid": "1",
        "bftitle": "Fornebu Lufthavn",
        "sector": "0",
        "posx": 6723.369140625,
        "posy": 179.28790283203125,
        "gamemap": "204",
        "rotation": 1
    },
    {
        "id": "407095715",
        "mapid": "1",
        "bftitle": "Pogorel’ye",
        "sector": "0",
        "posx": 12626.4404296875,
        "posy": 2469.805908203125,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "407671437",
        "mapid": "1",
        "bftitle": "Eringsboda",
        "sector": "0",
        "posx": 8014.55078125,
        "posy": 2134.43798828125,
        "gamemap": "70439"
    },
    {
        "id": "407902094",
        "mapid": "1",
        "bftitle": "Bratolyubovka",
        "sector": "0",
        "posx": 13441.8095703125,
        "posy": 6709.2900390625,
        "gamemap": "201"
    },
    {
        "id": "408132897",
        "mapid": "1",
        "bftitle": "Perugia",
        "sector": "0",
        "posx": 7146.5322265625,
        "posy": 8276.466796875,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "408408644",
        "mapid": "1",
        "bftitle": "Cleulis",
        "sector": "0",
        "posx": 7326.8681640625,
        "posy": 6830.4560546875,
        "gamemap": "203",
        "rotation": 1
    },
    {
        "id": "408548070",
        "mapid": "1",
        "bftitle": "Lynnevik",
        "sector": "0",
        "posx": 6158.06884765625,
        "posy": 280.4577941894531,
        "gamemap": "203",
        "rotation": 3
    },
    {
        "id": "409963454",
        "mapid": "1",
        "bftitle": "Ekeby",
        "sector": "0",
        "posx": 8650.6396484375,
        "posy": 571.285400390625,
        "gamemap": "203",
        "rotation": 2
    },
    {
        "id": "410037093",
        "mapid": "1",
        "bftitle": "Roussillon",
        "sector": "0",
        "posx": 4924.1669921875,
        "posy": 7344.6669921875,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "410229526",
        "mapid": "1",
        "bftitle": "Neufchâteau",
        "sector": "0",
        "posx": 5185.85888671875,
        "posy": 6058.9208984375,
        "gamemap": "201"
    },
    {
        "id": "410605060",
        "mapid": "1",
        "bftitle": "Bad Harzburg",
        "sector": "0",
        "posx": 6637.9482421875,
        "posy": 4427.06982421875,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "410702852",
        "mapid": "1",
        "bftitle": "Kiskunmajsa",
        "sector": "0",
        "posx": 9301.3857421875,
        "posy": 6870.43212890625,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "410898389",
        "mapid": "1",
        "bftitle": "Iława",
        "sector": "0",
        "posx": 9251.109375,
        "posy": 3596.034912109375,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "410940261",
        "mapid": "1",
        "bftitle": "Boksitogorsk",
        "sector": "0",
        "posx": 13437,
        "posy": 441.49798583984375,
        "gamemap": "201"
    },
    {
        "id": "410958339",
        "mapid": "1",
        "bftitle": "Denham",
        "sector": "0",
        "posx": 3865.448974609375,
        "posy": 4218.10498046875,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "411423268",
        "mapid": "1",
        "bftitle": "Rosslyn",
        "sector": "0",
        "posx": 2599.55908203125,
        "posy": 2450.660888671875,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "411660840",
        "mapid": "1",
        "bftitle": "Vik",
        "sector": "0",
        "posx": 5151.23486328125,
        "posy": 875.0639038085938,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "411857346",
        "mapid": "1",
        "bftitle": "Lokhvytsya",
        "sector": "0",
        "posx": 13264.5595703125,
        "posy": 5144.2099609375,
        "gamemap": "70439"
    },
    {
        "id": "412037380",
        "mapid": "1",
        "bftitle": "Caracal",
        "sector": "0",
        "posx": 10652.7099609375,
        "posy": 7866.884765625,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "412702935",
        "mapid": "1",
        "bftitle": "Vichy",
        "sector": "0",
        "posx": 4516.548828125,
        "posy": 7030.0830078125,
        "gamemap": "201"
    },
    {
        "id": "413081233",
        "mapid": "1",
        "bftitle": "Einsiedeln",
        "sector": "0",
        "posx": 6079.125,
        "posy": 6595.15478515625,
        "gamemap": "203",
        "rotation": 1
    },
    {
        "id": "413181427",
        "mapid": "1",
        "bftitle": "Split",
        "sector": "0",
        "posx": 8333.8134765625,
        "posy": 8115.52001953125,
        "gamemap": "70439"
    },
    {
        "id": "413245891",
        "mapid": "1",
        "bftitle": "Kumhausen",
        "sector": "0",
        "posx": 7081.423828125,
        "posy": 5992.19287109375,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "413299852",
        "mapid": "1",
        "bftitle": "Schiermonnikoog",
        "sector": "0",
        "posx": 5339.5380859375,
        "posy": 3657.029052734375,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "413482411",
        "mapid": "1",
        "bftitle": "Hanönü",
        "sector": "0",
        "posx": 13618.1904296875,
        "posy": 8869.927734375,
        "gamemap": "201"
    },
    {
        "id": "413494884",
        "mapid": "1",
        "bftitle": "Rohatyn",
        "sector": "0",
        "posx": 10728.7099609375,
        "posy": 5583.52685546875,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "413544804",
        "mapid": "1",
        "bftitle": "Rundāle",
        "sector": "0",
        "posx": 10896.98046875,
        "posy": 2134.43798828125,
        "gamemap": "201"
    },
    {
        "id": "413915912",
        "mapid": "1",
        "bftitle": "Loubaresse",
        "sector": "0",
        "posx": 4456.19189453125,
        "posy": 7527.666015625,
        "gamemap": "203"
    },
    {
        "id": "414078897",
        "mapid": "1",
        "bftitle": "Tikhvin",
        "sector": "0",
        "posx": 13343.4501953125,
        "posy": 341.82769775390625,
        "gamemap": "201"
    },
    {
        "id": "414134765",
        "mapid": "1",
        "bftitle": "Amberg",
        "sector": "0",
        "posx": 6992.31494140625,
        "posy": 5568.15576171875,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "414143553",
        "mapid": "1",
        "bftitle": "Neuhof",
        "sector": "0",
        "posx": 7048.80078125,
        "posy": 3568.23388671875,
        "gamemap": "201"
    },
    {
        "id": "414291040",
        "mapid": "1",
        "bftitle": "Selishche",
        "sector": "0",
        "posx": 11605.669921875,
        "posy": 3204.919921875,
        "gamemap": "201"
    },
    {
        "id": "414408630",
        "mapid": "1",
        "bftitle": "San Salvo",
        "sector": "0",
        "posx": 7810.9990234375,
        "posy": 8720.568359375,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "414444151",
        "mapid": "1",
        "bftitle": "Lefkada",
        "sector": "0",
        "posx": 9584.083984375,
        "posy": 9951.5634765625,
        "gamemap": "70439"
    },
    {
        "id": "414990069",
        "mapid": "1",
        "bftitle": "Ebenthal",
        "sector": "0",
        "posx": 7730.93798828125,
        "posy": 6828.9931640625,
        "gamemap": "201"
    },
    {
        "id": "415057368",
        "mapid": "1",
        "bftitle": "Lönsboda",
        "sector": "0",
        "posx": 7711.65087890625,
        "posy": 2152.22705078125,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "415082281",
        "mapid": "1",
        "bftitle": "Korolev",
        "sector": "0",
        "posx": 14602.7802734375,
        "posy": 2409.757080078125,
        "gamemap": "205",
        "rotation": 2
    },
    {
        "id": "415284723",
        "mapid": "1",
        "bftitle": "Saint-Cannat",
        "sector": "0",
        "posx": 5067.69677734375,
        "posy": 8069.89599609375,
        "gamemap": "70439"
    },
    {
        "id": "415608525",
        "mapid": "1",
        "bftitle": "Lozovo",
        "sector": "0",
        "posx": 9936.171875,
        "posy": 8807.9111328125,
        "gamemap": "201"
    },
    {
        "id": "415980992",
        "mapid": "1",
        "bftitle": "Sousceyrac",
        "sector": "0",
        "posx": 4114.01416015625,
        "posy": 7553.751953125,
        "gamemap": "203",
        "rotation": 1
    },
    {
        "id": "416193898",
        "mapid": "1",
        "bftitle": "Fougères",
        "sector": "0",
        "posx": 3116.012939453125,
        "posy": 6110.95703125,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "416371328",
        "mapid": "1",
        "bftitle": "Chièvres Aérodrome",
        "sector": "0",
        "posx": 4577.0888671875,
        "posy": 5027.5419921875,
        "gamemap": "205",
        "rotation": 2
    },
    {
        "id": "416453019",
        "mapid": "1",
        "bftitle": "Zhukovka",
        "sector": "0",
        "posx": 13401.66015625,
        "posy": 3626.883056640625,
        "gamemap": "201"
    },
    {
        "id": "416852378",
        "mapid": "1",
        "bftitle": "Sankt Polten",
        "sector": "0",
        "posx": 8097.60400390625,
        "posy": 6125.4541015625,
        "gamemap": "201"
    },
    {
        "id": "416977070",
        "mapid": "1",
        "bftitle": "Pushkino",
        "sector": "0",
        "posx": 14614.830078125,
        "posy": 2355.40087890625,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "417185176",
        "mapid": "1",
        "bftitle": "Vereshchaki",
        "sector": "0",
        "posx": 12795.76953125,
        "posy": 4021.14794921875,
        "gamemap": "70439"
    },
    {
        "id": "417394212",
        "mapid": "1",
        "bftitle": "Strugi-Krasnyye",
        "sector": "0",
        "posx": 12048.400390625,
        "posy": 1130.5360107421875,
        "gamemap": "201"
    },
    {
        "id": "417839274",
        "mapid": "1",
        "bftitle": "Novi Sad",
        "sector": "0",
        "posx": 9329.802734375,
        "posy": 7395.60791015625,
        "gamemap": "70439"
    },
    {
        "id": "417926148",
        "mapid": "1",
        "bftitle": "Kamień Pomorski",
        "sector": "0",
        "posx": 7845.30419921875,
        "posy": 3409.928955078125,
        "gamemap": "70439"
    },
    {
        "id": "417953886",
        "mapid": "1",
        "bftitle": "Donnersdorf Flugplatz",
        "sector": "0",
        "posx": 6568.44921875,
        "posy": 5329.06005859375,
        "gamemap": "204",
        "rotation": 1
    },
    {
        "id": "418328466",
        "mapid": "1",
        "bftitle": "Alba",
        "sector": "0",
        "posx": 5870.22607421875,
        "posy": 7625.8681640625,
        "gamemap": "201"
    },
    {
        "id": "418372612",
        "mapid": "1",
        "bftitle": "Cardiff",
        "sector": "0",
        "posx": 2583.509033203125,
        "posy": 4616.30810546875,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "418557463",
        "mapid": "1",
        "bftitle": "Sremčica",
        "sector": "0",
        "posx": 9490.5478515625,
        "posy": 7635.31689453125,
        "gamemap": "203"
    },
    {
        "id": "418624478",
        "mapid": "1",
        "bftitle": "Joinville",
        "sector": "0",
        "posx": 5022.12890625,
        "posy": 6017.29296875,
        "gamemap": "70439"
    },
    {
        "id": "418697570",
        "mapid": "1",
        "bftitle": "Pesochnoye",
        "sector": "0",
        "posx": 14998.98046875,
        "posy": 1276.8089599609375,
        "gamemap": "70439"
    },
    {
        "id": "418749050",
        "mapid": "1",
        "bftitle": "Donoussa",
        "sector": "0",
        "posx": 11088.169921875,
        "posy": 10611.2099609375,
        "gamemap": "70439"
    },
    {
        "id": "418823146",
        "mapid": "1",
        "bftitle": "Udomlya",
        "sector": "0",
        "posx": 13772.330078125,
        "posy": 1347.1820068359375,
        "gamemap": "201"
    },
    {
        "id": "418869249",
        "mapid": "1",
        "bftitle": "Bussoleno",
        "sector": "0",
        "posx": 5609.22998046875,
        "posy": 7442.51123046875,
        "gamemap": "201"
    },
    {
        "id": "419000933",
        "mapid": "1",
        "bftitle": "Plymouth",
        "sector": "0",
        "posx": 2326.12890625,
        "posy": 5165.27392578125,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "419688527",
        "mapid": "1",
        "bftitle": "Salles",
        "sector": "0",
        "posx": 3262.720947265625,
        "posy": 7688.04296875,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "419766243",
        "mapid": "1",
        "bftitle": "Châtillon-sur-Seine",
        "sector": "0",
        "posx": 4855.72314453125,
        "posy": 6276.19580078125,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "420214884",
        "mapid": "1",
        "bftitle": "Factory 'Albin'",
        "sector": "0",
        "posx": 15964.6396484375,
        "posy": 15755.6201171875,
        "gamemap": "203"
    },
    {
        "id": "420440773",
        "mapid": "1",
        "bftitle": "Nieuwpoort",
        "sector": "0",
        "posx": 4337.0068359375,
        "posy": 4832.11279296875,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "420989883",
        "mapid": "1",
        "bftitle": "Tamsweg",
        "sector": "0",
        "posx": 7563.43115234375,
        "posy": 6595.33203125,
        "gamemap": "201"
    },
    {
        "id": "421231263",
        "mapid": "1",
        "bftitle": "Bytosh'",
        "sector": "0",
        "posx": 13508.1201171875,
        "posy": 3485.014892578125,
        "gamemap": "70439"
    },
    {
        "id": "421449975",
        "mapid": "1",
        "bftitle": "Visby",
        "sector": "0",
        "posx": 8907.3935546875,
        "posy": 1491.1710205078125,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "421592814",
        "mapid": "1",
        "bftitle": "Fredericia",
        "sector": "0",
        "posx": 6376.951171875,
        "posy": 2599.510009765625,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "421987393",
        "mapid": "1",
        "bftitle": "Knäred",
        "sector": "0",
        "posx": 7418.52197265625,
        "posy": 2080.97607421875,
        "gamemap": "201"
    },
    {
        "id": "421999695",
        "mapid": "1",
        "bftitle": "Komárno",
        "sector": "0",
        "posx": 8827.2900390625,
        "posy": 6317.93505859375,
        "gamemap": "70439"
    },
    {
        "id": "422317476",
        "mapid": "1",
        "bftitle": "Chivasso",
        "sector": "0",
        "posx": 5835.66796875,
        "posy": 7422.5009765625,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "422442751",
        "mapid": "1",
        "bftitle": "Belgrade",
        "sector": "0",
        "posx": 9513.94140625,
        "posy": 7582.5908203125,
        "gamemap": "70439"
    },
    {
        "id": "422718703",
        "mapid": "1",
        "bftitle": "Bosanska Krupa",
        "sector": "0",
        "posx": 8249.4609375,
        "posy": 7549.9111328125,
        "gamemap": "201"
    },
    {
        "id": "422742875",
        "mapid": "1",
        "bftitle": "Lausanne",
        "sector": "0",
        "posx": 5458.375,
        "posy": 6859.64501953125,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "423103011",
        "mapid": "1",
        "bftitle": "Marijampolė",
        "sector": "0",
        "posx": 10359.580078125,
        "posy": 3107.552978515625,
        "gamemap": "201"
    },
    {
        "id": "423220432",
        "mapid": "1",
        "bftitle": "Caorle",
        "sector": "0",
        "posx": 7289.29296875,
        "posy": 7250.541015625,
        "gamemap": "70439"
    },
    {
        "id": "423559883",
        "mapid": "1",
        "bftitle": "Beylikdüzü",
        "sector": "0",
        "posx": 11910.2001953125,
        "posy": 9123.41796875,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "423561406",
        "mapid": "1",
        "bftitle": "Ruzhyn",
        "sector": "0",
        "posx": 12075.7197265625,
        "posy": 5440.69580078125,
        "gamemap": "201"
    },
    {
        "id": "423652894",
        "mapid": "1",
        "bftitle": "Radzymin",
        "sector": "0",
        "posx": 9722.333984375,
        "posy": 4159.2060546875,
        "gamemap": "205",
        "rotation": 3
    },
    {
        "id": "423679431",
        "mapid": "1",
        "bftitle": "Cellettes",
        "sector": "0",
        "posx": 3918.639892578125,
        "posy": 6427.94287109375,
        "gamemap": "70439"
    },
    {
        "id": "424062237",
        "mapid": "1",
        "bftitle": "Pons",
        "sector": "0",
        "posx": 3354.44189453125,
        "posy": 7257.5771484375,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "424364080",
        "mapid": "1",
        "bftitle": "Unnaryd",
        "sector": "0",
        "posx": 7477.14794921875,
        "posy": 1856.68603515625,
        "gamemap": "70439"
    },
    {
        "id": "424796614",
        "mapid": "1",
        "bftitle": "Auch",
        "sector": "0",
        "posx": 3686.01708984375,
        "posy": 8058.02392578125,
        "gamemap": "203",
        "rotation": 1
    },
    {
        "id": "424902756",
        "mapid": "1",
        "bftitle": "Biłgoraj",
        "sector": "0",
        "posx": 10175.509765625,
        "posy": 5063.81787109375,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "424953339",
        "mapid": "1",
        "bftitle": "Balerno",
        "sector": "0",
        "posx": 2536.839111328125,
        "posy": 2445.219970703125,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "425403417",
        "mapid": "1",
        "bftitle": "Krymsk",
        "sector": "0",
        "posx": 14651.330078125,
        "posy": 7530.39013671875,
        "gamemap": "70439"
    },
    {
        "id": "425410071",
        "mapid": "1",
        "bftitle": "Jessheim",
        "sector": "0",
        "posx": 6790.783203125,
        "posy": 49.680850982666016,
        "gamemap": "201"
    },
    {
        "id": "425429952",
        "mapid": "1",
        "bftitle": "Condom",
        "sector": "0",
        "posx": 3624.06689453125,
        "posy": 7931.97314453125,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "425653937",
        "mapid": "1",
        "bftitle": "Kopor'ye",
        "sector": "0",
        "posx": 12025.98046875,
        "posy": 303.4888916015625,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "425909411",
        "mapid": "1",
        "bftitle": "Kremenets",
        "sector": "0",
        "posx": 11055.6396484375,
        "posy": 5269.19677734375,
        "gamemap": "70439"
    },
    {
        "id": "426057685",
        "mapid": "1",
        "bftitle": "Rhyl",
        "sector": "0",
        "posx": 2493.678955078125,
        "posy": 3748.324951171875,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "426093093",
        "mapid": "1",
        "bftitle": "Højer",
        "sector": "0",
        "posx": 6090.90185546875,
        "posy": 2902.680908203125,
        "gamemap": "203",
        "rotation": 1
    },
    {
        "id": "426100207",
        "mapid": "1",
        "bftitle": "Buxtehude",
        "sector": "0",
        "posx": 6354.375,
        "posy": 3660.030029296875,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "426217471",
        "mapid": "1",
        "bftitle": "Högsby",
        "sector": "0",
        "posx": 8212.5947265625,
        "posy": 1739.4410400390625,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "426253343",
        "mapid": "1",
        "bftitle": "Wałbrzych",
        "sector": "0",
        "posx": 8288.4267578125,
        "posy": 4956.59716796875,
        "gamemap": "70439"
    },
    {
        "id": "426484533",
        "mapid": "1",
        "bftitle": "Likhoslavl'",
        "sector": "0",
        "posx": 13911.0498046875,
        "posy": 1761.9029541015625,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "426490675",
        "mapid": "1",
        "bftitle": "Tamsalu",
        "sector": "0",
        "posx": 11170.16015625,
        "posy": 623.980224609375,
        "gamemap": "205",
        "rotation": 1
    },
    {
        "id": "426834654",
        "mapid": "1",
        "bftitle": "Bourg-de-Thizy",
        "sector": "0",
        "posx": 4775.1982421875,
        "posy": 7065.384765625,
        "gamemap": "203"
    },
    {
        "id": "426891868",
        "mapid": "1",
        "bftitle": "Bockhorn",
        "sector": "0",
        "posx": 5864.93994140625,
        "posy": 3693.30810546875,
        "gamemap": "70439"
    },
    {
        "id": "427072790",
        "mapid": "1",
        "bftitle": "Cassino",
        "sector": "0",
        "posx": 7568.51220703125,
        "posy": 8925.646484375,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "427247556",
        "mapid": "1",
        "bftitle": "Kushchëvskaya",
        "sector": "0",
        "posx": 15132.330078125,
        "posy": 6840.56103515625,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "427325856",
        "mapid": "1",
        "bftitle": "Voronkov",
        "sector": "0",
        "posx": 12572.599609375,
        "posy": 5211.40478515625,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "427463582",
        "mapid": "1",
        "bftitle": "Solone",
        "sector": "0",
        "posx": 13737.0302734375,
        "posy": 6121.88818359375,
        "gamemap": "203",
        "rotation": 1
    },
    {
        "id": "428028606",
        "mapid": "1",
        "bftitle": "Scunthorpe",
        "sector": "0",
        "posx": 3337.31591796875,
        "posy": 3660.2529296875,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "429083767",
        "mapid": "1",
        "bftitle": "Mens",
        "sector": "0",
        "posx": 5200.91796875,
        "posy": 7576.9638671875,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "429499772",
        "mapid": "1",
        "bftitle": "Budcha",
        "sector": "0",
        "posx": 11383.7099609375,
        "posy": 4008.126953125,
        "gamemap": "201"
    },
    {
        "id": "429783710",
        "mapid": "1",
        "bftitle": "Chełm",
        "sector": "0",
        "posx": 10395.23046875,
        "posy": 4782.39208984375,
        "gamemap": "70439"
    },
    {
        "id": "429939671",
        "mapid": "1",
        "bftitle": "Mohács",
        "sector": "0",
        "posx": 8991.5654296875,
        "posy": 7082.666015625,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "430049482",
        "mapid": "1",
        "bftitle": "Zhlobin",
        "sector": "0",
        "posx": 12315.919921875,
        "posy": 3943.051025390625,
        "gamemap": "203"
    },
    {
        "id": "430284552",
        "mapid": "1",
        "bftitle": "Saint-Florentin",
        "sector": "0",
        "posx": 4581.98095703125,
        "posy": 6118.9482421875,
        "gamemap": "203",
        "rotation": 3
    },
    {
        "id": "430304498",
        "mapid": "1",
        "bftitle": "Plungė",
        "sector": "0",
        "posx": 9918.177734375,
        "posy": 2411.220947265625,
        "gamemap": "70439"
    },
    {
        "id": "430332222",
        "mapid": "1",
        "bftitle": "Petrovskoye",
        "sector": "0",
        "posx": 13144.2998046875,
        "posy": 561.6602172851562,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "430464033",
        "mapid": "1",
        "bftitle": "Steinberg am Rofan",
        "sector": "0",
        "posx": 6973.01513671875,
        "posy": 6426.79296875,
        "gamemap": "203",
        "rotation": 1
    },
    {
        "id": "430599858",
        "mapid": "1",
        "bftitle": "Angoulême",
        "sector": "0",
        "posx": 3558.9951171875,
        "posy": 7227.98486328125,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "430704653",
        "mapid": "1",
        "bftitle": "Smilgas",
        "sector": "0",
        "posx": 10981.4501953125,
        "posy": 1873.1920166015625,
        "gamemap": "203"
    },
    {
        "id": "430709514",
        "mapid": "1",
        "bftitle": "Varakļāni",
        "sector": "0",
        "posx": 11357.3203125,
        "posy": 2040.823974609375,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "431353992",
        "mapid": "1",
        "bftitle": "Argostoli",
        "sector": "0",
        "posx": 9520.9482421875,
        "posy": 10196.5,
        "gamemap": "70439"
    },
    {
        "id": "431444941",
        "mapid": "1",
        "bftitle": "Cheillé",
        "sector": "0",
        "posx": 3633.89697265625,
        "posy": 6537.52392578125,
        "gamemap": "70439"
    },
    {
        "id": "431633075",
        "mapid": "1",
        "bftitle": "Ehra",
        "sector": "0",
        "posx": 6697.826171875,
        "posy": 4110.70703125,
        "gamemap": "203",
        "rotation": 3
    },
    {
        "id": "431850788",
        "mapid": "1",
        "bftitle": "Çatalca",
        "sector": "0",
        "posx": 11857.919921875,
        "posy": 9060.2880859375,
        "gamemap": "70439"
    },
    {
        "id": "431913699",
        "mapid": "1",
        "bftitle": "Le Clot",
        "sector": "0",
        "posx": 5356.18701171875,
        "posy": 7570.88818359375,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "431936317",
        "mapid": "1",
        "bftitle": "Dubno",
        "sector": "0",
        "posx": 11058.490234375,
        "posy": 5121.43798828125,
        "gamemap": "70439"
    },
    {
        "id": "432148547",
        "mapid": "1",
        "bftitle": "Rjukan",
        "sector": "0",
        "posx": 6034.2060546875,
        "posy": 204.7718963623047,
        "gamemap": "203",
        "rotation": 2
    },
    {
        "id": "432214855",
        "mapid": "1",
        "bftitle": "Meaux Fabrique",
        "sector": "0",
        "posx": 4362.73876953125,
        "posy": 5768.2890625,
        "gamemap": "203",
        "rotation": 2
    },
    {
        "id": "432366603",
        "mapid": "1",
        "bftitle": "Ruza",
        "sector": "0",
        "posx": 14124.8798828125,
        "posy": 2522.794921875,
        "gamemap": "201"
    },
    {
        "id": "432492540",
        "mapid": "1",
        "bftitle": "Pizzo",
        "sector": "0",
        "posx": 8259.8876953125,
        "posy": 9981.0185546875,
        "gamemap": "70439"
    },
    {
        "id": "432504537",
        "mapid": "1",
        "bftitle": "Ringsted",
        "sector": "0",
        "posx": 6971.0439453125,
        "posy": 2656.657958984375,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "432717976",
        "mapid": "1",
        "bftitle": "Grimstad",
        "sector": "0",
        "posx": 6034.005859375,
        "posy": 1089.54296875,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "433094675",
        "mapid": "1",
        "bftitle": "Barrow-in-Furness",
        "sector": "0",
        "posx": 2564.2900390625,
        "posy": 3305.260009765625,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "433245591",
        "mapid": "1",
        "bftitle": "Lidköping",
        "sector": "0",
        "posx": 7371.9111328125,
        "posy": 996.7069702148438,
        "gamemap": "70439"
    },
    {
        "id": "433368240",
        "mapid": "1",
        "bftitle": "Björkö",
        "sector": "0",
        "posx": 9084.470703125,
        "posy": 280.4577941894531,
        "gamemap": "70439"
    },
    {
        "id": "433558706",
        "mapid": "1",
        "bftitle": "Békéscsaba",
        "sector": "0",
        "posx": 9700.041015625,
        "posy": 6787.505859375,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "433935419",
        "mapid": "1",
        "bftitle": "Scrignac",
        "sector": "0",
        "posx": 2410.68798828125,
        "posy": 6020.9580078125,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "433950289",
        "mapid": "1",
        "bftitle": "Kvarnåkershamn",
        "sector": "0",
        "posx": 8838.0234375,
        "posy": 1710.3780517578125,
        "gamemap": "70439"
    },
    {
        "id": "434268696",
        "mapid": "1",
        "bftitle": "Tomelilla",
        "sector": "0",
        "posx": 7605.51904296875,
        "posy": 2604.373046875,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "434567408",
        "mapid": "1",
        "bftitle": "Antrodoco",
        "sector": "0",
        "posx": 7348.18896484375,
        "posy": 8556.8232421875,
        "gamemap": "203",
        "rotation": 1
    },
    {
        "id": "434629488",
        "mapid": "1",
        "bftitle": "Haslemere",
        "sector": "0",
        "posx": 3339.137939453125,
        "posy": 4796.4189453125,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "435109817",
        "mapid": "1",
        "bftitle": "Schwerin",
        "sector": "0",
        "posx": 7582.72412109375,
        "posy": 4282.7529296875,
        "gamemap": "201"
    },
    {
        "id": "435150020",
        "mapid": "1",
        "bftitle": "Stockach",
        "sector": "0",
        "posx": 6149.2958984375,
        "posy": 6267.9541015625,
        "gamemap": "203",
        "rotation": 1
    },
    {
        "id": "435496543",
        "mapid": "1",
        "bftitle": "Haradok",
        "sector": "0",
        "posx": 12304.33984375,
        "posy": 2646.35009765625,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "435592403",
        "mapid": "1",
        "bftitle": "Pleshchenitsy",
        "sector": "0",
        "posx": 11672.830078125,
        "posy": 3180.324951171875,
        "gamemap": "201"
    },
    {
        "id": "435804625",
        "mapid": "1",
        "bftitle": "Aitoliko",
        "sector": "0",
        "posx": 9773.353515625,
        "posy": 10094.76953125,
        "gamemap": "203",
        "rotation": 1
    },
    {
        "id": "435924737",
        "mapid": "1",
        "bftitle": "Bilyayivka",
        "sector": "0",
        "posx": 12372.4296875,
        "posy": 6873.47119140625,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "436046591",
        "mapid": "1",
        "bftitle": "Gnesta",
        "sector": "0",
        "posx": 8589.642578125,
        "posy": 687.8494873046875,
        "gamemap": "70439"
    },
    {
        "id": "436251255",
        "mapid": "1",
        "bftitle": "Gardeja",
        "sector": "0",
        "posx": 9068.896484375,
        "posy": 3588.452880859375,
        "gamemap": "204",
        "rotation": 2
    },
    {
        "id": "436594932",
        "mapid": "1",
        "bftitle": "Corsano",
        "sector": "0",
        "posx": 8899.05859375,
        "posy": 9547.3095703125,
        "gamemap": "205"
    },
    {
        "id": "436858051",
        "mapid": "1",
        "bftitle": "Piedimonte Matese",
        "sector": "0",
        "posx": 7726.7060546875,
        "posy": 8978.787109375,
        "gamemap": "203",
        "rotation": 2
    },
    {
        "id": "436884145",
        "mapid": "1",
        "bftitle": "Kisbér",
        "sector": "0",
        "posx": 8802.0859375,
        "posy": 6432.126953125,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "436916439",
        "mapid": "1",
        "bftitle": "Nosivka",
        "sector": "0",
        "posx": 12772.8603515625,
        "posy": 4881.72998046875,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "436946531",
        "mapid": "1",
        "bftitle": "Rennes",
        "sector": "0",
        "posx": 2990.035888671875,
        "posy": 6197.69580078125,
        "gamemap": "70439"
    },
    {
        "id": "436969015",
        "mapid": "1",
        "bftitle": "Ezine",
        "sector": "0",
        "posx": 11236.2802734375,
        "posy": 9587.1025390625,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "437454979",
        "mapid": "1",
        "bftitle": "Savona",
        "sector": "0",
        "posx": 5999.921875,
        "posy": 7787.64990234375,
        "gamemap": "70439"
    },
    {
        "id": "437466793",
        "mapid": "1",
        "bftitle": "Inkerman",
        "sector": "0",
        "posx": 13367.01953125,
        "posy": 7661.55615234375,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "437482000",
        "mapid": "1",
        "bftitle": "Alingsås",
        "sector": "0",
        "posx": 7188.93798828125,
        "posy": 1318.907958984375,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "437611039",
        "mapid": "1",
        "bftitle": "Pusztaszabolcs",
        "sector": "0",
        "posx": 9016.18359375,
        "posy": 6591.3837890625,
        "gamemap": "203",
        "rotation": 2
    },
    {
        "id": "437962677",
        "mapid": "1",
        "bftitle": "Küstrin",
        "sector": "0",
        "posx": 7776.45703125,
        "posy": 4104.60888671875,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "438706194",
        "mapid": "1",
        "bftitle": "Saintes",
        "sector": "0",
        "posx": 3329.376953125,
        "posy": 7185.716796875,
        "gamemap": "70439"
    },
    {
        "id": "438856570",
        "mapid": "1",
        "bftitle": "Ramsgate",
        "sector": "0",
        "posx": 3938.450927734375,
        "posy": 4675.6650390625,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "438897966",
        "mapid": "1",
        "bftitle": "Telšiai",
        "sector": "0",
        "posx": 10036.3203125,
        "posy": 2374.318115234375,
        "gamemap": "201"
    },
    {
        "id": "439084476",
        "mapid": "1",
        "bftitle": "Kaniv",
        "sector": "0",
        "posx": 12736.8701171875,
        "posy": 5427.43994140625,
        "gamemap": "70439"
    },
    {
        "id": "439103646",
        "mapid": "1",
        "bftitle": "Malyye Bereznitsy",
        "sector": "0",
        "posx": 12543.3896484375,
        "posy": 715.1019287109375,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "439687559",
        "mapid": "1",
        "bftitle": "Hovden",
        "sector": "0",
        "posx": 5671.48583984375,
        "posy": 391.2189025878906,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "439749927",
        "mapid": "1",
        "bftitle": "Sighetu Marmaţiei",
        "sector": "0",
        "posx": 10516.7099609375,
        "posy": 6243.865234375,
        "gamemap": "204"
    },
    {
        "id": "440027219",
        "mapid": "1",
        "bftitle": "Le Chenit",
        "sector": "0",
        "posx": 5341.39892578125,
        "posy": 6820.3818359375,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "440121917",
        "mapid": "1",
        "bftitle": "Fridafors",
        "sector": "0",
        "posx": 7809.36083984375,
        "posy": 2143.333984375,
        "gamemap": "201"
    },
    {
        "id": "440294653",
        "mapid": "1",
        "bftitle": "Žagarė",
        "sector": "0",
        "posx": 10330.26953125,
        "posy": 2173.998046875,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "440875402",
        "mapid": "1",
        "bftitle": "Sovetsk",
        "sector": "0",
        "posx": 9928.2451171875,
        "posy": 2842.48388671875,
        "gamemap": "70439"
    },
    {
        "id": "441790856",
        "mapid": "1",
        "bftitle": "Carpi",
        "sector": "0",
        "posx": 6703.58984375,
        "posy": 7591.591796875,
        "gamemap": "70439"
    },
    {
        "id": "441974048",
        "mapid": "1",
        "bftitle": "Ermoúpolis",
        "sector": "0",
        "posx": 10826.080078125,
        "posy": 10484.099609375,
        "gamemap": "70439"
    },
    {
        "id": "442376800",
        "mapid": "1",
        "bftitle": "Lepsari",
        "sector": "0",
        "posx": 12548.8798828125,
        "posy": 55.48379135131836,
        "gamemap": "201"
    },
    {
        "id": "443126975",
        "mapid": "1",
        "bftitle": "Kolding",
        "sector": "0",
        "posx": 6279.02099609375,
        "posy": 2642.097900390625,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "443324043",
        "mapid": "1",
        "bftitle": "Hartlepool",
        "sector": "0",
        "posx": 3135.091064453125,
        "posy": 3050.59912109375,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "444019443",
        "mapid": "1",
        "bftitle": "Meppen",
        "sector": "0",
        "posx": 5633.97509765625,
        "posy": 4018.3359375,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "444379054",
        "mapid": "1",
        "bftitle": "Kozel'sk",
        "sector": "0",
        "posx": 14000.7001953125,
        "posy": 3375.2919921875,
        "gamemap": "201"
    },
    {
        "id": "444540515",
        "mapid": "1",
        "bftitle": "Arezzo",
        "sector": "0",
        "posx": 6994.07421875,
        "posy": 8140.6728515625,
        "gamemap": "70439"
    },
    {
        "id": "444723567",
        "mapid": "1",
        "bftitle": "Jihlava",
        "sector": "0",
        "posx": 8085.26708984375,
        "posy": 5589.380859375,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "445392246",
        "mapid": "1",
        "bftitle": "Daveisiai",
        "sector": "0",
        "posx": 11273.169921875,
        "posy": 2791.14697265625,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "445754924",
        "mapid": "1",
        "bftitle": "Tatarbunary",
        "sector": "0",
        "posx": 12195.8095703125,
        "posy": 7148.7509765625,
        "gamemap": "203"
    },
    {
        "id": "446286260",
        "mapid": "1",
        "bftitle": "Clermont-Ferrand",
        "sector": "0",
        "posx": 4419.703125,
        "posy": 7173.1669921875,
        "gamemap": "201"
    },
    {
        "id": "446930253",
        "mapid": "1",
        "bftitle": "Rostov-on-Don",
        "sector": "0",
        "posx": 15159.0595703125,
        "posy": 6550.48095703125,
        "gamemap": "70439"
    },
    {
        "id": "447035740",
        "mapid": "1",
        "bftitle": "Gol’yanovo",
        "sector": "0",
        "posx": 14599.1201171875,
        "posy": 2457.72802734375,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "447111360",
        "mapid": "1",
        "bftitle": "Biars-sur-Cère",
        "sector": "0",
        "posx": 4053.60205078125,
        "posy": 7526.333984375,
        "gamemap": "201"
    },
    {
        "id": "447451184",
        "mapid": "1",
        "bftitle": "Verkhniy Rohachyk",
        "sector": "0",
        "posx": 13580.4697265625,
        "posy": 6542.13916015625,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "447699542",
        "mapid": "1",
        "bftitle": "Lettomanoppello",
        "sector": "0",
        "posx": 7630.0927734375,
        "posy": 8625.3515625,
        "gamemap": "203"
    },
    {
        "id": "448273703",
        "mapid": "1",
        "bftitle": "Hajdúszoboszló",
        "sector": "0",
        "posx": 9787.978515625,
        "posy": 6455.22802734375,
        "gamemap": "203"
    },
    {
        "id": "448314291",
        "mapid": "1",
        "bftitle": "Wrexham",
        "sector": "0",
        "posx": 2638.18408203125,
        "posy": 3867.544921875,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "448330003",
        "mapid": "1",
        "bftitle": "Haninge",
        "sector": "0",
        "posx": 8833.7802734375,
        "posy": 618.7188110351562,
        "gamemap": "70439"
    },
    {
        "id": "448682426",
        "mapid": "1",
        "bftitle": "Lingen",
        "sector": "0",
        "posx": 5760.35986328125,
        "posy": 4127.81591796875,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "449012363",
        "mapid": "1",
        "bftitle": "Butterup",
        "sector": "0",
        "posx": 6920.77587890625,
        "posy": 2522.011962890625,
        "gamemap": "70439"
    },
    {
        "id": "449114813",
        "mapid": "1",
        "bftitle": "Banja Luka",
        "sector": "0",
        "posx": 8556.12890625,
        "posy": 7588.43408203125,
        "gamemap": "70439"
    },
    {
        "id": "449205073",
        "mapid": "1",
        "bftitle": "Most",
        "sector": "0",
        "posx": 7402.32080078125,
        "posy": 4945.64501953125,
        "gamemap": "201"
    },
    {
        "id": "449207590",
        "mapid": "1",
        "bftitle": "Radbruch",
        "sector": "0",
        "posx": 6529.3662109375,
        "posy": 3734.528076171875,
        "gamemap": "203",
        "rotation": 3
    },
    {
        "id": "449351741",
        "mapid": "1",
        "bftitle": "Jersey Aérodrome",
        "sector": "0",
        "posx": 2923.09912109375,
        "posy": 5674.09619140625,
        "gamemap": "204"
    },
    {
        "id": "450445333",
        "mapid": "1",
        "bftitle": "Osby",
        "sector": "0",
        "posx": 7616.962890625,
        "posy": 2162.014892578125,
        "gamemap": "201"
    },
    {
        "id": "450712471",
        "mapid": "1",
        "bftitle": "Reims Aérodrome",
        "sector": "0",
        "posx": 4708.412109375,
        "posy": 5620.27099609375,
        "gamemap": "204",
        "rotation": 3
    },
    {
        "id": "450968560",
        "mapid": "1",
        "bftitle": "Navahrudak",
        "sector": "0",
        "posx": 11083.33984375,
        "posy": 3596.93408203125,
        "gamemap": "201"
    },
    {
        "id": "451028640",
        "mapid": "1",
        "bftitle": "Kholm-Zhirkovskiy",
        "sector": "0",
        "posx": 13326.9404296875,
        "posy": 2616.916015625,
        "gamemap": "201"
    },
    {
        "id": "451214371",
        "mapid": "1",
        "bftitle": "Altınoluk",
        "sector": "0",
        "posx": 11352.4697265625,
        "posy": 9666.18359375,
        "gamemap": "70439"
    },
    {
        "id": "451262214",
        "mapid": "1",
        "bftitle": "Zakynthos",
        "sector": "0",
        "posx": 9640.1103515625,
        "posy": 10346.6298828125,
        "gamemap": "70439"
    },
    {
        "id": "451264552",
        "mapid": "1",
        "bftitle": "Naves",
        "sector": "0",
        "posx": 4033.008056640625,
        "posy": 7369.47607421875,
        "gamemap": "203",
        "rotation": 2
    },
    {
        "id": "451265339",
        "mapid": "1",
        "bftitle": "Lastrup",
        "sector": "0",
        "posx": 5794.84521484375,
        "posy": 4008.883056640625,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "451325150",
        "mapid": "1",
        "bftitle": "Popilnia",
        "sector": "0",
        "posx": 12145.76953125,
        "posy": 5329.12890625,
        "gamemap": "203"
    },
    {
        "id": "451497560",
        "mapid": "1",
        "bftitle": "Rozdol’ne",
        "sector": "0",
        "posx": 13331.25,
        "posy": 7176.90380859375,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "451750595",
        "mapid": "1",
        "bftitle": "Lucera",
        "sector": "0",
        "posx": 8011.35693359375,
        "posy": 8917.8876953125,
        "gamemap": "70439"
    },
    {
        "id": "451796390",
        "mapid": "1",
        "bftitle": "Sausset-les-Pins",
        "sector": "0",
        "posx": 4980.673828125,
        "posy": 8180.9091796875,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "451809370",
        "mapid": "1",
        "bftitle": "Rugles",
        "sector": "0",
        "posx": 3723.0859375,
        "posy": 5848.22607421875,
        "gamemap": "201"
    },
    {
        "id": "452089879",
        "mapid": "1",
        "bftitle": "De Gaulle Depot",
        "sector": "0",
        "posx": 15630.0302734375,
        "posy": 15723.400390625,
        "gamemap": "12"
    },
    {
        "id": "452540224",
        "mapid": "1",
        "bftitle": "Liebenau",
        "sector": "0",
        "posx": 6181.673828125,
        "posy": 4083.98291015625,
        "gamemap": "70439"
    },
    {
        "id": "452642236",
        "mapid": "1",
        "bftitle": "St. Gallen",
        "sector": "0",
        "posx": 6263.0400390625,
        "posy": 6466.6162109375,
        "gamemap": "201"
    },
    {
        "id": "453328244",
        "mapid": "1",
        "bftitle": "Wörgl",
        "sector": "0",
        "posx": 7052.11181640625,
        "posy": 6440.671875,
        "gamemap": "203"
    },
    {
        "id": "453428676",
        "mapid": "1",
        "bftitle": "Sanremo",
        "sector": "0",
        "posx": 5794.7470703125,
        "posy": 7989.69287109375,
        "gamemap": "203",
        "rotation": 2
    },
    {
        "id": "453764070",
        "mapid": "1",
        "bftitle": "Sankt Peter-Ording",
        "sector": "0",
        "posx": 6059.85205078125,
        "posy": 3239.548095703125,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "454417472",
        "mapid": "1",
        "bftitle": "Kaufbeuren",
        "sector": "0",
        "posx": 6628.6162109375,
        "posy": 6265.69189453125,
        "gamemap": "203",
        "rotation": 3
    },
    {
        "id": "454701328",
        "mapid": "1",
        "bftitle": "Zelenogorsk",
        "sector": "0",
        "posx": 12220.98046875,
        "posy": 46.858489990234375,
        "gamemap": "70439"
    },
    {
        "id": "455033121",
        "mapid": "1",
        "bftitle": "Gubkin",
        "sector": "0",
        "posx": 14520.7900390625,
        "posy": 4717.10107421875,
        "gamemap": "70439"
    },
    {
        "id": "455574718",
        "mapid": "1",
        "bftitle": "Ponyushino",
        "sector": "0",
        "posx": 12243.6904296875,
        "posy": 2004.458984375,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "455800394",
        "mapid": "1",
        "bftitle": "Porkhov",
        "sector": "0",
        "posx": 12178.76953125,
        "posy": 1410.613037109375,
        "gamemap": "201"
    },
    {
        "id": "456348132",
        "mapid": "1",
        "bftitle": "Slobidka",
        "sector": "0",
        "posx": 12117.2099609375,
        "posy": 6263.68408203125,
        "gamemap": "203",
        "rotation": 3
    },
    {
        "id": "456447083",
        "mapid": "1",
        "bftitle": "Böda",
        "sector": "0",
        "posx": 8499.4248046875,
        "posy": 1703.9210205078125,
        "gamemap": "70439"
    },
    {
        "id": "456673658",
        "mapid": "1",
        "bftitle": "Avinurme",
        "sector": "0",
        "posx": 11389.6796875,
        "posy": 725.2891235351562,
        "gamemap": "70439"
    },
    {
        "id": "456930802",
        "mapid": "1",
        "bftitle": "Maksatikha",
        "sector": "0",
        "posx": 14033.23046875,
        "posy": 1392.9339599609375,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "457387972",
        "mapid": "1",
        "bftitle": "Šeduva",
        "sector": "0",
        "posx": 10481.7197265625,
        "posy": 2487.304931640625,
        "gamemap": "203",
        "rotation": 1
    },
    {
        "id": "457848330",
        "mapid": "1",
        "bftitle": "Kunda",
        "sector": "0",
        "posx": 11292.7099609375,
        "posy": 436.1018981933594,
        "gamemap": "70439"
    },
    {
        "id": "457882812",
        "mapid": "1",
        "bftitle": "Leeds",
        "sector": "0",
        "posx": 3061.345947265625,
        "posy": 3495.614990234375,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "457903408",
        "mapid": "1",
        "bftitle": "Greve",
        "sector": "0",
        "posx": 7103.3271484375,
        "posy": 2603.368896484375,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "458251650",
        "mapid": "1",
        "bftitle": "Priekuļi",
        "sector": "0",
        "posx": 10967.0498046875,
        "posy": 1658.2220458984375,
        "gamemap": "203",
        "rotation": 3
    },
    {
        "id": "458301518",
        "mapid": "1",
        "bftitle": "Tösse",
        "sector": "0",
        "posx": 7213.3330078125,
        "posy": 734.1984252929688,
        "gamemap": "70439"
    },
    {
        "id": "458468831",
        "mapid": "1",
        "bftitle": "Lublin",
        "sector": "0",
        "posx": 10129.9599609375,
        "posy": 4732.041015625,
        "gamemap": "70439"
    },
    {
        "id": "458897360",
        "mapid": "1",
        "bftitle": "Valenza",
        "sector": "0",
        "posx": 6048.76904296875,
        "posy": 7495.72119140625,
        "gamemap": "203",
        "rotation": 2
    },
    {
        "id": "459050005",
        "mapid": "1",
        "bftitle": "Enfield Town",
        "sector": "0",
        "posx": 3490.117919921875,
        "posy": 4541.86083984375,
        "gamemap": "201"
    },
    {
        "id": "459120234",
        "mapid": "1",
        "bftitle": "La Châtre Aérodrome",
        "sector": "0",
        "posx": 4096.39697265625,
        "posy": 6830.498046875,
        "gamemap": "204",
        "rotation": 2
    },
    {
        "id": "459289943",
        "mapid": "1",
        "bftitle": "Lütjenburg",
        "sector": "0",
        "posx": 6630.18505859375,
        "posy": 3258.2900390625,
        "gamemap": "70439"
    },
    {
        "id": "459352019",
        "mapid": "1",
        "bftitle": "Flavin",
        "sector": "0",
        "posx": 4278.6650390625,
        "posy": 7795.9599609375,
        "gamemap": "201"
    },
    {
        "id": "459499078",
        "mapid": "1",
        "bftitle": "Strömsnäsbruk",
        "sector": "0",
        "posx": 7535.77392578125,
        "posy": 2072.052001953125,
        "gamemap": "201"
    },
    {
        "id": "459555252",
        "mapid": "1",
        "bftitle": "Uzunköprü",
        "sector": "0",
        "posx": 11338.1904296875,
        "posy": 9012.130859375,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "459665204",
        "mapid": "1",
        "bftitle": "Randers",
        "sector": "0",
        "posx": 6456.97900390625,
        "posy": 2119.819091796875,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "459776558",
        "mapid": "1",
        "bftitle": "Chauffailles",
        "sector": "0",
        "posx": 4787.0048828125,
        "posy": 6991.47216796875,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "459902857",
        "mapid": "1",
        "bftitle": "Bellinzona",
        "sector": "0",
        "posx": 6158.1748046875,
        "posy": 6997.64501953125,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "459950974",
        "mapid": "1",
        "bftitle": "Brăila",
        "sector": "0",
        "posx": 11717.740234375,
        "posy": 7389.31689453125,
        "gamemap": "70439"
    },
    {
        "id": "460330338",
        "mapid": "1",
        "bftitle": "Toropets",
        "sector": "0",
        "posx": 12788.23046875,
        "posy": 2099.992919921875,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "460369804",
        "mapid": "1",
        "bftitle": "Blonay",
        "sector": "0",
        "posx": 5536.48583984375,
        "posy": 6880.078125,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "460384664",
        "mapid": "1",
        "bftitle": "Lapalisse",
        "sector": "0",
        "posx": 4580.85498046875,
        "posy": 6973.93505859375,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "460440131",
        "mapid": "1",
        "bftitle": "Usha",
        "sector": "0",
        "posx": 11353.580078125,
        "posy": 3204.919921875,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "460715161",
        "mapid": "1",
        "bftitle": "Pervomays'k",
        "sector": "0",
        "posx": 12558.259765625,
        "posy": 6194.2939453125,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "460752950",
        "mapid": "1",
        "bftitle": "Heesch",
        "sector": "0",
        "posx": 5135.06689453125,
        "posy": 4502.740234375,
        "gamemap": "70439"
    },
    {
        "id": "461238783",
        "mapid": "1",
        "bftitle": "Vetlanda",
        "sector": "0",
        "posx": 7934.7080078125,
        "posy": 1595.7919921875,
        "gamemap": "70439"
    },
    {
        "id": "461286026",
        "mapid": "1",
        "bftitle": "Cornhill",
        "sector": "0",
        "posx": 2713.297119140625,
        "posy": 1514.386962890625,
        "gamemap": "203",
        "rotation": 1
    },
    {
        "id": "461318137",
        "mapid": "1",
        "bftitle": "Svidník",
        "sector": "0",
        "posx": 9837.8974609375,
        "posy": 5629.22216796875,
        "gamemap": "204",
        "rotation": 2
    },
    {
        "id": "461392022",
        "mapid": "1",
        "bftitle": "Krasnodar",
        "sector": "0",
        "posx": 14940.01953125,
        "posy": 7482.17822265625,
        "gamemap": "70439"
    },
    {
        "id": "461753778",
        "mapid": "1",
        "bftitle": "Radviliškis",
        "sector": "0",
        "posx": 10413.3203125,
        "posy": 2461.051025390625,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "462171280",
        "mapid": "1",
        "bftitle": "Vienne",
        "sector": "0",
        "posx": 4941.5849609375,
        "posy": 7284.22509765625,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "462198710",
        "mapid": "1",
        "bftitle": "Toblach",
        "sector": "0",
        "posx": 7097.716796875,
        "posy": 6767.94384765625,
        "gamemap": "203",
        "rotation": 3
    },
    {
        "id": "462450827",
        "mapid": "1",
        "bftitle": "Odintsovo",
        "sector": "0",
        "posx": 14442.2001953125,
        "posy": 2533.79296875,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "463137973",
        "mapid": "1",
        "bftitle": "Metsovo",
        "sector": "0",
        "posx": 9724.142578125,
        "posy": 9593.310546875,
        "gamemap": "201"
    },
    {
        "id": "463224913",
        "mapid": "1",
        "bftitle": "Bugac",
        "sector": "0",
        "posx": 9284.0146484375,
        "posy": 6785.912109375,
        "gamemap": "203"
    },
    {
        "id": "463368641",
        "mapid": "1",
        "bftitle": "Pavullo nel Frignano",
        "sector": "0",
        "posx": 6691.203125,
        "posy": 7777.55419921875,
        "gamemap": "201"
    },
    {
        "id": "463392620",
        "mapid": "1",
        "bftitle": "Guernsey",
        "sector": "0",
        "posx": 2764.298095703125,
        "posy": 5536.9638671875,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "463439665",
        "mapid": "1",
        "bftitle": "Komló",
        "sector": "0",
        "posx": 8869.00390625,
        "posy": 6997.64501953125,
        "gamemap": "70439"
    },
    {
        "id": "463679808",
        "mapid": "1",
        "bftitle": "Chianciano Terme",
        "sector": "0",
        "posx": 6977.47607421875,
        "posy": 8304.9140625,
        "gamemap": "70439"
    },
    {
        "id": "463690294",
        "mapid": "1",
        "bftitle": "Chiesa in Valmalenco",
        "sector": "0",
        "posx": 6402.06396484375,
        "posy": 6965.908203125,
        "gamemap": "201"
    },
    {
        "id": "463734933",
        "mapid": "1",
        "bftitle": "Barberaz",
        "sector": "0",
        "posx": 5263.5068359375,
        "posy": 7270.97119140625,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "463847010",
        "mapid": "1",
        "bftitle": "Colmar",
        "sector": "0",
        "posx": 5674.4072265625,
        "posy": 6177.06591796875,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "464113883",
        "mapid": "1",
        "bftitle": "Fundulea",
        "sector": "0",
        "posx": 11287.8203125,
        "posy": 7722.5380859375,
        "gamemap": "203"
    },
    {
        "id": "464215762",
        "mapid": "1",
        "bftitle": "Chieri",
        "sector": "0",
        "posx": 5807.68310546875,
        "posy": 7496.5068359375,
        "gamemap": "201"
    },
    {
        "id": "464349997",
        "mapid": "1",
        "bftitle": "Kępno",
        "sector": "0",
        "posx": 8788.1416015625,
        "posy": 4718.64208984375,
        "gamemap": "204"
    },
    {
        "id": "464693295",
        "mapid": "1",
        "bftitle": "Lumparland",
        "sector": "0",
        "posx": 9453.28125,
        "posy": 64.2405014038086,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "465037682",
        "mapid": "1",
        "bftitle": "Manasia",
        "sector": "0",
        "posx": 11331.7900390625,
        "posy": 7625.826171875,
        "gamemap": "70439"
    },
    {
        "id": "465369980",
        "mapid": "1",
        "bftitle": "Monzambano",
        "sector": "0",
        "posx": 6649.5419921875,
        "posy": 7339.48779296875,
        "gamemap": "203",
        "rotation": 2
    },
    {
        "id": "465393685",
        "mapid": "1",
        "bftitle": "Viesīte",
        "sector": "0",
        "posx": 11005.9697265625,
        "posy": 2180.20703125,
        "gamemap": "201"
    },
    {
        "id": "465570088",
        "mapid": "1",
        "bftitle": "Langres",
        "sector": "0",
        "posx": 5076.52001953125,
        "posy": 6275.494140625,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "465620368",
        "mapid": "1",
        "bftitle": "Landeck",
        "sector": "0",
        "posx": 6612.203125,
        "posy": 6590.2138671875,
        "gamemap": "201"
    },
    {
        "id": "465968815",
        "mapid": "1",
        "bftitle": "Sinj",
        "sector": "0",
        "posx": 8392.5244140625,
        "posy": 8036.14208984375,
        "gamemap": "201"
    },
    {
        "id": "466003022",
        "mapid": "1",
        "bftitle": "Saint-Gély-du-Fesc",
        "sector": "0",
        "posx": 4632.72998046875,
        "posy": 8026.35302734375,
        "gamemap": "204",
        "rotation": 3
    },
    {
        "id": "466296451",
        "mapid": "1",
        "bftitle": "Nelidovo",
        "sector": "0",
        "posx": 13123.009765625,
        "posy": 2247.452880859375,
        "gamemap": "201"
    },
    {
        "id": "466430659",
        "mapid": "1",
        "bftitle": "Matrei in Osttirol",
        "sector": "0",
        "posx": 7188.90478515625,
        "posy": 6650.8388671875,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "467548900",
        "mapid": "1",
        "bftitle": "Desna",
        "sector": "0",
        "posx": 12521.9404296875,
        "posy": 4886.5771484375,
        "gamemap": "201"
    },
    {
        "id": "468014267",
        "mapid": "1",
        "bftitle": "Warsaw",
        "sector": "0",
        "posx": 9674.181640625,
        "posy": 4264.93212890625,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "468148196",
        "mapid": "1",
        "bftitle": "Agios Nikolaos",
        "sector": "0",
        "posx": 11353.66015625,
        "posy": 10334.73046875,
        "gamemap": "70439"
    },
    {
        "id": "468692273",
        "mapid": "1",
        "bftitle": "Ussel",
        "sector": "0",
        "posx": 4194.10693359375,
        "posy": 7270.17822265625,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "468742696",
        "mapid": "1",
        "bftitle": "Likino-Dulevo",
        "sector": "0",
        "posx": 14933.6201171875,
        "posy": 2517.907958984375,
        "gamemap": "203"
    },
    {
        "id": "468825698",
        "mapid": "1",
        "bftitle": "Istra",
        "sector": "0",
        "posx": 14322.2900390625,
        "posy": 2406.699951171875,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "469292403",
        "mapid": "1",
        "bftitle": "Syke Flugplatz",
        "sector": "0",
        "posx": 6101.0322265625,
        "posy": 3932.844970703125,
        "gamemap": "205",
        "rotation": 2
    },
    {
        "id": "469359534",
        "mapid": "1",
        "bftitle": "Tarare",
        "sector": "0",
        "posx": 4814.3837890625,
        "posy": 7123.18505859375,
        "gamemap": "201"
    },
    {
        "id": "469461542",
        "mapid": "1",
        "bftitle": "Touquin",
        "sector": "0",
        "posx": 4397.9951171875,
        "posy": 5887.26123046875,
        "gamemap": "203"
    },
    {
        "id": "469839852",
        "mapid": "1",
        "bftitle": "Viljandi",
        "sector": "0",
        "posx": 11016.1904296875,
        "posy": 1076.384033203125,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "470154570",
        "mapid": "1",
        "bftitle": "Nagu",
        "sector": "0",
        "posx": 9908.712890625,
        "posy": 43.841609954833984,
        "gamemap": "70439"
    },
    {
        "id": "470382702",
        "mapid": "1",
        "bftitle": "Gimont",
        "sector": "0",
        "posx": 3781.177001953125,
        "posy": 8071.44384765625,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "470952173",
        "mapid": "1",
        "bftitle": "Lund",
        "sector": "0",
        "posx": 7431.82080078125,
        "posy": 2512.97900390625,
        "gamemap": "201"
    },
    {
        "id": "471033240",
        "mapid": "1",
        "bftitle": "Neuville-sur-Saône",
        "sector": "0",
        "posx": 4936.4658203125,
        "posy": 7131.9111328125,
        "gamemap": "203",
        "rotation": 2
    },
    {
        "id": "471162048",
        "mapid": "1",
        "bftitle": "Elassóna",
        "sector": "0",
        "posx": 10019.1396484375,
        "posy": 9545.1513671875,
        "gamemap": "201"
    },
    {
        "id": "471180768",
        "mapid": "1",
        "bftitle": "Matejce",
        "sector": "0",
        "posx": 9827.7158203125,
        "posy": 8674.763671875,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "471295063",
        "mapid": "1",
        "bftitle": "Shevchenkove",
        "sector": "0",
        "posx": 12113.5400390625,
        "posy": 7267.6328125,
        "gamemap": "70439"
    },
    {
        "id": "471473294",
        "mapid": "1",
        "bftitle": "Kalishche",
        "sector": "0",
        "posx": 12045.2099609375,
        "posy": 199.5010986328125,
        "gamemap": "70439"
    },
    {
        "id": "471658046",
        "mapid": "1",
        "bftitle": "Immenstadt im Allgäu",
        "sector": "0",
        "posx": 6509.02392578125,
        "posy": 6407.173828125,
        "gamemap": "201"
    },
    {
        "id": "471698199",
        "mapid": "1",
        "bftitle": "Wronki",
        "sector": "0",
        "posx": 8316.603515625,
        "posy": 4031.965087890625,
        "gamemap": "70439"
    },
    {
        "id": "471832466",
        "mapid": "1",
        "bftitle": "Tosno",
        "sector": "0",
        "posx": 12566.1103515625,
        "posy": 403.1307067871094,
        "gamemap": "203",
        "rotation": 1
    },
    {
        "id": "471839057",
        "mapid": "1",
        "bftitle": "Jansac",
        "sector": "0",
        "posx": 5095.625,
        "posy": 7647.623046875,
        "gamemap": "203",
        "rotation": 2
    },
    {
        "id": "471846660",
        "mapid": "1",
        "bftitle": "Mrągowo",
        "sector": "0",
        "posx": 9760.1513671875,
        "posy": 3462.118896484375,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "471899698",
        "mapid": "1",
        "bftitle": "Überlingen",
        "sector": "0",
        "posx": 6212.4541015625,
        "posy": 6313.40087890625,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "471987699",
        "mapid": "1",
        "bftitle": "Bilohirs’k",
        "sector": "0",
        "posx": 13657.8203125,
        "posy": 7503.7548828125,
        "gamemap": "70439"
    },
    {
        "id": "472092533",
        "mapid": "1",
        "bftitle": "Sunne",
        "sector": "0",
        "posx": 7367.62109375,
        "posy": 229.03709411621094,
        "gamemap": "201"
    },
    {
        "id": "472618012",
        "mapid": "1",
        "bftitle": "Västervik",
        "sector": "0",
        "posx": 8384.59375,
        "posy": 1393.3270263671875,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "472620527",
        "mapid": "1",
        "bftitle": "Svelvik",
        "sector": "0",
        "posx": 6566.1201171875,
        "posy": 360.16571044921875,
        "gamemap": "201"
    },
    {
        "id": "472628811",
        "mapid": "1",
        "bftitle": "Jaglodi",
        "sector": "0",
        "posx": 11053.3203125,
        "posy": 1400.4730224609375,
        "gamemap": "70439"
    },
    {
        "id": "472939582",
        "mapid": "1",
        "bftitle": "Noginsk",
        "sector": "0",
        "posx": 14784.009765625,
        "posy": 2434.867919921875,
        "gamemap": "70439"
    },
    {
        "id": "473183961",
        "mapid": "1",
        "bftitle": "Medvedevka",
        "sector": "0",
        "posx": 13644.26953125,
        "posy": 7129.0068359375,
        "gamemap": "203"
    },
    {
        "id": "473290194",
        "mapid": "1",
        "bftitle": "Jastrowie",
        "sector": "0",
        "posx": 8444.734375,
        "posy": 3683.166015625,
        "gamemap": "203"
    },
    {
        "id": "473501352",
        "mapid": "1",
        "bftitle": "Beaufort",
        "sector": "0",
        "posx": 5442.02783203125,
        "posy": 7199.35302734375,
        "gamemap": "201"
    },
    {
        "id": "473930950",
        "mapid": "1",
        "bftitle": "Vyshneve",
        "sector": "0",
        "posx": 12417.490234375,
        "posy": 5134.31494140625,
        "gamemap": "203"
    },
    {
        "id": "473941111",
        "mapid": "1",
        "bftitle": "Ivanivka",
        "sector": "0",
        "posx": 13643.5,
        "posy": 6771.3701171875,
        "gamemap": "205",
        "rotation": 2
    },
    {
        "id": "474004175",
        "mapid": "1",
        "bftitle": "Mesocco",
        "sector": "0",
        "posx": 6221.5498046875,
        "posy": 6913.23193359375,
        "gamemap": "201"
    },
    {
        "id": "474038051",
        "mapid": "1",
        "bftitle": "Dingwall",
        "sector": "0",
        "posx": 2217.283935546875,
        "posy": 1504.3189697265625,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "474105138",
        "mapid": "1",
        "bftitle": "East Harling",
        "sector": "0",
        "posx": 3810.429931640625,
        "posy": 4154.80419921875,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "474378321",
        "mapid": "1",
        "bftitle": "Ruzhany",
        "sector": "0",
        "posx": 10812.0498046875,
        "posy": 3957.422119140625,
        "gamemap": "201"
    },
    {
        "id": "474561191",
        "mapid": "1",
        "bftitle": "Augsburg",
        "sector": "0",
        "posx": 6648.625,
        "posy": 6017.9521484375,
        "gamemap": "70439"
    },
    {
        "id": "474606191",
        "mapid": "1",
        "bftitle": "Uppsala",
        "sector": "0",
        "posx": 8685.490234375,
        "posy": 216.58639526367188,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "474917391",
        "mapid": "1",
        "bftitle": "Pietzpuhl Flugplatz",
        "sector": "0",
        "posx": 6988.60009765625,
        "posy": 4274.326171875,
        "gamemap": "204",
        "rotation": 2
    },
    {
        "id": "474958771",
        "mapid": "1",
        "bftitle": "Palaiópolis",
        "sector": "0",
        "posx": 10792.26953125,
        "posy": 10351.830078125,
        "gamemap": "70439"
    },
    {
        "id": "475006703",
        "mapid": "1",
        "bftitle": "Campobasso",
        "sector": "0",
        "posx": 7814.453125,
        "posy": 8896.6015625,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "475060609",
        "mapid": "1",
        "bftitle": "Dallas",
        "sector": "0",
        "posx": 2505.5791015625,
        "posy": 1538.844970703125,
        "gamemap": "203",
        "rotation": 2
    },
    {
        "id": "475579284",
        "mapid": "1",
        "bftitle": "Mikhnëvo",
        "sector": "0",
        "posx": 14637.5703125,
        "posy": 2816.660888671875,
        "gamemap": "203",
        "rotation": 3
    },
    {
        "id": "475676110",
        "mapid": "1",
        "bftitle": "Palamás",
        "sector": "0",
        "posx": 9988.2841796875,
        "posy": 9709.34375,
        "gamemap": "201"
    },
    {
        "id": "476120157",
        "mapid": "1",
        "bftitle": "Brest",
        "sector": "0",
        "posx": 10458.580078125,
        "posy": 4328.56494140625,
        "gamemap": "70439"
    },
    {
        "id": "476169644",
        "mapid": "1",
        "bftitle": "Strumica",
        "sector": "0",
        "posx": 10152.4404296875,
        "posy": 8944.677734375,
        "gamemap": "201"
    },
    {
        "id": "477245369",
        "mapid": "1",
        "bftitle": "Brokind",
        "sector": "0",
        "posx": 8107.375,
        "posy": 1159.0689697265625,
        "gamemap": "203",
        "rotation": 2
    },
    {
        "id": "477259176",
        "mapid": "1",
        "bftitle": "Azé",
        "sector": "0",
        "posx": 3314.720947265625,
        "posy": 6292.16796875,
        "gamemap": "201"
    },
    {
        "id": "477358793",
        "mapid": "1",
        "bftitle": "Arta",
        "sector": "0",
        "posx": 9666.412109375,
        "posy": 9826.142578125,
        "gamemap": "70439"
    },
    {
        "id": "477359646",
        "mapid": "1",
        "bftitle": "Selçuk",
        "sector": "0",
        "posx": 11537.509765625,
        "posy": 10282.6298828125,
        "gamemap": "70439"
    },
    {
        "id": "477539734",
        "mapid": "1",
        "bftitle": "Krāslava",
        "sector": "0",
        "posx": 11478.740234375,
        "posy": 2419.77490234375,
        "gamemap": "201"
    },
    {
        "id": "477607524",
        "mapid": "1",
        "bftitle": "Nikopol'",
        "sector": "0",
        "posx": 13597.58984375,
        "posy": 6402.26416015625,
        "gamemap": "70439"
    },
    {
        "id": "477724416",
        "mapid": "1",
        "bftitle": "Sapri",
        "sector": "0",
        "posx": 8097.248046875,
        "posy": 9475.8310546875,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "478690871",
        "mapid": "1",
        "bftitle": "Harburg",
        "sector": "0",
        "posx": 6437.203125,
        "posy": 3659.18603515625,
        "gamemap": "70439"
    },
    {
        "id": "478895366",
        "mapid": "1",
        "bftitle": "Todorovo",
        "sector": "0",
        "posx": 8184.81005859375,
        "posy": 7464,
        "gamemap": "201"
    },
    {
        "id": "479081205",
        "mapid": "1",
        "bftitle": "Erkheim",
        "sector": "0",
        "posx": 6548.9072265625,
        "posy": 6191.791015625,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "479283062",
        "mapid": "1",
        "bftitle": "Gjakovë",
        "sector": "0",
        "posx": 9503.888671875,
        "posy": 8570.693359375,
        "gamemap": "203"
    },
    {
        "id": "479380666",
        "mapid": "1",
        "bftitle": "Karup Lufthavn",
        "sector": "0",
        "posx": 6189.31689453125,
        "posy": 2354.466064453125,
        "gamemap": "205",
        "rotation": 2
    },
    {
        "id": "479512225",
        "mapid": "1",
        "bftitle": "Spiekeroog",
        "sector": "0",
        "posx": 5797.2060546875,
        "posy": 3550.68994140625,
        "gamemap": "70439"
    },
    {
        "id": "479580864",
        "mapid": "1",
        "bftitle": "Naujoji Akmenė",
        "sector": "0",
        "posx": 10227.669921875,
        "posy": 2196.633056640625,
        "gamemap": "70439"
    },
    {
        "id": "479615165",
        "mapid": "1",
        "bftitle": "Naples",
        "sector": "0",
        "posx": 7691.05712890625,
        "posy": 9172.521484375,
        "gamemap": "70439"
    },
    {
        "id": "479690631",
        "mapid": "1",
        "bftitle": "Timkovichi",
        "sector": "0",
        "posx": 11426.6298828125,
        "posy": 3857.445068359375,
        "gamemap": "203"
    },
    {
        "id": "479789431",
        "mapid": "1",
        "bftitle": "Beauvais Aérodrome",
        "sector": "0",
        "posx": 4138.3271484375,
        "posy": 5537.65576171875,
        "gamemap": "204",
        "rotation": 1
    },
    {
        "id": "480030433",
        "mapid": "1",
        "bftitle": "Roquevaire",
        "sector": "0",
        "posx": 5164.541015625,
        "posy": 8183.19287109375,
        "gamemap": "204",
        "rotation": 2
    },
    {
        "id": "480382527",
        "mapid": "1",
        "bftitle": "Meymac",
        "sector": "0",
        "posx": 4143.7939453125,
        "posy": 7276.55419921875,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "480560525",
        "mapid": "1",
        "bftitle": "Vaida",
        "sector": "0",
        "posx": 10833.23046875,
        "posy": 547.8557739257812,
        "gamemap": "70439"
    },
    {
        "id": "480565063",
        "mapid": "1",
        "bftitle": "Bursa",
        "sector": "0",
        "posx": 12040.3896484375,
        "posy": 9430.2626953125,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "480689626",
        "mapid": "1",
        "bftitle": "Dülmen",
        "sector": "0",
        "posx": 5673.81396484375,
        "posy": 4403.31591796875,
        "gamemap": "201"
    },
    {
        "id": "480889325",
        "mapid": "1",
        "bftitle": "Kalisz",
        "sector": "0",
        "posx": 8818.021484375,
        "posy": 4489.64208984375,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "481093145",
        "mapid": "1",
        "bftitle": "Eisenerz",
        "sector": "0",
        "posx": 7877.7568359375,
        "posy": 6418.82080078125,
        "gamemap": "201"
    },
    {
        "id": "481285363",
        "mapid": "1",
        "bftitle": "Terni",
        "sector": "0",
        "posx": 7219.19482421875,
        "posy": 8498.029296875,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "481409708",
        "mapid": "1",
        "bftitle": "Beloozërskiy",
        "sector": "0",
        "posx": 14783.9404296875,
        "posy": 2647.717041015625,
        "gamemap": "201"
    },
    {
        "id": "481416977",
        "mapid": "1",
        "bftitle": "Revel",
        "sector": "0",
        "posx": 4102.6591796875,
        "posy": 8136.18310546875,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "481536931",
        "mapid": "1",
        "bftitle": "Vysokoye",
        "sector": "0",
        "posx": 10365.6904296875,
        "posy": 4196.7978515625,
        "gamemap": "203",
        "rotation": 2
    },
    {
        "id": "481756968",
        "mapid": "1",
        "bftitle": "Musselburgh",
        "sector": "0",
        "posx": 2630.5,
        "posy": 2397.62109375,
        "gamemap": "205",
        "rotation": 3
    },
    {
        "id": "482088439",
        "mapid": "1",
        "bftitle": "Château-du-Loir",
        "sector": "0",
        "posx": 3601.9560546875,
        "posy": 6343.9169921875,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "482177603",
        "mapid": "1",
        "bftitle": "Torsminde",
        "sector": "0",
        "posx": 5897.36181640625,
        "posy": 2166.446044921875,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "482280289",
        "mapid": "1",
        "bftitle": "Lenham",
        "sector": "0",
        "posx": 3702.825927734375,
        "posy": 4765.0380859375,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "482304365",
        "mapid": "1",
        "bftitle": "Leszno",
        "sector": "0",
        "posx": 9550.900390625,
        "posy": 4251.326171875,
        "gamemap": "203",
        "rotation": 3
    },
    {
        "id": "482784297",
        "mapid": "1",
        "bftitle": "Ekenäs",
        "sector": "0",
        "posx": 10384.169921875,
        "posy": 148.9951934814453,
        "gamemap": "70439"
    },
    {
        "id": "483193983",
        "mapid": "1",
        "bftitle": "Borisov",
        "sector": "0",
        "posx": 11870.66015625,
        "posy": 3279.339111328125,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "483505046",
        "mapid": "1",
        "bftitle": "Neukirch",
        "sector": "0",
        "posx": 7615.49609375,
        "posy": 4716.31396484375,
        "gamemap": "201"
    },
    {
        "id": "483754864",
        "mapid": "1",
        "bftitle": "Hermagor",
        "sector": "0",
        "posx": 7433.341796875,
        "posy": 6811.63916015625,
        "gamemap": "201"
    },
    {
        "id": "483759142",
        "mapid": "1",
        "bftitle": "Val d Isere",
        "sector": "0",
        "posx": 5560.5068359375,
        "posy": 7312.4130859375,
        "gamemap": "201"
    },
    {
        "id": "483807155",
        "mapid": "1",
        "bftitle": "Sageby",
        "sector": "0",
        "posx": 7066.6318359375,
        "posy": 2856.694091796875,
        "gamemap": "203",
        "rotation": 3
    },
    {
        "id": "483816600",
        "mapid": "1",
        "bftitle": "Prymors'k",
        "sector": "0",
        "posx": 14168.5703125,
        "posy": 6765.35498046875,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "484068182",
        "mapid": "1",
        "bftitle": "Krasnapollye",
        "sector": "0",
        "posx": 12719.240234375,
        "posy": 3725.318115234375,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "484387141",
        "mapid": "1",
        "bftitle": "Moss",
        "sector": "0",
        "posx": 6654.02099609375,
        "posy": 462.0318908691406,
        "gamemap": "203"
    },
    {
        "id": "484496239",
        "mapid": "1",
        "bftitle": "Áno Gávrion",
        "sector": "0",
        "posx": 10765.080078125,
        "posy": 10301.8603515625,
        "gamemap": "70439"
    },
    {
        "id": "484771680",
        "mapid": "1",
        "bftitle": "Mittersill",
        "sector": "0",
        "posx": 7174.2490234375,
        "posy": 6535.1220703125,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "485112137",
        "mapid": "1",
        "bftitle": "Nässjö",
        "sector": "0",
        "posx": 7823.06591796875,
        "posy": 1472.4739990234375,
        "gamemap": "70439"
    },
    {
        "id": "485295351",
        "mapid": "1",
        "bftitle": "Kryve Ozero",
        "sector": "0",
        "posx": 12411.26953125,
        "posy": 6234.84423828125,
        "gamemap": "70439"
    },
    {
        "id": "485702285",
        "mapid": "1",
        "bftitle": "General-Toshevo",
        "sector": "0",
        "posx": 11732.400390625,
        "posy": 8037.6162109375,
        "gamemap": "70439"
    },
    {
        "id": "485820957",
        "mapid": "1",
        "bftitle": "Châtillon-en-Michaille",
        "sector": "0",
        "posx": 5215.02490234375,
        "posy": 7018.77978515625,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "485861540",
        "mapid": "1",
        "bftitle": "Jõhvi",
        "sector": "0",
        "posx": 11552.9404296875,
        "posy": 508.1545104980469,
        "gamemap": "70439"
    },
    {
        "id": "486813140",
        "mapid": "1",
        "bftitle": "Myrnyy",
        "sector": "0",
        "posx": 13218.0595703125,
        "posy": 7400.501953125,
        "gamemap": "201"
    },
    {
        "id": "486897444",
        "mapid": "1",
        "bftitle": "Adriers",
        "sector": "0",
        "posx": 3749.264892578125,
        "posy": 6970.1669921875,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "487093424",
        "mapid": "1",
        "bftitle": "Speck",
        "sector": "0",
        "posx": 7278.77685546875,
        "posy": 3674.905029296875,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "487727176",
        "mapid": "1",
        "bftitle": "Katerini",
        "sector": "0",
        "posx": 10112.2001953125,
        "posy": 9400.5283203125,
        "gamemap": "70439"
    },
    {
        "id": "487748671",
        "mapid": "1",
        "bftitle": "Bredeweg",
        "sector": "0",
        "posx": 5256.76318359375,
        "posy": 4490.07080078125,
        "gamemap": "205"
    },
    {
        "id": "487871492",
        "mapid": "1",
        "bftitle": "Pontremoli",
        "sector": "0",
        "posx": 6410.80908203125,
        "posy": 7760.36376953125,
        "gamemap": "201"
    },
    {
        "id": "488256991",
        "mapid": "1",
        "bftitle": "Saint-Agrève",
        "sector": "0",
        "posx": 4802.9599609375,
        "posy": 7496.7587890625,
        "gamemap": "201"
    },
    {
        "id": "488346103",
        "mapid": "1",
        "bftitle": "Nevers",
        "sector": "0",
        "posx": 4441.01904296875,
        "posy": 6655.35693359375,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "488488137",
        "mapid": "1",
        "bftitle": "Podareš",
        "sector": "0",
        "posx": 10122.7998046875,
        "posy": 8875.125,
        "gamemap": "203"
    },
    {
        "id": "488500858",
        "mapid": "1",
        "bftitle": "Yelizavetino",
        "sector": "0",
        "posx": 12248.4296875,
        "posy": 431.31048583984375,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "489049625",
        "mapid": "1",
        "bftitle": "Schongau",
        "sector": "0",
        "posx": 6709.14404296875,
        "posy": 6296.47802734375,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "489207708",
        "mapid": "1",
        "bftitle": "Mārupe",
        "sector": "0",
        "posx": 10552.51953125,
        "posy": 1888.3399658203125,
        "gamemap": "203",
        "rotation": 2
    },
    {
        "id": "489270573",
        "mapid": "1",
        "bftitle": "Sylivainiótika",
        "sector": "0",
        "posx": 10055.7099609375,
        "posy": 10223.9501953125,
        "gamemap": "70439"
    },
    {
        "id": "489332801",
        "mapid": "1",
        "bftitle": "Smørklepp",
        "sector": "0",
        "posx": 5782.9951171875,
        "posy": 346.1972961425781,
        "gamemap": "204",
        "rotation": 1
    },
    {
        "id": "489488129",
        "mapid": "1",
        "bftitle": "Yasenevo",
        "sector": "0",
        "posx": 14513.1904296875,
        "posy": 2570.992919921875,
        "gamemap": "70439"
    },
    {
        "id": "489495997",
        "mapid": "1",
        "bftitle": "Kolodishchi",
        "sector": "0",
        "posx": 11671.0302734375,
        "posy": 3422.5791015625,
        "gamemap": "201"
    },
    {
        "id": "489601588",
        "mapid": "1",
        "bftitle": "Töreboda",
        "sector": "0",
        "posx": 7655.7529296875,
        "posy": 882.1107788085938,
        "gamemap": "204",
        "rotation": 3
    },
    {
        "id": "489759544",
        "mapid": "1",
        "bftitle": "Mions",
        "sector": "0",
        "posx": 4965.9951171875,
        "posy": 7221.93701171875,
        "gamemap": "201"
    },
    {
        "id": "490147744",
        "mapid": "1",
        "bftitle": "Sermaises",
        "sector": "0",
        "posx": 4161.5087890625,
        "posy": 6082.6728515625,
        "gamemap": "203",
        "rotation": 3
    },
    {
        "id": "491031636",
        "mapid": "1",
        "bftitle": "Ventspils",
        "sector": "0",
        "posx": 9826.9921875,
        "posy": 1611.364013671875,
        "gamemap": "203",
        "rotation": 2
    },
    {
        "id": "491036518",
        "mapid": "1",
        "bftitle": "Vykhino-Zhulebino",
        "sector": "0",
        "posx": 14601.259765625,
        "posy": 2512.60595703125,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "491261761",
        "mapid": "1",
        "bftitle": "Lom",
        "sector": "0",
        "posx": 9866.146484375,
        "posy": 74.27870178222656,
        "gamemap": "205",
        "rotation": 3
    },
    {
        "id": "491738941",
        "mapid": "1",
        "bftitle": "Kireyevsk",
        "sector": "0",
        "posx": 14632.7900390625,
        "posy": 3427.430908203125,
        "gamemap": "201"
    },
    {
        "id": "491787693",
        "mapid": "1",
        "bftitle": "Debrzno",
        "sector": "0",
        "posx": 8567.5185546875,
        "posy": 3624.787109375,
        "gamemap": "70439"
    },
    {
        "id": "492036697",
        "mapid": "1",
        "bftitle": "La Croixille",
        "sector": "0",
        "posx": 3165.56494140625,
        "posy": 6152.8671875,
        "gamemap": "203",
        "rotation": 3
    },
    {
        "id": "492154942",
        "mapid": "1",
        "bftitle": "Budki",
        "sector": "0",
        "posx": 12094.580078125,
        "posy": 4509.7548828125,
        "gamemap": "204"
    },
    {
        "id": "492725332",
        "mapid": "1",
        "bftitle": "Houplines",
        "sector": "0",
        "posx": 4385.14111328125,
        "posy": 4978.22900390625,
        "gamemap": "70439"
    },
    {
        "id": "493037952",
        "mapid": "1",
        "bftitle": "Saint-Claude",
        "sector": "0",
        "posx": 5234.14501953125,
        "posy": 6914.76513671875,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "493390082",
        "mapid": "1",
        "bftitle": "Pithiviers",
        "sector": "0",
        "posx": 4174.56494140625,
        "posy": 6140.2119140625,
        "gamemap": "70439"
    },
    {
        "id": "493558732",
        "mapid": "1",
        "bftitle": "Bağcılar",
        "sector": "0",
        "posx": 11971.6396484375,
        "posy": 9114.4453125,
        "gamemap": "70439"
    },
    {
        "id": "493693345",
        "mapid": "1",
        "bftitle": "Hódmezővásárhely",
        "sector": "0",
        "posx": 9475.30859375,
        "posy": 6901.97412109375,
        "gamemap": "70439"
    },
    {
        "id": "493749829",
        "mapid": "1",
        "bftitle": "Kazantyp",
        "sector": "0",
        "posx": 14040.5400390625,
        "posy": 7364.11181640625,
        "gamemap": "70439"
    },
    {
        "id": "494024287",
        "mapid": "1",
        "bftitle": "Meucon Aérodrome",
        "sector": "0",
        "posx": 2716.238037109375,
        "posy": 6329.65283203125,
        "gamemap": "205",
        "rotation": 2
    },
    {
        "id": "494446639",
        "mapid": "1",
        "bftitle": "Kuressaare",
        "sector": "0",
        "posx": 10111.5595703125,
        "posy": 1141.468994140625,
        "gamemap": "70439"
    },
    {
        "id": "494832480",
        "mapid": "1",
        "bftitle": "Münsingen",
        "sector": "0",
        "posx": 6298.87890625,
        "posy": 6031.69384765625,
        "gamemap": "203"
    },
    {
        "id": "494850509",
        "mapid": "1",
        "bftitle": "Voghera",
        "sector": "0",
        "posx": 6155.7099609375,
        "posy": 7503.1318359375,
        "gamemap": "70439"
    },
    {
        "id": "495697906",
        "mapid": "1",
        "bftitle": "Rinteln",
        "sector": "0",
        "posx": 6176.39111328125,
        "posy": 4286.30615234375,
        "gamemap": "70439"
    },
    {
        "id": "496063930",
        "mapid": "1",
        "bftitle": "Aarau",
        "sector": "0",
        "posx": 5873.01806640625,
        "posy": 6480.298828125,
        "gamemap": "201"
    },
    {
        "id": "496100745",
        "mapid": "1",
        "bftitle": "Gramat",
        "sector": "0",
        "posx": 4019.080078125,
        "posy": 7592.26708984375,
        "gamemap": "201"
    },
    {
        "id": "496401995",
        "mapid": "1",
        "bftitle": "Landovery",
        "sector": "0",
        "posx": 2402.037109375,
        "posy": 4350.51708984375,
        "gamemap": "201"
    },
    {
        "id": "496460582",
        "mapid": "1",
        "bftitle": "Rion-des-Landes",
        "sector": "0",
        "posx": 3244.208984375,
        "posy": 7941.67822265625,
        "gamemap": "70439"
    },
    {
        "id": "496967307",
        "mapid": "1",
        "bftitle": "Schweinfurt",
        "sector": "0",
        "posx": 6444.8681640625,
        "posy": 5231.44677734375,
        "gamemap": "70439"
    },
    {
        "id": "496995864",
        "mapid": "1",
        "bftitle": "Subate",
        "sector": "0",
        "posx": 11109.2802734375,
        "posy": 2361.219970703125,
        "gamemap": "201"
    },
    {
        "id": "497175810",
        "mapid": "1",
        "bftitle": "Županja",
        "sector": "0",
        "posx": 8995.798828125,
        "posy": 7468.52978515625,
        "gamemap": "70439"
    },
    {
        "id": "497326260",
        "mapid": "1",
        "bftitle": "Santa Croce di Magliano",
        "sector": "0",
        "posx": 7908.23779296875,
        "posy": 8836.2666015625,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "497455394",
        "mapid": "1",
        "bftitle": "Galashiels",
        "sector": "0",
        "posx": 2692.22802734375,
        "posy": 2566.9599609375,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "497581684",
        "mapid": "1",
        "bftitle": "Saint-Hilaire-de-Talmont",
        "sector": "0",
        "posx": 3039.7880859375,
        "posy": 6889.47705078125,
        "gamemap": "203",
        "rotation": 3
    },
    {
        "id": "498316601",
        "mapid": "1",
        "bftitle": "Hof",
        "sector": "0",
        "posx": 7008.6298828125,
        "posy": 5168.048828125,
        "gamemap": "201"
    },
    {
        "id": "498548992",
        "mapid": "1",
        "bftitle": "Zembin",
        "sector": "0",
        "posx": 11787.3203125,
        "posy": 3213.583984375,
        "gamemap": "201"
    },
    {
        "id": "498968377",
        "mapid": "1",
        "bftitle": "Florence",
        "sector": "0",
        "posx": 6811.626953125,
        "posy": 8005.23291015625,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "499372643",
        "mapid": "1",
        "bftitle": "Birmingham",
        "sector": "0",
        "posx": 2966.677001953125,
        "posy": 4111.298828125,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "499412446",
        "mapid": "1",
        "bftitle": "Nicaea",
        "sector": "0",
        "posx": 12227.1396484375,
        "posy": 9338.9189453125,
        "gamemap": "70439"
    },
    {
        "id": "499547075",
        "mapid": "1",
        "bftitle": "Gleisdorf",
        "sector": "0",
        "posx": 8120.10791015625,
        "posy": 6605.0869140625,
        "gamemap": "203",
        "rotation": 1
    },
    {
        "id": "500239130",
        "mapid": "1",
        "bftitle": "Lesnaya",
        "sector": "0",
        "posx": 11806.759765625,
        "posy": 1092.9169921875,
        "gamemap": "203",
        "rotation": 2
    },
    {
        "id": "500298510",
        "mapid": "1",
        "bftitle": "Cremona",
        "sector": "0",
        "posx": 6453.0458984375,
        "posy": 7442.18798828125,
        "gamemap": "70439"
    },
    {
        "id": "500537210",
        "mapid": "1",
        "bftitle": "Shtip",
        "sector": "0",
        "posx": 10021.259765625,
        "posy": 8822.97265625,
        "gamemap": "201"
    },
    {
        "id": "500646986",
        "mapid": "1",
        "bftitle": "Berane",
        "sector": "0",
        "posx": 9340.4697265625,
        "posy": 8385.2880859375,
        "gamemap": "201"
    },
    {
        "id": "500691719",
        "mapid": "1",
        "bftitle": "Gorinchem",
        "sector": "0",
        "posx": 4972.5869140625,
        "posy": 4453.634765625,
        "gamemap": "203",
        "rotation": 1
    },
    {
        "id": "500766770",
        "mapid": "1",
        "bftitle": "Commercy",
        "sector": "0",
        "posx": 5155.8828125,
        "posy": 5908.64306640625,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "500921623",
        "mapid": "1",
        "bftitle": "Pfreimd",
        "sector": "0",
        "posx": 7123.7041015625,
        "posy": 5425.73583984375,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "500954905",
        "mapid": "1",
        "bftitle": "Braunschweig",
        "sector": "0",
        "posx": 6640.76708984375,
        "posy": 4235.23193359375,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "501374426",
        "mapid": "1",
        "bftitle": "Altlandsberg",
        "sector": "0",
        "posx": 7539.13916015625,
        "posy": 4102.73291015625,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "501392110",
        "mapid": "1",
        "bftitle": "Fiorenzuola d'Arda",
        "sector": "0",
        "posx": 6420.89501953125,
        "posy": 7532.46923828125,
        "gamemap": "70439"
    },
    {
        "id": "501483374",
        "mapid": "1",
        "bftitle": "Osijek",
        "sector": "0",
        "posx": 8994.740234375,
        "posy": 7269.708984375,
        "gamemap": "70439"
    },
    {
        "id": "501720346",
        "mapid": "1",
        "bftitle": "Leibnitz, Styria",
        "sector": "0",
        "posx": 8069.76416015625,
        "posy": 6745.17919921875,
        "gamemap": "203"
    },
    {
        "id": "501885534",
        "mapid": "1",
        "bftitle": "Pisz",
        "sector": "0",
        "posx": 9908.9033203125,
        "posy": 3580.39208984375,
        "gamemap": "70439"
    },
    {
        "id": "502412432",
        "mapid": "1",
        "bftitle": "Basel",
        "sector": "0",
        "posx": 5734.96923828125,
        "posy": 6407.85986328125,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "502443146",
        "mapid": "1",
        "bftitle": "Volokolamsk",
        "sector": "0",
        "posx": 14058.7001953125,
        "posy": 2346.743896484375,
        "gamemap": "201"
    },
    {
        "id": "502723692",
        "mapid": "1",
        "bftitle": "Airfield 'Kladenets'",
        "sector": "0",
        "posx": 16198.150390625,
        "posy": 15988.2001953125,
        "gamemap": "204"
    },
    {
        "id": "503243848",
        "mapid": "1",
        "bftitle": "Bandırma",
        "sector": "0",
        "posx": 11715.7900390625,
        "posy": 9368.5263671875,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "503434251",
        "mapid": "1",
        "bftitle": "Besneville",
        "sector": "0",
        "posx": 3028.7900390625,
        "posy": 5590.787109375,
        "gamemap": "70439"
    },
    {
        "id": "503789691",
        "mapid": "1",
        "bftitle": "Lichterfelde",
        "sector": "0",
        "posx": 7415.87109375,
        "posy": 4166.60888671875,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "504009032",
        "mapid": "1",
        "bftitle": "Kraniá",
        "sector": "0",
        "posx": 9753.126953125,
        "posy": 9544.23046875,
        "gamemap": "203",
        "rotation": 3
    },
    {
        "id": "504128272",
        "mapid": "1",
        "bftitle": "Acceglio",
        "sector": "0",
        "posx": 5564.26416015625,
        "posy": 7719.2451171875,
        "gamemap": "201"
    },
    {
        "id": "504195886",
        "mapid": "1",
        "bftitle": "Jarosław",
        "sector": "0",
        "posx": 10162.5302734375,
        "posy": 5306.2998046875,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "504217825",
        "mapid": "1",
        "bftitle": "Szigetvár",
        "sector": "0",
        "posx": 8734.3388671875,
        "posy": 7059.03076171875,
        "gamemap": "205"
    },
    {
        "id": "504343078",
        "mapid": "1",
        "bftitle": "Foros",
        "sector": "0",
        "posx": 13421.0498046875,
        "posy": 7785.3427734375,
        "gamemap": "70439"
    },
    {
        "id": "504955369",
        "mapid": "1",
        "bftitle": "Dorsten",
        "sector": "0",
        "posx": 5573.9931640625,
        "posy": 4508.8828125,
        "gamemap": "201"
    },
    {
        "id": "504991643",
        "mapid": "1",
        "bftitle": "Sárbogárd",
        "sector": "0",
        "posx": 8973.2021484375,
        "posy": 6699.73583984375,
        "gamemap": "203",
        "rotation": 2
    },
    {
        "id": "505065758",
        "mapid": "1",
        "bftitle": "Valréas",
        "sector": "0",
        "posx": 4977.98486328125,
        "posy": 7756.84912109375,
        "gamemap": "201"
    },
    {
        "id": "505140637",
        "mapid": "1",
        "bftitle": "Châlus",
        "sector": "0",
        "posx": 3802.324951171875,
        "posy": 7226.125,
        "gamemap": "201"
    },
    {
        "id": "505769332",
        "mapid": "1",
        "bftitle": "Senj",
        "sector": "0",
        "posx": 7884.35302734375,
        "posy": 7505.31298828125,
        "gamemap": "203",
        "rotation": 3
    },
    {
        "id": "505859207",
        "mapid": "1",
        "bftitle": "Nova Odesa",
        "sector": "0",
        "posx": 12832.1396484375,
        "posy": 6517.22900390625,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "505893676",
        "mapid": "1",
        "bftitle": "Montreuil-sur-Mer",
        "sector": "0",
        "posx": 4021.489013671875,
        "posy": 5095.7958984375,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "506006716",
        "mapid": "1",
        "bftitle": "Genisséa",
        "sector": "0",
        "posx": 10841.669921875,
        "posy": 9097.771484375,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "506634497",
        "mapid": "1",
        "bftitle": "Llandegley Airfield",
        "sector": "0",
        "posx": 2558.89501953125,
        "posy": 4251.55517578125,
        "gamemap": "204",
        "rotation": 1
    },
    {
        "id": "506889154",
        "mapid": "1",
        "bftitle": "Kharmanli",
        "sector": "0",
        "posx": 11107.0595703125,
        "posy": 8748.677734375,
        "gamemap": "201"
    },
    {
        "id": "507161148",
        "mapid": "1",
        "bftitle": "Eneryda",
        "sector": "0",
        "posx": 7716.537109375,
        "posy": 1991.5579833984375,
        "gamemap": "203",
        "rotation": 2
    },
    {
        "id": "507168207",
        "mapid": "1",
        "bftitle": "Mosar'",
        "sector": "0",
        "posx": 11564.599609375,
        "posy": 2770.52392578125,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "507711788",
        "mapid": "1",
        "bftitle": "Olaine",
        "sector": "0",
        "posx": 10531.9599609375,
        "posy": 1945.6529541015625,
        "gamemap": "70439"
    },
    {
        "id": "508023391",
        "mapid": "1",
        "bftitle": "Strathaven",
        "sector": "0",
        "posx": 2322.928955078125,
        "posy": 2534.2509765625,
        "gamemap": "205"
    },
    {
        "id": "508441097",
        "mapid": "1",
        "bftitle": "Fürstenwalde",
        "sector": "0",
        "posx": 7640.8720703125,
        "posy": 4189.97509765625,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "508548200",
        "mapid": "1",
        "bftitle": "Molkom",
        "sector": "0",
        "posx": 7530.88916015625,
        "posy": 368.15948486328125,
        "gamemap": "203",
        "rotation": 1
    },
    {
        "id": "509019986",
        "mapid": "1",
        "bftitle": "Bourg-Saint-Maurice",
        "sector": "0",
        "posx": 5499.22021484375,
        "posy": 7241.85009765625,
        "gamemap": "201"
    },
    {
        "id": "509189003",
        "mapid": "1",
        "bftitle": "Bad Hofgastein",
        "sector": "0",
        "posx": 7354.6318359375,
        "posy": 6575.94921875,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "509244878",
        "mapid": "1",
        "bftitle": "Bačka Topola",
        "sector": "0",
        "posx": 9270.8359375,
        "posy": 7158.912109375,
        "gamemap": "203",
        "rotation": 3
    },
    {
        "id": "509248795",
        "mapid": "1",
        "bftitle": "Tsarychanka",
        "sector": "0",
        "posx": 13621.6904296875,
        "posy": 5796.6689453125,
        "gamemap": "70439"
    },
    {
        "id": "509364009",
        "mapid": "1",
        "bftitle": "Dolyns'ka",
        "sector": "0",
        "posx": 13119.240234375,
        "posy": 6165.09716796875,
        "gamemap": "70439"
    },
    {
        "id": "509395716",
        "mapid": "1",
        "bftitle": "Helston",
        "sector": "0",
        "posx": 1973.6190185546875,
        "posy": 5280.23095703125,
        "gamemap": "203",
        "rotation": 1
    },
    {
        "id": "509436343",
        "mapid": "1",
        "bftitle": "Beaumont-le-Roger Aérodrome",
        "sector": "0",
        "posx": 3706.76611328125,
        "posy": 5697.7958984375,
        "gamemap": "204"
    },
    {
        "id": "509633858",
        "mapid": "1",
        "bftitle": "Cybinka",
        "sector": "0",
        "posx": 7852.06005859375,
        "posy": 4281.94677734375,
        "gamemap": "70439"
    },
    {
        "id": "509687207",
        "mapid": "1",
        "bftitle": "Odesa",
        "sector": "0",
        "posx": 12523.6396484375,
        "posy": 6875.921875,
        "gamemap": "70439"
    },
    {
        "id": "509922063",
        "mapid": "1",
        "bftitle": "Hnidyn",
        "sector": "0",
        "posx": 12517.1796875,
        "posy": 5162.14306640625,
        "gamemap": "203"
    },
    {
        "id": "509968507",
        "mapid": "1",
        "bftitle": "Saint-Saëns",
        "sector": "0",
        "posx": 3891.76904296875,
        "posy": 5463.4189453125,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "510283905",
        "mapid": "1",
        "bftitle": "Trutnov",
        "sector": "0",
        "posx": 8179.49609375,
        "posy": 5054.58984375,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "510296444",
        "mapid": "1",
        "bftitle": "Tapa",
        "sector": "0",
        "posx": 11124.240234375,
        "posy": 565.1898803710938,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "510459502",
        "mapid": "1",
        "bftitle": "Fabriano",
        "sector": "0",
        "posx": 7298.51513671875,
        "posy": 8183.91015625,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "510513299",
        "mapid": "1",
        "bftitle": "Borgo San Dalmazzo",
        "sector": "0",
        "posx": 5711.4677734375,
        "posy": 7775.76611328125,
        "gamemap": "201"
    },
    {
        "id": "510631370",
        "mapid": "1",
        "bftitle": "Hadyach",
        "sector": "0",
        "posx": 13478.759765625,
        "posy": 5142.65478515625,
        "gamemap": "203"
    },
    {
        "id": "511052577",
        "mapid": "1",
        "bftitle": "Mormant",
        "sector": "0",
        "posx": 4362.2421875,
        "posy": 5943.57421875,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "511127237",
        "mapid": "1",
        "bftitle": "Angermünde",
        "sector": "0",
        "posx": 7627.40283203125,
        "posy": 3855.01611328125,
        "gamemap": "70439"
    },
    {
        "id": "511154440",
        "mapid": "1",
        "bftitle": "Antopol'",
        "sector": "0",
        "posx": 10780.599609375,
        "posy": 4277.44580078125,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "511324653",
        "mapid": "1",
        "bftitle": "Harrogate",
        "sector": "0",
        "posx": 3064.39892578125,
        "posy": 3398.740966796875,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "511777240",
        "mapid": "1",
        "bftitle": "Michalovce",
        "sector": "0",
        "posx": 9940.2578125,
        "posy": 5878.59716796875,
        "gamemap": "203"
    },
    {
        "id": "512969517",
        "mapid": "1",
        "bftitle": "Çan",
        "sector": "0",
        "posx": 11444.849609375,
        "posy": 9491.783203125,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "513515762",
        "mapid": "1",
        "bftitle": "Wissant",
        "sector": "0",
        "posx": 4035.19091796875,
        "posy": 4915.1337890625,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "513678096",
        "mapid": "1",
        "bftitle": "Bologoye",
        "sector": "0",
        "posx": 13512.7099609375,
        "posy": 1346.9310302734375,
        "gamemap": "201"
    },
    {
        "id": "513728573",
        "mapid": "1",
        "bftitle": "Balatun",
        "sector": "0",
        "posx": 9183.9306640625,
        "posy": 7557.90185546875,
        "gamemap": "203",
        "rotation": 3
    },
    {
        "id": "513848649",
        "mapid": "1",
        "bftitle": "Il'ya",
        "sector": "0",
        "posx": 11516.2099609375,
        "posy": 3183.77490234375,
        "gamemap": "70439"
    },
    {
        "id": "513849813",
        "mapid": "1",
        "bftitle": "Slobozia",
        "sector": "0",
        "posx": 11535.990234375,
        "posy": 7681.953125,
        "gamemap": "70439"
    },
    {
        "id": "513994508",
        "mapid": "1",
        "bftitle": "Falkenberg",
        "sector": "0",
        "posx": 7196.31787109375,
        "posy": 1868.886962890625,
        "gamemap": "70439"
    },
    {
        "id": "514121641",
        "mapid": "1",
        "bftitle": "Hull",
        "sector": "0",
        "posx": 3423.555908203125,
        "posy": 3505.64306640625,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "514286982",
        "mapid": "1",
        "bftitle": "Bruneck",
        "sector": "0",
        "posx": 7013.30810546875,
        "posy": 6737.4990234375,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "514945401",
        "mapid": "1",
        "bftitle": "Sancaktepe",
        "sector": "0",
        "posx": 12083.73046875,
        "posy": 9115.4228515625,
        "gamemap": "203",
        "rotation": 1
    },
    {
        "id": "515057105",
        "mapid": "1",
        "bftitle": "Nontron",
        "sector": "0",
        "posx": 3710.445068359375,
        "posy": 7277.2021484375,
        "gamemap": "201"
    },
    {
        "id": "515100819",
        "mapid": "1",
        "bftitle": "Gołdap",
        "sector": "0",
        "posx": 10052.8603515625,
        "posy": 3239.7041015625,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "515373479",
        "mapid": "1",
        "bftitle": "Gmina Ciechanowiec",
        "sector": "0",
        "posx": 10109.8798828125,
        "posy": 4047.660888671875,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "515591213",
        "mapid": "1",
        "bftitle": "Binäs",
        "sector": "0",
        "posx": 7071.65283203125,
        "posy": 1018.4550170898438,
        "gamemap": "204",
        "rotation": 1
    },
    {
        "id": "515748827",
        "mapid": "1",
        "bftitle": "Baranovichi",
        "sector": "0",
        "posx": 11140.4501953125,
        "posy": 3825.240966796875,
        "gamemap": "201"
    },
    {
        "id": "515783321",
        "mapid": "1",
        "bftitle": "Novovolyns’k",
        "sector": "0",
        "posx": 10597.7900390625,
        "posy": 4977.89599609375,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "515924368",
        "mapid": "1",
        "bftitle": "Dunaújváros",
        "sector": "0",
        "posx": 9064.9287109375,
        "posy": 6658.05322265625,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "516014951",
        "mapid": "1",
        "bftitle": "Clusone",
        "sector": "0",
        "posx": 6430.619140625,
        "posy": 7127.841796875,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "516765647",
        "mapid": "1",
        "bftitle": "Venëv",
        "sector": "0",
        "posx": 14732.599609375,
        "posy": 3214.885986328125,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "516891069",
        "mapid": "1",
        "bftitle": "Kaykovo",
        "sector": "0",
        "posx": 11602.1396484375,
        "posy": 3542.426025390625,
        "gamemap": "203",
        "rotation": 3
    },
    {
        "id": "517071197",
        "mapid": "1",
        "bftitle": "Fondi",
        "sector": "0",
        "posx": 7448.05810546875,
        "posy": 8960.017578125,
        "gamemap": "205",
        "rotation": 3
    },
    {
        "id": "517421239",
        "mapid": "1",
        "bftitle": "Vylkove",
        "sector": "0",
        "posx": 12187.509765625,
        "posy": 7332.42578125,
        "gamemap": "203"
    },
    {
        "id": "517494210",
        "mapid": "1",
        "bftitle": "Amiens Aérodrome",
        "sector": "0",
        "posx": 4224.47998046875,
        "posy": 5427.90185546875,
        "gamemap": "205",
        "rotation": 3
    },
    {
        "id": "517731135",
        "mapid": "1",
        "bftitle": "Budeşti",
        "sector": "0",
        "posx": 11272.919921875,
        "posy": 7818.2919921875,
        "gamemap": "70439"
    },
    {
        "id": "517825938",
        "mapid": "1",
        "bftitle": "Körmend",
        "sector": "0",
        "posx": 8382.7099609375,
        "posy": 6646.09619140625,
        "gamemap": "201"
    },
    {
        "id": "517974518",
        "mapid": "1",
        "bftitle": "Støvring",
        "sector": "0",
        "posx": 6398.93994140625,
        "posy": 1891.64697265625,
        "gamemap": "203",
        "rotation": 3
    },
    {
        "id": "518282091",
        "mapid": "1",
        "bftitle": "Mostar",
        "sector": "0",
        "posx": 8735.0771484375,
        "posy": 8182.82177734375,
        "gamemap": "201"
    },
    {
        "id": "518586601",
        "mapid": "1",
        "bftitle": "Konotop",
        "sector": "0",
        "posx": 13247.669921875,
        "posy": 4736.60693359375,
        "gamemap": "201"
    },
    {
        "id": "519053286",
        "mapid": "1",
        "bftitle": "Landvetter",
        "sector": "0",
        "posx": 7097.7861328125,
        "posy": 1447.612060546875,
        "gamemap": "205",
        "rotation": 2
    },
    {
        "id": "519073664",
        "mapid": "1",
        "bftitle": "Saint-Maximin-la-Sainte-Baume",
        "sector": "0",
        "posx": 5243.81689453125,
        "posy": 8149.0400390625,
        "gamemap": "203"
    },
    {
        "id": "519594305",
        "mapid": "1",
        "bftitle": "Biggin Hill Airfield",
        "sector": "0",
        "posx": 3544.26708984375,
        "posy": 4706.06201171875,
        "gamemap": "205",
        "rotation": 3
    },
    {
        "id": "519890797",
        "mapid": "1",
        "bftitle": "Flathult",
        "sector": "0",
        "posx": 8333.7333984375,
        "posy": 1690.68603515625,
        "gamemap": "205"
    },
    {
        "id": "519962838",
        "mapid": "1",
        "bftitle": "Sudzha",
        "sector": "0",
        "posx": 13854.4404296875,
        "posy": 4756.7412109375,
        "gamemap": "201"
    },
    {
        "id": "520009393",
        "mapid": "1",
        "bftitle": "Siófok",
        "sector": "0",
        "posx": 8808.34375,
        "posy": 6692.3017578125,
        "gamemap": "70439"
    },
    {
        "id": "520130824",
        "mapid": "1",
        "bftitle": "Imperia",
        "sector": "0",
        "posx": 5869.0927734375,
        "posy": 7960.93505859375,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "520150609",
        "mapid": "1",
        "bftitle": "Braila",
        "sector": "0",
        "posx": 11791.0302734375,
        "posy": 7424.2451171875,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "520466172",
        "mapid": "1",
        "bftitle": "Southam Airfield",
        "sector": "0",
        "posx": 3108.047119140625,
        "posy": 4253.89697265625,
        "gamemap": "205",
        "rotation": 1
    },
    {
        "id": "520658947",
        "mapid": "1",
        "bftitle": "La Clayette",
        "sector": "0",
        "posx": 4776.7158203125,
        "posy": 6956.14111328125,
        "gamemap": "203",
        "rotation": 2
    },
    {
        "id": "520723684",
        "mapid": "1",
        "bftitle": "La Souterraine",
        "sector": "0",
        "posx": 3950.912109375,
        "posy": 6978.72119140625,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "520818868",
        "mapid": "1",
        "bftitle": "Grimsby",
        "sector": "0",
        "posx": 3506.748046875,
        "posy": 3659.777099609375,
        "gamemap": "203"
    },
    {
        "id": "521372857",
        "mapid": "1",
        "bftitle": "Głogów",
        "sector": "0",
        "posx": 8229.853515625,
        "posy": 4536.083984375,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "521738889",
        "mapid": "1",
        "bftitle": "Hauville",
        "sector": "0",
        "posx": 3723.802001953125,
        "posy": 5583.52099609375,
        "gamemap": "70439"
    },
    {
        "id": "522002385",
        "mapid": "1",
        "bftitle": "Frohnleiten",
        "sector": "0",
        "posx": 8004.77978515625,
        "posy": 6535.1220703125,
        "gamemap": "203",
        "rotation": 2
    },
    {
        "id": "522173878",
        "mapid": "1",
        "bftitle": "Brno",
        "sector": "0",
        "posx": 8383.294921875,
        "posy": 5680.31103515625,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "522444346",
        "mapid": "1",
        "bftitle": "Roisel Aérodrome",
        "sector": "0",
        "posx": 4444.51611328125,
        "posy": 5357.23486328125,
        "gamemap": "204",
        "rotation": 2
    },
    {
        "id": "522559500",
        "mapid": "1",
        "bftitle": "Nørre Vorupør",
        "sector": "0",
        "posx": 5970.07421875,
        "posy": 1856.1290283203125,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "523009513",
        "mapid": "1",
        "bftitle": "Domfront Aérodrome",
        "sector": "0",
        "posx": 3325.700927734375,
        "posy": 5951.1328125,
        "gamemap": "205",
        "rotation": 3
    },
    {
        "id": "523372887",
        "mapid": "1",
        "bftitle": "Edinburgh",
        "sector": "0",
        "posx": 2578.044921875,
        "posy": 2389.7880859375,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "523398471",
        "mapid": "1",
        "bftitle": "Evison Village",
        "sector": "0",
        "posx": 15947.490234375,
        "posy": 15996.009765625,
        "gamemap": "70439"
    },
    {
        "id": "523650536",
        "mapid": "1",
        "bftitle": "Chervonohrad",
        "sector": "0",
        "posx": 10619.0400390625,
        "posy": 5133.42919921875,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "523859461",
        "mapid": "1",
        "bftitle": "St Ives",
        "sector": "0",
        "posx": 1906.0589599609375,
        "posy": 5249.73291015625,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "523872642",
        "mapid": "1",
        "bftitle": "Antikyra",
        "sector": "0",
        "posx": 10149.5,
        "posy": 10120.4404296875,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "524094251",
        "mapid": "1",
        "bftitle": "Foggia",
        "sector": "0",
        "posx": 8073.72802734375,
        "posy": 8936.4287109375,
        "gamemap": "70439"
    },
    {
        "id": "524146793",
        "mapid": "1",
        "bftitle": "Sutrio",
        "sector": "0",
        "posx": 7323.12109375,
        "posy": 6868.89501953125,
        "gamemap": "203",
        "rotation": 2
    },
    {
        "id": "524975617",
        "mapid": "1",
        "bftitle": "Rive-de-Gier",
        "sector": "0",
        "posx": 4868.0751953125,
        "posy": 7279.64111328125,
        "gamemap": "201"
    },
    {
        "id": "525271767",
        "mapid": "1",
        "bftitle": "Föglö",
        "sector": "0",
        "posx": 9499.736328125,
        "posy": 123.56670379638672,
        "gamemap": "70439"
    },
    {
        "id": "526120387",
        "mapid": "1",
        "bftitle": "Bardonecchia",
        "sector": "0",
        "posx": 5478.6591796875,
        "posy": 7469.73291015625,
        "gamemap": "201"
    },
    {
        "id": "526329565",
        "mapid": "1",
        "bftitle": "Penne",
        "sector": "0",
        "posx": 7597.5869140625,
        "posy": 8540.91796875,
        "gamemap": "70439"
    },
    {
        "id": "526513437",
        "mapid": "1",
        "bftitle": "Mountain Village Estoc",
        "sector": "0",
        "posx": 15735.9404296875,
        "posy": 16003.8896484375,
        "gamemap": "201"
    },
    {
        "id": "526542118",
        "mapid": "1",
        "bftitle": "Ingelstad",
        "sector": "0",
        "posx": 7887.52783203125,
        "posy": 1964.656005859375,
        "gamemap": "70439"
    },
    {
        "id": "526707534",
        "mapid": "1",
        "bftitle": "Borgo San Lorenzo",
        "sector": "0",
        "posx": 6846.72021484375,
        "posy": 7929.18896484375,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "526877368",
        "mapid": "1",
        "bftitle": "Tolentino",
        "sector": "0",
        "posx": 7410.294921875,
        "posy": 8236.18359375,
        "gamemap": "70439"
    },
    {
        "id": "527622141",
        "mapid": "1",
        "bftitle": "Le Blanc",
        "sector": "0",
        "posx": 3827.696044921875,
        "posy": 6809.01220703125,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "527781135",
        "mapid": "1",
        "bftitle": "Pikalikha",
        "sector": "0",
        "posx": 13993.91015625,
        "posy": 811.6942749023438,
        "gamemap": "203",
        "rotation": 1
    },
    {
        "id": "527799406",
        "mapid": "1",
        "bftitle": "Bratislava",
        "sector": "0",
        "posx": 8529.5029296875,
        "posy": 6148.39990234375,
        "gamemap": "70439"
    },
    {
        "id": "528040484",
        "mapid": "1",
        "bftitle": "Saint Egreve",
        "sector": "0",
        "posx": 5190.826171875,
        "posy": 7390.52490234375,
        "gamemap": "203"
    },
    {
        "id": "528069493",
        "mapid": "1",
        "bftitle": "Ursynów",
        "sector": "0",
        "posx": 9684.7119140625,
        "posy": 4315.7548828125,
        "gamemap": "70439"
    },
    {
        "id": "528246383",
        "mapid": "1",
        "bftitle": "Lysa Hora",
        "sector": "0",
        "posx": 12634.240234375,
        "posy": 6138.47509765625,
        "gamemap": "70439"
    },
    {
        "id": "528813929",
        "mapid": "1",
        "bftitle": "Pré-en-Pail",
        "sector": "0",
        "posx": 3448.656005859375,
        "posy": 6000.19384765625,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "528998908",
        "mapid": "1",
        "bftitle": "Brindisi",
        "sector": "0",
        "posx": 8753.4697265625,
        "posy": 9309.0078125,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "529482700",
        "mapid": "1",
        "bftitle": "Zubtsov",
        "sector": "0",
        "posx": 13654.16015625,
        "posy": 2271.722900390625,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "529697949",
        "mapid": "1",
        "bftitle": "Simlångsdalen",
        "sector": "0",
        "posx": 7359.89697265625,
        "posy": 1982.593994140625,
        "gamemap": "70439"
    },
    {
        "id": "529698734",
        "mapid": "1",
        "bftitle": "Noyon",
        "sector": "0",
        "posx": 4394.412109375,
        "posy": 5504.2919921875,
        "gamemap": "203"
    },
    {
        "id": "529867556",
        "mapid": "1",
        "bftitle": "Biryulëvo",
        "sector": "0",
        "posx": 14554.080078125,
        "posy": 2597.1669921875,
        "gamemap": "203",
        "rotation": 1
    },
    {
        "id": "529874786",
        "mapid": "1",
        "bftitle": "Wysokie Mazowieckie",
        "sector": "0",
        "posx": 10115.4404296875,
        "posy": 3931.298095703125,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "529884122",
        "mapid": "1",
        "bftitle": "Çanakkale",
        "sector": "0",
        "posx": 11264.1396484375,
        "posy": 9450.787109375,
        "gamemap": "70439"
    },
    {
        "id": "529913648",
        "mapid": "1",
        "bftitle": "Cherkasy",
        "sector": "0",
        "posx": 12896.2802734375,
        "posy": 5571.50390625,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "530102615",
        "mapid": "1",
        "bftitle": "Degeberga",
        "sector": "0",
        "posx": 7643.25390625,
        "posy": 2452.2919921875,
        "gamemap": "70439"
    },
    {
        "id": "530270149",
        "mapid": "1",
        "bftitle": "Eberswalde",
        "sector": "0",
        "posx": 7593.0029296875,
        "posy": 3953.639892578125,
        "gamemap": "70439"
    },
    {
        "id": "530441008",
        "mapid": "1",
        "bftitle": "La Pouëze",
        "sector": "0",
        "posx": 3277.802001953125,
        "posy": 6409.97216796875,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "530501420",
        "mapid": "1",
        "bftitle": "Straubing",
        "sector": "0",
        "posx": 7200.783203125,
        "posy": 5821.69287109375,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "530518866",
        "mapid": "1",
        "bftitle": "Sierpc",
        "sector": "0",
        "posx": 9280.6123046875,
        "posy": 3960.56298828125,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "530668141",
        "mapid": "1",
        "bftitle": "Reshetylivka",
        "sector": "0",
        "posx": 13504.3095703125,
        "posy": 5512.6328125,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "530745421",
        "mapid": "1",
        "bftitle": "Petrivka",
        "sector": "0",
        "posx": 12590.0400390625,
        "posy": 6664.0341796875,
        "gamemap": "70439"
    },
    {
        "id": "531491994",
        "mapid": "1",
        "bftitle": "Colfosco",
        "sector": "0",
        "posx": 6996.3017578125,
        "posy": 6825.5751953125,
        "gamemap": "203"
    },
    {
        "id": "531696069",
        "mapid": "1",
        "bftitle": "Markaryd",
        "sector": "0",
        "posx": 7500.5322265625,
        "posy": 2119.472900390625,
        "gamemap": "203",
        "rotation": 3
    },
    {
        "id": "531842589",
        "mapid": "1",
        "bftitle": "Pillemark",
        "sector": "0",
        "posx": 6621.8759765625,
        "posy": 2454.98388671875,
        "gamemap": "203"
    },
    {
        "id": "532178040",
        "mapid": "1",
        "bftitle": "Pohrebyshche",
        "sector": "0",
        "posx": 12093.0302734375,
        "posy": 5548.39013671875,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "532361079",
        "mapid": "1",
        "bftitle": "Steinbeck Flugplatz",
        "sector": "0",
        "posx": 7596.26416015625,
        "posy": 4032.927001953125,
        "gamemap": "204",
        "rotation": 3
    },
    {
        "id": "532617094",
        "mapid": "1",
        "bftitle": "Radom",
        "sector": "0",
        "posx": 9713.857421875,
        "posy": 4659.98486328125,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "532642488",
        "mapid": "1",
        "bftitle": "Lozovyy Yar",
        "sector": "0",
        "posx": 12894.1904296875,
        "posy": 5165.4208984375,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "532760933",
        "mapid": "1",
        "bftitle": "Stockholm",
        "sector": "0",
        "posx": 8810.3671875,
        "posy": 523.5501708984375,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "533193980",
        "mapid": "1",
        "bftitle": "Ljungby",
        "sector": "0",
        "posx": 7601.48095703125,
        "posy": 1919.7889404296875,
        "gamemap": "70439"
    },
    {
        "id": "533289955",
        "mapid": "1",
        "bftitle": "Southampton",
        "sector": "0",
        "posx": 3092.387939453125,
        "posy": 4904.07177734375,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "533609521",
        "mapid": "1",
        "bftitle": "Vál",
        "sector": "0",
        "posx": 8990.4658203125,
        "posy": 6493.3330078125,
        "gamemap": "203",
        "rotation": 1
    },
    {
        "id": "533752400",
        "mapid": "1",
        "bftitle": "Bayrak",
        "sector": "0",
        "posx": 13578.1298828125,
        "posy": 5004.658203125,
        "gamemap": "201"
    },
    {
        "id": "533960546",
        "mapid": "1",
        "bftitle": "Põltsamaa",
        "sector": "0",
        "posx": 11127.740234375,
        "posy": 913.2822875976562,
        "gamemap": "70439"
    },
    {
        "id": "534037508",
        "mapid": "1",
        "bftitle": "Gordeyevka",
        "sector": "0",
        "posx": 12886.4404296875,
        "posy": 3911.56494140625,
        "gamemap": "203",
        "rotation": 1
    },
    {
        "id": "534231054",
        "mapid": "1",
        "bftitle": "Zalău",
        "sector": "0",
        "posx": 10271.6396484375,
        "posy": 6564.10595703125,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "534565768",
        "mapid": "1",
        "bftitle": "Rombach-Martelange",
        "sector": "0",
        "posx": 5184.55810546875,
        "posy": 5402.02392578125,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "535095276",
        "mapid": "1",
        "bftitle": "Beiuș",
        "sector": "0",
        "posx": 10066.4501953125,
        "posy": 6794.6767578125,
        "gamemap": "203",
        "rotation": 1
    },
    {
        "id": "535540309",
        "mapid": "1",
        "bftitle": "Sauveterre-de-Guyenne",
        "sector": "0",
        "posx": 3489.966064453125,
        "posy": 7628.73095703125,
        "gamemap": "203"
    },
    {
        "id": "535673237",
        "mapid": "1",
        "bftitle": "Altdorf",
        "sector": "0",
        "posx": 6048.9501953125,
        "posy": 6702.5419921875,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "536327659",
        "mapid": "1",
        "bftitle": "Beaucaire",
        "sector": "0",
        "posx": 4876.36376953125,
        "posy": 7993.4541015625,
        "gamemap": "203",
        "rotation": 3
    },
    {
        "id": "536438846",
        "mapid": "1",
        "bftitle": "Nieuwkoop",
        "sector": "0",
        "posx": 4913.5458984375,
        "posy": 4292.72607421875,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "536618644",
        "mapid": "1",
        "bftitle": "Lindau",
        "sector": "0",
        "posx": 6357.09423828125,
        "posy": 6406.58984375,
        "gamemap": "203",
        "rotation": 2
    },
    {
        "id": "536832452",
        "mapid": "1",
        "bftitle": "Marseille 15",
        "sector": "0",
        "posx": 5075.5830078125,
        "posy": 8164.98291015625,
        "gamemap": "203"
    },
    {
        "id": "537099564",
        "mapid": "1",
        "bftitle": "Hardenberg Vliegveld",
        "sector": "0",
        "posx": 5455.375,
        "posy": 4097.48486328125,
        "gamemap": "204"
    },
    {
        "id": "537765706",
        "mapid": "1",
        "bftitle": "Lutovinovka",
        "sector": "0",
        "posx": 13453.580078125,
        "posy": 5661.31396484375,
        "gamemap": "70439"
    },
    {
        "id": "537995894",
        "mapid": "1",
        "bftitle": "San Martino in Pensilis",
        "sector": "0",
        "posx": 7917.3017578125,
        "posy": 8770.5703125,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "538843698",
        "mapid": "1",
        "bftitle": "Tomaszów Mazowiecki",
        "sector": "0",
        "posx": 9380.10546875,
        "posy": 4598.958984375,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "538844044",
        "mapid": "1",
        "bftitle": "Mohelnice",
        "sector": "0",
        "posx": 8474.60546875,
        "posy": 5415.94189453125,
        "gamemap": "201"
    },
    {
        "id": "539195584",
        "mapid": "1",
        "bftitle": "Pervomaisc",
        "sector": "0",
        "posx": 12296.75,
        "posy": 6765.7412109375,
        "gamemap": "203",
        "rotation": 1
    },
    {
        "id": "539233204",
        "mapid": "1",
        "bftitle": "Kiskőrös",
        "sector": "0",
        "posx": 9168.0947265625,
        "posy": 6814.14599609375,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "539321871",
        "mapid": "1",
        "bftitle": "Buchach",
        "sector": "0",
        "posx": 10956.9697265625,
        "posy": 5740.1689453125,
        "gamemap": "70439"
    },
    {
        "id": "540339111",
        "mapid": "1",
        "bftitle": "Châteauroux",
        "sector": "0",
        "posx": 4013.343994140625,
        "posy": 6730.06103515625,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "540621826",
        "mapid": "1",
        "bftitle": "Vergt",
        "sector": "0",
        "posx": 3726.989013671875,
        "posy": 7495.4072265625,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "541002287",
        "mapid": "1",
        "bftitle": "Walsrode",
        "sector": "0",
        "posx": 6291.7919921875,
        "posy": 3915.125,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "542733856",
        "mapid": "1",
        "bftitle": "Gierłoż",
        "sector": "0",
        "posx": 9815.9775390625,
        "posy": 3353.220947265625,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "543121541",
        "mapid": "1",
        "bftitle": "Aarhus",
        "sector": "0",
        "posx": 6513.0390625,
        "posy": 2300.841064453125,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "543128858",
        "mapid": "1",
        "bftitle": "Elva",
        "sector": "0",
        "posx": 11259.8095703125,
        "posy": 1155.800048828125,
        "gamemap": "70439"
    },
    {
        "id": "543593890",
        "mapid": "1",
        "bftitle": "Vorotynsk",
        "sector": "0",
        "posx": 14081.2802734375,
        "posy": 3177.89990234375,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "543596916",
        "mapid": "1",
        "bftitle": "Belley",
        "sector": "0",
        "posx": 5180.97412109375,
        "posy": 7178.6650390625,
        "gamemap": "201"
    },
    {
        "id": "543633829",
        "mapid": "1",
        "bftitle": "Wiżajny",
        "sector": "0",
        "posx": 10218.419921875,
        "posy": 3208.634033203125,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "543645702",
        "mapid": "1",
        "bftitle": "Lugoj",
        "sector": "0",
        "posx": 9935.439453125,
        "posy": 7211.673828125,
        "gamemap": "70439"
    },
    {
        "id": "543808942",
        "mapid": "1",
        "bftitle": "Stenay",
        "sector": "0",
        "posx": 5009.4521484375,
        "posy": 5575.89990234375,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "543821788",
        "mapid": "1",
        "bftitle": "Knutsford",
        "sector": "0",
        "posx": 2818.89892578125,
        "posy": 3741.33203125,
        "gamemap": "203"
    },
    {
        "id": "544069997",
        "mapid": "1",
        "bftitle": "Gouda",
        "sector": "0",
        "posx": 4893.4951171875,
        "posy": 4348.00390625,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "544403348",
        "mapid": "1",
        "bftitle": "Gien",
        "sector": "0",
        "posx": 4286.22900390625,
        "posy": 6348.76318359375,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "544450353",
        "mapid": "1",
        "bftitle": "Prestestranda",
        "sector": "0",
        "posx": 6170.3779296875,
        "posy": 659.0059814453125,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "544582054",
        "mapid": "1",
        "bftitle": "Kerkhob",
        "sector": "0",
        "posx": 6039.0078125,
        "posy": 3790.3291015625,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "544723347",
        "mapid": "1",
        "bftitle": "Pomichna",
        "sector": "0",
        "posx": 12723.91015625,
        "posy": 6106.74609375,
        "gamemap": "70439"
    },
    {
        "id": "544767553",
        "mapid": "1",
        "bftitle": "Kivertsi",
        "sector": "0",
        "posx": 10977.5595703125,
        "posy": 4927.244140625,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "545080356",
        "mapid": "1",
        "bftitle": "Nienburg",
        "sector": "0",
        "posx": 6217.9228515625,
        "posy": 4063.323974609375,
        "gamemap": "203",
        "rotation": 2
    },
    {
        "id": "545192737",
        "mapid": "1",
        "bftitle": "Vic-en-Bigorre",
        "sector": "0",
        "posx": 3531.06298828125,
        "posy": 8165.1630859375,
        "gamemap": "201"
    },
    {
        "id": "545269456",
        "mapid": "1",
        "bftitle": "Dubo",
        "sector": "0",
        "posx": 11991.8095703125,
        "posy": 676.2725219726562,
        "gamemap": "203",
        "rotation": 3
    },
    {
        "id": "545381825",
        "mapid": "1",
        "bftitle": "Muraste",
        "sector": "0",
        "posx": 10676.400390625,
        "posy": 451.2757873535156,
        "gamemap": "70439"
    },
    {
        "id": "545650711",
        "mapid": "1",
        "bftitle": "Lubny",
        "sector": "0",
        "posx": 13187.3701171875,
        "posy": 5306.291015625,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "545722542",
        "mapid": "1",
        "bftitle": "Orleans Aérodrome",
        "sector": "0",
        "posx": 4072.43603515625,
        "posy": 6256.873046875,
        "gamemap": "204",
        "rotation": 3
    },
    {
        "id": "545893389",
        "mapid": "1",
        "bftitle": "Feins Aérodrome",
        "sector": "0",
        "posx": 3040.8369140625,
        "posy": 6092.8408203125,
        "gamemap": "205",
        "rotation": 1
    },
    {
        "id": "546474245",
        "mapid": "1",
        "bftitle": "Nérac",
        "sector": "0",
        "posx": 3617.62109375,
        "posy": 7860.03076171875,
        "gamemap": "203",
        "rotation": 2
    },
    {
        "id": "547070073",
        "mapid": "1",
        "bftitle": "Kongshøj",
        "sector": "0",
        "posx": 6680.27978515625,
        "posy": 2786.568115234375,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "547318127",
        "mapid": "1",
        "bftitle": "Andreyevka",
        "sector": "0",
        "posx": 13290.8701171875,
        "posy": 4582.1728515625,
        "gamemap": "203",
        "rotation": 1
    },
    {
        "id": "548062825",
        "mapid": "1",
        "bftitle": "Eschwege Flugplatz",
        "sector": "0",
        "posx": 6461.93505859375,
        "posy": 4763.212890625,
        "gamemap": "204"
    },
    {
        "id": "548152768",
        "mapid": "1",
        "bftitle": "Rønne",
        "sector": "0",
        "posx": 7839.5439453125,
        "posy": 2854.56396484375,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "548307282",
        "mapid": "1",
        "bftitle": "Mogilev",
        "sector": "0",
        "posx": 12409.990234375,
        "posy": 3435.85693359375,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "549647868",
        "mapid": "1",
        "bftitle": "Peterborough",
        "sector": "0",
        "posx": 3394.198974609375,
        "posy": 4068.73193359375,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "549732974",
        "mapid": "1",
        "bftitle": "Drammen",
        "sector": "0",
        "posx": 6506.25390625,
        "posy": 284.03790283203125,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "549750505",
        "mapid": "1",
        "bftitle": "Ploudalmézeau",
        "sector": "0",
        "posx": 2171.841064453125,
        "posy": 5975.31982421875,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "549896320",
        "mapid": "1",
        "bftitle": "Le Luc",
        "sector": "0",
        "posx": 5366.05712890625,
        "posy": 8162.5791015625,
        "gamemap": "203",
        "rotation": 1
    },
    {
        "id": "550193345",
        "mapid": "1",
        "bftitle": "Vangaži",
        "sector": "0",
        "posx": 10700.8603515625,
        "posy": 1780.239013671875,
        "gamemap": "203",
        "rotation": 3
    },
    {
        "id": "550455105",
        "mapid": "1",
        "bftitle": "Laguiole",
        "sector": "0",
        "posx": 4349.4619140625,
        "posy": 7632.2021484375,
        "gamemap": "203",
        "rotation": 3
    },
    {
        "id": "550468299",
        "mapid": "1",
        "bftitle": "Town Yetholm",
        "sector": "0",
        "posx": 2844.507080078125,
        "posy": 2603.054931640625,
        "gamemap": "204",
        "rotation": 2
    },
    {
        "id": "550551718",
        "mapid": "1",
        "bftitle": "Coatbridge",
        "sector": "0",
        "posx": 2351.882080078125,
        "posy": 2445.0439453125,
        "gamemap": "70439"
    },
    {
        "id": "551028184",
        "mapid": "1",
        "bftitle": "Salaspils",
        "sector": "0",
        "posx": 10657.240234375,
        "posy": 1905.2669677734375,
        "gamemap": "70439"
    },
    {
        "id": "551354328",
        "mapid": "1",
        "bftitle": "Nevlino",
        "sector": "0",
        "posx": 12348.0400390625,
        "posy": 1172.3909912109375,
        "gamemap": "201"
    },
    {
        "id": "551441140",
        "mapid": "1",
        "bftitle": "Chernihiv",
        "sector": "0",
        "posx": 12685.51953125,
        "posy": 4611.19921875,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "551968260",
        "mapid": "1",
        "bftitle": "Aberdeen",
        "sector": "0",
        "posx": 2890.510986328125,
        "posy": 1756.3170166015625,
        "gamemap": "70439"
    },
    {
        "id": "552224762",
        "mapid": "1",
        "bftitle": "Manosque",
        "sector": "0",
        "posx": 5211.3251953125,
        "posy": 7984.955078125,
        "gamemap": "70439"
    },
    {
        "id": "552801265",
        "mapid": "1",
        "bftitle": "Andreapol'",
        "sector": "0",
        "posx": 12973.23046875,
        "posy": 2017.70703125,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "553019103",
        "mapid": "1",
        "bftitle": "Mshinskaya",
        "sector": "0",
        "posx": 12292.2802734375,
        "posy": 706.5025024414062,
        "gamemap": "70439"
    },
    {
        "id": "553155020",
        "mapid": "1",
        "bftitle": "Bornsholms Lufthavn",
        "sector": "0",
        "posx": 7895.14794921875,
        "posy": 2842.614013671875,
        "gamemap": "204",
        "rotation": 1
    },
    {
        "id": "553182614",
        "mapid": "1",
        "bftitle": "Kladno",
        "sector": "0",
        "posx": 7626.68798828125,
        "posy": 5244.2587890625,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "553222908",
        "mapid": "1",
        "bftitle": "Altenburg",
        "sector": "0",
        "posx": 7144.56103515625,
        "posy": 4761.1669921875,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "553395271",
        "mapid": "1",
        "bftitle": "Vikersund",
        "sector": "0",
        "posx": 6444.85009765625,
        "posy": 153.52020263671875,
        "gamemap": "201"
    },
    {
        "id": "553432604",
        "mapid": "1",
        "bftitle": "Vejleby",
        "sector": "0",
        "posx": 6820.6640625,
        "posy": 2996.513916015625,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "553800285",
        "mapid": "1",
        "bftitle": "Saint-Lô",
        "sector": "0",
        "posx": 3185.409912109375,
        "posy": 5736.951171875,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "553813538",
        "mapid": "1",
        "bftitle": "Macclesfield",
        "sector": "0",
        "posx": 2891.93896484375,
        "posy": 3762.39990234375,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "553890182",
        "mapid": "1",
        "bftitle": "Teramo",
        "sector": "0",
        "posx": 7530.59814453125,
        "posy": 8458.162109375,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "554332029",
        "mapid": "1",
        "bftitle": "Farnworth",
        "sector": "0",
        "posx": 2802.929931640625,
        "posy": 3611.675048828125,
        "gamemap": "203",
        "rotation": 2
    },
    {
        "id": "555148027",
        "mapid": "1",
        "bftitle": "Kastel",
        "sector": "0",
        "posx": 6636.8740234375,
        "posy": 2746.751953125,
        "gamemap": "70439"
    },
    {
        "id": "555386023",
        "mapid": "1",
        "bftitle": "Melle Aérodrome",
        "sector": "0",
        "posx": 3473.35302734375,
        "posy": 6984.81982421875,
        "gamemap": "205",
        "rotation": 1
    },
    {
        "id": "555612621",
        "mapid": "1",
        "bftitle": "Koplik",
        "sector": "0",
        "posx": 9212.388671875,
        "posy": 8637.2119140625,
        "gamemap": "203"
    },
    {
        "id": "555720983",
        "mapid": "1",
        "bftitle": "Magleby",
        "sector": "0",
        "posx": 7171.0078125,
        "posy": 2920.047119140625,
        "gamemap": "203",
        "rotation": 1
    },
    {
        "id": "555833682",
        "mapid": "1",
        "bftitle": "Leiston",
        "sector": "0",
        "posx": 3977.4560546875,
        "posy": 4276.333984375,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "555953309",
        "mapid": "1",
        "bftitle": "Tarvisio",
        "sector": "0",
        "posx": 7497.73388671875,
        "posy": 6863.8330078125,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "556482476",
        "mapid": "1",
        "bftitle": "Desnyanikovo",
        "sector": "0",
        "posx": 12505.75,
        "posy": 2672.01806640625,
        "gamemap": "70439"
    },
    {
        "id": "556560062",
        "mapid": "1",
        "bftitle": "Tarves",
        "sector": "0",
        "posx": 2842.35498046875,
        "posy": 1627.614990234375,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "556862662",
        "mapid": "1",
        "bftitle": "Herscheid",
        "sector": "0",
        "posx": 5784.8828125,
        "posy": 4765.498046875,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "557015393",
        "mapid": "1",
        "bftitle": "Vinay",
        "sector": "0",
        "posx": 5093.6572265625,
        "posy": 7417.455078125,
        "gamemap": "201"
    },
    {
        "id": "557294726",
        "mapid": "1",
        "bftitle": "Kerteminde",
        "sector": "0",
        "posx": 6639.10107421875,
        "posy": 2653.31298828125,
        "gamemap": "70439"
    },
    {
        "id": "557760628",
        "mapid": "1",
        "bftitle": "Genichesk",
        "sector": "0",
        "posx": 13716.900390625,
        "posy": 7004.8349609375,
        "gamemap": "70439"
    },
    {
        "id": "557895854",
        "mapid": "1",
        "bftitle": "Kretinga",
        "sector": "0",
        "posx": 9744.25390625,
        "posy": 2429.93896484375,
        "gamemap": "70439"
    },
    {
        "id": "557991925",
        "mapid": "1",
        "bftitle": "Slonim",
        "sector": "0",
        "posx": 10935.9599609375,
        "posy": 3847.763916015625,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "558316757",
        "mapid": "1",
        "bftitle": "Colnrade",
        "sector": "0",
        "posx": 6001.73388671875,
        "posy": 3972.031005859375,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "558393903",
        "mapid": "1",
        "bftitle": "Kværndrup",
        "sector": "0",
        "posx": 6606.09814453125,
        "posy": 2838.02099609375,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "558982528",
        "mapid": "1",
        "bftitle": "Dovbysh",
        "sector": "0",
        "posx": 11718.9404296875,
        "posy": 5141.63818359375,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "559241321",
        "mapid": "1",
        "bftitle": "Zhodzina",
        "sector": "0",
        "posx": 11820.26953125,
        "posy": 3344.583984375,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "559413873",
        "mapid": "1",
        "bftitle": "Vrigstad",
        "sector": "0",
        "posx": 7755.62109375,
        "posy": 1638.9959716796875,
        "gamemap": "201"
    },
    {
        "id": "559699716",
        "mapid": "1",
        "bftitle": "Wyszków",
        "sector": "0",
        "posx": 9806.7998046875,
        "posy": 4069.743896484375,
        "gamemap": "203",
        "rotation": 2
    },
    {
        "id": "559773538",
        "mapid": "1",
        "bftitle": "Courouvre Aérodrome",
        "sector": "0",
        "posx": 5100.5791015625,
        "posy": 5816.5439453125,
        "gamemap": "204"
    },
    {
        "id": "560347930",
        "mapid": "1",
        "bftitle": "Santa Sofia",
        "sector": "0",
        "posx": 7005.798828125,
        "posy": 7936.453125,
        "gamemap": "70439"
    },
    {
        "id": "560352643",
        "mapid": "1",
        "bftitle": "Bitterfeld-Wolfen",
        "sector": "0",
        "posx": 7127.52978515625,
        "posy": 4555.14404296875,
        "gamemap": "203",
        "rotation": 3
    },
    {
        "id": "560353662",
        "mapid": "1",
        "bftitle": "Tovanovo",
        "sector": "0",
        "posx": 14134.669921875,
        "posy": 1877.2659912109375,
        "gamemap": "201"
    },
    {
        "id": "560721779",
        "mapid": "1",
        "bftitle": "Unterschächen",
        "sector": "0",
        "posx": 6085.5400390625,
        "posy": 6710.14697265625,
        "gamemap": "201"
    },
    {
        "id": "561006969",
        "mapid": "1",
        "bftitle": "Hirson",
        "sector": "0",
        "posx": 4687.64599609375,
        "posy": 5380.828125,
        "gamemap": "203"
    },
    {
        "id": "561013549",
        "mapid": "1",
        "bftitle": "Mühldorf",
        "sector": "0",
        "posx": 7185.4521484375,
        "posy": 6104.76318359375,
        "gamemap": "203",
        "rotation": 1
    },
    {
        "id": "561458771",
        "mapid": "1",
        "bftitle": "Berezhany",
        "sector": "0",
        "posx": 10823.7001953125,
        "posy": 5564.9189453125,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "561789112",
        "mapid": "1",
        "bftitle": "Lemmer",
        "sector": "0",
        "posx": 5188.53076171875,
        "posy": 3965.751953125,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "561856103",
        "mapid": "1",
        "bftitle": "Bons-en-Chablais",
        "sector": "0",
        "posx": 5386.1640625,
        "posy": 6966.1162109375,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "561857235",
        "mapid": "1",
        "bftitle": "Yalta",
        "sector": "0",
        "posx": 13532.759765625,
        "posy": 7741.18701171875,
        "gamemap": "203"
    },
    {
        "id": "562359646",
        "mapid": "1",
        "bftitle": "Leptokaryá",
        "sector": "0",
        "posx": 10128.3603515625,
        "posy": 9481.3564453125,
        "gamemap": "70439"
    },
    {
        "id": "562734964",
        "mapid": "1",
        "bftitle": "Løken",
        "sector": "0",
        "posx": 6876.03076171875,
        "posy": 253.7606964111328,
        "gamemap": "70439"
    },
    {
        "id": "562829856",
        "mapid": "1",
        "bftitle": "Aumont-Aubrac",
        "sector": "0",
        "posx": 4477.85302734375,
        "posy": 7616.666015625,
        "gamemap": "201"
    },
    {
        "id": "562925286",
        "mapid": "1",
        "bftitle": "Andros",
        "sector": "0",
        "posx": 10823.7001953125,
        "posy": 10326.7900390625,
        "gamemap": "70439"
    },
    {
        "id": "563156988",
        "mapid": "1",
        "bftitle": "Palaq",
        "sector": "0",
        "posx": 9277.609375,
        "posy": 8946.427734375,
        "gamemap": "205"
    },
    {
        "id": "563468085",
        "mapid": "1",
        "bftitle": "Cham",
        "sector": "0",
        "posx": 7224.5732421875,
        "posy": 5666.56103515625,
        "gamemap": "201"
    },
    {
        "id": "563556929",
        "mapid": "1",
        "bftitle": "Civray",
        "sector": "0",
        "posx": 3601.52392578125,
        "posy": 7017.1181640625,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "564465756",
        "mapid": "1",
        "bftitle": "Ostrovskoye",
        "sector": "0",
        "posx": 13425.1201171875,
        "posy": 7219.89892578125,
        "gamemap": "70439"
    },
    {
        "id": "564685741",
        "mapid": "1",
        "bftitle": "Kralupy nad Vltavou",
        "sector": "0",
        "posx": 7697.7080078125,
        "posy": 5191.833984375,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "564841413",
        "mapid": "1",
        "bftitle": "Suippes",
        "sector": "0",
        "posx": 4844.205078125,
        "posy": 5710.27099609375,
        "gamemap": "70439"
    },
    {
        "id": "565020580",
        "mapid": "1",
        "bftitle": "Mariupol",
        "sector": "0",
        "posx": 14519.4599609375,
        "posy": 6609.623046875,
        "gamemap": "70439"
    },
    {
        "id": "565083057",
        "mapid": "1",
        "bftitle": "Titu",
        "sector": "0",
        "posx": 10999.580078125,
        "posy": 7646.5830078125,
        "gamemap": "201"
    },
    {
        "id": "565251045",
        "mapid": "1",
        "bftitle": "Égletons",
        "sector": "0",
        "posx": 4116.15380859375,
        "posy": 7331.9130859375,
        "gamemap": "201"
    },
    {
        "id": "565280836",
        "mapid": "1",
        "bftitle": "Novopokrovka",
        "sector": "0",
        "posx": 13659.08984375,
        "posy": 6187.73681640625,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "566317896",
        "mapid": "1",
        "bftitle": "Jüterbog Flugplatz",
        "sector": "0",
        "posx": 7337.39013671875,
        "posy": 4304.69482421875,
        "gamemap": "205"
    },
    {
        "id": "566415287",
        "mapid": "1",
        "bftitle": "Murau",
        "sector": "0",
        "posx": 7668.49609375,
        "posy": 6602.93603515625,
        "gamemap": "201"
    },
    {
        "id": "566545192",
        "mapid": "1",
        "bftitle": "Bayonne",
        "sector": "0",
        "posx": 3090.553955078125,
        "posy": 8127.93701171875,
        "gamemap": "70439"
    },
    {
        "id": "566618860",
        "mapid": "1",
        "bftitle": "Skjold",
        "sector": "0",
        "posx": 5152.69677734375,
        "posy": 424.8233947753906,
        "gamemap": "203",
        "rotation": 1
    },
    {
        "id": "567009886",
        "mapid": "1",
        "bftitle": "Braås",
        "sector": "0",
        "posx": 7926.61181640625,
        "posy": 1793.43603515625,
        "gamemap": "70439"
    },
    {
        "id": "567100094",
        "mapid": "1",
        "bftitle": "Volosovo",
        "sector": "0",
        "posx": 12159.7998046875,
        "posy": 456.6206970214844,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "567257777",
        "mapid": "1",
        "bftitle": "Lesnoye",
        "sector": "0",
        "posx": 13893.099609375,
        "posy": 1121.259033203125,
        "gamemap": "201"
    },
    {
        "id": "567834468",
        "mapid": "1",
        "bftitle": "Senta",
        "sector": "0",
        "posx": 9400.2353515625,
        "posy": 7110.50390625,
        "gamemap": "70439"
    },
    {
        "id": "567844657",
        "mapid": "1",
        "bftitle": "Saint-Romain-de-Benet",
        "sector": "0",
        "posx": 3266.554931640625,
        "posy": 7210.451171875,
        "gamemap": "205"
    },
    {
        "id": "568602121",
        "mapid": "1",
        "bftitle": "Rotenburg",
        "sector": "0",
        "posx": 6374.2080078125,
        "posy": 4851.6982421875,
        "gamemap": "203",
        "rotation": 1
    },
    {
        "id": "568692461",
        "mapid": "1",
        "bftitle": "Škleriai",
        "sector": "0",
        "posx": 10623.400390625,
        "posy": 3402.48095703125,
        "gamemap": "201"
    },
    {
        "id": "568906194",
        "mapid": "1",
        "bftitle": "Olofström",
        "sector": "0",
        "posx": 7775.36376953125,
        "posy": 2217.573974609375,
        "gamemap": "70439"
    },
    {
        "id": "569432058",
        "mapid": "1",
        "bftitle": "Dingolfing",
        "sector": "0",
        "posx": 7177.0322265625,
        "posy": 5928.64599609375,
        "gamemap": "203"
    },
    {
        "id": "569476171",
        "mapid": "1",
        "bftitle": "Donauwörth",
        "sector": "0",
        "posx": 6674.7490234375,
        "posy": 5894.84521484375,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "569551098",
        "mapid": "1",
        "bftitle": "Altona",
        "sector": "0",
        "posx": 6403.57177734375,
        "posy": 3605.552978515625,
        "gamemap": "203"
    },
    {
        "id": "569554973",
        "mapid": "1",
        "bftitle": "Dniprorudne",
        "sector": "0",
        "posx": 13767.650390625,
        "posy": 6485.02880859375,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "569568242",
        "mapid": "1",
        "bftitle": "Kendal",
        "sector": "0",
        "posx": 2709.634033203125,
        "posy": 3229.3291015625,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "570113640",
        "mapid": "1",
        "bftitle": "Vienna",
        "sector": "0",
        "posx": 8314.150390625,
        "posy": 6121.69384765625,
        "gamemap": "201"
    },
    {
        "id": "570145649",
        "mapid": "1",
        "bftitle": "Lenzen",
        "sector": "0",
        "posx": 6878.541015625,
        "posy": 3845.376953125,
        "gamemap": "203",
        "rotation": 3
    },
    {
        "id": "570234720",
        "mapid": "1",
        "bftitle": "Saint-Fiacre",
        "sector": "0",
        "posx": 2617.781982421875,
        "posy": 6009.669921875,
        "gamemap": "201"
    },
    {
        "id": "570380914",
        "mapid": "1",
        "bftitle": "Chavusi",
        "sector": "0",
        "posx": 12593.7197265625,
        "posy": 3489.419921875,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "570429444",
        "mapid": "1",
        "bftitle": "Rimforsa",
        "sector": "0",
        "posx": 8113.18896484375,
        "posy": 1204.095947265625,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "570639759",
        "mapid": "1",
        "bftitle": "Sainte-Fortunade",
        "sector": "0",
        "posx": 4034.39501953125,
        "posy": 7413.89208984375,
        "gamemap": "201"
    },
    {
        "id": "570718436",
        "mapid": "1",
        "bftitle": "Pukhovichi",
        "sector": "0",
        "posx": 11794.9404296875,
        "posy": 3628.991943359375,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "570750790",
        "mapid": "1",
        "bftitle": "Cournon-dAuvergne",
        "sector": "0",
        "posx": 4451.88818359375,
        "posy": 7191.8798828125,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "570761407",
        "mapid": "1",
        "bftitle": "Stendal",
        "sector": "0",
        "posx": 6993.43212890625,
        "posy": 4089.446044921875,
        "gamemap": "70439"
    },
    {
        "id": "570783860",
        "mapid": "1",
        "bftitle": "Stafford",
        "sector": "0",
        "posx": 2894.659912109375,
        "posy": 3985.77099609375,
        "gamemap": "70439"
    },
    {
        "id": "571022200",
        "mapid": "1",
        "bftitle": "Policoro",
        "sector": "0",
        "posx": 8401.6884765625,
        "posy": 9424.4775390625,
        "gamemap": "70439"
    },
    {
        "id": "571775925",
        "mapid": "1",
        "bftitle": "Seghill",
        "sector": "0",
        "posx": 3053.827880859375,
        "posy": 2875.93896484375,
        "gamemap": "203",
        "rotation": 2
    },
    {
        "id": "571799251",
        "mapid": "1",
        "bftitle": "Gosberton Airfield",
        "sector": "0",
        "posx": 3467.826904296875,
        "posy": 3954.531982421875,
        "gamemap": "205"
    },
    {
        "id": "572290604",
        "mapid": "1",
        "bftitle": "Anykščiai",
        "sector": "0",
        "posx": 10873.330078125,
        "posy": 2613.431884765625,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "572374068",
        "mapid": "1",
        "bftitle": "Ełk",
        "sector": "0",
        "posx": 10070.759765625,
        "posy": 3480.197021484375,
        "gamemap": "70439"
    },
    {
        "id": "573037836",
        "mapid": "1",
        "bftitle": "Cholet",
        "sector": "0",
        "posx": 3256.094970703125,
        "posy": 6621.9638671875,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "573163110",
        "mapid": "1",
        "bftitle": "Exeter",
        "sector": "0",
        "posx": 2471.26708984375,
        "posy": 5001.64990234375,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "573747382",
        "mapid": "1",
        "bftitle": "Penzance",
        "sector": "0",
        "posx": 1871.4420166015625,
        "posy": 5306.65185546875,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "574009871",
        "mapid": "1",
        "bftitle": "Haslev",
        "sector": "0",
        "posx": 7021.98486328125,
        "posy": 2718.56591796875,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "574123209",
        "mapid": "1",
        "bftitle": "Izabelin",
        "sector": "0",
        "posx": 9608.4697265625,
        "posy": 4211.3232421875,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "574162284",
        "mapid": "1",
        "bftitle": "Noyen-sur-Sarthe",
        "sector": "0",
        "posx": 3485.958984375,
        "posy": 6270.31689453125,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "574803121",
        "mapid": "1",
        "bftitle": "Vercelli",
        "sector": "0",
        "posx": 5983.13720703125,
        "posy": 7366.2509765625,
        "gamemap": "201"
    },
    {
        "id": "574887822",
        "mapid": "1",
        "bftitle": "Yel'nya",
        "sector": "0",
        "posx": 13242.1298828125,
        "posy": 3101.4541015625,
        "gamemap": "70439"
    },
    {
        "id": "575096171",
        "mapid": "1",
        "bftitle": "Wigtown",
        "sector": "0",
        "posx": 2212.10205078125,
        "posy": 2953.635986328125,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "575863124",
        "mapid": "1",
        "bftitle": "Svanskog",
        "sector": "0",
        "posx": 7193.791015625,
        "posy": 609.7393188476562,
        "gamemap": "70439"
    },
    {
        "id": "576121505",
        "mapid": "1",
        "bftitle": "Lancenigo-Villorba",
        "sector": "0",
        "posx": 7107.89404296875,
        "posy": 7201.4111328125,
        "gamemap": "203"
    },
    {
        "id": "576217447",
        "mapid": "1",
        "bftitle": "Mangalia",
        "sector": "0",
        "posx": 11893.6201171875,
        "posy": 7996.75,
        "gamemap": "70439"
    },
    {
        "id": "576302689",
        "mapid": "1",
        "bftitle": "Temple",
        "sector": "0",
        "posx": 2632.56494140625,
        "posy": 2494.322998046875,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "576326345",
        "mapid": "1",
        "bftitle": "Chern'",
        "sector": "0",
        "posx": 14335.7197265625,
        "posy": 3667.388916015625,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "576644962",
        "mapid": "1",
        "bftitle": "Mariazell",
        "sector": "0",
        "posx": 8004.6982421875,
        "posy": 6313.76416015625,
        "gamemap": "201"
    },
    {
        "id": "576878770",
        "mapid": "1",
        "bftitle": "Oslo",
        "sector": "0",
        "posx": 6652.39208984375,
        "posy": 185.13479614257812,
        "gamemap": "201"
    },
    {
        "id": "577809776",
        "mapid": "1",
        "bftitle": "Wągrowiec",
        "sector": "0",
        "posx": 8556.724609375,
        "posy": 3984.202880859375,
        "gamemap": "70439"
    },
    {
        "id": "578101829",
        "mapid": "1",
        "bftitle": "Mikhaylovka",
        "sector": "0",
        "posx": 12119.8798828125,
        "posy": 3960.56103515625,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "578188573",
        "mapid": "1",
        "bftitle": "Kungsör",
        "sector": "0",
        "posx": 8233.388671875,
        "posy": 471.4621887207031,
        "gamemap": "203",
        "rotation": 2
    },
    {
        "id": "578294543",
        "mapid": "1",
        "bftitle": "Starominskaya",
        "sector": "0",
        "posx": 14961.6201171875,
        "posy": 6853.39404296875,
        "gamemap": "70439"
    },
    {
        "id": "578905468",
        "mapid": "1",
        "bftitle": "Viborg",
        "sector": "0",
        "posx": 6271.02490234375,
        "posy": 2123.833984375,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "579079628",
        "mapid": "1",
        "bftitle": "Ásos",
        "sector": "0",
        "posx": 9536.1572265625,
        "posy": 10122.6103515625,
        "gamemap": "70439"
    },
    {
        "id": "579124929",
        "mapid": "1",
        "bftitle": "Länghem",
        "sector": "0",
        "posx": 7394.09521484375,
        "posy": 1501.7330322265625,
        "gamemap": "201"
    },
    {
        "id": "579205374",
        "mapid": "1",
        "bftitle": "Gönen",
        "sector": "0",
        "posx": 11621.2001953125,
        "posy": 9464.15625,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "579425641",
        "mapid": "1",
        "bftitle": "Prien am Chiemsee",
        "sector": "0",
        "posx": 7134.06005859375,
        "posy": 6277.29296875,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "579527092",
        "mapid": "1",
        "bftitle": "Chanteloup",
        "sector": "0",
        "posx": 3380.30810546875,
        "posy": 6767.31494140625,
        "gamemap": "201"
    },
    {
        "id": "579560504",
        "mapid": "1",
        "bftitle": "Płońsk",
        "sector": "0",
        "posx": 9487.6748046875,
        "posy": 4074.3291015625,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "579824834",
        "mapid": "1",
        "bftitle": "Konobeyevo",
        "sector": "0",
        "posx": 14848.150390625,
        "posy": 2674.779052734375,
        "gamemap": "70439"
    },
    {
        "id": "579830208",
        "mapid": "1",
        "bftitle": "Havelte",
        "sector": "0",
        "posx": 5353.51708984375,
        "posy": 4038.990966796875,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "580054428",
        "mapid": "1",
        "bftitle": "Visoko",
        "sector": "0",
        "posx": 8843.53515625,
        "posy": 7919.3701171875,
        "gamemap": "204"
    },
    {
        "id": "580148555",
        "mapid": "1",
        "bftitle": "Darmstadt",
        "sector": "0",
        "posx": 6056.8818359375,
        "posy": 5431.908203125,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "580872242",
        "mapid": "1",
        "bftitle": "Morgex",
        "sector": "0",
        "posx": 5579.01220703125,
        "posy": 7182.90576171875,
        "gamemap": "201"
    },
    {
        "id": "581174961",
        "mapid": "1",
        "bftitle": "Preveza",
        "sector": "0",
        "posx": 9597.591796875,
        "posy": 9903.845703125,
        "gamemap": "70439"
    },
    {
        "id": "582108380",
        "mapid": "1",
        "bftitle": "Hlusk",
        "sector": "0",
        "posx": 11923.2802734375,
        "posy": 3937.9619140625,
        "gamemap": "70439"
    },
    {
        "id": "582425952",
        "mapid": "1",
        "bftitle": "Apt",
        "sector": "0",
        "posx": 5097.919921875,
        "posy": 7962.64208984375,
        "gamemap": "70439"
    },
    {
        "id": "582660094",
        "mapid": "1",
        "bftitle": "Gilleleje",
        "sector": "0",
        "posx": 7112.0419921875,
        "posy": 2333.60400390625,
        "gamemap": "70439"
    },
    {
        "id": "583113702",
        "mapid": "1",
        "bftitle": "Vigevano",
        "sector": "0",
        "posx": 6110.49609375,
        "posy": 7369.42578125,
        "gamemap": "201"
    },
    {
        "id": "583637309",
        "mapid": "1",
        "bftitle": "Popovo",
        "sector": "0",
        "posx": 12429.26953125,
        "posy": 329.6968078613281,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "583739946",
        "mapid": "1",
        "bftitle": "Cahul",
        "sector": "0",
        "posx": 11779.6298828125,
        "posy": 7118.9912109375,
        "gamemap": "70439"
    },
    {
        "id": "583763868",
        "mapid": "1",
        "bftitle": "Yukhnov",
        "sector": "0",
        "posx": 13841.8701171875,
        "posy": 3016.8330078125,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "584029208",
        "mapid": "1",
        "bftitle": "Khodosy",
        "sector": "0",
        "posx": 12742.099609375,
        "posy": 3430.944091796875,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "584187496",
        "mapid": "1",
        "bftitle": "Beets",
        "sector": "0",
        "posx": 4974.15478515625,
        "posy": 4091.4130859375,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "584254358",
        "mapid": "1",
        "bftitle": "Palkino",
        "sector": "0",
        "posx": 11726.3095703125,
        "posy": 1534.2760009765625,
        "gamemap": "70439"
    },
    {
        "id": "584696094",
        "mapid": "1",
        "bftitle": "Lelle",
        "sector": "0",
        "posx": 10844.5400390625,
        "posy": 793.1220092773438,
        "gamemap": "70439"
    },
    {
        "id": "585204628",
        "mapid": "1",
        "bftitle": "Ösmo",
        "sector": "0",
        "posx": 8762.029296875,
        "posy": 724.6525268554688,
        "gamemap": "70439"
    },
    {
        "id": "585276232",
        "mapid": "1",
        "bftitle": "Torre Lapillo",
        "sector": "0",
        "posx": 8747.2197265625,
        "posy": 9393.6435546875,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "585451088",
        "mapid": "1",
        "bftitle": "Grottammare",
        "sector": "0",
        "posx": 7571.19921875,
        "posy": 8352.3212890625,
        "gamemap": "70439"
    },
    {
        "id": "585619944",
        "mapid": "1",
        "bftitle": "Ödeshög",
        "sector": "0",
        "posx": 7810.22314453125,
        "posy": 1151.8780517578125,
        "gamemap": "70439"
    },
    {
        "id": "586070667",
        "mapid": "1",
        "bftitle": "Agiá",
        "sector": "0",
        "posx": 10186.25,
        "posy": 9612.673828125,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "586292487",
        "mapid": "1",
        "bftitle": "Bagni di Vinadio",
        "sector": "0",
        "posx": 5588.9560546875,
        "posy": 7795.9677734375,
        "gamemap": "201"
    },
    {
        "id": "586762416",
        "mapid": "1",
        "bftitle": "Motokhovo",
        "sector": "0",
        "posx": 13006.51953125,
        "posy": 410.9219055175781,
        "gamemap": "203",
        "rotation": 1
    },
    {
        "id": "587114729",
        "mapid": "1",
        "bftitle": "Chojna",
        "sector": "0",
        "posx": 7744.27587890625,
        "posy": 3908.138916015625,
        "gamemap": "70439"
    },
    {
        "id": "587176973",
        "mapid": "1",
        "bftitle": "Samokov",
        "sector": "0",
        "posx": 10419.0302734375,
        "posy": 8587.9833984375,
        "gamemap": "203",
        "rotation": 3
    },
    {
        "id": "587282960",
        "mapid": "1",
        "bftitle": "Rokiškis",
        "sector": "0",
        "posx": 11014.23046875,
        "posy": 2382.0849609375,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "587321496",
        "mapid": "1",
        "bftitle": "Zambrów",
        "sector": "0",
        "posx": 10035.1396484375,
        "posy": 3897.548095703125,
        "gamemap": "70439"
    },
    {
        "id": "587467116",
        "mapid": "1",
        "bftitle": "Kuźnica",
        "sector": "0",
        "posx": 10447.3798828125,
        "posy": 3638.304931640625,
        "gamemap": "203",
        "rotation": 2
    },
    {
        "id": "587602649",
        "mapid": "1",
        "bftitle": "Spittal an der Drau",
        "sector": "0",
        "posx": 7472.26318359375,
        "posy": 6737.2490234375,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "587628820",
        "mapid": "1",
        "bftitle": "Sokolac",
        "sector": "0",
        "posx": 9026.0751953125,
        "posy": 7940.1708984375,
        "gamemap": "201"
    },
    {
        "id": "587837717",
        "mapid": "1",
        "bftitle": "Tomaszów Lubelski",
        "sector": "0",
        "posx": 10378.9697265625,
        "posy": 5107.19580078125,
        "gamemap": "70439"
    },
    {
        "id": "588312895",
        "mapid": "1",
        "bftitle": "Beroun",
        "sector": "0",
        "posx": 7619.2041015625,
        "posy": 5331.85986328125,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "588385952",
        "mapid": "1",
        "bftitle": "Skopje",
        "sector": "0",
        "posx": 9797.185546875,
        "posy": 8723.6162109375,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "588604643",
        "mapid": "1",
        "bftitle": "La Courtine",
        "sector": "0",
        "posx": 4179.451171875,
        "posy": 7206.85986328125,
        "gamemap": "201"
    },
    {
        "id": "588784175",
        "mapid": "1",
        "bftitle": "Vrbas",
        "sector": "0",
        "posx": 9272.3173828125,
        "posy": 7261.1591796875,
        "gamemap": "70439"
    },
    {
        "id": "588801292",
        "mapid": "1",
        "bftitle": "Gorodenka",
        "sector": "0",
        "posx": 11669.0498046875,
        "posy": 634.3740234375,
        "gamemap": "201"
    },
    {
        "id": "589006205",
        "mapid": "1",
        "bftitle": "Helsinki",
        "sector": "0",
        "posx": 10824.3203125,
        "posy": 33.06241989135742,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "589432178",
        "mapid": "1",
        "bftitle": "Blois",
        "sector": "0",
        "posx": 3900.4599609375,
        "posy": 6391.544921875,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "589438972",
        "mapid": "1",
        "bftitle": "Montélimar",
        "sector": "0",
        "posx": 4907.662109375,
        "posy": 7684.57080078125,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "589504644",
        "mapid": "1",
        "bftitle": "Zagreb",
        "sector": "0",
        "posx": 8198.630859375,
        "posy": 7158.43798828125,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "589830065",
        "mapid": "1",
        "bftitle": "Wriezen",
        "sector": "0",
        "posx": 7658.18115234375,
        "posy": 4026.89697265625,
        "gamemap": "203"
    },
    {
        "id": "590211665",
        "mapid": "1",
        "bftitle": "Redcar",
        "sector": "0",
        "posx": 3226.45703125,
        "posy": 3115.342041015625,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "590613969",
        "mapid": "1",
        "bftitle": "Fălești",
        "sector": "0",
        "posx": 11637.3798828125,
        "posy": 6401.203125,
        "gamemap": "203"
    },
    {
        "id": "590643984",
        "mapid": "1",
        "bftitle": "Vrdnik",
        "sector": "0",
        "posx": 9316.70703125,
        "posy": 7450.02783203125,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "591149649",
        "mapid": "1",
        "bftitle": "Saumur",
        "sector": "0",
        "posx": 3490.597900390625,
        "posy": 6535.1220703125,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "591290069",
        "mapid": "1",
        "bftitle": "Peaboda",
        "sector": "0",
        "posx": 7711.65087890625,
        "posy": 2054.19189453125,
        "gamemap": "201"
    },
    {
        "id": "591550748",
        "mapid": "1",
        "bftitle": "Székesfehérvár",
        "sector": "0",
        "posx": 8911.6240234375,
        "posy": 6568.47412109375,
        "gamemap": "70439"
    },
    {
        "id": "591910964",
        "mapid": "1",
        "bftitle": "Kelvedon",
        "sector": "0",
        "posx": 3721.885986328125,
        "posy": 4451.93798828125,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "592198527",
        "mapid": "1",
        "bftitle": "Ziltendorf",
        "sector": "0",
        "posx": 7801.77197265625,
        "posy": 4276.34716796875,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "592762605",
        "mapid": "1",
        "bftitle": "Lukhovitsy",
        "sector": "0",
        "posx": 14960.0595703125,
        "posy": 2897.75390625,
        "gamemap": "70439"
    },
    {
        "id": "593883867",
        "mapid": "1",
        "bftitle": "Reading",
        "sector": "0",
        "posx": 3308.699951171875,
        "posy": 4632.90283203125,
        "gamemap": "70439"
    },
    {
        "id": "594467003",
        "mapid": "1",
        "bftitle": "Svodna",
        "sector": "0",
        "posx": 8363.4306640625,
        "posy": 7485.162109375,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "594496059",
        "mapid": "1",
        "bftitle": "Saint-Caprais-de-Bordeaux",
        "sector": "0",
        "posx": 3388.4189453125,
        "posy": 7605.94091796875,
        "gamemap": "203",
        "rotation": 3
    },
    {
        "id": "594647497",
        "mapid": "1",
        "bftitle": "Lechainá",
        "sector": "0",
        "posx": 9748.896484375,
        "posy": 10289.3798828125,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "594966011",
        "mapid": "1",
        "bftitle": "Kemnay",
        "sector": "0",
        "posx": 2774.907958984375,
        "posy": 1704.5870361328125,
        "gamemap": "203",
        "rotation": 3
    },
    {
        "id": "595345989",
        "mapid": "1",
        "bftitle": "Neman",
        "sector": "0",
        "posx": 9971.591796875,
        "posy": 2869.702880859375,
        "gamemap": "70439"
    },
    {
        "id": "595391902",
        "mapid": "1",
        "bftitle": "Guillos",
        "sector": "0",
        "posx": 3367.89990234375,
        "posy": 7688.73291015625,
        "gamemap": "70439"
    },
    {
        "id": "595482974",
        "mapid": "1",
        "bftitle": "Escalquens",
        "sector": "0",
        "posx": 3971.950927734375,
        "posy": 8111.2451171875,
        "gamemap": "203",
        "rotation": 3
    },
    {
        "id": "595529827",
        "mapid": "1",
        "bftitle": "Staritsa",
        "sector": "0",
        "posx": 13755.6103515625,
        "posy": 2094.7919921875,
        "gamemap": "201"
    },
    {
        "id": "595573744",
        "mapid": "1",
        "bftitle": "Bol’shaya Izhora",
        "sector": "0",
        "posx": 12184.9501953125,
        "posy": 187.6154022216797,
        "gamemap": "70439"
    },
    {
        "id": "595634117",
        "mapid": "1",
        "bftitle": "Cherbourg Aérodrome",
        "sector": "0",
        "posx": 3125.739013671875,
        "posy": 5488.6279296875,
        "gamemap": "205",
        "rotation": 1
    },
    {
        "id": "595846634",
        "mapid": "1",
        "bftitle": "Sadove",
        "sector": "0",
        "posx": 12096.6796875,
        "posy": 7070.93701171875,
        "gamemap": "203",
        "rotation": 1
    },
    {
        "id": "595985368",
        "mapid": "1",
        "bftitle": "North Queensferry",
        "sector": "0",
        "posx": 2511.43603515625,
        "posy": 2341.56005859375,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "596383282",
        "mapid": "1",
        "bftitle": "Sandovo",
        "sector": "0",
        "posx": 14188.650390625,
        "posy": 1022.0910034179688,
        "gamemap": "201"
    },
    {
        "id": "596625351",
        "mapid": "1",
        "bftitle": "Paderburg Airfield",
        "sector": "0",
        "posx": 15645.7900390625,
        "posy": 15511.7197265625,
        "gamemap": "205"
    },
    {
        "id": "596677636",
        "mapid": "1",
        "bftitle": "Ternopil",
        "sector": "0",
        "posx": 11020.75,
        "posy": 5516.7861328125,
        "gamemap": "201"
    },
    {
        "id": "596924007",
        "mapid": "1",
        "bftitle": "Compiègne",
        "sector": "0",
        "posx": 4314.4248046875,
        "posy": 5597.68896484375,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "597700229",
        "mapid": "1",
        "bftitle": "Kulykivka",
        "sector": "0",
        "posx": 12791.5498046875,
        "posy": 4673.740234375,
        "gamemap": "201"
    },
    {
        "id": "597919806",
        "mapid": "1",
        "bftitle": "Konin",
        "sector": "0",
        "posx": 8864.978515625,
        "posy": 4268.01123046875,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "598079524",
        "mapid": "1",
        "bftitle": "Hultsfred",
        "sector": "0",
        "posx": 8159.23095703125,
        "posy": 1563.259033203125,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "598590407",
        "mapid": "1",
        "bftitle": "Matovka",
        "sector": "0",
        "posx": 11921.509765625,
        "posy": 341.91241455078125,
        "gamemap": "70439"
    },
    {
        "id": "599132782",
        "mapid": "1",
        "bftitle": "Săveni",
        "sector": "0",
        "posx": 11390.419921875,
        "posy": 6235.9091796875,
        "gamemap": "201"
    },
    {
        "id": "599726240",
        "mapid": "1",
        "bftitle": "Gourdon",
        "sector": "0",
        "posx": 3920.52001953125,
        "posy": 7611.97802734375,
        "gamemap": "201"
    },
    {
        "id": "599949251",
        "mapid": "1",
        "bftitle": "Harwich",
        "sector": "0",
        "posx": 3915.27099609375,
        "posy": 4379.42919921875,
        "gamemap": "70439"
    },
    {
        "id": "599954158",
        "mapid": "1",
        "bftitle": "Kirovohrad",
        "sector": "0",
        "posx": 12971.26953125,
        "posy": 5986.31201171875,
        "gamemap": "70439"
    },
    {
        "id": "600102024",
        "mapid": "1",
        "bftitle": "Katterød",
        "sector": "0",
        "posx": 6536.2958984375,
        "posy": 2829.18505859375,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "600262839",
        "mapid": "1",
        "bftitle": "Malyy Cherevach",
        "sector": "0",
        "posx": 12352.8603515625,
        "posy": 4747.755859375,
        "gamemap": "70439"
    },
    {
        "id": "601874681",
        "mapid": "1",
        "bftitle": "Bridgwater",
        "sector": "0",
        "posx": 2634.594970703125,
        "posy": 4789.3291015625,
        "gamemap": "203"
    },
    {
        "id": "602230945",
        "mapid": "1",
        "bftitle": "Lohne",
        "sector": "0",
        "posx": 5901.0322265625,
        "posy": 4065.573974609375,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "602427292",
        "mapid": "1",
        "bftitle": "Verona",
        "sector": "0",
        "posx": 6734.880859375,
        "posy": 7320.751953125,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "602829536",
        "mapid": "1",
        "bftitle": "Manziana",
        "sector": "0",
        "posx": 7064.39208984375,
        "posy": 8671.1796875,
        "gamemap": "203"
    },
    {
        "id": "602918977",
        "mapid": "1",
        "bftitle": "Erfelek",
        "sector": "0",
        "posx": 13750.599609375,
        "posy": 8770.1259765625,
        "gamemap": "70439"
    },
    {
        "id": "603670568",
        "mapid": "1",
        "bftitle": "Alessandria",
        "sector": "0",
        "posx": 6038.884765625,
        "posy": 7538.77001953125,
        "gamemap": "70439"
    },
    {
        "id": "603827443",
        "mapid": "1",
        "bftitle": "Širvintos",
        "sector": "0",
        "posx": 10828.58984375,
        "posy": 2859.970947265625,
        "gamemap": "201"
    },
    {
        "id": "603918618",
        "mapid": "1",
        "bftitle": "Vesoul",
        "sector": "0",
        "posx": 5322.65185546875,
        "posy": 6375.05517578125,
        "gamemap": "203",
        "rotation": 1
    },
    {
        "id": "604527395",
        "mapid": "1",
        "bftitle": "Crawley",
        "sector": "0",
        "posx": 3461.368896484375,
        "posy": 4814.10205078125,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "604816674",
        "mapid": "1",
        "bftitle": "Vostryakovo",
        "sector": "0",
        "posx": 14597.7197265625,
        "posy": 2679.162109375,
        "gamemap": "203"
    },
    {
        "id": "604889590",
        "mapid": "1",
        "bftitle": "Leirvik",
        "sector": "0",
        "posx": 5332.4228515625,
        "posy": 523.1121826171875,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "605205656",
        "mapid": "1",
        "bftitle": "Tuplice Lotnisko",
        "sector": "0",
        "posx": 7861.8720703125,
        "posy": 4530.0029296875,
        "gamemap": "204"
    },
    {
        "id": "605511461",
        "mapid": "1",
        "bftitle": "Aix-en-Diois",
        "sector": "0",
        "posx": 5116.4658203125,
        "posy": 7618.47998046875,
        "gamemap": "203",
        "rotation": 2
    },
    {
        "id": "605777657",
        "mapid": "1",
        "bftitle": "Baldone",
        "sector": "0",
        "posx": 10665.740234375,
        "posy": 1968.54296875,
        "gamemap": "70439"
    },
    {
        "id": "606161043",
        "mapid": "1",
        "bftitle": "Taraclia",
        "sector": "0",
        "posx": 11918.7001953125,
        "posy": 7122.1728515625,
        "gamemap": "203"
    },
    {
        "id": "606185102",
        "mapid": "1",
        "bftitle": "Kapfenberg",
        "sector": "0",
        "posx": 7997.93408203125,
        "posy": 6457.59619140625,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "606659300",
        "mapid": "1",
        "bftitle": "Rijeka",
        "sector": "0",
        "posx": 7738.76611328125,
        "posy": 7357.2548828125,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "607394324",
        "mapid": "1",
        "bftitle": "Dunakeszi",
        "sector": "0",
        "posx": 9123.52734375,
        "posy": 6360.26513671875,
        "gamemap": "70439"
    },
    {
        "id": "608220226",
        "mapid": "1",
        "bftitle": "Toruń",
        "sector": "0",
        "posx": 8966.6728515625,
        "posy": 3883.68798828125,
        "gamemap": "70439"
    },
    {
        "id": "608525025",
        "mapid": "1",
        "bftitle": "Pazin",
        "sector": "0",
        "posx": 7600.26220703125,
        "posy": 7400.3828125,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "608586598",
        "mapid": "1",
        "bftitle": "Åsbro",
        "sector": "0",
        "posx": 7926.61181640625,
        "posy": 715.1019287109375,
        "gamemap": "201"
    },
    {
        "id": "608862401",
        "mapid": "1",
        "bftitle": "Huta",
        "sector": "0",
        "posx": 13143.830078125,
        "posy": 4552.69287109375,
        "gamemap": "70439"
    },
    {
        "id": "608912102",
        "mapid": "1",
        "bftitle": "Czyże",
        "sector": "0",
        "posx": 10381.0400390625,
        "posy": 4002.319091796875,
        "gamemap": "201"
    },
    {
        "id": "608991041",
        "mapid": "1",
        "bftitle": "Vordingborg",
        "sector": "0",
        "posx": 7006.35498046875,
        "posy": 2881.60107421875,
        "gamemap": "70439"
    },
    {
        "id": "609386359",
        "mapid": "1",
        "bftitle": "Ciechanów",
        "sector": "0",
        "posx": 9559.328125,
        "posy": 3948.527099609375,
        "gamemap": "70439"
    },
    {
        "id": "609504239",
        "mapid": "1",
        "bftitle": "Florennes Aérodrome",
        "sector": "0",
        "posx": 4885.9658203125,
        "posy": 5206.955078125,
        "gamemap": "204",
        "rotation": 2
    },
    {
        "id": "609583842",
        "mapid": "1",
        "bftitle": "Xilópolis",
        "sector": "0",
        "posx": 10309.580078125,
        "posy": 9144.865234375,
        "gamemap": "203"
    },
    {
        "id": "609726295",
        "mapid": "1",
        "bftitle": "Newburgh",
        "sector": "0",
        "posx": 2897.925048828125,
        "posy": 1673.4549560546875,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "610037909",
        "mapid": "1",
        "bftitle": "Saulkrasti",
        "sector": "0",
        "posx": 10671.6796875,
        "posy": 1686.9580078125,
        "gamemap": "70439"
    },
    {
        "id": "610042392",
        "mapid": "1",
        "bftitle": "Jönköping",
        "sector": "0",
        "posx": 7664.60888671875,
        "posy": 1401.5150146484375,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "610225227",
        "mapid": "1",
        "bftitle": "Santa Eufemia Lamezia",
        "sector": "0",
        "posx": 8279.015625,
        "posy": 9917.640625,
        "gamemap": "203",
        "rotation": 3
    },
    {
        "id": "610314300",
        "mapid": "1",
        "bftitle": "Suurkylä",
        "sector": "0",
        "posx": 11416.650390625,
        "posy": 92.5068130493164,
        "gamemap": "70439"
    },
    {
        "id": "610435732",
        "mapid": "1",
        "bftitle": "Vire",
        "sector": "0",
        "posx": 3255.576904296875,
        "posy": 5848.89599609375,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "610544449",
        "mapid": "1",
        "bftitle": "Babayevo",
        "sector": "0",
        "posx": 14049.2197265625,
        "posy": 488.19970703125,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "610705148",
        "mapid": "1",
        "bftitle": "Landsberg am Lech",
        "sector": "0",
        "posx": 6705.0908203125,
        "posy": 6192.5888671875,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "610742169",
        "mapid": "1",
        "bftitle": "Kesova Gora",
        "sector": "0",
        "posx": 14446.4501953125,
        "posy": 1510.760986328125,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "610850618",
        "mapid": "1",
        "bftitle": "Sala Consilina",
        "sector": "0",
        "posx": 8086.5322265625,
        "posy": 9353.724609375,
        "gamemap": "70439"
    },
    {
        "id": "610958998",
        "mapid": "1",
        "bftitle": "Avignon",
        "sector": "0",
        "posx": 4924.6591796875,
        "posy": 7936.001953125,
        "gamemap": "70439"
    },
    {
        "id": "610979643",
        "mapid": "1",
        "bftitle": "Lisne",
        "sector": "0",
        "posx": 14148.2998046875,
        "posy": 5264.27099609375,
        "gamemap": "203"
    },
    {
        "id": "611170857",
        "mapid": "1",
        "bftitle": "Hästveda",
        "sector": "0",
        "posx": 7599.28515625,
        "posy": 2223.22900390625,
        "gamemap": "70439"
    },
    {
        "id": "611389826",
        "mapid": "1",
        "bftitle": "Vidzyewshchyna",
        "sector": "0",
        "posx": 11430.08984375,
        "posy": 3278.985107421875,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "611632350",
        "mapid": "1",
        "bftitle": "Dnipropetrovsk",
        "sector": "0",
        "posx": 13769.6396484375,
        "posy": 6014.4580078125,
        "gamemap": "70439"
    },
    {
        "id": "611878952",
        "mapid": "1",
        "bftitle": "Horodnytsya",
        "sector": "0",
        "posx": 11522.349609375,
        "posy": 4939.9921875,
        "gamemap": "70439"
    },
    {
        "id": "612272041",
        "mapid": "1",
        "bftitle": "Gundby",
        "sector": "0",
        "posx": 9597.4453125,
        "posy": 24.86610984802246,
        "gamemap": "203",
        "rotation": 1
    },
    {
        "id": "612632957",
        "mapid": "1",
        "bftitle": "Svishtov",
        "sector": "0",
        "posx": 10945.9697265625,
        "posy": 8070.42919921875,
        "gamemap": "203"
    },
    {
        "id": "613123983",
        "mapid": "1",
        "bftitle": "Kardzhali",
        "sector": "0",
        "posx": 10950.7197265625,
        "posy": 8860.8623046875,
        "gamemap": "201"
    },
    {
        "id": "613610634",
        "mapid": "1",
        "bftitle": "Nea Stira",
        "sector": "0",
        "posx": 10611.2099609375,
        "posy": 10197.150390625,
        "gamemap": "70439"
    },
    {
        "id": "613892058",
        "mapid": "1",
        "bftitle": "Sehnde",
        "sector": "0",
        "posx": 6355.98779296875,
        "posy": 4197.5927734375,
        "gamemap": "203",
        "rotation": 3
    },
    {
        "id": "614368880",
        "mapid": "1",
        "bftitle": "Narewka",
        "sector": "0",
        "posx": 10480.58984375,
        "posy": 3972.14208984375,
        "gamemap": "203"
    },
    {
        "id": "614585952",
        "mapid": "1",
        "bftitle": "Svislach",
        "sector": "0",
        "posx": 10578.169921875,
        "posy": 3872.375,
        "gamemap": "70439"
    },
    {
        "id": "614731789",
        "mapid": "1",
        "bftitle": "Bashtanka",
        "sector": "0",
        "posx": 13023.73046875,
        "posy": 6473.91015625,
        "gamemap": "70439"
    },
    {
        "id": "615058989",
        "mapid": "1",
        "bftitle": "Gunntorp",
        "sector": "0",
        "posx": 7203.56201171875,
        "posy": 1584.2039794921875,
        "gamemap": "201"
    },
    {
        "id": "615113694",
        "mapid": "1",
        "bftitle": "Călăraşi",
        "sector": "0",
        "posx": 11812.9296875,
        "posy": 6540.43896484375,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "615559989",
        "mapid": "1",
        "bftitle": "Iwye",
        "sector": "0",
        "posx": 11069.740234375,
        "posy": 3429.2900390625,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "616149948",
        "mapid": "1",
        "bftitle": "Verneuil-sur-Avre",
        "sector": "0",
        "posx": 3799.797119140625,
        "posy": 5933.4228515625,
        "gamemap": "70439"
    },
    {
        "id": "616426750",
        "mapid": "1",
        "bftitle": "Pavia",
        "sector": "0",
        "posx": 6199.83984375,
        "posy": 7420.591796875,
        "gamemap": "70439"
    },
    {
        "id": "616443154",
        "mapid": "1",
        "bftitle": "Neuchâtel",
        "sector": "0",
        "posx": 5546.7001953125,
        "posy": 6654.39501953125,
        "gamemap": "201"
    },
    {
        "id": "616512163",
        "mapid": "1",
        "bftitle": "Bielsk Podlaski",
        "sector": "0",
        "posx": 10311.650390625,
        "posy": 4005.333984375,
        "gamemap": "201"
    },
    {
        "id": "616577311",
        "mapid": "1",
        "bftitle": "Meta",
        "sector": "0",
        "posx": 7740.71484375,
        "posy": 9256.4951171875,
        "gamemap": "70439"
    },
    {
        "id": "616830002",
        "mapid": "1",
        "bftitle": "Laibstadt",
        "sector": "0",
        "posx": 6785.19384765625,
        "posy": 5736.82177734375,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "616914048",
        "mapid": "1",
        "bftitle": "Herne Bay",
        "sector": "0",
        "posx": 3808.6708984375,
        "posy": 4696.09716796875,
        "gamemap": "201"
    },
    {
        "id": "616914814",
        "mapid": "1",
        "bftitle": "Moreni",
        "sector": "0",
        "posx": 11032.0595703125,
        "posy": 7507.9970703125,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "617012194",
        "mapid": "1",
        "bftitle": "Valli",
        "sector": "0",
        "posx": 7053.43505859375,
        "posy": 7399.5400390625,
        "gamemap": "70439"
    },
    {
        "id": "617180907",
        "mapid": "1",
        "bftitle": "Ramenskoye",
        "sector": "0",
        "posx": 13461.8603515625,
        "posy": 657.701171875,
        "gamemap": "203",
        "rotation": 2
    },
    {
        "id": "617311938",
        "mapid": "1",
        "bftitle": "Levens",
        "sector": "0",
        "posx": 5633.3291015625,
        "posy": 7972.02001953125,
        "gamemap": "201"
    },
    {
        "id": "617400534",
        "mapid": "1",
        "bftitle": "Gemlik",
        "sector": "0",
        "posx": 12062.5703125,
        "posy": 9338.0166015625,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "617944186",
        "mapid": "1",
        "bftitle": "Brahin",
        "sector": "0",
        "posx": 12387.3603515625,
        "posy": 4477.27978515625,
        "gamemap": "201"
    },
    {
        "id": "618647238",
        "mapid": "1",
        "bftitle": "Fiskardo",
        "sector": "0",
        "posx": 9556.9677734375,
        "posy": 10071.5302734375,
        "gamemap": "70439"
    },
    {
        "id": "618725188",
        "mapid": "1",
        "bftitle": "Stranraer",
        "sector": "0",
        "posx": 2041.3759765625,
        "posy": 2935.9208984375,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "619095083",
        "mapid": "1",
        "bftitle": "Vybor",
        "sector": "0",
        "posx": 12064.5,
        "posy": 1706.0989990234375,
        "gamemap": "201"
    },
    {
        "id": "619223292",
        "mapid": "1",
        "bftitle": "Elblag",
        "sector": "0",
        "posx": 9204.3134765625,
        "posy": 3317.531982421875,
        "gamemap": "70439"
    },
    {
        "id": "619529207",
        "mapid": "1",
        "bftitle": "Formia",
        "sector": "0",
        "posx": 7524.76220703125,
        "posy": 9010.130859375,
        "gamemap": "70439"
    },
    {
        "id": "620170169",
        "mapid": "1",
        "bftitle": "Chamberet",
        "sector": "0",
        "posx": 4019.569091796875,
        "posy": 7256.203125,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "620667212",
        "mapid": "1",
        "bftitle": "Bourgogne Airfield",
        "sector": "0",
        "posx": 15812.9296875,
        "posy": 15582.2802734375,
        "gamemap": "205"
    },
    {
        "id": "620847542",
        "mapid": "1",
        "bftitle": "Amaliáda",
        "sector": "0",
        "posx": 9773.5224609375,
        "posy": 10339.830078125,
        "gamemap": "70439"
    },
    {
        "id": "620848449",
        "mapid": "1",
        "bftitle": "East Stourmouth",
        "sector": "0",
        "posx": 3876.35009765625,
        "posy": 4708.83984375,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "622097468",
        "mapid": "1",
        "bftitle": "Dego",
        "sector": "0",
        "posx": 5950.22607421875,
        "posy": 7731.68701171875,
        "gamemap": "204",
        "rotation": 3
    },
    {
        "id": "622154223",
        "mapid": "1",
        "bftitle": "Senales",
        "sector": "0",
        "posx": 6712.60888671875,
        "posy": 6777.7431640625,
        "gamemap": "201"
    },
    {
        "id": "622441690",
        "mapid": "1",
        "bftitle": "Corwen",
        "sector": "0",
        "posx": 2525.02392578125,
        "posy": 3900.216064453125,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "622520280",
        "mapid": "1",
        "bftitle": "Borok",
        "sector": "0",
        "posx": 14723.150390625,
        "posy": 1243.7149658203125,
        "gamemap": "70439"
    },
    {
        "id": "622568844",
        "mapid": "1",
        "bftitle": "Grimslöv",
        "sector": "0",
        "posx": 7775.1630859375,
        "posy": 1973.626953125,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "623134479",
        "mapid": "1",
        "bftitle": "Sapanca",
        "sector": "0",
        "posx": 12387.259765625,
        "posy": 9236.8037109375,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "623143263",
        "mapid": "1",
        "bftitle": "Bartoszyce",
        "sector": "0",
        "posx": 9614.5029296875,
        "posy": 3266.385009765625,
        "gamemap": "203",
        "rotation": 3
    },
    {
        "id": "623196864",
        "mapid": "1",
        "bftitle": "Kresttsy",
        "sector": "0",
        "posx": 13046.5400390625,
        "posy": 1143.071044921875,
        "gamemap": "201"
    },
    {
        "id": "623463286",
        "mapid": "1",
        "bftitle": "Armyans’k",
        "sector": "0",
        "posx": 13391.1298828125,
        "posy": 7033.26708984375,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "623576334",
        "mapid": "1",
        "bftitle": "Graçay",
        "sector": "0",
        "posx": 4056.531982421875,
        "posy": 6588.55078125,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "623993030",
        "mapid": "1",
        "bftitle": "Cahors",
        "sector": "0",
        "posx": 3936.14404296875,
        "posy": 7729.80419921875,
        "gamemap": "70439"
    },
    {
        "id": "624196075",
        "mapid": "1",
        "bftitle": "Himarë",
        "sector": "0",
        "posx": 9302.76953125,
        "posy": 9465.404296875,
        "gamemap": "201"
    },
    {
        "id": "624423372",
        "mapid": "1",
        "bftitle": "Liivi",
        "sector": "0",
        "posx": 10542.0498046875,
        "posy": 796.9276733398438,
        "gamemap": "203"
    },
    {
        "id": "624775658",
        "mapid": "1",
        "bftitle": "Stenjevec",
        "sector": "0",
        "posx": 8146.22119140625,
        "posy": 7159.39013671875,
        "gamemap": "203",
        "rotation": 3
    },
    {
        "id": "624910981",
        "mapid": "1",
        "bftitle": "Boxholm",
        "sector": "0",
        "posx": 7927.7138671875,
        "posy": 1169.9820556640625,
        "gamemap": "70439"
    },
    {
        "id": "625073481",
        "mapid": "1",
        "bftitle": "Bobolice",
        "sector": "0",
        "posx": 8377.7158203125,
        "posy": 3416.6630859375,
        "gamemap": "70439"
    },
    {
        "id": "625344781",
        "mapid": "1",
        "bftitle": "Hexham",
        "sector": "0",
        "posx": 2898.281982421875,
        "posy": 2901.22998046875,
        "gamemap": "70439"
    },
    {
        "id": "625752956",
        "mapid": "1",
        "bftitle": "Pomezia",
        "sector": "0",
        "posx": 7179.17822265625,
        "posy": 8855.453125,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "626244099",
        "mapid": "1",
        "bftitle": "Cesena",
        "sector": "0",
        "posx": 7103.8427734375,
        "posy": 7857.658203125,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "626289433",
        "mapid": "1",
        "bftitle": "Ostwennemar",
        "sector": "0",
        "posx": 5823.9912109375,
        "posy": 4525.5458984375,
        "gamemap": "203"
    },
    {
        "id": "626328216",
        "mapid": "1",
        "bftitle": "Khorol",
        "sector": "0",
        "posx": 13269.8603515625,
        "posy": 5412.884765625,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "626559153",
        "mapid": "1",
        "bftitle": "Schübelbach",
        "sector": "0",
        "posx": 6132.10986328125,
        "posy": 6575.72119140625,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "627159187",
        "mapid": "1",
        "bftitle": "Jászberény",
        "sector": "0",
        "posx": 9353.171875,
        "posy": 6433.39111328125,
        "gamemap": "203",
        "rotation": 2
    },
    {
        "id": "627342151",
        "mapid": "1",
        "bftitle": "Riga",
        "sector": "0",
        "posx": 10581.150390625,
        "posy": 1858.8489990234375,
        "gamemap": "70439"
    },
    {
        "id": "627401696",
        "mapid": "1",
        "bftitle": "Grevesmühlen",
        "sector": "0",
        "posx": 6783.35400390625,
        "posy": 3445.701904296875,
        "gamemap": "203",
        "rotation": 3
    },
    {
        "id": "627405557",
        "mapid": "1",
        "bftitle": "Sint Annaparochie",
        "sector": "0",
        "posx": 5188.2978515625,
        "posy": 3768.094970703125,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "627891339",
        "mapid": "1",
        "bftitle": "Dupnitsa",
        "sector": "0",
        "posx": 10291.1796875,
        "posy": 8616.0556640625,
        "gamemap": "201"
    },
    {
        "id": "628020516",
        "mapid": "1",
        "bftitle": "Salernes",
        "sector": "0",
        "posx": 5342.3828125,
        "posy": 8093.29296875,
        "gamemap": "70439"
    },
    {
        "id": "628031726",
        "mapid": "1",
        "bftitle": "Nancy",
        "sector": "0",
        "posx": 5331.8310546875,
        "posy": 5909.97705078125,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "628115464",
        "mapid": "1",
        "bftitle": "Simferopol",
        "sector": "0",
        "posx": 13547.830078125,
        "posy": 7556.64990234375,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "628144792",
        "mapid": "1",
        "bftitle": "Wustermark",
        "sector": "0",
        "posx": 7311.0419921875,
        "posy": 4110.03076171875,
        "gamemap": "203",
        "rotation": 1
    },
    {
        "id": "628230765",
        "mapid": "1",
        "bftitle": "Făgăraș",
        "sector": "0",
        "posx": 10833.4697265625,
        "posy": 7143.373046875,
        "gamemap": "201"
    },
    {
        "id": "628244771",
        "mapid": "1",
        "bftitle": "Wünnenberg Flugplatz",
        "sector": "0",
        "posx": 6065.05078125,
        "posy": 4604.31591796875,
        "gamemap": "205",
        "rotation": 3
    },
    {
        "id": "628440673",
        "mapid": "1",
        "bftitle": "Dancu",
        "sector": "0",
        "posx": 11784.1904296875,
        "posy": 6753.294921875,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "628585491",
        "mapid": "1",
        "bftitle": "Demidov",
        "sector": "0",
        "posx": 12752.9697265625,
        "posy": 2745.962890625,
        "gamemap": "201"
    },
    {
        "id": "629102742",
        "mapid": "1",
        "bftitle": "Slavonski Brod",
        "sector": "0",
        "posx": 8795.9013671875,
        "posy": 7433.89892578125,
        "gamemap": "70439"
    },
    {
        "id": "629159768",
        "mapid": "1",
        "bftitle": "Braives",
        "sector": "0",
        "posx": 5019.6611328125,
        "posy": 5028.34521484375,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "629757301",
        "mapid": "1",
        "bftitle": "Stan’kava",
        "sector": "0",
        "posx": 11498.0703125,
        "posy": 3593.178955078125,
        "gamemap": "203"
    },
    {
        "id": "629875260",
        "mapid": "1",
        "bftitle": "Sarny",
        "sector": "0",
        "posx": 11312.8095703125,
        "posy": 4690.52197265625,
        "gamemap": "70439"
    },
    {
        "id": "629955740",
        "mapid": "1",
        "bftitle": "Monaco",
        "sector": "0",
        "posx": 5689.06298828125,
        "posy": 8024.0009765625,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "630375594",
        "mapid": "1",
        "bftitle": "Blain",
        "sector": "0",
        "posx": 2998.283935546875,
        "posy": 6443.6337890625,
        "gamemap": "201"
    },
    {
        "id": "630828624",
        "mapid": "1",
        "bftitle": "Tuma",
        "sector": "0",
        "posx": 15402.490234375,
        "posy": 2809.419921875,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "631096204",
        "mapid": "1",
        "bftitle": "Weinzierl bei Krems",
        "sector": "0",
        "posx": 8087.8330078125,
        "posy": 6036.7001953125,
        "gamemap": "201"
    },
    {
        "id": "631271846",
        "mapid": "1",
        "bftitle": "Glasgow",
        "sector": "0",
        "posx": 2266.991943359375,
        "posy": 2435.56103515625,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "631272693",
        "mapid": "1",
        "bftitle": "Shkede",
        "sector": "0",
        "posx": 9688.513671875,
        "posy": 2030.68701171875,
        "gamemap": "203"
    },
    {
        "id": "631362381",
        "mapid": "1",
        "bftitle": "Workum",
        "sector": "0",
        "posx": 5122.22509765625,
        "posy": 3886.64892578125,
        "gamemap": "70439"
    },
    {
        "id": "631984162",
        "mapid": "1",
        "bftitle": "Mahdalynivka",
        "sector": "0",
        "posx": 13749.58984375,
        "posy": 5803.7978515625,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "632026796",
        "mapid": "1",
        "bftitle": "Luchyste",
        "sector": "0",
        "posx": 13623.5703125,
        "posy": 7638.2841796875,
        "gamemap": "201"
    },
    {
        "id": "632334679",
        "mapid": "1",
        "bftitle": "Templin",
        "sector": "0",
        "posx": 7472.9072265625,
        "posy": 3832.15087890625,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "632669704",
        "mapid": "1",
        "bftitle": "Montpon-Ménestérol",
        "sector": "0",
        "posx": 3563.8798828125,
        "posy": 7500.9072265625,
        "gamemap": "70439"
    },
    {
        "id": "633006561",
        "mapid": "1",
        "bftitle": "Myślibórz",
        "sector": "0",
        "posx": 7873.21923828125,
        "posy": 3927.76904296875,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "633253718",
        "mapid": "1",
        "bftitle": "Kocaçeşme",
        "sector": "0",
        "posx": 11371.0595703125,
        "posy": 9248.45703125,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "633369018",
        "mapid": "1",
        "bftitle": "Bazas",
        "sector": "0",
        "posx": 3452.509033203125,
        "posy": 7736.8671875,
        "gamemap": "70439"
    },
    {
        "id": "633682476",
        "mapid": "1",
        "bftitle": "Mellionnec",
        "sector": "0",
        "posx": 2518.339111328125,
        "posy": 6140.923828125,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "634070966",
        "mapid": "1",
        "bftitle": "Meyssac",
        "sector": "0",
        "posx": 4005.68310546875,
        "posy": 7477.63720703125,
        "gamemap": "203",
        "rotation": 3
    },
    {
        "id": "634401056",
        "mapid": "1",
        "bftitle": "Mesttsy",
        "sector": "0",
        "posx": 12837.349609375,
        "posy": 1528.5830078125,
        "gamemap": "203",
        "rotation": 2
    },
    {
        "id": "635245946",
        "mapid": "1",
        "bftitle": "Chechel’nyk",
        "sector": "0",
        "posx": 12123.419921875,
        "posy": 6118.77099609375,
        "gamemap": "70439"
    },
    {
        "id": "635294762",
        "mapid": "1",
        "bftitle": "Dyat'kovo",
        "sector": "0",
        "posx": 13580.5498046875,
        "posy": 3595.132080078125,
        "gamemap": "70439"
    },
    {
        "id": "635916207",
        "mapid": "1",
        "bftitle": "Tarashcha",
        "sector": "0",
        "posx": 12453.2802734375,
        "posy": 5515.68017578125,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "636131951",
        "mapid": "1",
        "bftitle": "Fryazevo",
        "sector": "0",
        "posx": 14790.099609375,
        "posy": 2504.85595703125,
        "gamemap": "204",
        "rotation": 2
    },
    {
        "id": "636254387",
        "mapid": "1",
        "bftitle": "Volpiano",
        "sector": "0",
        "posx": 5783.01416015625,
        "posy": 7413.6279296875,
        "gamemap": "203",
        "rotation": 2
    },
    {
        "id": "636377287",
        "mapid": "1",
        "bftitle": "Quistinit",
        "sector": "0",
        "posx": 2423.31689453125,
        "posy": 6224.59619140625,
        "gamemap": "70439"
    },
    {
        "id": "636402114",
        "mapid": "1",
        "bftitle": "Komsenichi",
        "sector": "0",
        "posx": 12273.5302734375,
        "posy": 3318.489990234375,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "636677454",
        "mapid": "1",
        "bftitle": "Casalecchio di Reno",
        "sector": "0",
        "posx": 6808.26318359375,
        "posy": 7723.4970703125,
        "gamemap": "70439"
    },
    {
        "id": "636699766",
        "mapid": "1",
        "bftitle": "Ļaudona",
        "sector": "0",
        "posx": 11193.2802734375,
        "posy": 1986.6009521484375,
        "gamemap": "70439"
    },
    {
        "id": "636911944",
        "mapid": "1",
        "bftitle": "Ramsau im Zillertal",
        "sector": "0",
        "posx": 6996.06005859375,
        "posy": 6562.44384765625,
        "gamemap": "203",
        "rotation": 3
    },
    {
        "id": "637029783",
        "mapid": "1",
        "bftitle": "Novovoronezh",
        "sector": "0",
        "posx": 15010.75,
        "posy": 4705.0498046875,
        "gamemap": "70439"
    },
    {
        "id": "637132872",
        "mapid": "1",
        "bftitle": "Piskivka",
        "sector": "0",
        "posx": 13672.6796875,
        "posy": 4973.001953125,
        "gamemap": "203"
    },
    {
        "id": "637146252",
        "mapid": "1",
        "bftitle": "Lopatkino",
        "sector": "0",
        "posx": 14776.0498046875,
        "posy": 1629.875,
        "gamemap": "201"
    },
    {
        "id": "637487898",
        "mapid": "1",
        "bftitle": "Anapa",
        "sector": "0",
        "posx": 14455.73046875,
        "posy": 7546.43408203125,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "637722361",
        "mapid": "1",
        "bftitle": "Prijedor",
        "sector": "0",
        "posx": 8414.3818359375,
        "posy": 7509.2919921875,
        "gamemap": "203",
        "rotation": 1
    },
    {
        "id": "637748831",
        "mapid": "1",
        "bftitle": "Doetinchem",
        "sector": "0",
        "posx": 5383.55322265625,
        "posy": 4372.8251953125,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "637819516",
        "mapid": "1",
        "bftitle": "Nebolchi",
        "sector": "0",
        "posx": 13289.509765625,
        "posy": 643.9404296875,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "638056722",
        "mapid": "1",
        "bftitle": "Łańcut",
        "sector": "0",
        "posx": 10031.01953125,
        "posy": 5282.17919921875,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "638064543",
        "mapid": "1",
        "bftitle": "Karteis",
        "sector": "0",
        "posx": 7403.8662109375,
        "posy": 6578.583984375,
        "gamemap": "201"
    },
    {
        "id": "638390446",
        "mapid": "1",
        "bftitle": "Charvieu-Chavagneux",
        "sector": "0",
        "posx": 5024.63818359375,
        "posy": 7185.716796875,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "638505184",
        "mapid": "1",
        "bftitle": "Zoutleeuw",
        "sector": "0",
        "posx": 5011.0830078125,
        "posy": 4927.7509765625,
        "gamemap": "201"
    },
    {
        "id": "638624655",
        "mapid": "1",
        "bftitle": "Saint-Savinien",
        "sector": "0",
        "posx": 3315.93701171875,
        "posy": 7131.8798828125,
        "gamemap": "203",
        "rotation": 2
    },
    {
        "id": "638778730",
        "mapid": "1",
        "bftitle": "Hrebinka",
        "sector": "0",
        "posx": 13022.98046875,
        "posy": 5259.90478515625,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "639041146",
        "mapid": "1",
        "bftitle": "Denby Airfield",
        "sector": "0",
        "posx": 3101.702880859375,
        "posy": 3883.596923828125,
        "gamemap": "205",
        "rotation": 3
    },
    {
        "id": "639193313",
        "mapid": "1",
        "bftitle": "Thourotte",
        "sector": "0",
        "posx": 4359.85107421875,
        "posy": 5553.15087890625,
        "gamemap": "70439"
    },
    {
        "id": "639322861",
        "mapid": "1",
        "bftitle": "Kukës",
        "sector": "0",
        "posx": 9501.283203125,
        "posy": 8691.625,
        "gamemap": "205"
    },
    {
        "id": "639450573",
        "mapid": "1",
        "bftitle": "Wietzendorf Flugplatz",
        "sector": "0",
        "posx": 6442.98095703125,
        "posy": 3928.681884765625,
        "gamemap": "205",
        "rotation": 3
    },
    {
        "id": "640022434",
        "mapid": "1",
        "bftitle": "Léognan",
        "sector": "0",
        "posx": 3317.54296875,
        "posy": 7620.5791015625,
        "gamemap": "203",
        "rotation": 1
    },
    {
        "id": "640803794",
        "mapid": "1",
        "bftitle": "Yaremche",
        "sector": "0",
        "posx": 10712.6103515625,
        "posy": 6013.7587890625,
        "gamemap": "201"
    },
    {
        "id": "640929618",
        "mapid": "1",
        "bftitle": "Ribérac",
        "sector": "0",
        "posx": 3612.735107421875,
        "posy": 7396.30712890625,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "641091449",
        "mapid": "1",
        "bftitle": "Feodosiya",
        "sector": "0",
        "posx": 13891.6298828125,
        "posy": 7535.15380859375,
        "gamemap": "70439"
    },
    {
        "id": "641289002",
        "mapid": "1",
        "bftitle": "Kiiskinkylä",
        "sector": "0",
        "posx": 11432.5,
        "posy": 139.03070068359375,
        "gamemap": "70439"
    },
    {
        "id": "642391726",
        "mapid": "1",
        "bftitle": "Novokonstantinovka",
        "sector": "0",
        "posx": 12829.0302734375,
        "posy": 6299.69091796875,
        "gamemap": "70439"
    },
    {
        "id": "642652875",
        "mapid": "1",
        "bftitle": "Trento",
        "sector": "0",
        "posx": 6774.93408203125,
        "posy": 7050.85400390625,
        "gamemap": "201"
    },
    {
        "id": "642755327",
        "mapid": "1",
        "bftitle": "Rignano Flaminio",
        "sector": "0",
        "posx": 7173.47216796875,
        "posy": 8640.4423828125,
        "gamemap": "203"
    },
    {
        "id": "642814115",
        "mapid": "1",
        "bftitle": "Svekrovshchina",
        "sector": "0",
        "posx": 12776.23046875,
        "posy": 3295.60400390625,
        "gamemap": "203"
    },
    {
        "id": "642849403",
        "mapid": "1",
        "bftitle": "Dębe Wielkie",
        "sector": "0",
        "posx": 9847.630859375,
        "posy": 4132.0478515625,
        "gamemap": "70439"
    },
    {
        "id": "642948112",
        "mapid": "1",
        "bftitle": "Lockerbie",
        "sector": "0",
        "posx": 2531.181884765625,
        "posy": 2822.30810546875,
        "gamemap": "201"
    },
    {
        "id": "642999816",
        "mapid": "1",
        "bftitle": "Pfaffenberg",
        "sector": "0",
        "posx": 7395.15380859375,
        "posy": 6674.6337890625,
        "gamemap": "203",
        "rotation": 1
    },
    {
        "id": "643366283",
        "mapid": "1",
        "bftitle": "Vitrolles",
        "sector": "0",
        "posx": 5043.826171875,
        "posy": 8126.37890625,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "643370019",
        "mapid": "1",
        "bftitle": "Heidenau",
        "sector": "0",
        "posx": 6353.5751953125,
        "posy": 3761.419921875,
        "gamemap": "70439"
    },
    {
        "id": "643570285",
        "mapid": "1",
        "bftitle": "Chekhov",
        "sector": "0",
        "posx": 14500.6904296875,
        "posy": 2809.56494140625,
        "gamemap": "201"
    },
    {
        "id": "643801855",
        "mapid": "1",
        "bftitle": "Leova",
        "sector": "0",
        "posx": 11796.7900390625,
        "posy": 6873.85400390625,
        "gamemap": "70439"
    },
    {
        "id": "643888778",
        "mapid": "1",
        "bftitle": "Rozhyshche",
        "sector": "0",
        "posx": 10922.1103515625,
        "posy": 4889.26708984375,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "644056099",
        "mapid": "1",
        "bftitle": "Olevano Romano",
        "sector": "0",
        "posx": 7336.2548828125,
        "posy": 8778.2802734375,
        "gamemap": "70439"
    },
    {
        "id": "644230593",
        "mapid": "1",
        "bftitle": "Kalocsa",
        "sector": "0",
        "posx": 9080.3173828125,
        "posy": 6854.94287109375,
        "gamemap": "70439"
    },
    {
        "id": "644257642",
        "mapid": "1",
        "bftitle": "Mińsk Mazowiecki",
        "sector": "0",
        "posx": 9838.5478515625,
        "posy": 4289.2177734375,
        "gamemap": "204",
        "rotation": 2
    },
    {
        "id": "644343925",
        "mapid": "1",
        "bftitle": "Kanaláki",
        "sector": "0",
        "posx": 9553.4765625,
        "posy": 9798.314453125,
        "gamemap": "70439"
    },
    {
        "id": "644700898",
        "mapid": "1",
        "bftitle": "Deskáti",
        "sector": "0",
        "posx": 9906.044921875,
        "posy": 9534.4609375,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "645185800",
        "mapid": "1",
        "bftitle": "Cajarc",
        "sector": "0",
        "posx": 4055.14697265625,
        "posy": 7714.76416015625,
        "gamemap": "70439"
    },
    {
        "id": "645204982",
        "mapid": "1",
        "bftitle": "Lesneven",
        "sector": "0",
        "posx": 2245.93701171875,
        "posy": 5961.5078125,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "645529642",
        "mapid": "1",
        "bftitle": "Bengtsfors",
        "sector": "0",
        "posx": 7100.59814453125,
        "posy": 698.4027099609375,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "645626092",
        "mapid": "1",
        "bftitle": "Norrköping",
        "sector": "0",
        "posx": 8258.611328125,
        "posy": 946.3450927734375,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "645629556",
        "mapid": "1",
        "bftitle": "Lectoure",
        "sector": "0",
        "posx": 3697.0791015625,
        "posy": 7941.6171875,
        "gamemap": "203",
        "rotation": 2
    },
    {
        "id": "645809480",
        "mapid": "1",
        "bftitle": "Inverness",
        "sector": "0",
        "posx": 2282.39111328125,
        "posy": 1562.708984375,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "646661349",
        "mapid": "1",
        "bftitle": "Werl",
        "sector": "0",
        "posx": 5831.47705078125,
        "posy": 4606.3837890625,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "647005187",
        "mapid": "1",
        "bftitle": "Salins-les-Bains",
        "sector": "0",
        "posx": 5237.92578125,
        "posy": 6673.93017578125,
        "gamemap": "201"
    },
    {
        "id": "647139486",
        "mapid": "1",
        "bftitle": "Lowicz",
        "sector": "0",
        "posx": 9361.5498046875,
        "posy": 4323.95703125,
        "gamemap": "70439"
    },
    {
        "id": "647346563",
        "mapid": "1",
        "bftitle": "Gdynia",
        "sector": "0",
        "posx": 8917.197265625,
        "posy": 3122.376953125,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "647561418",
        "mapid": "1",
        "bftitle": "Zanie",
        "sector": "0",
        "posx": 10206.8701171875,
        "posy": 3983.64208984375,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "649069000",
        "mapid": "1",
        "bftitle": "Caunes-Minervois",
        "sector": "0",
        "posx": 4255.294921875,
        "posy": 8190.0380859375,
        "gamemap": "201"
    },
    {
        "id": "649495587",
        "mapid": "1",
        "bftitle": "Aubiet",
        "sector": "0",
        "posx": 3741.363037109375,
        "posy": 8057.3701171875,
        "gamemap": "203"
    },
    {
        "id": "649972648",
        "mapid": "1",
        "bftitle": "Nibe",
        "sector": "0",
        "posx": 6340.5419921875,
        "posy": 1839.626953125,
        "gamemap": "70439"
    },
    {
        "id": "650019047",
        "mapid": "1",
        "bftitle": "Imst",
        "sector": "0",
        "posx": 6663.14990234375,
        "posy": 6544.52978515625,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "650392153",
        "mapid": "1",
        "bftitle": "Pohja",
        "sector": "0",
        "posx": 10411.6298828125,
        "posy": 76.49128723144531,
        "gamemap": "201"
    },
    {
        "id": "650462811",
        "mapid": "1",
        "bftitle": "Perceneige Aérodrome",
        "sector": "0",
        "posx": 4511.6630859375,
        "posy": 6058.9208984375,
        "gamemap": "204",
        "rotation": 2
    },
    {
        "id": "650766836",
        "mapid": "1",
        "bftitle": "Bentley",
        "sector": "0",
        "posx": 3177.927978515625,
        "posy": 3627.18701171875,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "651120009",
        "mapid": "1",
        "bftitle": "Égliseneuve-d’Entraigues",
        "sector": "0",
        "posx": 4343.31396484375,
        "posy": 7330.07080078125,
        "gamemap": "203",
        "rotation": 1
    },
    {
        "id": "651365154",
        "mapid": "1",
        "bftitle": "Novodugino",
        "sector": "0",
        "posx": 13564.7197265625,
        "posy": 2558.62109375,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "651459098",
        "mapid": "1",
        "bftitle": "Kemalpaşa",
        "sector": "0",
        "posx": 11551.830078125,
        "posy": 10104.2900390625,
        "gamemap": "70439"
    },
    {
        "id": "651603766",
        "mapid": "1",
        "bftitle": "Plovdiv",
        "sector": "0",
        "posx": 10769.9599609375,
        "posy": 8662.552734375,
        "gamemap": "201"
    },
    {
        "id": "651669545",
        "mapid": "1",
        "bftitle": "Szeged",
        "sector": "0",
        "posx": 9421.052734375,
        "posy": 6971.9521484375,
        "gamemap": "70439"
    },
    {
        "id": "652332070",
        "mapid": "1",
        "bftitle": "Mirandola",
        "sector": "0",
        "posx": 6759.671875,
        "posy": 7548.80517578125,
        "gamemap": "70439"
    },
    {
        "id": "652929825",
        "mapid": "1",
        "bftitle": "Roslavl'",
        "sector": "0",
        "posx": 13148.3701171875,
        "posy": 3417.81591796875,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "652989582",
        "mapid": "1",
        "bftitle": "Telgruc-sur-Mer",
        "sector": "0",
        "posx": 2241.60791015625,
        "posy": 6117.455078125,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "653321012",
        "mapid": "1",
        "bftitle": "Skavshin",
        "sector": "0",
        "posx": 11675.51953125,
        "posy": 4117.505859375,
        "gamemap": "70439"
    },
    {
        "id": "653326228",
        "mapid": "1",
        "bftitle": "Albertville",
        "sector": "0",
        "posx": 5388.2958984375,
        "posy": 7217.626953125,
        "gamemap": "201"
    },
    {
        "id": "653379904",
        "mapid": "1",
        "bftitle": "Bollebygd",
        "sector": "0",
        "posx": 7200.44921875,
        "posy": 1463.8709716796875,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "653621738",
        "mapid": "1",
        "bftitle": "Ramnäs",
        "sector": "0",
        "posx": 8263.7099609375,
        "posy": 270.68890380859375,
        "gamemap": "201"
    },
    {
        "id": "653677528",
        "mapid": "1",
        "bftitle": "Karabanovo",
        "sector": "0",
        "posx": 14859.1103515625,
        "posy": 2196.633056640625,
        "gamemap": "201"
    },
    {
        "id": "653710882",
        "mapid": "1",
        "bftitle": "Sviland",
        "sector": "0",
        "posx": 5224.94287109375,
        "posy": 810.4005126953125,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "653770085",
        "mapid": "1",
        "bftitle": "Roanne",
        "sector": "0",
        "posx": 4707.08203125,
        "posy": 7065.544921875,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "654271622",
        "mapid": "1",
        "bftitle": "Fakse",
        "sector": "0",
        "posx": 7098.13720703125,
        "posy": 2767.59912109375,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "654675329",
        "mapid": "1",
        "bftitle": "Bajina Bašta",
        "sector": "0",
        "posx": 9250.8212890625,
        "posy": 7926.77685546875,
        "gamemap": "201"
    },
    {
        "id": "654741617",
        "mapid": "1",
        "bftitle": "Yeuset Aérodrome",
        "sector": "0",
        "posx": 4094.216064453125,
        "posy": 4947.4501953125,
        "gamemap": "205",
        "rotation": 1
    },
    {
        "id": "655128872",
        "mapid": "1",
        "bftitle": "Dresden",
        "sector": "0",
        "posx": 7447.083984375,
        "posy": 4779.31884765625,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "655238348",
        "mapid": "1",
        "bftitle": "Pryluky",
        "sector": "0",
        "posx": 13008.759765625,
        "posy": 5039.60791015625,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "655894130",
        "mapid": "1",
        "bftitle": "Le Gouray Aérodrome",
        "sector": "0",
        "posx": 2760.8349609375,
        "posy": 6061.6298828125,
        "gamemap": "205"
    },
    {
        "id": "656346097",
        "mapid": "1",
        "bftitle": "Mikashevichi",
        "sector": "0",
        "posx": 11569.0302734375,
        "posy": 4270.94189453125,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "656499771",
        "mapid": "1",
        "bftitle": "Resko",
        "sector": "0",
        "posx": 8030.98681640625,
        "posy": 3507.778076171875,
        "gamemap": "203",
        "rotation": 3
    },
    {
        "id": "656631168",
        "mapid": "1",
        "bftitle": "Locronan",
        "sector": "0",
        "posx": 2293.48388671875,
        "posy": 6174.1630859375,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "657075560",
        "mapid": "1",
        "bftitle": "Paide",
        "sector": "0",
        "posx": 11006.580078125,
        "posy": 780.5897216796875,
        "gamemap": "70439"
    },
    {
        "id": "657081243",
        "mapid": "1",
        "bftitle": "Dublin",
        "sector": "0",
        "posx": 1683.2969970703125,
        "posy": 3726.427001953125,
        "gamemap": "70439"
    },
    {
        "id": "657704336",
        "mapid": "1",
        "bftitle": "Asnyezhytsy",
        "sector": "0",
        "posx": 11174.4501953125,
        "posy": 4284.52490234375,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "657975767",
        "mapid": "1",
        "bftitle": "Kilsyth",
        "sector": "0",
        "posx": 2317.260986328125,
        "posy": 2371.64599609375,
        "gamemap": "203",
        "rotation": 1
    },
    {
        "id": "657987116",
        "mapid": "1",
        "bftitle": "Glodeanu-Siliştea",
        "sector": "0",
        "posx": 11370.8701171875,
        "posy": 7570.38623046875,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "658243049",
        "mapid": "1",
        "bftitle": "Zaberfeld",
        "sector": "0",
        "posx": 6132.287109375,
        "posy": 5757.57080078125,
        "gamemap": "201"
    },
    {
        "id": "658244375",
        "mapid": "1",
        "bftitle": "Contres",
        "sector": "0",
        "posx": 3934.9580078125,
        "posy": 6474.19921875,
        "gamemap": "70439"
    },
    {
        "id": "658696445",
        "mapid": "1",
        "bftitle": "Loury",
        "sector": "0",
        "posx": 4126.123046875,
        "posy": 6214.10595703125,
        "gamemap": "70439"
    },
    {
        "id": "658925729",
        "mapid": "1",
        "bftitle": "Khodoriv",
        "sector": "0",
        "posx": 10642.0400390625,
        "posy": 5584.60498046875,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "658997864",
        "mapid": "1",
        "bftitle": "Chernyakhiv",
        "sector": "0",
        "posx": 11919.080078125,
        "posy": 5103.08984375,
        "gamemap": "70439"
    },
    {
        "id": "659371968",
        "mapid": "1",
        "bftitle": "Kozyntsi",
        "sector": "0",
        "posx": 12334.759765625,
        "posy": 5074.64306640625,
        "gamemap": "203"
    },
    {
        "id": "659392293",
        "mapid": "1",
        "bftitle": "Siena",
        "sector": "0",
        "posx": 6834.97314453125,
        "posy": 8191.4169921875,
        "gamemap": "70439"
    },
    {
        "id": "659441972",
        "mapid": "1",
        "bftitle": "Człopa",
        "sector": "0",
        "posx": 8240.546875,
        "posy": 3846.947998046875,
        "gamemap": "70439"
    },
    {
        "id": "659616457",
        "mapid": "1",
        "bftitle": "Savran'",
        "sector": "0",
        "posx": 12333.0595703125,
        "posy": 6155.4658203125,
        "gamemap": "70439"
    },
    {
        "id": "659705369",
        "mapid": "1",
        "bftitle": "Bellac",
        "sector": "0",
        "posx": 3822.81103515625,
        "posy": 7030.0830078125,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "659847483",
        "mapid": "1",
        "bftitle": "Brka",
        "sector": "0",
        "posx": 9003.6259765625,
        "posy": 7572.4521484375,
        "gamemap": "70439"
    },
    {
        "id": "660085109",
        "mapid": "1",
        "bftitle": "Kotsiubynske",
        "sector": "0",
        "posx": 12405.490234375,
        "posy": 5088.3232421875,
        "gamemap": "204",
        "rotation": 1
    },
    {
        "id": "660150671",
        "mapid": "1",
        "bftitle": "Banatsko Novo Selo",
        "sector": "0",
        "posx": 9607.30078125,
        "posy": 7505.326171875,
        "gamemap": "70439"
    },
    {
        "id": "660343842",
        "mapid": "1",
        "bftitle": "Exton",
        "sector": "0",
        "posx": 2479.467041015625,
        "posy": 4806.3271484375,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "660676623",
        "mapid": "1",
        "bftitle": "Bjerkebekk",
        "sector": "0",
        "posx": 6931.59619140625,
        "posy": 642.7421264648438,
        "gamemap": "204",
        "rotation": 1
    },
    {
        "id": "660776963",
        "mapid": "1",
        "bftitle": "Carpentras",
        "sector": "0",
        "posx": 4995.326171875,
        "posy": 7894.2822265625,
        "gamemap": "70439"
    },
    {
        "id": "660777872",
        "mapid": "1",
        "bftitle": "Vendôme",
        "sector": "0",
        "posx": 3827.696044921875,
        "posy": 6301.92578125,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "661413734",
        "mapid": "1",
        "bftitle": "Pogodino",
        "sector": "0",
        "posx": 12572.9697265625,
        "posy": 3126.26611328125,
        "gamemap": "70439"
    },
    {
        "id": "661564916",
        "mapid": "1",
        "bftitle": "Bad Oldesloe",
        "sector": "0",
        "posx": 6567.9072265625,
        "posy": 3519.052001953125,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "662022425",
        "mapid": "1",
        "bftitle": "Rokitno",
        "sector": "0",
        "posx": 8099.8798828125,
        "posy": 4110.537109375,
        "gamemap": "203"
    },
    {
        "id": "662133772",
        "mapid": "1",
        "bftitle": "Dunbeath",
        "sector": "0",
        "posx": 2493.1640625,
        "posy": 1122.5989990234375,
        "gamemap": "70439"
    },
    {
        "id": "662381460",
        "mapid": "1",
        "bftitle": "Rivière-sur-Tarn",
        "sector": "0",
        "posx": 4433.02197265625,
        "posy": 7837.14599609375,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "662652061",
        "mapid": "1",
        "bftitle": "Stayki",
        "sector": "0",
        "posx": 12573.8203125,
        "posy": 5277.8251953125,
        "gamemap": "70439"
    },
    {
        "id": "662679797",
        "mapid": "1",
        "bftitle": "Ivano-Frankivs’k",
        "sector": "0",
        "posx": 10758.150390625,
        "posy": 5803.62109375,
        "gamemap": "201"
    },
    {
        "id": "662869382",
        "mapid": "1",
        "bftitle": "Loutraki",
        "sector": "0",
        "posx": 10250.48046875,
        "posy": 10272.5498046875,
        "gamemap": "70439"
    },
    {
        "id": "663100043",
        "mapid": "1",
        "bftitle": "Tønsberg",
        "sector": "0",
        "posx": 6533.3720703125,
        "posy": 555.6196899414062,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "663493698",
        "mapid": "1",
        "bftitle": "Põlva",
        "sector": "0",
        "posx": 11449.8603515625,
        "posy": 1246.529052734375,
        "gamemap": "201"
    },
    {
        "id": "663883514",
        "mapid": "1",
        "bftitle": "Constanta",
        "sector": "0",
        "posx": 11908.5703125,
        "posy": 7840.52783203125,
        "gamemap": "70439"
    },
    {
        "id": "664023482",
        "mapid": "1",
        "bftitle": "Stăncuţa",
        "sector": "0",
        "posx": 11673.76953125,
        "posy": 7542.619140625,
        "gamemap": "205"
    },
    {
        "id": "664111087",
        "mapid": "1",
        "bftitle": "Nantes Aérodrome",
        "sector": "0",
        "posx": 3036.64892578125,
        "posy": 6627.19091796875,
        "gamemap": "205",
        "rotation": 2
    },
    {
        "id": "664144751",
        "mapid": "1",
        "bftitle": "Leerdam",
        "sector": "0",
        "posx": 5007.5390625,
        "posy": 4426.47607421875,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "664379635",
        "mapid": "1",
        "bftitle": "Pidhorodne",
        "sector": "0",
        "posx": 13805.83984375,
        "posy": 5958.630859375,
        "gamemap": "70439"
    },
    {
        "id": "664542281",
        "mapid": "1",
        "bftitle": "Saint-Chinian",
        "sector": "0",
        "posx": 4378.708984375,
        "posy": 8150.7138671875,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "664952923",
        "mapid": "1",
        "bftitle": "Aneby",
        "sector": "0",
        "posx": 7856.30810546875,
        "posy": 1369.6529541015625,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "665087435",
        "mapid": "1",
        "bftitle": "Saint-Amand-Montrond",
        "sector": "0",
        "posx": 4252.73291015625,
        "posy": 6773.158203125,
        "gamemap": "201"
    },
    {
        "id": "665842616",
        "mapid": "1",
        "bftitle": "Kamunar",
        "sector": "0",
        "posx": 12549.5400390625,
        "posy": 4069.06494140625,
        "gamemap": "203",
        "rotation": 2
    },
    {
        "id": "666010953",
        "mapid": "1",
        "bftitle": "Ala",
        "sector": "0",
        "posx": 6740.7841796875,
        "posy": 7181.17919921875,
        "gamemap": "203"
    },
    {
        "id": "666121534",
        "mapid": "1",
        "bftitle": "Cazaubon",
        "sector": "0",
        "posx": 3495.052978515625,
        "posy": 7941.751953125,
        "gamemap": "205"
    },
    {
        "id": "666194370",
        "mapid": "1",
        "bftitle": "Voskresensk",
        "sector": "0",
        "posx": 14845.2197265625,
        "posy": 2721.748046875,
        "gamemap": "70439"
    },
    {
        "id": "667598916",
        "mapid": "1",
        "bftitle": "Rakhiv",
        "sector": "0",
        "posx": 10609,
        "posy": 6190.64306640625,
        "gamemap": "201"
    },
    {
        "id": "667803210",
        "mapid": "1",
        "bftitle": "Totley",
        "sector": "0",
        "posx": 3063.35888671875,
        "posy": 3735.819091796875,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "668109552",
        "mapid": "1",
        "bftitle": "Trosno",
        "sector": "0",
        "posx": 11911.169921875,
        "posy": 981.1085815429688,
        "gamemap": "201"
    },
    {
        "id": "669074489",
        "mapid": "1",
        "bftitle": "Codogno",
        "sector": "0",
        "posx": 6359.0078125,
        "posy": 7433.23291015625,
        "gamemap": "205"
    },
    {
        "id": "669332657",
        "mapid": "1",
        "bftitle": "Kos'kovo",
        "sector": "0",
        "posx": 13269.6904296875,
        "posy": 116.3656005859375,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "669401736",
        "mapid": "1",
        "bftitle": "Holywell",
        "sector": "0",
        "posx": 2568.528076171875,
        "posy": 3755.27587890625,
        "gamemap": "203",
        "rotation": 3
    },
    {
        "id": "669551142",
        "mapid": "1",
        "bftitle": "Brovary",
        "sector": "0",
        "posx": 12545.3603515625,
        "posy": 5074.52294921875,
        "gamemap": "203",
        "rotation": 2
    },
    {
        "id": "670273492",
        "mapid": "1",
        "bftitle": "Sanski Most",
        "sector": "0",
        "posx": 8400.6005859375,
        "posy": 7598.10791015625,
        "gamemap": "201"
    },
    {
        "id": "670324094",
        "mapid": "1",
        "bftitle": "Cogealac",
        "sector": "0",
        "posx": 11888.73046875,
        "posy": 7688.0419921875,
        "gamemap": "70439"
    },
    {
        "id": "670562224",
        "mapid": "1",
        "bftitle": "Luninyets",
        "sector": "0",
        "posx": 11372.25,
        "posy": 4256.52978515625,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "670595102",
        "mapid": "1",
        "bftitle": "Neu Darchau",
        "sector": "0",
        "posx": 6705.81787109375,
        "posy": 3777.802001953125,
        "gamemap": "205",
        "rotation": 3
    },
    {
        "id": "671068003",
        "mapid": "1",
        "bftitle": "Kaxholmen",
        "sector": "0",
        "posx": 7706.76611328125,
        "posy": 1354.2750244140625,
        "gamemap": "203",
        "rotation": 3
    },
    {
        "id": "671245396",
        "mapid": "1",
        "bftitle": "Swindon",
        "sector": "0",
        "posx": 3001.8759765625,
        "posy": 4601.22607421875,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "671321143",
        "mapid": "1",
        "bftitle": "Siedlce",
        "sector": "0",
        "posx": 10048.8798828125,
        "posy": 4294.81787109375,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "671372737",
        "mapid": "1",
        "bftitle": "Leysdown-on-Sea",
        "sector": "0",
        "posx": 3766.18310546875,
        "posy": 4656.12890625,
        "gamemap": "70439"
    },
    {
        "id": "671808963",
        "mapid": "1",
        "bftitle": "Duvenäs",
        "sector": "0",
        "posx": 7530.88916015625,
        "posy": 211.97279357910156,
        "gamemap": "204",
        "rotation": 3
    },
    {
        "id": "671946336",
        "mapid": "1",
        "bftitle": "Shyshaky",
        "sector": "0",
        "posx": 13484.6796875,
        "posy": 5367.998046875,
        "gamemap": "70439"
    },
    {
        "id": "672618991",
        "mapid": "1",
        "bftitle": "Khatsyezhyna",
        "sector": "0",
        "posx": 11522.7001953125,
        "posy": 3456.821044921875,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "672762790",
        "mapid": "1",
        "bftitle": "Bačka Palanka",
        "sector": "0",
        "posx": 9199.3603515625,
        "posy": 7395.9580078125,
        "gamemap": "204"
    },
    {
        "id": "672770432",
        "mapid": "1",
        "bftitle": "Tivoli",
        "sector": "0",
        "posx": 7268,
        "posy": 8738.9609375,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "673245857",
        "mapid": "1",
        "bftitle": "Håstrup",
        "sector": "0",
        "posx": 6492.35791015625,
        "posy": 2751.717041015625,
        "gamemap": "201"
    },
    {
        "id": "674117787",
        "mapid": "1",
        "bftitle": "Shchebino",
        "sector": "0",
        "posx": 12750.080078125,
        "posy": 2569.1201171875,
        "gamemap": "203",
        "rotation": 3
    },
    {
        "id": "674148182",
        "mapid": "1",
        "bftitle": "Borgehage",
        "sector": "0",
        "posx": 8404.037109375,
        "posy": 1921.0240478515625,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "674284269",
        "mapid": "1",
        "bftitle": "Graz",
        "sector": "0",
        "posx": 8043.86376953125,
        "posy": 6621.9638671875,
        "gamemap": "201"
    },
    {
        "id": "674397669",
        "mapid": "1",
        "bftitle": "Fleurance",
        "sector": "0",
        "posx": 3709.375,
        "posy": 7977.009765625,
        "gamemap": "201"
    },
    {
        "id": "674521471",
        "mapid": "1",
        "bftitle": "Bischofferode",
        "sector": "0",
        "posx": 6576.451171875,
        "posy": 4615.44189453125,
        "gamemap": "201"
    },
    {
        "id": "674699870",
        "mapid": "1",
        "bftitle": "Karlstad",
        "sector": "0",
        "posx": 7473.31005859375,
        "posy": 496.489501953125,
        "gamemap": "70439"
    },
    {
        "id": "674829367",
        "mapid": "1",
        "bftitle": "Târgu Jiu",
        "sector": "0",
        "posx": 10340.0400390625,
        "posy": 7480.02294921875,
        "gamemap": "201"
    },
    {
        "id": "675518496",
        "mapid": "1",
        "bftitle": "Narva",
        "sector": "0",
        "posx": 11778.400390625,
        "posy": 497.6935119628906,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "676077276",
        "mapid": "1",
        "bftitle": "Dorking",
        "sector": "0",
        "posx": 3418.464111328125,
        "posy": 4740.10400390625,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "676577748",
        "mapid": "1",
        "bftitle": "Černý Most",
        "sector": "0",
        "posx": 7819.72607421875,
        "posy": 5276.66796875,
        "gamemap": "203",
        "rotation": 1
    },
    {
        "id": "676586713",
        "mapid": "1",
        "bftitle": "Carnikava",
        "sector": "0",
        "posx": 10630.5595703125,
        "posy": 1759.3189697265625,
        "gamemap": "70439"
    },
    {
        "id": "676596306",
        "mapid": "1",
        "bftitle": "Barkentange",
        "sector": "0",
        "posx": 5799.3681640625,
        "posy": 3883.462890625,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "676738742",
        "mapid": "1",
        "bftitle": "Nakskov",
        "sector": "0",
        "posx": 6751.52099609375,
        "posy": 3020.617919921875,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "676879651",
        "mapid": "1",
        "bftitle": "Castelnuovo Vomano",
        "sector": "0",
        "posx": 7574.8671875,
        "posy": 8470.966796875,
        "gamemap": "203",
        "rotation": 1
    },
    {
        "id": "677079871",
        "mapid": "1",
        "bftitle": "Prozor",
        "sector": "0",
        "posx": 8676.77734375,
        "posy": 7987.6591796875,
        "gamemap": "201"
    },
    {
        "id": "677192758",
        "mapid": "1",
        "bftitle": "Smålandsstenar",
        "sector": "0",
        "posx": 7442.9501953125,
        "posy": 1739.06298828125,
        "gamemap": "203",
        "rotation": 2
    },
    {
        "id": "677368190",
        "mapid": "1",
        "bftitle": "Rygge Lufthavn",
        "sector": "0",
        "posx": 6577.93701171875,
        "posy": 289.2518005371094,
        "gamemap": "205"
    },
    {
        "id": "677908162",
        "mapid": "1",
        "bftitle": "Ringkøbing",
        "sector": "0",
        "posx": 5931.5830078125,
        "posy": 2316.89501953125,
        "gamemap": "70439"
    },
    {
        "id": "677936471",
        "mapid": "1",
        "bftitle": "Urla",
        "sector": "0",
        "posx": 11360.330078125,
        "posy": 10143.1796875,
        "gamemap": "205",
        "rotation": 3
    },
    {
        "id": "677951802",
        "mapid": "1",
        "bftitle": "Wettingen",
        "sector": "0",
        "posx": 5952.7890625,
        "posy": 6446.27880859375,
        "gamemap": "201"
    },
    {
        "id": "678028182",
        "mapid": "1",
        "bftitle": "Voznesensk",
        "sector": "0",
        "posx": 12698.9697265625,
        "posy": 6404.9951171875,
        "gamemap": "70439"
    },
    {
        "id": "678135031",
        "mapid": "1",
        "bftitle": "Porto-Vecchio",
        "sector": "0",
        "posx": 6235.10498046875,
        "posy": 8884.158203125,
        "gamemap": "70439"
    },
    {
        "id": "678147497",
        "mapid": "1",
        "bftitle": "Jelling",
        "sector": "0",
        "posx": 6277.998046875,
        "posy": 2492.962890625,
        "gamemap": "70439"
    },
    {
        "id": "678209154",
        "mapid": "1",
        "bftitle": "Bedford",
        "sector": "0",
        "posx": 3427.158935546875,
        "posy": 4280.1650390625,
        "gamemap": "203",
        "rotation": 3
    },
    {
        "id": "678729270",
        "mapid": "1",
        "bftitle": "Nyzhni Sirohozy",
        "sector": "0",
        "posx": 13592.919921875,
        "posy": 6716.36083984375,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "679510112",
        "mapid": "1",
        "bftitle": "Altenkirchen",
        "sector": "0",
        "posx": 5755.0439453125,
        "posy": 4996.4541015625,
        "gamemap": "201"
    },
    {
        "id": "679577135",
        "mapid": "1",
        "bftitle": "Igoumenitsa",
        "sector": "0",
        "posx": 9455.9462890625,
        "posy": 9695.287109375,
        "gamemap": "70439"
    },
    {
        "id": "679900008",
        "mapid": "1",
        "bftitle": "Champagnole",
        "sector": "0",
        "posx": 5248.453125,
        "posy": 6761.1640625,
        "gamemap": "201"
    },
    {
        "id": "680359426",
        "mapid": "1",
        "bftitle": "Pivka",
        "sector": "0",
        "posx": 7676.24609375,
        "posy": 7214.080078125,
        "gamemap": "201"
    },
    {
        "id": "680632632",
        "mapid": "1",
        "bftitle": "Papyalyova",
        "sector": "0",
        "posx": 10577.169921875,
        "posy": 4011.638916015625,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "680729249",
        "mapid": "1",
        "bftitle": "Annan",
        "sector": "0",
        "posx": 2560.4599609375,
        "posy": 2891.695068359375,
        "gamemap": "70439"
    },
    {
        "id": "681144886",
        "mapid": "1",
        "bftitle": "Alekseyevka",
        "sector": "0",
        "posx": 14856.259765625,
        "posy": 5022.0859375,
        "gamemap": "201"
    },
    {
        "id": "681285493",
        "mapid": "1",
        "bftitle": "Klimovo",
        "sector": "0",
        "posx": 12951.51953125,
        "posy": 4192.14501953125,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "681355406",
        "mapid": "1",
        "bftitle": "Svetlaya",
        "sector": "0",
        "posx": 11339.9501953125,
        "posy": 3898.721923828125,
        "gamemap": "203",
        "rotation": 2
    },
    {
        "id": "681369474",
        "mapid": "1",
        "bftitle": "Kato Souli",
        "sector": "0",
        "posx": 10554.8896484375,
        "posy": 10201.400390625,
        "gamemap": "70439"
    },
    {
        "id": "681480839",
        "mapid": "1",
        "bftitle": "Mengen",
        "sector": "0",
        "posx": 6258.9560546875,
        "posy": 6202.39013671875,
        "gamemap": "201"
    },
    {
        "id": "681764082",
        "mapid": "1",
        "bftitle": "Ereğli",
        "sector": "0",
        "posx": 12742.26953125,
        "posy": 9023.8740234375,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "681910229",
        "mapid": "1",
        "bftitle": "Szigetszentmiklós",
        "sector": "0",
        "posx": 9104.2958984375,
        "posy": 6507.06982421875,
        "gamemap": "70439"
    },
    {
        "id": "682570259",
        "mapid": "1",
        "bftitle": "Lanton",
        "sector": "0",
        "posx": 3211.455078125,
        "posy": 7623.83984375,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "682820748",
        "mapid": "1",
        "bftitle": "Poschiavo",
        "sector": "0",
        "posx": 6463.0830078125,
        "posy": 6941.451171875,
        "gamemap": "201"
    },
    {
        "id": "682969248",
        "mapid": "1",
        "bftitle": "Alivéri",
        "sector": "0",
        "posx": 10559.8798828125,
        "posy": 10107.8798828125,
        "gamemap": "203",
        "rotation": 1
    },
    {
        "id": "684136313",
        "mapid": "1",
        "bftitle": "Vaslui",
        "sector": "0",
        "posx": 11644.4599609375,
        "posy": 6809.01220703125,
        "gamemap": "201"
    },
    {
        "id": "684296152",
        "mapid": "1",
        "bftitle": "Czaplinek",
        "sector": "0",
        "posx": 8273.48046875,
        "posy": 3615.056884765625,
        "gamemap": "70439"
    },
    {
        "id": "684381302",
        "mapid": "1",
        "bftitle": "Hemmingstedt",
        "sector": "0",
        "posx": 6141.64208984375,
        "posy": 3289.111083984375,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "684437501",
        "mapid": "1",
        "bftitle": "Bad Wurzach",
        "sector": "0",
        "posx": 6416.078125,
        "posy": 6254.41796875,
        "gamemap": "201"
    },
    {
        "id": "684882408",
        "mapid": "1",
        "bftitle": "Dokshytsy",
        "sector": "0",
        "posx": 11654.240234375,
        "posy": 2941.333984375,
        "gamemap": "201"
    },
    {
        "id": "685094699",
        "mapid": "1",
        "bftitle": "Tonstad",
        "sector": "0",
        "posx": 5483.953125,
        "posy": 907.5330810546875,
        "gamemap": "201"
    },
    {
        "id": "685259251",
        "mapid": "1",
        "bftitle": "Airfield 'Nothung'",
        "sector": "0",
        "posx": 16236.6298828125,
        "posy": 15908.830078125,
        "gamemap": "204"
    },
    {
        "id": "685464764",
        "mapid": "1",
        "bftitle": "Sarıot",
        "sector": "0",
        "posx": 12145.5400390625,
        "posy": 9579.6533203125,
        "gamemap": "204",
        "rotation": 3
    },
    {
        "id": "686165357",
        "mapid": "1",
        "bftitle": "Myronivka",
        "sector": "0",
        "posx": 12596.8095703125,
        "posy": 5469.32177734375,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "686501689",
        "mapid": "1",
        "bftitle": "Middelfart",
        "sector": "0",
        "posx": 6407.216796875,
        "posy": 2644.405029296875,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "686921721",
        "mapid": "1",
        "bftitle": "Åmli",
        "sector": "0",
        "posx": 6002.6650390625,
        "posy": 847.376220703125,
        "gamemap": "201"
    },
    {
        "id": "687053648",
        "mapid": "1",
        "bftitle": "Pochep",
        "sector": "0",
        "posx": 13319.1298828125,
        "posy": 3922.97998046875,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "687107633",
        "mapid": "1",
        "bftitle": "Belyye Berega",
        "sector": "0",
        "posx": 13676.0498046875,
        "posy": 3787.906005859375,
        "gamemap": "70439"
    },
    {
        "id": "687317962",
        "mapid": "1",
        "bftitle": "Falmouth",
        "sector": "0",
        "posx": 2006.052001953125,
        "posy": 5324.89599609375,
        "gamemap": "70439"
    },
    {
        "id": "687631309",
        "mapid": "1",
        "bftitle": "Rîbniţa",
        "sector": "0",
        "posx": 12016.080078125,
        "posy": 6316.69189453125,
        "gamemap": "70439"
    },
    {
        "id": "688123721",
        "mapid": "1",
        "bftitle": "Monfalcone",
        "sector": "0",
        "posx": 7483.3330078125,
        "posy": 7164.333984375,
        "gamemap": "70439"
    },
    {
        "id": "688832283",
        "mapid": "1",
        "bftitle": "Tsarevo",
        "sector": "0",
        "posx": 11677.3203125,
        "posy": 8654.765625,
        "gamemap": "70439"
    },
    {
        "id": "689060696",
        "mapid": "1",
        "bftitle": "Corlay",
        "sector": "0",
        "posx": 2615.72705078125,
        "posy": 6084.86083984375,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "689873520",
        "mapid": "1",
        "bftitle": "Mykhaylivka",
        "sector": "0",
        "posx": 13839.7099609375,
        "posy": 6532.65087890625,
        "gamemap": "201"
    },
    {
        "id": "690544291",
        "mapid": "1",
        "bftitle": "Buchen",
        "sector": "0",
        "posx": 6247.8427734375,
        "posy": 5531.22021484375,
        "gamemap": "201"
    },
    {
        "id": "691031749",
        "mapid": "1",
        "bftitle": "Bohodukhiv",
        "sector": "0",
        "posx": 13929.2001953125,
        "posy": 5238.0048828125,
        "gamemap": "70439"
    },
    {
        "id": "691723084",
        "mapid": "1",
        "bftitle": "Preuilly-sur-Claise",
        "sector": "0",
        "posx": 3787.4990234375,
        "posy": 6713.84423828125,
        "gamemap": "203",
        "rotation": 3
    },
    {
        "id": "692053951",
        "mapid": "1",
        "bftitle": "Landshut",
        "sector": "0",
        "posx": 7095.57177734375,
        "posy": 5842.8388671875,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "692184076",
        "mapid": "1",
        "bftitle": "Nevel'",
        "sector": "0",
        "posx": 12287.91015625,
        "posy": 2353.43505859375,
        "gamemap": "201"
    },
    {
        "id": "692567600",
        "mapid": "1",
        "bftitle": "Bourne End Airfield",
        "sector": "0",
        "posx": 3361.843017578125,
        "posy": 4496.923828125,
        "gamemap": "205",
        "rotation": 1
    },
    {
        "id": "692998055",
        "mapid": "1",
        "bftitle": "Klosterneuburg",
        "sector": "0",
        "posx": 8300.416015625,
        "posy": 6078.81005859375,
        "gamemap": "201"
    },
    {
        "id": "693172883",
        "mapid": "1",
        "bftitle": "Andria",
        "sector": "0",
        "posx": 8266.330078125,
        "posy": 9040.822265625,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "693227697",
        "mapid": "1",
        "bftitle": "Romorantin-Lanthenay",
        "sector": "0",
        "posx": 4028.0009765625,
        "posy": 6491.578125,
        "gamemap": "70439"
    },
    {
        "id": "693285666",
        "mapid": "1",
        "bftitle": "Kamnik",
        "sector": "0",
        "posx": 7798.244140625,
        "posy": 6983.53076171875,
        "gamemap": "201"
    },
    {
        "id": "693475066",
        "mapid": "1",
        "bftitle": "Ardes",
        "sector": "0",
        "posx": 4433.49609375,
        "posy": 7333.326171875,
        "gamemap": "201"
    },
    {
        "id": "693527612",
        "mapid": "1",
        "bftitle": "Kuznetsovsk",
        "sector": "0",
        "posx": 11097.2900390625,
        "posy": 4526.69580078125,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "693841550",
        "mapid": "1",
        "bftitle": "Orovka",
        "sector": "0",
        "posx": 12108.580078125,
        "posy": 571.285400390625,
        "gamemap": "201"
    },
    {
        "id": "693894548",
        "mapid": "1",
        "bftitle": "Gudhem",
        "sector": "0",
        "posx": 7492.05908203125,
        "posy": 1152.60400390625,
        "gamemap": "70439"
    },
    {
        "id": "693903068",
        "mapid": "1",
        "bftitle": "Ialoveni",
        "sector": "0",
        "posx": 11950.6201171875,
        "posy": 6675.47509765625,
        "gamemap": "70439"
    },
    {
        "id": "694102284",
        "mapid": "1",
        "bftitle": "Belin-Béliet",
        "sector": "0",
        "posx": 3300.659912109375,
        "posy": 7710.18505859375,
        "gamemap": "203"
    },
    {
        "id": "694298628",
        "mapid": "1",
        "bftitle": "Söke",
        "sector": "0",
        "posx": 11548.5498046875,
        "posy": 10358.58984375,
        "gamemap": "70439"
    },
    {
        "id": "694613984",
        "mapid": "1",
        "bftitle": "Poggio Moiano",
        "sector": "0",
        "posx": 7290.9208984375,
        "posy": 8640.9970703125,
        "gamemap": "203",
        "rotation": 1
    },
    {
        "id": "694686939",
        "mapid": "1",
        "bftitle": "Krakow",
        "sector": "0",
        "posx": 9359.0087890625,
        "posy": 5285.52587890625,
        "gamemap": "201"
    },
    {
        "id": "695039403",
        "mapid": "1",
        "bftitle": "Wandlitz",
        "sector": "0",
        "posx": 7459.9501953125,
        "posy": 4016.635009765625,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "695507042",
        "mapid": "1",
        "bftitle": "Gießen",
        "sector": "0",
        "posx": 6068.52197265625,
        "posy": 5022.794921875,
        "gamemap": "203"
    },
    {
        "id": "695741086",
        "mapid": "1",
        "bftitle": "Auxi-le-Château",
        "sector": "0",
        "posx": 4135.26611328125,
        "posy": 5207.4072265625,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "696032098",
        "mapid": "1",
        "bftitle": "Hinwil",
        "sector": "0",
        "posx": 6107.43603515625,
        "posy": 6523.1171875,
        "gamemap": "203",
        "rotation": 2
    },
    {
        "id": "696088850",
        "mapid": "1",
        "bftitle": "Asnières-sur-Seine",
        "sector": "0",
        "posx": 4177.2177734375,
        "posy": 5795.51220703125,
        "gamemap": "203"
    },
    {
        "id": "696226362",
        "mapid": "1",
        "bftitle": "Rukavy",
        "sector": "0",
        "posx": 12121.2802734375,
        "posy": 2307.135986328125,
        "gamemap": "70439"
    },
    {
        "id": "696394680",
        "mapid": "1",
        "bftitle": "Sestroretsk",
        "sector": "0",
        "posx": 12298.26953125,
        "posy": 75.45419311523438,
        "gamemap": "203"
    },
    {
        "id": "696435502",
        "mapid": "1",
        "bftitle": "Żyrardów",
        "sector": "0",
        "posx": 9508.330078125,
        "posy": 4351.97998046875,
        "gamemap": "70439"
    },
    {
        "id": "696483097",
        "mapid": "1",
        "bftitle": "Seelow",
        "sector": "0",
        "posx": 7697.90380859375,
        "posy": 4119.99609375,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "696552287",
        "mapid": "1",
        "bftitle": "Varades",
        "sector": "0",
        "posx": 3213.56494140625,
        "posy": 6483.76904296875,
        "gamemap": "70439"
    },
    {
        "id": "696828668",
        "mapid": "1",
        "bftitle": "Buje",
        "sector": "0",
        "posx": 7519.73291015625,
        "posy": 7329.12109375,
        "gamemap": "201"
    },
    {
        "id": "697316898",
        "mapid": "1",
        "bftitle": "Coutras",
        "sector": "0",
        "posx": 3475.94189453125,
        "posy": 7486.98583984375,
        "gamemap": "203",
        "rotation": 3
    },
    {
        "id": "697339985",
        "mapid": "1",
        "bftitle": "Como",
        "sector": "0",
        "posx": 6176.8251953125,
        "posy": 7164.22119140625,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "697734577",
        "mapid": "1",
        "bftitle": "Uman'",
        "sector": "0",
        "posx": 12373.91015625,
        "posy": 5881.26220703125,
        "gamemap": "70439"
    },
    {
        "id": "698167318",
        "mapid": "1",
        "bftitle": "Zhukovo",
        "sector": "0",
        "posx": 14285.75,
        "posy": 2869.35693359375,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "698172855",
        "mapid": "1",
        "bftitle": "Eastbourne",
        "sector": "0",
        "posx": 3598.428955078125,
        "posy": 4957.85595703125,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "698276958",
        "mapid": "1",
        "bftitle": "Izyaslav",
        "sector": "0",
        "posx": 11377.099609375,
        "posy": 5258.82177734375,
        "gamemap": "70439"
    },
    {
        "id": "698368833",
        "mapid": "1",
        "bftitle": "Cluj-Napoca",
        "sector": "0",
        "posx": 10432.8603515625,
        "posy": 6751.619140625,
        "gamemap": "201"
    },
    {
        "id": "698404798",
        "mapid": "1",
        "bftitle": "Ladispoli",
        "sector": "0",
        "posx": 7055.72314453125,
        "posy": 8739.9580078125,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "698531117",
        "mapid": "1",
        "bftitle": "Khot'kovo",
        "sector": "0",
        "posx": 14652.580078125,
        "posy": 2228.3740234375,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "698595338",
        "mapid": "1",
        "bftitle": "Rozdol'ne",
        "sector": "0",
        "posx": 13697.83984375,
        "posy": 7313.18115234375,
        "gamemap": "201"
    },
    {
        "id": "699168815",
        "mapid": "1",
        "bftitle": "Kobelyaky",
        "sector": "0",
        "posx": 13539.009765625,
        "posy": 5701.2158203125,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "699785327",
        "mapid": "1",
        "bftitle": "Derazhnya",
        "sector": "0",
        "posx": 11556.66015625,
        "posy": 5646.8681640625,
        "gamemap": "201"
    },
    {
        "id": "699957006",
        "mapid": "1",
        "bftitle": "Verkhov'ye",
        "sector": "0",
        "posx": 14431.76953125,
        "posy": 3982.6259765625,
        "gamemap": "70439"
    },
    {
        "id": "700126483",
        "mapid": "1",
        "bftitle": "Salme",
        "sector": "0",
        "posx": 10040.7197265625,
        "posy": 1190.0269775390625,
        "gamemap": "70439"
    },
    {
        "id": "700358454",
        "mapid": "1",
        "bftitle": "Stans",
        "sector": "0",
        "posx": 5967.3671875,
        "posy": 6671.51318359375,
        "gamemap": "203"
    },
    {
        "id": "700568229",
        "mapid": "1",
        "bftitle": "Macmerry",
        "sector": "0",
        "posx": 2673.760009765625,
        "posy": 2414.886962890625,
        "gamemap": "203"
    },
    {
        "id": "700876157",
        "mapid": "1",
        "bftitle": "Hjo",
        "sector": "0",
        "posx": 7703.201171875,
        "posy": 1111.56005859375,
        "gamemap": "70439"
    },
    {
        "id": "700948021",
        "mapid": "1",
        "bftitle": "Marhanets’",
        "sector": "0",
        "posx": 13665.400390625,
        "posy": 6374.13818359375,
        "gamemap": "70439"
    },
    {
        "id": "700948156",
        "mapid": "1",
        "bftitle": "Deggendorf",
        "sector": "0",
        "posx": 7314.1708984375,
        "posy": 5839.82421875,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "701081440",
        "mapid": "1",
        "bftitle": "Sappada",
        "sector": "0",
        "posx": 7233.1298828125,
        "posy": 6837.6708984375,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "702162325",
        "mapid": "1",
        "bftitle": "Yverdon-les-Bains",
        "sector": "0",
        "posx": 5461.73681640625,
        "posy": 6746.509765625,
        "gamemap": "201"
    },
    {
        "id": "702819666",
        "mapid": "1",
        "bftitle": "Velyka Bahachka",
        "sector": "0",
        "posx": 13400.080078125,
        "posy": 5409.4599609375,
        "gamemap": "203"
    },
    {
        "id": "702836364",
        "mapid": "1",
        "bftitle": "Starogard Gdański",
        "sector": "0",
        "posx": 8945.6396484375,
        "posy": 3412.2041015625,
        "gamemap": "204"
    },
    {
        "id": "702909251",
        "mapid": "1",
        "bftitle": "Łomża",
        "sector": "0",
        "posx": 9981.251953125,
        "posy": 3802.910888671875,
        "gamemap": "70439"
    },
    {
        "id": "703552448",
        "mapid": "1",
        "bftitle": "Lommeuld",
        "sector": "0",
        "posx": 10326.2001953125,
        "posy": 7991.06787109375,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "703895074",
        "mapid": "1",
        "bftitle": "Sudak",
        "sector": "0",
        "posx": 13785.9599609375,
        "posy": 7609.19921875,
        "gamemap": "70439"
    },
    {
        "id": "703983650",
        "mapid": "1",
        "bftitle": "Korenëvo",
        "sector": "0",
        "posx": 13747.5595703125,
        "posy": 4655.548828125,
        "gamemap": "70439"
    },
    {
        "id": "703985954",
        "mapid": "1",
        "bftitle": "Tatabánya",
        "sector": "0",
        "posx": 8906.615234375,
        "posy": 6396.2451171875,
        "gamemap": "201"
    },
    {
        "id": "704076759",
        "mapid": "1",
        "bftitle": "Northwich",
        "sector": "0",
        "posx": 2778.613037109375,
        "posy": 3761.827880859375,
        "gamemap": "203",
        "rotation": 2
    },
    {
        "id": "705011252",
        "mapid": "1",
        "bftitle": "Stara Zagora",
        "sector": "0",
        "posx": 11031.419921875,
        "posy": 8549.7041015625,
        "gamemap": "201"
    },
    {
        "id": "705267461",
        "mapid": "1",
        "bftitle": "Chalcis",
        "sector": "0",
        "posx": 10433.7001953125,
        "posy": 10090.2099609375,
        "gamemap": "70439"
    },
    {
        "id": "705624301",
        "mapid": "1",
        "bftitle": "Storebro",
        "sector": "0",
        "posx": 8161.115234375,
        "posy": 1510.9139404296875,
        "gamemap": "203",
        "rotation": 2
    },
    {
        "id": "705692549",
        "mapid": "1",
        "bftitle": "Pustomyty",
        "sector": "0",
        "posx": 10524.599609375,
        "posy": 5444.11279296875,
        "gamemap": "201"
    },
    {
        "id": "706017041",
        "mapid": "1",
        "bftitle": "Velventós",
        "sector": "0",
        "posx": 9985.9677734375,
        "posy": 9406.03515625,
        "gamemap": "203",
        "rotation": 2
    },
    {
        "id": "706063879",
        "mapid": "1",
        "bftitle": "Corfu",
        "sector": "0",
        "posx": 9320.8515625,
        "posy": 9653.8525390625,
        "gamemap": "70439"
    },
    {
        "id": "706119804",
        "mapid": "1",
        "bftitle": "Saint-Nazaire",
        "sector": "0",
        "posx": 2868.385009765625,
        "posy": 6536.203125,
        "gamemap": "203",
        "rotation": 1
    },
    {
        "id": "706551761",
        "mapid": "1",
        "bftitle": "Österbymo",
        "sector": "0",
        "posx": 7992.14697265625,
        "posy": 1377.583984375,
        "gamemap": "70439"
    },
    {
        "id": "706694140",
        "mapid": "1",
        "bftitle": "Chester-le-Street",
        "sector": "0",
        "posx": 3044.1279296875,
        "posy": 2963.89208984375,
        "gamemap": "203",
        "rotation": 1
    },
    {
        "id": "706807732",
        "mapid": "1",
        "bftitle": "Satu Mare",
        "sector": "0",
        "posx": 10216.6904296875,
        "posy": 6302.2509765625,
        "gamemap": "201"
    },
    {
        "id": "706964899",
        "mapid": "1",
        "bftitle": "Nekhoteyevka",
        "sector": "0",
        "posx": 14155.5,
        "posy": 5156.001953125,
        "gamemap": "201"
    },
    {
        "id": "707129633",
        "mapid": "1",
        "bftitle": "Szentes",
        "sector": "0",
        "posx": 9457.33203125,
        "posy": 6799.14892578125,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "707213407",
        "mapid": "1",
        "bftitle": "Bolderaja",
        "sector": "0",
        "posx": 10566.4501953125,
        "posy": 1812.6180419921875,
        "gamemap": "70439"
    },
    {
        "id": "707358974",
        "mapid": "1",
        "bftitle": "Disentis",
        "sector": "0",
        "posx": 6109.47900390625,
        "posy": 6778.8662109375,
        "gamemap": "201"
    },
    {
        "id": "707392891",
        "mapid": "1",
        "bftitle": "Dormillouse",
        "sector": "0",
        "posx": 5402.43603515625,
        "posy": 7608.68896484375,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "707430665",
        "mapid": "1",
        "bftitle": "Degerfors",
        "sector": "0",
        "posx": 7745.09716796875,
        "posy": 578.232177734375,
        "gamemap": "205"
    },
    {
        "id": "707693218",
        "mapid": "1",
        "bftitle": "Basingstoke",
        "sector": "0",
        "posx": 3247.735107421875,
        "posy": 4735.0341796875,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "708040451",
        "mapid": "1",
        "bftitle": "Freiburg",
        "sector": "0",
        "posx": 6226.73291015625,
        "posy": 3487.889892578125,
        "gamemap": "70439"
    },
    {
        "id": "708162053",
        "mapid": "1",
        "bftitle": "Comarnic",
        "sector": "0",
        "posx": 11028.8896484375,
        "posy": 7396.30712890625,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "708340178",
        "mapid": "1",
        "bftitle": "Strashëvo",
        "sector": "0",
        "posx": 12347.099609375,
        "posy": 1041.7879638671875,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "708609963",
        "mapid": "1",
        "bftitle": "Linlithgow",
        "sector": "0",
        "posx": 2458.694091796875,
        "posy": 2376.955078125,
        "gamemap": "203",
        "rotation": 2
    },
    {
        "id": "708612927",
        "mapid": "1",
        "bftitle": "Civitavecchia",
        "sector": "0",
        "posx": 6972.98876953125,
        "posy": 8685.1376953125,
        "gamemap": "70439"
    },
    {
        "id": "708779996",
        "mapid": "1",
        "bftitle": "Arvika",
        "sector": "0",
        "posx": 7204.10400390625,
        "posy": 335.8830871582031,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "708858036",
        "mapid": "1",
        "bftitle": "Kilkis",
        "sector": "0",
        "posx": 10220.150390625,
        "posy": 9119.1083984375,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "709041032",
        "mapid": "1",
        "bftitle": "Pickering",
        "sector": "0",
        "posx": 3290.2939453125,
        "posy": 3268.175048828125,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "709125561",
        "mapid": "1",
        "bftitle": "Kashin",
        "sector": "0",
        "posx": 14539.0302734375,
        "posy": 1633.97998046875,
        "gamemap": "201"
    },
    {
        "id": "709484282",
        "mapid": "1",
        "bftitle": "Smederevska Palanka",
        "sector": "0",
        "posx": 9658.6640625,
        "posy": 7764.35791015625,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "709669821",
        "mapid": "1",
        "bftitle": "Cherepovets",
        "sector": "0",
        "posx": 14624.599609375,
        "posy": 638.530517578125,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "710041167",
        "mapid": "1",
        "bftitle": "Arnstein",
        "sector": "0",
        "posx": 6437.4677734375,
        "posy": 5324.01123046875,
        "gamemap": "70439"
    },
    {
        "id": "710150592",
        "mapid": "1",
        "bftitle": "Shcherbinino",
        "sector": "0",
        "posx": 13369.099609375,
        "posy": 2911.10400390625,
        "gamemap": "70439"
    },
    {
        "id": "710416434",
        "mapid": "1",
        "bftitle": "Nantes",
        "sector": "0",
        "posx": 3080.35888671875,
        "posy": 6593.001953125,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "710487775",
        "mapid": "1",
        "bftitle": "Lisiy Nos",
        "sector": "0",
        "posx": 12314.76953125,
        "posy": 123.45480346679688,
        "gamemap": "70439"
    },
    {
        "id": "710669139",
        "mapid": "1",
        "bftitle": "Derventa",
        "sector": "0",
        "posx": 8764.3115234375,
        "posy": 7509.9267578125,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "710793250",
        "mapid": "1",
        "bftitle": "Gorron",
        "sector": "0",
        "posx": 3276.80810546875,
        "posy": 6031.83203125,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "711405163",
        "mapid": "1",
        "bftitle": "Haverdal",
        "sector": "0",
        "posx": 7229.5361328125,
        "posy": 1979.60595703125,
        "gamemap": "203",
        "rotation": 2
    },
    {
        "id": "711596311",
        "mapid": "1",
        "bftitle": "Galaxidi",
        "sector": "0",
        "posx": 10075.25,
        "posy": 10121.4404296875,
        "gamemap": "70439"
    },
    {
        "id": "711722112",
        "mapid": "1",
        "bftitle": "Pavlovo",
        "sector": "0",
        "posx": 12571.7197265625,
        "posy": 246.0821990966797,
        "gamemap": "70439"
    },
    {
        "id": "711864955",
        "mapid": "1",
        "bftitle": "Saint-Germain-Lembron",
        "sector": "0",
        "posx": 4464.6162109375,
        "posy": 7308.93798828125,
        "gamemap": "201"
    },
    {
        "id": "712693983",
        "mapid": "1",
        "bftitle": "Berezna",
        "sector": "0",
        "posx": 12831.990234375,
        "posy": 4579.828125,
        "gamemap": "70439"
    },
    {
        "id": "712904778",
        "mapid": "1",
        "bftitle": "Sösdala",
        "sector": "0",
        "posx": 7521.1181640625,
        "posy": 2346.889892578125,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "713011188",
        "mapid": "1",
        "bftitle": "Gakkova",
        "sector": "0",
        "posx": 11730.830078125,
        "posy": 335.3110046386719,
        "gamemap": "70439"
    },
    {
        "id": "713096710",
        "mapid": "1",
        "bftitle": "Opglabbeek",
        "sector": "0",
        "posx": 5151.69677734375,
        "posy": 4829.64697265625,
        "gamemap": "70439"
    },
    {
        "id": "713424150",
        "mapid": "1",
        "bftitle": "Ostrowiec Świętokrzyski",
        "sector": "0",
        "posx": 9783.65625,
        "posy": 4882.7421875,
        "gamemap": "70439"
    },
    {
        "id": "713875098",
        "mapid": "1",
        "bftitle": "Tours",
        "sector": "0",
        "posx": 3677.18701171875,
        "posy": 6477.58203125,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "714445011",
        "mapid": "1",
        "bftitle": "Welshpool",
        "sector": "0",
        "posx": 2592.52001953125,
        "posy": 4056.68994140625,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "714539225",
        "mapid": "1",
        "bftitle": "Dovsk",
        "sector": "0",
        "posx": 12443.75,
        "posy": 3813.23193359375,
        "gamemap": "70439"
    },
    {
        "id": "714840271",
        "mapid": "1",
        "bftitle": "Kholm",
        "sector": "0",
        "posx": 12654.1298828125,
        "posy": 1750.623046875,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "715186312",
        "mapid": "1",
        "bftitle": "Racale",
        "sector": "0",
        "posx": 8818.1748046875,
        "posy": 9519.6923828125,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "715204915",
        "mapid": "1",
        "bftitle": "Prenzlau",
        "sector": "0",
        "posx": 7573.9921875,
        "posy": 3758.673095703125,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "715234757",
        "mapid": "1",
        "bftitle": "Petrykivka",
        "sector": "0",
        "posx": 13667.1201171875,
        "posy": 5889.79296875,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "715363931",
        "mapid": "1",
        "bftitle": "Bar-le-Duc",
        "sector": "0",
        "posx": 5003.97509765625,
        "posy": 5784.2978515625,
        "gamemap": "203"
    },
    {
        "id": "715709646",
        "mapid": "1",
        "bftitle": "Gedser",
        "sector": "0",
        "posx": 7012.06201171875,
        "posy": 3102.575927734375,
        "gamemap": "70439"
    },
    {
        "id": "715859795",
        "mapid": "1",
        "bftitle": "Vukovar",
        "sector": "0",
        "posx": 9084.388671875,
        "posy": 7357.13818359375,
        "gamemap": "70439"
    },
    {
        "id": "716001206",
        "mapid": "1",
        "bftitle": "La Goutelle",
        "sector": "0",
        "posx": 4324.23388671875,
        "posy": 7146.337890625,
        "gamemap": "201"
    },
    {
        "id": "716201854",
        "mapid": "1",
        "bftitle": "Zug",
        "sector": "0",
        "posx": 6011.73291015625,
        "posy": 6576.0849609375,
        "gamemap": "201"
    },
    {
        "id": "716439691",
        "mapid": "1",
        "bftitle": "Cherbourg",
        "sector": "0",
        "posx": 3057.3330078125,
        "posy": 5495.5458984375,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "717674543",
        "mapid": "1",
        "bftitle": "Zaporizhia",
        "sector": "0",
        "posx": 13830.3203125,
        "posy": 6291.86279296875,
        "gamemap": "70439"
    },
    {
        "id": "718062006",
        "mapid": "1",
        "bftitle": "Aniche",
        "sector": "0",
        "posx": 4468.70703125,
        "posy": 5161.69921875,
        "gamemap": "70439"
    },
    {
        "id": "718209774",
        "mapid": "1",
        "bftitle": "Sauļi",
        "sector": "0",
        "posx": 10969.1103515625,
        "posy": 1469.407958984375,
        "gamemap": "203"
    },
    {
        "id": "718772121",
        "mapid": "1",
        "bftitle": "Bol’shoye Stiklevo",
        "sector": "0",
        "posx": 11645.98046875,
        "posy": 3465.404052734375,
        "gamemap": "203",
        "rotation": 2
    },
    {
        "id": "719273337",
        "mapid": "1",
        "bftitle": "Piszczac",
        "sector": "0",
        "posx": 10367.5498046875,
        "posy": 4384.412109375,
        "gamemap": "70439"
    },
    {
        "id": "720281133",
        "mapid": "1",
        "bftitle": "Elkhovo",
        "sector": "0",
        "posx": 11302.48046875,
        "posy": 8655.916015625,
        "gamemap": "201"
    },
    {
        "id": "720756065",
        "mapid": "1",
        "bftitle": "Agnone",
        "sector": "0",
        "posx": 7728.82177734375,
        "posy": 8797.4013671875,
        "gamemap": "201"
    },
    {
        "id": "720801635",
        "mapid": "1",
        "bftitle": "Courseulles-sur-Mer",
        "sector": "0",
        "posx": 3379.741943359375,
        "posy": 5633.455078125,
        "gamemap": "70439"
    },
    {
        "id": "720880113",
        "mapid": "1",
        "bftitle": "Knjazevac",
        "sector": "0",
        "posx": 10039.1904296875,
        "posy": 8092.1328125,
        "gamemap": "203"
    },
    {
        "id": "721300320",
        "mapid": "1",
        "bftitle": "Brønderslev",
        "sector": "0",
        "posx": 6429.02294921875,
        "posy": 1682.6090087890625,
        "gamemap": "203"
    },
    {
        "id": "721473007",
        "mapid": "1",
        "bftitle": "Drivnieki",
        "sector": "0",
        "posx": 11258.509765625,
        "posy": 2045.2559814453125,
        "gamemap": "203",
        "rotation": 1
    },
    {
        "id": "722265605",
        "mapid": "1",
        "bftitle": "Krasnoarmeyskaya",
        "sector": "0",
        "posx": 14715.9697265625,
        "posy": 7347.55615234375,
        "gamemap": "70439"
    },
    {
        "id": "722461922",
        "mapid": "1",
        "bftitle": "Kanevskaya",
        "sector": "0",
        "posx": 14935.2001953125,
        "posy": 7043.60693359375,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "722888038",
        "mapid": "1",
        "bftitle": "Porto Germeno",
        "sector": "0",
        "posx": 10334.9599609375,
        "posy": 10199.58984375,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "722910756",
        "mapid": "1",
        "bftitle": "Le Bourget Aérodrome",
        "sector": "0",
        "posx": 4285.06884765625,
        "posy": 5771.02197265625,
        "gamemap": "205",
        "rotation": 2
    },
    {
        "id": "723164834",
        "mapid": "1",
        "bftitle": "Vrontoú",
        "sector": "0",
        "posx": 10090.5,
        "posy": 9429.9169921875,
        "gamemap": "203"
    },
    {
        "id": "724017454",
        "mapid": "1",
        "bftitle": "Narbonne",
        "sector": "0",
        "posx": 4394.412109375,
        "posy": 8247.68359375,
        "gamemap": "70439"
    },
    {
        "id": "724047849",
        "mapid": "1",
        "bftitle": "Castelnovo ne' Monti",
        "sector": "0",
        "posx": 6564.52880859375,
        "posy": 7735.40283203125,
        "gamemap": "201"
    },
    {
        "id": "724223178",
        "mapid": "1",
        "bftitle": "Rahachow",
        "sector": "0",
        "posx": 12323.400390625,
        "posy": 3844.569091796875,
        "gamemap": "201"
    },
    {
        "id": "724270481",
        "mapid": "1",
        "bftitle": "Otočac",
        "sector": "0",
        "posx": 7981.57421875,
        "posy": 7555.35009765625,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "724297456",
        "mapid": "1",
        "bftitle": "Kirzhach",
        "sector": "0",
        "posx": 14904.5703125,
        "posy": 2283.70703125,
        "gamemap": "203"
    },
    {
        "id": "724392939",
        "mapid": "1",
        "bftitle": "Groß Pankow",
        "sector": "0",
        "posx": 7047.15283203125,
        "posy": 3831.72705078125,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "724581221",
        "mapid": "1",
        "bftitle": "Kirkcudbright",
        "sector": "0",
        "posx": 2328.123046875,
        "posy": 2968.777099609375,
        "gamemap": "203",
        "rotation": 1
    },
    {
        "id": "724659216",
        "mapid": "1",
        "bftitle": "Greifswald",
        "sector": "0",
        "posx": 7454.56787109375,
        "posy": 3371.56298828125,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "725056033",
        "mapid": "1",
        "bftitle": "Koronida",
        "sector": "0",
        "posx": 11014.91015625,
        "posy": 10602.4501953125,
        "gamemap": "203",
        "rotation": 1
    },
    {
        "id": "725134730",
        "mapid": "1",
        "bftitle": "Ratzeburg",
        "sector": "0",
        "posx": 6692.14111328125,
        "posy": 3553.5390625,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "725262190",
        "mapid": "1",
        "bftitle": "Wyrzysk",
        "sector": "0",
        "posx": 8576.77734375,
        "posy": 3815.2509765625,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "725263567",
        "mapid": "1",
        "bftitle": "Iași",
        "sector": "0",
        "posx": 11605.3798828125,
        "posy": 6578.583984375,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "725749094",
        "mapid": "1",
        "bftitle": "Roja",
        "sector": "0",
        "posx": 10203.25,
        "posy": 1556.7509765625,
        "gamemap": "203"
    },
    {
        "id": "725979780",
        "mapid": "1",
        "bftitle": "Pétra",
        "sector": "0",
        "posx": 11190.1103515625,
        "posy": 9760.28125,
        "gamemap": "70439"
    },
    {
        "id": "726030473",
        "mapid": "1",
        "bftitle": "Morciano di Romagna",
        "sector": "0",
        "posx": 7223.4091796875,
        "posy": 7949.9150390625,
        "gamemap": "70439"
    },
    {
        "id": "726090212",
        "mapid": "1",
        "bftitle": "Sittingbourne",
        "sector": "0",
        "posx": 3732.208984375,
        "posy": 4707.13623046875,
        "gamemap": "70439"
    },
    {
        "id": "726414684",
        "mapid": "1",
        "bftitle": "Bjerringbro",
        "sector": "0",
        "posx": 6346.8388671875,
        "posy": 2163.97412109375,
        "gamemap": "201"
    },
    {
        "id": "726704353",
        "mapid": "1",
        "bftitle": "Zrenjanin",
        "sector": "0",
        "posx": 9489.5576171875,
        "posy": 7340.21484375,
        "gamemap": "203",
        "rotation": 1
    },
    {
        "id": "726874988",
        "mapid": "1",
        "bftitle": "Colombiès",
        "sector": "0",
        "posx": 4200.27880859375,
        "posy": 7773.1669921875,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "727080156",
        "mapid": "1",
        "bftitle": "Dovje",
        "sector": "0",
        "posx": 7610.625,
        "posy": 6879.7109375,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "727288213",
        "mapid": "1",
        "bftitle": "Šilalė",
        "sector": "0",
        "posx": 10017.0302734375,
        "posy": 2631.68505859375,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "727296458",
        "mapid": "1",
        "bftitle": "Ardu",
        "sector": "0",
        "posx": 10951.9404296875,
        "posy": 657.3817749023438,
        "gamemap": "204",
        "rotation": 2
    },
    {
        "id": "727651243",
        "mapid": "1",
        "bftitle": "Gorka",
        "sector": "0",
        "posx": 12113.0595703125,
        "posy": 741.6729125976562,
        "gamemap": "201"
    },
    {
        "id": "727697116",
        "mapid": "1",
        "bftitle": "Schmallenberg",
        "sector": "0",
        "posx": 5974.81689453125,
        "posy": 4749.72509765625,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "727942212",
        "mapid": "1",
        "bftitle": "Eceabat",
        "sector": "0",
        "posx": 11233.76953125,
        "posy": 9419.60546875,
        "gamemap": "70439"
    },
    {
        "id": "728048622",
        "mapid": "1",
        "bftitle": "Rum",
        "sector": "0",
        "posx": 11250.25,
        "posy": 3389.843017578125,
        "gamemap": "201"
    },
    {
        "id": "728668724",
        "mapid": "1",
        "bftitle": "Wagun Flugplatz",
        "sector": "0",
        "posx": 7284.6201171875,
        "posy": 3462.867919921875,
        "gamemap": "204",
        "rotation": 3
    },
    {
        "id": "728764717",
        "mapid": "1",
        "bftitle": "Müden",
        "sector": "0",
        "posx": 6551.8701171875,
        "posy": 4120.84912109375,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "729037777",
        "mapid": "1",
        "bftitle": "Sigulda",
        "sector": "0",
        "posx": 10803.58984375,
        "posy": 1747.0770263671875,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "729223793",
        "mapid": "1",
        "bftitle": "Kirov",
        "sector": "0",
        "posx": 13569.2099609375,
        "posy": 3360.5048828125,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "729420034",
        "mapid": "1",
        "bftitle": "Stockheim Flugplatz",
        "sector": "0",
        "posx": 6529.3662109375,
        "posy": 5106.115234375,
        "gamemap": "204",
        "rotation": 3
    },
    {
        "id": "729424120",
        "mapid": "1",
        "bftitle": "Oswestry",
        "sector": "0",
        "posx": 2619.52587890625,
        "posy": 3958.044921875,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "729430919",
        "mapid": "1",
        "bftitle": "Modigliana",
        "sector": "0",
        "posx": 6971.85009765625,
        "posy": 7849.2490234375,
        "gamemap": "70439"
    },
    {
        "id": "730219334",
        "mapid": "1",
        "bftitle": "Norwich",
        "sector": "0",
        "posx": 3886.52490234375,
        "posy": 4065.10888671875,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "730324223",
        "mapid": "1",
        "bftitle": "Haverfordwest",
        "sector": "0",
        "posx": 2086.447021484375,
        "posy": 4452.47216796875,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "730515138",
        "mapid": "1",
        "bftitle": "Vegusdal",
        "sector": "0",
        "posx": 5903.216796875,
        "posy": 955.1541748046875,
        "gamemap": "203"
    },
    {
        "id": "730950344",
        "mapid": "1",
        "bftitle": "Ennigerloh",
        "sector": "0",
        "posx": 5869.1220703125,
        "posy": 4452.72119140625,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "731204081",
        "mapid": "1",
        "bftitle": "Voiron",
        "sector": "0",
        "posx": 5158.52685546875,
        "posy": 7348.47900390625,
        "gamemap": "203",
        "rotation": 2
    },
    {
        "id": "731410659",
        "mapid": "1",
        "bftitle": "Eibersburen",
        "sector": "0",
        "posx": 5351.89111328125,
        "posy": 3787.43701171875,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "731780033",
        "mapid": "1",
        "bftitle": "Oldham",
        "sector": "0",
        "posx": 2916.464111328125,
        "posy": 3615.260009765625,
        "gamemap": "203"
    },
    {
        "id": "732024657",
        "mapid": "1",
        "bftitle": "Moncaprice",
        "sector": "0",
        "posx": 7374.57421875,
        "posy": 3930.847900390625,
        "gamemap": "70439"
    },
    {
        "id": "732086171",
        "mapid": "1",
        "bftitle": "Örkelljunga",
        "sector": "0",
        "posx": 7407.10791015625,
        "posy": 2214.343017578125,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "732330232",
        "mapid": "1",
        "bftitle": "Casale Monferrato",
        "sector": "0",
        "posx": 5992.69580078125,
        "posy": 7445.1572265625,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "732429084",
        "mapid": "1",
        "bftitle": "Montmoreau-Saint-Cybard",
        "sector": "0",
        "posx": 3554.10888671875,
        "posy": 7333.326171875,
        "gamemap": "70439"
    },
    {
        "id": "732673942",
        "mapid": "1",
        "bftitle": "Rechytsa",
        "sector": "0",
        "posx": 12423.669921875,
        "posy": 4201.2509765625,
        "gamemap": "201"
    },
    {
        "id": "733069992",
        "mapid": "1",
        "bftitle": "Ahlerstedt",
        "sector": "0",
        "posx": 6294.130859375,
        "posy": 3707.319091796875,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "733137144",
        "mapid": "1",
        "bftitle": "Istres",
        "sector": "0",
        "posx": 4972.84716796875,
        "posy": 8095.86376953125,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "733284818",
        "mapid": "1",
        "bftitle": "Kristiansand",
        "sector": "0",
        "posx": 5853.8740234375,
        "posy": 1188.613037109375,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "733504169",
        "mapid": "1",
        "bftitle": "Baugé-en-Anjou",
        "sector": "0",
        "posx": 3483.797119140625,
        "posy": 6413.9501953125,
        "gamemap": "201"
    },
    {
        "id": "733573439",
        "mapid": "1",
        "bftitle": "Viterbo",
        "sector": "0",
        "posx": 7065.22802734375,
        "posy": 8553.5283203125,
        "gamemap": "70439"
    },
    {
        "id": "733821788",
        "mapid": "1",
        "bftitle": "Passau",
        "sector": "0",
        "posx": 7452.10009765625,
        "posy": 5962.546875,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "734350405",
        "mapid": "1",
        "bftitle": "Nauders",
        "sector": "0",
        "posx": 6597.76220703125,
        "posy": 6701.2841796875,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "734399233",
        "mapid": "1",
        "bftitle": "Monor",
        "sector": "0",
        "posx": 9215.59765625,
        "posy": 6498.259765625,
        "gamemap": "70439"
    },
    {
        "id": "734413609",
        "mapid": "1",
        "bftitle": "Storfors",
        "sector": "0",
        "posx": 7698.56201171875,
        "posy": 407.8866882324219,
        "gamemap": "201"
    },
    {
        "id": "734967806",
        "mapid": "1",
        "bftitle": "Hayfield",
        "sector": "0",
        "posx": 2944.761962890625,
        "posy": 3703.739990234375,
        "gamemap": "70439"
    },
    {
        "id": "735407407",
        "mapid": "1",
        "bftitle": "Peredkino",
        "sector": "0",
        "posx": 11939.4296875,
        "posy": 845.7534790039062,
        "gamemap": "201"
    },
    {
        "id": "735889792",
        "mapid": "1",
        "bftitle": "Velika Kladuša",
        "sector": "0",
        "posx": 8148.1572265625,
        "posy": 7423.56005859375,
        "gamemap": "70439"
    },
    {
        "id": "736062377",
        "mapid": "1",
        "bftitle": "Gorizia",
        "sector": "0",
        "posx": 7507.92919921875,
        "posy": 7104.8232421875,
        "gamemap": "201"
    },
    {
        "id": "736436438",
        "mapid": "1",
        "bftitle": "Lucca",
        "sector": "0",
        "posx": 6584.76904296875,
        "posy": 7976.4150390625,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "736610246",
        "mapid": "1",
        "bftitle": "Rossoh'",
        "sector": "0",
        "posx": 15113.330078125,
        "posy": 5222.5078125,
        "gamemap": "201"
    },
    {
        "id": "737096387",
        "mapid": "1",
        "bftitle": "Chimay",
        "sector": "0",
        "posx": 4766.8681640625,
        "posy": 5306.41796875,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "737168755",
        "mapid": "1",
        "bftitle": "Loyew",
        "sector": "0",
        "posx": 12542.009765625,
        "posy": 4401.36279296875,
        "gamemap": "204"
    },
    {
        "id": "737188463",
        "mapid": "1",
        "bftitle": "Juminda",
        "sector": "0",
        "posx": 10995.75,
        "posy": 351.6236877441406,
        "gamemap": "70439"
    },
    {
        "id": "737271458",
        "mapid": "1",
        "bftitle": "Zurich",
        "sector": "0",
        "posx": 6021.27587890625,
        "posy": 6490.7880859375,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "737949289",
        "mapid": "1",
        "bftitle": "Kerch",
        "sector": "0",
        "posx": 14215.16015625,
        "posy": 7398.65185546875,
        "gamemap": "70439"
    },
    {
        "id": "738157489",
        "mapid": "1",
        "bftitle": "Brighton",
        "sector": "0",
        "posx": 3460.69091796875,
        "posy": 4940.251953125,
        "gamemap": "70439"
    },
    {
        "id": "738418652",
        "mapid": "1",
        "bftitle": "Plieņciems",
        "sector": "0",
        "posx": 10334.419921875,
        "posy": 1784.68603515625,
        "gamemap": "70439"
    },
    {
        "id": "738709124",
        "mapid": "1",
        "bftitle": "Padarbos",
        "sector": "0",
        "posx": 10274.16015625,
        "posy": 2373.93310546875,
        "gamemap": "203"
    },
    {
        "id": "738873246",
        "mapid": "1",
        "bftitle": "Varberg",
        "sector": "0",
        "posx": 7142.7080078125,
        "posy": 1741.5140380859375,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "738962218",
        "mapid": "1",
        "bftitle": "Yershichi",
        "sector": "0",
        "posx": 13116.2099609375,
        "posy": 3557.950927734375,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "739445521",
        "mapid": "1",
        "bftitle": "Östra Ryd",
        "sector": "0",
        "posx": 8249.0537109375,
        "posy": 1056.0489501953125,
        "gamemap": "70439"
    },
    {
        "id": "739819264",
        "mapid": "1",
        "bftitle": "Czeremcha",
        "sector": "0",
        "posx": 10359.580078125,
        "posy": 4126.20703125,
        "gamemap": "201"
    },
    {
        "id": "740669985",
        "mapid": "1",
        "bftitle": "Litomyšl",
        "sector": "0",
        "posx": 8296.828125,
        "posy": 5374.255859375,
        "gamemap": "201"
    },
    {
        "id": "741138679",
        "mapid": "1",
        "bftitle": "Rossendale",
        "sector": "0",
        "posx": 2862.291015625,
        "posy": 3541.093994140625,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "741610824",
        "mapid": "1",
        "bftitle": "Skadowsk",
        "sector": "0",
        "posx": 13162.25,
        "posy": 7030.3232421875,
        "gamemap": "70439"
    },
    {
        "id": "741878376",
        "mapid": "1",
        "bftitle": "Saugues",
        "sector": "0",
        "posx": 4554.998046875,
        "posy": 7517.43603515625,
        "gamemap": "201"
    },
    {
        "id": "742019319",
        "mapid": "1",
        "bftitle": "Bøjden",
        "sector": "0",
        "posx": 6466.2890625,
        "posy": 2807.319091796875,
        "gamemap": "70439"
    },
    {
        "id": "742056244",
        "mapid": "1",
        "bftitle": "Krasni Okny",
        "sector": "0",
        "posx": 12150.599609375,
        "posy": 6415.7119140625,
        "gamemap": "203"
    },
    {
        "id": "742921621",
        "mapid": "1",
        "bftitle": "Videle",
        "sector": "0",
        "posx": 10996.9697265625,
        "posy": 7800.43212890625,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "743111425",
        "mapid": "1",
        "bftitle": "Roshal'",
        "sector": "0",
        "posx": 15203.5,
        "posy": 2538.736083984375,
        "gamemap": "70439"
    },
    {
        "id": "743273182",
        "mapid": "1",
        "bftitle": "Nördlingen",
        "sector": "0",
        "posx": 6589.55908203125,
        "posy": 5835.1748046875,
        "gamemap": "203",
        "rotation": 2
    },
    {
        "id": "744747355",
        "mapid": "1",
        "bftitle": "Mažeikiai",
        "sector": "0",
        "posx": 10061.5703125,
        "posy": 2196.633056640625,
        "gamemap": "70439"
    },
    {
        "id": "745190285",
        "mapid": "1",
        "bftitle": "Chornukhy",
        "sector": "0",
        "posx": 13171.259765625,
        "posy": 5190.64599609375,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "745376668",
        "mapid": "1",
        "bftitle": "Vollenhove",
        "sector": "0",
        "posx": 5260.36279296875,
        "posy": 4046.4189453125,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "745784123",
        "mapid": "1",
        "bftitle": "Châteaudun",
        "sector": "0",
        "posx": 3905.864013671875,
        "posy": 6177.06591796875,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "746239665",
        "mapid": "1",
        "bftitle": "Kiskunfélegyháza",
        "sector": "0",
        "posx": 9332.0400390625,
        "posy": 6775.11083984375,
        "gamemap": "70439"
    },
    {
        "id": "746299692",
        "mapid": "1",
        "bftitle": "Cecina",
        "sector": "0",
        "posx": 6597.94384765625,
        "posy": 8197.88671875,
        "gamemap": "70439"
    },
    {
        "id": "746394695",
        "mapid": "1",
        "bftitle": "Dibrivka",
        "sector": "0",
        "posx": 13434.5,
        "posy": 7536.90380859375,
        "gamemap": "201"
    },
    {
        "id": "746599256",
        "mapid": "1",
        "bftitle": "Leonding",
        "sector": "0",
        "posx": 7693.0771484375,
        "posy": 6090.14794921875,
        "gamemap": "201"
    },
    {
        "id": "746883431",
        "mapid": "1",
        "bftitle": "Kincardine",
        "sector": "0",
        "posx": 2425.56396484375,
        "posy": 2329.27099609375,
        "gamemap": "203"
    },
    {
        "id": "747039477",
        "mapid": "1",
        "bftitle": "Saint-Germain-du-Bois",
        "sector": "0",
        "posx": 5052.57421875,
        "posy": 6757.56396484375,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "747043252",
        "mapid": "1",
        "bftitle": "Mizil",
        "sector": "0",
        "posx": 11268.2802734375,
        "posy": 7493.9482421875,
        "gamemap": "201"
    },
    {
        "id": "747145931",
        "mapid": "1",
        "bftitle": "Nauen",
        "sector": "0",
        "posx": 7288.68896484375,
        "posy": 4082.3359375,
        "gamemap": "70439"
    },
    {
        "id": "747216207",
        "mapid": "1",
        "bftitle": "Bolkesjø",
        "sector": "0",
        "posx": 6234.35791015625,
        "posy": 295.2485046386719,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "747221266",
        "mapid": "1",
        "bftitle": "Gignac",
        "sector": "0",
        "posx": 4555.89697265625,
        "posy": 8057.2080078125,
        "gamemap": "201"
    },
    {
        "id": "747248778",
        "mapid": "1",
        "bftitle": "Unterföhring",
        "sector": "0",
        "posx": 6927.90283203125,
        "posy": 6128.76318359375,
        "gamemap": "203",
        "rotation": 2
    },
    {
        "id": "747419267",
        "mapid": "1",
        "bftitle": "Gemona",
        "sector": "0",
        "posx": 7361.56982421875,
        "posy": 6962.9609375,
        "gamemap": "201"
    },
    {
        "id": "747427891",
        "mapid": "1",
        "bftitle": "Zheleznodorozhnyy",
        "sector": "0",
        "posx": 14658.849609375,
        "posy": 2499.197998046875,
        "gamemap": "201"
    },
    {
        "id": "747549677",
        "mapid": "1",
        "bftitle": "Turnhouse",
        "sector": "0",
        "posx": 2534.715087890625,
        "posy": 2388.326904296875,
        "gamemap": "205"
    },
    {
        "id": "747579709",
        "mapid": "1",
        "bftitle": "Montalto di Castro",
        "sector": "0",
        "posx": 6908.9541015625,
        "posy": 8573.361328125,
        "gamemap": "203",
        "rotation": 3
    },
    {
        "id": "747753145",
        "mapid": "1",
        "bftitle": "Kristianstad",
        "sector": "0",
        "posx": 7663.5048828125,
        "posy": 2347.970947265625,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "747974313",
        "mapid": "1",
        "bftitle": "Moteyevo",
        "sector": "0",
        "posx": 13062.23046875,
        "posy": 81.18730163574219,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "748045641",
        "mapid": "1",
        "bftitle": "Poznań",
        "sector": "0",
        "posx": 8477.673828125,
        "posy": 4179.37890625,
        "gamemap": "70439"
    },
    {
        "id": "748184752",
        "mapid": "1",
        "bftitle": "Burghausen",
        "sector": "0",
        "posx": 7276.27392578125,
        "posy": 6139.06689453125,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "748842170",
        "mapid": "1",
        "bftitle": "Volos",
        "sector": "0",
        "posx": 10240.1201171875,
        "posy": 9749.7080078125,
        "gamemap": "70439"
    },
    {
        "id": "748887393",
        "mapid": "1",
        "bftitle": "Petersfield",
        "sector": "0",
        "posx": 3234.06298828125,
        "posy": 4877.35498046875,
        "gamemap": "201"
    },
    {
        "id": "749054913",
        "mapid": "1",
        "bftitle": "Usa",
        "sector": "0",
        "posx": 11282.23046875,
        "posy": 3473.466064453125,
        "gamemap": "201"
    },
    {
        "id": "749201258",
        "mapid": "1",
        "bftitle": "Leer",
        "sector": "0",
        "posx": 5688.5419921875,
        "posy": 3791.635986328125,
        "gamemap": "70439"
    },
    {
        "id": "749475485",
        "mapid": "1",
        "bftitle": "Jussey",
        "sector": "0",
        "posx": 5245.05078125,
        "posy": 6290.77783203125,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "750289763",
        "mapid": "1",
        "bftitle": "Grado",
        "sector": "0",
        "posx": 7443.89697265625,
        "posy": 7216.26806640625,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "750727697",
        "mapid": "1",
        "bftitle": "Lyubech",
        "sector": "0",
        "posx": 12501.4501953125,
        "posy": 4517.51904296875,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "750803855",
        "mapid": "1",
        "bftitle": "Greven",
        "sector": "0",
        "posx": 7025.47119140625,
        "posy": 3651.64501953125,
        "gamemap": "203"
    },
    {
        "id": "750809493",
        "mapid": "1",
        "bftitle": "Larino",
        "sector": "0",
        "posx": 7888.0439453125,
        "posy": 8799.7529296875,
        "gamemap": "203",
        "rotation": 3
    },
    {
        "id": "750952824",
        "mapid": "1",
        "bftitle": "Râmnicu Sărat",
        "sector": "0",
        "posx": 11444.16015625,
        "posy": 7340.33203125,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "751011435",
        "mapid": "1",
        "bftitle": "Dej",
        "sector": "0",
        "posx": 10511.0302734375,
        "posy": 6585.81982421875,
        "gamemap": "201"
    },
    {
        "id": "751167835",
        "mapid": "1",
        "bftitle": "Harlow",
        "sector": "0",
        "posx": 3531.125,
        "posy": 4487.80322265625,
        "gamemap": "70439"
    },
    {
        "id": "751575864",
        "mapid": "1",
        "bftitle": "Mikhaylov",
        "sector": "0",
        "posx": 14954.9296875,
        "posy": 3278.37890625,
        "gamemap": "201"
    },
    {
        "id": "751711499",
        "mapid": "1",
        "bftitle": "Tanumshede",
        "sector": "0",
        "posx": 6834.9638671875,
        "posy": 872.7548217773438,
        "gamemap": "70439"
    },
    {
        "id": "751851536",
        "mapid": "1",
        "bftitle": "Reutte",
        "sector": "0",
        "posx": 6655.18408203125,
        "posy": 6455.7177734375,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "751974528",
        "mapid": "1",
        "bftitle": "Mouzaki",
        "sector": "0",
        "posx": 9609.7529296875,
        "posy": 10372.0498046875,
        "gamemap": "205"
    },
    {
        "id": "752083040",
        "mapid": "1",
        "bftitle": "Villeneuve-Orly Aérodrome",
        "sector": "0",
        "posx": 4219.36376953125,
        "posy": 5880.3779296875,
        "gamemap": "205"
    },
    {
        "id": "752168835",
        "mapid": "1",
        "bftitle": "Buch",
        "sector": "0",
        "posx": 7471.32177734375,
        "posy": 4068.868896484375,
        "gamemap": "203",
        "rotation": 1
    },
    {
        "id": "752300075",
        "mapid": "1",
        "bftitle": "Wanzleben",
        "sector": "0",
        "posx": 6868.65185546875,
        "posy": 4346.18212890625,
        "gamemap": "204"
    },
    {
        "id": "752429642",
        "mapid": "1",
        "bftitle": "Elsterwerda",
        "sector": "0",
        "posx": 7404.6337890625,
        "posy": 4564.64599609375,
        "gamemap": "70439"
    },
    {
        "id": "752451282",
        "mapid": "1",
        "bftitle": "Diamante",
        "sector": "0",
        "posx": 8170.43994140625,
        "posy": 9616.525390625,
        "gamemap": "70439"
    },
    {
        "id": "752618539",
        "mapid": "1",
        "bftitle": "Oranje",
        "sector": "0",
        "posx": 5373.80712890625,
        "posy": 3950.782958984375,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "752679271",
        "mapid": "1",
        "bftitle": "Bökemåla",
        "sector": "0",
        "posx": 7902.18505859375,
        "posy": 2170.0009765625,
        "gamemap": "205"
    },
    {
        "id": "752696144",
        "mapid": "1",
        "bftitle": "Spas-Demensk",
        "sector": "0",
        "posx": 13488.01953125,
        "posy": 3186.047119140625,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "752942305",
        "mapid": "1",
        "bftitle": "Zlatograd",
        "sector": "0",
        "posx": 10872.5595703125,
        "posy": 8965.998046875,
        "gamemap": "203",
        "rotation": 1
    },
    {
        "id": "754477030",
        "mapid": "1",
        "bftitle": "Bytnica",
        "sector": "0",
        "posx": 7961.62890625,
        "posy": 4303.02685546875,
        "gamemap": "70439"
    },
    {
        "id": "754661869",
        "mapid": "1",
        "bftitle": "Gvardeysk",
        "sector": "0",
        "posx": 9689.8193359375,
        "posy": 3066.239990234375,
        "gamemap": "70439"
    },
    {
        "id": "754688736",
        "mapid": "1",
        "bftitle": "Aubenas",
        "sector": "0",
        "posx": 4801.841796875,
        "posy": 7659.00390625,
        "gamemap": "205"
    },
    {
        "id": "754875616",
        "mapid": "1",
        "bftitle": "Budapest XVIII. kerület",
        "sector": "0",
        "posx": 9149.490234375,
        "posy": 6453.02783203125,
        "gamemap": "70439"
    },
    {
        "id": "754878928",
        "mapid": "1",
        "bftitle": "Velimeşe",
        "sector": "0",
        "posx": 11686.9599609375,
        "posy": 9016.986328125,
        "gamemap": "70439"
    },
    {
        "id": "754889961",
        "mapid": "1",
        "bftitle": "Lyubashivka",
        "sector": "0",
        "posx": 12385.0302734375,
        "posy": 6285.58984375,
        "gamemap": "201"
    },
    {
        "id": "755083441",
        "mapid": "1",
        "bftitle": "Gubbio",
        "sector": "0",
        "posx": 7200.56005859375,
        "posy": 8180.1328125,
        "gamemap": "70439"
    },
    {
        "id": "755137882",
        "mapid": "1",
        "bftitle": "Auce",
        "sector": "0",
        "posx": 10228.169921875,
        "posy": 2120.2958984375,
        "gamemap": "70439"
    },
    {
        "id": "755498259",
        "mapid": "1",
        "bftitle": "Kulykiv",
        "sector": "0",
        "posx": 10789.76953125,
        "posy": 5168.962890625,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "755592295",
        "mapid": "1",
        "bftitle": "Canterbury",
        "sector": "0",
        "posx": 3826.8369140625,
        "posy": 4762.625,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "755771488",
        "mapid": "1",
        "bftitle": "Zadar",
        "sector": "0",
        "posx": 7998.77490234375,
        "posy": 7868,
        "gamemap": "70439"
    },
    {
        "id": "755796215",
        "mapid": "1",
        "bftitle": "Zielona Góra",
        "sector": "0",
        "posx": 8060.40478515625,
        "posy": 4406.30419921875,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "756049714",
        "mapid": "1",
        "bftitle": "Hauteville-Lompnes",
        "sector": "0",
        "posx": 5156.8798828125,
        "posy": 7089.087890625,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "756056096",
        "mapid": "1",
        "bftitle": "İvrindi",
        "sector": "0",
        "posx": 11572.0703125,
        "posy": 9664.4814453125,
        "gamemap": "203",
        "rotation": 1
    },
    {
        "id": "757438083",
        "mapid": "1",
        "bftitle": "Martina Franca",
        "sector": "0",
        "posx": 8595.8359375,
        "posy": 9232.90625,
        "gamemap": "203",
        "rotation": 2
    },
    {
        "id": "757531246",
        "mapid": "1",
        "bftitle": "Sutin",
        "sector": "0",
        "posx": 11792.0703125,
        "posy": 3744.44091796875,
        "gamemap": "205"
    },
    {
        "id": "757688912",
        "mapid": "1",
        "bftitle": "Mountain Village Domme",
        "sector": "0",
        "posx": 15615.150390625,
        "posy": 15941.1796875,
        "gamemap": "201"
    },
    {
        "id": "758201513",
        "mapid": "1",
        "bftitle": "Brioude",
        "sector": "0",
        "posx": 4511.6630859375,
        "posy": 7375.33203125,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "758420546",
        "mapid": "1",
        "bftitle": "Salsomaggiore Terme",
        "sector": "0",
        "posx": 6442.31689453125,
        "posy": 7577.6337890625,
        "gamemap": "203",
        "rotation": 2
    },
    {
        "id": "758694672",
        "mapid": "1",
        "bftitle": "Monasterace Marina",
        "sector": "0",
        "posx": 8372.2392578125,
        "posy": 10101.009765625,
        "gamemap": "70439"
    },
    {
        "id": "758853032",
        "mapid": "1",
        "bftitle": "Tørring",
        "sector": "0",
        "posx": 6289.3271484375,
        "posy": 2419.011962890625,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "759220121",
        "mapid": "1",
        "bftitle": "Ferrara",
        "sector": "0",
        "posx": 6917.86376953125,
        "posy": 7566.171875,
        "gamemap": "70439"
    },
    {
        "id": "759542260",
        "mapid": "1",
        "bftitle": "Winterswijk",
        "sector": "0",
        "posx": 5494.32080078125,
        "posy": 4373.67822265625,
        "gamemap": "201"
    },
    {
        "id": "759697460",
        "mapid": "1",
        "bftitle": "Lesovy",
        "sector": "0",
        "posx": 12991.6396484375,
        "posy": 4994.93603515625,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "759956082",
        "mapid": "1",
        "bftitle": "Sloboda",
        "sector": "0",
        "posx": 11704.490234375,
        "posy": 3385.069091796875,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "760169882",
        "mapid": "1",
        "bftitle": "Vel’ye",
        "sector": "0",
        "posx": 12987.650390625,
        "posy": 2106.158935546875,
        "gamemap": "203",
        "rotation": 3
    },
    {
        "id": "760409315",
        "mapid": "1",
        "bftitle": "Tréfumel",
        "sector": "0",
        "posx": 2920.931884765625,
        "posy": 6064.15478515625,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "760446563",
        "mapid": "1",
        "bftitle": "Ygos-Saint-Saturnin",
        "sector": "0",
        "posx": 3298.7548828125,
        "posy": 7924.4482421875,
        "gamemap": "70439"
    },
    {
        "id": "760862770",
        "mapid": "1",
        "bftitle": "Meiringen",
        "sector": "0",
        "posx": 5914.92822265625,
        "posy": 6768.6669921875,
        "gamemap": "203",
        "rotation": 1
    },
    {
        "id": "761017067",
        "mapid": "1",
        "bftitle": "Soverato Marina",
        "sector": "0",
        "posx": 8366.27734375,
        "posy": 10006.599609375,
        "gamemap": "70439"
    },
    {
        "id": "761017108",
        "mapid": "1",
        "bftitle": "Bergerac",
        "sector": "0",
        "posx": 3656.705078125,
        "posy": 7563.4482421875,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "761130679",
        "mapid": "1",
        "bftitle": "Luton",
        "sector": "0",
        "posx": 3429.66796875,
        "posy": 4394.85791015625,
        "gamemap": "70439"
    },
    {
        "id": "762103813",
        "mapid": "1",
        "bftitle": "Ozero",
        "sector": "0",
        "posx": 11562.580078125,
        "posy": 3578.919921875,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "762157377",
        "mapid": "1",
        "bftitle": "Jasło",
        "sector": "0",
        "posx": 9809.2373046875,
        "posy": 5430.53076171875,
        "gamemap": "203",
        "rotation": 1
    },
    {
        "id": "762197165",
        "mapid": "1",
        "bftitle": "Dashev",
        "sector": "0",
        "posx": 12140.509765625,
        "posy": 5766.30712890625,
        "gamemap": "70439"
    },
    {
        "id": "762315123",
        "mapid": "1",
        "bftitle": "Kolpino",
        "sector": "0",
        "posx": 12481.41015625,
        "posy": 280.0545959472656,
        "gamemap": "205"
    },
    {
        "id": "762517808",
        "mapid": "1",
        "bftitle": "Arlo Village",
        "sector": "0",
        "posx": 15775.66015625,
        "posy": 15926.509765625,
        "gamemap": "70439"
    },
    {
        "id": "762624728",
        "mapid": "1",
        "bftitle": "Kupiansk",
        "sector": "0",
        "posx": 14541.1103515625,
        "posy": 5446.29296875,
        "gamemap": "201"
    },
    {
        "id": "763001569",
        "mapid": "1",
        "bftitle": "Ogovo",
        "sector": "0",
        "posx": 11031.0498046875,
        "posy": 4302.47900390625,
        "gamemap": "203",
        "rotation": 3
    },
    {
        "id": "763083226",
        "mapid": "1",
        "bftitle": "Melendugno",
        "sector": "0",
        "posx": 8890.4130859375,
        "posy": 9399.380859375,
        "gamemap": "70439"
    },
    {
        "id": "763088936",
        "mapid": "1",
        "bftitle": "Zolochiv",
        "sector": "0",
        "posx": 14062.3203125,
        "posy": 5184.85791015625,
        "gamemap": "201"
    },
    {
        "id": "763303958",
        "mapid": "1",
        "bftitle": "Carlepont",
        "sector": "0",
        "posx": 4406.634765625,
        "posy": 5542.27001953125,
        "gamemap": "203",
        "rotation": 1
    },
    {
        "id": "763568930",
        "mapid": "1",
        "bftitle": "Târgu Mureş",
        "sector": "0",
        "posx": 10713.51953125,
        "posy": 6848.05078125,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "763679955",
        "mapid": "1",
        "bftitle": "Zheleznogorsk",
        "sector": "0",
        "posx": 13883.3095703125,
        "posy": 4216.0869140625,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "764141718",
        "mapid": "1",
        "bftitle": "Holstebro",
        "sector": "0",
        "posx": 6040.64306640625,
        "posy": 2173.5048828125,
        "gamemap": "70439"
    },
    {
        "id": "764388548",
        "mapid": "1",
        "bftitle": "Luknove",
        "sector": "0",
        "posx": 13228.51953125,
        "posy": 4557.3310546875,
        "gamemap": "203",
        "rotation": 3
    },
    {
        "id": "764451967",
        "mapid": "1",
        "bftitle": "Obfelden",
        "sector": "0",
        "posx": 5983.60888671875,
        "posy": 6536.22802734375,
        "gamemap": "201"
    },
    {
        "id": "764471712",
        "mapid": "1",
        "bftitle": "Turin",
        "sector": "0",
        "posx": 5768.25390625,
        "posy": 7471.4599609375,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "765401492",
        "mapid": "1",
        "bftitle": "Zmiyëvka",
        "sector": "0",
        "posx": 14177.3603515625,
        "posy": 4053.1669921875,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "765489260",
        "mapid": "1",
        "bftitle": "Volvic",
        "sector": "0",
        "posx": 4405.64501953125,
        "posy": 7134.06298828125,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "765590096",
        "mapid": "1",
        "bftitle": "Chapayevka",
        "sector": "0",
        "posx": 12441.1904296875,
        "posy": 5595.8720703125,
        "gamemap": "70439"
    },
    {
        "id": "766517574",
        "mapid": "1",
        "bftitle": "Zenica",
        "sector": "0",
        "posx": 8763.193359375,
        "posy": 7831.89990234375,
        "gamemap": "201"
    },
    {
        "id": "766624175",
        "mapid": "1",
        "bftitle": "Halden",
        "sector": "0",
        "posx": 6853.0400390625,
        "posy": 643.451416015625,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "766812610",
        "mapid": "1",
        "bftitle": "Bessonovka",
        "sector": "0",
        "posx": 14155.91015625,
        "posy": 5070.64892578125,
        "gamemap": "70439"
    },
    {
        "id": "766938672",
        "mapid": "1",
        "bftitle": "Cēsis",
        "sector": "0",
        "posx": 10923.7197265625,
        "posy": 1659.845947265625,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "767084356",
        "mapid": "1",
        "bftitle": "Abilly",
        "sector": "0",
        "posx": 3729.987060546875,
        "posy": 6679.67919921875,
        "gamemap": "70439"
    },
    {
        "id": "767105071",
        "mapid": "1",
        "bftitle": "Yeremeyevo",
        "sector": "0",
        "posx": 14259.3603515625,
        "posy": 449.0812072753906,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "767374540",
        "mapid": "1",
        "bftitle": "Sørtveit",
        "sector": "0",
        "posx": 6309.51904296875,
        "posy": 628.93798828125,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "767410709",
        "mapid": "1",
        "bftitle": "Shklow",
        "sector": "0",
        "posx": 12393.2197265625,
        "posy": 3286.81103515625,
        "gamemap": "203"
    },
    {
        "id": "768179892",
        "mapid": "1",
        "bftitle": "Factory 'Désiré'",
        "sector": "0",
        "posx": 16008.73046875,
        "posy": 15903.3203125,
        "gamemap": "203"
    },
    {
        "id": "768240932",
        "mapid": "1",
        "bftitle": "Hamois",
        "sector": "0",
        "posx": 5035.94384765625,
        "posy": 5119.7900390625,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "768333528",
        "mapid": "1",
        "bftitle": "Esbjerg",
        "sector": "0",
        "posx": 5992.51123046875,
        "posy": 2642.2490234375,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "768723052",
        "mapid": "1",
        "bftitle": "Ioannina",
        "sector": "0",
        "posx": 9627.0029296875,
        "posy": 9632.435546875,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "769132254",
        "mapid": "1",
        "bftitle": "Rörvik",
        "sector": "0",
        "posx": 9055.1572265625,
        "posy": 192.3614959716797,
        "gamemap": "70439"
    },
    {
        "id": "769315686",
        "mapid": "1",
        "bftitle": "Aiffres",
        "sector": "0",
        "posx": 3391.614990234375,
        "posy": 6954.22998046875,
        "gamemap": "70439"
    },
    {
        "id": "769501769",
        "mapid": "1",
        "bftitle": "Aste",
        "sector": "0",
        "posx": 10098.3701171875,
        "posy": 1087.79296875,
        "gamemap": "205"
    },
    {
        "id": "769709035",
        "mapid": "1",
        "bftitle": "Borovichi",
        "sector": "0",
        "posx": 13463.080078125,
        "posy": 1059.3699951171875,
        "gamemap": "201"
    },
    {
        "id": "770161576",
        "mapid": "1",
        "bftitle": "Trakai",
        "sector": "0",
        "posx": 10823.7001953125,
        "posy": 3073.580078125,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "770190029",
        "mapid": "1",
        "bftitle": "Khutomyr",
        "sector": "0",
        "posx": 10908.1796875,
        "posy": 4495.798828125,
        "gamemap": "203"
    },
    {
        "id": "770447561",
        "mapid": "1",
        "bftitle": "Otterup",
        "sector": "0",
        "posx": 6562.84912109375,
        "posy": 2618.802001953125,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "770569994",
        "mapid": "1",
        "bftitle": "Wrohm",
        "sector": "0",
        "posx": 6270.43505859375,
        "posy": 3285.010986328125,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "770677066",
        "mapid": "1",
        "bftitle": "Massafra",
        "sector": "0",
        "posx": 8532.3193359375,
        "posy": 9277.7421875,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "770821230",
        "mapid": "1",
        "bftitle": "Pochinok",
        "sector": "0",
        "posx": 13024.3203125,
        "posy": 3188.77197265625,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "770853165",
        "mapid": "1",
        "bftitle": "Bytom",
        "sector": "0",
        "posx": 9064.7783203125,
        "posy": 5153.34521484375,
        "gamemap": "70439"
    },
    {
        "id": "771480439",
        "mapid": "1",
        "bftitle": "Dvorishche",
        "sector": "0",
        "posx": 12182.2001953125,
        "posy": 4525.42578125,
        "gamemap": "70439"
    },
    {
        "id": "771776470",
        "mapid": "1",
        "bftitle": "Sychëvka",
        "sector": "0",
        "posx": 13561.6103515625,
        "posy": 2456.593017578125,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "771795116",
        "mapid": "1",
        "bftitle": "Lescheraines",
        "sector": "0",
        "posx": 5304.65478515625,
        "posy": 7203.3369140625,
        "gamemap": "201"
    },
    {
        "id": "772336136",
        "mapid": "1",
        "bftitle": "Semlow",
        "sector": "0",
        "posx": 7225.0361328125,
        "posy": 3302.922119140625,
        "gamemap": "70439"
    },
    {
        "id": "772884371",
        "mapid": "1",
        "bftitle": "Densuş",
        "sector": "0",
        "posx": 10198.3603515625,
        "posy": 7256.1220703125,
        "gamemap": "203",
        "rotation": 3
    },
    {
        "id": "772974308",
        "mapid": "1",
        "bftitle": "Ulbroka",
        "sector": "0",
        "posx": 10635.0400390625,
        "posy": 1861.4969482421875,
        "gamemap": "70439"
    },
    {
        "id": "773969117",
        "mapid": "1",
        "bftitle": "Jūrmala",
        "sector": "0",
        "posx": 10482.8095703125,
        "posy": 1846.93994140625,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "773980458",
        "mapid": "1",
        "bftitle": "Badacsonytomaj",
        "sector": "0",
        "posx": 8648.8359375,
        "posy": 6734.18115234375,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "774078025",
        "mapid": "1",
        "bftitle": "Domanivka",
        "sector": "0",
        "posx": 12598.650390625,
        "posy": 6375.6728515625,
        "gamemap": "70439"
    },
    {
        "id": "774123610",
        "mapid": "1",
        "bftitle": "Cristinacce",
        "sector": "0",
        "posx": 6106.02783203125,
        "posy": 8626.80078125,
        "gamemap": "201"
    },
    {
        "id": "774303022",
        "mapid": "1",
        "bftitle": "Janja",
        "sector": "0",
        "posx": 9156.845703125,
        "posy": 7640.1328125,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "774318918",
        "mapid": "1",
        "bftitle": "Hildesheim",
        "sector": "0",
        "posx": 6390.35791015625,
        "posy": 4299.47802734375,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "774756798",
        "mapid": "1",
        "bftitle": "Târgu Cărbuneşti",
        "sector": "0",
        "posx": 10408.4296875,
        "posy": 7521.77197265625,
        "gamemap": "203",
        "rotation": 3
    },
    {
        "id": "776355482",
        "mapid": "1",
        "bftitle": "Sore",
        "sector": "0",
        "posx": 3344.844970703125,
        "posy": 7781.52490234375,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "776977220",
        "mapid": "1",
        "bftitle": "King's Lynn",
        "sector": "0",
        "posx": 3650.050048828125,
        "posy": 4022.321044921875,
        "gamemap": "70439"
    },
    {
        "id": "777097748",
        "mapid": "1",
        "bftitle": "Druzhnaya Gorka",
        "sector": "0",
        "posx": 12350.66015625,
        "posy": 556.2037963867188,
        "gamemap": "203"
    },
    {
        "id": "777211611",
        "mapid": "1",
        "bftitle": "Svedala",
        "sector": "0",
        "posx": 7398.919921875,
        "posy": 2618.364990234375,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "777318634",
        "mapid": "1",
        "bftitle": "Dolostsy",
        "sector": "0",
        "posx": 12114.759765625,
        "posy": 2189.35107421875,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "778131824",
        "mapid": "1",
        "bftitle": "Dinant",
        "sector": "0",
        "posx": 4954.77392578125,
        "posy": 5194.916015625,
        "gamemap": "70439"
    },
    {
        "id": "778238052",
        "mapid": "1",
        "bftitle": "Apanasovka",
        "sector": "0",
        "posx": 13732.3896484375,
        "posy": 4711.89306640625,
        "gamemap": "203"
    },
    {
        "id": "778352582",
        "mapid": "1",
        "bftitle": "Aulla",
        "sector": "0",
        "posx": 6440.02099609375,
        "posy": 7829.9912109375,
        "gamemap": "204"
    },
    {
        "id": "778359670",
        "mapid": "1",
        "bftitle": "Budky",
        "sector": "0",
        "posx": 11060.0595703125,
        "posy": 4744.06298828125,
        "gamemap": "203"
    },
    {
        "id": "778415040",
        "mapid": "1",
        "bftitle": "Milolyub",
        "sector": "0",
        "posx": 12524.3095703125,
        "posy": 2176.591064453125,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "778602692",
        "mapid": "1",
        "bftitle": "Vaxjo",
        "sector": "0",
        "posx": 7855.98388671875,
        "posy": 1895.801025390625,
        "gamemap": "70439"
    },
    {
        "id": "778699643",
        "mapid": "1",
        "bftitle": "Hurzuf",
        "sector": "0",
        "posx": 13570.7099609375,
        "posy": 7724.60888671875,
        "gamemap": "70439"
    },
    {
        "id": "778722553",
        "mapid": "1",
        "bftitle": "Suurejõe",
        "sector": "0",
        "posx": 10871.66015625,
        "posy": 934.078125,
        "gamemap": "203"
    },
    {
        "id": "778772925",
        "mapid": "1",
        "bftitle": "Aalborg Airfield",
        "sector": "0",
        "posx": 6406.1318359375,
        "posy": 1760.626953125,
        "gamemap": "205"
    },
    {
        "id": "778856455",
        "mapid": "1",
        "bftitle": "Bataysk",
        "sector": "0",
        "posx": 15167.419921875,
        "posy": 6590.27001953125,
        "gamemap": "70439"
    },
    {
        "id": "779704453",
        "mapid": "1",
        "bftitle": "Bălţi",
        "sector": "0",
        "posx": 11701.7802734375,
        "posy": 6318.76708984375,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "780258320",
        "mapid": "1",
        "bftitle": "Serres-Castet",
        "sector": "0",
        "posx": 3412.430908203125,
        "posy": 8166.580078125,
        "gamemap": "201"
    },
    {
        "id": "781169100",
        "mapid": "1",
        "bftitle": "Sejerø",
        "sector": "0",
        "posx": 6783.10107421875,
        "posy": 2410.14501953125,
        "gamemap": "70439"
    },
    {
        "id": "781284003",
        "mapid": "1",
        "bftitle": "Zlín",
        "sector": "0",
        "posx": 8694.7998046875,
        "posy": 5666.19677734375,
        "gamemap": "201"
    },
    {
        "id": "781313257",
        "mapid": "1",
        "bftitle": "Priupskiy",
        "sector": "0",
        "posx": 14576.5302734375,
        "posy": 3439.464111328125,
        "gamemap": "201"
    },
    {
        "id": "781334704",
        "mapid": "1",
        "bftitle": "Montargis",
        "sector": "0",
        "posx": 4321.12890625,
        "posy": 6213.86083984375,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "781342968",
        "mapid": "1",
        "bftitle": "Amble",
        "sector": "0",
        "posx": 3030.85595703125,
        "posy": 2677.25,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "781602986",
        "mapid": "1",
        "bftitle": "Esztergom",
        "sector": "0",
        "posx": 9008.689453125,
        "posy": 6305.08984375,
        "gamemap": "70439"
    },
    {
        "id": "781662135",
        "mapid": "1",
        "bftitle": "Novo Mesto",
        "sector": "0",
        "posx": 7961.453125,
        "posy": 7162.8720703125,
        "gamemap": "70439"
    },
    {
        "id": "781819577",
        "mapid": "1",
        "bftitle": "Mondovì",
        "sector": "0",
        "posx": 5806.59912109375,
        "posy": 7751.73779296875,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "782153281",
        "mapid": "1",
        "bftitle": "Lavello",
        "sector": "0",
        "posx": 8143.27685546875,
        "posy": 9097.7197265625,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "782208358",
        "mapid": "1",
        "bftitle": "Khvalovo",
        "sector": "0",
        "posx": 13111.25,
        "posy": 164.23989868164062,
        "gamemap": "203",
        "rotation": 2
    },
    {
        "id": "782294950",
        "mapid": "1",
        "bftitle": "Rosehearty",
        "sector": "0",
        "posx": 2890.04296875,
        "posy": 1475.10595703125,
        "gamemap": "70439"
    },
    {
        "id": "782513854",
        "mapid": "1",
        "bftitle": "Hoo",
        "sector": "0",
        "posx": 3680.699951171875,
        "posy": 4652.89111328125,
        "gamemap": "70439"
    },
    {
        "id": "782756300",
        "mapid": "1",
        "bftitle": "Tecuci",
        "sector": "0",
        "posx": 11556.83984375,
        "posy": 7143.48779296875,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "782808193",
        "mapid": "1",
        "bftitle": "Livinallongo del Col di Lana",
        "sector": "0",
        "posx": 7019.0830078125,
        "posy": 6874.14404296875,
        "gamemap": "203",
        "rotation": 2
    },
    {
        "id": "783303563",
        "mapid": "1",
        "bftitle": "Kurlovo",
        "sector": "0",
        "posx": 15382.4501953125,
        "posy": 2661.90087890625,
        "gamemap": "203"
    },
    {
        "id": "783414221",
        "mapid": "1",
        "bftitle": "Adapazarı",
        "sector": "0",
        "posx": 12427.1103515625,
        "posy": 9202.072265625,
        "gamemap": "201"
    },
    {
        "id": "783619803",
        "mapid": "1",
        "bftitle": "Odense Lufthavn",
        "sector": "0",
        "posx": 6514.037109375,
        "posy": 2678.215087890625,
        "gamemap": "205"
    },
    {
        "id": "783846588",
        "mapid": "1",
        "bftitle": "Chaumont Aérodrome",
        "sector": "0",
        "posx": 5020.42919921875,
        "posy": 6161.630859375,
        "gamemap": "204",
        "rotation": 2
    },
    {
        "id": "783993056",
        "mapid": "1",
        "bftitle": "Karcag",
        "sector": "0",
        "posx": 9651.185546875,
        "posy": 6513.35986328125,
        "gamemap": "204",
        "rotation": 2
    },
    {
        "id": "784311740",
        "mapid": "1",
        "bftitle": "Sinding",
        "sector": "0",
        "posx": 6292.9091796875,
        "posy": 2278.155029296875,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "784340410",
        "mapid": "1",
        "bftitle": "Ayía Paraskeví",
        "sector": "0",
        "posx": 11216,
        "posy": 9792.80859375,
        "gamemap": "70439"
    },
    {
        "id": "784342651",
        "mapid": "1",
        "bftitle": "Budapest",
        "sector": "0",
        "posx": 9093.005859375,
        "posy": 6446.9140625,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "785361727",
        "mapid": "1",
        "bftitle": "Sant'Ambrogio di Valpolicella",
        "sector": "0",
        "posx": 6691.4208984375,
        "posy": 7282.44677734375,
        "gamemap": "201"
    },
    {
        "id": "785486767",
        "mapid": "1",
        "bftitle": "Krško",
        "sector": "0",
        "posx": 8056.078125,
        "posy": 7097.06982421875,
        "gamemap": "201"
    },
    {
        "id": "786120780",
        "mapid": "1",
        "bftitle": "Kolyady",
        "sector": "0",
        "posx": 13535.5400390625,
        "posy": 5377.6318359375,
        "gamemap": "204"
    },
    {
        "id": "786776456",
        "mapid": "1",
        "bftitle": "North Sunderland",
        "sector": "0",
        "posx": 3020.14990234375,
        "posy": 2598.1279296875,
        "gamemap": "70439"
    },
    {
        "id": "786927173",
        "mapid": "1",
        "bftitle": "Osinovka",
        "sector": "0",
        "posx": 12404.150390625,
        "posy": 2920.5869140625,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "787047647",
        "mapid": "1",
        "bftitle": "Spydeberg",
        "sector": "0",
        "posx": 6764.52978515625,
        "posy": 358.18719482421875,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "787131954",
        "mapid": "1",
        "bftitle": "Palaiseau",
        "sector": "0",
        "posx": 4166.65576171875,
        "posy": 5915.22900390625,
        "gamemap": "70439"
    },
    {
        "id": "787472014",
        "mapid": "1",
        "bftitle": "Dobrich",
        "sector": "0",
        "posx": 11673.76953125,
        "posy": 8091.9990234375,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "787548782",
        "mapid": "1",
        "bftitle": "Wittingen",
        "sector": "0",
        "posx": 6699.4951171875,
        "posy": 4038.425048828125,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "787561790",
        "mapid": "1",
        "bftitle": "Rietz Neuendorf",
        "sector": "0",
        "posx": 7670.01708984375,
        "posy": 4265.990234375,
        "gamemap": "70439"
    },
    {
        "id": "787929553",
        "mapid": "1",
        "bftitle": "Kiato",
        "sector": "0",
        "posx": 10171.0400390625,
        "posy": 10272.669921875,
        "gamemap": "70439"
    },
    {
        "id": "788052320",
        "mapid": "1",
        "bftitle": "Ivrea",
        "sector": "0",
        "posx": 5823.755859375,
        "posy": 7305.0419921875,
        "gamemap": "201"
    },
    {
        "id": "788212057",
        "mapid": "1",
        "bftitle": "Echterdingen Flugplatz",
        "sector": "0",
        "posx": 6180.94921875,
        "posy": 5911.80615234375,
        "gamemap": "204",
        "rotation": 1
    },
    {
        "id": "788437322",
        "mapid": "1",
        "bftitle": "Sribne",
        "sector": "0",
        "posx": 13164.4296875,
        "posy": 5006.7490234375,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "789310352",
        "mapid": "1",
        "bftitle": "Yasnogorsk",
        "sector": "0",
        "posx": 14565.5498046875,
        "posy": 3151.219970703125,
        "gamemap": "70439"
    },
    {
        "id": "789852482",
        "mapid": "1",
        "bftitle": "Padua",
        "sector": "0",
        "posx": 6999.11279296875,
        "posy": 7329.97412109375,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "790173442",
        "mapid": "1",
        "bftitle": "La Bourginière",
        "sector": "0",
        "posx": 3104.64599609375,
        "posy": 6294.60009765625,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "790942479",
        "mapid": "1",
        "bftitle": "Sopotskin",
        "sector": "0",
        "posx": 10450.3896484375,
        "posy": 3477.867919921875,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "791047524",
        "mapid": "1",
        "bftitle": "Villa",
        "sector": "0",
        "posx": 6960.55810546875,
        "posy": 6770.84423828125,
        "gamemap": "203",
        "rotation": 2
    },
    {
        "id": "791317607",
        "mapid": "1",
        "bftitle": "Myrhorod",
        "sector": "0",
        "posx": 13366.75,
        "posy": 5328.1982421875,
        "gamemap": "203"
    },
    {
        "id": "791389576",
        "mapid": "1",
        "bftitle": "Gilja",
        "sector": "0",
        "posx": 5349.703125,
        "posy": 825.3917236328125,
        "gamemap": "203",
        "rotation": 3
    },
    {
        "id": "791637305",
        "mapid": "1",
        "bftitle": "Vilyeyka",
        "sector": "0",
        "posx": 11403.4404296875,
        "posy": 3145.843017578125,
        "gamemap": "201"
    },
    {
        "id": "791823466",
        "mapid": "1",
        "bftitle": "Tallinn",
        "sector": "0",
        "posx": 10792.259765625,
        "posy": 486.2992858886719,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "791903179",
        "mapid": "1",
        "bftitle": "Sokolovica",
        "sector": "0",
        "posx": 9470.09765625,
        "posy": 8234.7470703125,
        "gamemap": "201"
    },
    {
        "id": "792074515",
        "mapid": "1",
        "bftitle": "Orcières",
        "sector": "0",
        "posx": 5369.30908203125,
        "posy": 7632.5068359375,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "792112388",
        "mapid": "1",
        "bftitle": "Korbach",
        "sector": "0",
        "posx": 6123.2119140625,
        "posy": 4689.05078125,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "792562195",
        "mapid": "1",
        "bftitle": "Hagenow",
        "sector": "0",
        "posx": 6759.5400390625,
        "posy": 3695.365966796875,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "792881284",
        "mapid": "1",
        "bftitle": "Piła",
        "sector": "0",
        "posx": 8421.361328125,
        "posy": 3816.010986328125,
        "gamemap": "70439"
    },
    {
        "id": "793309365",
        "mapid": "1",
        "bftitle": "Bohuslav",
        "sector": "0",
        "posx": 12565.2001953125,
        "posy": 5519.7412109375,
        "gamemap": "203"
    },
    {
        "id": "793491264",
        "mapid": "1",
        "bftitle": "Allaire",
        "sector": "0",
        "posx": 2880.91796875,
        "posy": 6373.22119140625,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "794541894",
        "mapid": "1",
        "bftitle": "Klitten",
        "sector": "0",
        "posx": 7797.798828125,
        "posy": 4684.31201171875,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "794811132",
        "mapid": "1",
        "bftitle": "Massiac",
        "sector": "0",
        "posx": 4452.330078125,
        "posy": 7393.998046875,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "794821585",
        "mapid": "1",
        "bftitle": "Dykan'ka",
        "sector": "0",
        "posx": 13636.1298828125,
        "posy": 5393.97802734375,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "795037680",
        "mapid": "1",
        "bftitle": "Mortagne-au-Perche",
        "sector": "0",
        "posx": 3676.24609375,
        "posy": 5984.76611328125,
        "gamemap": "201"
    },
    {
        "id": "795074553",
        "mapid": "1",
        "bftitle": "Novosel’ye",
        "sector": "0",
        "posx": 11483.7197265625,
        "posy": 3434.718994140625,
        "gamemap": "205"
    },
    {
        "id": "795145964",
        "mapid": "1",
        "bftitle": "Kusadasi",
        "sector": "0",
        "posx": 11504.7197265625,
        "posy": 10318.4599609375,
        "gamemap": "70439"
    },
    {
        "id": "795671826",
        "mapid": "1",
        "bftitle": "Ryd",
        "sector": "0",
        "posx": 7936.3828125,
        "posy": 905.2415771484375,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "795761332",
        "mapid": "1",
        "bftitle": "Rauland",
        "sector": "0",
        "posx": 5860.05517578125,
        "posy": 290.2218933105469,
        "gamemap": "201"
    },
    {
        "id": "795773631",
        "mapid": "1",
        "bftitle": "Mickhausen",
        "sector": "0",
        "posx": 6632.80908203125,
        "posy": 6112.5869140625,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "796231555",
        "mapid": "1",
        "bftitle": "Uglich",
        "sector": "0",
        "posx": 14751.1396484375,
        "posy": 1541.635986328125,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "796377352",
        "mapid": "1",
        "bftitle": "Engelberg",
        "sector": "0",
        "posx": 5977.69677734375,
        "posy": 6728.1611328125,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "796925846",
        "mapid": "1",
        "bftitle": "Krasnohrad",
        "sector": "0",
        "posx": 13903.5703125,
        "posy": 5596.044921875,
        "gamemap": "204"
    },
    {
        "id": "797284966",
        "mapid": "1",
        "bftitle": "Mortsel",
        "sector": "0",
        "posx": 4795.64013671875,
        "posy": 4801.68603515625,
        "gamemap": "203"
    },
    {
        "id": "797372610",
        "mapid": "1",
        "bftitle": "Amfilochía",
        "sector": "0",
        "posx": 9719.5009765625,
        "posy": 9940.5390625,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "797652258",
        "mapid": "1",
        "bftitle": "Chester Airfield",
        "sector": "0",
        "posx": 2623.39794921875,
        "posy": 3815.31396484375,
        "gamemap": "205"
    },
    {
        "id": "797775054",
        "mapid": "1",
        "bftitle": "Skjoldastraumen",
        "sector": "0",
        "posx": 5160.56005859375,
        "posy": 465.8478088378906,
        "gamemap": "203",
        "rotation": 1
    },
    {
        "id": "797793553",
        "mapid": "1",
        "bftitle": "Novosëlki Vtoryye",
        "sector": "0",
        "posx": 11440.3603515625,
        "posy": 3333.4609375,
        "gamemap": "203",
        "rotation": 3
    },
    {
        "id": "797878859",
        "mapid": "1",
        "bftitle": "Starodub",
        "sector": "0",
        "posx": 13118.900390625,
        "posy": 4093.302001953125,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "798059011",
        "mapid": "1",
        "bftitle": "Võru",
        "sector": "0",
        "posx": 11435.2001953125,
        "posy": 1372.458984375,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "798363402",
        "mapid": "1",
        "bftitle": "Zbarazh",
        "sector": "0",
        "posx": 11070.759765625,
        "posy": 5467.72607421875,
        "gamemap": "201"
    },
    {
        "id": "798711410",
        "mapid": "1",
        "bftitle": "Ballum",
        "sector": "0",
        "posx": 5186.18798828125,
        "posy": 3678.93701171875,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "798766760",
        "mapid": "1",
        "bftitle": "Pobugskoye",
        "sector": "0",
        "posx": 12482.6396484375,
        "posy": 6140.60009765625,
        "gamemap": "70439"
    },
    {
        "id": "799143415",
        "mapid": "1",
        "bftitle": "Pastavy",
        "sector": "0",
        "posx": 11380.4404296875,
        "posy": 2825.5400390625,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "799589015",
        "mapid": "1",
        "bftitle": "Cambridge",
        "sector": "0",
        "posx": 3583.784912109375,
        "posy": 4267.12109375,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "799613465",
        "mapid": "1",
        "bftitle": "Cour-Cheverny",
        "sector": "0",
        "posx": 3953.780029296875,
        "posy": 6433.67919921875,
        "gamemap": "203",
        "rotation": 2
    },
    {
        "id": "799669385",
        "mapid": "1",
        "bftitle": "Sondrio",
        "sector": "0",
        "posx": 6408.59912109375,
        "posy": 7007.98779296875,
        "gamemap": "203",
        "rotation": 2
    },
    {
        "id": "799873224",
        "mapid": "1",
        "bftitle": "Sozopoli",
        "sector": "0",
        "posx": 10300.1796875,
        "posy": 9397.5458984375,
        "gamemap": "70439"
    },
    {
        "id": "800282723",
        "mapid": "1",
        "bftitle": "Murska Sobota",
        "sector": "0",
        "posx": 8253.857421875,
        "posy": 6796.46923828125,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "800391376",
        "mapid": "1",
        "bftitle": "Gap",
        "sector": "0",
        "posx": 5298.22509765625,
        "posy": 7681.13818359375,
        "gamemap": "201"
    },
    {
        "id": "800404966",
        "mapid": "1",
        "bftitle": "Schreufa Flugplatz",
        "sector": "0",
        "posx": 6094.291015625,
        "posy": 4809.5908203125,
        "gamemap": "204",
        "rotation": 3
    },
    {
        "id": "800464798",
        "mapid": "1",
        "bftitle": "Untergriesbach",
        "sector": "0",
        "posx": 7521.2890625,
        "posy": 5959.05078125,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "800618075",
        "mapid": "1",
        "bftitle": "Sandager",
        "sector": "0",
        "posx": 6923.1669921875,
        "posy": 3070.18896484375,
        "gamemap": "70439"
    },
    {
        "id": "800660396",
        "mapid": "1",
        "bftitle": "Lozova",
        "sector": "0",
        "posx": 14160.740234375,
        "posy": 5818.05322265625,
        "gamemap": "70439"
    },
    {
        "id": "800877929",
        "mapid": "1",
        "bftitle": "Wooler",
        "sector": "0",
        "posx": 2925.2919921875,
        "posy": 2601.965087890625,
        "gamemap": "70439"
    },
    {
        "id": "801031790",
        "mapid": "1",
        "bftitle": "Plomeur",
        "sector": "0",
        "posx": 2274.1240234375,
        "posy": 6299.1171875,
        "gamemap": "203",
        "rotation": 1
    },
    {
        "id": "801148886",
        "mapid": "1",
        "bftitle": "Mazamet",
        "sector": "0",
        "posx": 4210.630859375,
        "posy": 8123.208984375,
        "gamemap": "203",
        "rotation": 1
    },
    {
        "id": "801508870",
        "mapid": "1",
        "bftitle": "Lüleburgaz",
        "sector": "0",
        "posx": 11534.7900390625,
        "posy": 8957.92578125,
        "gamemap": "201"
    },
    {
        "id": "801521579",
        "mapid": "1",
        "bftitle": "Oleksandriya",
        "sector": "0",
        "posx": 13222.259765625,
        "posy": 5916.5,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "801630039",
        "mapid": "1",
        "bftitle": "Yartsevo",
        "sector": "0",
        "posx": 13099.26953125,
        "posy": 2851.381103515625,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "801642371",
        "mapid": "1",
        "bftitle": "Cenu",
        "sector": "0",
        "posx": 10501.1201171875,
        "posy": 1981.6419677734375,
        "gamemap": "203"
    },
    {
        "id": "801860264",
        "mapid": "1",
        "bftitle": "Sulęcin",
        "sector": "0",
        "posx": 7946.18115234375,
        "posy": 4161.2880859375,
        "gamemap": "203"
    },
    {
        "id": "801887417",
        "mapid": "1",
        "bftitle": "Nunspeet",
        "sector": "0",
        "posx": 5211.10107421875,
        "posy": 4192.80615234375,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "802541361",
        "mapid": "1",
        "bftitle": "Comrat",
        "sector": "0",
        "posx": 11915.2802734375,
        "posy": 6951.7587890625,
        "gamemap": "201"
    },
    {
        "id": "802933418",
        "mapid": "1",
        "bftitle": "Sainte-Maxime",
        "sector": "0",
        "posx": 5460.95703125,
        "posy": 8196.7275390625,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "803131624",
        "mapid": "1",
        "bftitle": "Salles-Curan",
        "sector": "0",
        "posx": 4332.3310546875,
        "posy": 7839.9228515625,
        "gamemap": "203"
    },
    {
        "id": "803536906",
        "mapid": "1",
        "bftitle": "Callac",
        "sector": "0",
        "posx": 2510.179931640625,
        "posy": 6035.40380859375,
        "gamemap": "70439"
    },
    {
        "id": "803560476",
        "mapid": "1",
        "bftitle": "Stocksbridge",
        "sector": "0",
        "posx": 3098.93896484375,
        "posy": 3655.305908203125,
        "gamemap": "203",
        "rotation": 1
    },
    {
        "id": "804058593",
        "mapid": "1",
        "bftitle": "Uster",
        "sector": "0",
        "posx": 6071.375,
        "posy": 6500.0927734375,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "804377392",
        "mapid": "1",
        "bftitle": "Borås",
        "sector": "0",
        "posx": 7308.14111328125,
        "posy": 1434.9549560546875,
        "gamemap": "201"
    },
    {
        "id": "804911443",
        "mapid": "1",
        "bftitle": "Vigrestad",
        "sector": "0",
        "posx": 5200.0830078125,
        "posy": 947.3353271484375,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "805040741",
        "mapid": "1",
        "bftitle": "Zuni",
        "sector": "0",
        "posx": 7657.1748046875,
        "posy": 9031.2734375,
        "gamemap": "201"
    },
    {
        "id": "805203646",
        "mapid": "1",
        "bftitle": "Mamers Aérodrome",
        "sector": "0",
        "posx": 3647.077880859375,
        "posy": 6059.43896484375,
        "gamemap": "205",
        "rotation": 2
    },
    {
        "id": "805678353",
        "mapid": "1",
        "bftitle": "Desingy",
        "sector": "0",
        "posx": 5241.5849609375,
        "posy": 7081.666015625,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "806101389",
        "mapid": "1",
        "bftitle": "Sakhnovshchyna",
        "sector": "0",
        "posx": 14030.1298828125,
        "posy": 5699.97900390625,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "806596698",
        "mapid": "1",
        "bftitle": "Bugojno",
        "sector": "0",
        "posx": 8630.365234375,
        "posy": 7891.31591796875,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "806662595",
        "mapid": "1",
        "bftitle": "Falkirk",
        "sector": "0",
        "posx": 2404.908935546875,
        "posy": 2364.93505859375,
        "gamemap": "70439"
    },
    {
        "id": "806767220",
        "mapid": "1",
        "bftitle": "Volodymyr-Volyns’kyy",
        "sector": "0",
        "posx": 10644.98046875,
        "posy": 4918.69580078125,
        "gamemap": "201"
    },
    {
        "id": "807185305",
        "mapid": "1",
        "bftitle": "Wertheim",
        "sector": "0",
        "posx": 6302.24609375,
        "posy": 5424.1611328125,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "807309089",
        "mapid": "1",
        "bftitle": "Yavorivka",
        "sector": "0",
        "posx": 12912.5,
        "posy": 5254.10595703125,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "807418355",
        "mapid": "1",
        "bftitle": "Pavlovskaya",
        "sector": "0",
        "posx": 15176.6201171875,
        "posy": 7021.1240234375,
        "gamemap": "201"
    },
    {
        "id": "807896921",
        "mapid": "1",
        "bftitle": "Ljubljana",
        "sector": "0",
        "posx": 7766.89501953125,
        "posy": 7057.9990234375,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "808018123",
        "mapid": "1",
        "bftitle": "Zadnyaya",
        "sector": "0",
        "posx": 14106.740234375,
        "posy": 743.7398071289062,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "808055178",
        "mapid": "1",
        "bftitle": "Vandenesse",
        "sector": "0",
        "posx": 4617.47021484375,
        "posy": 6688.52783203125,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "808206386",
        "mapid": "1",
        "bftitle": "Keila",
        "sector": "0",
        "posx": 10671.1904296875,
        "posy": 540.3074951171875,
        "gamemap": "70439"
    },
    {
        "id": "808584636",
        "mapid": "1",
        "bftitle": "Albstadt",
        "sector": "0",
        "posx": 6160.7919921875,
        "posy": 6118.171875,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "808764726",
        "mapid": "1",
        "bftitle": "Devrekani",
        "sector": "0",
        "posx": 13434.26953125,
        "posy": 8879.4140625,
        "gamemap": "201"
    },
    {
        "id": "808872864",
        "mapid": "1",
        "bftitle": "Schildau",
        "sector": "0",
        "posx": 7305.25,
        "posy": 4634.09423828125,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "808968085",
        "mapid": "1",
        "bftitle": "Ginosa",
        "sector": "0",
        "posx": 8426.849609375,
        "posy": 9281.3466796875,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "809164272",
        "mapid": "1",
        "bftitle": "Lourdes",
        "sector": "0",
        "posx": 3500.368896484375,
        "posy": 8281.3984375,
        "gamemap": "201"
    },
    {
        "id": "809355259",
        "mapid": "1",
        "bftitle": "Carmaux",
        "sector": "0",
        "posx": 4147.5830078125,
        "posy": 7893.875,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "809647834",
        "mapid": "1",
        "bftitle": "Rimbo",
        "sector": "0",
        "posx": 8898.822265625,
        "posy": 280.4577941894531,
        "gamemap": "205"
    },
    {
        "id": "809760313",
        "mapid": "1",
        "bftitle": "Askaniya Nova",
        "sector": "0",
        "posx": 13442.9697265625,
        "posy": 6887.119140625,
        "gamemap": "70439"
    },
    {
        "id": "809826145",
        "mapid": "1",
        "bftitle": "Thiviers",
        "sector": "0",
        "posx": 3784.594970703125,
        "posy": 7326.83984375,
        "gamemap": "70439"
    },
    {
        "id": "810369318",
        "mapid": "1",
        "bftitle": "Vibraye",
        "sector": "0",
        "posx": 3757.31005859375,
        "posy": 6192.2177734375,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "810607403",
        "mapid": "1",
        "bftitle": "Jaama",
        "sector": "0",
        "posx": 11620.4296875,
        "posy": 686.7642211914062,
        "gamemap": "205"
    },
    {
        "id": "810837492",
        "mapid": "1",
        "bftitle": "Saint-Aignan",
        "sector": "0",
        "posx": 3918.412109375,
        "posy": 6534.14306640625,
        "gamemap": "70439"
    },
    {
        "id": "811044120",
        "mapid": "1",
        "bftitle": "Barbezieux-Saint-Hilaire",
        "sector": "0",
        "posx": 3470.41796875,
        "posy": 7302.76220703125,
        "gamemap": "201"
    },
    {
        "id": "811188773",
        "mapid": "1",
        "bftitle": "Rozhdestveno",
        "sector": "0",
        "posx": 12293.0400390625,
        "posy": 531.9163208007812,
        "gamemap": "201"
    },
    {
        "id": "811322820",
        "mapid": "1",
        "bftitle": "Mníšek pod Brdy",
        "sector": "0",
        "posx": 7693.93310546875,
        "posy": 5388.35693359375,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "811452206",
        "mapid": "1",
        "bftitle": "Gorelovo",
        "sector": "0",
        "posx": 12343.9697265625,
        "posy": 265.9668884277344,
        "gamemap": "70439"
    },
    {
        "id": "812943878",
        "mapid": "1",
        "bftitle": "Mauriac",
        "sector": "0",
        "posx": 4198.9931640625,
        "posy": 7410.27978515625,
        "gamemap": "201"
    },
    {
        "id": "812946670",
        "mapid": "1",
        "bftitle": "Frome",
        "sector": "0",
        "posx": 2861.56298828125,
        "posy": 4726.9560546875,
        "gamemap": "203",
        "rotation": 2
    },
    {
        "id": "813018112",
        "mapid": "1",
        "bftitle": "Kiskunlacháza",
        "sector": "0",
        "posx": 9087.1962890625,
        "posy": 6569.15087890625,
        "gamemap": "203",
        "rotation": 1
    },
    {
        "id": "813249582",
        "mapid": "1",
        "bftitle": "Modřany",
        "sector": "0",
        "posx": 7737.76318359375,
        "posy": 5329.8740234375,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "813707340",
        "mapid": "1",
        "bftitle": "Saint-Léger-lès-Domart",
        "sector": "0",
        "posx": 4144.77490234375,
        "posy": 5290.4541015625,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "813751623",
        "mapid": "1",
        "bftitle": "Nègrepelisse",
        "sector": "0",
        "posx": 3960.51708984375,
        "posy": 7884.27392578125,
        "gamemap": "203"
    },
    {
        "id": "814099370",
        "mapid": "1",
        "bftitle": "Saint-Yrieix-la-Perche",
        "sector": "0",
        "posx": 3868.447998046875,
        "posy": 7284.48681640625,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "814113203",
        "mapid": "1",
        "bftitle": "Valozhyn",
        "sector": "0",
        "posx": 11290.73046875,
        "posy": 3349.264892578125,
        "gamemap": "205",
        "rotation": 3
    },
    {
        "id": "814120776",
        "mapid": "1",
        "bftitle": "Aalen",
        "sector": "0",
        "posx": 6473.662109375,
        "posy": 5841.205078125,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "814393953",
        "mapid": "1",
        "bftitle": "Chartres",
        "sector": "0",
        "posx": 3955.626953125,
        "posy": 5990.9248046875,
        "gamemap": "70439"
    },
    {
        "id": "814526885",
        "mapid": "1",
        "bftitle": "Biel/Bienne",
        "sector": "0",
        "posx": 5639.06103515625,
        "posy": 6591.40478515625,
        "gamemap": "201"
    },
    {
        "id": "814689259",
        "mapid": "1",
        "bftitle": "Karachev",
        "sector": "0",
        "posx": 13770.1796875,
        "posy": 3830.053955078125,
        "gamemap": "70439"
    },
    {
        "id": "814982612",
        "mapid": "1",
        "bftitle": "Ulricehamn",
        "sector": "0",
        "posx": 7447.119140625,
        "posy": 1395.9029541015625,
        "gamemap": "201"
    },
    {
        "id": "815703753",
        "mapid": "1",
        "bftitle": "Marmande",
        "sector": "0",
        "posx": 3563.8798828125,
        "posy": 7708.74609375,
        "gamemap": "70439"
    },
    {
        "id": "816471769",
        "mapid": "1",
        "bftitle": "Merlines",
        "sector": "0",
        "posx": 4238.076171875,
        "posy": 7235.02197265625,
        "gamemap": "201"
    },
    {
        "id": "817026557",
        "mapid": "1",
        "bftitle": "Dalem Flugplatz",
        "sector": "0",
        "posx": 5445.9091796875,
        "posy": 5648.97119140625,
        "gamemap": "205",
        "rotation": 2
    },
    {
        "id": "817143627",
        "mapid": "1",
        "bftitle": "Poitiers",
        "sector": "0",
        "posx": 3527.236083984375,
        "posy": 6813.11181640625,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "817289072",
        "mapid": "1",
        "bftitle": "Kastsyukovichy",
        "sector": "0",
        "posx": 12910.2099609375,
        "posy": 3716.81298828125,
        "gamemap": "203",
        "rotation": 1
    },
    {
        "id": "818156214",
        "mapid": "1",
        "bftitle": "Ploieşti",
        "sector": "0",
        "posx": 11141.259765625,
        "posy": 7521.77197265625,
        "gamemap": "201"
    },
    {
        "id": "818218965",
        "mapid": "1",
        "bftitle": "Chester",
        "sector": "0",
        "posx": 2667.3291015625,
        "posy": 3796.780029296875,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "818337496",
        "mapid": "1",
        "bftitle": "Kalyazin",
        "sector": "0",
        "posx": 14607.990234375,
        "posy": 1698.9439697265625,
        "gamemap": "70439"
    },
    {
        "id": "818393914",
        "mapid": "1",
        "bftitle": "Lammhult",
        "sector": "0",
        "posx": 7789.81884765625,
        "posy": 1739.06298828125,
        "gamemap": "201"
    },
    {
        "id": "818995503",
        "mapid": "1",
        "bftitle": "Dijon",
        "sector": "0",
        "posx": 4984.81201171875,
        "posy": 6509.3798828125,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "819269504",
        "mapid": "1",
        "bftitle": "Schwalmstadt",
        "sector": "0",
        "posx": 6220.1279296875,
        "posy": 4868.2548828125,
        "gamemap": "203",
        "rotation": 3
    },
    {
        "id": "819300889",
        "mapid": "1",
        "bftitle": "Langangen",
        "sector": "0",
        "posx": 6389.0361328125,
        "posy": 664.7769165039062,
        "gamemap": "203",
        "rotation": 3
    },
    {
        "id": "819471159",
        "mapid": "1",
        "bftitle": "Solihull",
        "sector": "0",
        "posx": 3051.5849609375,
        "posy": 4089.385009765625,
        "gamemap": "203",
        "rotation": 1
    },
    {
        "id": "819678003",
        "mapid": "1",
        "bftitle": "Kozloduy",
        "sector": "0",
        "posx": 10471.9501953125,
        "posy": 8003.56494140625,
        "gamemap": "201"
    },
    {
        "id": "820022796",
        "mapid": "1",
        "bftitle": "Forno di Zoldo",
        "sector": "0",
        "posx": 7085.078125,
        "posy": 6930.458984375,
        "gamemap": "201"
    },
    {
        "id": "820062506",
        "mapid": "1",
        "bftitle": "Lorient",
        "sector": "0",
        "posx": 2511.39794921875,
        "posy": 6337.27685546875,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "820096135",
        "mapid": "1",
        "bftitle": "Boussac-Bourg",
        "sector": "0",
        "posx": 4169.8359375,
        "posy": 6925.8251953125,
        "gamemap": "201"
    },
    {
        "id": "820124658",
        "mapid": "1",
        "bftitle": "Kandila",
        "sector": "0",
        "posx": 9655.3359375,
        "posy": 9998.78515625,
        "gamemap": "70439"
    },
    {
        "id": "820562199",
        "mapid": "1",
        "bftitle": "Seredka",
        "sector": "0",
        "posx": 11777.080078125,
        "posy": 1191.7110595703125,
        "gamemap": "201"
    },
    {
        "id": "820920705",
        "mapid": "1",
        "bftitle": "Cărpineni",
        "sector": "0",
        "posx": 11826.1201171875,
        "posy": 6754.61181640625,
        "gamemap": "203",
        "rotation": 3
    },
    {
        "id": "822525496",
        "mapid": "1",
        "bftitle": "Dimitrovgrad",
        "sector": "0",
        "posx": 11019.1201171875,
        "posy": 8702.3388671875,
        "gamemap": "201"
    },
    {
        "id": "822565208",
        "mapid": "1",
        "bftitle": "Zonguldak",
        "sector": "0",
        "posx": 12841.6201171875,
        "posy": 8958.7666015625,
        "gamemap": "204"
    },
    {
        "id": "822794944",
        "mapid": "1",
        "bftitle": "Alekseykovo",
        "sector": "0",
        "posx": 13232.240234375,
        "posy": 2902.8701171875,
        "gamemap": "205",
        "rotation": 3
    },
    {
        "id": "823184158",
        "mapid": "1",
        "bftitle": "Castelsarrasin",
        "sector": "0",
        "posx": 3837.467041015625,
        "posy": 7901.126953125,
        "gamemap": "70439"
    },
    {
        "id": "823185136",
        "mapid": "1",
        "bftitle": "Sesvete",
        "sector": "0",
        "posx": 8252.7607421875,
        "posy": 7146.40478515625,
        "gamemap": "203",
        "rotation": 2
    },
    {
        "id": "823251345",
        "mapid": "1",
        "bftitle": "Sedlčany",
        "sector": "0",
        "posx": 7743.88720703125,
        "posy": 5469.09521484375,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "823702691",
        "mapid": "1",
        "bftitle": "La Bourboule",
        "sector": "0",
        "posx": 4318.06982421875,
        "posy": 7253.99609375,
        "gamemap": "201"
    },
    {
        "id": "823794330",
        "mapid": "1",
        "bftitle": "Domnino",
        "sector": "0",
        "posx": 12650.76953125,
        "posy": 2249.9140625,
        "gamemap": "70439"
    },
    {
        "id": "823959291",
        "mapid": "1",
        "bftitle": "La Roche-sur-Yon",
        "sector": "0",
        "posx": 3094.875,
        "posy": 6794.6767578125,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "824050019",
        "mapid": "1",
        "bftitle": "Åkirkeby",
        "sector": "0",
        "posx": 7895.10009765625,
        "posy": 2898.175048828125,
        "gamemap": "70439"
    },
    {
        "id": "824050504",
        "mapid": "1",
        "bftitle": "Kėdainiai",
        "sector": "0",
        "posx": 10542.7001953125,
        "posy": 2736.785888671875,
        "gamemap": "70439"
    },
    {
        "id": "824262758",
        "mapid": "1",
        "bftitle": "Benešov",
        "sector": "0",
        "posx": 7820.19677734375,
        "posy": 5413.82080078125,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "824264663",
        "mapid": "1",
        "bftitle": "Bort-les-Orgues",
        "sector": "0",
        "posx": 4247.84716796875,
        "posy": 7333.326171875,
        "gamemap": "201"
    },
    {
        "id": "824353815",
        "mapid": "1",
        "bftitle": "Monticelli",
        "sector": "0",
        "posx": 6198.328125,
        "posy": 7554.9951171875,
        "gamemap": "70439"
    },
    {
        "id": "824612997",
        "mapid": "1",
        "bftitle": "Saint-Gaudens",
        "sector": "0",
        "posx": 3729.987060546875,
        "posy": 8274.6591796875,
        "gamemap": "201"
    },
    {
        "id": "824688003",
        "mapid": "1",
        "bftitle": "Vereya",
        "sector": "0",
        "posx": 14118.0595703125,
        "posy": 2707.532958984375,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "824751175",
        "mapid": "1",
        "bftitle": "Perpignan",
        "sector": "0",
        "posx": 4363.75390625,
        "posy": 8443.5419921875,
        "gamemap": "204"
    },
    {
        "id": "824822551",
        "mapid": "1",
        "bftitle": "Taganrog",
        "sector": "0",
        "posx": 14916.8203125,
        "posy": 6548.384765625,
        "gamemap": "70439"
    },
    {
        "id": "825353880",
        "mapid": "1",
        "bftitle": "Tuzla",
        "sector": "0",
        "posx": 8986.8857421875,
        "posy": 7692.8388671875,
        "gamemap": "70439"
    },
    {
        "id": "825475198",
        "mapid": "1",
        "bftitle": "Volterra",
        "sector": "0",
        "posx": 6698.84912109375,
        "posy": 8158.7880859375,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "825525185",
        "mapid": "1",
        "bftitle": "Aberystwyth",
        "sector": "0",
        "posx": 2345.159912109375,
        "posy": 4144.47705078125,
        "gamemap": "201"
    },
    {
        "id": "825658832",
        "mapid": "1",
        "bftitle": "Gagrino",
        "sector": "0",
        "posx": 13502.41015625,
        "posy": 607.9783935546875,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "825761046",
        "mapid": "1",
        "bftitle": "Nesle",
        "sector": "0",
        "posx": 4368.4189453125,
        "posy": 5424.21484375,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "826002444",
        "mapid": "1",
        "bftitle": "Rollot",
        "sector": "0",
        "posx": 4292.97607421875,
        "posy": 5501.01904296875,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "826213133",
        "mapid": "1",
        "bftitle": "Thiers",
        "sector": "0",
        "posx": 4560.51806640625,
        "posy": 7143.373046875,
        "gamemap": "201"
    },
    {
        "id": "826375478",
        "mapid": "1",
        "bftitle": "Tifty",
        "sector": "0",
        "posx": 2773.0458984375,
        "posy": 1603.9749755859375,
        "gamemap": "203",
        "rotation": 1
    },
    {
        "id": "826394053",
        "mapid": "1",
        "bftitle": "Sant'Antonio",
        "sector": "0",
        "posx": 6679.0009765625,
        "posy": 7418.73193359375,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "826499451",
        "mapid": "1",
        "bftitle": "Pereyaslav-Khmel'nyts'kyy",
        "sector": "0",
        "posx": 12733.830078125,
        "posy": 5282.78515625,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "827072394",
        "mapid": "1",
        "bftitle": "Opaka",
        "sector": "0",
        "posx": 11204.76953125,
        "posy": 8180.115234375,
        "gamemap": "201"
    },
    {
        "id": "827403588",
        "mapid": "1",
        "bftitle": "Dmitrovskiy Pogost",
        "sector": "0",
        "posx": 15191.3896484375,
        "posy": 2723.824951171875,
        "gamemap": "70439"
    },
    {
        "id": "827668091",
        "mapid": "1",
        "bftitle": "Wolfsburg Flugplatz",
        "sector": "0",
        "posx": 6690.98193359375,
        "posy": 4160.48681640625,
        "gamemap": "204"
    },
    {
        "id": "827718734",
        "mapid": "1",
        "bftitle": "Tubbergen",
        "sector": "0",
        "posx": 5503.82177734375,
        "posy": 4179.10009765625,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "827988127",
        "mapid": "1",
        "bftitle": "Zhizdra",
        "sector": "0",
        "posx": 13698.169921875,
        "posy": 3521.31201171875,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "828304544",
        "mapid": "1",
        "bftitle": "Svanesund",
        "sector": "0",
        "posx": 7000.3232421875,
        "posy": 1203.2259521484375,
        "gamemap": "70439"
    },
    {
        "id": "828405972",
        "mapid": "1",
        "bftitle": "Garliava",
        "sector": "0",
        "posx": 10511.0302734375,
        "posy": 2979.864013671875,
        "gamemap": "203"
    },
    {
        "id": "828818378",
        "mapid": "1",
        "bftitle": "Frinnaryd",
        "sector": "0",
        "posx": 7858.21484375,
        "posy": 1317.239990234375,
        "gamemap": "203",
        "rotation": 3
    },
    {
        "id": "829086295",
        "mapid": "1",
        "bftitle": "Sosenskiy",
        "sector": "0",
        "posx": 14056.599609375,
        "posy": 3364.464111328125,
        "gamemap": "70439"
    },
    {
        "id": "829174693",
        "mapid": "1",
        "bftitle": "Solothurn",
        "sector": "0",
        "posx": 5724.3759765625,
        "posy": 6560.669921875,
        "gamemap": "204"
    },
    {
        "id": "829311346",
        "mapid": "1",
        "bftitle": "Staszów",
        "sector": "0",
        "posx": 9719.3681640625,
        "posy": 5053.6318359375,
        "gamemap": "70439"
    },
    {
        "id": "829558400",
        "mapid": "1",
        "bftitle": "Friedrichshafen-Löwenthal Flugplatz",
        "sector": "0",
        "posx": 6292.5400390625,
        "posy": 6369.26513671875,
        "gamemap": "204",
        "rotation": 3
    },
    {
        "id": "829583331",
        "mapid": "1",
        "bftitle": "Teupitz",
        "sector": "0",
        "posx": 7507.32177734375,
        "posy": 4313.125,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "829659127",
        "mapid": "1",
        "bftitle": "Orta Nova",
        "sector": "0",
        "posx": 8120.05908203125,
        "posy": 8987.4482421875,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "830025441",
        "mapid": "1",
        "bftitle": "Gălăşeni",
        "sector": "0",
        "posx": 11529.900390625,
        "posy": 6271.630859375,
        "gamemap": "204",
        "rotation": 3
    },
    {
        "id": "830144181",
        "mapid": "1",
        "bftitle": "Vicchio",
        "sector": "0",
        "posx": 6882.9248046875,
        "posy": 7945.56689453125,
        "gamemap": "70439"
    },
    {
        "id": "830268763",
        "mapid": "1",
        "bftitle": "Dotnuva",
        "sector": "0",
        "posx": 10516.1298828125,
        "posy": 2695.279052734375,
        "gamemap": "203",
        "rotation": 2
    },
    {
        "id": "830763374",
        "mapid": "1",
        "bftitle": "Danilovgrad",
        "sector": "0",
        "posx": 9127.291015625,
        "posy": 8501.236328125,
        "gamemap": "203"
    },
    {
        "id": "831412638",
        "mapid": "1",
        "bftitle": "Novodnistrovs’k",
        "sector": "0",
        "posx": 11541.330078125,
        "posy": 5953.6650390625,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "831723904",
        "mapid": "1",
        "bftitle": "Rheinsberg",
        "sector": "0",
        "posx": 7296.0478515625,
        "posy": 3841.462890625,
        "gamemap": "201"
    },
    {
        "id": "831762461",
        "mapid": "1",
        "bftitle": "Penrith",
        "sector": "0",
        "posx": 2706.702880859375,
        "posy": 3057.01904296875,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "831799698",
        "mapid": "1",
        "bftitle": "Gullspång",
        "sector": "0",
        "posx": 7647.09521484375,
        "posy": 723.04052734375,
        "gamemap": "201"
    },
    {
        "id": "832218260",
        "mapid": "1",
        "bftitle": "Gostilitsy",
        "sector": "0",
        "posx": 12199.1103515625,
        "posy": 281.94781494140625,
        "gamemap": "201"
    },
    {
        "id": "832270657",
        "mapid": "1",
        "bftitle": "Appingedam",
        "sector": "0",
        "posx": 5525.126953125,
        "posy": 3702.091064453125,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "832709537",
        "mapid": "1",
        "bftitle": "Saint-Georges-de-Luzençon",
        "sector": "0",
        "posx": 4390.2978515625,
        "posy": 7888.23876953125,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "832723719",
        "mapid": "1",
        "bftitle": "Syeverodonets'k",
        "sector": "0",
        "posx": 14798.0302734375,
        "posy": 5791.56982421875,
        "gamemap": "70439"
    },
    {
        "id": "832748156",
        "mapid": "1",
        "bftitle": "Druzhkovka",
        "sector": "0",
        "posx": 14522.76953125,
        "posy": 5934.14404296875,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "832859834",
        "mapid": "1",
        "bftitle": "Karlivka",
        "sector": "0",
        "posx": 13812.48046875,
        "posy": 5561.88720703125,
        "gamemap": "70439"
    },
    {
        "id": "832939333",
        "mapid": "1",
        "bftitle": "Freiburg Flugplatz",
        "sector": "0",
        "posx": 5817.02197265625,
        "posy": 6215.623046875,
        "gamemap": "204"
    },
    {
        "id": "833024046",
        "mapid": "1",
        "bftitle": "Volodymyrets’",
        "sector": "0",
        "posx": 11178.7802734375,
        "posy": 4651.10205078125,
        "gamemap": "70439"
    },
    {
        "id": "833370297",
        "mapid": "1",
        "bftitle": "Munkedal",
        "sector": "0",
        "posx": 6935.4228515625,
        "posy": 1015.1939697265625,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "833706783",
        "mapid": "1",
        "bftitle": "Ponteland",
        "sector": "0",
        "posx": 2993.93408203125,
        "posy": 2859.846923828125,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "833829074",
        "mapid": "1",
        "bftitle": "Würzburg",
        "sector": "0",
        "posx": 6428.11376953125,
        "posy": 5410.97607421875,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "834008888",
        "mapid": "1",
        "bftitle": "Bezhetsk",
        "sector": "0",
        "posx": 14271.830078125,
        "posy": 1399.5150146484375,
        "gamemap": "70439"
    },
    {
        "id": "834423508",
        "mapid": "1",
        "bftitle": "Midden-Eierland",
        "sector": "0",
        "posx": 4949.97705078125,
        "posy": 3824.861083984375,
        "gamemap": "70439"
    },
    {
        "id": "834547862",
        "mapid": "1",
        "bftitle": "Wołomin",
        "sector": "0",
        "posx": 9765.41015625,
        "posy": 4203.01123046875,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "834634571",
        "mapid": "1",
        "bftitle": "Valras-Plage",
        "sector": "0",
        "posx": 4479.51318359375,
        "posy": 8221.45703125,
        "gamemap": "203",
        "rotation": 3
    },
    {
        "id": "834665016",
        "mapid": "1",
        "bftitle": "Thun",
        "sector": "0",
        "posx": 5749.15380859375,
        "posy": 6758.2939453125,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "834902049",
        "mapid": "1",
        "bftitle": "Ústí nad Labem",
        "sector": "0",
        "posx": 7628.287109375,
        "posy": 5008.2109375,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "834907256",
        "mapid": "1",
        "bftitle": "Äng",
        "sector": "0",
        "posx": 7022.798828125,
        "posy": 695.9868774414062,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "835557744",
        "mapid": "1",
        "bftitle": "Vlagtwedde",
        "sector": "0",
        "posx": 5609.56103515625,
        "posy": 3875.385986328125,
        "gamemap": "201"
    },
    {
        "id": "836088889",
        "mapid": "1",
        "bftitle": "Yelizovo",
        "sector": "0",
        "posx": 12017.16015625,
        "posy": 3693.60400390625,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "836167793",
        "mapid": "1",
        "bftitle": "Istanbul",
        "sector": "0",
        "posx": 12035.2197265625,
        "posy": 9124.044921875,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "836371834",
        "mapid": "1",
        "bftitle": "Mulhouse",
        "sector": "0",
        "posx": 5664.63623046875,
        "posy": 6323.88916015625,
        "gamemap": "203",
        "rotation": 2
    },
    {
        "id": "836513414",
        "mapid": "1",
        "bftitle": "Arbuzynka",
        "sector": "0",
        "posx": 12695.7099609375,
        "posy": 6253.65576171875,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "836612083",
        "mapid": "1",
        "bftitle": "Castelnaudary",
        "sector": "0",
        "posx": 4087.944091796875,
        "posy": 8192.986328125,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "836636652",
        "mapid": "1",
        "bftitle": "Sredets",
        "sector": "0",
        "posx": 11481.9599609375,
        "posy": 8583.8017578125,
        "gamemap": "201"
    },
    {
        "id": "836704516",
        "mapid": "1",
        "bftitle": "Kalbe",
        "sector": "0",
        "posx": 6852.166015625,
        "posy": 4058.23291015625,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "836744157",
        "mapid": "1",
        "bftitle": "İnegöl",
        "sector": "0",
        "posx": 12166.23046875,
        "posy": 9474.5146484375,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "837302309",
        "mapid": "1",
        "bftitle": "Ravensburg",
        "sector": "0",
        "posx": 6330.966796875,
        "posy": 6311.18701171875,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "837432119",
        "mapid": "1",
        "bftitle": "Saint-Ouen",
        "sector": "0",
        "posx": 3136.262939453125,
        "posy": 6432.19482421875,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "837470603",
        "mapid": "1",
        "bftitle": "Shchigry",
        "sector": "0",
        "posx": 14332.740234375,
        "posy": 4434.98193359375,
        "gamemap": "201"
    },
    {
        "id": "837629154",
        "mapid": "1",
        "bftitle": "Craiova",
        "sector": "0",
        "posx": 10491.490234375,
        "posy": 7784.505859375,
        "gamemap": "201"
    },
    {
        "id": "837652836",
        "mapid": "1",
        "bftitle": "Sévérac-le-Château",
        "sector": "0",
        "posx": 4411.791015625,
        "posy": 7781.36083984375,
        "gamemap": "201"
    },
    {
        "id": "837830245",
        "mapid": "1",
        "bftitle": "Łódź",
        "sector": "0",
        "posx": 9221.263671875,
        "posy": 4494.93017578125,
        "gamemap": "70439"
    },
    {
        "id": "837844215",
        "mapid": "1",
        "bftitle": "Gmina Nasielsk",
        "sector": "0",
        "posx": 9613.7236328125,
        "posy": 4091.153076171875,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "838303203",
        "mapid": "1",
        "bftitle": "Mussidan",
        "sector": "0",
        "posx": 3621.402099609375,
        "posy": 7486.11279296875,
        "gamemap": "70439"
    },
    {
        "id": "838596969",
        "mapid": "1",
        "bftitle": "Markitanti",
        "sector": "0",
        "posx": 11361.099609375,
        "posy": 2364.4951171875,
        "gamemap": "70439"
    },
    {
        "id": "838733004",
        "mapid": "1",
        "bftitle": "Forshaga",
        "sector": "0",
        "posx": 7466.77099609375,
        "posy": 411.6239929199219,
        "gamemap": "203",
        "rotation": 1
    },
    {
        "id": "838832779",
        "mapid": "1",
        "bftitle": "Sarpsborg",
        "sector": "0",
        "posx": 6771.57421875,
        "posy": 551.697021484375,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "838856175",
        "mapid": "1",
        "bftitle": "Kamenka",
        "sector": "0",
        "posx": 11871.009765625,
        "posy": 1254.9959716796875,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "839082710",
        "mapid": "1",
        "bftitle": "Sisteron",
        "sector": "0",
        "posx": 5258.0361328125,
        "posy": 7837.7080078125,
        "gamemap": "201"
    },
    {
        "id": "839738650",
        "mapid": "1",
        "bftitle": "Lidyany",
        "sector": "0",
        "posx": 10686.099609375,
        "posy": 3935.660888671875,
        "gamemap": "204",
        "rotation": 1
    },
    {
        "id": "839753836",
        "mapid": "1",
        "bftitle": "Bârlad",
        "sector": "0",
        "posx": 11625.6201171875,
        "posy": 6981.02099609375,
        "gamemap": "203"
    },
    {
        "id": "839795774",
        "mapid": "1",
        "bftitle": "Sakule",
        "sector": "0",
        "posx": 9520.115234375,
        "posy": 7439.59521484375,
        "gamemap": "70439"
    },
    {
        "id": "840073564",
        "mapid": "1",
        "bftitle": "Gunness",
        "sector": "0",
        "posx": 3303.0830078125,
        "posy": 3579.97705078125,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "841102257",
        "mapid": "1",
        "bftitle": "Mainsat",
        "sector": "0",
        "posx": 4214.7001953125,
        "posy": 7057.5908203125,
        "gamemap": "201"
    },
    {
        "id": "841280412",
        "mapid": "1",
        "bftitle": "Hillerød",
        "sector": "0",
        "posx": 7125.4072265625,
        "posy": 2411.324951171875,
        "gamemap": "70439"
    },
    {
        "id": "841394360",
        "mapid": "1",
        "bftitle": "Orzhytsya",
        "sector": "0",
        "posx": 13100.16015625,
        "posy": 5409.94482421875,
        "gamemap": "204"
    },
    {
        "id": "841429659",
        "mapid": "1",
        "bftitle": "Dikili",
        "sector": "0",
        "posx": 11397.3095703125,
        "posy": 9860.2158203125,
        "gamemap": "70439"
    },
    {
        "id": "841470765",
        "mapid": "1",
        "bftitle": "Malino",
        "sector": "0",
        "posx": 14704.8701171875,
        "posy": 2828.02099609375,
        "gamemap": "201"
    },
    {
        "id": "841809608",
        "mapid": "1",
        "bftitle": "Gournay-en-Bray",
        "sector": "0",
        "posx": 4017.72802734375,
        "posy": 5573.8271484375,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "841935041",
        "mapid": "1",
        "bftitle": "Persianovka",
        "sector": "0",
        "posx": 15069.669921875,
        "posy": 6420.39892578125,
        "gamemap": "201"
    },
    {
        "id": "841996995",
        "mapid": "1",
        "bftitle": "Naucelle",
        "sector": "0",
        "posx": 4201.85498046875,
        "posy": 7833.3779296875,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "842465216",
        "mapid": "1",
        "bftitle": "Bronnitsy",
        "sector": "0",
        "posx": 14730.6796875,
        "posy": 2667.833984375,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "842492675",
        "mapid": "1",
        "bftitle": "Nova Kakhovka",
        "sector": "0",
        "posx": 13290.4697265625,
        "posy": 6756.85791015625,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "842625246",
        "mapid": "1",
        "bftitle": "Soursac",
        "sector": "0",
        "posx": 4159.9091796875,
        "posy": 7382.326171875,
        "gamemap": "203"
    },
    {
        "id": "842879455",
        "mapid": "1",
        "bftitle": "Novaya Ladoga",
        "sector": "0",
        "posx": 12980.0302734375,
        "posy": 98.39634704589844,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "843030756",
        "mapid": "1",
        "bftitle": "Angerville",
        "sector": "0",
        "posx": 4101.0927734375,
        "posy": 6075.11181640625,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "843376264",
        "mapid": "1",
        "bftitle": "Gyönk",
        "sector": "0",
        "posx": 8931.1474609375,
        "posy": 6842.22314453125,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "843593197",
        "mapid": "1",
        "bftitle": "Byorda",
        "sector": "0",
        "posx": 12123.16015625,
        "posy": 3669.428955078125,
        "gamemap": "201"
    },
    {
        "id": "843600402",
        "mapid": "1",
        "bftitle": "Gagarin",
        "sector": "0",
        "posx": 13773.169921875,
        "posy": 2599.1689453125,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "843746776",
        "mapid": "1",
        "bftitle": "Vovchans'k",
        "sector": "0",
        "posx": 14343.51953125,
        "posy": 5179.80517578125,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "844207405",
        "mapid": "1",
        "bftitle": "Newquay",
        "sector": "0",
        "posx": 2042.4820556640625,
        "posy": 5137.72216796875,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "844317361",
        "mapid": "1",
        "bftitle": "Lanslebourg-Mont-Cenis",
        "sector": "0",
        "posx": 5530.47900390625,
        "posy": 7381.39306640625,
        "gamemap": "201"
    },
    {
        "id": "844781165",
        "mapid": "1",
        "bftitle": "Zarnesti",
        "sector": "0",
        "posx": 10936.419921875,
        "posy": 7265.56982421875,
        "gamemap": "201"
    },
    {
        "id": "844809472",
        "mapid": "1",
        "bftitle": "Langwedel",
        "sector": "0",
        "posx": 6207.5361328125,
        "posy": 3900.910888671875,
        "gamemap": "203"
    },
    {
        "id": "844911064",
        "mapid": "1",
        "bftitle": "Kruckow",
        "sector": "0",
        "posx": 7377.23779296875,
        "posy": 3453.095947265625,
        "gamemap": "201"
    },
    {
        "id": "844915895",
        "mapid": "1",
        "bftitle": "Stoke Hammond",
        "sector": "0",
        "posx": 3304.264892578125,
        "posy": 4396.1181640625,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "845134085",
        "mapid": "1",
        "bftitle": "Dzyatlava",
        "sector": "0",
        "posx": 10962.490234375,
        "posy": 3662.0419921875,
        "gamemap": "201"
    },
    {
        "id": "846584730",
        "mapid": "1",
        "bftitle": "Karksi-Nuia",
        "sector": "0",
        "posx": 11008.2099609375,
        "posy": 1222.488037109375,
        "gamemap": "70439"
    },
    {
        "id": "846620558",
        "mapid": "1",
        "bftitle": "Páros",
        "sector": "0",
        "posx": 10904.2099609375,
        "posy": 10618.759765625,
        "gamemap": "70439"
    },
    {
        "id": "846824959",
        "mapid": "1",
        "bftitle": "Chrzanów",
        "sector": "0",
        "posx": 10140.759765625,
        "posy": 4956.05712890625,
        "gamemap": "70439"
    },
    {
        "id": "847095337",
        "mapid": "1",
        "bftitle": "Harlingen Vliegveld",
        "sector": "0",
        "posx": 5136.86181640625,
        "posy": 3810.676025390625,
        "gamemap": "205",
        "rotation": 3
    },
    {
        "id": "847358958",
        "mapid": "1",
        "bftitle": "Cazères",
        "sector": "0",
        "posx": 3833.4599609375,
        "posy": 8238.05859375,
        "gamemap": "201"
    },
    {
        "id": "847427913",
        "mapid": "1",
        "bftitle": "Port-en-Bessin-Huppain",
        "sector": "0",
        "posx": 3290.384033203125,
        "posy": 5628.5458984375,
        "gamemap": "70439"
    },
    {
        "id": "847563845",
        "mapid": "1",
        "bftitle": "Épernay",
        "sector": "0",
        "posx": 4672.8837890625,
        "posy": 5745.81787109375,
        "gamemap": "70439"
    },
    {
        "id": "848133575",
        "mapid": "1",
        "bftitle": "Gera",
        "sector": "0",
        "posx": 7077.115234375,
        "posy": 4826.2958984375,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "848174396",
        "mapid": "1",
        "bftitle": "Vizille",
        "sector": "0",
        "posx": 5205.4912109375,
        "posy": 7476.2490234375,
        "gamemap": "201"
    },
    {
        "id": "848201510",
        "mapid": "1",
        "bftitle": "Souesmes",
        "sector": "0",
        "posx": 4152.56494140625,
        "posy": 6452.44384765625,
        "gamemap": "201"
    },
    {
        "id": "848227703",
        "mapid": "1",
        "bftitle": "Marevo",
        "sector": "0",
        "posx": 12918.7197265625,
        "posy": 1658.3489990234375,
        "gamemap": "70439"
    },
    {
        "id": "848288615",
        "mapid": "1",
        "bftitle": "Durusu",
        "sector": "0",
        "posx": 11920.8896484375,
        "posy": 8997.4404296875,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "849255968",
        "mapid": "1",
        "bftitle": "Hohenlinden",
        "sector": "0",
        "posx": 7040.5458984375,
        "posy": 6150.34423828125,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "849370111",
        "mapid": "1",
        "bftitle": "Kristinehamn",
        "sector": "0",
        "posx": 7650.5068359375,
        "posy": 536.74169921875,
        "gamemap": "201"
    },
    {
        "id": "849500427",
        "mapid": "1",
        "bftitle": "Gostilkovo",
        "sector": "0",
        "posx": 13936.169921875,
        "posy": 1923.4110107421875,
        "gamemap": "205",
        "rotation": 2
    },
    {
        "id": "849600253",
        "mapid": "1",
        "bftitle": "Treglwang",
        "sector": "0",
        "posx": 7789.81884765625,
        "posy": 6447.951171875,
        "gamemap": "201"
    },
    {
        "id": "849841366",
        "mapid": "1",
        "bftitle": "Nowogrodziec",
        "sector": "0",
        "posx": 8028.77880859375,
        "posy": 4757.76416015625,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "849870843",
        "mapid": "1",
        "bftitle": "Fredrikstad",
        "sector": "0",
        "posx": 6717.85693359375,
        "posy": 589.6948852539062,
        "gamemap": "201"
    },
    {
        "id": "850270236",
        "mapid": "1",
        "bftitle": "Cumbernauld",
        "sector": "0",
        "posx": 2360.319091796875,
        "posy": 2396.489990234375,
        "gamemap": "203",
        "rotation": 3
    },
    {
        "id": "851092827",
        "mapid": "1",
        "bftitle": "Crikvenica",
        "sector": "0",
        "posx": 7821.89990234375,
        "posy": 7426.80517578125,
        "gamemap": "70439"
    },
    {
        "id": "851295820",
        "mapid": "1",
        "bftitle": "Aigeirouses",
        "sector": "0",
        "posx": 10314.599609375,
        "posy": 10243.330078125,
        "gamemap": "70439"
    },
    {
        "id": "851314917",
        "mapid": "1",
        "bftitle": "Yenihisar",
        "sector": "0",
        "posx": 11447.98046875,
        "posy": 10389.2197265625,
        "gamemap": "70439"
    },
    {
        "id": "851356145",
        "mapid": "1",
        "bftitle": "Seehausen",
        "sector": "0",
        "posx": 6959.97998046875,
        "posy": 3944.948974609375,
        "gamemap": "203",
        "rotation": 2
    },
    {
        "id": "851486686",
        "mapid": "1",
        "bftitle": "Kävlinge",
        "sector": "0",
        "posx": 7353.4912109375,
        "posy": 2491.799072265625,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "851525670",
        "mapid": "1",
        "bftitle": "Kuybysheve",
        "sector": "0",
        "posx": 14257.919921875,
        "posy": 6495.35400390625,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "851611245",
        "mapid": "1",
        "bftitle": "Dunfermline",
        "sector": "0",
        "posx": 2490.85009765625,
        "posy": 2300.5869140625,
        "gamemap": "70439"
    },
    {
        "id": "851911455",
        "mapid": "1",
        "bftitle": "Kurchatov",
        "sector": "0",
        "posx": 13965.6796875,
        "posy": 4537.7548828125,
        "gamemap": "201"
    },
    {
        "id": "852248954",
        "mapid": "1",
        "bftitle": "Duns",
        "sector": "0",
        "posx": 2827.41796875,
        "posy": 2481.862060546875,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "852477082",
        "mapid": "1",
        "bftitle": "Brioux-sur-Boutonne",
        "sector": "0",
        "posx": 3450.0029296875,
        "posy": 7019.416015625,
        "gamemap": "70439"
    },
    {
        "id": "852572946",
        "mapid": "1",
        "bftitle": "Gaillac",
        "sector": "0",
        "posx": 4071.049072265625,
        "posy": 7955.1572265625,
        "gamemap": "70439"
    },
    {
        "id": "852719701",
        "mapid": "1",
        "bftitle": "Banff",
        "sector": "0",
        "posx": 2778.261962890625,
        "posy": 1483.4139404296875,
        "gamemap": "70439"
    },
    {
        "id": "852744178",
        "mapid": "1",
        "bftitle": "Düzce",
        "sector": "0",
        "posx": 12650.0498046875,
        "posy": 9179.3203125,
        "gamemap": "201"
    },
    {
        "id": "853029577",
        "mapid": "1",
        "bftitle": "Ribe",
        "sector": "0",
        "posx": 6085.666015625,
        "posy": 2714.908935546875,
        "gamemap": "70439"
    },
    {
        "id": "853049719",
        "mapid": "1",
        "bftitle": "Grieskirchen",
        "sector": "0",
        "posx": 7569.97216796875,
        "posy": 6110.68603515625,
        "gamemap": "201"
    },
    {
        "id": "853055008",
        "mapid": "1",
        "bftitle": "Landudec",
        "sector": "0",
        "posx": 2246.718017578125,
        "posy": 6224.65185546875,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "853171220",
        "mapid": "1",
        "bftitle": "Hanko",
        "sector": "0",
        "posx": 10278.8798828125,
        "posy": 248.09060668945312,
        "gamemap": "204"
    },
    {
        "id": "853917703",
        "mapid": "1",
        "bftitle": "Rzeszów",
        "sector": "0",
        "posx": 9963.5654296875,
        "posy": 5294.77099609375,
        "gamemap": "70439"
    },
    {
        "id": "854006203",
        "mapid": "1",
        "bftitle": "Hołoby",
        "sector": "0",
        "posx": 10845.490234375,
        "posy": 4809.01220703125,
        "gamemap": "204",
        "rotation": 2
    },
    {
        "id": "854033609",
        "mapid": "1",
        "bftitle": "Szolnok",
        "sector": "0",
        "posx": 9436.224609375,
        "posy": 6571.34619140625,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "854092952",
        "mapid": "1",
        "bftitle": "Oevenum",
        "sector": "0",
        "posx": 6015.923828125,
        "posy": 3049.23193359375,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "854349779",
        "mapid": "1",
        "bftitle": "Buftea",
        "sector": "0",
        "posx": 11121.3896484375,
        "posy": 7683.32421875,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "854740716",
        "mapid": "1",
        "bftitle": "Rokytne",
        "sector": "0",
        "posx": 11492.23046875,
        "posy": 4718.0771484375,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "855165377",
        "mapid": "1",
        "bftitle": "Quimper",
        "sector": "0",
        "posx": 2335.98095703125,
        "posy": 6258.0869140625,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "855757985",
        "mapid": "1",
        "bftitle": "Lussat",
        "sector": "0",
        "posx": 4201.31396484375,
        "posy": 7001.89794921875,
        "gamemap": "201"
    },
    {
        "id": "856112534",
        "mapid": "1",
        "bftitle": "Orthez",
        "sector": "0",
        "posx": 3288.60107421875,
        "posy": 8123.8720703125,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "856532335",
        "mapid": "1",
        "bftitle": "Sykoúrio",
        "sector": "0",
        "posx": 10133.8701171875,
        "posy": 9597.140625,
        "gamemap": "203",
        "rotation": 2
    },
    {
        "id": "856689177",
        "mapid": "1",
        "bftitle": "Caylus",
        "sector": "0",
        "posx": 4034.35595703125,
        "posy": 7817.73583984375,
        "gamemap": "203"
    },
    {
        "id": "857063671",
        "mapid": "1",
        "bftitle": "Babadag",
        "sector": "0",
        "posx": 11932.7001953125,
        "posy": 7542.619140625,
        "gamemap": "203",
        "rotation": 1
    },
    {
        "id": "857119750",
        "mapid": "1",
        "bftitle": "Sliven",
        "sector": "0",
        "posx": 11232.8603515625,
        "posy": 8448.2841796875,
        "gamemap": "204"
    },
    {
        "id": "857382868",
        "mapid": "1",
        "bftitle": "Ærøskøbing",
        "sector": "0",
        "posx": 6527.462890625,
        "posy": 2954.2939453125,
        "gamemap": "70439"
    },
    {
        "id": "857478805",
        "mapid": "1",
        "bftitle": "Men’kovo",
        "sector": "0",
        "posx": 15006.51953125,
        "posy": 777.1099853515625,
        "gamemap": "201"
    },
    {
        "id": "857508587",
        "mapid": "1",
        "bftitle": "Smederevo",
        "sector": "0",
        "posx": 9650.208984375,
        "posy": 7641.27978515625,
        "gamemap": "70439"
    },
    {
        "id": "857839350",
        "mapid": "1",
        "bftitle": "Il'inskoye",
        "sector": "0",
        "posx": 14414.5302734375,
        "posy": 1847.6619873046875,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "857899863",
        "mapid": "1",
        "bftitle": "Zhelezenka",
        "sector": "0",
        "posx": 13957.4501953125,
        "posy": 1116.655029296875,
        "gamemap": "204"
    },
    {
        "id": "858124027",
        "mapid": "1",
        "bftitle": "Chalandrítsa",
        "sector": "0",
        "posx": 9904.3740234375,
        "posy": 10222.1201171875,
        "gamemap": "70439"
    },
    {
        "id": "858133767",
        "mapid": "1",
        "bftitle": "Saint Lawrence",
        "sector": "0",
        "posx": 3784.85693359375,
        "posy": 4507.48876953125,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "858204457",
        "mapid": "1",
        "bftitle": "Barnstaple",
        "sector": "0",
        "posx": 2332.376953125,
        "posy": 4820.7138671875,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "858238874",
        "mapid": "1",
        "bftitle": "Cosne-Cours-sur-Loire",
        "sector": "0",
        "posx": 4372.509765625,
        "posy": 6472.2412109375,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "858640091",
        "mapid": "1",
        "bftitle": "Hagenau Flugplatz",
        "sector": "0",
        "posx": 5780.43994140625,
        "posy": 5851.51416015625,
        "gamemap": "205",
        "rotation": 1
    },
    {
        "id": "858702339",
        "mapid": "1",
        "bftitle": "La Spezia",
        "sector": "0",
        "posx": 6398.33203125,
        "posy": 7869.23193359375,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "858778293",
        "mapid": "1",
        "bftitle": "Sarandë",
        "sector": "0",
        "posx": 9379.146484375,
        "posy": 9552.525390625,
        "gamemap": "201"
    },
    {
        "id": "859221339",
        "mapid": "1",
        "bftitle": "Auzebosc",
        "sector": "0",
        "posx": 3728.571044921875,
        "posy": 5498.68505859375,
        "gamemap": "201"
    },
    {
        "id": "859524175",
        "mapid": "1",
        "bftitle": "Musile di Piave",
        "sector": "0",
        "posx": 7191.376953125,
        "posy": 7240.412109375,
        "gamemap": "203",
        "rotation": 3
    },
    {
        "id": "859559484",
        "mapid": "1",
        "bftitle": "Lyudinovo",
        "sector": "0",
        "posx": 13612.66015625,
        "posy": 3461.10888671875,
        "gamemap": "204",
        "rotation": 1
    },
    {
        "id": "859670661",
        "mapid": "1",
        "bftitle": "Pieve di Cadore",
        "sector": "0",
        "posx": 7139.31494140625,
        "posy": 6898.55322265625,
        "gamemap": "204",
        "rotation": 1
    },
    {
        "id": "860493019",
        "mapid": "1",
        "bftitle": "Bannewitz Flugplatz",
        "sector": "0",
        "posx": 7535.90576171875,
        "posy": 4852.9580078125,
        "gamemap": "204"
    },
    {
        "id": "861225321",
        "mapid": "1",
        "bftitle": "Kalundborg",
        "sector": "0",
        "posx": 6781.67578125,
        "posy": 2544.222900390625,
        "gamemap": "70439"
    },
    {
        "id": "861463833",
        "mapid": "1",
        "bftitle": "Kryvyi Rih",
        "sector": "0",
        "posx": 13299.7900390625,
        "posy": 6253.68212890625,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "861510987",
        "mapid": "1",
        "bftitle": "Ajaccio",
        "sector": "0",
        "posx": 6075.39306640625,
        "posy": 8751.1015625,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "861874286",
        "mapid": "1",
        "bftitle": "Ozerna",
        "sector": "0",
        "posx": 10939.669921875,
        "posy": 5483.52978515625,
        "gamemap": "203",
        "rotation": 1
    },
    {
        "id": "862220074",
        "mapid": "1",
        "bftitle": "Treviglio",
        "sector": "0",
        "posx": 6326.4267578125,
        "posy": 7282.47802734375,
        "gamemap": "201"
    },
    {
        "id": "862457969",
        "mapid": "1",
        "bftitle": "Klatovy",
        "sector": "0",
        "posx": 7412.18798828125,
        "posy": 5589.64404296875,
        "gamemap": "201"
    },
    {
        "id": "862741859",
        "mapid": "1",
        "bftitle": "Meelse",
        "sector": "0",
        "posx": 7079.85986328125,
        "posy": 3004.763916015625,
        "gamemap": "70439"
    },
    {
        "id": "862919037",
        "mapid": "1",
        "bftitle": "Bergama",
        "sector": "0",
        "posx": 11482.419921875,
        "posy": 9841.2978515625,
        "gamemap": "70439"
    },
    {
        "id": "862925123",
        "mapid": "1",
        "bftitle": "Abbeville Aérodrome",
        "sector": "0",
        "posx": 4034.64501953125,
        "posy": 5254.8662109375,
        "gamemap": "205",
        "rotation": 2
    },
    {
        "id": "863594279",
        "mapid": "1",
        "bftitle": "Kärla Parish",
        "sector": "0",
        "posx": 10039.990234375,
        "posy": 1092.1669921875,
        "gamemap": "203",
        "rotation": 1
    },
    {
        "id": "863860419",
        "mapid": "1",
        "bftitle": "Mladá Boleslav",
        "sector": "0",
        "posx": 7883.5771484375,
        "posy": 5124.02490234375,
        "gamemap": "201"
    },
    {
        "id": "863890000",
        "mapid": "1",
        "bftitle": "Zalaegerszeg",
        "sector": "0",
        "posx": 8452.4521484375,
        "posy": 6719.9931640625,
        "gamemap": "201"
    },
    {
        "id": "863979615",
        "mapid": "1",
        "bftitle": "Bogense",
        "sector": "0",
        "posx": 6481.23876953125,
        "posy": 2630.9560546875,
        "gamemap": "70439"
    },
    {
        "id": "865310068",
        "mapid": "1",
        "bftitle": "Yelënovka",
        "sector": "0",
        "posx": 12641.669921875,
        "posy": 6603.70703125,
        "gamemap": "70439"
    },
    {
        "id": "865324039",
        "mapid": "1",
        "bftitle": "Tupenurme",
        "sector": "0",
        "posx": 10325.4697265625,
        "posy": 929.4570922851562,
        "gamemap": "203",
        "rotation": 1
    },
    {
        "id": "865566948",
        "mapid": "1",
        "bftitle": "San Giovanni in Fiore",
        "sector": "0",
        "posx": 8409.392578125,
        "posy": 9790.3671875,
        "gamemap": "201"
    },
    {
        "id": "865682846",
        "mapid": "1",
        "bftitle": "Malaryta",
        "sector": "0",
        "posx": 10571.8095703125,
        "posy": 4475.60986328125,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "866032091",
        "mapid": "1",
        "bftitle": "Oradea",
        "sector": "0",
        "posx": 9944.314453125,
        "posy": 6621.9638671875,
        "gamemap": "201"
    },
    {
        "id": "866224982",
        "mapid": "1",
        "bftitle": "Ozoir-la-Ferrière Aérodrome",
        "sector": "0",
        "posx": 4302.0927734375,
        "posy": 5866.919921875,
        "gamemap": "204",
        "rotation": 1
    },
    {
        "id": "866801849",
        "mapid": "1",
        "bftitle": "Lemland",
        "sector": "0",
        "posx": 9408.9765625,
        "posy": 109.60169982910156,
        "gamemap": "70439"
    },
    {
        "id": "866858838",
        "mapid": "1",
        "bftitle": "Melun",
        "sector": "0",
        "posx": 4322.89404296875,
        "posy": 6002.09521484375,
        "gamemap": "203"
    },
    {
        "id": "867194095",
        "mapid": "1",
        "bftitle": "Podensac",
        "sector": "0",
        "posx": 3410.94189453125,
        "posy": 7646.423828125,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "867865089",
        "mapid": "1",
        "bftitle": "Skalat",
        "sector": "0",
        "posx": 11130.1201171875,
        "posy": 5575.2138671875,
        "gamemap": "204"
    },
    {
        "id": "868118545",
        "mapid": "1",
        "bftitle": "Hobro",
        "sector": "0",
        "posx": 6384.83984375,
        "posy": 2022.1500244140625,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "868122975",
        "mapid": "1",
        "bftitle": "Saint-Sever",
        "sector": "0",
        "posx": 3346.89697265625,
        "posy": 8014.22119140625,
        "gamemap": "203",
        "rotation": 1
    },
    {
        "id": "868213628",
        "mapid": "1",
        "bftitle": "Sellières",
        "sector": "0",
        "posx": 5146.06298828125,
        "posy": 6725.3408203125,
        "gamemap": "201"
    },
    {
        "id": "868358016",
        "mapid": "1",
        "bftitle": "Leicester",
        "sector": "0",
        "posx": 3218.972900390625,
        "posy": 4054.179931640625,
        "gamemap": "70439"
    },
    {
        "id": "868480155",
        "mapid": "1",
        "bftitle": "Karlovac",
        "sector": "0",
        "posx": 8072.52490234375,
        "posy": 7296.626953125,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "868539643",
        "mapid": "1",
        "bftitle": "Jurilovca",
        "sector": "0",
        "posx": 11976.669921875,
        "posy": 7598.1220703125,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "868554227",
        "mapid": "1",
        "bftitle": "Piaseczno",
        "sector": "0",
        "posx": 9674.58984375,
        "posy": 4363.208984375,
        "gamemap": "203"
    },
    {
        "id": "868772666",
        "mapid": "1",
        "bftitle": "Ivatsevichy",
        "sector": "0",
        "posx": 10943.4404296875,
        "posy": 4033.201904296875,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "868834695",
        "mapid": "1",
        "bftitle": "Sääre",
        "sector": "0",
        "posx": 9981.171875,
        "posy": 1326.27001953125,
        "gamemap": "70439"
    },
    {
        "id": "868906842",
        "mapid": "1",
        "bftitle": "Krókos",
        "sector": "0",
        "posx": 9910.388671875,
        "posy": 9402.876953125,
        "gamemap": "201"
    },
    {
        "id": "869115362",
        "mapid": "1",
        "bftitle": "Saint-Rémy",
        "sector": "0",
        "posx": 4933.55810546875,
        "posy": 6753.05517578125,
        "gamemap": "201"
    },
    {
        "id": "869269798",
        "mapid": "1",
        "bftitle": "Kielce",
        "sector": "0",
        "posx": 9561.54296875,
        "posy": 4910.373046875,
        "gamemap": "70439"
    },
    {
        "id": "869431491",
        "mapid": "1",
        "bftitle": "İhsaniye",
        "sector": "0",
        "posx": 12260.4404296875,
        "posy": 9237.013671875,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "869757378",
        "mapid": "1",
        "bftitle": "Kuvshinovo",
        "sector": "0",
        "posx": 13531.9697265625,
        "posy": 1813.5899658203125,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "870075067",
        "mapid": "1",
        "bftitle": "Mezinovskiy",
        "sector": "0",
        "posx": 15345.5,
        "posy": 2624.572021484375,
        "gamemap": "201"
    },
    {
        "id": "870260049",
        "mapid": "1",
        "bftitle": "Sarlat-la-Canéda",
        "sector": "0",
        "posx": 3871.635009765625,
        "posy": 7547.19482421875,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "870388609",
        "mapid": "1",
        "bftitle": "Gloucester",
        "sector": "0",
        "posx": 2891.160888671875,
        "posy": 4423.55615234375,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "871195918",
        "mapid": "1",
        "bftitle": "Freswick",
        "sector": "0",
        "posx": 2596.029052734375,
        "posy": 947.0219116210938,
        "gamemap": "70439"
    },
    {
        "id": "871307304",
        "mapid": "1",
        "bftitle": "Sörhamn",
        "sector": "0",
        "posx": 7799.58984375,
        "posy": 905.2415771484375,
        "gamemap": "70439"
    },
    {
        "id": "871663925",
        "mapid": "1",
        "bftitle": "Dobryanka",
        "sector": "0",
        "posx": 13168.73046875,
        "posy": 6147.5869140625,
        "gamemap": "204"
    },
    {
        "id": "871731860",
        "mapid": "1",
        "bftitle": "Ćuprija",
        "sector": "0",
        "posx": 9779.185546875,
        "posy": 7944.544921875,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "872027080",
        "mapid": "1",
        "bftitle": "Ås",
        "sector": "0",
        "posx": 6679.2470703125,
        "posy": 330.3673095703125,
        "gamemap": "201"
    },
    {
        "id": "872093050",
        "mapid": "1",
        "bftitle": "Yelikhovichi",
        "sector": "0",
        "posx": 10819.0400390625,
        "posy": 5391.1748046875,
        "gamemap": "203"
    },
    {
        "id": "873467890",
        "mapid": "1",
        "bftitle": "Modena",
        "sector": "0",
        "posx": 6717.56982421875,
        "posy": 7647.48095703125,
        "gamemap": "70439"
    },
    {
        "id": "873729711",
        "mapid": "1",
        "bftitle": "Marzahn",
        "sector": "0",
        "posx": 7492.73193359375,
        "posy": 4112.3359375,
        "gamemap": "203"
    },
    {
        "id": "873934175",
        "mapid": "1",
        "bftitle": "Celles",
        "sector": "0",
        "posx": 4528.4677734375,
        "posy": 4984.17578125,
        "gamemap": "70439"
    },
    {
        "id": "874057308",
        "mapid": "1",
        "bftitle": "Yefimovskiy",
        "sector": "0",
        "posx": 13678.4501953125,
        "posy": 428.510498046875,
        "gamemap": "201"
    },
    {
        "id": "874765662",
        "mapid": "1",
        "bftitle": "Kifissia",
        "sector": "0",
        "posx": 10501.330078125,
        "posy": 10234.759765625,
        "gamemap": "70439"
    },
    {
        "id": "875133353",
        "mapid": "1",
        "bftitle": "Arles",
        "sector": "0",
        "posx": 4872.3017578125,
        "posy": 8047.0830078125,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "875828650",
        "mapid": "1",
        "bftitle": "Montluçon",
        "sector": "0",
        "posx": 4277.16015625,
        "posy": 6937.6298828125,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "875969833",
        "mapid": "1",
        "bftitle": "Kulltorp",
        "sector": "0",
        "posx": 8253.939453125,
        "posy": 1409.699951171875,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "876400125",
        "mapid": "1",
        "bftitle": "Skurup",
        "sector": "0",
        "posx": 7472.81005859375,
        "posy": 2638.02490234375,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "876560936",
        "mapid": "1",
        "bftitle": "Nõva",
        "sector": "0",
        "posx": 10454.1103515625,
        "posy": 590.681884765625,
        "gamemap": "70439"
    },
    {
        "id": "876684820",
        "mapid": "1",
        "bftitle": "Romny",
        "sector": "0",
        "posx": 13327.419921875,
        "posy": 4966.10400390625,
        "gamemap": "201"
    },
    {
        "id": "876993644",
        "mapid": "1",
        "bftitle": "Süderstapel Flugplatz",
        "sector": "0",
        "posx": 6214.10400390625,
        "posy": 3221.212890625,
        "gamemap": "205",
        "rotation": 2
    },
    {
        "id": "877450246",
        "mapid": "1",
        "bftitle": "Jaunciems",
        "sector": "0",
        "posx": 10009.5703125,
        "posy": 1479.0489501953125,
        "gamemap": "70439"
    },
    {
        "id": "877600072",
        "mapid": "1",
        "bftitle": "Podkletnya",
        "sector": "0",
        "posx": 12817.5400390625,
        "posy": 3058.301025390625,
        "gamemap": "70439"
    },
    {
        "id": "877622803",
        "mapid": "1",
        "bftitle": "Banchory",
        "sector": "0",
        "posx": 2772.9990234375,
        "posy": 1803.9429931640625,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "878002821",
        "mapid": "1",
        "bftitle": "Thenon",
        "sector": "0",
        "posx": 3829.29296875,
        "posy": 7442.81884765625,
        "gamemap": "203",
        "rotation": 2
    },
    {
        "id": "878865843",
        "mapid": "1",
        "bftitle": "San Martino in Passiria",
        "sector": "0",
        "posx": 6806.06005859375,
        "posy": 6744.18115234375,
        "gamemap": "201"
    },
    {
        "id": "878990714",
        "mapid": "1",
        "bftitle": "Regensburg",
        "sector": "0",
        "posx": 7098.1171875,
        "posy": 5613.69482421875,
        "gamemap": "70439"
    },
    {
        "id": "879199638",
        "mapid": "1",
        "bftitle": "Naronovo",
        "sector": "0",
        "posx": 11781.4599609375,
        "posy": 1290.217041015625,
        "gamemap": "70439"
    },
    {
        "id": "879207357",
        "mapid": "1",
        "bftitle": "Temryuk",
        "sector": "0",
        "posx": 14489.3701171875,
        "posy": 7409.326171875,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "879494479",
        "mapid": "1",
        "bftitle": "Lezhë",
        "sector": "0",
        "posx": 9273.130859375,
        "posy": 8808.021484375,
        "gamemap": "70439"
    },
    {
        "id": "880256921",
        "mapid": "1",
        "bftitle": "Torzhok",
        "sector": "0",
        "posx": 13763.4501953125,
        "posy": 1805.9599609375,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "880325906",
        "mapid": "1",
        "bftitle": "Košice",
        "sector": "0",
        "posx": 9746.3798828125,
        "posy": 5896.6748046875,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "880952822",
        "mapid": "1",
        "bftitle": "Gdańsk",
        "sector": "0",
        "posx": 8980.8134765625,
        "posy": 3216.5458984375,
        "gamemap": "70439"
    },
    {
        "id": "880966107",
        "mapid": "1",
        "bftitle": "Piacenza",
        "sector": "0",
        "posx": 6359.72802734375,
        "posy": 7483.35595703125,
        "gamemap": "70439"
    },
    {
        "id": "881276342",
        "mapid": "1",
        "bftitle": "Villemur-sur-Tarn",
        "sector": "0",
        "posx": 3955.5419921875,
        "posy": 7969.2958984375,
        "gamemap": "70439"
    },
    {
        "id": "881657576",
        "mapid": "1",
        "bftitle": "Sulingen",
        "sector": "0",
        "posx": 6099.5751953125,
        "posy": 4018.238037109375,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "882059554",
        "mapid": "1",
        "bftitle": "Novinka",
        "sector": "0",
        "posx": 12571.9697265625,
        "posy": 471.75830078125,
        "gamemap": "201"
    },
    {
        "id": "882092576",
        "mapid": "1",
        "bftitle": "Ljusfallshammar",
        "sector": "0",
        "posx": 8053.634765625,
        "posy": 838.9005737304688,
        "gamemap": "201"
    },
    {
        "id": "882094743",
        "mapid": "1",
        "bftitle": "Stapelfeld",
        "sector": "0",
        "posx": 6509.82421875,
        "posy": 3594.049072265625,
        "gamemap": "70439"
    },
    {
        "id": "882230512",
        "mapid": "1",
        "bftitle": "Bassano del Grappa",
        "sector": "0",
        "posx": 6953.751953125,
        "posy": 7180.5068359375,
        "gamemap": "201"
    },
    {
        "id": "882256232",
        "mapid": "1",
        "bftitle": "Vouziers",
        "sector": "0",
        "posx": 4892.72998046875,
        "posy": 5587.61181640625,
        "gamemap": "203",
        "rotation": 3
    },
    {
        "id": "882687994",
        "mapid": "1",
        "bftitle": "Olteniţa",
        "sector": "0",
        "posx": 11322.01953125,
        "posy": 7880.5869140625,
        "gamemap": "70439"
    },
    {
        "id": "882968786",
        "mapid": "1",
        "bftitle": "Durham",
        "sector": "0",
        "posx": 3054.737060546875,
        "posy": 3013.741943359375,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "883187043",
        "mapid": "1",
        "bftitle": "Klimavichy",
        "sector": "0",
        "posx": 12883.009765625,
        "posy": 3590.117919921875,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "883747493",
        "mapid": "1",
        "bftitle": "Mountain Village Favignon",
        "sector": "0",
        "posx": 15857.740234375,
        "posy": 16000.3701171875,
        "gamemap": "201"
    },
    {
        "id": "884100314",
        "mapid": "1",
        "bftitle": "Ripky",
        "sector": "0",
        "posx": 12626.58984375,
        "posy": 4470.576171875,
        "gamemap": "70439"
    },
    {
        "id": "885111818",
        "mapid": "1",
        "bftitle": "Stonehaven",
        "sector": "0",
        "posx": 2857.201904296875,
        "posy": 1847.7139892578125,
        "gamemap": "70439"
    },
    {
        "id": "885224645",
        "mapid": "1",
        "bftitle": "Vodskov",
        "sector": "0",
        "posx": 6452.80615234375,
        "posy": 1770.68701171875,
        "gamemap": "70439"
    },
    {
        "id": "886016566",
        "mapid": "1",
        "bftitle": "Stenum",
        "sector": "0",
        "posx": 6413.90087890625,
        "posy": 1634.571044921875,
        "gamemap": "70439"
    },
    {
        "id": "886373789",
        "mapid": "1",
        "bftitle": "Voyinka",
        "sector": "0",
        "posx": 13478.8701171875,
        "posy": 7134.93798828125,
        "gamemap": "70439"
    },
    {
        "id": "886575163",
        "mapid": "1",
        "bftitle": "Maribor",
        "sector": "0",
        "posx": 8101.51220703125,
        "posy": 6842.783203125,
        "gamemap": "201"
    },
    {
        "id": "887250569",
        "mapid": "1",
        "bftitle": "Boureni",
        "sector": "0",
        "posx": 10384.1796875,
        "posy": 7908.2900390625,
        "gamemap": "205",
        "rotation": 2
    },
    {
        "id": "887510692",
        "mapid": "1",
        "bftitle": "Nykil",
        "sector": "0",
        "posx": 8043.86376953125,
        "posy": 1121.6689453125,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "887943224",
        "mapid": "1",
        "bftitle": "Chernyakhovsk",
        "sector": "0",
        "posx": 9909.7939453125,
        "posy": 3073.52001953125,
        "gamemap": "70439"
    },
    {
        "id": "888153018",
        "mapid": "1",
        "bftitle": "Chernyanka",
        "sector": "0",
        "posx": 14597.3203125,
        "posy": 4877.31396484375,
        "gamemap": "201"
    },
    {
        "id": "888286428",
        "mapid": "1",
        "bftitle": "Bobrov",
        "sector": "0",
        "posx": 15249.9404296875,
        "posy": 4804.4990234375,
        "gamemap": "201"
    },
    {
        "id": "888540337",
        "mapid": "1",
        "bftitle": "Factory 'Cécil'",
        "sector": "0",
        "posx": 16046.41015625,
        "posy": 15737.33984375,
        "gamemap": "203"
    },
    {
        "id": "888640984",
        "mapid": "1",
        "bftitle": "Novorzhev",
        "sector": "0",
        "posx": 12113.599609375,
        "posy": 1813.6529541015625,
        "gamemap": "201"
    },
    {
        "id": "889328426",
        "mapid": "1",
        "bftitle": "Bourgoin",
        "sector": "0",
        "posx": 5063.72216796875,
        "posy": 7256.1220703125,
        "gamemap": "201"
    },
    {
        "id": "889415069",
        "mapid": "1",
        "bftitle": "Khvastovichi",
        "sector": "0",
        "posx": 13802.1103515625,
        "posy": 3658.907958984375,
        "gamemap": "201"
    },
    {
        "id": "889485661",
        "mapid": "1",
        "bftitle": "Aizpute",
        "sector": "0",
        "posx": 9846.60546875,
        "posy": 1982.593994140625,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "889642152",
        "mapid": "1",
        "bftitle": "Mudanya",
        "sector": "0",
        "posx": 11987.4296875,
        "posy": 9341.435546875,
        "gamemap": "70439"
    },
    {
        "id": "889659130",
        "mapid": "1",
        "bftitle": "Trnava",
        "sector": "0",
        "posx": 8670.345703125,
        "posy": 6046.7451171875,
        "gamemap": "203"
    },
    {
        "id": "889699070",
        "mapid": "1",
        "bftitle": "Portsmouth",
        "sector": "0",
        "posx": 3187.343994140625,
        "posy": 4965.544921875,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "889700628",
        "mapid": "1",
        "bftitle": "Neuburg an der Donau",
        "sector": "0",
        "posx": 6794.283203125,
        "posy": 5888.51513671875,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "889790366",
        "mapid": "1",
        "bftitle": "Zirndorf",
        "sector": "0",
        "posx": 6725.9990234375,
        "posy": 5568.369140625,
        "gamemap": "201"
    },
    {
        "id": "889944377",
        "mapid": "1",
        "bftitle": "Wyszogród",
        "sector": "0",
        "posx": 9433.53125,
        "posy": 4187.626953125,
        "gamemap": "70439"
    },
    {
        "id": "890428957",
        "mapid": "1",
        "bftitle": "Mont-de-Marsan",
        "sector": "0",
        "posx": 3369.302001953125,
        "posy": 7959.81884765625,
        "gamemap": "70439"
    },
    {
        "id": "890927689",
        "mapid": "1",
        "bftitle": "Väike-Maarja",
        "sector": "0",
        "posx": 11209.650390625,
        "posy": 642.52587890625,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "891532937",
        "mapid": "1",
        "bftitle": "Byglandsfjord",
        "sector": "0",
        "posx": 5803.2509765625,
        "posy": 904.4522705078125,
        "gamemap": "203",
        "rotation": 1
    },
    {
        "id": "891643418",
        "mapid": "1",
        "bftitle": "Åseda",
        "sector": "0",
        "posx": 8012.8779296875,
        "posy": 1737.196044921875,
        "gamemap": "203",
        "rotation": 1
    },
    {
        "id": "891654377",
        "mapid": "1",
        "bftitle": "Mostys'ka",
        "sector": "0",
        "posx": 10301.1796875,
        "posy": 5407.85400390625,
        "gamemap": "70439"
    },
    {
        "id": "891689922",
        "mapid": "1",
        "bftitle": "Sillamäe",
        "sector": "0",
        "posx": 11653.25,
        "posy": 486.247314453125,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "891736924",
        "mapid": "1",
        "bftitle": "Cordes-sur-Ciel",
        "sector": "0",
        "posx": 4086.6259765625,
        "posy": 7887.43603515625,
        "gamemap": "204",
        "rotation": 2
    },
    {
        "id": "891801119",
        "mapid": "1",
        "bftitle": "Snizhne",
        "sector": "0",
        "posx": 14880.2802734375,
        "posy": 6202.3349609375,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "892090488",
        "mapid": "1",
        "bftitle": "Lamia",
        "sector": "0",
        "posx": 10090.8798828125,
        "posy": 9925.16015625,
        "gamemap": "70439"
    },
    {
        "id": "892438522",
        "mapid": "1",
        "bftitle": "Radstadt",
        "sector": "0",
        "posx": 7457.60595703125,
        "posy": 6484.31298828125,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "893418183",
        "mapid": "1",
        "bftitle": "Cervignano del Friuli",
        "sector": "0",
        "posx": 7425.15380859375,
        "posy": 7155.73779296875,
        "gamemap": "203",
        "rotation": 2
    },
    {
        "id": "893965421",
        "mapid": "1",
        "bftitle": "Kuršėnai",
        "sector": "0",
        "posx": 10233.2099609375,
        "posy": 2372.412109375,
        "gamemap": "70439"
    },
    {
        "id": "894361511",
        "mapid": "1",
        "bftitle": "Debrecen",
        "sector": "0",
        "posx": 9856.3759765625,
        "posy": 6418.82080078125,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "894425483",
        "mapid": "1",
        "bftitle": "Adria",
        "sector": "0",
        "posx": 7048.97998046875,
        "posy": 7478.1650390625,
        "gamemap": "70439"
    },
    {
        "id": "894446474",
        "mapid": "1",
        "bftitle": "Morecambe",
        "sector": "0",
        "posx": 2708.866943359375,
        "posy": 3354.114013671875,
        "gamemap": "201"
    },
    {
        "id": "894485072",
        "mapid": "1",
        "bftitle": "Kaunas",
        "sector": "0",
        "posx": 10520.7998046875,
        "posy": 2937.125,
        "gamemap": "70439"
    },
    {
        "id": "894506334",
        "mapid": "1",
        "bftitle": "Madzharovo",
        "sector": "0",
        "posx": 11097.2900390625,
        "posy": 8867.4462890625,
        "gamemap": "203"
    },
    {
        "id": "895119314",
        "mapid": "1",
        "bftitle": "Corrèze",
        "sector": "0",
        "posx": 4064.5390625,
        "posy": 7344.7861328125,
        "gamemap": "201"
    },
    {
        "id": "895235975",
        "mapid": "1",
        "bftitle": "Köpenick",
        "sector": "0",
        "posx": 7494.1162109375,
        "posy": 4160.7060546875,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "895262747",
        "mapid": "1",
        "bftitle": "Chernogolovka",
        "sector": "0",
        "posx": 14761.400390625,
        "posy": 2364.4951171875,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "895271696",
        "mapid": "1",
        "bftitle": "Letzlingen",
        "sector": "0",
        "posx": 6881.662109375,
        "posy": 4160.38720703125,
        "gamemap": "70439"
    },
    {
        "id": "896051281",
        "mapid": "1",
        "bftitle": "Tul’chyn",
        "sector": "0",
        "posx": 11970.740234375,
        "posy": 5914.3251953125,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "896185673",
        "mapid": "1",
        "bftitle": "Contes",
        "sector": "0",
        "posx": 4089.60205078125,
        "posy": 5125.2099609375,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "896336211",
        "mapid": "1",
        "bftitle": "Stanford-le-Hope",
        "sector": "0",
        "posx": 3650.215087890625,
        "posy": 4597.490234375,
        "gamemap": "70439"
    },
    {
        "id": "896400342",
        "mapid": "1",
        "bftitle": "Aigre",
        "sector": "0",
        "posx": 3517.84912109375,
        "posy": 7124.81396484375,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "896794041",
        "mapid": "1",
        "bftitle": "Kökar",
        "sector": "0",
        "posx": 9651.046875,
        "posy": 188.84109497070312,
        "gamemap": "70439"
    },
    {
        "id": "896803662",
        "mapid": "1",
        "bftitle": "Mimet",
        "sector": "0",
        "posx": 5130.26708984375,
        "posy": 8159.6181640625,
        "gamemap": "205"
    },
    {
        "id": "896807839",
        "mapid": "1",
        "bftitle": "Ochakiv",
        "sector": "0",
        "posx": 12763.1796875,
        "posy": 6817.8251953125,
        "gamemap": "70439"
    },
    {
        "id": "897178128",
        "mapid": "1",
        "bftitle": "Khvoynaya",
        "sector": "0",
        "posx": 13637.740234375,
        "posy": 772.336181640625,
        "gamemap": "201"
    },
    {
        "id": "897196119",
        "mapid": "1",
        "bftitle": "Guriņi",
        "sector": "0",
        "posx": 9802.6357421875,
        "posy": 1684.54296875,
        "gamemap": "70439"
    },
    {
        "id": "897225624",
        "mapid": "1",
        "bftitle": "Auronzo di Cadore",
        "sector": "0",
        "posx": 7157.02001953125,
        "posy": 6840.85888671875,
        "gamemap": "203",
        "rotation": 1
    },
    {
        "id": "897255036",
        "mapid": "1",
        "bftitle": "Libourne",
        "sector": "0",
        "posx": 3450.589111328125,
        "posy": 7532.259765625,
        "gamemap": "205",
        "rotation": 3
    },
    {
        "id": "897267039",
        "mapid": "1",
        "bftitle": "Caussade",
        "sector": "0",
        "posx": 3966.18896484375,
        "posy": 7848.73193359375,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "897775535",
        "mapid": "1",
        "bftitle": "Snihurivka",
        "sector": "0",
        "posx": 13131.16015625,
        "posy": 6618.009765625,
        "gamemap": "70439"
    },
    {
        "id": "897792844",
        "mapid": "1",
        "bftitle": "Nova Pazova",
        "sector": "0",
        "posx": 9441.884765625,
        "posy": 7524.416015625,
        "gamemap": "204"
    },
    {
        "id": "897928168",
        "mapid": "1",
        "bftitle": "Frosinone",
        "sector": "0",
        "posx": 7424.01708984375,
        "posy": 8865.763671875,
        "gamemap": "70439"
    },
    {
        "id": "897947170",
        "mapid": "1",
        "bftitle": "Krupki",
        "sector": "0",
        "posx": 12056.0302734375,
        "posy": 3233.888916015625,
        "gamemap": "201"
    },
    {
        "id": "898190819",
        "mapid": "1",
        "bftitle": "Podgorica",
        "sector": "0",
        "posx": 9161.7421875,
        "posy": 8546.37109375,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "898215676",
        "mapid": "1",
        "bftitle": "Horst",
        "sector": "0",
        "posx": 6338.76123046875,
        "posy": 3510.264892578125,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "898267079",
        "mapid": "1",
        "bftitle": "Mohyliv-Podil’s’kyy",
        "sector": "0",
        "posx": 11663.4697265625,
        "posy": 6016.2451171875,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "898351492",
        "mapid": "1",
        "bftitle": "Mieszkowice",
        "sector": "0",
        "posx": 7763.47314453125,
        "posy": 3994.514892578125,
        "gamemap": "70439"
    },
    {
        "id": "898609815",
        "mapid": "1",
        "bftitle": "Swansea",
        "sector": "0",
        "posx": 2375.242919921875,
        "posy": 4562.1591796875,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "898715172",
        "mapid": "1",
        "bftitle": "Bytów",
        "sector": "0",
        "posx": 8642.392578125,
        "posy": 3308.26806640625,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "898859357",
        "mapid": "1",
        "bftitle": "Smolyany",
        "sector": "0",
        "posx": 12329.7001953125,
        "posy": 3092.153076171875,
        "gamemap": "201"
    },
    {
        "id": "899585790",
        "mapid": "1",
        "bftitle": "Venelles",
        "sector": "0",
        "posx": 5135.578125,
        "posy": 8072.9677734375,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "899829128",
        "mapid": "1",
        "bftitle": "Liverpool",
        "sector": "0",
        "posx": 2645.166015625,
        "posy": 3677.37890625,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "899979413",
        "mapid": "1",
        "bftitle": "Jindřichův Hradec",
        "sector": "0",
        "posx": 7912.8369140625,
        "posy": 5703.41796875,
        "gamemap": "201"
    },
    {
        "id": "900167657",
        "mapid": "1",
        "bftitle": "Factory 'Felix'",
        "sector": "0",
        "posx": 16095.9697265625,
        "posy": 15960.2998046875,
        "gamemap": "203"
    },
    {
        "id": "900943669",
        "mapid": "1",
        "bftitle": "Deurne Vliegveld",
        "sector": "0",
        "posx": 4857.27587890625,
        "posy": 4740.8818359375,
        "gamemap": "205"
    },
    {
        "id": "901487810",
        "mapid": "1",
        "bftitle": "Šiauliai",
        "sector": "0",
        "posx": 10349.8095703125,
        "posy": 2399.658935546875,
        "gamemap": "203",
        "rotation": 2
    },
    {
        "id": "901623016",
        "mapid": "1",
        "bftitle": "Arras Aérodrome",
        "sector": "0",
        "posx": 4336.7587890625,
        "posy": 5148.05078125,
        "gamemap": "205",
        "rotation": 1
    },
    {
        "id": "901687526",
        "mapid": "1",
        "bftitle": "Saint Combs",
        "sector": "0",
        "posx": 2957.85498046875,
        "posy": 1499.135009765625,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "902668345",
        "mapid": "1",
        "bftitle": "Rodelle",
        "sector": "0",
        "posx": 4284.06005859375,
        "posy": 7712.283203125,
        "gamemap": "203",
        "rotation": 3
    },
    {
        "id": "902931049",
        "mapid": "1",
        "bftitle": "Château de Loches",
        "sector": "0",
        "posx": 3808.154052734375,
        "posy": 6593.05419921875,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "903167648",
        "mapid": "1",
        "bftitle": "Ogre",
        "sector": "0",
        "posx": 10730.099609375,
        "posy": 1928.9840087890625,
        "gamemap": "205",
        "rotation": 1
    },
    {
        "id": "903394815",
        "mapid": "1",
        "bftitle": "Hlobyne",
        "sector": "0",
        "posx": 13264.3603515625,
        "posy": 5593.1279296875,
        "gamemap": "201"
    },
    {
        "id": "903426256",
        "mapid": "1",
        "bftitle": "Pampow",
        "sector": "0",
        "posx": 7210.8349609375,
        "posy": 3516.736083984375,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "903461837",
        "mapid": "1",
        "bftitle": "Vulcan",
        "sector": "0",
        "posx": 10335.150390625,
        "posy": 7340.33203125,
        "gamemap": "201"
    },
    {
        "id": "904158785",
        "mapid": "1",
        "bftitle": "Donskoy",
        "sector": "0",
        "posx": 14752.490234375,
        "posy": 3408.64404296875,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "904232078",
        "mapid": "1",
        "bftitle": "Scarborough",
        "sector": "0",
        "posx": 3388.56494140625,
        "posy": 3255.576904296875,
        "gamemap": "70439"
    },
    {
        "id": "904635523",
        "mapid": "1",
        "bftitle": "Schopfheim",
        "sector": "0",
        "posx": 5807.55322265625,
        "posy": 6367.2919921875,
        "gamemap": "203",
        "rotation": 1
    },
    {
        "id": "904684587",
        "mapid": "1",
        "bftitle": "Kumbağ",
        "sector": "0",
        "posx": 11564.009765625,
        "posy": 9167.7177734375,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "904687364",
        "mapid": "1",
        "bftitle": "Bonyhád",
        "sector": "0",
        "posx": 8946.771484375,
        "posy": 6952.2138671875,
        "gamemap": "203",
        "rotation": 1
    },
    {
        "id": "904751633",
        "mapid": "1",
        "bftitle": "Konëchki",
        "sector": "0",
        "posx": 12499.419921875,
        "posy": 571.44580078125,
        "gamemap": "205"
    },
    {
        "id": "905342639",
        "mapid": "1",
        "bftitle": "Deçan",
        "sector": "0",
        "posx": 9461.9990234375,
        "posy": 8506.708984375,
        "gamemap": "201"
    },
    {
        "id": "905492444",
        "mapid": "1",
        "bftitle": "Brateyevo",
        "sector": "0",
        "posx": 14584.849609375,
        "posy": 2554.947021484375,
        "gamemap": "203",
        "rotation": 2
    },
    {
        "id": "905699880",
        "mapid": "1",
        "bftitle": "Rambouillet",
        "sector": "0",
        "posx": 4052.427978515625,
        "posy": 5925.26708984375,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "905936572",
        "mapid": "1",
        "bftitle": "Saint-Affrique",
        "sector": "0",
        "posx": 4361.9169921875,
        "posy": 7932.9609375,
        "gamemap": "201"
    },
    {
        "id": "906148056",
        "mapid": "1",
        "bftitle": "Ukmerge",
        "sector": "0",
        "posx": 10769.9599609375,
        "posy": 2756.64892578125,
        "gamemap": "205",
        "rotation": 2
    },
    {
        "id": "906330737",
        "mapid": "1",
        "bftitle": "Rimsø",
        "sector": "0",
        "posx": 6671.998046875,
        "posy": 2097.2919921875,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "906513451",
        "mapid": "1",
        "bftitle": "Lauchhammer",
        "sector": "0",
        "posx": 7551.85791015625,
        "posy": 4619.43994140625,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "906734463",
        "mapid": "1",
        "bftitle": "De Koog",
        "sector": "0",
        "posx": 4920.68603515625,
        "posy": 3868.488037109375,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "907370461",
        "mapid": "1",
        "bftitle": "Trebišov",
        "sector": "0",
        "posx": 9881.64453125,
        "posy": 5934.8359375,
        "gamemap": "205",
        "rotation": 2
    },
    {
        "id": "907536104",
        "mapid": "1",
        "bftitle": "Berrien Aérodrome",
        "sector": "0",
        "posx": 2427.52001953125,
        "posy": 6082.1328125,
        "gamemap": "205",
        "rotation": 1
    },
    {
        "id": "907847115",
        "mapid": "1",
        "bftitle": "Mortagne-sur-Gironde",
        "sector": "0",
        "posx": 3284.325927734375,
        "posy": 7299.08203125,
        "gamemap": "203",
        "rotation": 2
    },
    {
        "id": "907912886",
        "mapid": "1",
        "bftitle": "Knyazh'i Gory",
        "sector": "0",
        "posx": 13842.8798828125,
        "posy": 2323.30908203125,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "908286340",
        "mapid": "1",
        "bftitle": "Káto Achaḯa",
        "sector": "0",
        "posx": 9829.3583984375,
        "posy": 10210.1796875,
        "gamemap": "70439"
    },
    {
        "id": "908649912",
        "mapid": "1",
        "bftitle": "Kozerogi",
        "sector": "0",
        "posx": 12614.259765625,
        "posy": 4703.9521484375,
        "gamemap": "201"
    },
    {
        "id": "908743817",
        "mapid": "1",
        "bftitle": "Ovidiopol",
        "sector": "0",
        "posx": 12438.23046875,
        "posy": 6973.23876953125,
        "gamemap": "203",
        "rotation": 1
    },
    {
        "id": "909172153",
        "mapid": "1",
        "bftitle": "Jaunaglona",
        "sector": "0",
        "posx": 11431.58984375,
        "posy": 2279.506103515625,
        "gamemap": "70439"
    },
    {
        "id": "909327706",
        "mapid": "1",
        "bftitle": "Kochuta Pervaya",
        "sector": "0",
        "posx": 12592.240234375,
        "posy": 1892.739990234375,
        "gamemap": "70439"
    },
    {
        "id": "909373729",
        "mapid": "1",
        "bftitle": "Šilutė",
        "sector": "0",
        "posx": 9812.3251953125,
        "posy": 2705.3701171875,
        "gamemap": "201"
    },
    {
        "id": "909381486",
        "mapid": "1",
        "bftitle": "Garéoult",
        "sector": "0",
        "posx": 5287.26416015625,
        "posy": 8188.80908203125,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "909474430",
        "mapid": "1",
        "bftitle": "Spilimbergo",
        "sector": "0",
        "posx": 7294.16015625,
        "posy": 7031.453125,
        "gamemap": "203"
    },
    {
        "id": "909576794",
        "mapid": "1",
        "bftitle": "Arnsberg",
        "sector": "0",
        "posx": 5944.85400390625,
        "posy": 4629.8701171875,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "909873488",
        "mapid": "1",
        "bftitle": "München",
        "sector": "0",
        "posx": 6802.5400390625,
        "posy": 6096.2578125,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "909930946",
        "mapid": "1",
        "bftitle": "Västanfjärd",
        "sector": "0",
        "posx": 10197.3701171875,
        "posy": 105.87909698486328,
        "gamemap": "201"
    },
    {
        "id": "910349435",
        "mapid": "1",
        "bftitle": "Vårgårda",
        "sector": "0",
        "posx": 7269.73193359375,
        "posy": 1259.47802734375,
        "gamemap": "201"
    },
    {
        "id": "910422682",
        "mapid": "1",
        "bftitle": "Aul’s",
        "sector": "0",
        "posx": 10553.2802734375,
        "posy": 3552.98193359375,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "910741258",
        "mapid": "1",
        "bftitle": "Kirriemuir",
        "sector": "0",
        "posx": 2628.30810546875,
        "posy": 1993.8819580078125,
        "gamemap": "205"
    },
    {
        "id": "910944133",
        "mapid": "1",
        "bftitle": "Langeac",
        "sector": "0",
        "posx": 4538.98193359375,
        "posy": 7457.73681640625,
        "gamemap": "201"
    },
    {
        "id": "911319854",
        "mapid": "1",
        "bftitle": "Geisingen",
        "sector": "0",
        "posx": 6050.59521484375,
        "posy": 6246.9072265625,
        "gamemap": "203",
        "rotation": 2
    },
    {
        "id": "911367725",
        "mapid": "1",
        "bftitle": "Starobil's'k",
        "sector": "0",
        "posx": 14920.8701171875,
        "posy": 5642.740234375,
        "gamemap": "201"
    },
    {
        "id": "911436430",
        "mapid": "1",
        "bftitle": "Kosachëvka",
        "sector": "0",
        "posx": 12498.66015625,
        "posy": 4802.3798828125,
        "gamemap": "70439"
    },
    {
        "id": "912085642",
        "mapid": "1",
        "bftitle": "Novoye Devyatkino",
        "sector": "0",
        "posx": 12450.5498046875,
        "posy": 95.79865264892578,
        "gamemap": "203",
        "rotation": 1
    },
    {
        "id": "912106252",
        "mapid": "1",
        "bftitle": "Vallo della Lucania",
        "sector": "0",
        "posx": 7990.02978515625,
        "posy": 9416.654296875,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "912124415",
        "mapid": "1",
        "bftitle": "Svendborg",
        "sector": "0",
        "posx": 6614.68603515625,
        "posy": 2911.656982421875,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "912510493",
        "mapid": "1",
        "bftitle": "Oschatz",
        "sector": "0",
        "posx": 7357.89501953125,
        "posy": 4708.43994140625,
        "gamemap": "70439"
    },
    {
        "id": "912563350",
        "mapid": "1",
        "bftitle": "Sävsjö",
        "sector": "0",
        "posx": 7813.005859375,
        "posy": 1609.8260498046875,
        "gamemap": "70439"
    },
    {
        "id": "912706508",
        "mapid": "1",
        "bftitle": "Pyryatyn",
        "sector": "0",
        "posx": 13043.5302734375,
        "posy": 5202.14111328125,
        "gamemap": "203"
    },
    {
        "id": "912759097",
        "mapid": "1",
        "bftitle": "Chemnitz",
        "sector": "0",
        "posx": 7242.4267578125,
        "posy": 4812.86181640625,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "912910773",
        "mapid": "1",
        "bftitle": "Sukhinichi",
        "sector": "0",
        "posx": 13874.9404296875,
        "posy": 3343.882080078125,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "913313937",
        "mapid": "1",
        "bftitle": "Golynki",
        "sector": "0",
        "posx": 12715.1904296875,
        "posy": 2952.70703125,
        "gamemap": "203",
        "rotation": 1
    },
    {
        "id": "913341552",
        "mapid": "1",
        "bftitle": "Jędrzejów",
        "sector": "0",
        "posx": 9466.8671875,
        "posy": 5018.10888671875,
        "gamemap": "70439"
    },
    {
        "id": "913726187",
        "mapid": "1",
        "bftitle": "Monterotondo",
        "sector": "0",
        "posx": 7207.37890625,
        "posy": 8691.0478515625,
        "gamemap": "205",
        "rotation": 2
    },
    {
        "id": "913797707",
        "mapid": "1",
        "bftitle": "Vinogradovo",
        "sector": "0",
        "posx": 14522.009765625,
        "posy": 1865.7049560546875,
        "gamemap": "70439"
    },
    {
        "id": "914633870",
        "mapid": "1",
        "bftitle": "Kolki",
        "sector": "0",
        "posx": 12003.830078125,
        "posy": 4173.244140625,
        "gamemap": "203",
        "rotation": 2
    },
    {
        "id": "914845715",
        "mapid": "1",
        "bftitle": "Marstal",
        "sector": "0",
        "posx": 6584.1669921875,
        "posy": 2989.64794921875,
        "gamemap": "203"
    },
    {
        "id": "914935094",
        "mapid": "1",
        "bftitle": "Soyen",
        "sector": "0",
        "posx": 7099.39404296875,
        "posy": 6159.14404296875,
        "gamemap": "203"
    },
    {
        "id": "915004651",
        "mapid": "1",
        "bftitle": "Belfast",
        "sector": "0",
        "posx": 1775.7960205078125,
        "posy": 3099.06494140625,
        "gamemap": "70439"
    },
    {
        "id": "915102964",
        "mapid": "1",
        "bftitle": "Rayleigh",
        "sector": "0",
        "posx": 3705.694091796875,
        "posy": 4553.35693359375,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "915640829",
        "mapid": "1",
        "bftitle": "Catanzaro",
        "sector": "0",
        "posx": 8381.2138671875,
        "posy": 9931.8076171875,
        "gamemap": "70439"
    },
    {
        "id": "915751145",
        "mapid": "1",
        "bftitle": "Horodnya",
        "sector": "0",
        "posx": 12777.1298828125,
        "posy": 4427.662109375,
        "gamemap": "70439"
    },
    {
        "id": "915822010",
        "mapid": "1",
        "bftitle": "Ellon",
        "sector": "0",
        "posx": 2897.842041015625,
        "posy": 1609.9530029296875,
        "gamemap": "203",
        "rotation": 3
    },
    {
        "id": "915916356",
        "mapid": "1",
        "bftitle": "Dagda",
        "sector": "0",
        "posx": 11586.98046875,
        "posy": 2314.218017578125,
        "gamemap": "201"
    },
    {
        "id": "915963685",
        "mapid": "1",
        "bftitle": "Luçon",
        "sector": "0",
        "posx": 3173.49609375,
        "posy": 6884.3818359375,
        "gamemap": "205"
    },
    {
        "id": "916024542",
        "mapid": "1",
        "bftitle": "Krasyliv",
        "sector": "0",
        "posx": 11421.4501953125,
        "posy": 5473.06787109375,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "916483207",
        "mapid": "1",
        "bftitle": "Rusanov",
        "sector": "0",
        "posx": 12651.08984375,
        "posy": 5083.93701171875,
        "gamemap": "204",
        "rotation": 2
    },
    {
        "id": "916735789",
        "mapid": "1",
        "bftitle": "Kievskiy",
        "sector": "0",
        "posx": 14321.6796875,
        "posy": 2663.218994140625,
        "gamemap": "203"
    },
    {
        "id": "916746859",
        "mapid": "1",
        "bftitle": "Figline Valdarno",
        "sector": "0",
        "posx": 6877.77099609375,
        "posy": 8070.27880859375,
        "gamemap": "70439"
    },
    {
        "id": "917008210",
        "mapid": "1",
        "bftitle": "Zhdanovichy",
        "sector": "0",
        "posx": 11554.080078125,
        "posy": 3422.6201171875,
        "gamemap": "203",
        "rotation": 2
    },
    {
        "id": "917218424",
        "mapid": "1",
        "bftitle": "Grójec",
        "sector": "0",
        "posx": 9631.908203125,
        "posy": 4441.2109375,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "917761613",
        "mapid": "1",
        "bftitle": "Týrnavos",
        "sector": "0",
        "posx": 10048.6201171875,
        "posy": 9605.4697265625,
        "gamemap": "201"
    },
    {
        "id": "918046809",
        "mapid": "1",
        "bftitle": "Kozinka",
        "sector": "0",
        "posx": 13498.580078125,
        "posy": 4646.06005859375,
        "gamemap": "203",
        "rotation": 3
    },
    {
        "id": "918294082",
        "mapid": "1",
        "bftitle": "Aliağa",
        "sector": "0",
        "posx": 11421.2998046875,
        "posy": 9963.16015625,
        "gamemap": "70439"
    },
    {
        "id": "918324088",
        "mapid": "1",
        "bftitle": "Klichaw",
        "sector": "0",
        "posx": 12105.3798828125,
        "posy": 3622.087890625,
        "gamemap": "203",
        "rotation": 1
    },
    {
        "id": "918556206",
        "mapid": "1",
        "bftitle": "Lido di Iesolo",
        "sector": "0",
        "posx": 7222.2080078125,
        "posy": 7288.32080078125,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "919188652",
        "mapid": "1",
        "bftitle": "Nordby",
        "sector": "0",
        "posx": 6619.02490234375,
        "posy": 2382.118896484375,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "919221658",
        "mapid": "1",
        "bftitle": "Taunton",
        "sector": "0",
        "posx": 2637.70703125,
        "posy": 4884.7119140625,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "919404416",
        "mapid": "1",
        "bftitle": "Southend-on-Sea",
        "sector": "0",
        "posx": 3765.587890625,
        "posy": 4592.705078125,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "919497265",
        "mapid": "1",
        "bftitle": "Saintes-Maries-de-la-Mer",
        "sector": "0",
        "posx": 4813.3310546875,
        "posy": 8138.6162109375,
        "gamemap": "70439"
    },
    {
        "id": "919613185",
        "mapid": "1",
        "bftitle": "Ostër",
        "sector": "0",
        "posx": 12567.509765625,
        "posy": 4872.7900390625,
        "gamemap": "201"
    },
    {
        "id": "919615636",
        "mapid": "1",
        "bftitle": "Dillingen an der Donau",
        "sector": "0",
        "posx": 6591.4921875,
        "posy": 5955.8408203125,
        "gamemap": "203",
        "rotation": 2
    },
    {
        "id": "919806161",
        "mapid": "1",
        "bftitle": "Medgidia",
        "sector": "0",
        "posx": 11805.6796875,
        "posy": 7811.9970703125,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "919906055",
        "mapid": "1",
        "bftitle": "Bréhal",
        "sector": "0",
        "posx": 3089.8740234375,
        "posy": 5820.39794921875,
        "gamemap": "70439"
    },
    {
        "id": "919932557",
        "mapid": "1",
        "bftitle": "Kolomak",
        "sector": "0",
        "posx": 13863.759765625,
        "posy": 5387.17822265625,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "920016116",
        "mapid": "1",
        "bftitle": "Le Cap D'Agde",
        "sector": "0",
        "posx": 4544.9521484375,
        "posy": 8209.345703125,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "920142404",
        "mapid": "1",
        "bftitle": "Pontebba",
        "sector": "0",
        "posx": 7415.4599609375,
        "posy": 6863.94921875,
        "gamemap": "201"
    },
    {
        "id": "920204339",
        "mapid": "1",
        "bftitle": "Lochgelly",
        "sector": "0",
        "posx": 2551.6201171875,
        "posy": 2269.156982421875,
        "gamemap": "204",
        "rotation": 3
    },
    {
        "id": "920391474",
        "mapid": "1",
        "bftitle": "Râşnov",
        "sector": "0",
        "posx": 10975.150390625,
        "posy": 7256.1220703125,
        "gamemap": "201"
    },
    {
        "id": "920556114",
        "mapid": "1",
        "bftitle": "Ternaard",
        "sector": "0",
        "posx": 5289.68701171875,
        "posy": 3758.625,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "920788861",
        "mapid": "1",
        "bftitle": "Albjerg",
        "sector": "0",
        "posx": 6672.69677734375,
        "posy": 2853.10302734375,
        "gamemap": "70439"
    },
    {
        "id": "921205664",
        "mapid": "1",
        "bftitle": "Saalfeld",
        "sector": "0",
        "posx": 6838.375,
        "posy": 4997.826171875,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "921297620",
        "mapid": "1",
        "bftitle": "Smiltene",
        "sector": "0",
        "posx": 11107.5400390625,
        "posy": 1598.2249755859375,
        "gamemap": "201"
    },
    {
        "id": "922995311",
        "mapid": "1",
        "bftitle": "Rawa Mazowiecka",
        "sector": "0",
        "posx": 9452.3271484375,
        "posy": 4488.078125,
        "gamemap": "204"
    },
    {
        "id": "923112487",
        "mapid": "1",
        "bftitle": "Spremberg",
        "sector": "0",
        "posx": 7729.87890625,
        "posy": 4580.72900390625,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "923738479",
        "mapid": "1",
        "bftitle": "Panyutyne",
        "sector": "0",
        "posx": 14138.9501953125,
        "posy": 5771.509765625,
        "gamemap": "203",
        "rotation": 2
    },
    {
        "id": "924070040",
        "mapid": "1",
        "bftitle": "Vallensbæk",
        "sector": "0",
        "posx": 7120.38916015625,
        "posy": 2559.4130859375,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "924544706",
        "mapid": "1",
        "bftitle": "Kastlösa",
        "sector": "0",
        "posx": 8349.2783203125,
        "posy": 2118.180908203125,
        "gamemap": "70439"
    },
    {
        "id": "924922208",
        "mapid": "1",
        "bftitle": "Orissaare",
        "sector": "0",
        "posx": 10281.2001953125,
        "posy": 966.1749877929688,
        "gamemap": "70439"
    },
    {
        "id": "926209870",
        "mapid": "1",
        "bftitle": "Foça",
        "sector": "0",
        "posx": 11358.1396484375,
        "posy": 10012.150390625,
        "gamemap": "70439"
    },
    {
        "id": "926496988",
        "mapid": "1",
        "bftitle": "Montbazon",
        "sector": "0",
        "posx": 3675.156982421875,
        "posy": 6568.35400390625,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "926617561",
        "mapid": "1",
        "bftitle": "Gödöllő",
        "sector": "0",
        "posx": 9205.18359375,
        "posy": 6376.9169921875,
        "gamemap": "70439"
    },
    {
        "id": "926958851",
        "mapid": "1",
        "bftitle": "Kutina",
        "sector": "0",
        "posx": 8434.294921875,
        "posy": 7301.77294921875,
        "gamemap": "70439"
    },
    {
        "id": "927093513",
        "mapid": "1",
        "bftitle": "Blackburn",
        "sector": "0",
        "posx": 2787.089111328125,
        "posy": 3519.2958984375,
        "gamemap": "70439"
    },
    {
        "id": "927093910",
        "mapid": "1",
        "bftitle": "Frederiksværk",
        "sector": "0",
        "posx": 7045.380859375,
        "posy": 2386.676025390625,
        "gamemap": "70439"
    },
    {
        "id": "927123649",
        "mapid": "1",
        "bftitle": "Plauen",
        "sector": "0",
        "posx": 7071.6171875,
        "posy": 5084.251953125,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "927266966",
        "mapid": "1",
        "bftitle": "Saint-Etienne",
        "sector": "0",
        "posx": 4801.85986328125,
        "posy": 7319.0732421875,
        "gamemap": "201"
    },
    {
        "id": "927439317",
        "mapid": "1",
        "bftitle": "Malmö",
        "sector": "0",
        "posx": 7329.5390625,
        "posy": 2587.052001953125,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "927596040",
        "mapid": "1",
        "bftitle": "Klyetsk",
        "sector": "0",
        "posx": 11321.66015625,
        "posy": 3859.262939453125,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "928064172",
        "mapid": "1",
        "bftitle": "Zernograd",
        "sector": "0",
        "posx": 15330.5595703125,
        "posy": 6717.7587890625,
        "gamemap": "70439"
    },
    {
        "id": "928130014",
        "mapid": "1",
        "bftitle": "Bad Essen",
        "sector": "0",
        "posx": 5957.76513671875,
        "posy": 4223.009765625,
        "gamemap": "70439"
    },
    {
        "id": "928304844",
        "mapid": "1",
        "bftitle": "Radoshkovichi",
        "sector": "0",
        "posx": 11500.2001953125,
        "posy": 3315.9189453125,
        "gamemap": "203",
        "rotation": 1
    },
    {
        "id": "928407005",
        "mapid": "1",
        "bftitle": "Sarnthein",
        "sector": "0",
        "posx": 6843.240234375,
        "posy": 6805.6240234375,
        "gamemap": "201"
    },
    {
        "id": "928415268",
        "mapid": "1",
        "bftitle": "Lidhult",
        "sector": "0",
        "posx": 8029.20703125,
        "posy": 1307.970947265625,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "928589340",
        "mapid": "1",
        "bftitle": "Veszprém",
        "sector": "0",
        "posx": 8765.3974609375,
        "posy": 6610.43310546875,
        "gamemap": "70439"
    },
    {
        "id": "928716991",
        "mapid": "1",
        "bftitle": "Lido di Ostia",
        "sector": "0",
        "posx": 7113.6298828125,
        "posy": 8828.396484375,
        "gamemap": "70439"
    },
    {
        "id": "929150231",
        "mapid": "1",
        "bftitle": "Nereta",
        "sector": "0",
        "posx": 10933.3896484375,
        "posy": 2257.157958984375,
        "gamemap": "70439"
    },
    {
        "id": "929269334",
        "mapid": "1",
        "bftitle": "Nyebro",
        "sector": "0",
        "posx": 7345.240234375,
        "posy": 1865.7049560546875,
        "gamemap": "201"
    },
    {
        "id": "929450852",
        "mapid": "1",
        "bftitle": "Livron-sur-Drôme",
        "sector": "0",
        "posx": 4935.8349609375,
        "posy": 7595.4482421875,
        "gamemap": "203",
        "rotation": 3
    },
    {
        "id": "929621496",
        "mapid": "1",
        "bftitle": "Gmina Narew",
        "sector": "0",
        "posx": 10409.3701171875,
        "posy": 3932.489013671875,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "929665130",
        "mapid": "1",
        "bftitle": "Tiraspol",
        "sector": "0",
        "posx": 12204.33984375,
        "posy": 6719.873046875,
        "gamemap": "70439"
    },
    {
        "id": "929774205",
        "mapid": "1",
        "bftitle": "Ikast",
        "sector": "0",
        "posx": 6199.40478515625,
        "posy": 2291.072021484375,
        "gamemap": "70439"
    },
    {
        "id": "929807862",
        "mapid": "1",
        "bftitle": "Megalo Peristeri",
        "sector": "0",
        "posx": 9688.79296875,
        "posy": 9611.7568359375,
        "gamemap": "203"
    },
    {
        "id": "930259899",
        "mapid": "1",
        "bftitle": "Stockerau",
        "sector": "0",
        "posx": 8268.595703125,
        "posy": 6044.10986328125,
        "gamemap": "203",
        "rotation": 1
    },
    {
        "id": "930306450",
        "mapid": "1",
        "bftitle": "Rovigo",
        "sector": "0",
        "posx": 6971.33203125,
        "posy": 7470.044921875,
        "gamemap": "205"
    },
    {
        "id": "931394580",
        "mapid": "1",
        "bftitle": "Lazarevo",
        "sector": "0",
        "posx": 13372.83984375,
        "posy": 1043.7010498046875,
        "gamemap": "205",
        "rotation": 2
    },
    {
        "id": "931540320",
        "mapid": "1",
        "bftitle": "Sertolovo",
        "sector": "0",
        "posx": 12368,
        "posy": 47.96773910522461,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "931638148",
        "mapid": "1",
        "bftitle": "Gargždai",
        "sector": "0",
        "posx": 9788.9560546875,
        "posy": 2515.56396484375,
        "gamemap": "205"
    },
    {
        "id": "931790622",
        "mapid": "1",
        "bftitle": "Lanark",
        "sector": "0",
        "posx": 2406.5009765625,
        "posy": 2536.02490234375,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "931857837",
        "mapid": "1",
        "bftitle": "Stroitel'",
        "sector": "0",
        "posx": 14209.26953125,
        "posy": 4950.0517578125,
        "gamemap": "205"
    },
    {
        "id": "931872228",
        "mapid": "1",
        "bftitle": "Xánthi",
        "sector": "0",
        "posx": 10804.509765625,
        "posy": 9057.8134765625,
        "gamemap": "201"
    },
    {
        "id": "932788799",
        "mapid": "1",
        "bftitle": "Ipswich",
        "sector": "0",
        "posx": 3868.342041015625,
        "posy": 4317.587890625,
        "gamemap": "201"
    },
    {
        "id": "932788825",
        "mapid": "1",
        "bftitle": "Korop",
        "sector": "0",
        "posx": 13176.1396484375,
        "posy": 4587.3427734375,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "932847650",
        "mapid": "1",
        "bftitle": "Vargön",
        "sector": "0",
        "posx": 7147.06689453125,
        "posy": 1080.8280029296875,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "932883684",
        "mapid": "1",
        "bftitle": "Farnham Royal",
        "sector": "0",
        "posx": 3334.50390625,
        "posy": 4593.84521484375,
        "gamemap": "203",
        "rotation": 2
    },
    {
        "id": "932910599",
        "mapid": "1",
        "bftitle": "Klin",
        "sector": "0",
        "posx": 14282.6201171875,
        "posy": 2187.760009765625,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "933745237",
        "mapid": "1",
        "bftitle": "Belegiš",
        "sector": "0",
        "posx": 9474.953125,
        "posy": 7493.0869140625,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "933766812",
        "mapid": "1",
        "bftitle": "Makó",
        "sector": "0",
        "posx": 9519.2783203125,
        "posy": 6987.4580078125,
        "gamemap": "204",
        "rotation": 3
    },
    {
        "id": "933787372",
        "mapid": "1",
        "bftitle": "West-Terschelling",
        "sector": "0",
        "posx": 5038.51513671875,
        "posy": 3716.83203125,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "933960813",
        "mapid": "1",
        "bftitle": "Formazza",
        "sector": "0",
        "posx": 5984.84423828125,
        "posy": 6919.001953125,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "934246309",
        "mapid": "1",
        "bftitle": "Molėtai",
        "sector": "0",
        "posx": 10965.3798828125,
        "posy": 2765.279052734375,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "934667137",
        "mapid": "1",
        "bftitle": "Ferwert",
        "sector": "0",
        "posx": 5240.0859375,
        "posy": 3724.22998046875,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "934871626",
        "mapid": "1",
        "bftitle": "Zhmerynka",
        "sector": "0",
        "posx": 11755.4599609375,
        "posy": 5751.64990234375,
        "gamemap": "70439"
    },
    {
        "id": "935941368",
        "mapid": "1",
        "bftitle": "Bad Feilnbach",
        "sector": "0",
        "posx": 7035.421875,
        "posy": 6313.65185546875,
        "gamemap": "203"
    },
    {
        "id": "935946266",
        "mapid": "1",
        "bftitle": "När",
        "sector": "0",
        "posx": 8954.4248046875,
        "posy": 1682.5679931640625,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "936341857",
        "mapid": "1",
        "bftitle": "Udine",
        "sector": "0",
        "posx": 7395.2138671875,
        "posy": 7050.24609375,
        "gamemap": "201"
    },
    {
        "id": "936555123",
        "mapid": "1",
        "bftitle": "Vinnytsya",
        "sector": "0",
        "posx": 11863.6103515625,
        "posy": 5663.33984375,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "936677628",
        "mapid": "1",
        "bftitle": "Ivankiv",
        "sector": "0",
        "posx": 12277.8896484375,
        "posy": 4878.39208984375,
        "gamemap": "70439"
    },
    {
        "id": "936885679",
        "mapid": "1",
        "bftitle": "Yeniköy",
        "sector": "0",
        "posx": 12119.419921875,
        "posy": 9297.3642578125,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "937063441",
        "mapid": "1",
        "bftitle": "Santa Maddalena",
        "sector": "0",
        "posx": 7102.783203125,
        "posy": 6721.97900390625,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "937321215",
        "mapid": "1",
        "bftitle": "Bobry",
        "sector": "0",
        "posx": 12478.080078125,
        "posy": 4180.212890625,
        "gamemap": "203"
    },
    {
        "id": "937324704",
        "mapid": "1",
        "bftitle": "Lugo",
        "sector": "0",
        "posx": 7005.64990234375,
        "posy": 7740.68798828125,
        "gamemap": "70439"
    },
    {
        "id": "937338768",
        "mapid": "1",
        "bftitle": "Stahnsdorf",
        "sector": "0",
        "posx": 7389.208984375,
        "posy": 4190.791015625,
        "gamemap": "203",
        "rotation": 3
    },
    {
        "id": "937800128",
        "mapid": "1",
        "bftitle": "Montegranaro",
        "sector": "0",
        "posx": 7510.505859375,
        "posy": 8228.3828125,
        "gamemap": "70439"
    },
    {
        "id": "937843562",
        "mapid": "1",
        "bftitle": "Parete",
        "sector": "0",
        "posx": 7666.2919921875,
        "posy": 9132.4453125,
        "gamemap": "205"
    },
    {
        "id": "937940717",
        "mapid": "1",
        "bftitle": "Horace Village",
        "sector": "0",
        "posx": 15938.5498046875,
        "posy": 16063.1796875,
        "gamemap": "70439"
    },
    {
        "id": "937940718",
        "mapid": "1",
        "bftitle": "Ask Village",
        "sector": "0",
        "posx": 15857.740234375,
        "posy": 16063.1796875,
        "gamemap": "15"
    },
    {
        "id": "938332743",
        "mapid": "1",
        "bftitle": "Werlte",
        "sector": "0",
        "posx": 5684.73095703125,
        "posy": 3962.679931640625,
        "gamemap": "203",
        "rotation": 3
    },
    {
        "id": "938333112",
        "mapid": "1",
        "bftitle": "Sergeyevka",
        "sector": "0",
        "posx": 12419.33984375,
        "posy": 7068.15185546875,
        "gamemap": "70439"
    },
    {
        "id": "939735350",
        "mapid": "1",
        "bftitle": "Ingolstadt",
        "sector": "0",
        "posx": 6863.64697265625,
        "posy": 5873.78515625,
        "gamemap": "201"
    },
    {
        "id": "939745176",
        "mapid": "1",
        "bftitle": "Clenze",
        "sector": "0",
        "posx": 6726.98193359375,
        "posy": 3921.172119140625,
        "gamemap": "203"
    },
    {
        "id": "939894523",
        "mapid": "1",
        "bftitle": "Zhovti Vody",
        "sector": "0",
        "posx": 13334.9404296875,
        "posy": 6060.1162109375,
        "gamemap": "70439"
    },
    {
        "id": "940503992",
        "mapid": "1",
        "bftitle": "Asti",
        "sector": "0",
        "posx": 5920.880859375,
        "posy": 7541.94482421875,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "940552263",
        "mapid": "1",
        "bftitle": "Sheffield",
        "sector": "0",
        "posx": 3166.965087890625,
        "posy": 3729.81103515625,
        "gamemap": "70439"
    },
    {
        "id": "940711603",
        "mapid": "1",
        "bftitle": "Tulcea",
        "sector": "0",
        "posx": 11957.1298828125,
        "posy": 7431.22509765625,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "941060672",
        "mapid": "1",
        "bftitle": "Ropaži",
        "sector": "0",
        "posx": 10735.83984375,
        "posy": 1843.7509765625,
        "gamemap": "205",
        "rotation": 2
    },
    {
        "id": "941152220",
        "mapid": "1",
        "bftitle": "Droitwich",
        "sector": "0",
        "posx": 2884.799072265625,
        "posy": 4247.14208984375,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "941196460",
        "mapid": "1",
        "bftitle": "Grandcamp-Maisy",
        "sector": "0",
        "posx": 3201.053955078125,
        "posy": 5622.85107421875,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "941331546",
        "mapid": "1",
        "bftitle": "Domvraína",
        "sector": "0",
        "posx": 10251.740234375,
        "posy": 10169.48046875,
        "gamemap": "70439"
    },
    {
        "id": "941352862",
        "mapid": "1",
        "bftitle": "Navozovka",
        "sector": "0",
        "posx": 13032.33984375,
        "posy": 4039.51904296875,
        "gamemap": "201"
    },
    {
        "id": "941630174",
        "mapid": "1",
        "bftitle": "Mariestad",
        "sector": "0",
        "posx": 7567.13818359375,
        "posy": 880.7899780273438,
        "gamemap": "70439"
    },
    {
        "id": "941682380",
        "mapid": "1",
        "bftitle": "Factory 'Emmanuel'",
        "sector": "0",
        "posx": 16015,
        "posy": 16019.5498046875,
        "gamemap": "203"
    },
    {
        "id": "941825543",
        "mapid": "1",
        "bftitle": "Grimmen",
        "sector": "0",
        "posx": 7337.57421875,
        "posy": 3337.7109375,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "942708186",
        "mapid": "1",
        "bftitle": "Foulayronnes",
        "sector": "0",
        "posx": 3704.14111328125,
        "posy": 7815.9970703125,
        "gamemap": "70439"
    },
    {
        "id": "942891097",
        "mapid": "1",
        "bftitle": "Stenstorp",
        "sector": "0",
        "posx": 7931.35400390625,
        "posy": 1010.6279907226562,
        "gamemap": "204"
    },
    {
        "id": "943194415",
        "mapid": "1",
        "bftitle": "Albu",
        "sector": "0",
        "posx": 11038.740234375,
        "posy": 628.6182250976562,
        "gamemap": "70439"
    },
    {
        "id": "943286588",
        "mapid": "1",
        "bftitle": "Hässleholm",
        "sector": "0",
        "posx": 7550.34814453125,
        "posy": 2280.35400390625,
        "gamemap": "205",
        "rotation": 1
    },
    {
        "id": "943591592",
        "mapid": "1",
        "bftitle": "Genoa",
        "sector": "0",
        "posx": 6128.3232421875,
        "posy": 7739.18701171875,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "943673946",
        "mapid": "1",
        "bftitle": "Avtovo",
        "sector": "0",
        "posx": 12377.8203125,
        "posy": 223.05250549316406,
        "gamemap": "70439"
    },
    {
        "id": "943713756",
        "mapid": "1",
        "bftitle": "Blagoevgrad",
        "sector": "0",
        "posx": 10286.2998046875,
        "posy": 8715.587890625,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "944034887",
        "mapid": "1",
        "bftitle": "Haradzishcha",
        "sector": "0",
        "posx": 12491.5302734375,
        "posy": 3298.822998046875,
        "gamemap": "70439"
    },
    {
        "id": "944236734",
        "mapid": "1",
        "bftitle": "Foissiat",
        "sector": "0",
        "posx": 5032.18115234375,
        "posy": 6921.912109375,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "944451303",
        "mapid": "1",
        "bftitle": "Saint-Vallier",
        "sector": "0",
        "posx": 4796.31201171875,
        "posy": 6805.68701171875,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "944646552",
        "mapid": "1",
        "bftitle": "Stanišić",
        "sector": "0",
        "posx": 9133.4482421875,
        "posy": 7105.64306640625,
        "gamemap": "70439"
    },
    {
        "id": "945028123",
        "mapid": "1",
        "bftitle": "Castres",
        "sector": "0",
        "posx": 4174.56494140625,
        "posy": 8078.4150390625,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "945347598",
        "mapid": "1",
        "bftitle": "Kumanovo",
        "sector": "0",
        "posx": 9880.15234375,
        "posy": 8669.630859375,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "945834406",
        "mapid": "1",
        "bftitle": "Malaya Vishera",
        "sector": "0",
        "posx": 12960.26953125,
        "posy": 803.52587890625,
        "gamemap": "201"
    },
    {
        "id": "946193683",
        "mapid": "1",
        "bftitle": "Kilingi-Nõmme",
        "sector": "0",
        "posx": 10832.740234375,
        "posy": 1196.2440185546875,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "946769464",
        "mapid": "1",
        "bftitle": "Offenburg",
        "sector": "0",
        "posx": 5843.9169921875,
        "posy": 6003.8759765625,
        "gamemap": "201"
    },
    {
        "id": "947176852",
        "mapid": "1",
        "bftitle": "Rakov",
        "sector": "0",
        "posx": 11445.9697265625,
        "posy": 3410.47900390625,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "947441152",
        "mapid": "1",
        "bftitle": "Turnu Măgurele",
        "sector": "0",
        "posx": 10804.16015625,
        "posy": 8017.19091796875,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "948040372",
        "mapid": "1",
        "bftitle": "Rakhovichi",
        "sector": "0",
        "posx": 11536.8701171875,
        "posy": 4117.35986328125,
        "gamemap": "203",
        "rotation": 1
    },
    {
        "id": "948432669",
        "mapid": "1",
        "bftitle": "Popovi",
        "sector": "0",
        "posx": 9168.5029296875,
        "posy": 7598.62109375,
        "gamemap": "203"
    },
    {
        "id": "948655605",
        "mapid": "1",
        "bftitle": "Logatec",
        "sector": "0",
        "posx": 7685.02490234375,
        "posy": 7116.044921875,
        "gamemap": "203",
        "rotation": 1
    },
    {
        "id": "949015349",
        "mapid": "1",
        "bftitle": "P'yatykhatky",
        "sector": "0",
        "posx": 13396.5595703125,
        "posy": 6030.77099609375,
        "gamemap": "203",
        "rotation": 2
    },
    {
        "id": "949946682",
        "mapid": "1",
        "bftitle": "Leuchars",
        "sector": "0",
        "posx": 2670.072998046875,
        "posy": 2161.966064453125,
        "gamemap": "203",
        "rotation": 2
    },
    {
        "id": "950019217",
        "mapid": "1",
        "bftitle": "Bolhrad",
        "sector": "0",
        "posx": 11902.8701171875,
        "posy": 7214.205078125,
        "gamemap": "70439"
    },
    {
        "id": "950229477",
        "mapid": "1",
        "bftitle": "Årstad",
        "sector": "0",
        "posx": 7066.76806640625,
        "posy": 377.8800048828125,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "950366337",
        "mapid": "1",
        "bftitle": "Janneby",
        "sector": "0",
        "posx": 6241.123046875,
        "posy": 3073.580078125,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "950451109",
        "mapid": "1",
        "bftitle": "Gothenburg",
        "sector": "0",
        "posx": 7022.8359375,
        "posy": 1442.6070556640625,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "950474999",
        "mapid": "1",
        "bftitle": "Paldiski",
        "sector": "0",
        "posx": 10565.669921875,
        "posy": 509.6025085449219,
        "gamemap": "70439"
    },
    {
        "id": "950619745",
        "mapid": "1",
        "bftitle": "Järva-Jaani",
        "sector": "0",
        "posx": 11103.0703125,
        "posy": 692.9586791992188,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "950716228",
        "mapid": "1",
        "bftitle": "Okhtyrka",
        "sector": "0",
        "posx": 13744.8603515625,
        "posy": 5170.7587890625,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "951223185",
        "mapid": "1",
        "bftitle": "Uddevalla",
        "sector": "0",
        "posx": 7015.68505859375,
        "posy": 1085.4139404296875,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "951316803",
        "mapid": "1",
        "bftitle": "Konjic",
        "sector": "0",
        "posx": 8779.85546875,
        "posy": 8057.509765625,
        "gamemap": "201"
    },
    {
        "id": "951346873",
        "mapid": "1",
        "bftitle": "Ellamaa",
        "sector": "0",
        "posx": 10602.6298828125,
        "posy": 687.0601806640625,
        "gamemap": "70439"
    },
    {
        "id": "951721678",
        "mapid": "1",
        "bftitle": "Kufstein",
        "sector": "0",
        "posx": 7081.423828125,
        "posy": 6396.9482421875,
        "gamemap": "201"
    },
    {
        "id": "951893820",
        "mapid": "1",
        "bftitle": "Grums",
        "sector": "0",
        "posx": 7358.25,
        "posy": 512.6469116210938,
        "gamemap": "70439"
    },
    {
        "id": "951934521",
        "mapid": "1",
        "bftitle": "Saint-Germain-les-Belles",
        "sector": "0",
        "posx": 3953.222900390625,
        "posy": 7243.3671875,
        "gamemap": "201"
    },
    {
        "id": "951952571",
        "mapid": "1",
        "bftitle": "Lugano",
        "sector": "0",
        "posx": 6141.47021484375,
        "posy": 7075.43115234375,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "952298493",
        "mapid": "1",
        "bftitle": "Le Mans",
        "sector": "0",
        "posx": 3534.636962890625,
        "posy": 6159.5322265625,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "952349817",
        "mapid": "1",
        "bftitle": "Charlottenberg",
        "sector": "0",
        "posx": 7121.6748046875,
        "posy": 201.64700317382812,
        "gamemap": "201"
    },
    {
        "id": "952986572",
        "mapid": "1",
        "bftitle": "Ulrum",
        "sector": "0",
        "posx": 5392.23291015625,
        "posy": 3716.804931640625,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "954044835",
        "mapid": "1",
        "bftitle": "Fanipol",
        "sector": "0",
        "posx": 11527.2197265625,
        "posy": 3519.305908203125,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "954445689",
        "mapid": "1",
        "bftitle": "Baja",
        "sector": "0",
        "posx": 9071.6865234375,
        "posy": 7005.24609375,
        "gamemap": "70439"
    },
    {
        "id": "954459749",
        "mapid": "1",
        "bftitle": "Montaud",
        "sector": "0",
        "posx": 5139.39306640625,
        "posy": 7394.00390625,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "954811267",
        "mapid": "1",
        "bftitle": "Oloron-Sainte-Marie",
        "sector": "0",
        "posx": 3336.01611328125,
        "posy": 8243.1962890625,
        "gamemap": "201"
    },
    {
        "id": "954846603",
        "mapid": "1",
        "bftitle": "Rudkøbing",
        "sector": "0",
        "posx": 6672.43212890625,
        "posy": 2973.925048828125,
        "gamemap": "70439"
    },
    {
        "id": "955051891",
        "mapid": "1",
        "bftitle": "Kaposvár",
        "sector": "0",
        "posx": 8732.7158203125,
        "posy": 6923.3740234375,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "955513814",
        "mapid": "1",
        "bftitle": "Saint-Malo",
        "sector": "0",
        "posx": 2944.197998046875,
        "posy": 5948.23388671875,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "955560634",
        "mapid": "1",
        "bftitle": "Dransfeld Flugplatz",
        "sector": "0",
        "posx": 6406.31298828125,
        "posy": 4565.6728515625,
        "gamemap": "204",
        "rotation": 1
    },
    {
        "id": "955784947",
        "mapid": "1",
        "bftitle": "Lemvig",
        "sector": "0",
        "posx": 5951.18310546875,
        "posy": 2076.011962890625,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "955873625",
        "mapid": "1",
        "bftitle": "Pressbaum",
        "sector": "0",
        "posx": 8229.51171875,
        "posy": 6132.833984375,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "955939056",
        "mapid": "1",
        "bftitle": "Lyntupy",
        "sector": "0",
        "posx": 11227.330078125,
        "posy": 2859.14697265625,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "956059242",
        "mapid": "1",
        "bftitle": "Valebø",
        "sector": "0",
        "posx": 6250.451171875,
        "posy": 535.0618896484375,
        "gamemap": "201"
    },
    {
        "id": "956097145",
        "mapid": "1",
        "bftitle": "Simrishamn",
        "sector": "0",
        "posx": 7721.52880859375,
        "posy": 2597.279052734375,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "956541067",
        "mapid": "1",
        "bftitle": "Romans-sur-Isère",
        "sector": "0",
        "posx": 4997.14208984375,
        "posy": 7481.533203125,
        "gamemap": "201"
    },
    {
        "id": "956813531",
        "mapid": "1",
        "bftitle": "Vushtrri",
        "sector": "0",
        "posx": 9661.201171875,
        "posy": 8393.115234375,
        "gamemap": "201"
    },
    {
        "id": "956884354",
        "mapid": "1",
        "bftitle": "Valjevo",
        "sector": "0",
        "posx": 9347.7626953125,
        "posy": 7801.63623046875,
        "gamemap": "201"
    },
    {
        "id": "956981741",
        "mapid": "1",
        "bftitle": "Bovolone",
        "sector": "0",
        "posx": 6773.98876953125,
        "posy": 7391.51708984375,
        "gamemap": "70439"
    },
    {
        "id": "957494135",
        "mapid": "1",
        "bftitle": "Hulst",
        "sector": "0",
        "posx": 4701.97509765625,
        "posy": 4717.88720703125,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "958355423",
        "mapid": "1",
        "bftitle": "Kaluga",
        "sector": "0",
        "posx": 14148.3896484375,
        "posy": 3126.571044921875,
        "gamemap": "70439"
    },
    {
        "id": "958964838",
        "mapid": "1",
        "bftitle": "Dmitrovsk-Orlovskiy",
        "sector": "0",
        "posx": 13817.4404296875,
        "posy": 4131.8662109375,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "959133527",
        "mapid": "1",
        "bftitle": "Mykolayiv",
        "sector": "0",
        "posx": 12894.3798828125,
        "posy": 6665.5908203125,
        "gamemap": "70439"
    },
    {
        "id": "959235821",
        "mapid": "1",
        "bftitle": "Ayr",
        "sector": "0",
        "posx": 2186.739990234375,
        "posy": 2650.923095703125,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "959371249",
        "mapid": "1",
        "bftitle": "Pátrai",
        "sector": "0",
        "posx": 9893.8603515625,
        "posy": 10159.91015625,
        "gamemap": "70439"
    },
    {
        "id": "959402015",
        "mapid": "1",
        "bftitle": "Protvino",
        "sector": "0",
        "posx": 14424.0498046875,
        "posy": 2953.44189453125,
        "gamemap": "70439"
    },
    {
        "id": "959556251",
        "mapid": "1",
        "bftitle": "Leningrad",
        "sector": "0",
        "posx": 12408.75,
        "posy": 193.43190002441406,
        "gamemap": "70439"
    },
    {
        "id": "959649097",
        "mapid": "1",
        "bftitle": "Heidekrug",
        "sector": "0",
        "posx": 7607.92578125,
        "posy": 4144.52001953125,
        "gamemap": "203"
    },
    {
        "id": "959705147",
        "mapid": "1",
        "bftitle": "Borisoglebskiy",
        "sector": "0",
        "posx": 14991.25,
        "posy": 1688.946044921875,
        "gamemap": "201"
    },
    {
        "id": "959872690",
        "mapid": "1",
        "bftitle": "Le Lavandou",
        "sector": "0",
        "posx": 5381.0830078125,
        "posy": 8266.4345703125,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "960184756",
        "mapid": "1",
        "bftitle": "Königsberg",
        "sector": "0",
        "posx": 9527.373046875,
        "posy": 3036.23291015625,
        "gamemap": "70439"
    },
    {
        "id": "960339057",
        "mapid": "1",
        "bftitle": "Rasony",
        "sector": "0",
        "posx": 11961.08984375,
        "posy": 2414.1640625,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "960637073",
        "mapid": "1",
        "bftitle": "Quistinic",
        "sector": "0",
        "posx": 2596.361083984375,
        "posy": 6256.1318359375,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "961969015",
        "mapid": "1",
        "bftitle": "La Côte-Saint-André",
        "sector": "0",
        "posx": 5057.044921875,
        "posy": 7336.02978515625,
        "gamemap": "201"
    },
    {
        "id": "962536686",
        "mapid": "1",
        "bftitle": "Khvoyniki",
        "sector": "0",
        "posx": 11536.8701171875,
        "posy": 3769.221923828125,
        "gamemap": "201"
    },
    {
        "id": "962893825",
        "mapid": "1",
        "bftitle": "Marigliano",
        "sector": "0",
        "posx": 7751.94384765625,
        "posy": 9146.8720703125,
        "gamemap": "203"
    },
    {
        "id": "963553194",
        "mapid": "1",
        "bftitle": "Crema",
        "sector": "0",
        "posx": 6353.02685546875,
        "posy": 7349.02783203125,
        "gamemap": "201"
    },
    {
        "id": "963986300",
        "mapid": "1",
        "bftitle": "Balatonszárszó",
        "sector": "0",
        "posx": 8739.8271484375,
        "posy": 6724.54296875,
        "gamemap": "201"
    },
    {
        "id": "964066131",
        "mapid": "1",
        "bftitle": "Ieper Vliegveld",
        "sector": "0",
        "posx": 4360.48583984375,
        "posy": 4907.06787109375,
        "gamemap": "205"
    },
    {
        "id": "964852487",
        "mapid": "1",
        "bftitle": "Motala",
        "sector": "0",
        "posx": 7922.36181640625,
        "posy": 968.6104736328125,
        "gamemap": "203",
        "rotation": 2
    },
    {
        "id": "965008079",
        "mapid": "1",
        "bftitle": "Donetsk",
        "sector": "0",
        "posx": 14595.9501953125,
        "posy": 6203.7119140625,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "965066753",
        "mapid": "1",
        "bftitle": "Bulėnai",
        "sector": "0",
        "posx": 10278.6298828125,
        "posy": 2441.301025390625,
        "gamemap": "203"
    },
    {
        "id": "966008451",
        "mapid": "1",
        "bftitle": "Sansepolcro",
        "sector": "0",
        "posx": 7073.19091796875,
        "posy": 8089.587890625,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "967661373",
        "mapid": "1",
        "bftitle": "Zabrodzie",
        "sector": "0",
        "posx": 9793.3740234375,
        "posy": 4129.27392578125,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "967718990",
        "mapid": "1",
        "bftitle": "Boryspil",
        "sector": "0",
        "posx": 12588.830078125,
        "posy": 5151.18212890625,
        "gamemap": "204",
        "rotation": 2
    },
    {
        "id": "967909833",
        "mapid": "1",
        "bftitle": "Pereyaslovskaya",
        "sector": "0",
        "posx": 14954.01953125,
        "posy": 7147.10009765625,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "968238524",
        "mapid": "1",
        "bftitle": "Chamagne Aérodrome",
        "sector": "0",
        "posx": 5400.94921875,
        "posy": 6025.77978515625,
        "gamemap": "204",
        "rotation": 1
    },
    {
        "id": "968971653",
        "mapid": "1",
        "bftitle": "Žatec",
        "sector": "0",
        "posx": 7485.68017578125,
        "posy": 5162.98681640625,
        "gamemap": "201"
    },
    {
        "id": "968998470",
        "mapid": "1",
        "bftitle": "Elektrogorsk",
        "sector": "0",
        "posx": 14884.4296875,
        "posy": 2425.47900390625,
        "gamemap": "203"
    },
    {
        "id": "969073558",
        "mapid": "1",
        "bftitle": "Pral’niki",
        "sector": "0",
        "posx": 11385.0595703125,
        "posy": 3423.572998046875,
        "gamemap": "203",
        "rotation": 3
    },
    {
        "id": "969838675",
        "mapid": "1",
        "bftitle": "Bridlington",
        "sector": "0",
        "posx": 3450.861083984375,
        "posy": 3357.10107421875,
        "gamemap": "70439"
    },
    {
        "id": "969899811",
        "mapid": "1",
        "bftitle": "Imeni Morozova",
        "sector": "0",
        "posx": 12613.0400390625,
        "posy": 147.7375030517578,
        "gamemap": "70439"
    },
    {
        "id": "970006222",
        "mapid": "1",
        "bftitle": "Bihać",
        "sector": "0",
        "posx": 8167.22216796875,
        "posy": 7577.2080078125,
        "gamemap": "203"
    },
    {
        "id": "970256732",
        "mapid": "1",
        "bftitle": "Älmhult",
        "sector": "0",
        "posx": 7660.2578125,
        "posy": 2069.60498046875,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "970385437",
        "mapid": "1",
        "bftitle": "Astravyets",
        "sector": "0",
        "posx": 11123.2900390625,
        "posy": 3083.548095703125,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "970537702",
        "mapid": "1",
        "bftitle": "Wackerow",
        "sector": "0",
        "posx": 7320.31494140625,
        "posy": 3555.7958984375,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "970667968",
        "mapid": "1",
        "bftitle": "Frunze",
        "sector": "0",
        "posx": 12927.8701171875,
        "posy": 6167.9150390625,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "970913133",
        "mapid": "1",
        "bftitle": "Exmouth",
        "sector": "0",
        "posx": 2522.39990234375,
        "posy": 5064.583984375,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "970955299",
        "mapid": "1",
        "bftitle": "Monistrol-sur-Loire",
        "sector": "0",
        "posx": 4737.84423828125,
        "posy": 7378.125,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "970988348",
        "mapid": "1",
        "bftitle": "Keighley",
        "sector": "0",
        "posx": 2956.134033203125,
        "posy": 3460.344970703125,
        "gamemap": "201"
    },
    {
        "id": "971479852",
        "mapid": "1",
        "bftitle": "Novi Ligure",
        "sector": "0",
        "posx": 6091.57177734375,
        "posy": 7598.98486328125,
        "gamemap": "203",
        "rotation": 2
    },
    {
        "id": "971870097",
        "mapid": "1",
        "bftitle": "Roquefort",
        "sector": "0",
        "posx": 3420.277099609375,
        "posy": 7900.44287109375,
        "gamemap": "70439"
    },
    {
        "id": "972364439",
        "mapid": "1",
        "bftitle": "Mierlauki",
        "sector": "0",
        "posx": 10476.830078125,
        "posy": 1928.72998046875,
        "gamemap": "203"
    },
    {
        "id": "972609111",
        "mapid": "1",
        "bftitle": "Hereford",
        "sector": "0",
        "posx": 2671.47509765625,
        "posy": 4330.85009765625,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "972639422",
        "mapid": "1",
        "bftitle": "Borova",
        "sector": "0",
        "posx": 12339.4599609375,
        "posy": 5232.662109375,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "972812330",
        "mapid": "1",
        "bftitle": "Elie",
        "sector": "0",
        "posx": 2689.31494140625,
        "posy": 2240.43603515625,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "972938714",
        "mapid": "1",
        "bftitle": "Neumarkt in der Oberpfalz",
        "sector": "0",
        "posx": 6875.09521484375,
        "posy": 5641.85400390625,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "973490778",
        "mapid": "1",
        "bftitle": "Silistra",
        "sector": "0",
        "posx": 11507.669921875,
        "posy": 7866.884765625,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "973696154",
        "mapid": "1",
        "bftitle": "Middlesbrough",
        "sector": "0",
        "posx": 3153.06103515625,
        "posy": 3102.68408203125,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "974030601",
        "mapid": "1",
        "bftitle": "Neuendorf",
        "sector": "0",
        "posx": 5410.5908203125,
        "posy": 5183.248046875,
        "gamemap": "201"
    },
    {
        "id": "974037281",
        "mapid": "1",
        "bftitle": "Nottingham",
        "sector": "0",
        "posx": 3214.408935546875,
        "posy": 3921.669921875,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "974363496",
        "mapid": "1",
        "bftitle": "Laxå",
        "sector": "0",
        "posx": 7800.28515625,
        "posy": 722.9550170898438,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "974557779",
        "mapid": "1",
        "bftitle": "Nowy Dwór Mazowiecki",
        "sector": "0",
        "posx": 9560.03515625,
        "posy": 4140.3779296875,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "974666466",
        "mapid": "1",
        "bftitle": "Bury",
        "sector": "0",
        "posx": 2838.117919921875,
        "posy": 3575.743896484375,
        "gamemap": "203"
    },
    {
        "id": "974885419",
        "mapid": "1",
        "bftitle": "Didcot",
        "sector": "0",
        "posx": 3150.91796875,
        "posy": 4561.92822265625,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "975240484",
        "mapid": "1",
        "bftitle": "Shchepki",
        "sector": "0",
        "posx": 11429.0595703125,
        "posy": 3454.14404296875,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "975652510",
        "mapid": "1",
        "bftitle": "Rzhev",
        "sector": "0",
        "posx": 13577.599609375,
        "posy": 2225.490966796875,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "975893108",
        "mapid": "1",
        "bftitle": "Avoch",
        "sector": "0",
        "posx": 2295.364990234375,
        "posy": 1508.012939453125,
        "gamemap": "203"
    },
    {
        "id": "976340362",
        "mapid": "1",
        "bftitle": "Évian-les-Bains",
        "sector": "0",
        "posx": 5446.13818359375,
        "posy": 6908.6328125,
        "gamemap": "201"
    },
    {
        "id": "977256752",
        "mapid": "1",
        "bftitle": "Mezhova",
        "sector": "0",
        "posx": 14283.01953125,
        "posy": 6101.88916015625,
        "gamemap": "201"
    },
    {
        "id": "977355815",
        "mapid": "1",
        "bftitle": "Inčukalns",
        "sector": "0",
        "posx": 10755.6298828125,
        "posy": 1772.0689697265625,
        "gamemap": "203",
        "rotation": 3
    },
    {
        "id": "977683321",
        "mapid": "1",
        "bftitle": "Gornja Radgona",
        "sector": "0",
        "posx": 8202.8046875,
        "posy": 6791.80908203125,
        "gamemap": "203",
        "rotation": 3
    },
    {
        "id": "977689556",
        "mapid": "1",
        "bftitle": "Kolomyia",
        "sector": "0",
        "posx": 10853.9404296875,
        "posy": 5978.31005859375,
        "gamemap": "201"
    },
    {
        "id": "977827764",
        "mapid": "1",
        "bftitle": "Saint-Pierre-Montlimart",
        "sector": "0",
        "posx": 3213.8701171875,
        "posy": 6533.77587890625,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "978145198",
        "mapid": "1",
        "bftitle": "Parchim",
        "sector": "0",
        "posx": 6988.23486328125,
        "posy": 3680.277099609375,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "978790464",
        "mapid": "1",
        "bftitle": "Trélon",
        "sector": "0",
        "posx": 4717.43994140625,
        "posy": 5287.080078125,
        "gamemap": "70439"
    },
    {
        "id": "978846446",
        "mapid": "1",
        "bftitle": "Veselynove",
        "sector": "0",
        "posx": 12670.8701171875,
        "posy": 6495.93896484375,
        "gamemap": "70439"
    },
    {
        "id": "978934974",
        "mapid": "1",
        "bftitle": "Moshenskoye",
        "sector": "0",
        "posx": 13654.66015625,
        "posy": 993.8881225585938,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "979575199",
        "mapid": "1",
        "bftitle": "Königs Wusterhausen",
        "sector": "0",
        "posx": 7531.64306640625,
        "posy": 4208.81298828125,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "979604129",
        "mapid": "1",
        "bftitle": "Korsun'-Shevchenkivs'kyy",
        "sector": "0",
        "posx": 12677.830078125,
        "posy": 5579.02001953125,
        "gamemap": "70439"
    },
    {
        "id": "979722883",
        "mapid": "1",
        "bftitle": "Rietavas",
        "sector": "0",
        "posx": 9943.6630859375,
        "posy": 2512.070068359375,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "981276000",
        "mapid": "1",
        "bftitle": "Tyristrand",
        "sector": "0",
        "posx": 6474.751953125,
        "posy": 82.84422302246094,
        "gamemap": "201"
    },
    {
        "id": "981588627",
        "mapid": "1",
        "bftitle": "Plouescat",
        "sector": "0",
        "posx": 2320.8330078125,
        "posy": 5983.28515625,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "981940159",
        "mapid": "1",
        "bftitle": "Dollbergen",
        "sector": "0",
        "posx": 6499.36181640625,
        "posy": 4179.48095703125,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "982865654",
        "mapid": "1",
        "bftitle": "Sveinall",
        "sector": "0",
        "posx": 5713.4912109375,
        "posy": 1131.0260009765625,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "983344329",
        "mapid": "1",
        "bftitle": "Feuquières-en-Vimeu",
        "sector": "0",
        "posx": 3985.39306640625,
        "posy": 5286.26708984375,
        "gamemap": "203",
        "rotation": 3
    },
    {
        "id": "983403511",
        "mapid": "1",
        "bftitle": "Telyaki",
        "sector": "0",
        "posx": 11375.8896484375,
        "posy": 2783.718017578125,
        "gamemap": "204"
    },
    {
        "id": "983474701",
        "mapid": "1",
        "bftitle": "Adalar",
        "sector": "0",
        "posx": 12078.6796875,
        "posy": 9172.4755859375,
        "gamemap": "204",
        "rotation": 3
    },
    {
        "id": "983658985",
        "mapid": "1",
        "bftitle": "Slawharad",
        "sector": "0",
        "posx": 12602.419921875,
        "posy": 3672.055908203125,
        "gamemap": "70439"
    },
    {
        "id": "984005329",
        "mapid": "1",
        "bftitle": "Pierrelatte",
        "sector": "0",
        "posx": 4893.31005859375,
        "posy": 7759.37109375,
        "gamemap": "203",
        "rotation": 2
    },
    {
        "id": "984313681",
        "mapid": "1",
        "bftitle": "Máriamajor",
        "sector": "0",
        "posx": 9797.75,
        "posy": 6058.9208984375,
        "gamemap": "201"
    },
    {
        "id": "984377842",
        "mapid": "1",
        "bftitle": "Charlottenlund",
        "sector": "0",
        "posx": 7190.38720703125,
        "posy": 2461.095947265625,
        "gamemap": "70439"
    },
    {
        "id": "984534176",
        "mapid": "1",
        "bftitle": "Anzio",
        "sector": "0",
        "posx": 7213.9658203125,
        "posy": 8925.9931640625,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "984549865",
        "mapid": "1",
        "bftitle": "Orgelet",
        "sector": "0",
        "posx": 5159.623046875,
        "posy": 6857.27294921875,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "984701705",
        "mapid": "1",
        "bftitle": "Newcastle upon Tyne",
        "sector": "0",
        "posx": 3020.570068359375,
        "posy": 2917.8349609375,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "985041680",
        "mapid": "1",
        "bftitle": "Bielany",
        "sector": "0",
        "posx": 9681.0263671875,
        "posy": 4206.24609375,
        "gamemap": "70439"
    },
    {
        "id": "985171577",
        "mapid": "1",
        "bftitle": "Novoukrayinka",
        "sector": "0",
        "posx": 12756.9404296875,
        "posy": 6069.4228515625,
        "gamemap": "203",
        "rotation": 1
    },
    {
        "id": "985185833",
        "mapid": "1",
        "bftitle": "Figeholm",
        "sector": "0",
        "posx": 8366.3056640625,
        "posy": 1629.875,
        "gamemap": "70439"
    },
    {
        "id": "985234736",
        "mapid": "1",
        "bftitle": "Hnyezna",
        "sector": "0",
        "posx": 10650.3896484375,
        "posy": 3829.3740234375,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "985491710",
        "mapid": "1",
        "bftitle": "Vittorio Veneto",
        "sector": "0",
        "posx": 7122.14697265625,
        "posy": 7089.0751953125,
        "gamemap": "203",
        "rotation": 2
    },
    {
        "id": "985606041",
        "mapid": "1",
        "bftitle": "Épinal",
        "sector": "0",
        "posx": 5405.7060546875,
        "posy": 6132.833984375,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "985767112",
        "mapid": "1",
        "bftitle": "Saint-Renan",
        "sector": "0",
        "posx": 2131.384033203125,
        "posy": 6015.89306640625,
        "gamemap": "203"
    },
    {
        "id": "985791218",
        "mapid": "1",
        "bftitle": "Gullringen",
        "sector": "0",
        "posx": 8117.14599609375,
        "posy": 1391.241943359375,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "986205078",
        "mapid": "1",
        "bftitle": "Włocławek",
        "sector": "0",
        "posx": 9104.345703125,
        "posy": 4062.319091796875,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "986432942",
        "mapid": "1",
        "bftitle": "Lübben",
        "sector": "0",
        "posx": 7586.07177734375,
        "posy": 4405.02880859375,
        "gamemap": "70439"
    },
    {
        "id": "986461780",
        "mapid": "1",
        "bftitle": "Rye",
        "sector": "0",
        "posx": 3778.77587890625,
        "posy": 4875.14208984375,
        "gamemap": "205",
        "rotation": 1
    },
    {
        "id": "986917020",
        "mapid": "1",
        "bftitle": "Pleshey",
        "sector": "0",
        "posx": 3636.117919921875,
        "posy": 4468.9638671875,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "986993481",
        "mapid": "1",
        "bftitle": "Kruševac",
        "sector": "0",
        "posx": 9768.6005859375,
        "posy": 8086.56591796875,
        "gamemap": "70439"
    },
    {
        "id": "987113062",
        "mapid": "1",
        "bftitle": "Krasnoarmiys'k",
        "sector": "0",
        "posx": 14412.330078125,
        "posy": 6089.1171875,
        "gamemap": "70439"
    },
    {
        "id": "987119377",
        "mapid": "1",
        "bftitle": "Schoonhoven",
        "sector": "0",
        "posx": 4946.65380859375,
        "posy": 4387.59814453125,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "987190364",
        "mapid": "1",
        "bftitle": "Mena",
        "sector": "0",
        "posx": 12958.3701171875,
        "posy": 4603.52001953125,
        "gamemap": "203",
        "rotation": 1
    },
    {
        "id": "987391516",
        "mapid": "1",
        "bftitle": "Semypolky",
        "sector": "0",
        "posx": 12582.7900390625,
        "posy": 4977.658203125,
        "gamemap": "201",
        "rotation": 3
    },
    {
        "id": "987424553",
        "mapid": "1",
        "bftitle": "Ormea",
        "sector": "0",
        "posx": 5838.98095703125,
        "posy": 7850.76513671875,
        "gamemap": "201"
    },
    {
        "id": "987854833",
        "mapid": "1",
        "bftitle": "Bodman-Ludwigshafen",
        "sector": "0",
        "posx": 6165.55908203125,
        "posy": 6317.68701171875,
        "gamemap": "203"
    },
    {
        "id": "987978273",
        "mapid": "1",
        "bftitle": "Bednyak",
        "sector": "0",
        "posx": 14098.6796875,
        "posy": 5550.9140625,
        "gamemap": "203"
    },
    {
        "id": "988064386",
        "mapid": "1",
        "bftitle": "Ortaköy",
        "sector": "0",
        "posx": 11394.6796875,
        "posy": 9279.0703125,
        "gamemap": "203"
    },
    {
        "id": "988370451",
        "mapid": "1",
        "bftitle": "Nürnberg",
        "sector": "0",
        "posx": 6754.14599609375,
        "posy": 5468.6171875,
        "gamemap": "70439"
    },
    {
        "id": "988385699",
        "mapid": "1",
        "bftitle": "Haapsalu",
        "sector": "0",
        "posx": 10415.6796875,
        "posy": 747.7139892578125,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "988413086",
        "mapid": "1",
        "bftitle": "Krosno",
        "sector": "0",
        "posx": 9896.6064453125,
        "posy": 5456.28076171875,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "988440116",
        "mapid": "1",
        "bftitle": "Ruds Vedby",
        "sector": "0",
        "posx": 6865.60400390625,
        "posy": 2623.126953125,
        "gamemap": "203",
        "rotation": 2
    },
    {
        "id": "988490417",
        "mapid": "1",
        "bftitle": "Rybnoye",
        "sector": "0",
        "posx": 15098.6796875,
        "posy": 3025.373046875,
        "gamemap": "201"
    },
    {
        "id": "988572897",
        "mapid": "1",
        "bftitle": "Koltushi",
        "sector": "0",
        "posx": 12497.849609375,
        "posy": 174.87770080566406,
        "gamemap": "70439"
    },
    {
        "id": "988694587",
        "mapid": "1",
        "bftitle": "Vergonnes Aérodrome",
        "sector": "0",
        "posx": 3197.468994140625,
        "posy": 6331.2060546875,
        "gamemap": "205"
    },
    {
        "id": "989386474",
        "mapid": "1",
        "bftitle": "Montereau-Fault-Yonne",
        "sector": "0",
        "posx": 4379.7548828125,
        "posy": 6044.10986328125,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "989574898",
        "mapid": "1",
        "bftitle": "Yambol",
        "sector": "0",
        "posx": 11282.9404296875,
        "posy": 8529.474609375,
        "gamemap": "201"
    },
    {
        "id": "989578222",
        "mapid": "1",
        "bftitle": "Woodcott Airfield",
        "sector": "0",
        "posx": 3111.092041015625,
        "posy": 4712.1591796875,
        "gamemap": "205"
    },
    {
        "id": "989597390",
        "mapid": "1",
        "bftitle": "Paola",
        "sector": "0",
        "posx": 8215.9052734375,
        "posy": 9748.90625,
        "gamemap": "70439"
    },
    {
        "id": "989622757",
        "mapid": "1",
        "bftitle": "Imola",
        "sector": "0",
        "posx": 6948.5009765625,
        "posy": 7766.9677734375,
        "gamemap": "70439"
    },
    {
        "id": "989816019",
        "mapid": "1",
        "bftitle": "Schladming",
        "sector": "0",
        "posx": 7527.0751953125,
        "posy": 6480.14599609375,
        "gamemap": "201"
    },
    {
        "id": "990038166",
        "mapid": "1",
        "bftitle": "Maubeuge",
        "sector": "0",
        "posx": 4659.84521484375,
        "posy": 5227.52978515625,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "990039299",
        "mapid": "1",
        "bftitle": "Mtsensk",
        "sector": "0",
        "posx": 14235.7197265625,
        "posy": 3754.333984375,
        "gamemap": "201"
    },
    {
        "id": "990045544",
        "mapid": "1",
        "bftitle": "Arkhangel’skoye",
        "sector": "0",
        "posx": 13870.8896484375,
        "posy": 2440.97412109375,
        "gamemap": "201",
        "rotation": 2
    },
    {
        "id": "990101787",
        "mapid": "1",
        "bftitle": "Radomsko",
        "sector": "0",
        "posx": 9214.845703125,
        "posy": 4818.1181640625,
        "gamemap": "70439"
    },
    {
        "id": "990153441",
        "mapid": "1",
        "bftitle": "Szarvas",
        "sector": "0",
        "posx": 9538.8203125,
        "posy": 6708.48095703125,
        "gamemap": "70439"
    },
    {
        "id": "990323028",
        "mapid": "1",
        "bftitle": "Roullet-Saint-Estèphe",
        "sector": "0",
        "posx": 3529.681884765625,
        "posy": 7256.1220703125,
        "gamemap": "201"
    },
    {
        "id": "990608752",
        "mapid": "1",
        "bftitle": "Ratne",
        "sector": "0",
        "posx": 10705.5595703125,
        "posy": 4533.85205078125,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "990623925",
        "mapid": "1",
        "bftitle": "San Martino d'Agri",
        "sector": "0",
        "posx": 8220.3740234375,
        "posy": 9412.2958984375,
        "gamemap": "203"
    },
    {
        "id": "990652134",
        "mapid": "1",
        "bftitle": "Borrby Flygplats",
        "sector": "0",
        "posx": 7667.68212890625,
        "posy": 2652.805908203125,
        "gamemap": "205"
    },
    {
        "id": "991203823",
        "mapid": "1",
        "bftitle": "Carentan",
        "sector": "0",
        "posx": 3124.4560546875,
        "posy": 5661.44287109375,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "991275697",
        "mapid": "1",
        "bftitle": "Pavlovsk",
        "sector": "0",
        "posx": 15271.849609375,
        "posy": 5102.5087890625,
        "gamemap": "70439"
    },
    {
        "id": "991384364",
        "mapid": "1",
        "bftitle": "Hellestø",
        "sector": "0",
        "posx": 5155.57421875,
        "posy": 783.0028076171875,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "991646389",
        "mapid": "1",
        "bftitle": "Parma",
        "sector": "0",
        "posx": 6541.923828125,
        "posy": 7584.52685546875,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "992240577",
        "mapid": "1",
        "bftitle": "Mellupi",
        "sector": "0",
        "posx": 10582.1103515625,
        "posy": 1972.4310302734375,
        "gamemap": "203"
    },
    {
        "id": "992767748",
        "mapid": "1",
        "bftitle": "Novyy Hay",
        "sector": "0",
        "posx": 13340.8896484375,
        "posy": 6882.63720703125,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "992906046",
        "mapid": "1",
        "bftitle": "Pabradė",
        "sector": "0",
        "posx": 11072.8603515625,
        "posy": 2885.720947265625,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "993296656",
        "mapid": "1",
        "bftitle": "Ebeltoft",
        "sector": "0",
        "posx": 6646.255859375,
        "posy": 2261.597900390625,
        "gamemap": "70439"
    },
    {
        "id": "993426282",
        "mapid": "1",
        "bftitle": "Strug",
        "sector": "0",
        "posx": 9142.119140625,
        "posy": 8351.9384765625,
        "gamemap": "201"
    },
    {
        "id": "993714393",
        "mapid": "1",
        "bftitle": "Dombóvár",
        "sector": "0",
        "posx": 8831.4892578125,
        "posy": 6919.13818359375,
        "gamemap": "70439"
    },
    {
        "id": "993862213",
        "mapid": "1",
        "bftitle": "Gory",
        "sector": "0",
        "posx": 12661.580078125,
        "posy": 3259.48193359375,
        "gamemap": "204"
    },
    {
        "id": "994632431",
        "mapid": "1",
        "bftitle": "Airolo",
        "sector": "0",
        "posx": 6038.51416015625,
        "posy": 6854.0498046875,
        "gamemap": "201",
        "rotation": 1
    },
    {
        "id": "994675750",
        "mapid": "1",
        "bftitle": "Priladozhskiy",
        "sector": "0",
        "posx": 12743.6904296875,
        "posy": 221.77099609375,
        "gamemap": "201"
    },
    {
        "id": "994848284",
        "mapid": "1",
        "bftitle": "Helsingborg",
        "sector": "0",
        "posx": 7240.97998046875,
        "posy": 2335.741943359375,
        "gamemap": "70439"
    },
    {
        "id": "994978628",
        "mapid": "1",
        "bftitle": "Firovo",
        "sector": "0",
        "posx": 13394.080078125,
        "posy": 1566.9930419921875,
        "gamemap": "205",
        "rotation": 3
    },
    {
        "id": "995141947",
        "mapid": "1",
        "bftitle": "Krajenka",
        "sector": "0",
        "posx": 8495.51171875,
        "posy": 3743.949951171875,
        "gamemap": "204",
        "rotation": 1
    },
    {
        "id": "995231807",
        "mapid": "1",
        "bftitle": "Karamyshevo",
        "sector": "0",
        "posx": 15068.2998046875,
        "posy": 933.65771484375,
        "gamemap": "201"
    },
    {
        "id": "995544429",
        "mapid": "1",
        "bftitle": "Kromy",
        "sector": "0",
        "posx": 13999.25,
        "posy": 4043.113037109375,
        "gamemap": "201"
    },
    {
        "id": "995775468",
        "mapid": "1",
        "bftitle": "Tartu",
        "sector": "0",
        "posx": 11348.919921875,
        "posy": 1066.9620361328125,
        "gamemap": "201"
    },
    {
        "id": "995829194",
        "mapid": "1",
        "bftitle": "Vilkaviškis",
        "sector": "0",
        "posx": 10266.4296875,
        "posy": 3064.22705078125,
        "gamemap": "70439"
    },
    {
        "id": "996164342",
        "mapid": "1",
        "bftitle": "Pissos",
        "sector": "0",
        "posx": 3286.491943359375,
        "posy": 7787.94677734375,
        "gamemap": "70439",
        "rotation": 1
    },
    {
        "id": "996673053",
        "mapid": "1",
        "bftitle": "Zarya",
        "sector": "0",
        "posx": 12219.990234375,
        "posy": 7083.625,
        "gamemap": "205"
    },
    {
        "id": "997250324",
        "mapid": "1",
        "bftitle": "Angers",
        "sector": "0",
        "posx": 3360.0458984375,
        "posy": 6440.748046875,
        "gamemap": "70439"
    },
    {
        "id": "997721116",
        "mapid": "1",
        "bftitle": "Pogreby",
        "sector": "0",
        "posx": 12428.259765625,
        "posy": 5249.31689453125,
        "gamemap": "203"
    },
    {
        "id": "997841117",
        "mapid": "1",
        "bftitle": "Watford",
        "sector": "0",
        "posx": 3398.93994140625,
        "posy": 4540.037109375,
        "gamemap": "70439",
        "rotation": 3
    },
    {
        "id": "998133717",
        "mapid": "1",
        "bftitle": "La Rochefoucauld",
        "sector": "0",
        "posx": 3628.068115234375,
        "posy": 7189.74609375,
        "gamemap": "201"
    },
    {
        "id": "999070817",
        "mapid": "1",
        "bftitle": "Ostrów Mazowiecka",
        "sector": "0",
        "posx": 9933.0966796875,
        "posy": 3987.116943359375,
        "gamemap": "70439",
        "rotation": 2
    },
    {
        "id": "999902854",
        "mapid": "1",
        "bftitle": "Ceadîr-Lunga",
        "sector": "0",
        "posx": 11966.009765625,
        "posy": 7056.330078125,
        "gamemap": "70439",
        "rotation": 2
    }
];

export default battlefield;