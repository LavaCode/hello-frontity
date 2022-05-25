const settings = {
  "name": "hello-frontity",
  "state": {
    "frontity": {
      // "url": "https://test.frontity.org",
      "url": "https://rapenburgplaza.nl",
      "title": "Test Frontity Blog",
      "description": "WordPress installation for Frontity development"
    }
  },
  "packages": [
    {
      "name": "my-first-theme",
      // "name": "@frontity/mars-theme",
      // "state": {
      //   "theme": {
      //     "menu": [
      //     ],
      //     "featured": {
      //       "showOnList": false,
      //       "showOnPost": false
      //     }
      //   }
      // }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          // "url": "https://test.frontity.org",
          "url": "https://rapenburgplaza.nl/",
          "postTypes": [
            {
              type: "destinations",
              endpoint: "destinations",
              archive: "/destinations"
            }
          ]
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
