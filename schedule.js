const express = require('express');
const router = express.Router();
const aiScheduler = require('../services/aiScheduler');
const integrationConnector = require('../services/integrationConnector');

router.get('/overview', async (req, res) => {
  const overview = await aiScheduler.getWorkforceOverview();
  res.json(overview);
});

router.post('/optimize', async (req, res) => {
  const { shiftRequests, workforce, constraints } = req.body;
  const schedule = await aiScheduler.optimizeSchedule({ shiftRequests, workforce, constraints });
  res.json(schedule);
});

router.get('/forecast', async (req, res) => {
  const forecast = await aiScheduler.forecastDemand();
  res.json(forecast);
});

router.post('/replace', async (req, res) => {
  const { unavailableStaff, pool } = req.body;
  const replacements = await aiScheduler.findReplacements({ unavailableStaff, pool });
  res.json(replacements);
});

router.get('/integrations', async (req, res) => {
  const integrations = integrationConnector.getAvailableIntegrations();
  res.json(integrations);
});

module.exports = router;
