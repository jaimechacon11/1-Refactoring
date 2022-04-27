const Reader = require("../utils/Reader");
const ExplorerService = require("../services/ExplorerService");

class ExplorerController {
    static getExplorersByMission(mission) {
        const explorers = Reader.readJsonFile("explorers.json");
        return ExplorerService.filterByMission(explorers, mission);
    }

    static getExplorersUsernamesByMission(mission) {
        const explorers = Reader.readJsonFile("explorers.json");
        const explorersInNodeToGetUsernames = explorers.filter(
            (explorer) => explorer.mission == mission
        );
        const usernamesInNode = explorersInNodeToGetUsernames.map(
            (explorer) => explorer.githubUsername
        );
        return usernamesInNode;
    }

    static getExplorersAmonutByMission(mission) {
        const explorers = Reader.readJsonFile("explorers.json");
        const explorersInNode = explorers.filter(
            (explorer) => explorer.mission == mission
        );
        return explorersInNode.length;
    }
}

module.exports = ExplorerController;
