function App() {
  const sections = [
    {
      title: 'Events Dashboard',
      body: 'Ranked conjunction event list, filters, and severity summaries.',
    },
    {
      title: 'Event Detail',
      body: 'Geometry explanation, timing context, and event-level metrics.',
    },
    {
      title: 'Maneuver Sandbox',
      body: 'Candidate maneuver inputs, baseline comparison, and downstream scan results.',
    },
  ]

  return (
    <main className="shell">
      <header className="hero">
        <p className="eyebrow">Conjunction Decision Support Template</p>
        <h1>AEGIS</h1>
        <p className="summary">
          This frontend is intentionally limited to template structure and product framing.
          Dedicated implementation agents can build the event queue, detail pages, and
          maneuver workflows on top of this shell.
        </p>
      </header>

      <section className="grid">
        {sections.map((section) => (
          <article key={section.title} className="card">
            <h2>{section.title}</h2>
            <p>{section.body}</p>
          </article>
        ))}
      </section>
    </main>
  )
}

export default App

