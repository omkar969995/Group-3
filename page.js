export default function Page() {
  return (
    <div className="container">
      <h2>Application Industries</h2>
      <ul className="industry-list">
        <li>Automotive Industry</li>
        <li>Textile Manufacturing</li>
        <li>Packaging and Labeling</li>
        <li>Plastic and Polymer Industry</li>
        <li>Electronics and PCB Assembly</li>
        <li>Furniture and Woodworking</li>
      </ul>

      {/* Brochure download button */}
      <a className="download-button" href="/poster format (2).pdf" download>
        Download Brochure
      </a>
    </div>
  );
}

