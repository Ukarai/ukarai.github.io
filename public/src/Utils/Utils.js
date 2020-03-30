import SkillsFile from '../skills.txt'

export const loadSkillsFromFile = function () {
    let rawFile = new XMLHttpRequest();
    let skillsArray = [];

    rawFile.open("GET", SkillsFile, false);
    rawFile.onreadystatechange = function () {
        if (rawFile.readyState === 4) {
            if (rawFile.status === 200 || rawFile.status === 0) {
                let allText = rawFile.responseText;
                let lines = allText.split("\n");

                for (let i = 0; i < lines.length; i++) {
                    if (lines[i] === "") continue;

                    let skillInfo = lines[i].split(";");
                    let skillsObj = {
                        name: skillInfo[0],
                        rotations: skillInfo[1],
                        twists: skillInfo[2],
                        takeoff: skillInfo[3],
                        landing: skillInfo[4],
                        shape: skillInfo[5],
                        tariff: 0,
                    };

                    skillsObj.tariff = calculateTariff(skillsObj);
                    skillsArray.push(skillsObj);
                }
            }
        }
    };
    rawFile.send(null);

    return skillsArray;
}

function calculateTariff(skill) {
    let tariff = 0;

    if (skill == null) {
        return 0;
    }

    if (skill.twists > 0) {
        tariff += Number(skill.twists);
    }
    if (skill.rotations > 0) {
        tariff += Number(skill.rotations);
    }
    if (skill.rotations >= 4) {
        tariff += (Math.floor(Number(skill.rotations) / 4));

        if ((skill.shape === "PIKE" || skill.shape === "STRAIGHT") && Number(skill.twists) !== 1) {
            tariff += (Math.floor(Number(skill.rotations) / 4));
        }
    }
    if (isNaN(tariff)) {
        tariff = 0;
    }

    tariff /= 10.0;
    return tariff
}