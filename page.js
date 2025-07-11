import Head from "next/head";
import "../styles/AutomationMachine.css";

export default function AutomationMachine() {
  return (
    <>
      <Head>
        <title>Automation Cutting Machine</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <main>
        <h1>Automation Cutting Machine</h1>
        <h2>Technical Specifications</h2>
        <table>
          <thead>
            <tr>
              <th>Specification</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Cutting Speed</td>
              <td>500 mm/s</td>
            </tr>
            <tr>
              <td>Cutting Accuracy</td>
              <td>±0.1 mm</td>
            </tr>
            <tr>
              <td>Material Compatibility</td>
              <td>Steel, Aluminum, Plastic, Wood</td>
            </tr>
            <tr>
              <td>Control System</td>
              <td>PLC with Touchscreen Interface</td>
            </tr>
            <tr>
              <td>Power Consumption</td>
              <td>2.5 kW</td>
            </tr>
            <tr>
              <td>Dimensions</td>
              <td>1200 x 800 x 1500 mm</td>
            </tr>
          </tbody>
        </table>

        <h2>Features & Benefits</h2>
        <div className="features-benefits">
          <div className="box">
            <h3>Precision Cutting</h3>
            <p>
              Achieve consistent, accurate cuts with advanced laser guidance,
              reducing material waste.
            </p>
          </div>
          <div className="box">
            <h3>User-Friendly Interface</h3>
            <p>
              Touchscreen interface allows easy operation, setup, and
              monitoring for operators.
            </p>
          </div>
          <div className="box">
            <h3>Energy Efficient</h3>
            <p>
              Low power consumption while maintaining high output efficiency
              reduces operational costs.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
