import { useState } from 'react';
import { ArrowSquareOutIcon, CaretDownIcon, CheckCircleIcon, CircleHalfTiltIcon, DotsThreeIcon, GearSixIcon, LockSimpleIcon, ShieldCheckIcon } from '@phosphor-icons/react';
import { CDSButton } from '@ciscodesignsystems/cds-react-button';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuPortal, DropdownMenuContent, DropdownMenuItem } from '@radix-ui/react-dropdown-menu';
import { CDSContainer } from '@ciscodesignsystems/cds-react-container';
import { CDSFlex } from '@ciscodesignsystems/cds-react-flex';
import { CDSFooter } from '@ciscodesignsystems/cds-react-footer';
import { CDSHeading } from '@ciscodesignsystems/cds-react-heading';
import { CDSLink } from '@ciscodesignsystems/cds-react-link';
import { CDSSearch } from '@ciscodesignsystems/cds-react-search';
import { CDSSelect } from '@ciscodesignsystems/cds-react-select';
import { CDSStatusIcon, IcNavUplink } from '@ciscodesignsystems/cds-react-icons';
import { CDSTable, type CDSTableSelection } from '@ciscodesignsystems/cds-react-table';
import { CDSTag } from '@ciscodesignsystems/cds-react-tag';
import { CDSText } from '@ciscodesignsystems/cds-react-text';
import type { ColumnDef } from '@tanstack/react-table';

type AccessType = 'Private' | 'Internet';
type ActionType = 'Allow' | 'Block';
type RuleStatus = 'enabled' | 'disabled';

type AccessRule = {
  id: string;
  order: number;
  ruleName: string;
  access: AccessType;
  action: ActionType;
  sources: string[];
  destinations: string[];
  security: string[];
  hits: number | null;
  status: RuleStatus;
};

const rules: AccessRule[] = [
  { id: '1', order: 1, ruleName: 'Nebula MCP server', access: 'Private', action: 'Allow', sources: ['Any'], destinations: ['Nebula MCP server'], security: ['IPS', 'Web', 'TC'], hits: null, status: 'disabled' },
  { id: '2', order: 2, ruleName: 'Block social media', access: 'Internet', action: 'Block', sources: ['Any'], destinations: ['Social Media'], security: ['Web'], hits: 1204, status: 'enabled' },
  { id: '3', order: 3, ruleName: 'Allow corporate apps', access: 'Private', action: 'Allow', sources: ['Corp Users'], destinations: ['Corp Apps'], security: ['IPS', 'Web'], hits: 8340, status: 'enabled' },
  { id: '4', order: 4, ruleName: 'Guest internet access', access: 'Internet', action: 'Allow', sources: ['Guest'], destinations: ['Any'], security: [], hits: 220, status: 'enabled' },
  { id: '5', order: 5, ruleName: 'Block malware categories', access: 'Internet', action: 'Block', sources: ['Any'], destinations: ['Malware'], security: ['IPS'], hits: 93, status: 'enabled' },
];

const intentOptions = [
  { label: 'Private', value: 'private' },
  { label: 'Internet', value: 'internet' },
];
const objectsOptions = [
  { label: 'Any', value: 'any' },
  { label: 'Corp Apps', value: 'corp-apps' },
];
const securityOptions = [
  { label: 'IPS', value: 'ips' },
  { label: 'Web', value: 'web' },
  { label: 'Tenant Control', value: 'tc' },
];
const hitsOptions = [
  { label: '> 0', value: '0' },
  { label: '> 100', value: '100' },
  { label: '> 1000', value: '1000' },
];

const columns: ColumnDef<AccessRule>[] = [
  {
    accessorKey: 'order',
    header: () => <CDSText weight="bold">#</CDSText>,
    id: 'order',
    size: 50,
    meta: { align: 'left' },
    enableSorting: false,
  },
  {
    accessorKey: 'ruleName',
    header: () => <CDSText weight="bold">Rule name</CDSText>,
    id: 'ruleName',
    size: 220,
    meta: { align: 'left' },
    cell: (info) => <CDSLink href="#">{info.getValue() as string}</CDSLink>,
  },
  {
    accessorKey: 'access',
    header: () => <CDSText weight="bold">Access</CDSText>,
    id: 'access',
    size: 110,
    meta: { align: 'left' },
    cell: (info) => {
      const access = info.getValue() as AccessType;
      return (
        <span style={{
          display: 'inline-flex',
          alignItems: 'center',
          padding: '1px 8px',
          borderRadius: 14,
          fontSize: 12,
          fontWeight: 600,
          background: access === 'Internet' ? '#cceee7' : '#efe6f7',
          color: 'var(--base-text-default)',
          whiteSpace: 'nowrap',
        }}>
          {access}
        </span>
      );
    },
  },
  {
    accessorKey: 'action',
    header: () => <CDSText weight="bold">Action</CDSText>,
    id: 'action',
    size: 100,
    meta: { align: 'left' },
    cell: (info) => {
      const action = info.getValue() as ActionType;
      return (
        <CDSFlex gap="sm" align="center">
          {action === 'Allow'
            ? <CheckCircleIcon size={16} color="#45991f" weight="regular" />
            : (
              <span style={{ position: 'relative', width: 16, height: 16, display: 'inline-flex' }}>
                <CircleHalfTiltIcon size={16} color="#cc2d37" weight="fill" style={{ position: 'absolute', opacity: 0.3 }} />
                <CircleHalfTiltIcon size={16} color="#cc2d37" weight="regular" style={{ position: 'absolute' }} />
              </span>
            )}
          <CDSText>{action}</CDSText>
        </CDSFlex>
      );
    },
  },
  {
    accessorKey: 'sources',
    header: () => <CDSText weight="bold">Sources</CDSText>,
    id: 'sources',
    meta: { align: 'left' },
    cell: (info) => {
      const sources = info.getValue() as string[];
      return (
        <CDSFlex gap="xxs" wrap>
          {sources.map((s) => <CDSTag key={s} size="sm" sentiment="neutral">{s}</CDSTag>)}
        </CDSFlex>
      );
    },
  },
  {
    accessorKey: 'destinations',
    header: () => <CDSText weight="bold">Destinations</CDSText>,
    id: 'destinations',
    meta: { align: 'left' },
    cell: (info) => {
      const dests = info.getValue() as string[];
      return (
        <CDSFlex gap="xxs" wrap>
          {dests.map((d) => <CDSTag key={d} size="sm" sentiment="neutral">{d}</CDSTag>)}
        </CDSFlex>
      );
    },
  },
  {
    accessorKey: 'security',
    header: () => <CDSText weight="bold">Security</CDSText>,
    id: 'security',
    size: 130,
    meta: { align: 'left' },
    cell: (info) => {
      const security = info.getValue() as string[];
      return (
        <CDSFlex gap="xs" align="center">
          <ShieldCheckIcon size={16} />
          <IcNavUplink width={20} height={20} />
          <LockSimpleIcon size={16} />
        </CDSFlex>
      );
    },
  },
  {
    accessorKey: 'hits',
    header: () => <CDSText weight="bold">Hits</CDSText>,
    id: 'hits',
    size: 70,
    meta: { align: 'right' },
    cell: (info) => {
      const hits = info.getValue() as number | null;
      return <CDSText size="p4">{hits !== null ? hits.toLocaleString() : '–'}</CDSText>;
    },
  },
  {
    accessorKey: 'status',
    header: () => <CDSText weight="bold">Status</CDSText>,
    id: 'status',
    size: 80,
    meta: { align: 'left' },
    cell: (info) => {
      const s = info.getValue() as RuleStatus;
      return s === 'enabled'
        ? <CDSStatusIcon status="positive" size={16} />
        : <CDSStatusIcon status="dormant" size={16} />;
    },
  },
  {
    id: 'actions',
    header: () => <GearSixIcon size={16} />,
    size: 50,
    meta: { align: 'right' },
    enableSorting: false,
    cell: () => (
      <CDSButton variant="ghost" size="sm" title="More options" icon={<DotsThreeIcon size={16} />} />
    ),
  },
];

type AccessPolicyPageProps = {
  onAddPrivateRule?: () => void;
};

export const AccessPolicyPage = ({ onAddPrivateRule }: AccessPolicyPageProps) => {
  const [selectedRows, setSelectedRows] = useState<CDSTableSelection>({});
  const [tableData, setTableData] = useState(rules);

  return (
    <CDSFlex direction="vertical" gap={24} margin={24}>

      {/* Page header */}
      <CDSFlex justify="space-between" align="flex-start">
        <CDSFlex direction="vertical" gap={8}>
          <CDSHeading size="primary">Access Policy</CDSHeading>
          <CDSFlex direction="vertical" gap={4} style={{ maxWidth: 600 }}>
            <CDSText size="p4" color="light">
              Internet access rules apply to traffic to public internet sites from devices that are on
              your network or that your organization manages. Private access rules apply to users and
              devices accessing applications and other resources on your internal network. Secure
              Access applies the first rule in the list that matches traffic.{' '}
              <CDSLink href="#" target="_blank">
                <CDSFlex as="span" align="center" gap="xxs" style={{ display: 'inline-flex' }}>
                  Help <ArrowSquareOutIcon size={14} />
                </CDSFlex>
              </CDSLink>
            </CDSText>
          </CDSFlex>
        </CDSFlex>
        <CDSButton sentiment="interact" variant="secondary" style={{ whiteSpace: 'nowrap', flexShrink: 0 }}>
          Rule Defaults and Global Settings
        </CDSButton>
      </CDSFlex>

      {/* Filter bar */}
      <CDSFlex gap="sm" align="center" wrap>
        <CDSSearch.Simple placeholder="Search" style={{ width: 280 }} />
        <CDSSelect placeholder="Intent" options={intentOptions} />
        <CDSSelect placeholder="Objects" options={objectsOptions} />
        <CDSSelect placeholder="Security" options={securityOptions} />
        <CDSSelect placeholder="Hits" options={hitsOptions} />
      </CDSFlex>

      {/* Access Rules table */}
      <CDSFlex direction="vertical" gap={12}>
        {/* Buttons row — stays outside the container */}
        <CDSFlex justify="flex-end" align="center" gap="sm">
          <CDSLink href="#">Policy versions</CDSLink>
          <CDSButton sentiment="interact" variant="secondary">Customize view</CDSButton>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <CDSButton sentiment="interact" rightIcon={<CaretDownIcon size={14} />}>Add rule</CDSButton>
            </DropdownMenuTrigger>
            <DropdownMenuPortal>
              <DropdownMenuContent
                sideOffset={4}
                style={{
                  width: 300,
                  background: '#ffffff',
                  border: '1px solid #c8cdd3',
                  borderRadius: 6,
                  boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
                  padding: '4px 0',
                  zIndex: 9999,
                }}
              >
                <style>{`.add-rule-item[data-highlighted]{background:#cce1ff;outline:none;}`}</style>
                <DropdownMenuItem
                  className="add-rule-item"
                  onSelect={() => onAddPrivateRule?.()}
                  style={{ outline: 'none', cursor: 'pointer', padding: '8px 12px', borderRadius: 4 }}
                >
                  <CDSFlex direction="vertical" gap={4}>
                    <CDSText weight="semi-bold">Private Access</CDSText>
                    <CDSText size="p4" color="light">Control and secure access to resources and applications that cannot be accessed by the general public.</CDSText>
                  </CDSFlex>
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="add-rule-item"
                  onSelect={() => {}}
                  style={{ outline: 'none', cursor: 'pointer', padding: '8px 12px', borderRadius: 4 }}
                >
                  <CDSFlex direction="vertical" gap={4}>
                    <CDSText weight="semi-bold">Internet Access</CDSText>
                    <CDSText size="p4" color="light">Control and secure access to public destinations from within your network and from managed devices.</CDSText>
                  </CDSFlex>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenuPortal>
          </DropdownMenu>
        </CDSFlex>

        {/* White container with title + tag + table */}
        <CDSContainer>
          <style>{`
            .access-policy-table td, .access-policy-table th {
              height: 45px !important;
              vertical-align: middle !important;
            }
          `}</style>
          <CDSFlex gap="sm" align="center" style={{ padding: '12px 16px 24px' }}>
            <CDSHeading size="section">Access Rules</CDSHeading>
            <CDSTag size="sm" sentiment="positive">Rules: {rules.length}</CDSTag>
          </CDSFlex>
          <div className="access-policy-table">
            <CDSTable
              columns={columns}
              data={tableData}
              density="compact"
              enableReorderRows
              onReorderRow={(from, to) => {
                const updated = [...tableData];
                const [moved] = updated.splice(from, 1);
                updated.splice(to, 0, moved);
                setTableData(updated);
              }}
              rowSelection={selectedRows}
              onRowSelectionChange={setSelectedRows}
              pagination
              paginationConfig={{ pageSize: 10, pageSizeOptions: [10, 20, 50], showPageSizeChanger: true }}
            />
          </div>
        </CDSContainer>
      </CDSFlex>

      <CDSFooter brandName="Cisco Systems, Inc." />
    </CDSFlex>
  );
};
