// Lambda function for this project, hosted on AWS servers but reproduced here for context. 
//
// Copyright 2019 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

var aws = require('aws-sdk');
var ses = new aws.SES({region: 'us-west-2'});

const ddb = new aws.DynamoDB.DocumentClient();

exports.handler = (event, context, callback) => {
    
     var params = {
        Destination: {
            ToAddresses: [event["recipient"]]
        },
        Message: {
            Body: {
                Text: { Data: event["body"]
                    
                }
                
            },
            
            Subject: { Data: event["subject"]
                
            }
        },
        Source: process.env.source
    };

    
     ses.sendEmail(params, function (err, data) {
        callback(null, {err: err, data: data});
        if (err) {
            console.log(err);
            context.fail(err);
        } else {
            
            console.log(data);
            context.succeed(event);
        }
    });
    
    ddb.put({
        TableName: "mk-challenge-table",
        Item: {
            requestID: new Date().toISOString(),
            message: event["message"]
        }
    });
};
