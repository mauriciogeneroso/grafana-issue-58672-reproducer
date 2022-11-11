let fields = {
    "nodes_fields": [
        {
            "field_name": "id",
            "type": "string"
        },
        {
            "field_name": "title",
            "type": "string"
        },
        {
            "field_name": "mainstat",
            "type": "string",
            "displayName": "type"
        },
        {
            "field_name": "arc__producer",
            "type": "number",
            "displayName": "Producer",
            "color": "purple"
        },
        {
            "field_name": "arc__topic",
            "type": "number",
            "displayName": "Topic",
            "color": "blue"
        },
        {
            "field_name": "arc__consumer",
            "type": "number",
            "displayName": "Consumer",
            "color": "orange"
        }
    ],
    "edges_fields": [
        {
            "field_name": "id",
            "type": "string"
        },
        {
            "field_name": "source",
            "type": "string"
        },
        {
            "field_name": "target",
            "type": "string"
        },
        {
            "field_name": "mainstat",
            "type": "string"
        }
    ]
}

let producer1 = {
    "nodes": [
        {
            "mainstat": "Topic",
            "arc__producer": 0,
            "arc__topic": 1,
            "arc__consumer": 0,
            "id": "12",
            "title": "TOPIC_12"
        },
        {
            "mainstat": "Topic",
            "arc__producer": 0,
            "arc__topic": 1,
            "arc__consumer": 0,
            "id": "34",
            "title": "TOPIC_34"
        },
        {
            "mainstat": "Topic",
            "arc__producer": 0,
            "arc__topic": 1,
            "arc__consumer": 0,
            "id": "24",
            "title": "TOPIC_24"
        },
        {
            "mainstat": "Consumer",
            "arc__producer": 0,
            "arc__topic": 0,
            "arc__consumer": 1,
            "id": "14",
            "title": "CONSUMER_14"
        },
        {
            "mainstat": "Consumer",
            "arc__producer": 0,
            "arc__topic": 0,
            "arc__consumer": 1,
            "id": "17",
            "title": "CONSUMER_17"
        },
        {
            "mainstat": "Topic",
            "arc__producer": 0,
            "arc__topic": 1,
            "arc__consumer": 0,
            "id": "39",
            "title": "TOPIC_39"
        },
        {
            "mainstat": "Topic",
            "arc__producer": 0,
            "arc__topic": 1,
            "arc__consumer": 0,
            "id": "29",
            "title": "TOPIC_29"
        },
        {
            "mainstat": "Topic",
            "arc__producer": 0,
            "arc__topic": 1,
            "arc__consumer": 0,
            "id": "19",
            "title": "TOPIC_19"
        },
        {
            "mainstat": "Producer",
            "arc__producer": 1,
            "arc__topic": 0,
            "arc__consumer": 0,
            "id": "1",
            "title": "producer1"
        },
        {
            "mainstat": "Topic",
            "arc__producer": 0,
            "arc__topic": 1,
            "arc__consumer": 0,
            "id": "2",
            "title": "TOPIC_2"
        },
        {
            "mainstat": "Consumer",
            "arc__producer": 0,
            "arc__topic": 0,
            "arc__consumer": 1,
            "id": "4",
            "title": "CONSUMER_4"
        },
        {
            "mainstat": "Topic",
            "arc__producer": 0,
            "arc__topic": 1,
            "arc__consumer": 0,
            "id": "6",
            "title": "CONSUMER_6"
        },
        {
            "mainstat": "Topic",
            "arc__producer": 0,
            "arc__topic": 1,
            "arc__consumer": 0,
            "id": "9",
            "title": "CONSUMER_9"
        }
    ],
    "edges": [
        {
            "id": "3",
            "source": "1",
            "target": "2"
        },
        {
            "id": "5",
            "source": "2",
            "target": "4"
        },
        {
            "id": "7",
            "source": "1",
            "target": "6"
        },
        {
            "id": "8",
            "source": "6",
            "target": "4"
        },
        {
            "id": "10",
            "source": "1",
            "target": "9"
        },
        {
            "id": "11",
            "source": "9",
            "target": "4"
        },
        {
            "id": "13",
            "source": "1",
            "target": "12"
        },
        {
            "id": "15",
            "source": "12",
            "target": "14"
        },
        {
            "id": "16",
            "source": "12",
            "target": "4"
        },
        {
            "id": "18",
            "source": "12",
            "target": "17"
        },
        {
            "id": "20",
            "source": "1",
            "target": "19"
        },
        {
            "id": "21",
            "source": "19",
            "target": "14"
        },
        {
            "id": "22",
            "source": "19",
            "target": "4"
        },
        {
            "id": "23",
            "source": "19",
            "target": "17"
        },
        {
            "id": "25",
            "source": "1",
            "target": "24"
        },
        {
            "id": "26",
            "source": "24",
            "target": "14"
        },
        {
            "id": "27",
            "source": "24",
            "target": "4"
        },
        {
            "id": "28",
            "source": "24",
            "target": "17"
        },
        {
            "id": "30",
            "source": "1",
            "target": "29"
        },
        {
            "id": "31",
            "source": "29",
            "target": "14"
        },
        {
            "id": "32",
            "source": "29",
            "target": "4"
        },
        {
            "id": "33",
            "source": "29",
            "target": "17"
        },
        {
            "id": "35",
            "source": "1",
            "target": "34"
        },
        {
            "id": "36",
            "source": "34",
            "target": "14"
        },
        {
            "id": "37",
            "source": "34",
            "target": "4"
        },
        {
            "id": "38",
            "source": "34",
            "target": "17"
        },
        {
            "id": "40",
            "source": "1",
            "target": "39"
        },
        {
            "id": "41",
            "source": "39",
            "target": "14"
        },
        {
            "id": "42",
            "source": "39",
            "target": "4"
        },
        {
            "id": "43",
            "source": "39",
            "target": "17"
        }
    ]
}

let producer2 = {
    "nodes": [
        {
            "mainstat": "Consumer",
            "arc__producer": 0,
            "arc__topic": 0,
            "arc__consumer": 1,
            "id": "22",
            "title": "CONSUMER_22"
        },
        {
            "mainstat": "Topic",
            "arc__producer": 0,
            "arc__topic": 1,
            "arc__consumer": 0,
            "id": "66",
            "title": "TOPIC_66"
        },
        {
            "mainstat": "Topic",
            "arc__producer": 0,
            "arc__topic": 1,
            "arc__consumer": 0,
            "id": "45",
            "title": "TOPIC_45"
        },
        {
            "mainstat": "Consumer",
            "arc__producer": 0,
            "arc__topic": 0,
            "arc__consumer": 1,
            "id": "24",
            "title": "CONSUMER_24"
        },
        {
            "mainstat": "Topic",
            "arc__producer": 0,
            "arc__topic": 1,
            "arc__consumer": 0,
            "id": "69",
            "title": "TOPIC_69"
        },
        {
            "mainstat": "Consumer",
            "arc__producer": 0,
            "arc__topic": 0,
            "arc__consumer": 1,
            "id": "26",
            "title": "CONSUMER_26"
        },
        {
            "mainstat": "Topic",
            "arc__producer": 0,
            "arc__topic": 1,
            "arc__consumer": 0,
            "id": "48",
            "title": "TOPIC_48"
        },
        {
            "mainstat": "Topic",
            "arc__producer": 0,
            "arc__topic": 1,
            "arc__consumer": 0,
            "id": "28",
            "title": "TOPIC_28"
        },
        {
            "mainstat": "Topic",
            "arc__producer": 0,
            "arc__topic": 1,
            "arc__consumer": 0,
            "id": "90",
            "title": "TOPIC_90"
        },
        {
            "mainstat": "Topic",
            "arc__producer": 0,
            "arc__topic": 1,
            "arc__consumer": 0,
            "id": "93",
            "title": "TOPIC_93"
        },
        {
            "mainstat": "Consumer",
            "arc__producer": 0,
            "arc__topic": 0,
            "arc__consumer": 1,
            "id": "72",
            "title": "CONSUMER_72"
        },
        {
            "mainstat": "Topic",
            "arc__producer": 0,
            "arc__topic": 1,
            "arc__consumer": 0,
            "id": "51",
            "title": "TOPIC_51"
        },
        {
            "mainstat": "Topic",
            "arc__producer": 0,
            "arc__topic": 1,
            "arc__consumer": 0,
            "id": "74",
            "title": "TOPIC_74"
        },
        {
            "mainstat": "Topic",
            "arc__producer": 0,
            "arc__topic": 1,
            "arc__consumer": 0,
            "id": "96",
            "title": "TOPIC_96"
        },
        {
            "mainstat": "Topic",
            "arc__producer": 0,
            "arc__topic": 1,
            "arc__consumer": 0,
            "id": "54",
            "title": "TOPIC_54"
        },
        {
            "mainstat": "Topic",
            "arc__producer": 0,
            "arc__topic": 1,
            "arc__consumer": 0,
            "id": "11",
            "title": "TOPIC_11"
        },
        {
            "mainstat": "Topic",
            "arc__producer": 0,
            "arc__topic": 1,
            "arc__consumer": 0,
            "id": "33",
            "title": "TOPIC_33"
        },
        {
            "mainstat": "Topic",
            "arc__producer": 0,
            "arc__topic": 1,
            "arc__consumer": 0,
            "id": "78",
            "title": "TOPIC_78"
        },
        {
            "mainstat": "Topic",
            "arc__producer": 0,
            "arc__topic": 1,
            "arc__consumer": 0,
            "id": "57",
            "title": "TOPIC_57"
        },
        {
            "mainstat": "Topic",
            "arc__producer": 0,
            "arc__topic": 1,
            "arc__consumer": 0,
            "id": "14",
            "title": "TOPIC_14"
        },
        {
            "mainstat": "Topic",
            "arc__producer": 0,
            "arc__topic": 1,
            "arc__consumer": 0,
            "id": "38",
            "title": "TOPIC_38"
        },
        {
            "mainstat": "Topic",
            "arc__producer": 0,
            "arc__topic": 1,
            "arc__consumer": 0,
            "id": "17",
            "title": "TOPIC_17"
        },
        {
            "mainstat": "Producer",
            "arc__producer": 1,
            "arc__topic": 0,
            "arc__consumer": 0,
            "id": "1",
            "title": "PRODUCER_2"
        },
        {
            "mainstat": "Topic",
            "arc__producer": 0,
            "arc__topic": 1,
            "arc__consumer": 0,
            "id": "2",
            "title": "TOPIC_2"
        },
        {
            "mainstat": "Consumer",
            "arc__producer": 0,
            "arc__topic": 0,
            "arc__consumer": 1,
            "id": "4",
            "title": "CONSUMER_4"
        },
        {
            "mainstat": "Consumer",
            "arc__producer": 0,
            "arc__topic": 0,
            "arc__consumer": 1,
            "id": "6",
            "title": "CONSUMER_6"
        },
        {
            "mainstat": "Topic",
            "arc__producer": 0,
            "arc__topic": 1,
            "arc__consumer": 0,
            "id": "8",
            "title": "TOPIC_8"
        },
        {
            "mainstat": "Topic",
            "arc__producer": 0,
            "arc__topic": 1,
            "arc__consumer": 0,
            "id": "60",
            "title": "TOPIC_60"
        },
        {
            "mainstat": "Topic",
            "arc__producer": 0,
            "arc__topic": 1,
            "arc__consumer": 0,
            "id": "82",
            "title": "TOPIC_82"
        },
        {
            "mainstat": "Consumer",
            "arc__producer": 0,
            "arc__topic": 0,
            "arc__consumer": 1,
            "id": "40",
            "title": "CONSUMER_40"
        },
        {
            "mainstat": "Topic",
            "arc__producer": 0,
            "arc__topic": 1,
            "arc__consumer": 0,
            "id": "63",
            "title": "TOPIC_63"
        },
        {
            "mainstat": "Topic",
            "arc__producer": 0,
            "arc__topic": 1,
            "arc__consumer": 0,
            "id": "20",
            "title": "TOPIC_20"
        },
        {
            "mainstat": "Topic",
            "arc__producer": 0,
            "arc__topic": 1,
            "arc__consumer": 0,
            "id": "42",
            "title": "TOPIC_42"
        },
        {
            "mainstat": "Topic",
            "arc__producer": 0,
            "arc__topic": 1,
            "arc__consumer": 0,
            "id": "86",
            "title": "TOPIC_86"
        }
    ],
    "edges": [
        {
            "id": "3",
            "source": "1",
            "target": "2"
        },
        {
            "id": "5",
            "source": "2",
            "target": "4"
        },
        {
            "id": "7",
            "source": "2",
            "target": "6"
        },
        {
            "id": "9",
            "source": "1",
            "target": "8"
        },
        {
            "id": "10",
            "source": "8",
            "target": "6"
        },
        {
            "id": "12",
            "source": "1",
            "target": "11"
        },
        {
            "id": "13",
            "source": "11",
            "target": "4"
        },
        {
            "id": "15",
            "source": "1",
            "target": "14"
        },
        {
            "id": "16",
            "source": "14",
            "target": "4"
        },
        {
            "id": "18",
            "source": "1",
            "target": "17"
        },
        {
            "id": "19",
            "source": "17",
            "target": "4"
        },
        {
            "id": "9",
            "source": "1",
            "target": "8"
        },
        {
            "id": "10",
            "source": "8",
            "target": "6"
        },
        {
            "id": "21",
            "source": "1",
            "target": "20"
        },
        {
            "id": "23",
            "source": "20",
            "target": "22"
        },
        {
            "id": "25",
            "source": "20",
            "target": "24"
        },
        {
            "id": "27",
            "source": "20",
            "target": "26"
        },
        {
            "id": "29",
            "source": "1",
            "target": "28"
        },
        {
            "id": "30",
            "source": "28",
            "target": "22"
        },
        {
            "id": "31",
            "source": "28",
            "target": "24"
        },
        {
            "id": "32",
            "source": "28",
            "target": "26"
        },
        {
            "id": "34",
            "source": "1",
            "target": "33"
        },
        {
            "id": "35",
            "source": "33",
            "target": "22"
        },
        {
            "id": "36",
            "source": "33",
            "target": "24"
        },
        {
            "id": "37",
            "source": "33",
            "target": "26"
        },
        {
            "id": "39",
            "source": "1",
            "target": "38"
        },
        {
            "id": "41",
            "source": "38",
            "target": "40"
        },
        {
            "id": "43",
            "source": "1",
            "target": "42"
        },
        {
            "id": "44",
            "source": "42",
            "target": "40"
        },
        {
            "id": "46",
            "source": "1",
            "target": "45"
        },
        {
            "id": "47",
            "source": "45",
            "target": "26"
        },
        {
            "id": "49",
            "source": "1",
            "target": "48"
        },
        {
            "id": "50",
            "source": "48",
            "target": "26"
        },
        {
            "id": "52",
            "source": "1",
            "target": "51"
        },
        {
            "id": "53",
            "source": "51",
            "target": "26"
        },
        {
            "id": "55",
            "source": "1",
            "target": "54"
        },
        {
            "id": "56",
            "source": "54",
            "target": "4"
        },
        {
            "id": "58",
            "source": "1",
            "target": "57"
        },
        {
            "id": "59",
            "source": "57",
            "target": "4"
        },
        {
            "id": "61",
            "source": "1",
            "target": "60"
        },
        {
            "id": "62",
            "source": "60",
            "target": "4"
        },
        {
            "id": "64",
            "source": "1",
            "target": "63"
        },
        {
            "id": "65",
            "source": "63",
            "target": "4"
        },
        {
            "id": "67",
            "source": "1",
            "target": "66"
        },
        {
            "id": "68",
            "source": "66",
            "target": "4"
        },
        {
            "id": "70",
            "source": "1",
            "target": "69"
        },
        {
            "id": "71",
            "source": "69",
            "target": "4"
        },
        {
            "id": "73",
            "source": "69",
            "target": "72"
        },
        {
            "id": "75",
            "source": "1",
            "target": "74"
        },
        {
            "id": "76",
            "source": "74",
            "target": "4"
        },
        {
            "id": "77",
            "source": "74",
            "target": "72"
        },
        {
            "id": "79",
            "source": "1",
            "target": "78"
        },
        {
            "id": "80",
            "source": "78",
            "target": "4"
        },
        {
            "id": "81",
            "source": "78",
            "target": "72"
        },
        {
            "id": "83",
            "source": "1",
            "target": "82"
        },
        {
            "id": "84",
            "source": "82",
            "target": "4"
        },
        {
            "id": "85",
            "source": "82",
            "target": "72"
        },
        {
            "id": "87",
            "source": "1",
            "target": "86"
        },
        {
            "id": "88",
            "source": "86",
            "target": "4"
        },
        {
            "id": "89",
            "source": "86",
            "target": "72"
        },
        {
            "id": "91",
            "source": "1",
            "target": "90"
        },
        {
            "id": "92",
            "source": "90",
            "target": "4"
        },
        {
            "id": "94",
            "source": "1",
            "target": "93"
        },
        {
            "id": "95",
            "source": "93",
            "target": "4"
        },
        {
            "id": "97",
            "source": "1",
            "target": "96"
        },
        {
            "id": "98",
            "source": "96",
            "target": "4"
        }
    ]
}

module.exports = {fields, producer1, producer2}