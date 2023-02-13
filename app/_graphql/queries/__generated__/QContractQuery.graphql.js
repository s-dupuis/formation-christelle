/**
 * @flow
 * @relayHash 5d0e9ce7fb867c79f84d4d17b06e03ff
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CivilityEnum = "M" | "MME" | "%future added value";
export type QContractQueryVariables = {|
  subscriberId: string
|};
export type QContractQueryResponse = {|
  +contract: ?{|
    +externalId: ?string,
    +effectDate: ?string,
    +numberOfBeneficiaries: ?number,
    +subscriber: ?{|
      +externalId: ?string,
      +isBeneficiary: ?boolean,
      +civility: ?CivilityEnum,
      +firstName: ?string,
      +lastName: ?string,
      +fullName: ?string,
      +birthName: ?string,
      +birthDate: ?string,
      +nic: ?string,
      +address: ?string,
      +zipCode: ?string,
      +city: ?string,
      +email: ?string,
      +phone: ?string,
    |},
    +beneficiaries: ?$ReadOnlyArray<?{|
      +externalId: ?string,
      +civility: ?CivilityEnum,
      +beneficiaryType: ?string,
      +firstName: ?string,
      +lastName: ?string,
      +fullName: ?string,
      +nic: ?string,
      +birthDate: ?string,
    |}>,
    +payments: ?{|
      +iban: ?string,
      +ribUploadId: ?string,
      +ribFilename: ?string,
    |},
  |}
|};
export type QContractQuery = {|
  variables: QContractQueryVariables,
  response: QContractQueryResponse,
|};
*/


/*
query QContractQuery(
  $subscriberId: ID!
) {
  contract(subscriberId: $subscriberId) {
    externalId
    effectDate
    numberOfBeneficiaries
    subscriber {
      externalId
      isBeneficiary
      civility
      firstName
      lastName
      fullName
      birthName
      birthDate
      nic
      address
      zipCode
      city
      email
      phone
    }
    beneficiaries {
      externalId
      civility
      beneficiaryType
      firstName
      lastName
      fullName
      nic
      birthDate
    }
    payments {
      iban
      ribUploadId
      ribFilename
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "subscriberId"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "externalId",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "civility",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "firstName",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "lastName",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "fullName",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "birthDate",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "nic",
  "storageKey": null
},
v8 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "subscriberId",
        "variableName": "subscriberId"
      }
    ],
    "concreteType": "Contract",
    "kind": "LinkedField",
    "name": "contract",
    "plural": false,
    "selections": [
      (v1/*: any*/),
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "effectDate",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "numberOfBeneficiaries",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "ContractSubscriber",
        "kind": "LinkedField",
        "name": "subscriber",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "isBeneficiary",
            "storageKey": null
          },
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "birthName",
            "storageKey": null
          },
          (v6/*: any*/),
          (v7/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "address",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "zipCode",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "city",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "email",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "phone",
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "ContractBeneficiary",
        "kind": "LinkedField",
        "name": "beneficiaries",
        "plural": true,
        "selections": [
          (v1/*: any*/),
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "beneficiaryType",
            "storageKey": null
          },
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
          (v7/*: any*/),
          (v6/*: any*/)
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "Payments",
        "kind": "LinkedField",
        "name": "payments",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "iban",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "ribUploadId",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "ribFilename",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "QContractQuery",
    "selections": (v8/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "QContractQuery",
    "selections": (v8/*: any*/)
  },
  "params": {
    "id": "5d0e9ce7fb867c79f84d4d17b06e03ff",
    "metadata": {},
    "name": "QContractQuery",
    "operationKind": "query",
    "text": null
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '5ea77d381cb6b4ecefd7829659b91ae6';

module.exports = node;
