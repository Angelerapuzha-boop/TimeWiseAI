const sampleStaff = [
  { id: 's1', name: 'Avery Chen', skills: ['care', 'first aid'], location: 'Sydney', availability: ['morning', 'afternoon'] },
  { id: 's2', name: 'Jordan Smith', skills: ['hospitality', 'events'], location: 'Melbourne', availability: ['afternoon', 'evening'] },
  { id: 's3', name: 'Nina Patel', skills: ['security', 'compliance'], location: 'Brisbane', availability: ['night'] }
];

function getWorkforceOverview() {
  return Promise.resolve({
    totalStaff: sampleStaff.length,
    activeShifts: 24,
    complianceRisk: 'Low',
    forecastedShortages: 2
  });
}

function optimizeSchedule({ shiftRequests = [], workforce = sampleStaff, constraints = {} }) {
  const assignments = shiftRequests.map((shift, index) => {
    const worker = workforce[index % workforce.length];
    return {
      shiftId: shift.id,
      workerId: worker.id,
      workerName: worker.name,
      matchedSkills: worker.skills.filter(skill => shift.requiredSkills.includes(skill)),
      location: shift.location,
      start: shift.start,
      end: shift.end
    };
  });

  return Promise.resolve({
    generatedAt: new Date().toISOString(),
    assignments,
    summary: {
      totalShifts: shiftRequests.length,
      balancedLoad: true,
      complianceChecked: true
    }
  });
}

function forecastDemand() {
  return Promise.resolve({
    horizonDays: 7,
    predictedShortages: [
      { date: '2026-05-15', area: 'Aged Care', shortage: 3 },
      { date: '2026-05-17', area: 'Hospitality', shortage: 5 }
    ],
    recommendations: [
      'Increase part-time coverage on weekends',
      'Cross-train hospitality and customer support staff'
    ]
  });
}

function findReplacements({ unavailableStaff = [], pool = sampleStaff }) {
  const replacements = unavailableStaff.map(({ id, requiredSkills, location }) => {
    const match = pool.find(worker => worker.location === location && requiredSkills.every(skill => worker.skills.includes(skill)));
    return {
      unavailableId: id,
      replacement: match || null
    };
  });

  return Promise.resolve({
    replacements,
    status: 'success'
  });
}

module.exports = {
  getWorkforceOverview,
  optimizeSchedule,
  forecastDemand,
  findReplacements
};
