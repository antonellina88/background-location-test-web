import { Injectable } from '@angular/core';

import * as AWS from 'aws-sdk';
import {DynamoDB} from "aws-sdk";

@Injectable()
export class PositionService2 {

  constructor() {
    let credentials: any = new AWS.CognitoIdentityCredentials({
      IdentityPoolId: 'eu-west-1:bab5e594-ee91-460e-9b01-50245c895107'
    });

    AWS.config.update({
      region: 'eu-west-1',
      credentials: credentials
    });

    let params: DynamoDB.ScanParam = {
      TableName: 'Position'
    };

    let dynamodDbClient: DynamoDB.DocumentClient =  new AWS.DynamoDB.DocumentClient();

    dynamodDbClient.scan(params, (error, data) => {
      console.log(error);
      console.log(data);
    });
  }

}
