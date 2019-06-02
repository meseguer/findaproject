const axios = require('axios');

exports.get_projects = async () => {
  const source = 'https://www.reddit.com/r/cofounder/new.json?sort=new';
  const response = await axios.get(source);
  const data = response.data.data.children;
  return data.map(project => processProjects(project.data.selftext));
};

function processProjects(projectText) {
  return projectText;
}
