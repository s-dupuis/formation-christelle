/**
 * @flow
 * @relayHash 89136b1dfe8980ff522df82f50dc5036
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type SubscriberSurveyAnswersMutationVariables = {|
  subscriberId: string,
  question1: string,
  question2: string,
|};
export type SubscriberSurveyAnswersMutationResponse = {|
  +subscriberSurveyAnswers: ?{|
    +ok: boolean,
    +error: ?string,
  |}
|};
export type SubscriberSurveyAnswersMutation = {|
  variables: SubscriberSurveyAnswersMutationVariables,
  response: SubscriberSurveyAnswersMutationResponse,
|};
*/


/*
mutation SubscriberSurveyAnswersMutation(
  $subscriberId: String!
  $question1: String!
  $question2: String!
) {
  subscriberSurveyAnswers(subscriberId: $subscriberId, question1: $question1, question2: $question2) {
    ok
    error
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "question1"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "question2"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "subscriberId"
},
v3 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "question1",
        "variableName": "question1"
      },
      {
        "kind": "Variable",
        "name": "question2",
        "variableName": "question2"
      },
      {
        "kind": "Variable",
        "name": "subscriberId",
        "variableName": "subscriberId"
      }
    ],
    "concreteType": "DefaultMutationResponse",
    "kind": "LinkedField",
    "name": "subscriberSurveyAnswers",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "ok",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "error",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "SubscriberSurveyAnswersMutation",
    "selections": (v3/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v2/*: any*/),
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Operation",
    "name": "SubscriberSurveyAnswersMutation",
    "selections": (v3/*: any*/)
  },
  "params": {
    "id": "89136b1dfe8980ff522df82f50dc5036",
    "metadata": {},
    "name": "SubscriberSurveyAnswersMutation",
    "operationKind": "mutation",
    "text": null
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'c63778d0db8cd439e211031340c2fc23';

module.exports = node;
