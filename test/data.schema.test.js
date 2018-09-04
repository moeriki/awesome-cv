import Ajv from 'ajv';

import data from '../src/data';

// types

const PATTERN_ID = '^\\w+$';

const _id = { type: 'string', pattern: PATTERN_ID };

const date = { type: 'string', pattern: '^(20(0|1|2)\\d(/(0|1)\\d)?|…)$' };

const icon = { type: 'string', pattern: '^fa. fa-[a-z-]+$' };

const link = { type: 'string', format: 'url' };

const string = { type: 'string' };

// leafs

const categories = {
  type: 'object',
  patternProperties: {
    [PATTERN_ID]: {
      type: 'object',
      properties: { title: string },
      additionalProperties: false,
      required: ['title'],
    },
  },
  additionalProperties: false,
};

const contact = {
  type: 'object',
  properties: { _id, icon, label: string, link, value: string },
  required: ['_id', 'label', 'link', 'value'],
  additionalProperties: false,
};

const clients = {
  type: 'object',
  patternProperties: {
    [PATTERN_ID]: {
      type: 'object',
      properties: { title: string },
      additionalProperties: false,
      required: ['title'],
    },
  },
  additionalProperties: false,
};

const education = {
  type: 'object',
  properties: {
    dateFrom: date,
    dateUntil: date,
    icon,
    location: string,
    title: string,
  },
  additionalProperties: false,
  required: ['dateFrom', 'dateUntil', 'location', 'title'],
};

const employers = {
  type: 'object',
  patternProperties: {
    [PATTERN_ID]: {
      type: 'object',
      properties: {
        dateFrom: date,
        dateUntil: date,
        description: { type: 'string' },
        location: { type: 'string' },
        title: { type: 'string' },
      },
      additionalProperties: false,
      required: ['dateFrom', 'dateUntil', 'description', 'title'],
    },
  },
  additionalProperties: false,
};

const projects = {
  type: 'object',
  patternProperties: {
    [PATTERN_ID]: {
      type: 'object',
      properties: {
        clientId: _id,
        dateFrom: date,
        dateUntil: date,
        description: string,
        employerId: _id,
        role: string,
        title: string,
      },
      additionalProperties: false,
      required: [
        'clientId',
        'dateFrom',
        'dateUntil',
        'description',
        'employerId',
        'role',
        'title',
      ],
    },
  },
  additionalProperties: false,
};

const skills = {
  type: 'object',
  patternProperties: {
    [PATTERN_ID]: {
      type: 'object',
      properties: {
        parent: { type: 'string', pattern: '^(categories|skills).\\w+$' },
        description: string,
        legacy: { type: 'boolean' },
        score: { type: 'number' },
        title: string,
      },
      additionalProperties: false,
      required: ['parent', 'title'],
    },
  },
};

// groups

const experience = {
  type: 'object',
  properties: { categories, clients, education, employers, projects, skills },
  additionalProperties: false,
  required: [],
};

const profile = {
  type: 'object',
  properties: {
    contacts: { type: 'array', item: contact, minItems: 1 },
    name: { type: 'string' },
    title: { type: 'string' },
  },
  additionalProperties: false,
  required: ['contacts', 'name', 'title'],
};

// core

const schema = {
  type: 'object',
  properties: { experience, profile },
  additionalProperties: false,
  required: ['experience', 'profile'],
};

// test

it('should be schema validated', () => {
  const validate = new Ajv().compile(schema);
  const valid = validate(data);
  expect(validate.errors).toBe(null);
  expect(valid).toBe(true);
});
