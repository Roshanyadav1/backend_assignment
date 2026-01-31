const express = require('express');
const router = express.Router();
const personController = require('../controllers/personController');
const { getAddressFromCoords } = require('../services/geocodingService');

// Personal Details
router.post('/personal-details', personController.createPerson);
router.get('/personal-details', personController.getPeople);

// Geocoding
router.get('/get-address', async (req, res) => {
  try {
    const { lat, lon } = req.query;
    const address = await getAddressFromCoords(lat, lon);
    res.json({ status: 'success', address });
  } catch (err) {
    res.status(500).json({ status: 'error', message: err.message });
  }
});

module.exports = router;