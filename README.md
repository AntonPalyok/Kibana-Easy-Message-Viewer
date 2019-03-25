# LA-Message-View

Plugin for Kibana 6 to display a log document based on it's content either with custom JSON viewer plugin or as a plain text

## Prerequisites

- Node JS  
  Full list of all version: https://nodejs.org/dist/

- Yarn  
  Full list of all versions: https://github.com/yarnpkg/yarn/releases

- Kibana repo should be on same folder level as your plugin folder.  
  Name of folder should be just kibana.

## Development

See the [kibana contributing guide](https://github.com/elastic/kibana/blob/master/CONTRIBUTING.md) for instructions setting up your development environment.

#### Prepare Kibana environment
Go to "kibana" repository folder and resolve dependencies.  
Note: NodeJs should be installed with version specified in kibana folder, file `.node-version`.
```
yarn kbn bootstrap
```
#### Working with plugin
Once Kibana environment is ready, use the following npm tasks from your plugin folder.  
**Note:** kibana version in package.json of the plugin should match actual version of installed kibana

> On Windows, you'll need you use Git Bash, Cygwin, or a similar shell that exposes the `sh` command.

 - ```npm start```
   Start kibana and have it include this plugin

 - `npm start -- --config kibana.yml`  
   You can pass any argument that you would normally send to `bin/kibana` by putting them after `--` when running `npm start`

 - `npm start -- --elasticsearch.url http://10.0.10.2:9200`  
   Start kibana and provide custom url to elasticsearch
 
 - `npm run test:browser`  
   Run the browser tests in a real web browser

 - `npm run test:server`  
   Run the server tests using mocha

For more information about any of these commands run `npm run ${task} -- --help`.

Since Kibana 6.3 you can use `yarn` to run tasks:
- ```yarn start```  
   Start kibana and have it include this plugin

 - `yarn start --elasticsearch.url http://10.0.10.2:9200`  
   Start kibana and provide custom url to elasticsearch

- If you have no Elasticsearch instance then go to kibana folder and run following command in separate command line:  
  `yarn es snapshot`  
  This will download and start local copy of Elasticsearch with version required by kibana.

After starting kibana simply access it in browser by url `http://localhost:5601/`


#### Create distributable build
Go to folder with plugin and run next command:
```
npm run build
```

#### Install plugin
https://www.elastic.co/guide/en/kibana/current/_installing_plugins.html  
Can be installed from disk by `file://` protocol  
Go to `kibana\bin` folder and execute next command:
```
kibana-plugin.bat install file:///D:/Elasticsearch/plugins/kibana/la_message_view-6.1.1.zip
```

#### Remove plugin
Go to `kibana\bin` folder and execute next command:
```
kibana-plugin.bat remove la_message_view
```



## How to generate plugin project structure

#### 1) Install Yeoman and Kibana plugin generator:
```
npm install -g yo generator-kibana-plugin
```

#### 2) Create folder for plugin
```
mkdir LA-Message-View
cd LA-Message-View
```

#### 3) Run the generator inside your plugin directory
```
yo kibana-plugin
```
On prompt enter following information:
> **You plugin name:**  e.g la_message_view  
> **Short Description:** some text  
> **Target Kibana Version:** e.g 6.0.0  

This information will be saved to appropriate files.


## Troubleshooting

#### Kibana shows error after start
`TypeError: _reactcss.handleHover is not a function`  
Resolved it by starting Kibana from Powershell, not from command line.

#### Yarn shows error during kibana bootstrap command
```
Installing dependencies in [@kbn/es]:
error An unexpected error occurred: "Reduce of empty array with no initial value".
```
For the moment (July 2018) latest version of Yarn was 1.7.0.  
Resolved issue by downgrading Yarn to version 1.6.0  


## Useful Links

- https://www.elastic.co/guide/en/kibana/current/known-plugins.html
- https://github.com/jimmyjones2/kibana/commit/d7c2fc4417bcb550a1617b9d2818f8faf6cb9aa8
- https://github.com/sw-jung/kibana_markdown_doc_view
- https://www.linkedin.com/pulse/creating-custom-kibana-visualizations-rittik-banik
- https://github.com/elastic/generator-kibana-plugin

