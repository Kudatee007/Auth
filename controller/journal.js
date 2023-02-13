// crud
const getJournals = async (req, res) => {
    res.send(' get all journals')
};

const getJournal = async (req, res) => {
    res.send(' get journal')
};

const createJournals = async (req, res) => {
    res.send(' create journals')
};

const updateJournals = async (req, res) => {
    res.send(' update journals')
};

const deleteJournals = async (req, res) => {
    res.send(' delete journals')
};



module.exports = {
    getJournals,
    getJournal,
    createJournals,
    updateJournals,
    deleteJournals
};