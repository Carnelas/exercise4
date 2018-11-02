//Validation Client for María Alonso

const axios = require('axios');

// returns OK when empty strings are sent as destination/body
axios.post('http://localhost:9001/messages', { destination:"", body:"" })

// returns OK but destination/body are too long
axios.post('http://localhost:9001/messages', { destination:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque mollis nibh nec odio rhoncus, vitae elementum lorem gravida. Ut iaculis diam ac pretium dictum. Curabitur quis nisi nec lacus faucibus accumsan. ", body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque mollis nibh nec odio rhoncus, vitae elementum lorem gravida. Ut iaculis diam ac pretium dictum. Curabitur quis nisi nec lacus faucibus accumsan. Suspendisse vehicula augue eget ornare porttitor. Curabitur faucibus nulla arcu. Nulla non efficitur sapien, at pharetra elit. Nunc ultrices velit id metus semper, dictum vestibulum ex vehicula. Vestibulum maximus maximus rhoncus. Suspendisse porttitor aliquam libero a porta." })

// returns OK but destination/body should accept strings only
axios.post('http://localhost:9001/messages', { destination: 2343242, body: 23423423 })

// returns OK but destination/body should accept strings only
axios.post('http://localhost:9001/messages', { destination:null, body:null })