export default function Home() {
  return (
    <main className="container">
      <div style={{ padding: '4rem 0', textAlign: 'center' }}>
        <h1>Weather Web App</h1>
        <p style={{ fontSize: '1.125rem', color: '#6b7280' }}>
          Next.js აპლიკაცია SCSS, TypeScript, Zustand და React Hook Form-ით
        </p>
        <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <button className="btn btn-primary">Primary Button</button>
          <button className="btn btn-secondary">Secondary Button</button>
          <button className="btn btn-primary" disabled>Disabled Button</button>
        </div>
        
        <div style={{ marginTop: '3rem', maxWidth: '400px', margin: '3rem auto 0' }}>
          <div className="form-group">
            <label htmlFor="email">ელფოსტა</label>
            <input
              type="email"
              id="email"
              placeholder="შეიყვანეთ ელფოსტა"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">შეტყობინება</label>
            <textarea
              id="message"
              rows={4}
              placeholder="შეიყვანეთ შეტყობინება"
            />
          </div>
        </div>
      </div>
    </main>
  )
}
