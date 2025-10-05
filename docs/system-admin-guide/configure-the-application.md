---
sidebar_position: 3
---

# Configure the application

After you deploy the Metadata Capture application, configure it to work in your environment. The application uses a configuration file to manage key settings such as feature flags, database connections, and authentication.


Configure the application settings to work in your environment by editing and mounting the configuration file.

1. Open the configuration file located at `/app/config.json` in your Docker container. If you need to reference the default settings or restore defaults, you can download the <u>default config.json</u> file from the repository.

2. Modify the settings in the `config.json` file to match your environment. Key settings include:
    - **Application settings:** Configure `app_title` and `catalogue` information (name, description, publisher).
    - **Feature flags:** Enable or disable features and other functionality flags.

3. Configure the different aspects of the application:
    - <u>Set up authentication</u>: Configure your OpenID Connect (OIDC) provider.
    - <u>Configure roles and permissions</u>: Define your organisation's roles and their permissions.
    - <u>Configure email notifications</u>: Customize email templates for dataset lifecycle events.

    <br/>

    :::tip Configuration tips

    * For details on the available settings and their expected values, refer to the <u>configuration schema</u>.
    * To see the default settings, download the <u>default config.json</u> file from the repository.

    :::

3. Mount the configuration file to make your changes persistent. Use either Docker Compose or the `docker run` command:

    If you are using **Docker Compose:**
    ```yaml
    services:
      app:
        environment:
          - CONFIG_PATH=/app/config.json
        volumes:
          - ./path/to/custom/config.json:/app/config.json
    ```

    If you are using **Docker run:**
    ```bash
    docker run -v $(pwd)/path/to/custom/config.json:/app/config.json <your-app-name> -e CONFIG_PATH=/app/config.json
    ```
