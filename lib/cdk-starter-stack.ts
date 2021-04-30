/* eslint-disable max-classes-per-file */
import {Bucket} from '@aws-cdk/aws-s3';
import * as cdk from '@aws-cdk/core';

export class UploadsBucketConstruct extends cdk.Construct {
  public readonly s3Bucket: Bucket;

  constructor(scope: cdk.Construct, id: string) {
    super(scope, id);

    this.s3Bucket = new Bucket(this, id, {
      removalPolicy: cdk.RemovalPolicy.DESTROY,
    });
  }
}

export class CdkIdentifiersStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const {s3Bucket: s3BucketFirst} = new UploadsBucketConstruct(
      this,
      'new-s3-bucket',
    );

    const s3BucketPath = s3BucketFirst.node.path;
    console.log('path is 👉 ', s3BucketPath);
  }
}
