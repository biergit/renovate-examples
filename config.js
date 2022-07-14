module.exports = {
    "platform": "bitbucket-server",
    "username": "myusername",
    "password": "mytoken",
    "endpoint": "bitbucketbaseurl",
    "repositories": ["~myusername/myrepo"],
    "enabled": true,
    "onboarding": false,
    "requireConfig": false,
    "logLevel": "debug",
    "includeForks": true,
    "enabledManagers": ["maven"],
    "packageRules": [
      {
          "matchDatasources": ["maven"],
          "registryUrls": ["https://mynexus/repository/maven-group/"],
          "customRegistrySupport": true
      },
    ],
  };