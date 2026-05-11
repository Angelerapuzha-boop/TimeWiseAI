function getAvailableIntegrations() {
  return [
    { id: 'hr-system', name: 'HR System', status: 'ready', type: 'HR' },
    { id: 'payroll', name: 'Payroll Platform', status: 'ready', type: 'Payroll' },
    { id: 'timesheet', name: 'Time Tracking', status: 'ready', type: 'Time Tracking' },
    { id: 'erp', name: 'ERP System', status: 'available', type: 'ERP' },
    { id: 'wfm', name: 'Workforce Management', status: 'available', type: 'Workforce Management' }
  ];
}

function connectIntegration(integrationId, config) {
  return Promise.resolve({
    integrationId,
    connected: true,
    details: config
  });
}

module.exports = {
  getAvailableIntegrations,
  connectIntegration
};
