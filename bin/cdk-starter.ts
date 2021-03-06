#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import {CdkIdentifiersStack} from '../lib/cdk-starter-stack';

const app = new cdk.App();

new CdkIdentifiersStack(app, 'cdk-identifiers-stack-dev', {
  stackName: 'cdk-identifiers-stack-dev',
  env: {
    region: process.env.CDK_DEFAULT_REGION,
    account: process.env.CDK_DEFAULT_ACCOUNT,
  },
});

new CdkIdentifiersStack(app, 'cdk-identifiers-stack-prod', {
  stackName: 'cdk-identifiers-stack-prod',
  env: {
    region: process.env.CDK_DEFAULT_REGION,
    account: process.env.CDK_DEFAULT_ACCOUNT,
  },
});
