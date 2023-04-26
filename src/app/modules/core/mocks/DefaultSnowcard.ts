import { Snowcard } from 'src/app/modules/core/interfaces';

export const DEFAULT_SNOWCARD: Snowcard = {
  sections: [
    {
      fields: [
        {
          name: 'Requirement #',
          type: 'string',
          value: ''
        },
        {
          name: 'Requirement Type',
          type: 'string',
          value: ''
        },
        {
          name: 'Event/BUC/PUC',
          type: 'string',
          value: ''
        }
      ]
    },
    {
      fields: [
        {
          name: 'Description',
          type: 'string',
          value: ''
        }
      ]
    },
    {
      fields: [
        {
          name: 'Rationale',
          type: 'string',
          value: ''
        }
      ]
    },
    {
      fields: [
        {
          name: 'Originator',
          type: 'string',
          value: ''
        }
      ]
    },
    {
      fields: [
        {
          name: 'Fit Criterion',
          type: 'string',
          value: ''
        }
      ]
    },
    {
      fields: [
        {
          name: 'Customer Satisfaction',
          type: 'number',
          value: ''
        },
        {
          name: 'Customer Dissatisfaction',
          type: 'number',
          value: ''
        }
      ]
    },
    {
      fields: [
        {
          name: 'Dependencies',
          type: 'string',
          value: ''
        },
        {
          name: 'Conflicts',
          type: 'string',
          value: ''
        }
      ]
    },
    {
      fields: [
        {
          name: 'Supporting Materials',
          type: 'string',
          value: ''
        }
      ]
    },
    {
      fields: [
        {
          name: 'History',
          type: 'string',
          value: ''
        }
      ]
    },
  ]
};
