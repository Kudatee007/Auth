const router = require("express").Router();
const {
    getJournals,
    getJournal,
    createJournals,
    updateJournals,
    deleteJournals
} = require('../controller/journal');



router.route('/').get(getJournals).post(createJournals);
router.route("/:journalId").get(getJournal).patch(updateJournals).delete(deleteJournals);



module.exports = router;