import { useState } from 'react';
import {
  BellIcon,
  GearSixIcon,
  UserIcon,
  UsersIcon,
} from '@phosphor-icons/react';
import { CDSButton } from '@ciscodesignsystems/cds-react-button';
import { CDSFlex } from '@ciscodesignsystems/cds-react-flex';
import {
  CDSHeader,
  CDSCustomMenuRoot,
  CDSCustomMenuItem,
  CDSTenantMenuRoot,
  CDSTenantMenuRow,
  CDSTenantMenuDivider,
} from '@ciscodesignsystems/cds-react-header';
import { CiscoLogo } from '@ciscodesignsystems/cds-react-icons';
import { CDSNav, CDSNavMenu } from '@ciscodesignsystems/cds-react-nav';
import { CDSThemeProvider } from '@ciscodesignsystems/cds-react-theme-provider';
import { HomePage } from './pages/HomePage';
import { DashboardPage } from './pages/DashboardPage';
import { AIResourcesPage } from './pages/AIResourcesPage';
import { AccessPolicyPage } from './pages/AccessPolicyPage';
import { AddPrivateAccessRulePage } from './pages/AddPrivateAccessRulePage';

type ThemeOption = {
  label: string;
  theme: 'light' | 'dark' | 'classic-light' | 'classic-dark';
  brand: 'magnetic' | 'magnetic-blue';
};

const themeOptions: ThemeOption[] = [
  { label: 'Magnetic Light', theme: 'light', brand: 'magnetic' },
  { label: 'Magnetic Dark', theme: 'dark', brand: 'magnetic' },
  { label: 'Magnetic Classic Light', theme: 'classic-light', brand: 'magnetic' },
  { label: 'Magnetic Classic Dark', theme: 'classic-dark', brand: 'magnetic' },
  { label: 'Blue Light', theme: 'light', brand: 'magnetic-blue' },
  { label: 'Blue Dark', theme: 'dark', brand: 'magnetic-blue' },
  { label: 'Blue Classic Light', theme: 'classic-light', brand: 'magnetic-blue' },
  { label: 'Blue Classic Dark', theme: 'classic-dark', brand: 'magnetic-blue' },
];

export const App = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState('overview');
  const [currentTheme, setCurrentTheme] = useState<ThemeOption>(themeOptions[0]);

  const nav = (key: string) => () => setSelectedMenu(key);

  return (
    <CDSThemeProvider theme={currentTheme.theme} brand={currentTheme.brand}>
      {/* Header */}
      <div style={{ position: 'sticky', top: 0, zIndex: 200 }}>
        <CDSHeader
          sentiment="inverse"
          title="Secure Access"
          logo={<CiscoLogo size="sm" />}
          logoLink="#"
          logoLinkTarget="_self"
        >
          <CDSCustomMenuRoot icon={<BellIcon size={24} weight="bold" />} aria-label="Notifications">
            <CDSCustomMenuItem>No new notifications</CDSCustomMenuItem>
          </CDSCustomMenuRoot>
          <CDSCustomMenuRoot icon={<GearSixIcon size={24} weight="bold" />} aria-label="Settings">
            {themeOptions.map((opt) => (
              <CDSCustomMenuItem
                key={`${opt.brand}-${opt.theme}`}
                onMouseDown={() => setCurrentTheme(opt)}
                style={{ fontWeight: currentTheme === opt ? 'bold' : 'normal' }}
              >
                {currentTheme === opt ? `\u2713 ${opt.label}` : `\u2003${opt.label}`}
              </CDSCustomMenuItem>
            ))}
          </CDSCustomMenuRoot>
          <CDSTenantMenuRoot sentiment="inverse" switcherType="user" userName="Jane" tenantName="Acme Corp">
            <CDSTenantMenuRow
              leftGutter={<UserIcon color="#707070" weight="regular" size={23} />}
              rightGutter={<CDSButton sentiment="interact" variant="secondary">Logout</CDSButton>}
            >
              <p style={{ margin: 0, textTransform: 'uppercase', fontSize: '12px' }}>Logged in as</p>
              <p style={{ margin: 0, fontSize: '14px', fontWeight: 'bold' }}>Jane Cooper</p>
              <p style={{ margin: 0, fontSize: '14px' }}>jane@acmecorp.com</p>
            </CDSTenantMenuRow>
            <CDSTenantMenuDivider />
            <CDSTenantMenuRow leftGutter={<UsersIcon color="#707070" weight="regular" size={23} />}>
              <p style={{ margin: 0, textTransform: 'uppercase', fontSize: '12px' }}>Organization</p>
              <p style={{ margin: 0, fontSize: '14px', fontWeight: 'bold' }}>Acme Corp</p>
            </CDSTenantMenuRow>
          </CDSTenantMenuRoot>
        </CDSHeader>
      </div>

      {/* Layout: Nav + Content */}
      <div style={{ display: 'grid', gridTemplateColumns: 'min-content 1fr', alignItems: 'start' }}>
        <div style={{ position: 'sticky', top: '56px', height: 'calc(100vh - 56px)', overflowY: 'auto', zIndex: 100 }}>
        <CDSNav
          isCollapsed={isCollapsed}
          setCollapsed={setIsCollapsed}
        >
          <CDSNav.Item icon="overview" isSelected={selectedMenu === 'overview'} onClick={nav('overview')}>
            Overview
          </CDSNav.Item>
          <CDSNav.Item icon="context-visibility" isSelected={selectedMenu === 'experience-insights'} onClick={nav('experience-insights')}>
            Experience Insights
          </CDSNav.Item>
          <CDSNav.Item icon="connect" isSelected={selectedMenu === 'connect'} onClick={nav('connect')}>
            Connect
          </CDSNav.Item>
          <CDSNav.Item
            icon="resources"
            isSelected={selectedMenu.startsWith('resources')}
            menu={
              <CDSNavMenu title="Resources">
                <CDSNavMenu.Section>
                  <CDSNavMenu.Label>Sources and destinations</CDSNavMenu.Label>
                  <CDSNavMenu.Link isSelected={selectedMenu === 'resources-internal-networks'} onClick={nav('resources-internal-networks')}>Internal Networks</CDSNavMenu.Link>
                  <CDSNavMenu.Link isSelected={selectedMenu === 'resources-network-devices'} onClick={nav('resources-network-devices')}>Network Devices</CDSNavMenu.Link>
                  <CDSNavMenu.Link isSelected={selectedMenu === 'resources-registered-networks'} onClick={nav('resources-registered-networks')}>Registered Networks</CDSNavMenu.Link>
                  <CDSNavMenu.Link isSelected={selectedMenu === 'resources-roaming-devices'} onClick={nav('resources-roaming-devices')}>Roaming Devices</CDSNavMenu.Link>
                  <CDSNavMenu.Link isSelected={selectedMenu === 'resources-service-account-exception'} onClick={nav('resources-service-account-exception')}>Service Account Exception</CDSNavMenu.Link>
                  <CDSNavMenu.Link isSelected={selectedMenu === 'resources-security-group-tags'} onClick={nav('resources-security-group-tags')}>Security Group Tags</CDSNavMenu.Link>
                  <CDSNavMenu.Link isSelected={selectedMenu === 'resources-sdwan-service-vpn-ids'} onClick={nav('resources-sdwan-service-vpn-ids')}>SDWAN Service VPN IDs</CDSNavMenu.Link>
                  <CDSNavMenu.Link isSelected={selectedMenu === 'resources-network-and-service-objects'} onClick={nav('resources-network-and-service-objects')}>Network and Service Objects</CDSNavMenu.Link>
                </CDSNavMenu.Section>
                <CDSNavMenu.Section>
                  <CDSNavMenu.Label>Destinations</CDSNavMenu.Label>
                  <CDSNavMenu.Link isSelected={selectedMenu === 'resources-internet-and-saas'} onClick={nav('resources-internet-and-saas')}>Internet and SaaS Resources</CDSNavMenu.Link>
                  <CDSNavMenu.Link isSelected={selectedMenu === 'resources-private-resources'} onClick={nav('resources-private-resources')}>Private Resources</CDSNavMenu.Link>
                  <CDSNavMenu.Link isSelected={selectedMenu === 'resources-ai-resources'} onClick={nav('resources-ai-resources')}>AI Resources</CDSNavMenu.Link>
                  <CDSNavMenu.Link isSelected={selectedMenu === 'resources-application-portal'} onClick={nav('resources-application-portal')}>Application Portal</CDSNavMenu.Link>
                </CDSNavMenu.Section>
                <CDSNavMenu.Section>
                  <CDSNavMenu.Label>Settings</CDSNavMenu.Label>
                  <CDSNavMenu.Link isSelected={selectedMenu === 'resources-aaa-servers'} onClick={nav('resources-aaa-servers')}>AAA Servers</CDSNavMenu.Link>
                  <CDSNavMenu.Link isSelected={selectedMenu === 'resources-dns-servers'} onClick={nav('resources-dns-servers')}>DNS Servers</CDSNavMenu.Link>
                  <CDSNavMenu.Link isSelected={selectedMenu === 'resources-enablement-schedule'} onClick={nav('resources-enablement-schedule')}>Enablement Schedule</CDSNavMenu.Link>
                </CDSNavMenu.Section>
              </CDSNavMenu>
            }
          >
            Resources
          </CDSNav.Item>
          <CDSNav.Item
            icon="security"
            isSelected={selectedMenu.startsWith('secure')}
            menu={
              <CDSNavMenu title="Secure">
                <CDSNavMenu.Section>
                  <CDSNavMenu.Label>Policy</CDSNavMenu.Label>
                  <CDSNavMenu.Link isSelected={selectedMenu === 'secure-access-policy'} onClick={nav('secure-access-policy')}>Access Policy</CDSNavMenu.Link>
                  <CDSNavMenu.Link isSelected={selectedMenu === 'secure-dlp-policy'} onClick={nav('secure-dlp-policy')}>Data Loss Prevention Policy</CDSNavMenu.Link>
                </CDSNavMenu.Section>
                <CDSNavMenu.Section>
                  <CDSNavMenu.Label>Profiles</CDSNavMenu.Label>
                  <CDSNavMenu.Link isSelected={selectedMenu === 'secure-endpoint-posture-profiles'} onClick={nav('secure-endpoint-posture-profiles')}>Endpoint Posture Profiles</CDSNavMenu.Link>
                  <CDSNavMenu.Link isSelected={selectedMenu === 'secure-ips-profiles'} onClick={nav('secure-ips-profiles')}>IPS Profiles</CDSNavMenu.Link>
                  <CDSNavMenu.Link isSelected={selectedMenu === 'secure-security-profiles'} onClick={nav('secure-security-profiles')}>Security Profiles</CDSNavMenu.Link>
                </CDSNavMenu.Section>
                <CDSNavMenu.Section>
                  <CDSNavMenu.Label>Settings</CDSNavMenu.Label>
                  <CDSNavMenu.Link isSelected={selectedMenu === 'secure-threat-categories'} onClick={nav('secure-threat-categories')}>Threat Categories</CDSNavMenu.Link>
                  <CDSNavMenu.Link isSelected={selectedMenu === 'secure-notification-pages'} onClick={nav('secure-notification-pages')}>Notification Pages</CDSNavMenu.Link>
                  <CDSNavMenu.Link isSelected={selectedMenu === 'secure-do-not-decrypt-lists'} onClick={nav('secure-do-not-decrypt-lists')}>Do Not Decrypt Lists</CDSNavMenu.Link>
                  <CDSNavMenu.Link isSelected={selectedMenu === 'secure-certificates'} onClick={nav('secure-certificates')}>Certificates</CDSNavMenu.Link>
                  <CDSNavMenu.Link isSelected={selectedMenu === 'secure-data-classification'} onClick={nav('secure-data-classification')}>Data Classification</CDSNavMenu.Link>
                </CDSNavMenu.Section>
              </CDSNavMenu>
            }
          >
            Secure
          </CDSNav.Item>
          <CDSNav.Item icon="monitor" isSelected={selectedMenu === 'monitor'} onClick={nav('monitor')}>
            Monitor
          </CDSNav.Item>
          <CDSNav.Item icon="investigate" isSelected={selectedMenu === 'investigate'} onClick={nav('investigate')}>
            Investigate
          </CDSNav.Item>
          <CDSNav.Item icon="admin" isSelected={selectedMenu === 'admin'} onClick={nav('admin')}>
            Admin
          </CDSNav.Item>
          <CDSNav.Item icon="workflows" isSelected={selectedMenu === 'workflows'} onClick={nav('workflows')}>
            Workflows
          </CDSNav.Item>
        </CDSNav>
        </div>

        {/* Page content */}
        <CDSFlex direction="vertical">
          {selectedMenu === 'overview' && <HomePage />}
          {selectedMenu === 'dashboard' && <DashboardPage />}
          {selectedMenu === 'resources-ai-resources' && <AIResourcesPage />}
          {selectedMenu === 'secure-access-policy' && <AccessPolicyPage onAddPrivateRule={nav('secure-access-policy-add-private')} />}
          {selectedMenu === 'secure-access-policy-add-private' && <AddPrivateAccessRulePage onBack={nav('secure-access-policy')} />}
          {!['overview', 'dashboard', 'resources-ai-resources', 'secure-access-policy', 'secure-access-policy-add-private'].includes(selectedMenu) && (
            <CDSFlex direction="vertical" gap={16} margin={24}>
              <CDSFlex direction="vertical" gap={4}>
                <CDSFlex style={{ color: 'var(--base-text-weak-default)', textTransform: 'capitalize' }}>
                </CDSFlex>
              </CDSFlex>
            </CDSFlex>
          )}
        </CDSFlex>
      </div>
    </CDSThemeProvider>
  );
};

export default App;
