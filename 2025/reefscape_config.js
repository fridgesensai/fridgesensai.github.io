var config_data = `
{
  "dataFormat": "tsv",
  "title": "Scouting PASS 2025",
  "page_title": "REEFSCAPE",
  "checkboxAs": "10",
  "prematch": [
    { "name": "Scouter Name",
      "code": "s",
      "type": "scouter",
      "size": 15,
      "maxSize": 30,
      "required": "true"
    },
    { "name": "Match Level",
      "code": "l",
      "type": "level",
      "choices": {
        "Quals": "Quals",
        "Semis": "Semifinals",
        "Finals": "Finals"
      },
      "defaultValue": "qm",
      "required": "true"
    },
    { "name": "Match #",
      "code": "m",
      "type": "match",
      "min": 1,
      "max": 150,
      "required": "true"
    },
    { "name": "Team #",
      "code": "t",
      "type": "team",
      "min": 1,
      "max": 99999
    }
  ],
  "auton": [
    { "name": "Auto Start Position",
      "code": "as",
      "type": "radio",
      "choices": {
        "Processor": "Close to Processor",
        "Middle": "Middle",
        "Far": "Far from Processor"
      },
      "required": "true"
    },
    { "name": "Coral L1 Scores",
      "code": "ac1",
      "type": "counter"
    },
    { "name": "Coral L2 Scores",
      "code": "ac2",
      "type": "counter"
    },
    { "name": "Coral L3 Scores",
      "code": "ac3",
      "type": "counter"
    },
    { "name": "Coral L4 Scores",
      "code": "ac4",
      "type": "counter"
    },
    { "name": "Processor Scores",
      "code": "aps",
      "type": "counter"
    },
    { "name": "Net Scores",
      "code": "ans",
      "type": "counter"
    }
  ],
  "teleop": [
    { "name": "Coral L1 Scores",
      "code": "tc1",
      "type": "counter"
    },
    { "name": "Coral L2 Scores",
      "code": "tc2",
      "type": "counter"
    },
    { "name": "Coral L3 Scores",
      "code": "tc3",
      "type": "counter"
    },
    { "name": "Coral L4 Scores",
      "code": "tc4",
      "type": "counter"
    },
    { "name": "Processor Scores",
      "code": "tps",
      "type": "counter"
    },
    { "name": "Net Scores",
      "code": "tns",
      "type": "counter"
    }
  ],
  "postmatch": [
    { "name": "Driver Skill",
      "code": "ds",
      "type": "number",
      "choices": {
        "min": 0,
        "max": 10
      },
      "required": "true"
    },
    { "name": "Defense Rating",
      "code": "dr",
      "type": "radio",
      "choices": {
        "b": "Below Average<br>",
        "a": "Average<br>",
        "g": "Good<br>",
        "e": "Excellent<br>",
        "x": "Did not play defense"
      },
      "defaultValue": "x"
    },
    { "name": "Died/Immobilized",
      "code": "die",
      "type": "bool"
    },
    { "name": "Tippy<br>(almost tipped over)",
      "code": "tip",
      "type": "bool"
    },
    { "name": "Comments",
      "code": "co",
      "type": "text",
      "size": 100,
      "maxSize": 200
    }
  ]
}`;
