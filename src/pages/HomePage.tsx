import { useState, type ReactNode } from 'react';
import { ArrowSquareOutIcon, ArrowUpIcon, ArrowDownIcon, CaretDownIcon, ClockIcon, WarningCircleIcon } from '@phosphor-icons/react';
import { CDSFlex } from '@ciscodesignsystems/cds-react-flex';
import { CDSFooter } from '@ciscodesignsystems/cds-react-footer';
import { CDSHeading } from '@ciscodesignsystems/cds-react-heading';
import { CDSLink } from '@ciscodesignsystems/cds-react-link';
import { CDSStatusIcon } from '@ciscodesignsystems/cds-react-icons';
import { CDSText } from '@ciscodesignsystems/cds-react-text';

const TimeFilter = ({ label = 'Last 24 Hours' }: { label?: string }) => (
  <div style={{ display: 'inline-flex', alignItems: 'center', gap: 4, border: '1px solid #d0d4d9', borderRadius: 14, padding: '3px 10px', fontSize: 12, color: '#464c54', cursor: 'pointer', background: '#fff', flexShrink: 0 }}>
    <ClockIcon size={12} />
    {label}
    <CaretDownIcon size={10} />
  </div>
);

const SectionCard = ({ children }: { children: ReactNode }) => (
  <div style={{ background: '#fff', border: '1px solid #e1e4e8', borderRadius: 6, padding: '20px 24px' }}>
    {children}
  </div>
);

const SectionDivider = () => (
  <div style={{ borderTop: '1px solid #e1e4e8', margin: '20px 0' }} />
);

const ChartLegendItem = ({ color, label }: { color: string; label: string }) => (
  <CDSFlex align="center" gap="xxs">
    <div style={{ width: 20, height: 2, background: color, flexShrink: 0 }} />
    <CDSText size="p4" color="light">{label}</CDSText>
  </CDSFlex>
);

const TrendBadge = ({ pct, up, suffix = 'vs last period' }: { pct: number; up: boolean; suffix?: string }) => (
  <CDSFlex align="center" gap="xxs">
    {up
      ? <ArrowUpIcon size={11} color="#596069" />
      : <ArrowDownIcon size={11} color="#596069" />}
    <CDSText size="p4" color="light" style={{ fontSize: 11 }}>{pct}% {suffix}</CDSText>
  </CDSFlex>
);

// ---- Usage monitoring bar chart ----

const seriesColors = ['#4a90d9', '#d42e8b', '#f06292', '#5c35cc', '#43a047'];
const seriesLabels = ['Umbrella Roaming Client', 'Client-based ZTNA', 'Client-less ZTNA', 'RAVPN', 'Branch'];

const chartGroups = [
  { time: '12:00', vals: [20, 85, 50, 35, 18] },
  { time: '15:00', vals: [45, 420, 220, 90, 65] },
  { time: '18:00', vals: [50, 360, 190, 80, 55] },
  { time: '21:00', vals: [38, 130, 75, 50, 32] },
  { time: '0:00',  vals: [28, 95, 48, 35, 18] },
  { time: '03:00', vals: [22, 115, 62, 42, 22] },
  { time: '06:00', vals: [32, 72, 42, 30, 18] },
  { time: '09:00', vals: [42, 65, 38, 28, 22] },
];

const VB_W = 600;
const VB_H = 180;
const LEFT = 52;
const RIGHT = 10;
const TOP = 10;
const BOTTOM = 30;
const DATA_W = VB_W - LEFT - RIGHT;
const DATA_H = VB_H - TOP - BOTTOM;
const MAX_GB = 800;
const GROUP_PITCH = DATA_W / chartGroups.length;
const BAR_W = 6;
const BAR_GAP = 1.5;
const CLUSTER_W = seriesColors.length * BAR_W + (seriesColors.length - 1) * BAR_GAP;

const toY = (gb: number) => TOP + DATA_H - gb * (DATA_H / MAX_GB);

const UsageChart = () => {
  const gridGBs = [200, 400, 600, 800];
  return (
    <svg width="100%" viewBox={`0 0 ${VB_W} ${VB_H}`} style={{ display: 'block' }}>
      {gridGBs.map((gb) => (
        <g key={gb}>
          <line x1={LEFT} y1={toY(gb)} x2={VB_W - RIGHT} y2={toY(gb)} stroke="#e1e4e8" strokeWidth={0.5} />
          <text x={LEFT - 4} y={toY(gb) + 4} textAnchor="end" fontSize={9} fill="#889099">{gb} GB</text>
        </g>
      ))}
      <line x1={LEFT} y1={toY(0)} x2={VB_W - RIGHT} y2={toY(0)} stroke="#e1e4e8" strokeWidth={0.5} />
      <text x={LEFT - 4} y={toY(0) + 4} textAnchor="end" fontSize={9} fill="#889099">0 GB</text>
      {chartGroups.map((group, gi) => {
        const groupX = LEFT + gi * GROUP_PITCH + (GROUP_PITCH - CLUSTER_W) / 2;
        return (
          <g key={group.time}>
            {group.vals.map((val, si) => {
              const bx = groupX + si * (BAR_W + BAR_GAP);
              const bh = val * (DATA_H / MAX_GB);
              const by = TOP + DATA_H - bh;
              return <rect key={si} x={bx} y={by} width={BAR_W} height={bh} fill={seriesColors[si]} rx={1} />;
            })}
            <text x={groupX + CLUSTER_W / 2} y={VB_H - 8} textAnchor="middle" fontSize={9} fill="#889099">{group.time}</text>
          </g>
        );
      })}
    </svg>
  );
};

// ---- Reusable SVG line / area chart ----

const chartTimeLabels = ['12:00', '15:00', '18:00', '21:00', '0:00', '03:00', '06:00', '09:00'];

type ChartSeries = { color: string; label: string; data: number[] };

const LC_W = 520, LC_H = 140, LC_L = 44, LC_R = 10, LC_T = 8, LC_B = 22;
const LC_DW = LC_W - LC_L - LC_R;
const LC_DH = LC_H - LC_T - LC_B;

const lcX = (i: number, n: number) => LC_L + (i / (n - 1)) * LC_DW;
const lcY = (v: number, max: number) => LC_T + LC_DH - (v / max) * LC_DH;

const LineChartSvg = ({ series, maxY, showArea = false }: { series: ChartSeries[]; maxY: number; showArea?: boolean }) => {
  const n = chartTimeLabels.length;
  const gridYs = [maxY * 0.25, maxY * 0.5, maxY * 0.75, maxY];
  const fmt = (v: number) => v >= 1000 ? `${Math.round(v / 1000)}k` : `${v}`;

  const pathLine = (data: number[]) =>
    data.map((v, i) => `${i === 0 ? 'M' : 'L'}${lcX(i, n).toFixed(1)} ${lcY(v, maxY).toFixed(1)}`).join(' ');

  const pathArea = (data: number[]) => {
    const pts = data.map((v, i) => `${lcX(i, n).toFixed(1)} ${lcY(v, maxY).toFixed(1)}`).join(' L ');
    const baseY = (LC_T + LC_DH).toFixed(1);
    return `M ${lcX(0, n).toFixed(1)} ${lcY(data[0], maxY).toFixed(1)} L ${pts} L ${lcX(n - 1, n).toFixed(1)} ${baseY} L ${lcX(0, n).toFixed(1)} ${baseY} Z`;
  };

  return (
    <svg width="100%" viewBox={`0 0 ${LC_W} ${LC_H}`} style={{ display: 'block' }}>
      {gridYs.map((g) => (
        <g key={g}>
          <line x1={LC_L} y1={lcY(g, maxY)} x2={LC_W - LC_R} y2={lcY(g, maxY)} stroke="#e1e4e8" strokeWidth={0.5} />
          <text x={LC_L - 4} y={lcY(g, maxY) + 3} textAnchor="end" fontSize={8} fill="#889099">{fmt(g)}</text>
        </g>
      ))}
      {showArea && [...series].reverse().map((s) => (
        <path key={`area-${s.label}`} d={pathArea(s.data)} fill={s.color} opacity={0.15} />
      ))}
      {series.map((s) => (
        <path key={`line-${s.label}`} d={pathLine(s.data)} stroke={s.color} strokeWidth={1.5} fill="none" />
      ))}
      {chartTimeLabels.map((t, i) => (
        <text key={t} x={lcX(i, n)} y={LC_H - 4} textAnchor="middle" fontSize={8} fill="#889099">{t}</text>
      ))}
    </svg>
  );
};

// ---- Reusable top-list side panel ----

type TopListItem = { name: string; count: number; trend?: number; trendUp?: boolean };

const TopListPanel = ({ title, subtitle, items }: { title: string; subtitle?: string; items: TopListItem[] }) => (
  <div style={{ border: '1px solid #e1e4e8', borderRadius: 6, padding: '16px', minWidth: 160, flexShrink: 0 }}>
    <CDSFlex direction="vertical" gap={12}>
      <CDSFlex direction="vertical" gap={2}>
        <CDSText weight="semi-bold" size="p3">{title}</CDSText>
        {subtitle && <CDSText size="p4" color="light">{subtitle}</CDSText>}
      </CDSFlex>
      <CDSFlex direction="vertical" gap={8}>
        {items.map((item) => (
          <CDSFlex key={item.name} justify="space-between" align="center" gap="sm">
            <CDSFlex direction="vertical" gap={0}>
              <CDSLink href="#" style={{ fontSize: 13 }}>{item.name}</CDSLink>
              {item.trend !== undefined && (
                <TrendBadge pct={Math.abs(item.trend)} up={item.trendUp ?? false} suffix="" />
              )}
            </CDSFlex>
            <CDSText size="p4" style={{ flexShrink: 0 }}>{item.count}</CDSText>
          </CDSFlex>
        ))}
      </CDSFlex>
      <CDSLink href="#">
        <CDSFlex as="span" align="center" gap="xxs" style={{ display: 'inline-flex', fontSize: 12 }}>
          View all <ArrowSquareOutIcon size={11} />
        </CDSFlex>
      </CDSLink>
    </CDSFlex>
  </div>
);

// ---- Data ----

const accessEventsChartData: ChartSeries[] = [
  { color: '#1d69cc', label: 'Allowed', data: [8000, 18000, 22000, 14000, 6000, 9000, 12000, 16000] },
  { color: '#cc2d37', label: 'Blocked', data: [3000, 8000, 5000, 4000, 2000, 3500, 4500, 6000] },
];

const ipsChartData: ChartSeries[] = [
  { color: '#cc2d37', label: 'Block', data: [2000, 5000, 4000, 3000, 1000, 2000, 3000, 4000] },
  { color: '#f5a623', label: 'Ignore', data: [1000, 3000, 2000, 1500, 800, 1200, 2000, 2500] },
  { color: '#4a90d9', label: 'Log Only', data: [500, 2000, 1500, 1000, 500, 800, 1000, 1500] },
];

const policyHitItems = [
  { label: 'Internet bound rules', count: 10, trend: 1, trendUp: false },
  { label: 'Private access rules', count: 20, trend: 15, trendUp: true },
  { label: 'Data Loss Prevention', count: 30, trend: 2, trendUp: false },
];

const topAttackersItems: TopListItem[] = [
  { name: '192.168.1.105', count: 30, trend: 12, trendUp: true },
  { name: '10.0.0.42', count: 20, trend: 5, trendUp: false },
  { name: '172.16.0.8', count: 10, trend: 3, trendUp: false },
];

const topTargetsItems: TopListItem[] = [
  { name: 'Jira', count: 42, trend: 8, trendUp: true },
  { name: 'Miro', count: 28, trend: 2, trendUp: false },
  { name: 'Internal Servers', count: 15, trend: 5, trendUp: true },
];

const usersChartData: ChartSeries[] = [
  { color: '#1d69cc', label: 'VPN connection events', data: [5000, 15000, 20000, 12000, 4000, 8000, 10000, 14000] },
  { color: '#d42e8b', label: 'ZTNA authorization events', data: [3000, 10000, 15000, 9000, 3000, 6000, 8000, 11000] },
];

const topUsersItems: TopListItem[] = [
  { name: 'Joes-iPad-4', count: 30 },
  { name: 'Danchu-Xbox', count: 28 },
  { name: 'Jo-Ann-iPhone', count: 25 },
  { name: 'Biscuit-iPhone', count: 20 },
  { name: 'Joes-MacBook-Pro', count: 15 },
];

const privateChartData: ChartSeries[] = [
  { color: '#1d69cc', label: 'VPN resources accessed', data: [8, 15, 18, 12, 5, 9, 11, 14] },
  { color: '#d42e8b', label: 'Client-based ZTNA', data: [6, 12, 16, 10, 4, 7, 9, 12] },
  { color: '#43a047', label: 'Clientless ZTNA', data: [3, 7, 9, 6, 2, 4, 5, 7] },
];

const topResourcesItems: TopListItem[] = [
  { name: 'SQL Server', count: 0, trend: 1, trendUp: false },
  { name: 'Contractors ERP', count: 0, trend: 15, trendUp: false },
  { name: 'Atlassian Tools', count: 0, trend: 2, trendUp: false },
];

// ---- Page ----

export const HomePage = () => {
  const [legendSelected, setLegendSelected] = useState(() => Object.fromEntries(seriesLabels.map((l) => [l, true])));
  const allSelected = seriesLabels.every((l) => legendSelected[l]);

  const toggleLegend = (label: string) => setLegendSelected((prev) => ({ ...prev, [label]: !prev[label] }));
  const toggleAll = () => {
    const next = !allSelected;
    setLegendSelected(Object.fromEntries(seriesLabels.map((l) => [l, next])));
  };

  return (
    <CDSFlex direction="vertical" gap={24} margin={24}>

      {/* Page title */}
      <CDSFlex direction="vertical" gap={4}>
        <CDSFlex align="center" gap="sm">
          <CDSHeading size="primary">Overview</CDSHeading>
          <TimeFilter />
        </CDSFlex>
        <CDSText size="p4" color="light">
          The Overview dashboard displays status, usage, and health metrics. Use this information
          to address security threats and monitor system usage.{' '}
          <CDSLink href="#" target="_blank">
            <CDSFlex as="span" align="center" gap="xxs" style={{ display: 'inline-flex' }}>
              Help <ArrowSquareOutIcon size={12} />
            </CDSFlex>
          </CDSLink>
        </CDSText>
      </CDSFlex>

      {/* Connectivity */}
      <SectionCard>
        <CDSFlex direction="vertical" gap={16}>
          <CDSFlex align="center" gap="sm">
            <CDSHeading size="section">Connectivity</CDSHeading>
            <TimeFilter />
          </CDSFlex>
          <CDSFlex direction="vertical" gap={8}>
            <CDSFlex align="center" gap="xs">
              <CDSText size="p4" color="light">Network tunnels</CDSText>
              <CDSText size="p4" weight="semi-bold">263 total</CDSText>
            </CDSFlex>
            <CDSFlex gap={16}>
              {([
                { count: 1, label: 'Active', status: 'positive' as const },
                { count: 0, label: 'Inactive', status: 'negative' as const },
                { count: 3, label: 'Unestablished', status: 'warning' as const },
              ]).map(({ count, label, status }) => (
                <div key={label} style={{ flex: 1, border: '1px solid #e1e4e8', borderRadius: 6, padding: '14px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#fff' }}>
                  <CDSFlex align="center" gap="sm">
                    <CDSText size="p2" weight="bold" style={{ fontSize: 22 }}>{count}</CDSText>
                    <CDSText size="p4" color="light">{label}</CDSText>
                  </CDSFlex>
                  <CDSStatusIcon status={status} size={20} />
                </div>
              ))}
            </CDSFlex>
          </CDSFlex>
        </CDSFlex>
      </SectionCard>

      {/* Usage Monitoring */}
      <SectionCard>
        <CDSFlex direction="vertical" gap={16}>
          <CDSFlex align="center" gap="sm">
            <CDSHeading size="section">Usage monitoring</CDSHeading>
            <TimeFilter />
          </CDSFlex>
          <CDSFlex direction="vertical" gap={2}>
            <CDSText size="p4" weight="bold" style={{ textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: 11 }}>TOTAL USAGE</CDSText>
            <CDSText size="p4" color="light">Usage data – delayed up to 30 min.</CDSText>
          </CDSFlex>
          <CDSFlex gap={24} align="flex-start">
            {/* Stats */}
            <CDSFlex direction="vertical" gap={20} style={{ flexShrink: 0, width: 180 }}>
              {([
                { value: '765.59 GB', label: 'Total traffic' },
                { value: '265.59 GB', label: 'Sent' },
                { value: '500 GB', label: 'Received' },
              ]).map(({ value, label }) => (
                <CDSFlex direction="vertical" gap={2} key={label}>
                  <CDSFlex align="baseline" gap="xs">
                    <CDSText weight="bold" style={{ fontSize: 20, lineHeight: '26px' }}>{value}</CDSText>
                  </CDSFlex>
                  <CDSText size="p4" color="light">{label}</CDSText>
                  <CDSFlex align="center" gap="xxs">
                    <ArrowUpIcon size={11} color="#596069" />
                    <CDSText size="p4" color="light" style={{ fontSize: 11 }}>390 GB More than last month</CDSText>
                  </CDSFlex>
                </CDSFlex>
              ))}
            </CDSFlex>

            {/* Chart */}
            <div style={{ flex: 1, minWidth: 0 }}>
              <UsageChart />
            </div>

            {/* Legend */}
            <CDSFlex direction="vertical" gap={10} style={{ flexShrink: 0, width: 180 }}>
              {seriesLabels.map((label, i) => (
                <label key={label} style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer' }}>
                  <input
                    type="checkbox"
                    checked={!!legendSelected[label]}
                    onChange={() => toggleLegend(label)}
                    style={{ accentColor: seriesColors[i], width: 14, height: 14, cursor: 'pointer' }}
                  />
                  <div style={{ width: 20, height: 2, background: seriesColors[i], flexShrink: 0 }} />
                  <CDSText size="p4">{label}</CDSText>
                </label>
              ))}
              <label style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer' }}>
                <input
                  type="checkbox"
                  checked={allSelected}
                  onChange={toggleAll}
                  style={{ accentColor: '#1d69cc', width: 14, height: 14, cursor: 'pointer' }}
                />
                <CDSText size="p4">Select all</CDSText>
              </label>
            </CDSFlex>
          </CDSFlex>
        </CDSFlex>
      </SectionCard>

      {/* Security */}
      <SectionCard>
        <CDSFlex direction="vertical" gap={20}>
          <CDSFlex align="center" gap="sm">
            <CDSHeading size="section">Security</CDSHeading>
            <TimeFilter />
          </CDSFlex>

          {/* Access Events */}
          <CDSFlex direction="vertical" gap={12}>
            <CDSText weight="semi-bold" size="p3">Access Events</CDSText>
            <CDSFlex gap={24} align="flex-start">
              {/* Chart + stats */}
              <CDSFlex direction="vertical" gap={12} style={{ flex: 1, minWidth: 0 }}>
                <CDSFlex gap={32}>
                  {([
                    { label: 'REQUESTS', value: '266.2k', trend: 9, up: false },
                    { label: 'BLOCKS', value: '266.2k', trend: 9, up: false },
                  ]).map(({ label, value, trend, up }) => (
                    <CDSFlex direction="vertical" gap={2} key={label}>
                      <CDSText size="p4" style={{ textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: 10, color: '#889099' }}>{label}</CDSText>
                      <CDSText weight="bold" style={{ fontSize: 20, lineHeight: '26px' }}>{value}</CDSText>
                      <TrendBadge pct={trend} up={up} suffix="" />
                    </CDSFlex>
                  ))}
                </CDSFlex>
                <LineChartSvg series={accessEventsChartData} maxY={25000} />
                <CDSFlex gap={16} wrap>
                  {accessEventsChartData.map((s) => (
                    <ChartLegendItem key={s.label} color={s.color} label={s.label} />
                  ))}
                </CDSFlex>
              </CDSFlex>

              {/* Policy hit count panel */}
              <div style={{ border: '1px solid #e1e4e8', borderRadius: 6, padding: '16px', width: 200, flexShrink: 0 }}>
                <CDSFlex direction="vertical" gap={16}>
                  <CDSText weight="semi-bold" size="p3">Policy hit count</CDSText>
                  <CDSFlex direction="vertical" gap={16}>
                    {policyHitItems.map((item) => (
                      <CDSFlex key={item.label} direction="vertical" gap={2}>
                        <CDSText weight="bold" style={{ fontSize: 20, lineHeight: '26px' }}>{item.count}</CDSText>
                        <CDSText size="p4" color="light">{item.label}</CDSText>
                        <TrendBadge pct={item.trend} up={item.trendUp} suffix="" />
                      </CDSFlex>
                    ))}
                  </CDSFlex>
                  <CDSLink href="#">
                    <CDSFlex as="span" align="center" gap="xxs" style={{ display: 'inline-flex', fontSize: 12 }}>
                      View all <ArrowSquareOutIcon size={11} />
                    </CDSFlex>
                  </CDSLink>
                </CDSFlex>
              </div>
            </CDSFlex>
          </CDSFlex>

          <SectionDivider />

          {/* IPS Events */}
          <CDSFlex direction="vertical" gap={12}>
            <CDSText weight="semi-bold" size="p3">IPS Events</CDSText>
            <CDSFlex gap={24} align="flex-start">
              {/* Area chart */}
              <CDSFlex direction="vertical" gap={12} style={{ flex: 1, minWidth: 0 }}>
                <CDSFlex direction="vertical" gap={2}>
                  <CDSText size="p4" style={{ textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: 10, color: '#889099' }}>TOTAL SIGNATURE EVENTS</CDSText>
                  <CDSFlex align="center" gap="sm">
                    <CDSText weight="bold" style={{ fontSize: 20, lineHeight: '26px' }}>266.2k</CDSText>
                    <TrendBadge pct={9} up={false} suffix="" />
                  </CDSFlex>
                </CDSFlex>
                <LineChartSvg series={ipsChartData} maxY={6000} showArea />
                <CDSFlex gap={16} wrap>
                  {ipsChartData.map((s) => (
                    <ChartLegendItem key={s.label} color={s.color} label={s.label} />
                  ))}
                </CDSFlex>
              </CDSFlex>

              {/* Top attackers + top targets */}
              <CDSFlex gap={16}>
                <TopListPanel title="Top attackers" items={topAttackersItems} />
                <TopListPanel title="Top targets" items={topTargetsItems} />
              </CDSFlex>
            </CDSFlex>
          </CDSFlex>
        </CDSFlex>
      </SectionCard>

      {/* Users and Groups */}
      <SectionCard>
        <CDSFlex direction="vertical" gap={16}>
          <CDSFlex align="center" gap="sm">
            <CDSHeading size="section">Users and Groups</CDSHeading>
            <TimeFilter />
          </CDSFlex>

          {/* Alert banner */}
          <div style={{ background: '#f0eaf7', border: '1px solid #b39ddb', borderRadius: 6, padding: '10px 14px' }}>
            <CDSFlex align="center" gap="sm">
              <WarningCircleIcon size={16} color="#7c3aed" style={{ flexShrink: 0 }} />
              <CDSText size="p4">
                You have 5/7 expired certificates. To upgrade your network please check{' '}
                <CDSLink href="#">Certificate Management</CDSLink>.
              </CDSText>
            </CDSFlex>
          </div>

          <CDSFlex gap={20} align="flex-start">
            {/* Events chart */}
            <div style={{ flex: 1, minWidth: 0, border: '1px solid #e1e4e8', borderRadius: 6, padding: '16px' }}>
              <CDSFlex direction="vertical" gap={12}>
                <CDSFlex gap={32}>
                  {([
                    { label: 'VPN CONNECTION EVENTS', value: '266.2k', color: '#1d69cc' },
                    { label: 'ZTNA AUTHORIZATION EVENTS', value: '266.2k', color: '#d42e8b' },
                  ]).map(({ label, value, color }) => (
                    <CDSFlex direction="vertical" gap={2} key={label}>
                      <CDSText size="p4" style={{ textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: 10, color: '#889099' }}>{label}</CDSText>
                      <CDSText weight="bold" style={{ fontSize: 20, lineHeight: '26px', color }}>{value}</CDSText>
                    </CDSFlex>
                  ))}
                </CDSFlex>
                <LineChartSvg series={usersChartData} maxY={22000} />
                <CDSFlex gap={16} wrap>
                  {usersChartData.map((s) => (
                    <ChartLegendItem key={s.label} color={s.color} label={s.label} />
                  ))}
                </CDSFlex>
              </CDSFlex>
            </div>

            {/* Top 5 users */}
            <div style={{ border: '1px solid #e1e4e8', borderRadius: 6, padding: '16px', width: 220, flexShrink: 0 }}>
              <CDSFlex direction="vertical" gap={12}>
                <CDSFlex direction="vertical" gap={2}>
                  <CDSText weight="semi-bold" size="p3">Top 5 Users</CDSText>
                  <CDSText size="p4" color="light">Created requests</CDSText>
                </CDSFlex>
                <CDSFlex direction="vertical" gap={10}>
                  {topUsersItems.map((user) => (
                    <CDSFlex key={user.name} justify="space-between" align="center">
                      <CDSLink href="#" style={{ fontSize: 13 }}>{user.name}</CDSLink>
                      <CDSText size="p4" style={{ flexShrink: 0 }}>{user.count}</CDSText>
                    </CDSFlex>
                  ))}
                </CDSFlex>
                <CDSLink href="#">
                  <CDSFlex as="span" align="center" gap="xxs" style={{ display: 'inline-flex', fontSize: 12 }}>
                    View all <ArrowSquareOutIcon size={11} />
                  </CDSFlex>
                </CDSLink>
              </CDSFlex>
            </div>
          </CDSFlex>
        </CDSFlex>
      </SectionCard>

      {/* Private Resources */}
      <SectionCard>
        <CDSFlex direction="vertical" gap={16}>
          <CDSFlex justify="space-between" align="center">
            <CDSFlex align="center" gap="sm">
              <CDSHeading size="section">Private Resources</CDSHeading>
              <TimeFilter />
            </CDSFlex>
            <CDSLink href="#">
              <CDSFlex as="span" align="center" gap="xxs" style={{ display: 'inline-flex', fontSize: 13 }}>
                Activity Search <ArrowSquareOutIcon size={12} />
              </CDSFlex>
            </CDSLink>
          </CDSFlex>

          {/* Total hits + status tiles */}
          <CDSFlex direction="vertical" gap={8}>
            <CDSFlex align="center" gap="xs">
              <CDSText size="p4" color="light">Total hits</CDSText>
              <CDSText size="p4" weight="semi-bold">44 total</CDSText>
            </CDSFlex>
            <CDSFlex gap={16}>
              {([
                { count: 8, label: 'Allowed', status: 'positive' as const },
                { count: 36, label: 'Blocked', status: 'negative' as const },
              ]).map(({ count, label, status }) => (
                <div key={label} style={{ flex: 1, border: '1px solid #e1e4e8', borderRadius: 6, padding: '14px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#fff' }}>
                  <CDSFlex align="center" gap="sm">
                    <CDSText size="p2" weight="bold" style={{ fontSize: 22 }}>{count}</CDSText>
                    <CDSText size="p4" color="light">{label}</CDSText>
                  </CDSFlex>
                  <CDSStatusIcon status={status} size={20} />
                </div>
              ))}
            </CDSFlex>
          </CDSFlex>

          {/* Stats row */}
          <CDSFlex gap={16}>
            {([
              { value: '2/6 total', label: 'Applications accessed', trend: 1, trendUp: true, suffix: 'yesterday' },
              { value: '100%', label: 'Unique user identities accessed', trend: 1, trendUp: true, suffix: 'yesterday' },
            ]).map(({ value, label, trend, trendUp, suffix }) => (
              <div key={label} style={{ flex: 1, border: '1px solid #e1e4e8', borderRadius: 6, padding: '14px 20px' }}>
                <CDSFlex direction="vertical" gap={2}>
                  <CDSText weight="bold" style={{ fontSize: 20, lineHeight: '26px' }}>{value}</CDSText>
                  <CDSText size="p4" color="light">{label}</CDSText>
                  <TrendBadge pct={trend} up={trendUp} suffix={suffix} />
                </CDSFlex>
              </div>
            ))}
          </CDSFlex>

          {/* Chart + top resources */}
          <CDSFlex gap={20} align="flex-start">
            {/* Line chart */}
            <div style={{ flex: 1, minWidth: 0, border: '1px solid #e1e4e8', borderRadius: 6, padding: '16px' }}>
              <CDSFlex direction="vertical" gap={12}>
                <CDSFlex gap={24} wrap>
                  {([
                    { label: 'VPN resources accessed', value: 23, color: '#1d69cc' },
                    { label: 'Client-based ZTNA', value: 24, color: '#d42e8b' },
                    { label: 'Clientless ZTNA', value: 12, color: '#43a047' },
                  ]).map(({ label, value, color }) => (
                    <CDSFlex direction="vertical" gap={2} key={label}>
                      <CDSText size="p4" style={{ fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.05em', color: '#889099' }}>{label}</CDSText>
                      <CDSFlex align="center" gap="xs">
                        <CDSText weight="bold" style={{ fontSize: 18, lineHeight: '24px', color }}>{value}</CDSText>
                        <TrendBadge pct={9} up={false} suffix="" />
                      </CDSFlex>
                    </CDSFlex>
                  ))}
                </CDSFlex>
                <LineChartSvg series={privateChartData} maxY={20} />
                <CDSFlex gap={16} wrap>
                  {privateChartData.map((s) => (
                    <ChartLegendItem key={s.label} color={s.color} label={s.label} />
                  ))}
                </CDSFlex>
              </CDSFlex>
            </div>

            {/* Top 3 resources */}
            <TopListPanel title="Top 3 resources accessed" items={topResourcesItems} />
          </CDSFlex>
        </CDSFlex>
      </SectionCard>

      <CDSFooter brandName="Cisco Systems, Inc." />
    </CDSFlex>
  );
};
