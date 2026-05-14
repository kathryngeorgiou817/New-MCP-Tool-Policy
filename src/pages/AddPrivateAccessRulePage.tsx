import { useState } from 'react';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuPortal, DropdownMenuContent } from '@radix-ui/react-dropdown-menu';
import {
  ArrowLeftIcon,
  ArrowSquareOutIcon,
  BuildingsIcon,
  CaretDownIcon,
  CaretRightIcon,
  CheckCircleIcon,
  CircleHalfTiltIcon,
  DesktopIcon,
  GlobeIcon,
  RobotIcon,
  XCircleIcon,
  XIcon,
} from '@phosphor-icons/react';
import { CDSButton } from '@ciscodesignsystems/cds-react-button';
import { CDSFlex } from '@ciscodesignsystems/cds-react-flex';
import { CDSHeading } from '@ciscodesignsystems/cds-react-heading';
import { CDSLink } from '@ciscodesignsystems/cds-react-link';
import { CDSText } from '@ciscodesignsystems/cds-react-text';

type ActionType = 'Allow' | 'Block';

const categoryRows = [
  { label: 'AI Resources', count: 8 },
  { label: 'Private Resources', count: 100 },
  { label: 'Private Resource Groups', count: 21 },
  { label: 'Network Objects and Network Object Groups', count: 78 },
  { label: 'Service Objects and Service Object Groups', count: 28 },
  { label: 'Security Group Tags', count: 0 },
];

const aiResourceItems = [
  'AI force MCP server',
  'Figma MCP Server',
  'Hubspot MCP server',
  'Github MCP Server',
  'Mongo MCP Server',
  'Nebula MCP Server',
  'Salesforce MCP Server',
];

const DropdownTabs = () => (
  <div style={{ position: 'relative', paddingBottom: 0 }}>
    <div style={{ display: 'flex', alignItems: 'flex-end', padding: '6px 12px 0', gap: 24 }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ padding: '8px 1px', fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 14, lineHeight: '20px', color: '#326cd1', whiteSpace: 'nowrap' }}>
          Select destinations
        </div>
        <div style={{ height: 3, background: '#2774d9', borderRadius: 2, width: '100%' }} />
      </div>
      <div style={{ padding: '8px 1px 11px', fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 14, lineHeight: '20px', color: '#656c75', whiteSpace: 'nowrap' }}>
        Add a destination
      </div>
    </div>
    <div style={{ height: 1, background: '#e1e4e8' }} />
  </div>
);

type DestinationPickerProps = {
  checked: Record<string, boolean>;
  toggleItem: (name: string) => void;
};

const DestinationPicker = ({ checked, toggleItem }: DestinationPickerProps) => {
  const [view, setView] = useState<'categories' | 'ai-resources'>('categories');
  const [open, setOpen] = useState(false);

  const selected = aiResourceItems.filter((n) => checked[n]);

  return (
    <DropdownMenu open={open} onOpenChange={(o) => { setOpen(o); if (!o) setView('categories'); }}>
      <DropdownMenuTrigger asChild>
        <div style={{ border: '2px solid #e1e4e8', borderRadius: 6, minHeight: 34, display: 'flex', alignItems: 'center', padding: '4px 10px', background: '#fff', cursor: 'pointer', width: '100%', boxSizing: 'border-box', gap: 6, flexWrap: 'wrap' }}>
          {selected.length === 0 ? (
            <span style={{ background: '#e1e4e8', borderRadius: 14, padding: '2px 10px', display: 'inline-flex', alignItems: 'center', gap: 4 }}>
              <CDSText size="p4">Any</CDSText>
              <XIcon size={12} style={{ cursor: 'pointer' }} onClick={(e) => e.stopPropagation()} />
            </span>
          ) : (
            selected.map((name) => (
              <span key={name} style={{ background: '#e1e4e8', borderRadius: 14, padding: '2px 8px', display: 'inline-flex', alignItems: 'center', gap: 4, fontSize: 12 }}>
                {name}
                <XIcon size={10} style={{ cursor: 'pointer' }} onClick={(e) => { e.stopPropagation(); toggleItem(name); }} />
              </span>
            ))
          )}
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuPortal>
        <DropdownMenuContent
          align="start"
          style={{ width: 'var(--radix-dropdown-menu-trigger-width)', background: '#ffffff', border: '2px solid #d0d4d9', borderRadius: 6, boxShadow: '0px 2px 2.5px rgba(0,0,0,0.05)', overflow: 'hidden', zIndex: 9999, paddingBottom: 2 }}
        >
          <DropdownTabs />

          {view === 'categories' ? (
            categoryRows.map((cat) => (
              <div
                key={cat.label}
                onClick={() => { if (cat.label === 'AI Resources') setView('ai-resources'); }}
                style={{ display: 'flex', alignItems: 'center', gap: 23, padding: '7px 12px', cursor: 'pointer', background: '#fff' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = '#f5f7fa'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = '#fff'; }}
              >
                <span style={{ flex: 1, fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: 14, lineHeight: '20px', color: '#23282e' }}>{cat.label}</span>
                <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: 14, lineHeight: '20px', color: '#a7adb5' }}>{cat.count}</span>
                <CaretRightIcon size={20} color="#7e868f" />
              </div>
            ))
          ) : (
            <div>
              {/* Breadcrumb */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 4, padding: '10px 12px', height: 44, boxSizing: 'border-box' }}>
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, color: '#656c75', cursor: 'pointer' }} onClick={() => setView('categories')}>Destinations</span>
                <CaretRightIcon size={14} color="#656c75" />
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, fontWeight: 700, color: '#23282e' }}>AI Resources</span>
              </div>
              {/* Group label */}
              <div style={{ padding: '4px 12px 6px' }}>
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, fontWeight: 400, color: '#23282e' }}>AI Resources (8)</span>
              </div>
              {/* Checkbox rows */}
              {aiResourceItems.map((name) => (
                <div
                  key={name}
                  onClick={() => toggleItem(name)}
                  style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '7px 12px', cursor: 'pointer', background: '#fff' }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = '#f5f7fa'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = '#fff'; }}
                >
                  <input type="checkbox" checked={!!checked[name]} onChange={() => toggleItem(name)} style={{ cursor: 'pointer', width: 14, height: 14, flexShrink: 0 }} onClick={(e) => e.stopPropagation()} />
                  <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: 14, lineHeight: '20px', color: '#23282e' }}>{name}</span>
                </div>
              ))}
            </div>
          )}
        </DropdownMenuContent>
      </DropdownMenuPortal>
    </DropdownMenu>
  );
};

const toolCategoryLabels = ['Read', 'Write', 'Execute', 'Unknown category'];

type ToolItem = { name: string; description: string; dataFields: string[] };
type CategoryWithTools = { label: string; tools: ToolItem[] };
type ServerCategories = CategoryWithTools[];

const serverCategories: Record<string, ServerCategories> = {
  'AI force MCP server': [
    { label: 'Read', tools: [
      { name: 'get_pipeline_status', description: 'Returns the current status and metadata of an AI pipeline run.', dataFields: ['pipelineId', 'runId', 'status', 'startedAt'] },
      { name: 'list_models', description: 'Lists all registered models along with their versions and tags.', dataFields: ['modelId', 'version', 'tags', 'createdBy'] },
      { name: 'get_experiment', description: 'Fetches details of a specific experiment including metrics and parameters.', dataFields: ['experimentId', 'metrics', 'params', 'artifactUri'] },
      { name: 'fetch_dataset', description: 'Downloads dataset metadata and access URLs for a given dataset ID.', dataFields: ['datasetId', 'schema', 'storageUri', 'rowCount'] },
    ]},
    { label: 'Write', tools: [
      { name: 'create_pipeline', description: 'Creates a new AI pipeline with the specified configuration.', dataFields: ['name', 'steps', 'schedule', 'ownerId'] },
      { name: 'update_model', description: 'Updates model metadata or promotes a version to production.', dataFields: ['modelId', 'version', 'stage', 'description'] },
      { name: 'log_experiment', description: 'Logs metrics, parameters, and artifacts for an experiment run.', dataFields: ['experimentId', 'metrics', 'params', 'artifacts'] },
      { name: 'upload_dataset', description: 'Uploads a new dataset and registers it in the data catalog.', dataFields: ['name', 'storageUri', 'schema', 'tags'] },
    ]},
    { label: 'Execute', tools: [
      { name: 'run_inference', description: 'Runs real-time inference against a deployed model endpoint.', dataFields: ['modelId', 'inputData', 'version', 'requestId'] },
      { name: 'trigger_training', description: 'Triggers a training job for a specified model configuration.', dataFields: ['modelId', 'datasetId', 'hyperparams', 'computeCluster'] },
      { name: 'evaluate_model', description: 'Runs evaluation metrics against a model using a test dataset.', dataFields: ['modelId', 'testDatasetId', 'metrics', 'thresholds'] },
      { name: 'batch_predict', description: 'Runs batch predictions on a dataset and writes results to storage.', dataFields: ['modelId', 'datasetId', 'outputUri', 'batchSize'] },
    ]},
    { label: 'Unknown category', tools: [
      { name: 'sync_artifacts', description: 'Synchronizes ML artifacts between environments.', dataFields: ['sourceEnv', 'targetEnv', 'artifactIds'] },
      { name: 'purge_cache', description: 'Clears cached model outputs and intermediate computation results.', dataFields: ['cacheScope', 'modelId', 'olderThan'] },
    ]},
  ],
  'Figma MCP Server': [
    { label: 'Read', tools: [
      { name: 'get_file', description: 'Retrieves the full document tree of a Figma file.', dataFields: ['fileKey', 'version', 'depth', 'geometry'] },
      { name: 'get_node', description: 'Returns properties and children of a specific node by ID.', dataFields: ['fileKey', 'nodeId', 'geometry', 'pluginData'] },
      { name: 'list_components', description: 'Lists all published components in a Figma file or library.', dataFields: ['fileKey', 'componentId', 'name', 'description'] },
      { name: 'get_styles', description: 'Returns all local and shared styles defined in a file.', dataFields: ['fileKey', 'styleId', 'styleType', 'name'] },
    ]},
    { label: 'Write', tools: [
      { name: 'update_node', description: 'Updates properties of a Figma node such as fill, size, or position.', dataFields: ['fileKey', 'nodeId', 'properties', 'version'] },
      { name: 'create_component', description: 'Creates a new reusable component from selected layers.', dataFields: ['fileKey', 'frameId', 'name', 'description'] },
      { name: 'set_style', description: 'Applies or updates a style on one or more nodes.', dataFields: ['fileKey', 'nodeId', 'styleId', 'styleType'] },
      { name: 'rename_layer', description: 'Renames a layer or frame within a Figma document.', dataFields: ['fileKey', 'nodeId', 'newName'] },
    ]},
    { label: 'Execute', tools: [
      { name: 'export_asset', description: 'Exports a node as an image in the specified format and scale.', dataFields: ['fileKey', 'nodeId', 'format', 'scale'] },
      { name: 'publish_library', description: 'Publishes the current file as a shared component library.', dataFields: ['fileKey', 'description', 'versionTitle'] },
      { name: 'run_plugin', description: 'Executes a Figma plugin programmatically with provided parameters.', dataFields: ['fileKey', 'pluginId', 'params', 'runMode'] },
    ]},
    { label: 'Unknown category', tools: [
      { name: 'sync_tokens', description: 'Synchronizes design tokens between Figma and an external token repository.', dataFields: ['fileKey', 'tokenSource', 'tokenSets'] },
      { name: 'migrate_file', description: 'Migrates file structure or components to a newer template version.', dataFields: ['fileKey', 'targetTemplate', 'dryRun'] },
    ]},
  ],
  'Hubspot MCP server': [
    { label: 'Read', tools: [
      { name: 'get_contact', description: 'Retrieves a CRM contact record by ID or email address.', dataFields: ['contactId', 'email', 'firstName', 'lastName'] },
      { name: 'list_deals', description: 'Returns a paginated list of deals filtered by pipeline or stage.', dataFields: ['pipelineId', 'stage', 'ownerId', 'closeDate'] },
      { name: 'get_company', description: 'Fetches a company record including associated contacts and deals.', dataFields: ['companyId', 'name', 'domain', 'industry'] },
      { name: 'fetch_timeline', description: 'Retrieves the activity timeline for a contact or company.', dataFields: ['objectId', 'objectType', 'eventType', 'startDate'] },
    ]},
    { label: 'Write', tools: [
      { name: 'create_message', description: 'Generates outbound or internal communications such as emails, SMS messages, or in-app notifications.', dataFields: ['roomId', 'toPersonId', 'toPersonEmail', 'text', 'attachments'] },
      { name: 'create_record', description: 'Creates a new CRM record such as a contact, deal, or company.', dataFields: ['objectType', 'properties', 'associations', 'ownerId'] },
      { name: 'send_external_message', description: 'Sends a message to an external recipient via a connected channel.', dataFields: ['channelId', 'recipientId', 'subject', 'body'] },
      { name: 'send_internal_message', description: 'Posts an internal note or message to a HubSpot inbox thread.', dataFields: ['threadId', 'senderId', 'text', 'attachments'] },
    ]},
    { label: 'Execute', tools: [
      { name: 'enroll_workflow', description: 'Enrolls a contact or object into an automation workflow.', dataFields: ['workflowId', 'objectId', 'objectType'] },
      { name: 'trigger_sequence', description: 'Starts a sales sequence for a given contact.', dataFields: ['sequenceId', 'contactId', 'senderId', 'startAt'] },
      { name: 'send_email', description: 'Sends a marketing or transactional email to a contact.', dataFields: ['contactId', 'emailId', 'fromEmail', 'replyTo'] },
    ]},
    { label: 'Unknown category', tools: [
      { name: 'sync_crm_data', description: 'Synchronizes CRM records with an external data source.', dataFields: ['sourceSystem', 'objectTypes', 'syncMode'] },
      { name: 'archive_contact', description: 'Archives a contact record, hiding it from active views.', dataFields: ['contactId', 'reason', 'archivedBy'] },
    ]},
  ],
  'Github MCP Server': [
    { label: 'Read', tools: [
      { name: 'get_repo', description: 'Returns metadata for a GitHub repository including topics and settings.', dataFields: ['owner', 'repo', 'visibility', 'defaultBranch'] },
      { name: 'list_issues', description: 'Lists open or closed issues for a repository with filter options.', dataFields: ['owner', 'repo', 'state', 'labels'] },
      { name: 'get_pull_request', description: 'Returns details of a pull request including diff stats and reviewers.', dataFields: ['owner', 'repo', 'prNumber', 'reviewers'] },
      { name: 'read_file', description: 'Reads the content of a file at a specific ref from a repository.', dataFields: ['owner', 'repo', 'path', 'ref'] },
    ]},
    { label: 'Write', tools: [
      { name: 'create_issue', description: 'Creates a new issue in a repository with a title, body, and labels.', dataFields: ['owner', 'repo', 'title', 'body', 'labels'] },
      { name: 'update_file', description: 'Creates or updates a file in a repository at the specified path.', dataFields: ['owner', 'repo', 'path', 'content', 'message'] },
      { name: 'create_pull_request', description: 'Opens a pull request from a source branch to a target branch.', dataFields: ['owner', 'repo', 'head', 'base', 'title'] },
      { name: 'add_comment', description: 'Adds a comment to an issue or pull request.', dataFields: ['owner', 'repo', 'issueNumber', 'body'] },
    ]},
    { label: 'Execute', tools: [
      { name: 'trigger_workflow', description: 'Manually dispatches a GitHub Actions workflow with inputs.', dataFields: ['owner', 'repo', 'workflowId', 'ref', 'inputs'] },
      { name: 'merge_pull_request', description: 'Merges a pull request using the specified merge method.', dataFields: ['owner', 'repo', 'prNumber', 'mergeMethod'] },
      { name: 'run_action', description: 'Re-runs a specific Actions job within a workflow run.', dataFields: ['owner', 'repo', 'runId', 'jobId'] },
    ]},
    { label: 'Unknown category', tools: [
      { name: 'sync_fork', description: 'Syncs a forked repository with the upstream base repository.', dataFields: ['owner', 'repo', 'branch', 'upstreamOwner'] },
      { name: 'archive_repo', description: 'Archives a repository, making it read-only.', dataFields: ['owner', 'repo', 'reason'] },
    ]},
  ],
  'Mongo MCP Server': [
    { label: 'Read', tools: [
      { name: 'find_documents', description: 'Queries a collection for documents matching a filter.', dataFields: ['database', 'collection', 'filter', 'projection'] },
      { name: 'aggregate', description: 'Runs an aggregation pipeline against a collection.', dataFields: ['database', 'collection', 'pipeline', 'options'] },
      { name: 'get_collection', description: 'Returns metadata and stats for a specific collection.', dataFields: ['database', 'collection', 'stats', 'indexes'] },
      { name: 'list_indexes', description: 'Lists all indexes defined on a collection.', dataFields: ['database', 'collection', 'indexName', 'keys'] },
    ]},
    { label: 'Write', tools: [
      { name: 'insert_document', description: 'Inserts one or more documents into a collection.', dataFields: ['database', 'collection', 'documents', 'ordered'] },
      { name: 'update_document', description: 'Updates documents in a collection matching a filter.', dataFields: ['database', 'collection', 'filter', 'update', 'upsert'] },
      { name: 'delete_document', description: 'Deletes documents from a collection that match a filter.', dataFields: ['database', 'collection', 'filter', 'deleteMany'] },
      { name: 'create_index', description: 'Creates a new index on a collection with specified keys and options.', dataFields: ['database', 'collection', 'keys', 'unique'] },
    ]},
    { label: 'Execute', tools: [
      { name: 'run_pipeline', description: 'Executes a stored aggregation pipeline by name.', dataFields: ['database', 'pipelineName', 'params', 'outputCollection'] },
      { name: 'execute_transaction', description: 'Runs a multi-document ACID transaction.', dataFields: ['database', 'operations', 'readConcern', 'writeConcern'] },
      { name: 'drop_collection', description: 'Drops a collection and all its documents from the database.', dataFields: ['database', 'collection', 'confirmDrop'] },
    ]},
    { label: 'Unknown category', tools: [
      { name: 'compact_collection', description: 'Compacts a collection to reclaim disk space after deletions.', dataFields: ['database', 'collection', 'force'] },
      { name: 'validate_schema', description: 'Validates documents against a JSON Schema validator.', dataFields: ['database', 'collection', 'schema', 'validationLevel'] },
    ]},
  ],
  'Nebula MCP Server': [
    { label: 'Read', tools: [
      { name: 'get_graph', description: 'Retrieves graph metadata and statistics for a named graph space.', dataFields: ['spaceName', 'graphId', 'stats', 'partitions'] },
      { name: 'list_vertices', description: 'Lists vertices of a given tag type with optional property filters.', dataFields: ['spaceName', 'tag', 'filter', 'limit'] },
      { name: 'fetch_edge', description: 'Fetches edge properties between two vertices for a given edge type.', dataFields: ['spaceName', 'edgeType', 'srcId', 'dstId'] },
      { name: 'query_schema', description: 'Returns the schema definition for tags and edge types in a space.', dataFields: ['spaceName', 'schemaType', 'name', 'version'] },
    ]},
    { label: 'Write', tools: [
      { name: 'insert_vertex', description: 'Inserts a new vertex with tag properties into the graph.', dataFields: ['spaceName', 'tag', 'vid', 'properties'] },
      { name: 'upsert_edge', description: 'Inserts or updates an edge between two vertices.', dataFields: ['spaceName', 'edgeType', 'srcId', 'dstId', 'properties'] },
      { name: 'update_property', description: 'Updates a property value on an existing vertex or edge.', dataFields: ['spaceName', 'entityType', 'entityId', 'property', 'value'] },
      { name: 'create_space', description: 'Creates a new graph space with partition and replica settings.', dataFields: ['spaceName', 'partitionNum', 'replicaFactor', 'vidType'] },
    ]},
    { label: 'Execute', tools: [
      { name: 'run_query', description: 'Executes a nGQL or Cypher query against the graph database.', dataFields: ['spaceName', 'query', 'params', 'timeout'] },
      { name: 'execute_job', description: 'Runs a background job such as COMPACT or REBUILD INDEX.', dataFields: ['spaceName', 'jobType', 'targetSpace', 'jobId'] },
      { name: 'rebuild_index', description: 'Rebuilds a tag or edge type index for query optimization.', dataFields: ['spaceName', 'indexName', 'indexType', 'async'] },
    ]},
    { label: 'Unknown category', tools: [
      { name: 'compact_space', description: 'Triggers a compaction job to optimize storage in a graph space.', dataFields: ['spaceName', 'partitionId', 'force'] },
      { name: 'balance_data', description: 'Redistributes data across storage hosts for load balancing.', dataFields: ['spaceName', 'hosts', 'balanceType'] },
    ]},
  ],
  'Salesforce MCP Server': [
    { label: 'Read', tools: [
      { name: 'query_records', description: 'Executes a SOQL query and returns matching Salesforce records.', dataFields: ['objectType', 'query', 'fields', 'limit'] },
      { name: 'get_object', description: 'Retrieves a single Salesforce record by object type and ID.', dataFields: ['objectType', 'recordId', 'fields'] },
      { name: 'describe_schema', description: 'Returns field metadata and relationships for a Salesforce object.', dataFields: ['objectType', 'fieldNames', 'referenceTo'] },
      { name: 'list_reports', description: 'Lists available Salesforce reports with folder and type info.', dataFields: ['folderId', 'reportType', 'name', 'lastRunDate'] },
    ]},
    { label: 'Write', tools: [
      { name: 'create_record', description: 'Creates a new Salesforce record for the specified object type.', dataFields: ['objectType', 'fields', 'ownerId', 'externalId'] },
      { name: 'update_record', description: 'Updates fields on an existing Salesforce record.', dataFields: ['objectType', 'recordId', 'fields'] },
      { name: 'create_message', description: 'Sends a Chatter post or message to a user or group.', dataFields: ['subjectId', 'body', 'visibility', 'mentionIds'] },
      { name: 'send_internal_message', description: 'Sends an internal Slack-style message via Salesforce messaging.', dataFields: ['recipientId', 'senderId', 'text', 'channelId'] },
    ]},
    { label: 'Execute', tools: [
      { name: 'run_flow', description: 'Triggers a Salesforce Flow by API name with input variables.', dataFields: ['flowApiName', 'inputVariables', 'interviewId'] },
      { name: 'invoke_apex', description: 'Invokes a REST-exposed Apex method with JSON body input.', dataFields: ['apexClassName', 'methodName', 'body'] },
      { name: 'trigger_process', description: 'Manually activates a Process Builder process for a record.', dataFields: ['processId', 'recordId', 'objectType'] },
    ]},
    { label: 'Unknown category', tools: [
      { name: 'sync_metadata', description: 'Retrieves or deploys metadata components between orgs.', dataFields: ['metadataType', 'componentName', 'direction'] },
      { name: 'deploy_package', description: 'Deploys a metadata package to the target Salesforce org.', dataFields: ['packageZip', 'testLevel', 'runAllTests'] },
    ]},
  ],
};

type AllowToolsDrawerProps = {
  servers: string[];
  onClose: () => void;
};

const AllowToolsDrawer = ({ servers, onClose }: AllowToolsDrawerProps) => {
  const [serverChecked, setServerChecked] = useState<Record<string, boolean>>(
    () => Object.fromEntries(servers.map((s) => [s, true]))
  );
  const [catChecked, setCatChecked] = useState<Record<string, boolean>>(
    () => Object.fromEntries(toolCategoryLabels.map((l) => [l, true]))
  );
  const [expandedServers, setExpandedServers] = useState<Record<string, boolean>>({});
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({});
  const [toolChecked, setToolChecked] = useState<Record<string, boolean>>(
    () => {
      const entries: [string, boolean][] = [];
      Object.entries(serverCategories).forEach(([srv, cats]) =>
        cats.forEach((cat) => cat.tools.forEach((t) => entries.push([`${srv}:${cat.label}:${t.name}`, true])))
      );
      return Object.fromEntries(entries);
    }
  );
  const [search, setSearch] = useState('');

  const totalSelected = servers.filter((s) => serverChecked[s]).length;
  const allSelected = servers.every((s) => serverChecked[s]);

  const toggleServer = (s: string) => setServerChecked(prev => ({ ...prev, [s]: !prev[s] }));
  const toggleCat = (label: string) => setCatChecked(prev => ({ ...prev, [label]: !prev[label] }));
  const toggleExpanded = (s: string) => setExpandedServers(prev => ({ ...prev, [s]: !prev[s] }));
  const [expandedTools, setExpandedTools] = useState<Record<string, boolean>>({});
  const toggleCatExpanded = (key: string) => setExpandedCategories(prev => ({ ...prev, [key]: !prev[key] }));
  const toggleTool = (key: string) => setToolChecked(prev => ({ ...prev, [key]: !prev[key] }));
  const toggleToolDetail = (key: string) => setExpandedTools(prev => ({ ...prev, [key]: !prev[key] }));

  const filteredServers = servers.filter((s) =>
    s.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.3)', zIndex: 300 }}
      />
      {/* Drawer */}
      <div style={{
        position: 'fixed', top: 56, right: 0, bottom: 0, width: 660,
        background: '#fff', boxShadow: '0px 4px 12px rgba(0,0,0,0.12)',
        zIndex: 400, display: 'flex', flexDirection: 'column',
      }}>
        {/* Header */}
        <div style={{ padding: '16px 24px 12px', borderBottom: '1px solid #e1e4e8', flexShrink: 0 }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              <CDSHeading size="primary">Allow MCP Tools</CDSHeading>
              <CDSText size="p4" style={{ color: '#596069' }}>Select the tools you want users to access. Unselect tools you want to block.</CDSText>
            </div>
            <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4, display: 'flex', alignItems: 'center' }}>
              <XIcon size={20} color="#7e868f" />
            </button>
          </div>
        </div>

        {/* Body */}
        <div style={{ display: 'flex', flex: 1, overflow: 'hidden', paddingTop: 16 }}>
          {/* Left: tool type filter */}
          <div style={{ width: 197, flexShrink: 0, display: 'flex', flexDirection: 'column', gap: 12, paddingLeft: 24, paddingTop: 8 }}>
            {toolCategoryLabels.map((label) => {
              const total = servers.reduce((sum, srv) => {
                const cat = (serverCategories[srv] ?? []).find((c) => c.label === label);
                return sum + (cat ? cat.tools.length : 0);
              }, 0);
              return (
                <label key={label} style={{ display: 'flex', alignItems: 'baseline', gap: 8, cursor: 'pointer' }}>
                  <input
                    type="checkbox"
                    checked={!!catChecked[label]}
                    onChange={() => toggleCat(label)}
                    style={{ width: 14, height: 14, cursor: 'pointer', flexShrink: 0 }}
                  />
                  <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, color: '#23282e' }}>
                    {label} <span style={{ color: '#23282e' }}>({total})</span>
                  </span>
                </label>
              );
            })}
          </div>

          {/* Vertical divider */}
          <div style={{ width: 1, background: '#e1e4e8', flexShrink: 0, margin: '0 17px' }} />

          {/* Right: server list */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 24, paddingRight: 24, overflow: 'hidden' }}>
            {/* Search + results count */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <div style={{ flex: 1, maxWidth: 395, position: 'relative' }}>
                <div style={{ position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="7" cy="7" r="4.5" stroke="#889099" strokeWidth="1.5"/><path d="M10.5 10.5L13.5 13.5" stroke="#889099" strokeWidth="1.5" strokeLinecap="round"/></svg>
                </div>
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search tools"
                  style={{ width: '100%', boxSizing: 'border-box', padding: '6px 10px 6px 32px', border: '2px solid #889099', borderRadius: 6, fontSize: 14, fontFamily: 'Inter, sans-serif', color: '#23282e', outline: 'none', background: '#fff' }}
                />
              </div>
              <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, color: '#596069', whiteSpace: 'nowrap' }}>
                {filteredServers.length} results
              </span>
            </div>

            {/* Table */}
            <div style={{ display: 'flex', flexDirection: 'column', overflow: 'auto' }}>
              {/* Select all header row */}
              <div style={{ display: 'flex', alignItems: 'center', borderBottom: '2px solid #e1e4e8', paddingBottom: 6, paddingTop: 4 }}>
                <div style={{ padding: '0 8px', flexShrink: 0 }}>
                  <input
                    type="checkbox"
                    checked={allSelected}
                    onChange={() => {
                      const newVal = !allSelected;
                      setServerChecked(Object.fromEntries(servers.map((s) => [s, newVal])));
                    }}
                    style={{ width: 14, height: 14, cursor: 'pointer' }}
                  />
                </div>
                <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: 8, paddingRight: 8 }}>
                  <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, fontWeight: 700, color: '#23282e' }}>Select all</span>
                  <span style={{ background: '#eaf2d3', borderRadius: 32, padding: '1px 8px', fontFamily: 'Inter, sans-serif', fontSize: 12, fontWeight: 600, color: '#23282e', lineHeight: '18px' }}>
                    {totalSelected} selected
                  </span>
                </div>
                <button
                  onClick={() => setServerChecked(Object.fromEntries(servers.map((s) => [s, false])))}
                  style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'Inter, sans-serif', fontSize: 14, color: '#1d69cc', fontWeight: 600, padding: '0 8px', whiteSpace: 'nowrap' }}
                >
                  Unselect all
                </button>
              </div>

              {/* Server rows */}
              {filteredServers.map((s) => {
                const isExpanded = !!expandedServers[s];
                const cats = serverCategories[s] ?? [];
                const serverTotal = cats.reduce((sum, c) => sum + c.tools.length, 0);
                return (
                  <div key={s}>
                    {/* Server row */}
                    <div
                      style={{ display: 'flex', alignItems: 'center', height: 37, borderBottom: '1px solid #e1e4e8', cursor: 'pointer' }}
                    >
                      <div style={{ padding: '0 8px', flexShrink: 0 }} onClick={() => toggleServer(s)}>
                        <input
                          type="checkbox"
                          checked={!!serverChecked[s]}
                          onChange={() => toggleServer(s)}
                          onClick={(e) => e.stopPropagation()}
                          style={{ width: 14, height: 14, cursor: 'pointer' }}
                        />
                      </div>
                      <div
                        style={{ flex: 1, padding: '0 8px', fontFamily: 'Inter, sans-serif', fontSize: 14, color: '#23282e' }}
                        onClick={() => toggleExpanded(s)}
                      >
                        {s} ({serverTotal})
                      </div>
                      <div style={{ padding: '0 8px', flexShrink: 0 }} onClick={() => toggleExpanded(s)}>
                        {isExpanded
                          ? <CaretDownIcon size={16} color="#7e868f" />
                          : <CaretRightIcon size={16} color="#7e868f" />
                        }
                      </div>
                    </div>
                    {/* Sub-category rows */}
                    {isExpanded && cats.map((cat) => {
                      const catKey = `${s}:${cat.label}`;
                      const isCatExpanded = !!expandedCategories[catKey];
                      return (
                        <div key={cat.label}>
                          {/* Category row */}
                          <div
                            style={{ display: 'flex', alignItems: 'center', height: 37, borderBottom: '1px solid #e1e4e8', background: '#fff', cursor: 'pointer' }}
                          >
                            <div style={{ width: 36, flexShrink: 0 }} />
                            <div style={{ padding: '0 8px', flexShrink: 0 }} onClick={() => toggleCat(cat.label)}>
                              <input
                                type="checkbox"
                                checked={!!catChecked[cat.label]}
                                onChange={() => toggleCat(cat.label)}
                                onClick={(e) => e.stopPropagation()}
                                style={{ width: 14, height: 14, cursor: 'pointer' }}
                              />
                            </div>
                            <div style={{ flex: 1, padding: '0 8px', fontFamily: 'Inter, sans-serif', fontSize: 14, color: '#23282e' }} onClick={() => toggleCatExpanded(catKey)}>
                              {cat.label} ({cat.tools.length})
                            </div>
                            <div style={{ padding: '0 8px', flexShrink: 0 }} onClick={() => toggleCatExpanded(catKey)}>
                              {isCatExpanded
                                ? <CaretDownIcon size={16} color="#7e868f" />
                                : <CaretRightIcon size={16} color="#7e868f" />
                              }
                            </div>
                          </div>
                          {/* Tool rows */}
                          {isCatExpanded && cat.tools.map((tool) => {
                            const toolKey = `${s}:${cat.label}:${tool.name}`;
                            const isDetailOpen = !!expandedTools[toolKey];
                            return (
                              <div key={tool.name}>
                                <div
                                  style={{ display: 'flex', alignItems: 'center', height: 37, background: '#fff', cursor: 'pointer' }}
                                  onClick={() => toggleTool(toolKey)}
                                >
                                  <div style={{ width: 72, flexShrink: 0 }} />
                                  <div style={{ padding: '0 8px', flexShrink: 0 }}>
                                    <input
                                      type="checkbox"
                                      checked={!!toolChecked[toolKey]}
                                      onChange={() => toggleTool(toolKey)}
                                      onClick={(e) => e.stopPropagation()}
                                      style={{ width: 14, height: 14, cursor: 'pointer' }}
                                    />
                                  </div>
                                  <div style={{ flex: 1, padding: '0 8px', fontFamily: 'monospace', fontSize: 13, color: '#23282e' }}>
                                    {tool.name}
                                  </div>
                                  <div
                                    style={{ padding: '0 8px', flexShrink: 0, display: 'flex', alignItems: 'center', gap: 4 }}
                                    onClick={(e) => { e.stopPropagation(); toggleToolDetail(toolKey); }}
                                  >
                                    <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: '#1d69cc', fontWeight: 600 }}>Details</span>
                                    {isDetailOpen
                                      ? <CaretDownIcon size={14} color="#1d69cc" />
                                      : <CaretRightIcon size={14} color="#1d69cc" />
                                    }
                                  </div>
                                </div>
                                {isDetailOpen && (
                                  <div style={{ marginLeft: 72, marginRight: 8, marginBottom: 8, background: '#f5f6f8', borderRadius: 6, padding: '14px 16px', display: 'flex', flexDirection: 'column', gap: 10 }}>
                                    <div>
                                      <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, fontWeight: 700, color: '#23282e', marginBottom: 4 }}>Description</div>
                                      <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: '#596069', lineHeight: '18px' }}>{tool.description}</div>
                                    </div>
                                    <div>
                                      <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, fontWeight: 700, color: '#23282e', marginBottom: 6 }}>Data shared with tool</div>
                                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
                                        {tool.dataFields.map((field) => (
                                          <span key={field} style={{ background: '#e1e4e8', borderRadius: 4, padding: '2px 6px', fontFamily: 'monospace', fontSize: 12, color: '#23282e' }}>{field}</span>
                                        ))}
                                      </div>
                                    </div>
                                  </div>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div style={{ padding: 16, borderTop: '1px solid #e1e4e8', display: 'flex', justifyContent: 'flex-end', flexShrink: 0 }}>
          <CDSButton sentiment="interact" onClick={onClose}>Apply</CDSButton>
        </div>
      </div>
    </>
  );
};

type AddPrivateAccessRulePageProps = {
  onBack: () => void;
};

export const AddPrivateAccessRulePage = ({ onBack }: AddPrivateAccessRulePageProps) => {
  const [selectedAction, setSelectedAction] = useState<ActionType>('Allow');
  const [ruleEnabled, setRuleEnabled] = useState(true);
  const [destinationChecked, setDestinationChecked] = useState<Record<string, boolean>>({});
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDestination = (name: string) => setDestinationChecked(prev => ({ ...prev, [name]: !prev[name] }));
  const selectedDestinations = aiResourceItems.filter((n) => destinationChecked[n]);

  return (
    <CDSFlex direction="vertical" style={{ minHeight: 'calc(100vh - 56px)', position: 'relative' }}>

      {/* Scrollable content */}
      <CDSFlex direction="vertical" gap={24} margin={24} style={{ paddingBottom: 100 }}>

        {/* Breadcrumb + title + description */}
        <CDSFlex direction="vertical" gap={8}>
          <CDSFlex align="center" gap="xxs" style={{ cursor: 'pointer' }} onClick={onBack}>
            <ArrowLeftIcon size={16} color="var(--base-text-weak-default)" />
            <CDSText size="p3" color="light">Access Policy</CDSText>
          </CDSFlex>

          <CDSHeading size="primary">Add New Private Access Rule</CDSHeading>

          <CDSFlex justify="space-between" align="flex-start">
            <CDSFlex direction="vertical" gap={0} style={{ maxWidth: 620 }}>
              <CDSText size="p4" color="light">
                Create a rule to control and secure access to specified private applications and other
                destinations on your network. For an end-to-end guide to completing prerequisites and
                configuring a rule, see{' '}
                <CDSLink href="#" target="_blank">
                  <CDSFlex as="span" align="center" gap="xxs" style={{ display: 'inline-flex' }}>
                    Help <ArrowSquareOutIcon size={14} />
                  </CDSFlex>
                </CDSLink>
              </CDSText>
            </CDSFlex>
            <CDSFlex align="center" gap="xxs">
              <CDSText size="p4" color="light">Logging is enabled</CDSText>
              <CDSLink href="#">Edit</CDSLink>
            </CDSFlex>
          </CDSFlex>

          <CDSFlex align="center" gap="sm">
            <div
              onClick={() => setRuleEnabled(!ruleEnabled)}
              style={{
                width: 36, height: 20, borderRadius: 14,
                background: ruleEnabled ? 'var(--interact-bg-base, #1d69cc)' : '#656c75',
                cursor: 'pointer', display: 'flex', alignItems: 'center',
                padding: '3px', transition: 'background 0.2s',
              }}
            >
              <div style={{
                width: 14, height: 14, borderRadius: '50%', background: '#ffffff',
                transform: ruleEnabled ? 'translateX(16px)' : 'translateX(0)',
                transition: 'transform 0.2s',
              }} />
            </div>
            <CDSText size="p4">Rule is {ruleEnabled ? 'enabled' : 'disabled'}</CDSText>
          </CDSFlex>
        </CDSFlex>

        {/* Summary card */}
        <div style={{ background: '#ffffff', border: '1px solid var(--base-border-weak-default, #e1e4e8)', borderRadius: 6 }}>
          <CDSFlex justify="space-between" align="center" style={{ padding: '16px 24px', borderBottom: '1px solid var(--base-border-weak-default, #e1e4e8)' }}>
            <CDSText size="p2" weight="semi-bold">Summary</CDSText>
            <CaretDownIcon size={14} />
          </CDSFlex>
          <CDSFlex align="center" style={{ padding: '24px' }}>
            <div style={{ minWidth: 180 }}>
              <div style={{ background: '#e1e4e8', borderRadius: '6px 6px 0 0', padding: '2px 8px' }}>
                <CDSText size="p4" color="light" style={{ fontFamily: 'monospace', fontSize: 12 }}>Sources</CDSText>
              </div>
              <div style={{ border: '2px solid #e1e4e8', borderRadius: '0 0 6px 6px', padding: '10px 16px', background: '#fff' }}>
                <CDSText weight="bold" size="p4">Any</CDSText>
              </div>
            </div>

            <div style={{ flex: 1, height: 1, background: '#e1e4e8', margin: '0 8px', minWidth: 40 }} />

            <CDSFlex direction="vertical" align="center" gap="xxs" style={{ minWidth: 60 }}>
              {selectedAction === 'Allow'
                ? <CheckCircleIcon size={28} color="#45991f" weight="regular" />
                : (
                  <span style={{ position: 'relative', width: 28, height: 28, display: 'inline-flex' }}>
                    <CircleHalfTiltIcon size={28} color="#cc2d37" weight="fill" style={{ position: 'absolute', opacity: 0.3 }} />
                    <CircleHalfTiltIcon size={28} color="#cc2d37" weight="regular" style={{ position: 'absolute' }} />
                  </span>
                )}
              <CDSText weight="bold" size="p4">{selectedAction}</CDSText>
            </CDSFlex>

            <div style={{ flex: 1, height: 1, background: '#e1e4e8', margin: '0 8px', minWidth: 40 }} />

            <div style={{ border: '2px dashed #e1e4e8', borderRadius: 6, padding: '12px 16px', minWidth: 160, textAlign: 'center' }}>
              <CDSText weight="bold" size="p3" style={{ color: '#c1c6cc' }}>Security Controls</CDSText>
            </div>

            <div style={{ flex: 1, height: 1, background: '#e1e4e8', margin: '0 8px', minWidth: 40 }} />

            <div style={{ minWidth: 200 }}>
              <div style={{ background: '#e1e4e8', borderRadius: '6px 6px 0 0', padding: '2px 8px' }}>
                <CDSText size="p4" color="light" style={{ fontFamily: 'monospace', fontSize: 12 }}>Destinations</CDSText>
              </div>
              <div style={{ border: '2px solid #e1e4e8', borderRadius: '0 0 6px 6px', padding: '10px 16px', background: '#fff' }}>
                <CDSText weight="bold" size="p4" style={{ color: '#464c54' }}>Any private application</CDSText>
              </div>
            </div>
          </CDSFlex>
        </div>

        {/* Main form card — extends to bottom */}
        <CDSFlex direction="vertical" gap={24} style={{ background: '#ffffff', border: '1px solid var(--base-border-weak-default, #e1e4e8)', borderRadius: 6, padding: 24 }}>

          {/* Rule name + Rule order */}
          <CDSFlex justify="space-between" align="flex-start">
            <CDSFlex direction="vertical" gap={4} style={{ flex: 1, maxWidth: 500 }}>
              <CDSText size="p3" weight="semi-bold">Rule name</CDSText>
              <input
                placeholder="New Rule"
                style={{
                  width: '100%', padding: '7px 12px', border: '2px solid #889099',
                  borderRadius: 6, fontSize: 14, lineHeight: '20px', outline: 'none',
                  color: 'var(--base-text-default)', background: '#fff', boxSizing: 'border-box',
                }}
              />
            </CDSFlex>
            <CDSFlex direction="vertical" gap={4} style={{ width: 180 }}>
              <CDSText size="p3" weight="semi-bold">Rule order</CDSText>
              <input
                defaultValue="6"
                type="number"
                style={{
                  width: '100%', padding: '7px 12px', border: '2px solid #889099',
                  borderRadius: 6, fontSize: 14, lineHeight: '20px', outline: 'none',
                  color: 'var(--base-text-default)', background: '#fff', boxSizing: 'border-box',
                }}
              />
            </CDSFlex>
          </CDSFlex>

          <div style={{ height: 1, background: 'var(--base-border-weak-default, #e1e4e8)' }} />

          {/* Step indicator */}
          <CDSFlex align="center" gap="sm">
            <div style={{ width: 28, height: 28, borderRadius: 20, background: '#326cd1', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <CDSText size="p3" weight="semi-bold" style={{ color: '#fff' }}>1</CDSText>
            </div>
            <CDSFlex direction="vertical" gap={2}>
              <CDSText size="p2" weight="semi-bold" style={{ color: '#1d69cc' }}>Specify MCP Access</CDSText>
              <CDSText size="p4" color="light">Specify which users and endpoints can access which MCP servers</CDSText>
            </CDSFlex>
          </CDSFlex>

          {/* Action selector */}
          <CDSFlex direction="vertical" gap={8}>
            <CDSText size="p3" weight="semi-bold">Action</CDSText>
            <CDSFlex gap="lg" style={{ maxWidth: 600 }}>
              <div
                onClick={() => setSelectedAction('Allow')}
                style={{
                  flex: 1, border: `2px solid ${selectedAction === 'Allow' ? '#1d69cc' : '#e1e4e8'}`,
                  borderRadius: 8, padding: 16, cursor: 'pointer',
                  background: selectedAction === 'Allow' ? '#f0f6ff' : '#fff',
                }}
              >
                <CDSFlex gap="sm" align="flex-start">
                  <CheckCircleIcon size={28} color="#45991f" weight="regular" style={{ flexShrink: 0 }} />
                  <CDSFlex direction="vertical" gap={4}>
                    <CDSText weight="bold">Allow</CDSText>
                    <CDSText size="p4" color="light">Allow specified traffic if security requirements are met.</CDSText>
                  </CDSFlex>
                </CDSFlex>
              </div>
              <div
                onClick={() => setSelectedAction('Block')}
                style={{
                  flex: 1, border: `2px solid ${selectedAction === 'Block' ? '#1d69cc' : '#e1e4e8'}`,
                  borderRadius: 8, padding: 16, cursor: 'pointer',
                  background: selectedAction === 'Block' ? '#f0f6ff' : '#fff',
                }}
              >
                <CDSFlex gap="sm" align="flex-start">
                  <span style={{ position: 'relative', width: 28, height: 28, display: 'inline-flex', flexShrink: 0 }}>
                    <CircleHalfTiltIcon size={28} color="#cc2d37" weight="fill" style={{ position: 'absolute', opacity: 0.3 }} />
                    <CircleHalfTiltIcon size={28} color="#cc2d37" weight="regular" style={{ position: 'absolute' }} />
                  </span>
                  <CDSFlex direction="vertical" gap={4}>
                    <CDSText weight="bold">Block</CDSText>
                    <CDSText size="p4" color="light">Block specified traffic.</CDSText>
                  </CDSFlex>
                </CDSFlex>
              </div>
            </CDSFlex>
          </CDSFlex>

          {/* From / To fields */}
          <CDSFlex gap="xl" align="flex-start">
            <CDSFlex direction="vertical" gap={4} style={{ flex: 1 }}>
              <CDSText size="p3" weight="semi-bold">From</CDSText>
              <CDSText size="p4" color="light">Specify one or more sources.</CDSText>
              <div style={{ border: '2px solid #e1e4e8', borderRadius: 6, height: 34, display: 'flex', alignItems: 'center', padding: '0 10px', background: '#fff', position: 'relative' }}>
                <CDSFlex align="center" gap="xxs">
                  <span style={{ background: '#e1e4e8', borderRadius: 14, padding: '2px 10px', display: 'inline-flex', alignItems: 'center', gap: 4 }}>
                    <CDSText size="p4">Any</CDSText>
                    <XIcon size={12} style={{ cursor: 'pointer' }} />
                  </span>
                </CDSFlex>
                <XCircleIcon size={16} color="#889099" style={{ position: 'absolute', right: 8, top: '50%', transform: 'translateY(-50%)' }} />
              </div>
            </CDSFlex>
            <CDSFlex direction="vertical" gap={4} style={{ flex: 1 }}>
              <CDSText size="p3" weight="semi-bold">To</CDSText>
              <CDSText size="p4" color="light">Specify one or more <strong>destinations</strong>.</CDSText>
              <DestinationPicker checked={destinationChecked} toggleItem={toggleDestination} />
              <CDSLink href="#" size="sm">+ AND</CDSLink>
            </CDSFlex>
          </CDSFlex>

          <div style={{ height: 1, background: 'var(--base-border-weak-default, #e1e4e8)' }} />

          {/* Additional Criteria */}
          <CDSFlex direction="vertical" gap={8}>
            <CDSFlex direction="vertical" gap={4}>
              <CDSText size="p3" weight="semi-bold">Additional Criteria</CDSText>
              <CDSText size="p4" color="light">Additional criteria that applies to this traffic:</CDSText>
            </CDSFlex>
            <div style={{ border: '2px solid #e1e4e8', borderRadius: 12, padding: 24 }}>
              <CDSFlex justify="space-between" align="flex-start">
                <CDSFlex direction="vertical" gap={8} style={{ flex: 1 }}>
                  <CDSText size="p2" weight="semi-bold">MCP Tools</CDSText>
                  <CDSText size="p4" color="light" style={{ maxWidth: 700 }}>
                    Select the MCP tools users can access for this policy. Any new tools released by the MCP server after the policy is created will automatically be blocked. To allow access, you must edit the policy.{' '}
                    <CDSLink href="#" target="_blank">
                      <CDSFlex as="span" align="center" gap="xxs" style={{ display: 'inline-flex' }}>
                        Help <ArrowSquareOutIcon size={12} />
                      </CDSFlex>
                    </CDSLink>
                  </CDSText>
                </CDSFlex>
                <CDSButton sentiment="interact" variant="secondary" onClick={() => setDrawerOpen(true)}>Allow tools</CDSButton>
              </CDSFlex>
              <div style={{ height: 1, background: '#e1e4e8', margin: '16px 0' }} />
              <CDSFlex align="center" gap="sm" wrap>
                <CDSText size="p4" color="light">MCP Servers:</CDSText>
                {selectedDestinations.length === 0 ? (
                  <CDSText size="p4" weight="semi-bold">Any applicable MCP server</CDSText>
                ) : (
                  <CDSText size="p4" weight="semi-bold">{selectedDestinations.join(', ')}</CDSText>
                )}
              </CDSFlex>
            </div>
          </CDSFlex>

          <div style={{ height: 1, background: 'var(--base-border-weak-default, #e1e4e8)' }} />

          {/* Endpoint Requirements */}
          <CDSFlex direction="vertical" gap={8}>
            <CDSText size="p3" weight="semi-bold">Endpoint Requirements</CDSText>
            <CDSFlex align="center" gap="xxs">
              <CDSText size="p4" color="light">
                For Zero Trust connections, if <strong>Endpoint Requirements</strong> do not meet the specified requirements, this rule will not match the traffic.
              </CDSText>
              <CDSLink href="#" target="_blank" size="sm">
                <CDSFlex as="span" align="center" gap="xxs" style={{ display: 'inline-flex' }}>
                  Help <ArrowSquareOutIcon size={12} />
                </CDSFlex>
              </CDSLink>
            </CDSFlex>
            <CDSFlex direction="vertical" gap={12}>
              <div style={{ background: '#fff', border: '2px solid #e1e4e8', borderRadius: 6, padding: 16 }}>
                <CDSFlex direction="vertical" gap={10}>
                  <CDSFlex justify="space-between" align="center">
                    <CDSFlex align="center" gap="sm">
                      <CDSFlex align="center" gap="sm">
                        <DesktopIcon size={24} />
                        <CDSText size="p4">Zero Trust Client-based Posture Profile</CDSText>
                      </CDSFlex>
                      <span style={{ background: '#cdecf7', borderRadius: 12, padding: '1px 8px' }}>
                        <CDSText size="p4" weight="semi-bold">Rule Defaults</CDSText>
                      </span>
                    </CDSFlex>
                    <CaretDownIcon size={16} />
                  </CDSFlex>
                  <CDSText size="p4" color="light">Requirements for end-user devices on which the Cisco Secure Client is installed.</CDSText>
                  <CDSFlex align="center" gap="sm">
                    <CDSText size="p4" color="light">
                      Profile: <strong style={{ color: 'var(--base-text-default)' }}>My Client-based profile</strong>
                    </CDSText>
                    <CDSText size="p3" style={{ color: '#c1c6cc' }}>|</CDSText>
                    <CDSText size="p4" color="light">
                      Requirements: <strong style={{ color: 'var(--base-text-default)' }}>Operating System, Firewall, Endpoint security agents, System password, Disk encryption</strong>
                    </CDSText>
                    <CDSLink href="#" size="sm">Details</CDSLink>
                  </CDSFlex>
                  <div style={{ height: 1, background: '#e1e4e8' }} />
                  <CDSFlex align="center" gap="xs">
                    <CDSText size="p4" color="light">Private Resources:</CDSText>
                    <CDSText size="p4" weight="semi-bold">Any private resource</CDSText>
                  </CDSFlex>
                </CDSFlex>
              </div>
              <div style={{ background: '#fff', border: '2px solid #e1e4e8', borderRadius: 6, padding: 16 }}>
                <CDSFlex direction="vertical" gap={10}>
                  <CDSFlex justify="space-between" align="center">
                    <CDSFlex align="center" gap="sm">
                      <CDSFlex align="center" gap="sm">
                        <GlobeIcon size={24} />
                        <CDSText size="p4">Zero Trust Browser-based Posture Profile</CDSText>
                      </CDSFlex>
                      <span style={{ background: '#cdecf7', borderRadius: 12, padding: '1px 8px' }}>
                        <CDSText size="p4" weight="semi-bold">Rule Defaults</CDSText>
                      </span>
                    </CDSFlex>
                    <CaretDownIcon size={16} />
                  </CDSFlex>
                  <CDSText size="p4" color="light">Requirements for end-user devices on which the Cisco Secure Client is NOT installed.</CDSText>
                  <CDSFlex align="center" gap="sm">
                    <CDSText size="p4" color="light">
                      Profile: <strong style={{ color: 'var(--base-text-default)' }}>My Browser-based profile</strong>
                    </CDSText>
                    <CDSText size="p3" style={{ color: '#c1c6cc' }}>|</CDSText>
                    <CDSText size="p4" color="light">
                      Requirements: <strong style={{ color: 'var(--base-text-default)' }}>Operating System, Browser</strong>
                    </CDSText>
                    <CDSLink href="#" size="sm">Details</CDSLink>
                  </CDSFlex>
                  <div style={{ height: 1, background: '#e1e4e8' }} />
                  <CDSFlex align="center" gap="xs">
                    <CDSText size="p4" color="light">Private Resources:</CDSText>
                    <CDSText size="p4" weight="semi-bold">Jira</CDSText>
                  </CDSFlex>
                </CDSFlex>
              </div>
            </CDSFlex>
            <CDSFlex direction="vertical" gap={4} style={{ marginTop: 8 }}>
              <CDSText size="p4" color="light">For VPN connections:</CDSText>
              <CDSFlex align="flex-start" gap="sm">
                <RobotIcon size={24} style={{ flexShrink: 0, color: 'var(--base-text-weak-default)' }} />
                <CDSFlex direction="vertical" gap={2}>
                  <CDSText size="p4" color="light">
                    End-user endpoint devices that are connected to the network using VPN may be able to access destinations specified in this rule.
                  </CDSText>
                  <CDSText size="p4" color="light">
                    Endpoint requirements are configured in the VPN posture profile. Requirements are evaluated at the time endpoint device connects to the network.{' '}
                    <CDSLink href="#" target="_blank" size="sm">
                      <CDSFlex as="span" align="center" gap="xxs" style={{ display: 'inline-flex' }}>
                        VPN Posture Profiles <ArrowSquareOutIcon size={12} />
                      </CDSFlex>
                    </CDSLink>
                  </CDSText>
                </CDSFlex>
              </CDSFlex>
            </CDSFlex>
            <CDSFlex direction="vertical" gap={4}>
              <CDSText size="p4" color="light">For Branch connections:</CDSText>
              <CDSFlex align="flex-start" gap="sm">
                <BuildingsIcon size={24} style={{ flexShrink: 0, color: 'var(--base-text-weak-default)' }} />
                <CDSText size="p4" color="light">
                  Endpoint device posture is not evaluated for endpoints connecting to these resources from a branch network.
                </CDSText>
              </CDSFlex>
            </CDSFlex>
          </CDSFlex>

        </CDSFlex>
      </CDSFlex>

      {/* Sticky footer */}
      <div style={{
        position: 'sticky', bottom: 0, background: '#fff',
        borderTop: '1px solid var(--base-border-weak-default, #e1e4e8)',
        padding: '16px 24px', display: 'flex', alignItems: 'center', gap: 16, zIndex: 100,
      }}>
        <CDSButton variant="ghost" sentiment="interact" onClick={onBack}>Cancel</CDSButton>
        <div style={{ flex: 1 }} />
        <CDSButton variant="secondary" sentiment="interact" disabled>Back</CDSButton>
        <CDSButton sentiment="interact">Next</CDSButton>
      </div>

      {drawerOpen && (
        <AllowToolsDrawer
          servers={selectedDestinations.length > 0 ? selectedDestinations : aiResourceItems}
          onClose={() => setDrawerOpen(false)}
        />
      )}

    </CDSFlex>
  );
};
