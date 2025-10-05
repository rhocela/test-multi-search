---
sidebar_position: 5
---

# Configure roles and permissions

Metadata Capture uses a role-based access control system to manage user permissions and access to different features within the application. Your organisation defines roles and their associated permissions through the application configuration file.

In this guide  
> [Understand the role configuration](#understand-the-role-configuration)  
> [Map roles and permissions](#map-roles-and-permissions)  
> [Available permissions reference](#available-permissions)

## Understand the role configuration

When deploying Metadata Capture, you will work with two types of roles:

- **Identity management roles**: Roles managed by your external OpenID Connect **(OIDC)** provider and Access Management **(IAM)** system. These roles are included in JWT tokens during <u>authentication</u>.
- **Organisational roles**: Roles defined within the Metadata Capture application configuration that determine what actions users can perform within datasets. To understand the default roles pre-defined in the application, see <u>user roles and permissions</u>.

## Map roles and permissions

Configure your organisational roles in your `config.json` file to match your organisation's access control requirements.

1. **Edit the configuration file:** Open the `config.json` file as described in <u>configure the application</u>.

2. **Define your organisational roles:** Locate the default organisational roles in the `roles` section and rename them to correspond with your organisation's OIDC/IAM roles.

    :::tip Defining roles

    - **To understand the default organisational roles**, their hierarchy, and relationships, see [user roles and permissions](../key-concepts/roles-and-permissions.md). 
    - **When defining your own roles**, align them with your organisation's structure and workflow. Consider your approval process for the different stages of the dataset lifecycle, and the different levels of access (individual, group, and organisation-wide).

    :::

    Here's an example configuration:

    ```json
    {
    "config_version": "1.0",
    "roles_path_in_access_token": "<resource_access.{client_id}.roles>", // replace with the path to the list of role identifiers inside the
    "roles": [
        {
         "name": "<ROLE_NAME>",
         "permissions": [
            "datasets:edit:draft:my",
            "datasets:status-change:complete:my"
            ]
        }
        // Add more roles as needed
     ]
    }
    ```
    Replace `<resource_access.{client_id}.roles>` with the path to the list of role identifiers inside the [access token](set-up-authentication.md).

3. **Assign minimum permissions:** For every role you define, ensure it includes at least one of the following minimum permissions:

   - `datasets:read`
   - `datasets:edit:draft:my` 
   - `datasets:edit:draft:group` 
   - `form-fields:edit` 
   - `form-fields:edit:my` 
   - `form-fields:edit:organisation`

   For a description of these permissions, see [available permissions](#available-permissions).
    
    :::info Minimum access requirements

    You must assign every user **at least one role with one of the minimum permissions** described in this step. Users without these minimum permissions will receive a "**403 Forbidden**" error when accessing the application.

    :::

3. **Configure the role mapping path:** Specify where roles appear in JWT tokens. Here's an example configuration:

    ```json
    {
    "roles_path_in_access_token": "resource_access.{client_id}.roles"
    }
    ```

## Available permissions

The following tables list all available permissions in Metadata Capture. Refer to this section when assigning permissions to your organisational roles.

### Dataset permissions

Permissions that control access to datasets based on their status and ownership:

| Permission | Description |
|------------|-------------|
| `datasets:read` | Read and edit all datasets (DRAFT status only), regardless of status |
| `datasets:read:all-after-draft` | Read all datasets after draft status |
| `datasets:read:all-after-complete` | Read all datasets after complete status |
| `datasets:read:completed` | Read all datasets in COMPLETED status |
| `datasets:read:validated` | Read all datasets in VALIDATED status |
| `datasets:read:approved` | Read all datasets in APPROVED status |
| `datasets:read:published` | Read all datasets in PUBLISHED status |
| `datasets:edit:draft:my` | Read and edit own datasets in DRAFT status |
| `datasets:edit:draft:group` | Read and edit group datasets in DRAFT status (where user is group manager) |
| `datasets:delete:draft:my` | Delete own datasets in DRAFT status |
| `datasets:delete:draft` | Delete any datasets in DRAFT status |

### Dataset status change permissions

Permissions that control changing the status of datasets:

| Permission | Description |
|------------|-------------|
| `datasets:status-change:complete` | Complete all datasets in draft status |
| `datasets:status-change:complete:my` | Complete own datasets in draft status |
| `datasets:status-change:complete:group` | Complete group datasets in draft status |
| `datasets:status-change:draft` | Move any datasets back to draft from completed status |
| `datasets:status-change:draft:group` | Move group datasets back to draft from completed status |
| `datasets:status-change:validate` | Validate all datasets in completed status |
| `datasets:status-change:validate:group` | Validate group datasets in completed status |
| `datasets:status-change:approve` | Approve all datasets in validated status |
| `datasets:status-change:publish` | Publish all datasets in approved status |
| `datasets:status-change:deprecate` | Deprecate all datasets in published or internal status |

### Organisation and user management permissions

Permissions that control managing organisations, contacts, and user roles:

| Permission | Description |
|------------|-------------|
| `organisations:edit` | Edit all available organisations |
| `organisations:edit:organisation` | Edit organisations the user is assigned to |
| `contacts:edit` | Edit all organisation contacts |
| `contacts:edit:organisation` | Edit contacts for assigned organisations |
| `roles:manage` | Assign roles and organisations to other users |
| `roles:manage:organisation` | Assign roles for assigned organisations only |

### Form fields and catalogue permissions

Permissions that control editing form fields and managing the catalogue:

| Permission | Description |
|------------|-------------|
| `form-fields:edit` | Edit form field values |
| `form-fields:edit:my` | Edit form field values for own datasets |
| `form-fields:edit:organisation` | Edit form field values for organisation datasets |
| `authentic-source:assign` | Assign authentic source to datasets |
| `catalogue:generate-rdf` | Generate RDF file from the catalogue |
| `catalogue:upload-rdf:s3` | Upload RDF file to S3 (if configured) |
| `accords-de-principe:edit` | Edit accords de principe values |

<br/>

:::note Well done!

Now that you have configured roles and permissions, you can <u>configure email notifications</u>.

:::