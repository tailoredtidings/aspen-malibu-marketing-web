/* global React, ReactDOM */
const App = () => (
  <>
    <div className="grain"></div>
    <window.Nav />
    <main>
      <window.Hero />
      <window.LogoStrip />
      <window.Manifesto />
      <window.AIEngine />
      <window.Capabilities />
      <window.Services />
      <window.Tiers />
      <window.Estimate />
      <window.Process />
      <window.Testimonials />
      <window.Metrics />
      <window.Campaigns />
      <window.FAQ />
      <window.CTA />
    </main>
    <window.Footer />
  </>
);
ReactDOM.createRoot(document.getElementById('root')).render(<App />);
