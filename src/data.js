export default {
  experience: {
    categories: {
      language: { title: 'Language' },
      // personal: { title: 'Personal' },
      stack: { title: 'Stack' },
      tools: { title: 'Tools' },
    },
    clients: {
      belgacom: { title: 'Belgacom', link: 'https://www.proximus.be' },
      medialaan: { title: 'MEDIALAAN', link: 'https://medialaan.be' },
      scoutsBerg: { title: 'Scouts Berg', link: 'https://scoutsberg.be' },
      scp: { title: 'Sandy Croes Photography', link: 'https://sandycroes.be' },
      sigedis: { title: 'Sigedis', link: 'https://www.sigedis.be' },
      tme: {
        title: 'Toyota Motor Europe',
        link: 'https://www.toyota-europe.com',
      },
      vanerum: {
        title: 'Vanerum',
        // NOTE wait for https to work
        // link: 'https://vanerum.com'
      },
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
          'In the latter half of my adolescent years I spent half of my summer animating children of various ages at the local playground.',
        link: 'https://www.kampenhout.be/be-oke',
        location: 'Kampenhout',
        title: "'t Grobbeltje",
      },
      scoutsBerg: {
        dateFrom: '2005',
        dateUntil: '2012',
        description:
          'For seven years I’ve given life and soul while actively participating in the scouting group of Berg.',
        link: 'https://scoutsberg.be',
        location: 'Berg',
        title: 'Scouting',
      },
      lbi: {
        description:
          'Some months after graduation I started my first job as a junior Java developer at LBi Belgium. My first failures and successes were a fact.',
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
        dateUntil: '…',
        description: `At foursevens I found my true love for development. JavaScript from back to front, to back again! It's a thrill and I love it.`,
        link: 'https://foursevens.be',
        title: 'Foursevens',
      },
      moeriki: {
        dateFrom: '2015',
        dateUntil: '…',
        description: `As an independent I'm doing the same and more of everything I love.`,
        title: 'moeriki BVBA',
      },
      independent: {
        dateFrom: '2008',
        dateUntil: '…',
        description: `Sometimes I work for fun.`,
        title: 'Independent',
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
        // NOTE wait for site to be https
        // link: 'https://db2p.be',
        role: 'Developer',
        title: 'DB2P',
      },
      leadMgmt: {
        clientId: 'tme',
        dateFrom: '2015',
        dateUntil: '2016',
        description:
          'To follow up customer leads we developed an automated system to capture, process and maintain data.',
        employerId: 'foursevens',
        role: 'Lead Developer',
        title: 'Lead Management',
      },
      learnhub: {
        clientId: 'vanerum',
        dateFrom: '2013',
        dateUntil: '2015',
        description:
          'We created an interactive whiteboard web application to complement the hardware Vanerum sells to educational institutions.',
        employerId: 'foursevens',
        link: 'https://www.i3learnhub.com',
        role: 'Architect, Lead Developer',
        title: 'i3LEARNHUB',
      },
      medialaan: {
        clientId: 'medialaan',
        dateFrom: '2016',
        dateUntil: '…',
        description:
          'In an ever-changing digital landscape the medialaan New Media team crafts and maintains services for delivering TV data, on-demand, and live video content.',
        employerId: 'foursevens',
        role: 'Developer',
        title: 'Medialaan',
      },
      scp: {
        clientId: 'scp',
        dateFrom: '2016',
        dateUntil: '…',
        description: 'Sandy Croes is a photographer with an online portfolio.',
        employerId: 'moeriki',
        link: 'https://sandycroes.be',
        role: 'Admin, Operations',
        title: 'Sandy Croes Photography',
      },
      scoutsBerg: {
        clientId: 'scoutsBerg',
        dateFrom: '2011',
        dateUntil: '2013',
        description:
          'Our local youth movement was in need of an active web presence improving communication with both the children and their parents.',
        employerId: 'independent',
        link: 'https://scoutsberg.be',
        role: 'Content Manager, Designer, Operations',
        title: 'Scouts Berg',
      },
      ucms: {
        clientId: 'belgacom',
        dateFrom: '2009',
        dateUntil: '2011',
        description:
          'uCMS is a unified CMS for the former Belgacom Group based on the LiveSite CMS.',
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
      awsApiGateway: {
        parent: 'skills.aws',
        score: 8,
        title: 'Amazon API Gateway',
      },
      awsCloudFormation: {
        parent: 'skills.aws',
        score: 6,
        title: 'Amazon CloudFormation',
      },
      awsCloudFront: {
        parent: 'skills.aws',
        score: 5,
        title: 'Amazon CloudFront',
      },
      awsCloudWatch: {
        parent: 'skills.aws',
        score: 8,
        title: 'Amazon CloudWatch',
      },
      awsDynamodb: {
        parent: 'skills.aws',
        score: 8,
        title: 'Amazon DynamoDB',
      },
      awsEc2: {
        parent: 'skills.aws',
        score: 5,
        title: 'Amazon EC2',
      },
      awsElasticBeanstalk: {
        parent: 'skills.aws',
        score: 0,
        title: 'Amazon Elastic Beanstalk',
      },
      awsIam: {
        parent: 'skills.aws',
        score: 10,
        title: 'Amazon IAM',
      },
      awsLambda: {
        description: 'With Java and NodeJS.',
        parent: 'skills.aws',
        score: 9,
        title: 'Amazon Lambda',
      },
      awsRoute53: {
        parent: 'skills.aws',
        score: 7,
        title: 'Amazon Route 53',
      },
      awsS3: {
        parent: 'skills.aws',
        score: 8,
        title: 'Amazon S3',
      },
      awsSes: {
        parent: 'skills.aws',
        score: 8,
        title: 'Amazon Simple Email Service',
      },
      awsSns: {
        parent: 'skills.aws',
        score: 8,
        title: 'Amazon Simple Notification Service',
      },
      awsSqs: {
        parent: 'skills.aws',
        score: 9,
        title: 'Amazon Simple Queue Service',
      },
      awsWorkMail: {
        parent: 'skills.aws',
        score: 0,
        title: 'Amazon WorkMail',
      },
      babel: {
        parent: 'skills.javaScript',
        score: 9,
        title: 'Babel',
      },
      backbone: {
        legacy: true,
        parent: 'categories.stack',
        title: 'Backbone.js',
      },
      bamboo: {
        parent: 'categories.tools',
        score: 7,
        title: 'Atlassian Bamboo',
      },
      bitbucket: {
        parent: 'skills.git',
        score: 0,
        title: 'Atlassian BitBucket',
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
        description: 'Version 6 and 7, as CMS.',
        parent: 'categories.stack',
        score: 5,
        title: 'Drupal',
      },
      eclipse: {
        legacy: true,
        parent: 'categories.tools',
        title: 'Eclipse',
      },
      elasticSearch: {
        parent: 'categories.stack',
        score: 6,
        title: 'Elasticsearch',
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
      eslint: {
        parent: 'skills.javaScript',
        score: 10,
        title: 'ESLint',
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
        title: 'Handlebars.js',
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
      icinga: {
        parent: 'categories.tools',
        score: 6,
        title: 'Icinga',
      },
      jenkins: {
        parent: 'categories.tools',
        score: 7,
        title: 'Jenkins',
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
        title: 'Atlassian Jira',
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
      less: {
        parent: 'skills.css',
        score: 7,
        title: 'Less.js',
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
        title: 'Logstash',
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
        title: 'Node.js',
      },
      npm: {
        parent: 'skills.nodeJs',
        score: 10,
        title: 'npm',
      },
      parcel: {
        parent: 'skills.javaScript',
        score: 7,
        title: 'parcel',
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
      sass: {
        parent: 'skills.css',
        score: 8,
        title: 'Sass / SCSS',
      },
      selligent: {
        parent: 'categories.stack',
        score: 0,
        title: 'Selligent',
      },
      spring: {
        parent: 'skills.java',
        score: 5,
        title: 'Spring 3',
      },
      stash: {
        legacy: true,
        parent: 'skills.git',
        title: 'Atlassian Stash',
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
        title: 'TeamSite / liveSite',
      },
      terraform: {
        description: 'With AWS.',
        parent: 'categories.stack',
        score: 7,
        title: 'Terraform',
      },
      tinyMce: {
        legacy: true,
        parent: 'skills.javaScript',
        title: 'TinyMCE',
      },
      tomcat: {
        parent: 'skills.java',
        score: 0,
        title: 'Apache Tomcat',
      },
      underscore: {
        legacy: true,
        parent: 'skills.javaScript',
        title: 'Underscore.js',
      },
      vsCode: {
        parent: 'categories.tools',
        score: 0,
        title: 'Visual Studio Code',
      },
      vue: {
        parent: 'skills.javaScript',
        description: 'Version 2.x.',
        score: 6,
        title: 'Vue.js',
      },
      webpack: {
        parent: 'skills.javaScript',
        score: 6,
        title: 'webpack',
      },
      winston: {
        parent: 'skills.javaScript',
        score: 9,
        title: 'Winston',
      },
      wordpress: {
        description: 'Version 4.x, as CMS.',
        parent: 'categories.stack',
        score: 6,
        title: 'Wordpress',
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
