const express = require('express');
const router = express.Router();

// Importez les fonctions de contrôleur pour les sessions
const { creerSession, sessionsFormateur,afficherSessions, updateSession, deleteSessionById,afficherDetailsSession } = require('../controller/SessionController');

// Définir les routes pour les sessions
router.post('/creerSession', creerSession);
router.get('/afficherSessions', afficherSessions);
router.put('/updateSession/:id', updateSession);
router.delete('/deleteSessionById/:id', deleteSessionById);
router.get('/afficherDetailsSession/:id', afficherDetailsSession);
router.get('/sessionsFormateur/:userId', sessionsFormateur);




module.exports = router;
