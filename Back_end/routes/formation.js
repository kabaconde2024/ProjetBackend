const express = require('express');
const router = express.Router();

// Importez la fonction getAllUsers depuis le contrôleur authController
const { creerFormation, afficherFormations,updateFormation,deleteFormationById,afficher} = require('../controller/adminformation');
router.post('/creerFormation', creerFormation);
router.get('/afficherFormations', afficherFormations);
router.get('/afficher/:id', afficher);
router.put('/updateFormation/:id', updateFormation);
router.delete('/deleteFormationById/:id', deleteFormationById);



module.exports = router;
