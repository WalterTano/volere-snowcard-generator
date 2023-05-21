import { ISnowcard } from 'src/app/modules/core/interfaces';

export const DEFAULT_SNOWCARD: ISnowcard = {
  sections: [
    {
      fields: [
        {
          name: 'Requirement Type',
          type: 'text',
          value: ''
        },
        {
          name: 'Event/BUC/PUC',
          type: 'text',
          value: ''
        }
      ]
    },
    {
      fields: [
        {
          name: 'Description',
          type: 'textArea',
          value: ''
        }
      ]
    },
    {
      fields: [
        {
          name: 'Rationale',
          type: 'textArea',
          value: ''
        }
      ]
    },
    {
      fields: [
        {
          name: 'Originator',
          type: 'text',
          value: ''
        }
      ]
    },
    {
      fields: [
        {
          name: 'Fit Criterion',
          type: 'textArea',
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
          type: 'text',
          value: ''
        },
        {
          name: 'Conflicts',
          type: 'text',
          value: ''
        }
      ]
    },
    {
      fields: [
        {
          name: 'Supporting Materials',
          type: 'textArea',
          value: ''
        }
      ]
    },
    {
      fields: [
        {
          name: 'History',
          type: 'text',
          value: ''
        }
      ]
    },
  ]
};
