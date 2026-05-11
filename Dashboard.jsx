function Dashboard({ overview }) {
  return (
    <section className="dashboard">
      <div className="panel">
        <h2>Operational Intelligence</h2>
        <p>AI-driven scheduling, forecasting, and integration orchestration for mission-critical teams.</p>
      </div>
      <div className="grid">
        <article className="card">
          <h3>Workforce Overview</h3>
          {overview ? (
            <ul>
              <li>Total staff: {overview.totalStaff}</li>
              <li>Active shifts: {overview.activeShifts}</li>
              <li>Compliance risk: {overview.complianceRisk}</li>
              <li>Forecasted shortages: {overview.forecastedShortages}</li>
            </ul>
          ) : (
            <p>Loading overview...</p>
          )}
        </article>
        <article className="card">
          <h3>Integration Layer</h3>
          <p>Connects HR, payroll, ERP, time-tracking, workforce management, and CRM without replacing existing systems.</p>
        </article>
        <article className="card">
          <h3>AI Scheduling</h3>
          <p>Optimizes assignments by skills, certifications, location, availability, and compliance rules.</p>
        </article>
      </div>
    </section>
  );
}

export default Dashboard;
