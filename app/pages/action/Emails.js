import React, { useState } from 'react';
import { BlockField, Page } from '@@components';

import {
  onDeclarationDeDecesMutation,
  onDeclarationArretTravailMutation,
  onDeclarationMiseInvaliditeMutation,
  onDemandeInformationMutation,
  onAutreMutation,
  onReclamationPrestationMutation,
  onReclamationAdhesionCotisationMutation,
  onDemandeInformationSouscriptionMutation,
  onDemandeCopieContratMutation,
  onChangementAdresseMutation,
  onModifCoordonnesBancairesMutation,
  onDemandeAttestationMademinMutation,
  onProcedureResiliationContratMutation,
  onAutreSouscriptionMutation
} from '@@mutations/email';

const R = require('ramda');

const Com_tailwindEmails = [
  { label: 'Déclaration de décès', action: onDeclarationDeDecesMutation },
  { label: 'Déclaration d’arrêt de travail', action: onDeclarationArretTravailMutation },
  { label: 'Déclaration de mise en invalidité', action: onDeclarationMiseInvaliditeMutation },
  { label: 'Demande d’information', action: onDemandeInformationMutation },
  { label: 'Autre', action: onAutreMutation },
  { label: 'Réclamation prestations', action: onReclamationPrestationMutation },
  { label: 'Réclamation adhésion/cotisation', action: onReclamationAdhesionCotisationMutation },
  { label: 'Demande d’information', action: onDemandeInformationSouscriptionMutation },
  { label: 'Demande de copie de contrat', action: onDemandeCopieContratMutation },
  { label: 'Changement d’adresse', action: onChangementAdresseMutation },
  { label: 'Modification des coordonnées bancaires', action: onModifCoordonnesBancairesMutation },
  { label: 'Demande d’attestation Madelin', action: onDemandeAttestationMademinMutation },
  { label: 'Procédure de résiliation de contrat', action: onProcedureResiliationContratMutation },
  { label: 'Autre Souscription', action: onAutreSouscriptionMutation }
];

const EmailList = ({ recipient }) => {
  const isDisabled = R.isNil(recipient) || R.isEmpty(recipient);

  console.log('State', { recipient, nil: R.isNil(recipient), empty: R.isEmpty(recipient), isDisabled });
  return <div className="grid grid-cols-2 gap-4">

    {Com_tailwindEmails.map((email) => <>
      <div>{email.label}</div>
      <button className="f-button f-button-blue" disabled={isDisabled} onClick={isDisabled ? () => {} : () => { email.action({ email: recipient }, () => console.log('Sent')); }}>Envoyer</button>
    </>)}

  </div>;
};

const Emails = ({}) => {
  const [recipient, setRecipient] = useState('');

  return <>
    <Page title="Émails">
      <BlockField label="Email destinataire (Obligatoire) :">
        <input className="f-input-gray" type="email" value={recipient} onChange={e => setRecipient(e.target.value)} />
      </BlockField>
      <EmailList recipient={recipient}/>
    </Page>
  </>;
};

export default Emails;
