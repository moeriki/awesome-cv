export default {
  experience: {
    categories: {
      language: { title: 'Language' },
      // personal: { title: 'Personal' },
      stack: { title: 'Stack' },
      tools: { title: 'Tools' },
    },
    clients: {
      belgacom: { title: 'Belgacom' },
      medialaan: { title: 'MEDIALAAN' },
      scoutingBerg: { title: 'Scouting Berg' },
      sigedis: { title: 'Sigedis' },
      tme: { title: 'Toyota Motors Europe' },
      vanerum: { title: 'Vanerum' },
    },
    education: {
      dateFrom: '2004',
      dateUntil: '2008',
      icon: 'fal fa-graduation-cap',
      location: 'KHLeuven',
      title: 'Toegepaste Informatica',
    },
    employers: {
      playground: {
        dateFrom: '2002',
        dateUntil: '2009',
        description:
          'In the latter half of my adolescent years I spend most of my summer guarding and animating children of various ages at a local playground.',
        location: 'Kampenhout',
        title: 'Playground',
      },
      scouting: {
        dateFrom: '2005',
        dateUntil: '2012',
        description:
          'For seven years I’ve given life and soul while actively participating in the scouting group of Berg.',
        location: 'Berg',
        title: 'Scouting',
      },
      lbi: {
        description:
          'Some months after graduation I started at my first job as a junior Java developer at LBi group Belgium. Both my first successes and my first failures were a fact.',
        dateFrom: '2008',
        dateUntil: '2011',
        title: 'LBi Belgium',
      },
      cernum: {
        dateFrom: '2011',
        dateUntil: '2013',
        description:
          'As a Java developer I continued delivering the better crafts of front-end Java code. Though I had fun, I couldn’t help but feeling a deficit inside.',
        title: 'Cernum',
      },
      foursevens: {
        dateFrom: '2013',
        dateUntil: '2015',
        description: `At foursevens I found my true love for development. Web + Mobile + JavaScript! It's a thrill and I loved it.`,
        title: 'Foursevens',
      },
      independant: {
        dateFrom: '2015',
        dateUntil: '…',
        description: `As an independent I'd doing both the same and more of everything I love.`,
        title: 'Independant',
      },
    },
    projects: {
      db2p: {
        clientId: 'sigedis',
        dateFrom: '2011',
        dateUntil: '2013',
        description:
          'In order to have better control over fiscal and social data concerning the second pension pillar in Belgium a database has been under development since two years. This will contain personal data about the additional pension funds for employers, self-employed and officials.',
        employerId: 'cernum',
        role:
          'Development of multiple frontends in Spring MVC and Struts, additionally a backend module for data validation.',
        title: 'DB2P',
      },
      leadMgmt: {
        clientId: 'tme',
        dateFrom: '2015',
        dateUntil: '2016',
        description:
          'For a more managed follow-up of leads we are developing a group of AWS micro-services that will automate the capturing, processing and maintenance of lead data.',
        employerId: 'foursevens',
        role: 'Lead Developer',
        title: 'Lead Management',
      },
      learnhub: {
        clientId: 'vanerum',
        dateFrom: '2013',
        dateUntil: '2015',
        description:
          'We are creating an interactive whiteboard web application to complement the hardware Vanerum sells to educational institutions. This involves a complex front-end architecture to ensure minimum maintenance and maximum flexibility towards additional future developments. The purpose of this beautiful and ambitious project, created in alliance with XAOP, is to empower teachers in all fields of education.',
        employerId: 'foursevens',
        role: 'Architect, Lead Developer',
        title: 'i3LEARNHUB',
      },
      medialaan: {
        clientId: 'medialaan',
        dateFrom: '2016',
        dateUntil: '2018',
        description:
          'In an ever-changing digital landscape the medialaan New Media teams crafts and maintains services for serving video content live and on demand to consumers. Paired with a varying slew of microservices the challenge never ends.',
        employerId: 'foursevens',
        role: 'Lead Developer',
        title: 'Medialaan',
      },
      scoutingBerg: {
        clientId: 'scoutingBerg',
        dateFrom: '2011',
        dateUntil: '2013',
        description:
          'Scouting Berg is a local youth movement in need of an active web presence, which improves contact with both the children and their parents.',
        employerId: 'independant',
        role: 'Solo Developer, Maintainer',
        title: 'Scouting Berg',
      },
      ucms: {
        clientId: 'belgacom',
        dateFrom: '2009',
        dateUntil: '2011',
        description:
          'uCMS is a unified CMS for the Belgacom Group based on the LiveSite CMS. For this ambitious project we would implement an abstract unified system we could use as base to develop the future public sites of Belgacom.',
        employerId: 'lbi',
        role: 'Developer',
        title: 'uCMS',
      },
    },
    skills: {
      angularJs: {
        parent: 'skills.javaScript',
        score: 6,
        title: 'AngularJS 1.5',
        description: 'Component based AngularJS.',
      },
      ant: {
        legacy: true,
        parent: 'categories.tools',
        title: 'Ant',
      },
      async: {
        legacy: true,
        parent: 'categories.stack',
        title: 'async',
      },
      atom: {
        parent: 'categories.tools',
        score: 0,
        title: 'Atom',
      },
      aws: {
        parent: 'categories.stack',
        score: 0,
        title: 'Amazon Web Services',
      },
      backbone: {
        legacy: true,
        parent: 'categories.stack',
        title: 'Backbone',
      },
      bamboo: {
        parent: 'categories.tools',
        score: 7,
        title: 'Bamboo',
      },
      bitbucket: {
        parent: 'skills.git',
        score: 0,
        title: 'BitBucket',
      },
      bootstrap: {
        parent: 'categories.stack',
        score: 7,
        title: 'Bootstrap',
      },
      bunyan: {
        parent: 'skills.javaScript',
        score: 9,
        title: 'Bunyan',
      },
      chai: {
        parent: 'skills.javaScript',
        score: 9,
        title: 'Chai',
      },
      clearCase: {
        legacy: true,
        parent: 'categories.tools',
        title: 'Rational ClearCase',
      },
      coffeeScript: {
        legacy: true,
        parent: 'skills.javaScript',
        title: 'CoffeeScript',
      },
      confluence: {
        parent: 'categories.tools',
        score: 0,
        title: 'Confluence',
      },
      css: {
        parent: 'categories.language',
        score: 9,
        title: 'CSS',
      },
      drupal: {
        parent: 'categories.stack',
        score: 0,
        title: 'Drupal',
      },
      drupal7: {
        parent: 'skills.drupal',
        score: 5,
        title: 'Drupal 7',
        description: 'Drupal 7 CMS.',
      },
      dynamodb: {
        parent: 'skills.aws',
        score: 8,
        title: 'DynamoDB',
      },
      eclipse: {
        legacy: true,
        parent: 'categories.tools',
        title: 'Eclipse',
      },
      elasticSearch: {
        parent: 'categories.stack',
        score: 6,
        title: 'ElasticSearch',
      },
      en: {
        parent: 'categories.language',
        score: 10,
        title: 'English 🇬🇧󠁧󠁿',
      },
      es2015: {
        parent: 'skills.javaScript',
        score: 9,
        title: 'ES2015',
      },
      es2016: {
        parent: 'skills.javaScript',
        score: 10,
        title: 'ES2016',
      },
      es2017: {
        parent: 'skills.javaScript',
        score: 10,
        title: 'ES2017',
      },
      es2018: {
        parent: 'skills.javaScript',
        score: 10,
        title: 'ES2018',
      },
      es5: {
        parent: 'skills.javaScript',
        score: 10,
        title: 'ES5',
      },
      express: {
        parent: 'categories.stack',
        score: 8,
        title: 'Express',
      },
      fr: {
        parent: 'categories.language',
        score: 6,
        title: 'French 🇫🇷',
      },
      gigya: {
        parent: 'categories.stack',
        score: 7,
        title: 'Gigya',
      },
      git: {
        parent: 'categories.tools',
        score: 8,
        title: 'Git',
      },
      github: {
        parent: 'skills.git',
        score: 0,
        title: 'GitHub',
      },
      gitlab: {
        parent: 'skills.git',
        score: 0,
        title: 'GitLab',
      },
      grunt: {
        parent: 'skills.javaScript',
        score: 6,
        title: 'Grunt',
      },
      gulp: {
        parent: 'skills.javaScript',
        score: 6,
        title: 'Gulp',
      },
      handlebars: {
        legacy: true,
        parent: 'categories.stack',
        title: 'Handlebars',
      },
      html: {
        parent: 'categories.stack',
        score: 0,
        title: 'HTML',
      },
      html4: {
        parent: 'skills.html',
        score: 9,
        title: 'HTML 4',
      },
      html5: {
        parent: 'skills.html',
        score: 7,
        title: 'HTML 5',
      },
      jQuery: {
        parent: 'skills.javaScript',
        score: 8,
        title: 'jQuery',
      },
      jQueryMobile: {
        legacy: true,
        parent: 'skills.jQuery',
        title: 'jQuery Mobile',
      },
      jQueryUi: {
        legacy: true,
        parent: 'skills.jQuery',
        title: 'jQuery UI',
      },
      java: {
        parent: 'categories.stack',
        score: 0,
        title: 'Java',
      },
      java6: {
        legacy: true,
        parent: 'skills.java',
        title: 'Java 6',
      },
      java8: {
        parent: 'skills.java',
        score: 6,
        title: 'Java 8',
      },
      javaScript: {
        parent: 'categories.language',
        score: 10,
        title: 'JavaScript',
      },
      jBoss: {
        parent: 'skills.java',
        score: 0,
        title: 'JBoss',
      },
      jest: {
        parent: 'skills.javaScript',
        score: 10,
        title: 'Jest',
      },
      jira: {
        parent: 'categories.tools',
        score: 8,
        title: 'JIRA',
      },
      json: {
        parent: 'categories.stack',
        score: 10,
        title: 'JSON',
      },
      jUnit: {
        parent: 'skills.java',
        score: 0,
        title: 'JUnit',
      },
      kibana: {
        parent: 'categories.stack',
        score: 6,
        title: 'Kibana',
      },
      kineticJs: {
        legacy: true,
        parent: 'skills.javaScript',
        title: 'KineticJS',
      },
      koa: {
        parent: 'skills.javaScript',
        score: 10,
        title: 'Koa',
      },
      lambda: {
        description: 'With NodeJS.',
        parent: 'skills.aws',
        score: 9,
        title: 'Lambda',
      },
      less: {
        parent: 'skills.css',
        score: 7,
        title: 'LESS',
      },
      lodash: {
        description: 'I love Lodash FP!',
        parent: 'skills.javaScript',
        score: 9,
        title: 'Lodash',
      },
      log4J: {
        parent: 'skills.java',
        score: 0,
        title: 'Log4J',
      },
      logStash: {
        parent: 'categories.stack',
        score: 0,
        title: 'LogStash',
      },
      maven: {
        parent: 'skills.java',
        score: 6,
        title: 'Maven',
      },
      mocha: {
        parent: 'skills.javaScript',
        score: 9,
        title: 'Mocha',
      },
      mongoDb: {
        parent: 'categories.stack',
        score: 8,
        title: 'MongoDB',
      },
      mooTools: {
        legacy: true,
        parent: 'skills.javaScript',
        title: 'MooTools',
      },
      mySql: {
        parent: 'categories.stack',
        score: 6,
        title: 'MySQL',
      },
      nl: {
        parent: 'categories.language',
        score: 10,
        title: 'Dutch 🇳🇱',
      },
      nodeJs: {
        parent: 'skills.javaScript',
        score: 8,
        title: 'NodeJS',
      },
      npm: {
        parent: 'skills.nodeJs',
        score: 10,
        title: 'npm',
      },
      phoneGap: {
        parent: 'categories.stack',
        score: 0,
        title: 'PhoneGap',
      },
      php: {
        parent: 'categories.language',
        score: 5,
        title: 'PHP',
      },
      phpMyAdmin: {
        parent: 'skills.php',
        score: 7,
        title: 'PhpMyAdmin',
      },
      python: {
        parent: 'categories.language',
        score: 0,
        title: 'Python',
      },
      redis: {
        parent: 'categories.stack',
        score: 5,
        title: 'Redis',
      },
      requireJs: {
        legacy: true,
        parent: 'skills.javaScript',
        title: 'RequireJS',
      },
      rest: {
        parent: 'categories.stack',
        score: 9,
        title: 'REST',
      },
      ruby: {
        parent: 'categories.language',
        score: 0,
        title: 'Ruby',
      },
      rubyOnRails: {
        parent: 'skills.ruby',
        score: 0,
        title: 'Ruby on Rails 4',
      },
      s3: {
        parent: 'skills.aws',
        score: 8,
        title: 'S3',
      },
      scss: {
        parent: 'skills.css',
        score: 8,
        title: 'SCSS',
      },
      selligent: {
        parent: 'categories.stack',
        score: 0,
        title: 'Selligent',
      },
      ses: {
        parent: 'skills.aws',
        score: 8,
        title: 'SES',
      },
      sns: {
        parent: 'skills.aws',
        score: 9,
        title: 'SNS',
      },
      spring: {
        parent: 'skills.java',
        score: 5,
        title: 'Spring 3',
      },
      sqs: {
        parent: 'skills.aws',
        score: 9,
        title: 'SQS',
      },
      stash: {
        legacy: true,
        parent: 'skills.git',
        title: 'Stash',
      },
      struts: {
        legacy: true,
        parent: 'skills.java',
        title: 'Struts 1',
      },
      sublimeText: {
        parent: 'categories.tools',
        score: 0,
        title: 'Sublime Text',
      },
      svn: {
        legacy: true,
        parent: 'categories.tools',
        title: 'SVN',
      },
      teamSite: {
        legacy: true,
        parent: 'skills.java',
        title: 'TeamSite / LiveSite',
      },
      tinyMce: {
        legacy: true,
        parent: 'skills.javaScript',
        title: 'TinyMCE',
      },
      tomcat: {
        parent: 'skills.java',
        score: 0,
        title: 'Tomcat',
      },
      underscore: {
        legacy: true,
        parent: 'skills.javaScript',
        title: 'Underscore',
      },
      vsCode: {
        parent: 'categories.tools',
        score: 0,
        title: 'Visual Studio Code',
      },
      winston: {
        parent: 'skills.javaScript',
        score: 9,
        title: 'Winston',
      },
      xml: {
        parent: 'categories.stack',
        score: 10,
        title: 'XML',
      },
      xslt: {
        parent: 'skills.xml',
        score: 5,
        title: 'XSLT / XPath',
      },
    },
  },
  profile: {
    contacts: [
      {
        _id: 'email',
        icon: 'fal fa-at',
        label: 'E-mail',
        link: 'mailto:dieter@moeriki.com',
        value: 'dieter@moeriki.com',
      },
      {
        _id: 'github',
        icon: 'fab fa-github',
        label: 'GitHub',
        link: 'https://github.com/moeriki',
        value: '@moeriki',
      },
      {
        _id: 'twitter',
        icon: 'fab fa-twitter',
        label: 'Twitter',
        link: 'https://twitter.com/dieterluypaert',
        value: '@dieterluypaert',
      },
      // {
      //   _id: 'telephone',
      //   icon: 'fal fa-phone',
      //   label: 'Telephone',
      //   link: 'tel:+32 494 35 83 17',
      //   value: '+32 494 35 83 17',
      // },
      {
        _id: 'home',
        icon: 'fal fa-home',
        label: 'Address',
        link: 'https://www.openstreetmap.org/#map=15/51.0273/4.4801',
        value: 'Mechelen',
      },
    ],
    name: 'Dieter Luypaert',
    title: 'Senior Fullstack Developer',
  },
};
