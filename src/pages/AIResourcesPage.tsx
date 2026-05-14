import { DotsThreeIcon, GearIcon, ArrowClockwiseIcon } from '@phosphor-icons/react';
import { CDSButton } from '@ciscodesignsystems/cds-react-button';
import { CDSCard } from '@ciscodesignsystems/cds-react-card';
import { CDSContainer } from '@ciscodesignsystems/cds-react-container';
import { CDSFlex } from '@ciscodesignsystems/cds-react-flex';
import { CDSFooter } from '@ciscodesignsystems/cds-react-footer';
import { CDSHeading } from '@ciscodesignsystems/cds-react-heading';
import { CDSLink } from '@ciscodesignsystems/cds-react-link';
import { CDSSearch } from '@ciscodesignsystems/cds-react-search';
import { CDSSelect } from '@ciscodesignsystems/cds-react-select';
import { CDSStatusIcon } from '@ciscodesignsystems/cds-react-icons';
import { CDSTable } from '@ciscodesignsystems/cds-react-table';
import { CDSTag } from '@ciscodesignsystems/cds-react-tag';
import { CDSText } from '@ciscodesignsystems/cds-react-text';
import type { ColumnDef } from '@tanstack/react-table';

type ConnectionStatus = 'active' | 'inactive' | 'probing';
type AuthType = 'Bearer token' | 'Basic' | 'None' | 'Client secret';

type MCPServer = {
  id: string;
  name: string;
  url: string;
  connectionStatus: ConnectionStatus;
  destinationType: string;
  authType: AuthType;
  accessRules: number;
  toolRules: number;
  availableTools: number | null;
};

const connectionStatusStyle = (status: ConnectionStatus): { bg: string; color: string; dot: string; label: string } => {
  switch (status) {
    case 'active':   return { bg: '#D9F4FF', color: '#1d69cc', dot: '#1d69cc', label: 'Active' };
    case 'inactive': return { bg: '#e1e4e8', color: '#596069', dot: '#6f7680', label: 'Inactive' };
    case 'probing':  return { bg: '#F3EBFF', color: '#864AE0', dot: '#864AE0', label: 'Probing' };
  }
};

const mcpServers: MCPServer[] = [
  { id: '1', name: 'Nebula MCP server', url: 'https://nebula.com/mcp-server', connectionStatus: 'active', destinationType: 'Private', authType: 'Bearer token', accessRules: 1, toolRules: 1, availableTools: 200 },
  { id: '2', name: 'Grafana MCP server', url: 'https://grafana.com/mcp-server', connectionStatus: 'inactive', destinationType: 'Private', authType: 'Basic', accessRules: 0, toolRules: 0, availableTools: null },
  { id: '3', name: 'Mongo', url: 'https://mongo.com/-mcp-server', connectionStatus: 'probing', destinationType: 'Private', authType: 'None', accessRules: 1, toolRules: 0, availableTools: 34 },
  { id: '4', name: 'Figma', url: 'https://figma.com/mcp-server', connectionStatus: 'active', destinationType: 'Private', authType: 'Bearer token', accessRules: 0, toolRules: 0, availableTools: 96 },
  { id: '5', name: 'Notes-Repo', url: 'https://notes-repo.com/mcp-server', connectionStatus: 'active', destinationType: 'Private', authType: 'Client secret', accessRules: 0, toolRules: 0, availableTools: null },
  { id: '6', name: 'Serevena MCP Server', url: 'https://serevena.com/mcp-server', connectionStatus: 'active', destinationType: 'Private', authType: 'Basic', accessRules: 1, toolRules: 1, availableTools: 87 },
  { id: '7', name: 'CloudSync Logbook', url: 'https://cloudsync.logbook.com/mcp-server', connectionStatus: 'inactive', destinationType: 'Private', authType: 'None', accessRules: 0, toolRules: 0, availableTools: 24 },
  { id: '8', name: 'AI force server', url: 'https://aiforce.com/mcp-server', connectionStatus: 'active', destinationType: 'Private', authType: 'Client secret', accessRules: 0, toolRules: 1, availableTools: 116 },
];

const totalServers = 62;
const activeServers = 48;
const inactiveServers = 21;

const connectionStatusOptions = [
  { label: 'Active', value: 'active' },
  { label: 'Inactive', value: 'inactive' },
  { label: 'Probing', value: 'probing' },
];

const destinationTypeOptions = [
  { label: 'Private', value: 'private' },
  { label: 'Public', value: 'public' },
];

const authTypeOptions = [
  { label: 'Bearer token', value: 'bearer' },
  { label: 'Basic', value: 'basic' },
  { label: 'None', value: 'none' },
  { label: 'Client secret', value: 'client-secret' },
];

const columns: ColumnDef<MCPServer>[] = [
  {
    accessorKey: 'name',
    header: () => <CDSText weight="bold">Name</CDSText>,
    id: 'name',
    size: 400,
    meta: { align: 'left' },
    cell: (info) => {
      const row = info.row.original;
      return (
        <CDSFlex direction="vertical" gap={2}>
          <CDSLink href="#">{row.name}</CDSLink>
          <CDSText size="p4" color="light">{row.url}</CDSText>
        </CDSFlex>
      );
    },
  },
  {
    accessorKey: 'connectionStatus',
    header: () => <CDSText weight="bold">Connection status</CDSText>,
    id: 'connectionStatus',
    size: 220,
    meta: { align: 'left' },
    cell: (info) => {
      const status = info.getValue() as ConnectionStatus;
      const s = connectionStatusStyle(status);
      return (
        <span style={{
          display: 'inline-flex', alignItems: 'center', gap: 6,
          background: s.bg, color: s.color,
          borderRadius: 14, padding: '3px 10px',
          fontSize: 12, fontWeight: 600, whiteSpace: 'nowrap',
        }}>
          <span style={{ width: 8, height: 8, borderRadius: '50%', background: s.dot, flexShrink: 0 }} />
          {s.label}
        </span>
      );
    },
  },
  {
    accessorKey: 'destinationType',
    header: () => <CDSText weight="bold">Destination type</CDSText>,
    id: 'destinationType',
    meta: { align: 'left' },
  },
  {
    accessorKey: 'authType',
    header: () => <CDSText weight="bold">Auth type</CDSText>,
    id: 'authType',
    meta: { align: 'left' },
  },
  {
    id: 'associatedRules',
    header: () => <CDSText weight="bold">Associated rules</CDSText>,
    meta: { align: 'left' },
    cell: (info) => {
      const { accessRules, toolRules } = info.row.original;
      const rules: string[] = [];
      if (accessRules > 0) rules.push(`${accessRules} access rule`);
      if (toolRules > 0) rules.push(`${toolRules} tool rule`);
      if (rules.length === 0) return <CDSText>—</CDSText>;
      return (
        <CDSFlex direction="vertical" gap={2}>
          {rules.map((r) => <CDSText size="p4" key={r}>{r}</CDSText>)}
        </CDSFlex>
      );
    },
  },
  {
    accessorKey: 'availableTools',
    header: () => <CDSText weight="bold">Available tools</CDSText>,
    id: 'availableTools',
    meta: { align: 'left' },
    cell: (info) => {
      const tools = info.getValue() as number | null;
      return <CDSText>{tools !== null ? tools : '—'}</CDSText>;
    },
  },
  {
    id: 'actions',
    header: () => <GearIcon size={16} />,
    meta: { align: 'right' },
    cell: () => (
      <CDSButton variant="ghost" size="sm" title="More options" icon={<DotsThreeIcon size={16} />} />
    ),
    enableSorting: false,
  },
];

export const AIResourcesPage = () => {
  return (
    <CDSFlex direction="vertical" gap={24} margin={24}>
      {/* Page title */}
      <CDSFlex direction="vertical" gap={4}>
        <CDSHeading size="primary">AI Resources</CDSHeading>
        <CDSFlex gap="xxs" align="center">
          <CDSText size="p4" color="light">
            Manage all your Model Context Protocol servers and add policies for each of them.
          </CDSText>
          <CDSLink href="#" target="_blank" size="sm">Help</CDSLink>
        </CDSFlex>
      </CDSFlex>

      {/* Connection status summary */}
      <CDSCard>
        <CDSFlex direction="vertical" gap={8}>
          <CDSText weight="bold" style={{ fontSize: 16, lineHeight: '22px', color: '#373c42' }}>Connection status</CDSText>
          <CDSFlex gap={8}>
            {([
              { value: totalServers, label: 'Total servers' },
              { value: activeServers, label: 'Active' },
              { value: inactiveServers, label: 'Inactive' },
            ]).map(({ value, label }) => (
              <div key={label} style={{ flex: 1, background: '#f7f7f7', borderRadius: 6, padding: '4px 8px' }}>
                <CDSText weight="bold" style={{ fontSize: 18, lineHeight: '24px', display: 'block' }}>{value}</CDSText>
                <CDSText size="p4" weight="semi-bold" style={{ fontSize: 12 }}>{label}</CDSText>
              </div>
            ))}
          </CDSFlex>
        </CDSFlex>
      </CDSCard>

      {/* MCP Servers table section */}
      <div style={{ background: '#fff', border: '1px solid #e1e4e8', borderRadius: 12, padding: '24px', boxShadow: '0 3px 8px rgba(0,0,0,0.08)' }}>
        <CDSFlex direction="vertical" gap={16}>
          {/* Section header */}
          <CDSFlex justify="space-between" align="center">
            <CDSFlex align="center" gap="xs">
              <CDSHeading size="section">MCP Servers</CDSHeading>
              <CDSLink href="#" onClick={(e: React.MouseEvent) => e.preventDefault()} size="sm">
                <CDSFlex align="center" gap="xxs">
                  Refresh <ArrowClockwiseIcon size={14} />
                </CDSFlex>
              </CDSLink>
            </CDSFlex>
            <CDSButton sentiment="interact">+ Add MCP server</CDSButton>
          </CDSFlex>

          {/* Filter bar */}
          <CDSFlex gap="sm" align="center" wrap>
            <CDSSearch.Simple placeholder="Search" style={{ width: 240 }} />
            <CDSSelect placeholder="Connection status" options={connectionStatusOptions} />
            <CDSSelect placeholder="Destination type" options={destinationTypeOptions} />
            <CDSSelect placeholder="Auth type" options={authTypeOptions} />
            <CDSText size="p4" color="light">{mcpServers.length} results</CDSText>
          </CDSFlex>

          {/* Table */}
          <CDSTable
            columns={columns}
            data={mcpServers}
            density="compact"
            pagination
            paginationConfig={{ pageSize: 10, pageSizeOptions: [10, 20, 50], showPageSizeChanger: true }}
          />
        </CDSFlex>
      </div>

      <CDSFooter brandName="Cisco Systems, Inc." />
    </CDSFlex>
  );
};
