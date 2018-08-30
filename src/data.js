export default {
  experience: {
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
      angular: {
        parent: 'skill.javaScript',
        title: 'Angular',
      },
      angularJs: {
        parent: 'skill.angular',
        score: 6,
        title: 'AngularJS 1.5',
        description: 'Component based AngularJS.',
      },
      ant: {
        legacy: true,
        parent: 'category.tools',
        title: 'Ant',
      },
      async: {
        legacy: true,
        parent: 'category.stack',
        title: 'Async',
      },
      atom: {
        parent: 'category.tools',
        title: 'Atom',
      },
      aws: {
        parent: 'category.stack',
        title: 'Amazon Web Services',
      },
      backbone: {
        legacy: true,
        parent: 'category.stack',
        score: 9,
        title: 'Backbone',
      },
      bamboo: {
        parent: 'category.tools',
        score: 8,
        title: 'Bamboo',
      },
      bitbucket: {
        parent: 'skill.git',
        title: 'BitBucket',
      },
      bootstrap: {
        parent: 'category.stack',
        score: 8,
        title: 'Bootstrap',
      },
      bunyan: {
        parent: 'skill.javaScript',
        score: 9,
        title: 'Bunyan',
      },
      chai: {
        parent: 'category.stack',
        score: 9,
        title: 'Chai',
      },
      clearCase: {
        legacy: true,
        parent: 'category.tools',
        title: 'Rational ClearCase',
      },
      coffeeScript: {
        legacy: true,
        parent: 'skill.javaScript',
        title: 'CoffeeScript',
      },
      confluence: {
        parent: 'category.tools',
        title: 'Confluence',
      },
      css: {
        parent: 'category.lanugage',
        title: 'CSS',
      },
      drupal: {
        parent: 'category.stack',
        title: 'Drupal',
      },
      drupal7: {
        parent: 'skill.drupal',
        score: 3,
        title: 'Drupal 7',
      },
      dynamodb: {
        parent: 'skill.aws',
        score: 7,
        title: 'DynamoDB',
      },
      eclipse: {
        legacy: true,
        parent: 'category.tools',
        title: 'Eclipse',
      },
      elasticSearch: {
        parent: 'category.stack',
        score: 6,
        title: 'ElasticSearch',
      },
      en: {
        parent: 'category.language',
        score: 10,
        title: 'English 🇬🇧󠁧󠁿',
      },
      es2015: {
        parent: 'skill.javaScript',
        score: 10,
        title: 'ES2015 - ES2018',
      },
      es5: {
        parent: 'skill.javaScript',
        score: 10,
        title: 'ES5',
      },
      express: {
        parent: 'category.stack',
        score: 8,
        title: 'Express',
      },
      fr: {
        parent: 'category.language',
        score: 6,
        title: 'French 🇫🇷',
      },
      gigya: {
        parent: 'category.stack',
        score: 6,
        title: 'Gigya',
      },
      git: {
        parent: 'category.tools',
        score: 8,
        title: 'Git',
      },
      github: {
        parent: 'skill.git',
        title: 'GitHub',
      },
      gitlab: {
        parent: 'skill.git',
        title: 'GitLab',
      },
      grunt: {
        parent: 'category.tools',
        score: 6,
        title: 'Grunt',
      },
      gulp: {
        parent: 'category.tools',
        score: 6,
        title: 'Gulp',
      },
      handlebars: {
        legacy: true,
        parent: 'category.stack',
        score: 7,
        title: 'Handlebars',
      },
      html: {
        legacy: true,
        parent: 'category.stack',
        title: 'HTML',
      },
      html4: {
        parent: 'skill.html',
        score: 9,
        title: 'HTML 4',
      },
      html5: {
        parent: 'skill.html',
        score: 7,
        title: 'HTML 5',
      },
      jQuery: {
        legacy: true,
        parent: 'skill.javaScript',
        score: 8,
        title: 'jQuery',
      },
      jQueryMobile: {
        legacy: true,
        parent: 'skill.jquery',
        title: 'jQuery Mobile',
      },
      jQueryUi: {
        legacy: true,
        parent: 'skill.jquery',
        title: 'jQuery UI',
      },
      java: {
        legacy: true,
        parent: 'category.stack',
        title: 'Java',
      },
      java6: {
        legacy: true,
        parent: 'skill.java',
        score: 5,
        title: 'Java 6',
      },
      java8: {
        parent: 'skill.java',
        score: 6,
        title: 'Java 8',
      },
      javaScript: {
        parent: 'category.language',
        score: 10,
        title: 'JavaScript',
      },
      jBoss: {
        parent: 'skill.java',
        title: 'JBoss',
      },
      jest: {
        parent: 'skill.javaScript',
        score: 10,
        title: 'Jest',
      },
      jira: {
        parent: 'category.tools',
        score: 9,
        title: 'JIRA',
      },
      json: {
        parent: 'category.stack',
        score: 10,
        title: 'JSON',
      },
      junit: {
        parent: 'skill.java',
        score: 3,
        title: 'JUnit',
      },
      kibana: {
        parent: 'category.stack',
        score: 6,
        title: 'Kibana',
      },
      kineticJs: {
        legacy: true,
        parent: 'skill.javaScript',
        title: 'KineticJS',
      },
      koa: {
        parent: 'skill.javaScript',
        score: 10,
        title: 'Koa',
      },
      lambda: {
        parent: 'skill.aws',
        score: 9,
        title: 'Lambda',
      },
      loDash: {
        parent: 'skill.javaScript',
        score: 9,
        title: 'Lo-Dash',
      },
      log4J: {
        parent: 'skill.java',
        score: 8,
        title: 'Log4J',
      },
      logStash: {
        parent: 'category.stack',
        score: 4,
        title: 'LogStash',
      },
      maven: {
        parent: 'skill.java',
        score: 7,
        title: 'Maven',
      },
      mocha: {
        parent: 'skill.javaScript',
        score: 9,
        title: 'Mocha',
      },
      mongoDb: {
        parent: 'category.stack',
        score: 9,
        title: 'MongoDB',
      },
      mooTools: {
        legacy: true,
        parent: 'skill.javaScript',
        title: 'MooTools',
      },
      mySql: {
        parent: 'category.stack',
        score: 6,
        title: 'MySQL',
      },
      nl: {
        parent: 'category.language',
        score: 10,
        title: 'Dutch 🇳🇱',
      },
      nodeJs: {
        parent: 'skill.javaScript',
        score: 9,
        title: 'NodeJS',
      },
      npm: {
        parent: 'skill.nodeJs',
        score: 9,
        title: 'npm',
      },
      phoneGap: {
        parent: 'category.stack',
        score: 2,
        title: 'PhoneGap',
      },
      php: {
        parent: 'category.language',
        score: 4,
        title: 'PHP',
      },
      phpMyAdmin: {
        parent: 'skill.php',
        score: 7,
        title: 'PhpMyAdmin',
      },
      python: {
        parent: 'category.language',
        score: 2,
        title: 'Python',
      },
      quicksand: {
        legacy: true,
        parent: 'skill.javaScript',
        title: 'Quicksand',
      },
      redis: {
        parent: 'category.stack',
        score: 6,
        title: 'Redis',
      },
      requireJs: {
        legacy: true,
        parent: 'skill.javaScript',
        score: 10,
        title: 'RequireJS',
      },
      rest: {
        parent: 'category.stack',
        score: 9,
        title: 'REST',
      },
      ruby: {
        parent: 'category.language',
        score: 1,
        title: 'Ruby',
      },
      rubyOnRails: {
        legacy: true,
        parent: 'skill.ruby',
        title: 'Ruby on Rails 4',
      },
      s3: {
        parent: 'skill.aws',
        score: 8,
        title: 'S3',
      },
      scss: {
        parent: 'skill.css',
        score: 8,
        title: 'SCSS',
      },
      selligent: {
        parent: 'category.stack',
        score: 4,
        title: 'Selligent',
      },
      ses: {
        parent: 'skill.aws',
        score: 8,
        title: 'SES',
      },
      sns: {
        parent: 'skill.aws',
        score: 9,
        title: 'SNS',
      },
      spring: {
        parent: 'skill.java',
        score: 2,
        title: 'Spring 3',
      },
      sqs: {
        parent: 'skill.aws',
        score: 9,
        title: 'SQS',
      },
      stash: {
        legacy: true,
        parent: 'skill.git',
        title: 'Stash',
      },
      struts: {
        legacy: true,
        parent: 'skill.java',
        title: 'Struts 1',
      },
      sublimeText: {
        parent: 'category.tools',
        title: 'Sublime Text',
      },
      svn: {
        legacy: true,
        parent: 'category.tools',
        title: 'SVN',
      },
      teamSite: {
        legacy: true,
        parent: 'skill.java',
        title: 'TeamSite / LiveSite',
      },
      tinyMce: {
        legacy: true,
        parent: 'skill.javaScript',
        title: 'TinyMCE',
      },
      tomcat: {
        parent: 'skill.java',
        title: 'Tomcat',
      },
      underscore: {
        legacy: true,
        parent: 'skill.javaScript',
        title: 'Underscore',
      },
      vsCode: {
        parent: 'category.tools',
        title: 'Visual Studio Code',
      },
      winston: {
        parent: 'skill.javaScript',
        score: 9,
        title: 'Winston',
      },
      xml: {
        parent: 'category.stack',
        title: 'XML',
      },
      xslt: {
        parent: 'skill.xml',
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
