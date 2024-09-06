const config = {
  imageServiceBaseUrl:
    "https://bjssacademyhackday-a8fqfwapbxfpa4b5.uksouth-01.azurewebsites.net",
  teamName: "Nintendo",

  imageServiceUrl: function () {
    return `${config.imageServiceBaseUrl}/IL/teams/${config.teamName}/files`;
  },
  backendLambdaUrl: 'https://lq7cuebiikbie2iz2jh26cfvba0aazpk.lambda-url.us-east-1.on.aws/'
};

export default config;
