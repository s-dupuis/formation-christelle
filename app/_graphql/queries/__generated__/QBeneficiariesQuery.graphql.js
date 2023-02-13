/**
 * @flow
 * @relayHash e692c8f1ca88ec0ecce5a8456c31fd22
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CivilityEnum = "M" | "MME" | "%future added value";
export type QBeneficiariesQueryVariables = {|
  subscriberId: string
|};
export type QBeneficiariesQueryResponse = {|
  +getBeneficiaries: ?{|
    +id: ?string,
    +subscriber: ?{|
      +externalId: ?string,
      +civility: ?CivilityEnum,
      +isBeneficiary: ?boolean,
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
    |}>,
    +numberOfBeneficiaries: ?number,
  |}
|};
export type QBeneficiariesQuery = {|
  variables: QBeneficiariesQueryVariables,
  response: QBeneficiariesQueryResponse,
|};
*/


/*
query QBeneficiariesQuery(
  $subscriberId: ID!
) {
  getBeneficiaries(subscriberId: $subscriberId) {
    id
    subscriber {
      externalId
      civility
      isBeneficiary
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
    }
    numberOfBeneficiaries
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
  "name": "nic",
  "storageKey": null
},
v7 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "subscriberId",
        "variableName": "subscriberId"
      }
    ],
    "concreteType": "Beneficiaries",
    "kind": "LinkedField",
    "name": "getBeneficiaries",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
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
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "isBeneficiary",
            "storageKey": null
          },
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
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "birthDate",
            "storageKey": null
          },
          (v6/*: any*/),
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
          (v6/*: any*/)
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "numberOfBeneficiaries",
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
    "name": "QBeneficiariesQuery",
    "selections": (v7/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "QBeneficiariesQuery",
    "selections": (v7/*: any*/)
  },
  "params": {
    "id": "e692c8f1ca88ec0ecce5a8456c31fd22",
    "metadata": {},
    "name": "QBeneficiariesQuery",
    "operationKind": "query",
    "text": null
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'a9545c1a2eaf06c7d042802160b35d31';

module.exports = node;
