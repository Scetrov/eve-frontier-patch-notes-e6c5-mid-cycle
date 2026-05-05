import React, { useEffect, useState } from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  LineChart, Line
} from 'recharts';
import { 
  Radar, Flame, Zap, Orbit, Crosshair, ShieldAlert,
  Factory, Wrench, Activity, CheckCircle, Volume2
} from 'lucide-react';
import './App.css';

// Chart Data
const droneData = [
  { metric: 'W. Optimal', old: 10000, new: 61538 },
  { metric: 'W. Target', old: 41000, new: 80000 },
  { metric: 'W. Chase', old: 20000, new: 80000 },
  { metric: 'S. Optimal', old: 61538, new: 25000 },
  { metric: 'S. Target', old: 80000, new: 45000 },
  { metric: 'S. Chase', old: 80000, new: 25000 },
];

const weaponData = [
  { name: 'T1 Opt', old: 86958, new: 53513 },
  { name: 'T1 Fall', old: 113042, new: 69565 },
  { name: 'T2 Opt', old: 93750, new: 57692 },
  { name: 'T2 Fall', old: 121875, new: 75000 },
  { name: 'T3 Opt', old: 100000, new: 61538 },
  { name: 'T3 Fall', old: 130000, new: 80000 },
  { name: 'Base Turret', old: 20000, new: 80000 },
];

const hullData = [
  { name: 'LAI', old: 78000, new: 62228 },
  { name: 'MCF', old: 79200, new: 59126 },
  { name: 'HAF', old: 82800, new: 72472 },
  { name: 'TADES', old: 151200, new: 99136 },
  { name: 'MAUL', old: 244800, new: 230063 },
];

const moduleData = [
  { name: 'AB II', old: 6, new: 2 },
  { name: 'AB III', old: 210, new: 34 },
  { name: 'AB IV', old: 295, new: 203 },
  { name: 'Attuned III', old: 290, new: 48 },
  { name: 'Attuned IV', old: 295, new: 129 },
  { name: 'Reinf. II', old: 10, new: 8 },
  { name: 'Reinf. III', old: 290, new: 25 },
  { name: 'Reinf. IV', old: 295, new: 80 },
  { name: 'Restorer II', old: 4, new: 8 },
  { name: 'Restorer III', old: 290, new: 38 },
  { name: 'Restorer IV', old: 195, new: 90 },
  { name: 'Bulwark II', old: 10, new: 8 },
  { name: 'Bulwark III', old: 290, new: 44 },
  { name: 'Bulwark IV', old: 295, new: 118 },
  { name: 'Bulky II', old: 10, new: 16 },
  { name: 'Bulky III', old: 290, new: 49 },
  { name: 'Bulky IV', old: 295, new: 94 },
  { name: 'Sys Rest. II', old: 10, new: 15 },
  { name: 'Sys Rest. III', old: 290, new: 56 },
  { name: 'Sys Rest. IV', old: 295, new: 83 },
  { name: 'Coated II', old: 10, new: 15 },
  { name: 'Coated III', old: 290, new: 45 },
  { name: 'Coated IV', old: 295, new: 83 },
  { name: 'Nimble II', old: 10, new: 8 },
  { name: 'Nimble III', old: 290, new: 25 },
  { name: 'Nimble IV', old: 295, new: 80 },
  { name: 'Reactive II', old: 10, new: 16 },
  { name: 'Reactive III', old: 290, new: 45 },
  { name: 'Reactive IV', old: 295, new: 80 },
  { name: 'Cargo II', old: 10, new: 8 },
  { name: 'Cargo III', old: 290, new: 25 },
  { name: 'Cargo IV', old: 295, new: 80 },
  { name: 'Cargo V', old: 1265, new: 250 },
  { name: 'Cargo VI', old: 2540, new: 408 },
];

const buildReqData = [
  { name: 'LAI', OldAlloys: 80, NewAlloys: 101, OldCarbon: 70, NewCarbon: 89, OldThermal: 70, NewThermal: 88, OldKernel: 4, NewKernel: 5 },
  { name: 'MCF', OldAlloys: 88, NewAlloys: 123, OldCarbon: 48, NewCarbon: 67, OldThermal: 48, NewThermal: 67, OldKernel: 3, NewKernel: 4 },
  { name: 'HAF', OldAlloys: 160, NewAlloys: 181, OldCarbon: 74, NewCarbon: 84, OldThermal: 74, NewThermal: 83, OldKernel: 0, NewKernel: 0 },
  { name: 'TADES', OldAlloys: 124, NewAlloys: 211, OldCarbon: 72, NewCarbon: 123, OldThermal: 72, NewThermal: 123, OldKernel: 4, NewKernel: 7 },
  { name: 'MAUL', OldAlloys: 460, NewAlloys: 490, OldCarbon: 300, NewCarbon: 320, OldThermal: 300, NewThermal: 310, OldKernel: 0, NewKernel: 0 },
];

const ammoData = [
  { name: 'C Gyro 1(S)', old: 3, new: 6 },
  { name: 'AC Gyro 2(S)', old: 5, new: 10 },
  { name: 'AC Gyro 3(S)', old: 5, new: 10 },
  { name: 'Coil 1(S)', old: 5, new: 10 },
  { name: 'EM Dis(S)', old: 3, new: 8 },
  { name: 'EM Dis(M) Prnt', old: 3, new: 10 },
  { name: 'EM Dis(M) Hvy', old: 3, new: 10 },
  { name: 'Howitzer 1(M)', old: 13, new: 25 },
  { name: 'D1 Fuel', old: 3, new: 8 },
  { name: 'EU-40 Fuel', old: 18, new: 25 },
  { name: 'SOF-40 Fuel', old: 18, new: 25 },
  { name: 'EU-90 Fuel', old: 35, new: 55 },
  { name: 'SOF-80 Fuel', old: 35, new: 55 },
  { name: 'Comp. Coolant', old: 3, new: 10 },
  { name: 'Rapid Plas 1(S)', old: 5, new: 15 },
  { name: 'Rapid Plas 2(S)', old: 5, new: 15 },
];

const plasmaCostData = [
  { name: 'Plas 1(S) PGV', old: 400, new: 360 },
  { name: 'Plas 1(S) TSG', old: 400, new: 360 },
  { name: 'Plas 2(S) PGV', old: 400, new: 360 },
  { name: 'Plas 2(S) TSG', old: 400, new: 360 },
  { name: 'Plas 1(M) TSG', old: 1200, new: 1080 },
  { name: 'Plas 1(M) NIV', old: 1000, new: 900 },
  { name: 'Plas 1(M) Pal', old: 700, new: 630 },
];

const refineryData = [
  { name: 'Nodules (PGV)', old: 60, new: 120 },
  { name: 'Nodules (NIV)', old: 594, new: 1188 },
  { name: 'HSM Ref. (Ice)', old: 200, new: 300 },
  { name: 'HSM Hvy. (Ice)', old: 600, new: 900 },
  { name: 'PPM Ref. (Sil)', old: 10, new: 16 },
  { name: 'PPM Hvy. (Sil)', old: 30, new: 48 },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    // Force Old items to appear before New items in the tooltip
    const sortedPayload = [...payload].sort((a, b) => {
      const isAOld = String(a.name).toLowerCase().includes('old');
      const isBOld = String(b.name).toLowerCase().includes('old');
      if (isAOld && !isBOld) return -1;
      if (!isAOld && isBOld) return 1;
      return 0;
    });

    return (
      <div className="custom-tooltip">
        <p className="tooltip-label">{label}</p>
        {sortedPayload.map((p, index) => (
          <p key={index} style={{ color: p.color, margin: 0, fontSize: '0.85rem' }}>
            {p.name}: {p.value}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

const CustomLegend = ({ payload }) => {
  // Force Old items to appear before New items in the legend
  const sortedPayload = [...payload].sort((a, b) => {
    const isAOld = String(a.value).toLowerCase().includes('old');
    const isBOld = String(b.value).toLowerCase().includes('old');
    if (isAOld && !isBOld) return -1;
    if (!isAOld && isBOld) return 1;
    return 0;
  });

  return (
    <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap', paddingBottom: '10px' }}>
      {sortedPayload.map((entry, index) => (
        <div key={`item-${index}`} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <div style={{ width: '12px', height: '12px', backgroundColor: entry.color, borderRadius: '2px' }}></div>
          <span style={{ color: '#a0a0ab', fontSize: '12px', fontFamily: 'var(--font-heading)' }}>{entry.value}</span>
        </div>
      ))}
    </div>
  );
};

const FeatureCard = ({ icon: Icon, title, description, children, delay, fullWidth }) => (
  <div className={`feature-card ${fullWidth ? 'full-width' : ''}`} style={{ animationDelay: `${delay}ms` }}>
    <div className="feature-icon-wrapper">
      <Icon className="feature-icon" size={28} />
    </div>
    <div className="feature-content">
      <h3>{title}</h3>
      <p>{description}</p>
      {children && <div className="feature-extra">{children}</div>}
    </div>
  </div>
);

function App() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className={`infographic-container ${mounted ? 'mounted' : ''}`}>
      <div className="bg-glow bg-glow-top-right"></div>
      <div className="bg-glow bg-glow-bottom-left"></div>

      <header className="hero-section">
        <div className="hero-date">Update // 2026-05-05</div>
        <h1 className="hero-title">SHROUD OF FEAR</h1>
        <p className="hero-subtitle">
          CYCLE 5 // Active Scanning, Thermal Signatures, Feral Drones & Complete Rebalance
        </p>
      </header>

      {/* CORE SYSTEMS */}
      <h2 className="section-title main-title">Core Systems Overview</h2>
      <div className="content-grid">
        <FeatureCard 
          icon={Radar} 
          title="Active Scanning" 
          description="Press Z to target, Left Click to spool an active scan pulse. Accelerate information gathering at the cost of blooming your own signature. Introduces a targeted 'skillshot' mechanic for future lasers/rockets."
          delay={100}
        />
        <FeatureCard 
          icon={Flame} 
          title="Thermal Signatures" 
          description="A new channel representing heat emitted from ships, structures, and stars. Allows directed gameplay like heat-seeking missiles in future iterations."
          delay={200}
        />
        <FeatureCard 
          icon={Zap} 
          title="EM Signatures" 
          description="Electromagnetic signatures tracking the electrical power used by ships and structures. Fully resolving EM or Thermal gives identical intel to GV signatures."
          delay={300}
        />
      </div>

      <h2 className="section-title main-title mt-5">Universe & Entity Rebalance</h2>
      <div className="content-grid grid-2">
        
        {/* DRONE RANGE CHART */}
        <div className="chart-card">
          <div className="chart-header">
            <Crosshair className="chart-icon" />
            <h3>Feral Drones Combat Roles (km)</h3>
          </div>
          <p className="chart-desc">Wright retuned as long-range Sniper. Shambler retuned as mid-range Bruiser.</p>
          <div className="chart-wrapper">
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={droneData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#2e2e36" vertical={false} />
                <XAxis dataKey="metric" stroke="#a0a0ab" fontSize={12} tickMargin={10} />
                <YAxis stroke="#a0a0ab" fontSize={12} />
                <Tooltip content={<CustomTooltip />} />
                <Legend content={<CustomLegend />} verticalAlign="top" height={36}/>
                <Bar dataKey="old" name="Old Range (km)" fill="#4a4a55" radius={[2, 2, 0, 0]} />
                <Bar dataKey="new" name="New Range (km)" fill="#FF7400" radius={[2, 2, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* WEAPON RANGE CHART */}
        <div className="chart-card">
          <div className="chart-header">
            <ShieldAlert className="chart-icon" />
            <h3>Weapon Engagement Ranges (km)</h3>
          </div>
          <p className="chart-desc">Small Coilguns range reduced (kiting riskier). Base Defense Turret massively buffed to 80km.</p>
          <div className="chart-wrapper">
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={weaponData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#2e2e36" vertical={false} />
                <XAxis dataKey="name" stroke="#a0a0ab" fontSize={12} tickMargin={10} angle={-25} textAnchor="end" height={60} />
                <YAxis stroke="#a0a0ab" fontSize={12} />
                <Tooltip content={<CustomTooltip />} />
                <Legend content={<CustomLegend />} verticalAlign="top" height={36}/>
                <Line type="monotone" dataKey="old" name="Old (km)" stroke="#4a4a55" strokeWidth={2} dot={{ r: 4 }} />
                <Line type="monotone" dataKey="new" name="New (km)" stroke="#FF7400" strokeWidth={3} dot={{ r: 4 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <h2 className="section-title main-title mt-5">Industry Pacing & Economy</h2>
      <div className="content-grid grid-2">
        
        {/* HULL PRODUCTION CHART */}
        <div className="chart-card full-width-chart">
          <div className="chart-header">
            <Factory className="chart-icon" />
            <h3>Frigate Hull Runtimes (Seconds)</h3>
          </div>
          <p className="chart-desc">Runtimes reduced so single hulls don't dominate the critical path. Unit cost remains stable.</p>
          <div className="chart-wrapper">
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={hullData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#2e2e36" vertical={false} />
                <XAxis dataKey="name" stroke="#a0a0ab" fontSize={12} tickMargin={10} />
                <YAxis stroke="#a0a0ab" fontSize={12} />
                <Tooltip content={<CustomTooltip />} />
                <Legend content={<CustomLegend />} verticalAlign="top" height={36}/>
                <Bar dataKey="old" name="Old Runtime (ks)" fill="#4a4a55" radius={[2, 2, 0, 0]} />
                <Bar dataKey="new" name="New Runtime (ks)" fill="#FF7400" radius={[2, 2, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* MODULE FITTING CHART */}
        <div className="chart-card full-width-chart">
          <div className="chart-header">
            <Wrench className="chart-icon" />
            <h3>Module Power Grid (PG) Requirements</h3>
          </div>
          <p className="chart-desc">Massive reductions in PG requirements across Afterburners, Shields, Armor Plates, and Cargo Grids for all tiers.</p>
          <div className="chart-wrapper">
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={moduleData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#2e2e36" vertical={false} />
                <XAxis dataKey="name" stroke="#a0a0ab" fontSize={11} tickMargin={10} angle={-45} textAnchor="end" height={80} />
                <YAxis stroke="#a0a0ab" fontSize={12} />
                <Tooltip content={<CustomTooltip />} />
                <Legend content={<CustomLegend />} verticalAlign="top" height={36}/>
                <Line type="monotone" dataKey="old" name="Old PG" stroke="#4a4a55" strokeWidth={2} dot={{ r: 4 }} />
                <Line type="monotone" dataKey="new" name="New PG" stroke="#FF7400" strokeWidth={3} dot={{ r: 4 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* BUILD REQUIREMENTS CHART */}
        <div className="chart-card full-width-chart">
          <div className="chart-header">
            <Factory className="chart-icon" />
            <h3>Build Requirements Comparison</h3>
          </div>
          <p className="chart-desc">Updated material requirements for hulls. *MAUL components scaled x10 (Packaged to Batched equivalent).</p>
          <div className="chart-wrapper">
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={buildReqData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#2e2e36" vertical={false} />
                <XAxis dataKey="name" stroke="#a0a0ab" fontSize={12} tickMargin={10} />
                <YAxis stroke="#a0a0ab" fontSize={12} />
                <Tooltip content={<CustomTooltip />} />
                <Legend content={<CustomLegend />} verticalAlign="top" height={36}/>
                <Bar dataKey="OldAlloys" name="Old Alloys" stackId="old" fill="#6e9da3" />
                <Bar dataKey="OldThermal" name="Old Thermal" stackId="old" fill="#967b64" />
                <Bar dataKey="OldCarbon" name="Old Carbon" stackId="old" fill="#5c5c5c" />
                <Bar dataKey="OldKernel" name="Old Kernel" stackId="old" fill="#808033" />
                <Bar dataKey="NewAlloys" name="New Alloys" stackId="new" fill="#00e5ff" />
                <Bar dataKey="NewThermal" name="New Thermal" stackId="new" fill="#FF7400" />
                <Bar dataKey="NewCarbon" name="New Carbon" stackId="new" fill="#888899" />
                <Bar dataKey="NewKernel" name="New Kernel" stackId="new" fill="#ffff00" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* AMMO & FUEL RUNTIMES */}
        <div className="chart-card full-width-chart">
          <div className="chart-header">
            <Activity className="chart-icon" />
            <h3>Ammo, Fuel & Coolant Runtimes (Seconds)</h3>
          </div>
          <p className="chart-desc">Runtimes bumped up to a meaningful pacing gate.</p>
          <div className="chart-wrapper">
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={ammoData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#2e2e36" vertical={false} />
                <XAxis dataKey="name" stroke="#a0a0ab" fontSize={11} tickMargin={10} angle={-45} textAnchor="end" height={80} />
                <YAxis stroke="#a0a0ab" fontSize={12} />
                <Tooltip content={<CustomTooltip />} />
                <Legend content={<CustomLegend />} verticalAlign="top" height={36}/>
                <Bar dataKey="old" name="Old Runtime" fill="#4a4a55" radius={[2, 2, 0, 0]} />
                <Bar dataKey="new" name="New Runtime" fill="#FF7400" radius={[2, 2, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* PLASMA COSTS */}
        <div className="chart-card full-width-chart">
          <div className="chart-header">
            <ShieldAlert className="chart-icon" />
            <h3>Plasma Ammo Input Costs</h3>
          </div>
          <p className="chart-desc">Costs reduced by roughly 10%. (Raw HSM x100 replaced by Hydrocarbon Residue x43 in Plas 1(M)).</p>
          <div className="chart-wrapper">
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={plasmaCostData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#2e2e36" vertical={false} />
                <XAxis dataKey="name" stroke="#a0a0ab" fontSize={11} tickMargin={10} angle={-25} textAnchor="end" height={60} />
                <YAxis stroke="#a0a0ab" fontSize={12} />
                <Tooltip content={<CustomTooltip />} />
                <Legend content={<CustomLegend />} verticalAlign="top" height={36}/>
                <Bar dataKey="old" name="Old Cost" fill="#4a4a55" radius={[2, 2, 0, 0]} />
                <Bar dataKey="new" name="New Cost" fill="#FF7400" radius={[2, 2, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* REFINERY SCALING */}
        <div className="chart-card full-width-chart">
          <div className="chart-header">
            <Factory className="chart-icon" />
            <h3>Refining Yields & Scaling</h3>
          </div>
          <p className="chart-desc">Heavy Refinery jobs now produce strictly more per input. Fine Crude yields of Eupraxite/Sophrogon doubled.</p>
          <div className="chart-wrapper">
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={refineryData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#2e2e36" vertical={false} />
                <XAxis dataKey="name" stroke="#a0a0ab" fontSize={11} tickMargin={10} angle={-25} textAnchor="end" height={60} />
                <YAxis stroke="#a0a0ab" fontSize={12} />
                <Tooltip content={<CustomTooltip />} />
                <Legend content={<CustomLegend />} verticalAlign="top" height={36}/>
                <Bar dataKey="old" name="Old Yield" fill="#4a4a55" radius={[2, 2, 0, 0]} />
                <Bar dataKey="new" name="New Yield" fill="#FF7400" radius={[2, 2, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="content-grid mt-5">
        <FeatureCard 
          icon={Orbit} 
          title="Microrift Rebalance" 
          description="Microrifts have been rebalanced: on average more valuable in fuel quantity, but contain less fuel and deplete faster in populated areas. Seek out crude further afield."
        />
        <FeatureCard 
          icon={Activity} 
          title="Resource Yields" 
          description="Fine Young Crude and Fine Old Crude refining yields of Eupraxite and Sophrogon doubled (from 3 to 6 per run). Heavy Refinery scaling efficiency fixed."
        />
        <FeatureCard 
          icon={Volume2} 
          title="Audio Overhaul" 
          description="Distant gunfire is now more audible. Shots that miss produce a flyby effect. Jump drive spooling sounds fixed. Scan sounds adjusted."
        />
      </div>

      <h2 className="section-title main-title mt-5">Notable Defect Fixes</h2>
      <div className="fixes-grid">
        <div className="fix-item">
          <CheckCircle className="fix-icon" size={18} />
          <p>Feral drones polling grid state issues resolved.</p>
        </div>
        <div className="fix-item">
          <CheckCircle className="fix-icon" size={18} />
          <p>Corrected unintended UI reload in CAM view.</p>
        </div>
        <div className="fix-item">
          <CheckCircle className="fix-icon" size={18} />
          <p>Adjusted Show Info windows to correctly display skill-affected values.</p>
        </div>
        <div className="fix-item">
          <CheckCircle className="fix-icon" size={18} />
          <p>Fixed passive scan blips stacking indefinitely.</p>
        </div>
        <div className="fix-item">
          <CheckCircle className="fix-icon" size={18} />
          <p>Improved ordering of Shell and Crown Memories in lists.</p>
        </div>
        <div className="fix-item">
          <CheckCircle className="fix-icon" size={18} />
          <p>Added character name to the frame of the Show Info window.</p>
        </div>
      </div>

    </div>
  );
}

export default App;
